let form = document.getElementById('form');
let txtw = document.getElementById('textw');
let display = document.querySelector(".l1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if( txtw.value === ''){
         alert('type something');
         return;     
    } else {
    //creating the div the will hold the text
    let q = "class";
    let v = "s1";
    let row = document.createElement('div');
    row.setAttribute( q,v);
    display.appendChild(row);
    
    //creating the p the text will be there
    let inrow = document.createElement('p');
    inrow.innerHTML = txtw.value;
    row.appendChild(inrow);
    
    txtw.value = "";
    //   if(txtw === txtw){
    //     document.getElementById('textw').innerHTML = " ";
    //   }
    
    }
    // display.innerHTML = "<div class='s1'> <p>" + txtw.value + "</p> </div>" ;
})

function clearInput(){
    document.getElementById('textw').value = '';
}
//This function actually does nothing because the form reset it self autoamtically
// if you ever remove form , to clear the text box after submiting use this
// txtw.value = ""; //but put it in addEventListener
//the css is already setted for the div that is created.