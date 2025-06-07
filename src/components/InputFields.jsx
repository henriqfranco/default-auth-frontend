function InputFields({ label, inputId, placeholder, inputType, value, onChange }) {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor={inputId}>
                {label}
            </label>
            <input
                id={inputId}
                placeholder={placeholder}
                type={inputType}
                required
                value={value || ''}
                onChange={handleChange}
                className="border rounded-lg focus:outline-2 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
        </div>
    );
}

export default InputFields;