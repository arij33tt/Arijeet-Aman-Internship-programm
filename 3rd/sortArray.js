function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return;
    }
  
    const pivotIndex = Math.floor((left + right) / 2);
    const pivotValue = arr[pivotIndex];
  
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr[i] < pivotValue) {
        i++;
      }
  
      while (arr[j] > pivotValue) {
        j--;
      }
  
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
  
    quickSort(arr, left, j);
    quickSort(arr, i, right);
  }
  
  const unsortedArray = [4, 2, 8, 5, 1, 3, 9, 6, 7];
  quickSort(unsortedArray);
  console.log('Sorted array:', unsortedArray);