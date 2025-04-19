# dev

```sh
# 创建 tag
git tag v0.0.1
# 推送 tag
git push origin v0.0.1
git push mirror v0.0.1
# 删除远程分支
git push origin --delete gh-pages
git push mirror --delete gh-pages
# 删除远程 tag
git push origin :refs/tags/v0.0.1
git push mirror :refs/tags/v0.0.1
```
