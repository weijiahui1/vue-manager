<template>
  <div id="app" class="main">
    <Layout :style="{height: '100%'}">
      <Header class="topheader" ref="topheader">
        <div class="layout-logo"></div>
        <Menu mode="horizontal" theme="dark" v-bind:activeName="getTabTag">
            <menu-item name="work" to="/work/mywork">
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
        <Sider :style="{height: '100%'}" hide-trigger collapsible :width="200" :collapsed-width="64" v-model="collapsed">
          <side-menu accordion :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
          </side-menu>
        </Sider>
        <Layout>
          <div class="tag-nav-wrapper">
            <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange"></header-bar>
            <!-- <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/> -->
          </div>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import TagsNav from './components/tags-nav'
import Fullscreen from './components/fullscreen'
import Language from './components/language'
import User from './components/user'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { getNewTagList, getNextName } from '@/libs/util'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import './work.less'

export default {
  name: 'Work',
  components: {
    SideMenu,
    HeaderBar,
    Language,
    TagsNav,
    Fullscreen,
    User
  },
  data () {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false
    }
  },
  computed: {
    ...mapGetters([
      'getTabTag'
    ]),
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    userAvator () {
      return this.$store.state.user.avatorImgPath
    },
    cacheList () {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
    },
    menuList () {
      return this.$store.getters.menuList
    },
    local () {
      return this.$store.state.app.local
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setLocal',
      'setTabTag'
    ]),
    ...mapActions([
      'handleLogin'
    ]),
    _tabTag (name) {
      if (name.indexOf('work') > -1) {
        this.setTabTag('work')
      } else if (name.indexOf('manager') > -1) {
        this.setTabTag('manager')
      }
    },
    turnToPage (name) {
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name: name
      })
    },
    handleCollapsedChange (state) {
      this.collapsed = state
    },
    handleCloseTag (res, type, name) {
      const nextName = getNextName(this.tagNavList, name)
      this.setTagNavList(res)
      if (type === 'all') this.turnToPage('home')
      else if (this.$route.name === name) this.$router.push({ name: nextName })
    },
    handleClick (item) {
      this.turnToPage(item.name)
    }
  },
  watch: {
    '$route' (newRoute) {
      this._tabTag(newRoute.path)
      this.setBreadCrumb(newRoute.matched)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    }
  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this._tabTag(this.$route.path)
    this.setTagNavList()
    this.addTag(this.$store.state.app.homeRoute)
    this.setBreadCrumb(this.$route.matched)
    // 设置初始语言
    this.setLocal(this.$i18n.locale)
  }
}
</script>
