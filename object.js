const user = {
    age: 25,
    name:"Grace",
    bio:"Hello my name is Grace, passionate about tech and i love kids",
    image:"Grace.jpg"
};

//Use Javascript to update HTML with object values
document.getElementById("user-name").textContent=user.name;
document.getElementById("user-age").textContent= "Age: " + user.age;
document.getElementById("user-bio").textContent= user.bio;
document.getElementById("user-image").src = user.image;