/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

fetch("http://localhost:4000/api/article")
.then( data) => data.json()
.then( jsonListArticle = > {
  console.log(jsonListArticle);
});