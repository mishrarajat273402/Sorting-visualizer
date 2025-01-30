// Merge Sort Visualization

function playmergeSort() {
    if (progresschecker)
    {  
        return;
    }
    progresschecker = true;
    const copy = [...array];
    const moves = [];
    mergeSort(copy, 0, copy.length - 1, moves);
    console.log("yehhh moves array animation k liye"); 
    for(let i=0;i<moves.length;i++)
    {
        console.log(moves[i].indices);
    }
   console.log("printing sorted array") 
    for(let i=0;i<copy.length;i++)
    {
        console.log(copy[i]);
    }
    animate(moves);
}

function mergeSort(array, start, end, moves) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSort(array, start, mid, moves);
        mergeSort(array, mid + 1, end, moves);
        merge(array, start, mid, end, moves);
    }
}

function merge(array, start, mid, end, moves) {
    const leftArray = array.slice(start, mid + 1);
    const rightArray = array.slice(mid + 1, end + 1);

    let i = 0,  j = 0, k = start;

    while (i < leftArray.length && j < rightArray.length) {
       //moves.push({ indices: [i, j], type: "comp" });

        if (leftArray[i] <= rightArray[j]) {
            moves.push({ indices: [leftArray[i], k], type: "fix" });
            array[k] = leftArray[i];
            i++;
        } 
        //yha hme do temporary seprate array( leftarray,rightarray ) me s element ko fix krna hai original array me 
        //na ki same array me swap toh hm value aur original array ka starting index(k=start==low) pass kiye h
        //green color nhi dikhe ga kyo compare move nhi hai yha hmm direcly valye fix kr rhe hai
        //yha compare nhi hor rha directly 2 sorted array merge ho rhe hai (koi na koi case merging me  satisfy ho jye ga )
        else 
        {
            moves.push({ indices: [rightArray[j], k], type: "fix" });
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while (i < leftArray.length) {
        moves.push({ indices: [leftArray[i], k], type: "fix" });
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.length) {
        moves.push({ indices: [rightArray[j], k], type: "fix" });
        array[k] = rightArray[j];
        j++;
        k++;
    }
}

// Use the existing ShowBar and animate functions as they are.

// Add the above code to your script.js file.