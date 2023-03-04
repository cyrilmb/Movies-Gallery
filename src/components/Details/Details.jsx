import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
    const dispatch = useDispatch();
    const details = useSelector((store) => store.details);

    console.log('MOVIE DETAILS', details);

    return (
        <h2>DETAILS</h2>
    );
}

export default Details;