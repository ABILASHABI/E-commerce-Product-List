<template>
  <div>
     <div class="navbar">
    <div class="logo">My Ecommerce Website</div>
    <div class="notification-icon">

        <div class="notification-icon" @click="showPopup">
      <i class="fa fa-shopping-cart" style="font-size:30px"></i>
              </div>

      <div v-if="notificationCount > 0" class="notification-badge">{{ notificationCount }}</div>

   <!-- Popup -->

    <div class="popup" v-show="isPopupVisible">
      <!-- Close icon -->
               <span class="close-icon" @click="closePopup">&times;</span>

      <!-- Popup content -->
          <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
       <div v-else>
      <div class="popup-content">
        <h2>My Cart</h2>
        <ul class="no-dot-list">
          <li v-for="product in cartItems" :key="product.id">
            <div class="product-info">
              <img :src="product.thumbnail" :alt="product.title" class="product-image" />
              <div class="product-details">
                <h3>{{ product.title }}</h3>
                <p>Price: {{ product.price }}</p> 
              </div>
            </div>
            <button class="remove-button" @click="removeFromCart(product)">Remove</button>
          </li>
        </ul>
        <p class="total-price">Total Price: {{ calculateTotalPrice() }}</p>
      </div>
      </div>
    </div>
    </div>
  </div>
  <div class="container">
    <h1>Product List</h1>
    <div class="product-list">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.thumbnail" :alt="product.title" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>   
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      view: 'grid',
      showNotification: false,
      notificationCount: 0,
      products: [],
      selectedProduct: null,
      cartItems: [],
      productsToNotify: [],
      isPopupVisible: false,
      showTotalPrice: false

    };
  },
  methods: {
     toggleNotification() {
      this.showNotification = !this.showNotification;
    },
    changeView(view) {
      this.view = view;
    },
    addToCart(product) {
      console.log('Adding to cart:', product);
      this.cartItems.push(product);
      console.log("test",this.allowNotification)
      this.notificationCount= this.cartItems.length

    },
    removeFromCart(cartItem) {
      const index = this.cartItems.indexOf(cartItem);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
      console.log("checktotal",this.cartItems.length)
      this.notificationCount= this.cartItems.length
    },
    calculateTotalPrice() {
      return this.cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
    },
     showPopup() {
      this.isPopupVisible = true;
      // this.showTotalPrice = true;
    },
    closePopup() {
      console.log("hello")
      this.isPopupVisible = false;
      // this.showTotalPrice = false;
    },
    getProductsList() {
      let cachescope = this;
      axios
        .get(
          'https://dummyjson.com/products',
        )
        .then(function (res) {
        cachescope.products = res.data.products
        const titles = res.data.products.map(item => item.title);
        const prices = res.data.products.map(item => item.price);
        const images = res.data.products.map(item => item.images[0]);
        console.log("titles",titles); // Array of titles
        console.log("prices",prices); // Array of prices
        console.log("images",images); // Array of images

        })
        .catch(function (err) {
          console.log("checkerr",err)
        });
    },
  },
 mounted() {
      this.getProductsList()
  },
};
</script>

