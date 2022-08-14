
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
    console.log(key);
    if(key=='Control' ||key=='Shift' ||key=='Standby' );

    else{
        if(key=='C'|| key=='c'  ) 
        {display.innerText="";}
        else if(key=='⌫' || key=='Backspace')  
        {display.innerText=display.innerText.slice(0,display.innerText.length-1);}
        else if(key=='=' || key=='Enter')
        {
                try
                { 
                 let x=display.innerText;
                display.innerText=eval(display.innerText);
                history+=x;

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
            if(display.innerText=='undefined' ||display.innerText =='Infinity')display.innerText="";
            display.innerText+=key;
        }

    }
}




let histor=let =document.getElementById('history_containt');
console.log(histor.innerHTML);
