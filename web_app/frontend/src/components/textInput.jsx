const TextInput = ({question, state, setState}) => {


    return (
        <div className={"form-container"}>
            <label className={"question"}>
                {question}
                <textarea value={state} onChange={(e) => setState(e.target.value)} />
            </label>
        </div>
    )
}

export default TextInput;