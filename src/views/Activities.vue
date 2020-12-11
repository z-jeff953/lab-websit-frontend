<template>
  <div class="activities">
    <div class="activities-top-area">
      <div class="previous-activities">
        <div class="previous-activities-content">
          <column-title
            en-title="Activities"
            cn-title="活动——往期活动"
          ></column-title>
          <massage>
            <p>
              电子科技大学（University of Electronic Science and Technology of
              China）
              坐落于四川省会成都市，是中华人民共和国教育部直属高校，由教育部、工业和信息化部、四川省和成都市共建；
              位列“世界一流大学和一流学科”、“985工程”、“211工程”，入选“2011计划”、“111计划”、卓越工程师教育培养计划、
              国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校，
              为“两电一邮”成员；是一所完整覆盖整个电子类学科，以电子信息科学技术为核心，以工为主，理工渗透，理、工、
              管、文、医协调发展的多科性研究型全国重点大学。学校原名成都电讯工程学院，1956年由交通大学（现上海交通大学、
              西安交通大学）、南京工学院（现东南大学）、华南工学院（现华南理工大学）的电讯工程有关专业合并创建而成；
              1960年被中共中央列为全国重点高等学校；1961年被中共中央确定为七所国防工业院校之一；1988年更名为电子科技大学；
              2000年由原信息产业部主管划转为教育部主管；2017年进入国家建设“双一流”A类高校行列。2019年教育部和四川省签约共
              同推进学校世界一流大学建设。电子科技大学（University of Electronic
              Science and Technology of China） 坐落于四川省会成都市...
            </p>
          </massage>
        </div>
      </div>
    </div>
    <div class="activities-bottom-area">
      <div class="upcoming-activities">
        <column-title
          en-title="Activities"
          cn-title="活动——活动预告"
        ></column-title>
        <upcoming-activities-content></upcoming-activities-content>
      </div>
    </div>
  </div>
</template>

<script>
import ColumnTitle from '../components/ColumnTitle'
import Massage from '../components/Massage'
import UpcomingActivitiesContent from '../components/Activities/UpcomingActivities'

export default {
  name: 'Activities',
  data () {
    return {}
  },
  components: {
    ColumnTitle,
    Massage,
    UpcomingActivitiesContent
  }
}
</script>

<style scoped>
  .activities {
    min-width: 1075px;
    height: 2000px;
    width: 100%;

    background-color: #252b42;
  }

  /* 往期活动 */
  .activities-top-area {
    min-width: 1075px;
    height: 1000px;
    background-image: url('../assets/backgrounds/background_top.png');
    background-size: 100% 300px;
    background-repeat: no-repeat;
    background-position: top;
    padding-top: 112px;
  }

  .previous-activities-content:last-child{
    min-width: 1075px;
  }

  .previous-activities {
    min-width: 1075px;
    width: 86vw;
    height: 80%;
    margin: 0 auto;
    overflow: hidden;

    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  .previous-activities-content {
    padding: 0 10vw 0 -10vw;
    position: relative;
  }

  /* 活动预告 */
  .activities-bottom-area {
    height: 1000px;
    background-image: url('../assets/backgrounds/background_middle.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
  }

  .upcoming-activities {
    min-width: 1075px;
    height: auto;
    min-height: 1000px;
    width: 86vw;
    margin: 0 auto;
    overflow: hidden;

    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }
</style>
