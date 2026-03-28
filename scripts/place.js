temperature = document.querySelector("#temp");
conditions = document.querySelector("#conditions");
wind = document.querySelector("#wind");
windchill = document.querySelector("#windchill");

speed = 6;
temp = 13;
chill = 0;

function calculateWindChill() {
    if (temp < 10 && speed > 4.8) {
        chill = 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16
    }
    else {
        chill = "N/A"
    }
}

temperature.textContent = "Weather: 13 °C";
conditions.textContent = "Conditions: Clear";
wind.textContent = "Wind: 6 km/h";
windchill.textContent = `Windchill: ${chill}`