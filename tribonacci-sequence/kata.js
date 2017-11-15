const signature = [1,1,1];
const n = 10;

function tribonacci(signature,n){
  if (n <= signature.length) return signature.slice(0, n);
  for (let i = 4; i <= n; i++) {
    signature.push(signature.slice(-3).reduce((acc, curr) => acc + curr));
  }
  return signature;
}

console.log(tribonacci(signature, n));
