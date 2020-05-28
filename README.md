# git的常用命令

### 创建一个 git 仓库的基本步骤

``` javascript
git init
git add README.md
git commit -m "first-commit"
// 这里 git@github.com:MR-Robot-Lee/git-common.git 仓库地址可以替换成你个人的 github 项目仓库地址
git remote add origin git@github.com:MR-Robot-Lee/git-common.git 
// 把已有的项目推送到上面的 github 项目仓库中
git push -u origin master
```

### 版本回滚 `git reset`
格式: `git reset [模式] 版本号`

共有三种模式，其解释和区别如下：
- --mixed （默认模式）即 `git reset --mixed 版本号` 或 `git reset 版本号` 是一个意思。
> 它会把提交回滚到指定版本号未添加到缓存区之前的状态，即回滚到指定版本号还未 `git add` 之前的状态
- --soft (软回滚) 即 `git reset --soft 版本号` .
> 它会把提交历史回滚到指定版本号未 `git commit` 之前的状态，即已提交到缓存区，但还未提交到归档区的状态
- --hard （硬回滚） 即 `git reset --hard 版本号`.
> 它会把提交历史向前回滚，假设提交历史`B`是在提交历史`A`之后，现在我想回到提交历史`A`，我可能会如下操作
```
git reset A的版本号
```
> 现在提交历史回滚到了`A`，当我再想回到提交历史`B`的时候，我们可以通过 `git reflog` 查看提交历史 `B` 的版本号。然后`git reset B的版本号`就会回滚到B的提交历史，达到了向未来某个版本回滚的功能。

### 查看提交历史
命令名称|功能概述|备注
--:|:--|:--
git log | 查看过往的提交历史,查看不到 `git reset 版本号` 回退过的历史记录 | git log --pretty=oneline `git log` 后面可以跟参数来实现版本历史的格式化
git reflog | 查看过往和通过 `git reset` 回滚的历史。配合 `git reset` 功能可以实现版本号向已回滚的版本再次滚回 | 后面是否可以跟参数，待完善

