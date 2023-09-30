import {useState} from "react";

const TestForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        let form_data = new FormData();
        form_data.append('text', text);
        console.log('submitted');
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