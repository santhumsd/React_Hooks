import React,{useCallback,useState} from 'react'
import Count from './Count';
import Button from './Button';
import Title from './Title';

function UseCallback() {
    const[age,setAge]=useState(24);
    const[salary,setSalary]=useState(28000)
const incrementAge=useCallback(
    ()=>{
        setAge(age+1)
       },
    [age]
)
const incrementSalary=useCallback(
    ()=>{
        setSalary(salary+1000)
    },
    [salary]
)
    return (
        <div>
            <Title/>
            <Count text="age" count={age}/>
            <Button clickHandler={incrementAge}>increment Age</Button>
            <Count text="salary" count={salary}/>
            <Button clickHandler={incrementSalary}>increment Salary</Button>
        </div>
    )
}

export default UseCallback
