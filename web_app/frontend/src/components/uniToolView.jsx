import '../assets/styles/unitool.css'
import Footer from "./footer";
import {useState} from "react";
import {postAPI} from "../utils/helpers";

const UniToolView = () => {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [option1, setOption1] = useState('');

    const handleSubmit = () => {
        let form_data = new FormData();
        form_data.append('text1', text1);
        form_data.append('text2', text2);
        postAPI('upload_form_data', {form_data});
    }

    return (
        <>
        <div className="questions-container">
            <h1 className={"question-title"}>Ankieta</h1>

            <form className={"form-container"} onChange={setText1}>
                <label className={"question"}>
                    Opisz swoje hobby i zainteresowania, które chcesz rozwijać podczas studiów
                    <textarea/>
                </label>
            </form>

            <form className={"form-container"} onChange={setText2}>
                <label className={"question"}>
                    Czy interesuje cię matematyka?
                </label>
                <select value={option1} onChange={setOption1}>
                    <option value="tak">Tak</option>
                    <option value="nie">Nie</option>
                    <option value="nie wiem">Nie wiem</option>
                </select>

            </form>
            <button className={"button-tool"} onClick={handleSubmit}>Wyślij</button>
        </div>
    <Footer/>
            </>
    )
}

export default UniToolView;