<template> 
  <div>
    <el-upload
      :action = url
      :data = "dataObj"
      accept="image/jpeg,image/png"
      list-type="picture-card"
      :file-list="fileList"
      :on-success="handleUploadSuccess"
      :on-remove="handleRemove"
      :on-preview="handlePreview"
      name="multipartFile"
      multiple
      :limit="maxCount"
      :on-exceed="handleExceed"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'multiUpload',
    props: {
      //图片属性数组
      value: Array,
      //最大上传图片数量
      maxCount:{
        type:Number,
        default:5
      }
    },
    data() {
      return {
        dataObj: {
          url:''
        },
        dialogVisible: false,
        dialogImageUrl:null,
        url:"http://127.0.0.1:10001/item/photo/upload"
      };
    },
    computed: {
      fileList() {
        let fileList=[];
        for(let i=0;i<this.value.length;i++){
          fileList.push({url:this.value[i]});
        }
        return fileList;
      }
    },
    methods: {
      emitInput(fileList) {
        let value=[];
        for(let i=0;i<fileList.length;i++){
          value.push(fileList[i].url);
        }
        this.$emit('input', value)
      },
      handleRemove(file, fileList) {
          this.emitInput(fileList);
      },
      handlePreview(file) {
        this.dialogVisible = true;
        this.dialogImageUrl = file.url;
      },
      //上传成功，回调方法 response 包含参数
      handleUploadSuccess(response, file) {
        let path = response.data
        if(path == null){
            this.$message({
                message: response.message,
                type: 'warning',
                duration:1000
            });
            console.log(this.fileList)
        }
        else if(path != null && path != ''){
            this.fileList.push({name: file.name,url:path});
            this.emitInput(this.fileList);
        }
      },
      handleExceed(files, fileList) {
        this.$message({
          message: '最多只能上传'+this.maxCount+'张图片',
          type: 'warning',
          duration:1000
        });
      },
    }
  }
</script>


