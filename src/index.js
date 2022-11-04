const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', event => {
    event.preventDefault();
    const formInput = event.target.children[1].value;
    // console.log(formInput);

    fetch(`http://localhost:3000/movies/${formInput}`)
      .then(response => response.json())
      .then(movies => {
        const title = document.querySelector("section#movieDetails h4").innerText = movies.title
        const summary = document.querySelector("section#movieDetails p").innerText = movies.summary
      });

  });
}

document.addEventListener('DOMContentLoaded', init);