import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 确保 DOM 加载完成后再挂载
function initApp() {
  const appElement = document.getElementById('app')
  if (!appElement) {
    console.error('App element not found')
    return
  }

  try {
    const app = createApp(App)
    app.mount('#app')
    console.log('Vue app mounted successfully')
  } catch (error) {
    console.error('Failed to mount Vue app:', error)
    appElement.innerHTML = `
      <div style="padding: 20px; color: #d4af37; text-align: center; font-family: Arial, sans-serif;">
        <h2>应用加载失败</h2>
        <p>错误信息: ${error.message}</p>
        <p>请刷新页面重试</p>
      </div>
    `
  }
}

// 使用 DOMContentLoaded 确保 DOM 准备就绪
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
