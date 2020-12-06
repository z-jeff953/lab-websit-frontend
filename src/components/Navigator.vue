<template>
  <div class="navigator">
    <a href="/" class="left-nav">
      <img class="aujl-logo" src="../assets/icons/AUJL_icon.svg" alt="AUJLlogo" />
      <div class="name">
        <div class="cn-name">澳新银行·电子科技大学联合实验室</div>
        <div class="en-name">ANZ &amp; UESTC JOINT LAB</div>
      </div>
    </a>
    <div class="right-nav">
      <router-link to="/">
        <nav-item cn="活动" en="Activities"></nav-item>
      </router-link>
      <router-link to="/about">
        <nav-item cn="关于" en="About us"></nav-item>
      </router-link>
      <router-link to="/join">
        <div class="nav-item join-button"><span style="height: 14px;">加入我们</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
const NavItem = {
  name: 'NavItem',
  props: {
    cn: String,
    en: String
  },
  template:
      `<div class="nav-item">
        <div class="cn-item">{{ cn }}</div>
        <div class="en-item">{{ en }}</div>
      </div>`
}

export default {
  name: 'Navigator',
  date () {
    return {}
  },
  components: {
    NavItem
  }
}
</script>

<style scoped>
  /* 适配和媒体查询 */
  @media screen and (max-width: 847px) {
    .left-nav {
      position: absolute;
      top: 5px;
      left: 10px;
    }

    .right-nav {
      position: absolute;
      top: 50px;
    }
  }

  /* 通用格式 */
  .navigator {
    height: 100px;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 0px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    overflow: hidden;

    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }

  .navigator::after,
  .navigator::before {
    content: '';
  }

  /* 导航栏左侧区域 */
  .left-nav {
    display: flex;
  }

  .aujl-logo {
    height: 37px;
    width: 129px;
    left: 80px;
    top: 32px;
    margin-right: 10px;

    border-radius: 0px;
    opacity: 1;
  }

  .name {
    position: flex;
    flex-direction: column;
    width: 279px;
  }

  .cn-name {
    font-family: PingFang HK;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.8);
  }

  .en-name {
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.8);
  }

  /* 导航栏右侧区域 */
  .rigth-nav {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .nav-item {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding: 0 0 0 60px;
  }

  .cn-item {
    font-family: Heiti SC;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.8);
  }

  .en-item {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.8);
  }

  .join-button {
    height: 27px;
    width: 120px;
    margin: 0 0 0 60px;
    padding: 13px 30px 0px 30px;
    border: 1px solid white;

    font-family: Heiti SC;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;

    color: #FFFFFF;
  }

  /* a 标签相关设置 */
  a {
    text-decoration: none;
    color: white;
  }

  a:active {
    color: white;
  }
</style>
