import "hono";
import { jsxRenderer } from "hono/jsx-renderer";

declare module "hono" {
  interface ContextRenderer {
    (
      content: string,
      props?: { title?: string; description?: string },
    ): Response;
  }
}

export const renderer = jsxRenderer(
  ({ children, title, description }) => {
    return (
      <html lang="ja">
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </head>
        <body>
          <header>
            <h1>{title}</h1>
            <span>{description}</span>
          </header>
          <main>{children}</main>
          <footer>
            <p>
              <small>&copy; 2023-now WhyK</small>
            </p>
          </footer>
        </body>
      </html>
    );
  },
  {
    docType: true,
  },
);
