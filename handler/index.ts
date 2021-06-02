import { Spots } from "../lib/spot";

export async function Handler() {
  const res: string =  JSON.stringify({
    spots: Spots,
  })

  return new Response(res)
}
