<template>
  <div class="topheader">
    <Menu mode="horizontal" theme="dark" v-bind:activeName="activeName">
        <menu-item v-for="item in headerList" v-bind:key="item.name" name="work" to="/work/testwork">
          <Icon type="ios-navigate"></Icon>
          {{item.mate.title}}
        </menu-item>
        <!-- <menu-item name="manager" to="/manager/test">
          <Icon type="ios-keypad"></Icon>
          管理
        </menu-item> -->
    </Menu>
  </div>
</template>

<script>
import './topheader.less'
export default {
  name: 'TopHeader',
  props: {
    headerList: {
      type: Array,
      default () {
        return []
      }
    },
    activeName: {
      type: String,
      default: ''
    }
  },
  methods: {
  }
}
</script>
