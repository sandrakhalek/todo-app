import { useState } from "react";
import './InputField.scss';

function InputField(props) {
    const [value, setValue] = useState('');

    const addTask = (value) => {
        value !== '' ? props.addTask(value) : props.pushAlert();
    }

    return (
        <div className="create-block">
            <input
                type="text"
                id="create-input"
                className="create-input top-space-md"
                onKeyPress={(e) => e.key === 'Enter' && addTask(value)}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Write a task"
            />
            <button
                id="create-btn"
                className="create-btn"
                aria-label="Create task"
                onClick={() => addTask(value)}>
                Create
            </button>
        </div>
    )
}

export default InputField;