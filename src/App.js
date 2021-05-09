import { makeStyles, Typography} from '@material-ui/core'
import React,{useEffect, useState} from 'react';

import Button from './components/Button';
import TodoAll from './components/TodoAll'; 
import TodoActive from './components/TodoActive'; 
import TodoCompleted from './components/TodoCompleted'; 
import useStickyState from './useStickyState';
import Footer from './components/Footer';

const useStyles=makeStyles((theme)=>({
  root:{
    display:"flex",
    minHeight:"100vh",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
  main:{
    paddingTop:"32px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  title:{
    textAlign:"center",
    fontFamily:"Raleway,sans-serif",
    fontWeight:"700",
    fontSize:"2rem",
  },
  containerBtn:{
    width:"200px",
    display:"flex",
    justifyContent:"center",
  },
  barSelect:{
    marginTop:"3rem",
    display:"flex",
    width:"600px",
    borderBottom:"1px solid #BDBDBD",
  }

}))

function App() {
  const classes=useStyles();
  const dataInit=[
    {todo:"TodoTest1", state:"active"},
    {todo:"TodoTest2" , state:"completed"},
    {todo:"TodoTest3", state:"active"},
    {todo:"TodoTest4",state:"completed"},
    {todo:"TodoTest5",state:"active"},
    {todo:"TodoTest6",state:"completed"}
  ];
  const [actived,setActived]=useState(0);
  const [todos,setTodos]=useStickyState(dataInit,"data");



  const handleNewState = (i) =>{
    const newArray=todos.map((todo,el)=>{
      if(el===i){
        if(todo.state==="active"){
          todo.state="completed"
        }else{
          todo.state="active";
        }       
      }
      return todo;
    })
    setTodos(newArray);
  }

  const handleNewTodo = (json) =>{
    if(json.todo!==""){
      setTodos([...todos,json]);
    }
    
  }

  const deleteOne = (i)=>{
    if(window.confirm(`Would you like to delete todo : ${todos[i].todo} ?`)){
      const arrayFilter=todos.filter((todo,index)=> index!=i);
      setTodos(arrayFilter);
    }
  }

  const deleteAll = () =>{
    if(window.confirm("Would you like to delete all todos?")){
      const arrayFilter=todos.filter(todo=>todo.state!=="completed");
      setTodos(arrayFilter);
    }
  }
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.main}>
            <Typography className={classes.title}>#todo</Typography>
            <div className={classes.barSelect}>
                <div className={classes.containerBtn}>
                  <Button i={0} actived={actived} setActive={()=>setActived(0)}>
                    All
                  </Button>
                </div>
                <div className={classes.containerBtn}>
                  <Button i={1} actived={actived} setActive={()=>setActived(1)}>
                    Active
                  </Button>
                </div>
                <div className={classes.containerBtn}>
                  <Button i={2} actived={actived} setActive={()=>setActived(2)}>
                    Completed
                  </Button>
                </div>
            </div>
        </div>
        {actived===0 && <TodoAll  todos={todos} setNewState={handleNewState} handleNewTodo={handleNewTodo}/> }
        {actived===1 && <TodoActive todos={todos} setNewState={handleNewState} handleNewTodo={handleNewTodo}/> }
        {actived===2 && <TodoCompleted todos={todos} deleteOne={deleteOne} deleteAll={deleteAll} />  }
      </div>
      <Footer />
    </div>
  );
}

export default App;
