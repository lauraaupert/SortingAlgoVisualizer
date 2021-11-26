import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import './visualizer.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import heapSort from '../algorithms/heapSort'
import selectionSort from '../algorithms/selectionSort'
import quickSort from '../algorithms/quickSort'
import bubbleSort from '../algorithms/bubbleSort'

import generateArray from '../algorithms/generateArray'


function Visualizer() {
    const [fullArray, setArray] = useState([]);
    const [madArray, setMadArray] = useState([])
    const [speed, setSpeed] = useState(1);
    const [disable, setDisable] = useState(false)
    const [tablet, setTablet] = useState(useMediaQuery({ query: '(max-width: 800px)' }))

    const options = document.getElementById("options")
    const stop = document.getElementById("stop")

    let isTablet;
    if (tablet) isTablet = "none"
    else isTablet = "block"

    useEffect(() => {
        generateArray(tablet, {setArray, setMadArray});
    }, [])

    function makeArray(e) {
        window.location.reload();
    }

    // function generateArray() {
    //     const newArray = [];
    //     if (!tablet) {
    //         for (let i = 0; i < 100; i++) {
    //             newArray.push(randomInteger(5, 500));
    //         }
    //     } else {
    //         for (let i = 0; i < 60; i++) {
    //             newArray.push(randomInteger(5, 500));
    //         }
    //     }
    //     setArray(newArray);
    //     setMadArray(newArray)
    // }

    // function randomInteger(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }

    function disabling() {
        options.style.display = "none"
        stop.style.display = "block"
        setTimeout(() => {
            options.style.display = "block"
            stop.style.display = "none"
        }, speed * fullArray.length * 40);
    }

    return( 
        <div>
            <div id="stop" style={{display: "none"}}>
                <Button variant="light" size="sm" onClick={makeArray}>Go Back</Button>
            </div>
            <div className="options" id="options">
                <div onClick={() => disabling()}>
                    <Button variant="light" size="sm" onClick={() => bubbleSort(fullArray, speed)}>Bubble Sort</Button>
                    <Button variant="light" size="sm" onClick={() => heapSort(fullArray, speed)}>Heap Sort</Button>
                    <Button variant="light" size="sm" onClick={() => selectionSort(fullArray, speed)}>Selection Sort</Button>
                    <Button variant="light" size="sm" onClick={() => quickSort(fullArray, speed)}>Quick Sort</Button>
                </div>
                {tablet ? 
                    <>
                        <Button variant="light" size="sm" onClick={makeArray}>New Array</Button>
                        <Row style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                            <Form.Range disabled={disable} style={{width: "60vw", color: "white", height: ".8rem"}} min={1} max={100} value={speed}
                                onChange={changeEvent => setSpeed(changeEvent.target.value)}
                            />
                        </Row>
                    </>
                :
                    <div style={{display: {isTablet}, position: "absolute", top: "0vh", right: "2vh"}}>
                        <Button variant="light" size="sm" onClick={makeArray}>New Array</Button>
                        <Form.Label style={{color: "white", marginBottom: "0px"}}>Speed</Form.Label>
                        <Form.Range disabled={disable} style={{zIndex: "-2", width: "10vw", color: "white", height: ".8rem"}} min={1} max={100} value={speed}
                            onChange={changeEvent => setSpeed(changeEvent.target.value)}
                        />
                    </div>
                }
            </div>

            <div className="array-container">
                {madArray !== undefined &&
                        <div className="array">
                            {madArray.map((value, idx) => {
                                return (
                                    <div 
                                        className="array-bar" 
                                        key={idx}
                                        id={idx}
                                        style={{height: `${value}px`}}
                                    >
                                    </div>                        
                                )
                            })}
                        </div>
                }
            </div>
        </div>
    )
}

export default Visualizer;