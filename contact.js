
var precision=".000"
var on=true;
var screen=document.querySelector("#text>div .upper");
var screen2=document.querySelector("#text>div .lower");
var saver=screen2.textContent.trim();
var saver2="";
var shift=false;
var alpha=false;
var mute=false;
const audio1=document.getElementById("number_button")
const audio2=document.getElementById("small_button")
audio1.volume=.4;

document.getElementById('7').addEventListener('click', function() {
    if(on) screen.innerText+="7";

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('8').addEventListener('click', function() {
    if(on) screen.textContent+="8";

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('9').addEventListener('click', function() {
   if(on) screen.textContent+="9";

   audio1.pause();
   audio1.currentTime=0
   if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('del').addEventListener('click', function() {
    if(on){var str=screen.innerText;
    screen.innerHTML=str.replace(str[str.length-1],"");}

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('ac').addEventListener('click', function() {
    if(on){
       if(shift){
            on=false;
            saver2=screen2.textContent;
            setTimeout(screen2.innerHTML="CASIO-10",1000)
            screen.textContent="";
            screen2.textContent="";
            document.querySelector("#screen #shift").style.opacity=0;
            document.querySelector("#screen #alpha").style.opacity=0;
            shiftdone();
            return;
       } 
        screen.textContent="";
    saver2=screen2.textContent;
    screen2.textContent="0.";}

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('4').addEventListener('click', function() {
    if(on)screen.textContent+="4"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('5').addEventListener('click', function() {
    if(on)screen.textContent+="5"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('6').addEventListener('click', function() {
    if(on)screen.textContent+="6"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('*').addEventListener('click', function() {
    if(on)screen.textContent+="*"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('/').addEventListener('click', function() {
    if(on)screen.textContent+="/"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('1').addEventListener('click', function() {
    if(on)screen.textContent+="1"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('2').addEventListener('click', function() {
    if(on) screen.textContent+="2"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('3').addEventListener('click', function() {
    if(on)screen.textContent+="3"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('+').addEventListener('click', function() {
    if(on)screen.textContent+="+"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('-').addEventListener('click', function() {
    if(on)screen.textContent+="-"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('0').addEventListener('click', function() {
    if(on)screen.textContent+="0"

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('.').addEventListener('click', function() {
    if(on)screen.textContent+="."

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('10x').addEventListener('click', function() {
    if(on){
        if(shift){
            screen.textContent+="3.14"; shiftdone(); return;
        }
        screen.textContent+="*10**"
    }
    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
function math(element){ 
    var string=screen.innerText;
    if(string.length){
        if(string[string.length-1]-'0'<10 || string[string.length-1]==")") screen.textContent+="*"+element;
        else screen.textContent+=element;}
    else screen.textContent+=element;
}
function shiftdone(){
    shift=false;
    document.querySelector("#screen #shift").style.opacity=.3;
}

document.getElementById('ans').addEventListener('click', function() {
    if(on){ if(screen2.textContent=="0.")
        screen.textContent+=saver2;
    else screen.textContent+=screen2.textContent;}

    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.getElementById('=').addEventListener('click', function() {
    audio1.pause();
    audio1.currentTime=0
    if(!mute) document.getElementById("number_button").play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);

    if(on){
     screen2.innerHTML=eval(screen.innerHTML);
    //  screen.innerText=""
     var result=true;}
});
document.querySelector(".complex>div>div:nth-child(2)").addEventListener('click',function(){
    if(on){
        if(shift){math("Math.cbrt(");shiftdone();return; }
         math("Math.sqrt(")
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(3)").addEventListener('click',function(){
    if(on && screen.textContent.length){
        if(shift) { screen.textContent+="**3"; shiftdone(); return;}
        if(screen.textContent.length) screen.textContent+="**2";
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(4)").addEventListener('click',function(){
    if(on && screen.textContent.length){
        if(shift){
            screen.textContent+="**(1/";
            shiftdone();
            return;
        }else screen.textContent+="**";
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(5)").addEventListener('click',function(){
    if(on){
        if(shift){math("10**");shiftdone();return; }
        math("Math.log10(")
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(6)").addEventListener('click',function(){
    if(on){
        if(shift){math("2.72**");shiftdone();return; }
        math("Math.log(")
        // this.style.border=;
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(7)").addEventListener('click',function(){
    if(on){
    var str=screen.innerText;
    if(str[0]!="-") screen.innerHTML="-"+screen.innerHTML;
    else {screen.innerText=screen.innerText.substring(1);}}
audio2.pause();
audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(10)").addEventListener('click',function(){
    if(on){
        if(shift){math("Math.asin(");shiftdone();return; }
        math("Math.sin(")
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(11)").addEventListener('click',function(){
    if(on){
        if(shift){math("Math.acos(");shiftdone();return; }
        math("Math.cos(")
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(12)").addEventListener('click',function(){
    if(on){
        if(shift){math("Math.atan(");shiftdone();return; }
        math("Math.tan(")
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(15)").addEventListener('click',function(){
    if(on)screen.textContent+="("
    
    audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(16)").addEventListener('click',function(){
    if(on) screen.textContent+=")"
audio2.pause();
audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.getElementById('onoff').addEventListener('click', function() {
    if(on==false){
        on=true;
        document.querySelector("#screen #alpha").style.opacity=.3;
        document.querySelector("#screen #shift").style.opacity=.3;
        screen.textContent="";
        screen2.textContent="0.";
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
});
document.querySelector(".complex>#shift").addEventListener('click', function() {
    if(on){
        shift=true;
        document.querySelector("#screen #shift").style.opacity=1;
    } audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);   
});
document.querySelector(".complex>#alpha").addEventListener('click', function() {
    if(on){
        if(!alpha){
            alpha=true;
            document.querySelector("#screen #alpha").style.opacity=1;
        }
        else {
            alpha=false;
            document.querySelector("#screen #alpha").style.opacity=.3;
        }
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);    
});
document.querySelector(".complex>div>div:nth-child(17)").addEventListener('click',function(){
    if(on){
        if(shift){screen.textContent+=";"; shiftdone(); return;}
        screen.textContent+=","
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(8)").addEventListener('click',function(){
    if(on){
        if(shift){screen.textContent+="<"; shiftdone(); return;}  
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.querySelector(".complex>div>div:nth-child(14)").addEventListener('click',function(){
    if(on){
        if(shift){screen.textContent+=">"; shiftdone(); return;}
    }audio2.pause();
    audio2.currentTime=0;
    if(!mute) audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})
document.addEventListener("keydown",(event)=>{
    if(on){
    for(let i=0;i<10;i++)
        if(event.key==i) screen.textContent+=i;
    if(event.key=="*") screen.textContent+="*"
    if(event.key=="/") screen.textContent+="/"
    if(event.key=="-") screen.textContent+="-"
    if(event.key==".") screen.textContent+="."
    if(event.key==",") screen.textContent+=","
    if(event.key=="+" || (event.shiftkey && event.key=="=")) screen.textContent+="+"
    if(event.key=="%") screen.textContent+="%"
    if(event.key=="(") screen.textContent+="("
    if(event.key==")") screen.textContent+=")"
    if(event.key=="^") screen.textContent+="**"

    if(event.key=="Backspace"){
        var str=screen.innerText;
        screen.innerHTML=str.replace(str[str.length-1],"");
    }
    if(event.key=="Enter"){
        screen2.innerHTML=eval(screen.innerHTML);
        var result=true;}}
    if(event.shiftKey && event.key=="Backspace"){
        if(shift){
             on=false;
             saver2=screen2.textContent;
             setTimeout(screen2.innerHTML="CASIO-10",1000)
             screen.textContent="";
             screen2.textContent="";
             document.querySelector("#screen #shift").style.opacity=0;
             document.querySelector("#screen #alpha").style.opacity=0;
             shiftdone();
             return;
        } 
         screen.textContent="";
     saver2=screen2.textContent;
     screen2.textContent="0.";}
})
document.getElementById("mode").addEventListener("click",()=>{
  audio2.pause();
  audio2.currentTime=0;  mute=!mute;
    audio2.play()
    this.style.boxShadow="none"
    setTimeout(()=>{this.style.boxShadow="2px 2px 4px .5px";},200);
})





