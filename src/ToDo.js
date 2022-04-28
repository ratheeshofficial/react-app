import React, { useState, useEffect } from 'react';
export default function ToDo(props){
    const [formData,setFormData] = React.useState({
        note: '',
      })
      const [value,setInputValue] = React.useState([])

      const [checked, setChecked] = React.useState(true)
      
      const [completed, setCompleted] = useState([])

    //   useEffect(()=>{
    //     console.log('inputvalues', value)
    //     console.log('completd', completed)
    //   },[value, completed])

      function handleOnChange(event){
        const {name,value} = event.target
        setFormData((prevFormData) =>{
            return {...prevFormData, [name]: value}
        })
      }
      
    //   console.log({formData})
      
      function handleClick(){
        setInputValue((prevInputValue) =>{
            return [...prevInputValue,formData.note]
        })
        setFormData({note:''})
      }

    function handleCheckbox(completedValue,index){
        console.log(completedValue,`${index}`)
        // console.log(index)
        // completedValue.splice(index,1)
       
        setCompleted((prevCompleted) =>{
           return [...prevCompleted, completedValue]
        })
        checked ? value.splice(index,1) : console.log('not deleted')
        setInputValue([...value])
    }
    
    function undoHandleCheckbox(value,index){
        setInputValue((prevValue) =>{
            return [...prevValue,value]
        })
        checked ? completed.splice(index,1) : console.log('not Checked')
        setCompleted([...completed])
    }
    const styles = {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
    // const stylesNone = {
    //     textDecorationLine: 'none',
    // }
    const completedNotes = completed.map((CompletedValue,key) =>{
        return (
            <>
            <table className='border border-dark p-5 w-75'>
                <tr className='p-3'>
                    <td className='p-2'>
                        <input type='checkbox' onChange = {()=>{
                            undoHandleCheckbox(CompletedValue,key)
                        }} />
                        <span style={styles} key={`completed-key${key}`}> {CompletedValue}</span>
                    </td>
                </tr>
            </table>
            </>
        )
    })

    function handleDelete(index){
        console.log({index})
        value.splice(index,1)
        setInputValue([...value])
    }
   
    const noteValues =  value.map((values,key) =>{
        // console.log('key', key)
        return( 
            <>
            <table className='border border-dark p-5 w-75'>
                <tr className='p-3'>
                    <td className='p-2'>
                        <input type='checkbox' name='checkbox' onChange={()=>{
                            handleCheckbox(values,key)
                        }} />
                        <span  key={`To-do-list${key}`}> {`${values}`} 
                            <button className='btn btn-danger px-2 py-0 ml-2' onClick={()=>{handleDelete(key)}}> x </button>
                        </span>
                    </td>
                </tr>
            </table>
            </>
        )
    })

    return(
        <>
        <div className='row'>
            <div className='col-lg-8'>
                <input className='border-0 p-2 bg-secondary bg-gradient my-3'
                        onChange={handleOnChange} 
                        type = 'text' 
                        placeholder ='Enter Notes'
                        name = 'note'
                        value = {formData.note}
                    />
                <button className='px-3 py-2 border' onClick={handleClick}>+</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-4'>
                <h3>{ value.length > 0  ? 'To Do' : ''}</h3>
                {noteValues}
            </div>
            <div className='col-lg-4'>
                <h3>{ completed.length > 0  ? 'Completed' : ''}</h3>
                {completedNotes}
            </div>
        </div>
         </>
    )
}