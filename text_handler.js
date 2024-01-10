var on=true
var mute=false
var key_press=true
var radian=false
var shift=false
var alpha=false
var forms=false
var precision=2
var mode=0
var position=1
var saver=[];var saved_query;
var saver_i=0
var saved_ans

var screen=document.querySelector("#text>div .upper");
var screen2=document.querySelector("#text>div .lower");
var mute=false;

const audio1=document.getElementById("number_button")
const audio2=document.getElementById("small_button")
audio1.volume=.2;

document.getElementById('onoff').addEventListener('click', function() {
    on=true
    mute=false
    key_press=true
    radian=false
    shift=false
    alpha=false
    forms=false
    ac()
});
function on_off(){
    on=false;
    shift_down()
    ac()
    screen2.innerHTML="CASIO 10"
    screen2.style.opacity=.8
    setTimeout(()=>{
        screen2.innerHTML=""
        screen2.style.opacity=1
        
    },500)
    screen.textContent="";
    shift_down();
    document.querySelector("#screen #shift").style.opacity=0;
    document.querySelector("#screen #alpha").style.opacity=0;
    
}
if(on){
    obj=document.getElementsByClassName("keys")
    for(let i=0;i<obj.length;i++){
        obj[i].addEventListener('click',()=>{

            if(obj[i].id=='=') solver()
            else if(obj[i].id=='ac') ac()
            else if(obj[i].id=='del') del()
            else if(obj[i].id=='ans') screen.innerHTML=screen.textContent+saved_ans.toFixed(precision)
            
            else if(obj[i].id=='*10^' && shift){
                str=screen.textContent
                index=str.indexOf('|')
                if(index!=-1) screen.innerHTML=str.slice(0,index)+'π'+str.slice(index)
                else screen.innerHTML+='π'
            }
            else{
                str=screen.textContent
                index=str.indexOf('|')
                if(index!=-1) screen.innerHTML=str.slice(0,index)+obj[i].id+str.slice(index)
                else screen.innerHTML+=obj[i].id
            }
            if(!mute){
                audio1.pause();
                audio1.currentTime=0
                if(!mute) document.getElementById("number_button").play()
            }
            if(key_press){
                obj[i].style.boxShadow="none"
                setTimeout(()=>{obj[i].style.boxShadow="2px 2px 4px .5px";},200);
            }
            if(shift){shift_down()}
        })
    }
    obj2=document.getElementsByClassName("complexKey")
    for(let i=0;i<obj2.length;i++){
        obj2[i].addEventListener('click',function(){

            if(obj2[i].attributes.value.value=='-' && !shift && !alpha){
                var str=screen.textContent;
                screen.innerHTML=(str[0]=='-')?str.slice(1,):"-"+str;
            }
            else if(obj2[i].id=='forms' && forms){
                if(shift) screen2.innerHTML=decimalToFraction(saved_ans)
                else screen2.innerHTML=decimalToFractionWithInteger(saved_ans)
            }
            else{
                str=screen.textContent
                index=str.indexOf('|')
                value=(shift)?obj2[i].attributes.value2.value:(alpha)?obj2[i].attributes.value3.value:obj2[i].attributes.value.value;
                if(index!=-1) screen.innerHTML=str.slice(0,index)+value+str.slice(index)
                else screen.innerHTML+=value
            }
            
            if(!mute){
                audio2.pause();
                audio2.currentTime=0;
                if(!mute) audio2.play()
            }
            if(key_press){
                obj2[i].style.boxShadow="none"
                setTimeout(()=>{obj2[i].style.boxShadow="2px 2px 4px .5px";},200);
            }
            if(shift) shift_down()
        })
    }
    obj3 = document.getElementsByClassName("extra");
    for (let i = 0; i < obj3.length; i++) {
        obj3[i].addEventListener('click', function () {

            if (obj3[i].id == 'shift') {
                if(shift) shift_down()
                else{
                shift=true;
                document.querySelector("#screen #shift").style.opacity=1;}
                // setTimeout(shift_down,2000)
            }
            if(obj3[i].id=='alpha'){
                if(alpha){
                    alpha=false;
                    document.querySelector("#screen #alpha").style.opacity=.5;
                }
                else{
                    alpha=true;
                    document.querySelector("#screen #alpha").style.opacity=1;
                }
            }
            if (obj3[i].id == 'mode') {
                const arr1 = ['', 'COMP', 'SD', 'EQN', 'Deg', 'Fix', 'Disp'];
                const arr2 = ['', 'CMPLX', 'REG', 'MAT', 'Red', 'Sci', '&lt;CONT&gt;'];
                const arr3 = ['', '', 'BASE', 'VCT', 'Gra', 'Norm', ''];
            
                mode = (mode + 1) % arr1.length;
            
                screen.style.justifyContent = 'space-around';
                screen2.style.justifyContent = 'space-around';
            
                screen.innerHTML = `<span>${arr3[mode]}</span><span>${arr2[mode]}</span><span>${arr1[mode]}</span>`;
                screen2.innerHTML = `<span>${(arr1[mode].length) ?'1':''}</span><span>${(arr2[mode].length) ?'2':''}</span><span>${(arr3[mode].length) ?'3':''}</span>`;
            
                if(mode==0) ac()
            }
            if(obj3[i].id=='left') leftArrow()  
            if(obj3[i].id=='right') rightArrow()
            if(obj3[i].id=='upper' && saver.length>saver_i) previous()
            if(obj3[i].id=='lower' && saver_i>0) next()

            if (!mute) {
                audio2.pause();
                audio2.currentTime = 0;
                if (!mute) audio2.play();
            }

            if (key_press) {
                obj3[i].style.boxShadow = "none";
                setTimeout(() => {
                    obj3[i].style.boxShadow = "2px 2px 4px .5px";
                }, 200);
            }
        });
    }
    document.addEventListener("keydown", (event) => {
        console.log(event.key)
        const charArray = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '%', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']', ';', ':', '/', '<', '>', '?', '\'', '!', '^',',','.',];
        if (event.shiftKey && event.key == "Backspace") ac()
        else if (event.key == "Enter") solver()
        else if (event.key == "Backspace") del()
        else if(charArray.includes(event.key) || (event.keyCode>=65 && event.keyCode<=90)){
            screen.textContent += event.key;
        }
        if(event.key=='ArrowLeft') leftArrow()
        if(event.key=='ArrowRight') rightArrow()
        if(event.key=='ArrowUp' && saver.length>saver_i) previous()
        if(event.key=='ArrowDown' && saver_i>0) next()
    });
}
// function decimalToFraction(decimal) {
//     const tolerance = 1.0e-10;

