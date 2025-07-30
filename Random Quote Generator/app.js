function showQuote() {
      let q = [1,2,3,4,5,6,7,8,9,10];
      let i = Math.floor(Math.random() * q.length);
      document.getElementById("quote").innerText = q[i];
    }