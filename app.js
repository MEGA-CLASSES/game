const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#computer-score");
const choices=document.querySelectorAll(".choice");
let usr=0;
let com=0;

//choices.forEach((choice)=>choice.addEventListener("click",()=>console.log(choice.id)))
//the above line of code is used to check how the object that is clicked is accessed

//-------------------adding event listners to every choice---------
choices.forEach(choice=>{
                        choice.addEventListener("click", ()=>{
                                                                winner(choice);
                                                             }
                                                  )
       }
                 )
 //-------------------------------winner function----------------------- 
 
 function winner(choice)
                      { let option=["Paper","Rock","Scissor"];
                        let randomNumber=Math.random()*3;
                        let indx=Math.floor(randomNumber);
                        let comChoice=option[indx];
                        let userWin=1;
                        console.log(`you select ${choice.id} and computer select ${option[indx]}`)
                        // -----Now we will return the winner-----
                        if(comChoice==choice.id)
                          {updateDraw();
                          }
                        else {
                             if(choice.id=="Paper")
                              {
                               userWin=comChoice=="Rock"?1:0;
                              }
                             else if(choice.id=="Rock")
                              {
                               userWin=comChoice=="Scissor"?1:0;
                              }       
                             else if(choice.id=="Scissor")
                              {
                               userWin=comChoice=="Paper"?1:0;
                              }
                               updateWin(userWin);
                              }
                    }
         //=============================================================//           
         function updateDraw()
                             {
                              msg.innerText="Draw ";

                             }
         //============================================================//
         function updateWin(userWin){
                                     if(userWin){ 
                                                 userScore.innerText=++usr;
                                                 msg.innerText="you beats computer"
                                                 }
                                      else{ ;
                                        compScore.innerText=++com;
                                        msg.innerText="Computer beats you";
                                          }                     
                   if(userScore.innerText==5||compScore.innerText==5)
                     { if(userScore.innerText==5)
                       {msg.innerText="Congratulation you have won the game"
                       msg.style.backgroundColor="green";
                       }
                       else {
                             msg.innerText="Sorry! you have lost the game";
                             msg.style.backgroundColor="red";   
                            }
                              console.log(fun);
                               } 
                                  }          
