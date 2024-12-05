export const binarySearch = (arr: number[], target: number): number => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      low = mid + 1; // Discard the left half
    } else {
      high = mid - 1; // Discard the right half
    }
  }
  return -1; // Target not found
};

// Function to return Lower Bound
export const lowerBound = (arr: number[], target: number) => {
  let res = arr.length;

  // Search space for binary search
  let lo = 0,
    hi = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] >= target) {
      res = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return res;
};

// Function to return Upper Bound
export const upperBound = (arr: number[], target: number) => {
  let res = arr.length;

  // Search space for binary search
  let lo = 0,
    hi = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] > target) {
      res = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return res;
};
