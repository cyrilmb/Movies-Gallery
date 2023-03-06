import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import './Details.css';

function Details() {
    //getting array of movie info from store
    const detailsArr = useSelector(store => store.details.data);
    const history = useHistory();

    console.log('MOVIE DETAILS', detailsArr);


    return (
        <div >
            <h2>MOVIE DETAILS</h2>
            <div className='details-container'>
                {detailsArr?.map((detail, i) => {
                    return (
                        <div className='card' key={i}>
                            <h3>{detail.title}</h3>
                            <img src={detail.poster} alt="" />
                            <h3>Description</h3>
                            <p>{detail.description}</p>
                            <h3>Genres</h3>
                            <p>{detail.genres}</p>
                            <button onClick={() => history.push('/')}>Main Menu</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Details;