let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let divs = document.querySelectorAll(".bigBox div");
divs.forEach(function (div) {
    div.onclick = function() {
        if(this.innerHTML != "O" && this.innerHTML != "X") {
            this.innerHTML = "X";
            this.style.cssText = `animation: font ease-in-out 1s 1;`;
            let temp = numbers[numbers.indexOf(Number.parseInt(div.getAttribute("id")))]
            numbers[numbers.indexOf(Number.parseInt(div.getAttribute("id")))] = numbers[numbers.length - 1]
            numbers[numbers.length - 1] = temp
            numbers.pop();
                if((document.getElementById("0").innerHTML == "X" &&
                document.getElementById("3").innerHTML == "X" &&
                document.getElementById("6").innerHTML == "X")
                ||(document.getElementById("1").innerHTML == "X" &&
                document.getElementById("4").innerHTML == "X" &&
                document.getElementById("7").innerHTML == "X")
                || (document.getElementById("2").innerHTML == "X" &&
                document.getElementById("5").innerHTML == "X" && 
                document.getElementById("8").innerHTML == "X")
                || (document.getElementById("0").innerHTML == "X" && 
                document.getElementById("1").innerHTML == "X" &&
                document.getElementById("2").innerHTML == "X")
                || (document.getElementById("3").innerHTML == "X" && 
                document.getElementById("4").innerHTML == "X" && 
                document.getElementById("5").innerHTML == "X")
                || (document.getElementById("6").innerHTML == "X" &&
                document.getElementById("7").innerHTML == "X" && 
                document.getElementById("8").innerHTML == "X")
                ||(document.getElementById("0").innerHTML == "X" && 
                document.getElementById("4").innerHTML == "X" && 
                document.getElementById("8").innerHTML == "X")
                || (document.getElementById("2").innerHTML == "X" && 
                document.getElementById("4").innerHTML == "X" &&
                document.getElementById("6").innerHTML == "X")
                ){
                    alert("You Win");
                    location.reload();
                }
            if(numbers.length >= 1) {
                let o = numbers[0]
                document.getElementById(o.toString()).innerHTML = "O"
                temp = numbers[0]
                numbers[0] = numbers[numbers.length - 1]
                numbers[numbers.length - 1] = temp
                numbers.pop();
                    if((document.getElementById("0").innerHTML == "O" &&
                    document.getElementById("3").innerHTML == "O" &&
                    document.getElementById("6").innerHTML == "O")
                    ||(document.getElementById("1").innerHTML == "O" &&
                    document.getElementById("4").innerHTML == "O" &&
                    document.getElementById("7").innerHTML == "O")
                    || (document.getElementById("2").innerHTML == "O" &&
                    document.getElementById("5").innerHTML == "O" && 
                    document.getElementById("8").innerHTML == "O")
                    || (document.getElementById("0").innerHTML == "O" && 
                    document.getElementById("1").innerHTML == "O" &&
                    document.getElementById("2").innerHTML == "O")
                    || (document.getElementById("3").innerHTML == "O" && 
                    document.getElementById("4").innerHTML == "O" && 
                    document.getElementById("5").innerHTML == "O")
                    || (document.getElementById("6").innerHTML == "O" &&
                    document.getElementById("7").innerHTML == "O" && 
                    document.getElementById("8").innerHTML == "O")
                    ||(document.getElementById("0").innerHTML == "O" && 
                    document.getElementById("4").innerHTML == "O" && 
                    document.getElementById("8").innerHTML == "O")
                    || (document.getElementById("2").innerHTML == "O" && 
                    document.getElementById("4").innerHTML == "O" &&
                    document.getElementById("6").innerHTML == "O")
                    ){
                        alert("You Lose");
                        location.reload();
                    }
            }
            if(numbers.length == 0){
                    alert("Drown");
                    location.reload();
            }        
        }
    }
})

