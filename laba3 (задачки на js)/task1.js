function counter(n) {
  let intervalId = setInterval(() => {
    console.log(n);
    n--;
    if (n < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function createCounter(n) {
  let intervalId;
  
  return {
    start() {
      if (!intervalId) {
        intervalId = setInterval(() => {
          console.log(n);
          n--;
          if (n < 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      }
    },
    pause() {
      clearInterval(intervalId);
      intervalId = null;
    },
    stop() {
      clearInterval(intervalId);
      intervalId = null;
      n = 0;
    }
  };
}