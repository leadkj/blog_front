<template>
    <div>
        <div v-if="res">
            <article-item v-for="item in articleList" :key="item.id">
                <router-link :to="'/articles/'+item.id" slot="title">{{item.name}}</router-link>
                <router-link :to="'/tags/'+tag.id" class="tag" v-for="tag in item.tag"   :key="tag.id" slot="tag">
                    {{tag.name}}
                </router-link>
                <span slot="content" v-html="item.content"></span>
                <span slot="author">{{item.author.nick_name}}</span>
                <span slot="read">{{item.read}}</span>
                <span slot="like">{{item.like}}</span>
                <span slot="publish">{{item.publish}}</span>
            </article-item>
        </div>
        <div v-else >抱歉，未找到相关内容！！</div>
    </div>
</template>

<script>
	import ArticleItem from "./ArticleItem";

	export default {
		name: "ContentCpn",
		data() {
			return {
				articleList: [],
                res:true
			}
		},
		components: {
			ArticleItem,
		},
		created() {
			this.$http.get('articles/?category=' + this.$route.params.id).then(res => {
				this.articleList = res.data.results
                if (this.articleList.length == 0){
                	this.res = false
                }
			})
		}
	}
</script>

<style lang="less" scoped>

</style>