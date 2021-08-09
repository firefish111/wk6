const expr = require("express"),
      app  = expr(),
      serv = require("http").createServer(app),
      sass = require("node-sass-middleware"),
      disc = require("discord.js");

app.use(sass({
  src: __dirname,
  dest: `${__dirname}/public`,
  outputStyle: 'compressed',
}));

app.set("view engine", "pug");
app.use(expr.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.render("index.pug");
});

serv.listen(6111);