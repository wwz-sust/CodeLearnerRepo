- PowerShell中删除文件夹及其内部所有文件
```shell
rm -r -fo C:\example
# -fo` 是 `-Force` 的简写，表示强制删除，即使是只读或隐藏的文件也会删除
```
- PowerShell中新建一个文件
```powershell
type 1.txt
```
- CMD中删除文件夹及其所有内容文件
```shell
rd /s /q C:\example
# /s 参数表示删除指定文件夹及其所有子文件夹和文件。 
# /q 参数表示静默模式，不提示确认。
```
- CMD中新建一个文件
```shell
type nul > 1.txt
echo "hello" > 1.txt
# >  覆盖内容
# >> 追加内容
```
- 查看文本内容
1. 在 cmd 中，使用 `type` 和 `more` 命令来查看文本文件内容。 type C:\example.txt
2. 在 PowerShell 中，使用 `Get-Content`、`cat` 和 `more` 命令来查看文本文件内容。

- 使用scp上传文件
1. 需要输入密码
`scp -r "D:/3d/www" root@xx.xx.xxx.xxx:/root/cmdtest`
2. 不需要输入密码（前提配置好ssh登录）
`scp -r "D:/3d/www" root@aliyun:/root/cmdtest`