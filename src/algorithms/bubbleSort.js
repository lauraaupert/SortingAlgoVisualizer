import generateArray from "./generateArray";

let colorArray = [];

function bubbleSort(array, speed) {
    // if (arrayIsSorted(array)) {
    //     console.log("sorted")
    //     generateArray(tablet, {setArray, setMadArray})
    // }
    let counter = 0;
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let j = 0; j < array.length - counter - 1; j++ ) {
            colorArray.push([j, j + 1, array[j], array[j + 1]])
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    isSorted = false;
                }
        }
        counter++;
    }
    runColors(colorArray, speed)
}

function runColors(array, speed) {
    console.log("running colors!")
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
                    }, speed / 4);
                }, speed/2);

            } else {
                setTimeout(() => {
                    bar1.style.backgroundColor = "white";
                    bar2.style.backgroundColor = "white"
                }, speed / 4);
            }
        }, index * speed);
    })
}

function arrayIsSorted(array) {
    let sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            sorted = false;
        }
    }
    return sorted;
}


export default bubbleSort;

