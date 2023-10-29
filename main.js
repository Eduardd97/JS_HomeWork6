// Задание 1 //

function sol1(data) {
    const a = data.a;
    const b = data.b;

    const s = a * b;
    const p = 2 * (a + b);

    return { s: s, p: p };
}

const result = sol1({ a: 10, b: 20 });
console.log(result);

// ------------------------------------- //

const sideAInput = document.querySelector(".side_a");
const sideBInput = document.querySelector(".side_b");
const calculateButton = document.querySelector(".calculate_button");
const rectangle = document.getElementById("rectangle");
const sideAValue = document.getElementById("sideAValue");
const sideBValue = document.getElementById("sideBValue");
const areaRectangle = document.querySelector (".area_rectangle");
const perimeterRectangle = document.querySelector (".perimeter_rectangle")

calculateButton.addEventListener("click", function() {
    let userEnteredSideA = sideAInput.value.trim().replace(",", ".");
    let userEnteredSideB = sideBInput.value.trim().replace(",", ".");

    userEnteredSideA = parseFloat(userEnteredSideA);
    userEnteredSideB = parseFloat(userEnteredSideB);

    
    if (!isNaN(userEnteredSideA) && !isNaN(userEnteredSideB)) {

        let sideA = Math.min(Math.max(userEnteredSideA, 3), 20);
        let sideB = Math.min(Math.max(userEnteredSideB,1.5), 10);
            
        console.log ("userEnteredSideA, userEnteredSideB =>",userEnteredSideA, userEnteredSideB)
        console.log ("-----------")
    
        rectangle.style.width = sideA + "cm";
        rectangle.style.height = sideB + "cm";
    
        console.log("sideA, sideB =>", sideA, sideB)
        console.log ("-----------")
    
        sideAValue.textContent = "Сторона A: " + userEnteredSideA + "cм.";
        sideBValue.textContent = "Сторона B: " + userEnteredSideB + "cм. ";
    
        function sol1(data) {
            const a = data.a;
            const b = data.b;
            
            const s = a * b;
            const p = 2 * (a + b);
            
            return { s: s, p: p };
        }
            
        const result = sol1({ a: userEnteredSideA, b: userEnteredSideB });
        console.log(result);
    
        areaRectangle.textContent = "Площадь прямоугольника равна : " + result.s + "см.";
        perimeterRectangle. textContent = "Периметр прямоугольника равен: " + result.p + "см.";
    
        sideAInput.value = "";
        sideBInput.value = "";
            
    } else {
        alert("Пожалуйста, введите корректные числовые значения.");
    }
});