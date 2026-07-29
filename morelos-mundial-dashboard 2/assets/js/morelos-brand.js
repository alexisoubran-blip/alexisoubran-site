document.addEventListener('DOMContentLoaded', () => {
  const shell = document.createElement('header');
  shell.className = 'brand-shell';
  shell.innerHTML = `
    <div class="brand-top">
      <strong>Supermercados Morelos · Mundial 2026</strong>
      <span>Reporte ejecutivo de campaña</span>
    </div>
    <div class="brand-main">
      <div class="morelos-logo" aria-label="Supermercados Morelos">
        <img class="brand-logo-image" src="assets/images/morelos-logo.png" alt="Logo de Supermercados Morelos">
        <div class="logo-type">
          <b>MORELOS</b>
          <span>SUPERMERCADOS</span>
        </div>
      </div>
      <div class="brand-tagline">¡Viva la tradición!</div>
    </div>`;
  document.body.prepend(shell);
});
