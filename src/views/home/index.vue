<template>
  <div class="app-container">
    <div class="address-layout">
      <el-row :gutter="26">
        <el-col :span="6">
          <div class="total-frame">
            <img :src="img_home_today_user" class="total-icon">
            <div class="total-title">今日用户注册数</div>
            <div class="total-value" v-text="mainData.todayUserCount">200</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="total-frame">
            <img :src="img_home_yesterday_user" class="total-icon">
            <div class="total-title">昨日用户注册数</div>
            <div class="total-value"  v-text="mainData.yesterdayUserCount">￥5000.00</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="total-frame">
            <img :src="img_home_admin" class="total-icon">
            <div class="total-title">管理员人数</div>
            <div class="total-value" v-text="mainData.adminCount"></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="total-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="total-frame">
            <img :src="img_home_order" class="total-icon">
            <div class="total-title">今日订单总数</div>
            <div class="total-value" v-text="mainData.todayOrderCount">200</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="total-frame">
            <img :src="img_home_today_amount" class="total-icon">
            <div class="total-title">今日销售总额</div>
            <div class="total-value" v-text="mainData.todayMoneyCount">￥5000.00</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="total-frame">
            <img :src="img_home_yesterday_amount" class="total-icon">
            <div class="total-title">昨日销售总额</div>
            <div class="total-value" v-text="mainData.yesterdayMoneyCount">￥5000.00</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 管理员信息 -->
    <el-card class="mine-layout">
      <div style="text-align: center">
        <img width="120px" height="120px" :src="avatar">
      </div>
      <div style="text-align: center;font-weight: 600;margin: 8px;" v-text="roles"></div>
      <div style="text-align: center" v-text="realname"></div>
    </el-card>

    <div class="un-handle-layout">
      <div class="layout-title">待处理事务</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待付款订单</span>
              <span style="float: right" class="color-danger">(<span v-text="mainData.unpaidOrderCount"></span>)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待确认收货订单</span>
              <span style="float: right" class="color-danger">(<span v-text="mainData.unconfirmedOrderCount"></span>)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待发货订单</span>
              <span style="float: right" class="color-danger">(<span v-text="mainData.unshippedOrderCount"></span>)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待处理退货订单</span>
              <span style="float: right" class="color-danger">(<span v-text="mainData.unreturnedOrderCount"></span>)</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="overview-layout">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="out-border">
            <div class="layout-title">商品总览</div>
            <div style="padding: 40px">
              <el-row>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.lowerShelfProductCount">100</el-col>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.upperShelfProductCount">400</el-col>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.tightStockProductCount">50</el-col>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.totalProductCount">500</el-col>
              </el-row>
              <el-row class="font-medium">
                <el-col :span="6" class="overview-item-title">已下架</el-col>
                <el-col :span="6" class="overview-item-title">已上架</el-col>
                <el-col :span="6" class="overview-item-title">库存紧张</el-col>
                <el-col :span="6" class="overview-item-title">全部商品</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="out-border">
            <div class="layout-title">用户总览</div>
            <div style="padding: 40px">
              <el-row>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.todayUserCount">100</el-col>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.yesterdayUserCount">200</el-col>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.monthUserCount">1000</el-col>
                <el-col :span="6" class="color-danger overview-item-value" v-text="mainData.totalUserCount">5000</el-col>
              </el-row>
              <el-row class="font-medium">
                <el-col :span="6" class="overview-item-title">今日新增</el-col>
                <el-col :span="6" class="overview-item-title">昨日新增</el-col>
                <el-col :span="6" class="overview-item-title">本月新增</el-col>
                <el-col :span="6" class="overview-item-title">会员总数</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="statistics-layout">
      <div class="layout-title">订单统计</div>
      <el-row>
        <el-col :span="24">
          <div style="padding: 10px;border-left:1px solid #DCDFE6">
            <el-date-picker
              style="float: right;z-index: 1;margin-top: 10px;"
              size="small"
              v-model="orderCountDate"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="handleDateChange">
            </el-date-picker>
            <div>
              <ve-line
                :data="chartData"
                :legend-visible="false"
                :loading="loading"
                :data-empty="dataEmpty"
                :settings="chartSettings"></ve-line>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {str2Date} from '@/utils/date';
  import img_home_order from '@/assets/images/home_order.png';
  import img_home_today_amount from '@/assets/images/home_today_amount.png';
  import img_home_yesterday_amount from '@/assets/images/home_yesterday_amount.png';
  import img_home_today_user from '@/assets/images/home_today_user.png';
  import img_home_yesterday_user from '@/assets/images/home_yesterday_user.png';
  import img_home_admin from '@/assets/images/home_admin.png';
  import { mapGetters } from 'vuex';
  import {statistical,getChart} from '@/api/main';

  const DATA_FROM_BACKEND = {
    columns: ['date', 'orderCount','orderAmount'],
    rows: []
  };
  export default {
    name: 'home',
    computed: {
        ...mapGetters([
            'avatar',
            'realname',
            'roles'
        ])
    },
    data() {
      return {
        orderCountDate: '',
        chartSettings: {
          xAxisType: 'time',
          area:true,
          axisSite: { right: ['orderAmount']},
        labelMap: {'orderCount': '订单数量', 'orderAmount': '订单金额'}},
        chartData: {
          columns: [],
          rows: []
        },
        loading: false,
        dataEmpty: false,
        img_home_order,
        img_home_today_amount,
        img_home_yesterday_amount,
        img_home_admin,
        img_home_today_user,
        img_home_yesterday_user,
        mainData : {
            adminCount : '',
            todayUserCount : '',
            yesterdayUserCount : '',
            monthUserCount : '',
            totalUserCount : '',
            todayOrderCount : '',
            todayMoneyCount : '',
            yesterdayMoneyCount : '',
            unpaidOrderCount : '',
            unconfirmedOrderCount : '',
            unshippedOrderCount : '',
            unreturnedOrderCount : '',
            totalProductCount : '',
            lowerShelfProductCount : '',
            upperShelfProductCount : '',
            tightStockProductCount : ''
        },
      }
    },
    created(){
      this.handleStatisticsCount();
      this.initOrderCountDate();
      this.$notify({
          title: '成功',
          message: '登录成功，请继续操作',
          type: 'success'
      });
    },
    methods:{
      //初始化用户、商品、管理员数量统计
      handleStatisticsCount(){
        return new Promise((resolve, reject) => {
            statistical().then(response => {
                this.mainData = response.data
                resolve()
            }).catch(error => {
                reject(error)
            })
        });
      },
      handleDateChange(){
          this.getData();
      },
      //初始化统计图表日期
      initOrderCountDate(){
          let end = new Date();
          let start = new Date();
          start.setTime(end.getTime() - 1000 * 60 * 60 * 24 * 7);
          this.orderCountDate=[start,end];
          this.getData();
      },
      getData(){
        let start=this.orderCountDate[0];
        let end=this.orderCountDate[1];
        //根据日期获取图表数据
        return new Promise((resolve, reject) => {
            getChart(start,end).then(response => {
                const list = response.data
                this.chartData = {
                    columns: ['date', 'orderCount','orderAmount'],
                    rows: []
                };
                for(let i=0;i<=list.length;i++){
                    const item = list[i];
                    let currDate = str2Date(item.date);
                    if(currDate.getTime()>=start.getTime()-(1000*60*60*24)&&currDate.getTime()<=end.getTime()){
                        this.chartData.rows.push(item);
                    }
                }
                this.dataEmpty = false;
                this.loading = false
                resolve()
            }).catch(error => {
                reject(error)
            })
        });
      }
    }
  }
