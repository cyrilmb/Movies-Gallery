import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Details() {
    const dispatch = useDispatch();
    const detailsArr = useSelector(store => store.details.data);
    const history = useHistory();

    console.log('MOVIE DETAILS', detailsArr);


    return (
        <div>
            <h2>DETAILS</h2>
            <section className='details'>
                {detailsArr?.map((detail, i) => {
                    return (
                        <div key={i}>
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
            </section>
        </div>
    );
}

export default Details;