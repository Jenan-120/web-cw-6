function logger() {
    let logger=["apple","strawberries","blueberry","cherries"];
    logger.forEach(function (element){
    });   
}
let temperatures = [50,34,21,30,44.22,33.42];

function hottestDays(){ 
    let hottestDays = [];
    if (temp > 18) {
        hottestDays.push(temp);
    }
}
console.log(hottestDays);

hottestDays(temperatures);
function bookId( ) {
    let holder = false;
    let books=[
       { name:"The Spirit of Want", id:"a" },
       { name:"Dark Places"  , id:"b" },
       { name:"Tell No One"  , id:"c" },
    ];
}

let user = prompt("enter book name or id number");

for( let i = 0 ; i < books . length; i++ ) {

    if(user == book[i].name && holder == false) {

        alert("we have this book");
        holder=true;

    }
}
if(holder==false) {
    alert("error: unidentified");

}