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
          <title>{title}</title>
          <meta name="description" content={description} />
        </head>
        <body>
          <header>
            <h1 class="text-4xl font-bold">{title}</h1>
            <span>{description}</span>
          </header>
          <main class="mt-5">{children}</main>
          <footer class="mt-5">
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
