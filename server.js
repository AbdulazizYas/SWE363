const express = require("express");
const nunjucks = require("nunjucks");
const {
  getAllRecipes,
  getComments,
  getRecipeDetail,
  addComment,
} = require("./models/recipe_mode");

const app = express();
const port = 8000;

nunjucks.configure("views", { express: app });
app.use(express.static("public"));
app.use(express.json());

//render the index.html template passing it the list of recipes returned by the getAllRecipes().
app.get("/", async (req, res) => {});

//render the recipe.html template passing it the details of the recipe returned by the getRecipeDetail(recipe_id)
app.get("/recipes/:recipe_id", async (req, res) => {});

//send a JSON encoding of the list of comments returned by the getComments(recipe_id).
app.get("/recipes/:recipe_id/comments", async (req, res) => {});

//extract the comment from the form request. Send a JSON encoding of the metadata returned by the addComment(recipe_id,comment)
app.post("/recipes/:recipe_id/comments", async (req, res) => {});

app.listen(port, function () {
  console.log(`Server listening on port http://127.0.0.1:${port}!`);
});
