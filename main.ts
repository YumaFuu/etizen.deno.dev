import { serve } from "https://deno.land/x/sift/mod.ts";
import * as index from "./handler/index";
import * as random from "./handler/random";

serve({
	"/": index.Handler,
	"/random": random.Handler,
	404: () => new Response("oh boy")
});
