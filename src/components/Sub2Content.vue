<template>
    <article>
        <section class="sub_main2"><div class="sub_main_inner"><h3>담당업무</h3></div></section>
        <div class="section_title">
            <h3>{{ section_header[1].title }}</h3>
            <p>{{ section_header[1].content }}</p>
        </div>
        <section class="sub2_content">

                <v-row justify="center">
                    <v-expansion-panels accordion>
                    <v-expansion-panel
                        v-for="(item,i) in data"
                        :key="i"
                    >
                        <v-expansion-panel-header>
                            <h3 class="sub_inner_title">
                            {{item.title}}
                            </h3>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <ol class="sub_inner_content">
                                <li><span><img src="../assets/alert.png" alt="알람"> 1. </span>{{item.content1}}</li>
                                <li><span><img src="../assets/ambulance.png" alt="알람"> 2. </span>{{item.content2}}</li>
                                <li><span><img src="../assets/emergency-call.png" alt="알람"> 3. </span>{{item.content3}}</li>
                                <li><span><img src="../assets/first-aid-kit.png" alt="알람"> 4. </span>{{item.content4}}</li>
                                <li><span><img src="../assets/front-line.png" alt="알람"> 5. </span>{{item.content5}}</li>
                                <li><span><img src="../assets/call-center-service.png" alt="알람"> 6. </span>{{item.content6}}</li>
                            </ol>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
        </section>
        <section class="sub2_table_content">
        <div class="section_title">
            <h3>부서별 연락처</h3>
            <p>대한민국 소방청은 국민의 안전을 위해 화재접수 및 안전관련 문의는 24시간 운영중입니다</p>
        </div>
                <div class="table_content">
                    <table>
                        <thead>
                            <tr>
                                <th>부서명</th>
                                <th>성명</th>
                                <th>전화번호</th>
                                <th>직급/직위</th>
                                <th>담당업무</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>생활안전과</td>
                                <td>이상무</td>
                                <td>044-205-7660</td>
                                <td>소방정</td>
                                <td>생활안전과 업무총괄</td>
                            </tr>
                            <tr>
                                <td>위험물안전과</td>
                                <td>김령아</td>
                                <td>044-205-7661</td>
                                <td>소방령</td>
                                <td>안전정책계장</td>
                            </tr>
                            <tr>
                                <td>소방분석제도과</td>
                                <td>김문환</td>
                                <td>044-205-7662</td>
                                <td>소방정</td>
                                <td>서무, 청소년단</td>
                            </tr>
                            <tr>
                                <td>생활안전과</td>
                                <td>이정태</td>
                                <td>044-205-7663</td>
                                <td>소방위</td>
                                <td>안전교육계장</td>
                            </tr>
                            <tr>
                                <td>생활교육과</td>
                                <td>이현주</td>
                                <td>044-205-7664</td>
                                <td>소방교</td>
                                <td>교육기획</td>
                            </tr>
                            <tr>
                                <td>생활안전과</td>
                                <td>염동빈</td>
                                <td>044-205-7665</td>
                                <td>소방령</td>
                                <td>안전체험관</td>
                            </tr>
                            <tr>
                                <td>화재예방총괄과</td>
                                <td>최한별</td>
                                <td>044-205-7666</td>
                                <td>소방장</td>
                                <td>메타버스</td>
                            </tr>
                            <tr>
                                <td>생활안전과</td>
                                <td>최태영</td>
                                <td>044-205-7667</td>
                                <td>소방정</td>
                                <td>홍보기획</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </section>
    </article>
</template>

<script>
import sectiontitle_data from '../section_title.json'

