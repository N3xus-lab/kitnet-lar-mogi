(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function n(){return`
    <nav class="navbar" id="navbar">
      <div class="navbar__container">
        <a href="#" class="navbar__logo">
          <img src="/images/logo/logo-kitnet.jpg" alt="Kitnet Lar Mogi" class="navbar__logo-img" />
          <span class="navbar__logo-text">Lar Mogi</span>
        </a>
        <ul class="navbar__menu" id="navbar-menu">
          <li><a href="#unidades" class="navbar__link">Unidades</a></li>
          <li><a href="#galeria" class="navbar__link">Galeria</a></li>
          <li><a href="#diferenciais" class="navbar__link">Diferenciais</a></li>
          <li><a href="#localizacao" class="navbar__link">Localização</a></li>
        </ul>
        <a href="https://wa.me/5511998526680?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" rel="noopener noreferrer" class="navbar__cta btn btn--primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
          WhatsApp
        </a>
        <button class="navbar__toggle" id="navbar-toggle" aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `}function c(){return`
    <section class="hero" id="hero">
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <h1 class="hero__title">Encontre sua Kitnet em Mogi das Cruzes</h1>
        <p class="hero__subtitle">Conforto, segurança e praticidade para morar bem.</p>
        <div class="hero__actions">
          <a href="https://wa.me/5511998526680?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" rel="noopener noreferrer" class="btn btn--primary hero__btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            Ver Disponibilidade
          </a>
          <a href="#unidades" class="btn btn--outline-white hero__btn">
            Conhecer Unidades
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  `}function l(){return`
    <section class="beneficios section" id="beneficios">
      <div class="container">
        <h2 class="section__title">Por que escolher a Lar Mogi?</h2>
        <div class="beneficios__grid">
          <div class="beneficio-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <h3>Ambiente Confortável</h3>
            <p>Kitnets organizadas e prontas para morar, com tudo que você precisa.</p>
          </div>
          <div class="beneficio-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <h3>Excelente Localização</h3>
            <p>No coração de Mogi das Cruzes, perto de tudo que você precisa.</p>
          </div>
          <div class="beneficio-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <h3>Entrada Facilitada</h3>
            <p>Processo simples e rápido para você se mudar sem burocracia.</p>
          </div>
          <div class="beneficio-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <h3>Internet Inclusa</h3>
            <p>Wi-Fi de alta velocidade incluído para você trabalhar e estudar.</p>
          </div>
        </div>
      </div>
    </section>
  `}function d(){return`
    <section class="unidades section" id="unidades">
      <div class="container">
        <h2 class="section__title">Nossas Unidades</h2>
        <p class="section__subtitle">5 kitnets com nomes especiais, cada uma com seu charme</p>
        <div class="unidades__grid">
          ${[{nome:"Gratidão",descricao:"Kitnet aconchegante, ideal para quem busca praticidade e conforto.",imagem:"/images/unidades/gratidao.jpg",disponivel:!1},{nome:"Sabedoria",descricao:"Ambiente bem distribuído com cozinha americana e ótima iluminação.",imagem:"/images/unidades/sabedoria.jpg",disponivel:!0},{nome:"Esperança",descricao:"Perfeita para casais, com espaço otimizado e decoração clean.",imagem:"/images/unidades/esperanca.jpg",disponivel:!0},{nome:"Felicidade",descricao:"Ampla e arejada, com área de serviço privativa.",imagem:"/images/unidades/felicidade.jpg",disponivel:!1},{nome:"Harmonia",descricao:"A melhor vista da região, com quarto separado e sala integrada.",imagem:"/images/unidades/harmonia.jpg",disponivel:!0}].map(e=>`
            <article class="unidade-card ${e.disponivel?"":"unidade-card--indisponivel"}">
              <div class="unidade-card__image-wrapper">
                <img src="${e.imagem}" alt="Kitnet ${e.nome} - Kitnet Lar Mogi" class="unidade-card__image" loading="lazy" />
                ${e.disponivel?"":'<span class="unidade-card__badge">Em breve</span>'}
              </div>
              <div class="unidade-card__content">
                <h3 class="unidade-card__nome">${e.nome}</h3>
                <p class="unidade-card__descricao">${e.descricao}</p>
                <a href="https://wa.me/5511998526680?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20na%20unidade%20${e.nome}!" target="_blank" rel="noopener noreferrer" class="btn btn--primary unidade-card__btn">
                  Consulte Valores
                </a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `}function m(){return`
    <section class="galeria section" id="galeria">
      <div class="container">
        <h2 class="section__title">Conheça os ambientes</h2>
        <p class="section__subtitle">Cada detalhe pensado para seu conforto</p>
      </div>
      <div class="galeria__grid">
        ${["/images/galeria/foto-01.jpg","/images/galeria/foto-02.jpg","/images/galeria/foto-03.jpg","/images/galeria/foto-04.jpg","/images/galeria/foto-05.jpg","/images/galeria/foto-06.jpg","/images/galeria/foto-07.jpg","/images/galeria/foto-08.jpg"].map((e,s)=>`
          <div class="galeria__item">
            <img src="${e}" alt="Kitnet Lar Mogi - Foto ${s+1}" class="galeria__image" loading="lazy" />
          </div>
        `).join("")}
      </div>
    </section>
  `}function p(){return`
    <section class="diferenciais section" id="diferenciais">
      <div class="container">
        <h2 class="section__title">Diferenciais Lar Mogi</h2>
        <p class="section__subtitle">O que torna nossas kitnets especiais</p>
        <div class="diferenciais__grid">
          ${["Água inclusa","Internet banda larga","Segurança 24h","Ambiente familiar","Excelente custo-benefício","Próximo ao transporte público","Mercado a 200m","Farmácia a 300m","Entrada facilitada","Sem fiador"].map(e=>`
            <div class="diferencial-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${e}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function g(){return`
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
  `}function v(){return`
    <section class="depoimentos section" id="depoimentos">
      <div class="container">
        <h2 class="section__title">Quem mora recomenda</h2>
        <p class="section__subtitle">A satisfação de quem já encontrou seu lar</p>
        <div class="depoimentos__grid">
          ${[{nome:"Maria Silva",texto:"Kitnet organizada, segura e muito bem localizada. O atendimento foi excelente!",estrelas:5},{nome:"João Santos",texto:"Me mudei rápido e sem burocracia. Internet boa e ambiente familiar como prometido.",estrelas:5},{nome:"Ana Oliveira",texto:"A melhor kitnet de Mogi! Perto de tudo e o custo-benefício é imbatível.",estrelas:5}].map(e=>`
            <div class="depoimento-card">
              <div class="depoimento-card__estrelas">${"★".repeat(e.estrelas)}</div>
              <p class="depoimento-card__texto">"${e.texto}"</p>
              <span class="depoimento-card__nome">${e.nome}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function u(){return`
    <section class="cta section" id="contato">
      <div class="container">
        <div class="cta__card">
          <h2 class="cta__title">Seu novo lar começa aqui</h2>
          <p class="cta__text">Kitnets organizadas, seguras e prontas para morar. Atendimento rápido pelo WhatsApp.</p>
          <a href="https://wa.me/5511998526680?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20visita!" target="_blank" rel="noopener noreferrer" class="btn btn--primary cta__btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            Agende sua Visita
          </a>
        </div>
      </div>
    </section>
  `}function h(){return`
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <img src="/images/logo/logo-kitnet.jpg" alt="Kitnet Lar Mogi" class="footer__logo" />
            <p class="footer__desc">Conforto, segurança e praticidade para morar bem em Mogi das Cruzes.</p>
          </div>
          <div class="footer__links">
            <h4>Links</h4>
            <a href="#unidades">Unidades</a>
            <a href="#galeria">Galeria</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#localizacao">Localização</a>
          </div>
          <div class="footer__contato">
            <h4>Contato</h4>
            <p>📱 (11) 99852-6680</p>
            <p>📷 @kitnetlarmogi</p>
            <p>📍 Rua José Malozze, 195 - Mogi Lar</p>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© 2026 Kitnet Lar Mogi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `}function f(){return`
    <a href="https://wa.me/5511998526680?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Fale pelo WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
    </a>
  `}document.querySelector("#app").innerHTML=`
  ${n()}
  ${c()}
  ${l()}
  ${d()}
  ${m()}
  ${p()}
  ${g()}
  ${v()}
  ${u()}
  ${h()}
  ${f()}
`;window.addEventListener("scroll",()=>{const i=document.getElementById("navbar");window.scrollY>50?i.classList.add("navbar--scrolled"):i.classList.remove("navbar--scrolled")});document.addEventListener("click",i=>{if(i.target.closest("#navbar-toggle")){const e=document.getElementById("navbar-menu"),s=document.getElementById("navbar-toggle");e.classList.toggle("navbar__menu--open"),s.classList.toggle("navbar__toggle--active")}!i.target.closest(".navbar")&&document.getElementById("navbar-menu").classList.contains("navbar__menu--open")&&(document.getElementById("navbar-menu").classList.remove("navbar__menu--open"),document.getElementById("navbar-toggle").classList.remove("navbar__toggle--active"))});document.addEventListener("click",i=>{const e=i.target.closest('a[href^="#"]');if(e){i.preventDefault();const s=document.querySelector(e.getAttribute("href"));s&&(s.scrollIntoView({behavior:"smooth"}),document.getElementById("navbar-menu").classList.remove("navbar__menu--open"),document.getElementById("navbar-toggle").classList.remove("navbar__toggle--active"))}});
