const swap = (items, leftIndex, rightIndex) => {
  const temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

const partition = (items, left, right) => {
  let pivot = Number(items[Math.floor((right + left) / 2)].number_of_work)
  let i = left
  let j = right
  while (i <= j) {
    while (Number(items[i].number_of_work) < pivot) i++
    while (Number(items[j].number_of_work) > pivot) j--
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

export const quickSort = (items, left, right) => {
  let index
  if (items.length > 1) {
      index = partition(items, left, right)
      if (left < index - 1) quickSort(items, left, index - 1) 
      if (index < right) quickSort(items, index, right)
  }
  return items;
}