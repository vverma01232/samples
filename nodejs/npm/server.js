const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Initializ Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://nkspknddghh.s3.ap-south-1.amazonaws.com/securepacks.png"></img>
  </body>
</html>`);
});

app.listen(port);
