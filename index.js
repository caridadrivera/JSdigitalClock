function showTime(){

    //date has methods we can use later to extract what we need for our watch.
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours = 0){
        hours = 12;   
    }

    if(hours > 12) {
        hours = hours - 12;
        session = "PM";
    }

    // if the hours, minutes or seconds are less than 10, I want to add a 0 in front of them.

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

}