let searchInputElement = document.getElementById("searchInput");
let inputIdElement = document.getElementById("inputId");
let spinnerEl = document.getElementById("spinnerId");
let searchResultEl = document.getElementById("searchResult");
let imageResultEl = document.getElementById("imageResult");
let textResultEl = document.getElementById("textResult");

function createAppendResult(result) {
    console.log(result);
    let {
        Title,
        Actors,
        Awards,
        BoxOffice,
        Country,
        Director,
        DVD,
        Genre,
        imdbRating,
        imdbVotes,
        Language,
        Plot,
        Poster,
        Rated,
        Released,
        Year,
        Writer
    } = result;
    //console.log(Title);
    if (Title === undefined) {
        let createImageEl = document.createElement("img");
        createImageEl.src = "https://static.vecteezy.com/system/resources/thumbnails/018/972/596/small/oops-comic-book-explosion-png.png";
        imageResultEl.appendChild(createImageEl);

        let createMovieH1 = document.createElement("h1");
        createMovieH1.innerHTML = "Movie Not Found";
        imageResultEl.appendChild(createMovieH1);
    } else {
        let createImageEl = document.createElement("img");
        createImageEl.src = Poster;
        imageResultEl.appendChild(createImageEl);
        //p1
        let createMovieH = document.createElement("p");
        createMovieH.innerHTML = "Movie Name:  " + Title;
        textResultEl.appendChild(createMovieH);
        //p2
        let createMoviep1 = document.createElement("p");
        createMoviep1.innerHTML = "Description:  " + Plot;
        textResultEl.appendChild(createMoviep1);
        //p3
        let createMoviep2 = document.createElement("p");
        createMoviep2.innerHTML = "Country:  " + Country;
        textResultEl.appendChild(createMoviep2);
        //p4
        let createMoviep3 = document.createElement("p");
        createMoviep3.innerHTML = "Stars:  " + Actors;
        textResultEl.appendChild(createMoviep3);
        //p5
        let createMoviep4 = document.createElement("p");
        createMoviep4.innerHTML = "Director:  " + Director;
        textResultEl.appendChild(createMoviep4);
        //p6
        let createMoviep5 = document.createElement("p");
        createMoviep5.innerHTML = "Language:  " + Language;
        textResultEl.appendChild(createMoviep5);

        //p7
        let createMoviep6 = document.createElement("p");
        createMoviep6.innerHTML = "Released Date:  " + Released;
        textResultEl.appendChild(createMoviep6);
        //p7
        let createMoviep7 = document.createElement("p");
        createMoviep7.innerHTML = "Writer:  " + Writer;
        textResultEl.appendChild(createMoviep7);




    }
}

function searchFunction() {
    let inputValue = inputIdElement.value;
    let url = "https://www.omdbapi.com/?apikey=b2647f6f&t=" + inputValue;
    //console.log(url);
    let options = {
        method: "GET",

    }

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            createAppendResult(data);

        });


}