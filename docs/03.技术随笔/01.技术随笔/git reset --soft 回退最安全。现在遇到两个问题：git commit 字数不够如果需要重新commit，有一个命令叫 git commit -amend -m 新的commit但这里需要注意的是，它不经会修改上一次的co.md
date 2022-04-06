---
title: git commit
date: 2021-10-04 11:40:27
permalink: /pages/7ed0bf/
categories:
  - 技术随笔
  - 技术随笔
tags:
  - git
---
1. git reset --soft 回退最安全。

2. 现在遇到两个问题：git commit 字数不够

   如果需要重新commit，有一个命令叫 git commit -amend -m "新的commit"

   但这里需要注意的是，它不经会修改上一次的commit命令，还会将目前已经在暂存区的内容给合并到最新的commit提交中，这点有点坑。