</script>

<style scoped>
  .app-container {
    margin-top: 40px;
    margin-left: 120px;
    margin-right: 120px;
  }

  .address-layout {
  }

  .total-layout {
    margin-top: 20px;
  }

  .total-frame {
    border: 1px solid #DCDFE6;
    padding: 20px;
    height: 100px;
  }

  .total-icon {
    color: #409EFF;
    width: 60px;
    height: 60px;
  }

  .total-title {
    position: relative;
    font-size: 16px;
    color: #909399;
    left: 70px;
    top: -50px;
  }

  .total-value {
    position: relative;
    font-size: 18px;
    color: #606266;
    left: 70px;
    top: -40px;
  }

  .un-handle-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }

  .layout-title {
    color: #606266;
    padding: 15px 20px;
    background: #F2F6FC;
    font-weight: bold;
  }

  .un-handle-content {
    padding: 20px 40px;
  }

  .un-handle-item {
    border-bottom: 1px solid #EBEEF5;
    padding: 10px;
  }

  .overview-layout {
    margin-top: 20px;
  }

  .overview-item-value {
    font-size: 24px;
    text-align: center;
  }

  .overview-item-title {
    margin-top: 10px;
    text-align: center;
  }

  .out-border {
    border: 1px solid #DCDFE6;
  }

  .statistics-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }
  .mine-layout {
    position: absolute;
    right: 160px;
    top: 103px;
    width: 300px;
    height: 230px;
  }
  .address-content{
    padding: 20px;
    font-size: 18px
  }
</style>
