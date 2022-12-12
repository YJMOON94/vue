<template>
<div id="app">
<article>
    <h2 class="hidden">컨텐츠영역</h2>
    <MainVisual/>
    <section class="content1">
        <h3 class="hidden">소방관련외부링크</h3>
            <ul>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/communication/firesafe/dailyfire/">전국119<br>일일활동상황</a></li>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/introduce/directorinfo/movements/superintendent/">청장동정</a></li>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/publicrelations/legalinformation/jurisdiction/">소관법령</a></li>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/communication/complaint/onlinecomplaint/online/">민원신청</a></li>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/releaseinformation/statisticalinformation/main/">통계</a></li>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/communication/petitions/">국민의견</a></li>
                <li><a title="링크로 이동합니다" href="https://www.nfa.go.kr/nfa/communication/petitions/">소방기관안내</a></li>
            </ul>
    </section>
    <section class="content2">
        <div class="section_title">
            <h3>{{ section_header[0].title }}</h3>
            <p>{{ section_header[0].content }}</p>
            <router-link to="/sub1" class="pageMoveBtn">더 알아보기</router-link>
        </div>
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
                        심폐소생술
                    </v-stepper-step>
                </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                    class="mb-12 prevention_innerbox1"
                    >
                    <div class="prevention_inner">
                        <img src="../assets/prevention01.jpg" alt="화재예방이미지">
                        <img src="../assets/prevention02.jpg" alt="화재예방이미지">
                        <img src="../assets/prevention03.jpg" alt="화재예방이미지">
                        <img src="../assets/prevention04.jpg" alt="화재예방이미지">
                        <h4>화재 예방하기</h4>
                        <dl>
                            <dt>전기 화재 예방 <i class="fa-solid fa-plug"></i></dt>
                            <dd>사용하지 않거나 외출할 때에는 전원을 끄고 플러그 뽑기 습관화</dd>
                            <dd>사용전 전선의 파여여부 확인하고, 콘센트나 멀티탭에 낀 먼지 제거</dd>
                            <dt>가스 화재 예방 <i class="fa-solid fa-fire-flame-simple"></i></dt>
                            <dd>사용 전에 창문을 열어 환기하고, 사용 중 가스레인지 불꽃 확인</dd>
                            <dd>사용 후 벨브와 콕이 제데로 잠겼는지 확인하기</dd>
                            <dt>안전한 난방기구 사용법 <i class="fa-solid fa-temperature-high"></i></dt>
                            <dd>난방기구 주위에 인화성 물질 두지 않기</dd>
                            <dd>주택용소방시설 설치 및 난로 주위에 항상 소화기 배치하기</dd>
                        </dl>
                    </div>
                    </v-card>

                    <v-btn
                    color="#ff4433"
                    @click="e1 = 2"
                    >
                    다음
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card
                    class="mb-12 prevention_innerbox2"
                    >
                    <div class="prevention_inner">
                        <img src="../assets/prevention05.jpg" alt="화재시행동강령">
                        <h4>화재 경보가 울릴 때 행동요령</h4>
                        <dl>
                            <dt>비상소집을 합니다 <i class="fa-solid fa-users"></i></dt>
                            <dd>자고 있을 때 화재경보가 울리면 불이 났는지 확인하려 하기보다는 소리를 질러 모든 사람들을 깨우고 모이게 한 후 대처방안에 따라 밖으로 대피합니다.</dd>
                            <dt>대피방법을 결정합니다 <i class="fa-solid fa-magnifying-glass-arrow-right"></i></dt>
                            <dd>손드응로 출입문 손잡이를 만져보아 손잡이가 따뜻하거나 뜨거우면 문 반대쪽에 불이 난 것이므로 문을 열지 않습니다.</dd>
                            <dd>연기가 들어오는 방향과 출입문 손잡이를 만져보아 계단으로 나갈지 창문으로 구조를 요청할지 결정합니다.</dd>
                            <dt>신속히 대피합니다 <i class="fa-solid fa-person-running"></i></dt>
                            <dd>대피할 때는 엘리베이터를 절대 이용하지 않고 계단을 통하여 지상으로 안전하게 대피합니다</dd>
                            <dd>대피가 어려운 경우에는 창문으로 구조요청을 하거나 대피공간 또는 경량 칸막이를 이용하여 대피합니다</dd>
                            <dt>119로 신고합니다 <i class="fa-solid fa-land-mine-on"></i></dt>
                            <dd>안전하게 대피한 후 119에 신고합니다</dd>
                            <dd>휴대폰이 있어서 신고가 가능하다면 속히 해주시고 신고하느라 대피시간을 놓치지 않도록 합니다</dd>
                            <dt>대피 후 인원을 확인합니다 <i class="fa-solid fa-user-check"></i></dt>
                            <dd>놀이터 등 사전에 약속한 안전한 곳으로 대피한 후 인원을 확인합니다</dd>
                            <dd>주변에 보이지 않는 사람이 있다면 출동한 소방관에게 알려줍니다</dd>
                        </dl>
                    </div>
                    </v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 3"
                    >
                    다음
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                    class="mb-12 prevention_innerbox3"
                    >
                    <div class="prevention_inner">
                        <img src="../assets/prevention06.jpg" alt="cpr">
                        <h4>심폐소생술</h4>
                        <dl>
                            <dt>확인 <i class="fa-solid fa-user-check"></i></dt>
                            <dd>어깨를 두드리며 반응을 확인합니다</dd>
                            <dt>신고 <i class="fa-solid fa-land-mine-on"></i></dt>
                            <dd>119신고 및 자동심장충격기 (AED)를 요청하고 호흡을 확인합니다</dd>
                            <dt>압박 <i class="fa-solid fa-person-dress-burst"></i></dt>
                            <dd>분당 100~120회로 강하고 빠르게 30회 압박합니다</dd>
                            <dt>호흡 <i class="fa-solid fa-lungs"></i></dt>
                            <dd>기도를 열고 가슴이 부풀어 오르도록 2회의 인공호흡을 합니다</dd>
                            <dt>반복 <i class="fa-solid fa-repeat"></i></dt>
                            <dd>가슴압박과 인공호흡을 30:2 로 119가 도착할 때 까지 반복합니다</dd>
                            <dt>AED <i class="fa-solid fa-hard-drive"></i></dt>
                            <dd>자동심장충겨기가 도착하면 기계의 지시에 따라 행동합니다</dd>
                        </dl>
                    </div>
                    </v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                    처음으로
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        </v-app>
    </section>

    <section class="content3">
        <div class="section_title">
            <h3>{{ section_header[1].title }}</h3>
            <p>{{ section_header[1].content }}</p>
            <router-link to="/sub2" class="pageMoveBtn">더 알아보기</router-link>
        </div>

        <div class="section_content">
            <dl>
                <dt>소방정책국</dt>
                <dd>대한민국 소방청은 소방정책과, 소방분석제도과, 화재예방과, 화재대응조사과, 소방산업과, 국립소방병원건립추진단 등 업무를 여러 부서로 분할하여 보다 효과적이고 빠르게 국민안전에 대응할 수 있도록 체계를 갖추고 있습니다.</dd>
            </dl>
        </div>
    </section>

    <section class="content4">
        <div class="section_title">
            <h3>{{ section_header[2].title }}</h3>
            <p>{{ section_header[2].content }}</p>
            <router-link to="/sub3" class="pageMoveBtn">더 알아보기</router-link>
        </div>
        <div class="section_content">
            <ul>
                <li></li>
                <li>
                    <dl>
                        <dt><img src="../assets/danger.png" alt="위험">전용구역의 주차 금지 및 방해행위 금지</dt>
                        <dd>1. 전용구역에 물건 등을 쌓거나 주차하는 행위</dd>
                        <dd>2. 전용구역의 앞면, 뒷면 또는 양 측면에 물건 등을 쌓거나 주차하는 행위.<br>다만, 부설주차장의 주차구획 내에 주차하는 경우는 제외</dd>
                        <dd>3. 전용구역 진입로에 물건 등을 쌓거나 주차하여 전용구역으로의 진입을 가로막는 행위</dd>
                        <dd>4. 전용구역 노면표지를 지우거나 훼손하는 행위</dd>
                        <dd>5. 그 밖의 방법으로 소방자동차가 전용구역에 주차하는 것을 방해하거나 전용구역으로 진입하는 것을 방해하는 행위</dd>
                    </dl>
                </li>
            </ul>
        </div>
    </section>

    <section class="content4">
        <div class="section_title">
            <!-- <h3>{{ section_header[2].title }}</h3>
            <p>{{ section_header[2].content }}</p> -->
        </div>
    </section>
