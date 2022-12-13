<template>
    <section class="main_visual">
        <h2 class="hidden">메인비주얼</h2>
            <div class="box">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>
                        <img :src="image_box.image1_url">
                        <dl>
                            <dt>선제적 예방 정교한 대응</dt>
                            <dd>THE 견고한 국민안전</dd>
                        </dl>
                        </swiper-slide>
                    <swiper-slide>
                        <img :src="image_box.image2_url">
                        <dl>
                            <dt>화재 구조 구급 긴급신고는 119</dt>
                            <dd>비긴급신고는 안전신문고로 신고해주세요</dd>
                        </dl>
                        </swiper-slide>
                    <swiper-slide>
                        <img :src="image_box.image3_url">
                        <dl>
                            <dt>대한민국의 안전의 중심 소방청</dt>
                            <dd>소방청은 국민의 안전을 1순위로 생각합니다</dd>
                        </dl>
                        </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'App',
  components: {
      Swiper,
      SwiperSlide
  },
   data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        image_box:{
            image1_url : require('../assets/main01.jpg'),
            image2_url : require('../assets/main02.jpg'),
            image3_url : require('../assets/main03.jpg')
        }
      }
    }
}
</script>

<style>

 .box{position: relative;}

 .swiper {
    height: 100%;
    width: 100%;
 }
  
 .swiper .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
  }
  .swiper .swiper-slide dl{
    position: absolute;
    text-align: left;
    left:15%;
    top:30%;
    color:#fff;
    font-size: 3vw;
    font-weight: 700;
  }
  .swiper .swiper-slide dl dd{
    font-size: 2vw;
    font-weight: 500;
    margin-top: 50px;
  }

.box img{
    width:100%;
}
:root {
    --swiper-theme-color: #fff;
}
.swiper-button-prev, .swiper-button-next {
    --swiper-theme-color: rgba(255,255,255,.3);
    --swiper-navigation-size: 70px;
    transition: all .3s;
}

.swiper-button-prev:hover, .swiper-button-next:hover {
    --swiper-theme-color: rgba(255,255,255,1);
}
</style>