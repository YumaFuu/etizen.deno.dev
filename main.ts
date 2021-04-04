addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("hello", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    })
  );
});
