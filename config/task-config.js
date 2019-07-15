module.exports = {
  html: true,
  images: true,
  fonts: true,
  static: true,
  svgSprite: false,
  ghPages: true,
  stylesheets: true,

  javascripts: {
    entry: {
      app: ["./app.js"],
    }
  },

  images: {
    extensions: ["webp", "jpg", "png", "svg", "gif"]
  },

  browserSync: {
    server: {
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  }
}
