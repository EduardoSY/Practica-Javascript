document.getElementById('Euros').addEventListener('input', function (e) {
    var euros = e.target.value;
    document.getElementById('outputDollars').innerHTML = euros + "E = " + euros * 1.09 + '$';
    document.getElementById('outputBol').innerHTML = euros + "E = " + euros * 88.389 + " Bolivares";
    document.getElementById('outputYen').innerHTML = euros + "E = " + euros * 117.16 + " Yenes";

})