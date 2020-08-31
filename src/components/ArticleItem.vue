<template>
    <div class="articleitem">
        <span class="title">
            <slot name="title">我是第一篇文章</slot>
        </span>


        <div class="content">
            <span>
            <slot name="content">文章内容</slot>
            </span>
        </div>
        <div class="articleAttrItem">
            <div class="taglist">
                <slot name="tag">标签</slot>
            </div>
            <div class="attrs">
              <span class="count">
                <i class="el-icon-user-solid"></i>
                <a><slot name="author"></slot></a>
              </span>
                <span class="count">
                <i class="el-icon-view"></i>
                <a><slot name="read"></slot></a>
              </span>
                <span class="count">
                <i class="el-icon-star-on"></i>
                <a><slot name="like"></slot></a>
              </span>
                <span class="count">
                <i class="el-icon-date"></i>
                <a><slot name="publish">2018-11-09</slot></a>
              </span>
            </div>
        </div>
        <el-divider content-position="right"></el-divider>
    </div>
</template>

<script>
	export default {
		name: "ArticleItem"
	}
</script>

<style lang="less" scoped>
    .el-divider {
        height: 2px;
    }

    .articleitem {
        border-color: #2b4b6b;
        /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);*/
        /*margin: 10px 10px;*/
        padding: 0px 20px;
        border-radius: 4px;
        /*background-color: #F1F3F4;*/

    }


    a:link {
        color: #111111;
        text-decoration: none;
    }

    .title {
        margin-top: 20px;
        font-weight: 900;

    }

    .content {
        font-size: 14px;
        width: 500px;
        height: 40px;
        color: gray;
        margin-left: 20px;
        margin-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }


    .articleAttrItem {
        display: flex;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .01), 0 0 6px rgba(0, 0, 0, .01);
        background-color: #F7F7FC;
        height: 25px;
        border-radius: 6px;

        .attrs {
            float: right;
            padding-left: 250px;
        }

        .taglist {
            margin-top: 2px;
            overflow: hidden;
            /*text-overflow: ellipsis;*/
            white-space: nowrap;
            width: 200px;
            height: 100%;
            /*background-color: #619d21;*/
        }
    }
</style>
