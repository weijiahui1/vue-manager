<template>
 <div id="app" class="main">
    <Layout :style="{height: '100%'}">
      <Header class="topheader">
        <div class="layout-logo"></div>
        <Menu mode="horizontal" theme="dark" v-bind:activeName="getTabTag">
            <menu-item name="work" to="/work/testwork">
              <Icon type="ios-navigate"></Icon>
              工作
            </menu-item>
            <menu-item name="manager" to="/manager/test">
              <Icon type="ios-keypad"></Icon>
              管理
            </menu-item>
        </Menu>
        <div class="userinfo">
          <user :user-avator="userAvator"/>
        </div>
      </Header>
      <Layout class="content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import User from './components/user'
import {mapMutations, mapGetters} from 'vuex'
import './main.less'
export default {
  name: 'App',
  components: {
    User
  },
  methods: {
    ...mapMutations([
      'setTabTag'
    ]),
    _tabTag (name) {
      if (name.indexOf('work') > -1) {
        this.setTabTag('work')
      } else if (name.indexOf('manager') > -1) {
        this.setTabTag('manager')
      }
    }
  },
  computed: {
    ...mapGetters([
      'getTabTag'
    ]),
    userAvator () {
      return this.$store.state.user.avatorImgPath
    }
  },
  watch: {
    '$route' (newRoute) {
      this._tabTag(newRoute.path)
    }
  },
  mounted () {
    this._tabTag(this.$route.path)
  }
}
</script>

<style lang="less">

</style>
