const hourspan=document.getElementById('hour');
const minutespan=document.getElementById('minute');
const secondspan=document.getElementById('second');
const amorpmspan=document.getElementById('amorpm');

function changeTime(){
	const date = new Date();
	let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
	hourspan.textContent=hour
	minutespan.textContent=minute
	secondspan.textContent=second
	if(hour<12){
		var amorpm="AM"
	}
	else{
		var amorpm="PM"
	}
	amorpmspan.textContent=amorpm

}
setInterval(changeTime,1000);