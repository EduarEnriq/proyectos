function currentTime(){
    let date = new Date();
    let hh = date.getHours().toLocaleString();
    let mm = date.getMinutes().toLocaleString();
    let ss = date.getSeconds().toLocaleString();

    hh = (hh<10) ? "0" + hh:hh;
    mm = (mm<10) ? "0" + mm:mm;
    ss = (ss<10) ? "0" + ss:ss;


    let time = hh + ":" + mm + ":"+ ss;
    let reloj = document.getElementById("container")
    reloj.innerHTML = time;
}
setInterval(currentTime,1000);