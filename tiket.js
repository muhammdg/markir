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

setInterval(function () {
    fetch("https://markir.herokuapp.com/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("slot").innerHTML = res.Slot_Parkir_terpakai;
        document.getElementById("user").innerHTML = res.Kode_Login;
        document.getElementById("masuk").innerHTML = res.waktu_masuk;
      });
}, 1000);