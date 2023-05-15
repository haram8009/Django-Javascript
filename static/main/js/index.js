window.addEventListener("load", async () => {
  const response = await fetch("/get_articles").then((res) => res.json());
  console.log(response);
  let articleList = response.articles_list.map(
    (item) =>
      `<div onclick="detail(event)">
        <input type='hidden' value="${item.id}" />
        ${item.title}<br/>
        ${item.content}<br/>
        <i>작성자:${item.user_name}</i>
        <p>
          <a href="articles/edit/${item.id}">글 수정</a>
          <a href="articles/destroy/${item.id}">글 삭제</a>
        </p>
      </div>`
  );
  console.log(articleList);
  document.querySelector(".article-list").innerHTML = articleList;
});

const detail = (event) => {
  event.stopPropagation();
  const articleId = event.currentTarget.querySelector("input").value;
  location.href = `articles/${articleId}`;
};
