

function morecv(){
    document.getElementById("allcv").style.display="none";
    document.getElementById("arowout").style.display="block";
    document.getElementById("cvbox").style.display="block";


}


function outcv(){
    document.getElementById("allcv").style.display="block";
    document.getElementById("arowout").style.display="none";
    document.getElementById("cvbox").style.display="none";
}
var down = 1;
function dropmenudown(){
if (down===1){
    document.getElementById("dropdown").style="left:0px;transition: 0.2s;z-index:-1;"
    down=0;
}else{
    document.getElementById("dropdown").style="left:-400px;transition: 0.2s;z-index:-1 !important;" 
    down=1;
}
}