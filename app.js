const heading = document.querySelector('h1');
const url = `https://www.omdbapi.com/?apikey=f0e1bcfc&s=`;
const searchText = document.querySelector('.movies')
const form = document.querySelector('#movies');
const searchResult = document.querySelector('.movie_wrapper')
const results = document.querySelector('#results')

const movieContainer = document.querySelector('.movie_container')
const CatOneTitle = document.querySelector('.CatOneTitle')

const movieContainer_2 = document.querySelector('.movieContainer_2')
const CatTwoTitle = document.querySelector('.CatTwoTitle')

const movieContainer_3 = document.querySelector('.movieContainer_3')
const CatThreeTitle = document.querySelector('.CatThreeTitle')

const card = document.querySelectorAll('.card');

const plot = document.querySelector(".plot");

function movieCatThree(para){

   let output = " ";
    fetch(url + para )
  .then(response => response.json())
  .then(data =>{
    // console.log(data.Search)
    data.Search.forEach(element => {
        // console.log(element)
        
        if(element.Poster !== 'N/A'){

            output +=`
        
        <div class="card" onClick="getID(event)" data-id="${element.imdbID}">       
       
        <img src="${element.Poster }" alt="${element.Title}">
       
        </div>

        `;

        }
        
        
        

    });
    CatThreeTitle.innerHTML = "Category 3";
    movieContainer_3.innerHTML = output;
    

    
  });

}
function movieCatTwo(para){

    let output = " ";
    fetch(url + para )
  .then(response => response.json())
  .then(data =>{
    // console.log(data.Search)
    data.Search.forEach(element => {
        // console.log(element)
        
        if(element.Poster !== 'N/A'){

            output +=`
        
        <div class="card" onClick="getID(event)" data-id="${element.imdbID}">       
       
        <img src="${element.Poster }" alt="${element.Title}">
       
        </div>

        `;

        }
        
        
        

    });
    CatTwoTitle.innerHTML = "Category 2";
    movieContainer_2.innerHTML = output;
    

    
  });

}
function movieCatOne(para){

    let output = " ";
    fetch(url + para )
  .then(response => response.json())
  .then(data =>{
    // console.log(data.Search)
    data.Search.forEach(element => {
        // console.log(element)
        
        if(element.Poster !== 'N/A'){

            output +=`
        
        <div class="card" onClick="getID(event)" data-id="${element.imdbID}">       
       
        <img src="${element.Poster }" alt="${element.Title}">
       
        </div>

        `;

        }
        
        
        

    });
    CatOneTitle.innerHTML = "Category 1";
    movieContainer.innerHTML = output;
    

    
  });

}
//this function get the card id on click, then it store the movie id and redirect the window to movie html
function getID(e){
    let ID = e.target.dataset.id;
    //clicked card movie ID

    localStorage.setItem('ID', ID)
    window.location = 'movie.html'
    // console.log(ID);
    
    
    return false;
    
}
async function getMovie(para){

    let output = " ";
    fetch(url + para )
  .then(response => response.json())
  .then(data =>{
    // console.log(data.Search)
    data.Search.forEach(element => {
        // console.log(element)
        
        if(element.Poster !== 'N/A'){

            output +=`
        
        <div class="card" onClick="getID(event)" data-id="${element.imdbID}">       
       
        <img src="${element.Poster }" alt="${element.Title}">
       
        </div>

        `;

        }
        
        
        

    });
    results.innerHTML = "Search Results";
    searchResult.innerHTML = output;
    

    
  });
  
   
  
  // const apiResponse = await fetch(url + para );
    // const data = await apiResponse.json();
    // return data;



}


function getMovieID(){

    let output = " ";
    let movieID = localStorage.getItem('ID')
    console.log(movieID);
    fetch(`http://www.omdbapi.com/?&apikey=f0e1bcfc&i=${movieID}` )
  .then(response => response.json())
  .then(data =>{
    
    output +=`
        

        <h3>${data.Title}</h3>
<h4><b>Genre: </b><br>${data.Genre}</h4>
        <div class="movieCard" data-id="${data.Actors}">       
       
        <img src="${data.Poster }" class="singleMovie" alt="${data.Title}">
 

<ul class="movie_details">
               <li><b>Year:</b> ${data.Year}</li>
               <li><b>Released: </b> ${data.Released}</li>
               <li><b>Actors:</b> ${data.Actors}</li>
               <li><b>Runtime:</b> ${data.Runtime}</li>
              <li><b>Rate:</b> ${data.Ratings[0].Value}</li>
           </ul>
        
       
        </div>

<p>${data.Plot}</p>

        `;

        plot.innerHTML = output;
    console.log(data)
   
  });

}
function sortMovies(){

    
    getMovie(searchText.value);

}

form.onsubmit = (event)=>{
    event.preventDefault();
    console.log(searchText.value)
   
    sortMovies();

}

movieCatOne("road");
movieCatTwo("america");
movieCatThree("cloud")