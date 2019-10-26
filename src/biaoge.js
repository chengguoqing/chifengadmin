export let playlistMixin = {
    data() {
        return {
            loading: true,
            type:1,
            tableData: [

                ],
            page: 1,
            total: "",
            url_et: ""
        }
    },
    methods: {
        handleCurrentChange(val) { //分页点击
            this.page = val
            this.loading = true
            this.getuser(this.url_et, {type:3})
        },
        async getuser(url, sd_df) { //获取列表信息
            this.url_et = url
            sd_df.page = this.page
            sd_df.type = sd_df.type
            this.loading = true
            var sd_dfer = await this.post(this.url_et, sd_df, true)
            this.tableData = sd_dfer.data
            this.total = sd_dfer.count
            this.loading = false
        },
        async del_user(url, id) { //删除方法触发
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                
                this.post(url, {
                    id: id,
                    type: 4
                })
                this.getuser(this.url_et, {type:3})
            })
        }
    }

}
