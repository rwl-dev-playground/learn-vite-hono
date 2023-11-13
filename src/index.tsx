import { Hono } from "hono";
import { renderer } from "./renderer";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(
    <section>
      <h2>Hello!!!!</h2>
      <p />
    </section>,
    {
      title: "Learn Vite Hono",
      description: "HonoのViteテンプレートを学ぶ場所",
    },
  );
});

export default app;
