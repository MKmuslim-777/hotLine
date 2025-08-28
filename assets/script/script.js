function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const hearts = document.querySelectorAll(".ri-heart-line");

for (const heart of hearts){
    heart.addEventListener("click", function () {
        const availableHeart = getElement("available-heart").innerText;
        const sumHeart = Number(availableHeart) + 1;
        getElement("available-heart").innerText = sumHeart;
});
}

function handleCopy(id){
    const number = getElement(id).innerText;
    alert("নম্বর কপি হয়েছেঃ " + number);
    navigator.clipboard.writeText(number);
    const availableCopy = getElement("available-copy").innerText;
    const sumCopy = Number(availableCopy) + 1;
    getElement("available-copy").innerText = sumCopy;
}

function handleCall(id){
  const availableCoin = Number(getElement("available-coin").innerText);
  if(availableCoin < 20){
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে। ");
    return
  }
  const number = Number(getElement(`${id}-number`).innerText);
  const now = new Date(); 
  const time = now.toLocaleTimeString();
  
  const subTitle = getElement(`${id}-sub-title`).innerText;
  const title = getElement(`${id}-title`).innerText;
  alert("📞 Calling " + subTitle + " " + number);


  const sumCoin = availableCoin - 20;
  
  getElement("available-coin").innerText = sumCoin;

  const historyContainer = getElement("history");

  const newHistory = document.createElement("div");

  newHistory.innerHTML = `
            <div class="history">
                <div class="flex justify-between p-4 items-center bg-gray-100 rounded-xl mt-5">
                    <div>
                        <h3 class="text-[18px] font-semibold">${title}</h3>
                        <p class="text-gray-700 text-[16px] mt-3">${number}</p>
                    </div>
                    <p class="text-[18px] font-semibold ml-4">${time}</p>
                </div>

            </div>
    
    `
    historyContainer.append(newHistory);


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
    
  const availableCoin = Number(getElement("available-coin").innerText);
  if(availableCoin < 20){
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে। ");
    return
  }
  const number = getElement(`ambulance-number`).innerText;
  const now = new Date(); 
  const time = now.toLocaleTimeString();
  
  const subTitle = getElement(`ambulance-sub-title`).innerText;
  const title = getElement(`ambulance-title`).innerText;
  alert("📞 Calling " + subTitle + " " + number);


  const sumCoin = availableCoin - 20;
  
  getElement("available-coin").innerText = sumCoin;

  const historyContainer = getElement("history");

  const newHistory = document.createElement("div");

  newHistory.innerHTML = `
            <div class="history">
                <div class="flex justify-between p-4 items-center bg-gray-100 rounded-xl mt-5">
                    <div>
                        <h3 class="text-[18px] font-semibold">${title}</h3>
                        <p class="text-gray-700 text-[16px] mt-3">${number}</p>
                    </div>
                    <p class="text-[18px] font-semibold ml-4">${time}</p>
                </div>

            </div>
    
    `
    historyContainer.append(newHistory);
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



getElement("emergency-copy").addEventListener("click", function(){
    handleCopy("emergency-number");
})
getElement("police-copy").addEventListener("click", function(){
    handleCopy("police-number");
})
getElement("fire-copy").addEventListener("click", function(){
    handleCopy("fire-number");
})
getElement("ambulance-copy").addEventListener("click", function(){
    handleCopy("ambulance-number");
})
getElement("women-copy").addEventListener("click", function(){
    handleCopy("women-number");
})
getElement("anti-copy").addEventListener("click", function(){
    handleCopy("anti-number");
})
getElement("electricity-copy").addEventListener("click", function(){
    handleCopy("electricity-number");
})
getElement("brac-copy").addEventListener("click", function(){
    handleCopy("brac-number");
})
getElement("railway-copy").addEventListener("click", function(){
    handleCopy("railway-number");
})





getElement("clear").addEventListener("click", function(){
    const historyContainer = getElement("history");
    historyContainer.innerHTML = "";
})