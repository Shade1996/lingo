const express = require('express')
const app = express()
const port = 80
const secureport = 443
const path = require("path")
const fs = require("fs")
const http = require('http');
const https = require('https');

//https
const privateKey = fs.readFileSync(path.resolve('./cert/privkey.pem'),'utf-8');
const certificate = fs.readFileSync(path.resolve('./cert/fullchain.pem'),'utf-8');


const credentials = {key: privateKey, cert: certificate};

// const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app);

app.enable('trust proxy');
// set up a route to redirect http to https

app.use (function (req, res, next) {
    if (req.secure) {
            // request was via https, so do no special handling
            next();
    } else {
            // request was via http, so redirect to https
            res.redirect(301,'https://' + req.headers.host + req.url);
    }
});

const session = require('cookie-session');
app.use(
  session({
    secret: "MakeLingoGreatAgain",
    httpOnly: true,  // Don't let browser javascript access cookies.
    secure: true, // Only use cookies over https.
  })
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
app.use(express.static('public'))

app.use('/download', express.static('download'))
// app.use('/download', express.static(path.resolve("./download")))

httpsServer.listen(secureport,()=>{
    console.log(`Example app listening at https://localhost:${secureport}`);
});