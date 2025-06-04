function InputFields({ label, inputId, placeholder, inputType }) {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input id={inputId} placeholder={placeholder} type={inputType} required className="border rounded-lg focus:outline-2 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
        </div>
    )
}

export default InputFields;