<script>
import TitleBar from '@/components/TitleBar.vue'
import { Plus } from '@element-plus/icons-vue'

export default {
  name: 'MainPage',
  computed: {
    Plus() {
      return Plus
    }
  },
  components: {
    TitleBar
  },
  data() {
    return {
      logos: [
        ['X', 'https://x.com/4yOung13'],
        ['discord', 'https://discord.gg/6hRNd3yFQv'],
        ['GitHub', 'https://github.com/yOung-4'],
        ['telegram', 'https://t.me/young_4Yo']
      ],
      cards: ['article', 'photos'],
      infoCards: [
        ['videocam', 'Photographer', '#C62828'],
        ['code', 'frontendDev', '#1B5E20'],
        ['design', 'uiDesigner', '#01579B']
      ]
    }
  },
  methods: {
    openURL(url) {
      window.open(url, '_blank')
    }
  }
}

</script>

<template>
  <TitleBar />
  <div id="行">

    <div id="个人信息">
      <el-image id="头像" src="src/assets/头像.svg" fit="cover" loading="eager">
        <template #error>
          <div class="image-slot">
            Oops, this image is nowhere to be found.
          </div>
        </template>
      </el-image>
      <div id="个人信息右侧">
        <div id="名字">
          {{ $t('name') }}
        </div>
        <div id="bio">{{ $t('bio') }}</div>
        <div id="社交媒体链接">
          <div v-for="logo in logos" :key="logo">
            <el-image id="社交媒体图标" :src="`src/assets/${logo[0]}.svg`"
                      @click="this.openURL(logo[1])" />
          </div>
        </div>
      </div>
    </div>

    <div id="第一行右侧">
      <div v-for="card in cards" :key="card" style="height: 100%">
        <div id="第一行右侧卡片">
          <div id="第一行右侧卡片标题">{{ $t(card) }}</div>
          <div id="第一行右侧卡片内容列表">
            <el-button link>标题</el-button>
          </div>
          <el-button round type="primary" :icon="Plus" size="large">{{ $t('viewMore') }}</el-button>
        </div>
      </div>
    </div>

  </div>

  <div id="第二行">
    <div id="第二行卡片" v-for="infoCard in infoCards" :key="infoCard">
      <el-image :src="`src/assets/${infoCard[0]}.svg`" style="width: 4.375rem; height: 4.375rem;" />
      <div id="第二行卡片文字" :style="{color: infoCard[2]}">{{$t(infoCard[1])}}</div>
    </div>
  </div>
</template>

<style scoped>
#行 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.4375rem;
  align-self: stretch;
}

#个人信息 {
  display: flex;
  padding: 1.5625rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.45);
  height: 100%
}

#个人信息右侧 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}

#头像 {
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 12.5rem;
}

#名字 {
  color: rgba(0, 0, 0, 0.87);
  font-size: 2.8125rem;
  font-style: normal;
  font-weight: 700;
}

#bio {
  align-self: stretch;
  color: rgba(0, 0, 0, 0.60);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
}

#社交媒体链接 {
  display: flex;
  padding: 0.3125rem 0.9375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid #616161;
}

#社交媒体图标 {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
}
#第一行右侧 {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
}

#第一行右侧卡片 {
  display: flex;
  padding: 1.5625rem 2.1875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.45);
  height: 80%
}

#第一行右侧卡片标题 {
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
}

#第一行右侧卡片内容列表 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3125rem;
}

#第二行 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
}

#第二行卡片 {
  display: flex;
  padding: 1.5625rem 2.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.55);
}

#第二行卡片文字 {
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
}
</style>
