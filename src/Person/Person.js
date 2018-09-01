import React from 'react';
import './Person.css';
const person = (props) =>{
    return (
        <div className="Person">
             <p >I am {props.name} my age is {props.age}</p>
             <p> { props.children }</p>
             <input type="text" onChange={props.changed} value={props.name}/>
             &nbsp;&nbsp;<button className="btn btn-primary">Edit</button>
             &nbsp;&nbsp;<button className="btn btn-danger" onClick={props.click}>Delete</button>
        </div>
    )
}


export default person;