//event listener
document.getElementById("btn").addEventListener("click", showOrder);
document.getElementById("clear-btn").addEventListener("click", clearSite);

//event function
function clearSite() {
  //output
  document.getElementById("Size").value = "";
  document.getElementById("topping1").value = "";
  document.getElementById("topping2").value = "";
  document.getElementById("order-out").innerHTML = "----------";

  document.getElementById("pizza-img").innerHTML = "";
  document.getElementById("p73").innerHTML - "";
  //document.getElementById("pizza-pic").src =
}

function showOrder() {
  //Input
  let size = document.getElementById("Size").value;

  let topping1 = document.getElementById("topping1").value;

  let topping2 = document.getElementById("topping2").value;

  //process
  let order = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes! Thanks for ordering from <a href="https://www.pizza73.com/store/1/delivery" target="_blank"
  > Pizza 73 </a>`;
  console.log(order);

  //OUTPUT

  document.getElementById("order-out").innerHTML = order;
  document.getElementById(
    "pizza-img"
  ).innerHTML = `<img width="300px" id = "pizza-img" border-radius: "25px solid black" src="img/pizzaman.jpg">`;
}
/*
  Check Your Understanding:

  Part A:
  - Update the above code so it is a pizza order.
  - There are 3 inputs: one for the size, and two for toppings.
  - Output should be displayed on the website as "Your ______ pizza with _____ and ______ will be ready in 20 minutes!"

  Part B: Update the previous section so that 
  - the toppings appear as an unordered list like this:
  
      You have ordered a pizza with:
          - ham
          - pineapple
          
      Thank you for ordering from Pizza 73! You pizza will be ready in 20 minutes.
      
  - an image of a pizza appears under the order output

  - have the "Pizza 73" be a hyperlink that takes the user to Pizza 73's homepage.
  
*/
