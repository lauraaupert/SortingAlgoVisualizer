let colorArray = [];
// let disabled;

// function disabling(disabled) {
//     disabled(true)
// }

function heapSort(array, speed, disable) {
    // disabled = disable.setDisable
    // console.log(disabled)
    // disabling(disabled)
    let countdown = array.length * speed;
    let length = array.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;
    
    while (i >= 0) {
        // (function(i) {
        // setTimeout(() => {
        //     console.log(i)
            heapify(array, length, i);
            i--;

    //     }, i * 2)
    // })(i--)
    }

    while (k >= 0) {
                [array[0], array[k]] = [array[k], array[0]];
                colorArray.push([0, k, array[k], array[0]])

                heapify(array, k, 0);

    
        k--;
    }
    console.log(array)
    console.log(colorArray)
        colorArray.forEach((item, idx) => {
            let i = item[0];
            let largest = item[1];
            if (i < 100 && largest < 100
                 ) {
                setTimeout(() => {
                    console.log(idx)
                    const barI = document.getElementById(i);
                    const barLargest = document.getElementById(largest);
                    barI.style.backgroundColor = "purple";
                    barLargest.style.backgroundColor = "yellow";
                    let iHeight = item[2];
                    let largestHeight = item[3];
                    console.log(i, iHeight, largest, largestHeight)
                    setTimeout(() => {
                        barI.style.height = `${largestHeight}px`;
                        barLargest.style.height = `${iHeight}px`;
                        setTimeout(() => {
                            barI.style.backgroundColor = "white";
                            barLargest.style.backgroundColor = "white";
                        }, speed)
                    }, speed * 2)
                }, idx * 4 * speed)

            }
            // setTimeout(() => {
            //     disable.setDisable(false)
            // }, array.length * speed * 20)
        }) 
        

    // return array;
    // return disable	
}

function heapify(array, length, i) {

    console.log(length, i)
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

            if (left < length && array[left] > array[largest]) {
                            largest = left;
                            // colorRight = largest;
                            // console.log(colorRight)
                }
            if (right < length && array[right] > array[largest]) {
                largest = right;
            }
            if (largest !== i) colorArray.push([i, largest, array[i], array[largest]])

            if (largest !== i) {

                [array[i], array[largest]] = [array[largest], array[i]];
                heapify(array, length, largest);
            }
    
    }


    export default heapSort;