const http = require('http')
const port = process.env.PORT || 8080

const requestHandler = (request, response) => {
    response.end(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Initializ Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://nkspknddghh.s3.ap-south-1.amazonaws.com/securepacks.png"></img>
  </body>
</html>`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
