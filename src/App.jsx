import { useState } from 'react';
import './app.css'
import FormInput from "./components/FormInput";

export default function App() {

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  })

  const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			lable: 'Username',
		},
		{
			id: 2,
			name: 'email',
			type: 'text',
			placeholder: 'Email',
			lable: 'Email',
		},
		{
			id: 3,
			name: 'birthday',
			type: 'text',
			placeholder: 'Birthday',
			lable: 'Birthday',
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			lable: 'Password',
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Confirm Password',
			lable: 'Confirm Password',
		},
  ]

  console.log('re-rendered')

  const handleSubmit = (e)=>{
    e.preventDefault()
    
  }

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
    
  }

  console.log(values)
  return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
        {
          inputs.map(input => <FormInput 
                                  key={input.id}
                                  {...input}
                                  value={values[input.name]}
                                  onChange={onChange}
                                />)
        }
				
        <button>Submit</button>
			</form>
		</div>
  )
}