//     const gcd = (a, b) => (b < tolerance ? a : gcd(b, a % b));

//     const isRepeating = (numerator, denominator) => {
//         const remainders = new Map();
//         let remainder = numerator % denominator;

//         while (remainder > 0 && !remainders.has(remainder)) {
//             remainders.set(remainder, remainders.size);
//             remainder *= 10;
//             remainder = remainder % denominator;
//         }

//         return remainder > 0;
//     };

//     const getFraction = (decimal, tolerance) => {
//         let numerator = decimal;
//         let denominator = 1;

//         while (Math.abs(decimal - numerator / denominator) > tolerance) {
//             numerator = decimal * 10 ** ++denominator;
//         }

//         const common = gcd(numerator, denominator);
//         return [numerator / common, denominator / common];
//     };

//     const wholePart = Math.floor(decimal);
//     const fractionalPart = decimal - wholePart;

//     const [fractionNumerator, fractionDenominator] = getFraction(fractionalPart, tolerance);

//     if (isRepeating(fractionNumerator, fractionDenominator)) {
//         const nonRepeatingPart = getFraction(wholePart + fractionalPart, tolerance);
//         const repeatingPart = getFraction(fractionalPart, tolerance);

//         const nonRepeatingNumerator = nonRepeatingPart[0] * fractionDenominator;
//         const repeatingNumerator = repeatingPart[0] * (10 ** nonRepeatingPart[1] + fractionDenominator) - nonRepeatingNumerator;

//         const commonDenominator = fractionDenominator * (10 ** nonRepeatingPart[1] + fractionDenominator);

//         const finalNumerator = nonRepeatingNumerator + repeatingNumerator;
//         const finalDenominator = commonDenominator;

//         const common = gcd(finalNumerator, finalDenominator);

