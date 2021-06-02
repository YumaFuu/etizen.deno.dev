import { serve } from "https://deno.land/x/sift/mod.ts";
import { IndexHandler } from "./handler/index.ts";
import { RandomHandler } from "./handler/random.ts";

serve({
	"/": IndexHandler,
	"/random": RandomHandler,
	404: () => new Response("oh boy")
});
