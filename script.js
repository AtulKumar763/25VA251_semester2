function calculateSum() {

    let n = Number(document.getElementById("number").value);

    let sum = 0;

    for(let i = 2; i <= n; i += 2){
        sum += i;
    }

    document.getElementById("result").innerText =
        "Sum of Even Numbers = " + sum;
}