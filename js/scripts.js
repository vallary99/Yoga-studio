function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("mail").value;
    var date=document.getElementById("date").value;
    var time=document.getElementById("time").value;

    confirm(name+" "+"your session has been scheduled for"+" "+date+" "+"at"+" "+time+".Thank you for reaching out to us");  
}
