import '../assets/styles/unitool.css'
import ResultTable from "./resultTable";
import Footer from "./footer";

const UniToolOutput = () => {
    return (
        <>
        <div className={"questions-container"}>
        <div className="result-title">
            Wyniki
        </div>
        <ResultTable/>
        </div>
    <Footer/>
        </>
    )
}

export default UniToolOutput;