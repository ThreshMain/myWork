/* eslint-disable space-before-function-paren */
// RandomSort
let randomSorting = false;
function randomSort() {
  if (!randomSorting) {
    restartVariables("ALL");
    stopOscilator();
    randomSorting = true;
  }
  arrayToSort = randomizePositions(arrayToSort);
  return isSorted(arrayToSort);
}

function drawRandomSort(cnt) {
  cnt.fillStyle = "#000";
  cnt.fillRect(0, 0, cnt.canvas.width, cnt.canvas.height);
  const sizeOfBlock = cnt.canvas.width / arrayToSort.length;
  const sortedArray = [...arrayToSort].sort();
  arrayToSort.forEach((element, index) => {
    if (element === sortedArray[index]) {
      cnt.fillStyle = "#55b809";
    } else {
      cnt.fillStyle = "#e01f1f";
    }
    cnt.fillRect(index * sizeOfBlock + sizeOfBlock * 0.025, 0, sizeOfBlock * 0.95, cnt.canvas.height * element);
  });
}

function randomSortReset() {
  randomSorting = false;
}