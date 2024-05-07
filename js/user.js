var div1=document.getElementById('image1');
var div2=document.getElementById('image2');
var div3=document.getElementById('image3');
var div4=document.getElementById('image4');
var div5=document.getElementById('image5');

<script src="user.js"></script>
function hideAllMaps() {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
}
hideAllMaps();
function hideShow1(){

    hideAllMaps(); 
    div1.style.display='block';

}
function hideShow2(){
    hideAllMaps();
        div2.style.display='block';
        // display=1;
    
}
function hideShow3(){
    hideAllMaps();
        div3.style.display='block';
        // display=1;
   
}
function hideShow4(){
    hideAllMaps();
        div4.style.display='block';
        // display=1;

}
function hideShow5(){
    hideAllMaps();
        div5.style.display='block';
        // display=1;
   
}

var div6=document.getElementById('image_block1');
var div7=document.getElementById('image_block2');
var div8=document.getElementById('image_block3');
var div9=document.getElementById('image_block4');
var div10=document.getElementById('image_block5');

// var display1=0;
function hideAllBlocks() {
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
    div9.style.display = 'none';
    div10.style.display = 'none';
}
hideAllBlocks();
function hideShow6(){
    // hideAllBlocks();
        div6.style.display='block';
        // display1=1;
   
}
function hideShow7(){
    hideAllBlocks();
        div7.style.display='block';
        // display1=1;
    }

function hideShow8(){
    hideAllBlocks();
        div8.style.display='block';
        // display1=1;
}
function hideShow9(){
    hideAllBlocks();
        div9.style.display='block';
        // display1=1;
    
}
function hideShow10(){
    hideAllBlocks()
        div10.style.display='block';
        // display1=1;
}

document.addEventListener("DOMContentLoaded", function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            () => {
                // Location access granted
                // You can handle the user's location here
            },
            () => {
                // Location access denied or not available
                // You can provide a message or handle it as needed
            }
        );
    } else {
        // Geolocation is not available in this browser
        // You can provide a message or handle it as needed
    }
});
