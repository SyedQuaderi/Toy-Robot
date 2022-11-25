
let roboto = document.getElementById('roboto');
let xPos, yPos, direction;

let reportLog = document.getElementById("reportLog");


const placeRobot = () => {
    let x = document.getElementById("x");
    let y = document.getElementById("y");
    let f = document.getElementById("f");
    xPos = parseInt((x.options[x.selectedIndex].value));
    yPos = parseInt((y.options[y.selectedIndex].value));
    direction = (f.options[f.selectedIndex].text);

    roboto.style.display = "block";
    roboto.style.left = xPos + "%";
    roboto.style.top = yPos + "%";
    roboto.className = direction;
	report();
}


const move = () => {
    if (Board()) {
        if (direction == "North") {
            if (yPos > 0) {
                yPos -= 20;
                roboto.style.top = yPos + "%";
            }

        } else if (direction == "South") {
            if (yPos < 80) {
                yPos += 20;
                roboto.style.top = yPos + "%";

            }
        } else if (direction == "East") {
            if (xPos < 80) {
                xPos += 20;
                roboto.style.left = xPos + "%";


            }
        } else if (direction == "West") {
            if (xPos > 0) {
                xPos -= 20;
                roboto.style.left = xPos + "%";
            }
        }
        if ((xPos == 80 && direction == "East") || (yPos == 80 && direction == "South") || (xPos == 0 && direction == "West") || (yPos == 0 && direction == "North")) {
			roboto.classList.add("edge");

        } else if ((xPos != 80 && direction == "East") || (yPos != 80 && direction != "South") || (xPos != 0 && direction != "West") || (yPos != 0 && direction != "North")) {
        	roboto.classList.remove("edge");
        
        }
        if (reportLog.style.visibility == "visible") {
            reportLog.innerHTML = `PLACE  ${xPos}, ${yPos}, ${direction}`
        }
    } 
	report();
}


const turnLeft = () => {
    if (Board()) {
        if (direction == "North") {
            direction = "West"
        } else if (direction == "West") {
            direction = "South"
        } else if (direction == "South") {
            direction = "East";
        } else if (direction == "East") {
            direction = "North"
        }
        roboto.className = direction;
        return;
    } 
}

const turnRight = () => {
    if (Board()) {
        if (direction == "North") {
            direction = "East";

        } else if (direction == "West") {
            direction = "North"
        } else if (direction == "South") {
            direction = "West"
        } else if (direction == "East") {
            direction = "South"

        }
        roboto.className = direction;
        return;
    }
}

const report = () => {
    reportLog.innerHTML = `PLACE  ${xPos}, ${yPos}, ${direction}`
}

const Board = () => {
    let dir = ["North", "West", "East", "South"];
    if (!dir.includes(direction) || xPos < 0 || xPos > 80 || yPos < 0 || yPos > 80)
        return false;
    return true;
}
