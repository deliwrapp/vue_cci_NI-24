<script>

/* IMPORTER LES COMPOSANTS ICI */
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductsTable from "./components/Product/ProductsTable.vue"

export default {
  name: "App",
  components: {
    MainLayout,
    MainNav,
    ProductsTable
  },
  /* Utilisation d'un hook du cycle de vie du composant */
  updated() {
    console.log(this.name)
    console.log(this.description)
    console.log(this.price)
  },
  data() {
    return {
      userNavItemsArray : [
        {
          name: "Settings",
          link: "#",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Edit",
          link: "#",
          target: "_self",
          emit: [
            { event: "updatePage", value: {"EditPage": true}}
          ],
          class: "link-body-emphasis"
        },
        {
          name: "Preview",
          link: "#",
          emit: [
            { event: "updatePage", value: {"PreviewPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        },
        {
          name: "Settings",
          link: "#",
          emit: [
            { event: "updatePage", value: {"settingsPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        }
      ],
      name: "Miel",
      description: "Oh qu'ils sont bon !!",
      price: 99,
      vta: 20,
      category: "sweet",
      products: [
        {
          id: 1,
          name: "biscuit",
          category: "sweet",
          description: "Oh qu'ils sont bon !!",
          price: 100,
          vta: 20
        },
        {
          id: 2,
          name: "Chocolat",
          category: "sweet",
          description: "C'est bon !!",
          price: 100,
          vta: 20
        }
      ],
      // Les Data pour la gestion du formulaire de categorie
      // Le tableau categories[] pour stocker les catégories
    }
  },
  methods: {
    submitProductForm() {
      this.products.push({
        id: this.products.length + 1,
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        vta: this.vta
      })
    },
    // submitCategoryForm
  }
}
</script>

<template>
  <main-layout>
    <main-nav
      :navItems="navItemsArray"
      :userNavItems="userNavItemsArray"
      :showUserNav="false"
    />
    
    <section class="d-flex wrap">
      <section class="col-6">
        <h2 class="w-f">Product Form</h2>
        <form @submit.prevent="submitProductForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <!-- v-model permet de "bind" un input avec une data
            Le Bind est bi-directionnel, si on modifie l'input la data est modifiée,
            si on modifie la data, la valeur de l'input est modifiée. -->
            <input 
              type="text"
              class="form-control" 
              id="name"
              name="name"
              aria-describedby="name-help"
              v-model="name"
              required
            >
            <div id="name-help" class="form-text">productorUn Nom!</div>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Prix</label>
            <input 
                type="number"
                class="form-control" 
                id="price"
                name="price"
                min="1"
                aria-describedby="price-help"
                v-model="price"
                required
            >
            <div id="price-help" class="form-text">Un Prix</div>
          </div>
          <div class="mb-3">
            <label for="vta" class="form-label">TVA</label>
            <input 
                type="number"
                class="form-control" 
                id="vta"
                name="vta"
                aria-describedby="vta-help"
                v-model="vta"
                required
            >
            <div id="vta-help" class="form-text">La TVA</div>
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Catégorie</label>
            <select 
                id="category"
                class="form-select" 
                v-model="category"
                required
            >
              <option value="meat">Viande</option>
              <option value="vegetable">Légume</option>
              <option value="drink">Boisson</option>
              <option value="sweet">Confiserie</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea 
                class="form-control" 
                id="description" 
                name="description"
                rows="3"
                v-model="description"
            >
            </textarea>
          </div>
          
          <button class="btn btn-primary" type="submit">Save</button>
        </form>
      </section>
      
      <products-table
        class="col-6"
        :products="products"  
      />
    </section>  
    <section class="d-flex wrap">
      <section class="col-6">
        <h2>CATEGORIES FORM</h2>
        <!-- ICI LE FORMULAIRE POUR LES CATEGORIES -->
      </section>
      <section class="col-6">
        <h2>CATEGORIES TABLE</h2>
        <!-- IMPORTER LE TABLEAU D'AFFICHAGE DES CATEGORIES -->
      </section>
    </section>  
  </main-layout>
</template>

<style scoped>
</style>
