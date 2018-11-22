function dateAndTime() {
    let today = new Date();
    let day = today.toLocaleDateString("fi-FI", { weekday: "long" });
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  
    return `Today is: ${day} \nCurrent time: ${time}`;
  }
  
  const x = dateAndTime();
  console.log(x);