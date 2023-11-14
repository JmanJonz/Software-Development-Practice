function fizzBuzz(n) {
    // loop through each number up to n inclusive
        for(let i = 1; i <= n; i += 1){
            // if i is divisible by 3 and 5 evenly print fizzbuzz
                if(i % 5 === 0 && i % 3 === 0){
                    console.log("FizzBuzz");
                }
            // if i is only divisible by 3 but not 5 print Fizz
                if(i % 3 === 0 && i % 5 !== 0){
                    console.log("Fizz");
                }
            // if by 5 and not 3 print Buzz
                if(i % 3 !== 0 && i % 5 === 0){
                    console.log("Buzz");
                }
            // if not by 5 and not 3 print Buzz
                if(i % 3 !== 0 && i % 5 !== 0){
                    console.log(i);
                }

        }
}

fizzBuzz(15);