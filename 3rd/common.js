function findCommonElements(array1, array2) {
    const commonElements = [];
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    set1.forEach((element) => {
      if (set2.has(element)) {
        commonElements.push(element);
      }
    });
    return commonElements;
  }
  
  const array1 = [5, 2, 9, 1, 7, 3];
  const array2 = [9, 3, 8, 6, 5];
  const commonElements = findCommonElements(array1, array2);
  
  console.log(commonElements); 