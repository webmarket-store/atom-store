var flag = 1;

function show() {
  if(flag==1){
    let menu = document.getElementById("sidebar").style="left:0px;transition: 0.3s;";
    flag=0;
} else{
    document.getElementById("sidebar").style="left:-500px;transition: 0.5s;";  
    flag=1;

} 
    }
 
 

    function morstory() {
document.getElementById("bigcont").style.display="none";
    document.getElementById("biginfo").style.display="block";
       document.getElementById("closeinfo").style.display="block";
   
    }
        

function hideinfo(){
 document.getElementById("bigcont").style.display="block";
  document.getElementById("biginfo").style.display="none";
 document.getElementById("closeinfo").style.display="none";
} 
let rise = 1;


function likerise(){

    if(rise===1){
      let cyan =  document.getElementById('like-btn').style="color:cyan;";
        rise=0;
        let likenum=document.getElementById('like-txt').innerHTML=""+1 ;
        document.getElementById('like-txt').style="color:white;"

        document.getElementById('vid-info').style="border-bottom:1px solid cyan;";
    }else{
      let white =  document.getElementById('like-btn').style="color:white;";
        rise=1;
        let disnum=document.getElementById('like-txt').innerHTML="1"-1;
        document.getElementById('like-txt').style="color:rgb(138, 136, 136);"
        document.getElementById('vid-info').style="border-bottom:1px solid white;";
    }


}       

function comeshow(){
  if(rise==1){
  document.getElementById('comentshow').style="height:600px;transition: 0.2s;";
  document.getElementById('showcome').innerHTML="hide comments";

  rise=0;
  }else{
    document.getElementById('comentshow').style="height:40px;transition: 0.2s;";
    document.getElementById('showcome').innerHTML="show comments";
 
    rise=1;
  }

}
var map = 1;
function setseting(){
  if(map===1){
document.getElementById('them-settings-top').style=" transform: rotate(40deg);"
document.getElementById('mainsetting').style.display="block";
map=0;
  }else{
    document.getElementById('them-settings-top').style=" transform: rotate(0deg);"
    document.getElementById('mainsetting').style.display="none";
    map=1;
  }
}



 


   
  

