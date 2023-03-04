const api_key = `beee22bff8cf09533c9f58f0dc24be98`;

const loadTemp = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayTemp(data);
  } catch (error) {
    console.log(error);
  }
};

const displayTemp = (tempData) => {
  console.log(tempData);
  // set temperature
  setInnerText("temp", tempData?.main?.temp);
  //   set city
  setInnerText("city-name", tempData?.name);
  //   set weater condition
  setInnerText("weather-condition", tempData?.weather[0]?.main);
};

const setInnerText = (id, text) => {
  const temp = document.getElementById(id);
  temp.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const inputTextField = document.getElementById("search-field");
  const inputText = inputTextField.value;
  inputTextField.value = "";
  loadTemp(inputText);
});

loadTemp("dhaka");
