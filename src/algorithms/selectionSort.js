let colorArray = [];

function selectionSort(array, speed) {
    let counter = array.length - 1;
      
      while (counter > 0) {
          let biggest = 0;
          for (let i = 0; i <= counter; i++) {
              colorArray.push([i, biggest, array[i], array[biggest]])
              if (array[i] > array[biggest]) biggest = i;
          }
          [array[biggest], array[counter]] = [array[counter], array[biggest]]
          counter--;
      }
      runColors(colorArray, speed)
      return array;
  }

  function runColors(array, speed) {
    let begin = 0;

    for (let num = 0; num < array.length; num++) {
        setTimeout(() => {
          let current = array[num][0];
          let biggest = array[num][1];
              const barCurrent = document.getElementById(current);
              const barBiggest = document.getElementById(biggest);
              barCurrent.style.backgroundColor = "orange";
              barBiggest.style.backgroundColor = "turquoise";
              if (begin !== biggest) {
                  const barStart = document.getElementById(begin);
                  barStart.style.backgroundColor = "white";
                  begin = biggest;
              }
              if (num === array.length - 1) {
                const lastBar = document.getElementById(1);
                const lastBarHeight = array[num][2];
                const biggestHeight = array[num][3];
                barBiggest.style.height = `${lastBarHeight}px`;
                lastBar.style.height = `${biggestHeight}px`;
                lastBar.style.backgroundColor = "lightgrey";
                barBiggest.style.backgroundColor = "lightgrey";
                return;
              } else if (array[num + 1][0] === 0 || array[num][0] === 0) {
                const lastBar = document.getElementById(array[num][0])
                const lastBarHeight = array[num][2]
                const biggestHeight = array[num][3]
                barBiggest.style.height = `${lastBarHeight}px`;
                lastBar.style.height = `${biggestHeight}px`;
                lastBar.style.backgroundColor = "lightgrey"
              } else {
                setTimeout(() => {
                  barCurrent.style.backgroundColor = "white";
                }, speed)
              }
        }, num * speed)
    }
  }



  export default selectionSort;