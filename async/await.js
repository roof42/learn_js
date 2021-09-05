const doSomethingAsync = async () => {
  let random = Math.floor(Math.random() * 3);
  if (random != 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK");
      }, 1000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("ERROR"));
      }, 1000);
    });
  }
};

const callAsync = async () => {
  try {
    let result = await doSomethingAsync();
    console.log(`I will  wait for promise - ${result}`);
  } catch (error) {
    console.log(`I will  wait for rejected promise - ${error}`);
  }
};

callAsync();
console.log("I will not wait for promise");
