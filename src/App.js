document.addEventListener("DOMContentLoaded", function () {
  function time() {
    const Hour = document.getElementById("Hour");
    const Min = document.getElementById("Min");
    const Sec = document.getElementById("Sec");

    const heure = new Date();

    Hour.innerHTML = heure.getHours();
    Min.innerHTML = heure.getMinutes().toString().padStart(2, "0");
    Sec.innerHTML = heure.getSeconds().toString().padStart(2, "0");

    console.log(heure);
  }
  setInterval(time, 1000);
});