export default {
    data(){

        return {
            section_header : sectiontitle_data,
            data : [
                {
                    title:'소방정책과',
                    content1:'소방업무에 관한 종합계획의 수립·조정 및 시행',  
                    content2:'「소방기본법」 및 소방공무원 관련 법령 및 제도의 운영',  
                    content3:'소방 관련 정책에 대한 연구용역 및 연구개발 총괄·관리',  
                    content4:'소방재정 관련 제도연구 및 소방재정 관련 법령의 제·개정에 관한 사항',  
                    content5:'소방력 기준의 관리·연구·개선 및 소방조직의 관리 등 소방력의 효율적 운용에 관한 사항',  
                    content6:'소방공무원의 임용·교육훈련·상훈 및 복무제도 등 소방공무원 제도개선에 관한 사항',  
                },
                {
                    title:'화재예방총괄과',
                    content1:'화재안전정책의 수립 및 조정에 관한 사항',
                    content2:'특정소방대상물별 소방안전관리 지도ㆍ감독에 관한 사항',
                    content3:'건축물 화재예방을 위한 소방안전관리에 관한 특별조사',
                    content4:'화재보험협회 지도ㆍ감독에 관한 사항(「화재로 인한 재해보상과 보험가입에 관한 법률」 제15조제1호 및 제3호의 업무만 해당한다)',
                    content5:'소방대상물에 대한 화재 예방대책의 수립ㆍ운영 및 소방안전특별관리대상물의 안전관리에 관한 사항',
                    content6:'한국소방안전원 등 소관업무 관련 비영리법인에 대한 지도ㆍ감독ㆍ육성 및 지원',
                },
                {
                    title:'소방분석제도과',
                    content1:'화재예방, 소방시설 설치·유지 및 안전관리 관련 법령의 제·개정에 관한 사항',
                    content2:'불을 취급하는 설비의 안전관리에 관한 사항',
                    content3:'화재안전기준 제·개정 및 운영에 관한 사항',
                    content4:'소방대상물 등에 대한 화재안전제도 개발 및 연구에 관한 사항',
                    content5:'특정소방대상물에 대한 성능위주설계에 관한 사항',
                    content6:'화재안전 분야 국민제안 등 민원처리 및 전산시스템 운영·관리에 관한 사항',
                },
                {
                    title:'위험물안전과',
                    content1:'위험물 안전 관련 법령의 입안ㆍ운영',
                    content2:'위험물의 성질 및 상태 조사ㆍ연구 및 위험물 데이터베이스의 관리',
                    content3:'위험물의 유통실태 분석에 관한 사항',
                    content4:'석유화학단지와 위험물시설의 사고예방을 위한 안전관리계획 수립ㆍ시행에 관한 사항',
                    content5:'위험물의 분류 및 표지에 관한 기준개발 및 국제협력에 관한 사항',
                    content6:'위험물, 유해화학물질 사고에 대한 대응방법 개발ㆍ보급 및 사고예방을 위한 긴급안전점검ㆍ조치 등에 관한 사항',
                },
                {
                    title:'생활안전과',
                    content1:'국민생활 소방안전과 관련된 법령의 입안ㆍ운영 및 관련 제도의 연구ㆍ개선',
                    content2:'국민생활 소방안전정책 개발 및 제도개선에 관한 사항',
                    content3:'취약계층 소방안전개선에 관한 사항',
                    content4:'다문화가족ㆍ외국인 119서비스 이용체계 개선 및 소방안전문화 확산에 관한 사항',
                    content5:'국민생활 소방안전사고 분석 및 피해저감대책에 관한 사항',
                    content6:'국민생활 소방안전사고 예방ㆍ교육ㆍ홍보 및 관련 프로그램 개발에 관한 사항',
                },
            ]
        }
    }
}
</script>

<style>
    .sub_main2{
        width:100%;
        height:400px;
    }
    .sub_main2 .sub_main_inner{
        width:100%;
        height:100%;
        background: url('../assets/sub_main02.jpg') center center no-repeat;
        background-size: cover;
    }
    .sub2_content{
        position: relative;
        margin-bottom:100px;
    }
    .sub2_content .v-expansion-panel{
        height:auto
    }
    .sub_inner_title{
        text-align: center;
    }
    .sub_inner_content li{
        text-align: center;
        line-height: 45px;
    }
    .sub_inner_content span{
        font-weight: 700;
        font-size: 1.5rem;
    }
    .table_content table{
        border-collapse: collapse;
        width:80%;
        margin:0 auto;
    }
    .table_content table th,.table_content table td{
        border:1px solid #999;
        padding:30px
    }
    .table_content table th{
        background: rgba(255,0,0,.4);
        color:#fff;
        font-size: 2rem;
        font-weight: 700;
    }
    .table_content table tr:nth-of-type(even){
        background: #f3f3f3;
    }
</style>