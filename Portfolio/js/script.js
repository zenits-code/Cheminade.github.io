// Script minimal: menu toggle, smooth scroll, year
document.addEventListener('DOMContentLoaded',function(){
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if(menuToggle){
    menuToggle.addEventListener('click',()=>{
      if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
    });
  }
  // Year
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();
  // Smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      e.preventDefault(); const id = this.getAttribute('href'); const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // For Formspree: set hidden _replyto from email field before submit
  const contactForm = document.querySelector('form.contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      const emailInput = contactForm.querySelector('input[type="email"][name="email"]');
      const replyto = contactForm.querySelector('input[name="_replyto"]');
      if(emailInput && replyto){ replyto.value = emailInput.value; }
      // allow form to submit normally to Formspree
    });
  }
});
