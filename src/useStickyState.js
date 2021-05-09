import { useEffect, useState } from 'react'

function useStickyState(defaultValue,key) {

    const [value,setValue]=useState(()=>{
        const localStorageData=JSON.parse(localStorage.getItem(key));

        return localStorageData !== null ? localStorageData : defaultValue;
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])


    return [value,setValue]
}

export default useStickyState
