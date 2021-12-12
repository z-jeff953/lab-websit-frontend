<template>
  <div class="join-us">
    <div class="join-us-top">
      <column-title en-title="Join Us" cn-title="加入我们"></column-title>
      <sources></sources>
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
    <div class="join-us-bottom">
      <message style="font-size:22px;">
        请提交以下资料，老师会在审核后15个工作日内与您取得联系：
      </message>
      <div class="form-area">
        <join-form></join-form>
      </div>
    </div>
  </div>
</template>

<script>
import Sources from '../components/Join/Sources'
import ColumnTitle from '../components/ColumnTitle'
import Message from '../components/Message'
import JoinForm from '../components/Join/JoinForm'

export default {
  name: 'Join',
  data () {
    return {}
  },
  components: {
    Sources,
    ColumnTitle,
    Message,
    JoinForm
  }
}
</script>

<style scoped>
  .join-us {
    min-width: 1075px;
    overflow: hidden;

    background-color: #191e30;
  }

  .join-us-top {
    height: 700px;
    background-image: url(https://gitee.com/zjeff-953/picsBed/raw/master/image/20201216132013.png);
    background-size: 100% 300px;
    background-repeat: no-repeat;
    background-position: top;

    padding-top: 180px;
  }

  .join-us-bottom {
    height: 900px;
    background-image: url(https://gitee.com/zjeff-953/picsBed/raw/master/image/20201212202231.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .form-area {
    min-width: 1075px;
    width: 80vw;
    height: 620px;
    border-radius: 12px;
    margin: 40px auto 0 auto;
    margin-top: 40px;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 12px;
  }
</style>
