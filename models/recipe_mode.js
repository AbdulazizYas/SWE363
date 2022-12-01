//query the database to return an array of recipes from the recipes table.
const getAllRecipes = () => {};

//query the database to return one object holding all the details of the recipe with the id given. Return data from the recipes, ingredients, and method table.
const getRecipeDetail = (recipe_id) => {};

//query the comments table to return a list of all the comments for the recipe with the given id.
const getComments = (recipe_id) => {};

//inserts in the comments table the comment given. Note the comment parameter is an object that holds the author and the text. And returns metadata about the inserted row.
const addComment = (recipe_id, comment) => {};

module.exports = {
  getAllRecipes,
  getComments,
  getRecipeDetail,
  addComment,
};
