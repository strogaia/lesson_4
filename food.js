food_1_name = "Mamaliga"
food_1_price = 40
food_1_stock = 5

food_2_name = "Zama de casa"
food_2_price = 50
food_2_stock = 10


drink_3_name = "Wite wine"
drink_3_price = 100
drink_3_stock = 50


var cost_1 = 0;
var cost_2 = 0;
var cost_3 = 0;

/////////show the menu & read user///////
MENU = 
`
###########
MENU
###########
1. ${food_1_name} - ${food_1_price} mld 
2. ${food_2_name} - ${food_2_price} mld 
3. ${drink_3_name} - ${drink_3_price} mld 
`
option = prompt(MENU)
while(true){
///////////first///////////
if ( option == "1"){
    quantity = prompt(`How many "${food_1_name}" do you want?`)
    // if() -> <=0 -> wrong value
    // if() -> cantetatea-> stock
    if(quantity <= 0){
        alert("Wrong value")
    } else if(quantity > food_1_stock){
        alert(`We have not more ${food_1_name}`)
    } else {
        cost_1 += quantity * food_1_price
        answer = confirm( `option "${food_1_name}" ${food_1_price} x ${quantity} = ${quantity * food_1_price}`)
        // false /true
        if(answer == true){
          answer_2 = confirm("Do you want somesing else?")
          if(answer_2 == true){
            prompt(MENU)
          } else if(answer_2 == false){
            alert(cost_1 + cost_2 + cost_3)
            break;
          } 
        } 
        else if(answer == false){
          alert(cost_1 + cost_2 + cost_3)
          break; 
        } 
    }
} 
/////////first/////////////

///////////second///////////
else if ( option == "2"){
    quantity = prompt(`How many "${food_2_name}" do you want?`)
    if(quantity <= 0){
        alert("Wrong value")
    } else if(quantity > food_2_stock){
        alert(`We have not more ${food_2_name}`)
    } else {
      cost_2 += quantity * food_2_price
      answer = confirm( `option "${food_2_name}" ${food_2_price} x ${quantity} = ${quantity * food_2_price}`)
        if(answer == true){
          answer_2 = confirm("Do you want somesing else?")
          if(answer_2 == true){
            prompt(MENU)
          } else{
          alert(cost_1 + cost_2 + cost_3)
          break;
          }
        } else if(answer == false){
          alert(cost_1 + cost_2 + cost_3)
          break; 
        } 
    }
} 
/////////second/////////////
/////////third/////////////
else if ( option == "3"){
  quantity = prompt(`How many "${drink_3_name}" do you want?`)
    if(quantity <= 0){
        alert("Wrong value")
    } else if(quantity > drink_3_stock){
        alert(`We have not more ${drink_3_name}`)
    } else {
        cost_3 += quantity * drink_3_price
        answer = confirm( `option "${drink_3_name}" ${drink_3_price} x ${quantity} = ${quantity * drink_3_price}`)
        if(answer == true){
          answer_2 = confirm("Do you want somesing else?")
          if(answer_2 == true){
            prompt(MENU)
          } else {
          alert(cost_1 + cost_2 + cost_3)
          break;
          }
        } else if(answer == false){
          alert(cost_1 + cost_2 + cost_3)
          break; 
        }  
    }
} 
/////////third/////////////
else {
  alert("What is you choice?")
  }
}

// while---
/////////show the menu & read user///////
