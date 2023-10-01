const MultiChoiceButton = ({choice, state, setState}) => {

    return (
        <div className={"form-container"}>
            <button className={state === 1 ? 'selected' : ''} onClick={setState(1)}>{choice}</button>
        </div>
    )
}

export default MultiChoiceButton;