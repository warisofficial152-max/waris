
document.addEventListener('DOMContentLoaded', function(){
  // lightbox
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', ()=>{
      lightboxImg.src = img.dataset.large || img.src;
      lightbox.style.display = 'flex';
    });
  });
  lightbox.addEventListener('click', ()=> lightbox.style.display = 'none');
  // attach click to service cards
  document.querySelectorAll('.service-card').forEach(c=>{ c.addEventListener('click', ()=>{ const href = c.dataset.href; if(href) window.location = href; }) });
});
