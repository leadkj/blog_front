<template>
    <div class="topnav">

        <div class="title">
            <h3>我的地盘儿</h3>
        </div>
        <div class="nav">
          <span class="navlist">
            <ul>
              <li>
                <router-link to="/index">首页</router-link>
              </li>
              <li v-for="item in navData" :key="item.id">
                <router-link :to="'/categorys/'+item.id">{{item.name}}</router-link>
              </li>
            </ul>
          </span>
        </div>
        <search-box class="search"></search-box>


    </div>
</template>

<script>
	import SearchBox from "./SearchBox";
	// import axios from 'axios'
	export default {
		name: "NavTop",
		components: {
			SearchBox
		},
		data() {
			return {
				activeIndex: '1',
				navData: []
			};
		},
		methods: {},
		created() {
			this.$http.get("categorys/").then(res => {
				this.navData = res.data.results
			})
		}
	}
</script>

<style lang="less" scoped>
    .topnav {
        position: fixed;
        top: 0;
        display: flex;
        height: 60px;
        background-color: #2b4b6b;
        width: 100%;
        opacity: .90;
        z-index: 999;
        /*margin: 0 5px;*/

        .title {
            /*position: absolute;*/
            /*left: 40px;*/
            float: left;
            width: 200px;
            color: #ffffff;
            /*background-color: #ffffff;*/
            text-align: center;
        }

        .search {
            margin-top: 10px;
            position: absolute;
            right: 10px;

        }

        .nav {
            margin-top: auto;

            .navlist {
                /*display: inline-block;*/
                font-weight: 800;
                margin-top: 15px;

                /*margin-left: 20px;*/
            }

            .navlist > ul {
                padding: 0px;
                margin: 0px;
            }

            .navlist > ul > li {
                float: left;
                display: inline;
                /*position:relative;*/
                padding: 17.5px 0px;
            }

            .navlist > ul > li > a {
                /*margin: 17.5px 0px;*/
                color: #eee;
                font-size: 14px;
                /*font-weight:bold;*/
                /*text-transform:uppercase;*/
                text-decoration: none;
                line-height: 10px;
                height: 10px;
                width: 80px;
                display: inline-block;
                text-align: center;
                font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
            }

            .navlist > ul > li:hover {
                background: #fff;
            }

            .navlist > ul > li > a.active {
                color: #619d21;
            }
        }
    }

</style>