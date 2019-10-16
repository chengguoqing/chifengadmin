<template>
	<div class="row_ee" :style="{'grid-template-columns': sd_ddf,'grid-column-gap': gutter+'px'}">
	   <slot></slot>

	</div>
</template>
<script>
    export default {
        props: {
            span: "",
            gutter:""
        },
        data() {
            return {
                sd_ddf: ""
            }
        },
        components: { 

        },
        methods: {

        },
        mounted() {
            for(var i=0;i<this.span;i++){
                this.sd_ddf+=" 1fr"
            }
        },
    }

</script>
<style scoped>
    .row_ee {
        display: grid;

        grid-template-rows: 1fr;
        
        grid-row-gap: 0px;
    }

</style>
