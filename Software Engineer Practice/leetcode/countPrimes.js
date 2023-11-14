var countPrimes = function(n){
    // create counter to count number of prime numbers in n
    // only those that are strictly less than n
    // remember that 1 is not prime and 2 is the only even prime number
        let primeCount = 0

    // loop through all numbers that need to be checked for primes
    // if number is prime increase the prime count
        for(let num = 2; num < n; num += 1){
            // if the number === 2 or is odd proceed to check if it is prime
                if(num === 2 || num % 2 !== 0 || num % 3 !== 0 || num % 5 !== 0 || num % 7 !== 0 || num % 11 !== 0){
                    // assume that num is prime until proven otherwise
                        let numIsPrime = true;
                    // check if num is prime by checking up to it's squre root
                        for(let divisor = 2; divisor <= Math.sqrt(num); divisor += 1){
                            if(num % divisor === 0){
                                numIsPrime = false;
                                break;
                            }
                        }
                    // if the current number is prime add 1 to prime count
                        if(numIsPrime){
                            primeCount += 1;
                        }
                }
        }

    // after checking all possible numbers in n return numbers of primes in n
        return primeCount;
};