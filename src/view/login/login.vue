<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions, mapMutations } from 'vuex'
// import { login } from '@/api/user'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ]),
    ...mapMutations([
      'setToken'
    ]),
    handleSubmit ({ userName, password }) {
      let obj = {
        user_name: '佳慧',
        avator: 'http://up.qqjia.com/z/21/tu24012_11.jpg',
        user_id: '1',
        access: [1, 2],
        token: '111'
      }
      this.getUserInfo(obj)
      this.setToken(obj.token)
      this.$router.push({name: 'mywork'})
      // 登录
      // return login({ userName, password }).then(res => {
      //   let resdata = JSON.parse(res.data).data
      //   let code = resdata.result
      //   console.log(code)
      //   if (code === 'R4' || code === 'R6') {
      //     if (code === 'R4') {
      //       let obj = {
      //         user_name: resdata.staff.staffname,
      //         avator: resdata.staff.headimg,
      //         user_id: resdata.staff.staffid,
      //         access: resdata.jurisdiction.split(','),
      //         token: '111'
      //       }
      //       this.getUserInfo(obj)
      //       this.setToken(obj.token)
      //       this.$router.push('work')
      //       console.log('跳转')
      //     }
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
}
</script>

<style>

</style>
