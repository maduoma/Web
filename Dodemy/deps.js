!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 17));
})([
  ,
  ,
  ,
  ,
  function (t, e, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (e, n) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";
      var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        u = o.flat
          ? function (t) {
              return o.flat.call(t);
            }
          : function (t) {
              return o.concat.apply([], t);
            },
        l = o.push,
        c = o.indexOf,
        h = {},
        f = h.toString,
        d = h.hasOwnProperty,
        p = d.toString,
        g = p.call(Object),
        m = {},
        v = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function (t) {
          return null != t && t === t.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(t, e, n) {
        var i,
          r,
          o = (n = n || b).createElement("script");
        if (((o.text = t), e))
          for (i in x)
            (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function T(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? h[f.call(t)] || "object"
          : typeof t;
      }
      var C = function (t, e) {
        return new C.fn.init(t, e);
      };
      function S(t) {
        var e = !!t && "length" in t && t.length,
          n = T(t);
        return (
          !v(t) &&
          !y(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (C.fn = C.prototype = {
        jquery: "3.5.1",
        constructor: C,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (t) {
          return null == t
            ? a.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = C.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return C.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            C.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            C.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            C.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: o.sort,
        splice: o.splice,
      }),
        (C.extend = C.fn.extend = function () {
          var t,
            e,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || v(s) || (s = {}),
              a === u && ((s = this), a--);
            a < u;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (i = t[e]),
                  "__proto__" !== e &&
                    s !== i &&
                    (l && i && (C.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((n = s[e]),
                        (o =
                          r && !Array.isArray(n)
                            ? []
                            : r || C.isPlainObject(n)
                            ? n
                            : {}),
                        (r = !1),
                        (s[e] = C.extend(l, o, i)))
                      : void 0 !== i && (s[e] = i));
          return s;
        }),
        C.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, n;
            return (
              !(!t || "[object Object]" !== f.call(t)) &&
              (!(e = s(t)) ||
                ("function" ==
                  typeof (n = d.call(e, "constructor") && e.constructor) &&
                  p.call(n) === g))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, n) {
            w(t, { nonce: e && e.nonce }, n);
          },
          each: function (t, e) {
            var n,
              i = 0;
            if (S(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                (S(Object(t))
                  ? C.merge(n, "string" == typeof t ? [t] : t)
                  : l.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : c.call(e, t, n);
          },
          merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
              t[r++] = e[i];
            return (t.length = r), t;
          },
          grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
              !e(t[r], r) !== s && i.push(t[r]);
            return i;
          },
          map: function (t, e, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (S(t))
              for (i = t.length; o < i; o++)
                null != (r = e(t[o], o, n)) && s.push(r);
            else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return u(s);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            h["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var k =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            g,
            m,
            v,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = t.document,
            T = 0,
            C = 0,
            S = ut(),
            k = ut(),
            E = ut(),
            $ = ut(),
            _ = function (t, e) {
              return t === e && (h = !0), 0;
            },
            A = {}.hasOwnProperty,
            D = [],
            N = D.pop,
            I = D.push,
            j = D.push,
            O = D.slice,
            L = function (t, e) {
              for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            H =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              q +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            P =
              "\\[" +
              q +
              "*(" +
              H +
              ")(?:" +
              q +
              "*([*^$|!~]?=)" +
              q +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              H +
              "))|)" +
              q +
              "*\\]",
            F =
              ":(" +
              H +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              P +
              ")*)|.*)\\)|)",
            z = new RegExp(q + "+", "g"),
            B = new RegExp(
              "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
              "g"
            ),
            M = new RegExp("^" + q + "*," + q + "*"),
            U = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            W = new RegExp(q + "|>"),
            V = new RegExp(F),
            K = new RegExp("^" + H + "$"),
            Q = {
              ID: new RegExp("^#(" + H + ")"),
              CLASS: new RegExp("^\\.(" + H + ")"),
              TAG: new RegExp("^(" + H + "|[*])"),
              ATTR: new RegExp("^" + P),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  q +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  q +
                  "*(?:([+-]|)" +
                  q +
                  "*(\\d+)|))" +
                  q +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  q +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  q +
                  "*((?:-\\d)?\\d*)" +
                  q +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            X = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            nt = function (t, e) {
              var n = "0x" + t.slice(1) - 65536;
              return (
                e ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function (t, e) {
              return e
                ? "\0" === t
                  ? "ï¿½"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            ot = function () {
              f();
            },
            st = xt(
              function (t) {
                return (
                  !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            j.apply((D = O.call(w.childNodes)), w.childNodes),
              D[w.childNodes.length].nodeType;
          } catch (t) {
            j = {
              apply: D.length
                ? function (t, e) {
                    I.apply(t, O.call(e));
                  }
                : function (t, e) {
                    for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                    t.length = n - 1;
                  },
            };
          }
          function at(t, e, i, r) {
            var o,
              a,
              l,
              c,
              h,
              p,
              v,
              y = e && e.ownerDocument,
              w = e ? e.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
            )
              return i;
            if (!r && (f(e), (e = e || d), g)) {
              if (11 !== w && (h = Z.exec(t)))
                if ((o = h[1])) {
                  if (9 === w) {
                    if (!(l = e.getElementById(o))) return i;
                    if (l.id === o) return i.push(l), i;
                  } else if (
                    y &&
                    (l = y.getElementById(o)) &&
                    b(e, l) &&
                    l.id === o
                  )
                    return i.push(l), i;
                } else {
                  if (h[2]) return j.apply(i, e.getElementsByTagName(t)), i;
                  if (
                    (o = h[3]) &&
                    n.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return j.apply(i, e.getElementsByClassName(o)), i;
                }
              if (
                n.qsa &&
                !$[t + " "] &&
                (!m || !m.test(t)) &&
                (1 !== w || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((v = t), (y = e), 1 === w && (W.test(t) || U.test(t)))) {
                  for (
                    ((y = (tt.test(t) && vt(e.parentNode)) || e) === e &&
                      n.scope) ||
                      ((c = e.getAttribute("id"))
                        ? (c = c.replace(it, rt))
                        : e.setAttribute("id", (c = x))),
                      a = (p = s(t)).length;
                    a--;

                  )
                    p[a] = (c ? "#" + c : ":scope") + " " + bt(p[a]);
                  v = p.join(",");
                }
                try {
                  return j.apply(i, y.querySelectorAll(v)), i;
                } catch (e) {
                  $(t, !0);
                } finally {
                  c === x && e.removeAttribute("id");
                }
              }
            }
            return u(t.replace(B, "$1"), e, i, r);
          }
          function ut() {
            var t = [];
            return function e(n, r) {
              return (
                t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                (e[n + " "] = r)
              );
            };
          }
          function lt(t) {
            return (t[x] = !0), t;
          }
          function ct(t) {
            var e = d.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ht(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
              i.attrHandle[n[r]] = e;
          }
          function ft(t, e) {
            var n = e && t,
              i =
                n &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
          }
          function dt(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function pt(t) {
            return function (e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t;
            };
          }
          function gt(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function mt(t) {
            return lt(function (e) {
              return (
                (e = +e),
                lt(function (n, i) {
                  for (var r, o = t([], n.length, e), s = o.length; s--; )
                    n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((n = at.support = {}),
          (o = at.isXML = function (t) {
            var e = t.namespaceURI,
              n = (t.ownerDocument || t).documentElement;
            return !X.test(e || (n && n.nodeName) || "HTML");
          }),
          (f = at.setDocument = function (t) {
            var e,
              r,
              s = t ? t.ownerDocument || t : w;
            return s != d && 9 === s.nodeType && s.documentElement
              ? ((p = (d = s).documentElement),
                (g = !o(d)),
                w != d &&
                  (r = d.defaultView) &&
                  r.top !== r &&
                  (r.addEventListener
                    ? r.addEventListener("unload", ot, !1)
                    : r.attachEvent && r.attachEvent("onunload", ot)),
                (n.scope = ct(function (t) {
                  return (
                    p.appendChild(t).appendChild(d.createElement("div")),
                    void 0 !== t.querySelectorAll &&
                      !t.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ct(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (n.getElementsByTagName = ct(function (t) {
                  return (
                    t.appendChild(d.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
                (n.getById = ct(function (t) {
                  return (
                    (p.appendChild(t).id = x),
                    !d.getElementsByName || !d.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function (t) {
                      var e = t.replace(et, nt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (i.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var n = e.getElementById(t);
                        return n ? [n] : [];
                      }
                    }))
                  : ((i.filter.ID = function (t) {
                      var e = t.replace(et, nt);
                      return function (t) {
                        var n =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    }),
                    (i.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && g) {
                        var n,
                          i,
                          r,
                          o = e.getElementById(t);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                          for (
                            r = e.getElementsByName(t), i = 0;
                            (o = r[i++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : n.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function (t, e) {
                    if (void 0 !== e.getElementsByClassName && g)
                      return e.getElementsByClassName(t);
                  }),
                (v = []),
                (m = []),
                (n.qsa = Y.test(d.querySelectorAll)) &&
                  (ct(function (t) {
                    var e;
                    (p.appendChild(t).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + q + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        m.push("\\[" + q + "*(?:value|" + R + ")"),
                      t.querySelectorAll("[id~=" + x + "-]").length ||
                        m.push("~="),
                      (e = d.createElement("input")).setAttribute("name", ""),
                      t.appendChild(e),
                      t.querySelectorAll("[name='']").length ||
                        m.push(
                          "\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"
                        ),
                      t.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      t.querySelectorAll("a#" + x + "+*").length ||
                        m.push(".#.+[+~]"),
                      t.querySelectorAll("\\\f"),
                      m.push("[\\r\\n\\f]");
                  }),
                  ct(function (t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = d.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        m.push("name" + q + "*[*^$|!~]?="),
                      2 !== t.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (p.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (n.matchesSelector = Y.test(
                  (y =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  ct(function (t) {
                    (n.disconnectedMatch = y.call(t, "*")),
                      y.call(t, "[s!='']:x"),
                      v.push("!=", F);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (e = Y.test(p.compareDocumentPosition)),
                (b =
                  e || Y.test(p.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (_ = e
                  ? function (t, e) {
                      if (t === e) return (h = !0), 0;
                      var i =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (t.ownerDocument || t) == (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!n.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t == d || (t.ownerDocument == w && b(w, t))
                            ? -1
                            : e == d || (e.ownerDocument == w && b(w, e))
                            ? 1
                            : c
                            ? L(c, t) - L(c, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (h = !0), 0;
                      var n,
                        i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                      if (!r || !o)
                        return t == d
                          ? -1
                          : e == d
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : c
                          ? L(c, t) - L(c, e)
                          : 0;
                      if (r === o) return ft(t, e);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (; s[i] === a[i]; ) i++;
                      return i
                        ? ft(s[i], a[i])
                        : s[i] == w
                        ? -1
                        : a[i] == w
                        ? 1
                        : 0;
                    }),
                d)
              : d;
          }),
          (at.matches = function (t, e) {
            return at(t, null, null, e);
          }),
          (at.matchesSelector = function (t, e) {
            if (
              (f(t),
              n.matchesSelector &&
                g &&
                !$[e + " "] &&
                (!v || !v.test(e)) &&
                (!m || !m.test(e)))
            )
              try {
                var i = y.call(t, e);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return i;
              } catch (t) {
                $(e, !0);
              }
            return at(e, d, null, [t]).length > 0;
          }),
          (at.contains = function (t, e) {
            return (t.ownerDocument || t) != d && f(t), b(t, e);
          }),
          (at.attr = function (t, e) {
            (t.ownerDocument || t) != d && f(t);
            var r = i.attrHandle[e.toLowerCase()],
              o =
                r && A.call(i.attrHandle, e.toLowerCase())
                  ? r(t, e, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? t.getAttribute(e)
              : (o = t.getAttributeNode(e)) && o.specified
              ? o.value
              : null;
          }),
          (at.escape = function (t) {
            return (t + "").replace(it, rt);
          }),
          (at.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (at.uniqueSort = function (t) {
            var e,
              i = [],
              r = 0,
              o = 0;
            if (
              ((h = !n.detectDuplicates),
              (c = !n.sortStable && t.slice(0)),
              t.sort(_),
              h)
            ) {
              for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
              for (; r--; ) t.splice(i[r], 1);
            }
            return (c = null), t;
          }),
          (r = at.getText = function (t) {
            var e,
              n = "",
              i = 0,
              o = t.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
              } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += r(e);
            return n;
          }),
          ((i = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(et, nt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || at.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && at.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return Q.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        V.test(n) &&
                        (e = s(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(et, nt).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = S[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) &&
                    S(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, e, n) {
                return function (i) {
                  var r = at.attr(i, t);
                  return null == r
                    ? "!=" === e
                    : !e ||
                        ((r += ""),
                        "=" === e
                          ? r === n
                          : "!=" === e
                          ? r !== n
                          : "^=" === e
                          ? n && 0 === r.indexOf(n)
                          : "*=" === e
                          ? n && r.indexOf(n) > -1
                          : "$=" === e
                          ? n && r.slice(-n.length) === n
                          : "~=" === e
                          ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1
                          : "|=" === e &&
                            (r === n || r.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (t, e, n, i, r) {
                var o = "nth" !== t.slice(0, 3),
                  s = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === i && 0 === r
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, u) {
                      var l,
                        c,
                        h,
                        f,
                        d,
                        p,
                        g = o !== s ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !u && !a,
                        b = !1;
                      if (m) {
                        if (o) {
                          for (; g; ) {
                            for (f = e; (f = f[g]); )
                              if (
                                a
                                  ? f.nodeName.toLowerCase() === v
                                  : 1 === f.nodeType
                              )
                                return !1;
                            p = g = "only" === t && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            b =
                              (d =
                                (l =
                                  (c =
                                    (h = (f = m)[x] || (f[x] = {}))[
                                      f.uniqueID
                                    ] || (h[f.uniqueID] = {}))[t] || [])[0] ===
                                  T && l[1]) && l[2],
                              f = d && m.childNodes[d];
                            (f = (++d && f && f[g]) || (b = d = 0) || p.pop());

                          )
                            if (1 === f.nodeType && ++b && f === e) {
                              c[t] = [T, d, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = d =
                              (l =
                                (c =
                                  (h = (f = e)[x] || (f[x] = {}))[f.uniqueID] ||
                                  (h[f.uniqueID] = {}))[t] || [])[0] === T &&
                              l[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (f =
                              (++d && f && f[g]) || (b = d = 0) || p.pop()) &&
                            ((a
                              ? f.nodeName.toLowerCase() !== v
                              : 1 !== f.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (h = f[x] || (f[x] = {}))[f.uniqueID] ||
                                  (h[f.uniqueID] = {}))[t] = [T, b]),
                              f !== e));

                          );
                        return (b -= r) === i || (b % i == 0 && b / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var n,
                  r =
                    i.pseudos[t] ||
                    i.setFilters[t.toLowerCase()] ||
                    at.error("unsupported pseudo: " + t);
                return r[x]
                  ? r(e)
                  : r.length > 1
                  ? ((n = [t, t, "", e]),
                    i.setFilters.hasOwnProperty(t.toLowerCase())
                      ? lt(function (t, n) {
                          for (var i, o = r(t, e), s = o.length; s--; )
                            t[(i = L(t, o[s]))] = !(n[i] = o[s]);
                        })
                      : function (t) {
                          return r(t, 0, n);
                        })
                  : r;
              },
            },
            pseudos: {
              not: lt(function (t) {
                var e = [],
                  n = [],
                  i = a(t.replace(B, "$1"));
                return i[x]
                  ? lt(function (t, e, n, r) {
                      for (var o, s = i(t, null, r, []), a = t.length; a--; )
                        (o = s[a]) && (t[a] = !(e[a] = o));
                    })
                  : function (t, r, o) {
                      return (
                        (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: lt(function (t) {
                return function (e) {
                  return at(t, e).length > 0;
                };
              }),
              contains: lt(function (t) {
                return (
                  (t = t.replace(et, nt)),
                  function (e) {
                    return (e.textContent || r(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: lt(function (t) {
                return (
                  K.test(t || "") || at.error("unsupported lang: " + t),
                  (t = t.replace(et, nt).toLowerCase()),
                  function (e) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === t ||
                          0 === n.indexOf(t + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === p;
              },
              focus: function (t) {
                return (
                  t === d.activeElement &&
                  (!d.hasFocus || d.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: gt(!1),
              disabled: gt(!0),
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !i.pseudos.empty(t);
              },
              header: function (t) {
                return J.test(t.nodeName);
              },
              input: function (t) {
                return G.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: mt(function () {
                return [0];
              }),
              last: mt(function (t, e) {
                return [e - 1];
              }),
              eq: mt(function (t, e, n) {
                return [n < 0 ? n + e : n];
              }),
              even: mt(function (t, e) {
                for (var n = 0; n < e; n += 2) t.push(n);
                return t;
              }),
              odd: mt(function (t, e) {
                for (var n = 1; n < e; n += 2) t.push(n);
                return t;
              }),
              lt: mt(function (t, e, n) {
                for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; )
                  t.push(i);
                return t;
              }),
              gt: mt(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[e] = dt(e);
          for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e);
          function yt() {}
          function bt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i;
          }
          function xt(t, e, n) {
            var i = e.dir,
              r = e.next,
              o = r || i,
              s = n && "parentNode" === o,
              a = C++;
            return e.first
              ? function (e, n, r) {
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || s) return t(e, n, r);
                  return !1;
                }
              : function (e, n, u) {
                  var l,
                    c,
                    h,
                    f = [T, a];
                  if (u) {
                    for (; (e = e[i]); )
                      if ((1 === e.nodeType || s) && t(e, n, u)) return !0;
                  } else
                    for (; (e = e[i]); )
                      if (1 === e.nodeType || s)
                        if (
                          ((c =
                            (h = e[x] || (e[x] = {}))[e.uniqueID] ||
                            (h[e.uniqueID] = {})),
                          r && r === e.nodeName.toLowerCase())
                        )
                          e = e[i] || e;
                        else {
                          if ((l = c[o]) && l[0] === T && l[1] === a)
                            return (f[2] = l[2]);
                          if (((c[o] = f), (f[2] = t(e, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function wt(t) {
            return t.length > 1
              ? function (e, n, i) {
                  for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                  return !0;
                }
              : t[0];
          }
          function Tt(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
              (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), l && e.push(a)));
            return s;
          }
          function Ct(t, e, n, i, r, o) {
            return (
              i && !i[x] && (i = Ct(i)),
              r && !r[x] && (r = Ct(r, o)),
              lt(function (o, s, a, u) {
                var l,
                  c,
                  h,
                  f = [],
                  d = [],
                  p = s.length,
                  g =
                    o ||
                    (function (t, e, n) {
                      for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                      return n;
                    })(e || "*", a.nodeType ? [a] : a, []),
                  m = !t || (!o && e) ? g : Tt(g, f, t, a, u),
                  v = n ? (r || (o ? t : p || i) ? [] : s) : m;
                if ((n && n(m, v, a, u), i))
                  for (l = Tt(v, d), i(l, [], a, u), c = l.length; c--; )
                    (h = l[c]) && (v[d[c]] = !(m[d[c]] = h));
                if (o) {
                  if (r || t) {
                    if (r) {
                      for (l = [], c = v.length; c--; )
                        (h = v[c]) && l.push((m[c] = h));
                      r(null, (v = []), l, u);
                    }
                    for (c = v.length; c--; )
                      (h = v[c]) &&
                        (l = r ? L(o, h) : f[c]) > -1 &&
                        (o[l] = !(s[l] = h));
                  }
                } else (v = Tt(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, u) : j.apply(s, v);
              })
            );
          }
          function St(t) {
            for (
              var e,
                n,
                r,
                o = t.length,
                s = i.relative[t[0].type],
                a = s || i.relative[" "],
                u = s ? 1 : 0,
                c = xt(
                  function (t) {
                    return t === e;
                  },
                  a,
                  !0
                ),
                h = xt(
                  function (t) {
                    return L(e, t) > -1;
                  },
                  a,
                  !0
                ),
                f = [
                  function (t, n, i) {
                    var r =
                      (!s && (i || n !== l)) ||
                      ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                    return (e = null), r;
                  },
                ];
              u < o;
              u++
            )
              if ((n = i.relative[t[u].type])) f = [xt(wt(f), n)];
              else {
                if ((n = i.filter[t[u].type].apply(null, t[u].matches))[x]) {
                  for (r = ++u; r < o && !i.relative[t[r].type]; r++);
                  return Ct(
                    u > 1 && wt(f),
                    u > 1 &&
                      bt(
                        t
                          .slice(0, u - 1)
                          .concat({ value: " " === t[u - 2].type ? "*" : "" })
                      ).replace(B, "$1"),
                    n,
                    u < r && St(t.slice(u, r)),
                    r < o && St((t = t.slice(r))),
                    r < o && bt(t)
                  );
                }
                f.push(n);
              }
            return wt(f);
          }
          return (
            (yt.prototype = i.filters = i.pseudos),
            (i.setFilters = new yt()),
            (s = at.tokenize = function (t, e) {
              var n,
                r,
                o,
                s,
                a,
                u,
                l,
                c = k[t + " "];
              if (c) return e ? 0 : c.slice(0);
              for (a = t, u = [], l = i.preFilter; a; ) {
                for (s in ((n && !(r = M.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
                (n = !1),
                (r = U.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(B, " ") }),
                  (a = a.slice(n.length))),
                i.filter))
                  !(r = Q[s].exec(a)) ||
                    (l[s] && !(r = l[s](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: s, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return e ? a.length : a ? at.error(t) : k(t, u).slice(0);
            }),
            (a = at.compile = function (t, e) {
              var n,
                r = [],
                o = [],
                a = E[t + " "];
              if (!a) {
                for (e || (e = s(t)), n = e.length; n--; )
                  (a = St(e[n]))[x] ? r.push(a) : o.push(a);
                (a = E(
                  t,
                  (function (t, e) {
                    var n = e.length > 0,
                      r = t.length > 0,
                      o = function (o, s, a, u, c) {
                        var h,
                          p,
                          m,
                          v = 0,
                          y = "0",
                          b = o && [],
                          x = [],
                          w = l,
                          C = o || (r && i.find.TAG("*", c)),
                          S = (T += null == w ? 1 : Math.random() || 0.1),
                          k = C.length;
                        for (
                          c && (l = s == d || s || c);
                          y !== k && null != (h = C[y]);
                          y++
                        ) {
                          if (r && h) {
                            for (
                              p = 0,
                                s || h.ownerDocument == d || (f(h), (a = !g));
                              (m = t[p++]);

                            )
                              if (m(h, s || d, a)) {
                                u.push(h);
                                break;
                              }
                            c && (T = S);
                          }
                          n && ((h = !m && h) && v--, o && b.push(h));
                        }
                        if (((v += y), n && y !== v)) {
                          for (p = 0; (m = e[p++]); ) m(b, x, s, a);
                          if (o) {
                            if (v > 0)
                              for (; y--; ) b[y] || x[y] || (x[y] = N.call(u));
                            x = Tt(x);
                          }
                          j.apply(u, x),
                            c &&
                              !o &&
                              x.length > 0 &&
                              v + e.length > 1 &&
                              at.uniqueSort(u);
                        }
                        return c && ((T = S), (l = w)), b;
                      };
                    return n ? lt(o) : o;
                  })(o, r)
                )).selector = t;
              }
              return a;
            }),
            (u = at.select = function (t, e, n, r) {
              var o,
                u,
                l,
                c,
                h,
                f = "function" == typeof t && t,
                d = !r && s((t = f.selector || t));
              if (((n = n || []), 1 === d.length)) {
                if (
                  (u = d[0] = d[0].slice(0)).length > 2 &&
                  "ID" === (l = u[0]).type &&
                  9 === e.nodeType &&
                  g &&
                  i.relative[u[1].type]
                ) {
                  if (
                    !(e = (i.find.ID(l.matches[0].replace(et, nt), e) || [])[0])
                  )
                    return n;
                  f && (e = e.parentNode),
                    (t = t.slice(u.shift().value.length));
                }
                for (
                  o = Q.needsContext.test(t) ? 0 : u.length;
                  o-- && ((l = u[o]), !i.relative[(c = l.type)]);

                )
                  if (
                    (h = i.find[c]) &&
                    (r = h(
                      l.matches[0].replace(et, nt),
                      (tt.test(u[0].type) && vt(e.parentNode)) || e
                    ))
                  ) {
                    if ((u.splice(o, 1), !(t = r.length && bt(u))))
                      return j.apply(n, r), n;
                    break;
                  }
              }
              return (
                (f || a(t, d))(
                  r,
                  e,
                  !g,
                  n,
                  !e || (tt.test(t) && vt(e.parentNode)) || e
                ),
                n
              );
            }),
            (n.sortStable = x.split("").sort(_).join("") === x),
            (n.detectDuplicates = !!h),
            f(),
            (n.sortDetached = ct(function (t) {
              return 1 & t.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ct(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              ht("type|href|height|width", function (t, e, n) {
                if (!n)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ct(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              ht("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            ct(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              ht(R, function (t, e, n) {
                var i;
                if (!n)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (i = t.getAttributeNode(e)) && i.specified
                    ? i.value
                    : null;
              }),
            at
          );
        })(n);
      (C.find = k),
        (C.expr = k.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = k.uniqueSort),
        (C.text = k.getText),
        (C.isXMLDoc = k.isXML),
        (C.contains = k.contains),
        (C.escapeSelector = k.escape);
      var E = function (t, e, n) {
          for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && C(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        $ = function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        _ = C.expr.match.needsContext;
      function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(t, e, n) {
        return v(e)
          ? C.grep(t, function (t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? C.grep(t, function (t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? C.grep(t, function (t) {
              return c.call(e, t) > -1 !== n;
            })
          : C.filter(e, t, n);
      }
      (C.filter = function (t, e, n) {
        var i = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === i.nodeType
            ? C.find.matchesSelector(i, t)
              ? [i]
              : []
            : C.find.matches(
                t,
                C.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (t) {
            var e,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof t)
              return this.pushStack(
                C(t).filter(function () {
                  for (e = 0; e < i; e++) if (C.contains(r[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) C.find(t, r[e], n);
            return i > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(N(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(N(this, t || [], !0));
          },
          is: function (t) {
            return !!N(
              this,
              "string" == typeof t && _.test(t) ? C(t) : t || [],
              !1
            ).length;
          },
        });
      var I,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (((n = n || I), "string" == typeof t)) {
          if (
            !(i =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : j.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof C ? e[0] : e),
              C.merge(
                this,
                C.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : b,
                  !0
                )
              ),
              D.test(i[1]) && C.isPlainObject(e))
            )
              for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (
            (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : v(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(C)
          : C.makeArray(t, this);
      }).prototype = C.fn),
        (I = C(b));
      var O = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      C.fn.extend({
        has: function (t) {
          var e = C(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; t < n; t++) if (C.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = "string" != typeof t && C(t);
          if (!_.test(t))
            for (; i < r; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? c.call(C(t), this[0])
              : c.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        C.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return E(t, "parentNode");
            },
            parentsUntil: function (t, e, n) {
              return E(t, "parentNode", n);
            },
            next: function (t) {
              return R(t, "nextSibling");
            },
            prev: function (t) {
              return R(t, "previousSibling");
            },
            nextAll: function (t) {
              return E(t, "nextSibling");
            },
            prevAll: function (t) {
              return E(t, "previousSibling");
            },
            nextUntil: function (t, e, n) {
              return E(t, "nextSibling", n);
            },
            prevUntil: function (t, e, n) {
              return E(t, "previousSibling", n);
            },
            siblings: function (t) {
              return $((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return $(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && s(t.contentDocument)
                ? t.contentDocument
                : (A(t, "template") && (t = t.content || t),
                  C.merge([], t.childNodes));
            },
          },
          function (t, e) {
            C.fn[t] = function (n, i) {
              var r = C.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = C.filter(i, r)),
                this.length > 1 &&
                  (L[t] || C.uniqueSort(r), O.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var q = /[^\x20\t\r\n\f]+/g;
      function H(t) {
        return t;
      }
      function P(t) {
        throw t;
      }
      function F(t, e, n, i) {
        var r;
        try {
          t && v((r = t.promise))
            ? r.call(t).done(e).fail(n)
            : t && v((r = t.then))
            ? r.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (C.Callbacks = function (t) {
        t =
          "string" == typeof t
            ? (function (t) {
                var e = {};
                return (
                  C.each(t.match(q) || [], function (t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : C.extend({}, t);
        var e,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          u = function () {
            for (r = r || t.once, i = e = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((a = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), r && (o = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                o &&
                  (n && !e && ((a = o.length - 1), s.push(n)),
                  (function e(n) {
                    C.each(n, function (n, i) {
                      v(i)
                        ? (t.unique && l.has(i)) || o.push(i)
                        : i && i.length && "string" !== T(i) && e(i);
                    });
                  })(arguments),
                  n && !e && u()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (t, e) {
                  for (var n; (n = C.inArray(e, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? C.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = s = []), n || e || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (t, n) {
              return (
                r ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  e || u()),
                this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return l;
      }),
        C.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return r.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return C.Deferred(function (n) {
                    C.each(e, function (e, i) {
                      var r = v(t[i[4]]) && t[i[4]];
                      o[i[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && v(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, i, r) {
                  var o = 0;
                  function s(t, e, i, r) {
                    return function () {
                      var a = this,
                        u = arguments,
                        l = function () {
                          var n, l;
                          if (!(t < o)) {
                            if ((n = i.apply(a, u)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (l =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(l)
                                ? r
                                  ? l.call(n, s(o, e, H, r), s(o, e, P, r))
                                  : (o++,
                                    l.call(
                                      n,
                                      s(o, e, H, r),
                                      s(o, e, P, r),
                                      s(o, e, H, e.notifyWith)
                                    ))
                                : (i !== H && ((a = void 0), (u = [n])),
                                  (r || e.resolveWith)(a, u));
                          }
                        },
                        c = r
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  t + 1 >= o &&
                                    (i !== P && ((a = void 0), (u = [n])),
                                    e.rejectWith(a, u));
                              }
                            };
                      t
                        ? c()
                        : (C.Deferred.getStackHook &&
                            (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return C.Deferred(function (n) {
                    e[0][3].add(s(0, n, v(r) ? r : H, n.notifyWith)),
                      e[1][3].add(s(0, n, v(t) ? t : H)),
                      e[2][3].add(s(0, n, v(i) ? i : P));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? C.extend(t, r) : r;
                },
              },
              o = {};
            return (
              C.each(e, function (t, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              r.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              r = a.call(arguments),
              o = C.Deferred(),
              s = function (t) {
                return function (n) {
                  (i[t] = this),
                    (r[t] = arguments.length > 1 ? a.call(arguments) : n),
                    --e || o.resolveWith(i, r);
                };
              };
            if (
              e <= 1 &&
              (F(t, o.done(s(n)).resolve, o.reject, !e),
              "pending" === o.state() || v(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) F(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (t, e) {
        n.console &&
          n.console.warn &&
          t &&
          z.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (C.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
      var B = C.Deferred();
      function M() {
        b.removeEventListener("DOMContentLoaded", M),
          n.removeEventListener("load", M),
          C.ready();
      }
      (C.fn.ready = function (t) {
        return (
          B.then(t).catch(function (t) {
            C.readyException(t);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== t && --C.readyWait > 0) || B.resolveWith(b, [C]));
          },
        }),
        (C.ready.then = B.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (b.addEventListener("DOMContentLoaded", M),
            n.addEventListener("load", M));
      var U = function (t, e, n, i, r, o, s) {
          var a = 0,
            u = t.length,
            l = null == n;
          if ("object" === T(n))
            for (a in ((r = !0), n)) U(t, e, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            v(i) || (s = !0),
            l &&
              (s
                ? (e.call(t, i), (e = null))
                : ((l = e),
                  (e = function (t, e, n) {
                    return l.call(C(t), n);
                  }))),
            e)
          )
            for (; a < u; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
          return r ? t : l ? e.call(t) : u ? e(t[0], n) : o;
        },
        W = /^-ms-/,
        V = /-([a-z])/g;
      function K(t, e) {
        return e.toUpperCase();
      }
      function Q(t) {
        return t.replace(W, "ms-").replace(V, K);
      }
      var X = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function G() {
        this.expando = C.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                X(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var i,
              r = this.cache(t);
            if ("string" == typeof e) r[Q(e)] = n;
            else for (i in e) r[Q(i)] = e[i];
            return r;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][Q(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(Q)
                  : (e = Q(e)) in i
                  ? [e]
                  : e.match(q) || []).length;
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || C.isEmptyObject(i)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !C.isEmptyObject(e);
          },
        });
      var J = new G(),
        Y = new G(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tt = /[A-Z]/g;
      function et(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = "data-" + e.replace(tt, "-$&").toLowerCase()),
            "string" == typeof (n = t.getAttribute(i)))
          ) {
            try {
              n = (function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : Z.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(n);
            } catch (t) {}
            Y.set(t, e, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (t) {
          return Y.hasData(t) || J.hasData(t);
        },
        data: function (t, e, n) {
          return Y.access(t, e, n);
        },
        removeData: function (t, e) {
          Y.remove(t, e);
        },
        _data: function (t, e, n) {
          return J.access(t, e, n);
        },
        _removeData: function (t, e) {
          J.remove(t, e);
        },
      }),
        C.fn.extend({
          data: function (t, e) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((r = Y.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = Q(i.slice(5))), et(o, i, r[i]));
                J.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof t
              ? this.each(function () {
                  Y.set(this, t);
                })
              : U(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e)
                      return void 0 !== (n = Y.get(o, t)) ||
                        void 0 !== (n = et(o, t))
                        ? n
                        : void 0;
                    this.each(function () {
                      Y.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              Y.remove(this, t);
            });
          },
        }),
        C.extend({
          queue: function (t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (i = J.get(t, e)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = J.access(t, e, C.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var n = C.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = C._queueHooks(t, e);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === e && n.unshift("inprogress"),
                delete o.stop,
                r.call(
                  t,
                  function () {
                    C.dequeue(t, e);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return (
              J.get(t, n) ||
              J.access(t, n, {
                empty: C.Callbacks("once memory").add(function () {
                  J.remove(t, [e + "queue", n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = C.queue(this, t, e);
                    C._queueHooks(this, t),
                      "fx" === t && "inprogress" !== n[0] && C.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              C.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var n,
              i = 1,
              r = C.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              s--;

            )
              (n = J.get(o[s], t + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(e);
          },
        });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
        rt = ["Top", "Right", "Bottom", "Left"],
        ot = b.documentElement,
        st = function (t) {
          return C.contains(t.ownerDocument, t);
        },
        at = { composed: !0 };
      ot.getRootNode &&
        (st = function (t) {
          return (
            C.contains(t.ownerDocument, t) ||
            t.getRootNode(at) === t.ownerDocument
          );
        });
      var ut = function (t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display && st(t) && "none" === C.css(t, "display"))
        );
      };
      function lt(t, e, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return C.css(t, e, "");
              },
          u = a(),
          l = (n && n[3]) || (C.cssNumber[e] ? "" : "px"),
          c =
            t.nodeType &&
            (C.cssNumber[e] || ("px" !== l && +u)) &&
            it.exec(C.css(t, e));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; s--; )
            C.style(t, e, c + l),
              (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
              (c /= o);
          (c *= 2), C.style(t, e, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = l), (i.start = c), (i.end = r))),
          r
        );
      }
      var ct = {};
      function ht(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          r = ct[i];
        return (
          r ||
          ((e = n.body.appendChild(n.createElement(i))),
          (r = C.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === r && (r = "block"),
          (ct[i] = r),
          r)
        );
      }
      function ft(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
          (i = t[o]).style &&
            ((n = i.style.display),
            e
              ? ("none" === n &&
                  ((r[o] = J.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && ut(i) && (r[o] = ht(i)))
              : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
      }
      C.fn.extend({
        show: function () {
          return ft(this, !0);
        },
        hide: function () {
          return ft(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                ut(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var dt,
        pt,
        gt = /^(?:checkbox|radio)$/i,
        mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        vt = /^$|^module$|\/(?:java|ecma)script/i;
      (dt = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (pt = b.createElement("input")).setAttribute("type", "radio"),
        pt.setAttribute("checked", "checked"),
        pt.setAttribute("name", "t"),
        dt.appendChild(pt),
        (m.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (dt.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue),
        (dt.innerHTML = "<option></option>"),
        (m.option = !!dt.lastChild);
      var yt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function bt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && A(t, e)) ? C.merge([t], n) : n
        );
      }
      function xt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"));
      }
      (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
        (yt.th = yt.td),
        m.option ||
          (yt.optgroup = yt.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var wt = /<|&#?\w+;/;
      function Tt(t, e, n, i, r) {
        for (
          var o,
            s,
            a,
            u,
            l,
            c,
            h = e.createDocumentFragment(),
            f = [],
            d = 0,
            p = t.length;
          d < p;
          d++
        )
          if ((o = t[d]) || 0 === o)
            if ("object" === T(o)) C.merge(f, o.nodeType ? [o] : o);
            else if (wt.test(o)) {
              for (
                s = s || h.appendChild(e.createElement("div")),
                  a = (mt.exec(o) || ["", ""])[1].toLowerCase(),
                  u = yt[a] || yt._default,
                  s.innerHTML = u[1] + C.htmlPrefilter(o) + u[2],
                  c = u[0];
                c--;

              )
                s = s.lastChild;
              C.merge(f, s.childNodes), ((s = h.firstChild).textContent = "");
            } else f.push(e.createTextNode(o));
        for (h.textContent = "", d = 0; (o = f[d++]); )
          if (i && C.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((l = st(o)), (s = bt(h.appendChild(o), "script")), l && xt(s), n)
          )
            for (c = 0; (o = s[c++]); ) vt.test(o.type || "") && n.push(o);
        return h;
      }
      var Ct = /^key/,
        St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        kt = /^([^.]*)(?:\.(.+)|)/;
      function Et() {
        return !0;
      }
      function $t() {
        return !1;
      }
      function _t(t, e) {
        return (
          (t ===
            (function () {
              try {
                return b.activeElement;
              } catch (t) {}
            })()) ==
          ("focus" === e)
        );
      }
      function At(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
            At(t, a, n, i, e[a], o);
          return t;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = $t;
        else if (!r) return t;
        return (
          1 === o &&
            ((s = r),
            ((r = function (t) {
              return C().off(t), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          t.each(function () {
            C.event.add(this, e, r, i, n);
          })
        );
      }
      function Dt(t, e, n) {
        n
          ? (J.set(t, e, !1),
            C.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var i,
                  r,
                  o = J.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (o.length)
                    (C.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((o = a.call(arguments)),
                    J.set(this, e, o),
                    (i = n(this, e)),
                    this[e](),
                    o !== (r = J.get(this, e)) || i
                      ? J.set(this, e, !1)
                      : (r = {}),
                    o !== r)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), r.value
                    );
                } else
                  o.length &&
                    (J.set(this, e, {
                      value: C.event.trigger(
                        C.extend(o[0], C.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(t, e) && C.event.add(t, e, Et);
      }
      (C.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var o,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            g,
            m = J.get(t);
          if (X(t))
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && C.find.matchesSelector(ot, r),
                n.guid || (n.guid = C.guid++),
                (u = m.events) || (u = m.events = Object.create(null)),
                (s = m.handle) ||
                  (s = m.handle = function (e) {
                    return void 0 !== C && C.event.triggered !== e.type
                      ? C.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                l = (e = (e || "").match(q) || [""]).length;
              l--;

            )
              (d = g = (a = kt.exec(e[l]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                d &&
                  ((h = C.event.special[d] || {}),
                  (d = (r ? h.delegateType : h.bindType) || d),
                  (h = C.event.special[d] || {}),
                  (c = C.extend(
                    {
                      type: d,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && C.expr.match.needsContext.test(r),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (f = u[d]) ||
                    (((f = u[d] = []).delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(t, i, p, s)) ||
                      (t.addEventListener && t.addEventListener(d, s))),
                  h.add &&
                    (h.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                  (C.event.global[d] = !0));
        },
        remove: function (t, e, n, i, r) {
          var o,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            d,
            p,
            g,
            m = J.hasData(t) && J.get(t);
          if (m && (u = m.events)) {
            for (l = (e = (e || "").match(q) || [""]).length; l--; )
              if (
                ((d = g = (a = kt.exec(e[l]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  h = C.event.special[d] || {},
                    f = u[(d = (i ? h.delegateType : h.bindType) || d)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = f.length;
                  o--;

                )
                  (c = f[o]),
                    (!r && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                      (f.splice(o, 1),
                      c.selector && f.delegateCount--,
                      h.remove && h.remove.call(t, c));
                s &&
                  !f.length &&
                  ((h.teardown && !1 !== h.teardown.call(t, p, m.handle)) ||
                    C.removeEvent(t, d, m.handle),
                  delete u[d]);
              } else for (d in u) C.event.remove(t, d + e[l], n, i, !0);
            C.isEmptyObject(u) && J.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a = new Array(arguments.length),
            u = C.event.fix(t),
            l = (J.get(this, "events") || Object.create(null))[u.type] || [],
            c = C.event.special[u.type] || {};
          for (a[0] = u, e = 1; e < arguments.length; e++) a[e] = arguments[e];
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              s = C.event.handlers.call(this, u, l), e = 0;
              (r = s[e++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== o.namespace &&
                  !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !==
                    (i = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, a)) &&
                    !1 === (u.result = i) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (t, e) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            u = e.delegateCount,
            l = t.target;
          if (u && l.nodeType && !("click" === t.type && t.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== t.type || !0 !== l.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < u; n++)
                  void 0 === s[(r = (i = e[n]).selector + " ")] &&
                    (s[r] = i.needsContext
                      ? C(r, this).index(l) > -1
                      : C.find(r, this, null, [l]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: l, handlers: o });
              }
          return (
            (l = this),
            u < e.length && a.push({ elem: l, handlers: e.slice(u) }),
            a
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(C.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[C.expando] ? t : new C.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) &&
                  e.click &&
                  A(e, "input") &&
                  Dt(e, "click", Et),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) && e.click && A(e, "input") && Dt(e, "click"),
                !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (gt.test(e.type) &&
                  e.click &&
                  A(e, "input") &&
                  J.get(e, "click")) ||
                A(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (C.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (C.Event = function (t, e) {
          if (!(this instanceof C.Event)) return new C.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Et
                  : $t),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && C.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: $t,
          isPropagationStopped: $t,
          isImmediatePropagationStopped: $t,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Et),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = Et),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Et),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && Ct.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && St.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          C.event.special[t] = {
            setup: function () {
              return Dt(this, t, _t), !1;
            },
            trigger: function () {
              return Dt(this, t), !0;
            },
            delegateType: e,
          };
        }),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            C.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  i = this,
                  r = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (r && (r === i || C.contains(i, r))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (t, e, n, i) {
            return At(this, t, e, n, i);
          },
          one: function (t, e, n, i) {
            return At(this, t, e, n, i, 1);
          },
          off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                C(t.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = $t),
              this.each(function () {
                C.event.remove(this, t, n, e);
              })
            );
          },
        });
      var Nt = /<script|<style|<link/i,
        It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Ot(t, e) {
        return (
          (A(t, "table") &&
            A(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            C(t).children("tbody")[0]) ||
          t
        );
      }
      function Lt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function Rt(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function qt(t, e) {
        var n, i, r, o, s, a;
        if (1 === e.nodeType) {
          if (J.hasData(t) && (a = J.get(t).events))
            for (r in (J.remove(e, "handle events"), a))
              for (n = 0, i = a[r].length; n < i; n++)
                C.event.add(e, r, a[r][n]);
          Y.hasData(t) &&
            ((o = Y.access(t)), (s = C.extend({}, o)), Y.set(e, s));
        }
      }
      function Ht(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && gt.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
      function Pt(t, e, n, i) {
        e = u(e);
        var r,
          o,
          s,
          a,
          l,
          c,
          h = 0,
          f = t.length,
          d = f - 1,
          p = e[0],
          g = v(p);
        if (g || (f > 1 && "string" == typeof p && !m.checkClone && It.test(p)))
          return t.each(function (r) {
            var o = t.eq(r);
            g && (e[0] = p.call(this, r, o.html())), Pt(o, e, n, i);
          });
        if (
          f &&
          ((o = (r = Tt(e, t[0].ownerDocument, !1, t, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = C.map(bt(r, "script"), Lt)).length; h < f; h++)
            (l = r),
              h !== d &&
                ((l = C.clone(l, !0, !0)), a && C.merge(s, bt(l, "script"))),
              n.call(t[h], l, h);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, C.map(s, Rt), h = 0;
              h < a;
              h++
            )
              (l = s[h]),
                vt.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  C.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? C._evalUrl &&
                      !l.noModule &&
                      C._evalUrl(
                        l.src,
                        { nonce: l.nonce || l.getAttribute("nonce") },
                        c
                      )
                    : w(l.textContent.replace(jt, ""), l, c));
        }
        return t;
      }
      function Ft(t, e, n) {
        for (var i, r = e ? C.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || C.cleanData(bt(i)),
            i.parentNode &&
              (n && st(i) && xt(bt(i, "script")), i.parentNode.removeChild(i));
        return t;
      }
      C.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, n) {
          var i,
            r,
            o,
            s,
            a = t.cloneNode(!0),
            u = st(t);
          if (
            !(
              m.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              C.isXMLDoc(t)
            )
          )
            for (s = bt(a), i = 0, r = (o = bt(t)).length; i < r; i++)
              Ht(o[i], s[i]);
          if (e)
            if (n)
              for (
                o = o || bt(t), s = s || bt(a), i = 0, r = o.length;
                i < r;
                i++
              )
                qt(o[i], s[i]);
            else qt(t, a);
          return (
            (s = bt(a, "script")).length > 0 && xt(s, !u && bt(t, "script")), a
          );
        },
        cleanData: function (t) {
          for (
            var e, n, i, r = C.event.special, o = 0;
            void 0 !== (n = t[o]);
            o++
          )
            if (X(n)) {
              if ((e = n[J.expando])) {
                if (e.events)
                  for (i in e.events)
                    r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, e.handle);
                n[J.expando] = void 0;
              }
              n[Y.expando] && (n[Y.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (t) {
            return Ft(this, t, !0);
          },
          remove: function (t) {
            return Ft(this, t);
          },
          text: function (t) {
            return U(
              this,
              function (t) {
                return void 0 === t
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Pt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Ot(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Pt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Ot(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Pt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Pt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (C.cleanData(bt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return C.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return U(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !Nt.test(t) &&
                  !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = C.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (C.cleanData(bt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Pt(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                C.inArray(this, t) < 0 &&
                  (C.cleanData(bt(this)), n && n.replaceChild(e, this));
              },
              t
            );
          },
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            C.fn[t] = function (t) {
              for (
                var n, i = [], r = C(t), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  C(r[s])[e](n),
                  l.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var zt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        Bt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Mt = function (t, e, n) {
          var i,
            r,
            o = {};
          for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
          for (r in ((i = n.call(t)), e)) t.style[r] = o[r];
          return i;
        },
        Ut = new RegExp(rt.join("|"), "i");
      function Wt(t, e, n) {
        var i,
          r,
          o,
          s,
          a = t.style;
        return (
          (n = n || Bt(t)) &&
            ("" !== (s = n.getPropertyValue(e) || n[e]) ||
              st(t) ||
              (s = C.style(t, e)),
            !m.pixelBoxStyles() &&
              zt.test(s) &&
              Ut.test(e) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Vt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ot.appendChild(l).appendChild(c);
            var t = n.getComputedStyle(c);
            (i = "1%" !== t.top),
              (u = 12 === e(t.marginLeft)),
              (c.style.right = "60%"),
              (s = 36 === e(t.right)),
              (r = 36 === e(t.width)),
              (c.style.position = "absolute"),
              (o = 12 === e(c.offsetWidth / 3)),
              ot.removeChild(l),
              (c = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var i,
          r,
          o,
          s,
          a,
          u,
          l = b.createElement("div"),
          c = b.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
          C.extend(m, {
            boxSizingReliable: function () {
              return t(), r;
            },
            pixelBoxStyles: function () {
              return t(), s;
            },
            pixelPosition: function () {
              return t(), i;
            },
            reliableMarginLeft: function () {
              return t(), u;
            },
            scrollboxSize: function () {
              return t(), o;
            },
            reliableTrDimensions: function () {
              var t, e, i, r;
              return (
                null == a &&
                  ((t = b.createElement("table")),
                  (e = b.createElement("tr")),
                  (i = b.createElement("div")),
                  (t.style.cssText = "position:absolute;left:-11111px"),
                  (e.style.height = "1px"),
                  (i.style.height = "9px"),
                  ot.appendChild(t).appendChild(e).appendChild(i),
                  (r = n.getComputedStyle(e)),
                  (a = parseInt(r.height) > 3),
                  ot.removeChild(t)),
                a
              );
            },
          }));
      })();
      var Kt = ["Webkit", "Moz", "ms"],
        Qt = b.createElement("div").style,
        Xt = {};
      function Gt(t) {
        var e = C.cssProps[t] || Xt[t];
        return (
          e ||
          (t in Qt
            ? t
            : (Xt[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = Kt.length;
                    n--;

                  )
                    if ((t = Kt[n] + e) in Qt) return t;
                })(t) || t))
        );
      }
      var Jt = /^(none|table(?!-c[ea]).+)/,
        Yt = /^--/,
        Zt = { position: "absolute", visibility: "hidden", display: "block" },
        te = { letterSpacing: "0", fontWeight: "400" };
      function ee(t, e, n) {
        var i = it.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
      }
      function ne(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0,
          a = 0,
          u = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (u += C.css(t, n + rt[s], !0, r)),
            i
              ? ("content" === n && (u -= C.css(t, "padding" + rt[s], !0, r)),
                "margin" !== n &&
                  (u -= C.css(t, "border" + rt[s] + "Width", !0, r)))
              : ((u += C.css(t, "padding" + rt[s], !0, r)),
                "padding" !== n
                  ? (u += C.css(t, "border" + rt[s] + "Width", !0, r))
                  : (a += C.css(t, "border" + rt[s] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    o -
                    u -
                    a -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function ie(t, e, n) {
        var i = Bt(t),
          r =
            (!m.boxSizingReliable() || n) &&
            "border-box" === C.css(t, "boxSizing", !1, i),
          o = r,
          s = Wt(t, e, i),
          a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (zt.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!m.boxSizingReliable() && r) ||
            (!m.reliableTrDimensions() && A(t, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === C.css(t, "display", !1, i))) &&
            t.getClientRects().length &&
            ((r = "border-box" === C.css(t, "boxSizing", !1, i)),
            (o = a in t) && (s = t[a])),
          (s = parseFloat(s) || 0) +
            ne(t, e, n || (r ? "border" : "content"), o, i, s) +
            "px"
        );
      }
      function re(t, e, n, i, r) {
        return new re.prototype.init(t, e, n, i, r);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = Wt(t, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              o,
              s,
              a = Q(e),
              u = Yt.test(e),
              l = t.style;
            if (
              (u || (e = Gt(a)),
              (s = C.cssHooks[e] || C.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(t, !1, i))
                ? r
                : l[e];
            "string" === (o = typeof n) &&
              (r = it.exec(n)) &&
              r[1] &&
              ((n = lt(t, e, r)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (r && r[3]) || (C.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                  (u ? l.setProperty(e, n) : (l[e] = n)));
          }
        },
        css: function (t, e, n, i) {
          var r,
            o,
            s,
            a = Q(e);
          return (
            Yt.test(e) || (e = Gt(a)),
            (s = C.cssHooks[e] || C.cssHooks[a]) &&
              "get" in s &&
              (r = s.get(t, !0, n)),
            void 0 === r && (r = Wt(t, e, i)),
            "normal" === r && e in te && (r = te[e]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        C.each(["height", "width"], function (t, e) {
          C.cssHooks[e] = {
            get: function (t, n, i) {
              if (n)
                return !Jt.test(C.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? ie(t, e, i)
                  : Mt(t, Zt, function () {
                      return ie(t, e, i);
                    });
            },
            set: function (t, n, i) {
              var r,
                o = Bt(t),
                s = !m.scrollboxSize() && "absolute" === o.position,
                a = (s || i) && "border-box" === C.css(t, "boxSizing", !1, o),
                u = i ? ne(t, e, i, a, o) : 0;
              return (
                a &&
                  s &&
                  (u -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(o[e]) -
                      ne(t, e, "border", !1, o) -
                      0.5
                  )),
                u &&
                  (r = it.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((t.style[e] = n), (n = C.css(t, e))),
                ee(0, n, u)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = Vt(m.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Wt(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Mt(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (C.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[t + rt[i] + e] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== t && (C.cssHooks[t + e].set = ee);
        }),
        C.fn.extend({
          css: function (t, e) {
            return U(
              this,
              function (t, e, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(e)) {
                  for (i = Bt(t), r = e.length; s < r; s++)
                    o[e[s]] = C.css(t, e[s], !1, i);
                  return o;
                }
                return void 0 !== n ? C.style(t, e, n) : C.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (C.Tween = re),
        (re.prototype = {
          constructor: re,
          init: function (t, e, n, i, r, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = r || C.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var t = re.propHooks[this.prop];
            return t && t.get ? t.get(this) : re.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = re.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = C.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : re.propHooks._default.set(this),
              this
            );
          },
        }),
        (re.prototype.init.prototype = re.prototype),
        (re.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = C.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              C.fx.step[t.prop]
                ? C.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!C.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : C.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (re.propHooks.scrollTop = re.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (C.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (C.fx = re.prototype.init),
        (C.fx.step = {});
      var oe,
        se,
        ae = /^(?:toggle|show|hide)$/,
        ue = /queueHooks$/;
      function le() {
        se &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(le)
            : n.setTimeout(le, C.fx.interval),
          C.fx.tick());
      }
      function ce() {
        return (
          n.setTimeout(function () {
            oe = void 0;
          }),
          (oe = Date.now())
        );
      }
      function he(t, e) {
        var n,
          i = 0,
          r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
          r["margin" + (n = rt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
      }
      function fe(t, e, n) {
        for (
          var i,
            r = (de.tweeners[e] || []).concat(de.tweeners["*"]),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, e, t))) return i;
      }
      function de(t, e, n) {
        var i,
          r,
          o = 0,
          s = de.prefilters.length,
          a = C.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (r) return !1;
            for (
              var e = oe || ce(),
                n = Math.max(0, l.startTime + l.duration - e),
                i = 1 - (n / l.duration || 0),
                o = 0,
                s = l.tweens.length;
              o < s;
              o++
            )
              l.tweens[o].run(i);
            return (
              a.notifyWith(t, [l, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l]), !1)
            );
          },
          l = a.promise({
            elem: t,
            props: C.extend({}, e),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: oe || ce(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var i = C.Tween(
                t,
                l.opts,
                e,
                n,
                l.opts.specialEasing[e] || l.opts.easing
              );
              return l.tweens.push(i), i;
            },
            stop: function (e) {
              var n = 0,
                i = e ? l.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) l.tweens[n].run(1);
              return (
                e
                  ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e]))
                  : a.rejectWith(t, [l, e]),
                this
              );
            },
          }),
          c = l.props;
        for (
          !(function (t, e) {
            var n, i, r, o, s;
            for (n in t)
              if (
                ((r = e[(i = Q(n))]),
                (o = t[n]),
                Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
                n !== i && ((t[i] = o), delete t[n]),
                (s = C.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete t[i], o))
                  (n in t) || ((t[n] = o[n]), (e[n] = r));
              else e[i] = r;
          })(c, l.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = de.prefilters[o].call(l, t, c, l.opts)))
            return (
              v(i.stop) &&
                (C._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          C.map(c, fe, l),
          v(l.opts.start) && l.opts.start.call(t, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          C.fx.timer(C.extend(u, { elem: t, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (C.Animation = C.extend(de, {
        tweeners: {
          "*": [
            function (t, e) {
              var n = this.createTween(t, e);
              return lt(n.elem, t, it.exec(e), n), n;
            },
          ],
        },
        tweener: function (t, e) {
          v(t) ? ((e = t), (t = ["*"])) : (t = t.match(q));
          for (var n, i = 0, r = t.length; i < r; i++)
            (n = t[i]),
              (de.tweeners[n] = de.tweeners[n] || []),
              de.tweeners[n].unshift(e);
        },
        prefilters: [
          function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              h = "width" in e || "height" in e,
              f = this,
              d = {},
              p = t.style,
              g = t.nodeType && ut(t),
              m = J.get(t, "fxshow");
            for (i in (n.queue ||
              (null == (s = C._queueHooks(t, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              f.always(function () {
                f.always(function () {
                  s.unqueued--, C.queue(t, "fx").length || s.empty.fire();
                });
              })),
            e))
              if (((r = e[i]), ae.test(r))) {
                if (
                  (delete e[i],
                  (o = o || "toggle" === r),
                  r === (g ? "hide" : "show"))
                ) {
                  if ("show" !== r || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                d[i] = (m && m[i]) || C.style(t, i);
              }
            if ((u = !C.isEmptyObject(e)) || !C.isEmptyObject(d))
              for (i in (h &&
                1 === t.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (l = m && m.display) && (l = J.get(t, "display")),
                "none" === (c = C.css(t, "display")) &&
                  (l
                    ? (c = l)
                    : (ft([t], !0),
                      (l = t.style.display || l),
                      (c = C.css(t, "display")),
                      ft([t]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === C.css(t, "float") &&
                  (u ||
                    (f.done(function () {
                      p.display = l;
                    }),
                    null == l &&
                      ((c = p.display), (l = "none" === c ? "" : c))),
                  (p.display = "inline-block"))),
              n.overflow &&
                ((p.overflow = "hidden"),
                f.always(function () {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (u = !1),
              d))
                u ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = J.access(t, "fxshow", { display: l })),
                  o && (m.hidden = !g),
                  g && ft([t], !0),
                  f.done(function () {
                    for (i in (g || ft([t]), J.remove(t, "fxshow"), d))
                      C.style(t, i, d[i]);
                  })),
                  (u = fe(g ? m[i] : 0, i, f)),
                  i in m ||
                    ((m[i] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? de.prefilters.unshift(t) : de.prefilters.push(t);
        },
      })),
        (C.speed = function (t, e, n) {
          var i =
            t && "object" == typeof t
              ? C.extend({}, t)
              : {
                  complete: n || (!n && e) || (v(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !v(e) && e),
                };
          return (
            C.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in C.fx.speeds
                  ? (i.duration = C.fx.speeds[i.duration])
                  : (i.duration = C.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
            }),
            i
          );
        }),
        C.fn.extend({
          fadeTo: function (t, e, n, i) {
            return this.filter(ut)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function (t, e, n, i) {
            var r = C.isEmptyObject(t),
              o = C.speed(e, n, i),
              s = function () {
                var e = de(this, C.extend({}, t), o);
                (r || J.get(this, "finish")) && e.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (t, e, n) {
            var i = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  r = null != t && t + "queueHooks",
                  o = C.timers,
                  s = J.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ue.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != t && o[r].queue !== t) ||
                    (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                (!e && n) || C.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  n = J.get(this),
                  i = n[t + "queue"],
                  r = n[t + "queueHooks"],
                  o = C.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(["toggle", "show", "hide"], function (t, e) {
          var n = C.fn[e];
          C.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(he(e, !0), t, i, r);
          };
        }),
        C.each(
          {
            slideDown: he("show"),
            slideUp: he("hide"),
            slideToggle: he("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            C.fn[t] = function (t, n, i) {
              return this.animate(e, t, n, i);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var t,
            e = 0,
            n = C.timers;
          for (oe = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || C.fx.stop(), (oe = void 0);
        }),
        (C.fx.timer = function (t) {
          C.timers.push(t), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          se || ((se = !0), le());
        }),
        (C.fx.stop = function () {
          se = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (t, e) {
          return (
            (t = (C.fx && C.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, i) {
              var r = n.setTimeout(e, t);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var t = b.createElement("input"),
            e = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (t.type = "checkbox"),
            (m.checkOn = "" !== t.value),
            (m.optSelected = e.selected),
            ((t = b.createElement("input")).value = "t"),
            (t.type = "radio"),
            (m.radioValue = "t" === t.value);
        })();
      var pe,
        ge = C.expr.attrHandle;
      C.fn.extend({
        attr: function (t, e) {
          return U(this, C.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            C.removeAttr(this, t);
          });
        },
      }),
        C.extend({
          attr: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? C.prop(t, e, n)
                : ((1 === o && C.isXMLDoc(t)) ||
                    (r =
                      C.attrHooks[e.toLowerCase()] ||
                      (C.expr.match.bool.test(e) ? pe : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(t, e)
                      : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : null == (i = C.find.attr(t, e))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!m.radioValue && "radio" === e && A(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              i = 0,
              r = e && e.match(q);
            if (r && 1 === t.nodeType)
              for (; (n = r[i++]); ) t.removeAttribute(n);
          },
        }),
        (pe = {
          set: function (t, e, n) {
            return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = ge[e] || C.find.attr;
          ge[e] = function (t, e, i) {
            var r,
              o,
              s = e.toLowerCase();
            return (
              i ||
                ((o = ge[s]),
                (ge[s] = r),
                (r = null != n(t, e, i) ? s : null),
                (ge[s] = o)),
              r
            );
          };
        });
      var me = /^(?:input|select|textarea|button)$/i,
        ve = /^(?:a|area)$/i;
      function ye(t) {
        return (t.match(q) || []).join(" ");
      }
      function be(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function xe(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(q)) || [];
      }
      C.fn.extend({
        prop: function (t, e) {
          return U(this, C.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[C.propFix[t] || t];
          });
        },
      }),
        C.extend({
          prop: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(t)) ||
                  ((e = C.propFix[e] || e), (r = C.propHooks[e])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : r && "get" in r && null !== (i = r.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = C.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : me.test(t.nodeName) || (ve.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (C.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              u = 0;
            if (v(t))
              return this.each(function (e) {
                C(this).addClass(t.call(this, e, be(this)));
              });
            if ((e = xe(t)).length)
              for (; (n = this[u++]); )
                if (
                  ((r = be(n)), (i = 1 === n.nodeType && " " + ye(r) + " "))
                ) {
                  for (s = 0; (o = e[s++]); )
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  r !== (a = ye(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              u = 0;
            if (v(t))
              return this.each(function (e) {
                C(this).removeClass(t.call(this, e, be(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xe(t)).length)
              for (; (n = this[u++]); )
                if (
                  ((r = be(n)), (i = 1 === n.nodeType && " " + ye(r) + " "))
                ) {
                  for (s = 0; (o = e[s++]); )
                    for (; i.indexOf(" " + o + " ") > -1; )
                      i = i.replace(" " + o + " ", " ");
                  r !== (a = ye(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var n = typeof t,
              i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : v(t)
              ? this.each(function (n) {
                  C(this).toggleClass(t.call(this, n, be(this), e), e);
                })
              : this.each(function () {
                  var e, r, o, s;
                  if (i)
                    for (r = 0, o = C(this), s = xe(t); (e = s[r++]); )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                      ((e = be(this)) && J.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              n,
              i = 0;
            for (e = " " + t + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var we = /\r/g;
      C.fn.extend({
        val: function (t) {
          var e,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = v(t)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? t.call(this, n, C(this).val()) : t)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = C.map(r, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (e =
                C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (n = e.get(r, "value"))
              ? n
              : "string" == typeof (n = r.value)
              ? n.replace(we, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = C.find.attr(t, "value");
                return null != e ? e : ye(C.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  i,
                  r = t.options,
                  o = t.selectedIndex,
                  s = "select-one" === t.type,
                  a = s ? null : [],
                  u = s ? o + 1 : r.length;
                for (i = o < 0 ? u : s ? o : 0; i < u; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((e = C(n).val()), s)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function (t, e) {
                for (
                  var n, i, r = t.options, o = C.makeArray(e), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    C.inArray(C.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(["radio", "checkbox"], function () {
          (C.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = C.inArray(C(t).val(), e) > -1);
            },
          }),
            m.checkOn ||
              (C.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var Te = /^(?:focusinfocus|focusoutblur)$/,
        Ce = function (t) {
          t.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (t, e, i, r) {
          var o,
            s,
            a,
            u,
            l,
            c,
            h,
            f,
            p = [i || b],
            g = d.call(t, "type") ? t.type : t,
            m = d.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((s = f = a = i = i || b),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Te.test(g + C.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (l = g.indexOf(":") < 0 && "on" + g),
              ((t = t[C.expando]
                ? t
                : new C.Event(g, "object" == typeof t && t)).isTrigger = r
                ? 2
                : 3),
              (t.namespace = m.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : C.makeArray(e, [t])),
              (h = C.event.special[g] || {}),
              r || !h.trigger || !1 !== h.trigger.apply(i, e)))
          ) {
            if (!r && !h.noBubble && !y(i)) {
              for (
                u = h.delegateType || g, Te.test(u + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                p.push(s), (a = s);
              a === (i.ownerDocument || b) &&
                p.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
              (f = s),
                (t.type = o > 1 ? u : h.bindType || g),
                (c =
                  (J.get(s, "events") || Object.create(null))[t.type] &&
                  J.get(s, "handle")) && c.apply(s, e),
                (c = l && s[l]) &&
                  c.apply &&
                  X(s) &&
                  ((t.result = c.apply(s, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = g),
              r ||
                t.isDefaultPrevented() ||
                (h._default && !1 !== h._default.apply(p.pop(), e)) ||
                !X(i) ||
                (l &&
                  v(i[g]) &&
                  !y(i) &&
                  ((a = i[l]) && (i[l] = null),
                  (C.event.triggered = g),
                  t.isPropagationStopped() && f.addEventListener(g, Ce),
                  i[g](),
                  t.isPropagationStopped() && f.removeEventListener(g, Ce),
                  (C.event.triggered = void 0),
                  a && (i[l] = a))),
              t.result
            );
          }
        },
        simulate: function (t, e, n) {
          var i = C.extend(new C.Event(), n, { type: t, isSimulated: !0 });
          C.event.trigger(i, null, e);
        },
      }),
        C.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              C.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return C.event.trigger(t, e, n, !0);
          },
        }),
        m.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var n = function (t) {
              C.event.simulate(e, t.target, C.event.fix(t));
            };
            C.event.special[e] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  r = J.access(i, e);
                r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  r = J.access(i, e) - 1;
                r
                  ? J.access(i, e, r)
                  : (i.removeEventListener(t, n, !0), J.remove(i, e));
              },
            };
          });
      var Se = n.location,
        ke = { guid: Date.now() },
        Ee = /\?/;
      C.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            C.error("Invalid XML: " + t),
          e
        );
      };
      var $e = /\[\]$/,
        _e = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;
      function Ne(t, e, n, i) {
        var r;
        if (Array.isArray(e))
          C.each(e, function (e, r) {
            n || $e.test(t)
              ? i(t, r)
              : Ne(
                  t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== T(e)) i(t, e);
        else for (r in e) Ne(t + "[" + r + "]", e[r], n, i);
      }
      (C.param = function (t, e) {
        var n,
          i = [],
          r = function (t, e) {
            var n = v(e) ? e() : e;
            i[i.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
          C.each(t, function () {
            r(this.name, this.value);
          });
        else for (n in t) Ne(n, t[n], e, r);
        return i.join("&");
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = C.prop(this, "elements");
              return t ? C.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  De.test(this.nodeName) &&
                  !Ae.test(t) &&
                  (this.checked || !gt.test(t))
                );
              })
              .map(function (t, e) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (t) {
                      return { name: e.name, value: t.replace(_e, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(_e, "\r\n") };
              })
              .get();
          },
        });
      var Ie = /%20/g,
        je = /#.*$/,
        Oe = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Re = /^(?:GET|HEAD)$/,
        qe = /^\/\//,
        He = {},
        Pe = {},
        Fe = "*/".concat("*"),
        ze = b.createElement("a");
      function Be(t) {
        return function (e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var i,
            r = 0,
            o = e.toLowerCase().match(q) || [];
          if (v(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function Me(t, e, n, i) {
        var r = {},
          o = t === Pe;
        function s(a) {
          var u;
          return (
            (r[a] = !0),
            C.each(t[a] || [], function (t, a) {
              var l = a(e, n, i);
              return "string" != typeof l || o || r[l]
                ? o
                  ? !(u = l)
                  : void 0
                : (e.dataTypes.unshift(l), s(l), !1);
            }),
            u
          );
        }
        return s(e.dataTypes[0]) || (!r["*"] && s("*"));
      }
      function Ue(t, e) {
        var n,
          i,
          r = C.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && C.extend(!0, t, i), t;
      }
      (ze.href = Se.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Se.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Se.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Fe,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? Ue(Ue(t, C.ajaxSettings), e) : Ue(C.ajaxSettings, t);
          },
          ajaxPrefilter: Be(He),
          ajaxTransport: Be(Pe),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              h,
              f,
              d = C.ajaxSetup({}, e),
              p = d.context || d,
              g = d.context && (p.nodeType || p.jquery) ? C(p) : C.event,
              m = C.Deferred(),
              v = C.Callbacks("once memory"),
              y = d.statusCode || {},
              x = {},
              w = {},
              T = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (l) {
                    if (!s)
                      for (s = {}; (e = Le.exec(o)); )
                        s[e[1].toLowerCase() + " "] = (
                          s[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = s[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? o : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == l &&
                      ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                      (x[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == l && (d.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (l) S.always(t[S.status]);
                    else for (e in t) y[e] = [y[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || T;
                  return i && i.abort(e), k(0, e), this;
                },
              };
            if (
              (m.promise(S),
              (d.url = ((t || d.url || Se.href) + "").replace(
                qe,
                Se.protocol + "//"
              )),
              (d.type = e.method || e.type || d.method || d.type),
              (d.dataTypes = (d.dataType || "*").toLowerCase().match(q) || [
                "",
              ]),
              null == d.crossDomain)
            ) {
              u = b.createElement("a");
              try {
                (u.href = d.url),
                  (u.href = u.href),
                  (d.crossDomain =
                    ze.protocol + "//" + ze.host != u.protocol + "//" + u.host);
              } catch (t) {
                d.crossDomain = !0;
              }
            }
            if (
              (d.data &&
                d.processData &&
                "string" != typeof d.data &&
                (d.data = C.param(d.data, d.traditional)),
              Me(He, d, e, S),
              l)
            )
              return S;
            for (h in ((c = C.event && d.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !Re.test(d.type)),
            (r = d.url.replace(je, "")),
            d.hasContent
              ? d.data &&
                d.processData &&
                0 ===
                  (d.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (d.data = d.data.replace(Ie, "+"))
              : ((f = d.url.slice(r.length)),
                d.data &&
                  (d.processData || "string" == typeof d.data) &&
                  ((r += (Ee.test(r) ? "&" : "?") + d.data), delete d.data),
                !1 === d.cache &&
                  ((r = r.replace(Oe, "$1")),
                  (f = (Ee.test(r) ? "&" : "?") + "_=" + ke.guid++ + f)),
                (d.url = r + f)),
            d.ifModified &&
              (C.lastModified[r] &&
                S.setRequestHeader("If-Modified-Since", C.lastModified[r]),
              C.etag[r] && S.setRequestHeader("If-None-Match", C.etag[r])),
            ((d.data && d.hasContent && !1 !== d.contentType) ||
              e.contentType) &&
              S.setRequestHeader("Content-Type", d.contentType),
            S.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    ("*" !== d.dataTypes[0] ? ", " + Fe + "; q=0.01" : "")
                : d.accepts["*"]
            ),
            d.headers))
              S.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, S, d) || l))
              return S.abort();
            if (
              ((T = "abort"),
              v.add(d.complete),
              S.done(d.success),
              S.fail(d.error),
              (i = Me(Pe, d, e, S)))
            ) {
              if (((S.readyState = 1), c && g.trigger("ajaxSend", [S, d]), l))
                return S;
              d.async &&
                d.timeout > 0 &&
                (a = n.setTimeout(function () {
                  S.abort("timeout");
                }, d.timeout));
              try {
                (l = !1), i.send(x, k);
              } catch (t) {
                if (l) throw t;
                k(-1, t);
              }
            } else k(-1, "No Transport");
            function k(t, e, s, u) {
              var h,
                f,
                b,
                x,
                w,
                T = e;
              l ||
                ((l = !0),
                a && n.clearTimeout(a),
                (i = void 0),
                (o = u || ""),
                (S.readyState = t > 0 ? 4 : 0),
                (h = (t >= 200 && t < 300) || 304 === t),
                s &&
                  (x = (function (t, e, n) {
                    for (
                      var i, r, o, s, a = t.contents, u = t.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === i &&
                          (i =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          u.unshift(r);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (r in n) {
                        if (!u[0] || t.converters[r + " " + u[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(d, S, s)),
                !h &&
                  C.inArray("script", d.dataTypes) > -1 &&
                  (d.converters["text script"] = function () {}),
                (x = (function (t, e, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    u,
                    l = {},
                    c = t.dataTypes.slice();
                  if (c[1])
                    for (s in t.converters)
                      l[s.toLowerCase()] = t.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (t.responseFields[o] && (n[t.responseFields[o]] = e),
                      !u &&
                        i &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (u = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = u;
                      else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                          for (r in l)
                            if (
                              (a = r.split(" "))[1] === o &&
                              (s = l[u + " " + a[0]] || l["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = l[r])
                                : !0 !== l[r] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && t.throws) e = s(e);
                          else
                            try {
                              e = s(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? t
                                  : "No conversion from " + u + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(d, x, S, h)),
                h
                  ? (d.ifModified &&
                      ((w = S.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[r] = w),
                      (w = S.getResponseHeader("etag")) && (C.etag[r] = w)),
                    204 === t || "HEAD" === d.type
                      ? (T = "nocontent")
                      : 304 === t
                      ? (T = "notmodified")
                      : ((T = x.state), (f = x.data), (h = !(b = x.error))))
                  : ((b = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                (S.status = t),
                (S.statusText = (e || T) + ""),
                h ? m.resolveWith(p, [f, T, S]) : m.rejectWith(p, [S, T, b]),
                S.statusCode(y),
                (y = void 0),
                c &&
                  g.trigger(h ? "ajaxSuccess" : "ajaxError", [S, d, h ? f : b]),
                v.fireWith(p, [S, T]),
                c &&
                  (g.trigger("ajaxComplete", [S, d]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (t, e, n) {
            return C.get(t, e, n, "json");
          },
          getScript: function (t, e) {
            return C.get(t, void 0, e, "script");
          },
        }),
        C.each(["get", "post"], function (t, e) {
          C[e] = function (t, n, i, r) {
            return (
              v(n) && ((r = r || i), (i = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: t, type: e, dataType: r, data: n, success: i },
                  C.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        C.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            "content-type" === e.toLowerCase() &&
              (t.contentType = t.headers[e] || "");
        }),
        (C._evalUrl = function (t, e, n) {
          return C.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              C.globalEval(t, e, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (v(t) && (t = t.call(this[0])),
                (e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return v(t)
              ? this.each(function (e) {
                  C(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = C(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = v(t);
            return this.each(function (n) {
              C(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (t) {
          return !C.expr.pseudos.visible(t);
        }),
        (C.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var We = { 0: 200, 1223: 204 },
        Ve = C.ajaxSettings.xhr();
      (m.cors = !!Ve && "withCredentials" in Ve),
        (m.ajax = Ve = !!Ve),
        C.ajaxTransport(function (t) {
          var e, i;
          if (m.cors || (Ve && !t.crossDomain))
            return {
              send: function (r, o) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  a.setRequestHeader(s, r[s]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            We[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (i = a.onerror = a.ontimeout = e("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            e && i();
                          });
                      }),
                  (e = e("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        C.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return C.globalEval(t), t;
            },
          },
        }),
        C.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        C.ajaxTransport("script", function (t) {
          var e, n;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (i, r) {
                (e = C("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && r("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  b.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Ke,
        Qe = [],
        Xe = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Qe.pop() || C.expando + "_" + ke.guid++;
          return (this[t] = !0), t;
        },
      }),
        C.ajaxPrefilter("json jsonp", function (t, e, i) {
          var r,
            o,
            s,
            a =
              !1 !== t.jsonp &&
              (Xe.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Xe.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (r = t.jsonpCallback = v(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(Xe, "$1" + r))
                : !1 !== t.jsonp &&
                  (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
              (t.converters["script json"] = function () {
                return s || C.error(r + " was not called"), s[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === o ? C(n).removeProp(r) : (n[r] = o),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), Qe.push(r)),
                  s && v(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Ke = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Ke.childNodes.length)),
        (C.parseHTML = function (t, e, n) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((n = e), (e = !1)),
              e ||
                (m.createHTMLDocument
                  ? (((i = (e = b.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = b.location.href),
                    e.head.appendChild(i))
                  : (e = b)),
              (o = !n && []),
              (r = D.exec(t))
                ? [e.createElement(r[1])]
                : ((r = Tt([t], e, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], r.childNodes)));
          var i, r, o;
        }),
        (C.fn.load = function (t, e, n) {
          var i,
            r,
            o,
            s = this,
            a = t.indexOf(" ");
          return (
            a > -1 && ((i = ye(t.slice(a))), (t = t.slice(0, a))),
            v(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (r = "POST"),
            s.length > 0 &&
              C.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (o = arguments),
                    s.html(i ? C("<div>").append(C.parseHTML(t)).find(i) : t);
                })
                .always(
                  n &&
                    function (t, e) {
                      s.each(function () {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (t) {
          return C.grep(C.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              u,
              l = C.css(t, "position"),
              c = C(t),
              h = {};
            "static" === l && (t.style.position = "relative"),
              (a = c.offset()),
              (o = C.css(t, "top")),
              (u = C.css(t, "left")),
              ("absolute" === l || "fixed" === l) &&
              (o + u).indexOf("auto") > -1
                ? ((s = (i = c.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(u) || 0)),
              v(e) && (e = e.call(t, n, C.extend({}, a))),
              null != e.top && (h.top = e.top - a.top + s),
              null != e.left && (h.left = e.left - a.left + r),
              "using" in e
                ? e.using.call(t, h)
                : ("number" == typeof h.top && (h.top += "px"),
                  "number" == typeof h.left && (h.left += "px"),
                  c.css(h));
          },
        }),
        C.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    C.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((e = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === C.css(i, "position"))
                e = i.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  "static" === C.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== i &&
                  1 === t.nodeType &&
                  (((r = C(t).offset()).top += C.css(t, "borderTopWidth", !0)),
                  (r.left += C.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - r.top - C.css(i, "marginTop", !0),
                left: e.left - r.left - C.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === C.css(t, "position");

              )
                t = t.offsetParent;
              return t || ot;
            });
          },
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var n = "pageYOffset" === e;
            C.fn[t] = function (i) {
              return U(
                this,
                function (t, i, r) {
                  var o;
                  if (
                    (y(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === r)
                  )
                    return o ? o[e] : t[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (t[i] = r);
                },
                t,
                i,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function (t, e) {
          C.cssHooks[e] = Vt(m.pixelPosition, function (t, n) {
            if (n)
              return (n = Wt(t, e)), zt.test(n) ? C(t).position()[e] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function (t, e) {
          C.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (n, i) {
              C.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
                return U(
                  this,
                  function (e, n, r) {
                    var o;
                    return y(e)
                      ? 0 === i.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((o = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          o["scroll" + t],
                          e.body["offset" + t],
                          o["offset" + t],
                          o["client" + t]
                        ))
                      : void 0 === r
                      ? C.css(e, n, a)
                      : C.style(e, n, r, a);
                  },
                  e,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            C.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        C.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            C.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        );
      var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (t, e) {
        var n, i, r;
        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
          return (
            (i = a.call(arguments, 2)),
            ((r = function () {
              return t.apply(e || this, i.concat(a.call(arguments)));
            }).guid = t.guid = t.guid || C.guid++),
            r
          );
      }),
        (C.holdReady = function (t) {
          t ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = A),
        (C.isFunction = v),
        (C.isWindow = y),
        (C.camelCase = Q),
        (C.type = T),
        (C.now = Date.now),
        (C.isNumeric = function (t) {
          var e = C.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (C.trim = function (t) {
          return null == t ? "" : (t + "").replace(Ge, "");
        }),
        void 0 ===
          (i = function () {
            return C;
          }.apply(e, [])) || (t.exports = i);
      var Je = n.jQuery,
        Ye = n.$;
      return (
        (C.noConflict = function (t) {
          return (
            n.$ === C && (n.$ = Ye), t && n.jQuery === C && (n.jQuery = Je), C
          );
        }),
        void 0 === r && (n.jQuery = n.$ = C),
        C
      );
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  ,
  ,
  ,
  ,
  function (t, e, n) {
    n(18), (t.exports = n(40));
  },
  function (t, e, n) {
    (window.$ = window.jQuery = n(4)),
      n(19),
      (window.Bloodhound = n(32)),
      n(33),
      n(37),
      n(38),
      n(39);
  },
  function (t, e, n) {
    n(20),
      n(21),
      n(22),
      n(23),
      n(24),
      n(25),
      n(26),
      n(27),
      n(28),
      n(29),
      n(30),
      n(31);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      (t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
          i = this;
        t(this).one("bsTransitionEnd", function () {
          n = !0;
        });
        return (
          setTimeout(function () {
            n || t(i).trigger(t.support.transition.end);
          }, e),
          this
        );
      }),
        t(function () {
          (t.support.transition = (function () {
            var t = document.createElement("bootstrap"),
              e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend",
              };
            for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
            return !1;
          })()),
            t.support.transition &&
              (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                  if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments);
                },
              });
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = '[data-dismiss="alert"]',
        n = function (n) {
          t(n).on("click", e, this.close);
        };
      (n.VERSION = "3.4.1"),
        (n.TRANSITION_DURATION = 150),
        (n.prototype.close = function (e) {
          var i = t(this),
            r = i.attr("data-target");
          r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")),
            (r = "#" === r ? [] : r);
          var o = t(document).find(r);
          function s() {
            o.detach().trigger("closed.bs.alert").remove();
          }
          e && e.preventDefault(),
            o.length || (o = i.closest(".alert")),
            o.trigger((e = t.Event("close.bs.alert"))),
            e.isDefaultPrevented() ||
              (o.removeClass("in"),
              t.support.transition && o.hasClass("fade")
                ? o
                    .one("bsTransitionEnd", s)
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : s());
        });
      var i = t.fn.alert;
      (t.fn.alert = function (e) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.alert");
          r || i.data("bs.alert", (r = new n(this))),
            "string" == typeof e && r[e].call(i);
        });
      }),
        (t.fn.alert.Constructor = n),
        (t.fn.alert.noConflict = function () {
          return (t.fn.alert = i), this;
        }),
        t(document).on("click.bs.alert.data-api", e, n.prototype.close);
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (n, i) {
        (this.$element = t(n)),
          (this.options = t.extend({}, e.DEFAULTS, i)),
          (this.isLoading = !1);
      };
      function n(n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.button"),
            o = "object" == typeof n && n;
          r || i.data("bs.button", (r = new e(this, o))),
            "toggle" == n ? r.toggle() : n && r.setState(n);
        });
      }
      (e.VERSION = "3.4.1"),
        (e.DEFAULTS = { loadingText: "loading..." }),
        (e.prototype.setState = function (e) {
          var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
          (e += "Text"),
            null == o.resetText && i.data("resetText", i[r]()),
            setTimeout(
              t.proxy(function () {
                i[r](null == o[e] ? this.options[e] : o[e]),
                  "loadingText" == e
                    ? ((this.isLoading = !0),
                      i.addClass(n).attr(n, n).prop(n, !0))
                    : this.isLoading &&
                      ((this.isLoading = !1),
                      i.removeClass(n).removeAttr(n).prop(n, !1));
              }, this),
              0
            );
        }),
        (e.prototype.toggle = function () {
          var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
          if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type")
              ? (n.prop("checked") && (t = !1),
                e.find(".active").removeClass("active"),
                this.$element.addClass("active"))
              : "checkbox" == n.prop("type") &&
                (n.prop("checked") !== this.$element.hasClass("active") &&
                  (t = !1),
                this.$element.toggleClass("active")),
              n.prop("checked", this.$element.hasClass("active")),
              t && n.trigger("change");
          } else
            this.$element.attr(
              "aria-pressed",
              !this.$element.hasClass("active")
            ),
              this.$element.toggleClass("active");
        });
      var i = t.fn.button;
      (t.fn.button = n),
        (t.fn.button.Constructor = e),
        (t.fn.button.noConflict = function () {
          return (t.fn.button = i), this;
        }),
        t(document)
          .on("click.bs.button.data-api", '[data-toggle^="button"]', function (
            e
          ) {
            var i = t(e.target).closest(".btn");
            n.call(i, "toggle"),
              t(e.target).is('input[type="radio"], input[type="checkbox"]') ||
                (e.preventDefault(),
                i.is("input,button")
                  ? i.trigger("focus")
                  : i
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          })
          .on(
            "focus.bs.button.data-api blur.bs.button.data-api",
            '[data-toggle^="button"]',
            function (e) {
              t(e.target)
                .closest(".btn")
                .toggleClass("focus", /^focus(in)?$/.test(e.type));
            }
          );
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (e, n) {
        (this.$element = t(e)),
          (this.$indicators = this.$element.find(".carousel-indicators")),
          (this.options = n),
          (this.paused = null),
          (this.sliding = null),
          (this.interval = null),
          (this.$active = null),
          (this.$items = null),
          this.options.keyboard &&
            this.$element.on(
              "keydown.bs.carousel",
              t.proxy(this.keydown, this)
            ),
          "hover" == this.options.pause &&
            !("ontouchstart" in document.documentElement) &&
            this.$element
              .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
              .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
      };
      function n(n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.carousel"),
            o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
            s = "string" == typeof n ? n : o.slide;
          r || i.data("bs.carousel", (r = new e(this, o))),
            "number" == typeof n
              ? r.to(n)
              : s
              ? r[s]()
              : o.interval && r.pause().cycle();
        });
      }
      (e.VERSION = "3.4.1"),
        (e.TRANSITION_DURATION = 600),
        (e.DEFAULTS = {
          interval: 5e3,
          pause: "hover",
          wrap: !0,
          keyboard: !0,
        }),
        (e.prototype.keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
              case 37:
                this.prev();
                break;
              case 39:
                this.next();
                break;
              default:
                return;
            }
            t.preventDefault();
          }
        }),
        (e.prototype.cycle = function (e) {
          return (
            e || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval &&
              !this.paused &&
              (this.interval = setInterval(
                t.proxy(this.next, this),
                this.options.interval
              )),
            this
          );
        }),
        (e.prototype.getItemIndex = function (t) {
          return (
            (this.$items = t.parent().children(".item")),
            this.$items.index(t || this.$active)
          );
        }),
        (e.prototype.getItemForDirection = function (t, e) {
          var n = this.getItemIndex(e);
          if (
            (("prev" == t && 0 === n) ||
              ("next" == t && n == this.$items.length - 1)) &&
            !this.options.wrap
          )
            return e;
          var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
          return this.$items.eq(i);
        }),
        (e.prototype.to = function (t) {
          var e = this,
            n = this.getItemIndex(
              (this.$active = this.$element.find(".item.active"))
            );
          if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding
              ? this.$element.one("slid.bs.carousel", function () {
                  e.to(t);
                })
              : n == t
              ? this.pause().cycle()
              : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
        }),
        (e.prototype.pause = function (e) {
          return (
            e || (this.paused = !0),
            this.$element.find(".next, .prev").length &&
              t.support.transition &&
              (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
            (this.interval = clearInterval(this.interval)),
            this
          );
        }),
        (e.prototype.next = function () {
          if (!this.sliding) return this.slide("next");
        }),
        (e.prototype.prev = function () {
          if (!this.sliding) return this.slide("prev");
        }),
        (e.prototype.slide = function (n, i) {
          var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(n, r),
            s = this.interval,
            a = "next" == n ? "left" : "right",
            u = this;
          if (o.hasClass("active")) return (this.sliding = !1);
          var l = o[0],
            c = t.Event("slide.bs.carousel", {
              relatedTarget: l,
              direction: a,
            });
          if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
            if (
              ((this.sliding = !0), s && this.pause(), this.$indicators.length)
            ) {
              this.$indicators.find(".active").removeClass("active");
              var h = t(this.$indicators.children()[this.getItemIndex(o)]);
              h && h.addClass("active");
            }
            var f = t.Event("slid.bs.carousel", {
              relatedTarget: l,
              direction: a,
            });
            return (
              t.support.transition && this.$element.hasClass("slide")
                ? (o.addClass(n),
                  "object" == typeof o && o.length && o[0].offsetWidth,
                  r.addClass(a),
                  o.addClass(a),
                  r
                    .one("bsTransitionEnd", function () {
                      o.removeClass([n, a].join(" ")).addClass("active"),
                        r.removeClass(["active", a].join(" ")),
                        (u.sliding = !1),
                        setTimeout(function () {
                          u.$element.trigger(f);
                        }, 0);
                    })
                    .emulateTransitionEnd(e.TRANSITION_DURATION))
                : (r.removeClass("active"),
                  o.addClass("active"),
                  (this.sliding = !1),
                  this.$element.trigger(f)),
              s && this.cycle(),
              this
            );
          }
        });
      var i = t.fn.carousel;
      (t.fn.carousel = n),
        (t.fn.carousel.Constructor = e),
        (t.fn.carousel.noConflict = function () {
          return (t.fn.carousel = i), this;
        });
      var r = function (e) {
        var i = t(this),
          r = i.attr("href");
        r && (r = r.replace(/.*(?=#[^\s]+$)/, ""));
        var o = i.attr("data-target") || r,
          s = t(document).find(o);
        if (s.hasClass("carousel")) {
          var a = t.extend({}, s.data(), i.data()),
            u = i.attr("data-slide-to");
          u && (a.interval = !1),
            n.call(s, a),
            u && s.data("bs.carousel").to(u),
            e.preventDefault();
        }
      };
      t(document)
        .on("click.bs.carousel.data-api", "[data-slide]", r)
        .on("click.bs.carousel.data-api", "[data-slide-to]", r),
        t(window).on("load", function () {
          t('[data-ride="carousel"]').each(function () {
            var e = t(this);
            n.call(e, e.data());
          });
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (n, i) {
        (this.$element = t(n)),
          (this.options = t.extend({}, e.DEFAULTS, i)),
          (this.$trigger = t(
            '[data-toggle="collapse"][href="#' +
              n.id +
              '"],[data-toggle="collapse"][data-target="#' +
              n.id +
              '"]'
          )),
          (this.transitioning = null),
          this.options.parent
            ? (this.$parent = this.getParent())
            : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
          this.options.toggle && this.toggle();
      };
      function n(e) {
        var n,
          i =
            e.attr("data-target") ||
            ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        return t(document).find(i);
      }
      function i(n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.collapse"),
            o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
          !r && o.toggle && /show|hide/.test(n) && (o.toggle = !1),
            r || i.data("bs.collapse", (r = new e(this, o))),
            "string" == typeof n && r[n]();
        });
      }
      (e.VERSION = "3.4.1"),
        (e.TRANSITION_DURATION = 350),
        (e.DEFAULTS = { toggle: !0 }),
        (e.prototype.dimension = function () {
          return this.$element.hasClass("width") ? "width" : "height";
        }),
        (e.prototype.show = function () {
          if (!this.transitioning && !this.$element.hasClass("in")) {
            var n,
              r =
                this.$parent &&
                this.$parent.children(".panel").children(".in, .collapsing");
            if (
              !(r && r.length && (n = r.data("bs.collapse")) && n.transitioning)
            ) {
              var o = t.Event("show.bs.collapse");
              if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
                r &&
                  r.length &&
                  (i.call(r, "hide"), n || r.data("bs.collapse", null));
                var s = this.dimension();
                this.$element
                  .removeClass("collapse")
                  .addClass("collapsing")
                  [s](0)
                  .attr("aria-expanded", !0),
                  this.$trigger
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                  (this.transitioning = 1);
                var a = function () {
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse in")
                    [s](""),
                    (this.transitioning = 0),
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!t.support.transition) return a.call(this);
                var u = t.camelCase(["scroll", s].join("-"));
                this.$element
                  .one("bsTransitionEnd", t.proxy(a, this))
                  .emulateTransitionEnd(e.TRANSITION_DURATION)
                  [s](this.$element[0][u]);
              }
            }
          }
        }),
        (e.prototype.hide = function () {
          if (!this.transitioning && this.$element.hasClass("in")) {
            var n = t.Event("hide.bs.collapse");
            if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
              var i = this.dimension();
              this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element
                  .addClass("collapsing")
                  .removeClass("collapse in")
                  .attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                (this.transitioning = 1);
              var r = function () {
                (this.transitioning = 0),
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse")
                    .trigger("hidden.bs.collapse");
              };
              if (!t.support.transition) return r.call(this);
              this.$element[i](0)
                .one("bsTransitionEnd", t.proxy(r, this))
                .emulateTransitionEnd(e.TRANSITION_DURATION);
            }
          }
        }),
        (e.prototype.toggle = function () {
          this[this.$element.hasClass("in") ? "hide" : "show"]();
        }),
        (e.prototype.getParent = function () {
          return t(document)
            .find(this.options.parent)
            .find(
              '[data-toggle="collapse"][data-parent="' +
                this.options.parent +
                '"]'
            )
            .each(
              t.proxy(function (e, i) {
                var r = t(i);
                this.addAriaAndCollapsedClass(n(r), r);
              }, this)
            )
            .end();
        }),
        (e.prototype.addAriaAndCollapsedClass = function (t, e) {
          var n = t.hasClass("in");
          t.attr("aria-expanded", n),
            e.toggleClass("collapsed", !n).attr("aria-expanded", n);
        });
      var r = t.fn.collapse;
      (t.fn.collapse = i),
        (t.fn.collapse.Constructor = e),
        (t.fn.collapse.noConflict = function () {
          return (t.fn.collapse = r), this;
        }),
        t(document).on(
          "click.bs.collapse.data-api",
          '[data-toggle="collapse"]',
          function (e) {
            var r = t(this);
            r.attr("data-target") || e.preventDefault();
            var o = n(r),
              s = o.data("bs.collapse") ? "toggle" : r.data();
            i.call(o, s);
          }
        );
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = '[data-toggle="dropdown"]',
        n = function (e) {
          t(e).on("click.bs.dropdown", this.toggle);
        };
      function i(e) {
        var n = e.attr("data-target");
        n ||
          (n =
            (n = e.attr("href")) &&
            /#[A-Za-z]/.test(n) &&
            n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? t(document).find(n) : null;
        return i && i.length ? i : e.parent();
      }
      function r(n) {
        (n && 3 === n.which) ||
          (t(".dropdown-backdrop").remove(),
          t(e).each(function () {
            var e = t(this),
              r = i(e),
              o = { relatedTarget: this };
            r.hasClass("open") &&
              ((n &&
                "click" == n.type &&
                /input|textarea/i.test(n.target.tagName) &&
                t.contains(r[0], n.target)) ||
                (r.trigger((n = t.Event("hide.bs.dropdown", o))),
                n.isDefaultPrevented() ||
                  (e.attr("aria-expanded", "false"),
                  r
                    .removeClass("open")
                    .trigger(t.Event("hidden.bs.dropdown", o)))));
          }));
      }
      (n.VERSION = "3.4.1"),
        (n.prototype.toggle = function (e) {
          var n = t(this);
          if (!n.is(".disabled, :disabled")) {
            var o = i(n),
              s = o.hasClass("open");
            if ((r(), !s)) {
              "ontouchstart" in document.documentElement &&
                !o.closest(".navbar-nav").length &&
                t(document.createElement("div"))
                  .addClass("dropdown-backdrop")
                  .insertAfter(t(this))
                  .on("click", r);
              var a = { relatedTarget: this };
              if (
                (o.trigger((e = t.Event("show.bs.dropdown", a))),
                e.isDefaultPrevented())
              )
                return;
              n.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
            }
            return !1;
          }
        }),
        (n.prototype.keydown = function (n) {
          if (
            /(38|40|27|32)/.test(n.which) &&
            !/input|textarea/i.test(n.target.tagName)
          ) {
            var r = t(this);
            if (
              (n.preventDefault(),
              n.stopPropagation(),
              !r.is(".disabled, :disabled"))
            ) {
              var o = i(r),
                s = o.hasClass("open");
              if ((!s && 27 != n.which) || (s && 27 == n.which))
                return (
                  27 == n.which && o.find(e).trigger("focus"),
                  r.trigger("click")
                );
              var a = o.find(".dropdown-menu li:not(.disabled):visible a");
              if (a.length) {
                var u = a.index(n.target);
                38 == n.which && u > 0 && u--,
                  40 == n.which && u < a.length - 1 && u++,
                  ~u || (u = 0),
                  a.eq(u).trigger("focus");
              }
            }
          }
        });
      var o = t.fn.dropdown;
      (t.fn.dropdown = function (e) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.dropdown");
          r || i.data("bs.dropdown", (r = new n(this))),
            "string" == typeof e && r[e].call(i);
        });
      }),
        (t.fn.dropdown.Constructor = n),
        (t.fn.dropdown.noConflict = function () {
          return (t.fn.dropdown = o), this;
        }),
        t(document)
          .on("click.bs.dropdown.data-api", r)
          .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation();
          })
          .on("click.bs.dropdown.data-api", e, n.prototype.toggle)
          .on("keydown.bs.dropdown.data-api", e, n.prototype.keydown)
          .on(
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            n.prototype.keydown
          );
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (e, n) {
        (this.options = n),
          (this.$body = t(document.body)),
          (this.$element = t(e)),
          (this.$dialog = this.$element.find(".modal-dialog")),
          (this.$backdrop = null),
          (this.isShown = null),
          (this.originalBodyPad = null),
          (this.scrollbarWidth = 0),
          (this.ignoreBackdropClick = !1),
          (this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom"),
          this.options.remote &&
            this.$element.find(".modal-content").load(
              this.options.remote,
              t.proxy(function () {
                this.$element.trigger("loaded.bs.modal");
              }, this)
            );
      };
      function n(n, i) {
        return this.each(function () {
          var r = t(this),
            o = r.data("bs.modal"),
            s = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
          o || r.data("bs.modal", (o = new e(this, s))),
            "string" == typeof n ? o[n](i) : s.show && o.show(i);
        });
      }
      (e.VERSION = "3.4.1"),
        (e.TRANSITION_DURATION = 300),
        (e.BACKDROP_TRANSITION_DURATION = 150),
        (e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
        (e.prototype.toggle = function (t) {
          return this.isShown ? this.hide() : this.show(t);
        }),
        (e.prototype.show = function (n) {
          var i = this,
            r = t.Event("show.bs.modal", { relatedTarget: n });
          this.$element.trigger(r),
            this.isShown ||
              r.isDefaultPrevented() ||
              ((this.isShown = !0),
              this.checkScrollbar(),
              this.setScrollbar(),
              this.$body.addClass("modal-open"),
              this.escape(),
              this.resize(),
              this.$element.on(
                "click.dismiss.bs.modal",
                '[data-dismiss="modal"]',
                t.proxy(this.hide, this)
              ),
              this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                  t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
                });
              }),
              this.backdrop(function () {
                var r = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body),
                  i.$element.show().scrollTop(0),
                  i.adjustDialog(),
                  r && i.$element[0].offsetWidth,
                  i.$element.addClass("in"),
                  i.enforceFocus();
                var o = t.Event("shown.bs.modal", { relatedTarget: n });
                r
                  ? i.$dialog
                      .one("bsTransitionEnd", function () {
                        i.$element.trigger("focus").trigger(o);
                      })
                      .emulateTransitionEnd(e.TRANSITION_DURATION)
                  : i.$element.trigger("focus").trigger(o);
              }));
        }),
        (e.prototype.hide = function (n) {
          n && n.preventDefault(),
            (n = t.Event("hide.bs.modal")),
            this.$element.trigger(n),
            this.isShown &&
              !n.isDefaultPrevented() &&
              ((this.isShown = !1),
              this.escape(),
              this.resize(),
              t(document).off("focusin.bs.modal"),
              this.$element
                .removeClass("in")
                .off("click.dismiss.bs.modal")
                .off("mouseup.dismiss.bs.modal"),
              this.$dialog.off("mousedown.dismiss.bs.modal"),
              t.support.transition && this.$element.hasClass("fade")
                ? this.$element
                    .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                    .emulateTransitionEnd(e.TRANSITION_DURATION)
                : this.hideModal());
        }),
        (e.prototype.enforceFocus = function () {
          t(document)
            .off("focusin.bs.modal")
            .on(
              "focusin.bs.modal",
              t.proxy(function (t) {
                document === t.target ||
                  this.$element[0] === t.target ||
                  this.$element.has(t.target).length ||
                  this.$element.trigger("focus");
              }, this)
            );
        }),
        (e.prototype.escape = function () {
          this.isShown && this.options.keyboard
            ? this.$element.on(
                "keydown.dismiss.bs.modal",
                t.proxy(function (t) {
                  27 == t.which && this.hide();
                }, this)
              )
            : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
        }),
        (e.prototype.resize = function () {
          this.isShown
            ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
            : t(window).off("resize.bs.modal");
        }),
        (e.prototype.hideModal = function () {
          var t = this;
          this.$element.hide(),
            this.backdrop(function () {
              t.$body.removeClass("modal-open"),
                t.resetAdjustments(),
                t.resetScrollbar(),
                t.$element.trigger("hidden.bs.modal");
            });
        }),
        (e.prototype.removeBackdrop = function () {
          this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
        }),
        (e.prototype.backdrop = function (n) {
          var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
          if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (
              ((this.$backdrop = t(document.createElement("div"))
                .addClass("modal-backdrop " + r)
                .appendTo(this.$body)),
              this.$element.on(
                "click.dismiss.bs.modal",
                t.proxy(function (t) {
                  this.ignoreBackdropClick
                    ? (this.ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide());
                }, this)
              ),
              o && this.$backdrop[0].offsetWidth,
              this.$backdrop.addClass("in"),
              !n)
            )
              return;
            o
              ? this.$backdrop
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
              : n();
          } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
              i.removeBackdrop(), n && n();
            };
            t.support.transition && this.$element.hasClass("fade")
              ? this.$backdrop
                  .one("bsTransitionEnd", s)
                  .emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
              : s();
          } else n && n();
        }),
        (e.prototype.handleUpdate = function () {
          this.adjustDialog();
        }),
        (e.prototype.adjustDialog = function () {
          var t =
            this.$element[0].scrollHeight >
            document.documentElement.clientHeight;
          this.$element.css({
            paddingLeft:
              !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight:
              this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
          });
        }),
        (e.prototype.resetAdjustments = function () {
          this.$element.css({ paddingLeft: "", paddingRight: "" });
        }),
        (e.prototype.checkScrollbar = function () {
          var t = window.innerWidth;
          if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left);
          }
          (this.bodyIsOverflowing = document.body.clientWidth < t),
            (this.scrollbarWidth = this.measureScrollbar());
        }),
        (e.prototype.setScrollbar = function () {
          var e = parseInt(this.$body.css("padding-right") || 0, 10);
          this.originalBodyPad = document.body.style.paddingRight || "";
          var n = this.scrollbarWidth;
          this.bodyIsOverflowing &&
            (this.$body.css("padding-right", e + n),
            t(this.fixedContent).each(function (e, i) {
              var r = i.style.paddingRight,
                o = t(i).css("padding-right");
              t(i)
                .data("padding-right", r)
                .css("padding-right", parseFloat(o) + n + "px");
            }));
        }),
        (e.prototype.resetScrollbar = function () {
          this.$body.css("padding-right", this.originalBodyPad),
            t(this.fixedContent).each(function (e, n) {
              var i = t(n).data("padding-right");
              t(n).removeData("padding-right"),
                (n.style.paddingRight = i || "");
            });
        }),
        (e.prototype.measureScrollbar = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"), this.$body.append(t);
          var e = t.offsetWidth - t.clientWidth;
          return this.$body[0].removeChild(t), e;
        });
      var i = t.fn.modal;
      (t.fn.modal = n),
        (t.fn.modal.Constructor = e),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = i), this;
        }),
        t(document).on(
          "click.bs.modal.data-api",
          '[data-toggle="modal"]',
          function (e) {
            var i = t(this),
              r = i.attr("href"),
              o =
                i.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, "")),
              s = t(document).find(o),
              a = s.data("bs.modal")
                ? "toggle"
                : t.extend({ remote: !/#/.test(r) && r }, s.data(), i.data());
            i.is("a") && e.preventDefault(),
              s.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() ||
                  s.one("hidden.bs.modal", function () {
                    i.is(":visible") && i.trigger("focus");
                  });
              }),
              n.call(s, a, this);
          }
        );
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = ["sanitize", "whiteList", "sanitizeFn"],
        n = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        i = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
      function s(e, i) {
        var s = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(s, i))
          return (
            -1 === t.inArray(s, n) ||
            Boolean(e.nodeValue.match(r) || e.nodeValue.match(o))
          );
        for (
          var a = t(i).filter(function (t, e) {
              return e instanceof RegExp;
            }),
            u = 0,
            l = a.length;
          u < l;
          u++
        )
          if (s.match(a[u])) return !0;
        return !1;
      }
      function a(e, n, i) {
        if (0 === e.length) return e;
        if (i && "function" == typeof i) return i(e);
        if (
          !document.implementation ||
          !document.implementation.createHTMLDocument
        )
          return e;
        var r = document.implementation.createHTMLDocument("sanitization");
        r.body.innerHTML = e;
        for (
          var o = t.map(n, function (t, e) {
              return e;
            }),
            a = t(r.body).find("*"),
            u = 0,
            l = a.length;
          u < l;
          u++
        ) {
          var c = a[u],
            h = c.nodeName.toLowerCase();
          if (-1 !== t.inArray(h, o))
            for (
              var f = t.map(c.attributes, function (t) {
                  return t;
                }),
                d = [].concat(n["*"] || [], n[h] || []),
                p = 0,
                g = f.length;
              p < g;
              p++
            )
              s(f[p], d) || c.removeAttribute(f[p].nodeName);
          else c.parentNode.removeChild(c);
        }
        return r.body.innerHTML;
      }
      var u = function (t, e) {
        (this.type = null),
          (this.options = null),
          (this.enabled = null),
          (this.timeout = null),
          (this.hoverState = null),
          (this.$element = null),
          (this.inState = null),
          this.init("tooltip", t, e);
      };
      (u.VERSION = "3.4.1"),
        (u.TRANSITION_DURATION = 150),
        (u.DEFAULTS = {
          animation: !0,
          placement: "top",
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          container: !1,
          viewport: { selector: "body", padding: 0 },
          sanitize: !0,
          sanitizeFn: null,
          whiteList: i,
        }),
        (u.prototype.init = function (e, n, i) {
          if (
            ((this.enabled = !0),
            (this.type = e),
            (this.$element = t(n)),
            (this.options = this.getOptions(i)),
            (this.$viewport =
              this.options.viewport &&
              t(document).find(
                t.isFunction(this.options.viewport)
                  ? this.options.viewport.call(this, this.$element)
                  : this.options.viewport.selector || this.options.viewport
              )),
            (this.inState = { click: !1, hover: !1, focus: !1 }),
            this.$element[0] instanceof document.constructor &&
              !this.options.selector)
          )
            throw new Error(
              "`selector` option must be specified when initializing " +
                this.type +
                " on the window.document object!"
            );
          for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
            var s = r[o];
            if ("click" == s)
              this.$element.on(
                "click." + this.type,
                this.options.selector,
                t.proxy(this.toggle, this)
              );
            else if ("manual" != s) {
              var a = "hover" == s ? "mouseenter" : "focusin",
                u = "hover" == s ? "mouseleave" : "focusout";
              this.$element.on(
                a + "." + this.type,
                this.options.selector,
                t.proxy(this.enter, this)
              ),
                this.$element.on(
                  u + "." + this.type,
                  this.options.selector,
                  t.proxy(this.leave, this)
                );
            }
          }
          this.options.selector
            ? (this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: "",
              }))
            : this.fixTitle();
        }),
        (u.prototype.getDefaults = function () {
          return u.DEFAULTS;
        }),
        (u.prototype.getOptions = function (n) {
          var i = this.$element.data();
          for (var r in i)
            i.hasOwnProperty(r) && -1 !== t.inArray(r, e) && delete i[r];
          return (
            (n = t.extend({}, this.getDefaults(), i, n)).delay &&
              "number" == typeof n.delay &&
              (n.delay = { show: n.delay, hide: n.delay }),
            n.sanitize &&
              (n.template = a(n.template, n.whiteList, n.sanitizeFn)),
            n
          );
        }),
        (u.prototype.getDelegateOptions = function () {
          var e = {},
            n = this.getDefaults();
          return (
            this._options &&
              t.each(this._options, function (t, i) {
                n[t] != i && (e[t] = i);
              }),
            e
          );
        }),
        (u.prototype.enter = function (e) {
          var n =
            e instanceof this.constructor
              ? e
              : t(e.currentTarget).data("bs." + this.type);
          if (
            (n ||
              ((n = new this.constructor(
                e.currentTarget,
                this.getDelegateOptions()
              )),
              t(e.currentTarget).data("bs." + this.type, n)),
            e instanceof t.Event &&
              (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
            n.tip().hasClass("in") || "in" == n.hoverState)
          )
            n.hoverState = "in";
          else {
            if (
              (clearTimeout(n.timeout),
              (n.hoverState = "in"),
              !n.options.delay || !n.options.delay.show)
            )
              return n.show();
            n.timeout = setTimeout(function () {
              "in" == n.hoverState && n.show();
            }, n.options.delay.show);
          }
        }),
        (u.prototype.isInStateTrue = function () {
          for (var t in this.inState) if (this.inState[t]) return !0;
          return !1;
        }),
        (u.prototype.leave = function (e) {
          var n =
            e instanceof this.constructor
              ? e
              : t(e.currentTarget).data("bs." + this.type);
          if (
            (n ||
              ((n = new this.constructor(
                e.currentTarget,
                this.getDelegateOptions()
              )),
              t(e.currentTarget).data("bs." + this.type, n)),
            e instanceof t.Event &&
              (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
            !n.isInStateTrue())
          ) {
            if (
              (clearTimeout(n.timeout),
              (n.hoverState = "out"),
              !n.options.delay || !n.options.delay.hide)
            )
              return n.hide();
            n.timeout = setTimeout(function () {
              "out" == n.hoverState && n.hide();
            }, n.options.delay.hide);
          }
        }),
        (u.prototype.show = function () {
          var e = t.Event("show.bs." + this.type);
          if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(
              this.$element[0].ownerDocument.documentElement,
              this.$element[0]
            );
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
              r = this.tip(),
              o = this.getUID(this.type);
            this.setContent(),
              r.attr("id", o),
              this.$element.attr("aria-describedby", o),
              this.options.animation && r.addClass("fade");
            var s =
                "function" == typeof this.options.placement
                  ? this.options.placement.call(this, r[0], this.$element[0])
                  : this.options.placement,
              a = /\s?auto?\s?/i,
              l = a.test(s);
            l && (s = s.replace(a, "") || "top"),
              r
                .detach()
                .css({ top: 0, left: 0, display: "block" })
                .addClass(s)
                .data("bs." + this.type, this),
              this.options.container
                ? r.appendTo(t(document).find(this.options.container))
                : r.insertAfter(this.$element),
              this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
              h = r[0].offsetWidth,
              f = r[0].offsetHeight;
            if (l) {
              var d = s,
                p = this.getPosition(this.$viewport);
              (s =
                "bottom" == s && c.bottom + f > p.bottom
                  ? "top"
                  : "top" == s && c.top - f < p.top
                  ? "bottom"
                  : "right" == s && c.right + h > p.width
                  ? "left"
                  : "left" == s && c.left - h < p.left
                  ? "right"
                  : s),
                r.removeClass(d).addClass(s);
            }
            var g = this.getCalculatedOffset(s, c, h, f);
            this.applyPlacement(g, s);
            var m = function () {
              var t = i.hoverState;
              i.$element.trigger("shown.bs." + i.type),
                (i.hoverState = null),
                "out" == t && i.leave(i);
            };
            t.support.transition && this.$tip.hasClass("fade")
              ? r
                  .one("bsTransitionEnd", m)
                  .emulateTransitionEnd(u.TRANSITION_DURATION)
              : m();
          }
        }),
        (u.prototype.applyPlacement = function (e, n) {
          var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
          isNaN(s) && (s = 0),
            isNaN(a) && (a = 0),
            (e.top += s),
            (e.left += a),
            t.offset.setOffset(
              i[0],
              t.extend(
                {
                  using: function (t) {
                    i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                  },
                },
                e
              ),
              0
            ),
            i.addClass("in");
          var u = i[0].offsetWidth,
            l = i[0].offsetHeight;
          "top" == n && l != o && (e.top = e.top + o - l);
          var c = this.getViewportAdjustedDelta(n, e, u, l);
          c.left ? (e.left += c.left) : (e.top += c.top);
          var h = /top|bottom/.test(n),
            f = h ? 2 * c.left - r + u : 2 * c.top - o + l,
            d = h ? "offsetWidth" : "offsetHeight";
          i.offset(e), this.replaceArrow(f, i[0][d], h);
        }),
        (u.prototype.replaceArrow = function (t, e, n) {
          this.arrow()
            .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
            .css(n ? "top" : "left", "");
        }),
        (u.prototype.setContent = function () {
          var t = this.tip(),
            e = this.getTitle();
          this.options.html
            ? (this.options.sanitize &&
                (e = a(e, this.options.whiteList, this.options.sanitizeFn)),
              t.find(".tooltip-inner").html(e))
            : t.find(".tooltip-inner").text(e),
            t.removeClass("fade in top bottom left right");
        }),
        (u.prototype.hide = function (e) {
          var n = this,
            i = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
          function o() {
            "in" != n.hoverState && i.detach(),
              n.$element &&
                n.$element
                  .removeAttr("aria-describedby")
                  .trigger("hidden.bs." + n.type),
              e && e();
          }
          if ((this.$element.trigger(r), !r.isDefaultPrevented()))
            return (
              i.removeClass("in"),
              t.support.transition && i.hasClass("fade")
                ? i
                    .one("bsTransitionEnd", o)
                    .emulateTransitionEnd(u.TRANSITION_DURATION)
                : o(),
              (this.hoverState = null),
              this
            );
        }),
        (u.prototype.fixTitle = function () {
          var t = this.$element;
          (t.attr("title") ||
            "string" != typeof t.attr("data-original-title")) &&
            t
              .attr("data-original-title", t.attr("title") || "")
              .attr("title", "");
        }),
        (u.prototype.hasContent = function () {
          return this.getTitle();
        }),
        (u.prototype.getPosition = function (e) {
          var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
          null == r.width &&
            (r = t.extend({}, r, {
              width: r.right - r.left,
              height: r.bottom - r.top,
            }));
          var o = window.SVGElement && n instanceof window.SVGElement,
            s = i ? { top: 0, left: 0 } : o ? null : e.offset(),
            a = {
              scroll: i
                ? document.documentElement.scrollTop || document.body.scrollTop
                : e.scrollTop(),
            },
            u = i
              ? { width: t(window).width(), height: t(window).height() }
              : null;
          return t.extend({}, r, a, u, s);
        }),
        (u.prototype.getCalculatedOffset = function (t, e, n, i) {
          return "bottom" == t
            ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
            : "top" == t
            ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
            : "left" == t
            ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
            : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
        }),
        (u.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
          var r = { top: 0, left: 0 };
          if (!this.$viewport) return r;
          var o = (this.options.viewport && this.options.viewport.padding) || 0,
            s = this.getPosition(this.$viewport);
          if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
              u = e.top + o - s.scroll + i;
            a < s.top
              ? (r.top = s.top - a)
              : u > s.top + s.height && (r.top = s.top + s.height - u);
          } else {
            var l = e.left - o,
              c = e.left + o + n;
            l < s.left
              ? (r.left = s.left - l)
              : c > s.right && (r.left = s.left + s.width - c);
          }
          return r;
        }),
        (u.prototype.getTitle = function () {
          var t = this.$element,
            e = this.options;
          return (
            t.attr("data-original-title") ||
            ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
          );
        }),
        (u.prototype.getUID = function (t) {
          do {
            t += ~~(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        }),
        (u.prototype.tip = function () {
          if (
            !this.$tip &&
            ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
          )
            throw new Error(
              this.type +
                " `template` option must consist of exactly 1 top-level element!"
            );
          return this.$tip;
        }),
        (u.prototype.arrow = function () {
          return (this.$arrow =
            this.$arrow || this.tip().find(".tooltip-arrow"));
        }),
        (u.prototype.enable = function () {
          this.enabled = !0;
        }),
        (u.prototype.disable = function () {
          this.enabled = !1;
        }),
        (u.prototype.toggleEnabled = function () {
          this.enabled = !this.enabled;
        }),
        (u.prototype.toggle = function (e) {
          var n = this;
          e &&
            ((n = t(e.currentTarget).data("bs." + this.type)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this.getDelegateOptions()
              )),
              t(e.currentTarget).data("bs." + this.type, n))),
            e
              ? ((n.inState.click = !n.inState.click),
                n.isInStateTrue() ? n.enter(n) : n.leave(n))
              : n.tip().hasClass("in")
              ? n.leave(n)
              : n.enter(n);
        }),
        (u.prototype.destroy = function () {
          var t = this;
          clearTimeout(this.timeout),
            this.hide(function () {
              t.$element.off("." + t.type).removeData("bs." + t.type),
                t.$tip && t.$tip.detach(),
                (t.$tip = null),
                (t.$arrow = null),
                (t.$viewport = null),
                (t.$element = null);
            });
        }),
        (u.prototype.sanitizeHtml = function (t) {
          return a(t, this.options.whiteList, this.options.sanitizeFn);
        });
      var l = t.fn.tooltip;
      (t.fn.tooltip = function (e) {
        return this.each(function () {
          var n = t(this),
            i = n.data("bs.tooltip"),
            r = "object" == typeof e && e;
          (!i && /destroy|hide/.test(e)) ||
            (i || n.data("bs.tooltip", (i = new u(this, r))),
            "string" == typeof e && i[e]());
        });
      }),
        (t.fn.tooltip.Constructor = u),
        (t.fn.tooltip.noConflict = function () {
          return (t.fn.tooltip = l), this;
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (t, e) {
        this.init("popover", t, e);
      };
      if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
      (e.VERSION = "3.4.1"),
        (e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        })),
        ((e.prototype = t.extend(
          {},
          t.fn.tooltip.Constructor.prototype
        )).constructor = e),
        (e.prototype.getDefaults = function () {
          return e.DEFAULTS;
        }),
        (e.prototype.setContent = function () {
          var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
          if (this.options.html) {
            var i = typeof n;
            this.options.sanitize &&
              ((e = this.sanitizeHtml(e)),
              "string" === i && (n = this.sanitizeHtml(n))),
              t.find(".popover-title").html(e),
              t
                .find(".popover-content")
                .children()
                .detach()
                .end()
                ["string" === i ? "html" : "append"](n);
          } else
            t.find(".popover-title").text(e),
              t.find(".popover-content").children().detach().end().text(n);
          t.removeClass("fade top bottom left right in"),
            t.find(".popover-title").html() || t.find(".popover-title").hide();
        }),
        (e.prototype.hasContent = function () {
          return this.getTitle() || this.getContent();
        }),
        (e.prototype.getContent = function () {
          var t = this.$element,
            e = this.options;
          return (
            t.attr("data-content") ||
            ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
          );
        }),
        (e.prototype.arrow = function () {
          return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
        });
      var n = t.fn.popover;
      (t.fn.popover = function (n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.popover"),
            o = "object" == typeof n && n;
          (!r && /destroy|hide/.test(n)) ||
            (r || i.data("bs.popover", (r = new e(this, o))),
            "string" == typeof n && r[n]());
        });
      }),
        (t.fn.popover.Constructor = e),
        (t.fn.popover.noConflict = function () {
          return (t.fn.popover = n), this;
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      function e(n, i) {
        (this.$body = t(document.body)),
          (this.$scrollElement = t(n).is(document.body) ? t(window) : t(n)),
          (this.options = t.extend({}, e.DEFAULTS, i)),
          (this.selector = (this.options.target || "") + " .nav li > a"),
          (this.offsets = []),
          (this.targets = []),
          (this.activeTarget = null),
          (this.scrollHeight = 0),
          this.$scrollElement.on(
            "scroll.bs.scrollspy",
            t.proxy(this.process, this)
          ),
          this.refresh(),
          this.process();
      }
      function n(n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.scrollspy"),
            o = "object" == typeof n && n;
          r || i.data("bs.scrollspy", (r = new e(this, o))),
            "string" == typeof n && r[n]();
        });
      }
      (e.VERSION = "3.4.1"),
        (e.DEFAULTS = { offset: 10 }),
        (e.prototype.getScrollHeight = function () {
          return (
            this.$scrollElement[0].scrollHeight ||
            Math.max(
              this.$body[0].scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e.prototype.refresh = function () {
          var e = this,
            n = "offset",
            i = 0;
          (this.offsets = []),
            (this.targets = []),
            (this.scrollHeight = this.getScrollHeight()),
            t.isWindow(this.$scrollElement[0]) ||
              ((n = "position"), (i = this.$scrollElement.scrollTop())),
            this.$body
              .find(this.selector)
              .map(function () {
                var e = t(this),
                  r = e.data("target") || e.attr("href"),
                  o = /^#./.test(r) && t(r);
                return (
                  (o &&
                    o.length &&
                    o.is(":visible") && [[o[n]().top + i, r]]) ||
                  null
                );
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1]);
              });
        }),
        (e.prototype.process = function () {
          var t,
            e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
          if ((this.scrollHeight != n && this.refresh(), e >= i))
            return s != (t = o[o.length - 1]) && this.activate(t);
          if (s && e < r[0]) return (this.activeTarget = null), this.clear();
          for (t = r.length; t--; )
            s != o[t] &&
              e >= r[t] &&
              (void 0 === r[t + 1] || e < r[t + 1]) &&
              this.activate(o[t]);
        }),
        (e.prototype.activate = function (e) {
          (this.activeTarget = e), this.clear();
          var n =
              this.selector +
              '[data-target="' +
              e +
              '"],' +
              this.selector +
              '[href="' +
              e +
              '"]',
            i = t(n).parents("li").addClass("active");
          i.parent(".dropdown-menu").length &&
            (i = i.closest("li.dropdown").addClass("active")),
            i.trigger("activate.bs.scrollspy");
        }),
        (e.prototype.clear = function () {
          t(this.selector)
            .parentsUntil(this.options.target, ".active")
            .removeClass("active");
        });
      var i = t.fn.scrollspy;
      (t.fn.scrollspy = n),
        (t.fn.scrollspy.Constructor = e),
        (t.fn.scrollspy.noConflict = function () {
          return (t.fn.scrollspy = i), this;
        }),
        t(window).on("load.bs.scrollspy.data-api", function () {
          t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data());
          });
        });
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (e) {
        this.element = t(e);
      };
      function n(n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.tab");
          r || i.data("bs.tab", (r = new e(this))),
            "string" == typeof n && r[n]();
        });
      }
      (e.VERSION = "3.4.1"),
        (e.TRANSITION_DURATION = 150),
        (e.prototype.show = function () {
          var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
          if (
            (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
            !e.parent("li").hasClass("active"))
          ) {
            var r = n.find(".active:last a"),
              o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
              s = t.Event("show.bs.tab", { relatedTarget: r[0] });
            if (
              (r.trigger(o),
              e.trigger(s),
              !s.isDefaultPrevented() && !o.isDefaultPrevented())
            ) {
              var a = t(document).find(i);
              this.activate(e.closest("li"), n),
                this.activate(a, a.parent(), function () {
                  r.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                    e.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
                });
            }
          }
        }),
        (e.prototype.activate = function (n, i, r) {
          var o = i.find("> .active"),
            s =
              r &&
              t.support.transition &&
              ((o.length && o.hasClass("fade")) || !!i.find("> .fade").length);
          function a() {
            o
              .removeClass("active")
              .find("> .dropdown-menu > .active")
              .removeClass("active")
              .end()
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !1),
              n
                .addClass("active")
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
              s ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"),
              n.parent(".dropdown-menu").length &&
                n
                  .closest("li.dropdown")
                  .addClass("active")
                  .end()
                  .find('[data-toggle="tab"]')
                  .attr("aria-expanded", !0),
              r && r();
          }
          o.length && s
            ? o
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(e.TRANSITION_DURATION)
            : a(),
            o.removeClass("in");
        });
      var i = t.fn.tab;
      (t.fn.tab = n),
        (t.fn.tab.Constructor = e),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = i), this;
        });
      var r = function (e) {
        e.preventDefault(), n.call(t(this), "show");
      };
      t(document)
        .on("click.bs.tab.data-api", '[data-toggle="tab"]', r)
        .on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
    })(jQuery);
  },
  function (t, e) {
    !(function (t) {
      "use strict";
      var e = function (n, i) {
        this.options = t.extend({}, e.DEFAULTS, i);
        var r =
          this.options.target === e.DEFAULTS.target
            ? t(this.options.target)
            : t(document).find(this.options.target);
        (this.$target = r
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
          (this.$element = t(n)),
          (this.affixed = null),
          (this.unpin = null),
          (this.pinnedOffset = null),
          this.checkPosition();
      };
      function n(n) {
        return this.each(function () {
          var i = t(this),
            r = i.data("bs.affix"),
            o = "object" == typeof n && n;
          r || i.data("bs.affix", (r = new e(this, o))),
            "string" == typeof n && r[n]();
        });
      }
      (e.VERSION = "3.4.1"),
        (e.RESET = "affix affix-top affix-bottom"),
        (e.DEFAULTS = { offset: 0, target: window }),
        (e.prototype.getState = function (t, e, n, i) {
          var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
          if (null != n && "top" == this.affixed) return r < n && "top";
          if ("bottom" == this.affixed)
            return null != n
              ? !(r + this.unpin <= o.top) && "bottom"
              : !(r + s <= t - i) && "bottom";
          var a = null == this.affixed,
            u = a ? r : o.top;
          return null != n && r <= n
            ? "top"
            : null != i && u + (a ? s : e) >= t - i && "bottom";
        }),
        (e.prototype.getPinnedOffset = function () {
          if (this.pinnedOffset) return this.pinnedOffset;
          this.$element.removeClass(e.RESET).addClass("affix");
          var t = this.$target.scrollTop(),
            n = this.$element.offset();
          return (this.pinnedOffset = n.top - t);
        }),
        (e.prototype.checkPositionWithEventLoop = function () {
          setTimeout(t.proxy(this.checkPosition, this), 1);
        }),
        (e.prototype.checkPosition = function () {
          if (this.$element.is(":visible")) {
            var n = this.$element.height(),
              i = this.options.offset,
              r = i.top,
              o = i.bottom,
              s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i),
              "function" == typeof r && (r = i.top(this.$element)),
              "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, n, r, o);
            if (this.affixed != a) {
              null != this.unpin && this.$element.css("top", "");
              var u = "affix" + (a ? "-" + a : ""),
                l = t.Event(u + ".bs.affix");
              if ((this.$element.trigger(l), l.isDefaultPrevented())) return;
              (this.affixed = a),
                (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
                this.$element
                  .removeClass(e.RESET)
                  .addClass(u)
                  .trigger(u.replace("affix", "affixed") + ".bs.affix");
            }
            "bottom" == a && this.$element.offset({ top: s - n - o });
          }
        });
      var i = t.fn.affix;
      (t.fn.affix = n),
        (t.fn.affix.Constructor = e),
        (t.fn.affix.noConflict = function () {
          return (t.fn.affix = i), this;
        }),
        t(window).on("load", function () {
          t('[data-spy="affix"]').each(function () {
            var e = t(this),
              i = e.data();
            (i.offset = i.offset || {}),
              null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
              null != i.offsetTop && (i.offset.top = i.offsetTop),
              n.call(e, i);
          });
        });
    })(jQuery);
  },
  function (t, e, n) {
    var i, r, o;
    /*!
     * typeahead.js 0.11.1
     * https://github.com/twitter/typeahead.js
     * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
     */ (o = this),
      (i = [n(4)]),
      void 0 ===
        (r = function (t) {
          return (o.Bloodhound =
            ((e = t),
            (n = (function () {
              "use strict";
              return {
                isMsie: function () {
                  return (
                    !!/(msie|trident)/i.test(navigator.userAgent) &&
                    navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                  );
                },
                isBlankString: function (t) {
                  return !t || /^\s*$/.test(t);
                },
                escapeRegExChars: function (t) {
                  return t.replace(
                    /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                    "\\$&"
                  );
                },
                isString: function (t) {
                  return "string" == typeof t;
                },
                isNumber: function (t) {
                  return "number" == typeof t;
                },
                isArray: e.isArray,
                isFunction: e.isFunction,
                isObject: e.isPlainObject,
                isUndefined: function (t) {
                  return void 0 === t;
                },
                isElement: function (t) {
                  return !(!t || 1 !== t.nodeType);
                },
                isJQuery: function (t) {
                  return t instanceof e;
                },
                toStr: function (t) {
                  return n.isUndefined(t) || null === t ? "" : t + "";
                },
                bind: e.proxy,
                each: function (t, n) {
                  e.each(t, function (t, e) {
                    return n(e, t);
                  });
                },
                map: e.map,
                filter: e.grep,
                every: function (t, n) {
                  var i = !0;
                  return t
                    ? (e.each(t, function (e, r) {
                        if (!(i = n.call(null, r, e, t))) return !1;
                      }),
                      !!i)
                    : i;
                },
                some: function (t, n) {
                  var i = !1;
                  return t
                    ? (e.each(t, function (e, r) {
                        if ((i = n.call(null, r, e, t))) return !1;
                      }),
                      !!i)
                    : i;
                },
                mixin: e.extend,
                identity: function (t) {
                  return t;
                },
                clone: function (t) {
                  return e.extend(!0, {}, t);
                },
                getIdGenerator: function () {
                  var t = 0;
                  return function () {
                    return t++;
                  };
                },
                templatify: function (t) {
                  return e.isFunction(t)
                    ? t
                    : function () {
                        return String(t);
                      };
                },
                defer: function (t) {
                  setTimeout(t, 0);
                },
                debounce: function (t, e, n) {
                  var i, r;
                  return function () {
                    var o,
                      s,
                      a = this,
                      u = arguments;
                    return (
                      (o = function () {
                        (i = null), n || (r = t.apply(a, u));
                      }),
                      (s = n && !i),
                      clearTimeout(i),
                      (i = setTimeout(o, e)),
                      s && (r = t.apply(a, u)),
                      r
                    );
                  };
                },
                throttle: function (t, e) {
                  var n, i, r, o, s, a;
                  return (
                    (s = 0),
                    (a = function () {
                      (s = new Date()), (r = null), (o = t.apply(n, i));
                    }),
                    function () {
                      var u = new Date(),
                        l = e - (u - s);
                      return (
                        (n = this),
                        (i = arguments),
                        l <= 0
                          ? (clearTimeout(r),
                            (r = null),
                            (s = u),
                            (o = t.apply(n, i)))
                          : r || (r = setTimeout(a, l)),
                        o
                      );
                    }
                  );
                },
                stringify: function (t) {
                  return n.isString(t) ? t : JSON.stringify(t);
                },
                noop: function () {},
              };
            })()),
            (i = (function () {
              "use strict";
              return {
                nonword: e,
                whitespace: t,
                obj: { nonword: i(e), whitespace: i(t) },
              };
              function t(t) {
                return (t = n.toStr(t)) ? t.split(/\s+/) : [];
              }
              function e(t) {
                return (t = n.toStr(t)) ? t.split(/\W+/) : [];
              }
              function i(t) {
                return function (e) {
                  return (
                    (e = n.isArray(e) ? e : [].slice.call(arguments, 0)),
                    function (i) {
                      var r = [];
                      return (
                        n.each(e, function (e) {
                          r = r.concat(t(n.toStr(i[e])));
                        }),
                        r
                      );
                    }
                  );
                };
              }
            })()),
            (r = (function () {
              "use strict";
              function t(t) {
                (this.maxSize = n.isNumber(t) ? t : 100),
                  this.reset(),
                  this.maxSize <= 0 && (this.set = this.get = e.noop);
              }
              function i() {
                this.head = this.tail = null;
              }
              function r(t, e) {
                (this.key = t), (this.val = e), (this.prev = this.next = null);
              }
              return (
                n.mixin(t.prototype, {
                  set: function (t, e) {
                    var n,
                      i = this.list.tail;
                    this.size >= this.maxSize &&
                      (this.list.remove(i),
                      delete this.hash[i.key],
                      this.size--),
                      (n = this.hash[t])
                        ? ((n.val = e), this.list.moveToFront(n))
                        : ((n = new r(t, e)),
                          this.list.add(n),
                          (this.hash[t] = n),
                          this.size++);
                  },
                  get: function (t) {
                    var e = this.hash[t];
                    if (e) return this.list.moveToFront(e), e.val;
                  },
                  reset: function () {
                    (this.size = 0), (this.hash = {}), (this.list = new i());
                  },
                }),
                n.mixin(i.prototype, {
                  add: function (t) {
                    this.head && ((t.next = this.head), (this.head.prev = t)),
                      (this.head = t),
                      (this.tail = this.tail || t);
                  },
                  remove: function (t) {
                    t.prev ? (t.prev.next = t.next) : (this.head = t.next),
                      t.next ? (t.next.prev = t.prev) : (this.tail = t.prev);
                  },
                  moveToFront: function (t) {
                    this.remove(t), this.add(t);
                  },
                }),
                t
              );
            })()),
            (s = (function () {
              "use strict";
              var t;
              try {
                (t = window.localStorage).setItem("~~~", "!"),
                  t.removeItem("~~~");
              } catch (e) {
                t = null;
              }
              function i(e, i) {
                (this.prefix = ["__", e, "__"].join("")),
                  (this.ttlKey = "__ttl__"),
                  (this.keyMatcher = new RegExp(
                    "^" + n.escapeRegExChars(this.prefix)
                  )),
                  (this.ls = i || t),
                  !this.ls && this._noop();
              }
              return (
                n.mixin(i.prototype, {
                  _prefix: function (t) {
                    return this.prefix + t;
                  },
                  _ttlKey: function (t) {
                    return this._prefix(t) + this.ttlKey;
                  },
                  _noop: function () {
                    this.get = this.set = this.remove = this.clear = this.isExpired =
                      n.noop;
                  },
                  _safeSet: function (t, e) {
                    try {
                      this.ls.setItem(t, e);
                    } catch (t) {
                      "QuotaExceededError" === t.name &&
                        (this.clear(), this._noop());
                    }
                  },
                  get: function (t) {
                    return (
                      this.isExpired(t) && this.remove(t),
                      s(this.ls.getItem(this._prefix(t)))
                    );
                  },
                  set: function (t, e, i) {
                    return (
                      n.isNumber(i)
                        ? this._safeSet(this._ttlKey(t), o(r() + i))
                        : this.ls.removeItem(this._ttlKey(t)),
                      this._safeSet(this._prefix(t), o(e))
                    );
                  },
                  remove: function (t) {
                    return (
                      this.ls.removeItem(this._ttlKey(t)),
                      this.ls.removeItem(this._prefix(t)),
                      this
                    );
                  },
                  clear: function () {
                    var e,
                      n = (function (e) {
                        var n,
                          i,
                          r = [],
                          o = t.length;
                        for (n = 0; n < o; n++)
                          (i = t.key(n)).match(e) && r.push(i.replace(e, ""));
                        return r;
                      })(this.keyMatcher);
                    for (e = n.length; e--; ) this.remove(n[e]);
                    return this;
                  },
                  isExpired: function (t) {
                    var e = s(this.ls.getItem(this._ttlKey(t)));
                    return !!(n.isNumber(e) && r() > e);
                  },
                }),
                i
              );
              function r() {
                return new Date().getTime();
              }
              function o(t) {
                return JSON.stringify(n.isUndefined(t) ? null : t);
              }
              function s(t) {
                return e.parseJSON(t);
              }
            })()),
            (a = (function () {
              "use strict";
              var t = 0,
                i = {},
                o = 6,
                s = new r(10);
              function a(t) {
                (t = t || {}),
                  (this.cancelled = !1),
                  (this.lastReq = null),
                  (this._send = t.transport),
                  (this._get = t.limiter ? t.limiter(this._get) : this._get),
                  (this._cache = !1 === t.cache ? new r(0) : s);
              }
              return (
                (a.setMaxPendingRequests = function (t) {
                  o = t;
                }),
                (a.resetCache = function () {
                  s.reset();
                }),
                n.mixin(a.prototype, {
                  _fingerprint: function (t) {
                    return (t = t || {}).url + t.type + e.param(t.data || {});
                  },
                  _get: function (e, n) {
                    var r,
                      s,
                      a = this;
                    function u(t) {
                      n(null, t), a._cache.set(r, t);
                    }
                    function l() {
                      n(!0);
                    }
                    function c() {
                      t--,
                        delete i[r],
                        a.onDeckRequestArgs &&
                          (a._get.apply(a, a.onDeckRequestArgs),
                          (a.onDeckRequestArgs = null));
                    }
                    (r = this._fingerprint(e)),
                      this.cancelled ||
                        r !== this.lastReq ||
                        ((s = i[r])
                          ? s.done(u).fail(l)
                          : t < o
                          ? (t++,
                            (i[r] = this._send(e).done(u).fail(l).always(c)))
                          : (this.onDeckRequestArgs = [].slice.call(
                              arguments,
                              0
                            )));
                  },
                  get: function (t, i) {
                    var r, o;
                    (i = i || e.noop),
                      (t = n.isString(t) ? { url: t } : t || {}),
                      (o = this._fingerprint(t)),
                      (this.cancelled = !1),
                      (this.lastReq = o),
                      (r = this._cache.get(o)) ? i(null, r) : this._get(t, i);
                  },
                  cancel: function () {
                    this.cancelled = !0;
                  },
                }),
                a
              );
            })()),
            (u = window.SearchIndex = (function () {
              "use strict";
              function t(t) {
                ((t = t || {}).datumTokenizer && t.queryTokenizer) ||
                  e.error(
                    "datumTokenizer and queryTokenizer are both required"
                  ),
                  (this.identify = t.identify || n.stringify),
                  (this.datumTokenizer = t.datumTokenizer),
                  (this.queryTokenizer = t.queryTokenizer),
                  this.reset();
              }
              return (
                n.mixin(t.prototype, {
                  bootstrap: function (t) {
                    (this.datums = t.datums), (this.trie = t.trie);
                  },
                  add: function (t) {
                    var e = this;
                    (t = n.isArray(t) ? t : [t]),
                      n.each(t, function (t) {
                        var o, s;
                        (e.datums[(o = e.identify(t))] = t),
                          (s = i(e.datumTokenizer(t))),
                          n.each(s, function (t) {
                            var n, i, s;
                            for (n = e.trie, i = t.split(""); (s = i.shift()); )
                              (n = n.c[s] || (n.c[s] = r())).i.push(o);
                          });
                      });
                  },
                  get: function (t) {
                    var e = this;
                    return n.map(t, function (t) {
                      return e.datums[t];
                    });
                  },
                  search: function (t) {
                    var e,
                      r,
                      o = this;
                    return (
                      (e = i(this.queryTokenizer(t))),
                      n.each(e, function (t) {
                        var e, n, i, s;
                        if (r && 0 === r.length) return !1;
                        for (
                          e = o.trie, n = t.split("");
                          e && (i = n.shift());

                        )
                          e = e.c[i];
                        if (!e || 0 !== n.length) return (r = []), !1;
                        (s = e.i.slice(0)),
                          (r = r
                            ? (function (t, e) {
                                var n = 0,
                                  i = 0,
                                  r = [];
                                (t = t.sort()), (e = e.sort());
                                for (
                                  var o = t.length, s = e.length;
                                  n < o && i < s;

                                )
                                  t[n] < e[i]
                                    ? n++
                                    : (t[n] > e[i] || (r.push(t[n]), n++), i++);
                                return r;
                              })(r, s)
                            : s);
                      }),
                      r
                        ? n.map(
                            (function (t) {
                              for (
                                var e = {}, n = [], i = 0, r = t.length;
                                i < r;
                                i++
                              )
                                e[t[i]] || ((e[t[i]] = !0), n.push(t[i]));
                              return n;
                            })(r),
                            function (t) {
                              return o.datums[t];
                            }
                          )
                        : []
                    );
                  },
                  all: function () {
                    var t = [];
                    for (var e in this.datums) t.push(this.datums[e]);
                    return t;
                  },
                  reset: function () {
                    (this.datums = {}), (this.trie = r());
                  },
                  serialize: function () {
                    return { datums: this.datums, trie: this.trie };
                  },
                }),
                t
              );
              function i(t) {
                return (
                  (t = n.filter(t, function (t) {
                    return !!t;
                  })),
                  (t = n.map(t, function (t) {
                    return t.toLowerCase();
                  }))
                );
              }
              function r() {
                var t = { i: [], c: {} };
                return t;
              }
            })()),
            (l = (function () {
              "use strict";
              var t;
              function e(t) {
                (this.url = t.url),
                  (this.ttl = t.ttl),
                  (this.cache = t.cache),
                  (this.prepare = t.prepare),
                  (this.transform = t.transform),
                  (this.transport = t.transport),
                  (this.thumbprint = t.thumbprint),
                  (this.storage = new s(t.cacheKey));
              }
              return (
                (t = {
                  data: "data",
                  protocol: "protocol",
                  thumbprint: "thumbprint",
                }),
                n.mixin(e.prototype, {
                  _settings: function () {
                    return { url: this.url, type: "GET", dataType: "json" };
                  },
                  store: function (e) {
                    this.cache &&
                      (this.storage.set(t.data, e, this.ttl),
                      this.storage.set(t.protocol, location.protocol, this.ttl),
                      this.storage.set(
                        t.thumbprint,
                        this.thumbprint,
                        this.ttl
                      ));
                  },
                  fromCache: function () {
                    var e,
                      n = {};
                    return this.cache
                      ? ((n.data = this.storage.get(t.data)),
                        (n.protocol = this.storage.get(t.protocol)),
                        (n.thumbprint = this.storage.get(t.thumbprint)),
                        (e =
                          n.thumbprint !== this.thumbprint ||
                          n.protocol !== location.protocol),
                        n.data && !e ? n.data : null)
                      : null;
                  },
                  fromNetwork: function (t) {
                    var e,
                      n = this;
                    t &&
                      ((e = this.prepare(this._settings())),
                      this.transport(e)
                        .fail(function () {
                          t(!0);
                        })
                        .done(function (e) {
                          t(null, n.transform(e));
                        }));
                  },
                  clear: function () {
                    return this.storage.clear(), this;
                  },
                }),
                e
              );
            })()),
            (c = (function () {
              "use strict";
              function t(t) {
                (this.url = t.url),
                  (this.prepare = t.prepare),
                  (this.transform = t.transform),
                  (this.transport = new a({
                    cache: t.cache,
                    limiter: t.limiter,
                    transport: t.transport,
                  }));
              }
              return (
                n.mixin(t.prototype, {
                  _settings: function () {
                    return { url: this.url, type: "GET", dataType: "json" };
                  },
                  get: function (t, e) {
                    var n,
                      i = this;
                    if (e)
                      return (
                        (t = t || ""),
                        (n = this.prepare(t, this._settings())),
                        this.transport.get(n, function (t, n) {
                          e(t ? [] : i.transform(n));
                        })
                      );
                  },
                  cancelLastRequest: function () {
                    this.transport.cancel();
                  },
                }),
                t
              );
            })()),
            (h = (function () {
              "use strict";
              return function (i) {
                var r, o;
                return (
                  (r = {
                    initialize: !0,
                    identify: n.stringify,
                    datumTokenizer: null,
                    queryTokenizer: null,
                    sufficient: 5,
                    sorter: null,
                    local: [],
                    prefetch: null,
                    remote: null,
                  }),
                  !(i = n.mixin(r, i || {})).datumTokenizer &&
                    e.error("datumTokenizer is required"),
                  !i.queryTokenizer && e.error("queryTokenizer is required"),
                  (o = i.sorter),
                  (i.sorter = o
                    ? function (t) {
                        return t.sort(o);
                      }
                    : n.identity),
                  (i.local = n.isFunction(i.local) ? i.local() : i.local),
                  (i.prefetch = (function (i) {
                    var r;
                    return i
                      ? ((r = {
                          url: null,
                          ttl: 864e5,
                          cache: !0,
                          cacheKey: null,
                          thumbprint: "",
                          prepare: n.identity,
                          transform: n.identity,
                          transport: null,
                        }),
                        (i = n.isString(i) ? { url: i } : i),
                        !(i = n.mixin(r, i)).url &&
                          e.error("prefetch requires url to be set"),
                        (i.transform = i.filter || i.transform),
                        (i.cacheKey = i.cacheKey || i.url),
                        (i.thumbprint = "0.11.1" + i.thumbprint),
                        (i.transport = i.transport ? t(i.transport) : e.ajax),
                        i)
                      : null;
                  })(i.prefetch)),
                  (i.remote = (function (i) {
                    var r;
                    if (i)
                      return (
                        (r = {
                          url: null,
                          cache: !0,
                          prepare: null,
                          replace: null,
                          wildcard: null,
                          limiter: null,
                          rateLimitBy: "debounce",
                          rateLimitWait: 300,
                          transform: n.identity,
                          transport: null,
                        }),
                        (i = n.isString(i) ? { url: i } : i),
                        !(i = n.mixin(r, i)).url &&
                          e.error("remote requires url to be set"),
                        (i.transform = i.filter || i.transform),
                        (i.prepare = (function (t) {
                          var e, n, i;
                          return (
                            (e = t.prepare),
                            (n = t.replace),
                            (i = t.wildcard),
                            e ||
                              (e = n
                                ? function (t, e) {
                                    return (e.url = n(e.url, t)), e;
                                  }
                                : t.wildcard
                                ? function (t, e) {
                                    return (
                                      (e.url = e.url.replace(
                                        i,
                                        encodeURIComponent(t)
                                      )),
                                      e
                                    );
                                  }
                                : function (t, e) {
                                    return e;
                                  })
                          );
                        })(i)),
                        (i.limiter = (function (t) {
                          var e, i, r;
                          return (
                            (e = t.limiter),
                            (i = t.rateLimitBy),
                            (r = t.rateLimitWait),
                            e ||
                              (e = /^throttle$/i.test(i)
                                ? (function (t) {
                                    return function (e) {
                                      return n.throttle(e, t);
                                    };
                                  })(r)
                                : (function (t) {
                                    return function (e) {
                                      return n.debounce(e, t);
                                    };
                                  })(r)),
                            e
                          );
                        })(i)),
                        (i.transport = i.transport ? t(i.transport) : e.ajax),
                        delete i.replace,
                        delete i.wildcard,
                        delete i.rateLimitBy,
                        delete i.rateLimitWait,
                        i
                      );
                  })(i.remote)),
                  i
                );
              };
              function t(t) {
                return function (i) {
                  var r = e.Deferred();
                  return (
                    t(
                      i,
                      function (t) {
                        n.defer(function () {
                          r.resolve(t);
                        });
                      },
                      function (t) {
                        n.defer(function () {
                          r.reject(t);
                        });
                      }
                    ),
                    r
                  );
                };
              }
            })()),
            (function () {
              "use strict";
              var t;
              function r(t) {
                (t = h(t)),
                  (this.sorter = t.sorter),
                  (this.identify = t.identify),
                  (this.sufficient = t.sufficient),
                  (this.local = t.local),
                  (this.remote = t.remote ? new c(t.remote) : null),
                  (this.prefetch = t.prefetch ? new l(t.prefetch) : null),
                  (this.index = new u({
                    identify: this.identify,
                    datumTokenizer: t.datumTokenizer,
                    queryTokenizer: t.queryTokenizer,
                  })),
                  !1 !== t.initialize && this.initialize();
              }
              return (
                (t = window && window.Bloodhound),
                (r.noConflict = function () {
                  return window && (window.Bloodhound = t), r;
                }),
                (r.tokenizers = i),
                n.mixin(r.prototype, {
                  __ttAdapter: function () {
                    var t = this;
                    return this.remote
                      ? function (e, n, i) {
                          return t.search(e, n, i);
                        }
                      : function (e, n) {
                          return t.search(e, n);
                        };
                  },
                  _loadPrefetch: function () {
                    var t,
                      n,
                      i = this;
                    return (
                      (t = e.Deferred()),
                      this.prefetch
                        ? (n = this.prefetch.fromCache())
                          ? (this.index.bootstrap(n), t.resolve())
                          : this.prefetch.fromNetwork(function (e, n) {
                              if (e) return t.reject();
                              i.add(n),
                                i.prefetch.store(i.index.serialize()),
                                t.resolve();
                            })
                        : t.resolve(),
                      t.promise()
                    );
                  },
                  _initialize: function () {
                    var t = this;
                    return (
                      this.clear(),
                      (this.initPromise = this._loadPrefetch()).done(
                        function () {
                          t.add(t.local);
                        }
                      ),
                      this.initPromise
                    );
                  },
                  initialize: function (t) {
                    return !this.initPromise || t
                      ? this._initialize()
                      : this.initPromise;
                  },
                  add: function (t) {
                    return this.index.add(t), this;
                  },
                  get: function (t) {
                    return (
                      (t = n.isArray(t) ? t : [].slice.call(arguments)),
                      this.index.get(t)
                    );
                  },
                  search: function (t, e, i) {
                    var r,
                      o = this;
                    return (
                      (r = this.sorter(this.index.search(t))),
                      e(this.remote ? r.slice() : r),
                      this.remote && r.length < this.sufficient
                        ? this.remote.get(t, function (t) {
                            var e = [];
                            n.each(t, function (t) {
                              !n.some(r, function (e) {
                                return o.identify(t) === o.identify(e);
                              }) && e.push(t);
                            }),
                              i && i(e);
                          })
                        : this.remote && this.remote.cancelLastRequest(),
                      this
                    );
                  },
                  all: function () {
                    return this.index.all();
                  },
                  clear: function () {
                    return this.index.reset(), this;
                  },
                  clearPrefetchCache: function () {
                    return this.prefetch && this.prefetch.clear(), this;
                  },
                  clearRemoteCache: function () {
                    return a.resetCache(), this;
                  },
                  ttAdapter: function () {
                    return this.__ttAdapter();
                  },
                }),
                r
              );
            })()));
          var e, n, i, r, s, a, u, l, c, h;
        }.apply(e, i)) || (t.exports = r);
  },
  function (t, e, n) {
    (function (i) {
      var r, o, s;
      /*!
       * typeahead.js 0.11.1
       * https://github.com/twitter/typeahead.js
       * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
       */
      (s = this),
        (r = [n(4)]),
        void 0 ===
          (o = function (t) {
            return (s.Bloodhound =
              ((e = t),
              (n = (function () {
                "use strict";
                return {
                  isMsie: function () {
                    return (
                      !!/(msie|trident)/i.test(navigator.userAgent) &&
                      navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    );
                  },
                  isBlankString: function (t) {
                    return !t || /^\s*$/.test(t);
                  },
                  escapeRegExChars: function (t) {
                    return t.replace(
                      /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                      "\\$&"
                    );
                  },
                  isString: function (t) {
                    return "string" == typeof t;
                  },
                  isNumber: function (t) {
                    return "number" == typeof t;
                  },
                  isArray: e.isArray,
                  isFunction: e.isFunction,
                  isObject: e.isPlainObject,
                  isUndefined: function (t) {
                    return void 0 === t;
                  },
                  isElement: function (t) {
                    return !(!t || 1 !== t.nodeType);
                  },
                  isJQuery: function (t) {
                    return t instanceof e;
                  },
                  toStr: function (t) {
                    return n.isUndefined(t) || null === t ? "" : t + "";
                  },
                  bind: e.proxy,
                  each: function (t, n) {
                    e.each(t, function (t, e) {
                      return n(e, t);
                    });
                  },
                  map: e.map,
                  filter: e.grep,
                  every: function (t, n) {
                    var i = !0;
                    return t
                      ? (e.each(t, function (e, r) {
                          if (!(i = n.call(null, r, e, t))) return !1;
                        }),
                        !!i)
                      : i;
                  },
                  some: function (t, n) {
                    var i = !1;
                    return t
                      ? (e.each(t, function (e, r) {
                          if ((i = n.call(null, r, e, t))) return !1;
                        }),
                        !!i)
                      : i;
                  },
                  mixin: e.extend,
                  identity: function (t) {
                    return t;
                  },
                  clone: function (t) {
                    return e.extend(!0, {}, t);
                  },
                  getIdGenerator: function () {
                    var t = 0;
                    return function () {
                      return t++;
                    };
                  },
                  templatify: function (t) {
                    return e.isFunction(t)
                      ? t
                      : function () {
                          return String(t);
                        };
                  },
                  defer: function (t) {
                    setTimeout(t, 0);
                  },
                  debounce: function (t, e, n) {
                    var i, r;
                    return function () {
                      var o,
                        s,
                        a = this,
                        u = arguments;
                      return (
                        (o = function () {
                          (i = null), n || (r = t.apply(a, u));
                        }),
                        (s = n && !i),
                        clearTimeout(i),
                        (i = setTimeout(o, e)),
                        s && (r = t.apply(a, u)),
                        r
                      );
                    };
                  },
                  throttle: function (t, e) {
                    var n, i, r, o, s, a;
                    return (
                      (s = 0),
                      (a = function () {
                        (s = new Date()), (r = null), (o = t.apply(n, i));
                      }),
                      function () {
                        var u = new Date(),
                          l = e - (u - s);
                        return (
                          (n = this),
                          (i = arguments),
                          l <= 0
                            ? (clearTimeout(r),
                              (r = null),
                              (s = u),
                              (o = t.apply(n, i)))
                            : r || (r = setTimeout(a, l)),
                          o
                        );
                      }
                    );
                  },
                  stringify: function (t) {
                    return n.isString(t) ? t : JSON.stringify(t);
                  },
                  noop: function () {},
                };
              })()),
              (i = (function () {
                "use strict";
                return {
                  nonword: e,
                  whitespace: t,
                  obj: { nonword: i(e), whitespace: i(t) },
                };
                function t(t) {
                  return (t = n.toStr(t)) ? t.split(/\s+/) : [];
                }
                function e(t) {
                  return (t = n.toStr(t)) ? t.split(/\W+/) : [];
                }
                function i(t) {
                  return function (e) {
                    return (
                      (e = n.isArray(e) ? e : [].slice.call(arguments, 0)),
                      function (i) {
                        var r = [];
                        return (
                          n.each(e, function (e) {
                            r = r.concat(t(n.toStr(i[e])));
                          }),
                          r
                        );
                      }
                    );
                  };
                }
              })()),
              (r = (function () {
                "use strict";
                function t(t) {
                  (this.maxSize = n.isNumber(t) ? t : 100),
                    this.reset(),
                    this.maxSize <= 0 && (this.set = this.get = e.noop);
                }
                function i() {
                  this.head = this.tail = null;
                }
                function r(t, e) {
                  (this.key = t),
                    (this.val = e),
                    (this.prev = this.next = null);
                }
                return (
                  n.mixin(t.prototype, {
                    set: function (t, e) {
                      var n,
                        i = this.list.tail;
                      this.size >= this.maxSize &&
                        (this.list.remove(i),
                        delete this.hash[i.key],
                        this.size--),
                        (n = this.hash[t])
                          ? ((n.val = e), this.list.moveToFront(n))
                          : ((n = new r(t, e)),
                            this.list.add(n),
                            (this.hash[t] = n),
                            this.size++);
                    },
                    get: function (t) {
                      var e = this.hash[t];
                      if (e) return this.list.moveToFront(e), e.val;
                    },
                    reset: function () {
                      (this.size = 0), (this.hash = {}), (this.list = new i());
                    },
                  }),
                  n.mixin(i.prototype, {
                    add: function (t) {
                      this.head && ((t.next = this.head), (this.head.prev = t)),
                        (this.head = t),
                        (this.tail = this.tail || t);
                    },
                    remove: function (t) {
                      t.prev ? (t.prev.next = t.next) : (this.head = t.next),
                        t.next ? (t.next.prev = t.prev) : (this.tail = t.prev);
                    },
                    moveToFront: function (t) {
                      this.remove(t), this.add(t);
                    },
                  }),
                  t
                );
              })()),
              (o = (function () {
                "use strict";
                var t;
                try {
                  (t = window.localStorage).setItem("~~~", "!"),
                    t.removeItem("~~~");
                } catch (e) {
                  t = null;
                }
                function i(e, i) {
                  (this.prefix = ["__", e, "__"].join("")),
                    (this.ttlKey = "__ttl__"),
                    (this.keyMatcher = new RegExp(
                      "^" + n.escapeRegExChars(this.prefix)
                    )),
                    (this.ls = i || t),
                    !this.ls && this._noop();
                }
                return (
                  n.mixin(i.prototype, {
                    _prefix: function (t) {
                      return this.prefix + t;
                    },
                    _ttlKey: function (t) {
                      return this._prefix(t) + this.ttlKey;
                    },
                    _noop: function () {
                      this.get = this.set = this.remove = this.clear = this.isExpired =
                        n.noop;
                    },
                    _safeSet: function (t, e) {
                      try {
                        this.ls.setItem(t, e);
                      } catch (t) {
                        "QuotaExceededError" === t.name &&
                          (this.clear(), this._noop());
                      }
                    },
                    get: function (t) {
                      return (
                        this.isExpired(t) && this.remove(t),
                        s(this.ls.getItem(this._prefix(t)))
                      );
                    },
                    set: function (t, e, i) {
                      return (
                        n.isNumber(i)
                          ? this._safeSet(this._ttlKey(t), o(r() + i))
                          : this.ls.removeItem(this._ttlKey(t)),
                        this._safeSet(this._prefix(t), o(e))
                      );
                    },
                    remove: function (t) {
                      return (
                        this.ls.removeItem(this._ttlKey(t)),
                        this.ls.removeItem(this._prefix(t)),
                        this
                      );
                    },
                    clear: function () {
                      var e,
                        n = (function (e) {
                          var n,
                            i,
                            r = [],
                            o = t.length;
                          for (n = 0; n < o; n++)
                            (i = t.key(n)).match(e) && r.push(i.replace(e, ""));
                          return r;
                        })(this.keyMatcher);
                      for (e = n.length; e--; ) this.remove(n[e]);
                      return this;
                    },
                    isExpired: function (t) {
                      var e = s(this.ls.getItem(this._ttlKey(t)));
                      return !!(n.isNumber(e) && r() > e);
                    },
                  }),
                  i
                );
                function r() {
                  return new Date().getTime();
                }
                function o(t) {
                  return JSON.stringify(n.isUndefined(t) ? null : t);
                }
                function s(t) {
                  return e.parseJSON(t);
                }
              })()),
              (a = (function () {
                "use strict";
                var t = 0,
                  i = {},
                  o = 6,
                  s = new r(10);
                function a(t) {
                  (t = t || {}),
                    (this.cancelled = !1),
                    (this.lastReq = null),
                    (this._send = t.transport),
                    (this._get = t.limiter ? t.limiter(this._get) : this._get),
                    (this._cache = !1 === t.cache ? new r(0) : s);
                }
                return (
                  (a.setMaxPendingRequests = function (t) {
                    o = t;
                  }),
                  (a.resetCache = function () {
                    s.reset();
                  }),
                  n.mixin(a.prototype, {
                    _fingerprint: function (t) {
                      return (t = t || {}).url + t.type + e.param(t.data || {});
                    },
                    _get: function (e, n) {
                      var r,
                        s,
                        a = this;
                      function u(t) {
                        n(null, t), a._cache.set(r, t);
                      }
                      function l() {
                        n(!0);
                      }
                      function c() {
                        t--,
                          delete i[r],
                          a.onDeckRequestArgs &&
                            (a._get.apply(a, a.onDeckRequestArgs),
                            (a.onDeckRequestArgs = null));
                      }
                      (r = this._fingerprint(e)),
                        this.cancelled ||
                          r !== this.lastReq ||
                          ((s = i[r])
                            ? s.done(u).fail(l)
                            : t < o
                            ? (t++,
                              (i[r] = this._send(e).done(u).fail(l).always(c)))
                            : (this.onDeckRequestArgs = [].slice.call(
                                arguments,
                                0
                              )));
                    },
                    get: function (t, i) {
                      var r, o;
                      (i = i || e.noop),
                        (t = n.isString(t) ? { url: t } : t || {}),
                        (o = this._fingerprint(t)),
                        (this.cancelled = !1),
                        (this.lastReq = o),
                        (r = this._cache.get(o)) ? i(null, r) : this._get(t, i);
                    },
                    cancel: function () {
                      this.cancelled = !0;
                    },
                  }),
                  a
                );
              })()),
              (u = window.SearchIndex = (function () {
                "use strict";
                function t(t) {
                  ((t = t || {}).datumTokenizer && t.queryTokenizer) ||
                    e.error(
                      "datumTokenizer and queryTokenizer are both required"
                    ),
                    (this.identify = t.identify || n.stringify),
                    (this.datumTokenizer = t.datumTokenizer),
                    (this.queryTokenizer = t.queryTokenizer),
                    this.reset();
                }
                return (
                  n.mixin(t.prototype, {
                    bootstrap: function (t) {
                      (this.datums = t.datums), (this.trie = t.trie);
                    },
                    add: function (t) {
                      var e = this;
                      (t = n.isArray(t) ? t : [t]),
                        n.each(t, function (t) {
                          var o, s;
                          (e.datums[(o = e.identify(t))] = t),
                            (s = i(e.datumTokenizer(t))),
                            n.each(s, function (t) {
                              var n, i, s;
                              for (
                                n = e.trie, i = t.split("");
                                (s = i.shift());

                              )
                                (n = n.c[s] || (n.c[s] = r())).i.push(o);
                            });
                        });
                    },
                    get: function (t) {
                      var e = this;
                      return n.map(t, function (t) {
                        return e.datums[t];
                      });
                    },
                    search: function (t) {
                      var e,
                        r,
                        o = this;
                      return (
                        (e = i(this.queryTokenizer(t))),
                        n.each(e, function (t) {
                          var e, n, i, s;
                          if (r && 0 === r.length) return !1;
                          for (
                            e = o.trie, n = t.split("");
                            e && (i = n.shift());

                          )
                            e = e.c[i];
                          if (!e || 0 !== n.length) return (r = []), !1;
                          (s = e.i.slice(0)),
                            (r = r
                              ? (function (t, e) {
                                  var n = 0,
                                    i = 0,
                                    r = [];
                                  (t = t.sort()), (e = e.sort());
                                  for (
                                    var o = t.length, s = e.length;
                                    n < o && i < s;

                                  )
                                    t[n] < e[i]
                                      ? n++
                                      : (t[n] > e[i] || (r.push(t[n]), n++),
                                        i++);
                                  return r;
                                })(r, s)
                              : s);
                        }),
                        r
                          ? n.map(
                              (function (t) {
                                for (
                                  var e = {}, n = [], i = 0, r = t.length;
                                  i < r;
                                  i++
                                )
                                  e[t[i]] || ((e[t[i]] = !0), n.push(t[i]));
                                return n;
                              })(r),
                              function (t) {
                                return o.datums[t];
                              }
                            )
                          : []
                      );
                    },
                    all: function () {
                      var t = [];
                      for (var e in this.datums) t.push(this.datums[e]);
                      return t;
                    },
                    reset: function () {
                      (this.datums = {}), (this.trie = r());
                    },
                    serialize: function () {
                      return { datums: this.datums, trie: this.trie };
                    },
                  }),
                  t
                );
                function i(t) {
                  return (
                    (t = n.filter(t, function (t) {
                      return !!t;
                    })),
                    (t = n.map(t, function (t) {
                      return t.toLowerCase();
                    }))
                  );
                }
                function r() {
                  var t = { i: [], c: {} };
                  return t;
                }
              })()),
              (l = (function () {
                "use strict";
                var t;
                function e(t) {
                  (this.url = t.url),
                    (this.ttl = t.ttl),
                    (this.cache = t.cache),
                    (this.prepare = t.prepare),
                    (this.transform = t.transform),
                    (this.transport = t.transport),
                    (this.thumbprint = t.thumbprint),
                    (this.storage = new o(t.cacheKey));
                }
                return (
                  (t = {
                    data: "data",
                    protocol: "protocol",
                    thumbprint: "thumbprint",
                  }),
                  n.mixin(e.prototype, {
                    _settings: function () {
                      return { url: this.url, type: "GET", dataType: "json" };
                    },
                    store: function (e) {
                      this.cache &&
                        (this.storage.set(t.data, e, this.ttl),
                        this.storage.set(
                          t.protocol,
                          location.protocol,
                          this.ttl
                        ),
                        this.storage.set(
                          t.thumbprint,
                          this.thumbprint,
                          this.ttl
                        ));
                    },
                    fromCache: function () {
                      var e,
                        n = {};
                      return this.cache
                        ? ((n.data = this.storage.get(t.data)),
                          (n.protocol = this.storage.get(t.protocol)),
                          (n.thumbprint = this.storage.get(t.thumbprint)),
                          (e =
                            n.thumbprint !== this.thumbprint ||
                            n.protocol !== location.protocol),
                          n.data && !e ? n.data : null)
                        : null;
                    },
                    fromNetwork: function (t) {
                      var e,
                        n = this;
                      t &&
                        ((e = this.prepare(this._settings())),
                        this.transport(e)
                          .fail(function () {
                            t(!0);
                          })
                          .done(function (e) {
                            t(null, n.transform(e));
                          }));
                    },
                    clear: function () {
                      return this.storage.clear(), this;
                    },
                  }),
                  e
                );
              })()),
              (c = (function () {
                "use strict";
                function t(t) {
                  (this.url = t.url),
                    (this.prepare = t.prepare),
                    (this.transform = t.transform),
                    (this.transport = new a({
                      cache: t.cache,
                      limiter: t.limiter,
                      transport: t.transport,
                    }));
                }
                return (
                  n.mixin(t.prototype, {
                    _settings: function () {
                      return { url: this.url, type: "GET", dataType: "json" };
                    },
                    get: function (t, e) {
                      var n,
                        i = this;
                      if (e)
                        return (
                          (t = t || ""),
                          (n = this.prepare(t, this._settings())),
                          this.transport.get(n, function (t, n) {
                            e(t ? [] : i.transform(n));
                          })
                        );
                    },
                    cancelLastRequest: function () {
                      this.transport.cancel();
                    },
                  }),
                  t
                );
              })()),
              (h = (function () {
                "use strict";
                return function (i) {
                  var r, o;
                  return (
                    (r = {
                      initialize: !0,
                      identify: n.stringify,
                      datumTokenizer: null,
                      queryTokenizer: null,
                      sufficient: 5,
                      sorter: null,
                      local: [],
                      prefetch: null,
                      remote: null,
                    }),
                    !(i = n.mixin(r, i || {})).datumTokenizer &&
                      e.error("datumTokenizer is required"),
                    !i.queryTokenizer && e.error("queryTokenizer is required"),
                    (o = i.sorter),
                    (i.sorter = o
                      ? function (t) {
                          return t.sort(o);
                        }
                      : n.identity),
                    (i.local = n.isFunction(i.local) ? i.local() : i.local),
                    (i.prefetch = (function (i) {
                      var r;
                      return i
                        ? ((r = {
                            url: null,
                            ttl: 864e5,
                            cache: !0,
                            cacheKey: null,
                            thumbprint: "",
                            prepare: n.identity,
                            transform: n.identity,
                            transport: null,
                          }),
                          (i = n.isString(i) ? { url: i } : i),
                          !(i = n.mixin(r, i)).url &&
                            e.error("prefetch requires url to be set"),
                          (i.transform = i.filter || i.transform),
                          (i.cacheKey = i.cacheKey || i.url),
                          (i.thumbprint = "0.11.1" + i.thumbprint),
                          (i.transport = i.transport ? t(i.transport) : e.ajax),
                          i)
                        : null;
                    })(i.prefetch)),
                    (i.remote = (function (i) {
                      var r;
                      if (i)
                        return (
                          (r = {
                            url: null,
                            cache: !0,
                            prepare: null,
                            replace: null,
                            wildcard: null,
                            limiter: null,
                            rateLimitBy: "debounce",
                            rateLimitWait: 300,
                            transform: n.identity,
                            transport: null,
                          }),
                          (i = n.isString(i) ? { url: i } : i),
                          !(i = n.mixin(r, i)).url &&
                            e.error("remote requires url to be set"),
                          (i.transform = i.filter || i.transform),
                          (i.prepare = (function (t) {
                            var e, n, i;
                            return (
                              (e = t.prepare),
                              (n = t.replace),
                              (i = t.wildcard),
                              e ||
                                (e = n
                                  ? function (t, e) {
                                      return (e.url = n(e.url, t)), e;
                                    }
                                  : t.wildcard
                                  ? function (t, e) {
                                      return (
                                        (e.url = e.url.replace(
                                          i,
                                          encodeURIComponent(t)
                                        )),
                                        e
                                      );
                                    }
                                  : function (t, e) {
                                      return e;
                                    })
                            );
                          })(i)),
                          (i.limiter = (function (t) {
                            var e, i, r;
                            return (
                              (e = t.limiter),
                              (i = t.rateLimitBy),
                              (r = t.rateLimitWait),
                              e ||
                                (e = /^throttle$/i.test(i)
                                  ? (function (t) {
                                      return function (e) {
                                        return n.throttle(e, t);
                                      };
                                    })(r)
                                  : (function (t) {
                                      return function (e) {
                                        return n.debounce(e, t);
                                      };
                                    })(r)),
                              e
                            );
                          })(i)),
                          (i.transport = i.transport ? t(i.transport) : e.ajax),
                          delete i.replace,
                          delete i.wildcard,
                          delete i.rateLimitBy,
                          delete i.rateLimitWait,
                          i
                        );
                    })(i.remote)),
                    i
                  );
                };
                function t(t) {
                  return function (i) {
                    var r = e.Deferred();
                    return (
                      t(
                        i,
                        function (t) {
                          n.defer(function () {
                            r.resolve(t);
                          });
                        },
                        function (t) {
                          n.defer(function () {
                            r.reject(t);
                          });
                        }
                      ),
                      r
                    );
                  };
                }
              })()),
              (function () {
                "use strict";
                var t;
                function r(t) {
                  (t = h(t)),
                    (this.sorter = t.sorter),
                    (this.identify = t.identify),
                    (this.sufficient = t.sufficient),
                    (this.local = t.local),
                    (this.remote = t.remote ? new c(t.remote) : null),
                    (this.prefetch = t.prefetch ? new l(t.prefetch) : null),
                    (this.index = new u({
                      identify: this.identify,
                      datumTokenizer: t.datumTokenizer,
                      queryTokenizer: t.queryTokenizer,
                    })),
                    !1 !== t.initialize && this.initialize();
                }
                return (
                  (t = window && window.Bloodhound),
                  (r.noConflict = function () {
                    return window && (window.Bloodhound = t), r;
                  }),
                  (r.tokenizers = i),
                  n.mixin(r.prototype, {
                    __ttAdapter: function () {
                      var t = this;
                      return this.remote
                        ? function (e, n, i) {
                            return t.search(e, n, i);
                          }
                        : function (e, n) {
                            return t.search(e, n);
                          };
                    },
                    _loadPrefetch: function () {
                      var t,
                        n,
                        i = this;
                      return (
                        (t = e.Deferred()),
                        this.prefetch
                          ? (n = this.prefetch.fromCache())
                            ? (this.index.bootstrap(n), t.resolve())
                            : this.prefetch.fromNetwork(function (e, n) {
                                if (e) return t.reject();
                                i.add(n),
                                  i.prefetch.store(i.index.serialize()),
                                  t.resolve();
                              })
                          : t.resolve(),
                        t.promise()
                      );
                    },
                    _initialize: function () {
                      var t = this;
                      return (
                        this.clear(),
                        (this.initPromise = this._loadPrefetch()).done(
                          function () {
                            t.add(t.local);
                          }
                        ),
                        this.initPromise
                      );
                    },
                    initialize: function (t) {
                      return !this.initPromise || t
                        ? this._initialize()
                        : this.initPromise;
                    },
                    add: function (t) {
                      return this.index.add(t), this;
                    },
                    get: function (t) {
                      return (
                        (t = n.isArray(t) ? t : [].slice.call(arguments)),
                        this.index.get(t)
                      );
                    },
                    search: function (t, e, i) {
                      var r,
                        o = this;
                      return (
                        (r = this.sorter(this.index.search(t))),
                        e(this.remote ? r.slice() : r),
                        this.remote && r.length < this.sufficient
                          ? this.remote.get(t, function (t) {
                              var e = [];
                              n.each(t, function (t) {
                                !n.some(r, function (e) {
                                  return o.identify(t) === o.identify(e);
                                }) && e.push(t);
                              }),
                                i && i(e);
                            })
                          : this.remote && this.remote.cancelLastRequest(),
                        this
                      );
                    },
                    all: function () {
                      return this.index.all();
                    },
                    clear: function () {
                      return this.index.reset(), this;
                    },
                    clearPrefetchCache: function () {
                      return this.prefetch && this.prefetch.clear(), this;
                    },
                    clearRemoteCache: function () {
                      return a.resetCache(), this;
                    },
                    ttAdapter: function () {
                      return this.__ttAdapter();
                    },
                  }),
                  r
                );
              })()));
            var e, n, i, r, o, a, u, l, c, h;
          }.apply(e, r)) || (t.exports = o),
        (r = [n(4)]),
        void 0 ===
          (o = function (t) {
            return (
              (e = t),
              (n = (function () {
                "use strict";
                return {
                  isMsie: function () {
                    return (
                      !!/(msie|trident)/i.test(navigator.userAgent) &&
                      navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    );
                  },
                  isBlankString: function (t) {
                    return !t || /^\s*$/.test(t);
                  },
                  escapeRegExChars: function (t) {
                    return t.replace(
                      /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                      "\\$&"
                    );
                  },
                  isString: function (t) {
                    return "string" == typeof t;
                  },
                  isNumber: function (t) {
                    return "number" == typeof t;
                  },
                  isArray: e.isArray,
                  isFunction: e.isFunction,
                  isObject: e.isPlainObject,
                  isUndefined: function (t) {
                    return void 0 === t;
                  },
                  isElement: function (t) {
                    return !(!t || 1 !== t.nodeType);
                  },
                  isJQuery: function (t) {
                    return t instanceof e;
                  },
                  toStr: function (t) {
                    return n.isUndefined(t) || null === t ? "" : t + "";
                  },
                  bind: e.proxy,
                  each: function (t, n) {
                    e.each(t, function (t, e) {
                      return n(e, t);
                    });
                  },
                  map: e.map,
                  filter: e.grep,
                  every: function (t, n) {
                    var i = !0;
                    return t
                      ? (e.each(t, function (e, r) {
                          if (!(i = n.call(null, r, e, t))) return !1;
                        }),
                        !!i)
                      : i;
                  },
                  some: function (t, n) {
                    var i = !1;
                    return t
                      ? (e.each(t, function (e, r) {
                          if ((i = n.call(null, r, e, t))) return !1;
                        }),
                        !!i)
                      : i;
                  },
                  mixin: e.extend,
                  identity: function (t) {
                    return t;
                  },
                  clone: function (t) {
                    return e.extend(!0, {}, t);
                  },
                  getIdGenerator: function () {
                    var t = 0;
                    return function () {
                      return t++;
                    };
                  },
                  templatify: function (t) {
                    return e.isFunction(t)
                      ? t
                      : function () {
                          return String(t);
                        };
                  },
                  defer: function (t) {
                    setTimeout(t, 0);
                  },
                  debounce: function (t, e, n) {
                    var i, r;
                    return function () {
                      var o,
                        s,
                        a = this,
                        u = arguments;
                      return (
                        (o = function () {
                          (i = null), n || (r = t.apply(a, u));
                        }),
                        (s = n && !i),
                        clearTimeout(i),
                        (i = setTimeout(o, e)),
                        s && (r = t.apply(a, u)),
                        r
                      );
                    };
                  },
                  throttle: function (t, e) {
                    var n, i, r, o, s, a;
                    return (
                      (s = 0),
                      (a = function () {
                        (s = new Date()), (r = null), (o = t.apply(n, i));
                      }),
                      function () {
                        var u = new Date(),
                          l = e - (u - s);
                        return (
                          (n = this),
                          (i = arguments),
                          l <= 0
                            ? (clearTimeout(r),
                              (r = null),
                              (s = u),
                              (o = t.apply(n, i)))
                            : r || (r = setTimeout(a, l)),
                          o
                        );
                      }
                    );
                  },
                  stringify: function (t) {
                    return n.isString(t) ? t : JSON.stringify(t);
                  },
                  noop: function () {},
                };
              })()),
              (r = (function () {
                "use strict";
                var t = {
                  wrapper: "twitter-typeahead",
                  input: "tt-input",
                  hint: "tt-hint",
                  menu: "tt-menu",
                  dataset: "tt-dataset",
                  suggestion: "tt-suggestion",
                  selectable: "tt-selectable",
                  empty: "tt-empty",
                  open: "tt-open",
                  cursor: "tt-cursor",
                  highlight: "tt-highlight",
                };
                return function (i) {
                  var r, o, s, a;
                  return (
                    (o = n.mixin({}, t, i)),
                    {
                      css: (r = {
                        css:
                          ((a = {
                            wrapper: {
                              position: "relative",
                              display: "inline-block",
                            },
                            hint: {
                              position: "absolute",
                              top: "0",
                              left: "0",
                              borderColor: "transparent",
                              boxShadow: "none",
                              opacity: "1",
                            },
                            input: {
                              position: "relative",
                              verticalAlign: "top",
                              backgroundColor: "transparent",
                            },
                            inputWithNoHint: {
                              position: "relative",
                              verticalAlign: "top",
                            },
                            menu: {
                              position: "absolute",
                              top: "100%",
                              left: "0",
                              zIndex: "100",
                              display: "none",
                            },
                            ltr: { left: "0", right: "auto" },
                            rtl: { left: "auto", right: " 0" },
                          }),
                          n.isMsie() &&
                            n.mixin(a.input, {
                              backgroundImage:
                                "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                            }),
                          a),
                        classes: o,
                        html:
                          ((s = o),
                          {
                            wrapper: '<span class="' + s.wrapper + '"></span>',
                            menu: '<div class="' + s.menu + '"></div>',
                          }),
                        selectors: e(o),
                      }).css,
                      html: r.html,
                      classes: r.classes,
                      selectors: r.selectors,
                      mixin: function (t) {
                        n.mixin(t, r);
                      },
                    }
                  );
                };
                function e(t) {
                  var e = {};
                  return (
                    n.each(t, function (t, n) {
                      e[n] = "." + t;
                    }),
                    e
                  );
                }
              })()),
              (o = (function () {
                "use strict";
                var t;
                function i(t) {
                  (t && t.el) || e.error("EventBus initialized without el"),
                    (this.$el = e(t.el));
                }
                return (
                  (t = {
                    render: "rendered",
                    cursorchange: "cursorchanged",
                    select: "selected",
                    autocomplete: "autocompleted",
                  }),
                  n.mixin(i.prototype, {
                    _trigger: function (t, n) {
                      var i;
                      return (
                        (i = e.Event("typeahead:" + t)),
                        (n = n || []).unshift(i),
                        this.$el.trigger.apply(this.$el, n),
                        i
                      );
                    },
                    before: function (t) {
                      var e;
                      return (
                        (e = [].slice.call(arguments, 1)),
                        this._trigger("before" + t, e).isDefaultPrevented()
                      );
                    },
                    trigger: function (e) {
                      var n;
                      this._trigger(e, [].slice.call(arguments, 1)),
                        (n = t[e]) &&
                          this._trigger(n, [].slice.call(arguments, 1));
                    },
                  }),
                  i
                );
              })()),
              (s = (function () {
                "use strict";
                var t = /\s+/,
                  e = window.setImmediate
                    ? function (t) {
                        i(function () {
                          t();
                        });
                      }
                    : function (t) {
                        setTimeout(function () {
                          t();
                        }, 0);
                      };
                return {
                  onSync: function (t, e, i) {
                    return n.call(this, "sync", t, e, i);
                  },
                  onAsync: function (t, e, i) {
                    return n.call(this, "async", t, e, i);
                  },
                  off: function (e) {
                    var n;
                    if (!this._callbacks) return this;
                    for (e = e.split(t); (n = e.shift()); )
                      delete this._callbacks[n];
                    return this;
                  },
                  trigger: function (n) {
                    var i, o, s, a, u;
                    if (!this._callbacks) return this;
                    for (
                      n = n.split(t), s = [].slice.call(arguments, 1);
                      (i = n.shift()) && (o = this._callbacks[i]);

                    )
                      (a = r(o.sync, this, [i].concat(s))),
                        (u = r(o.async, this, [i].concat(s))),
                        a() && e(u);
                    return this;
                  },
                };
                function n(e, n, i, r) {
                  var o;
                  if (!i) return this;
                  for (
                    n = n.split(t),
                      i = r
                        ? (function (t, e) {
                            return t.bind
                              ? t.bind(e)
                              : function () {
                                  t.apply(e, [].slice.call(arguments, 0));
                                };
                          })(i, r)
                        : i,
                      this._callbacks = this._callbacks || {};
                    (o = n.shift());

                  )
                    (this._callbacks[o] = this._callbacks[o] || {
                      sync: [],
                      async: [],
                    }),
                      this._callbacks[o][e].push(i);
                  return this;
                }
                function r(t, e, n) {
                  return function () {
                    for (var i, r = 0, o = t.length; !i && r < o; r += 1)
                      i = !1 === t[r].apply(e, n);
                    return !i;
                  };
                }
              })()),
              (a = (function (t) {
                "use strict";
                var e = {
                  node: null,
                  pattern: null,
                  tagName: "strong",
                  className: null,
                  wordsOnly: !1,
                  caseSensitive: !1,
                };
                return function (i) {
                  var r;
                  (i = n.mixin({}, e, i)).node &&
                    i.pattern &&
                    ((i.pattern = n.isArray(i.pattern)
                      ? i.pattern
                      : [i.pattern]),
                    (r = (function (t, e, i) {
                      for (var r, o = [], s = 0, a = t.length; s < a; s++)
                        o.push(n.escapeRegExChars(t[s]));
                      return (
                        (r = i
                          ? "\\b(" + o.join("|") + ")\\b"
                          : "(" + o.join("|") + ")"),
                        e ? new RegExp(r) : new RegExp(r, "i")
                      );
                    })(i.pattern, i.caseSensitive, i.wordsOnly)),
                    (function t(e, n) {
                      for (var i, r = 0; r < e.childNodes.length; r++)
                        3 === (i = e.childNodes[r]).nodeType
                          ? (r += n(i) ? 1 : 0)
                          : t(i, n);
                    })(i.node, function (e) {
                      var n, o, s;
                      return (
                        (n = r.exec(e.data)) &&
                          ((s = t.createElement(i.tagName)),
                          i.className && (s.className = i.className),
                          (o = e.splitText(n.index)).splitText(n[0].length),
                          s.appendChild(o.cloneNode(!0)),
                          e.parentNode.replaceChild(s, o)),
                        !!n
                      );
                    }));
                };
              })(window.document)),
              (u = (function () {
                "use strict";
                var t;
                function i(t, i) {
                  var r;
                  (t = t || {}).input || e.error("input is missing"),
                    i.mixin(this),
                    (this.$hint = e(t.hint)),
                    (this.$input = e(t.input)),
                    (this.query = this.$input.val()),
                    (this.queryWhenFocused = this.hasFocus()
                      ? this.query
                      : null),
                    (this.$overflowHelper =
                      ((r = this.$input),
                      e('<pre aria-hidden="true"></pre>')
                        .css({
                          position: "absolute",
                          visibility: "hidden",
                          whiteSpace: "pre",
                          fontFamily: r.css("font-family"),
                          fontSize: r.css("font-size"),
                          fontStyle: r.css("font-style"),
                          fontVariant: r.css("font-variant"),
                          fontWeight: r.css("font-weight"),
                          wordSpacing: r.css("word-spacing"),
                          letterSpacing: r.css("letter-spacing"),
                          textIndent: r.css("text-indent"),
                          textRendering: r.css("text-rendering"),
                          textTransform: r.css("text-transform"),
                        })
                        .insertAfter(r))),
                    this._checkLanguageDirection(),
                    0 === this.$hint.length &&
                      (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid =
                        n.noop);
                }
                return (
                  (t = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down",
                  }),
                  (i.normalizeQuery = function (t) {
                    return n
                      .toStr(t)
                      .replace(/^\s*/g, "")
                      .replace(/\s{2,}/g, " ");
                  }),
                  n.mixin(i.prototype, s, {
                    _onBlur: function () {
                      this.resetInputValue(), this.trigger("blurred");
                    },
                    _onFocus: function () {
                      (this.queryWhenFocused = this.query),
                        this.trigger("focused");
                    },
                    _onKeydown: function (e) {
                      var n = t[e.which || e.keyCode];
                      this._managePreventDefault(n, e),
                        n &&
                          this._shouldTrigger(n, e) &&
                          this.trigger(n + "Keyed", e);
                    },
                    _onInput: function () {
                      this._setQuery(this.getInputValue()),
                        this.clearHintIfInvalid(),
                        this._checkLanguageDirection();
                    },
                    _managePreventDefault: function (t, e) {
                      var n;
                      switch (t) {
                        case "up":
                        case "down":
                          n = !r(e);
                          break;
                        default:
                          n = !1;
                      }
                      n && e.preventDefault();
                    },
                    _shouldTrigger: function (t, e) {
                      var n;
                      switch (t) {
                        case "tab":
                          n = !r(e);
                          break;
                        default:
                          n = !0;
                      }
                      return n;
                    },
                    _checkLanguageDirection: function () {
                      var t = (
                        this.$input.css("direction") || "ltr"
                      ).toLowerCase();
                      this.dir !== t &&
                        ((this.dir = t),
                        this.$hint.attr("dir", t),
                        this.trigger("langDirChanged", t));
                    },
                    _setQuery: function (t, e) {
                      var n, r, o, s;
                      (o = t),
                        (s = this.query),
                        (r =
                          !!(n = i.normalizeQuery(o) === i.normalizeQuery(s)) &&
                          this.query.length !== t.length),
                        (this.query = t),
                        e || n
                          ? !e &&
                            r &&
                            this.trigger("whitespaceChanged", this.query)
                          : this.trigger("queryChanged", this.query);
                    },
                    bind: function () {
                      var e,
                        i,
                        r,
                        o,
                        s = this;
                      return (
                        (e = n.bind(this._onBlur, this)),
                        (i = n.bind(this._onFocus, this)),
                        (r = n.bind(this._onKeydown, this)),
                        (o = n.bind(this._onInput, this)),
                        this.$input
                          .on("blur.tt", e)
                          .on("focus.tt", i)
                          .on("keydown.tt", r),
                        !n.isMsie() || n.isMsie() > 9
                          ? this.$input.on("input.tt", o)
                          : this.$input.on(
                              "keydown.tt keypress.tt cut.tt paste.tt",
                              function (e) {
                                t[e.which || e.keyCode] ||
                                  n.defer(n.bind(s._onInput, s, e));
                              }
                            ),
                        this
                      );
                    },
                    focus: function () {
                      this.$input.focus();
                    },
                    blur: function () {
                      this.$input.blur();
                    },
                    getLangDir: function () {
                      return this.dir;
                    },
                    getQuery: function () {
                      return this.query || "";
                    },
                    setQuery: function (t, e) {
                      this.setInputValue(t), this._setQuery(t, e);
                    },
                    hasQueryChangedSinceLastFocus: function () {
                      return this.query !== this.queryWhenFocused;
                    },
                    getInputValue: function () {
                      return this.$input.val();
                    },
                    setInputValue: function (t) {
                      this.$input.val(t),
                        this.clearHintIfInvalid(),
                        this._checkLanguageDirection();
                    },
                    resetInputValue: function () {
                      this.setInputValue(this.query);
                    },
                    getHint: function () {
                      return this.$hint.val();
                    },
                    setHint: function (t) {
                      this.$hint.val(t);
                    },
                    clearHint: function () {
                      this.setHint("");
                    },
                    clearHintIfInvalid: function () {
                      var t, e, n;
                      (n =
                        (t = this.getInputValue()) !== (e = this.getHint()) &&
                        0 === e.indexOf(t)),
                        ("" === t || !n || this.hasOverflow()) &&
                          this.clearHint();
                    },
                    hasFocus: function () {
                      return this.$input.is(":focus");
                    },
                    hasOverflow: function () {
                      var t = this.$input.width() - 2;
                      return (
                        this.$overflowHelper.text(this.getInputValue()),
                        this.$overflowHelper.width() >= t
                      );
                    },
                    isCursorAtEnd: function () {
                      var t, e, i;
                      return (
                        (t = this.$input.val().length),
                        (e = this.$input[0].selectionStart),
                        n.isNumber(e)
                          ? e === t
                          : !document.selection ||
                            ((i = document.selection.createRange()).moveStart(
                              "character",
                              -t
                            ),
                            t === i.text.length)
                      );
                    },
                    destroy: function () {
                      this.$hint.off(".tt"),
                        this.$input.off(".tt"),
                        this.$overflowHelper.remove(),
                        (this.$hint = this.$input = this.$overflowHelper = e(
                          "<div>"
                        ));
                    },
                  }),
                  i
                );
                function r(t) {
                  return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                }
              })()),
              (l = (function () {
                "use strict";
                var t, i;
                function r(t, r) {
                  var o, s, a, u;
                  ((t = t || {}).templates = t.templates || {}),
                    (t.templates.notFound =
                      t.templates.notFound || t.templates.empty),
                    t.source || e.error("missing source"),
                    t.node || e.error("missing node"),
                    t.name &&
                      ((o = t.name), !/^[_a-zA-Z0-9-]+$/.test(o)) &&
                      e.error("invalid dataset name: " + t.name),
                    r.mixin(this),
                    (this.highlight = !!t.highlight),
                    (this.name = t.name || i()),
                    (this.limit = t.limit || 5),
                    (this.displayFn =
                      ((s = (s = t.display || t.displayKey) || n.stringify),
                      n.isFunction(s)
                        ? s
                        : function (t) {
                            return t[s];
                          })),
                    (this.templates =
                      ((a = t.templates),
                      (u = this.displayFn),
                      {
                        notFound: a.notFound && n.templatify(a.notFound),
                        pending: a.pending && n.templatify(a.pending),
                        header: a.header && n.templatify(a.header),
                        footer: a.footer && n.templatify(a.footer),
                        suggestion:
                          a.suggestion ||
                          function (t) {
                            return e("<div>").text(u(t));
                          },
                      })),
                    (this.source = t.source.__ttAdapter
                      ? t.source.__ttAdapter()
                      : t.source),
                    (this.async = n.isUndefined(t.async)
                      ? this.source.length > 2
                      : !!t.async),
                    this._resetLastSuggestion(),
                    (this.$el = e(t.node)
                      .addClass(this.classes.dataset)
                      .addClass(this.classes.dataset + "-" + this.name));
                }
                return (
                  (t = {
                    val: "tt-selectable-display",
                    obj: "tt-selectable-object",
                  }),
                  (i = n.getIdGenerator()),
                  (r.extractData = function (n) {
                    var i = e(n);
                    return i.data(t.obj)
                      ? { val: i.data(t.val) || "", obj: i.data(t.obj) || null }
                      : null;
                  }),
                  n.mixin(r.prototype, s, {
                    _overwrite: function (t, e) {
                      (e = e || []).length
                        ? this._renderSuggestions(t, e)
                        : this.async && this.templates.pending
                        ? this._renderPending(t)
                        : !this.async && this.templates.notFound
                        ? this._renderNotFound(t)
                        : this._empty(),
                        this.trigger("rendered", this.name, e, !1);
                    },
                    _append: function (t, e) {
                      (e = e || []).length && this.$lastSuggestion.length
                        ? this._appendSuggestions(t, e)
                        : e.length
                        ? this._renderSuggestions(t, e)
                        : !this.$lastSuggestion.length &&
                          this.templates.notFound &&
                          this._renderNotFound(t),
                        this.trigger("rendered", this.name, e, !0);
                    },
                    _renderSuggestions: function (t, e) {
                      var n;
                      (n = this._getSuggestionsFragment(t, e)),
                        (this.$lastSuggestion = n.children().last()),
                        this.$el
                          .html(n)
                          .prepend(this._getHeader(t, e))
                          .append(this._getFooter(t, e));
                    },
                    _appendSuggestions: function (t, e) {
                      var n, i;
                      (i = (n = this._getSuggestionsFragment(t, e))
                        .children()
                        .last()),
                        this.$lastSuggestion.after(n),
                        (this.$lastSuggestion = i);
                    },
                    _renderPending: function (t) {
                      var e = this.templates.pending;
                      this._resetLastSuggestion(),
                        e && this.$el.html(e({ query: t, dataset: this.name }));
                    },
                    _renderNotFound: function (t) {
                      var e = this.templates.notFound;
                      this._resetLastSuggestion(),
                        e && this.$el.html(e({ query: t, dataset: this.name }));
                    },
                    _empty: function () {
                      this.$el.empty(), this._resetLastSuggestion();
                    },
                    _getSuggestionsFragment: function (i, r) {
                      var o,
                        s = this;
                      return (
                        (o = document.createDocumentFragment()),
                        n.each(r, function (n) {
                          var r, a;
                          (a = s._injectQuery(i, n)),
                            (r = e(s.templates.suggestion(a))
                              .data(t.obj, n)
                              .data(t.val, s.displayFn(n))
                              .addClass(
                                s.classes.suggestion +
                                  " " +
                                  s.classes.selectable
                              )),
                            o.appendChild(r[0]);
                        }),
                        this.highlight &&
                          a({
                            className: this.classes.highlight,
                            node: o,
                            pattern: i,
                          }),
                        e(o)
                      );
                    },
                    _getFooter: function (t, e) {
                      return this.templates.footer
                        ? this.templates.footer({
                            query: t,
                            suggestions: e,
                            dataset: this.name,
                          })
                        : null;
                    },
                    _getHeader: function (t, e) {
                      return this.templates.header
                        ? this.templates.header({
                            query: t,
                            suggestions: e,
                            dataset: this.name,
                          })
                        : null;
                    },
                    _resetLastSuggestion: function () {
                      this.$lastSuggestion = e();
                    },
                    _injectQuery: function (t, e) {
                      return n.isObject(e) ? n.mixin({ _query: t }, e) : e;
                    },
                    update: function (t) {
                      var n = this,
                        i = !1,
                        r = !1,
                        o = 0;
                      function s(e) {
                        r ||
                          ((r = !0),
                          (e = (e || []).slice(0, n.limit)),
                          (o = e.length),
                          n._overwrite(t, e),
                          o < n.limit &&
                            n.async &&
                            n.trigger("asyncRequested", t));
                      }
                      this.cancel(),
                        (this.cancel = function () {
                          (i = !0),
                            (n.cancel = e.noop),
                            n.async && n.trigger("asyncCanceled", t);
                        }),
                        this.source(t, s, function (r) {
                          (r = r || []),
                            !i &&
                              o < n.limit &&
                              ((n.cancel = e.noop),
                              (o += r.length),
                              n._append(t, r.slice(0, n.limit - o)),
                              n.async && n.trigger("asyncReceived", t));
                        }),
                        !r && s([]);
                    },
                    cancel: e.noop,
                    clear: function () {
                      this._empty(), this.cancel(), this.trigger("cleared");
                    },
                    isEmpty: function () {
                      return this.$el.is(":empty");
                    },
                    destroy: function () {
                      this.$el = e("<div>");
                    },
                  }),
                  r
                );
              })()),
              (c = (function () {
                "use strict";
                function t(t, i) {
                  var r = this;
                  (t = t || {}).node || e.error("node is required"),
                    i.mixin(this),
                    (this.$node = e(t.node)),
                    (this.query = null),
                    (this.datasets = n.map(t.datasets, function (t) {
                      var n = r.$node.find(t.node).first();
                      return (
                        (t.node = n.length ? n : e("<div>").appendTo(r.$node)),
                        new l(t, i)
                      );
                    }));
                }
                return (
                  n.mixin(t.prototype, s, {
                    _onSelectableClick: function (t) {
                      this.trigger("selectableClicked", e(t.currentTarget));
                    },
                    _onRendered: function (t, e, n, i) {
                      this.$node.toggleClass(
                        this.classes.empty,
                        this._allDatasetsEmpty()
                      ),
                        this.trigger("datasetRendered", e, n, i);
                    },
                    _onCleared: function () {
                      this.$node.toggleClass(
                        this.classes.empty,
                        this._allDatasetsEmpty()
                      ),
                        this.trigger("datasetCleared");
                    },
                    _propagate: function () {
                      this.trigger.apply(this, arguments);
                    },
                    _allDatasetsEmpty: function () {
                      return n.every(this.datasets, function (t) {
                        return t.isEmpty();
                      });
                    },
                    _getSelectables: function () {
                      return this.$node.find(this.selectors.selectable);
                    },
                    _removeCursor: function () {
                      var t = this.getActiveSelectable();
                      t && t.removeClass(this.classes.cursor);
                    },
                    _ensureVisible: function (t) {
                      var e, n, i, r;
                      (n = (e = t.position().top) + t.outerHeight(!0)),
                        (i = this.$node.scrollTop()),
                        (r =
                          this.$node.height() +
                          parseInt(this.$node.css("paddingTop"), 10) +
                          parseInt(this.$node.css("paddingBottom"), 10)),
                        e < 0
                          ? this.$node.scrollTop(i + e)
                          : r < n && this.$node.scrollTop(i + (n - r));
                    },
                    bind: function () {
                      var t,
                        e = this;
                      return (
                        (t = n.bind(this._onSelectableClick, this)),
                        this.$node.on("click.tt", this.selectors.selectable, t),
                        n.each(this.datasets, function (t) {
                          t.onSync("asyncRequested", e._propagate, e)
                            .onSync("asyncCanceled", e._propagate, e)
                            .onSync("asyncReceived", e._propagate, e)
                            .onSync("rendered", e._onRendered, e)
                            .onSync("cleared", e._onCleared, e);
                        }),
                        this
                      );
                    },
                    isOpen: function () {
                      return this.$node.hasClass(this.classes.open);
                    },
                    open: function () {
                      this.$node.addClass(this.classes.open);
                    },
                    close: function () {
                      this.$node.removeClass(this.classes.open),
                        this._removeCursor();
                    },
                    setLanguageDirection: function (t) {
                      this.$node.attr("dir", t);
                    },
                    selectableRelativeToCursor: function (t) {
                      var e, n, i;
                      return (
                        (n = this.getActiveSelectable()),
                        (e = this._getSelectables()),
                        -1 ===
                        (i =
                          (i =
                            (((i = (n ? e.index(n) : -1) + t) + 1) %
                              (e.length + 1)) -
                            1) < -1
                            ? e.length - 1
                            : i)
                          ? null
                          : e.eq(i)
                      );
                    },
                    setCursor: function (t) {
                      this._removeCursor(),
                        (t = t && t.first()) &&
                          (t.addClass(this.classes.cursor),
                          this._ensureVisible(t));
                    },
                    getSelectableData: function (t) {
                      return t && t.length ? l.extractData(t) : null;
                    },
                    getActiveSelectable: function () {
                      var t = this._getSelectables()
                        .filter(this.selectors.cursor)
                        .first();
                      return t.length ? t : null;
                    },
                    getTopSelectable: function () {
                      var t = this._getSelectables().first();
                      return t.length ? t : null;
                    },
                    update: function (t) {
                      var e = t !== this.query;
                      return (
                        e &&
                          ((this.query = t),
                          n.each(this.datasets, function (e) {
                            e.update(t);
                          })),
                        e
                      );
                    },
                    empty: function () {
                      n.each(this.datasets, function (t) {
                        t.clear();
                      }),
                        (this.query = null),
                        this.$node.addClass(this.classes.empty);
                    },
                    destroy: function () {
                      this.$node.off(".tt"),
                        (this.$node = e("<div>")),
                        n.each(this.datasets, function (t) {
                          t.destroy();
                        });
                    },
                  }),
                  t
                );
              })()),
              (h = (function () {
                "use strict";
                var t = c.prototype;
                function e() {
                  c.apply(this, [].slice.call(arguments, 0));
                }
                return (
                  n.mixin(e.prototype, c.prototype, {
                    open: function () {
                      return (
                        !this._allDatasetsEmpty() && this._show(),
                        t.open.apply(this, [].slice.call(arguments, 0))
                      );
                    },
                    close: function () {
                      return (
                        this._hide(),
                        t.close.apply(this, [].slice.call(arguments, 0))
                      );
                    },
                    _onRendered: function () {
                      return (
                        this._allDatasetsEmpty()
                          ? this._hide()
                          : this.isOpen() && this._show(),
                        t._onRendered.apply(this, [].slice.call(arguments, 0))
                      );
                    },
                    _onCleared: function () {
                      return (
                        this._allDatasetsEmpty()
                          ? this._hide()
                          : this.isOpen() && this._show(),
                        t._onCleared.apply(this, [].slice.call(arguments, 0))
                      );
                    },
                    setLanguageDirection: function (e) {
                      return (
                        this.$node.css(
                          "ltr" === e ? this.css.ltr : this.css.rtl
                        ),
                        t.setLanguageDirection.apply(
                          this,
                          [].slice.call(arguments, 0)
                        )
                      );
                    },
                    _hide: function () {
                      this.$node.hide();
                    },
                    _show: function () {
                      this.$node.css("display", "block");
                    },
                  }),
                  e
                );
              })()),
              (f = (function () {
                "use strict";
                function t(t, r) {
                  var o, s, a, u, l, c, h, f, d, p, g;
                  (t = t || {}).input || e.error("missing input"),
                    t.menu || e.error("missing menu"),
                    t.eventBus || e.error("missing event bus"),
                    r.mixin(this),
                    (this.eventBus = t.eventBus),
                    (this.minLength = n.isNumber(t.minLength)
                      ? t.minLength
                      : 1),
                    (this.input = t.input),
                    (this.menu = t.menu),
                    (this.enabled = !0),
                    (this.active = !1),
                    this.input.hasFocus() && this.activate(),
                    (this.dir = this.input.getLangDir()),
                    this._hacks(),
                    this.menu
                      .bind()
                      .onSync(
                        "selectableClicked",
                        this._onSelectableClicked,
                        this
                      )
                      .onSync("asyncRequested", this._onAsyncRequested, this)
                      .onSync("asyncCanceled", this._onAsyncCanceled, this)
                      .onSync("asyncReceived", this._onAsyncReceived, this)
                      .onSync("datasetRendered", this._onDatasetRendered, this)
                      .onSync("datasetCleared", this._onDatasetCleared, this),
                    (o = i(this, "activate", "open", "_onFocused")),
                    (s = i(this, "deactivate", "_onBlurred")),
                    (a = i(this, "isActive", "isOpen", "_onEnterKeyed")),
                    (u = i(this, "isActive", "isOpen", "_onTabKeyed")),
                    (l = i(this, "isActive", "_onEscKeyed")),
                    (c = i(this, "isActive", "open", "_onUpKeyed")),
                    (h = i(this, "isActive", "open", "_onDownKeyed")),
                    (f = i(this, "isActive", "isOpen", "_onLeftKeyed")),
                    (d = i(this, "isActive", "isOpen", "_onRightKeyed")),
                    (p = i(this, "_openIfActive", "_onQueryChanged")),
                    (g = i(this, "_openIfActive", "_onWhitespaceChanged")),
                    this.input
                      .bind()
                      .onSync("focused", o, this)
                      .onSync("blurred", s, this)
                      .onSync("enterKeyed", a, this)
                      .onSync("tabKeyed", u, this)
                      .onSync("escKeyed", l, this)
                      .onSync("upKeyed", c, this)
                      .onSync("downKeyed", h, this)
                      .onSync("leftKeyed", f, this)
                      .onSync("rightKeyed", d, this)
                      .onSync("queryChanged", p, this)
                      .onSync("whitespaceChanged", g, this)
                      .onSync("langDirChanged", this._onLangDirChanged, this);
                }
                return (
                  n.mixin(t.prototype, {
                    _hacks: function () {
                      var t, i;
                      (t = this.input.$input || e("<div>")),
                        (i = this.menu.$node || e("<div>")),
                        t.on("blur.tt", function (e) {
                          var r, o, s;
                          (r = document.activeElement),
                            (o = i.is(r)),
                            (s = i.has(r).length > 0),
                            n.isMsie() &&
                              (o || s) &&
                              (e.preventDefault(),
                              e.stopImmediatePropagation(),
                              n.defer(function () {
                                t.focus();
                              }));
                        }),
                        i.on("mousedown.tt", function (t) {
                          t.preventDefault();
                        });
                    },
                    _onSelectableClicked: function (t, e) {
                      this.select(e);
                    },
                    _onDatasetCleared: function () {
                      this._updateHint();
                    },
                    _onDatasetRendered: function (t, e, n, i) {
                      this._updateHint(),
                        this.eventBus.trigger("render", n, i, e);
                    },
                    _onAsyncRequested: function (t, e, n) {
                      this.eventBus.trigger("asyncrequest", n, e);
                    },
                    _onAsyncCanceled: function (t, e, n) {
                      this.eventBus.trigger("asynccancel", n, e);
                    },
                    _onAsyncReceived: function (t, e, n) {
                      this.eventBus.trigger("asyncreceive", n, e);
                    },
                    _onFocused: function () {
                      this._minLengthMet() &&
                        this.menu.update(this.input.getQuery());
                    },
                    _onBlurred: function () {
                      this.input.hasQueryChangedSinceLastFocus() &&
                        this.eventBus.trigger("change", this.input.getQuery());
                    },
                    _onEnterKeyed: function (t, e) {
                      var n;
                      (n = this.menu.getActiveSelectable()) &&
                        this.select(n) &&
                        e.preventDefault();
                    },
                    _onTabKeyed: function (t, e) {
                      var n;
                      (n = this.menu.getActiveSelectable())
                        ? this.select(n) && e.preventDefault()
                        : (n = this.menu.getTopSelectable()) &&
                          this.autocomplete(n) &&
                          e.preventDefault();
                    },
                    _onEscKeyed: function () {
                      this.close();
                    },
                    _onUpKeyed: function () {
                      this.moveCursor(-1);
                    },
                    _onDownKeyed: function () {
                      this.moveCursor(1);
                    },
                    _onLeftKeyed: function () {
                      "rtl" === this.dir &&
                        this.input.isCursorAtEnd() &&
                        this.autocomplete(this.menu.getTopSelectable());
                    },
                    _onRightKeyed: function () {
                      "ltr" === this.dir &&
                        this.input.isCursorAtEnd() &&
                        this.autocomplete(this.menu.getTopSelectable());
                    },
                    _onQueryChanged: function (t, e) {
                      this._minLengthMet(e)
                        ? this.menu.update(e)
                        : this.menu.empty();
                    },
                    _onWhitespaceChanged: function () {
                      this._updateHint();
                    },
                    _onLangDirChanged: function (t, e) {
                      this.dir !== e &&
                        ((this.dir = e), this.menu.setLanguageDirection(e));
                    },
                    _openIfActive: function () {
                      this.isActive() && this.open();
                    },
                    _minLengthMet: function (t) {
                      return (
                        (t = n.isString(t) ? t : this.input.getQuery() || "")
                          .length >= this.minLength
                      );
                    },
                    _updateHint: function () {
                      var t, e, i, r, o, s;
                      (t = this.menu.getTopSelectable()),
                        (e = this.menu.getSelectableData(t)),
                        (i = this.input.getInputValue()),
                        !e || n.isBlankString(i) || this.input.hasOverflow()
                          ? this.input.clearHint()
                          : ((r = u.normalizeQuery(i)),
                            (o = n.escapeRegExChars(r)),
                            (s = new RegExp("^(?:" + o + ")(.+$)", "i").exec(
                              e.val
                            )) && this.input.setHint(i + s[1]));
                    },
                    isEnabled: function () {
                      return this.enabled;
                    },
                    enable: function () {
                      this.enabled = !0;
                    },
                    disable: function () {
                      this.enabled = !1;
                    },
                    isActive: function () {
                      return this.active;
                    },
                    activate: function () {
                      return (
                        !!this.isActive() ||
                        (!(
                          !this.isEnabled() || this.eventBus.before("active")
                        ) &&
                          ((this.active = !0),
                          this.eventBus.trigger("active"),
                          !0))
                      );
                    },
                    deactivate: function () {
                      return (
                        !this.isActive() ||
                        (!this.eventBus.before("idle") &&
                          ((this.active = !1),
                          this.close(),
                          this.eventBus.trigger("idle"),
                          !0))
                      );
                    },
                    isOpen: function () {
                      return this.menu.isOpen();
                    },
                    open: function () {
                      return (
                        this.isOpen() ||
                          this.eventBus.before("open") ||
                          (this.menu.open(),
                          this._updateHint(),
                          this.eventBus.trigger("open")),
                        this.isOpen()
                      );
                    },
                    close: function () {
                      return (
                        this.isOpen() &&
                          !this.eventBus.before("close") &&
                          (this.menu.close(),
                          this.input.clearHint(),
                          this.input.resetInputValue(),
                          this.eventBus.trigger("close")),
                        !this.isOpen()
                      );
                    },
                    setVal: function (t) {
                      this.input.setQuery(n.toStr(t));
                    },
                    getVal: function () {
                      return this.input.getQuery();
                    },
                    select: function (t) {
                      var e = this.menu.getSelectableData(t);
                      return !(
                        !e ||
                        this.eventBus.before("select", e.obj) ||
                        (this.input.setQuery(e.val, !0),
                        this.eventBus.trigger("select", e.obj),
                        this.close(),
                        0)
                      );
                    },
                    autocomplete: function (t) {
                      var e, n;
                      return (
                        (e = this.input.getQuery()),
                        !(
                          !(n = this.menu.getSelectableData(t)) ||
                          e === n.val ||
                          this.eventBus.before("autocomplete", n.obj) ||
                          (this.input.setQuery(n.val),
                          this.eventBus.trigger("autocomplete", n.obj),
                          0)
                        )
                      );
                    },
                    moveCursor: function (t) {
                      var e, n, i, r;
                      return (
                        (e = this.input.getQuery()),
                        (n = this.menu.selectableRelativeToCursor(t)),
                        (r = (i = this.menu.getSelectableData(n))
                          ? i.obj
                          : null),
                        !(
                          (this._minLengthMet() && this.menu.update(e)) ||
                          this.eventBus.before("cursorchange", r) ||
                          (this.menu.setCursor(n),
                          i
                            ? this.input.setInputValue(i.val)
                            : (this.input.resetInputValue(),
                              this._updateHint()),
                          this.eventBus.trigger("cursorchange", r),
                          0)
                        )
                      );
                    },
                    destroy: function () {
                      this.input.destroy(), this.menu.destroy();
                    },
                  }),
                  t
                );
                function i(t) {
                  var e = [].slice.call(arguments, 1);
                  return function () {
                    var i = [].slice.call(arguments);
                    n.each(e, function (e) {
                      return t[e].apply(t, i);
                    });
                  };
                }
              })()),
              void (function () {
                "use strict";
                var t, i, s;
                function a(t, n) {
                  t.each(function () {
                    var t,
                      r = e(this);
                    (t = r.data(i.typeahead)) && n(t, r);
                  });
                }
                function l(t, e) {
                  return t
                    .clone()
                    .addClass(e.classes.hint)
                    .removeData()
                    .css(e.css.hint)
                    .css(
                      ((n = t),
                      {
                        backgroundAttachment: n.css("background-attachment"),
                        backgroundClip: n.css("background-clip"),
                        backgroundColor: n.css("background-color"),
                        backgroundImage: n.css("background-image"),
                        backgroundOrigin: n.css("background-origin"),
                        backgroundPosition: n.css("background-position"),
                        backgroundRepeat: n.css("background-repeat"),
                        backgroundSize: n.css("background-size"),
                      })
                    )
                    .prop("readonly", !0)
                    .removeAttr("id name placeholder required")
                    .attr({
                      autocomplete: "off",
                      spellcheck: "false",
                      tabindex: -1,
                    });
                  var n;
                }
                function d(t, e) {
                  t.data(i.attrs, {
                    dir: t.attr("dir"),
                    autocomplete: t.attr("autocomplete"),
                    spellcheck: t.attr("spellcheck"),
                    style: t.attr("style"),
                  }),
                    t
                      .addClass(e.classes.input)
                      .attr({ autocomplete: "off", spellcheck: !1 });
                  try {
                    !t.attr("dir") && t.attr("dir", "auto");
                  } catch (t) {}
                  return t;
                }
                function p(t) {
                  var i;
                  return (i =
                    n.isJQuery(t) || n.isElement(t) ? e(t).first() : []).length
                    ? i
                    : null;
                }
                (t = e.fn.typeahead),
                  (i = {
                    www: "tt-www",
                    attrs: "tt-attrs",
                    typeahead: "tt-typeahead",
                  }),
                  (s = {
                    initialize: function (t, s) {
                      var a;
                      return (
                        (s = n.isArray(s) ? s : [].slice.call(arguments, 1)),
                        (a = r((t = t || {}).classNames)),
                        this.each(g)
                      );
                      function g() {
                        var r, g, m, v, y, b, x, w, T, C, S;
                        n.each(s, function (e) {
                          e.highlight = !!t.highlight;
                        }),
                          (r = e(this)),
                          (g = e(a.html.wrapper)),
                          (m = p(t.hint)),
                          (v = p(t.menu)),
                          (y = !1 !== t.hint && !m),
                          (b = !1 !== t.menu && !v),
                          y && (m = l(r, a)),
                          b && (v = e(a.html.menu).css(a.css.menu)),
                          m && m.val(""),
                          (r = d(r, a)),
                          (y || b) &&
                            (g.css(a.css.wrapper),
                            r.css(y ? a.css.input : a.css.inputWithNoHint),
                            r
                              .wrap(g)
                              .parent()
                              .prepend(y ? m : null)
                              .append(b ? v : null)),
                          (S = b ? h : c),
                          (x = new o({ el: r })),
                          (w = new u({ hint: m, input: r }, a)),
                          (T = new S({ node: v, datasets: s }, a)),
                          (C = new f(
                            {
                              input: w,
                              menu: T,
                              eventBus: x,
                              minLength: t.minLength,
                            },
                            a
                          )),
                          r.data(i.www, a),
                          r.data(i.typeahead, C);
                      }
                    },
                    isEnabled: function () {
                      var t;
                      return (
                        a(this.first(), function (e) {
                          t = e.isEnabled();
                        }),
                        t
                      );
                    },
                    enable: function () {
                      return (
                        a(this, function (t) {
                          t.enable();
                        }),
                        this
                      );
                    },
                    disable: function () {
                      return (
                        a(this, function (t) {
                          t.disable();
                        }),
                        this
                      );
                    },
                    isActive: function () {
                      var t;
                      return (
                        a(this.first(), function (e) {
                          t = e.isActive();
                        }),
                        t
                      );
                    },
                    activate: function () {
                      return (
                        a(this, function (t) {
                          t.activate();
                        }),
                        this
                      );
                    },
                    deactivate: function () {
                      return (
                        a(this, function (t) {
                          t.deactivate();
                        }),
                        this
                      );
                    },
                    isOpen: function () {
                      var t;
                      return (
                        a(this.first(), function (e) {
                          t = e.isOpen();
                        }),
                        t
                      );
                    },
                    open: function () {
                      return (
                        a(this, function (t) {
                          t.open();
                        }),
                        this
                      );
                    },
                    close: function () {
                      return (
                        a(this, function (t) {
                          t.close();
                        }),
                        this
                      );
                    },
                    select: function (t) {
                      var n = !1,
                        i = e(t);
                      return (
                        a(this.first(), function (t) {
                          n = t.select(i);
                        }),
                        n
                      );
                    },
                    autocomplete: function (t) {
                      var n = !1,
                        i = e(t);
                      return (
                        a(this.first(), function (t) {
                          n = t.autocomplete(i);
                        }),
                        n
                      );
                    },
                    moveCursor: function (t) {
                      var e = !1;
                      return (
                        a(this.first(), function (n) {
                          e = n.moveCursor(t);
                        }),
                        e
                      );
                    },
                    val: function (t) {
                      var e;
                      return arguments.length
                        ? (a(this, function (e) {
                            e.setVal(t);
                          }),
                          this)
                        : (a(this.first(), function (t) {
                            e = t.getVal();
                          }),
                          e);
                    },
                    destroy: function () {
                      return (
                        a(this, function (t, e) {
                          !(function (t) {
                            var e, r;
                            (e = t.data(i.www)),
                              (r = t.parent().filter(e.selectors.wrapper)),
                              n.each(t.data(i.attrs), function (e, i) {
                                n.isUndefined(e)
                                  ? t.removeAttr(i)
                                  : t.attr(i, e);
                              }),
                              t
                                .removeData(i.typeahead)
                                .removeData(i.www)
                                .removeData(i.attr)
                                .removeClass(e.classes.input),
                              r.length &&
                                (t.detach().insertAfter(r), r.remove());
                          })(e),
                            t.destroy();
                        }),
                        this
                      );
                    },
                  }),
                  (e.fn.typeahead = function (t) {
                    return s[t]
                      ? s[t].apply(this, [].slice.call(arguments, 1))
                      : s.initialize.apply(this, arguments);
                  }),
                  (e.fn.typeahead.noConflict = function () {
                    return (e.fn.typeahead = t), this;
                  });
              })()
            );
            var e, n, r, o, s, a, u, l, c, h, f;
          }.apply(e, r)) || (t.exports = o);
    }.call(this, n(34).setImmediate));
  },
  function (t, e, n) {
    (function (t) {
      var i =
          (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
        r = Function.prototype.apply;
      function o(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      (e.setTimeout = function () {
        return new o(r.call(setTimeout, i, arguments), clearTimeout);
      }),
        (e.setInterval = function () {
          return new o(r.call(setInterval, i, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval = function (t) {
          t && t.close();
        }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(i, this._id);
        }),
        (e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active = function (t) {
          clearTimeout(t._idleTimeoutId);
          var e = t._idleTimeout;
          e >= 0 &&
            (t._idleTimeoutId = setTimeout(function () {
              t._onTimeout && t._onTimeout();
            }, e));
        }),
        n(35),
        (e.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== t && t.setImmediate) ||
          (this && this.setImmediate)),
        (e.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== t && t.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(12)));
  },
  function (t, e, n) {
    (function (t, e) {
      !(function (t, n) {
        "use strict";
        if (!t.setImmediate) {
          var i,
            r,
            o,
            s,
            a,
            u = 1,
            l = {},
            c = !1,
            h = t.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(t);
          (f = f && f.setTimeout ? f : t),
            "[object process]" === {}.toString.call(t.process)
              ? (i = function (t) {
                  e.nextTick(function () {
                    p(t);
                  });
                })
              : !(function () {
                  if (t.postMessage && !t.importScripts) {
                    var e = !0,
                      n = t.onmessage;
                    return (
                      (t.onmessage = function () {
                        e = !1;
                      }),
                      t.postMessage("", "*"),
                      (t.onmessage = n),
                      e
                    );
                  }
                })()
              ? t.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (t) {
                    p(t.data);
                  }),
                  (i = function (t) {
                    o.port2.postMessage(t);
                  }))
                : h && "onreadystatechange" in h.createElement("script")
                ? ((r = h.documentElement),
                  (i = function (t) {
                    var e = h.createElement("script");
                    (e.onreadystatechange = function () {
                      p(t),
                        (e.onreadystatechange = null),
                        r.removeChild(e),
                        (e = null);
                    }),
                      r.appendChild(e);
                  }))
                : (i = function (t) {
                    setTimeout(p, 0, t);
                  })
              : ((s = "setImmediate$" + Math.random() + "$"),
                (a = function (e) {
                  e.source === t &&
                    "string" == typeof e.data &&
                    0 === e.data.indexOf(s) &&
                    p(+e.data.slice(s.length));
                }),
                t.addEventListener
                  ? t.addEventListener("message", a, !1)
                  : t.attachEvent("onmessage", a),
                (i = function (e) {
                  t.postMessage(s + e, "*");
                })),
            (f.setImmediate = function (t) {
              "function" != typeof t && (t = new Function("" + t));
              for (
                var e = new Array(arguments.length - 1), n = 0;
                n < e.length;
                n++
              )
                e[n] = arguments[n + 1];
              var r = { callback: t, args: e };
              return (l[u] = r), i(u), u++;
            }),
            (f.clearImmediate = d);
        }
        function d(t) {
          delete l[t];
        }
        function p(t) {
          if (c) setTimeout(p, 0, t);
          else {
            var e = l[t];
            if (e) {
              c = !0;
              try {
                !(function (t) {
                  var e = t.callback,
                    n = t.args;
                  switch (n.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(n[0]);
                      break;
                    case 2:
                      e(n[0], n[1]);
                      break;
                    case 3:
                      e(n[0], n[1], n[2]);
                      break;
                    default:
                      e.apply(void 0, n);
                  }
                })(e);
              } finally {
                d(t), (c = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
    }.call(this, n(12), n(36)));
  },
  function (t, e) {
    var n,
      i,
      r = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        i = s;
      }
    })();
    var u,
      l = [],
      c = !1,
      h = -1;
    function f() {
      c &&
        u &&
        ((c = !1), u.length ? (l = u.concat(l)) : (h = -1), l.length && d());
    }
    function d() {
      if (!c) {
        var t = a(f);
        c = !0;
        for (var e = l.length; e; ) {
          for (u = l, l = []; ++h < e; ) u && u[h].run();
          (h = -1), (e = l.length);
        }
        (u = null),
          (c = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === s || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          })(t);
      }
    }
    function p(t, e) {
      (this.fun = t), (this.array = e);
    }
    function g() {}
    (r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      l.push(new p(t, e)), 1 !== l.length || c || a(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = g),
      (r.addListener = g),
      (r.once = g),
      (r.off = g),
      (r.removeListener = g),
      (r.removeAllListeners = g),
      (r.emit = g),
      (r.prependListener = g),
      (r.prependOnceListener = g),
      (r.listeners = function (t) {
        return [];
      }),
      (r.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (t, e) {
    /*!
     * Validator v0.11.9 for Bootstrap 3, by @1000hz
     * Copyright 2017 Cina Saffary
     * Licensed under http://opensource.org/licenses/MIT
     *
     * https://github.com/1000hz/bootstrap-validator
     */
    !(function (t) {
      "use strict";
      function e(e) {
        return e.is('[type="checkbox"]')
          ? e.prop("checked")
          : e.is('[type="radio"]')
          ? !!t('[name="' + e.attr("name") + '"]:checked').length
          : e.is("select[multiple]")
          ? (e.val() || []).length
          : e.val();
      }
      var n = function (i, r) {
        (this.options = r),
          (this.validators = t.extend({}, n.VALIDATORS, r.custom)),
          (this.$element = t(i)),
          (this.$btn = t('button[type="submit"], input[type="submit"]')
            .filter('[form="' + this.$element.attr("id") + '"]')
            .add(
              this.$element.find('input[type="submit"], button[type="submit"]')
            )),
          this.update(),
          this.$element.on(
            "input.bs.validator change.bs.validator focusout.bs.validator",
            t.proxy(this.onInput, this)
          ),
          this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)),
          this.$element.on("reset.bs.validator", t.proxy(this.reset, this)),
          this.$element.find("[data-match]").each(function () {
            var n = t(this),
              i = n.attr("data-match");
            t(i).on("input.bs.validator", function (t) {
              e(n) && n.trigger("input.bs.validator");
            });
          }),
          this.$inputs
            .filter(function () {
              return e(t(this)) && !t(this).closest(".has-error").length;
            })
            .trigger("focusout"),
          this.$element.attr("novalidate", !0);
      };
      function i(e) {
        return this.each(function () {
          var i = t(this),
            r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
            o = i.data("bs.validator");
          (o || "destroy" != e) &&
            (o || i.data("bs.validator", (o = new n(this, r))),
            "string" == typeof e && o[e]());
        });
      }
      (n.VERSION = "0.11.9"),
        (n.INPUT_SELECTOR =
          ':input:not([type="hidden"], [type="submit"], [type="reset"], button)'),
        (n.FOCUS_OFFSET = 20),
        (n.DEFAULTS = {
          delay: 500,
          html: !1,
          disable: !0,
          focus: !0,
          custom: {},
          errors: { match: "Does not match", minlength: "Not long enough" },
          feedback: { success: "glyphicon-ok", error: "glyphicon-remove" },
        }),
        (n.VALIDATORS = {
          native: function (t) {
            var e = t[0];
            if (e.checkValidity)
              return (
                !e.checkValidity() &&
                !e.validity.valid &&
                (e.validationMessage || "error!")
              );
          },
          match: function (e) {
            var i = e.attr("data-match");
            return e.val() !== t(i).val() && n.DEFAULTS.errors.match;
          },
          minlength: function (t) {
            var e = t.attr("data-minlength");
            return t.val().length < e && n.DEFAULTS.errors.minlength;
          },
        }),
        (n.prototype.update = function () {
          var e = this;
          return (
            (this.$inputs = this.$element
              .find(n.INPUT_SELECTOR)
              .add(this.$element.find('[data-validate="true"]'))
              .not(
                this.$element.find('[data-validate="false"]').each(function () {
                  e.clearErrors(t(this));
                })
              )),
            this.toggleSubmit(),
            this
          );
        }),
        (n.prototype.onInput = function (e) {
          var n = this,
            i = t(e.target),
            r = "focusout" !== e.type;
          this.$inputs.is(i) &&
            this.validateInput(i, r).done(function () {
              n.toggleSubmit();
            });
        }),
        (n.prototype.validateInput = function (n, i) {
          e(n);
          var r = n.data("bs.validator.errors");
          n.is('[type="radio"]') &&
            (n = this.$element.find('input[name="' + n.attr("name") + '"]'));
          var o = t.Event("validate.bs.validator", { relatedTarget: n[0] });
          if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
            var s = this;
            return this.runValidators(n).done(function (e) {
              n.data("bs.validator.errors", e),
                e.length
                  ? i
                    ? s.defer(n, s.showErrors)
                    : s.showErrors(n)
                  : s.clearErrors(n),
                (r && e.toString() === r.toString()) ||
                  ((o = e.length
                    ? t.Event("invalid.bs.validator", {
                        relatedTarget: n[0],
                        detail: e,
                      })
                    : t.Event("valid.bs.validator", {
                        relatedTarget: n[0],
                        detail: r,
                      })),
                  s.$element.trigger(o)),
                s.toggleSubmit(),
                s.$element.trigger(
                  t.Event("validated.bs.validator", { relatedTarget: n[0] })
                );
            });
          }
        }),
        (n.prototype.runValidators = function (n) {
          var i = [],
            r = t.Deferred();
          function o(t) {
            return (
              (function (t) {
                return n.attr("data-" + t + "-error");
              })(t) ||
              ((e = n[0].validity).typeMismatch
                ? n.attr("data-type-error")
                : e.patternMismatch
                ? n.attr("data-pattern-error")
                : e.stepMismatch
                ? n.attr("data-step-error")
                : e.rangeOverflow
                ? n.attr("data-max-error")
                : e.rangeUnderflow
                ? n.attr("data-min-error")
                : e.valueMissing
                ? n.attr("data-required-error")
                : null) ||
              n.attr("data-error")
            );
            var e;
          }
          return (
            n.data("bs.validator.deferred") &&
              n.data("bs.validator.deferred").reject(),
            n.data("bs.validator.deferred", r),
            t.each(
              this.validators,
              t.proxy(function (t, r) {
                var s = null;
                (!e(n) && !n.attr("required")) ||
                  (void 0 === n.attr("data-" + t) && "native" != t) ||
                  !(s = r.call(this, n)) ||
                  ((s = o(t) || s), !~i.indexOf(s) && i.push(s));
              }, this)
            ),
            !i.length && e(n) && n.attr("data-remote")
              ? this.defer(n, function () {
                  var s = {};
                  (s[n.attr("name")] = e(n)),
                    t
                      .get(n.attr("data-remote"), s)
                      .fail(function (t, e, n) {
                        i.push(o("remote") || n);
                      })
                      .always(function () {
                        r.resolve(i);
                      });
                })
              : r.resolve(i),
            r.promise()
          );
        }),
        (n.prototype.validate = function () {
          var e = this;
          return (
            t
              .when(
                this.$inputs.map(function (n) {
                  return e.validateInput(t(this), !1);
                })
              )
              .then(function () {
                e.toggleSubmit(), e.focusError();
              }),
            this
          );
        }),
        (n.prototype.focusError = function () {
          if (this.options.focus) {
            var e = this.$element.find(".has-error:first :input");
            0 !== e.length &&
              (t("html, body").animate(
                { scrollTop: e.offset().top - n.FOCUS_OFFSET },
                250
              ),
              e.focus());
          }
        }),
        (n.prototype.showErrors = function (e) {
          var n = this.options.html ? "html" : "text",
            i = e.data("bs.validator.errors"),
            r = e.closest(".form-group"),
            o = r.find(".help-block.with-errors"),
            s = r.find(".form-control-feedback");
          i.length &&
            ((i = t("<ul/>")
              .addClass("list-unstyled")
              .append(
                t.map(i, function (e) {
                  return t("<li/>")[n](e);
                })
              )),
            void 0 === o.data("bs.validator.originalContent") &&
              o.data("bs.validator.originalContent", o.html()),
            o.empty().append(i),
            r.addClass("has-error has-danger"),
            r.hasClass("has-feedback") &&
              s.removeClass(this.options.feedback.success) &&
              s.addClass(this.options.feedback.error) &&
              r.removeClass("has-success"));
        }),
        (n.prototype.clearErrors = function (t) {
          var n = t.closest(".form-group"),
            i = n.find(".help-block.with-errors"),
            r = n.find(".form-control-feedback");
          i.html(i.data("bs.validator.originalContent")),
            n.removeClass("has-error has-danger has-success"),
            n.hasClass("has-feedback") &&
              r.removeClass(this.options.feedback.error) &&
              r.removeClass(this.options.feedback.success) &&
              e(t) &&
              r.addClass(this.options.feedback.success) &&
              n.addClass("has-success");
        }),
        (n.prototype.hasErrors = function () {
          return !!this.$inputs.filter(function () {
            return !!(t(this).data("bs.validator.errors") || []).length;
          }).length;
        }),
        (n.prototype.isIncomplete = function () {
          return !!this.$inputs.filter("[required]").filter(function () {
            var n = e(t(this));
            return !("string" == typeof n ? t.trim(n) : n);
          }).length;
        }),
        (n.prototype.onSubmit = function (t) {
          this.validate(),
            (this.isIncomplete() || this.hasErrors()) && t.preventDefault();
        }),
        (n.prototype.toggleSubmit = function () {
          this.options.disable &&
            this.$btn.toggleClass(
              "disabled",
              this.isIncomplete() || this.hasErrors()
            );
        }),
        (n.prototype.defer = function (e, n) {
          if (((n = t.proxy(n, this, e)), !this.options.delay)) return n();
          window.clearTimeout(e.data("bs.validator.timeout")),
            e.data(
              "bs.validator.timeout",
              window.setTimeout(n, this.options.delay)
            );
        }),
        (n.prototype.reset = function () {
          return (
            this.$element
              .find(".form-control-feedback")
              .removeClass(this.options.feedback.error)
              .removeClass(this.options.feedback.success),
            this.$inputs
              .removeData(["bs.validator.errors", "bs.validator.deferred"])
              .each(function () {
                var e = t(this),
                  n = e.data("bs.validator.timeout");
                window.clearTimeout(n) && e.removeData("bs.validator.timeout");
              }),
            this.$element.find(".help-block.with-errors").each(function () {
              var e = t(this),
                n = e.data("bs.validator.originalContent");
              e.removeData("bs.validator.originalContent").html(n);
            }),
            this.$btn.removeClass("disabled"),
            this.$element
              .find(".has-error, .has-danger, .has-success")
              .removeClass("has-error has-danger has-success"),
            this
          );
        }),
        (n.prototype.destroy = function () {
          return (
            this.reset(),
            this.$element
              .removeAttr("novalidate")
              .removeData("bs.validator")
              .off(".bs.validator"),
            this.$inputs.off(".bs.validator"),
            (this.options = null),
            (this.validators = null),
            (this.$element = null),
            (this.$btn = null),
            (this.$inputs = null),
            this
          );
        });
      var r = t.fn.validator;
      (t.fn.validator = i),
        (t.fn.validator.Constructor = n),
        (t.fn.validator.noConflict = function () {
          return (t.fn.validator = r), this;
        }),
        t(window).on("load", function () {
          t('form[data-toggle="validator"]').each(function () {
            var e = t(this);
            i.call(e, e.data());
          });
        });
    })(jQuery);
  },
  function (t, e, n) {
    var i, r, o;
    !(function (s) {
      "use strict";
      (r = [n(4)]),
        void 0 ===
          (o =
            "function" ==
            typeof (i = function (t) {
              var e = -1,
                n = -1,
                i = function (t) {
                  return parseFloat(t) || 0;
                },
                r = function (e) {
                  var n = t(e),
                    r = null,
                    o = [];
                  return (
                    n.each(function () {
                      var e = t(this),
                        n = e.offset().top - i(e.css("margin-top")),
                        s = o.length > 0 ? o[o.length - 1] : null;
                      null === s
                        ? o.push(e)
                        : Math.floor(Math.abs(r - n)) <= 1
                        ? (o[o.length - 1] = s.add(e))
                        : o.push(e),
                        (r = n);
                    }),
                    o
                  );
                },
                o = function (e) {
                  var n = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1,
                  };
                  return "object" == typeof e
                    ? t.extend(n, e)
                    : ("boolean" == typeof e
                        ? (n.byRow = e)
                        : "remove" === e && (n.remove = !0),
                      n);
                },
                s = (t.fn.matchHeight = function (e) {
                  var n = o(e);
                  if (n.remove) {
                    var i = this;
                    return (
                      this.css(n.property, ""),
                      t.each(s._groups, function (t, e) {
                        e.elements = e.elements.not(i);
                      }),
                      this
                    );
                  }
                  return (
                    (this.length <= 1 && !n.target) ||
                      (s._groups.push({ elements: this, options: n }),
                      s._apply(this, n)),
                    this
                  );
                });
              (s.version = "0.7.2"),
                (s._groups = []),
                (s._throttle = 80),
                (s._maintainScroll = !1),
                (s._beforeUpdate = null),
                (s._afterUpdate = null),
                (s._rows = r),
                (s._parse = i),
                (s._parseOptions = o),
                (s._apply = function (e, n) {
                  var a = o(n),
                    u = t(e),
                    l = [u],
                    c = t(window).scrollTop(),
                    h = t("html").outerHeight(!0),
                    f = u.parents().filter(":hidden");
                  return (
                    f.each(function () {
                      var e = t(this);
                      e.data("style-cache", e.attr("style"));
                    }),
                    f.css("display", "block"),
                    a.byRow &&
                      !a.target &&
                      (u.each(function () {
                        var e = t(this),
                          n = e.css("display");
                        "inline-block" !== n &&
                          "flex" !== n &&
                          "inline-flex" !== n &&
                          (n = "block"),
                          e.data("style-cache", e.attr("style")),
                          e.css({
                            display: n,
                            "padding-top": "0",
                            "padding-bottom": "0",
                            "margin-top": "0",
                            "margin-bottom": "0",
                            "border-top-width": "0",
                            "border-bottom-width": "0",
                            height: "100px",
                            overflow: "hidden",
                          });
                      }),
                      (l = r(u)),
                      u.each(function () {
                        var e = t(this);
                        e.attr("style", e.data("style-cache") || "");
                      })),
                    t.each(l, function (e, n) {
                      var r = t(n),
                        o = 0;
                      if (a.target) o = a.target.outerHeight(!1);
                      else {
                        if (a.byRow && r.length <= 1)
                          return void r.css(a.property, "");
                        r.each(function () {
                          var e = t(this),
                            n = e.attr("style"),
                            i = e.css("display");
                          "inline-block" !== i &&
                            "flex" !== i &&
                            "inline-flex" !== i &&
                            (i = "block");
                          var r = { display: i };
                          (r[a.property] = ""),
                            e.css(r),
                            e.outerHeight(!1) > o && (o = e.outerHeight(!1)),
                            n ? e.attr("style", n) : e.css("display", "");
                        });
                      }
                      r.each(function () {
                        var e = t(this),
                          n = 0;
                        (a.target && e.is(a.target)) ||
                          ("border-box" !== e.css("box-sizing") &&
                            ((n +=
                              i(e.css("border-top-width")) +
                              i(e.css("border-bottom-width"))),
                            (n +=
                              i(e.css("padding-top")) +
                              i(e.css("padding-bottom")))),
                          e.css(a.property, o - n + "px"));
                      });
                    }),
                    f.each(function () {
                      var e = t(this);
                      e.attr("style", e.data("style-cache") || null);
                    }),
                    s._maintainScroll &&
                      t(window).scrollTop((c / h) * t("html").outerHeight(!0)),
                    this
                  );
                }),
                (s._applyDataApi = function () {
                  var e = {};
                  t("[data-match-height], [data-mh]").each(function () {
                    var n = t(this),
                      i = n.attr("data-mh") || n.attr("data-match-height");
                    e[i] = i in e ? e[i].add(n) : n;
                  }),
                    t.each(e, function () {
                      this.matchHeight(!0);
                    });
                });
              var a = function (e) {
                s._beforeUpdate && s._beforeUpdate(e, s._groups),
                  t.each(s._groups, function () {
                    s._apply(this.elements, this.options);
                  }),
                  s._afterUpdate && s._afterUpdate(e, s._groups);
              };
              (s._update = function (i, r) {
                if (r && "resize" === r.type) {
                  var o = t(window).width();
                  if (o === e) return;
                  e = o;
                }
                i
                  ? -1 === n &&
                    (n = setTimeout(function () {
                      a(r), (n = -1);
                    }, s._throttle))
                  : a(r);
              }),
                t(s._applyDataApi);
              var u = t.fn.on ? "on" : "bind";
              t(window)[u]("load", function (t) {
                s._update(!1, t);
              }),
                t(window)[u]("resize orientationchange", function (t) {
                  s._update(!0, t);
                });
            })
              ? i.apply(e, r)
              : i) || (t.exports = o);
    })();
  },
  function (t, e, n) {
    var i, r, o;
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */ (r = [n(4)]),
      void 0 ===
        (o =
          "function" ==
          typeof (i = function (t) {
            var e = /\+/g;
            function n(t) {
              return o.raw ? t : encodeURIComponent(t);
            }
            function i(t) {
              return n(o.json ? JSON.stringify(t) : String(t));
            }
            function r(n, i) {
              var r = o.raw
                ? n
                : (function (t) {
                    0 === t.indexOf('"') &&
                      (t = t
                        .slice(1, -1)
                        .replace(/\\"/g, '"')
                        .replace(/\\\\/g, "\\"));
                    try {
                      return (
                        (t = decodeURIComponent(t.replace(e, " "))),
                        o.json ? JSON.parse(t) : t
                      );
                    } catch (t) {}
                  })(n);
              return t.isFunction(i) ? i(r) : r;
            }
            var o = (t.cookie = function (e, s, a) {
              if (void 0 !== s && !t.isFunction(s)) {
                if (
                  "number" == typeof (a = t.extend({}, o.defaults, a)).expires
                ) {
                  var u = a.expires,
                    l = (a.expires = new Date());
                  l.setTime(+l + 864e5 * u);
                }
                return (document.cookie = [
                  n(e),
                  "=",
                  i(s),
                  a.expires ? "; expires=" + a.expires.toUTCString() : "",
                  a.path ? "; path=" + a.path : "",
                  a.domain ? "; domain=" + a.domain : "",
                  a.secure ? "; secure" : "",
                ].join(""));
              }
              for (
                var c,
                  h = e ? void 0 : {},
                  f = document.cookie ? document.cookie.split("; ") : [],
                  d = 0,
                  p = f.length;
                d < p;
                d++
              ) {
                var g = f[d].split("="),
                  m = ((c = g.shift()), o.raw ? c : decodeURIComponent(c)),
                  v = g.join("=");
                if (e && e === m) {
                  h = r(v, s);
                  break;
                }
                e || void 0 === (v = r(v)) || (h[m] = v);
              }
              return h;
            });
            (o.defaults = {}),
              (t.removeCookie = function (e, n) {
                return (
                  void 0 !== t.cookie(e) &&
                  (t.cookie(e, "", t.extend({}, n, { expires: -1 })),
                  !t.cookie(e))
                );
              });
          })
            ? i.apply(e, r)
            : i) || (t.exports = o);
  },
  function (t, e) {
    var n,
      i,
      r = [
        "https:",
        "127.0.0.1",
        "function",
        "replace",
        ".luno.com",
        "protocol",
        "test",
        "indexOf",
        "https://www.luno.com/",
        "localhost",
        "hostname",
        "staging.mybitx.com",
        "length",
        "location",
        "phc",
      ];
    (n = r),
      (i = 393),
      (function (t) {
        for (; --t; ) n.push(n.shift());
      })(++i);
    var o = function (t, e) {
      return r[(t -= 0)];
    };
    typeof phc !== o("0xe") &&
      ((window[o("0xb")] = function () {
        var t = o("0x1"),
          e = location[o("0x7")],
          n = -1 !== e[o("0x4")](t, e[o("0x9")] - t[o("0x9")]);
        (location[o("0x2")] === o("0xc") && n) ||
          ([o("0xd"), o("0x6"), o("0x8")][o("0x4")](e) < 0 &&
            (/^172\.(1[6-9]|2[0-9]|3[01])\.\d+\.\d+$/[o("0x3")](e) ||
              window[o("0xa")][o("0x0")](o("0x5"))));
      }),
      phc());
  },
]);
//# sourceMappingURL=deps.js.map
