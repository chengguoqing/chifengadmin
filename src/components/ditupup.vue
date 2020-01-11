<!--地图路线-->
<template>
    <div>
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="jhshsda" label="里程"></el-table-column>
            <el-table-column prop="jhshsdb" label="地址"></el-table-column>
        </el-table>
        <div class="sd_dfrrttx">

            <div id="l-map"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    jhshsda: '26KM',
                    jhshsdb: '广东省深圳市留仙洞大厦'
                }],
                zoom: 15,
                center: [113.482178, 23.191308],
                center_er: [113.482178, 23.191308],
                plugin: [{
                    pName: 'ToolBar',
                }],
                marker: {
                    click(e) {
                        var sd_def = [e.lnglat.lng, e.lnglat.lat]
                        sd_dre.center_er = sd_def
                        sd_dre.sd_dff(e.lnglat)
                    }
                }
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            // 百度地图API功能
            var map = new BMap.Map("l-map");
            map.centerAndZoom(new BMap.Point(113.956211,22.52418), 12);

            var driving = new BMap.DrivingRoute(map, {
                renderOptions: {
                    map: map,
                    panel: "r-result",
                    autoViewport: true
                }
            });
            driving.search("深圳湾", "留仙洞大厦");
        },
    }

</script>
<style scoped>
    #l-map {
        height: 300px;
        width: 100%;
    }

    .sd_dfrrttx {
        height: 300px;
        margin-top: 10px;
    }

</style>
