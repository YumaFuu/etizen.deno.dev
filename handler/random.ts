import { Spots } from "../lib/spot";

export async function Handler() {
  const i = Math.floor(Math.random() * Spots.length);

  const res: string =  JSON.stringify({
		spot: Spots[i],
  })

  return new Response(res)
}
