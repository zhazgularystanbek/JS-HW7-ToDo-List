window.addEventListener('load', () => {
    const form = document.querySelector("#form");
    const input = document.querySelector("#input");
    const list = document.querySelector("#result");
    const btn = document.querySelector("#btn-todo-list");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        input.value ="";

        if (!task) {
            alert("Введите список задач и нажмите 'Add Todo'");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("todo-item");
        task_content_el.innerText=task;

        task_el.appendChild(task_content_el);

        list.appendChild(task_el);
        task_el.addEventListener('click', () => {
            list.removeChild(task_el);
        });

    })
})