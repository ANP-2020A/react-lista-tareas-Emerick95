import React, {useState} from "react";
import App from "./App";

const UserList =()=>{
    const superCompleja = () =>{
        console.log('Calculos demasiados complejos');
        return[
            {
                firstName: 'Eythan',
                lastName:'Emerick'
            },
            {
                firstName: 'Andy',
                lastName:'Alomoto'
            },
            {
                firstName: 'Erika',
                lastName:'Caiza'
            }
        ];
    };

    const [users, setUsers]=useState(superCompleja);
    const [count, setCount]=useState(0);

    const formatName = (user)=>{
        return user.firstName + ' ' + user.lastName;
    }

    const handleAddUser = () =>{
        const firstName=document.querySelector('#firstName').value;
        const lastName=document.querySelector('#lastName').value;

        const newUser={
            firstName,
            lastName
        };
        setUsers((prevState)=>{
            return[
                ...prevState,
                newUser
            ];
        });
    };
    return (
        <>
            <h1>Contador</h1>
            {count}
            <button onClick={()=>setCount(count +1)}>Sumar</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <h1>Lista de Usuarios</h1>
            <div>
                <label htmlFor='firstName'>Nombre</label>
                <input type='text' id='firstName' />

                <label htmlFor='lastName'>Apellido</label>
                <input type='text' id='lastName' />
                <button onClick={handleAddUser}> Agregar </button>
            </div>
            <ul>
                {
                    users.map((user,index) =>{
                        return <li key={`user-${index}` }>{ formatName(user) }</li> /*minuto 1:27 del video*/
                    })
                }
            </ul>
        </>
    );
};

export default UserList;