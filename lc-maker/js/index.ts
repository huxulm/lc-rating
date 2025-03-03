const rootSelector = 'div[class="e2v1tt3 css-1ayia3m-MarkdownContent"]';

interface CategoryItem {
  title: string;
  src?: string;
  children?: CategoryItem[];
}
class ProblemListParser {
  list: Record<string, CategoryItem[]> = {};
  g: Record<string, string> = {};
  root: HTMLDivElement | null = null;

  parser(selector: string) {
    this.root = document.querySelector<HTMLDivElement>(selector);
    if (!this.root) {
      return;
    }
    let lastH1: string = "";
    let lastH2: string = "";
    let el = this.root.firstElementChild;
    let total = 0;
    while (el) {
      let nodeName = el.nodeName;
      let id = el.getAttribute("id");
      let title;
      let summary;
      if (id) {
        title = el.textContent;
      }
      if (nodeName == "H2") {
        lastH1 = el.textContent || "";
        this.g[lastH1] = "";
      }
      if (nodeName == "H3") {
        lastH2 = el.textContent || "";
        this.g[lastH2] = lastH1;
      }
      if (nodeName == "P") {
        summary = el.innerHTML;
      }
      if (nodeName == "UL") {
        if (el.previousElementSibling?.nodeName == "H2") {
          lastH2 = lastH1;
        }
        let childs = this.parseList(el);
        for (let ch of childs) {
          let rep1 = repr0(lastH1);
          let rep2 = repr(lastH2);
          let seq = getSeq(lastH2);
          let title = `${seq}${rep1} ${rep2}`;
          this.list[title] = this.list[title]
            ? this.list[title].concat(ch)
            : [ch];
        }
        total += childs.length;
      }
      el = el.nextElementSibling;
    }
  }

  parseList(col: Element) {
    let childs: CategoryItem[] = [];
    for (let i = 0; i < col.children.length; i++) {
      let el = col.children[i];
      if (!el) {
        break;
      }
      let title = el.firstElementChild?.textContent || "";
      let src = el.firstElementChild?.getAttribute("href") || "";
      childs = childs.concat({ title, src });
    }
    return childs;
  }
}
function repr0(s: string) {
  return s.replace(/[一二三四五六七八九十]+、/g, "");
}

function repr(s: string) {
  return s.replace(/\s+§\d+.\d+\s+/g, "");
}

function getSeq(s: string) {
  let a = s.match(/§\d+.\d+/g);
  return a ? a[0] : "";
}

(function () {
  setTimeout(() => new ProblemListParser().parser(rootSelector), 500);
})();
