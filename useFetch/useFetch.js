import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMonted = useRef(true);
    useEffect(() => {
        return () => {
            isMonted.current = false
        }
    }, [])
    useEffect(() => {
        
        setstate({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    {
                        isMonted.current 
                        && 
                        ( 
                            setstate({
                            loading: false,
                            data: data,
                            error: null
                            })
                        )
                    }
                }, 3000)
            });

    }, [url])

    return state;
}
