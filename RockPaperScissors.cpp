#include <iostream>
#include <stdlib.h>

/*
Rock Paper Scissors Lizard Spock
(The Big Bang Theory)
*/

int main() {

//live long and prosper

//randomizer and seed reset
srand (time(NULL));
int computer = rand() % 3 + 1;
//user input variable
int user = 0;

//begin
std::cout << "====================\n";
std::cout << "rock paper scissors!\n";
std::cout << "====================\n";
 
std::cout << "1) ✊\n";
std::cout << "2) ✋\n";
std::cout << "3) ✌️\n";
 
std::cout << "shoot! ";

//user input
std::cin>> user;

//evaluate winner
if (user==1 && computer==3 || user==2 && computer==1 || user==3 && computer==2){
  std::cout<<"Congratulations! You won!\n";
} else {
  std::cout<<"Well, better luck next time... The computer beat your ass.\n";
}
}
