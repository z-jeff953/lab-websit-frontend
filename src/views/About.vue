<template>
  <div class="about">
    <div class="toppic"></div>
    <div class="introduction">
      <div class="introduction-title">
        <div class="divider"></div>
        <div class="title-words">
          <div class="en-title">About Us</div>
          <div class="cn-title">关于我们</div>
        </div>
      </div>
      <div class="introduction-content">
        <p>
          电子科技大学（University of Electronic Science and Technology of China）坐落于四川省会成都市，
          是中华人民共和国教育部直属高校，由教育部、工业和信息化部、四川省和成都市共建；
          位列“世界一流大学和一流学科”、“985工程”、“211工程”，入选“2011计划”、“111计划”、
          卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、
          全国深化创新创业教育改革示范高校，为“两电一邮”成员；是一所完整覆盖整个电子类学科，
          以电子信息科学技术为核心，以工为主，理工渗透，理、工、管、文、医协调发展的多科性研究型全国重点大学。
        </p>
        <br>
        <p>
          学校原名成都电讯工程学院，1956年由交通大学（现上海交通大学、西安交通大学）、南京工学院（现东南大学）
          、华南工学院（现华南理工大学）的电讯工程有关专业合并创建而成；1960年被中共中央列为全国重点高等学校；
          1961年被中共中央确定为七所国防工业院校之一；1988年更名为电子科技大学；2000年由原信息产业部主管划转为教育部主管；
          2017年进入国家建设“双一流”A类高校行列。2019年教育部和四川省签约共同推进学校世界一流大学建设。
          电子科技大学（University of Electronic Science and Technology of China）坐落于四川省会成都市...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  /* 顶部风景图 */
  .toppic {
    background-image: url(../assets/ANZ_building.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    background-position: center center;
    height: 640px;
  }

  /* 中间介绍部分 */
  .introduction {
    height: 640px;
    width: 100%;

    background-color: #252B42;
    background-image: url('../assets/backgrounds/background_bottum.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  /* 介绍文字的标题部分 */
  .introduction-title {
    overflow: hidden;
    height: 120px;
    top: 5vh;

    position: relative;
    left: 10vw;
  }

  .divider {
    width: 2px;
    height: 55px;

    background-color: #FFFFFF;
    display: inline-block;
  }

  .title-words {
    color: #FFFFFF;
    display: inline-block;
    overflow: hidden;
    padding-left: 16px;
  }

  .en-title {
    font-family: Helvetica;
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.02em;
  }

  .cn-title {
    font-family: PingFang HK;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
  }

  /* 介绍文字正文部分 */
  .introduction-content {
    width: 80vw;
    margin: 0 auto;

    font-family: PingFang HK;
    font-size: 14px;
    line-height: 20px;

    color: #FFFFFF;
  }
</style>
