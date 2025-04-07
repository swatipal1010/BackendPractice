const sumReqHandler = (req,res)=>{
    console.log("In Sum Request Handler", req.url);
    const body=[];
    req.on('data',chunk => body.push(chunk));
    req.on('end', ()=>{
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        //we put the response here, after we have received all the chunks of data (i.e. when retreival of data ends).
        //If we put this response outside the request block(outside end block), due to asynchronous execution, response will execute first before all chunks of data from request is received giving undefined result for sum of numbers.
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>Calcultor</title></head>
                <body>
                    <h1>Your sum is: ${result}</h1>
                </body>
            </html>
        `);
        return res.end();
    });
    
   
}

exports.sumReqHandler = sumReqHandler;