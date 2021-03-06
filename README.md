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

### 删除某次提交历史 `git revert`
格式:`git revert 版本号`
> `git revert 版本号` 后，会进入编辑模式。在该模式下输入`:wq`就会退出编辑模式

### 创建分支 `git checkout -b 分支名称`
格式: `git checkout -b 分支名称`
1. `git branch` 列出当前的仓库的所有分支
2. `git branch -v` 列表当前仓库的所有分支及详情
3. `git checkout -b dev` 创建一个新的 `dev` 分支
4. `git branch -v` 再次查看所有的分支。这时会发现除了 `master` 分支。多出一个 `dev` 分支。且 `dev` 前面有个 `*` 代表用户当前所在的分支为 `dev` 分支。如果此时去提交，则所有的提交都是在 `dev` 分支上进行。不会影响到主分支 `master`

### 合并分支 `git merge`
格式: `git merge 被合并的分支名`

要合并之前，先要从 `dev` 分支切换回 `master` 分支。

切换分支所用命令为: **`git checkout master`**.经过此命令，用户当前所在分支就会回到 `master` 主分支。可通过 `git branch -v` 命令查看哪个分支前有 `*` 号。

此时执行 `git merge dev` 表示将 `dev` 分支合并到 用户当前所在的分支 即 `master`. 
未 `git merger dev` 之前，如果 `dev` 分支进行了提交，此时利用 `git log` 查看 `dev` 分支的提交历史。再通过 `git checkout master` 切回 `master` 分支。同样用 `git log` 命令查看 `master` 分支的提交历史。经过对比会发现 `master` 分支的提交历史比 `dev` 分支要少。
`git merge dev` 之后，即把 `dev` 分支合并到 `master` 分支之后。再通过 `git log` 命令去查看 `dev` 和 `master` 分支的提交历史。会发现他们的提交历史已经同步了.

### 多人协同时， 解决提交冲突
假设一个项目有多人协同开发：老王和小李。老王在小李提交前，往远端仓库的 master 分支提交过一次代码了。此时小李再提交代码给远端仓库的时候。就会发生冲突。为了避免冲突，我们通常的操作为：
1. 用 `git pull` 命令把远程仓库的代码(即老王提交过后的代码)拉取到小李的本地。
> `git pull` 命令等同于 `git pull origin` 。因为 `git` 会默认拉取名为 `origin` 仓库的代码。
`git pull` = `git fetch` + `git merge origin/master（如果和我们发生冲突的远端仓库不是 origin 仓库，分支也不是 master 分支，比如仓库名为 coding(仓库名可通过 git remote add 命令添加), 远端仓库的分支为 dev 分支， 那么这里就应该是 git merge coding/dev）`;
