import React from 'react'

export default function Signup(){
    const [formData,setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        checkbox: true,
    })
    console.log(formData)

    function handleChange(event){
        const{name,type,value,checked} = event.target
        setFormData((prevFormData) => {
            return {...prevFormData,[name]: type === 'checkbox' ? checked : value}
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        const check = formData.password === formData.confirmPassword ? 'Successfully Signed Up' : 'Passwords to not match'
        console.log(check)
        if(formData.checkbox === true){
            console.log('Thanks for Signing news letter')
        }
    }
    return(
        <div className='row'>
            <div className='col-lg-3'>
                <form onSubmit={handleSubmit} >
                    <h3>Sign Up</h3>
                    <label>Email</label>
                    <input type='email' name='email' className='form-control' placeholder='Enter mail' onChange={handleChange} />
                    <label>Enter Password</label>
                    <input type='password' name='password' id='password' className='form-control' placeholder='Enter Password' onChange={handleChange} />
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' id='confirmPassword' className='form-control mb-3' placeholder='Confirm Password' onChange={handleChange} />
                    <input type='checkbox' name='checkbox' id='checkbox' checked={formData.checkbox} onChange={handleChange} /> 
                    <label htmlFor='checkbox' className='mb-3' style={{marginLeft: '12px'}}> I want to join this newsletter</label>
                    <button className='btn-success'>Sign up</button>
                </form>
            </div>
        </div>
    )
}