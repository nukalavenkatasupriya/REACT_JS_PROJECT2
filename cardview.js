fetch("carddata.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("fetch API");
    console.log(data);
    trainersDetails(data.profiles);
    console.log(data.profiles);
  });
var main = document.getElementById("main");
console.log(main);

var cardViewName = document.createElement("h1");
cardViewName.textContent = "Card View";
main.appendChild(cardViewName);

var section1 = document.createElement("section");
section1.classList.add("profileCards");

function trainersDetails(trainer) {
  for (i in trainer) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("trainerCard");

    var image = document.createElement("img");
    image.src = "download.png";
    image.alt = trainer[i].name + " image";
    cardDiv.appendChild(image);

    let name = document.createElement("h2");
    name.textContent = trainer[i].name;
    cardDiv.appendChild(name);
  
    let phoneNo = document.createElement("h2");
    phoneNo.textContent = trainer[i].phone;
    cardDiv.appendChild(phoneNo);

  
    let emailId = document.createElement("h2");
    emailId.textContent = trainer[i].email;
    cardDiv.appendChild(emailId);


    let add = document.createElement("h2");
    add.textContent = trainer[i].address;
    cardDiv.appendChild(add);

    let anch = document.createElement("a");
    anch.href = "resume.html";
    cardDiv.appendChild(anch);
   
    let btn = document.createElement("button");
    btn.textContent = "Click me";
    anch.appendChild(btn);
    section1.appendChild(cardDiv);
  }
  
}
main.appendChild(section1);
