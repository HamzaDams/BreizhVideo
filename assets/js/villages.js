const urlString = window.location.search;
const urlParametres = new URLSearchParams(urlString);

function addVillage(form) {

    const village = {
        name: form.name.value,
        postalCode: form.postalCode.value
    }

    console.log(village)

    fetch("http://localhost:8080/village/villages", {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: village.name, postalCode: village.postalCode })
    }).then(function(response) {
        console.log(response.status);
        response.json().then(function(data) {
            console.log(data);

            alertMessage(data.name);
        })
    })
}

function afficherVillages() {

    fetch('http://localhost:8080/village/villages')
        .then(response => response.json())
        .then(data => {
            let tableInfo = "";
            data.forEach(el => tableInfo += `
            <tr>
                <td>${el.name}</td>
                <td>${el.postalCode}</td>
                <td><button onclick='voirVillage(${el.id})'>Voir</button> | <button onclick='deleteVillage(${el.id})'>Supprimer</button></td>
            </tr>
        `)
            document.querySelector("#listeVillage").innerHTML = tableInfo;
        });
}

afficherVillages();


function voirVillage(villageId) {
    window.location.href = '/village.html?id=' + villageId;
}

function alertMessage(message) {
    document.querySelector("#message").innerHTML = `
        <p>Vous avez ajouter ${message}</p>
    `;

    //Enlever le message d'alerte 2seconde
    setTimeout(() => {
        document.querySelector("#message").innerHTML = ""
    }, 2000);
}

function afficherVillageExistant() {
    if (urlParametres.get('id') != null) {
        fetch('http://localhost:8080/village/' + urlParametres.get('id'))
            .then(response => response.json())
            .then(data => {
                document.querySelector("#name").value = data.name;
                document.querySelector("#postalCode").value = data.postalCode;
            })
    }
}

afficherVillageExistant();

function deleteVillage(villageId) {
    fetch('http://localhost:8080/village/villages?id=' + villageId, {
        method: 'DELETE'
    })
    document.location.reload();
}