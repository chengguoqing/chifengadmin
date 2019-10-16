<template>
    <div>


    </div>
</template>
<script>
    import gupiao from "@/assets/js/dongfang.js"
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            getdata(data) {
                this.mairu = []
                this.maichu = []
                this.mairujiner = 0
                this.maichuiner = 0
                data.map(a => {
                    if (a.wtfx == "证券买入") {
                        this.mairu.push(a)
                        this.mairujiner += parseFloat(a.cjje)
                    } else if (a.wtfx == "证券卖出") {
                        this.maichu.push(a)
                        this.maichuiner += parseFloat(a.cjje)
                    }
                })

            },
        },
            mounted() {
                let sd_e = new this.getdata(gupiao.gupiao_e)
                console.log(sd_e.maichuiner-sd_e.mairujiner);


            },
        }

</script>
<style scoped>


</style>
