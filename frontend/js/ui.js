
export function TableReload(arr, place) {
    place.innerHTML = ''

    for(let item of arr) {
        let tr = document.createElement('tr')
        let titleView = document.createElement('td')
        let descView = document.createElement('td')
        let dateView = document.createElement('td')
        let timeView = document.createElement('td')
        let statusView = document.createElement('td')

        descView.classList.add('desc')

        place.append(tr)
        tr.append(titleView, descView, dateView, timeView, statusView)

        titleView.innerHTML = item.title
        descView.innerHTML = item.description
        dateView.innerHTML = item.date
        timeView.innerHTML = item.time
        
        if(item.status === "new") {
            statusView.innerHTML = "Не завершено"
            statusView.style.color = "#ff3f3f"
        } else if(item.status === "progress") {
            statusView.innerHTML = "В прогрессе"
            statusView.style.color = "#007FFF"
        } else if(item.status === "done") {
            statusView.innerHTML = "Готово"
            statusView.style.color = "#000"
        }
    }
}

export function GridReload(arr, place) {
    place.innerHTML = ''

    for(let item of arr) {
        let card = document.createElement('div')
        let titleView = document.createElement('h1')
        let descView = document.createElement('p')
        let dateBox = document.createElement('h4')
        let dateView = document.createElement('span')
        let timeView = document.createElement('span')
        let statusView = document.createElement('h3')

        card.classList.add('card')
        titleView.classList.add('card-title')
        descView.classList.add('card-desc')
        dateBox.classList.add('date-box')
        dateView.classList.add('card-date')
        timeView.classList.add('card-time')
        statusView.classList.add('card-status')

        place.append(card)
        card.append(titleView, descView, dateBox, statusView)
        dateBox.append(dateView, timeView)

        titleView.innerHTML = item.title
        descView.innerHTML = item.description
        dateView.innerHTML = item.date
        timeView.innerHTML = item.time
        
        if(item.status === "new") {
            statusView.innerHTML = "Не завершено"
            statusView.style.color = "#ff3f3f"
        } else if(item.status === "progress") {
            statusView.innerHTML = "В прогрессе"
            statusView.style.color = "#007FFF"
        } else if(item.status === "done") {
            statusView.innerHTML = "Готово"
            statusView.style.color = "#000"
        }
    }
}

/* <div class="card">
    <h1 class="card-title">Переписать проект на Vue 3</h1>
    <p class="card-desc">Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
    <h4>
        <span class="card-date">01.01.1111</span> 
        <span class="card-time">66:66</span>
    </h4>

    <h3 class="card-status">Completed</h3>
</div> */