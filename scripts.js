var p = document.getElementById('counting');
var btn = document.getElementById('btn-count');
btn.onclick = function(){
  for (let i=0; i<11;i++){
    setTimeout(function(){p.textContent = `Counter: ${i}`;}, 500*i);
  };
};


