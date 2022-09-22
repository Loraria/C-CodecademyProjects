#include <iostream>
#include <cstdlib>

int main(){
  //your future is here
  std::cout<<"MAGIC 8-BALL: \n";
  //generate random answer from 0 to 9
  srand(time(NULL));
  int answer = std::rand()%10;

  if(answer==0){
    std::cout<<"It is certain.\n";
  } else if(answer==1){
    std::cout<<"That, my friend, you will find out soon.\n";
  } else if(answer==2){
    std::cout<<"Absolutely.\n";
  } else if(answer==3){
    std::cout<<"Sometimes I wonder the same.\n";
  } else if(answer==4){
    std::cout<<"That depends.\n";
  } else if(answer==5){
    std::cout<<"I cannot disclose that.\n";
  } else if(answer==6){
    std::cout<<"Definitely not.\n";
  } else if(answer==7){
    std::cout<<"Without a question.\n";
  } else if(answer==8){
    std::cout<<"Yes, I am sure.\n";
  }
  else {
    std::cout<<"Very doubtful.\n";
  }
}