</article>
</div>
</template>

<script>
import MainVisual from './MainVisual'
import sectiontitle_data from '../section_title.json'
// import ambulance_data from '../seoul.json'
import firetruck_area_data from '../area.json'

export default {
  name : 'app',
  components:{
       MainVisual
  },
    data () {
    return {
    section_header : sectiontitle_data,
    // ambulance : ambulance_data,
    firetruck_area : firetruck_area_data,
    e1: 1
    }
  },
  methods:{

  }
}
</script>

<style>
    .section_title{padding: 70px 0; border-top: 1px dotted #ddd; text-align: center; margin:0 auto; width:95%;}
    .section_title h3{font-size: 2rem; font-weight: 700; position: relative; left:0; top:0;}
    .section_title h3::after{content:''; display: block; position: absolute; width:2px; height:50px; background: #ff4433; left: 50%; bottom:-80px;}
    .section_title p{font-size: 1rem; font-weight: 500; margin-top: 100px;}
    .section_title .pageMoveBtn{
        display: inline-block;
        padding:20px 30px;
        background:#ff4433;
        color:#fff;
        border-radius: 8px;
        box-shadow: 3px 3px 10px rgba(0,0,0,.3);
        margin:50px 0;
        font-weight: 700;
        border:1px solid rgba(0,0,0,0);
        transition:all .3s
    }
    .section_title .pageMoveBtn:hover{
        border:1px solid #ff4433;
        background: #fff;
        color:#ff4433;
    }

    .content1{padding:5% 0;}
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

    .content2{width:100%; box-sizing: border-box; padding:0 5%; margin-bottom:100px;}
    /* button custom */
    .v-stepper__step__step {
        border-radius: 5px;
        min-width: 25px;
        width: 25px;
        }
    .content2 .v-application .primary {
        background-color: #ff4433 !important;
        border-color: #ff4433 !important;
    }
    .theme--light.v-btn {
        color: #fff;
    }

    .v-sheet.v-card:not(.v-sheet--outlined) {box-shadow: none}
    .v-application .grey.lighten-1 {
        background-color: #fff !important;
        border-color: #fff !important;
        background-size: contain;
        text-align: left;
    }

    .v-application .prevention_inner h4{font-size: 1.75rem; font-weight: 700; margin:50px 0; } 
    .v-application .prevention_inner dl{
        text-align: left;
        display: inline-block;
        box-shadow: 3px 3px 10px rgba(0,0,0,.3);
        box-sizing: border-box;
        padding:5% 10%;
        }
    .v-application .prevention_inner dl dt{
        font-size: 1.125rem;
        font-weight: 700;
        color:#ff4433;
        margin: 20px 0;
    }
    .v-application .prevention_inner dl dd{
        font-size: 1rem;
        font-weight: 500;
        line-height: 2;
        position: relative;
    }
    .v-application .prevention_inner dl dd::after{
        content:''; display: block; position: absolute; left:-5px; top:0;
        width:1px; height:5px; background: #f05555; transform: rotate(45deg);
    }
    .v-application .prevention_innerbox1 .prevention_inner img{
        width:25%;
    }
    .v-application .prevention_innerbox2 .prevention_inner img{
        width:100%;
    }

    .content3{
        margin-bottom: 100px;
    }
    .content3 .section_content{
        width:100%;
        background: url('../assets/background.jpg') center center no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    .content3 .section_content dl{
        padding:3%;
        text-align: left;
        line-height: 2;
        color:#fff;
    }
    .content3 .section_content dl dt{
        font-size:2rem;
        font-weight: 700;
        border-bottom: 3px solid #ff4433;
        display: inline-block;
        margin-bottom: 30px;
    }
    .content3 .section_content dl dd{
        font-size: 1.25rem;
        font-weight: 700;
        color:#ddd
    }

    .content4{
        width:95%; margin:0 auto;
    }
    /* .content3 .area_list{display: flex;}
    .content3 .area_list li{width:calc(100%/7); text-align: center; border:1px solid #999; padding:20px 0; cursor:pointer; transition:all .3s; font-size: 1.25rem; font-weight: 700;}
    .content3 .area_list li:hover{background: #ff4433; color:#fff} */
    .v-slide-group__content {
        justify-content: center;
    }
    .content4 .section_content ul{
        display: flex;
    }
    .content4 .section_content ul li{
        width:50%;
    }
    .content4 .section_content ul li:nth-of-type(1){
        background: url('../assets/area.jpg') center center no-repeat;
        background-size: cover;
    }
    .content4 .section_content ul li:nth-of-type(2) img{
        vertical-align: top;
        width:50px;
        height:50px;
        margin-right: 10px;
    }
    .content4 .section_content ul li:nth-of-type(2) dl{
        text-align: left;
        padding:10%;
    }
    .content4 .section_content ul li:nth-of-type(2) dl dt{
        font-size: 2rem;
        font-weight: 700;
        color:#ff4433;
        line-height: 1.5;
        margin-bottom: 50px;
    }
    .content4 .section_content ul li:nth-of-type(2) dl dd{
        line-height: 2;
        font-size: 1.25rem;
    }
</style>