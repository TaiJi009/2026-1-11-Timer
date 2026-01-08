# 维多利亚风格实时时间器

一个优雅的维多利亚风格实时时钟网页应用，使用Vue 3构建，专为腾讯云服务器部署设计。

## 功能特点

- ⏰ 实时显示当前时间（时:分:秒）
- 📅 显示当前日期和星期
- 🎨 精美的维多利亚时代风格设计
  - 复古装饰边框
  - 金色暖色调配色
  - 古典字体（Cinzel & Playfair Display）
  - 优雅的阴影和光效
- 📱 响应式设计，支持移动端
- 🚀 优化的生产构建

## 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 下一代前端构建工具
- **CSS3** - 现代样式和动画

## 快速开始

### 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

## 部署到腾讯云

### 方式一：使用Docker部署

1. 构建Docker镜像：
```bash
docker build -t victorian-timer .
```

2. 运行容器：
```bash
docker run -d -p 80:80 victorian-timer
```

3. 在腾讯云服务器上：
   - 上传Dockerfile和相关文件
   - 执行上述命令
   - 配置安全组开放80端口

### 方式二：直接部署静态文件

1. 在本地构建：
```bash
npm run build
```

2. 将 `dist` 目录上传到腾讯云服务器

3. 使用Nginx配置：
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 方式三：使用腾讯云静态网站托管

1. 构建项目：
```bash
npm run build
```

2. 登录腾讯云控制台，进入静态网站托管服务

3. 上传 `dist` 目录中的所有文件

4. 配置自定义域名（可选）

## 项目结构

```
Timer/
├── src/
│   ├── App.vue          # 主组件
│   ├── main.js          # 入口文件
│   └── style.css        # 样式文件
├── index.html           # HTML模板
├── package.json         # 项目配置
├── vite.config.js       # Vite配置
├── Dockerfile           # Docker配置
├── nginx.conf           # Nginx配置
└── README.md           # 项目说明
```

## 自定义配置

### 修改端口

在 `vite.config.js` 中修改：
```javascript
server: {
  port: 3000  // 修改为你想要的端口
}
```

### 修改时区

在 `src/App.vue` 中可以调整时区显示，当前默认为CST（中国标准时间）。

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License

## 作者

Created with ❤️ for Victorian Era enthusiasts