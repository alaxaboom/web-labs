function delay(N) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, N * 1000);
  });
}