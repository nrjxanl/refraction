ctx1 = document.getElementById("c1").getContext("2d")
ctx2 = document.getElementById("c2").getContext("2d")

function input() {
    i = document.getElementById("input1").value
    n1 = document.getElementById("input2").value
    n2 = document.getElementById("input3").value 

    sinI = Math.sin(i * Math.PI / 180)
    tanI = Math.tan(i * Math.PI / 180)

    sinR = n1 / n2 * sinI
    r = Math.asin(sinR) / Math.PI * 180
    tanR = Math.tan(r * Math.PI / 180)

    ctx1.clearRect(0, 0, document.getElementById("c1").width, document.getElementById("c1").height)
    ctx2.clearRect(0, 0, document.getElementById("c2").width, document.getElementById("c2").height)
console.log(r)
    // 입사
    ctx1.beginPath()
    ctx1.moveTo(750, 500)
    if (i >= 90) {
        ctx1.lineTo(0, 500)
    } else {
        ctx1.lineTo(750 - (500 * tanI), 0)
    }
    ctx1.lineWidth = 10
    ctx1.strokeStyle = "blue"
    ctx1.stroke()
    
    // 반사
    ctx1.beginPath()
    ctx1.moveTo(750, 500)
    if (i >= 90) {
        ctx1.lineTo(1500, 500)
        ctx1.strokeStyle = "blue"
    } else {
        ctx1.lineTo(750 + (500 * tanI), 0)
        ctx1.strokeStyle = "red"
    }
    ctx1.lineWidth = 10
    ctx1.stroke()

    // 굴절
    ctx2.beginPath()
    ctx2.moveTo(750, 0)
    if (i >= 90) {
        ctx2.lineTo(1500, 0)
        ctx2.strokeStyle = "skyblue"
    } else if (r >= 90) {
        ctx2.lineTo(1500, 0)
        ctx2.strokeStyle = "white"
    } else {
        ctx2.lineTo(1500, 750 / tanR)
    ctx2.strokeStyle = "white"
    }
    ctx2.lineWidth = 10
    ctx2.stroke()

    // 값 구하기
    document.getElementById("result").innerHTML = "입사각: " + i + "º<br>반사각: " + i + "º<br>굴절각: " + r + "º<br>매질 1의 굴절률: " + n1 + "<br>매질 2의 굴절률: " + n2 + "<br>상대 굴절률: " + (n2 / n1)

}

window.onload = function () {
    input()
}