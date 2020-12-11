<template>
  <div class="upcoming-activities-content">
    <div class="subtitle">
      <div class="cn-subtitle">{{ content.subtitle.cnSubtitle }}</div>
      <div class="en-subtitle">{{ content.subtitle.enSubtitle }}</div>
    </div>
    <div class="content">
      <div class="poster-area">
        <div class="post-time">{{ content.pic.postTime }}</div>
        <img :src="content.pic.url" :alt="content.subtitle.cnSubtitle" class="poster" />
      </div>
      <div class="words-area">
        <div class="notes">
          <message class="note">活动时间：{{ content.notes.time }} <br /></message>
          <message class="note">活动地点：{{ content.notes.location }} <br /></message>
          <message class="note">面向人群：{{ content.notes.audience }} <br /></message>
          <message class="note">报名方式：{{ content.notes.registrationMethod }} <br /></message>
          <message class="note">报名链接：<a :href="content.notes.registrationLink" target="_blank" style="color: rgba(128, 135, 143, 1)
              ;">{{content.notes.registrationLink}}</a><br /></message>
        </div>
        <div class="discription">
            <p>{{ content.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Massage from '../../components/Massage'

export default {
  name: 'UpcomingActivitiesContent',
  props: {
    content: {
      type: Object,
      default: function () {
        return {
          subtitle: {
            cnSubtitle: '敬请期待',
            enSubtitle: 'Coming Soon '
          },
          pic: {
            url: require('../../assets/activities/recruitment.png'),
            postTime: 'Posted in Oct 1,2020'
          },
          notes: {
            time: '敬请期待',
            location: '敬请期待',
            audience: '敬请期待',
            registrationMethod: '敬请期待',
            registrationLink: 'https://www.bilibili.com'
          },
          description: `电子科技大学（University of Electronic Science and Technology of China）坐落于四川省会成都市，是中华人民共和国教育部直属高校，由教育部、工业和信息化部、四川省和成都市共建；位列“世界一流大学和一流学科”、“985工程”、“211工程”，入选“2011计划”、“111计划”、卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校，为“两电一邮”成员；是一所完整覆盖整个电子类学科，以电子信息科学技术为核心，以工为主，理工渗透，理、工、管、文、医协调发展的多科性研究型全国重点大学。
学校原名成都电讯工程学院，1956年由交通大学（现上海交通大学、西安交通大学）、南京工学院（现东南大学）、华南工学院（现华南理工大学）的电讯工程有关专业合并创建而成；1960年被中共中央列为全国重点高等学校；1961年被中共中央确定为七所国防工业院校之一；1988年更名为电子科技大学；2000年由原信息产业部主管划转为教育部主管；2017年进入国家建设“双一流”A类高校行列。2019年教育部和四川省签约共同推进学校世界一流大学建设。电子科技大学（University of Electronic Science and Technology of China）坐落于四川省会成都市...`
        }
      }
    }
  },
  components: {
    Massage
  }
}
</script>

<style scoped>
  .upcoming-activities-content {
    min-width: 1075px;
    color: #ffffff;
  }

  .subtitle {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .cn-subtitle {
    font-family: "Microsoft YaHei";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;
  }

  .en-subtitle {
    font-family: Helvetica;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 100%;

    letter-spacing: -0.02em;
  }

  .content {
    margin-left: 5vw;
    margin-top: 52px;
    margin-right: 10vw;

    display: flex;
  }

  .post-time {
    margin-bottom: 20px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;

    letter-spacing: -0.02em;

    color: #C6C6C6;
  }

  .poster {
    height: 484px;
    width: 363px;
    border-radius: 2%;
  }

  .words-area {
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
  }

  .notes {
    display: flex;
    flex-direction: column;
  }

  .note {
    margin-bottom: 12px;
    font-family: PingFang HK;
    font-size: 14px;
    width: 300px;
  }

  .discription {
    margin-top: 72px;

    font-family: PingFang HK;
    font-size: 14px;
  }

  .discription-text {
    color: red;
    word-wrap: none;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: white;
  }

  a:active {
    color: white;
  }

  @media screen and (max-width: 445px) {
    .poster {
      height: 360px;
      width: 270px;
    }
  }
</style>
