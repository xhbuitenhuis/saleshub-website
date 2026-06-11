// =========================================================
// AANPASSEN: JAVASCRIPT
// Hier hoef je normaal niet aan te zitten.
// Alleen de alert-teksten of salarischeck-bedragen kun je eventueel aanpassen.
// =========================================================


const headerLogoStyle = document.createElement('style');
headerLogoStyle.textContent = `
  .site-header .brand {
    gap: 0;
    flex: 0 0 auto;
  }
  .site-header .brand::before {
    content: "";
    display: block;
    width: 184px;
    height: 58px;
    background: url("images/logo-wordmark.svg") center / contain no-repeat;
  }
  .site-header .brand img,
  .site-header .brand span {
    display: none;
  }
  @media (max-width: 580px) {
    .site-header .brand::before {
      width: 148px;
      height: 48px;
    }
  }
`;
document.head.appendChild(headerLogoStyle);

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => mainNav.classList.toggle('active'));
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('active'));
  });
}

// AANPASSEN: NETLIFY FORM WORDT NIET GEBLOKKEERD
// De sollicitatieform heeft class "netlify-form" en wordt daarom niet door JavaScript tegengehouden.
// Daardoor kan Netlify de inzending opslaan.
document.querySelectorAll('.generic-form:not(.netlify-form)').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Bedankt! Je bericht of sollicitatie is ontvangen.');
    form.reset();
  });
});

const salaryForm = document.getElementById('salaryForm');
const salaryResult = document.getElementById('salaryResult');
if (salaryForm && salaryResult) {
  salaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value, 10);
    const days = parseInt(document.getElementById('days').value, 10);
    const level = parseInt(document.getElementById('level').value, 10);
    let base = 75;
    if (age >= 18) base = 95;
    if (age >= 21) base = 110;
    const perDay = base + level;
    const perWeek = perDay * days;
    const perMonth = Math.round(perWeek * 4.33);
    salaryResult.innerHTML = `
      <h3>Jouw indicatie</h3>
      <p>Op basis van jouw keuzes zou een realistische bandbreedte er ongeveer zo uit kunnen zien.</p>
      <div class="result-numbers">
        <div><span>Per dag</span><strong>€ ${perDay}</strong></div>
        <div><span>Per week</span><strong>€ ${perWeek}</strong></div>
        <div><span>Per maand</span><strong>€ ${perMonth}</strong></div>
      </div>
    `;
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
