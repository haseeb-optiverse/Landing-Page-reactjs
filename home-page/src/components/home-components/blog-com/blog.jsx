const Blog = () => {
  // let score = "23";
  // console.log(typeof score)
  // console.log (score)

  // console.log(Number(score))

  // let isLoggedIn = 1;
  // let booleanIsLoggedIn = isLoggedIn;
  // console.log(Boolean(booleanIsLoggedIn))

  // let marvelHeros =["thor", "ironman", "spiderman"]
  // console.log(marvelHeros)

  // let dcHeros = ["superman", "batman", "flash"]
  // console.log(dcHeros)

  // console.log(marvelHeros.concat(dcHeros))

  //  marvelHeros.push(dcHeros)

  // console.log(marvelHeros)

  //  let allNewHeros = [...marvelHeros, ...dcHeros]     _____"this is spread operator"
  //  console.log(allNewHeros)

  // let newArr =[1, 2, 3, 4, 5, [6, 7], 7, [6, 7, [4, 5]]]
  // let newArr2 = newArr.flat(Infinity)
  // console.log(newArr2 )

  // console.log(Array.from("haseeb"))
  // console.log(Array.from({name : "haseeb"}))    "intersting_case"

  // let score1 = 100;
  // let score2 = 200;
  // let score3 = 300;

  // console.log(Array.of(score1, score2, score3))

  // ************************ OBJECTS *********************************

  //  let symbol =  Symbol( "mykey");

  //  let JsUser = {
  //   name : "Haseeb",
  //   "full name" : "Haseeb ur Rehman",
  //   [symbol] : "mykey2",
  //   age : 18 ,
  //   location : "layyah",
  //   email : "haseeb@gmail.com",
  //   isLogedIn : false,
  //   lastDaysLogin : ["Monday", "Friday"]
  //  }

  //  console.log(JsUser.location)
  //  console.log(JsUser["email"])
  //  console.log(JsUser["full name"])
  //  console.log(JsUser[symbol])

  //  console.log(JsUser)

  // JsUser.email= "haseeb@microsoft.com"
  // Object.freeze(JsUser);
  
//  JsUser.greeting = function () {
//     console.log("hello Js User")
//  }

//   JsUser.greetingTwo = function () {
//     console.log(`hello Js User, ${this.name}`)
//  }
 

//  console.log(JsUser.greeting())
//  console.log(JsUser.greetingTwo())


  // const tinderUser = {}
  // tinderUser.id = "123s"
  // tinderUser.name = "Haseeb"
  // tinderUser.isLogedIn = false
  
  // console.log(tinderUser)


  // const regularUser = {
  //   email : "haseeb@gmail.com",
  //   userName : {
  //     userFullName : {
  //       firstName : "haseeb",
  //       lastName : "Malik"
  //     }
  //   }
  // }

  // console.log(regularUser.userName.userFullName.firstName)

  // const obj1 = {1 : "a", 2 : "b"}
  // const obj2 = {3 : "a", 4 : "b"}
  // const obj3 = {5 : "a", 6 : "b"}

  // const obj4 = Object.assign({}, obj1, obj2, obj3 )
  // const obj4 = {...obj1, ...obj2, ...obj3}
  // console.log(obj4) 

  // ************************ Functions **************************


  
  // function addTwoNum(num1, num2) {
  // console.log(num1 + num2)
  // }
  //  addTwoNum(3, 4)





  //  function loginUsername(userName) {
  //   if (!userName) {
  //     console.log("please enter userName")
  //      return
  //   }
  //  return `${userName} just logged in`
  //  }
  //  console.log(loginUsername("haseeb"))


// **************************** immediately invoked function (IIFE) ******************************** 

// function one() {
//   console.log(`DB Connected`)
// }
// one()

// IIFE
// (function one() {
//   console.log(`DB Connected`)
// })();

// // arrow function
// (() =>{
//   console.log(`DB Connected Two`)
// }

// )();

// ((name) =>{
//   console.log(`DB Connected Two ${name}`)
// }

// )("Haseeb")


//******************************* filter map and reduce ****************************************

// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//let newNums = myNums.filter((nums) => nums > 4 )

// these boths  return same output

// let newNums = myNums.filter((nums) => {
//   return nums > 4
// } )

// let newNums =[]

// myNums.forEach((nums) => {
//   if (nums > 4) {
//     newNums.push(nums)
//   }
// })
// console.log(newNums)

//  let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  let newNums = myNums
//               .map((num) => num * 10 )
//               .map((num) => {
//                 return num + 1
//               })
//               .filter((num) => num >= 40 )
// console.log(newNums)

let myNums = [ 1, 2, 3]

let newNums =myNums.reduce((acc , curr) => {
  return acc + curr
}, 0 )
console.log(newNums)

  return(
    <h1>hello world</h1>
  )
    
}
export default Blog;