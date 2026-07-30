export function Unidades() {
  const unidades = [
    { nome: "Gratidão", descricao: "Kitnet aconchegante, ideal para quem busca praticidade e conforto.", imagem: "/images/unidades/gratidao.jpg", disponivel: false },
    { nome: "Sabedoria", descricao: "Ambiente bem distribuído com cozinha americana e ótima iluminação.", imagem: "/images/unidades/sabedoria.jpg", disponivel: true },
    { nome: "Esperança", descricao: "Perfeita para casais, com espaço otimizado e decoração clean.", imagem: "/images/unidades/esperanca.jpg", disponivel: true },
    { nome: "Felicidade", descricao: "Ampla e arejada, com área de serviço privativa.", imagem: "/images/unidades/felicidade.jpg", disponivel: false },
    { nome: "Harmonia", descricao: "A melhor vista da região, com quarto separado e sala integrada.", imagem: "/images/unidades/harmonia.jpg", disponivel: true }
  ];

  return `
    <section class="unidades section" id="unidades">
      <div class="container">
        <h2 class="section__title">Nossas Unidades</h2>
        <p class="section__subtitle">5 kitnets com nomes especiais, cada uma com seu charme</p>
        <div class="unidades__grid">
          ${unidades.map(u => `
            <article class="unidade-card ${!u.disponivel ? 'unidade-card--indisponivel' : ''}">
              <div class="unidade-card__image-wrapper">
                <img src="${u.imagem}" alt="Kitnet ${u.nome} - Kitnet Lar Mogi" class="unidade-card__image" loading="lazy" />
                ${!u.disponivel ? '<span class="unidade-card__badge">Em breve</span>' : ''}
              </div>
              <div class="unidade-card__content">
                <h3 class="unidade-card__nome">${u.nome}</h3>
                <p class="unidade-card__descricao">${u.descricao}</p>
                <a href="https://wa.me/5511998526680?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20na%20unidade%20${u.nome}!" target="_blank" rel="noopener noreferrer" class="btn btn--primary unidade-card__btn">
                  Consulte Valores
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}