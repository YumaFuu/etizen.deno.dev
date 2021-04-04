addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("あああああああ", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    })
  );
});
