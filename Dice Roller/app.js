function roll() {
      let d1 = Math.floor(Math.random() * 6) + 1;
      let d2 = Math.floor(Math.random() * 6) + 1;
      document.getElementById("result").innerText = ` ${d1} + ${d2} = ${d1 + d2}`;
    }

