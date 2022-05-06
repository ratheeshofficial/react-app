import React,{useCallback} from 'react'
import Title from './title'
import Count from './count'
import Button from './button'

export default function ParentComponent(){
    const [age,setAge] = React.useState(25)

    const [salary,setSalary] = React.useState(50000)

    const handleAge = React.useCallback( () => {
        setAge(age + 1)
    },[age])

    const handleSalary = React.useCallback( () =>{
        setSalary(() => salary + 1000)
    },[salary])

    return(
        <>
            <Title />
            <Count text='Age' count={age}  />
            <Button handleClick = {handleAge} >Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick = {handleSalary} >Increment Salary</Button>
        </>
    )
}