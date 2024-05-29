let SiteNameInput = document.getElementById('siteNameInput');
let SiteUrlInput = document.getElementById('siteUrl');
let urlClection = [];
let boxModel = document.querySelector("#modelBox")
if (localStorage.getItem("myUrl")) {
    urlClection = JSON.parse(localStorage.getItem("myUrl"));
    display(urlClection);

}
function addUrl() {
    if (validationName() && validationUrl()) {
        let sites = {
            id: SiteNameInput.value,
            url: SiteUrlInput.value
        };
        urlClection.push(sites);
        display(urlClection);
        clearData();
        localStorage.setItem("myUrl", JSON.stringify(urlClection));
    } else {
        Swal.fire({
            icon: "error",
            title: "Site Name or Url is not valid, Please follow the rules below :",
            text: "Site name must contain at least 3 characters and Site URL must be a valid one",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

}
function display(arr) {
    let box = ""
    for (let i = 0; i < urlClection.length; i++) {
        box += `
        <tr>
        <td>${i + 1}</td>
        <td>${urlClection[i].id}</td>
        <td>
            <button class="btn1 rounded text-white p-2"><i class="fa-solid fa-eye pe-2"></i><a target="_balnk" href="${urlClection[i].url}">Visit</a></button>
        </td>
        <td><button class="btn2 rounded text-white p-2" onclick="deleteUrl(${i})"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
    </tr>
        `
    }
    document.getElementById('siteCard').innerHTML = box;
    localStorage.setItem("myUrl", JSON.stringify(urlClection));
}
function clearData() {
    SiteUrlInput.value = "";
    SiteNameInput.value = "";
}
function deleteUrl(index) {
    urlClection.splice(index, 1);
    display(urlClection);
    localStorage.setItem("myUrl", JSON.stringify(urlClection));
}
function validationName() {
    let siteName = /^[A-Z][a-z]{2,10}$/;
    if (siteName.test(SiteNameInput.value)) {
        console.log("match");
        document.getElementById('siteNameInput').classList.add("is-valid");
        document.getElementById('siteNameInput').classList.remove("is-invalid");
        return true;
    } else {
        console.log("not match");
        document.getElementById('siteNameInput').classList.add("is-invalid");
        return false;
    }
}
// document.getElementById('noname').classList.add('bg-danger');
function validationUrl() {
    let siteUrl = /(https:\/\/)?(w{3}\.)?[A-Z]?[a-z]{1,}\.[a-z]{1,}$/;
    let siteUrlvalue = SiteUrlInput.value;
    if (siteUrl.test(siteUrlvalue)) {
        console.log("match");
        SiteUrlInput.classList.remove("is-invalid");
        SiteUrlInput.classList.add("is-valid");
        return true;
    } else {
        console.log("not match");
        SiteUrlInput.classList.add("is-invalid");
        return false;
    }
}

// function validationNameInput(element) {
//     let validation = {
//         siteName: /^[A-Z][a-z]{2,10}$/,
//         siteUrl: /(https:\/\/)?(w{3}\.)?[A-Z]?[a-z]{1,}\.[a-z]{1,}$/
//     };

//     if (validation[element.id].test(element.value)) {
//         element.classList.replace('is-invalid', 'is-valid');
//         return true;
//     } else {
//         element.classList.add('is-invalid');
//     }
// }

// ('^(https?:\\/\\/)?' +
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
//     '((\\d{1,3}\\.){3}\\d{1,3}))' +
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
//     '(\\?[;&a-z\\d%_.~+=-]*)?' +
//     '(\\#[-a-z\\d_]*)?$', 'i'); 