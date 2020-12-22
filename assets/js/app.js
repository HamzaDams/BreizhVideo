function listAllVillages() {
    fetch('http://localhost:8080/village/villages')
        .then(response => response.json())
        .then(data => {
            let listOptions = "";
            data.forEach(el => listOptions += `
            <option value="${el.name}">${el.name}</option>
    `)
            document.querySelector("#listLieux").innerHTML = listOptions;
        });
}

listAllVillages();


function listAllFilms() {
    fetch('http://localhost:8080/film/films')
        .then(response => response.json())
        .then(data => {
            let listOptions2 = "";
            data.forEach(el => listOptions2 += `
            <option id="${el.title}" value="${el.title}">${el.title}</option>
    `)
            document.querySelector("#film").innerHTML = listOptions2;
        });
}

listAllFilms();