// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Martin Dann - Lead Software Engineer with 25 years of full stack development experience. Specializing in modern web technologies, cloud infrastructure, and technical leadership." />
          <title>Martin Dann - Lead Software Engineer | Full Stack Developer</title>
          <link rel="icon" type="image/svg+xml" href="/md.svg" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
