// const doubleIt = num => num * 2;
// const add = (x, y) => x + y;
// const give5 = () => 4000;
// const result2 = give5();
// const result = add(50, 70);
// console.log(result2);

// const doMath = (x, y) => {
//     const sum = x + y;
//     const diff = x - y;
//     const  result = sum * diff;
//     return result ;
// }
// const result3 = doMath(7, 5);
// console.log(result3);
const ages = [12, 14, 11, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [150, 136, 212];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);

const bussiness = 650;
const minister = 450;
const sochib = 23333;
// const maximum = Math.max(bussiness, minister, sochib);
const takapoisa = [344,22,2222222,10000000000];
const maximum = Math.max(...takapoisa);
// console.log(maximum);
class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new student(12, "shuvo");
const student2 = new student(22, "mahiya");
// console.log(student1,student2);
class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fathername;
    }
}

const baby = new Child("Arnold");
console.log(baby.getFullName());