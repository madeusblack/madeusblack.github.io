function countdown(date){
    const countDownDate = new Date(date).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("counter").innerHTML = `Lanzamiento en:
      ${days}d ${hours}h ${minutes}m ${seconds}s`;
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Watch it live at ";
      }
    }, 1000);
}
countdown("2020-05-28")