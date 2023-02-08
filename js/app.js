// js code here

window.addEventListener("DOMContentLoaded", () => {
  const addForm = document.querySelector("#addForm"),
    inputVal = document.querySelector("#input"),
    seriesList = document.querySelector(".film_list-contents"),
    favourites = document.querySelector(".favorites");

  // existing film - empty
  filmSeries = ["Wednesday", "nimadir"];

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newSeries = inputVal.value; // get input value
    // const favourite = checkbox.checked; // boolen checkbox

    if (newSeries) {
      filmSeries.push(newSeries);
      sortArr(filmSeries);

      createSeriesList(filmSeries, seriesList);
      //   console.log(filmSeries);
    }
    sortArr(filmSeries);
    e.target.reset();
  });

  // sort film
  const sortArr = (arr) => {
    arr.sort();
  };

  function createSeriesList(series, parent) {
    parent.innerHTML = "";
    sortArr(series);

    series.forEach((item, index) => {
      parent.innerHTML += `<li>${
        index + 1
      }. ${item} <div class='hover'> <i class="fa-solid fa-heart"></i> <i class="fa fa-trash"></i></div> </li>`;
    });

    document.querySelectorAll(".fa-trash").forEach((trash, index) => {
      trash.addEventListener("click", () => {
        trash.parentElement.remove();
        filmSeries.splice(index, 1);

        createSeriesList(filmSeries, seriesList);
      });
    });

    // like
    document.querySelectorAll(".fa-heart").forEach((heart, index) => {
      heart.addEventListener("click", (e) => {
        let heartEl = e.target;
        heartEl.classList.toggle("red");

        if (heartEl.classList.contains("red")) {
            alert("Success!");
        } else {
          console.log("qizil emas");
        }
      });
    });
  }

  sortArr(filmSeries);
  createSeriesList(filmSeries, seriesList);
});
