const express = require ("express");
const app = express();

let port = 8080;


app.get("/", (req, res) => {
  console.log("request received on home page");
  let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul><p>Try visiting /apple or /orange in your browser!</p>";
  res.send(code);
});


// app.get("/apple", (req, res) => {
 
//   res.send("<h1>Apple</h1><p>Apples are red and delicious.</p>");
// });


// app.get("/orange", (req, res) => {
  
//   res.send("<h1>Orange</h1><p>Oranges are orange and juicy.</p>");
//   console.log("request received on /orange");
// });

// app.get('/users/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`Searching for user with ID: ${userId}`);
// });
app.get('/:username/:id', (req, res) => {
  const { username, id } = req.params;
  let htmlstr = `<h1> this account belongs to: ${username}, ID: ${id}</h1>`;
  res.send(htmlstr);
  console.log(`request received by :${username}/:id ${id}`);
});
// app.get('/search', (req, res) => {
//   console.log(req.query);
//   res.send("no results found");
// });

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});