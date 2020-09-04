// SortCheckign
class SortChecking extends Sort {
  constructor() {
    super();
    this.checkIndex = 0;
  }
  step() {
    getValue(arrayToSort, this.checkIndex);
    this.checkIndex++;
    return this.checkIndex === arrayToSort.length;
  }
  draw(cnt) {
    cnt.fillStyle = "#000";
    cnt.fillRect(0, 0, cnt.canvas.width, cnt.canvas.height);
    const sizeOfBlock = cnt.canvas.width / arrayToSort.length;
    const sortedArray = [...arrayToSort].sort();
    arrayToSort.forEach((element, index) => {
      if (this.checkIndex >= index) {
        if (element === sortedArray[index]) {
          cnt.fillStyle = "#55b809";
        } else {
          cnt.fillStyle = "#e01f1f";
        }
      } else {
        cnt.fillStyle = "#FFF";
      }
      cnt.fillRect(index * sizeOfBlock + sizeOfBlock * 0.025, 0, sizeOfBlock * 0.95, cnt.canvas.height * element);
    });
  }
}
