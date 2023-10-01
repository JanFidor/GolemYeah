import MultiChoiceButton from "./multiChoiceButton";
import {useState} from "react";

const MultiChoiceInput = ({question, choices, state, setState}) => {

    const [choice0, setChoice0] = useState(0);
    const [choice1, setChoice1] = useState(0);
    const [choice2, setChoice2] = useState(0);
    const [choice3, setChoice3] = useState(0);

    return (
        <div className={"form-container"}>
            <label className={"question"}>
                {question}
            </label>
            {choices.map(option =>
               <MultiChoiceButton choice={option} state={state} setState={setState}/>)}
        </div>
    )
}

export default MultiChoiceInput;