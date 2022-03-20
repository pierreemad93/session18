// let num = [1 , 2 , 3 , 4];
// let newNum =[];
// for(let index = 0 ; index < num.length ; index ++){
//    newNum.push(num[index]+ num[index]);
// };

// console.log(newNum)


let num = [10, 20, 30, 40, 50]
let friends = ["mohamed " , "mazen" , "sherbeny" , "jimmy"]
num.map((element) => console.log(element));
num.reduce( (start + current)=>{
    //    console.log(start + current);
    // return start + current;
})

let filterd = friends.filter((element)=>{
    return element.startswith("M") ? true : false 
})

console.log(filtered)