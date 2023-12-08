import { createMiddleware } from "hono/factory";
import { inline, install } from "@twind/core";

// biome-ignore lint/suspicious/noExplicitAny: defineConfigとinstallのconfig引数で大きく型定義が異なるため
export const twindInject = (config: any) => {
  install(config);

  return createMiddleware(async (ctx, next) => {
    await next();

    if (!ctx.res.body) return;

    const stream = ctx.res.body.pipeThrough(new TextDecoderStream());
    const buffer: string[] = [];

    for await (const chunk of stream) {
      buffer.push(chunk);
    }

    const html = buffer.join();
    const insertedHtml = inline(html);

    ctx.res = new Response(insertedHtml, ctx.res);
  });
};
