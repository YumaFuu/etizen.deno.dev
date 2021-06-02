import { Spots } from "../lib/spot.ts";

export async function IndexHandler() {
  const res: string =  JSON.stringify({
    spots: Spots,
  })

  return new Response(res)
}
