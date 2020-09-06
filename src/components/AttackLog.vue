<template>
  <div class="panel panel-default ">
    <div class="panel-heading">
      <h3 class="panel-title">非法访问日志</h3>

    </div>
    <div class="panel-body textContainer" ref="textContainer">
        <p v-for="item in log_list">{{ item }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "AttackLog",
  data() {
    return {
      log_list: [],
      socket: ''
    }
  },
  created() {

  },
  mounted() {
    this.socket = new WebSocket('ws://api.weijx.top/api/v1/push_attack_log/')
    this.socket.onopen = () => {
      this.socket.send('iamhere')
    }
    this.socket.onmessage = (res) => {
      console.log(res);
      this.log_list.push(res.data)
      this.$nextTick(function () {
        let container = this.$refs.textContainer;
        container.scrollTop = container.scrollHeight;
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .textContainer {
    width: auto;
    overflow-y: scroll;
    height: 200px;
    //margin-bottom: 20px;
    color: #d9dbdc;
    font-size: 4px;
    background-color: #111111;
    word-break: break-all;

  }


</style>