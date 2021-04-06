const spots = [
  [
    "越前温泉露天風呂「漁火」",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=335",
  ],
  [
    "道の駅越前",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=334",
  ],
  [
    "越前がにミュージアム",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=338",
  ],
  [
    "越前陶芸村",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=433",
  ],
  [
    "悠久ロマンの杜・朋楽の里",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=429",
  ],
  [
    "越前温泉露天風呂「日本海」",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=384",
  ],
  [
    "アクティブハウス越前",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=336",
  ],
  [
    "越前岬水仙ランド",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=274",
  ],
  [
    "呼鳥門",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=266",
  ],
  [
    "越前海岸の水仙畑",
    "https://www.town-echizen.jp/spot/spot01Detail.php?id=262",
  ]
]


addEventListener("fetch", (event) => {
  const spot = spots[Math.floor(Math.random() * spots.length)]

  event.respondWith(
    new Response(,
      JSON.stringify({
        name: spot[0],
        url: spot[1],
      }),
      {
        status: 200,
        headers: {
          server: "denosr",
          "content-type": "application/json",
        },
      }
    )
  );
});
