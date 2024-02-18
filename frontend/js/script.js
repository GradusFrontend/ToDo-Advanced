
import { GridReload, TableReload, id } from "./ui.js"

const modalAdd = document.querySelector('#modalAdd')
const formAdd = document.forms.addTaskForm
const AddInps = formAdd.querySelectorAll('input')

const tbody = document.querySelector('tbody')
const table = document.querySelector('table')
const grid = document.querySelector('.grid')

const AddTaskBtn = document.querySelector('#add-task')
const closeAddTask = document.querySelector('.crossAdd')

const tableBtn = document.querySelector('#tableView')
const plateBtn = document.querySelector('#plateView')

plateBtn.onclick = () => {
    plateBtn.classList.add('active-view')
    tableBtn.classList.remove('active-view')

    grid.classList.remove('hide')
    table.classList.add('hide')
}

tableBtn.onclick = () => {
    plateBtn.classList.remove('active-view')
    tableBtn.classList.add('active-view')

    grid.classList.add('hide')
    table.classList.remove('hide')
}

AddTaskBtn.onclick = () => {
    modalAdd.showModal()
}

closeAddTask.onclick = () => {
    modalAdd.close()
}

let url = "http://localhost:8080/todos"

formAdd.onsubmit = (e) => {
    e.preventDefault()
    let value = {}
    let errors = 0
    AddInps.forEach(inp => {
        if (inp.value === '') {
            ++errors
        }
    })

    if (errors === 0) {
        new FormData(formAdd).forEach((val, key) => {
            value[key] = val
        })

        fetch(url, {
            method: "post",
            body: JSON.stringify(value),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    GET_DATA()
                }
            })

        modalAdd.close()
    }
}

GET_DATA()

function GET_DATA() {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            TableReload(res, tbody)
            GridReload(res, grid)
        })
}

const editModal = document.querySelector('#modalEdit')
const closeEditTask = document.querySelector('.crossEdit')
const deleteTask = document.querySelector('.deleteTask')
const editForm = document.forms.EditTaskForm

closeEditTask.onclick = () => {
    editModal.close()
}

editForm.onsubmit = (e) => {
    e.preventDefault()
    let editedTask = {
        id: id,
    }

    new FormData(editForm).forEach((key, value) => {
        editedTask[value] = key
    })

    console.log(editedTask);
    fetch(url + `/${id}`, {
        method: "put",
        body: JSON.stringify(editedTask),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                GET_DATA()
            }
        })

    editModal.close()
}

deleteTask.onclick = () => {
    fetch(url + `/${id}`, {
        method: "delete"
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                GET_DATA()
            }
        })

    editModal.close()
}


