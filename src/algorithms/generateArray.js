
function generateArray(tablet, {setArray, setMadArray}) {
    console.log("newArray!")
    const newArray = [];
    if (!tablet) {
        for (let i = 0; i < 100; i++) {
            newArray.push(randomInteger(5, 500));
        }
    } else {
        for (let i = 0; i < 60; i++) {
            newArray.push(randomInteger(5, 500));
        }
    }
    setArray(newArray);
    setMadArray(newArray)
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export default generateArray;
