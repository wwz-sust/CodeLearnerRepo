# git命令

### git reset命令,从本地仓库回退

1. git reset --soft 撤销提交到本地仓库的文件，但是保存工作区和暂存区的修改
2. git reset --hard 撤销提交到仓库的文件，删除工作区和暂存区的修改
3. git reset --mixed 撤销提交到仓库的文件，删除暂存区的修改，保存工作区的修改

### git diff命令

git diff命令默认不带参数时表示的是，对比工作区和暂存区的内容

### git branch命令

1. 创建分支`git branch dev`
2. 切换分支`git switch dev/main`
3. 查看分支`git branch -r`
4. 创建并进入分支：`git checkout -b bbs`，这条命令相当于两天命令，git branch bbs, git checout bbs
5. 删除分支： `git branch -d bbs`
6. 合并分支：git switch main -> `git merge bbs`

### alias别名，git命令可以起别名
1. 要编辑git的配置文件.gitconfig，通常位于C:\Users\<你的用户名>\.gitconfig
2. 编辑.gitconfig文件，如下：
```txt
[alias]
	a = add
	c = commit
	l = log
	s = status
```

