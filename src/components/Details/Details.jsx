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
                            <p>{detail.description}</p>
                        </div>
                    );
                })}
            </section>
        </div>

    );
}

export default Details;