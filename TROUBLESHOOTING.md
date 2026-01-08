# 故障排查指南

## 问题：部署成功但页面显示空白

### 原因分析

从部署日志可以看到：
- 文件部署到了 `/victorian-timer/` 子目录
- 部署命令：`tcb hosting deploy ./dist /victorian-timer -e zb-test0602-5gu7hr8m6180fbf7`

### 解决方案

#### 方案一：使用正确的访问 URL（推荐）

访问地址应该是：
```
https://zb-test0602-5gu7hr8m6180fbf7-1393649244.tcloudbaseapp.com/victorian-timer/
```

**注意**：URL 末尾必须包含 `/victorian-timer/` 路径！

#### 方案二：部署到根目录

如果你希望直接访问域名根路径就能看到页面，需要：

1. **修改 CloudBase 部署配置**
   - 将 `APP_PATH` 或部署路径改为 `/`（根目录）
   - 或者留空

2. **修改 vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/',  // 改为根路径
     // ... 其他配置
   })
   ```

3. **重新构建和部署**

#### 方案三：配置默认首页重定向

在 CloudBase 控制台的静态网站托管设置中，配置默认首页重定向到 `/victorian-timer/`

### 验证步骤

1. **检查浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 标签页是否有错误
   - 查看 Network 标签页，检查资源是否加载成功

2. **检查资源路径**
   - 查看页面源代码（右键 → 查看页面源代码）
   - 确认 CSS 和 JS 文件的路径是否正确
   - 应该是：`/victorian-timer/assets/xxx.css` 和 `/victorian-timer/assets/xxx.js`

3. **测试访问**
   - 直接访问：`https://你的域名/victorian-timer/`
   - 如果还是空白，检查浏览器控制台的错误信息

### 常见错误

#### 错误1：404 Not Found
**原因**：资源路径不正确
**解决**：确保 `vite.config.js` 中的 `base` 配置与部署路径一致

#### 错误2：CORS 错误
**原因**：跨域问题
**解决**：CloudBase 静态网站托管通常不会有此问题，如遇到请联系技术支持

#### 错误3：资源加载失败
**原因**：路径配置错误
**解决**：
1. 检查 `vite.config.js` 的 `base` 配置
2. 重新构建：`npm run build`
3. 重新部署

### 快速修复命令

如果使用根目录部署：
```bash
# 1. 修改 vite.config.js，将 base 改为 '/'
# 2. 重新构建
npm run build
# 3. 重新部署（在 CloudBase 控制台或使用 CLI）
```

### 推荐配置

**推荐使用根目录部署**（更简单）：

1. `vite.config.js`:
   ```javascript
   base: '/'
   ```

2. CloudBase 部署路径：`/` 或留空

3. 访问地址：直接访问域名即可
