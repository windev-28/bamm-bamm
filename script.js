var TEL = "524441773287";

var CATALOGO = {
  inflables: [
    {n:"Castillo Barbie", f:"fotos/Castillo-Barbie.jpeg", e:"🏰", c:"#f7a8d4", m:"Medidas por confirmar", p:"$600"},
    {n:"Tobogán Tiburón", f:"fotos/tobogan-tiburon.jpeg", e:"🛝", c:"#1fa2e0", m:"Medidas por confirmar", p:"$1500"},
    {n:"Brincolín Sirenita", f:"fotos/Brincolin-Sirenita.jpeg", e:"👑", c:"#f7a8d4", m:"Medidas por confirmar", p:"$700"},
    {n:"Brincolín Jurassic", f:"fotos/Brincolin-Jurassic.jpeg", e:"🦖", c:"#7bd88f", m:"Medidas por confirmar", p:"$700"},
    {n:"Brincolín Sonic", f:"fotos/Brincolin-sonic.jpeg", e:"🎈", c:"#1fa2e0", m:"Medidas por confirmar", p:"$700"},
    {n:"Brincolín Merlina", f:"fotos/Brincolin-merlina.jpeg", e:"🎉", c:"#c3a6ff", m:"Medidas por confirmar", p:"$700"},
    {n:"Brincolín Mario Bros", f:"fotos/Brincolin-Mario-Bros.jpeg", e:"🎉", c:"#ffc93c", m:"Medidas por confirmar", p:"$700"},
    {n:"Brincolín KPOP", f:"fotos/kpop.jpeg", e:"🎉", c:"#c3a6ff", m:"Medidas por confirmar", p:"$700"}
  ],
  mobiliario: [
    {n:"Sillas Tiffany", f:"fotos/sillas-tifany.jpeg", e:"🪑", c:"#c3a6ff", m:"Precio por silla", p:"$700"},
    {n:"mesa rectangular", f:"fotos/mesa-rectangular.jpeg", e:"🪑", c:"#c3a6ff", m:"Precio por mesa", p:"$700"},
    {n:"mesa infantil", f:"fotos/mesa-infantil.jpeg", e:"🪑", c:"#c3a6ff", m:"Precio por mesa infantil", p:"$700"}
  ],
  toldos: [
    {n:"Toldo 4 x 4 m", f:"fotos/toldo.jpeg",e:"⛺", c:"#ffc93c", m:"Medidas por confirmar", p:"Cotiza"}
  ]
};

function wa(t){return "https://wa.me/"+TEL+"?text="+encodeURIComponent(t)}

function render(cat){
  document.getElementById("videos-inflables").style.display = (cat === "inflables") ? "" : "none";
  document.getElementById("grid").innerHTML = CATALOGO[cat].map(function(i){
    var pic = i.f
      ? '<div class="pic"><img src="'+i.f+'" alt="'+i.n+'" loading="lazy"></div>'
      : '<div class="pic" style="background:'+i.c+'" aria-hidden="true">'+i.e+'</div>';
    return '<article class="card">'+pic+
    '<div class="body"><h3>'+i.n+'</h3><p class="meta">'+i.m+'</p><div class="price">'+i.p+'</div>'+
    '<a class="btn" data-wa="Hola Bamm-Bamm, me interesa: '+i.n+'. ¿Tienen disponibilidad?">Preguntar disponibilidad</a></div></article>';
  }).join("");
  activarWhatsApp();
}


function activarWhatsApp(){
  document.querySelectorAll("[data-wa]").forEach(function(a){
    a.href = wa(a.getAttribute("data-wa")); a.target = "_blank"; a.rel = "noopener";
  });
}

document.querySelectorAll(".tab").forEach(function(b){
  b.addEventListener("click", function(){
    document.querySelectorAll(".tab").forEach(function(t){
      t.classList.remove("active"); t.setAttribute("aria-selected","false");
    });
    b.classList.add("active"); b.setAttribute("aria-selected","true");
    render(b.getAttribute("data-cat"));
  });
});

render("inflables");