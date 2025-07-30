
function tip() {
      let b = +document.getElementById("bill").value;
      let tipAmount = (b * 0.15).toFixed(2);
      let totalAmount = (b + parseFloat(tipAmount)).toFixed(2);
      document.getElementById("out").innerHTML = "Tip: $" + tipAmount + "<br>Total: $" + totalAmount;
    }
    
    function customTip() {
      let b = +document.getElementById("bill").value;
      let p = +document.getElementById("percentage").value;
      let tipAmount = (b * (p / 100)).toFixed(2);
      let totalAmount = (b + parseFloat(tipAmount)).toFixed(2);
      document.getElementById("out").innerHTML = "Tip: $" + tipAmount + "<br>Total: $" + totalAmount;
    }