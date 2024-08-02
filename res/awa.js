function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires };
function getCookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) return c.substring(name.length, c.length) }; return null };
function getQueryString(name) { let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); let r = window.location.search.substr(1).match(reg); if (r != null) { return unescape(r[2]); }; return null; };
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); };
function removeElement(ElementId) { document.getElementById(ElementId).remove();return;};
function author_kdxiaoyi() {let a = document.createElement("a");a.setAttribute("href", 'https://github.com/kdxhub/pixiv.re_ui');a.setAttribute("target", "_blank");a.click();a.remove();return;};
function msg(Message, confirmTips) {if ( confirmTips == undefined ) {snackbar.innerHTML = Message;} else {snackbar.innerHTML = Message+`<s-button type="text" slot="action"> `+confirmTips+` </s-button>`;};snackbar.show();return;};//封装了一个Material Design的Tipbox
function setUItitle(Title) {if (Title == undefined) {document.getElementById("titlebar").innerHTML="Pixiv.re UI"} else {document.getElementById("titlebar").innerHTML=Title};return;};
function setPageTitle(Title) {if (Title == undefined) {document.getElementById("pagetitle").innerHTML="Pixiv.re UI - kdx233.github.io";} else {document.getElementById("pagetitle").innerHTML=Title+` - Pixiv.re UI - kdx233.github.io`;};return;};
function ip() {
  document.querySelector('#ip').show();
  return;
};
function copyip() {
  if (navigator.clipboard == undefined) {msg("喵~主人的浏览器不支持一键复制呢…", "(｡･ˇ_ˇ･｡:)");return;};
  navigator.clipboard.writeText(ipaddress).then(
    function () {/* clipboard successfully set */
    msg("已复制~", "朕已知晓");
    },
    function () {/* clipboard write failed */
    msg("呜~主人拒绝了复制权限", "(⋟﹏⋞)");
    },
  );
  return;
};
//定义变量与常量
const ipaddress=`mc.kdxiaoyi.top:12099`;
const hide="display:none;";const unhide="";
var id=0;
const snackbar=document.getElementById("snackbar");
//移除noscript标识
console.log ("kdxSMP");console.log("Copyright (C) 2024 kdxiaoyi. All right reserved.\nSee more @ //kdx233.github.io/licen");
document.getElementById("noscript").setAttribute("style", "display:none;");