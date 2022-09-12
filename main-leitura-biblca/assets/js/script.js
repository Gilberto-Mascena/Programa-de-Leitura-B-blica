/* Método JS para abir links e nova aba. */

const urlLink = "https://www.linkedin.com/in/gilberto-mascena-96393723a";
const linkedin = document.querySelector(".social__linkedin");

const urlGit = "https://github.com/Gilberto-Mascena"
const github = document.querySelector(".socila__github");


function openInNewTab(urlLink) {
    const novaAbaLink = window.open(urlLink, "_blank");
    novaAba.focus();
}

linkedin.addEventListener("click", () => {
    openInNewTab(urlLink);
})


function openInNewTab(urlGit) {
    const novaAbaGit = window.open(urlGit, "_blank");
}

github.addEventListener("click", () => {
    openInNewTab(urlGit);
})
