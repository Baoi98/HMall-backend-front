<template> 
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
        <div>
          <i class="el-icon-search"></i>
          <span>筛选搜索</span>

        </div>
        <div style="margin-top: 20px;margin-left: 30px;">
          <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
            <el-form-item label="输入搜索：">
              <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="品牌名称/关键字"></el-input>
            </el-form-item>
            <el-button
              style=""
              @click="searchBrandList()"
              type="primary"
              size="small">
              查询结果
            </el-button>
          </el-form>

        </div>
    </el-card>
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>批量操作</span>
      <div class="batch-operate-container">
        <el-select
          size="small"
          v-model="operateType" placeholder="批量操作">
          <el-option
            v-for="item in operates"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button
          style="margin-left: 20px"
          class="search-button"
          @click="handleBatchOperate()"
          type="primary"
          size="small">
          确定
        </el-button>
      </div>
      <el-button
        style="margin-top: 12px"
        class="btn-add"
        @click="addBrand()"
        size="small">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="LOGO" align="center">
          <template slot-scope="scope"><img style="height: 80px" :src="scope.row.logo"></template>
        </el-table-column>
        <el-table-column label="品牌名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="品牌首字母" width="100" align="center">
          <template slot-scope="scope">{{scope.row.firstLetter}}</template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>
        <el-table-column label="品牌制造商" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleFactoryStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.factoryStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleShowStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.showStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="相关" width="220" align="center">
          <template slot-scope="scope">
            <span>商品：</span>
            <el-button
              size="mini"
              type="text"
              @click="getProductList(scope.$index, scope.row)" >{{scope.row.productCount}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>

    <el-drawer
      title="品牌相关商品"
      :visible.sync="table"
      direction="ltr"
      size="50%">
        <div style="margin: auto">
            <el-table :data="gridData">
              <el-table-column label="编号" width="100" align="center">
                <template slot-scope="scope">{{scope.row.id}}</template>
              </el-table-column>
              <el-table-column label="商品图片" width="150" align="center">
                <template slot-scope="scope"><img style="height: 80px" :src="scope.row.pic"></template>
              </el-table-column>
              <el-table-column label="商品名称" align="center">
                <template slot-scope="scope">
                  <p>{{scope.row.name}}</p>
                  <p>品牌：{{scope.row.brandName}}</p>
                </template>
              </el-table-column>
              <el-table-column label="价格/货号" width="150" align="center">
                <template slot-scope="scope">
                  <p>价格：￥{{scope.row.price}}</p>
                  <p>货号：{{scope.row.productSn}}</p>
                </template>
              </el-table-column>
              <el-table-column label="排序" width="100" align="center">
                <template slot-scope="scope">{{scope.row.sort}}</template>
              </el-table-column>
              <el-table-column label="销量" width="100" align="center">
                <template slot-scope="scope">{{scope.row.sale}}</template>
              </el-table-column>
            </el-table>
            <div class="pagination-container">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="total, sizes,prev, pager, next,jumper"
                :page-size="aboutItem.pageSize"
                :page-sizes="[5,10,15]"
                :current-page.sync="aboutItem.pageNum"
                :total="aboutTotal">
              </el-pagination>
            </div>
        </div>
      </el-drawer>
  </div>
</template>
<script>
  import {fetchList, updateShowStatus, updateFactoryStatus, deleteBrand, brandAboutItem} from '@/api/brand'

  export default {
    name: 'brandList',
    data() {
      return {
        operates: [
          {
            label: "显示品牌",
            value: "showBrand"
          },
          {
            label: "隐藏品牌",
            value: "hideBrand"
          },
          {
            label: "删除品牌",
            value: "delBrand"
          },
        ],
        operateType: null,
        listQuery: {
          keyword: null,
          pageNum: 1,
          pageSize: 10
        },
        list: null,
        total: null,
        listLoading: true,
        multipleSelection: [],
        // 相关商品
        table: false,
        gridData: [],
        aboutItem: {
            brandId: null,
            pageNum: 1,
            pageSize: 5,
        },
        aboutTotal: null
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.list;
          this.total = response.data.total;
          this.totalPage = response.data.totalPage;
          this.pageSize = response.data.pageSize;
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleUpdate(index, row) {
        this.$router.push({path: '/pms/updateBrand', query: {id: row.id}})
      },
      handleDelete(ids) {
        this.$confirm('是否要删除该品牌', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = new URLSearchParams();
          data.append("ids", ids);
          deleteBrand(data).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getList();
          });
        });
      },
      // 品牌相关商品查询
      getProductList(index, row) {
        this.aboutItem.brandId = row.id
        brandAboutItem(this.aboutItem).then(response => {
          // 清空
          this.gridData = []
          console.log(response.data)
          let data = response.data.list
          for (let i = 0; i < data.length; i++){
            this.gridData.push(data[i])
          }
          this.aboutTotal = response.data.total
        })
        this.table = true
      },
      handleFactoryStatusChange(index, row) {
        let param = {ids:row.id,factoryStatus:row.factoryStatus};
        updateFactoryStatus(param).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.factoryStatus === 0) {
            row.factoryStatus = 1;
          } else {
            row.factoryStatus = 0;
          }
        });
      },
      handleShowStatusChange(index, row) {
        let param = {ids:row.id,showStatus:row.showStatus};
        updateShowStatus(param).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        }).catch(error => {
          if (row.showStatus === 0) {
            row.showStatus = 1;
          } else {
            row.showStatus = 0;
          }
        });
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = val;
        this.getList();
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val;
        this.getList();
      },
      searchBrandList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
      handleBatchOperate() {
        if (this.multipleSelection < 1) {
          this.$message({
            message: '请选择一条记录',
            type: 'warning',
            duration: 1000
          });
          return;
        }
        if (this.operateType !== 'delBrand') {
            let showStatus = 0;
            if (this.operateType === 'showBrand') {
                showStatus = 1;
            } else if (this.operateType === 'hideBrand') {
                showStatus = 0;
            } else {
                this.$message({
                    message: '请选择批量操作类型',
                    type: 'warning',
                    duration: 1000
                });
                return;
            }
            let ids = [];
            for (let i = 0; i < this.multipleSelection.length; i++) {
                ids.push(this.multipleSelection[i].id);
            }
            let data = new URLSearchParams();
            data.append("ids", ids);
            data.append("showStatus", showStatus);
            updateShowStatus(data).then(response => {
                this.getList();
                this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration: 1000
                });
            });
        }
        if (this.operateType === 'delBrand'){
            let ids = [];
            console.log(this.multipleSelection)
            for (let i = 0; i < this.multipleSelection.length; i++) {
                ids.push(this.multipleSelection[i].id);
            }
            console.log(ids)
            this.handleDelete(ids);
        }
      },
      addBrand() {
        this.$router.push({path: '/pms/addBrand'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


