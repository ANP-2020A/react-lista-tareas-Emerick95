import React, {useState} from "react";


const TodoList =()=>{

    const [listas,setListas]=useState([]);
    const [complete,setComplete]=useState([]);

    const handleAddTask=()=> {
        const task = document.querySelector('#task').value;

        const newListas = [
            ...listas,
            task
        ];
        setListas(newListas);

    };

    const handleDeleteTask=(index)=>{
        const newListas=[...listas];
        newListas.splice(index,1);
        setListas(newListas);
    };

    const handleCompleteTask=(index)=>{
        const newComplete=[
            ...complete,
            listas[index]
        ];
        setComplete(newComplete);

        const newListas=[...listas];
        newListas.splice(index,1);
        setListas(newListas);
    };
        return(
            <>
                <h1>Lista de Tareas</h1>
                <div>
                    <label htmlFor='task'>Nueva Tarea</label>
                    <input type='text' id='task'/>
                    <button onClick={handleAddTask}>Agregar</button>
                </div>

                <ul>
                    {
                      listas.map((task,index)=>{
                          return <li key={`task-${index}`}>{task}</li>
                      })
                    }
                </ul>

                <h1>Tareas Pendientes</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listas.map( ( task, index ) => (
                                <tr key={ index }>
                                    <td>{ task }</td>
                                    <td>
                                        <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
                                    </td>
                                    <td>
                                        <button onClick={ () => handleCompleteTask(index)}>Completado</button>
                                    </td>
                                </tr>
                            )
                        )

                    }
                    </tbody>
                </table>
                <h1>Tareas Completadas</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                    {
                        complete.map( ( task, index ) => (
                                <tr key={ index }>
                                    <td>{ task }</td>
                                </tr>
                            )
                        )

                    }
                    </thead>
                </table>

            </>
        );
};
export default TodoList;