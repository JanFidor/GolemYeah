import QuestionForm from "./questionForm";
import '../assets/styles/unitool.css'
import Footer from "./footer";
import Result from "./result";
import { useState } from "react";

const UniToolView = () => {
    const [results, setResults] = useState('');

    return (
        <>
            <div className="question">
                Pytanie 1
            </div>
            <QuestionForm setter={setResults} />
            <Result results={results} />
            <Footer/>
        </>
    )
}

export default UniToolView;