const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
    req.on('data', (chunk)=>{     //Whenever we get a chunk of data on receiving request, console that chunk of data on screen
        console.log(chunk);       //Prints chunks of data which is not meaningful (doesn't gives the actual data passed on UI of the form created)
    });
    fs.writeFileSync('user.txt', 'Dummy');
    res.statusCode = 302;                 //Redirect back to the URL mentioned in Location(in this case to the root page i.e. /)
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

