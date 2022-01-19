//how many loops do we have in javascript?

//For loop


for(initialization; Condition; increment/decrement){

}

//Do-While loop

do
{
    //code
}while(Condition);

//difference between for in and for of loop

var arr = ["a","b","c"];      //whenever we iterate through the object  then we used for in
 var obj ={id:1, name:"harshita"} ;                          
                             //for in loop always returns the address
for (const key in arr) {
   console.log(key);
}
for (const iterator of object) {     // for of always returns value
    console.log(iterator);
}

//set-it holds unique value not repeating value

const set = new set([1,2,3,4]);
console.log(set);
for (let i  of set) {
    console.log(i);
    
}

//map vs reduce vs filter******very imp

const user = [{id:1, name:"paritosh"}, {id:2, name:"rahul"}];

//map,reduce and filter = callback function,
//these function always return a new value or new array
//
const finalUserNames = user.map(value=>value.name);
console.log(finalUserNames);

//diff bet map and foreach



























