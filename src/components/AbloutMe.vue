<template>
  <div class="panel panel-default ">
    <div class="panel-heading">
      <h3 class="panel-title">About Me</h3>

    </div>
    <div class="panel-body">
      <div class="aboutme">
        <div class="avatar">
          <el-avatar :size="100"  shape="square">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598954678788&di=41614f1fbb91831468f4dc48ebbd2c31&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F31%2F20170331090953_zUcaS.jpeg"/>
        </el-avatar>
          <span>Wei Jinxing</span>
        </div>

        <div class="profile">
          <span>
            本人1989年,计算机应用专业,从事运维开发，自学python，前端,做全栈开发工程师
            <br><br>爱好编程,物联网,摩托车,爬山
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      articles: []
    }
  },
  created() {

  }
}
</script>

<style lang="less" scoped>
.aboutme{
  display: flex;
  .profile{
    margin-left: 5px;
  }
  .avatar{
    text-align: center;
  }
}
</style>
