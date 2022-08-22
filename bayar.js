function displaytime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    if(min < 10){
        min = "0" + min;
    }
    
    if(sec < 10){
        sec = "0" + sec;
    }
    
    document.getElementById('jam').innerHTML = hrs;
    document.getElementById('menit').innerHTML = min;
    document.getElementById('detik').innerHTML = sec;
}
setInterval(displaytime, 10);

function alertos(){
    alert("Terima kasih, Anda telah melakukan pembayaran!");
}

setInterval(function masuk() {
    fetch("http://localhost:8080/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("masuk").innerHTML = res.waktu_masuk;
      });
  }, 1000);

