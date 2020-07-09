module.exports = {
  purge: {
    enabled:
      process.env.CONTEXT == "production" ||
      process.env.NODE_ENV == "production",
    content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  },
  theme: {},
}
