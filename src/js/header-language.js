let langUser = navigator.language;

if (langUser !== "ru-RU" && langUser !== "be_BY" && langUser !== "ce_RU" && langUser !== "uk_UA") {
    ShowChangeLanguage();
}

function ShowChangeLanguage() {
    let btnClose = localStorage.getItem('lang-close');

    if (btnClose !== 'close') {
        let mainblock = document.getElementById('changelanguagemainblock');
        if(mainblock !== null) { mainblock.classList.remove('d-none'); }
    }
}

function CloseHeaderLanguage() {
    localStorage.setItem('lang-close', 'close');

    let mainblock = document.getElementById('changelanguagemainblock');
    if(mainblock !== null) { mainblock.classList.add('d-none'); }
}
