function convert(feet) {
    let meter = 0.305 * feet;
    document.getElementById("result1").innerHTML = meter;
}

function convert1(meter) {
    let feet = 3.279 * meter;
    document.getElementById("result2").innerHTML = feet;
}