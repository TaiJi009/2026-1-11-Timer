<template>
  <div class="app-container">
    <div class="victorian-frame">
      <div class="ornament-top">
        <div class="ornament-left"></div>
        <div class="ornament-center">⏰</div>
        <div class="ornament-right"></div>
      </div>
      
      <div class="clock-container">
        <div class="clock-face">
          <div class="time-display">
            <div class="time-main">{{ formattedTime }}</div>
            <div class="date-display">{{ formattedDate }}</div>
          </div>
          
          <div class="clock-details">
            <div class="detail-item">
              <span class="detail-label">星期</span>
              <span class="detail-value">{{ dayOfWeek }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">时区</span>
              <span class="detail-value">CST</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="ornament-bottom">
        <div class="ornament-left"></div>
        <div class="ornament-center">维多利亚时代</div>
        <div class="ornament-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentTime = ref(new Date())
let timer = null

const updateTime = () => {
  currentTime.value = new Date()
}

const formatTime = (date) => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}年${month}月${day}日`
}

const dayOfWeekNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

const formattedTime = computed(() => formatTime(currentTime.value))
const formattedDate = computed(() => formatDate(currentTime.value))
const dayOfWeek = computed(() => dayOfWeekNames[currentTime.value.getDay()])

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
