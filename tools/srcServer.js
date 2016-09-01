import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import cors from 'cors';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSucccessCode: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204 
  credentials: true
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join( __dirname, '../src/public')));
// app.get("/src/stremio-addons.min.js", function(req, res) {
//   res.sendFile("../node_modules/stremio-addons/browser/stremio-addons.min.js", { root: __dirname }, function(e) { e && console.error(e) });
// });

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});




app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
