import { WorkerEntrypoint } from "cloudflare:workers";

export default class AppService extends WorkerEntrypoint<Env> {
  async fetch(request: Request) {
    return new Response("Hello, from app-1!");
  }
}

export class AdminService extends WorkerEntrypoint<Env> {
  async fetch(request: Request) {
    return new Response("Hello, from app-1 admin!");
  }
}
