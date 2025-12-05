var rootSelector = 'div[class="e2v1tt3 css-1ayia3m-MarkdownContent"]';
var ProblemListParser = /** @class */ (function () {
  function ProblemListParser() {
    this.list = {};
    this.g = {};
  }
  ProblemListParser.prototype.parser = function (selector) {
    var _a;
    this.root = document.querySelector(selector);
    if (!this.root) {
      return;
    }
    var lastH1;
    var lastH2;
    var el = this.root.firstElementChild;
    var total = 0;
    while (el) {
      var nodeName = el.nodeName;
      var id = el.getAttribute("id");
      var title = void 0;
      var summary = void 0;
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
        if (
          ((_a = el.previousElementSibling) === null || _a === void 0
            ? void 0
            : _a.nodeName) == "H2"
        ) {
          lastH2 = lastH1;
        }
        var childs = this.parseList(el);
        for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
          var ch = childs_1[_i];
          var rep1 = repr0(lastH1);
          var rep2 = repr(lastH2);
          var seq = getSeq(lastH2);
          var title_1 = "".concat(seq).concat(rep1, " ").concat(rep2);
          this.list[title_1] = this.list[title_1]
            ? this.list[title_1].concat(ch)
            : [ch];
        }
        total += childs.length;
      }
      el = el.nextElementSibling;
    }
    console.log(JSON.stringify(this.list, null, 2));
    console.log("total: ".concat(total));
  };
  ProblemListParser.prototype.parseList = function (col) {
    var _a, _b;
    var childs = [];
    for (var i = 0; i < col.children.length; i++) {
      var el = col.children[i];
      if (!el) {
        break;
      }
      var title =
        ((_a = el.firstElementChild) === null || _a === void 0
          ? void 0
          : _a.textContent) || "";
      var src =
        ((_b = el.firstElementChild) === null || _b === void 0
          ? void 0
          : _b.getAttribute("href")) || "";
      childs = childs.concat({ title: title, src: src });
    }
    return childs;
  };
  return ProblemListParser;
})();
function repr0(s) {
  return s.replace(/[一二三四五六七八九十]+、/g, "");
}
function repr(s) {
  return s.replace(/\s+§\d+.\d+\s+/g, "");
}
function getSeq(s) {
  var a = s.match(/§\d+.\d+/g);
  return a ? a[0] : "";
}
(function () {
  setTimeout(function () {
    return new ProblemListParser().parser(rootSelector);
  }, 500);
})();
