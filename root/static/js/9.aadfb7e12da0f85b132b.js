webpackJsonp([9],{K6tQ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),s=r.n(a),l=r("fZjL"),o=r.n(l),n=r("NYxO"),i=r("lhz5"),u={name:"adduserd",created:function(){var e=this;this.$nextTick(function(){e._getRole()})},data:function(){return{formValue:{user_name:"",role_id:"",password:"",real_name:"",status:0,id:null},passwordPlaceholder:"",user_name_readonly:!1,roles:{},status:{},formRules:{user_name:[{required:!0,message:"必填项",trigger:"blur"},{min:5,message:"最少为输入5位数",trigger:"blur"}],password:[{min:6,message:"最少为输入6位数",trigger:"blur"}],role_id:[{required:!0,message:"必填项",trigger:"change"}],real_name:[{required:!0,message:"必填项",trigger:"blur"},{min:2,message:"最少为输入2位数",trigger:"blur"}]}}},methods:{onSubmit:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;Object(i.d)(e.formValue).then(function(t){e.$message({message:t.msg,type:"success"}),e.$router.push("/admin/user")})})},resetForm:function(){this.$refs.loginForm.resetFields()},_getRole:function(){var e=this;o()(this.editAdmin).length>0&&(this.formValue.user_name=this.editAdmin.user_name,this.formValue.real_name=this.editAdmin.real_name,this.formValue.role_id=this.editAdmin.role_id,this.formValue.status=this.editAdmin.status,this.formValue.id=this.editAdmin.id,this.formValue.password="",this.passwordPlaceholder="不填不修改",this.user_name_readonly=!0),Object(i.c)().then(function(t){e.roles=t.data.role,e.status=t.data.status})}},computed:s()({},Object(n.c)(["editAdmin"]))},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"loginForm",attrs:{"label-width":"180px","status-icon":"",rules:e.formRules,model:e.formValue},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"管理员账号",prop:"user_name"}},[r("el-input",{staticStyle:{width:"280px"},attrs:{name:"name",disabled:e.user_name_readonly},model:{value:e.formValue.user_name,callback:function(t){e.$set(e.formValue,"user_name",t)},expression:"formValue.user_name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"设置角色",prop:"role_id"}},[r("el-select",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择"},model:{value:e.formValue.role_id,callback:function(t){e.$set(e.formValue,"role_id",t)},expression:"formValue.role_id"}},e._l(e.roles,function(e,t){return r("el-option",{key:t,attrs:{label:e.role_name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"设置密码",prop:"password"}},[r("el-input",{staticStyle:{width:"280px"},attrs:{type:"password",placeholder:e.passwordPlaceholder},model:{value:e.formValue.password,callback:function(t){e.$set(e.formValue,"password",t)},expression:"formValue.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"真实姓名",prop:"real_name"}},[r("el-input",{staticStyle:{width:"280px"},model:{value:e.formValue.real_name,callback:function(t){e.$set(e.formValue,"real_name",t)},expression:"formValue.real_name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否启用"}},[r("el-radio-group",{model:{value:e.formValue.status,callback:function(t){e.$set(e.formValue,"status",t)},expression:"formValue.status"}},e._l(e.status,function(t,a){return r("el-radio",{key:a,attrs:{border:"",label:a}},[e._v(e._s(t))])}))],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit()}}},[e._v("立即创建")]),e._v(" "),e.user_name_readonly?e._e():r("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var d=r("VU/8")(u,m,!1,function(e){r("QGzA")},"data-v-7071fd94",null);t.default=d.exports},QGzA:function(e,t){},lhz5:function(e,t,r){"use strict";t.b=function(e){return Object(a.a)({url:"user/index",method:"get",params:e})},t.a=function(e){return Object(a.a)({url:"user/userDel",method:"post",data:e})},t.c=function(){return Object(a.a)({url:"user/userAdd",method:"get"})},t.d=function(e){var t=e.id?"user/userEdit":"user/userAdd";return Object(a.a)({url:t,method:"post",data:e})};var a=r("vLgD")}});