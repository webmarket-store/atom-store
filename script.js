var flag = 1;

function sidebar(){
    if(flag==1){
        document.getElementById("sidebar").style.display="block";
        flag=0;
    }
   
    else{
    document.getElementById("sidebar").style.display="none";  
    flag=1;

}

}
function tranc(){

if(ul==1){
    document.getElementById("sidebar").style.transition="10s ease all"
ul=0;
    
}
else{
    document.getElementById("sidebar").style.transition="10s ease all"
    ul=1;
}
}



