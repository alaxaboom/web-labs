function counterWithDelay(n) {
  if (n < 0) {
    return;
  }
  
  console.log(n);
  
  delay(1).then(() => {
    counterWithDelay(n - 1);
  });
}