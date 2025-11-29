# 手动部署指南 - StarMaker Archives

由于Git推送遇到网络连接问题，这里提供手动部署到Netlify的步骤：

## 问题状态
- ✅ 所有图片文件名不匹配问题已修复
- ✅ 项目构建成功
- ✅ 所有图片文件已正确包含在dist目录中
- ❌ Git推送遇到网络连接问题

## 手动部署步骤

### 方法1：通过Netlify Dashboard手动部署

1. **登录Netlify**
   - 访问 https://app.netlify.com/
   - 登录你的GitHub账户

2. **选择手动部署**
   - 在Netlify仪表板中，点击"Add new site" → "Deploy manually"
   - 或者直接访问：https://app.netlify.com/drop

3. **上传dist文件夹**
   - 将整个`dist`文件夹拖放到上传区域
   - 或者点击"Browse"选择dist文件夹

4. **等待部署完成**
   - Netlify会自动处理部署
   - 部署完成后会提供一个临时URL

### 方法2：通过GitHub Desktop（如果网络问题持续）

1. **使用GitHub Desktop**
   - 下载并安装GitHub Desktop
   - 克隆你的仓库：https://github.com/LAWLESS-99999/starmaker-archives
   - 提交所有更改
   - 使用GitHub Desktop的推送功能

2. **Netlify自动部署**
   - 一旦代码推送到GitHub，Netlify会自动重新部署

## 验证部署

部署完成后，请检查以下内容：

1. **网站功能**
   - 访问你的Netlify URL
   - 确认网站正常加载

2. **图片显示**
   - 检查所有角色图片是否正确显示
   - 验证所有游戏示意图是否可见

3. **修复确认**
   - 确认以下图片文件名已正确修复：
     - "人物属性参照图.png"（原基础攻略.png）
     - "节日示意图.png"（原节日.png）
     - "大师.png"（原NYXARA.png）
     - "塞莱斯.png"（原塞莱斯特.png）

## 本地验证

本地构建已成功完成，所有图片文件确认包含在dist目录中：
- 54个图片文件全部存在
- 构建过程无错误
- 本地预览正常

## 后续维护

一旦部署成功，后续更新可以通过以下方式：
1. 修复Git网络连接问题后正常推送
2. 或者继续使用手动部署方法

## 技术支持

如果部署过程中遇到任何问题，请检查：
- Netlify构建日志中的错误信息
- 浏览器开发者工具中的网络请求
- 确保所有图片路径使用相对路径"./images/"
