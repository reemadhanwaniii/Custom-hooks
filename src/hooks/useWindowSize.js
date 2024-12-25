import { useEffect, useState } from "react";

function useWindowSize() {
    const [size,setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(()=>{
        window.addEventListener('resize',() =>{
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        })
    },[]);

    return size;
}

export default useWindowSize;