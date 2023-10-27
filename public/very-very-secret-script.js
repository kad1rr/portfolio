let index = 0;
let passIndex = 0;

const isCorrectKey = (key) => {
  switch (index) {
    case 0:
      return key.toLowerCase() === "arrowup";
    case 1:
      return key.toLowerCase() === "arrowup";
    case 2:
      return key.toLowerCase() === "arrowdown";
    case 3:
      return key.toLowerCase() === "arrowdown";
    case 4:
      return key.toLowerCase() === "arrowleft";
    case 5:
      return key.toLowerCase() === "arrowright";
    case 6:
      return key.toLowerCase() === "arrowleft";
    case 7:
      return key.toLowerCase() === "arrowright";
    case 8:
      return key.toLowerCase() === "a";
    case 9:
      return key.toLowerCase() === "b";
  }
};

document.addEventListener("keydown", (e) => {
  if (isCorrectKey(e.key)) {
    index++;
    passIndex++;
  } else {
    index = 0;
    passIndex = 0;
  }

  if (passIndex === 10) {
    alert(
      "Yayy! You find it! Thats a very very hard secret thing to find out :D Good Job!"
    );
  }
});
