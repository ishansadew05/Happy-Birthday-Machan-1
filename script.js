const envelope = document.getElementById("envelopeContainer");
const loveWindow = document.getElementById("loveWindow");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const stage1 = document.getElementById("stage1");
const stage2 = document.getElementById("stage2");

envelope.addEventListener("click",()=>{
  envelope.style.display="none";
  loveWindow.style.display="block";
});

function moveNo(){
  const x = Math.random()*200 - 100;
  const y = Math.random()*80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

yesBtn.addEventListener("click",()=>{
  stage1.classList.add("hidden");
  stage2.classList.remove("hidden");
  for(let i=0;i<50;i++){
    let h=document.createElement("div");
    h.innerHTML="😁";
    h.style.position="fixed";
    h.style.left=Math.random()*100+"vw";
    h.style.top="-10px";
    h.style.fontSize="22px";
    h.style.animation=`fall ${Math.random()*2+3}s linear forwards`;
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4000);
  }
});
yesBtn.addEventListener("click",()=>{
  stage1.classList.add("hidden");
  stage2.classList.remove("hidden");
  
  // පලවෙනි සැරේ වට්ටනවා
  createHearts();

  // ඊට පස්සේ හැම තප්පර 0.5න්ම ආයේ ආයේ වට්ටනවා
  setInterval(createHearts, 500);
});

function createHearts(){
  for(let i=0;i<15;i++){
    let h=document.createElement("div");
    h.innerHTML = Math.random() > 0.5 ? "🎉" : "🎂";
    h.style.position="fixed";
    h.style.left=Math.random()*100+"vw";
    h.style.top="-10px";
    h.style.fontSize="22px";
    h.style.pointerEvents="none";
    h.style.animation=`fall ${Math.random()*2+3}s linear forwards`;
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4000);
  }
}
