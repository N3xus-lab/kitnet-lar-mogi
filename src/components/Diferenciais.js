export function Diferenciais() {
  const itens = [
    "Água inclusa", "Internet banda larga", "Segurança 24h", "Ambiente familiar",
    "Excelente custo-benefício", "Próximo ao transporte público", "Mercado a 200m",
    "Farmácia a 300m", "Entrada facilitada", "Sem fiador"
  ];

  return `
    <section class="diferenciais section" id="diferenciais">
      <div class="container">
        <h2 class="section__title">Diferenciais Lar Mogi</h2>
        <p class="section__subtitle">O que torna nossas kitnets especiais</p>
        <div class="diferenciais__grid">
          ${itens.map(item => `
            <div class="diferencial-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}