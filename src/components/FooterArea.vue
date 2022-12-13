<template>
  <footer>
          <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          (30128) 세종특별자치시 정부2청사로 13(나성동) 소방시설민원센터 1661-9119, 대표전화:주간(일반)044-205-7032, 야간(당직) 및 토·공휴일 044-205-7037
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>COPYRIGHT &copy; 2017 National Fire Agency All Rights Reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <div class="moveToTop">
      <a href="#top"><i class="fa-solid fa-caret-up"></i></a>
    </div>
  </footer>
</template>

<style>
footer .v-card {
  width:100%
}
html{scroll-behavior: smooth;}

footer .moveToTop a{
  color:#fff;
  border:1px solid #ff4433;
  background: #ff4433;
  position: fixed;
  right:5px;
  bottom:5px;
  text-align: center;
  padding:12px 20px;
  font-size: 2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0,0,0,.2);
  transition:all .3s
}
footer .moveToTop a:hover{
  border:1px solid #ff4433;
  background: #fff;
  color:#ff4433
}
</style>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>