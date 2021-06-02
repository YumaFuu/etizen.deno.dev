import { Spots } from "../lib/spot.ts";

export async function RandomHandler() {
  const i = Math.floor(Math.random() * Spots.length);

  const res: string =  JSON.stringify({
		spot: Spots[i],
  })

  return new Response(res)
}

