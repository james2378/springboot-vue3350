<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='jiaowurenyuan'"  label='工号' prop="jiaowurenyuanUuidNumber">
               <el-input v-model="ruleForm.jiaowurenyuanUuidNumber"  placeholder='工号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiaowurenyuan'"  label='教务人员姓名' prop="jiaowurenyuanName">
               <el-input v-model="ruleForm.jiaowurenyuanName"  placeholder='教务人员姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='jiaowurenyuan'"  label='身份证号' prop="jiaowurenyuanIdNumber">
               <el-input v-model="ruleForm.jiaowurenyuanIdNumber"  placeholder='身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='学号' prop="yonghuUuidNumber">
               <el-input v-model="ruleForm.yonghuUuidNumber"  placeholder='学号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='学生姓名' prop="yonghuName">
               <el-input v-model="ruleForm.yonghuName"  placeholder='学生姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='家庭地址' prop="yonghuAddress">
               <el-input v-model="ruleForm.yonghuAddress"  placeholder='家庭地址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'"  label='学院' prop="xueyuanTypes">
                 <el-select v-model="ruleForm.xueyuanTypes"  placeholder='请选择学院'>
                     <el-option
                             v-for="(item,index) in xueyuanTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'"  label='班级' prop="banjiTypes">
                 <el-select v-model="ruleForm.banjiTypes"  placeholder='请选择班级'>
                     <el-option
                             v-for="(item,index) in banjiTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'"  label='学籍状态' prop="xuejiTypes">
                 <el-select v-model="ruleForm.xuejiTypes"  placeholder='请选择学籍状态'>
                     <el-option
                             v-for="(item,index) in xuejiTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 学生
    // 注册的类型字段 学生
        // 性别
        sexTypesOptions : [],
        // 学院
        xueyuanTypesOptions : [],
        // 班级
        banjiTypesOptions : [],
        // 学籍状态
        xuejiTypesOptions : [],
// 注册表 教务人员姓名
    // 注册的类型字段 教务人员姓名
        // 性别
        sexTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 学生
// 注册表 教务人员姓名
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 学生 的级联表
// 注册表 教务人员姓名 的级联表

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=xueyuan_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.xueyuanTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=banji_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.banjiTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=xueji_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.xuejiTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
  },
  methods: {
    chongzhi() {
      this.$router.replace({ path: "/pay" });
    },


    onUpdateHandler() {
                         if((!this.ruleForm.jiaowurenyuanUuidNumber)&& 'jiaowurenyuan'==this.flag){
                             this.$message.error('工号不能为空');
                             return
                         }

                         if((!this.ruleForm.jiaowurenyuanName)&& 'jiaowurenyuan'==this.flag){
                             this.$message.error('教务人员姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.jiaowurenyuanIdNumber)&& 'jiaowurenyuan'==this.flag){
                             this.$message.error('身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuUuidNumber)&& 'yonghu'==this.flag){
                             this.$message.error('学号不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuName)&& 'yonghu'==this.flag){
                             this.$message.error('学生姓名不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuAddress)&& 'yonghu'==this.flag){
                             this.$message.error('家庭地址不能为空');
                             return
                         }

                         if((!this.ruleForm.xueyuanTypes)&& 'yonghu'==this.flag){
                             this.$message.error('学院不能为空');
                             return
                         }

                         if((!this.ruleForm.banjiTypes)&& 'yonghu'==this.flag){
                             this.$message.error('班级不能为空');
                             return
                         }

                         if((!this.ruleForm.xuejiTypes)&& 'yonghu'==this.flag){
                             this.$message.error('学籍状态不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes) && this.flag!='users'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
