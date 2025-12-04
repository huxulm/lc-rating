from markdown_it import MarkdownIt
from markdown_it.tree import SyntaxTreeNode

md = (
    MarkdownIt('commonmark', {'breaks': True, 'html': True})
    .enable('table')
)

if __name__ == "__main__":
    print(md.renderer.rules)

    with open("./test/0viNMK.txt", encoding="utf-8") as f:
        text = f.read()
        tokens = md.parse(text)
    node = SyntaxTreeNode(tokens)
    print(node.pretty(indent=2, show_text=True))
