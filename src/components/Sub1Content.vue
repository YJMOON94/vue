<template>
    <article>
        <section class="sub_main1"><div class="sub_main_inner"><h3>행동강령</h3></div></section>

            <div class="section_title">
                <h3>{{ section_header[0].title }}</h3>
                <p>{{ section_header[0].content }}</p>
            </div>

        <section class="sub1_content">
            <v-app id="inspire">
            <v-timeline>
                <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :color="year.color"
                small
                >
                <template v-slot:opposite>
                    <span
                    :class="`headline font-weight-bold ${year.color}--text`"
                    v-text="year.year"
                    ></span>
                </template>
                <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                    {{year.title}}
                    </h2>
                    <div>
                        <ul>
                            <li>
                              {{year.content}}
                            </li>
                            <li class="imgBox">
                                <img :src="year.image_url" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                </v-timeline-item>
            </v-timeline>
            </v-app>
        </section>
    </article>
</template>

<script>
import sectiontitle_data from '../section_title.json'

  export default {
    data: () => ({
    section_header : sectiontitle_data,
      years: [
        {
          color: 'cyan',
          year: '화재 예방요령',
          title: '불의 기초상식',
          content: '불이 탄다는 사실은 "연소"라는 용어로서 표기되고 있으며, 이 연소에 대한 정의를 내림으로써 "불이 무엇인가"를 알 수 있다. 일반적으로 연소는 어떤 물질이 산소와 화합하는 반응중에 열이 발생하여 온도가 상승하고 그 결과 "강한 열과 빛을 동반한 산화반응현상"이라고 할 수 있다.',
          image_url: require('../assets/sub1_01.jpg')
        },
        {
          color: 'green',
          year: '화재발생시 행동요령',
          title:'화재 예방요령',
          content:'불이 나면 누구든지 당황하고 공포감에 싸이게 되며 때로는 흥분하여 평상시보다 판단력이 떨어져 우왕좌왕하다 연기에 질식되거나 높은 데서 뛰어내려 귀중한 인명피해가 발생하기도 합니다. 이런 경우 혼자 불을 끄려고 노력하다 불이 확대되어 미처 피난하지 못하는 경우도 있습니다. 따라서 화재시 행동요령을 평상시 염두에 두고 훈련하여 항상 대비해야 합니다.',
          image_url:require('../assets/sub1_02.jpg')
        },
        {
          color: 'pink',
          year: '화재신고',
          title:'불이 나면 즉시 119로 신고!',
          content:'바로 신고하는 것이 우선이다. 신고할 때에는 불이 난 정확한 위치를 침착하고 올바르게 알려준다. 신고하는 요령을 평소에 익혀두자.',
          image_url:require('../assets/sub1_03.jpg')
        },
        {
          color: 'amber',
          year: '화재 예방 안전수칙',
          title:'건물에 소방시설이 완비되어 있는지 확인하기',
          content:'아동복지시설·유치원과 같이 어린이가 있는 시설과 의료시설, 공동주택, 학교·학원·도서관 등의 교육연구시설, 문화재 등에는 소방시설이 설치되어 있어야 하므로(「화재예방, 소방시설 설치·유지 및 안전관리에 관한 법률」 제2조제1항제3호, 「화재예방, 소방시설 설치·유지 및 안전관리에 관한 법률 시행령」 제5조 및 별표 2), 자주 방문하거나 거주하는 건물이라면 이런 소방시설이 완비되어 있는지 확인하는 것이 좋습니다.',
          image_url:require('../assets/sub1_04.jpg')
        },
        {
          color: 'orange',
          year: '불이 난 건물 내에 갇혔을 때의 조치요령',
          title:'화재 시 안전한 대피요령',
          content:'연기가 새어 들어 오면 낮은 자세로 엎드려 담요나 타올 등에 물을 적셔 입과 코를 막고 짧게 호흡을 한다. 일단 실내에 고립되면 화기나 연기가 없는 창문을 통해 소리를 지르거나 물건등을 창밖으로 던져 갇혀있다는 사실을 외부로 알린다.',
          image_url:require('../assets/sub1_05.jpg')
        },
      ],
    }),
  }
</script>

<style>
    .sub_main1{
        width:100%;
        height:400px;
    }
    .sub_main_inner{

    }
    .sub_main_inner h3{
        position: relative;
        left:0;
        top:50%;
        text-align: center;
        color:#fff;
        font-size: 2.5rem;
    }
    .sub_main1 .sub_main_inner{
        width:100%;
        height:100%;
        background: url('../assets/sub_main01.jpg') center center no-repeat;
        background-size: cover;
    }
    .sub1_content .imgBox img{
        width:100%;
    }
</style>
