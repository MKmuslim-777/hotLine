function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const hearts = document.querySelectorAll(".ri-heart-line");

for (const heart of hearts){
    heart.addEventListener("click", function () {
        const availableHeart = getElement("available-heart").innerText;
        console.log(availableHeart);
        const sumHeart = Number(availableHeart) + 1;
        getElement("available-heart").innerText = sumHeart;
});
}



function handleCall(id){
  const availableCoin = Number(getElement("available-coin").innerText);
  if(availableCoin < 20){
    alert("You Have no coins");
    return
  }
  const number = Number(getElement(`${id}-number`).innerText);
  

  const subTitle = getElement(`${id}-sub-title`).innerText;
  alert("📞 Calling " + subTitle + " " + number);


  const sumCoin = availableCoin - 20;
  
  getElement("available-coin").innerText = sumCoin;
}




getElement("emergency-call").addEventListener("click", function(){
    handleCall("emergency");
})
getElement("police-call").addEventListener("click", function(){
    handleCall("police");
})
getElement("fire-call").addEventListener("click", function(){
    handleCall("fire");
})

// ambulance
getElement("ambulance-call").addEventListener("click", function(){
    
  const number = getElement(`ambulance-number`).innerText;
  

  const subTitle = getElement(`ambulance-sub-title`).innerText;
  alert("📞 Calling " + subTitle + " " + number);
  

  const availableCoin = Number(getElement("available-coin").innerText);
  

  const sumCoin = availableCoin - 20;
  
  getElement("available-coin").innerText = sumCoin;
})

getElement("women-call").addEventListener("click", function(){
    handleCall("women");
})
getElement("anti-call").addEventListener("click", function(){
    handleCall("anti");
})
getElement("electricity-call").addEventListener("click", function(){
    handleCall("electricity");
})
getElement("brac-call").addEventListener("click", function(){
    handleCall("brac");
})
getElement("railway-call").addEventListener("click", function(){
    handleCall("railway");
})



// getElement("emergency-call").addEventListener("click", function(){
//   const number = Number(getElement("emergency-number").innerText);
  

//   const subTitle = getElement("emergency-sub-title").innerText;
//   alert("📞 Calling " + subTitle + " " + number);
//   console.log(subTitle);

//   const availableCoin = Number(getElement("available-coin").innerText);
  

//   const sumCoin = availableCoin - 20;
  
//   getElement("available-coin").innerText = sumCoin;
// })
