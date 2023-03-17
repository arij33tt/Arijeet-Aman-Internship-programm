function find(arr) {
    if (arr.length < 2) {
      return 'Array must contain at least two numbers';
    }
  
    
    arr.sort((a, b) => a - b); // Sorts the array of numbers in ascending order
  
   
    const secL = arr[1];
    const secH = arr[arr.length - 2];
  
    return [secL, secH];
  }
  
  const arr = [5, -1, 9, 0, 7, 3];
  const [secL, secH] = find(arr);
  
  console.log('Second lowest number:', secL); // Output: 2
  console.log('Second highest number:', secH); // Output: 7