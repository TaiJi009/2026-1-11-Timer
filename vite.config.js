import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署配置
// 如果仓库名为 username.github.io，base 应为 '/'
// 如果仓库名为其他名称（如 timer），base 应为 '/timer/'
function getBasePath() {
  // 在 GitHub Actions 环境中
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    // 如果仓库名以 .github.io 结尾，说明是用户主页仓库，使用根路径
    if (repoName.endsWith('.github.io')) {
      return '/'
    }
    // 否则使用仓库名作为子路径
    return `/${repoName}/`
  }
  // 本地开发环境，默认使用根路径
  return '/'
}

export default defineConfig({
  base: getBasePath(),
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
