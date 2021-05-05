const dadJokeButton = document.getElementsByClassName("js-dad-joke-button")[0];

const fetchDadJoke = async () => {
  try {
    const apiUrl = `https://icanhazdadjoke.com/`;
    let res = await fetch(apiUrl, {
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};

const renderDadJoke = async () => {
  const dadJokeParagraph = document.getElementsByClassName("js-dad-joke")[0];
  dadJokeParagraph.innerHTML = "";
  const data = await fetchDadJoke();
  console.log(data);
  const paragraphContent = document.createTextNode(data.joke);
  dadJokeParagraph.appendChild(paragraphContent);
  renderImgWithDadJoke(data.id);

  // movieGenresList[0].append(li);
};

const renderImgWithDadJoke = (dadJokeId) => {
  const dadJokeImg = document.querySelector(".dad-joke-img img");
  dadJokeImg.setAttribute("src", ``);
  dadJokeImg.setAttribute(
    "src",
    `https://icanhazdadjoke.com/j/${dadJokeId}.png`
  );
};

dadJokeButton.addEventListener("click", renderDadJoke);
