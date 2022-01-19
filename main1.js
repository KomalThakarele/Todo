var users=[];


function setUser(){
    console.log("Here")
    const username = document.getElementById("pop1").value; //for capturing username by id name
    //next is pushing username into the array users
    const tempObject = {id:Date.now(), name:username}; //creating a temporary object and give id(a random value with date.now function)
    users.push(tempObject);
    document.getElementById("name").value="";
    console.log("Here", users);
    createTodo(); //create todo function below
}


//now creating new todo and adding data to it using dynamic html
function createTodo(){
    const dynamicCard = document.createElement('div'); //creating/adding new element div with var name dynamiccard
    dynamicCard.setAttribute("class", "card"); //giving the div class=card
    for (let index = 0; index < users.length; index++) { //using for loop to loop through users array
        const element = users[index];
        dynamicCard.setAttribute("id", element.id); //element.id for grtting id from div element
        dynamicCard.innerHTML=`
        <p>${element.name}</p> <!--adding name to todo-->
        <br>
        <input type="text" id="age" value="">
        <input type="submit" value="Add" onclick="addAge(this)">
        <p id="${element.id}"></p>
        `
    }
    console.log(dynamicCard);
    document.getElementById("users").appendChild(dynamicCard); //empty new todolists will go to div with id=users in html 
    //using appendChild function for appending dynamiccard to html with div having id=user
}


//adding age to new creted todolist
function addAge(temp){
    // console.log(temp.parentNode.id);
    const age = document.getElementById("age").value;
    // console.log(age);
    const dynamicAge = document.createElement('p');
    // dynamicAge.setAttribute("class","card");
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        console.log (dynamicAge, element.id, temp.parentNode.id);
        if (element.id == temp.parentNode.id) { //comparing users id with the temporary (temp) card 
            // temp.parentNode.id  this is the dom function for getting if from parent i.e p element
            dynamicAge.innerHTML = age;
            console.log(dynamicAge);
            document.getElementById(`${element.id}`).appendChild(dynamicAge);
        }
    }
}

