//sea ships
// sea = "~~~~~~~~~~"
// while 10
ship = 5 //coordonata vaporului -> w
hp = 100//
x = Math.random() * 40
y = Math.random() * 40
z = Math.random() * 40
mina_1 = Math.round(x) //mina->x
mina_2 = Math.round(y)
mina_3 = Math.round(z)

//каждая мина отнимает 55% от Hp
//если жизни больше 50 процентов W
//если жизни меньше 50 процентов w
direction = ""//дирекция выбранная пользователем
  while(direction != null)  {
      ///////////moving ship///
      if(direction == ">") {
          ship++
      }
      if(direction == "<"){
          ship--
      }
      if (ship == mina_1|| ship == mina_2 || ship == mina_3){//если корабль на мине
          hp = hp - 55;
           alert(`Life ${hp} %`)
          if (hp <= 0){
            alert("GAME OVER!")
            break;
            }//прерывает цикл
      }
    ////////////shows tha map/////
    sea = " "
    n=1

    while(n <= 40){
        if(n == ship && hp >= 50){
            sea += "W"
        } else if(n == ship && hp <=50){
            sea += "w"
        }
        if (n == mina_1||n == mina_2||n == mina_3){
            sea += "x"
        }
        else{
            sea+="~"
        }
        n++
    }
    direction = prompt(sea)
    ///////////////////////////////
}   