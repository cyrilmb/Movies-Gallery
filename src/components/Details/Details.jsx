import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
    const dispatch = useDispatch();
    const detailsArr = useSelector(store => store.details.data);

    // console.log('MOVIE DETAILS', details.data);


    return (
        <div>
            <h2>DETAILS</h2>
            <section className='details'>
                {detailsArr?.map((detail, i) => {
                    return (
                        <div key={i}>
                            <img src={detail.poster} alt="" />
                        </div>
                    );
                })}
            </section>
        </div>

    );
}

export default Details;