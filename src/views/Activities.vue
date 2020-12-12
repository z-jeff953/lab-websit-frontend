<template>
  <div class="activities">
    <div class="activities-top-area">
      <div class="previous-activities">
        <column-title
          en-title="Activities"
          cn-title="活动——往期活动"
        ></column-title>
        <previous-activities-content></previous-activities-content>
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
import Message from '../components/Message'
import UpcomingActivitiesContent from '../components/Activities/UpcomingActivitiesContent'
import PreviousActivitiesContent from '../components/Activities/PreviousActivitiesContent'

export default {
  name: 'Activities',
  data () {
    return {}
  },
  components: {
    ColumnTitle,
    Message,
    UpcomingActivitiesContent,
    PreviousActivitiesContent
  }
}
</script>

<style scoped>
  .activities {
    min-width: 1075px;
    height: auto;
    width: 100%;

    background-color: #252b42;
  }

  /* 往期活动 */
  .activities-top-area {
    min-width: 1075px;
    height: auto;
    min-height: 1000px;
    margin-bottom: 100px;

    background-image: url('../assets/backgrounds/background_top.png');
    background-size: 100% 300px;
    background-repeat: no-repeat;
    background-position: top;
    padding-top: 112px;
  }

  .previous-activities-content:last-child {
    min-width: 1075px;
  }

  .previous-activities {
    min-width: 1075px;
    width: 86vw;
    height: 80%;
    padding-bottom: 100px;

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
    border-radius: 12px 12px 0 0;
  }
</style>
