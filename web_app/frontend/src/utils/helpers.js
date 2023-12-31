import { useState, useEffect } from "react";

export const useFetch = (uri) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`/api/${uri}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri]);

    return { loading, data, error };
}

export const usePostAPI = (uri, data, type = 'application/json') => {
    const [results, setResults] = useState([]);

    fetch(`/api/${uri}/`, {
        method: 'POST',
        headers: {
            'Content-Type': type
        },
        body: JSON.stringify(data)
    })
        .then(setResults)
        .then(res => res.json())
        .then(res => console.log(res));

    return data;
}