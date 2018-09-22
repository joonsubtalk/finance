import React from 'react'

const InputField = (props) => {

  const { field, type, populatedValue, updateField } = props;

  return (
    <div className="o-inputField">
        <label className="o-inputField__label" htmlFor={field}>{field}</label>
        <input onChange={(e)=> updateField(e)}
            className="o-inputField__input"
            type={type}
            name={field}
            id={field}
            value={populatedValue}
        />
    </div>
  )
}

export default InputField

