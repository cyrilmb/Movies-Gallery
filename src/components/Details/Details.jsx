import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies);



    return (
        <></>
    );
}

export default Details;