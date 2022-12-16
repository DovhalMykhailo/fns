      for(let i=0; i<=100;)
      document.write(Math.round((Math.random()*100)));
      let numUser;
      let numX=75;
      do { numUser = prompt("Вгадайте число 0-100",0);
      if (numUser===null){
          alert("МИ чекаємо число");
      }else if (+numUser<numX) {
          alert("Ваше число менше")
      }else if (+numUser>numX) {
          alert("Ваше число більше");
      } else {
          alert("Вгадали   "+numX );}
      } while (numUser != numX && numUser != null);       