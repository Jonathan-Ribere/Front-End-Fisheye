(async function noName() {
  const articleId = getArticleId();
  console.log(articleId);
  const article = await getArticle(articleId);
  display(article);
})();

function getArticleId() {
  //Permet de recup l'id dans l'url
  return new URL(location.href).searchParams.get("id");
}

function getArticle(articleId) {
  const response = fetch(`/data/photographers.json/${articleId}`);
  const data = response.json();
  return data;
}

function display(article) {}

/*async function getProfil() {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  return data;
}
*/
