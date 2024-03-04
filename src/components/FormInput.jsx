/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './formInput.css'

export default function FormInput(props) {
	const { label, errorMessage, onChange, id, ...inputProps } = props
	const [focused, setFocused] = useState(false)
	
	const handleFocus = (e)=>{
		setFocused(true)
	}
	
	return (
		<div className='formInput'>
			<label>{label}</label>
			<input
				className={label === 'Username' ? 'firstLetter' : "false"}
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={()=>inputProps.name === 'confirmPassword' && setFocused(true) }
				focused={focused.toString()}
			/>

			<span>{errorMessage}</span>
		</div>
	)
}
