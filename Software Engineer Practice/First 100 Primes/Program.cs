// get lots of standard c# functionality
    using System;

// goal write a function that returns an array holding the first 
// 100 prime numbers then go through them and print one by one
    void get100Prime(){
        // function to check if int is prime it will be used throughout
        // a later function
        // assuming that num is prime until proven otherwise and returning results
            bool isPrime(int num){
                bool numIsPrime = true;
                if(num == 1){
                    return false;
                }
                if(num != 2 && num % 2 == 0){
                    return false;
                }
                for(int i = 3; i <= Math.Sqrt(num); i += 2){
                    if(num % i == 0){
                        return false;
                    }
                }
                return numIsPrime;
            }
        // set a counter and conditinally print prime nubmers until the counter 
        // reaches 100
            var count = 0;
            for(int i = 1; count < 100; i += 1){
                if(isPrime(i)){
                    count += 1;
                    Console.WriteLine(i);
                }
            }
    }
get100Prime();
