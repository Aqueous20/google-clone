//
import API_KEY from "../components/keys.jsx";
import { useState, useEffect } from "react";

const CONTEXT_KEY = "a1f0eb72141514b9a";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}` 
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])

    return {data}
};

export default useGoogleSearch;
