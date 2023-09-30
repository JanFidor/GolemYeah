import {useState} from "react";
import { postAPI, getAPI } from "../utils/helpers";

const TestForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        let form_data = new FormData();
        form_data.append('text', text);
        postAPI('upload_form_data', {text: text});
    }

    return (
        <div className="test-form-div">
            <form onSubmit={handleSubmit} className="post-form">
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="test-input" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default TestForm;