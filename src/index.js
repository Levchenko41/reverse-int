module.exports = function reverse(n) {

    let k = Math.abs(n).toString().split("").reverse().join("");
    k = +k;
    if (k % 10 == 0) {
        return Math.abs(k / 10)
    }
    return Math.abs(k);
}
