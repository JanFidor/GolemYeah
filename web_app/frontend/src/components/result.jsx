import { useFetch } from "../utils/helpers";

const Result = ({results}) => {
    // const { loading, data, error } = useFetch('result');
    // if (loading) return <h1>Loading...</h1>;
    // if (error) return <h1>{JSON.stringify(error)}</h1>;

    console.log(results);

    return (
        <div className="result-div">
            <p className="result">{results.name}</p>
        </div>
    )
}

export default Result;