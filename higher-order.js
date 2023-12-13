// This function should execute the CALLBACK FUNCTION the number of times specified.
// When the function is being executed, the repetition number (i.e. 1 for the first call)
// should be passed to the callback.
const repeatFn = (num, callback) => {
  for (i = 0; i < num; i++) {
    callback(i);
  }
};

repeatFn(5, (param) => {
  console.log(param);
});
// Test repeatFn
const addButton = (5) => {
  const button = document.createElement("button");
  button.innerText = `Button ${5}`;
  document.querySelector("body").appendChild(button);
};
repeatFn(6, addButton);

const toThePower = (num, pow) => {
  let product = 1;
  repeatFn(pow, () => {
    product += product * num;
  });
  return product;
};

console.log(toThePower(3, 3));
