let add_button = document.getElementById("add_button");
let remove_button = document.getElementById("remove");
let list = document.getElementById("list");
let input_text = document.getElementById("text");


add_button.addEventListener("click", function () {
  if (input_text.value.trim() !== "") {
    let listItem = document.createElement("li");
    listItem.innerText =input_text.value;
    list.appendChild(listItem);

    
    let delete_button=document.createElement("button");
    delete_button.classList.add("del");
    delete_button.title="Delete";
    delete_button.innerText="Del";
    listItem.appendChild(delete_button);
    
    //remove item when delete_button is clicked

    delete_button.addEventListener("click",function(){
        const parent=delete_button.parentElement;
        parent.remove();
    })
    

    let edit_button=document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.title="Edit";
   edit_button.innerText="Edit";
   listItem.appendChild(edit_button);
    
   input_text.value="";

    //edit item
    edit_button.addEventListener("click",function(){
        console.log(edit_button.parentElement.firstChild.textContent);
         let getParent=edit_button.parentElement;
         let getChild=getParent.firstChild;
        input_text.value=getChild.textContent;
        getParent.removeChild(getChild);     
       
        let editInput = document.createElement("input");
        editInput.value = getChild.textContent;
        getParent.insertBefore(editInput, delete_button);
     
        let saveButton = document.createElement("button");
        saveButton.classList.add("save");
        saveButton.title = "Save";
        saveButton.innerText = "Save";
        getParent.insertBefore(saveButton, edit_button);
 
        saveButton.addEventListener("click", function () {
            getChild.textContent = editInput.value; 
            getParent.removeChild(editInput); 
            getParent.removeChild(saveButton); 
            getParent.insertBefore(getChild, delete_button); 
           
            input_text.value="";
        });
       
    })
   
  }


});

remove_button.addEventListener("click", function () {
  if (list !== "") {
    list.remove();
  }
});
