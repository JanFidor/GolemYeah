import React from 'react';

const MultiChoiceInput = ({ question, choices, selectedOptions, setSelectedOptions }) => {

    const handleCheckboxChange = (e) => {
        const option = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        }
    }

    return (
        <div className={"form-container"}>
            <label className={"question"}>
                {question}
            </label>
            <div>
                {choices.map(option => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={handleCheckboxChange}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default MultiChoiceInput;