//         return `${finalNumerator / common}/${finalDenominator / common}`;
//     } else {
//         return `${wholePart * fractionDenominator + fractionNumerator}/${fractionDenominator}`;
//     }
// }
function varify(decimal){
    const str=decimal.toString()
    console.log(str)
    if(str.match(/\.3+$/)) return 3;
    if(str.match(/\.6+$/)) return 6;
    if(str.match(/\.9+$/)) return 9;
    else return 0
}
function decimalToFraction(decimal) {
    // Multiply by 10^decimalPlaces to remove decimal
    let numerator = decimal * Math.pow(10,precision);
    let denominator = Math.pow(10,precision);

    // Find the greatest common divisor to simplify the fraction
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonFactor = gcd(numerator, denominator);

    // Simplify the fraction
    numerator /= commonFactor;
    denominator /= commonFactor;
    
    return `${numerator}/${denominator}`;
}
function decimalToFractionWithInteger(decimal) {
    // Multiply by 10^decimalPlaces to remove decimal
    let numerator = decimal * Math.pow(10,precision);
    let denominator = Math.pow(10,precision);

    // Find the greatest common divisor to simplify the fraction
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonFactor = gcd(numerator, denominator);

    // Simplify the fraction
    numerator /= commonFactor;
    denominator /= commonFactor;

    // Calculate the integer part
    const integerPart = Math.floor(numerator / denominator);

    // Update numerator and denominator for the fractional part
    numerator %= denominator;

    return `${integerPart}  ${numerator}/${denominator}`;
}
function solver(){
    str=screen.textContent

    if(!radian) str= str.replaceAll(/sin\((\d+)\)|cos\((\d+)\)|tan\((\d+)\)/g, (match, sinArg, cosArg, tanArg) => {
        if (sinArg !== undefined) {
            return `sin(${sinArg} * Math.PI / 180)`;
        } else if (cosArg !== undefined) {
            return `cos(${cosArg} * Math.PI / 180)`;
        } else if (tanArg !== undefined) {
            return `tan(${tanArg} * Math.PI / 180)`;
        }
        return match;
    })
    str=str.replace(/√(\d+)/g, 'Math.sqrt($1)')
    str=str.replace(/∛(\d+)/g, 'Math.sqrt($1)')
    str=str.replaceAll('²','**2')
    str=str.replaceAll('^','**')
    str=str.replaceAll('⁻¹','^-1')
    str=str.replaceAll('|','')
    str=str.replaceAll('π','Math.PI')
    
    str=str.replaceAll('log(','Math.log(')
    str=str.replaceAll('ln(','Math.ln(')

    str=str.replaceAll('sin(','Math.sin(')
    str=str.replaceAll('sin^-1(','Math.asin(')

    str=str.replaceAll('cos(','Math.cos(')
    str=str.replaceAll('cos^-1(','Math.acos(')

    str=str.replaceAll('tan(','Math.tan(')
    str=str.replaceAll('tan^-1(','Math.atan(')

    str=str.replaceAll('e','Math.E')
    try {
        saved_ans=eval(str)
        value= saved_ans.toFixed(precision);
        if(varify(value)==9){value+=Math.pow(10,-precision)}
        screen2.textContent=value
    } catch (error) {
        console.log("Error:", error);
        screen2.innerHTML="syntax error"
    }
    forms=true
    }
function ac(){
    position=1
    screen.style.justifyContent='flex-start'
    screen2.style.justifyContent='flex-end'
    if(shift) on_off()
    else{
    screen.innerHTML=screen.textContent.replaceAll('|','')
    saver.push(screen.innerText);
    screen.innerText=""
    screen2.innerText="0."
    document.querySelector("#screen #alpha").style.opacity=.5;
    document.querySelector("#screen #shift").style.opacity=.5;
}}
function del(){
    str=screen.textContent
    index=str.indexOf('|')
    if(index<=0 && str[0]=='|') screen.innerHTML=str[0]+str.slice(2)
    else if(index==-1) screen.innerHTML=str.slice(0,-1)
    else screen.innerHTML=str.slice(0,index-1)+str.slice(index) 
}
const shift_down=()=>{
    shift=false;
    document.querySelector("#screen #shift").style.opacity=.5;
}
function leftArrow(){
    str=screen.innerText;
    if(str.indexOf('|')==-1) str+='|'
    index=str.indexOf('|')
    if(str[0]!='|')
    screen.innerHTML=str.slice(0,index-1)+'|'+str[index-1]+str.slice(index+1)
}
function rightArrow(){
    str=screen.innerText;
    index=str.indexOf('|')    
    if(index!=-1) str=str.slice(0,index)+str[index+1]+'|'+str.slice(index+2)
    if(str[str.length-1]=='|') str=str.slice(0,-1)
    screen.innerHTML=str
}
function previous(){
    if(saver_i==0) saved_query=screen.innerHTML
    saver_i+=1
    index=saver.length-saver_i;
    screen.innerText=saver[index]
    
}
function next(){
    saver_i-=1
    index=saver.length-saver_i;
    if(saver_i==0) screen.innerHTML=saved_query
    else screen.innerText=saver[index]
}
