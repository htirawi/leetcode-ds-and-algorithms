/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */

function mincostToHireWorkers(quality, wage, k) {
  const n = quality.length;
  const workers = [];
  for (let i = 0; i < n; i++) {
    workers.push({ quality: quality[i], wage: wage[i] });
  }

  workers.sort((a, b) => a.wage / a.quality - b.wage / b.quality);

  let result = Infinity;
  let qualitySum = 0;
  const heap = new Heap();

  for (let i = 0; i < n; i++) {
    const { quality, wage } = workers[i];
    heap.insert(-quality);
    qualitySum += quality;

    if (heap.size() > k) {
      qualitySum += heap.extractMin();
    }

    if (heap.size() === k) {
      result = Math.min(result, qualitySum * (wage / quality));
    }
  }

  return Number(result.toFixed(2));
}

class Heap {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  insert(value) {
    this.array.push(value);
    this.bubbleUp(this.array.length - 1);
  }

  extractMin() {
    const min = this.array[0];
    const last = this.array.pop();

    if (this.array.length > 0) {
      this.array[0] = last;
      this.sinkDown(0);
    }

    return min;
  }

  bubbleUp(index) {
    const element = this.array[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.array[parentIndex];
      if (element >= parent) {
        break;
      }
      this.array[parentIndex] = element;
      this.array[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.array.length;
    const element = this.array[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        const leftChild = this.array[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.array[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < this.array[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.array[index] = this.array[swapIndex];
      this.array[swapIndex] = element;
      index = swapIndex;
    }
  }
}

module.exports = mincostToHireWorkers;
