<template>
  <nav>
    <nuxt-link to="/">Accueil</nuxt-link>
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
</template>
