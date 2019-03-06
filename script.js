"use strict"

//Selection sort
function SelectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            let t = arr[min];
            arr[min] = arr[i];
            arr[i] = t;
        }
    }

    return arr;
}


//Test
let arr = [2, 8, 9, 7, 3, 5, 4, 6, 10, 1];
SelectionSort(arr)

console.log(arr);