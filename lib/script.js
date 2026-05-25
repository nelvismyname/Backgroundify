const zone = document.getElementById("zone");
const menu = document.getElementById("menu");
const picker = document.getElementById("picker");
zone.onclick = () => menu.style.display = menu.style.display === "block" ? "none" : "block";
picker.oninput = e => document.body.style.background = e.target.value;

['contextmenu', 'selectstart'].forEach(event => document.addEventListener(event, e => {
  (!e.target.closest(".zone") && !e.target.closest("input")) && e.preventDefault();
}));