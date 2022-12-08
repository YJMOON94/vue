<template>

<article>
    <h2 class="hidden">컨텐츠영역</h2>
    <MainVisual/>
    <section class="content1">
        <h3 class="hidden">소방관련외부링크</h3>
            <ul>
                <li><a href="#">전국119<br>일일활동상황</a></li>
                <li><a href="#">청장동정</a></li>
                <li><a href="#">소관법령</a></li>
                <li><a href="#">민원신청</a></li>
                <li><a href="#">통계</a></li>
                <li><a href="#">국민의견</a></li>
                <li><a href="#">소방기관안내</a></li>
            </ul>
    </section>

    <section class="content2">
        <h3>화재시 행동 강령</h3>
        <v-app id="inspire">
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step
                        :complete="e1 > 1"
                        step="1"
                    >
                        화제가 나기 전
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="e1 > 2"
                        step="2"
                    >
                        화재가 난 후
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                        진화가 완료된 후
                    </v-stepper-step>
                </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 3"
                    >
                    Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                    ></v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                    Continue
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        </v-app>
    </section>
</article>

</template>

<script>
import MainVisual from './MainVisual'

export default {
  name : 'app',
  components:{
       MainVisual
  },
    data () {
    return {
    e1: 1,
    }
    },
}
</script>

<style>
    h3{font-size: 2rem; font-weight: 700; padding: 70px 0; border-top: 1px dotted #ddd; text-align: center;}
    .content1{
        /* text-align: left; */
        padding:5% 0;
    }
    .content1 ul{display: flex;}
    .content1 ul li{width: calc( 100% / 7 ); display: table;}
    .content1 ul li a{ vertical-align: middle; position: relative; padding-left: 50px; display: table-cell; font-weight: 700; font-size: 1.1vw;}
    .content1 ul li a::after{
        content:''; display: block; width:50px; height:50px; background-image: url('../assets/maincontent.png'); background-repeat: no-repeat;
        position: absolute; left:0; top:0; filter: grayscale(1); transition: filter .3s
    }
    .content1 ul li a:hover::after{
        filter:grayscale(0);
    }
    .content1 ul li:nth-child(1) a::after{background-position: 0 center;}
    .content1 ul li:nth-child(2) a::after{background-position: -50px center;}
    .content1 ul li:nth-child(3) a::after{background-position:-100px center;}
    .content1 ul li:nth-child(4) a::after{background-position:-150px center;}
    .content1 ul li:nth-child(5) a::after{background-position:-200px center;}
    .content1 ul li:nth-child(6) a::after{background-position:-250px center;}
    .content1 ul li:nth-child(7) a::after{background-position:-300px center;}



</style>