# 灵茶山题单制作工具
1. 从力扣页面 复制Cookie 替换 hds.txt 中的 Cookie 值
2. 安装依赖：`pip install -r requirements.txt` (如抛出异常 "No module named 'pip'", 可先执行 python -m ensurepip)
3. 执行：`python main.py`

## 使用灵茶山艾府的题单生成对应网页

1. 安装依赖：`pip install -r requirements.txt` (如抛出异常 "No module named 'pip'", 可先执行 python -m ensurepip)
2. 执行：`python 0x3f_discuss.py [--uuid xxxx] [--o yourpath/yourfilename] [--f path/to/discussionlist]`
    - 此处xxxx为尾uuid, 例如对于讨论页面https://leetcode-cn.com/circle/discuss/123456/，此处123456是这个讨论页面的uuid
    - `yourpath/yourfilename`为输出文件路径, 默认输出在当前目录下
    - `path/to/discussionlist`为讨论列表文件路径，该文件遵守以下格式:
    - ```
        uuid1 output/path/for/uuid1
        uuid2 output/path/for/uuid2
        ...
      ```
