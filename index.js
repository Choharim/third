const h2 = document.querySelector("h2");

function calcDate(){
const currentDate = new Date();
const christmasEv = new Date('December 24, 2020 00:00:00');
const interval = christmasEv - currentDate;
const intervalSeconds = interval / 1000;
const intervalMinutes = intervalSeconds / 60;
const intervalHours = intervalMinutes / 60;
const intervalDay = intervalHours / 24;

const day = Math.floor(intervalDay);

const hours = Math.floor((intervalDay - day)*24); //총일수 - 정수 일수 = 소수점 일수 ->*24 ->남은 총 시간 -> 남은 정수 시간

const minutes = Math.floor(((intervalDay - day)*24 - hours)*60); //  남은 총 시간 - 남은 정수 시간 = 소수점 시간 ->*60 -> 남은 총 분  -> 남은 정수 분

const seconds =  Math.floor((((intervalDay - day)*24 - hours)*60 - minutes)*60); //남은 총 분 - 남은 정수 분 = 소수점 분 ->*60 ->남은 총 초 -> 남은 정수 초

h2.innerText = `${day < 10 ? `0${day}` : day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

setInterval(calcDate,1000);