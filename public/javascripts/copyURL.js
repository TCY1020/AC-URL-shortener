//此方法對 Safari 瀏覽器並沒有效
function copyEvent(id) {
  let str = document.getElementById(id);
  window.getSelection().selectAllChildren(str);
  document.execCommand("Copy")
}