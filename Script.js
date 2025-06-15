let inputbox = document.getElementById("inputbox");
let Addbtn = document.getElementById("btncolor");
const tasklist = document.getElementById("tasklist");
const footer = document.querySelector(".footer");
const mainsmainfooter = document.querySelector(".mainsmainfooter");

// Button color toggle
inputbox.addEventListener('input', function () {
    if (inputbox.value.trim() !== "") {
        Addbtn.classList.add('active');
    } else {
        Addbtn.classList.remove('active');
    }
});

Addbtn.addEventListener("click", function () {
    const taskText = inputbox.value.trim();
    if (taskText === '') return;

    let progresscantainer = document.querySelector(".progress-cantainer");
    if (!progresscantainer) {
        // Create progress container
        progresscantainer = document.createElement('div');
        progresscantainer.classList.add("progress-cantainer");

        const progresstext = document.createElement("div");
        progresstext.id = "progress-text";

        const progressBarBackground = document.createElement("div");
        progressBarBackground.classList.add("progress-bar-background");

        const progressBar = document.createElement("div");
        progressBar.id = 'progress-bar';

        progressBarBackground.appendChild(progressBar);
        progresscantainer.appendChild(progresstext);
        progresscantainer.appendChild(progressBarBackground);

        // Insert ABOVE the tasklist
        tasklist.parentNode.insertBefore(progresscantainer, tasklist);
    }

    // Create new task
    let taskitem = document.createElement("li");
    taskitem.classList.add('task');

    let checkbox = document.createElement('button');
    checkbox.classList.add('checkbox');
    checkbox.innerHTML = `<i class="fa-solid fa-check"></i>`;

    checkbox.addEventListener('click', function () {
        checkbox.classList.toggle('update');
        taskitem.classList.toggle('taskitemupdate');
        span.classList.toggle('spanupdate');
        updateProgress(); // ✅ Call here
    });

    let span = document.createElement('span');
    span.classList.add("task-text");
    span.textContent = taskText;

    let deleteit = document.createElement('button');
    deleteit.classList.add("deleteit");
    deleteit.style.marginLeft = "auto";
    deleteit.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteit.addEventListener('click', function () {
        taskitem.remove();
        updatefooter();
        updateProgress(); // ✅ Call here
    });

    taskitem.appendChild(checkbox);
    taskitem.appendChild(span);
    taskitem.appendChild(deleteit);
    tasklist.appendChild(taskitem);

    inputbox.value = '';
    Addbtn.classList.remove('active');

    updatefooter();
    updateProgress(); // ✅ Call here
});

// Update footer message
function updatefooter() {
    if (tasklist.children.length === 0) {
        mainsmainfooter.innerHTML = `<div>No tasks yet</div>
            <div>Add a task above to get started!</div>`;

        // Also remove progress bar when no tasks
        const progresscantainer = document.querySelector('.progress-cantainer');
        if (progresscantainer) {
            progresscantainer.remove();
        }
    } else {
        mainsmainfooter.innerHTML = '';
    }
}

// Update progress bar
function updateProgress() {
    const total = tasklist.children.length;
    const completed = document.querySelectorAll('.checkbox.update').length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    const progresstext = document.querySelector("#progress-text");
    const progressBar = document.querySelector("#progress-bar");

    if (progresstext && progressBar) {
        progresstext.textContent = `${completed} of ${total} task completed (${percent}%)`;
        progressBar.style.width = `${percent}%`;
    }
}
