/* Método JS para abir links e nova aba. */

const urlLinkedin = "https://www.linkedin.com/in/gilberto-mascena-96393723a";
const linkedin = document.querySelector(".social__linkedin");

const urlGitHub = "https://github.com/Gilberto-Mascena"
const gitHub = document.querySelector(".social__github");


function openInNewTab(urlLinkedin) {
    const novaAbaLink = window.open(urlLinkedin, "_blank");
    novaAba.focus();
}

linkedin.addEventListener("click", () => {
    openInNewTab(urlLinkedin);
})


function openInNewTab(urlGitHub) {
    const novaAbaGit = window.open(urlGitHub, "_blank");
    novaAba.focus();
}

gitHub.addEventListener("click", () => {
    openInNewTab(urlGitHub);
})
