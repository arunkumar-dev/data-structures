const array1 = [0, 3, 4, 31]; //sorted array
const array2 = [4, 6, 30]; //sorted array

function mergeSort(array1, array2) {
  const newArray = [];
  let index1 = 0;
  let index2 = 0;
  if (array1.length === 0) return array2;

  if (array2.length === 0) return array1;

  let item1 = array1[index1];
  let item2 = array2[index2];

  while (item1 || item2) {
    // console.log(item1,index2)
    if (!item2 || item1 < item2) {
      newArray.push(item1);
      item1 = array1[++index1];
    } else {
      newArray.push(item2);
      item2 = array2[++index2];
    }
  }

  return newArray;
}

console.log(mergeSort(array1, array2));
