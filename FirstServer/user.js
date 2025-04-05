const fs = require('fs');

const reqHandler = (req, res) => {
    console.log(req.url, req.method);
  
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Complete Coding</title></head>');
      res.write('<body><h1>Enter Your Details:</h1>');
      res.write('<form action="/submit-details" method="POST">');
      res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
      res.write('<label for="male">Male</label>')
      res.write('<input type="radio" id="male" name="gender" value="male" />')
      res.write('<label for="female">Female</label>')
      res.write('<input type="radio" id="female" name="gender" value="female" />')
      res.write('<br><input type="submit" value="Submit">');
      res.write('</form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
  
    } else if (req.url.toLowerCase() === "/submit-details" &&
          req.method == "POST") {
      const body = [];              //Buffer to store received chunks of data
      req.on('data', (chunk)=>{     //Whenever we get a chunk of data on receiving request, console that chunk of data on screen
          console.log(chunk);       //Prints chunks of data which is not meaningful (doesn't gives the actual data passed on UI of the form created)
          body.push(chunk);         //Store chunks in buffer to finally retrieve meaningful data out of it
      });
  
      req.on('end',()=>{           //Event to know that we have stopped receiving chunks of data as we have received all the available chunks of data
        const fullBody = Buffer.concat(body).toString();    //Getting entire body (meaningful data) from the buffer. Output form key-value seperated by '&' symbol
        console.log(fullBody);
        const params = new URLSearchParams(fullBody);       //Takes parameters(array of arrays) out of the fullBody by breaking them into key-value pairs
  
        /* const bodyObject = {};                          //Stores key-value pair entries
        for(const [key,value] of params.entries()){     //Receives key-value entries from the parameters one-by-one
              bodyObject[key] = value;
        } */
  
        const bodyObject = Object.fromEntries(params);      //Take entries(key-value pair) from params and convert them to object
        console.log(bodyObject);                            //Prints key-value pairs
        fs.writeFileSync('user.txt', JSON.stringify(bodyObject));  //Convert the object(bodyObject) from JSON to string & store it in the file
      });
      
      res.statusCode = 302;                 //Redirect back to the URL mentioned in Location(in this case to the root page i.e. /)
      res.setHeader('Location', '/');
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');
    res.end();
  };

  module.exports = reqHandler;          //Export the function to handle requests and responses by the server