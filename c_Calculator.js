<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Calculator!</title>
</head>
<body>

    <script>
        // JavaScript code
        function activateScript() {
            var hexesValue = parseFloat(document.getElementById("hexes").value);
            var peopleValue = parseFloat(document.getElementById("people").value);
            var foodValue = parseFloat(document.getElementById("food").value);
            var waterValue = parseFloat(document.getElementById("water").value);

            if (!isNaN(hexesValue) && !isNaN(peopleValue) && !isNaN(foodValue) && !isNaN(waterValue)) {
                let days = hexesValue / 4;
                if (hexesValue % 4 !== 0) {
                    days++;
                }
                let food_rq = days * peopleValue;
                let water_rq = days * peopleValue;

                if (foodValue > food_rq) {
                    food_rq = 0;
                } else {
                    food_rq -= foodValue;
                }

                if (waterValue > water_rq) {
                    water_rq = 0;
                } else {
                    water_rq -= waterValue;
                }

                let result = (food_rq * 5) + (water_rq * 2);

                // Creating HTML elements dynamically
                var resultText = document.createElement("p");
                resultText.id = "resultText";
                resultText.innerHTML = "The calculated value is: " + result;

                // Appending resultText to the body
                document.body.appendChild(resultText);
            }
        }

        // Creating HTML elements dynamically
        var h1 = document.createElement("h1");
        h1.innerHTML = "Welcome to the Calculator!";
        document.body.appendChild(h1);

        var labelHexes = document.createElement("label");
        labelHexes.htmlFor = "hexes";
        labelHexes.innerHTML = "Enter number of Hexes:";
        document.body.appendChild(labelHexes);

        var inputHexes = document.createElement("input");
        inputHexes.id = "hexes";
        inputHexes.type = "number";
        inputHexes.className = "custom";
        inputHexes.size = "32";
        inputHexes.inputmode = "numeric";
        document.body.appendChild(inputHexes);

        // Repeat the above steps for other HTML elements...

        var buttonCalculate = document.createElement("button");
        buttonCalculate.id = "calculate";
        buttonCalculate.disabled = "true";
        buttonCalculate.name = "calculate";
        buttonCalculate.innerHTML = "Calculate";
        buttonCalculate.addEventListener("click", activateScript);
        document.body.appendChild(buttonCalculate);
    </script>

</body>
</html>
