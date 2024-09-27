
var message

    function show_message(m,c="rgb(53, 5, 63)",b="rgb(180, 152, 206)")
    {
        message = document.createElement("div")
        message.style=`overflow:auto;width:300px;height:300px;top:10%;left:40%;position:absolute;font-size:20px;box-shadow:10px 10px 10px gray;border-radius:20px;border:1px black solid;padding:20px;
        text-align:justify;`
        message.style.color=c
        message.style.background=b
        message.innerHTML="<h1>Message Box</h1>"
        message.innerHTML+=m
        document.body.appendChild(message)
        message.innerHTML+="<br/><br/><button onclick='closemessage()'>OK </button>"
    }

    function closemessage()
    {
        document.body.removeChild(message)
    }