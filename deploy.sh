#!/bin/sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 发布到 ali CDN
npm run aliOss

# 进入生成的文件夹
cd ./docs/.vuepress/dist

# GITHUB_TOKEN="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"

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:wangjs-jacky/jacky-blog-vuepress.git
else
  msg='来自github actions的自动部署'
  githubUrl="https://wangjs-jacky:${GITHUB_TOKEN}@github.com/wangjs-jacky/jacky-blog-vuepress.git"
  git config --global user.name "wangjs-jacky"
  git config --global user.email "2409277719@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github


cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist

echo 'deploy.sh脚本执行结束'