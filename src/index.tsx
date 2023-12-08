import { Hono } from "hono";
import { renderer } from "../middleware/renderer";
import { twindInject } from "../middleware/twind";
import config from "../twind.config";

const app = new Hono();

app.get("*", renderer);
app.get("*", twindInject(config));

app.get("/", (c) => {
  return c.render(
    <section>
      <h2 class="text-3xl font-bold">Hello!!!!</h2>
      <p class="text-red-600">テスト</p>
    </section>,
    {
      title: "Learn Vite Hono",
      description: "HonoのViteテンプレートを学ぶ場所",
    },
  );
});

export default app;
