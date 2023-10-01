import '../assets/styles/unitool.css'
import ResultTable from "./resultTable";
import Footer from "./footer";
import {useNavigate} from "react-router-dom";

const UniToolOutput = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }

    return (
        <>
        <div className={"questions-container"}>
        <div className="result-title">
            Rekomendowane kierunki
        </div>
        <ResultTable/>
        </div>
            <button className={"button"} onClick={handleBack}>Powrót do strony głównej</button>
    <Footer/>
        </>
    )
}

export default UniToolOutput;