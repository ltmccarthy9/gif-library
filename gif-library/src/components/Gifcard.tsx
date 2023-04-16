

import React from 'react'

export default function Gifcard({gifUrl}){
    
    function copyGif(){
        navigator.clipboard.writeText(gifUrl);
    }

    return (
        <div className='card w-fit h-fit m-2 cursor-pointer'>
        <img src={gifUrl} />
        <div className='info flex justify-center items-center'>
            <button type='button' onClick={() => copyGif()}>copy</button>
            <button>save to library</button>
        </div>
    </div>
    )
}


