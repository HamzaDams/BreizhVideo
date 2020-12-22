function afficherFilms() {
    fetch('http://localhost:8080/film/films')
        .then(response => response.json())
        .then(data => {
            let tableInfo = "";
            data.forEach(el => tableInfo += `

        <div class="accordion" id="film${el.id}">
                <a class="comedy" href="#film${el.id}"><i class="fab fa-dribbble"></i>${el.title}</a>
                <div class="content">
                    <div class="inner-content">
                        <h3>${el.title}</h3>
                            ${el.description}
                    </div>
                </div>
        </div>
    `)
            document.querySelector("#accordion").innerHTML = tableInfo;
        });
}

afficherFilms();