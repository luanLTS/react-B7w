import React, { useState, useEffect } from 'react'


export default function Contagem() {

    const [cont, setcont] = useState(0)

    useEffect(() => {
        document.title = "Contagem: " + cont
    }, [cont])

    return (
        <>
            <h1>{cont}</h1>
            <button onClick={setcont(cont + 1)}>aumentar</button>
        </>
    );
}