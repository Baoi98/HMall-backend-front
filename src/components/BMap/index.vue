<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>订单追踪</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="handleClose">×</el-button>
    </div>
    <div id="allmap"></div>
  </el-card>
</template>

<script>
    export default {
        name: "",
        props: {
            address: {
               type: String,
               default() {
               }
            }
        },
        data(){
            return{

            }
        },
        /*mounted() {
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var start = "广东深圳南山区科兴科学园";
            console.log(address)
            var end = {address};
            var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
            map.centerAndZoom(new BMap.Point(112.89996, 28.198), 13)
            var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: routePolicy[1]});
            driving.search(start,end);
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.setMapStyleV2({
                styleId: '3207435d634d0f3f51363629021251a1'
            });
        },*/
        watch: {
          address: function (newVal, oldVal) {
              // 百度地图API功能
              var map = new BMap.Map("allmap");
              var start = "广东深圳南山区科兴科学园";
              console.log(newVal)
              var end = newVal;
              var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
              map.centerAndZoom(new BMap.Point(112.89996, 28.198), 13)
              var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: routePolicy[1]});
              driving.search(start,end);
              map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
              map.setMapStyleV2({
                  styleId: '3207435d634d0f3f51363629021251a1'
              });
          }
        },
        methods:{
            handleClose(){
                this.$parent.handleViewClose();
            }
        }
    }
</script>

<style scoped>
  body,
  html,
  #allmap{
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin: 0;
    font-family: "Arial Black";
  }
  .box-card {
    width: 90%;
  }
</style>
