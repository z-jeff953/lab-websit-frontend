<template>
  <div class="bottom">
    <div class="links">
      <div class="links-words">
        <div style="font-size: 14px;width: 321px;">相关链接 &ensp; Links</div>
        <br>
        <div>电子科技大学</div>
        <div>澳新银行</div>
      </div>
      <div class="icons">
        <a href="https://www.uestc.edu.cn/" target="_blank">
          <img src="../assets/icons/UESTC_logo.svg" class="uestc-icon">
        </a>
        <a href="https://institutional.anz.com/markets/china/zh-hans" target="_blank">
          <img src="../assets/icons/ANZ_logo.svg" class="anz-icon">
        </a>
      </div>
    </div>
    <div class="divider"></div>
    <div class="contact">
      <ul class="information-list">
        <li>
          <img src="../assets/icons/location-icon.svg" alt="location-icon" class="contact-icon">
          <span>四川省，成都市，高新区， 天府大道 天府软件园</span>
        </li>
        <li>
          <img src="../assets/icons/tele-icon.svg" alt="tele-icon" class="contact-icon">
          <span>+86 028 85451258</span>
        </li>
      </ul>
      <div class="social-media-icons">
        <a href="https://weibo.com/u/5843823602" target="_blank">
          <img src="../assets/icons/weibo-icon.svg" alt="weibo-icon" class="contact-icon">
        </a>
        <a href="https://weixin.qq.com/" target="_blank">
          <img src="../assets/icons/wechat-icon.svg" alt="wechat-icon" class="contact-icon">
        </a>
        <a href="https://im.qq.com/" target="_blank">
          <img src="../assets/icons/qq-icon.svg" alt="qq-icon" class="contact-icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .bottom {
    background: #323850;
    height: 331px;
    display: flex;
    align-items: center;
    justify-content: center;
    ;
  }

  /* 左端链接栏 */
  .links {
    width: 321px;
  }

  .links-words {
    padding: 0 15px;

    font-family: Helvetica Heiti SC;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.015em;
    color: #FFFFFF;
  }

  .links-words * {
    padding: 4px;
  }

  .icons {
    padding: 15px 0 0 0;
  }

  .anz-icon {
    width: 96px;
    height: 26px;
    margin-left: 39px;
    padding: 8px 0;
  }

  .uestc-icon {
    width: 127px;
    height: 36px;
  }

  /* 分割线 */
  .divider {
    width: 1px;
    height: 120px;
    margin: 0 120px;

    background-color: #FFFFFF;
  }

  /* 右端联系方式栏 */
  .information-list {
    list-style: none;

    color: #FFFFFF;
    font-family: Heiti SC;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
  }

  .information-list li {
    width: 310px;
    height: 30px;
    margin: 10px;

    display: flex;
    align-items: center;
  }

  .contact-icon {
    height: 24px;
    margin: 0 10px;
  }

  .social-media-icons {
    display: flex;
    padding: 30px 0 0 0;
  }
</style>
