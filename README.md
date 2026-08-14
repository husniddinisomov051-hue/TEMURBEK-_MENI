
<body>
<header>
<div class="logo">ProCompany</div>
<nav>
<ul>
<li><a href="#home">Bosh sahifa</a></li>
<li><a href="#services">Xizmatlar</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#team">Jamoa</a></li>
<li><a href="#contact">Kontakt</a></li>
</ul>
</nav>
</header>

<section class="hero" id="home">
<div>
<h1>Katta Biznes Uchun Zamonaviy Veb Sayt</h1>
<p>
Biz professional dizayn, tezkor ishlash va zamonaviy texnologiyalar
asosida kompaniyangiz uchun premium darajadagi saytlar yaratamiz.
</p>
<a href="#contact" class="btn">Bog‘lanish</a>
</div>
</section>

<section id="services">
<h2 class="section-title">Bizning Xizmatlar</h2>
<div class="services">
<div class="card">
<h3>Veb Dasturlash</h3>
<p>Korporativ saytlar, CRM tizimlar va onlayn platformalar yaratish.</p>
</div>
<div class="card">
<h3>Mobil Ilovalar</h3>
<p>Android va iOS uchun zamonaviy mobil ilovalar ishlab chiqish.</p>
</div>
<div class="card">
<h3>UI/UX Dizayn</h3>
<p>Foydalanuvchi uchun qulay va premium interfeys dizayni.</p>
</div>
<div class="card">
<h3>SEO Optimizatsiya</h3>
<p>Google qidiruv tizimida yuqori natijalarga chiqish.</p>
</div>
</div>
</section>

<section>
<h2 class="section-title">Biz Haqimizda</h2>
<div class="stats">
<div class="stat">
<h2 id="s1">0</h2>
<p>Loyihalar</p>
</div>
<div class="stat">
<h2 id="s2">0</h2>
<p>Mijozlar</p>
</div>
<div class="stat">
<h2 id="s3">0</h2>
<p>Xodimlar</p>
</div>
<div class="stat">
<h2 id="s4">0</h2>
<p>Mukofotlar</p>
</div>
</div>
</section>

<section id="portfolio">
<h2 class="section-title">Portfolio</h2>
<div class="portfolio">
<div class="project">
<img src="https://picsum.photos/500/300?1" alt="">
<div>
<h3>E-commerce Platforma</h3>
<p>To‘liq funksional internet do‘kon.</p>
</div>
</div>
<div class="project">
<img src="https://picsum.photos/500/300?2" alt="">
<div>
<h3>CRM Tizimi</h3>
<p>Kompaniya boshqaruvi uchun maxsus tizim.</p>
</div>
</div>
<div class="project">
<img src="https://picsum.photos/500/300?3" alt="">
<div>
<h3>Ta’lim Platformasi</h3>
<p>Onlayn kurslar va video darsliklar tizimi.</p>
</div>
</div>
</div>
</section>

<section id="team">
<h2 class="section-title">Bizning Jamoa</h2>
<div class="team">
<div class="member">
<img src="https://i.pravatar.cc/150?img=1" alt="">
<h3>Ali</h3>
<p>Frontend Developer</p>
</div>
<div class="member">
<img src="https://i.pravatar.cc/150?img=2" alt="">
<h3>Vali</h3>
<p>Backend Developer</p>
</div>
<div class="member">
<img src="https://i.pravatar.cc/150?img=3" alt="">
<h3>Sardor</h3>
<p>UI/UX Designer</p>
</div>
<div class="member">
<img src="https://i.pravatar.cc/150?img=4" alt="">
<h3>Jasur</h3>
<p>Project Manager</p>
</div>
</div>
</section>

<section>
<h2 class="section-title">Narxlar</h2>
<div class="pricing">
<div class="price-card">
<h3>Start</h3>
<div class="price">$299</div>
<p>Landing page</p>
<p>Responsive dizayn</p>
<p>1 oy qo‘llab-quvvatlash</p>
</div>
<div class="price-card">
<h3>Business</h3>
<div class="price">$999</div>
<p>Ko‘p sahifali sayt</p>
<p>Admin panel</p>
<p>SEO optimizatsiya</p>
</div>
<div class="price-card">
<h3>Premium</h3>
<div class="price">$2999</div>
<p>Maxsus platforma</p>
<p>CRM integratsiya</p>
<p>Doimiy texnik xizmat</p>
</div>
</div>
</section>

<section id="contact">
<h2 class="section-title">Bog‘lanish</h2>
<div class="contact">
<div>
<h3>Kontakt Ma’lumotlari</h3>
<p>Email: info@procompany.uz</p>
<p>Telefon: +998 90 123 45 67</p>
<p>Toshkent, O‘zbekiston</p>
</div>
<form>
<input type="text" placeholder="Ismingiz" required>
<input type="email" placeholder="Email" required>
<textarea placeholder="Xabaringiz" required></textarea>
<button type="submit">Yuborish</button>
</form>
</div>
</section>

<footer>
<p>© 2026 ProCompany. Barcha huquqlar himoyalangan.</p>
</footer>

<script>
function animate(id,target){
let el=document.getElementById(id);
let count=0;
let step=Math.ceil(target/100);
let interval=setInterval(()=>{
count+=step;
if(count>=target){
count=target;
clearInterval(interval);
}
el.textContent=count;
},20);
}
window.addEventListener("load",()=>{
animate("s1",250);
animate("s2",180);
animate("s3",25);
animate("s4",12);
});
</script>
