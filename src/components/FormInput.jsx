/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './formInput.css'

export default function FormInput(props) {
    const { label, errorMessage, onChange, id, ...inputProps } = props
	return (
		<div className='formInput'>
			<label>{label}</label>
			<input className={label==='Username'&&'firstLetter'} {...inputProps} onChange={onChange} />
			<span>{errorMessage}</span>
		</div>
	)
}
