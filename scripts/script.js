// Функция для отправки запроса на получение данных о погоде
const fetchWeatherData = () => {
  const url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Произошла ошибка при выполнении запроса.");
      }
      return response.json();
    });
};

// Функция для обновления данных о погоде на странице
const updateWeatherData = (data) => {
  const temperature = `Температура: ${data.main.temp}°C`;
  const pressure = `Давление: ${data.main.pressure} hPa`;
  const description = `Описание: ${data.weather[0].description}`;
  const humidity = `Влажность: ${data.main.humidity}%`;
  const wind = `Скорость ветра: ${data.wind.speed} м/с, направление: ${data.wind.deg}°`;
  const iconCode = data.weather[0].icon;

  setWeatherData("temperature", temperature);
  setWeatherData("pressure", pressure);
  setWeatherData("description", description);
  setWeatherData("humidity", humidity);
  setWeatherData("wind", wind);
  setWeatherIcon("icon", iconCode);
};

// Функция для установки данных погоды на страницу
const setWeatherData = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

// Функция для установки иконки погоды на страницу
const setWeatherIcon = (id, iconCode) => {
  const element = document.getElementById(id);
  if (element) {
    element.src = `http://openweathermap.org/img/w/${iconCode}.png`;
  }
};

// Основной код
fetchWeatherData()
  .then(data => {
    updateWeatherData(data);
  })
  .catch(error => {
    console.log("Произошла ошибка:", error);
  });
