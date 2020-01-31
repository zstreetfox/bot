
// 'use strict';
// function guess() {
//     let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
//     };

// let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
//       console.log('Рандомное число: ', randomNumber);
  
//  let NumberY = function(){
//     NumberX = prompt('Угадай число от 1 до 100?');
//         if (NumberX === 0 ) {
//             alert('Игра закончена');
//         }else if(isNumber(NumberX)){
//             NumberX = +NumberX;
//             if (NumberX > randomNumber) {
//                 alert('Загаданное число меньше!');
//                 NumberStep();
//             }else if (NumberX < randomNumber) {
//                 alert('Загаданное число больше!');
//                 NumberStep();
//             }
            
//             else {
//                 alert('Вы победили! Поздравляем!');
//                 return;
//                 };
//         }else{
//             alert('Введи число!');
//             NumberX();
//         }
//         };
//         return NumberY();
//         }; 
        
//         let NumX = guess();
//         NumX();

//     // NumberX();

    'use strict';

    function NumberX() {
      let isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      };
    
      let getRandomNum = Math.floor(Math.random() * Math.floor(100)) + 1;
      console.log('Рандомное число: ', getRandomNum);
    
      let numberСheck = function () {
        let x = prompt('Введите число от 1 до 100');
        if (x === null) {
          alert('Игра закончена');
        } else if (isNumber(x)) {
        x = +x;
          if (x > getRandomNum) {
            alert('Загаданное число меньше!');
            numberСheck();
          } else if (x < getRandomNum) {
            alert('Загаданное число больше!');
            numberСheck();
          } else {
            alert('Victory!!');
            return;
          }
        } else {
          alert('Введи число!');
          numberСheck();
        }
      };
      return numberСheck;
      }
    
    let HareHumber = NumberX();
    HareHumber();