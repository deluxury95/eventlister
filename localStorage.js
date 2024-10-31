//const user = {
   // id: 1,
   // name: "luxury",
   // country: "south",
//};

//localStorage.setItem('user', JSON.stringify(user));

//const user =localStorage.getItem('userObject')
//console.log(JSON.parse(userObject))

const storedArray = localStorage.getItem("fruits");
const arrayFromStorage = JSON.parse(storedArray);

console.log(arrayFromStorage);