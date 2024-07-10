module.exports = {
    rewrites: () => [
      {
        source: "/api",
        destination: "http://44.223.115.155:5000/api/selection",
      },
    ],
  }