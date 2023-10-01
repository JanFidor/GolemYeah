const SingleChoiceInput = ({question, choices, state, setState}) => {


    return (
        <div className={"form-container"}>
            <label className={"question"}>
                {question}
            </label>
            <select value={state} onChange={setState}>
                {choices.map(option =>
                    <option value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default SingleChoiceInput;