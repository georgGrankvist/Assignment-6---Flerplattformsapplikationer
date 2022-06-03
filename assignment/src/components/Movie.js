import starImage  from "../images/star.png";
import deleteImage from "../images/delete.png";

function createStars (rating) {
    const arr = [];

    for (let i = 0; i < rating; i++) {
        arr.push(<img src={starImage}></img>);
    }
    return <div>{arr}</div>
}

export function Movie ( props ) {

  const handleClick = (e) => {
    const parent = e.currentTarget.parentNode;
    parent.remove();
  }

   if (props.item.title != "") {
    return (
        <li className="list-group-item list-group-item-secondary mb-2" id = "movie-list-item" 
         data-title = {props.item.title} data-rating = {props.item.rating}>
            <img onClick = {handleClick} className = "delete-movie-icon" src = {deleteImage}></img>
             {createStars (props.item.rating)}
        {props.item.title} </li>
         
    )
    }
}



export default Movie;