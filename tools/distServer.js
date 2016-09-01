import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

// app.get("/dist/stremio-addons.min.js", function(req, res) {
//   res.sendFile("../node_modules/stremio-addons/browser/stremio-addons.min.js", { root: __dirname }, function(e) { e && console.error(e) });
// });

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
