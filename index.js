
//arrow left arrow right does not work;

let display=document.getElementById('display');

 console.log(display.innerText);
//console.log(document.getElementsByClassName('button'));
let buttons=Array.from(document.getElementsByClassName('button'));
// console.log(buttons[0].innerText+buttons[3].innerText);



// traversing through reach array element and adding click event listner
buttons.map(button=> {
    button.addEventListener('click', (e)=>{
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.innerText);
        fun(e.target.innerText);

    })
})


// adding key eventlistner
document.addEventListener("keyup", function(event) {

  fun(event.key);
   
});


function fun(key)
{
    // console.log(key);

    if(key=='Control' ||key=='Shift' ||key=='Standby' ||key=='I' ||key=='CapsLock'|| key=='ArrowDown' ||key=='ArrowUp'||key=='PageDown'||key=='PageUp');
    
    else{
        if(key=='C'|| key=='c'  ) 
        {display.innerText="";}
        else if(key=='⌫' || key=='Backspace')  
        {display.innerText=display.innerText.slice(0,display.innerText.length-1);}
        else if(key=='=' || key=='Enter')
        {
                try
                { 
    
                temp=display.innerText;
                temp+=" = ";
                display.innerText=eval(display.innerText);
                temp+=display.innerText;
                history.innerText+=temp+"\n";
                //history.innerHTML="<pre>Hello </pre>"
                temp="";
                console.log(history.innerText);

                }
                catch
                {
                // display.innerText='ERROR';
                alert("error");
                display.innerText="";
                }
        }
        else
        {
            if(display.innerText=='undefined' ||display.innerText =='Infinity' )display.innerText="";
            display.innerText+=key;
        }

    }
}




let history =document.getElementById('history_containt');
// console.log(histor.innerHTML);
let temp="";


