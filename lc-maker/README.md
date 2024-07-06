# 灵茶山题单制作工具
1. 从力扣页面 复制Cookie 替换 hds.txt 中的 Cookie 值
2. 安装依赖：pip install -r requirements.txt (如抛出异常 "No module named 'pip'", 可先执行 python -m ensurepip)
3. 执行：python main.py

## 使用灵茶山艾府的题单生成对应网页
1. 安装依赖：pip install -r requirements.txt (如抛出异常 "No module named 'pip'", 可先执行 python -m ensurepip)
2. 执行：python 0x3f_discuss.py xxxx > somename.ts
   - 此处xxxx为尾uuid, 例如对于讨论页面https://leetcode.cn/circle/discuss/dHn9Vk/，dHn9Vk是这个讨论页面的uuid
3. 将这个ts文件放进`components/containers/List/data`中, 并在`components/containers/List/`下创建对应的文件夹以及`index.tsx`文件, 并在`app/(lc)/list`下创建对应的文件以启用