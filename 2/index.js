function sortFromHightoLow(...arrays) {
    const mergedArray = arrays.flat();
    mergedArray.sort((a, b) => b - a);
    return mergedArray;
  }
  
  console.log(sortFromHightoLow([5, 6, 2], [3, 7, 1]));
  console.log(sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8],[12,30,40,50]));
  console.log(sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8],[12,30,40,50],[12,30,4,2]));
