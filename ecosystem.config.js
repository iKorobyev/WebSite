module.exports = {
  deploy: {
    production: {
      user: "",
      host: "",
      ref: "origin/master",
      repo: "", // <= here will be link for deploy
      path: "",
      "post-deploy": "yarn; yarn build",
    },
  },
}
