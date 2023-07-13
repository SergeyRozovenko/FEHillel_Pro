// Создаем новый экземпляр объекта XMLHttpRequest
let xhr = new XMLHttpRequest();

// Открываем новый GET-запрос
xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19", true);

// Отправляем запрос
xhr.send();

// Обрабатываем ответ
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let response = JSON.parse(xhr.responseText);
    
    // Извлекаем данные о погоде из полученного ответа
    let temperature = response.main.temp;
    let pressure = response.main.pressure;
    let description = response.weather[0].description;
    let humidity = response.main.humidity;
    let windSpeed = response.wind.speed;
    let windDirection = response.wind.deg;
    let iconCode = response.weather[0].icon;

    // Выводим данные на страницу
    document.getElementById("temperature").innerHTML = `Температура: ${temperature}°C`;
    document.getElementById("pressure").innerHTML = `Давление: ${pressure} hPa`;
    document.getElementById("description").innerHTML = `Описание: ${description}`;
    document.getElementById("humidity").innerHTML = `Влажность: ${humidity}%`;
    document.getElementById("wind").innerHTML = `Скорость ветра: ${windSpeed} м/с, направление: ${windDirection}°`;
    document.getElementById("icon").src = `http://openweathermap.org/img/w/${iconCode}.png`;
  }
};
