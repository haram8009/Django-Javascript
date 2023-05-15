console.log(document.querySelector("h1"));
console.log(`유저아이디는 ${userId}`);

window.addEventListener("load", () => {
  console.log(liked);
  liked = Number(liked);
  color = liked === 1 ? "blue" : "red";
  document.querySelector("#like").style.backgroundColor = color;
  document.querySelector("#like").style.color = "white";
});

document.querySelector("#like").addEventListener("click", async (event) => {
  const response = await fetch(`${likeUrl}?user=${userId}`).then((res) =>
    res.json()
  );
  console.log(response);

  if (response.message === "created") {
    // console.log(event.target);
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
  } else {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
  }
  event.target.textContent = ` ♥ ${response.count}`;
});
