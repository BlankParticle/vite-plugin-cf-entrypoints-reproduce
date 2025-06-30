import { WorkerEntrypoint } from "cloudflare:workers";

export default class AppService extends WorkerEntrypoint<Env> {
  async fetch(request: Request) {
    if (request.url.includes("favicon"))
      return new Response("Not found", { status: 404 });

    const app1 = await this.env.APP_1.fetch("https://app-1", {
      headers: { Host: "app-1" },
    });
    console.log(app1);
    const app1Response = await app1.text();

    return Response.json({
      message: `Hello, from app-2!`,
      app1Response,
    });
  }
}
