# CloudBase 部署配置说明

## 问题诊断

如果遇到以下错误：
```
sh: 11: cd: can't cd to /root/cloudbase-workspace/F:\AI
```

**原因**：`PROJ_DIR`（项目目录）配置错误，使用了 Windows 绝对路径。

## 解决方案

### 在 CloudBase 控制台配置

1. **进入 CloudBase 部署配置**
   - 登录 [CloudBase 控制台](https://console.cloud.tencent.com/tcb)
   - 进入「云开发」→「云函数」或「静态网站托管」
   - 找到部署配置

2. **设置项目目录（PROJ_DIR）**

   根据你的代码仓库结构选择：

   **情况A：项目文件在仓库根目录**
   ```
   PROJ_DIR = （留空）或 .
   ```
   如果你的仓库结构是：
   ```
   仓库根目录/
   ├── package.json
   ├── vite.config.js
   ├── src/
   └── ...
   ```

   **情况B：项目在仓库的子目录中**
   ```
   PROJ_DIR = Timer
   ```
   如果你的仓库结构是：
   ```
   仓库根目录/
   └── Timer/
       ├── package.json
       ├── vite.config.js
       ├── src/
       └── ...
   ```

3. **其他配置项**

   - **NODE_JS_VERSION**: `18` 或 `20`
   - **FRAMEWORK_NAME**: `vue`（如果使用 Vue CLI）或留空（使用 Vite）
   - **BUILD_COMMAND**: `npm run build`
   - **OUTPUT_DIR**: `dist`

## 推荐配置（Vite 项目）

如果你的项目使用 Vite（本项目就是），推荐配置：

```
PROJ_DIR = （留空）
NODE_JS_VERSION = 18
FRAMEWORK_NAME = （留空，不使用框架脚手架）
BUILD_COMMAND = npm run build
OUTPUT_DIR = dist
```

## 验证配置

配置完成后，重新部署。如果还有问题，检查：

1. ✅ `PROJ_DIR` 使用的是相对路径，不是绝对路径
2. ✅ 路径中不包含 Windows 路径分隔符（`\`）
3. ✅ 路径中不包含特殊字符（如空格、中文等，如果必须使用，确保正确编码）
4. ✅ Node.js 版本设置为 18 或 20

## 如果使用静态网站托管

如果使用 CloudBase 的**静态网站托管**服务（推荐），则不需要配置这些构建参数：

1. 在本地构建：`npm run build`
2. 直接上传 `dist` 目录中的所有文件到静态网站托管
3. 无需配置 `PROJ_DIR`、`BUILD_COMMAND` 等

这种方式更简单，推荐使用！
