let inputBox = document.getElementById('input_box');
let buttons = document.querySelectorAll('button');

let input='';

let buttonArrays= Array.from(buttons);

buttonArrays.forEach(call=>{

    call.addEventListener('click',(e)=>{

console.log(e);

if(e.target.id=="back"){
input=input.substring(0,input.length-1);
inputBox.value=input;
}else if (e.target.alt=="back1") {
    input=input.substring(0,input.length-1);
inputBox.value=input;
} else if(e.target.id=="ac") {
input='';
inputBox.value=input;
} else if(e.target.innerText=="="){
    input=eval(input);
    inputBox.value=input;
}else if(e.target.id=="xq"){
input=input*input;
  inputBox.value=input;
}else if(e.target.id=='xc') {
    input=input*input*input;
     inputBox.value=input;
}
else{
    input += e.target.innerHTML;
    inputBox.value=input;
}

    })
})

