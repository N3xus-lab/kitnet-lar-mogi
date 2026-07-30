export function Localizacao() {
  return `
    <section class="localizacao section" id="localizacao">
      <div class="container">
        <h2 class="section__title">Onde estamos</h2>
        <p class="section__subtitle">Rua José Malozze, 195 - Mogi Lar, Mogi das Cruzes - SP</p>
        <div class="localizacao__grid">
          <div class="localizacao__mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14635!2d-46.1876234!3d-23.5227894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Jos%C3%A9%20Malozze%2C%20195%20-%20Mogi%20Lar!5e0!3m2!1spt-BR!2sbr!4v1691234567890" width="100%" height="350" style="border:0;border-radius:16px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização Kitnet Lar Mogi"></iframe>
            <a href="https://maps.app.goo.gl/pkkEapNrwGrhccyf9" target="_blank" rel="noopener noreferrer" class="localizacao__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Como chegar
            </a>
          </div>
          <div class="localizacao__pontos">
            <div class="localizacao__fachada">
              <img src="/images/fachada.jpg" alt="Fachada Kitnet Lar Mogi" class="localizacao__fachada-img" loading="lazy" />
            </div>
            <h3>Próximo de você</h3>
            <ul>
              <li><span>🛒</span> Mercado - 200m</li>
              <li><span>🏥</span> Hospital - 800m</li>
              <li><span>🏛️</span> Centro - 1,2km</li>
              <li><span>🎓</span> Universidade - 1,5km</li>
              <li><span>🚌</span> Terminal - 900m</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}