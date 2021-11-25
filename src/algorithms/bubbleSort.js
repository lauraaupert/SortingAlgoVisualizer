let colorArray = [];


function bubbleSort(array, speed, disable) {
    // disable.setDisable(true)
    let countdown = array.length * speed * 20;
    let counter = 0;
    let isSorted = false;
    // for (let i = 0; i < array.length - counter - 1; i++) {
    while (!isSorted) {
        isSorted = true;
        for (let j = 0; j < array.length - counter - 1; j++ ) {
            colorArray.push([j, j + 1, array[j], array[j + 1]])
            // setTimeout(() => {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    isSorted = false;
                    // setColorRight(j + 1)
                    // setMadArray(array)
                // } else {
                //     // setColorRight(400)
                }
            // }, i * speed)
        }
        counter++;
    }
    console.log(colorArray)
    runColors(colorArray, speed)
    // setTimeout(() => {
    //     disable.setDisable(false)
    // }, countdown);
}

function runColors(array, speed) {
    array.forEach((item, index) => {
        setTimeout(() => {
            
        const [bar1idx, bar2idx, bar1value, bar2value] = item;
        const bar1 = document.getElementById(bar1idx);
        const bar2 = document.getElementById(bar2idx);
        bar1.style.backgroundColor = "turquoise";
        bar2.style.backgroundColor = "yellow";
        if (bar1value > bar2value) {
            setTimeout(() => {
                bar1.style.height = `${bar2value}px`;
                bar2.style.height = `${bar1value}px`;
                bar2.style.backgroundColor = "turquoise"
                bar1.style.backgroundColor = "yellow"
                setTimeout(() => {
                    bar1.style.backgroundColor = "white";
                    bar2.style.backgroundColor = "white";
                }, speed / 2);
            }, speed);

        } else {
            setTimeout(() => {
                bar1.style.backgroundColor = "white";
                bar2.style.backgroundColor = "white"
            }, speed / 2);
        }
    }, index * speed * 2);

    })
}

export default bubbleSort;

// const bar1 = document.getElementById(j);
// const bar2 = document.getElementById(j + 1)
// bar1.style.backgroundColor = "red";
// bar2.style.backgroundColor = "yellow";
// bar1.style.height = `${array[j + 1]}px`
// bar2.style.height = `${array[j]}px`
