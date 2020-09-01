<template>
  <div class="footer">
    <span>Design by：魏金星</span>
    <span>备案号:  <a href="http://www.miit.gov.cn/">京ICP备20018355号-1</a></span>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="less" scoped>
 .footer {
   position: fixed;
   bottom: 0;
   color: #ffffff;
   height: 20px;
   background-color: #2b4b6b;
   width: 100%;
   opacity: .90;
   font-size: 12px;
   z-index: 999;
   text-align: center;

   span{
     padding: 15px;
       a{
       color: #ffffff;
    }
   }
   /*margin: 0 5px;*/
 }
</style>