import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles(()=>({
    btn:{
        fontFamily:"Montserrat",
        textAlign:"center",
        paddingLeft:"15px",
        paddingRight:"15px",
        borderRadius:"4px",
        fontSize:"15px",
        fontWeight:"600",
        cursor:"pointer",
        paddingBottom:"10px",
    },
    focus:{
        borderBottom:"5px solid #2F80ED"
    }
}))

function Button({children,i,actived,setActive}) {

    const classes=useStyles();

    return (
        <div className={`${classes.btn} ${i===actived && classes.focus}`} onClick={setActive}>
            {children}
        </div>
    )
}

export default Button
