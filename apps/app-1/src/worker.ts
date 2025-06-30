import { DurableObject, WorkerEntrypoint } from "cloudflare:workers";

export default class AppService extends WorkerEntrypoint<Env> {
  async fetch(request: Request) {
    const id = this.env.COUNTER.idFromName("counter");
    const counter = this.env.COUNTER.get(id);
    await counter.decrement();
    return Response.json({
      message: "Hello, from app-1!",
      count: await counter.getCount(),
    });
  }
}

export class AdminService extends WorkerEntrypoint<Env> {
  async fetch(request: Request) {
    return new Response("Hello, from app-1 admin!");
  }
}

export class Counter extends DurableObject {
  private count: number;

  constructor(ctx: DurableObjectState, env: Env) {
    super(ctx, env);
  }

  fetch(request: Request) {
    return new Response("Hello, from app-1 counter!");
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}
