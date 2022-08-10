import React, {useEffect, useState} from 'react'
import Lottie from 'react-lottie';
import * as location from './loading.json'
 


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


function Preloader() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(undefined);
const [completed, setCompleted] = useState(undefined)


useEffect(() =>{
    setTimeout(() => {
        fetch("")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
            setCompleted(true);

            setTimeout(() => {
                setCompleted(true);
            },1000);
        });
    },2000);
}, []);

    return (
        <>
        {!completed ? (
                <Lottie options={defaultOptions}
                height={500}
                width={500}
                />

        ) : (
            <h1>Test</h1>
        )}

        </>
  )
}

export default Preloader