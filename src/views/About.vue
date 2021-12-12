<template>
  <div class="about">
    <div class="toppic"></div>
    <div class="introduction">
      <column-title enTitle="About Us" cnTitle="关于我们"></column-title>
      <message>
        <p>
          电子科技大学（University of Electronic Science and Technology of
          China）坐落于四川省会成都市，
          是中华人民共和国教育部直属高校，由教育部、工业和信息化部、四川省和成都市共建；
          位列“世界一流大学和一流学科”、“985工程”、“211工程”，入选“2011计划”、“111计划”、
          卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、
          全国深化创新创业教育改革示范高校，为“两电一邮”成员；是一所完整覆盖整个电子类学科，
          以电子信息科学技术为核心，以工为主，理工渗透，理、工、管、文、医协调发展的多科性研究型全国重点大学。
        </p>
        <br />
        <p>
          学校原名成都电讯工程学院，1956年由交通大学（现上海交通大学、西安交通大学）、南京工学院（现东南大学）
          、华南工学院（现华南理工大学）的电讯工程有关专业合并创建而成；1960年被中共中央列为全国重点高等学校；
          1961年被中共中央确定为七所国防工业院校之一；1988年更名为电子科技大学；2000年由原信息产业部主管划转为教育部主管；
          2017年进入国家建设“双一流”A类高校行列。2019年教育部和四川省签约共同推进学校世界一流大学建设。
          电子科技大学（University of Electronic Science and Technology of
          China）坐落于四川省会成都市...
        </p>
      </message>
    </div>
  </div>
</template>

<script>
import ColumnTitle from '../components/ColumnTitle'
import Message from '../components/Message'

export default {
  name: 'About',
  components: {
    ColumnTitle,
    Message
  }
}
</script>

<style scoped>
  .about {
    min-width: 1075px;
    min-height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }
  /* 顶部风景图 */
  .toppic {
    background-image: url(https://gitee.com/zjeff-953/picsBed/raw/master/image/20201216131930.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    background-position: center center;
    height: 640px;
  }

  /* 中间介绍部分 */
  .introduction {
    height: 640px;

    flex-grow: 1;

    background-color: #252b42;
    background-image: url(https://gitee.com/zjeff-953/picsBed/raw/master/image/20201212202231.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }
</style>
