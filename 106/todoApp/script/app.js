function createTodo(){
    let text=$(`#textTodo`).val(); //read the text/val from controls
    let syntax = `
    <div id="todoItems" class="d-flex justify-content-between todo-item rounded">
        <h5 class="d-inline-flex">${text}</h5>
        <button id="btnRemove" class="btn btn-sm btn-danger">Remove</button>
    </div>
    `;
    $(`#todoContainer`).append(syntax);
    $(`#todoContainer`).fadeIn(500);

    // clear input field
    $(`#textTodo`).val(``);
    $(`#textTodo`).focus();
}

function deleteTodo(){
    console.log(`delete`);
    $(this).parent().remove();
    hideTodoContainer();
}

function hideTodoContainer(){
    let items=$(`#todoItems`);
    if(items.length==0){
        $(`#todoContainer`).fadeOut(500);
    }
}

function enterKeypress(args){
    if(args.key === `Enter`){
        createTodo();
    }
}

function init(){
    // load previous data
    $(`#todoContainer`).hide();

    // hook events
    $(`#btnAdd`).click(createTodo);
    $(`#textTodo`).keypress(enterKeypress);
    $(`#todoContainer`).on(`click`,`.btn-danger`,deleteTodo);
}

window.onload=init;