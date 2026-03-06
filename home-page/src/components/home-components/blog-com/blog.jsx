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


   let JsUser = {
    name : "Haseeb",
    age : 18 ,
    location : "layyah",
    email : "haseeb@gmail.com",
    isLogedIn : false,
    lastDaysLogin : ["Monday", "Friday"]
   }

   console.log(JsUser.location)
   console.log(JsUser["email"])

  return(
    <h1>hello world</h1>
  )
    
}
export default Blog;