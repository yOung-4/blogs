<script>

import { ArrowDown, Setting } from '@element-plus/icons-vue'

export default {
  name: 'TitleBar',
  components: { Setting, ArrowDown },
  data() {
    return {
      tabs: [['home', 'House', 'index'], ['menu', 'Menu', 'menu'], ['photos', 'Picture', 'photos']]
    }
  },
  methods: {
    changeLanguage(newLanguage) {
      this.$i18n.locale = newLanguage
    }
  }

}
</script>

<template>
  <div id="标题栏">

    <div id="左侧">
      <div id="标题文字">{{ $t('name') }}</div>
      <div style="width: 0.09375rem; height: 2.5rem; background: #909399;"></div>
      <div id="选项卡组" v-for="tab in tabs" :key="tab">
        <el-button link size="large" :icon="tab[1]" @click="this.$router.push({name: tab[2]})">{{ $t(tab[0]) }}</el-button>
      </div>
    </div>

    <div id="右侧">
      <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-icon class="el-icon--left">
        <setting />
      </el-icon>
      {{ $t('setLanguage') }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changeLanguage('zh-CN')">简体中文</el-dropdown-item>
            <el-dropdown-item @click="changeLanguage('en-US')">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
#标题栏 {
  display: flex;
  width: 63rem;
  height: 4.375rem;
  padding: 0rem 1.875rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.45);
}

#左侧 {
  display: flex;
  align-items: center;
  gap: 1.5625rem;
}

#右侧 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}

#标题文字 {
  color: rgba(0, 0, 0, 0.87);
  font-style: normal;
  font-size: 1.75rem;
  font-weight: 700;
}

#选项卡组 {
  display: flex;
  align-items: center;
  gap: 0.9375rem;
}
</style>

