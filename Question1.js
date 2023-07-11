function solution(A){
    let maxMultiple = null
    
   for(let i = 0; i < A.length; i++) {
    const num = A[i];
    
    if(num % 4 === 0){
        if(maxMultiple === null || num > maxMultiple){
            maxMultiple = num;
        }
     }
   }
   return maxMultiple
}


const A = [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
console.log(solution(A));