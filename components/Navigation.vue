<template>
  <div
    id="headerwrapper"
    class="purple d-flex justify-content-between align-items-center"
  >
    <div
      class="container d-flex flex-row justify-content-between align-items-center"
    >
      <div class="col d-flex flex-row">
        <nuxt-link to="/">
          <img src="/assets/images/iconlogoheader.svg" alt=""
        /></nuxt-link>

        <nav>
          <nuxt-link to="/about">À propos</nuxt-link>

          <div class="dropdown">
            <nuxt-link to="/apps">Applications</nuxt-link>

            <div class="dropdown-content">
              <nuxt-link to="/apps/marketplace">Marketplace</nuxt-link>
              <nuxt-link to="/apps/b2b">B2B</nuxt-link>
            </div>
          </div>

          <nuxt-link to="/pricing">Tarifs</nuxt-link>
        </nav>
      </div>
      <div class="col">
        <a href="">Contact <img src="/assets/images/enveloppe.svg" alt="" /></a>
        <a href="#">Demandez une demo</a>
      </div>
    </div>
  </div>
</template>
