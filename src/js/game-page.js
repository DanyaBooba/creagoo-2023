function showText() {
    let media = document.getElementById('divMedia');
    let text = document.getElementById('divText');

    if (media === null || text === null) return;

    media.classList.add('d-none');
    text.classList.remove('d-none');
}

function showMedia() {
    let media = document.getElementById('divMedia');
    let text = document.getElementById('divText');

    if (media === null || text === null) return;

    media.classList.remove('d-none');
    text.classList.add('d-none');
}
