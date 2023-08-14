import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'

export default function Home() {
    const [num, setNum] = useState(0);
    const clickHandler=()=>
    {

       setNum((prev)=> {return prev+1}); 
    }
    return (
        <>
            <Typography variant='h2' color='secondary' align='center'>Home 🏠</Typography>
            <Typography variant='h2' align='center' color='primary' style={{fontWeight:'bolder'}}>
                <Button variant='contained' onClick={clickHandler}> cilck to say HI</Button>
            </Typography>
            <Typography variant='h2' color='secondary' align='center'>
                {num}
            </Typography>

        </>

    )
}