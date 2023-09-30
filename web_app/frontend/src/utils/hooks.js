

export const getAPI = (uri) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(uri, {
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

export const postAPI = (uri, type, data) => {
    fetch(`/api/${uri}/`, {
        method: 'POST',
        headers: {
            'Content-Type': type
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res));
}