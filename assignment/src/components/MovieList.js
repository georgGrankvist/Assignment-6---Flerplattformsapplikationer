import { Component } from "react";
import starImage  from "../images/star.png";
import deleteImage from "../images/delete.png";



export function createMovie  (rating, title ) {
    const movieList = document.getElementById("movies");
    const item = document.createElement('li');
    var movieTitle = document.createTextNode(title);
    item.setAttribute("class", "list-group-item list-group-item-secondary mb-2");
    item.appendChild(movieTitle);
    item.setAttribute("id","movie-list-item")
    item.setAttribute("data-rating", rating);
    item.setAttribute("data-title",title);

    for (let i = 0 ; i < rating; i++) {
        const starImg = document.createElement("img");
        starImg.setAttribute("src",starImage);
        item.appendChild(starImg);
    }
   
    const deleteImg = document.createElement("img");
    deleteImg.setAttribute("src",deleteImage);
    deleteImg.setAttribute("class","delete-movie-icon")
    deleteImg.addEventListener("click",function () {
        this.parentElement.remove();
    })

    item.appendChild(deleteImg);


    movieList.appendChild(item);

}


  

class MovieList extends Component{
    
    constructor(props) {
        super(props);

    }

    onClickNumerically() {
        var stores_li = document.querySelectorAll('#movie-list-item');

        [].slice.call(stores_li).sort(function(a, b) {
            var numA = a.getAttribute('data-rating');
            var numB = b.getAttribute('data-rating');
            return (numA > numB) ? -1 : (numA < numB) ? 1 : 0;
        })
          .forEach(function(el) {el.parentNode.appendChild(el)})
    }

    onClickAlphaBetically () {
        console.log("hej")
        var stores_li = document.querySelectorAll('#movie-list-item');
        console.log(stores_li);

        [].slice.call(stores_li).sort(function(a, b) {
            var textA = a.getAttribute('data-title').toLowerCase()
            var textB = b.getAttribute('data-title').toLowerCase()
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
          .forEach(function(el) {el.parentNode.appendChild(el)})
    }

    render () {
        return (
        <div style={{width:750}}>
            <h2 className="mt-3">Inlagda Filmer</h2>
            <ul id='movies' class="list-group"> </ul>
            <button id="button1" onClick = {this.onClickAlphaBetically} class="btn btn-primary mr-2">Alfabetisk ordning</button>
            <button id="button2" onClick = {this.onClickNumerically} class="btn btn-primary mr-2">Betygsordning</button>

        </div>
        );
    }
}

export default MovieList;