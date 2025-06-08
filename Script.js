// button  functionality
let inputbox =document.getElementById("inputbox");
let Addbtn = document.getElementById("btncolor");

inputbox.addEventListener('input',function(){
    if(inputbox.value.trim()!=="")
{
    Addbtn.classList.add('active');

}
else{
    Addbtn.classList.remove('active');
}

});

