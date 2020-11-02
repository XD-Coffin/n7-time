var d = new Date()
if (d.getDay()==0){
    document.write(d.getFullYear())
    document.getElementById("t1").innerHTML="10:00-11:30";
    document.getElementById("s1").innerHTML="Security in Computing";
    document.getElementById("t2").innerHTML ="11:30-1:00";
    document.getElementById("s2").innerHTML="LAN & WAN";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Lecture";
    document.getElementById("l2").innerHTML = "Lecture";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 7:00 AM"
}
else if (d.getDay()==1){
    document.write(d);
    document.getElementById("t1").innerHTML ="7:00-8:30";
    document.getElementById("s1").innerHTML = "Network and Operating Sys";
    document.getElementById("t2").innerHTML = "8:30-10:00";
    document.getElementById("s2").innerHTML = "Risk,Crisis and Security";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Lecture";
    document.getElementById("l2").innerHTML = "Lecture";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 9:00 AM"
}
else if (d.getDay()==2){
    document.write(d);
    document.getElementById("t1").innerHTML ="9:00-10:00";
    document.getElementById("s1").innerHTML = "LAN & WAN";
    document.getElementById("t2").innerHTML = "11:00-12:00";
    document.getElementById("s2").innerHTML = "N.O.S";
    document.getElementById("t3").innerHTML = "12:00-2:00";
    document.getElementById("s3").innerHTML = "Risk,Crisis and Security";
    document.getElementById("l1").innerHTML = "Tutorial";
    document.getElementById("l2").innerHTML = "Tutorial";
    document.getElementById("l3").innerHTML = "Lab";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 1:30 PM"
}
else if (d.getDay()==3){
    document.write(d);
    document.getElementById("t1").innerHTML ="1:30-2:30";
    document.getElementById("s1").innerHTML = "Security in Computing";
    document.getElementById("t2").innerHTML = "None";
    document.getElementById("s2").innerHTML = "None";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Tutorial";
    document.getElementById("l2").innerHTML = "None";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 10:30 AM"
}
else if (d.getDay()==4){
    document.write(d);
    document.getElementById("t1").innerHTML ="10:30-12:00";
    document.getElementById("s1").innerHTML = "N.O.S";
    document.getElementById("t2").innerHTML = "1:00-2:30";
    document.getElementById("s2").innerHTML = "LAN & WAN";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Tutorial";
    document.getElementById("l2").innerHTML = "Lab";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's class starts at 12:30 AM"
}
else if (d.getDay()==5){
    document.write(d);
    document.getElementById("t1").innerHTML ="12:30-2:00";
    document.getElementById("s1").innerHTML = "Security in Computing";
    document.getElementById("t2").innerHTML = "None";
    document.getElementById("s2").innerHTML = "None";
    document.getElementById("t3").innerHTML = "None";
    document.getElementById("s3").innerHTML = "None";
    document.getElementById("l1").innerHTML = "Lab";
    document.getElementById("l2").innerHTML = "None";
    document.getElementById("l3").innerHTML = "None";
    document.getElementById("tc").innerHTML = "TOmmorow's holiday :-) "
}
else if (d.getDay()==6){
    document.write(d);
    document.getElementById("t1").innerHTML ="Enjoy";
    document.getElementById("s1").innerHTML = "Enjoy";
    document.getElementById("t2").innerHTML = "Enjoy";
    document.getElementById("s2").innerHTML = "Enjoy";
    document.getElementById("t3").innerHTML = "Enjoy";
    document.getElementById("s3").innerHTML = "Enjoy";
    document.getElementById("l1").innerHTML = "Enjoy";
    document.getElementById("l2").innerHTML = "Enjoy";
    document.getElementById("l3").innerHTML = "Enjoy";
}


