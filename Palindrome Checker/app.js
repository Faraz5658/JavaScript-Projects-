function check() {
      let t = document.getElementById("text").value.toLowerCase().replace(/[^a-z0-9]/g, '');
      let rev = t.split('').reverse().join('');
      document.getElementById("out").innerText = t == rev ? "Palindrome!" : "Not a palindrome";
    }