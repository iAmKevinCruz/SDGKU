important = false;

function toggleImportant() {
  let icon = $(`#iconImportant`);
  if(important){
    icon.toggleClass(`fas far`);
    important = false
    console.log(important);
  }else{
    icon.toggleClass(`fas far`);
    important=true;
    console.log(important);
  }
  
  console.log(`toggle the star`);
}

function saveBtn(){
    console.log(`Save button pressed`);
    let title=$(`#titleInput`).val();
    let dueDate=$(`#dueDateInput`).val();
    let location=$(`#locationInput`).val();
    let priority=$(`#priorityInput`).val();
    let color=$(`#colorInput`).val();
    let contact=$(`#contactInput`).val();
    let description=$(`#descriptionInput`).val();
    
    let task = new Task (title,important,dueDate,location,priority,color,contact,description);
    console.log(task);
}

function save() {
    console.log("Saving task");
  
    // get the value from control
    let title = $("#txtTitle").val();
    // HW: finish
  
    // create a new Task object
    // console log the object
  }

function init() {
  console.log(`test log`);
  // load data

  // hook events
  $(`#iconImportant`).click(toggleImportant);
  $(`#btnSave`).click(saveBtn);
}

window.onload = init;
