import {useState} from "react";
import '../assets/styles/question-form.css'
import { usePostAPI} from "../utils/helpers";

const QuestionForm = ({setter}) => {
    const [text, setText] = useState('');

    //const handleSubmit = async () => {
        // await fetch(`/api/upload_form_data/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(text)
        // })
        // .then(res => res.json())
        //     .then(res => setter(res))
        //     .then(res => console.log(res));
    //}

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/upload_form_data/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(text)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setter(data);
            //console.log(data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit} className="post-form">
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="test-input" />
                <input type="submit" value="Dalej" />
            </form>
        </div>
    )
}

export default QuestionForm;