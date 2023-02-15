#include <iostream>

int main(){
//Fizzbuzz challenge

//output numbers from 1 to 100
//for multiples of 3 print Fizz
//for multiples of 5 print Buzz
//for numbers who are multiples of 3 and 5 print FizzBuzz

for(int i=1;i<=100; i++){
  if(i%3==0 && i%5!=0){
    std::cout<<"Fizz\n";
  } else if(i%5==0 && i%3!=0){
    std::cout<<"Buzz\n";
  } else if(i%3==0 && i%5==0){
    std::cout<<"FizzBuzz\n";
  } else {
    std::cout<<i <<"\n";
  }
}
