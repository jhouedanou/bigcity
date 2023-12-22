<template>
  <div
    id="headerwrapper"
    class="d-flex justify-content-between align-items-center"
  >
    <div
      class="container d-flex flex-row justify-content-between align-items-center"
    >
      <div class="col d-flex flex-row">
        <nuxt-link class="logo" to="/"></nuxt-link>

        <nav>
          <nuxt-link class="kang" to="/about">À propos</nuxt-link>
          <div class="dropdown kang">
            <nuxt-link to="/apps">Applications</nuxt-link>

            <div class="dropdown-content">
              <nuxt-link to="/apps/marketplace">Marketplace</nuxt-link>
              <nuxt-link to="/apps/b2b">B2B</nuxt-link>
              <nuxt-link to="/apps/marketplace">Marketplace</nuxt-link>
              <nuxt-link to="/apps/b2b">B2B</nuxt-link>
              <nuxt-link to="/apps/marketplace">Marketplace</nuxt-link>
              <nuxt-link to="/apps/b2b">B2B</nuxt-link>
              <nuxt-link to="/apps/marketplace">Marketplace</nuxt-link>
              <nuxt-link to="/apps/b2b">B2B</nuxt-link>
            </div>
          </div>
          <nuxt-link id="drdoom" class="kang" to="/pricing">Tarifs</nuxt-link>
        </nav>
      </div>
      <div class="col">
        <a id="johna" href=""
          >Contact <img src="/assets/images/enveloppe.svg" alt=""
        /></a>
        <a id="majors" href="#">Demandez une demo</a>
      </div>
    </div>
  </div>
</template>
<style></style>
