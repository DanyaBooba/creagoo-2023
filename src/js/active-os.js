let MACOS = navigator.appVersion.indexOf('OS X');
let WINDOWS = navigator.appVersion.indexOf('Windows');
let ANDROID = navigator.appVersion.indexOf('Android');
let LINUX = navigator.appVersion.indexOf('Linux');

if (MACOS > -1) { GetMacOS(); }
if (WINDOWS > -1) { GetWindows(); }
if (ANDROID > -1) { GetAndroid(); }
if (LINUX > -1) { GetLinux(); }

function GetMacOS() {
    let dwn = document.getElementById('downloadmacos');
    if(dwn !== null) { dwn.classList.add('download--active') }
}

function GetWindows() {
    let dwn = document.getElementById('downloadwindows');
    if(dwn !== null) { dwn.classList.add('download--active') }
}

function GetAndroid() {
    let dwn = document.getElementById('downloadandroid');
    if(dwn !== null) { dwn.classList.add('download--active') }
}

function GetLinux() {
    let dwn = document.getElementById('downloadlinux');
    if(dwn !== null) { dwn.classList.add('download--active') }
}
