function dateAndTime() {
  let today = new Date();
  let day = today.toLocaleDateString("fi-FI", { weekday: "long" });
  let date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  return `Day: ${day} \nDate: ${date}\nTime: ${time}`;
}

const x = dateAndTime();
console.log(x);
