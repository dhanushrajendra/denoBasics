import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const server = serve({ port: 3030 });
for await (const req of server) {
    req.respond({ body: "Hello World\n" });
}