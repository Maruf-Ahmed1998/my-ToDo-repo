function submitTODO() {
    const TODO = document.getElementById("TODOS");
    const titleText = document.getElementById("title-text").value;
    const descriptionText = document.getElementById("description-text").value;
    if (titleText || descriptionText !== '') {
        const div = document.createElement("div");
        div.classList.add("todo-item");
        div.innerHTML = `
    <h3>${titleText}</h3></h3>
    <p>${descriptionText}</p>
    <button id="clearOne-button" onclick="clearOneTask()">Clear Task</button>
    
    `;
        TODO.appendChild(div);
        div.style.textAlign = "center";
        titleText.value = '';
        descriptionText.value = '';
        document.getElementById("title-text").value = '';
        document.getElementById("description-text").value = '';
    }


}
function clearTask() {
    const TODO = document.getElementById("TODOS");
    TODO.remove();
}
function clearOneTask() {
    const TODO = document.getElementById("TODOS");
    TODO.removeChild(TODO.firstElementChild);
}