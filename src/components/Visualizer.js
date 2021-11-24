import React, { useEffect, useState } from 'react';
import './visualizer.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import heapSort from '../algorithms/heapSort'
import selectionSort from '../algorithms/selectionSort'
import quickSort from '../algorithms/quickSort'


function Visualizer() {
    const [fullArray, setArray] = useState([]);
    let [colorRight, setColorRight] = useState();

    const [madArray, setMadArray] = useState([])
    const [speed, setSpeed] = useState(1);

    useEffect(() => {
        generateArray();
    }, [])

    function makeArray(e) {
        window.location.reload()
    }

    function generateArray() {
        const newArray = [];
        for (let i = 0; i < 100; i++) {
            newArray.push(randomInteger(5, 500));
        }
        setArray(newArray);
        setMadArray(newArray)
        
    }

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function bubbleSort(array, speed) {

        for (let i = 0; i < array.length - 1; i++) {

            for (let j = 0; j < array.length -1; j++ ) {
                setTimeout(() => {
                    if (array[j] > array[j + 1]) {
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                        setColorRight(j + 1)
                        // setMadArray(array)
                    } else {
                        setColorRight(400)
                    }
                }, i * speed)
            }
        }
    }

        
    

    return( 
        <div>
        <div className="options">
            <Button variant="light" size="sm" onClick={() => bubbleSort(fullArray, speed)}>Bubble Sort</Button>
            <Button variant="light" size="sm" onClick={() => heapSort(fullArray, speed)}>Heap Sort</Button>
            <Button variant="light" size="sm" onClick={() => selectionSort(fullArray, speed)}>Selection Sort</Button>
            <Button variant="light" size="sm" onClick={() => quickSort(fullArray, speed)}>Quick Sort</Button>
            
            <div style={{position: "absolute", display: "flex", flexDirection: "column", top: "0vh", right: "2vh"}}>
            <Button variant="light" size="sm" onClick={makeArray}>New Array</Button>

                <Form.Label style={{color: "white", marginBottom: "0px"}}>Speed</Form.Label>
                <Form.Range style={{width: "10vw", color: "white", height: ".8rem"}} min={1} max={500} value={speed}
                    onChange={changeEvent => setSpeed(changeEvent.target.value)}
                />
            </div>

        </div>

        <div className="array-container">
            {madArray !== undefined &&
                    <div className="array">
                    {madArray.map((value, idx) => {
                        // console.log(value, idx)
                        return (
                            idx === colorRight ?
                            <div 
                            className="array-bar" 
                            key={idx}
                            id={idx}
                            style={{height: `${value}px`, backgroundColor: "green"}}
                            >
                                {/* {idx} */}
                        </div>
                        :
                        idx !== 100 &&
                        <div 
                            className="array-bar" 
                            key={idx}
                            id={idx}
                            style={{height: `${value}px`}}
                            >
                                {/* {idx} */}
                        </div>
                        
                        
                        )
                        })}
                    </div>
                    // :

}
                </div>
                    

        </div>
    )
}

export default Visualizer;