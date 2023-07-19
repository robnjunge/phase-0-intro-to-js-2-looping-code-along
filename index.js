// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const  myArray = ["Guadalupe", "Ollie", "Aki"];
let party = "surprise";

function writeCards(myArray, party) {
    let myArrayOne = [];
    for ( let a = 0; a < myArray.length; a++) {

        myArrayOne.push(`Thank you, ${myArray[a]}, for the wonderful ${party} gift!`);
        //debugger;

    }
    return myArrayOne;
}

// writeCards(myArray, party);
// function countDown () {
//     let count = 11;
//     while (count > 0 )
//     console.log(count--);
// }
//  countDown();

//let myArray1 = [4, 3, 2, 1, 0];

function countDown(myArray1) {
    while(myArray1 >= 0){
        console.log(myArray1)
        myArray1--
    }
}
countDown(4);





