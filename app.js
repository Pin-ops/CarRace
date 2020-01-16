window.onload = () => {
    var redCarSpeed = 1 * (Math.floor(Math.random() * 10) + 1);
    var blueCarSpeed = 1 * (Math.floor(Math.random() * 10) + 1);

    var redCarPos = 0;
    var blueCarPos = 0;

    var redCarInterval = 0;
    var blueCarInterval = 0;

    var redCarTimer;
    var blueCarTimer;


    var startRace = document.getElementById('startButton');
    var car1 = document.getElementById('redCar');
    var car2 = document.getElementById('blueCar');

    var redCarGo = () => {
        car1.style.left = redCarPos + 'px';
        redCarPos += redCarSpeed;
        if (redCarPos > 1000) {
            document.getElementById('msg').innerHTML = 'Red car has won!'
            clearInterval(redCarTimer);
        }

    }

    var blueCarGo = () => {
        car2.style.left = blueCarPos + 'px';
        blueCarPos += blueCarSpeed;
        if (blueCarPos > 1000) {
            document.getElementById('msg').innerHTML = 'Blue car has won!';
            clearInterval(blueCarTimer);
        }
    }

    var startRedCar = () => redCarTimer = setInterval(redCarGo, redCarInterval);

    var startBlueCar = () => blueCarTimer = setInterval(blueCarGo, blueCarInterval);

    startRace.onclick = () => {
        startRedCar();
        startBlueCar();
    }
}