import React from 'react'

export default function Form(){
    // const [firstName,setFirstName] = React.useState("")

    // const [lastName,setLastName] = React.useState('')

    const [formData,SetFormData] = React.useState(
        {
            firstName: '',
            lastName: '',
            email:'',
            comments:'',
            isFriendly: true,
            employment: '',
            favColor: ''

        }
    )

    // console.log(firstName,lastName)

    // function handleFirstName(event){
    //     setFirstName(event.target.value)
    // }

    // function handleLastName(event){
    //     setLastName(event.target.value)
    // }
    console.log(formData)

    function handleChange(event){
        // console.log(event)
        SetFormData((prevFromData)=>{
            // console.log(prevFromData)
            const {name,value,type,checked} = event.target
            return {
                ...prevFromData,[name]:type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
   
    return(
        <div className='row my-5'>
            <div className='col-lg-3'>
                <form onSubmit = {handleSubmit}>
                    <input type='text' placeholder='First Name' onChange = {handleChange} name='firstName' className='my-3 form-control' value={formData.firstName}  />
                    <input type='text' placeholder='Last Name' onChange = {handleChange} name='lastName' className='mb-3 form-control' value={formData.lastName} />
                    <input type='email' placeholder='Enter E-mail' onChange = {handleChange} name='email' className='mb-3 form-control' value={formData.email} />
                    <textarea name='comments' placeholder='Enter Comments'  onChange = {handleChange} value={formData.value} className='mb-3 form-control' />
                    <input id='isFriendly' type='checkbox' name='isFriendly' onChange = {handleChange} checked={formData.isFriendly} /> <label htmlFor='isFriendly'>Are you Friendly</label><hr />
                    <fieldset>
                        <legend>Current employment</legend>
                        <input type = 'radio' id='unemployed' name='employment' onChange = {handleChange} value='unemployed' checked={formData.employment === 'unemployed'} /> <label htmlFor='unemployed'>unemployed</label><br />
                        <input type = 'radio' id='part-time'name='employment' onChange = {handleChange} value='part-time' checked={formData.employment === 'part-time'} /> <label htmlFor='part-time'>Part-Time</label><br />
                        <input type = 'radio' id='full-time' name='employment' onChange = {handleChange} value='full-time' checked={formData.employment === 'full-time'} /> <label htmlFor='full-time'>Full-Time</label><br />
                    </fieldset>
                    <hr />
                    <label htmlFor='favColor'>What is your Favourite Color</label>
                    <select id='favColor' name='favColor' checked={formData.favColor} onChange={handleChange} className='form-control mb-3'>
                        <option>Choose one</option>
                        <option value='Red'>Red</option>
                        <option value='Green'>Green</option>
                        <option value='Yellow'>Yellow</option>
                        <option value='Blue'>Blue</option>
                    </select>
                    <button className='btn-success'>Button</button>
                </form>
            </div>
        </div>
    )
}