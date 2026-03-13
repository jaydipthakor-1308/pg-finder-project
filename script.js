let selectedPG=""

function scrollToSearch(){
document.getElementById("search").scrollIntoView({behavior:"smooth"});
}

function searchPG(){

let input=document.getElementById("searchLocation").value.toLowerCase()

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

let location=card.getAttribute("data-location")

if(location.includes(input) || input==""){
card.style.display="block"
}
else{
card.style.display="none"
}

})

}

function bookPG(name){

selectedPG=name

document.getElementById("bookingForm").style.display="flex"

document.getElementById("pgName").innerHTML="Booking for: "+name

window.scrollTo(0,document.body.scrollHeight)

}

function confirmBooking(){

let user=document.getElementById("userName").value

if(user==""){
alert("Please enter your name")
return
}

let li=document.createElement("li")

li.innerHTML=user+" booked "+selectedPG

document.getElementById("bookedList").appendChild(li)

alert("Your PG Booking is Confirmed!")

document.getElementById("bookingForm").style.display="none"

}