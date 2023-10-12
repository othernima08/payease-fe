import React from 'react'

function CustomInput(props) {
    const { value, label, type, labelClassName, inputClassName, isReadOnly, placeholder, handleChange } = props

    return (
        <React.Fragment>
            {
                isReadOnly ?
                    <React.Fragment>
                        {(label !== undefined && labelClassName !== undefined) && <label className={labelClassName}>{label}</label>}
                        <input className={inputClassName} type={type} placeholder={placeholder} value={value} readOnly />
                    </React.Fragment> :
                    <React.Fragment>
                        {(label !== undefined && labelClassName !== undefined) && <label className={labelClassName}>{label}</label>}
                        <input className={inputClassName} type={type} placeholder={placeholder} value={value} onChange={handleChange} />
                    </React.Fragment>
            }
        </React.Fragment>
    )
}

export default CustomInput