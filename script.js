:root{
  --olive: #9baa8a;
  --dark: #4c4c4c;
  --muted:#f6f6f6;
  --accent:#d6cfe0;
  --max-width:1000px;
}

*{box-sizing:border-box}
body{
  font-family: "Montserrat", system-ui, sans-serif;
  background:#5b5b5b;
  color:var(--dark);
  margin:0;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

#page{
  max-width:var(--max-width);
  margin:40px auto;
  background:transparent;
}

/* COVER */
#cover{
  position:relative;
  height:640px;
  background:var(--olive);
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:6px;
  box-shadow:0 12px 30px rgba(0,0,0,0.35);
  overflow:hidden;
}

#ribbon{
  position:absolute;
  top:20px;
  left:40px;
  width:160px;
  transform-origin:center;
  animation: ribbonFloat 4s ease-in-out infinite;
  opacity:0.95;
}

@keyframes ribbonFloat{
  0%{ transform:translateY(0) rotate(-5deg) }
  50%{ transform:translateY(6px) rotate(4deg) }
  100%{ transform:translateY(0) rotate(-5deg) }
}

.cover-inner{
  text-align:center;
  width:75%;
}

.cover-inner .title{
  font-family:"Playfair Display";
  font-weight:400;
  font-size:26px;
  color:rgba(20,30,20,0.9);
  margin-bottom:6px;
  letter-spacing:0.6px;
}

.guest-line{
  margin-bottom:20px;
  font-size:18px;
  color:rgba(10,20,10,0.8);
}

#cover-front{
  width:360px;
  border-radius:4px;
  box-shadow:0 8px 20px rgba(0,0,0,0.25);
  margin-bottom:18px;
  transform-origin:center;
  transition: transform .9s cubic-bezier(.2,.9,.3,1);
}

/* Open button */
.btn{
  border:1px solid rgba(0,0,0,0.06);
  background:#fff;
  padding:10px 18px;
  border-radius:6px;
  cursor:pointer;
  font-weight:600;
  box-shadow:0 4px 12px rgba(0,0,0,0.12);
}

/* INVITATION */
.hidden{display:none}
.panel{
  background: #fff;
  padding:28px;
  margin-top:24px;
  border-radius:6px;
  box-shadow:0 10px 30px rgba(0,0,0,0.16);
}

/* split details */
.panel-details{
  display:flex;
  gap:20px;
  align-items:flex-start;
}

.panel-details .left{flex:1}
.panel-details .right{flex:1.4}

.panel-details h1{
  font-family:"Playfair Display";
  font-size:34px;
  letter-spacing:1px;
  margin:0 0 6px 0;
}

.panel-details .date{color:#8b8b8b; margin-top:0}
.panel-details .venue{margin:8px 0 18px 0}

/* RSVP */
.panel-rsvp form{display:flex; gap:12px; flex-wrap:wrap; align-items:center}
.panel-rsvp label{display:block; min-width:160px}
.panel-rsvp input[type="number"], .panel-rsvp select{
  padding:8px 10px; border:1px solid #ddd; border-radius:6px;
}
.note{margin-top:12px; color:#2b7a41}

/* small screens */
@media (max-width:800px){
  .panel-details{flex-direction:column}
  #cover{height:520px}
  #cover-front{width:280px}
}
