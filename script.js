// ========== config ==========
const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEBAPP_URL_HERE"; // <-- THAY ở đây

// ========== helper: read ?name= ==========
function getQueryParam(key){
  const params = new URLSearchParams(window.location.search);
  const v = params.get(key);
  return v ? decodeURIComponent(v) : null;
}

// ========== set guest name in all elements ==========
function setGuestName(name){
  const nodes = document.querySelectorAll(".guestName");
  nodes.forEach(n => n.innerText = name || "Quý khách");
  // also set hidden field
  const gf = document.getElementById("guestField");
  if(gf) gf.value = name || "";
}

// ========== Open invitation animation ==========
document.getElementById("openBtn").addEventListener("click", function(){
  // simple: hide cover, show main with a smooth fade & small flower animation
  const cover = document.getElementById("cover");
  const inv = document.getElementById("invitation");

  // gentle scale/rotate of cover front before opening
  const front = document.getElementById("cover-front");
  front.style.transform = "scale(0.98) rotate(-1deg)";
  setTimeout(()=>{
    front.style.transform = "scale(1) rotate(8deg)";
    cover.style.transition = "opacity .7s ease";
    cover.style.opacity = "0";
    setTimeout(()=>{ cover.style.display="none"; inv.classList.remove("hidden"); window.scrollTo({top:0, behavior:'smooth'})}, 700);
  }, 250);
});

// ========== Populate guest name from URL early ==========
const n = getQueryParam("name");
setGuestName(n);

// ========== RSVP submit handler ==========
const form = document.getElementById("rsvp-form");
form.addEventListener("submit", async function(e){
  e.preventDefault();
  const guest = document.getElementById("guestField").value || getQueryParam("name") || "Unknown";
  const attending = document.getElementById("attending").value;
  const quantity = document.getElementById("quantity").value || 0;

  // Basic validation
  if(attending === "" || quantity === ""){
    document.getElementById("rsvp-msg").innerText = "Vui lòng điền đầy đủ";
    return;
  }

  // send to Google Apps Script
  try{
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ name: guest, attending, quantity })
    });
    const text = await res.text();
    document.getElementById("rsvp-msg").innerText = "Cảm ơn bạn đã phản hồi! (Đã lưu)";
    form.reset();
  }catch(err){
    console.error(err);
    document.getElementById("rsvp-msg").innerText = "Lỗi gửi phản hồi. Vui lòng thử lại.";
  }
});

// ========== small floating animations (flowers/clouds) ==========
(function floaters(){
  // create a few floating circles for atmosphere (or use images)
  const cover = document.getElementById("cover");
  for(let i=0;i<6;i++){
    const el = document.createElement("div");
    el.style.position="absolute";
    el.style.width = (30 + Math.random()*40) + "px";
    el.style.height = el.style.width;
    el.style.borderRadius = "50%";
    el.style.left = (10 + Math.random()*80) + "%";
    el.style.top = (5 + Math.random()*60) + "%";
    el.style.background = "rgba(214,207,224,0.25)";
    el.style.pointerEvents = "none";
    el.style.animation = `floatUp ${8 + Math.random()*8}s ease-in-out ${Math.random()*3}s infinite`;
    cover.appendChild(el);
  }
})();
