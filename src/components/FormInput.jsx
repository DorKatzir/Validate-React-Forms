/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './formInput.css'

export default function FormInput(props) {
    const { lable, errorMessage, onChange, id, ...inputProps } = props
	return (
		<div className='formInput'>
			<label>{lable}</label>
			<input {...inputProps} onChange={onChange} />
			<span>{errorMessage}</span>
		</div>
	)
}
