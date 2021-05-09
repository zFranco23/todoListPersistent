import { makeStyles,TextField, Checkbox, CircularProgress} from '@material-ui/core';
import React, { useState } from 'react'


import Fade from 'react-reveal/Fade';

const useStyles=makeStyles(()=>({
    containerDetails:{
        marginTop:"1rem",
        display:"flex",
        width:"600px",
    },
    details:{
        flexGrow:1,
        marginRight:"2rem",
    },
    btnAdd:{
        fontSize:"15px",
        backgroundColor:"#2F80ED",
        boxShadow:"0px 2px 6px rgba(127, 177, 243, 0.4)",
        borderRadius:"12px",
        color:"#fff",
        fontFamily:"Montserrat",
        fontWeight:"600",
        padding:"20px 30px",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"#2F80EE    "
        }
    },
    containerTodo:{
        marginTop:"1rem",
    },
    todo:{
        display:"flex",
        alignItems:"center",
        "& p":{
            fontFamily:"Montserrat",
            fontWeight:"500",
            fontSize:"18px",
            margin:0,
            padding:0
        }
    },
    completed:{
        textDecoration:"line-through",
    }

}))
function TodoAll({todos,setNewState,handleNewTodo}) {
    const classes=useStyles();

    const [todo,setTodo]=useState("");

    const newTodo= () => {
        setTodo("");
        return {todo:todo, state:"active" }
    }
    
    const handleInput = (e) =>{
        setTodo(e.target.value);
    }
    return (
        <>
            <Fade left ñ>
                <div>
                    <div className={classes.containerDetails}>
                        <TextField 
                        variant="outlined"
                        label="Details"
                        value={todo}
                        onChange={(e)=>handleInput(e)}
                        placeholder="add details"
                        className={classes.details} 
                        />
                        <div className={classes.btnAdd} onClick={()=>handleNewTodo(newTodo())}>
                        Add
                        </div>
                    </div>
                    <div className={classes.containerTodo}>
                        {todos.length>0 ? 
                        <>
                            {todos.map((todo,index)=>(
                                <div key={index} className={classes.todo}>
                                    <Checkbox
                                        checked={todo.state==="completed"}
                                        onChange={()=>setNewState(index)}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                    <p className={todo.state==="completed" ? classes.completed :""}>{todo.todo}</p>
                                </div>
                            ))}
                        </>                     
                        : <p>No todos available</p>}
                        
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default TodoAll
