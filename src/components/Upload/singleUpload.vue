<template> 
  <div>
    <el-upload
      :action = url
      :data = "dataObj"
      accept = "image/jpeg,image/png"
      list-type = "picture"
      :file-list="dataObj.url"
      :on-success="handleUploadSuccess"
      :on-remove="handleRemove"
      :on-preview="handlePreview"
      name="multipartFile"
      multiple>
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="fileList[0].url" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'singleUpload',
    props: {
      value: String
    },
    computed: {
      /*fileList() {
        return [{
            url: ''
        }]
      },*/
    },
    data() {
      return {
        dataObj: {
          url : '#'
        },
        dialogVisible: false,
        url:"http://127.0.0.1:10001/item/photo/upload",
      };
    },
    methods: {
      emitInput(val) {
        this.$emit('input', val)
      },
      handleRemove(file, fileList) {
        this.emitInput(fileList);
      },
      handlePreview(file) {
        this.dialogVisible = true;
      },
      handleUploadSuccess(response, file) {
        //this.fileList.pop();
        //this.fileList.push({url: response.data});
        this.dataObj.url = response.data;
        this.emitInput(this.fileList[0].url);
      }
    }
  }
</script>
<style>

</style>


