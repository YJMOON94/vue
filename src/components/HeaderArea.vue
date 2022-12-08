<template>
    <header>
        <router-link to="/main"><h1 class="logo">소방청로고</h1></router-link>

        <nav>
          <h2 class="hidden">네비게이션 영역</h2>
            <ul>
                <li>
                    <router-link to="/sub1">소방소식</router-link>
                </li>
                <li>
                    <router-link to="/sub2">기관소개</router-link>
                </li>
                <li>
                    <router-link to="/sub3">정보공개</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
    .logo {
      text-indent: -99999%;
      color:#fff;
      background: url('../assets/logo.jpg') center no-repeat;
      width:185px;
      height:47px;
    }
    body header{
      box-sizing: border-box;
      width:100%;
      padding:15px 20px;
      display: flex;
      justify-content: space-around;
      position: fixed;
      z-index: 1000;
      background: #fff;
    }
    header nav ul{
      display: flex;
      margin-top: 10px;
    }
    header nav ul li{
      margin-left: 50px;
      font-size: 1.25rem;
      font-weight: 600;
    }
    header nav ul li a{
      transition:color .3s
    }
    header nav ul li a:hover{
      color:#ff4433
    }
</style>

<script>
    // export default {props: ['plogo']}
</script>