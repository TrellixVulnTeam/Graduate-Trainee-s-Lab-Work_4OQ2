
export {}
console.log("this is console window");

let firstName :string ="sathesh";
let lastName: string ="kumar";
let x:number= 100;
let result:boolean=true;
// let anyvalue;
// anyvalue = 100;
// anyvalue = "rohini";
// anyvalue = false;
// anyvalue = {};
// anyvalue  ();
// anyvalue = [];
// anyvalue. result = true;
//union type
let res: boolean | number;
res = false;
res = 100;
//arrays
// let a =[];
// let a =[] as number[];
let a = [10, 20, "rohini"];
let a1:number[]=[10,20];
let a2:string[];
a2 = ["sathesh","kumar"];
//array creation using constructor
let a3: number[] = new Array ();
let a4 = new Array();
// let a5 = new Array  <number>();
let a5 = new Array <number|boolean>();
let a6: any[]= new Array<any>();
//function
function showName(myname:string):void{
    console.log("my name is",myname);
}
showName("sathesh");

//return function
function sum(a:number, b:number){
return a+b;
console.log(sum(10,20));
}


//const keyword
const empObj={
    firstName:"sathesh",
    lastName:"Kumar",
};
console.log(empObj);
empObj.firstName = 'anil';
console.log(empObj);
// empObj ={};

// const Array = [10,20,30];
// Array [1] = 100;
// console.log(Array);
// Array = [];


