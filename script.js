function findKthElement(arr1, arr2, k) {
    let result = [];
  
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        result.push(arr1[0]);
        arr1 = arr1.slice(1);
      } else {
        result.push(arr2[0]);
        arr2 = arr2.slice(1);
      }
    }
    if (arr1.length > 0) {
      result = result.concat(arr1);
    } else if (arr2.length > 0) {
      result = result.concat(arr2);
    }
  
    return result[k - 1];
  }
  
  const array1 = [100, 112, 256, 349, 770];
  const array2 = [72, 86, 113, 119, 265, 445, 892];
  const k = 6;
  
  const result = findKthElement(array1, array2, k);
  console.log("Результат:", result);