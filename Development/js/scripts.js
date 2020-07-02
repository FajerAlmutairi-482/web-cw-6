let name=["sarah", "maryam", "lujain"];
name.forEach(logger);

function logger(value){
    console.log(value)
}
//

let summerDeg= [47,48,53,55];
console.log(summerDeg.filter(myFunction)); 
function myFunction(x){
return x > 50 
}
// 
let books = [
    {
        name: "book1",
        ID:1,
    },

    {
        name: "book2",
        ID:2,
    },
    {
        name: "book3",
        ID:3,
    },
    {
        name: "book4",
        ID:4,
    },
];


function getBookById(){
    let holder = false;
    let bookID = prompt("أدخل رقم الكتاب")
        for (let i = 0; i< books.length; i++){
            if (books[i].ID == bookID) {
               
                console.log(" متوفر ")
            holder = true ;
            } 
        }
            if (holder == false){
                console.log("غير متوفر");
    
        }
    }


//


  let endshop ;
let bag = [] ;
while(endshop )
{
    let end =prompt("اكتب انتهيت عند الانتهاء ");
    if(end="انتهيت")
    {
        let item=prompt("السلعة");
        let price=prompt("السعر");

        let pel={
            end : end ,
            price : price ,
            item : item ,
        };
        bag.push(pel)
    }
    else (endshop = "انتهيت")
    console.log(pel);
}

let stillBuying = true;
let cart = [];
while (stillBuying) {
  let name = prompt("السلعه. اكتب انتهيت عندما تنتهي");
  if (name != "انتهيت") {
    let quantity = prompt("الكميه");
    let price = prompt("السعر");

    let item = {
      name: name,
      quantity: quantity,
      price: price,
    };
    cart.push(item);
  } else {
    stillBuying = false;
    printBill(cart);
  }
}
function printBill(items) {
  let totalPrice = 0;
  console.log("الفاتوره");
  console.log("-");
  for (let i = 0; i < cart.length; i++) {
    console.log(
      items[i]["quantity"] +
        " " +
        items[i]["name"] +
        " " +
        items[i]["price"] +
        " KD"
    );
    totalPrice += parseFloat(items[i]["price"]);
  }
  console.log("السعر الكلي:" + totalPrice);
  console.log("-");
}
