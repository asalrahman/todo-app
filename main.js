


//let kitchenitemslist = document.getElementById('kitchen-items-list');
//let currypowder = ["salt","pepper", "chilli","turmeric"];
//console.log(currypowder);

// method 1


//    let li = document.createElement("li");
//  li.innerText = powder;
//  kitchenitemslist.appendChild(li);

//      for(let powder of currypowder){
//} 

//method 2
// foreach()
   // currypowder.forEach(function(powder,position){
    //  console.log(position)
    //let li = document.createElement("li");
     // li.innerText=`(${position+1})  ${powder}`;
    //kitchenitemslist.appendChild(li);
  
 //}); 



// 1 push ()
// 2 pop()
// 3 shift()
// 4 unshift()

// step 1 : find all list items here
//let allListiems = document.querySelectorAll('li')
//let powderarray = [];

//  step 3 :iterate all list items
//allListiems.forEach(function(Listitem){
  //  let Listiemtext= Listiem.innerText ;
 //step 3 : pushh all list item content to new array
//powderarray.push(Listiemtext);
//});

//console.log(powderarray);                                       

//  function makeATeaorCoffe(powder){
//  console.log("Step 1 : Boil the water");
//  console.log("Step 2 : add milk");
//  //........................
//  console.log(`Step 3 : put ${powder} powder`);
//  //........................
//  console.log("step 4 : put Sugar");
//  console.log("step 5 : wait for somme time ");
//  console.log("step 6 : pour to cup ");
//  alert(`${powder} is ready now`);
//  }
//  
//  
//  makeATeaorCoffe("coffee");
//  makeATeaorCoffe("tea");

//-----------------------------------

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemslist = document.getElementById("kitchen-items-list");

//creat an empty array
//let array= []








// when press enter
kitchenInput.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
      document.getElementById("add-btn").click();
     
   }
 });
// step 2
// add kitchen items
function addkitchenitems(event) {
 let kitchenInputData = kitchenInput.value;

// set to local storage
localStorage.setItem("kitcheninput",kitchenInputData);

// get from local storage
kitchenInputData = localStorage.getItem("kitcheninput");
console.log(kitchenInputData)



 // creat dom elements
 let li = document.createElement("li");
 li.innerText = kitchenInputData;
 //array.push(kitchenInputData);
 li.style.cssText="animation-name:slideIn;";
 kitchenItemslist.appendChild(li);
 kitchenInput.value ="";
 kitchenInput.focus();
 
 // creat a trash button

 let trashBtn = document.createElement("i");
 trashBtn.classList.add("fas","fa-trash");
 li.appendChild(trashBtn); 
 console.log(trashBtn);
  
//console.log(array);
 console.log(li);
}
//delete item from kitchen list
function deletkichenitem(event){
   if(event.target.classList[0]==="fas"){
  let item = event.target.parentElement;   
  item.remove();
   }
}



//step 1
// add an event lister to the button
addBtn.addEventListener("click", addkitchenitems);
kitchenItemslist.addEventListener("click", deletkichenitem);




