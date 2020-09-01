<template>
  <div class="body">
    <nav-top></nav-top>
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="left">
            <el-divider content-position="left"></el-divider>

            <router-view :key="key">
              <router-view></router-view>
            </router-view>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="right">
            <ablout-me></ablout-me>
            <last-publish></last-publish>
            <tag-list></tag-list>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import NavTop from "./NavTop";
import LastPublish from "./LastPublish";
import TagList from "./TagList";
import AbloutMe from "@/components/AbloutMe";
import Footer from "@/components/Footer";
export default {
  name: "MainIndex",
  components: {TagList, NavTop, LastPublish, AbloutMe,Footer},
  computed: {
    key() {
      return this.$route.path + Math.random()
    }
  }
}
</script>

<style lang="less" scoped>
.el-divider {
  height: 6px;

}
</style>