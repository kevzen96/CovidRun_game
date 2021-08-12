var doctor = document.getElementById("doctor");
var virus = document.getElementById("virus");

function jump(){
    if(doctor.classList == "animate"){return}
    doctor.classList.add("animate");
    setTimeout(function(){
        doctor.classList.remove("animate");
    },500);
}

setInterval(() => {
    const doctorTop = parseInt(window.getComputedStyle(doctor)
      .getPropertyValue('top'));
    const virusLeft = parseInt(window.getComputedStyle(virus)
      .getPropertyValue('left'));
    score.innerText++;

  
  
    if (virusLeft < 60 && virusLeft > -20 && doctorTop >= 130) {
      alert("You got a score of: " + score.innerText +
        "\n\nPlay again?");
      location.reload();
    }
  }, 10);