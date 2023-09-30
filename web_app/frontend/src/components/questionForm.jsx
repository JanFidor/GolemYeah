import {useState} from "react";
import '../assets/styles/question-form.css'

const QuestionForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        let form_data = new FormData();
        form_data.append('text', text);
        console.log('submitted');
    }

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