const cap = document.getElementsByClassName("cap1")[0];
const cap2 = document.getElementsByClassName("cap2")[0];
const cap3 = document.getElementsByClassName("cap3")[0];

cap.addEventListener(
  "click",
  function () {
    console.log("cap");
  },
  true
);

cap2.addEventListener(
  "click",
  () => {
    console.log("cap2");
  },
  true
);

cap3.addEventListener(
  "click",
  function () {
    console.log("cap3");
  },
  true
);