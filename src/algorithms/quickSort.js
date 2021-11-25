const colorArray = [];

function quickSort(array, speed, disable) {
  // disable.setDisable(true)

    quickSortHelper(array, 0, array.length - 1);
    runColors(colorArray, speed)
    // setTimeout(() => {
    //   disable.setDisable(false)
    // }, array.length * speed * 35);
      return array;
  }
  
  function quickSortHelper(array, startIdx, endIdx) {
      if (startIdx >= endIdx) {
          return;
      }
      let pivot = startIdx;
      let left = startIdx + 1;
      let right = endIdx;
      while (right >= left) {
          if (array[left] > array[pivot] && array[right] < array[pivot]) {
            swap(left, right, array)
            colorArray.push([pivot, left, right, array[pivot], array[left], array[right]])
          }
          if (array[left] <= array[pivot]) {
              left++; 
              colorArray.push([pivot, left, right, array[pivot], array[left], array[right]])
          }
          if (array[right] >= array[pivot]) {
              right--;
              colorArray.push([pivot, left, right, array[pivot], array[left], array[right]])
          }
      }

      swap(pivot, right, array)
      colorArray.push([pivot, left, right, array[pivot], array[left], array[right]])
      let leftSubarrayIsSmaller = right - 1 - startIdx < endIdx - (right + 1)
      //call the recursion on the smallest subarray first so tail recursion can handle the extra space 
      if (leftSubarrayIsSmaller) {
          quickSortHelper(array, startIdx, right - 1);
          quickSortHelper(array, right + 1, endIdx)
      } else {
          quickSortHelper(array, right + 1, endIdx);
          quickSortHelper(array, startIdx, right - 1)
      }
  } 

  function runColors(array, speed) {
    for (let i = 0; i < array.length; i++) {
          setTimeout(() => {
            const item = array[i]
            if (item[0] === 100 || item[1] === 100 || item[2] === 100) return;
            let pivot = item[0];
            let left = item[1];
            let right = item[2];
            const pivotHeight = item[3];
            const leftHeight = item[4];
            const rightHeight = item[5];
            const barPivot = document.getElementById(pivot);
            const barLeft = document.getElementById(left);
            const barRight = document.getElementById(right);

            barPivot.style.backgroundColor = "yellow";
            barLeft.style.backgroundColor = "purple";
            barRight.style.backgroundColor = "red";

            setTimeout(() => {
              barPivot.style.height = `${pivotHeight}px`;
              barLeft.style.height = `${leftHeight}px`;
              barRight.style.height = `${rightHeight}px`;
              setTimeout(() => {
                // barPivot.style.backgroundColor = "white";
                barLeft.style.backgroundColor = "white";
                barRight.style.backgroundColor = "white";
                barPivot.style.backgroundColor = "white";
  
              }, speed)
  
            }, speed * 2);
          }, i * speed * 4)
        }}

  function swap(i, j, array) {
      [array[i], array[j]] = [array[j], array[i]]
  }

  export default quickSort;
  