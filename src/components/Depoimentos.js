export function Depoimentos() {
  const depoimentos = [
    { nome: "Maria Silva", texto: "Kitnet organizada, segura e muito bem localizada. O atendimento foi excelente!", estrelas: 5 },
    { nome: "João Santos", texto: "Me mudei rápido e sem burocracia. Internet boa e ambiente familiar como prometido.", estrelas: 5 },
    { nome: "Ana Oliveira", texto: "A melhor kitnet de Mogi! Perto de tudo e o custo-benefício é imbatível.", estrelas: 5 }
  ];

  return `
    <section class="depoimentos section" id="depoimentos">
      <div class="container">
        <h2 class="section__title">Quem mora recomenda</h2>
        <p class="section__subtitle">A satisfação de quem já encontrou seu lar</p>
        <div class="depoimentos__grid">
          ${depoimentos.map(d => `
            <div class="depoimento-card">
              <div class="depoimento-card__estrelas">${'★'.repeat(d.estrelas)}</div>
              <p class="depoimento-card__texto">"${d.texto}"</p>
              <span class="depoimento-card__nome">${d.nome}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}