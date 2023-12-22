<template>
  <div id="tomust" class="swiper-container" ref="swiperContainer">
    <!-- Additional wrapper for slides -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="bande purple swiper-slide" id="hero">
        <div class="container">
          <div class="row">
            <div id="kopdax" class="col-md-5 col-12 d-flex justify-content-center flex-column">
              <h1>Le CMS éditeur d'application Social Media Business</h1>
              <p>
                Créez facilement votre application de contenu<br>que vous
                vouliez
                vendre vos produits ou services,<br>promouvoir votre image,
                créer une
                communauté<br>forte et engagée...
              </p>
              <div class="cta">
                <a href>Découvrir</a>
                <a href>Quel est votre projet ?</a>
              </div>
            </div>
            <div id="javier" class="col-md-7 col-12">
              <img id="image1" src="/assets/images/telhomepage.png"
                alt="Image 1" />
              <img src="/assets/images/dashboardhomepage1.png" alt="Image 2" />
              <img src="/assets/images/dashboardhomepage2.png" alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
      <div class="bande purple swiper-slide" id="jennyfer">
        <div class="container">
          <h2>
            Créez facilement votre application de contenu<br>que vous vouliez
            vendre vos produits ou services,<br>promouvoir votre image, créer
            une communauté<br>business ou associative...
          </h2>

          <div class="row">
            <div id="feige" class="col-md-5 col-12">
              <h3>Découvrez nos solutions "Mobile First"<br>pour valoriser votre
                offre ou votre identité,<br>faites gagner du temps à vos
                équipes<br> pour optimiser les processus de vente <br>et votre
                stratégie de communication.</h3>
              <p>Gagnez de l’impact ! Quel que soit le public que vous
                ciblez,<br>BIG CITY répond à des besoins de diffusion de
                contenu, d’interactions marchandes, d’animation de communauté,
                de partage d’informations<br>ou d’événements, de collecte de
                données qualifiées et plus encore…</p>
            </div>

            <div class="col-md-7 col-12">

            </div>
          </div>
        </div>
      </div>
      <div class="bande swiper-slide" id="video">
        <div class="container">
          <div class="row">
            <div id="yoko"
              class="col-md-6 col-12 d-flex justify-center align-center">
              <video loop playsinline ref="videoRef">
                <source src="/assets/images/Bigcityanim_2.mp4"
                  type="video/mp4" />
              </video>
            </div>
            <div class="col-md-6 col-12">
              <h2>Avec BIG City,<br>vous pouvez<br>rapidement créer…</h2>
              <p><ul>
                  <li>une application Brand-content</li>
                  <li>une application BtoB</li>
                  <li>une marketplace</li>
                  <li>un guide touristique</li>
                  <li>une application événementielle</li>
                  <li>une plateforme associative</li>
                  <li>un annuaire BtoBtoC</li>
                  <li>une plateforme pour votre fédération</li>
                  <li>une application de votre choix</li>

                </ul></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bande purple swiper-slide" id="nouvelles-experiences">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <!-- Contenu de la colonne de droite -->
            </div>
            <div class="col-12 col-md-6">
              <h2>Créez de nouvelles expériences utilisateurs en faisant évoluer
                votre expérience web au niveau mobile first.</h2>
              <p>
                Rassemblez le marketing, les ventes et la communication au sein
                d’une même application grâce à une technologie qui permet à
                chacun de donner le meilleur de lui-même pour valoriser votre
                activité ou atteindre de nouveaux objectifs.
              </p>
              <a href="#">Découvrir les fonctionnalités</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bande swiper-slide" id="nocode">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5">
              <h2>BIG CITY, le cms d’application
                no code multi-sites.</h2>
              <p>
                Vous allez aller plus vite grâce au système de gestion de
                contenu multi site pour créer votre communauté BtoB, BtoC,
                BtoBtoC et créer des expériences utilisateurs innovantes.
                <strong>Laissez votre créativité respirer !
                  Big City s’occupe du reste.</strong>
              </p>
              <a href="#">Découvrir les fonctionnalités</a>
            </div>
            <div id="furelse" class="col-12 col-md-7">
              <!-- Contenu de la colonne de droite -->
              <img src="/assets/images/illutsraionNocode.jpg" alt
                class="img-fluid">
            </div>

          </div>
        </div>
      </div>
      <div class="uncmstaille purple swiper-slide" id="nouvelles-experiences">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <!-- Contenu de la colonne de droite -->
              <img src="/assets/images/aliceetcms.png" alt class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
              <h2>Un CMS taillé pour répondre
                à des objectifs marketing et
                commerciaux, de communication
                et d’identité.</h2>
              <p>
                Avec le CMS BIG CITY, vous allez créer des applications fortes
                en visibilité pour votre entité et son audience et créer de
                nouvelles
                interactions avec votre cible.
              </p>
              <div id="parleznous">
                <p>Parlez-nous de votre projet, nous allons le rendre réel !
                </p>
                <a href="#">Contactez-nous</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ... other slides ... -->
    </div>
    <!-- Pagination if you need -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Swiper, { Pagination, Mousewheel, Autoplay, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// configure Swiper to use modules
Swiper.use([Pagination, Mousewheel, Autoplay, Keyboard]);

const swiperContainer = ref(null);

onMounted(() => {
  const swiperInstance = new Swiper(swiperContainer.value, {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 0,
    mousewheel: true,
    keyboard: true,
    loop: false,
    autoplay: {
      delay: 300000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    setWrapperSize: true,
  });
});
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 100vh;
}

.swiper-slide {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  bottom: 10px;
}
</style>
