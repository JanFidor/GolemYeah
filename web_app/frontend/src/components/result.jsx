import { getAPI } from "../utils/helpers";

const Result = () => {
    const { loading, data, error } = getAPI('/api/get_comments/' + id);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{JSON.stringify(error)}</h1>;

    return (
        <div className="result-div">
            <p className="result">{data}</p>
        </div>
    )
}

export default Result;