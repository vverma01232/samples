class App
  def content
    '<!DOCTYPE html>
    <html>
      <head>
        <title>Powered By Paketo Buildpacks</title>
      </head>
      <body>
        <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://paketo.io/images/paketo-logo-full-color.png"></img>
      </body>
    </html>'
  end

  def call(env)
    [200, {Rack::CONTENT_TYPE => "text/html", Rack::CONTENT_LENGTH => content.length.to_s}, [content]]
  end
end

run App.new
