// return a random item from a list

export const choice = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}