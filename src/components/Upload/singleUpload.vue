<template> 
  <div>
    <el-upload
      action="http://127.0.0.1:10001/item/photo/upload"
      :data="dataObj"
      list-type="picture"
      :multiple="false" :show-file-list="showFileList"
      name="multipartFile"
      :file-list="fileList"
      :on-remove="handleRemove"
      :on-success="handleUploadSuccess"
      :on-preview="handlePreview"
      :limit="maxCount"
      :on-exceed="handleExceed">
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
            value: String,
            maxCount:{
                type:Number,
                default:5
            }
        },
        computed: {
            imageUrl() {
                return this.value;
            },
            imageName() {
                if (this.value != null && this.value !== '') {
                    return this.value.substr(this.value.lastIndexOf("/") + 1);
                } else {
                    return null;
                }
            },
            fileList() {
                return [{
                    name: this.imageName,
                    url: this.imageUrl
                }]
            },
            showFileList: {
                get: function () {
                    return this.value !== null && this.value !== ''&& this.value!==undefined;
                },
                set: function (newValue) {
                }
            }
        },
        data() {
            return {
                dataObj: {
                    url:''
                },
                dialogVisible: false
            };
        },
        methods: {
            emitInput(val) {
                this.$emit('input', val)
            },
            handleRemove(file, fileList) {
                this.emitInput('');
            },
            handlePreview(file) {
                this.dialogVisible = true;
            },
            handleUploadSuccess(response, file) {
                this.showFileList = true;
                this.fileList.pop();
                this.fileList.push({name: file.name, url: response.data});
                this.emitInput(this.fileList[0].url);
            },
            handleExceed() {
                this.$message({
                    message: '最多只能上传'+this.maxCount+'张图片',
                    type: 'warning',
                    duration:1000
                });
            },
        }
    }
</script>
<style>

</style>


