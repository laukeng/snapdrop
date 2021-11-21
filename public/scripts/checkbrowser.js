var userAgent = navigator.userAgent.toLowerCase();
var divWarning = document.getElementById("warning");
if (!window.isRtcSupported) {
    divWarning.innerText = '您当前使用的浏览器不支持WebRTC，请用其他浏览器打开此页面。推荐使用Safari、Firefox或者Chrome等浏览器。';
    divWarning.style.display = "block";
} else if (userAgent.indexOf("wechat") > -1 || userAgent.indexOf("micromessenger") > -1) {
    divWarning.innerText = '微信无法下载文件，如需接收文件，请点击右上角选择“在浏览器打开”。推荐使用Safari、Firefox或者Chrome等浏览器。';
    divWarning.style.display = "block";
}