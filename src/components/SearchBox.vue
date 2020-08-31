<template>
    <div class="searchbox">
        <el-input placeholder="请输入搜索内容" v-model="svalue" class="input-with-select"
                  suffix-icon="el-icon-search" @keyup.enter.native="search">

        </el-input>
    </div>
</template>

<script>
	export default {
		name: "SearchBox",
		data() {
			return {
				svalue: '',
				select: ''
			}
		},
		methods: {
			search() {
				this.$router.push("/search/" + this.svalue)
			}
		}

	}
</script>

<style lang="less" scoped>
    .searchbox {
        width: 300px;
    }

    .el-select {
        width: 80px;
    }

    .el-button {
        width: 50px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>