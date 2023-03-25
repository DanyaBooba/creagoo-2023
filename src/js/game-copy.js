function CopyLink() {
	var copyText = document.getElementById("copylink");
	copyText.value = "https://creagoo.ru" + window.location.pathname;
	copyText.select();
	document.execCommand("copy");
}
