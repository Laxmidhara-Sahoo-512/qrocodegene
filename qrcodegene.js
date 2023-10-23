function show(){
    let name=document.getElementById("in");
    let im=document.getElementById("image");
    im.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+name.value;
    name.value="";
}