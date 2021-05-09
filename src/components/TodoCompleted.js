import { makeStyles, Button, Checkbox, IconButton} from '@material-ui/core';
import React from 'react'

import Fade from 'react-reveal/Fade';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
        padding:"15px 30px",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"#2F80EE    "
        }
    },
    container:{
        width:"600px",
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
    },
    row:{
        display:"flex",
        justifyContent:"space-between"
    },
    containerBtn:{
        marginTop:"1rem",
        display:"flex",
        justifyContent:"flex-end"
    },
    btn:{
        borderRadius:"4px",
        color:"#fff",
        display:"flex",
        alignItems:"center",
        backgroundColor:"#EB5757",
        padding:"2px 1.5rem",
        cursor:"pointer",
        transition:"0.3s ease-in-out",
        "& p":{
            fontSize:"12px",
            fontWeight:"600",
        },
        "&:hover":{
            transform:"translateY(-1px)"
        }
    }
}))

function TodoCompleted({todos,deleteOne,deleteAll}) {

    const classes=useStyles();
    return (
        <>
            <Fade right>
                <div>
                    <div className={classes.container}>
                            {todos.map((todo,index)=>{
                                if(todo.state==="completed"){
                                    return (
                                        <div key={index} className={classes.row}>
                                            <div className={classes.todo}>
                                                <Checkbox
                                                    checked={true}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <p className={classes.completed}>{todo.todo}</p>
                                            </div>
                                            <IconButton onClick={()=>deleteOne(index)}>
                                                <DeleteOutlineIcon />
                                            </IconButton>
                                        </div>
                                    )
                                }
                                
                            })}
                            {todos.filter(el => el.state==="completed").length>0 && <div className={classes.containerBtn}>
                                <div
                                    className={classes.btn}
                                    onClick={deleteAll}
                                >
                                    <DeleteOutlineIcon />
                                    <p>delete all</p>
                                </div>
                            </div>}
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default TodoCompleted
