//task-1
let arr = [1, 2, 3, 4];
let cube = arr.map(num => num ** 3);
console.log(cube);

//task-2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of 1 to 10 = ", sum);

//task-3

let primeNumbers = arr.filter(num => {
    if (num == 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
});

console.log("Prime numbers: ", primeNumbers);

//task-4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.

const squaredOddNums = arr.filter(num => num % 2 != 0).map(num => num ** 2);
sum = squaredOddNums.reduce((acc, curr) => acc + curr, 0);
let averageOfSquaredOddNums = sum / squaredOddNums.length;
console.log("Average of squared odd numbers = ", averageOfSquaredOddNums);

//task-5:
let arrStr = ["abc", "pqrs", "abcdef", "abcfhg"]
let len = arrStr.map(s => s.length)
let mx = len.reduce((max, cur) => cur > max ? cur : max, 0);
let longestStr = arrStr.filter(s => s.length == mx);
console.log(longestStr);


//task-6:
let st = "hello i am riddhi";
let words = st.split(" ");
let cap = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
let ans = cap.join(" ");
console.log(ans);

//task-7
let students = [
    {
        name: "s1", score: 77
    },
    {
        name: "s2", score: 50
    }
    , {
        name: "s3", score: 90
    }
];
let passedStudents=students.filter(s=>s.score>60);
console.log("Passed students: ",passedStudents);

//task-8:
function createInstanceCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();
console.log(counter1()); 
console.log(counter1());
console.log(counter2()); 
console.log(counter2()); 

//task-9:
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject('Invalid type');
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '_':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Can not divide by zero');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Invalid operation');
        }
    });
}
calculator(10, 5, '+').then(result => console.log('Ans:', result)).catch(error => console.error('Error:', error));


    //task-10:
    
    const scores = [
        { score: 1 },
        { score: 2 },
        { score: 3 },
        { score: 4 }
    ];
    let total=0;
    arr.forEach(obj => {
    total += obj.score;
    });

    console.log(total);