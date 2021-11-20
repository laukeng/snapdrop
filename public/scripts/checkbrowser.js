var userAgent = navigator.userAgent.toLowerCase();
if(userAgent.indexOf("wechat") > -1){
    var divWarning = document.getElementById("warning");
    divWarning.innerText = '微信无法下载文件，如需接收文件，请点击右上角选择“在浏览器打开”。推荐使用Safari、Firefox或者Chrome等浏览器。';
    divWarning.style.display="block";
}
