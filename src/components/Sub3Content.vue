<template>
    <article class="sub3">
        <h2 class="hidden">본문 컨텐츠 영역</h2>

        <section class="sub_main3"><div class="sub_main_inner"><h3>정보공개</h3></div></section>

        <section class="sub_content">
            <div class="section_title">
                <h3>{{ section_header[2].title }}</h3>
                <p>{{ section_header[2].content }}</p>
            </div>

            <v-card>
                <v-tabs v-model="tab" background-color="primary" dark="dark">
                    <v-tab v-for="item in items" :key="item.tab">
                        {{ item.tab }}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item.tab">
                        <v-card flat="flat">
                            <v-card-text>
                                <ul>
                                    <li v-for="(x,index) in item.content" :key="index">
                                        <dl class="sub_area">
                                            <dt>
                                                <span>{{index+1}}.</span>
                                                <span>{{'관할 소방서 : ' + x.fire_inst_nm}}</span>
                                            </dt>
                                            <dd>
                                                <span><i class="fa-solid fa-location-dot"></i> 구역 위도 : </span>{{x.lot}}<span>구역 경도</span>{{x.lat }}
                                            </dd>
                                            <dd>
                                                <span>{{'주소 : ' + x.lotno_addr}}</span>
                                                <span>{{'전화번호 : ' + x.apt_tel}}</span>
                                                <span>{{'아파트 명 : ' + x.apt_nm}}</span>
                                                <span>{{'실 주차 너비 : ' + x.ldar}}</span>
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </section>
    </article>
</template>

<script>
    // import firetruck_area_data from '../area.json'
    import sectiontitle_data from '../section_title.json'
    import gangseo_data from '../gangseo.json'
    import gwangjin_data from '../gwangjin.json'
    import jungrang_data from '../jungrang.json'
    import jungu_data from '../jungu.json'
    import songpa_data from '../songpa.json'
    import yongsan_data from '../yongsan.json'
    import dobong_data from '../dobong.json'

    export default {
        name: 'app',
        data() {
            return {
                section_header : sectiontitle_data,
                gangseo : gangseo_data,
                gwangjin : gwangjin_data,
                jungrang : jungrang_data,
                jungu : jungu_data,
                songpa : songpa_data,
                yongsan : yongsan_data,
                dobong : dobong_data,
                e1: 1,
                tab: null,
                items: [
                    {
                        tab: '강서구',
                        content: gangseo_data
                    }, {
                        tab: '광진구',
                        content: gwangjin_data
                    }, {
                        tab: '도봉구',
                        content: dobong_data
                    }, {
                        tab: '송파구',
                        content: songpa_data
                    }, {
                        tab: '용산구',
                        content: yongsan_data
                    }, {
                        tab: '중구',
                        content: jungu_data
                    }, {
                        tab: '중랑구',
                        content: jungrang_data
                    }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style>
    .sub3 .v-slide-group__content {
        justify-content: center;
    }
    .sub3 .sub_main3{
        width:100%;
        height:400px;
    }
    .sub3 .sub_main3 .sub_main_inner{
        width:100%;
        height:100%;
        background: url('../assets/sub_main03.jpg') center center no-repeat;
        background-size: cover;
    }
    .sub3 .sub_area{
        text-align: left;
        margin-block: 30px;
        padding: 20px 0;
        border-bottom:1px solid #999;
    }
    .sub3 .sub_area dt{margin-block: 10px;}
    .sub3 .sub_area dt span:first-child{font-size: 2rem;  display: inline-block; margin-right: 20px;}
    .sub3 .sub_area dt span:last-child{font-size: 1rem; font-weight: 700;}
    .sub3 .sub_area dd:nth-of-type(1){font-size: 1.25rem; font-weight: 700; margin-block: 30px;}
    .sub3 .sub_area dd:nth-of-type(1) span{display: inline-block; margin:0 35px;}
    .sub3 .sub_area dd:nth-of-type(2) span{color:#999; font-weight: 500; display: inline-block; margin:0 35px;}
</style>