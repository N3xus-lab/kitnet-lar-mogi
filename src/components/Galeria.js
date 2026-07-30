export function Galeria() {
  const fotos = [
    "/images/galeria/foto-01.jpg",
    "/images/galeria/foto-02.jpg",
    "/images/galeria/foto-03.jpg",
    "/images/galeria/foto-04.jpg",
    "/images/galeria/foto-05.jpg",
    "/images/galeria/foto-06.jpg",
    "/images/galeria/foto-07.jpg",
    "/images/galeria/foto-08.jpg"
  ];

  return `
    <section class="galeria section" id="galeria">
      <div class="container">
        <h2 class="section__title">Conheça os ambientes</h2>
        <p class="section__subtitle">Cada detalhe pensado para seu conforto</p>
      </div>
      <div class="galeria__grid">
        ${fotos.map((foto, i) => `
          <div class="galeria__item">
            <img src="${foto}" alt="Kitnet Lar Mogi - Foto ${i + 1}" class="galeria__image" loading="lazy" />
          </div>
        `).join('')}
      </div>
    </section>
  `;
}