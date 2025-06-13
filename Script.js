// button  functionality
let inputbox =document.getElementById("inputbox");
let Addbtn = document.getElementById("btncolor");
const tasklist = document.getElementById("tasklist");
const footer = document.querySelector(".footer")
const mainsmainfooter = document.querySelector(".mainsmainfooter");


// code to change  button color
inputbox.addEventListener('input',function(){
    if(inputbox.value.trim()!=="")
{
    Addbtn.classList.add('active');

}
else{
    Addbtn.classList.remove('active');
}

});

Addbtn.addEventListener("click", function(){
        taskText = inputbox.value.trim();
        if(taskText==='')return;

        // creating the element
       let  taskitem = document.createElement("li");
        taskitem.classList.add('task');
         
        //create checkbox
        let checkbox = document.createElement('button')
        checkbox.classList.add('checkbox');
        checkbox.innerHTML=`<i class="fa-solid fa-check"></i>`
        //creatnif span for the text 
        let span = document.createElement('span');
        span.classList.add("task-text");
        span.textContent=inputbox.value.trim();
        //create  delet button
        let deleteit =document.createElement('button');
        deleteit.classList.add("deleteit");
        deleteit.style.marginLeft="auto";
        deleteit.innerHTML=`<i class="fa-solid fa-trash"></i>`
        
            

        // appending in taskitem
        taskitem.appendChild(checkbox);
        taskitem.appendChild(span);
        taskitem.appendChild(deleteit)

        // appending in tasklist
        tasklist.appendChild(taskitem);
        inputbox.value='';
        Addbtn.classList.remove('active');

        //  updating  footer
        updatefooter();

})

// code  to update  footer
     function updatefooter(){

        if(tasklist.children.length=== 0){
            mainsmainfooter.innerHTML= `<div>No tasks yet</div>
                        <div>Add a task above to get started!</div>`;
        }

        else{
            mainsmainfooter.innerHTML ='';
            mainsmainfooter.classList.remove('mainsmainfooter')
        }
     }
