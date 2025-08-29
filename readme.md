  1. উল্লেখিত property গুলো JS এর সিলেক্টর হিসেবে ধরে নিতে পারি আমরা। যেমনঃ 
     a. যদি আমরা HTML এর কোনো Element কে ID Name ইউজ করে JS এ নিয়ে আসতে চাই। তাহলে আমরা *getElementById* ইউজ করবো। 
     b. যদি আমরা HTML এর কোনো Element কে Class Name ইউজ করে নিয়ে আসতে চাই তাহলে আমরা *getElementByClassName* ইউজ করে থাকি। 
     c. যদি আমরা কোনো Element কে CSS Selector (.element-name, #element-name) এর মতো করে নিয়ে আসতে চাই তাহলে *querySelector* ইউজ করবো। 
     d. আর যদি আমরা একই Class Name এর সব Element কে ধরে কাজ করতে চাই, তাহলে আমরা *querySelectorAll* ইউজ করি। 

---

  2. JS-এ Element Create করে DOM এ ঢোকানোর জন্য আমাদের কয়েকটি স্ট্যাপ অবলম্বন করতে হয়। 
    প্রথমে আমরা একটি Container Element তৈরি করবো। যেমনঃ *const newElement = document.createElement("div")*
    তারপর আমরা এই Container Element এ কোনো child Element ঢোকাতে *const childElement = document.getElementById("header-title");*
*newElement.appendChild(childElement)* এভাবে কাজ করবো। 

-----

  3. Event Bubbling হলো এমন, আমরা যখন কোনো Element এ Event করবো। তখন সেটি তার নিজস্ব Element ছাড়িয়ে তার প্যারেন্ড, উক্ত প্যারেন্ডের প্যারেন্ড এভাবে করে document Object পর্যন্ত পৌছে যায় Bubbling করতে করতে। আর এটাকেই আমরা Event Bubbling বলে থাকি। 

------


  ###4. Event Delegation হলো, একটি প্যারেন্ড Container এ যদি ১০টি Child থাকে তাহলে তাদের প্রতিটি Child এর জন্য আলাদা আলাদা Event Lisenter না লিখে সরাসরি তাদের প্যারেন্ড Container জন্য Event Lisenter করা এবং ইউজার ঠিক কোন Child এ Event করেছে সেটা দেখা হয় *event.target* দিয়ে। এতে করে কোড ফ্রেশ এবং কোড কম লিখতে হয়। পারপম্যাঞ্চ ভালো থাকে। 

-----


  5. preventDefault এবং stopPropagation দুটিই আলাদা ভাবে কাজ করে। 
    ১.preventDefault Element এর নিজস্ব behavior কে বন্ধ করে দেয়। ধরুন একটি form এ একটি বাটন আছে, এখন form এ ভিতরে অবশ্যই Default behavior ঘটাবে। কিন্তু যদি আমরা চাই, নাহ এটাকে আমরা বন্ধ করবো, তথা তার Defaul behavior বন্ধ করবো। তাহলেই আমরা এই প্রোপার্টি ইউজ করবো। 

    ২. stopPropagation Event Bubbling কে থামিয়ে দেয়। অর্থাৎ, আমরা যখন চাইবো, আমরা কোনো Element এ ক্লিক করলে সেটা তার প্যারেন্ড Container এ গিয়ে ট্রিগার না করুক। তাইলেই এটি ইউজ করবো। 