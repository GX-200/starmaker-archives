@echo off
echo ============================================
echo StarMaker Archives 快速部署脚本
echo ============================================
echo.

echo 1. 检查构建状态...
if exist "dist\" (
    echo ✓ 构建目录存在
) else (
    echo ✗ 构建目录不存在，正在构建...
    npm run build
)

echo.
echo 2. 验证图片文件...
dir dist\images | find /c ".png" > temp.txt
set /p filecount=<temp.txt
del temp.txt
echo ✓ 找到 %filecount% 个图片文件

echo.
echo 3. 创建部署包...
if exist "deployment-package.zip" (
    del deployment-package.zip
)
powershell "Compress-Archive -Path 'dist\*' -DestinationPath 'deployment-package.zip' -Force"

echo.
echo 4. 部署包信息...
for %%F in ("deployment-package.zip") do set size=%%~zF
set /a sizeMB=%size%/1024/1024
echo ✓ 部署包大小: %sizeMB% MB

echo.
echo ============================================
echo 部署准备完成！
echo ============================================
echo.
echo 下一步操作：
echo 1. 访问 https://app.netlify.com/drop
echo 2. 将 deployment-package.zip 文件拖放到上传区域
echo 3. 等待部署完成
echo 4. 访问提供的URL验证图片显示
echo.
echo 或者使用 GitHub Desktop 推送代码：
echo 1. 打开 GitHub Desktop
echo 2. 提交所有更改
echo 3. 推送到 GitHub
echo 4. Netlify 将自动重新部署
echo.
pause
