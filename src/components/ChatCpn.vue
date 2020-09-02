<template>
  <div class="messsage_box">
    <div id="textContainer" ref="textContainer" style="" v-show="boxshow">
      <p v-for="item in rmsg">{{ item }}</p>

    </div>
    <input v-model="smsg" placeholder="交流区" @keyup.enter="sendmsg"></input>
    <button @click="sendmsg">发送</button>
    <button @click="sclose" v-if="boxshow">收起</button>
    <button @click="sclose" v-else>展开</button>


  </div>
</template>

<script>
export default {
  name: "ChatCpn",
  data() {
    return {
      rmsg: [],
      smsg: '',
      socket: '',
      boxshow: false
    }

  },
  methods: {
    sendmsg() {
      this.$http.post('sendmsg/', {'msg': this.smsg}).then(res => {
        // console.log(res)
        this.smsg = ''
        if (!this.boxshow) {
          this.boxshow = !this.boxshow
        }
        this.$nextTick(function () {
          // 距离头部150
          let container = this.$refs.textContainer;
          container.scrollTop = container.scrollHeight;
        })
      })

    },
    sclose() {
      this.boxshow = !this.boxshow
    }
  },
  mounted() {
    this.socket = new WebSocket("ws://api.weijx.top/api/v1/send_once/")
    this.socket.onopen = () => {
      this.socket.send('上线')
      // console.log('socket opened')
    }
    this.socket.onerror = () => {
      // console.log('socket error');
    }
    this.socket.onmessage = res => {
      let data = JSON.parse(res.data)
      // console.log(res);
      this.rmsg.push(data.id + ": " + data.data)
      this.$nextTick(function () {
        let container = this.$refs.textContainer;
        container.scrollTop = container.scrollHeight;
        if (!this.boxshow) {
          this.boxshow = !this.boxshow
        }
      })

    }
  },
  destroyed() {
    this.socket.onclose = () => {
      // console.log('closed')
    }
  }
}
</script>

<style lang="less" scoped>
.messsage_box {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
  color: #ffffff;
  opacity: .90;


  #textContainer {
    width: 290px;
    overflow-y: scroll;
    height: 200px;
    //margin-bottom: 20px;
    background-color: #111111;
    word-break: break-all;

  }

  input {
    width: 200px;
  }
}
</style>