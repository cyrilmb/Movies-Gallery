import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
    const dispatch = useDispatch();
    const detailsArr = useSelector(store => store.details.data);

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
                            <button onClick={() => mainMenu()}>Main Menu</button>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default Details;