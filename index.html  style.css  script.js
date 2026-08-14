<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temurbek Studio</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{
      font-family:Arial,Helvetica,sans-serif;
      background:#f4f7fb;
      color:#222;
      transition:.3s;
      scroll-behavior:smooth;
    }
    header{
      position:fixed;
      top:0;left:0;right:0;
      background:#fff;
      box-shadow:0 2px 10px rgba(0,0,0,.08);
      z-index:1000;
    }
    .nav{
      max-width:1200px;
      margin:auto;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:16px 20px;
    }
    .logo{
      font-size:24px;
      font-weight:bold;
      color:#2563eb;
    }
    .menu{
      display:flex;
      gap:22px;
      align-items:center;
    }
    .menu a{
      text-decoration:none;
      color:#222;
      font-weight:600;
    }
    .btn{
      background:#2563eb;
      color:#fff;
      border:none;
      padding:10px 16px;
      border-radius:10px;
      cursor:pointer;
    }
    section{
      max-width:1200px;
      margin:auto;
      padding:90px 20px;
    }
    .hero{
      display:grid;
      grid-template-columns:1.2fr .8fr;
      align-items:center;
      gap:40px;
      min-height:100vh;
      padding-top:120px;
    }
    .hero h1{
      font-size:52px;
      line-height:1.1;
      margin-bottom:20px;
    }
    .hero p{
      font-size:18px;
      color:#555;
      margin-bottom:24px;
    }
    .hero-card{
      background:#fff;
      border-radius:24px;
      padding:28px;
      box-shadow:0 12px 30px rgba(37,99,235,.15);
    }
    .hero-card .circle{
      width:120px;
      height:120px;
      border-radius:50%;
      background:linear-gradient(135deg,#2563eb,#7c3aed);
      margin:0 auto 20px;
    }
    .stats{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:20px;
      margin-top:30px;
    }
    .stat{
      background:#fff;
      padding:24px;
      border-radius:18px;
      text-align:center;
      box-shadow:0 6px 18px rgba(0,0,0,.08);
    }
    .stat h2{
      color:#2563eb;
      font-size:36px;
      margin-bottom:8px;
    }
    h2.title{
      text-align:center;
      font-size:38px;
      margin-bottom:40px;
    }
    .services{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
      gap:22px;
    }
    .card{
      background:#fff;
      padding:26px;
      border-radius:20px;
      box-shadow:0 8px 24px rgba(0,0,0,.08);
      transition:.25s;
    }
    .card:hover{
      transform:translateY(-8px);
    }
    .icon{
      width:56px;
      height:56px;
      border-radius:14px;
      background:#dbeafe;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:24px;
      margin-bottom:16px;
    }
    .portfolio{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
      gap:20px;
    }
    .work{
      background:#fff;
      border-radius:18px;
      overflow:hidden;
      box-shadow:0 8px 24px rgba(0,0,0,.08);
    }
    .work .img{
      height:170px;
      background:linear-gradient(135deg,#60a5fa,#7c3aed);
    }
    .work .content{
      padding:18px;
    }
    .contact{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:28px;
    }
    form{
      display:grid;
      gap:14px;
    }
    input,textarea{
      padding:14px;
      border:1px solid #ddd;
      border-radius:12px;
      font-size:16px;
    }
    textarea{
      min-height:140px;
      resize:vertical;
    }
    footer{
      text-align:center;
      padding:30px;
      color:#666;
    }
    .dark{
      background:#0f172a;
      color:#f8fafc;
    }
    .dark header,
    .dark .card,
    .dark .stat,
    .dark .work,
    .dark .hero-card{
      background:#111827;
      color:#f8fafc;
    }
    .dark .menu a{
      color:#f8fafc;
    }
    .dark input,
    .dark textarea{
      background:#1f2937;
      color:#fff;
      border-color:#374151;
    }
    @media (max-width:900px){
      .hero,
      .contact{
        grid-template-columns:1fr;
      }
      .hero h1{
        font-size:40px;
      }
      .stats{
        grid-template-columns:1fr;
      }
      .menu{
        display:none;
      }
    }
  </style>
</head>
<body>

<header>
  <div class="nav">
    <div class="logo">Temurbek Studio</div>
    <nav class="menu">
      <a href="#home">Bosh sahifa</a>
      <a href="#services">Xizmatlar</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Aloqa</a>
      <button class="btn" onclick="toggleTheme()">🌙 Rejim</button>
    </nav>
  </div>
</header>

<section class="hero" id="home">
  <div>
    <h1>Professional veb saytlar va zamonaviy dizayn</h1>
    <p>HTML, CSS va JavaScript yordamida tezkor, responsiv va chiroyli saytlar yaratamiz.</p>
    <button class="btn" onclick="scrollToSection('services')">Xizmatlarni ko‘rish</button>

    <div class="stats">
      <div class="stat"><h2 id="s1">0</h2><p>Loyihalar</p></div>
      <div class="stat"><h2 id="s2">0</h2><p>Mijozlar</p></div>
      <div class="stat"><h2 id="s3">0</h2><p>Tajriba</p></div>
    </div>
  </div>

  <div class="hero-card">
    <div class="circle"></div>
    <h3 style="text-align:center;margin-bottom:10px">Temurbek Studio</h3>
    <p style="text-align:center;color:#666">Bir faylda ishlaydigan zamonaviy HTML/CSS/JS loyiha.</p>
  </div>
</section>

<section id="services">
  <h2 class="title">Bizning xizmatlar</h2>
  <div class="services">
    <div class="card"><div class="icon">💻</div><h3>Veb sayt</h3><p>Biznes, portfolio va shaxsiy saytlar yaratish.</p></div>
    <div class="card"><div class="icon">🎨</div><h3>UI/UX Dizayn</h3><p>Foydalanuvchi uchun qulay interfeyslar.</p></div>
    <div class="card"><div class="icon">⚡</div><h3>Animatsiya</h3><p>JavaScript yordamida interaktiv elementlar.</p></div>
    <div class="card"><div class="icon">📱</div><h3>Responsive</h3><p>Telefon va kompyuter uchun mos dizayn.</p></div>
  </div>
</section>

<section id="portfolio">
  <h2 class="title">Portfolio</h2>
  <div class="portfolio">
    <div class="work"><div class="img"></div><div class="content"><h3>Biznes sayt</h3><p>Korporativ kompaniya uchun zamonaviy sayt.</p></div></div>
    <div class="work"><div class="img"></div><div class="content"><h3>Portfolio</h3><p>Dizayner va dasturchilar uchun portfolio.</p></div></div>
    <div class="work"><div class="img"></div><div class="content"><h3>Landing page</h3><p>Mahsulot va xizmatlarni taqdim etish sahifasi.</p></div></div>
  </div>
</section>

<section id="contact">
  <h2 class="title">Biz bilan bog‘laning</h2>
  <div class="contact">
    <div>
      <h3 style="margin-bottom:14px">Aloqa ma’lumotlari</h3>
      <p><strong>Email:</strong> info@temurbek.uz</p>
      <p><strong>Telefon:</strong> +998 90 123 45 67</p>
      <p><strong>Manzil:</strong> Toshkent, O‘zbekiston</p>
    </div>
    <form onsubmit="sendMessage(event)">
      <input type="text" placeholder="Ismingiz" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Xabaringiz" required></textarea>
      <button class="btn" type="submit">Yuborish</button>
    </form>
  </div>
</section>

<footer>
  © 2026 Temurbek Studio. Barcha huquqlar himoyalangan.
</footer>

<script>
function toggleTheme(){
  document.body.classList.toggle('dark');
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function sendMessage(e){
  e.preventDefault();
  alert('Xabaringiz muvaffaqiyatli yuborildi!');
  e.target.reset();
}

function animate(id,target,speed){
  let el=document.getElementById(id);
  let count=0;
  let step=Math.max(1,Math.ceil(target/50));
  let timer=setInterval(()=>{
    count+=step;
    if(count>=target){
      count=target;
      clearInterval(timer);
    }
    el.textContent=count+(id==='s3'?'+':'');
  },speed);
}

window.onload=()=>{
  animate('s1',120,25);
  animate('s2',85,30);
  animate('s3',5,120);
};
</script>

</body>
</html>
