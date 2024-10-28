"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [359],
  {
    5478: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return c;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        a = {},
        i = 0,
        l = function (e) {
          return e && (e.host || l(e.parentNode));
        },
        u = function (e, t, n, u) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = l(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          a[n] || (a[n] = new WeakMap());
          var s = a[n],
            d = [],
            f = new Set(),
            p = new Set(c),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          c.forEach(m);
          var v = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) v(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      a = null !== t && "false" !== t,
                      i = (r.get(e) || 0) + 1,
                      l = (s.get(e) || 0) + 1;
                    r.set(e, i),
                      s.set(e, l),
                      d.push(e),
                      1 === i && a && o.set(e, !0),
                      1 === l && e.setAttribute(n, "true"),
                      a || e.setAttribute(u, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            v(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  a = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, a),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  a || e.removeAttribute(n);
              }),
                --i ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (a = {}));
            }
          );
        },
        c = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              u(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    27648: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(72972),
        o = n.n(r);
    },
    55449: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(33068);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    56958: function (e, t, n) {
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(33068),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    72972: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(60917),
        o = n(57437),
        a = r._(n(2265)),
        i = n(25246),
        l = n(53552),
        u = n(57497),
        c = n(3987),
        s = n(55449),
        d = n(25523),
        f = n(61956),
        p = n(16081),
        m = n(56958),
        v = n(1634),
        g = n(24673),
        h = new Set();
      function b(e, t, n, r, o, a) {
        if ("undefined" != typeof window && (a || (0, l.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (h.has(o)) return;
            h.add(o);
          }
          (async () => (a ? e.prefetch(t, o) : e.prefetch(t, n, r)))().catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let w = a.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: u,
          as: h,
          children: w,
          prefetch: E = null,
          passHref: x,
          replace: C,
          shallow: R,
          scroll: M,
          locale: _,
          onClick: T,
          onMouseEnter: P,
          onTouchStart: k,
          legacyBehavior: S = !1,
          ...O
        } = e;
        (n = w),
          S &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, o.jsx)("a", { children: n }));
        let D = a.default.useContext(d.RouterContext),
          A = a.default.useContext(f.AppRouterContext),
          I = null != D ? D : A,
          L = !D,
          N = !1 !== E,
          F = null === E ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: W, as: V } = a.default.useMemo(() => {
            if (!D) {
              let e = y(u);
              return { href: e, as: h ? y(h) : e };
            }
            let [e, t] = (0, i.resolveHref)(D, u, !0);
            return { href: e, as: h ? (0, i.resolveHref)(D, h) : t || e };
          }, [D, u, h]),
          Z = a.default.useRef(W),
          j = a.default.useRef(V);
        S && (r = a.default.Children.only(n));
        let z = S ? r && "object" == typeof r && r.ref : t,
          [K, U, $] = (0, p.useIntersection)({ rootMargin: "200px" }),
          B = a.default.useCallback(
            (e) => {
              (j.current !== V || Z.current !== W) &&
                ($(), (j.current = V), (Z.current = W)),
                K(e),
                z &&
                  ("function" == typeof z
                    ? z(e)
                    : "object" == typeof z && (z.current = e));
            },
            [V, z, W, $, K]
          );
        a.default.useEffect(() => {
          I && U && N && b(I, W, V, { locale: _ }, { kind: F }, L);
        }, [V, W, U, _, N, null == D ? void 0 : D.locale, I, L, F]);
        let H = {
          ref: B,
          onClick(e) {
            S || "function" != typeof T || T(e),
              S &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, i, u, c, s) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!s && !(0, l.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == u || u;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, r, {
                          shallow: i,
                          locale: c,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](r || n, { scroll: e });
                  };
                  s ? a.default.startTransition(f) : f();
                })(e, I, W, V, C, R, M, _, L);
          },
          onMouseEnter(e) {
            S || "function" != typeof P || P(e),
              S &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              I &&
                (N || !L) &&
                b(
                  I,
                  W,
                  V,
                  { locale: _, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
          onTouchStart: function (e) {
            S || "function" != typeof k || k(e),
              S &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              I &&
                (N || !L) &&
                b(
                  I,
                  W,
                  V,
                  { locale: _, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
        };
        if ((0, c.isAbsoluteUrl)(V)) H.href = V;
        else if (!S || x || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== _ ? _ : null == D ? void 0 : D.locale,
            t =
              (null == D ? void 0 : D.isLocaleDomain) &&
              (0, m.getDomainLocale)(
                V,
                e,
                null == D ? void 0 : D.locales,
                null == D ? void 0 : D.domainLocales
              );
          H.href =
            t ||
            (0, v.addBasePath)(
              (0, s.addLocale)(V, e, null == D ? void 0 : D.defaultLocale)
            );
        }
        return S
          ? a.default.cloneElement(r, H)
          : (0, o.jsx)("a", { ...O, ...H, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    63515: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    25246: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(48637),
        o = n(57497),
        a = n(17053),
        i = n(3987),
        l = n(33068),
        u = n(53552),
        c = n(86279),
        s = n(37205);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          m = p ? f.slice(p[0].length) : f;
        if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, i.normalizeRepeatedSlashes)(m);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, u.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: l } = (0, s.interpolateAs)(
                e.pathname,
                e.pathname,
                n
              );
            i &&
              (t = (0, o.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, a.omit)(n, l),
              }));
          }
          let i =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [i, t || i] : i;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    16081: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        o = n(63515),
        a = "function" == typeof IntersectionObserver,
        i = new Map(),
        l = [];
      function u(e) {
        let { rootRef: t, rootMargin: n, disabled: u } = e,
          c = u || !a,
          [s, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (a) {
              if (c || s) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = l.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = i.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      l.push(n),
                      i.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), i.delete(r);
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!s) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [c, n, t, s, f.current]),
          [
            p,
            s,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    90042: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    25523: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(60917)._(n(2265)).default.createContext(null);
    },
    57497: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return a;
          },
          formatWithValidation: function () {
            return l;
          },
          urlObjectKeys: function () {
            return i;
          },
        });
      let r = n(52140)._(n(48637)),
        o = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: n } = e,
          a = e.protocol || "",
          i = e.pathname || "",
          l = e.hash || "",
          u = e.query || "",
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : n &&
              ((c = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (c += ":" + e.port)),
          u &&
            "object" == typeof u &&
            (u = String(r.urlQueryToSearchParams(u)));
        let s = e.search || (u && "?" + u) || "";
        return (
          a && !a.endsWith(":") && (a += ":"),
          e.slashes || ((!a || o.test(a)) && !1 !== c)
            ? ((c = "//" + (c || "")), i && "/" !== i[0] && (i = "/" + i))
            : c || (c = ""),
          l && "#" !== l[0] && (l = "#" + l),
          s && "?" !== s[0] && (s = "?" + s),
          "" +
            a +
            c +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (s = s.replace("#", "%23")) +
            l
        );
      }
      let i = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(e) {
        return a(e);
      }
    },
    86279: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(14777),
        o = n(38104);
    },
    37205: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(4199),
        o = n(9964);
      function a(e, t, n) {
        let a = "",
          i = (0, o.getRouteRegex)(e),
          l = i.groups,
          u = (t !== e ? (0, r.getRouteMatcher)(i)(t) : "") || n;
        a = e;
        let c = Object.keys(l);
        return (
          c.every((e) => {
            let t = u[e] || "",
              { repeat: n, optional: r } = l[e],
              o = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (o = (t ? "" : "/") + "[" + o + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in u) &&
                (a =
                  a.replace(
                    o,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (a = ""),
          { params: c, result: a }
        );
      }
    },
    38104: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(91182),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function a(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    53552: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(3987),
        o = n(11283);
      function a(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, o.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    17053: function (e, t) {
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    48637: function (e, t) {
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
              ? t[n].push(e)
              : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(o));
          }),
          t
        );
      }
      function a(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return a;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    4199: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3987);
      function o(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let a = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            i = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = o[t.pos];
              void 0 !== r &&
                (i[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => a(e))
                  : t.repeat
                  ? [a(r)]
                  : a(r));
            }),
            i
          );
        };
      }
    },
    9964: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return u;
          },
          parseParameter: function () {
            return i;
          },
        });
      let r = n(91182),
        o = n(90042),
        a = n(26674);
      function i(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function l(e) {
        let t = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          l = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && a) {
                let { key: e, optional: r, repeat: u } = i(a[1]);
                return (
                  (n[e] = { pos: l++, repeat: u, optional: r }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!a) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = i(a[1]);
                return (
                  (n[e] = { pos: l++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function u(e) {
        let { parameterizedRoute: t, groups: n } = l(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function c(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: a,
            keyPrefix: l,
          } = e,
          { key: u, optional: c, repeat: s } = i(r),
          d = u.replace(/\W/g, "");
        l && (d = "" + l + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          l ? (a[d] = "" + l + u) : (a[d] = u);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return s
          ? c
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function s(e, t) {
        let n;
        let i = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          l =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          u = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && a) {
                let [n] = e.split(a[0]);
                return c({
                  getSafeRouteKey: l,
                  interceptionMarker: n,
                  segment: a[1],
                  routeKeys: u,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return a
                ? c({
                    getSafeRouteKey: l,
                    segment: a[1],
                    routeKeys: u,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function d(e, t) {
        let n = s(e, t);
        return {
          ...u(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = l(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = s(e, !1);
        return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    14777: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let n = o.slice(1, -1),
              i = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (i = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function a(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                a(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                a(this.restSlugName, n), (this.restSlugName = n), (o = "[...]");
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              a(this.slugName, n), (this.slugName = n), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    3987: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return h;
          },
          NormalizeError: function () {
            return v;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return u;
          },
          getLocationOrigin: function () {
            return i;
          },
          getURL: function () {
            return l;
          },
          isAbsoluteUrl: function () {
            return a;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return s;
          },
          stringifyError: function () {
            return y;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return n || ((n = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => o.test(e);
      function i() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function l() {
        let { href: e } = window.location,
          t = i();
        return e.substring(t.length);
      }
      function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function s(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && c(n)) return r;
        if (!r)
          throw Error(
            '"' +
              u(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class m extends Error {}
      class v extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class h extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function y(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    27891: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return x;
        },
      });
      var r = n(2265),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function a(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
      var i = function (e) {
          return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        },
        l = { k: 1e3, m: 1e6, b: 1e9 },
        u = function (e, t) {
          void 0 === t && (t = ".");
          var n = RegExp("(\\d+(".concat(i(t), "\\d*)?)([kmb])$"), "i"),
            r = e.match(n);
          if (r) {
            var o = r[1],
              a = l[r[3].toLowerCase()];
            return Number(o.replace(t, ".")) * a;
          }
        },
        c = function (e, t) {
          void 0 === t && (t = ",");
          var n = RegExp(i(t), "g");
          return e.replace(n, "");
        },
        s = function (e, t) {
          var n = i(t.join("")),
            r = RegExp("[^\\d".concat(n, "]"), "gi");
          return e.replace(r, "");
        },
        d = function (e) {
          var t = e.value,
            n = e.groupSeparator,
            r = void 0 === n ? "," : n,
            o = e.decimalSeparator,
            l = void 0 === o ? "." : o,
            d = e.allowDecimals,
            f = e.decimalsLimit,
            p = void 0 === f ? 2 : f,
            m = e.allowNegativeValue,
            v = e.disableAbbreviations,
            g = void 0 !== v && v,
            h = e.prefix,
            b = void 0 === h ? "" : h,
            y = e.transformRawValue,
            w = (
              void 0 === y
                ? function (e) {
                    return e;
                  }
                : y
            )(t);
          if ("-" === w) return w;
          var E = g ? [] : ["k", "m", "b"],
            x = new RegExp("((^|\\D)-\\d)|(-".concat(i(b), ")")).test(w),
            C = RegExp("(\\d+)-?".concat(i(b))).exec(t) || [],
            R = C[0],
            M = C[1],
            _ = s(
              c(b ? (R ? w.replace(R, "").concat(M) : w.replace(b, "")) : w, r),
              a([r, l], E, !0)
            ),
            T = _;
          if (!g) {
            if (
              E.some(function (e) {
                return e === _.toLowerCase().replace(l, "");
              })
            )
              return "";
            var P = u(_, l);
            P && (T = String(P));
          }
          var k = x && (void 0 === m || m) ? "-" : "";
          if (l && T.includes(l)) {
            var S = _.split(l),
              O = S[0],
              D = S[1],
              A = p && D ? D.slice(0, p) : D,
              I = void 0 === d || d ? "".concat(l).concat(A) : "";
            return "".concat(k).concat(O).concat(I);
          }
          return "".concat(k).concat(T);
        },
        f = function (e, t, n) {
          if (void 0 !== n && e.length > 1) {
            if (0 === n) return e.replace(t, "");
            if (e.includes(t)) {
              var r = e.split(t),
                o = r[0],
                a = r[1];
              if (a.length === n) return e;
              if (a.length > n)
                return "".concat(o).concat(t).concat(a.slice(0, n));
            }
            var i =
                e.length > n
                  ? new RegExp("(\\d+)(\\d{".concat(n, "})"))
                  : RegExp("(\\d)(\\d+)"),
              l = e.match(i);
            if (l) {
              var o = l[1],
                a = l[2];
              return "".concat(o).concat(t).concat(a);
            }
          }
          return e;
        },
        p = function (e, t) {
          var n = t.groupSeparator,
            r = t.decimalSeparator,
            o = new RegExp(
              "\\d([^"
                .concat(i(void 0 === n ? "," : n))
                .concat(i(void 0 === r ? "." : r), "0-9]+)")
            ),
            a = e.match(o);
          return a ? a[1] : void 0;
        },
        m = function (e) {
          var t = e.value,
            n = e.decimalSeparator,
            r = e.intlConfig,
            a = e.decimalScale,
            l = e.prefix,
            u = void 0 === l ? "" : l,
            c = e.suffix,
            s = void 0 === c ? "" : c;
          if ("" === t || void 0 === t) return "";
          if ("-" === t) return "-";
          var d = new RegExp(
              "^\\d?-".concat(u ? "".concat(i(u), "?") : "", "\\d")
            ).test(t),
            f = "." !== n ? v(t, n, d) : t;
          n && "-" !== n && f.startsWith(n) && (f = "0" + f);
          var m = { minimumFractionDigits: a || 0, maximumFractionDigits: 20 },
            h = g(
              (r
                ? new Intl.NumberFormat(
                    r.locale,
                    r.currency
                      ? o(o({}, m), { style: "currency", currency: r.currency })
                      : m
                  )
                : new Intl.NumberFormat(void 0, m)
              ).formatToParts(Number(f)),
              e
            ),
            b = p(h, o({}, e)),
            y = t.slice(-1) === n ? n : "",
            w = (f.match(RegExp("\\d+\\.(\\d+)")) || [])[1];
          return (void 0 === a &&
            w &&
            n &&
            (h = h.includes(n)
              ? h.replace(
                  RegExp("(\\d+)(".concat(i(n), ")(\\d+)"), "g"),
                  "$1$2".concat(w)
                )
              : b && !s
              ? h.replace(b, "".concat(n).concat(w).concat(b))
              : "".concat(h).concat(n).concat(w)),
          s && y)
            ? "".concat(h).concat(y).concat(s)
            : b && y
            ? h.replace(b, "".concat(y).concat(b))
            : b && s
            ? h.replace(b, "".concat(y).concat(s))
            : [h, y, s].join("");
        },
        v = function (e, t, n) {
          var r = e;
          return (
            t &&
              "." !== t &&
              ((r = r.replace(RegExp(i(t), "g"), ".")),
              n && "-" === t && (r = "-".concat(r.slice(1)))),
            r
          );
        },
        g = function (e, t) {
          var n = t.prefix,
            r = t.groupSeparator,
            o = t.decimalSeparator,
            i = t.decimalScale,
            l = t.disableGroupSeparators,
            u = void 0 !== l && l;
          return e
            .reduce(
              function (e, t, l) {
                var c = t.type,
                  s = t.value;
                return 0 === l && n
                  ? "minusSign" === c
                    ? [s, n]
                    : "currency" === c
                    ? a(a([], e, !0), [n], !1)
                    : [n, s]
                  : "currency" === c
                  ? n
                    ? e
                    : a(a([], e, !0), [s], !1)
                  : "group" === c
                  ? u
                    ? e
                    : a(a([], e, !0), [void 0 !== r ? r : s], !1)
                  : "decimal" === c
                  ? void 0 !== i && 0 === i
                    ? e
                    : a(a([], e, !0), [void 0 !== o ? o : s], !1)
                  : "fraction" === c
                  ? a(a([], e, !0), [void 0 !== i ? s.slice(0, i) : s], !1)
                  : a(a([], e, !0), [s], !1);
              },
              [""]
            )
            .join("");
        },
        h = {
          currencySymbol: "",
          groupSeparator: "",
          decimalSeparator: "",
          prefix: "",
          suffix: "",
        },
        b = function (e) {
          var t = e || {},
            n = t.locale,
            r = t.currency;
          return (
            n
              ? new Intl.NumberFormat(
                  n,
                  r ? { currency: r, style: "currency" } : void 0
                )
              : new Intl.NumberFormat()
          )
            .formatToParts(1000.1)
            .reduce(function (e, t, n) {
              return "currency" === t.type
                ? 0 === n
                  ? o(o({}, e), { currencySymbol: t.value, prefix: t.value })
                  : o(o({}, e), { currencySymbol: t.value, suffix: t.value })
                : "group" === t.type
                ? o(o({}, e), { groupSeparator: t.value })
                : "decimal" === t.type
                ? o(o({}, e), { decimalSeparator: t.value })
                : e;
            }, h);
        },
        y = function (e) {
          return RegExp(/\d/, "gi").test(e);
        },
        w = function (e, t, n) {
          if (
            (void 0 === t && (t = "."),
            void 0 === n || "" === e || void 0 === e)
          )
            return e;
          if (!e.match(/\d/g)) return "";
          var r = e.split(t),
            o = r[0],
            a = r[1];
          if (0 === n) return o;
          var i = a || "";
          if (i.length < n) for (; i.length < n; ) i += "0";
          else i = i.slice(0, n);
          return "".concat(o).concat(t).concat(i);
        },
        E = function (e) {
          var t = e.selectionStart,
            n = e.value,
            r = e.lastKeyStroke,
            o = e.stateValue,
            a = e.groupSeparator,
            i = t,
            l = n;
          if (o && i) {
            var u = n.split("");
            return (
              "Backspace" === r && o[i] === a && (u.splice(i - 1, 1), (i -= 1)),
              "Delete" === r && o[i] === a && (u.splice(i, 1), (i += 1)),
              { modifiedValue: (l = u.join("")), cursorPosition: i }
            );
          }
          return { modifiedValue: l, cursorPosition: t };
        },
        x = (0, r.forwardRef)(function (e, t) {
          var n = e.allowDecimals,
            a = e.allowNegativeValue,
            i = e.id,
            l = e.name,
            u = e.className,
            c = e.customInput,
            s = e.decimalsLimit,
            v = e.defaultValue,
            g = e.disabled,
            h = e.maxLength,
            x = e.value,
            C = e.onValueChange,
            R = e.fixedDecimalLength,
            M = e.placeholder,
            _ = e.decimalScale,
            T = e.prefix,
            P = e.suffix,
            k = e.intlConfig,
            S = e.step,
            O = e.min,
            D = e.max,
            A = e.disableGroupSeparators,
            I = void 0 !== A && A,
            L = e.disableAbbreviations,
            N = e.decimalSeparator,
            F = e.groupSeparator,
            W = e.onChange,
            V = e.onFocus,
            Z = e.onBlur,
            j = e.onKeyDown,
            z = e.onKeyUp,
            K = e.transformRawValue,
            U = e.formatValueOnBlur,
            $ = void 0 === U || U,
            B = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var o = 0, r = Object.getOwnPropertySymbols(e);
                  o < r.length;
                  o++
                )
                  0 > t.indexOf(r[o]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              return n;
            })(e, [
              "allowDecimals",
              "allowNegativeValue",
              "id",
              "name",
              "className",
              "customInput",
              "decimalsLimit",
              "defaultValue",
              "disabled",
              "maxLength",
              "value",
              "onValueChange",
              "fixedDecimalLength",
              "placeholder",
              "decimalScale",
              "prefix",
              "suffix",
              "intlConfig",
              "step",
              "min",
              "max",
              "disableGroupSeparators",
              "disableAbbreviations",
              "decimalSeparator",
              "groupSeparator",
              "onChange",
              "onFocus",
              "onBlur",
              "onKeyDown",
              "onKeyUp",
              "transformRawValue",
              "formatValueOnBlur",
            ]);
          if (N && y(N)) throw Error("decimalSeparator cannot be a number");
          if (F && y(F)) throw Error("groupSeparator cannot be a number");
          var H = (0, r.useMemo)(
              function () {
                return b(k);
              },
              [k]
            ),
            G = N || H.decimalSeparator || "",
            Y = F || H.groupSeparator || "";
          if (G && Y && G === Y && !1 === I)
            throw Error(
              "decimalSeparator cannot be the same as groupSeparator"
            );
          var q = {
              decimalSeparator: G,
              groupSeparator: Y,
              disableGroupSeparators: I,
              intlConfig: k,
              prefix: T || H.prefix,
              suffix: P,
            },
            X = {
              decimalSeparator: G,
              groupSeparator: Y,
              allowDecimals: void 0 === n || n,
              decimalsLimit: s || R || 2,
              allowNegativeValue: void 0 === a || a,
              disableAbbreviations: void 0 !== L && L,
              prefix: T || H.prefix,
              transformRawValue: K,
            },
            Q = (0, r.useState)(function () {
              return null != v
                ? m(o(o({}, q), { decimalScale: _, value: String(v) }))
                : null != x
                ? m(o(o({}, q), { decimalScale: _, value: String(x) }))
                : "";
            }),
            J = Q[0],
            ee = Q[1],
            et = (0, r.useState)(!1),
            en = et[0],
            er = et[1],
            eo = (0, r.useState)(0),
            ea = eo[0],
            ei = eo[1],
            el = (0, r.useState)(0),
            eu = el[0],
            ec = el[1],
            es = (0, r.useState)(null),
            ed = es[0],
            ef = es[1],
            ep = (0, r.useRef)(null);
          (0, r.useImperativeHandle)(t, function () {
            return ep.current;
          });
          var em = function (e, t) {
            er(!0);
            var n = E({
                selectionStart: t,
                value: e,
                lastKeyStroke: ed,
                stateValue: J,
                groupSeparator: Y,
              }),
              r = n.modifiedValue,
              a = n.cursorPosition,
              i = d(o({ value: r }, X));
            if (!h || !(i.replace(/-/g, "").length > h)) {
              if ("" === i || "-" === i || i === G) {
                C && C(void 0, l, { float: null, formatted: "", value: "" }),
                  ee(i),
                  ei(1);
                return;
              }
              var u = parseFloat(G ? i.replace(G, ".") : i),
                c = m(o({ value: i }, q));
              if (null != a) {
                var s = a + (c.length - e.length);
                ei((s = s <= 0 ? (T ? T.length : 0) : s)), ec(eu + 1);
              }
              ee(c), C && C(i, l, { float: u, formatted: c, value: i });
            }
          };
          (0, r.useEffect)(
            function () {
              null == x && null == v && ee("");
            },
            [v, x]
          ),
            (0, r.useEffect)(
              function () {
                en &&
                  "-" !== J &&
                  ep.current &&
                  document.activeElement === ep.current &&
                  ep.current.setSelectionRange(ea, ea);
              },
              [J, ea, ep, en, eu]
            );
          var ev = o(
            {
              type: "text",
              inputMode: "decimal",
              id: i,
              name: l,
              className: u,
              onChange: function (e) {
                var t = e.target;
                em(t.value, t.selectionStart), W && W(e);
              },
              onBlur: function (e) {
                var t = e.target.value,
                  n = d(o({ value: t }, X));
                if ("-" === n || n === G || !n) {
                  ee(""), Z && Z(e);
                  return;
                }
                var r = w(f(n, G, R), G, void 0 !== _ ? _ : R),
                  a = parseFloat(r.replace(G, ".")),
                  i = m(o(o({}, q), { value: r }));
                C && $ && C(r, l, { float: a, formatted: i, value: r }),
                  ee(i),
                  Z && Z(e);
              },
              onFocus: function (e) {
                return V && V(e), J ? J.length : 0;
              },
              onKeyDown: function (e) {
                var t = e.key;
                if ((ef(t), S && ("ArrowUp" === t || "ArrowDown" === t))) {
                  e.preventDefault(), ei(J.length);
                  var n =
                      parseFloat(
                        null != x
                          ? String(x).replace(G, ".")
                          : d(o({ value: J }, X))
                      ) || 0,
                    r = "ArrowUp" === t ? n + S : n - S;
                  if (
                    (void 0 !== O && r < Number(O)) ||
                    (void 0 !== D && r > Number(D))
                  )
                    return;
                  var a = String(S).includes(".")
                    ? Number(String(S).split(".")[1].length)
                    : void 0;
                  em(String(a ? r.toFixed(a) : r).replace(".", G));
                }
                j && j(e);
              },
              onKeyUp: function (e) {
                var t = e.key,
                  n = e.currentTarget.selectionStart;
                if ("ArrowUp" !== t && "ArrowDown" !== t && "-" !== J) {
                  var r = p(J, { groupSeparator: Y, decimalSeparator: G });
                  if (r && n && n > J.length - r.length && ep.current) {
                    var o = J.length - r.length;
                    ep.current.setSelectionRange(o, o);
                  }
                }
                z && z(e);
              },
              placeholder: M,
              disabled: void 0 !== g && g,
              value:
                null == x || "-" === J || (G && J === G)
                  ? J
                  : m(
                      o(o({}, q), {
                        decimalScale: en ? void 0 : _,
                        value: String(x),
                      })
                    ),
              ref: ep,
            },
            B
          );
          return c
            ? r.createElement(c, o({}, ev))
            : r.createElement("input", o({}, ev));
        });
      x.displayName = "CurrencyInput";
    },
    11816: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return q;
        },
      });
      var r,
        o,
        a,
        i,
        l,
        u,
        c,
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      "function" == typeof SuppressedError && SuppressedError;
      var d = n(2265),
        f = "right-scroll-bar-position",
        p = "width-before-scroll-bar";
      function m(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var v = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
        g = new WeakMap(),
        h = function () {
          return (h =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      "function" == typeof SuppressedError && SuppressedError;
      var b =
          (void 0 === o && (o = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (i = []),
          (l = !1),
          (u = {
            read: function () {
              if (l)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return i.length ? i[i.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, l);
              return (
                i.push(t),
                function () {
                  i = i.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (l = !0; i.length; ) {
                var t = i;
                (i = []), t.forEach(e);
              }
              i = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return i;
                },
              };
            },
            assignMedium: function (e) {
              l = !0;
              var t = [];
              if (i.length) {
                var n = i;
                (i = []), n.forEach(e), (t = i);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (i = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), i;
                  },
                });
            },
          })).options = h({ async: !0, ssr: !1 }, o)),
          u),
        y = function () {},
        w = d.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a,
            i = d.useRef(null),
            l = d.useState({
              onScrollCapture: y,
              onWheelCapture: y,
              onTouchMoveCapture: y,
            }),
            u = l[0],
            c = l[1],
            f = e.forwardProps,
            p = e.children,
            h = e.className,
            w = e.removeScrollBar,
            E = e.enabled,
            x = e.shards,
            C = e.sideCar,
            R = e.noIsolation,
            M = e.inert,
            _ = e.allowPinchZoom,
            T = e.as,
            P = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var o = 0, r = Object.getOwnPropertySymbols(e);
                  o < r.length;
                  o++
                )
                  0 > t.indexOf(r[o]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              return n;
            })(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            k =
              ((n = [i, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return m(t, e);
                });
              }),
              ((o = (0, d.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = o.facade),
              v(
                function () {
                  var e = g.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = a.current;
                    t.forEach(function (e) {
                      r.has(e) || m(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || m(e, o);
                      });
                  }
                  g.set(a, n);
                },
                [n]
              ),
              a),
            S = s(s({}, P), u);
          return d.createElement(
            d.Fragment,
            null,
            E &&
              d.createElement(C, {
                sideCar: b,
                removeScrollBar: w,
                shards: x,
                noIsolation: R,
                inert: M,
                setCallbacks: c,
                allowPinchZoom: !!_,
                lockRef: i,
              }),
            f
              ? d.cloneElement(d.Children.only(p), s(s({}, S), { ref: k }))
              : d.createElement(
                  void 0 === T ? "div" : T,
                  s({}, S, { className: h, ref: k }),
                  p
                )
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: p, zeroRight: f });
      var E = function (e) {
        var t = e.sideCar,
          n = (function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                0 > t.indexOf(r[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          })(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return d.createElement(r, h({}, n));
      };
      E.isSideCarExport = !0;
      var x = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = o)
                  : a.appendChild(document.createTextNode(o)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        C = function () {
          var e = x();
          return function (t, n) {
            d.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        R = function () {
          var e = C();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        M = { left: 0, top: 0, right: 0, gap: 0 },
        _ = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        T = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [_(n), _(r), _(o)];
        },
        P = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return M;
          var t = T(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        k = R(),
        S = "data-scroll-locked",
        O = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(S, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(f, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(p, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(f, " .")
              .concat(f, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(p, " .")
              .concat(p, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(S, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        D = function () {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        A = function () {
          d.useEffect(function () {
            return (
              document.body.setAttribute(S, (D() + 1).toString()),
              function () {
                var e = D() - 1;
                e <= 0
                  ? document.body.removeAttribute(S)
                  : document.body.setAttribute(S, e.toString());
              }
            );
          }, []);
        },
        I = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          A();
          var a = d.useMemo(
            function () {
              return P(o);
            },
            [o]
          );
          return d.createElement(k, {
            styles: O(a, !t, o, n ? "" : "!important"),
          });
        },
        L = !1;
      if ("undefined" != typeof window)
        try {
          var N = Object.defineProperty({}, "passive", {
            get: function () {
              return (L = !0), !0;
            },
          });
          window.addEventListener("test", N, N),
            window.removeEventListener("test", N, N);
        } catch (e) {
          L = !1;
        }
      var F = !!L && { passive: !1 },
        W = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        V = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              Z(e, n))
            ) {
              var r = j(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        Z = function (e, t) {
          return "v" === e ? W(t, "overflowY") : W(t, "overflowX");
        },
        j = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        z = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = i * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var m = j(e, u),
              v = m[0],
              g = m[1] - m[2] - i * v;
            (v || g) && Z(e, u) && ((f += g), (p += v)), (u = u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 0 === f) || (!o && l > f))
              ? (s = !0)
              : !d && ((o && 0 === p) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        K = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        U = function (e) {
          return [e.deltaX, e.deltaY];
        },
        $ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        B = 0,
        H = [],
        G =
          ((c = function (e) {
            var t = d.useRef([]),
              n = d.useRef([0, 0]),
              r = d.useRef(),
              o = d.useState(B++)[0],
              a = d.useState(function () {
                return R();
              })[0],
              i = d.useRef(e);
            d.useEffect(
              function () {
                i.current = e;
              },
              [e]
            ),
              d.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, a = t.length; o < a; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map($), !0).filter(
                      Boolean
                    );
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var l = d.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !i.current.allowPinchZoom;
                var o,
                  a = K(e),
                  l = n.current,
                  u = "deltaX" in e ? e.deltaX : l[0] - a[0],
                  c = "deltaY" in e ? e.deltaY : l[1] - a[1],
                  s = e.target,
                  d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type)
                  return !1;
                var f = V(d, s);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = V(d, s))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (u || c) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return z(p, t, e, "h" === p ? u : c, !0);
              }, []),
              u = d.useCallback(function (e) {
                if (H.length && H[H.length - 1] === a) {
                  var n = "deltaY" in e ? U(e) : K(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (i.current.shards || [])
                      .map($)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? l(e, o[0]) : !i.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              c = d.useCallback(function (e, n, r, o) {
                var a = { name: e, delta: n, target: r, should: o };
                t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1);
              }, []),
              s = d.useCallback(function (e) {
                (n.current = K(e)), (r.current = void 0);
              }, []),
              f = d.useCallback(function (t) {
                c(t.type, U(t), t.target, l(t, e.lockRef.current));
              }, []),
              p = d.useCallback(function (t) {
                c(t.type, K(t), t.target, l(t, e.lockRef.current));
              }, []);
            d.useEffect(function () {
              return (
                H.push(a),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", u, F),
                document.addEventListener("touchmove", u, F),
                document.addEventListener("touchstart", s, F),
                function () {
                  (H = H.filter(function (e) {
                    return e !== a;
                  })),
                    document.removeEventListener("wheel", u, F),
                    document.removeEventListener("touchmove", u, F),
                    document.removeEventListener("touchstart", s, F);
                }
              );
            }, []);
            var m = e.removeScrollBar,
              v = e.inert;
            return d.createElement(
              d.Fragment,
              null,
              v
                ? d.createElement(a, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              m ? d.createElement(I, { gapMode: "margin" }) : null
            );
          }),
          b.useMedium(c),
          E),
        Y = d.forwardRef(function (e, t) {
          return d.createElement(w, s({}, e, { ref: t, sideCar: G }));
        });
      Y.classNames = w.classNames;
      var q = Y;
    },
    1119: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
    },
    6741: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
    },
    13134: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return er;
        },
        h4: function () {
          return et;
        },
        ck: function () {
          return ee;
        },
        fC: function () {
          return J;
        },
        xz: function () {
          return en;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(73966),
        i = n(67822),
        l = n(98575),
        u = n(6741),
        c = n(80886),
        s = n(66840),
        d = n(61188),
        f = n(71599),
        p = n(99255);
      let m = "Collapsible",
        [v, g] = (0, a.b)(m),
        [h, b] = v(m),
        y = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: n,
              open: a,
              defaultOpen: i,
              disabled: l,
              onOpenChange: u,
              ...d
            } = e,
            [f = !1, m] = (0, c.T)({ prop: a, defaultProp: i, onChange: u });
          return (0, o.createElement)(
            h,
            {
              scope: n,
              disabled: l,
              contentId: (0, p.M)(),
              open: f,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
            },
            (0, o.createElement)(
              s.WV.div,
              (0, r.Z)(
                { "data-state": R(f), "data-disabled": l ? "" : void 0 },
                d,
                { ref: t }
              )
            )
          );
        }),
        w = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, ...a } = e,
            i = b("CollapsibleTrigger", n);
          return (0, o.createElement)(
            s.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-controls": i.contentId,
                "aria-expanded": i.open || !1,
                "data-state": R(i.open),
                "data-disabled": i.disabled ? "" : void 0,
                disabled: i.disabled,
              },
              a,
              { ref: t, onClick: (0, u.M)(e.onClick, i.onOpenToggle) }
            )
          );
        }),
        E = "CollapsibleContent",
        x = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            i = b(E, e.__scopeCollapsible);
          return (0, o.createElement)(
            f.z,
            { present: n || i.open },
            ({ present: e }) =>
              (0, o.createElement)(C, (0, r.Z)({}, a, { ref: t, present: e }))
          );
        }),
        C = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, present: a, children: i, ...u } = e,
            c = b(E, n),
            [f, p] = (0, o.useState)(a),
            m = (0, o.useRef)(null),
            v = (0, l.e)(t, m),
            g = (0, o.useRef)(0),
            h = g.current,
            y = (0, o.useRef)(0),
            w = y.current,
            x = c.open || f,
            C = (0, o.useRef)(x),
            M = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (C.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, d.b)(() => {
              let e = m.current;
              if (e) {
                (M.current = M.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (g.current = t.height),
                  (y.current = t.width),
                  C.current ||
                    ((e.style.transitionDuration =
                      M.current.transitionDuration),
                    (e.style.animationName = M.current.animationName)),
                  p(a);
              }
            }, [c.open, a]),
            (0, o.createElement)(
              s.WV.div,
              (0, r.Z)(
                {
                  "data-state": R(c.open),
                  "data-disabled": c.disabled ? "" : void 0,
                  id: c.contentId,
                  hidden: !x,
                },
                u,
                {
                  ref: v,
                  style: {
                    "--radix-collapsible-content-height": h ? `${h}px` : void 0,
                    "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              x && i
            )
          );
        });
      function R(e) {
        return e ? "open" : "closed";
      }
      var M = n(29114);
      let _ = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [P, k, S] = (0, i.B)(_),
        [O, D] = (0, a.b)(_, [S, g]),
        A = g(),
        I = o.forwardRef((e, t) => {
          let { type: n, ...a } = e;
          return o.createElement(
            P.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === n
              ? o.createElement(Z, (0, r.Z)({}, a, { ref: t }))
              : o.createElement(V, (0, r.Z)({}, a, { ref: t }))
          );
        });
      I.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
              )
            : "single" === e.type && Array.isArray(t)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
              )
            : null;
        },
      };
      let [L, N] = O(_),
        [F, W] = O(_, { collapsible: !1 }),
        V = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: a,
              onValueChange: i = () => {},
              collapsible: l = !1,
              ...u
            } = e,
            [s, d] = (0, c.T)({ prop: n, defaultProp: a, onChange: i });
          return o.createElement(
            L,
            {
              scope: e.__scopeAccordion,
              value: s ? [s] : [],
              onItemOpen: d,
              onItemClose: o.useCallback(() => l && d(""), [l, d]),
            },
            o.createElement(
              F,
              { scope: e.__scopeAccordion, collapsible: l },
              o.createElement(K, (0, r.Z)({}, u, { ref: t }))
            )
          );
        }),
        Z = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: a,
              onValueChange: i = () => {},
              ...l
            } = e,
            [u = [], s] = (0, c.T)({ prop: n, defaultProp: a, onChange: i }),
            d = o.useCallback((e) => s((t = []) => [...t, e]), [s]),
            f = o.useCallback(
              (e) => s((t = []) => t.filter((t) => t !== e)),
              [s]
            );
          return o.createElement(
            L,
            {
              scope: e.__scopeAccordion,
              value: u,
              onItemOpen: d,
              onItemClose: f,
            },
            o.createElement(
              F,
              { scope: e.__scopeAccordion, collapsible: !0 },
              o.createElement(K, (0, r.Z)({}, l, { ref: t }))
            )
          );
        }),
        [j, z] = O(_),
        K = o.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: a,
              dir: i,
              orientation: c = "vertical",
              ...d
            } = e,
            f = o.useRef(null),
            p = (0, l.e)(f, t),
            m = k(n),
            v = "ltr" === (0, M.gm)(i),
            g = (0, u.M)(e.onKeyDown, (e) => {
              var t;
              if (!T.includes(e.key)) return;
              let n = e.target,
                r = m().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                o = r.findIndex((e) => e.ref.current === n),
                a = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let i = o,
                l = a - 1,
                u = () => {
                  (i = o + 1) > l && (i = 0);
                },
                s = () => {
                  (i = o - 1) < 0 && (i = l);
                };
              switch (e.key) {
                case "Home":
                  i = 0;
                  break;
                case "End":
                  i = l;
                  break;
                case "ArrowRight":
                  "horizontal" === c && (v ? u() : s());
                  break;
                case "ArrowDown":
                  "vertical" === c && u();
                  break;
                case "ArrowLeft":
                  "horizontal" === c && (v ? s() : u());
                  break;
                case "ArrowUp":
                  "vertical" === c && s();
              }
              null === (t = r[i % a].ref.current) || void 0 === t || t.focus();
            });
          return o.createElement(
            j,
            { scope: n, disabled: a, direction: i, orientation: c },
            o.createElement(
              P.Slot,
              { scope: n },
              o.createElement(
                s.WV.div,
                (0, r.Z)({}, d, {
                  "data-orientation": c,
                  ref: p,
                  onKeyDown: a ? void 0 : g,
                })
              )
            )
          );
        }),
        U = "AccordionItem",
        [$, B] = O(U),
        H = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: a, ...i } = e,
            l = z(U, n),
            u = N(U, n),
            c = A(n),
            s = (0, p.M)(),
            d = (a && u.value.includes(a)) || !1,
            f = l.disabled || e.disabled;
          return o.createElement(
            $,
            { scope: n, open: d, disabled: f, triggerId: s },
            o.createElement(
              y,
              (0, r.Z)(
                { "data-orientation": l.orientation, "data-state": Q(d) },
                c,
                i,
                {
                  ref: t,
                  disabled: f,
                  open: d,
                  onOpenChange: (e) => {
                    e ? u.onItemOpen(a) : u.onItemClose(a);
                  },
                }
              )
            )
          );
        }),
        G = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...a } = e,
            i = z(_, n),
            l = B("AccordionHeader", n);
          return o.createElement(
            s.WV.h3,
            (0, r.Z)(
              {
                "data-orientation": i.orientation,
                "data-state": Q(l.open),
                "data-disabled": l.disabled ? "" : void 0,
              },
              a,
              { ref: t }
            )
          );
        }),
        Y = "AccordionTrigger",
        q = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...a } = e,
            i = z(_, n),
            l = B(Y, n),
            u = W(Y, n),
            c = A(n);
          return o.createElement(
            P.ItemSlot,
            { scope: n },
            o.createElement(
              w,
              (0, r.Z)(
                {
                  "aria-disabled": (l.open && !u.collapsible) || void 0,
                  "data-orientation": i.orientation,
                  id: l.triggerId,
                },
                c,
                a,
                { ref: t }
              )
            )
          );
        }),
        X = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...a } = e,
            i = z(_, n),
            l = B("AccordionContent", n),
            u = A(n);
          return o.createElement(
            x,
            (0, r.Z)(
              {
                role: "region",
                "aria-labelledby": l.triggerId,
                "data-orientation": i.orientation,
              },
              u,
              a,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        });
      function Q(e) {
        return e ? "open" : "closed";
      }
      let J = I,
        ee = H,
        et = G,
        en = q,
        er = X;
    },
    9270: function (e, t, n) {
      n.d(t, {
        fC: function () {
          return C;
        },
        z$: function () {
          return R;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(98575),
        i = n(73966),
        l = n(6741),
        u = n(80886),
        c = n(6718),
        s = n(90420),
        d = n(71599),
        f = n(66840);
      let p = "Checkbox",
        [m, v] = (0, i.b)(p),
        [g, h] = m(p),
        b = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCheckbox: n,
              name: i,
              checked: c,
              defaultChecked: s,
              required: d,
              disabled: p,
              value: m = "on",
              onCheckedChange: v,
              ...h
            } = e,
            [b, y] = (0, o.useState)(null),
            C = (0, a.e)(t, (e) => y(e)),
            R = (0, o.useRef)(!1),
            M = !b || !!b.closest("form"),
            [_ = !1, T] = (0, u.T)({ prop: c, defaultProp: s, onChange: v }),
            P = (0, o.useRef)(_);
          return (
            (0, o.useEffect)(() => {
              let e = null == b ? void 0 : b.form;
              if (e) {
                let t = () => T(P.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [b, T]),
            (0, o.createElement)(
              g,
              { scope: n, state: _, disabled: p },
              (0, o.createElement)(
                f.WV.button,
                (0, r.Z)(
                  {
                    type: "button",
                    role: "checkbox",
                    "aria-checked": E(_) ? "mixed" : _,
                    "aria-required": d,
                    "data-state": x(_),
                    "data-disabled": p ? "" : void 0,
                    disabled: p,
                    value: m,
                  },
                  h,
                  {
                    ref: C,
                    onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                      "Enter" === e.key && e.preventDefault();
                    }),
                    onClick: (0, l.M)(e.onClick, (e) => {
                      T((e) => !!E(e) || !e),
                        M &&
                          ((R.current = e.isPropagationStopped()),
                          R.current || e.stopPropagation());
                    }),
                  }
                )
              ),
              M &&
                (0, o.createElement)(w, {
                  control: b,
                  bubbles: !R.current,
                  name: i,
                  value: m,
                  checked: _,
                  required: d,
                  disabled: p,
                  style: { transform: "translateX(-100%)" },
                })
            )
          );
        }),
        y = (0, o.forwardRef)((e, t) => {
          let { __scopeCheckbox: n, forceMount: a, ...i } = e,
            l = h("CheckboxIndicator", n);
          return (0, o.createElement)(
            d.z,
            { present: a || E(l.state) || !0 === l.state },
            (0, o.createElement)(
              f.WV.span,
              (0, r.Z)(
                {
                  "data-state": x(l.state),
                  "data-disabled": l.disabled ? "" : void 0,
                },
                i,
                { ref: t, style: { pointerEvents: "none", ...e.style } }
              )
            )
          );
        }),
        w = (e) => {
          let { control: t, checked: n, bubbles: a = !0, ...i } = e,
            l = (0, o.useRef)(null),
            u = (0, c.D)(n),
            d = (0, s.t)(t);
          return (
            (0, o.useEffect)(() => {
              let e = l.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "checked"
                ).set;
              if (u !== n && t) {
                let r = new Event("click", { bubbles: a });
                (e.indeterminate = E(n)),
                  t.call(e, !E(n) && n),
                  e.dispatchEvent(r);
              }
            }, [u, n, a]),
            (0, o.createElement)(
              "input",
              (0, r.Z)(
                {
                  type: "checkbox",
                  "aria-hidden": !0,
                  defaultChecked: !E(n) && n,
                },
                i,
                {
                  tabIndex: -1,
                  ref: l,
                  style: {
                    ...e.style,
                    ...d,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0,
                  },
                }
              )
            )
          );
        };
      function E(e) {
        return "indeterminate" === e;
      }
      function x(e) {
        return E(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      let C = b,
        R = y;
    },
    67822: function (e, t, n) {
      n.d(t, {
        B: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(73966),
        a = n(98575),
        i = n(37053);
      function l(e) {
        let t = e + "CollectionProvider",
          [n, l] = (0, o.b)(t),
          [u, c] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          s = e + "CollectionSlot",
          d = r.forwardRef((e, t) => {
            let { scope: n, children: o } = e,
              l = c(s, n),
              u = (0, a.e)(t, l.collectionRef);
            return r.createElement(i.g7, { ref: u }, o);
          }),
          f = e + "CollectionItemSlot",
          p = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                a = r.useRef(new Map()).current;
              return r.createElement(
                u,
                { scope: t, itemMap: a, collectionRef: o },
                n
              );
            },
            Slot: d,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: o, ...l } = e,
                u = r.useRef(null),
                s = (0, a.e)(t, u),
                d = c(f, n);
              return (
                r.useEffect(
                  () => (
                    d.itemMap.set(u, { ref: u, ...l }),
                    () => void d.itemMap.delete(u)
                  )
                ),
                r.createElement(i.g7, { [p]: "", ref: s }, o)
              );
            }),
          },
          function (t) {
            let n = c(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          l,
        ];
      }
    },
    98575: function (e, t, n) {
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return a;
        },
      });
      var r = n(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function a(...e) {
        return (0, r.useCallback)(o(...e), e);
      }
    },
    73966: function (e, t, n) {
      n.d(t, {
        b: function () {
          return a;
        },
        k: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e, t) {
        let n = (0, r.createContext)(t);
        function o(e) {
          let { children: t, ...o } = e,
            a = (0, r.useMemo)(() => o, Object.values(o));
          return (0, r.createElement)(n.Provider, { value: a }, t);
        }
        return (
          (o.displayName = e + "Provider"),
          [
            o,
            function (o) {
              let a = (0, r.useContext)(n);
              if (a) return a;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function a(e, t = []) {
        let n = [],
          o = () => {
            let t = n.map((e) => (0, r.createContext)(e));
            return function (n) {
              let o = (null == n ? void 0 : n[e]) || t;
              return (0, r.useMemo)(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let a = (0, r.createContext)(o),
                i = n.length;
              function l(t) {
                let { scope: n, children: o, ...l } = t,
                  u = (null == n ? void 0 : n[e][i]) || a,
                  c = (0, r.useMemo)(() => l, Object.values(l));
                return (0, r.createElement)(u.Provider, { value: c }, o);
              }
              return (
                (n = [...n, o]),
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (n, l) {
                    let u = (null == l ? void 0 : l[e][i]) || a,
                      c = (0, r.useContext)(u);
                    if (c) return c;
                    if (void 0 !== o) return o;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, r.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(o, ...t),
          ]
        );
      }
    },
    49027: function (e, t, n) {
      n.d(t, {
        Dx: function () {
          return G;
        },
        VY: function () {
          return H;
        },
        aV: function () {
          return B;
        },
        dk: function () {
          return Y;
        },
        fC: function () {
          return K;
        },
        h_: function () {
          return $;
        },
        x8: function () {
          return q;
        },
        xz: function () {
          return U;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(98575),
        l = n(73966),
        u = n(99255),
        c = n(80886),
        s = n(15278),
        d = n(99103),
        f = n(83832),
        p = n(71599),
        m = n(66840),
        v = n(86097),
        g = n(11816),
        h = n(5478),
        b = n(37053);
      let y = "Dialog",
        [w, E] = (0, l.b)(y),
        [x, C] = w(y),
        R = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...l } = e,
            u = C("DialogTrigger", n),
            c = (0, i.e)(t, u.triggerRef);
          return (0, o.createElement)(
            m.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": u.open,
                "aria-controls": u.contentId,
                "data-state": Z(u.open),
              },
              l,
              { ref: c, onClick: (0, a.M)(e.onClick, u.onOpenToggle) }
            )
          );
        }),
        M = "DialogPortal",
        [_, T] = w(M, { forceMount: void 0 }),
        P = "DialogOverlay",
        k = (0, o.forwardRef)((e, t) => {
          let n = T(P, e.__scopeDialog),
            { forceMount: a = n.forceMount, ...i } = e,
            l = C(P, e.__scopeDialog);
          return l.modal
            ? (0, o.createElement)(
                p.z,
                { present: a || l.open },
                (0, o.createElement)(S, (0, r.Z)({}, i, { ref: t }))
              )
            : null;
        }),
        S = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = C(P, n);
          return (0, o.createElement)(
            g.Z,
            { as: b.g7, allowPinchZoom: !0, shards: [i.contentRef] },
            (0, o.createElement)(
              m.WV.div,
              (0, r.Z)({ "data-state": Z(i.open) }, a, {
                ref: t,
                style: { pointerEvents: "auto", ...a.style },
              })
            )
          );
        }),
        O = "DialogContent",
        D = (0, o.forwardRef)((e, t) => {
          let n = T(O, e.__scopeDialog),
            { forceMount: a = n.forceMount, ...i } = e,
            l = C(O, e.__scopeDialog);
          return (0, o.createElement)(
            p.z,
            { present: a || l.open },
            l.modal
              ? (0, o.createElement)(A, (0, r.Z)({}, i, { ref: t }))
              : (0, o.createElement)(I, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let n = C(O, e.__scopeDialog),
            l = (0, o.useRef)(null),
            u = (0, i.e)(t, n.contentRef, l);
          return (
            (0, o.useEffect)(() => {
              let e = l.current;
              if (e) return (0, h.Ry)(e);
            }, []),
            (0, o.createElement)(
              L,
              (0, r.Z)({}, e, {
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: (0, a.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        I = (0, o.forwardRef)((e, t) => {
          let n = C(O, e.__scopeDialog),
            a = (0, o.useRef)(!1),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            L,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var r, o;
                null === (r = e.onCloseAutoFocus) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    (a.current ||
                      null === (o = n.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (a.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var r, o;
                null === (r = e.onInteractOutside) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    ((a.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let l = t.target;
                (null === (o = n.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(l)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        L = (0, o.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: a,
              onOpenAutoFocus: l,
              onCloseAutoFocus: u,
              ...c
            } = e,
            f = C(O, n),
            p = (0, o.useRef)(null),
            m = (0, i.e)(t, p);
          return (
            (0, v.EW)(),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                d.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: a,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: u,
                },
                (0, o.createElement)(
                  s.XB,
                  (0, r.Z)(
                    {
                      role: "dialog",
                      id: f.contentId,
                      "aria-describedby": f.descriptionId,
                      "aria-labelledby": f.titleId,
                      "data-state": Z(f.open),
                    },
                    c,
                    { ref: m, onDismiss: () => f.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        N = "DialogTitle",
        F = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = C(N, n);
          return (0, o.createElement)(
            m.WV.h2,
            (0, r.Z)({ id: i.titleId }, a, { ref: t })
          );
        }),
        W = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = C("DialogDescription", n);
          return (0, o.createElement)(
            m.WV.p,
            (0, r.Z)({ id: i.descriptionId }, a, { ref: t })
          );
        }),
        V = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...i } = e,
            l = C("DialogClose", n);
          return (0, o.createElement)(
            m.WV.button,
            (0, r.Z)({ type: "button" }, i, {
              ref: t,
              onClick: (0, a.M)(e.onClick, () => l.onOpenChange(!1)),
            })
          );
        });
      function Z(e) {
        return e ? "open" : "closed";
      }
      let [j, z] = (0, l.k)("DialogTitleWarning", {
          contentName: O,
          titleName: N,
          docsSlug: "dialog",
        }),
        K = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            s = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [f = !1, p] = (0, c.T)({ prop: r, defaultProp: a, onChange: i });
          return (0, o.createElement)(
            x,
            {
              scope: t,
              triggerRef: s,
              contentRef: d,
              contentId: (0, u.M)(),
              titleId: (0, u.M)(),
              descriptionId: (0, u.M)(),
              open: f,
              onOpenChange: p,
              onOpenToggle: (0, o.useCallback)(() => p((e) => !e), [p]),
              modal: l,
            },
            n
          );
        },
        U = R,
        $ = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = C(M, t);
          return (0, o.createElement)(
            _,
            { scope: t, forceMount: n },
            o.Children.map(r, (e) =>
              (0, o.createElement)(
                p.z,
                { present: n || i.open },
                (0, o.createElement)(f.h, { asChild: !0, container: a }, e)
              )
            )
          );
        },
        B = k,
        H = D,
        G = F,
        Y = W,
        q = V;
    },
    29114: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return a;
        },
      });
      var r = n(2265);
      let o = (0, r.createContext)(void 0);
      function a(e) {
        let t = (0, r.useContext)(o);
        return e || t || "ltr";
      }
    },
    15278: function (e, t, n) {
      let r;
      n.d(t, {
        I0: function () {
          return h;
        },
        XB: function () {
          return f;
        },
        fC: function () {
          return g;
        },
      });
      var o = n(1119),
        a = n(2265),
        i = n(6741),
        l = n(66840),
        u = n(98575),
        c = n(26606);
      let s = "dismissableLayer.update",
        d = (0, a.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = (0, a.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: p,
              onPointerDownOutside: g,
              onFocusOutside: h,
              onInteractOutside: b,
              onDismiss: y,
              ...w
            } = e,
            E = (0, a.useContext)(d),
            [x, C] = (0, a.useState)(null),
            R =
              null !== (n = null == x ? void 0 : x.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, M] = (0, a.useState)({}),
            _ = (0, u.e)(t, (e) => C(e)),
            T = Array.from(E.layers),
            [P] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            k = T.indexOf(P),
            S = x ? T.indexOf(x) : -1,
            O = E.layersWithOutsidePointerEventsDisabled.size > 0,
            D = S >= k,
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e),
                r = (0, a.useRef)(!1),
                o = (0, a.useRef)(() => {});
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function a() {
                          v("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = a),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : a();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              !D ||
                n ||
                (null == g || g(e),
                null == b || b(e),
                e.defaultPrevented || null == y || y());
            }, R),
            I = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e),
                r = (0, a.useRef)(!1);
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == h || h(e),
                null == b || b(e),
                e.defaultPrevented || null == y || y());
            }, R);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e);
              (0, a.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              S !== E.layers.size - 1 ||
                (null == p || p(e),
                !e.defaultPrevented && y && (e.preventDefault(), y()));
            }, R),
            (0, a.useEffect)(() => {
              if (x)
                return (
                  f &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = R.body.style.pointerEvents),
                      (R.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(x)),
                  E.layers.add(x),
                  m(),
                  () => {
                    f &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (R.body.style.pointerEvents = r);
                  }
                );
            }, [x, R, f, E]),
            (0, a.useEffect)(
              () => () => {
                x &&
                  (E.layers.delete(x),
                  E.layersWithOutsidePointerEventsDisabled.delete(x),
                  m());
              },
              [x, E]
            ),
            (0, a.useEffect)(() => {
              let e = () => M({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, a.createElement)(
              l.WV.div,
              (0, o.Z)({}, w, {
                ref: _,
                style: {
                  pointerEvents: O ? (D ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, i.M)(e.onFocusCapture, I.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, I.onBlurCapture),
                onPointerDownCapture: (0, i.M)(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        }),
        p = (0, a.forwardRef)((e, t) => {
          let n = (0, a.useContext)(d),
            r = (0, a.useRef)(null),
            i = (0, u.e)(t, r);
          return (
            (0, a.useEffect)(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, a.createElement)(l.WV.div, (0, o.Z)({}, e, { ref: i }))
          );
        });
      function m() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function v(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, l.jH)(o, a) : o.dispatchEvent(a);
      }
      let g = f,
        h = p;
    },
    70085: function (e, t, n) {
      n.d(t, {
        oC: function () {
          return eQ;
        },
        VY: function () {
          return eG;
        },
        ZA: function () {
          return eY;
        },
        ck: function () {
          return eX;
        },
        wU: function () {
          return e1;
        },
        __: function () {
          return eq;
        },
        Uv: function () {
          return eH;
        },
        Ee: function () {
          return eJ;
        },
        Rk: function () {
          return e0;
        },
        fC: function () {
          return e$;
        },
        Z0: function () {
          return e6;
        },
        Tr: function () {
          return e2;
        },
        tu: function () {
          return e8;
        },
        fF: function () {
          return e5;
        },
        xz: function () {
          return eB;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(98575),
        l = n(73966),
        u = n(80886),
        c = n(66840),
        s = n(67822),
        d = n(29114),
        f = n(15278),
        p = n(86097),
        m = n(99103),
        v = n(99255),
        g = n(26008),
        h = n(83832),
        b = n(71599),
        y = n(1353),
        w = n(37053),
        E = n(26606),
        x = n(5478),
        C = n(11816);
      let R = ["Enter", " "],
        M = ["ArrowUp", "PageDown", "End"],
        _ = ["ArrowDown", "PageUp", "Home", ...M],
        T = { ltr: [...R, "ArrowRight"], rtl: [...R, "ArrowLeft"] },
        P = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        k = "Menu",
        [S, O, D] = (0, s.B)(k),
        [A, I] = (0, l.b)(k, [D, g.D7, y.Pc]),
        L = (0, g.D7)(),
        N = (0, y.Pc)(),
        [F, W] = A(k),
        [V, Z] = A(k),
        j = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...a } = e,
            i = L(n);
          return (0, o.createElement)(g.ee, (0, r.Z)({}, i, a, { ref: t }));
        }),
        z = "MenuPortal",
        [K, U] = A(z, { forceMount: void 0 }),
        $ = "MenuContent",
        [B, H] = A($),
        G = (0, o.forwardRef)((e, t) => {
          let n = U($, e.__scopeMenu),
            { forceMount: a = n.forceMount, ...i } = e,
            l = W($, e.__scopeMenu),
            u = Z($, e.__scopeMenu);
          return (0, o.createElement)(
            S.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              b.z,
              { present: a || l.open },
              (0, o.createElement)(
                S.Slot,
                { scope: e.__scopeMenu },
                u.modal
                  ? (0, o.createElement)(Y, (0, r.Z)({}, i, { ref: t }))
                  : (0, o.createElement)(q, (0, r.Z)({}, i, { ref: t }))
              )
            )
          );
        }),
        Y = (0, o.forwardRef)((e, t) => {
          let n = W($, e.__scopeMenu),
            l = (0, o.useRef)(null),
            u = (0, i.e)(t, l);
          return (
            (0, o.useEffect)(() => {
              let e = l.current;
              if (e) return (0, x.Ry)(e);
            }, []),
            (0, o.createElement)(
              X,
              (0, r.Z)({}, e, {
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, a.M)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
                onDismiss: () => n.onOpenChange(!1),
              })
            )
          );
        }),
        q = (0, o.forwardRef)((e, t) => {
          let n = W($, e.__scopeMenu);
          return (0, o.createElement)(
            X,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        X = (0, o.forwardRef)((e, t) => {
          let {
              __scopeMenu: n,
              loop: l = !1,
              trapFocus: u,
              onOpenAutoFocus: c,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: d,
              onEntryFocus: v,
              onEscapeKeyDown: h,
              onPointerDownOutside: b,
              onFocusOutside: E,
              onInteractOutside: x,
              onDismiss: R,
              disableOutsideScroll: T,
              ...P
            } = e,
            k = W($, n),
            S = Z($, n),
            D = L(n),
            A = N(n),
            I = O(n),
            [F, V] = (0, o.useState)(null),
            j = (0, o.useRef)(null),
            z = (0, i.e)(t, j, k.onContentChange),
            K = (0, o.useRef)(0),
            U = (0, o.useRef)(""),
            H = (0, o.useRef)(0),
            G = (0, o.useRef)(null),
            Y = (0, o.useRef)("right"),
            q = (0, o.useRef)(0),
            X = T ? C.Z : o.Fragment,
            Q = T ? { as: w.g7, allowPinchZoom: !0 } : void 0,
            J = (e) => {
              var t, n;
              let r = U.current + e,
                o = I().filter((e) => !e.disabled),
                a = document.activeElement,
                i =
                  null === (t = o.find((e) => e.ref.current === a)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                l = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    a =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (a = a.filter((e) => e !== n));
                  let i = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return i !== n ? i : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  i
                ),
                u =
                  null === (n = o.find((e) => e.textValue === l)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (U.current = t),
                  window.clearTimeout(K.current),
                  "" !== t && (K.current = window.setTimeout(() => e(""), 1e3));
              })(r),
                u && setTimeout(() => u.focus());
            };
          (0, o.useEffect)(() => () => window.clearTimeout(K.current), []),
            (0, p.EW)();
          let ee = (0, o.useCallback)((e) => {
            var t, n, r;
            return (
              Y.current ===
                (null === (t = G.current) || void 0 === t ? void 0 : t.side) &&
              !!(r =
                null === (n = G.current) || void 0 === n ? void 0 : n.area) &&
              (function (e, t) {
                let { x: n, y: r } = e,
                  o = !1;
                for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                  let i = t[e].x,
                    l = t[e].y,
                    u = t[a].x,
                    c = t[a].y;
                  l > r != c > r &&
                    n < ((u - i) * (r - l)) / (c - l) + i &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, o.createElement)(
            B,
            {
              scope: n,
              searchRef: U,
              onItemEnter: (0, o.useCallback)(
                (e) => {
                  ee(e) && e.preventDefault();
                },
                [ee]
              ),
              onItemLeave: (0, o.useCallback)(
                (e) => {
                  var t;
                  ee(e) ||
                    (null === (t = j.current) || void 0 === t || t.focus(),
                    V(null));
                },
                [ee]
              ),
              onTriggerLeave: (0, o.useCallback)(
                (e) => {
                  ee(e) && e.preventDefault();
                },
                [ee]
              ),
              pointerGraceTimerRef: H,
              onPointerGraceIntentChange: (0, o.useCallback)((e) => {
                G.current = e;
              }, []),
            },
            (0, o.createElement)(
              X,
              Q,
              (0, o.createElement)(
                m.M,
                {
                  asChild: !0,
                  trapped: u,
                  onMountAutoFocus: (0, a.M)(c, (e) => {
                    var t;
                    e.preventDefault(),
                      null === (t = j.current) || void 0 === t || t.focus();
                  }),
                  onUnmountAutoFocus: s,
                },
                (0, o.createElement)(
                  f.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: d,
                    onEscapeKeyDown: h,
                    onPointerDownOutside: b,
                    onFocusOutside: E,
                    onInteractOutside: x,
                    onDismiss: R,
                  },
                  (0, o.createElement)(
                    y.fC,
                    (0, r.Z)({ asChild: !0 }, A, {
                      dir: S.dir,
                      orientation: "vertical",
                      loop: l,
                      currentTabStopId: F,
                      onCurrentTabStopIdChange: V,
                      onEntryFocus: (0, a.M)(v, (e) => {
                        S.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                    }),
                    (0, o.createElement)(
                      g.VY,
                      (0, r.Z)(
                        {
                          role: "menu",
                          "aria-orientation": "vertical",
                          "data-state": ew(k.open),
                          "data-radix-menu-content": "",
                          dir: S.dir,
                        },
                        D,
                        P,
                        {
                          ref: z,
                          style: { outline: "none", ...P.style },
                          onKeyDown: (0, a.M)(P.onKeyDown, (e) => {
                            let t =
                                e.target.closest(
                                  "[data-radix-menu-content]"
                                ) === e.currentTarget,
                              n = e.ctrlKey || e.altKey || e.metaKey,
                              r = 1 === e.key.length;
                            t &&
                              ("Tab" === e.key && e.preventDefault(),
                              !n && r && J(e.key));
                            let o = j.current;
                            if (e.target !== o || !_.includes(e.key)) return;
                            e.preventDefault();
                            let a = I()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            M.includes(e.key) && a.reverse(),
                              (function (e) {
                                let t = document.activeElement;
                                for (let n of e)
                                  if (
                                    n === t ||
                                    (n.focus(), document.activeElement !== t)
                                  )
                                    return;
                              })(a);
                          }),
                          onBlur: (0, a.M)(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) ||
                              (window.clearTimeout(K.current),
                              (U.current = ""));
                          }),
                          onPointerMove: (0, a.M)(
                            e.onPointerMove,
                            eC((e) => {
                              let t = e.target,
                                n = q.current !== e.clientX;
                              if (e.currentTarget.contains(t) && n) {
                                let t =
                                  e.clientX > q.current ? "right" : "left";
                                (Y.current = t), (q.current = e.clientX);
                              }
                            })
                          ),
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        Q = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...a } = e;
          return (0, o.createElement)(
            c.WV.div,
            (0, r.Z)({ role: "group" }, a, { ref: t })
          );
        }),
        J = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...a } = e;
          return (0, o.createElement)(c.WV.div, (0, r.Z)({}, a, { ref: t }));
        }),
        ee = "MenuItem",
        et = "menu.itemSelect",
        en = (0, o.forwardRef)((e, t) => {
          let { disabled: n = !1, onSelect: l, ...u } = e,
            s = (0, o.useRef)(null),
            d = Z(ee, e.__scopeMenu),
            f = H(ee, e.__scopeMenu),
            p = (0, i.e)(t, s),
            m = (0, o.useRef)(!1);
          return (0, o.createElement)(
            er,
            (0, r.Z)({}, u, {
              ref: p,
              disabled: n,
              onClick: (0, a.M)(e.onClick, () => {
                let e = s.current;
                if (!n && e) {
                  let t = new CustomEvent(et, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(et, (e) => (null == l ? void 0 : l(e)), {
                    once: !0,
                  }),
                    (0, c.jH)(e, t),
                    t.defaultPrevented ? (m.current = !1) : d.onClose();
                }
              }),
              onPointerDown: (t) => {
                var n;
                null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                  (m.current = !0);
              },
              onPointerUp: (0, a.M)(e.onPointerUp, (e) => {
                var t;
                m.current ||
                  null === (t = e.currentTarget) ||
                  void 0 === t ||
                  t.click();
              }),
              onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                let t = "" !== f.searchRef.current;
                !n &&
                  (!t || " " !== e.key) &&
                  R.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault());
              }),
            })
          );
        }),
        er = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, disabled: l = !1, textValue: u, ...s } = e,
            d = H(ee, n),
            f = N(n),
            p = (0, o.useRef)(null),
            m = (0, i.e)(t, p),
            [v, g] = (0, o.useState)(!1),
            [h, b] = (0, o.useState)("");
          return (
            (0, o.useEffect)(() => {
              let e = p.current;
              if (e) {
                var t;
                b(
                  (null !== (t = e.textContent) && void 0 !== t ? t : "").trim()
                );
              }
            }, [s.children]),
            (0, o.createElement)(
              S.ItemSlot,
              { scope: n, disabled: l, textValue: null != u ? u : h },
              (0, o.createElement)(
                y.ck,
                (0, r.Z)({ asChild: !0 }, f, { focusable: !l }),
                (0, o.createElement)(
                  c.WV.div,
                  (0, r.Z)(
                    {
                      role: "menuitem",
                      "data-highlighted": v ? "" : void 0,
                      "aria-disabled": l || void 0,
                      "data-disabled": l ? "" : void 0,
                    },
                    s,
                    {
                      ref: m,
                      onPointerMove: (0, a.M)(
                        e.onPointerMove,
                        eC((e) => {
                          l
                            ? d.onItemLeave(e)
                            : (d.onItemEnter(e),
                              e.defaultPrevented || e.currentTarget.focus());
                        })
                      ),
                      onPointerLeave: (0, a.M)(
                        e.onPointerLeave,
                        eC((e) => d.onItemLeave(e))
                      ),
                      onFocus: (0, a.M)(e.onFocus, () => g(!0)),
                      onBlur: (0, a.M)(e.onBlur, () => g(!1)),
                    }
                  )
                )
              )
            )
          );
        }),
        eo = (0, o.forwardRef)((e, t) => {
          let { checked: n = !1, onCheckedChange: i, ...l } = e;
          return (0, o.createElement)(
            es,
            { scope: e.__scopeMenu, checked: n },
            (0, o.createElement)(
              en,
              (0, r.Z)(
                {
                  role: "menuitemcheckbox",
                  "aria-checked": eE(n) ? "mixed" : n,
                },
                l,
                {
                  ref: t,
                  "data-state": ex(n),
                  onSelect: (0, a.M)(
                    l.onSelect,
                    () => (null == i ? void 0 : i(!!eE(n) || !n)),
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        [ea, ei] = A("MenuRadioGroup", {
          value: void 0,
          onValueChange: () => {},
        }),
        el = (0, o.forwardRef)((e, t) => {
          let { value: n, onValueChange: a, ...i } = e,
            l = (0, E.W)(a);
          return (0, o.createElement)(
            ea,
            { scope: e.__scopeMenu, value: n, onValueChange: l },
            (0, o.createElement)(Q, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        eu = (0, o.forwardRef)((e, t) => {
          let { value: n, ...i } = e,
            l = ei("MenuRadioItem", e.__scopeMenu),
            u = n === l.value;
          return (0, o.createElement)(
            es,
            { scope: e.__scopeMenu, checked: u },
            (0, o.createElement)(
              en,
              (0, r.Z)({ role: "menuitemradio", "aria-checked": u }, i, {
                ref: t,
                "data-state": ex(u),
                onSelect: (0, a.M)(
                  i.onSelect,
                  () => {
                    var e;
                    return null === (e = l.onValueChange) || void 0 === e
                      ? void 0
                      : e.call(l, n);
                  },
                  { checkForDefaultPrevented: !1 }
                ),
              })
            )
          );
        }),
        ec = "MenuItemIndicator",
        [es, ed] = A(ec, { checked: !1 }),
        ef = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, forceMount: a, ...i } = e,
            l = ed(ec, n);
          return (0, o.createElement)(
            b.z,
            { present: a || eE(l.checked) || !0 === l.checked },
            (0, o.createElement)(
              c.WV.span,
              (0, r.Z)({}, i, { ref: t, "data-state": ex(l.checked) })
            )
          );
        }),
        ep = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...a } = e;
          return (0, o.createElement)(
            c.WV.div,
            (0, r.Z)(
              { role: "separator", "aria-orientation": "horizontal" },
              a,
              { ref: t }
            )
          );
        }),
        em =
          ((e, t) => {
            let { __scopeMenu: n, ...a } = e,
              i = L(n);
            return (0, o.createElement)(g.Eh, (0, r.Z)({}, i, a, { ref: t }));
          },
          "MenuSub"),
        [ev, eg] = A(em),
        eh = "MenuSubTrigger",
        eb = (0, o.forwardRef)((e, t) => {
          let n = W(eh, e.__scopeMenu),
            l = Z(eh, e.__scopeMenu),
            u = eg(eh, e.__scopeMenu),
            c = H(eh, e.__scopeMenu),
            s = (0, o.useRef)(null),
            { pointerGraceTimerRef: d, onPointerGraceIntentChange: f } = c,
            p = { __scopeMenu: e.__scopeMenu },
            m = (0, o.useCallback)(() => {
              s.current && window.clearTimeout(s.current), (s.current = null);
            }, []);
          return (
            (0, o.useEffect)(() => m, [m]),
            (0, o.useEffect)(() => {
              let e = d.current;
              return () => {
                window.clearTimeout(e), f(null);
              };
            }, [d, f]),
            (0, o.createElement)(
              j,
              (0, r.Z)({ asChild: !0 }, p),
              (0, o.createElement)(
                er,
                (0, r.Z)(
                  {
                    id: u.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": u.contentId,
                    "data-state": ew(n.open),
                  },
                  e,
                  {
                    ref: (0, i.F)(t, u.onTriggerChange),
                    onClick: (t) => {
                      var r;
                      null === (r = e.onClick) || void 0 === r || r.call(e, t),
                        e.disabled ||
                          t.defaultPrevented ||
                          (t.currentTarget.focus(),
                          n.open || n.onOpenChange(!0));
                    },
                    onPointerMove: (0, a.M)(
                      e.onPointerMove,
                      eC((t) => {
                        c.onItemEnter(t),
                          t.defaultPrevented ||
                            e.disabled ||
                            n.open ||
                            s.current ||
                            (c.onPointerGraceIntentChange(null),
                            (s.current = window.setTimeout(() => {
                              n.onOpenChange(!0), m();
                            }, 100)));
                      })
                    ),
                    onPointerLeave: (0, a.M)(
                      e.onPointerLeave,
                      eC((e) => {
                        var t, r;
                        m();
                        let o =
                          null === (t = n.content) || void 0 === t
                            ? void 0
                            : t.getBoundingClientRect();
                        if (o) {
                          let t =
                              null === (r = n.content) || void 0 === r
                                ? void 0
                                : r.dataset.side,
                            a = "right" === t,
                            i = o[a ? "left" : "right"],
                            l = o[a ? "right" : "left"];
                          c.onPointerGraceIntentChange({
                            area: [
                              { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                              { x: i, y: o.top },
                              { x: l, y: o.top },
                              { x: l, y: o.bottom },
                              { x: i, y: o.bottom },
                            ],
                            side: t,
                          }),
                            window.clearTimeout(d.current),
                            (d.current = window.setTimeout(
                              () => c.onPointerGraceIntentChange(null),
                              300
                            ));
                        } else {
                          if ((c.onTriggerLeave(e), e.defaultPrevented)) return;
                          c.onPointerGraceIntentChange(null);
                        }
                      })
                    ),
                    onKeyDown: (0, a.M)(e.onKeyDown, (t) => {
                      let r = "" !== c.searchRef.current;
                      if (
                        !e.disabled &&
                        (!r || " " !== t.key) &&
                        T[l.dir].includes(t.key)
                      ) {
                        var o;
                        n.onOpenChange(!0),
                          null === (o = n.content) || void 0 === o || o.focus(),
                          t.preventDefault();
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        ey = (0, o.forwardRef)((e, t) => {
          let n = U($, e.__scopeMenu),
            { forceMount: l = n.forceMount, ...u } = e,
            c = W($, e.__scopeMenu),
            s = Z($, e.__scopeMenu),
            d = eg("MenuSubContent", e.__scopeMenu),
            f = (0, o.useRef)(null),
            p = (0, i.e)(t, f);
          return (0, o.createElement)(
            S.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              b.z,
              { present: l || c.open },
              (0, o.createElement)(
                S.Slot,
                { scope: e.__scopeMenu },
                (0, o.createElement)(
                  X,
                  (0, r.Z)(
                    { id: d.contentId, "aria-labelledby": d.triggerId },
                    u,
                    {
                      ref: p,
                      align: "start",
                      side: "rtl" === s.dir ? "left" : "right",
                      disableOutsidePointerEvents: !1,
                      disableOutsideScroll: !1,
                      trapFocus: !1,
                      onOpenAutoFocus: (e) => {
                        var t;
                        s.isUsingKeyboardRef.current &&
                          (null === (t = f.current) ||
                            void 0 === t ||
                            t.focus()),
                          e.preventDefault();
                      },
                      onCloseAutoFocus: (e) => e.preventDefault(),
                      onFocusOutside: (0, a.M)(e.onFocusOutside, (e) => {
                        e.target !== d.trigger && c.onOpenChange(!1);
                      }),
                      onEscapeKeyDown: (0, a.M)(e.onEscapeKeyDown, (e) => {
                        s.onClose(), e.preventDefault();
                      }),
                      onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                        let t = e.currentTarget.contains(e.target),
                          n = P[s.dir].includes(e.key);
                        if (t && n) {
                          var r;
                          c.onOpenChange(!1),
                            null === (r = d.trigger) ||
                              void 0 === r ||
                              r.focus(),
                            e.preventDefault();
                        }
                      }),
                    }
                  )
                )
              )
            )
          );
        });
      function ew(e) {
        return e ? "open" : "closed";
      }
      function eE(e) {
        return "indeterminate" === e;
      }
      function ex(e) {
        return eE(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eC(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let eR = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: a,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            u = L(t),
            [c, s] = (0, o.useState)(null),
            f = (0, o.useRef)(!1),
            p = (0, E.W)(i),
            m = (0, d.gm)(a);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener("pointerdown", t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, o.createElement)(
              g.fC,
              u,
              (0, o.createElement)(
                F,
                {
                  scope: t,
                  open: n,
                  onOpenChange: p,
                  content: c,
                  onContentChange: s,
                },
                (0, o.createElement)(
                  V,
                  {
                    scope: t,
                    onClose: (0, o.useCallback)(() => p(!1), [p]),
                    isUsingKeyboardRef: f,
                    dir: m,
                    modal: l,
                  },
                  r
                )
              )
            )
          );
        },
        eM = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: a } = e,
            i = W(z, t);
          return (0, o.createElement)(
            K,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              b.z,
              { present: n || i.open },
              (0, o.createElement)(h.h, { asChild: !0, container: a }, r)
            )
          );
        },
        e_ = (e) => {
          let {
              __scopeMenu: t,
              children: n,
              open: r = !1,
              onOpenChange: a,
            } = e,
            i = W(em, t),
            l = L(t),
            [u, c] = (0, o.useState)(null),
            [s, d] = (0, o.useState)(null),
            f = (0, E.W)(a);
          return (
            (0, o.useEffect)(
              () => (!1 === i.open && f(!1), () => f(!1)),
              [i.open, f]
            ),
            (0, o.createElement)(
              g.fC,
              l,
              (0, o.createElement)(
                F,
                {
                  scope: t,
                  open: r,
                  onOpenChange: f,
                  content: s,
                  onContentChange: d,
                },
                (0, o.createElement)(
                  ev,
                  {
                    scope: t,
                    contentId: (0, v.M)(),
                    triggerId: (0, v.M)(),
                    trigger: u,
                    onTriggerChange: c,
                  },
                  n
                )
              )
            )
          );
        },
        eT = "DropdownMenu",
        [eP, ek] = (0, l.b)(eT, [I]),
        eS = I(),
        [eO, eD] = eP(eT),
        eA = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, disabled: l = !1, ...u } = e,
            s = eD("DropdownMenuTrigger", n),
            d = eS(n);
          return (0, o.createElement)(
            j,
            (0, r.Z)({ asChild: !0 }, d),
            (0, o.createElement)(
              c.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  id: s.triggerId,
                  "aria-haspopup": "menu",
                  "aria-expanded": s.open,
                  "aria-controls": s.open ? s.contentId : void 0,
                  "data-state": s.open ? "open" : "closed",
                  "data-disabled": l ? "" : void 0,
                  disabled: l,
                },
                u,
                {
                  ref: (0, i.F)(t, s.triggerRef),
                  onPointerDown: (0, a.M)(e.onPointerDown, (e) => {
                    l ||
                      0 !== e.button ||
                      !1 !== e.ctrlKey ||
                      (s.onOpenToggle(), s.open || e.preventDefault());
                  }),
                  onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                    !l &&
                      (["Enter", " "].includes(e.key) && s.onOpenToggle(),
                      "ArrowDown" === e.key && s.onOpenChange(!0),
                      ["Enter", " ", "ArrowDown"].includes(e.key) &&
                        e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        eI = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            l = eD("DropdownMenuContent", n),
            u = eS(n),
            c = (0, o.useRef)(!1);
          return (0, o.createElement)(
            G,
            (0, r.Z)(
              { id: l.contentId, "aria-labelledby": l.triggerId },
              u,
              i,
              {
                ref: t,
                onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  c.current ||
                    null === (t = l.triggerRef.current) ||
                    void 0 === t ||
                    t.focus(),
                    (c.current = !1),
                    e.preventDefault();
                }),
                onInteractOutside: (0, a.M)(e.onInteractOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey,
                    r = 2 === t.button || n;
                  (!l.modal || r) && (c.current = !0);
                }),
                style: {
                  ...e.style,
                  "--radix-dropdown-menu-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-dropdown-menu-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-dropdown-menu-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-dropdown-menu-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-dropdown-menu-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
              }
            )
          );
        }),
        eL = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(Q, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eN = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(J, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eF = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(en, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eW = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(eo, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eV = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(el, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eZ = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(eu, (0, r.Z)({}, i, a, { ref: t }));
        }),
        ej = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(ef, (0, r.Z)({}, i, a, { ref: t }));
        }),
        ez = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(ep, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eK = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(eb, (0, r.Z)({}, i, a, { ref: t }));
        }),
        eU = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...a } = e,
            i = eS(n);
          return (0, o.createElement)(
            ey,
            (0, r.Z)({}, i, a, {
              ref: t,
              style: {
                ...e.style,
                "--radix-dropdown-menu-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        e$ = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              dir: a,
              open: i,
              defaultOpen: l,
              onOpenChange: c,
              modal: s = !0,
            } = e,
            d = eS(t),
            f = (0, o.useRef)(null),
            [p = !1, m] = (0, u.T)({ prop: i, defaultProp: l, onChange: c });
          return (0, o.createElement)(
            eO,
            {
              scope: t,
              triggerId: (0, v.M)(),
              triggerRef: f,
              contentId: (0, v.M)(),
              open: p,
              onOpenChange: m,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
              modal: s,
            },
            (0, o.createElement)(
              eR,
              (0, r.Z)({}, d, { open: p, onOpenChange: m, dir: a, modal: s }),
              n
            )
          );
        },
        eB = eA,
        eH = (e) => {
          let { __scopeDropdownMenu: t, ...n } = e,
            a = eS(t);
          return (0, o.createElement)(eM, (0, r.Z)({}, a, n));
        },
        eG = eI,
        eY = eL,
        eq = eN,
        eX = eF,
        eQ = eW,
        eJ = eV,
        e0 = eZ,
        e1 = ej,
        e6 = ez,
        e2 = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              open: a,
              onOpenChange: i,
              defaultOpen: l,
            } = e,
            c = eS(t),
            [s = !1, d] = (0, u.T)({ prop: a, defaultProp: l, onChange: i });
          return (0, o.createElement)(
            e_,
            (0, r.Z)({}, c, { open: s, onOpenChange: d }),
            n
          );
        },
        e5 = eK,
        e8 = eU;
    },
    86097: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return a;
        },
      });
      var r = n(2265);
      let o = 0;
      function a() {
        (0, r.useEffect)(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    99103: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(1119),
        a = n(2265),
        i = n(98575),
        l = n(66840),
        u = n(26606);
      let c = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = (0, a.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: h,
              ...b
            } = e,
            [y, w] = (0, a.useState)(null),
            E = (0, u.W)(f),
            x = (0, u.W)(h),
            C = (0, a.useRef)(null),
            R = (0, i.e)(t, (e) => w(e)),
            M = (0, a.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, a.useEffect)(() => {
            if (r) {
              function e(e) {
                if (M.paused || !y) return;
                let t = e.target;
                y.contains(t) ? (C.current = t) : v(C.current, { select: !0 });
              }
              function t(e) {
                if (M.paused || !y) return;
                let t = e.relatedTarget;
                null === t || y.contains(t) || v(C.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && v(y);
              });
              return (
                y && n.observe(y, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, y, M.paused]),
            (0, a.useEffect)(() => {
              if (y) {
                g.add(M);
                let e = document.activeElement;
                if (!y.contains(e)) {
                  let t = new CustomEvent(c, d);
                  y.addEventListener(c, E),
                    y.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (v(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(y).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && v(y));
                }
                return () => {
                  y.removeEventListener(c, E),
                    setTimeout(() => {
                      let t = new CustomEvent(s, d);
                      y.addEventListener(s, x),
                        y.dispatchEvent(t),
                        t.defaultPrevented ||
                          v(null != e ? e : document.body, { select: !0 }),
                        y.removeEventListener(s, x),
                        g.remove(M);
                    }, 0);
                };
              }
            }, [y, E, x, M]);
          let _ = (0, a.useCallback)(
            (e) => {
              if ((!n && !r) || M.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, a] = (function (e) {
                    let t = p(e);
                    return [m(t, e), m(t.reverse(), e)];
                  })(t);
                r && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && v(a, { select: !0 }))
                    : (e.preventDefault(), n && v(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, M.paused]
          );
          return (0, a.createElement)(
            l.WV.div,
            (0, o.Z)({ tabIndex: -1 }, b, { ref: R, onKeyDown: _ })
          );
        });
      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function m(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function v(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let g =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = h(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = h(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function h(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    99255: function (e, t, n) {
      n.d(t, {
        M: function () {
          return u;
        },
      });
      var r,
        o = n(2265),
        a = n(61188);
      let i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        l = 0;
      function u(e) {
        let [t, n] = o.useState(i());
        return (
          (0, a.b)(() => {
            e || n((e) => (null != e ? e : String(l++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    45509: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return eg;
        },
        aV: function () {
          return ed;
        },
        ck: function () {
          return ef;
        },
        fC: function () {
          return es;
        },
        l_: function () {
          return eh;
        },
        rU: function () {
          return em;
        },
        xz: function () {
          return ep;
        },
        z$: function () {
          return ev;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(54887),
        i = n(73966),
        l = n(6741),
        u = n(66840),
        c = n(80886),
        s = n(98575),
        d = n(29114),
        f = n(71599),
        p = n(99255),
        m = n(67822),
        v = n(15278),
        g = n(6718),
        h = n(61188),
        b = n(26606),
        y = n(95098);
      let w = "NavigationMenu",
        [E, x, C] = (0, m.B)(w),
        [R, M, _] = (0, m.B)(w),
        [T, P] = (0, i.b)(w, [C, _]),
        [k, S] = T(w),
        [O, D] = T(w),
        A = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: a,
              onValueChange: i,
              defaultValue: l,
              delayDuration: f = 200,
              skipDelayDuration: p = 300,
              orientation: m = "horizontal",
              dir: v,
              ...g
            } = e,
            [h, b] = (0, o.useState)(null),
            y = (0, s.e)(t, (e) => b(e)),
            w = (0, d.gm)(v),
            E = (0, o.useRef)(0),
            x = (0, o.useRef)(0),
            C = (0, o.useRef)(0),
            [R, M] = (0, o.useState)(!0),
            [_ = "", T] = (0, c.T)({
              prop: a,
              onChange: (e) => {
                let t = p > 0;
                "" !== e
                  ? (window.clearTimeout(C.current), t && M(!1))
                  : (window.clearTimeout(C.current),
                    (C.current = window.setTimeout(() => M(!0), p))),
                  null == i || i(e);
              },
              defaultProp: l,
            }),
            P = (0, o.useCallback)(() => {
              window.clearTimeout(x.current),
                (x.current = window.setTimeout(() => T(""), 150));
            }, [T]),
            k = (0, o.useCallback)(
              (e) => {
                window.clearTimeout(x.current), T(e);
              },
              [T]
            ),
            S = (0, o.useCallback)(
              (e) => {
                _ === e
                  ? window.clearTimeout(x.current)
                  : (E.current = window.setTimeout(() => {
                      window.clearTimeout(x.current), T(e);
                    }, f));
              },
              [_, T, f]
            );
          return (
            (0, o.useEffect)(
              () => () => {
                window.clearTimeout(E.current),
                  window.clearTimeout(x.current),
                  window.clearTimeout(C.current);
              },
              []
            ),
            (0, o.createElement)(
              I,
              {
                scope: n,
                isRootMenu: !0,
                value: _,
                dir: w,
                orientation: m,
                rootNavigationMenu: h,
                onTriggerEnter: (e) => {
                  window.clearTimeout(E.current), R ? S(e) : k(e);
                },
                onTriggerLeave: () => {
                  window.clearTimeout(E.current), P();
                },
                onContentEnter: () => window.clearTimeout(x.current),
                onContentLeave: P,
                onItemSelect: (e) => {
                  T((t) => (t === e ? "" : e));
                },
                onItemDismiss: () => T(""),
              },
              (0, o.createElement)(
                u.WV.nav,
                (0, r.Z)(
                  { "aria-label": "Main", "data-orientation": m, dir: w },
                  g,
                  { ref: y }
                )
              )
            )
          );
        }),
        I = (e) => {
          let {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              dir: a,
              orientation: i,
              children: l,
              value: u,
              onItemSelect: c,
              onItemDismiss: s,
              onTriggerEnter: d,
              onTriggerLeave: f,
              onContentEnter: m,
              onContentLeave: v,
            } = e,
            [h, y] = (0, o.useState)(null),
            [w, x] = (0, o.useState)(new Map()),
            [C, R] = (0, o.useState)(null);
          return (0, o.createElement)(
            k,
            {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              value: u,
              previousValue: (0, g.D)(u),
              baseId: (0, p.M)(),
              dir: a,
              orientation: i,
              viewport: h,
              onViewportChange: y,
              indicatorTrack: C,
              onIndicatorTrackChange: R,
              onTriggerEnter: (0, b.W)(d),
              onTriggerLeave: (0, b.W)(f),
              onContentEnter: (0, b.W)(m),
              onContentLeave: (0, b.W)(v),
              onItemSelect: (0, b.W)(c),
              onItemDismiss: (0, b.W)(s),
              onViewportContentChange: (0, o.useCallback)((e, t) => {
                x((n) => (n.set(e, t), new Map(n)));
              }, []),
              onViewportContentRemove: (0, o.useCallback)((e) => {
                x((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
              }, []),
            },
            (0, o.createElement)(
              E.Provider,
              { scope: t },
              (0, o.createElement)(O, { scope: t, items: w }, l)
            )
          );
        },
        L = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...a } = e,
            i = S("NavigationMenuList", n),
            l = (0, o.createElement)(
              u.WV.ul,
              (0, r.Z)({ "data-orientation": i.orientation }, a, { ref: t })
            );
          return (0, o.createElement)(
            u.WV.div,
            { style: { position: "relative" }, ref: i.onIndicatorTrackChange },
            (0, o.createElement)(
              E.Slot,
              { scope: n },
              i.isRootMenu ? (0, o.createElement)(ee, { asChild: !0 }, l) : l
            )
          );
        }),
        [N, F] = T("NavigationMenuItem"),
        W = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, value: a, ...i } = e,
            l = (0, p.M)(),
            c = (0, o.useRef)(null),
            s = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            f = (0, o.useRef)(() => {}),
            m = (0, o.useRef)(!1),
            v = (0, o.useCallback)((e = "start") => {
              if (c.current) {
                f.current();
                let t = er(c.current);
                t.length && eo("start" === e ? t : t.reverse());
              }
            }, []),
            g = (0, o.useCallback)(() => {
              if (c.current) {
                let e = er(c.current);
                e.length &&
                  (f.current =
                    (e.forEach((e) => {
                      (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                        e.setAttribute("tabindex", "-1");
                    }),
                    () => {
                      e.forEach((e) => {
                        let t = e.dataset.tabindex;
                        e.setAttribute("tabindex", t);
                      });
                    }));
              }
            }, []);
          return (0, o.createElement)(
            N,
            {
              scope: n,
              value: a || l || "LEGACY_REACT_AUTO_VALUE",
              triggerRef: s,
              contentRef: c,
              focusProxyRef: d,
              wasEscapeCloseRef: m,
              onEntryKeyDown: v,
              onFocusProxyEnter: v,
              onRootContentClose: g,
              onContentFocusOutside: g,
            },
            (0, o.createElement)(u.WV.li, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        V = "NavigationMenuTrigger",
        Z = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, disabled: a, ...i } = e,
            c = S(V, e.__scopeNavigationMenu),
            d = F(V, e.__scopeNavigationMenu),
            f = (0, o.useRef)(null),
            p = (0, s.e)(f, d.triggerRef, t),
            m = el(c.baseId, d.value),
            v = eu(c.baseId, d.value),
            g = (0, o.useRef)(!1),
            h = (0, o.useRef)(!1),
            b = d.value === c.value;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              E.ItemSlot,
              { scope: n, value: d.value },
              (0, o.createElement)(
                en,
                { asChild: !0 },
                (0, o.createElement)(
                  u.WV.button,
                  (0, r.Z)(
                    {
                      id: m,
                      disabled: a,
                      "data-disabled": a ? "" : void 0,
                      "data-state": ei(b),
                      "aria-expanded": b,
                      "aria-controls": v,
                    },
                    i,
                    {
                      ref: p,
                      onPointerEnter: (0, l.M)(e.onPointerEnter, () => {
                        (h.current = !1), (d.wasEscapeCloseRef.current = !1);
                      }),
                      onPointerMove: (0, l.M)(
                        e.onPointerMove,
                        ec(() => {
                          a ||
                            h.current ||
                            d.wasEscapeCloseRef.current ||
                            g.current ||
                            (c.onTriggerEnter(d.value), (g.current = !0));
                        })
                      ),
                      onPointerLeave: (0, l.M)(
                        e.onPointerLeave,
                        ec(() => {
                          a || (c.onTriggerLeave(), (g.current = !1));
                        })
                      ),
                      onClick: (0, l.M)(e.onClick, () => {
                        c.onItemSelect(d.value), (h.current = b);
                      }),
                      onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                        let t = {
                          horizontal: "ArrowDown",
                          vertical:
                            "rtl" === c.dir ? "ArrowLeft" : "ArrowRight",
                        }[c.orientation];
                        b &&
                          e.key === t &&
                          (d.onEntryKeyDown(), e.preventDefault());
                      }),
                    }
                  )
                )
              )
            ),
            b &&
              (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(y.f, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: d.focusProxyRef,
                  onFocus: (e) => {
                    let t = d.contentRef.current,
                      n = e.relatedTarget,
                      r = n === f.current,
                      o = null == t ? void 0 : t.contains(n);
                    (r || !o) && d.onFocusProxyEnter(r ? "start" : "end");
                  },
                }),
                c.viewport && (0, o.createElement)("span", { "aria-owns": v })
              )
          );
        }),
        j = "navigationMenu.linkSelect",
        z = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, active: a, onSelect: i, ...c } = e;
          return (0, o.createElement)(
            en,
            { asChild: !0 },
            (0, o.createElement)(
              u.WV.a,
              (0, r.Z)(
                {
                  "data-active": a ? "" : void 0,
                  "aria-current": a ? "page" : void 0,
                },
                c,
                {
                  ref: t,
                  onClick: (0, l.M)(
                    e.onClick,
                    (e) => {
                      let t = e.target,
                        n = new CustomEvent(j, { bubbles: !0, cancelable: !0 });
                      if (
                        (t.addEventListener(
                          j,
                          (e) => (null == i ? void 0 : i(e)),
                          { once: !0 }
                        ),
                        (0, u.jH)(t, n),
                        !n.defaultPrevented && !e.metaKey)
                      ) {
                        let e = new CustomEvent(Y, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        (0, u.jH)(t, e);
                      }
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        K = "NavigationMenuIndicator",
        U = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            l = S(K, e.__scopeNavigationMenu),
            u = !!l.value;
          return l.indicatorTrack
            ? a.createPortal(
                (0, o.createElement)(
                  f.z,
                  { present: n || u },
                  (0, o.createElement)($, (0, r.Z)({}, i, { ref: t }))
                ),
                l.indicatorTrack
              )
            : null;
        }),
        $ = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...a } = e,
            i = S(K, n),
            l = x(n),
            [c, s] = (0, o.useState)(null),
            [d, f] = (0, o.useState)(null),
            p = "horizontal" === i.orientation,
            m = !!i.value;
          (0, o.useEffect)(() => {
            var e;
            let t =
              null === (e = l().find((e) => e.value === i.value)) ||
              void 0 === e
                ? void 0
                : e.ref.current;
            t && s(t);
          }, [l, i.value]);
          let v = () => {
            c &&
              f({
                size: p ? c.offsetWidth : c.offsetHeight,
                offset: p ? c.offsetLeft : c.offsetTop,
              });
          };
          return (
            ea(c, v),
            ea(i.indicatorTrack, v),
            d
              ? (0, o.createElement)(
                  u.WV.div,
                  (0, r.Z)(
                    {
                      "aria-hidden": !0,
                      "data-state": m ? "visible" : "hidden",
                      "data-orientation": i.orientation,
                    },
                    a,
                    {
                      ref: t,
                      style: {
                        position: "absolute",
                        ...(p
                          ? {
                              left: 0,
                              width: d.size + "px",
                              transform: `translateX(${d.offset}px)`,
                            }
                          : {
                              top: 0,
                              height: d.size + "px",
                              transform: `translateY(${d.offset}px)`,
                            }),
                        ...a.style,
                      },
                    }
                  )
                )
              : null
          );
        }),
        B = "NavigationMenuContent",
        H = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            i = S(B, e.__scopeNavigationMenu),
            u = F(B, e.__scopeNavigationMenu),
            c = (0, s.e)(u.contentRef, t),
            d = u.value === i.value,
            p = {
              value: u.value,
              triggerRef: u.triggerRef,
              focusProxyRef: u.focusProxyRef,
              wasEscapeCloseRef: u.wasEscapeCloseRef,
              onContentFocusOutside: u.onContentFocusOutside,
              onRootContentClose: u.onRootContentClose,
              ...a,
            };
          return i.viewport
            ? (0, o.createElement)(
                G,
                (0, r.Z)({ forceMount: n }, p, { ref: c })
              )
            : (0, o.createElement)(
                f.z,
                { present: n || d },
                (0, o.createElement)(
                  q,
                  (0, r.Z)({ "data-state": ei(d) }, p, {
                    ref: c,
                    onPointerEnter: (0, l.M)(
                      e.onPointerEnter,
                      i.onContentEnter
                    ),
                    onPointerLeave: (0, l.M)(
                      e.onPointerLeave,
                      ec(i.onContentLeave)
                    ),
                    style: {
                      pointerEvents: !d && i.isRootMenu ? "none" : void 0,
                      ...p.style,
                    },
                  })
                )
              );
        }),
        G = (0, o.forwardRef)((e, t) => {
          let { onViewportContentChange: n, onViewportContentRemove: r } = S(
            B,
            e.__scopeNavigationMenu
          );
          return (
            (0, h.b)(() => {
              n(e.value, { ref: t, ...e });
            }, [e, t, n]),
            (0, h.b)(() => () => r(e.value), [e.value, r]),
            null
          );
        }),
        Y = "navigationMenu.rootContentDismiss",
        q = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: a,
              triggerRef: i,
              focusProxyRef: u,
              wasEscapeCloseRef: c,
              onRootContentClose: d,
              onContentFocusOutside: f,
              ...p
            } = e,
            m = S(B, n),
            g = (0, o.useRef)(null),
            h = (0, s.e)(g, t),
            b = el(m.baseId, a),
            y = eu(m.baseId, a),
            w = x(n),
            E = (0, o.useRef)(null),
            { onItemDismiss: C } = m;
          (0, o.useEffect)(() => {
            let e = g.current;
            if (m.isRootMenu && e) {
              let t = () => {
                var t;
                C(),
                  d(),
                  e.contains(document.activeElement) &&
                    (null === (t = i.current) || void 0 === t || t.focus());
              };
              return (
                e.addEventListener(Y, t), () => e.removeEventListener(Y, t)
              );
            }
          }, [m.isRootMenu, e.value, i, C, d]);
          let R = (0, o.useMemo)(() => {
            let e = w().map((e) => e.value);
            "rtl" === m.dir && e.reverse();
            let t = e.indexOf(m.value),
              n = e.indexOf(m.previousValue),
              r = a === m.value,
              o = n === e.indexOf(a);
            if (!r && !o) return E.current;
            let i = (() => {
              if (t !== n) {
                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                if (o && -1 !== t) return t > n ? "to-start" : "to-end";
              }
              return null;
            })();
            return (E.current = i), i;
          }, [m.previousValue, m.value, m.dir, w, a]);
          return (0, o.createElement)(
            ee,
            { asChild: !0 },
            (0, o.createElement)(
              v.XB,
              (0, r.Z)(
                {
                  id: y,
                  "aria-labelledby": b,
                  "data-motion": R,
                  "data-orientation": m.orientation,
                },
                p,
                {
                  ref: h,
                  onDismiss: () => {
                    var e;
                    let t = new Event(Y, { bubbles: !0, cancelable: !0 });
                    null === (e = g.current) ||
                      void 0 === e ||
                      e.dispatchEvent(t);
                  },
                  onFocusOutside: (0, l.M)(e.onFocusOutside, (e) => {
                    var t;
                    f();
                    let n = e.target;
                    null !== (t = m.rootNavigationMenu) &&
                      void 0 !== t &&
                      t.contains(n) &&
                      e.preventDefault();
                  }),
                  onPointerDownOutside: (0, l.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      var t;
                      let n = e.target,
                        r = w().some((e) => {
                          var t;
                          return null === (t = e.ref.current) || void 0 === t
                            ? void 0
                            : t.contains(n);
                        }),
                        o =
                          m.isRootMenu &&
                          (null === (t = m.viewport) || void 0 === t
                            ? void 0
                            : t.contains(n));
                      (r || o || !m.isRootMenu) && e.preventDefault();
                    }
                  ),
                  onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                    let t = e.altKey || e.ctrlKey || e.metaKey;
                    if ("Tab" === e.key && !t) {
                      let t = er(e.currentTarget),
                        r = document.activeElement,
                        o = t.findIndex((e) => e === r);
                      if (
                        eo(
                          e.shiftKey
                            ? t.slice(0, o).reverse()
                            : t.slice(o + 1, t.length)
                        )
                      )
                        e.preventDefault();
                      else {
                        var n;
                        null === (n = u.current) || void 0 === n || n.focus();
                      }
                    }
                  }),
                  onEscapeKeyDown: (0, l.M)(e.onEscapeKeyDown, (e) => {
                    c.current = !0;
                  }),
                }
              )
            )
          );
        }),
        X = "NavigationMenuViewport",
        Q = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            i = !!S(X, e.__scopeNavigationMenu).value;
          return (0, o.createElement)(
            f.z,
            { present: n || i },
            (0, o.createElement)(J, (0, r.Z)({}, a, { ref: t }))
          );
        }),
        J = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, children: a, ...i } = e,
            c = S(X, n),
            d = (0, s.e)(t, c.onViewportChange),
            p = D(B, e.__scopeNavigationMenu),
            [m, v] = (0, o.useState)(null),
            [g, h] = (0, o.useState)(null),
            b = m ? (null == m ? void 0 : m.width) + "px" : void 0,
            y = m ? (null == m ? void 0 : m.height) + "px" : void 0,
            w = !!c.value,
            E = w ? c.value : c.previousValue;
          return (
            ea(g, () => {
              g && v({ width: g.offsetWidth, height: g.offsetHeight });
            }),
            (0, o.createElement)(
              u.WV.div,
              (0, r.Z)(
                { "data-state": ei(w), "data-orientation": c.orientation },
                i,
                {
                  ref: d,
                  style: {
                    pointerEvents: !w && c.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": b,
                    "--radix-navigation-menu-viewport-height": y,
                    ...i.style,
                  },
                  onPointerEnter: (0, l.M)(e.onPointerEnter, c.onContentEnter),
                  onPointerLeave: (0, l.M)(
                    e.onPointerLeave,
                    ec(c.onContentLeave)
                  ),
                }
              ),
              Array.from(p.items).map(
                ([e, { ref: t, forceMount: n, ...a }]) => {
                  let i = E === e;
                  return (0, o.createElement)(
                    f.z,
                    { key: e, present: n || i },
                    (0, o.createElement)(
                      q,
                      (0, r.Z)({}, a, {
                        ref: (0, s.F)(t, (e) => {
                          i && e && h(e);
                        }),
                      })
                    )
                  );
                }
              )
            )
          );
        }),
        ee = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...a } = e,
            i = S("FocusGroup", n);
          return (0, o.createElement)(
            R.Provider,
            { scope: n },
            (0, o.createElement)(
              R.Slot,
              { scope: n },
              (0, o.createElement)(
                u.WV.div,
                (0, r.Z)({ dir: i.dir }, a, { ref: t })
              )
            )
          );
        }),
        et = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        en = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...a } = e,
            i = M(n),
            c = S("FocusGroupItem", n);
          return (0, o.createElement)(
            R.ItemSlot,
            { scope: n },
            (0, o.createElement)(
              u.WV.button,
              (0, r.Z)({}, a, {
                ref: t,
                onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                  if (["Home", "End", ...et].includes(e.key)) {
                    let t = i().map((e) => e.ref.current);
                    if (
                      ([
                        "rtl" === c.dir ? "ArrowRight" : "ArrowLeft",
                        "ArrowUp",
                        "End",
                      ].includes(e.key) && t.reverse(),
                      et.includes(e.key))
                    ) {
                      let n = t.indexOf(e.currentTarget);
                      t = t.slice(n + 1);
                    }
                    setTimeout(() => eo(t)), e.preventDefault();
                  }
                }),
              })
            )
          );
        });
      function er(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function eo(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      function ea(e, t) {
        let n = (0, b.W)(t);
        (0, h.b)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              r.observe(e),
              () => {
                window.cancelAnimationFrame(t), r.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      function ei(e) {
        return e ? "open" : "closed";
      }
      function el(e, t) {
        return `${e}-trigger-${t}`;
      }
      function eu(e, t) {
        return `${e}-content-${t}`;
      }
      function ec(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let es = A,
        ed = L,
        ef = W,
        ep = Z,
        em = z,
        ev = U,
        eg = H,
        eh = Q;
    },
    26008: function (e, t, n) {
      n.d(t, {
        ee: function () {
          return e$;
        },
        Eh: function () {
          return eH;
        },
        VY: function () {
          return eB;
        },
        fC: function () {
          return eU;
        },
        D7: function () {
          return eO;
        },
      });
      var r = n(1119),
        o = n(2265);
      let a = ["top", "right", "bottom", "left"],
        i = Math.min,
        l = Math.max,
        u = Math.round,
        c = Math.floor,
        s = (e) => ({ x: e, y: e }),
        d = { left: "right", right: "left", bottom: "top", top: "bottom" },
        f = { start: "end", end: "start" };
      function p(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function m(e) {
        return e.split("-")[0];
      }
      function v(e) {
        return e.split("-")[1];
      }
      function g(e) {
        return "x" === e ? "y" : "x";
      }
      function h(e) {
        return "y" === e ? "height" : "width";
      }
      function b(e) {
        return ["top", "bottom"].includes(m(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => f[e]);
      }
      function w(e) {
        return e.replace(/left|right|bottom|top/g, (e) => d[e]);
      }
      function E(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function C(e, t, n) {
        let r,
          { reference: o, floating: a } = e,
          i = b(t),
          l = g(b(t)),
          u = h(l),
          c = m(t),
          s = "y" === i,
          d = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          p = o[u] / 2 - a[u] / 2;
        switch (c) {
          case "top":
            r = { x: d, y: o.y - a.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - a.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (v(t)) {
          case "start":
            r[l] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[l] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let R = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = n,
          l = a.filter(Boolean),
          u = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          c = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: d } = C(c, r, u),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: a, fn: v } = l[n],
            {
              x: g,
              y: h,
              data: b,
              reset: y,
            } = await v({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (s = null != g ? g : s),
            (d = null != h ? h : d),
            (p = { ...p, [a]: { ...p[a], ...b } }),
            y &&
              m <= 50 &&
              (m++,
              "object" == typeof y &&
                (y.placement && (f = y.placement),
                y.rects &&
                  (c =
                    !0 === y.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : y.rects),
                ({ x: s, y: d } = C(c, f, u))),
              (n = -1));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function M(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: a, rects: i, elements: l, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: m = 0,
          } = p(t, e),
          v = E(m),
          g = l[f ? ("floating" === d ? "reference" : "floating") : d],
          h = x(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          b =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          y = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          w = ((await (null == a.isElement ? void 0 : a.isElement(y))) &&
            (await (null == a.getScale ? void 0 : a.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          C = x(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: b,
                  offsetParent: y,
                  strategy: u,
                })
              : b
          );
        return {
          top: (h.top - C.top + v.top) / w.y,
          bottom: (C.bottom - h.bottom + v.bottom) / w.y,
          left: (h.left - C.left + v.left) / w.x,
          right: (C.right - h.right + v.right) / w.x,
        };
      }
      function _(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function T(e) {
        return a.some((t) => e[t] >= 0);
      }
      async function P(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = m(n),
          l = v(n),
          u = "y" === b(n),
          c = ["left", "top"].includes(i) ? -1 : 1,
          s = a && u ? -1 : 1,
          d = p(t, e),
          {
            mainAxis: f,
            crossAxis: g,
            alignmentAxis: h,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          l && "number" == typeof h && (g = "end" === l ? -1 * h : h),
          u ? { x: g * s, y: f * c } : { x: f * c, y: g * s }
        );
      }
      function k() {
        return "undefined" != typeof window;
      }
      function S(e) {
        return A(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function O(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function D(e) {
        var t;
        return null ==
          (t = (A(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function A(e) {
        return !!k() && (e instanceof Node || e instanceof O(e).Node);
      }
      function I(e) {
        return !!k() && (e instanceof Element || e instanceof O(e).Element);
      }
      function L(e) {
        return (
          !!k() && (e instanceof HTMLElement || e instanceof O(e).HTMLElement)
        );
      }
      function N(e) {
        return (
          !!k() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof O(e).ShadowRoot)
        );
      }
      function F(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = z(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function W(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function V(e) {
        let t = Z(),
          n = I(e) ? z(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function Z() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function j(e) {
        return ["html", "body", "#document"].includes(S(e));
      }
      function z(e) {
        return O(e).getComputedStyle(e);
      }
      function K(e) {
        return I(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function U(e) {
        if ("html" === S(e)) return e;
        let t = e.assignedSlot || e.parentNode || (N(e) && e.host) || D(e);
        return N(t) ? t.host : t;
      }
      function $(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = U(t);
            return j(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : L(n) && F(n)
              ? n
              : e(n);
          })(e),
          a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = O(o);
        if (a) {
          let e = B(i);
          return t.concat(
            i,
            i.visualViewport || [],
            F(o) ? o : [],
            e && n ? $(e) : []
          );
        }
        return t.concat(o, $(o, [], n));
      }
      function B(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function H(e) {
        let t = z(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = L(e),
          a = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          l = u(n) !== a || u(r) !== i;
        return l && ((n = a), (r = i)), { width: n, height: r, $: l };
      }
      function G(e) {
        return I(e) ? e : e.contextElement;
      }
      function Y(e) {
        let t = G(e);
        if (!L(t)) return s(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: a } = H(t),
          i = (a ? u(n.width) : n.width) / r,
          l = (a ? u(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: i, y: l }
        );
      }
      let q = s(0);
      function X(e) {
        let t = O(e);
        return Z() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : q;
      }
      function Q(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          i = G(e),
          l = s(1);
        t && (r ? I(r) && (l = Y(r)) : (l = Y(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === O(i)) && o)
            ? X(i)
            : s(0),
          c = (a.left + u.x) / l.x,
          d = (a.top + u.y) / l.y,
          f = a.width / l.x,
          p = a.height / l.y;
        if (i) {
          let e = O(i),
            t = r && I(r) ? O(r) : r,
            n = e,
            o = B(n);
          for (; o && r && t !== n; ) {
            let e = Y(o),
              t = o.getBoundingClientRect(),
              r = z(o),
              a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (p *= e.y),
              (c += a),
              (d += i),
              (o = B((n = O(o))));
          }
        }
        return x({ width: f, height: p, x: c, y: d });
      }
      function J(e, t) {
        let n = K(e).scrollLeft;
        return t ? t.left + n : Q(D(e)).left + n;
      }
      function ee(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = O(e),
              r = D(e),
              o = n.visualViewport,
              a = r.clientWidth,
              i = r.clientHeight,
              l = 0,
              u = 0;
            if (o) {
              (a = o.width), (i = o.height);
              let e = Z();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = D(e),
              n = K(e),
              r = e.ownerDocument.body,
              o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              a = l(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              i = -n.scrollLeft + J(e),
              u = -n.scrollTop;
            return (
              "rtl" === z(r).direction &&
                (i += l(t.clientWidth, r.clientWidth) - o),
              { width: o, height: a, x: i, y: u }
            );
          })(D(e));
        else if (I(t))
          r = (function (e, t) {
            let n = Q(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              a = L(e) ? Y(e) : s(1),
              i = e.clientWidth * a.x;
            return {
              width: i,
              height: e.clientHeight * a.y,
              x: o * a.x,
              y: r * a.y,
            };
          })(t, n);
        else {
          let n = X(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return x(r);
      }
      function et(e) {
        return "static" === z(e).position;
      }
      function en(e, t) {
        if (!L(e) || "fixed" === z(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return D(e) === n && (n = n.ownerDocument.body), n;
      }
      function er(e, t) {
        let n = O(e);
        if (W(e)) return n;
        if (!L(e)) {
          let t = U(e);
          for (; t && !j(t); ) {
            if (I(t) && !et(t)) return t;
            t = U(t);
          }
          return n;
        }
        let r = en(e, t);
        for (; r && ["table", "td", "th"].includes(S(r)) && et(r); )
          r = en(r, t);
        return r && j(r) && et(r) && !V(r)
          ? n
          : r ||
              (function (e) {
                let t = U(e);
                for (; L(t) && !j(t); ) {
                  if (V(t)) return t;
                  if (W(t)) break;
                  t = U(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eo = async function (e) {
          let t = this.getOffsetParent || er,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = L(t),
                o = D(t),
                a = "fixed" === n,
                i = Q(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                u = s(0);
              if (r || (!r && !a)) {
                if ((("body" !== S(t) || F(o)) && (l = K(t)), r)) {
                  let e = Q(t, !0, a, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = J(o));
              }
              let c = 0,
                d = 0;
              if (o && !r && !a) {
                let e = o.getBoundingClientRect();
                (d = e.top + l.scrollTop),
                  (c = e.left + l.scrollLeft - J(o, e));
              }
              return {
                x: i.left + l.scrollLeft - u.x - c,
                y: i.top + l.scrollTop - u.y - d,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ea = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              a = "fixed" === o,
              i = D(r),
              l = !!t && W(t.floating);
            if (r === i || (l && a)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = s(1),
              d = s(0),
              f = L(r);
            if (
              (f || (!f && !a)) &&
              (("body" !== S(r) || F(i)) && (u = K(r)), L(r))
            ) {
              let e = Q(r);
              (c = Y(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + d.x,
              y: n.y * c.y - u.scrollTop * c.y + d.y,
            };
          },
          getDocumentElement: D,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              a = [
                ...("clippingAncestors" === n
                  ? W(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = $(e, [], !1).filter(
                            (e) => I(e) && "body" !== S(e)
                          ),
                          o = null,
                          a = "fixed" === z(e).position,
                          i = a ? U(e) : e;
                        for (; I(i) && !j(i); ) {
                          let t = z(i),
                            n = V(i);
                          n || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (F(i) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = U(t);
                                      return (
                                        !(r === n || !I(r) || j(r)) &&
                                        ("fixed" === z(r).position || e(r, n))
                                      );
                                    })(e, i))
                            )
                              ? (r = r.filter((e) => e !== i))
                              : (o = t),
                            (i = U(i));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              u = a[0],
              c = a.reduce((e, n) => {
                let r = ee(t, n, o);
                return (
                  (e.top = l(r.top, e.top)),
                  (e.right = i(r.right, e.right)),
                  (e.bottom = i(r.bottom, e.bottom)),
                  (e.left = l(r.left, e.left)),
                  e
                );
              }, ee(t, u, o));
            return {
              width: c.right - c.left,
              height: c.bottom - c.top,
              x: c.left,
              y: c.top,
            };
          },
          getOffsetParent: er,
          getElementRects: eo,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = H(e);
            return { width: t, height: n };
          },
          getScale: Y,
          isElement: I,
          isRTL: function (e) {
            return "rtl" === z(e).direction;
          },
        },
        ei = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: a,
                platform: u,
                elements: c,
                middlewareData: s,
              } = t,
              { element: d, padding: f = 0 } = p(e, t) || {};
            if (null == d) return {};
            let m = E(f),
              y = { x: n, y: r },
              w = g(b(o)),
              x = h(w),
              C = await u.getDimensions(d),
              R = "y" === w,
              M = R ? "clientHeight" : "clientWidth",
              _ = a.reference[x] + a.reference[w] - y[w] - a.floating[x],
              T = y[w] - a.reference[w],
              P = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(d)),
              k = P ? P[M] : 0;
            (k && (await (null == u.isElement ? void 0 : u.isElement(P)))) ||
              (k = c.floating[M] || a.floating[x]);
            let S = k / 2 - C[x] / 2 - 1,
              O = i(m[R ? "top" : "left"], S),
              D = i(m[R ? "bottom" : "right"], S),
              A = k - C[x] - D,
              I = k / 2 - C[x] / 2 + (_ / 2 - T / 2),
              L = l(O, i(I, A)),
              N =
                !s.arrow &&
                null != v(o) &&
                I !== L &&
                a.reference[x] / 2 - (I < O ? O : D) - C[x] / 2 < 0,
              F = N ? (I < O ? I - O : I - A) : 0;
            return {
              [w]: y[w] + F,
              data: {
                [w]: L,
                centerOffset: I - L - F,
                ...(N && { alignmentOffset: F }),
              },
              reset: N,
            };
          },
        }),
        el = (e, t, n) => {
          let r = new Map(),
            o = { platform: ea, ...n },
            a = { ...o.platform, _c: r };
          return R(e, t, { ...o, platform: a });
        };
      var eu = n(54887),
        ec = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function es(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!es(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !es(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ed(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ef(e, t) {
        let n = ed(e);
        return Math.round(t * n) / n;
      }
      function ep(e) {
        let t = o.useRef(e);
        return (
          ec(() => {
            t.current = e;
          }),
          t
        );
      }
      let em = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? ei({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? ei({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        ev = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: a, placement: i, middlewareData: l } = e,
                  u = await P(e, n);
                return i === (null == (t = l.offset) ? void 0 : t.placement) &&
                  null != (r = l.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: a + u.y, data: { ...u, placement: i } };
              },
            }),
            options: [e, t],
          };
        },
        eg = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: a = !0,
                    crossAxis: u = !1,
                    limiter: c = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = p(n, e),
                  d = { x: t, y: r },
                  f = await M(e, s),
                  v = b(m(o)),
                  h = g(v),
                  y = d[h],
                  w = d[v];
                if (a) {
                  let e = "y" === h ? "top" : "left",
                    t = "y" === h ? "bottom" : "right",
                    n = y + f[e],
                    r = y - f[t];
                  y = l(n, i(y, r));
                }
                if (u) {
                  let e = "y" === v ? "top" : "left",
                    t = "y" === v ? "bottom" : "right",
                    n = w + f[e],
                    r = w - f[t];
                  w = l(n, i(w, r));
                }
                let E = c.fn({ ...e, [h]: y, [v]: w });
                return {
                  ...E,
                  data: { x: E.x - t, y: E.y - r, enabled: { [h]: a, [v]: u } },
                };
              },
            }),
            options: [e, t],
          };
        },
        eh = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: a,
                    middlewareData: i,
                  } = e,
                  {
                    offset: l = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0,
                  } = p(n, e),
                  s = { x: t, y: r },
                  d = b(o),
                  f = g(d),
                  v = s[f],
                  h = s[d],
                  y = p(l, e),
                  w =
                    "number" == typeof y
                      ? { mainAxis: y, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...y };
                if (u) {
                  let e = "y" === f ? "height" : "width",
                    t = a.reference[f] - a.floating[e] + w.mainAxis,
                    n = a.reference[f] + a.reference[e] - w.mainAxis;
                  v < t ? (v = t) : v > n && (v = n);
                }
                if (c) {
                  var E, x;
                  let e = "y" === f ? "width" : "height",
                    t = ["top", "left"].includes(m(o)),
                    n =
                      a.reference[d] -
                      a.floating[e] +
                      ((t && (null == (E = i.offset) ? void 0 : E[d])) || 0) +
                      (t ? 0 : w.crossAxis),
                    r =
                      a.reference[d] +
                      a.reference[e] +
                      (t ? 0 : (null == (x = i.offset) ? void 0 : x[d]) || 0) -
                      (t ? w.crossAxis : 0);
                  h < n ? (h = n) : h > r && (h = r);
                }
                return { [f]: v, [d]: h };
              },
            }),
            options: [e, t],
          };
        },
        eb = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, a, i;
                let {
                    placement: l,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: s,
                    platform: d,
                    elements: f,
                  } = e,
                  {
                    mainAxis: E = !0,
                    crossAxis: x = !0,
                    fallbackPlacements: C,
                    fallbackStrategy: R = "bestFit",
                    fallbackAxisSideDirection: _ = "none",
                    flipAlignment: T = !0,
                    ...P
                  } = p(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let k = m(l),
                  S = b(s),
                  O = m(s) === s,
                  D = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                  A =
                    C ||
                    (O || !T
                      ? [w(s)]
                      : (function (e) {
                          let t = w(e);
                          return [y(e), t, y(t)];
                        })(s)),
                  I = "none" !== _;
                !C &&
                  I &&
                  A.push(
                    ...(function (e, t, n, r) {
                      let o = v(e),
                        a = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(m(e), "start" === n, r);
                      return (
                        o &&
                          ((a = a.map((e) => e + "-" + o)),
                          t && (a = a.concat(a.map(y)))),
                        a
                      );
                    })(s, T, _, D)
                  );
                let L = [s, ...A],
                  N = await M(e, P),
                  F = [],
                  W = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((E && F.push(N[k]), x)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = v(e),
                      o = g(b(e)),
                      a = h(o),
                      i =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[a] > t.floating[a] && (i = w(i)), [i, w(i)]
                    );
                  })(l, c, D);
                  F.push(N[e[0]], N[e[1]]);
                }
                if (
                  ((W = [...W, { placement: l, overflows: F }]),
                  !F.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = L[e];
                  if (t)
                    return {
                      data: { index: e, overflows: W },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (a = W.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : a.placement;
                  if (!n)
                    switch (R) {
                      case "bestFit": {
                        let e =
                          null ==
                          (i = W.filter((e) => {
                            if (I) {
                              let t = b(e.placement);
                              return t === S || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : i[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = s;
                    }
                  if (l !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        ey = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                var t, r;
                let o, a;
                let { placement: u, rects: c, platform: s, elements: d } = e,
                  { apply: f = () => {}, ...g } = p(n, e),
                  h = await M(e, g),
                  y = m(u),
                  w = v(u),
                  E = "y" === b(u),
                  { width: x, height: C } = c.floating;
                "top" === y || "bottom" === y
                  ? ((o = y),
                    (a =
                      w ===
                      ((await (null == s.isRTL ? void 0 : s.isRTL(d.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((a = y), (o = "end" === w ? "top" : "bottom"));
                let R = C - h.top - h.bottom,
                  _ = x - h.left - h.right,
                  T = i(C - h[o], R),
                  P = i(x - h[a], _),
                  k = !e.middlewareData.shift,
                  S = T,
                  O = P;
                if (
                  (null != (t = e.middlewareData.shift) &&
                    t.enabled.x &&
                    (O = _),
                  null != (r = e.middlewareData.shift) &&
                    r.enabled.y &&
                    (S = R),
                  k && !w)
                ) {
                  let e = l(h.left, 0),
                    t = l(h.right, 0),
                    n = l(h.top, 0),
                    r = l(h.bottom, 0);
                  E
                    ? (O =
                        x -
                        2 * (0 !== e || 0 !== t ? e + t : l(h.left, h.right)))
                    : (S =
                        C -
                        2 * (0 !== n || 0 !== r ? n + r : l(h.top, h.bottom)));
                }
                await f({ ...e, availableWidth: O, availableHeight: S });
                let D = await s.getDimensions(d.floating);
                return x !== D.width || C !== D.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        ew = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = p(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = _(
                      await M(e, { ...o, elementContext: "reference" }),
                      t.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: T(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = _(
                      await M(e, { ...o, altBoundary: !0 }),
                      t.floating
                    );
                    return { data: { escapedOffsets: n, escaped: T(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        eE = (e, t) => ({ ...em(e), options: [e, t] });
      var ex = n(66840);
      let eC = (0, o.forwardRef)((e, t) => {
        let { children: n, width: a = 10, height: i = 5, ...l } = e;
        return (0, o.createElement)(
          ex.WV.svg,
          (0, r.Z)({}, l, {
            ref: t,
            width: a,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var eR = n(98575),
        eM = n(73966),
        e_ = n(26606),
        eT = n(61188),
        eP = n(90420);
      let ek = "Popper",
        [eS, eO] = (0, eM.b)(ek),
        [eD, eA] = eS(ek),
        eI = (0, o.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: a, ...i } = e,
            l = eA("PopperAnchor", n),
            u = (0, o.useRef)(null),
            c = (0, eR.e)(t, u);
          return (
            (0, o.useEffect)(() => {
              l.onAnchorChange((null == a ? void 0 : a.current) || u.current);
            }),
            a
              ? null
              : (0, o.createElement)(ex.WV.div, (0, r.Z)({}, i, { ref: c }))
          );
        }),
        eL = "PopperContent",
        [eN, eF] = eS(eL),
        eW = (0, o.forwardRef)((e, t) => {
          var n, a, u, s, d, f, p, m;
          let {
              __scopePopper: v,
              side: g = "bottom",
              sideOffset: h = 0,
              align: b = "center",
              alignOffset: y = 0,
              arrowPadding: w = 0,
              avoidCollisions: E = !0,
              collisionBoundary: x = [],
              collisionPadding: C = 0,
              sticky: R = "partial",
              hideWhenDetached: M = !1,
              updatePositionStrategy: _ = "optimized",
              onPlaced: T,
              ...P
            } = e,
            k = eA(eL, v),
            [S, O] = (0, o.useState)(null),
            A = (0, eR.e)(t, (e) => O(e)),
            [I, L] = (0, o.useState)(null),
            N = (0, eP.t)(I),
            F =
              null !== (n = null == N ? void 0 : N.width) && void 0 !== n
                ? n
                : 0,
            W =
              null !== (a = null == N ? void 0 : N.height) && void 0 !== a
                ? a
                : 0,
            V =
              "number" == typeof C
                ? C
                : { top: 0, right: 0, bottom: 0, left: 0, ...C },
            Z = Array.isArray(x) ? x : [x],
            j = Z.length > 0,
            z = { padding: V, boundary: Z.filter(ej), altBoundary: j },
            {
              refs: K,
              floatingStyles: U,
              placement: B,
              isPositioned: H,
              middlewareData: Y,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: a,
                  elements: { reference: i, floating: l } = {},
                  transform: u = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [d, f] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = o.useState(r);
              es(p, r) || m(r);
              let [v, g] = o.useState(null),
                [h, b] = o.useState(null),
                y = o.useCallback((e) => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                w = o.useCallback((e) => {
                  e !== R.current && ((R.current = e), b(e));
                }, []),
                E = i || v,
                x = l || h,
                C = o.useRef(null),
                R = o.useRef(null),
                M = o.useRef(d),
                _ = null != c,
                T = ep(c),
                P = ep(a),
                k = ep(s),
                S = o.useCallback(() => {
                  if (!C.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  P.current && (e.platform = P.current),
                    el(C.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== k.current };
                      O.current &&
                        !es(M.current, t) &&
                        ((M.current = t),
                        eu.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, n, P, k]);
              ec(() => {
                !1 === s &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let O = o.useRef(!1);
              ec(
                () => (
                  (O.current = !0),
                  () => {
                    O.current = !1;
                  }
                ),
                []
              ),
                ec(() => {
                  if ((E && (C.current = E), x && (R.current = x), E && x)) {
                    if (T.current) return T.current(E, x, S);
                    S();
                  }
                }, [E, x, S, T, _]);
              let D = o.useMemo(
                  () => ({
                    reference: C,
                    floating: R,
                    setReference: y,
                    setFloating: w,
                  }),
                  [y, w]
                ),
                A = o.useMemo(() => ({ reference: E, floating: x }), [E, x]),
                I = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!A.floating) return e;
                  let t = ef(A.floating, d.x),
                    r = ef(A.floating, d.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ed(A.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, A.floating, d.x, d.y]);
              return o.useMemo(
                () => ({
                  ...d,
                  update: S,
                  refs: D,
                  elements: A,
                  floatingStyles: I,
                }),
                [d, S, D, A, I]
              );
            })({
              strategy: "fixed",
              placement: g + ("center" !== b ? "-" + b : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: a = !0,
                      ancestorResize: u = !0,
                      elementResize: s = "function" == typeof ResizeObserver,
                      layoutShift: d = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: f = !1,
                    } = r,
                    p = G(e),
                    m = a || u ? [...(p ? $(p) : []), ...$(t)] : [];
                  m.forEach((e) => {
                    a && e.addEventListener("scroll", n, { passive: !0 }),
                      u && e.addEventListener("resize", n);
                  });
                  let v =
                      p && d
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = D(e);
                            function a() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function u(s, d) {
                                void 0 === s && (s = !1),
                                  void 0 === d && (d = 1),
                                  a();
                                let {
                                  left: f,
                                  top: p,
                                  width: m,
                                  height: v,
                                } = e.getBoundingClientRect();
                                if ((s || t(), !m || !v)) return;
                                let g = c(p),
                                  h = c(o.clientWidth - (f + m)),
                                  b = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -h +
                                      "px " +
                                      -c(o.clientHeight - (p + v)) +
                                      "px " +
                                      -c(f) +
                                      "px",
                                    threshold: l(0, i(1, d)) || 1,
                                  },
                                  y = !0;
                                function w(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== d) {
                                    if (!y) return u();
                                    t
                                      ? u(!1, t)
                                      : (n = setTimeout(() => {
                                          u(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  y = !1;
                                }
                                try {
                                  r = new IntersectionObserver(w, {
                                    ...b,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(w, b);
                                }
                                r.observe(e);
                              })(!0),
                              a
                            );
                          })(p, n)
                        : null,
                    g = -1,
                    h = null;
                  s &&
                    ((h = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        h &&
                        (h.unobserve(t),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          var e;
                          null == (e = h) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !f && h.observe(p),
                    h.observe(t));
                  let b = f ? Q(e) : null;
                  return (
                    f &&
                      (function t() {
                        let r = Q(e);
                        b &&
                          (r.x !== b.x ||
                            r.y !== b.y ||
                            r.width !== b.width ||
                            r.height !== b.height) &&
                          n(),
                          (b = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      m.forEach((e) => {
                        a && e.removeEventListener("scroll", n),
                          u && e.removeEventListener("resize", n);
                      }),
                        null == v || v(),
                        null == (e = h) || e.disconnect(),
                        (h = null),
                        f && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === _ }),
              elements: { reference: k.anchor },
              middleware: [
                ev({ mainAxis: h + W, alignmentAxis: y }),
                E &&
                  eg({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === R ? eh() : void 0,
                    ...z,
                  }),
                E && eb({ ...z }),
                ey({
                  ...z,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: a } = t.reference,
                      i = e.floating.style;
                    i.setProperty("--radix-popper-available-width", `${n}px`),
                      i.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      i.setProperty("--radix-popper-anchor-width", `${o}px`),
                      i.setProperty("--radix-popper-anchor-height", `${a}px`);
                  },
                }),
                I && eE({ element: I, padding: w }),
                ez({ arrowWidth: F, arrowHeight: W }),
                M && ew({ strategy: "referenceHidden", ...z }),
              ],
            }),
            [q, X] = eK(B),
            J = (0, e_.W)(T);
          (0, eT.b)(() => {
            H && (null == J || J());
          }, [H, J]);
          let ee = null === (u = Y.arrow) || void 0 === u ? void 0 : u.x,
            et = null === (s = Y.arrow) || void 0 === s ? void 0 : s.y,
            en =
              (null === (d = Y.arrow) || void 0 === d
                ? void 0
                : d.centerOffset) !== 0,
            [er, eo] = (0, o.useState)();
          return (
            (0, eT.b)(() => {
              S && eo(window.getComputedStyle(S).zIndex);
            }, [S]),
            (0, o.createElement)(
              "div",
              {
                ref: K.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...U,
                  transform: H ? U.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: er,
                  "--radix-popper-transform-origin": [
                    null === (f = Y.transformOrigin) || void 0 === f
                      ? void 0
                      : f.x,
                    null === (p = Y.transformOrigin) || void 0 === p
                      ? void 0
                      : p.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, o.createElement)(
                eN,
                {
                  scope: v,
                  placedSide: q,
                  onArrowChange: L,
                  arrowX: ee,
                  arrowY: et,
                  shouldHideArrow: en,
                },
                (0, o.createElement)(
                  ex.WV.div,
                  (0, r.Z)({ "data-side": q, "data-align": X }, P, {
                    ref: A,
                    style: {
                      ...P.style,
                      animation: H ? void 0 : "none",
                      opacity:
                        null !== (m = Y.hide) &&
                        void 0 !== m &&
                        m.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        eV = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eZ = (0, o.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...a } = e,
            i = eF("PopperArrow", n),
            l = eV[i.placedSide];
          return (0,
          o.createElement)("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 } }, (0, o.createElement)(eC, (0, r.Z)({}, a, { ref: t, style: { ...a.style, display: "block" } })));
        });
      function ej(e) {
        return null !== e;
      }
      let ez = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, a, i;
          let { placement: l, rects: u, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, m] = eK(l),
            v = { start: "0%", center: "50%", end: "100%" }[m],
            g =
              (null !==
                (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              d / 2,
            h =
              (null !==
                (a = null === (i = c.arrow) || void 0 === i ? void 0 : i.y) &&
              void 0 !== a
                ? a
                : 0) +
              f / 2,
            b = "",
            y = "";
          return (
            "bottom" === p
              ? ((b = s ? v : `${g}px`), (y = `${-f}px`))
              : "top" === p
              ? ((b = s ? v : `${g}px`), (y = `${u.floating.height + f}px`))
              : "right" === p
              ? ((b = `${-f}px`), (y = s ? v : `${h}px`))
              : "left" === p &&
                ((b = `${u.floating.width + f}px`), (y = s ? v : `${h}px`)),
            { data: { x: b, y: y } }
          );
        },
      });
      function eK(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let eU = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, a] = (0, o.useState)(null);
          return (0, o.createElement)(
            eD,
            { scope: t, anchor: r, onAnchorChange: a },
            n
          );
        },
        e$ = eI,
        eB = eW,
        eH = eZ;
    },
    83832: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(54887),
        i = n(66840);
      let l = (0, o.forwardRef)((e, t) => {
        var n;
        let {
          container: l = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...u
        } = e;
        return l
          ? a.createPortal(
              (0, o.createElement)(i.WV.div, (0, r.Z)({}, u, { ref: t })),
              l
            )
          : null;
      });
    },
    71599: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(54887),
        a = n(98575),
        i = n(61188);
      let l = (e) => {
        let { present: t, children: n } = e,
          l = (function (e) {
            var t, n;
            let [a, l] = (0, r.useState)(),
              c = (0, r.useRef)({}),
              s = (0, r.useRef)(e),
              d = (0, r.useRef)("none"),
              [f, p] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, r.useReducer)((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              (0, r.useEffect)(() => {
                let e = u(c.current);
                d.current = "mounted" === f ? e : "none";
              }, [f]),
              (0, i.b)(() => {
                let t = c.current,
                  n = s.current;
                if (n !== e) {
                  let r = d.current,
                    o = u(t);
                  e
                    ? p("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? p("UNMOUNT")
                    : n && r !== o
                    ? p("ANIMATION_OUT")
                    : p("UNMOUNT"),
                    (s.current = e);
                }
              }, [e, p]),
              (0, i.b)(() => {
                if (a) {
                  let e = (e) => {
                      let t = u(c.current).includes(e.animationName);
                      e.target === a &&
                        t &&
                        (0, o.flushSync)(() => p("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === a && (d.current = u(c.current));
                    };
                  return (
                    a.addEventListener("animationstart", t),
                    a.addEventListener("animationcancel", e),
                    a.addEventListener("animationend", e),
                    () => {
                      a.removeEventListener("animationstart", t),
                        a.removeEventListener("animationcancel", e),
                        a.removeEventListener("animationend", e);
                    }
                  );
                }
                p("ANIMATION_END");
              }, [a, p]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(f),
                ref: (0, r.useCallback)((e) => {
                  e && (c.current = getComputedStyle(e)), l(e);
                }, []),
              }
            );
          })(t),
          c =
            "function" == typeof n
              ? n({ present: l.isPresent })
              : r.Children.only(n),
          s = (0, a.e)(l.ref, c.ref);
        return "function" == typeof n || l.isPresent
          ? (0, r.cloneElement)(c, { ref: s })
          : null;
      };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    66840: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return l;
        },
        jH: function () {
          return u;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(54887),
        i = n(37053);
      let l = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = (0, o.forwardRef)((e, n) => {
          let { asChild: a, ...l } = e,
            u = a ? i.g7 : t;
          return (
            (0, o.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, o.createElement)(u, (0, r.Z)({}, l, { ref: n }))
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      function u(e, t) {
        e && (0, a.flushSync)(() => e.dispatchEvent(t));
      }
    },
    60610: function (e, t, n) {
      n.d(t, {
        fC: function () {
          return y;
        },
        z$: function () {
          return w;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(73966),
        i = n(66840);
      let l = "Progress",
        [u, c] = (0, a.b)(l),
        [s, d] = u(l),
        f = (0, o.forwardRef)((e, t) => {
          let {
              __scopeProgress: n,
              value: a,
              max: l,
              getValueLabel: u = m,
              ...c
            } = e,
            d = h(l) ? l : 100,
            f = b(a, d) ? a : null,
            p = g(f) ? u(f, d) : void 0;
          return (0, o.createElement)(
            s,
            { scope: n, value: f, max: d },
            (0, o.createElement)(
              i.WV.div,
              (0, r.Z)(
                {
                  "aria-valuemax": d,
                  "aria-valuemin": 0,
                  "aria-valuenow": g(f) ? f : void 0,
                  "aria-valuetext": p,
                  role: "progressbar",
                  "data-state": v(f, d),
                  "data-value": null != f ? f : void 0,
                  "data-max": d,
                },
                c,
                { ref: t }
              )
            )
          );
        });
      f.propTypes = {
        max(e, t, n) {
          let r = e[t],
            o = String(r);
          return r && !h(r)
            ? Error(
                `Invalid prop \`max\` of value \`${o}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
              )
            : null;
        },
        value(e, t, n) {
          let r = e[t],
            o = String(r),
            a = h(e.max) ? e.max : 100;
          return null == r || b(r, a)
            ? null
            : Error(`Invalid prop \`value\` of value \`${o}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`);
        },
      };
      let p = (0, o.forwardRef)((e, t) => {
        var n;
        let { __scopeProgress: a, ...l } = e,
          u = d("ProgressIndicator", a);
        return (0, o.createElement)(
          i.WV.div,
          (0, r.Z)(
            {
              "data-state": v(u.value, u.max),
              "data-value": null !== (n = u.value) && void 0 !== n ? n : void 0,
              "data-max": u.max,
            },
            l,
            { ref: t }
          )
        );
      });
      function m(e, t) {
        return `${Math.round((e / t) * 100)}%`;
      }
      function v(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading";
      }
      function g(e) {
        return "number" == typeof e;
      }
      function h(e) {
        return g(e) && !isNaN(e) && e > 0;
      }
      function b(e, t) {
        return g(e) && !isNaN(e) && e <= t && e >= 0;
      }
      let y = f,
        w = p;
    },
    42325: function (e, t, n) {
      n.d(t, {
        ck: function () {
          return N;
        },
        fC: function () {
          return L;
        },
        z$: function () {
          return F;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(98575),
        l = n(73966),
        u = n(66840),
        c = n(1353),
        s = n(80886),
        d = n(29114),
        f = n(90420),
        p = n(6718),
        m = n(71599);
      let v = "Radio",
        [g, h] = (0, l.b)(v),
        [b, y] = g(v),
        w = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRadio: n,
              name: l,
              checked: c = !1,
              required: s,
              disabled: d,
              value: f = "on",
              onCheck: p,
              ...m
            } = e,
            [v, g] = (0, o.useState)(null),
            h = (0, i.e)(t, (e) => g(e)),
            y = (0, o.useRef)(!1),
            w = !v || !!v.closest("form");
          return (0, o.createElement)(
            b,
            { scope: n, checked: c, disabled: d },
            (0, o.createElement)(
              u.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": c,
                  "data-state": C(c),
                  "data-disabled": d ? "" : void 0,
                  disabled: d,
                  value: f,
                },
                m,
                {
                  ref: h,
                  onClick: (0, a.M)(e.onClick, (e) => {
                    c || null == p || p(),
                      w &&
                        ((y.current = e.isPropagationStopped()),
                        y.current || e.stopPropagation());
                  }),
                }
              )
            ),
            w &&
              (0, o.createElement)(x, {
                control: v,
                bubbles: !y.current,
                name: l,
                value: f,
                checked: c,
                required: s,
                disabled: d,
                style: { transform: "translateX(-100%)" },
              })
          );
        }),
        E = (0, o.forwardRef)((e, t) => {
          let { __scopeRadio: n, forceMount: a, ...i } = e,
            l = y("RadioIndicator", n);
          return (0, o.createElement)(
            m.z,
            { present: a || l.checked },
            (0, o.createElement)(
              u.WV.span,
              (0, r.Z)(
                {
                  "data-state": C(l.checked),
                  "data-disabled": l.disabled ? "" : void 0,
                },
                i,
                { ref: t }
              )
            )
          );
        }),
        x = (e) => {
          let { control: t, checked: n, bubbles: a = !0, ...i } = e,
            l = (0, o.useRef)(null),
            u = (0, p.D)(n),
            c = (0, f.t)(t);
          return (
            (0, o.useEffect)(() => {
              let e = l.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "checked"
                ).set;
              if (u !== n && t) {
                let r = new Event("click", { bubbles: a });
                t.call(e, n), e.dispatchEvent(r);
              }
            }, [u, n, a]),
            (0, o.createElement)(
              "input",
              (0, r.Z)(
                { type: "radio", "aria-hidden": !0, defaultChecked: n },
                i,
                {
                  tabIndex: -1,
                  ref: l,
                  style: {
                    ...e.style,
                    ...c,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0,
                  },
                }
              )
            )
          );
        };
      function C(e) {
        return e ? "checked" : "unchecked";
      }
      let R = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        M = "RadioGroup",
        [_, T] = (0, l.b)(M, [c.Pc, h]),
        P = (0, c.Pc)(),
        k = h(),
        [S, O] = _(M),
        D = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRadioGroup: n,
              name: a,
              defaultValue: i,
              value: l,
              required: f = !1,
              disabled: p = !1,
              orientation: m,
              dir: v,
              loop: g = !0,
              onValueChange: h,
              ...b
            } = e,
            y = P(n),
            w = (0, d.gm)(v),
            [E, x] = (0, s.T)({ prop: l, defaultProp: i, onChange: h });
          return (0, o.createElement)(
            S,
            {
              scope: n,
              name: a,
              required: f,
              disabled: p,
              value: E,
              onValueChange: x,
            },
            (0, o.createElement)(
              c.fC,
              (0, r.Z)({ asChild: !0 }, y, { orientation: m, dir: w, loop: g }),
              (0, o.createElement)(
                u.WV.div,
                (0, r.Z)(
                  {
                    role: "radiogroup",
                    "aria-required": f,
                    "aria-orientation": m,
                    "data-disabled": p ? "" : void 0,
                    dir: w,
                  },
                  b,
                  { ref: t }
                )
              )
            )
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let { __scopeRadioGroup: n, disabled: l, ...u } = e,
            s = O("RadioGroupItem", n),
            d = s.disabled || l,
            f = P(n),
            p = k(n),
            m = (0, o.useRef)(null),
            v = (0, i.e)(t, m),
            g = s.value === u.value,
            h = (0, o.useRef)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = (e) => {
                  R.includes(e.key) && (h.current = !0);
                },
                t = () => (h.current = !1);
              return (
                document.addEventListener("keydown", e),
                document.addEventListener("keyup", t),
                () => {
                  document.removeEventListener("keydown", e),
                    document.removeEventListener("keyup", t);
                }
              );
            }, []),
            (0, o.createElement)(
              c.ck,
              (0, r.Z)({ asChild: !0 }, f, { focusable: !d, active: g }),
              (0, o.createElement)(
                w,
                (0, r.Z)(
                  { disabled: d, required: s.required, checked: g },
                  p,
                  u,
                  {
                    name: s.name,
                    ref: v,
                    onCheck: () => s.onValueChange(u.value),
                    onKeyDown: (0, a.M)((e) => {
                      "Enter" === e.key && e.preventDefault();
                    }),
                    onFocus: (0, a.M)(u.onFocus, () => {
                      var e;
                      h.current &&
                        (null === (e = m.current) || void 0 === e || e.click());
                    }),
                  }
                )
              )
            )
          );
        }),
        I = (0, o.forwardRef)((e, t) => {
          let { __scopeRadioGroup: n, ...a } = e,
            i = k(n);
          return (0, o.createElement)(E, (0, r.Z)({}, i, a, { ref: t }));
        }),
        L = D,
        N = A,
        F = I;
    },
    1353: function (e, t, n) {
      n.d(t, {
        Pc: function () {
          return E;
        },
        ck: function () {
          return S;
        },
        fC: function () {
          return k;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(67822),
        l = n(98575),
        u = n(73966),
        c = n(99255),
        s = n(66840),
        d = n(26606),
        f = n(80886),
        p = n(29114);
      let m = "rovingFocusGroup.onEntryFocus",
        v = { bubbles: !1, cancelable: !0 },
        g = "RovingFocusGroup",
        [h, b, y] = (0, i.B)(g),
        [w, E] = (0, u.b)(g, [y]),
        [x, C] = w(g),
        R = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            h.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, o.createElement)(
              h.Slot,
              { scope: e.__scopeRovingFocusGroup },
              (0, o.createElement)(M, (0, r.Z)({}, e, { ref: t }))
            )
          )
        ),
        M = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: i,
              loop: u = !1,
              dir: c,
              currentTabStopId: g,
              defaultCurrentTabStopId: h,
              onCurrentTabStopIdChange: y,
              onEntryFocus: w,
              ...E
            } = e,
            C = (0, o.useRef)(null),
            R = (0, l.e)(t, C),
            M = (0, p.gm)(c),
            [_ = null, T] = (0, f.T)({ prop: g, defaultProp: h, onChange: y }),
            [k, S] = (0, o.useState)(!1),
            O = (0, d.W)(w),
            D = b(n),
            A = (0, o.useRef)(!1),
            [I, L] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              let e = C.current;
              if (e)
                return (
                  e.addEventListener(m, O), () => e.removeEventListener(m, O)
                );
            }, [O]),
            (0, o.createElement)(
              x,
              {
                scope: n,
                orientation: i,
                dir: M,
                loop: u,
                currentTabStopId: _,
                onItemFocus: (0, o.useCallback)((e) => T(e), [T]),
                onItemShiftTab: (0, o.useCallback)(() => S(!0), []),
                onFocusableItemAdd: (0, o.useCallback)(
                  () => L((e) => e + 1),
                  []
                ),
                onFocusableItemRemove: (0, o.useCallback)(
                  () => L((e) => e - 1),
                  []
                ),
              },
              (0, o.createElement)(
                s.WV.div,
                (0, r.Z)(
                  { tabIndex: k || 0 === I ? -1 : 0, "data-orientation": i },
                  E,
                  {
                    ref: R,
                    style: { outline: "none", ...e.style },
                    onMouseDown: (0, a.M)(e.onMouseDown, () => {
                      A.current = !0;
                    }),
                    onFocus: (0, a.M)(e.onFocus, (e) => {
                      let t = !A.current;
                      if (e.target === e.currentTarget && t && !k) {
                        let t = new CustomEvent(m, v);
                        if (
                          (e.currentTarget.dispatchEvent(t),
                          !t.defaultPrevented)
                        ) {
                          let e = D().filter((e) => e.focusable);
                          P(
                            [
                              e.find((e) => e.active),
                              e.find((e) => e.id === _),
                              ...e,
                            ]
                              .filter(Boolean)
                              .map((e) => e.ref.current)
                          );
                        }
                      }
                      A.current = !1;
                    }),
                    onBlur: (0, a.M)(e.onBlur, () => S(!1)),
                  }
                )
              )
            )
          );
        }),
        _ = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: i = !0,
              active: l = !1,
              tabStopId: u,
              ...d
            } = e,
            f = (0, c.M)(),
            p = u || f,
            m = C("RovingFocusGroupItem", n),
            v = m.currentTabStopId === p,
            g = b(n),
            { onFocusableItemAdd: y, onFocusableItemRemove: w } = m;
          return (
            (0, o.useEffect)(() => {
              if (i) return y(), () => w();
            }, [i, y, w]),
            (0, o.createElement)(
              h.ItemSlot,
              { scope: n, id: p, focusable: i, active: l },
              (0, o.createElement)(
                s.WV.span,
                (0, r.Z)(
                  { tabIndex: v ? 0 : -1, "data-orientation": m.orientation },
                  d,
                  {
                    ref: t,
                    onMouseDown: (0, a.M)(e.onMouseDown, (e) => {
                      i ? m.onItemFocus(p) : e.preventDefault();
                    }),
                    onFocus: (0, a.M)(e.onFocus, () => m.onItemFocus(p)),
                    onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                      if ("Tab" === e.key && e.shiftKey) {
                        m.onItemShiftTab();
                        return;
                      }
                      if (e.target !== e.currentTarget) return;
                      let t = (function (e, t, n) {
                        var r;
                        let o =
                          ((r = e.key),
                          "rtl" !== n
                            ? r
                            : "ArrowLeft" === r
                            ? "ArrowRight"
                            : "ArrowRight" === r
                            ? "ArrowLeft"
                            : r);
                        if (
                          !(
                            "vertical" === t &&
                            ["ArrowLeft", "ArrowRight"].includes(o)
                          ) &&
                          !(
                            "horizontal" === t &&
                            ["ArrowUp", "ArrowDown"].includes(o)
                          )
                        )
                          return T[o];
                      })(e, m.orientation, m.dir);
                      if (void 0 !== t) {
                        e.preventDefault();
                        let o = g()
                          .filter((e) => e.focusable)
                          .map((e) => e.ref.current);
                        if ("last" === t) o.reverse();
                        else if ("prev" === t || "next" === t) {
                          var n, r;
                          "prev" === t && o.reverse();
                          let a = o.indexOf(e.currentTarget);
                          o = m.loop
                            ? ((n = o),
                              (r = a + 1),
                              n.map((e, t) => n[(r + t) % n.length]))
                            : o.slice(a + 1);
                        }
                        setTimeout(() => P(o));
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        T = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last",
        };
      function P(e) {
        let t = document.activeElement;
        for (let n of e)
          if (n === t || (n.focus(), document.activeElement !== t)) return;
      }
      let k = R,
        S = _;
    },
    55156: function (e, t, n) {
      n.d(t, {
        f: function () {
          return s;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(66840);
      let i = "horizontal",
        l = ["horizontal", "vertical"],
        u = (0, o.forwardRef)((e, t) => {
          let { decorative: n, orientation: l = i, ...u } = e,
            s = c(l) ? l : i;
          return (0, o.createElement)(
            a.WV.div,
            (0, r.Z)(
              { "data-orientation": s },
              n
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === s ? s : void 0,
                    role: "separator",
                  },
              u,
              { ref: t }
            )
          );
        });
      function c(e) {
        return l.includes(e);
      }
      u.propTypes = {
        orientation(e, t, n) {
          let r = e[t],
            o = String(r);
          return r && !c(r)
            ? Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`)
            : null;
        },
      };
      let s = u;
    },
    37053: function (e, t, n) {
      n.d(t, {
        A4: function () {
          return u;
        },
        g7: function () {
          return i;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(98575);
      let i = (0, o.forwardRef)((e, t) => {
        let { children: n, ...a } = e,
          i = o.Children.toArray(n),
          u = i.find(c);
        if (u) {
          let e = u.props.children,
            n = i.map((t) =>
              t !== u
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            l,
            (0, r.Z)({}, a, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, o.createElement)(l, (0, r.Z)({}, a, { ref: t }), n);
      });
      i.displayName = "Slot";
      let l = (0, o.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, o.isValidElement)(n)
          ? (0, o.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    a = t[r];
                  /^on[A-Z]/.test(r)
                    ? o && a
                      ? (n[r] = (...e) => {
                          a(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : "style" === r
                    ? (n[r] = { ...o, ...a })
                    : "className" === r &&
                      (n[r] = [o, a].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: t ? (0, a.F)(t, n.ref) : n.ref,
            })
          : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
      });
      l.displayName = "SlotClone";
      let u = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function c(e) {
        return (0, o.isValidElement)(e) && e.type === u;
      }
    },
    20271: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return P;
        },
        aV: function () {
          return _;
        },
        fC: function () {
          return M;
        },
        xz: function () {
          return T;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(73966),
        l = n(1353),
        u = n(71599),
        c = n(66840),
        s = n(29114),
        d = n(80886),
        f = n(99255);
      let p = "Tabs",
        [m, v] = (0, i.b)(p, [l.Pc]),
        g = (0, l.Pc)(),
        [h, b] = m(p),
        y = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTabs: n,
              value: a,
              onValueChange: i,
              defaultValue: l,
              orientation: u = "horizontal",
              dir: p,
              activationMode: m = "automatic",
              ...v
            } = e,
            g = (0, s.gm)(p),
            [b, y] = (0, d.T)({ prop: a, onChange: i, defaultProp: l });
          return (0, o.createElement)(
            h,
            {
              scope: n,
              baseId: (0, f.M)(),
              value: b,
              onValueChange: y,
              orientation: u,
              dir: g,
              activationMode: m,
            },
            (0, o.createElement)(
              c.WV.div,
              (0, r.Z)({ dir: g, "data-orientation": u }, v, { ref: t })
            )
          );
        }),
        w = (0, o.forwardRef)((e, t) => {
          let { __scopeTabs: n, loop: a = !0, ...i } = e,
            u = b("TabsList", n),
            s = g(n);
          return (0, o.createElement)(
            l.fC,
            (0, r.Z)({ asChild: !0 }, s, {
              orientation: u.orientation,
              dir: u.dir,
              loop: a,
            }),
            (0, o.createElement)(
              c.WV.div,
              (0, r.Z)(
                { role: "tablist", "aria-orientation": u.orientation },
                i,
                { ref: t }
              )
            )
          );
        }),
        E = (0, o.forwardRef)((e, t) => {
          let { __scopeTabs: n, value: i, disabled: u = !1, ...s } = e,
            d = b("TabsTrigger", n),
            f = g(n),
            p = C(d.baseId, i),
            m = R(d.baseId, i),
            v = i === d.value;
          return (0, o.createElement)(
            l.ck,
            (0, r.Z)({ asChild: !0 }, f, { focusable: !u, active: v }),
            (0, o.createElement)(
              c.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": v,
                  "aria-controls": m,
                  "data-state": v ? "active" : "inactive",
                  "data-disabled": u ? "" : void 0,
                  disabled: u,
                  id: p,
                },
                s,
                {
                  ref: t,
                  onMouseDown: (0, a.M)(e.onMouseDown, (e) => {
                    u || 0 !== e.button || !1 !== e.ctrlKey
                      ? e.preventDefault()
                      : d.onValueChange(i);
                  }),
                  onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                    [" ", "Enter"].includes(e.key) && d.onValueChange(i);
                  }),
                  onFocus: (0, a.M)(e.onFocus, () => {
                    let e = "manual" !== d.activationMode;
                    v || u || !e || d.onValueChange(i);
                  }),
                }
              )
            )
          );
        }),
        x = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTabs: n,
              value: a,
              forceMount: i,
              children: l,
              ...s
            } = e,
            d = b("TabsContent", n),
            f = C(d.baseId, a),
            p = R(d.baseId, a),
            m = a === d.value,
            v = (0, o.useRef)(m);
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (v.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, o.createElement)(u.z, { present: i || m }, ({ present: n }) =>
              (0, o.createElement)(
                c.WV.div,
                (0, r.Z)(
                  {
                    "data-state": m ? "active" : "inactive",
                    "data-orientation": d.orientation,
                    role: "tabpanel",
                    "aria-labelledby": f,
                    hidden: !n,
                    id: p,
                    tabIndex: 0,
                  },
                  s,
                  {
                    ref: t,
                    style: {
                      ...e.style,
                      animationDuration: v.current ? "0s" : void 0,
                    },
                  }
                ),
                n && l
              )
            )
          );
        });
      function C(e, t) {
        return `${e}-trigger-${t}`;
      }
      function R(e, t) {
        return `${e}-content-${t}`;
      }
      let M = y,
        _ = w,
        T = E,
        P = x;
    },
    41915: function (e, t, n) {
      n.d(t, {
        Dx: function () {
          return Y;
        },
        aU: function () {
          return X;
        },
        dk: function () {
          return q;
        },
        fC: function () {
          return G;
        },
        l_: function () {
          return H;
        },
        x8: function () {
          return Q;
        },
        zt: function () {
          return B;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(54887),
        i = n(6741),
        l = n(98575),
        u = n(67822),
        c = n(73966),
        s = n(15278),
        d = n(83832),
        f = n(71599),
        p = n(66840),
        m = n(26606),
        v = n(80886),
        g = n(61188),
        h = n(95098);
      let b = "ToastProvider",
        [y, w, E] = (0, u.B)("Toast"),
        [x, C] = (0, c.b)("Toast", [E]),
        [R, M] = x(b),
        _ = (e) => {
          let {
              __scopeToast: t,
              label: n = "Notification",
              duration: r = 5e3,
              swipeDirection: a = "right",
              swipeThreshold: i = 50,
              children: l,
            } = e,
            [u, c] = (0, o.useState)(null),
            [s, d] = (0, o.useState)(0),
            f = (0, o.useRef)(!1),
            p = (0, o.useRef)(!1);
          return (0, o.createElement)(
            y.Provider,
            { scope: t },
            (0, o.createElement)(
              R,
              {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: a,
                swipeThreshold: i,
                toastCount: s,
                viewport: u,
                onViewportChange: c,
                onToastAdd: (0, o.useCallback)(() => d((e) => e + 1), []),
                onToastRemove: (0, o.useCallback)(() => d((e) => e - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: p,
              },
              l
            )
          );
        };
      _.propTypes = {
        label: (e) =>
          e.label && "string" == typeof e.label && !e.label.trim()
            ? Error(
                `Invalid prop \`label\` supplied to \`${b}\`. Expected non-empty \`string\`.`
              )
            : null,
      };
      let T = ["F8"],
        P = "toast.viewportPause",
        k = "toast.viewportResume",
        S = (0, o.forwardRef)((e, t) => {
          let {
              __scopeToast: n,
              hotkey: a = T,
              label: i = "Notifications ({hotkey})",
              ...u
            } = e,
            c = M("ToastViewport", n),
            d = w(n),
            f = (0, o.useRef)(null),
            m = (0, o.useRef)(null),
            v = (0, o.useRef)(null),
            g = (0, o.useRef)(null),
            h = (0, l.e)(t, g, c.onViewportChange),
            b = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            E = c.toastCount > 0;
          (0, o.useEffect)(() => {
            let e = (e) => {
              var t;
              a.every((t) => e[t] || e.code === t) &&
                (null === (t = g.current) || void 0 === t || t.focus());
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [a]),
            (0, o.useEffect)(() => {
              let e = f.current,
                t = g.current;
              if (E && e && t) {
                let n = () => {
                    if (!c.isClosePausedRef.current) {
                      let e = new CustomEvent(P);
                      t.dispatchEvent(e), (c.isClosePausedRef.current = !0);
                    }
                  },
                  r = () => {
                    if (c.isClosePausedRef.current) {
                      let e = new CustomEvent(k);
                      t.dispatchEvent(e), (c.isClosePausedRef.current = !1);
                    }
                  },
                  o = (t) => {
                    e.contains(t.relatedTarget) || r();
                  },
                  a = () => {
                    e.contains(document.activeElement) || r();
                  };
                return (
                  e.addEventListener("focusin", n),
                  e.addEventListener("focusout", o),
                  e.addEventListener("pointermove", n),
                  e.addEventListener("pointerleave", a),
                  window.addEventListener("blur", n),
                  window.addEventListener("focus", r),
                  () => {
                    e.removeEventListener("focusin", n),
                      e.removeEventListener("focusout", o),
                      e.removeEventListener("pointermove", n),
                      e.removeEventListener("pointerleave", a),
                      window.removeEventListener("blur", n),
                      window.removeEventListener("focus", r);
                  }
                );
              }
            }, [E, c.isClosePausedRef]);
          let x = (0, o.useCallback)(
            ({ tabbingDirection: e }) => {
              let t = d().map((t) => {
                let n = t.ref.current,
                  r = [
                    n,
                    ...(function (e) {
                      let t = [],
                        n = document.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          {
                            acceptNode: (e) => {
                              let t =
                                "INPUT" === e.tagName && "hidden" === e.type;
                              return e.disabled || e.hidden || t
                                ? NodeFilter.FILTER_SKIP
                                : e.tabIndex >= 0
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP;
                            },
                          }
                        );
                      for (; n.nextNode(); ) t.push(n.currentNode);
                      return t;
                    })(n),
                  ];
                return "forwards" === e ? r : r.reverse();
              });
              return ("forwards" === e ? t.reverse() : t).flat();
            },
            [d]
          );
          return (
            (0, o.useEffect)(() => {
              let e = g.current;
              if (e) {
                let t = (t) => {
                  let n = t.altKey || t.ctrlKey || t.metaKey;
                  if ("Tab" === t.key && !n) {
                    var r, o, a;
                    let n = document.activeElement,
                      i = t.shiftKey;
                    if (t.target === e && i) {
                      null === (r = m.current) || void 0 === r || r.focus();
                      return;
                    }
                    let l = x({
                        tabbingDirection: i ? "backwards" : "forwards",
                      }),
                      u = l.findIndex((e) => e === n);
                    $(l.slice(u + 1))
                      ? t.preventDefault()
                      : i
                      ? null === (o = m.current) || void 0 === o || o.focus()
                      : null === (a = v.current) || void 0 === a || a.focus();
                  }
                };
                return (
                  e.addEventListener("keydown", t),
                  () => e.removeEventListener("keydown", t)
                );
              }
            }, [d, x]),
            (0, o.createElement)(
              s.I0,
              {
                ref: f,
                role: "region",
                "aria-label": i.replace("{hotkey}", b),
                tabIndex: -1,
                style: { pointerEvents: E ? void 0 : "none" },
              },
              E &&
                (0, o.createElement)(O, {
                  ref: m,
                  onFocusFromOutsideViewport: () => {
                    $(x({ tabbingDirection: "forwards" }));
                  },
                }),
              (0, o.createElement)(
                y.Slot,
                { scope: n },
                (0, o.createElement)(
                  p.WV.ol,
                  (0, r.Z)({ tabIndex: -1 }, u, { ref: h })
                )
              ),
              E &&
                (0, o.createElement)(O, {
                  ref: v,
                  onFocusFromOutsideViewport: () => {
                    $(x({ tabbingDirection: "backwards" }));
                  },
                })
            )
          );
        }),
        O = (0, o.forwardRef)((e, t) => {
          let { __scopeToast: n, onFocusFromOutsideViewport: a, ...i } = e,
            l = M("ToastFocusProxy", n);
          return (0, o.createElement)(
            h.T,
            (0, r.Z)({ "aria-hidden": !0, tabIndex: 0 }, i, {
              ref: t,
              style: { position: "fixed" },
              onFocus: (e) => {
                var t;
                let n = e.relatedTarget;
                (null !== (t = l.viewport) && void 0 !== t && t.contains(n)) ||
                  a();
              },
            })
          );
        }),
        D = "Toast",
        A = (0, o.forwardRef)((e, t) => {
          let {
              forceMount: n,
              open: a,
              defaultOpen: l,
              onOpenChange: u,
              ...c
            } = e,
            [s = !0, d] = (0, v.T)({ prop: a, defaultProp: l, onChange: u });
          return (0, o.createElement)(
            f.z,
            { present: n || s },
            (0, o.createElement)(
              N,
              (0, r.Z)({ open: s }, c, {
                ref: t,
                onClose: () => d(!1),
                onPause: (0, m.W)(e.onPause),
                onResume: (0, m.W)(e.onResume),
                onSwipeStart: (0, i.M)(e.onSwipeStart, (e) => {
                  e.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: (0, i.M)(e.onSwipeMove, (e) => {
                  let { x: t, y: n } = e.detail.delta;
                  e.currentTarget.setAttribute("data-swipe", "move"),
                    e.currentTarget.style.setProperty(
                      "--radix-toast-swipe-move-x",
                      `${t}px`
                    ),
                    e.currentTarget.style.setProperty(
                      "--radix-toast-swipe-move-y",
                      `${n}px`
                    );
                }),
                onSwipeCancel: (0, i.M)(e.onSwipeCancel, (e) => {
                  e.currentTarget.setAttribute("data-swipe", "cancel"),
                    e.currentTarget.style.removeProperty(
                      "--radix-toast-swipe-move-x"
                    ),
                    e.currentTarget.style.removeProperty(
                      "--radix-toast-swipe-move-y"
                    ),
                    e.currentTarget.style.removeProperty(
                      "--radix-toast-swipe-end-x"
                    ),
                    e.currentTarget.style.removeProperty(
                      "--radix-toast-swipe-end-y"
                    );
                }),
                onSwipeEnd: (0, i.M)(e.onSwipeEnd, (e) => {
                  let { x: t, y: n } = e.detail.delta;
                  e.currentTarget.setAttribute("data-swipe", "end"),
                    e.currentTarget.style.removeProperty(
                      "--radix-toast-swipe-move-x"
                    ),
                    e.currentTarget.style.removeProperty(
                      "--radix-toast-swipe-move-y"
                    ),
                    e.currentTarget.style.setProperty(
                      "--radix-toast-swipe-end-x",
                      `${t}px`
                    ),
                    e.currentTarget.style.setProperty(
                      "--radix-toast-swipe-end-y",
                      `${n}px`
                    ),
                    d(!1);
                }),
              })
            )
          );
        }),
        [I, L] = x(D, { onClose() {} }),
        N = (0, o.forwardRef)((e, t) => {
          let {
              __scopeToast: n,
              type: u = "foreground",
              duration: c,
              open: d,
              onClose: f,
              onEscapeKeyDown: v,
              onPause: g,
              onResume: h,
              onSwipeStart: b,
              onSwipeMove: w,
              onSwipeCancel: E,
              onSwipeEnd: x,
              ...C
            } = e,
            R = M(D, n),
            [_, T] = (0, o.useState)(null),
            S = (0, l.e)(t, (e) => T(e)),
            O = (0, o.useRef)(null),
            A = (0, o.useRef)(null),
            L = c || R.duration,
            N = (0, o.useRef)(0),
            W = (0, o.useRef)(L),
            V = (0, o.useRef)(0),
            { onToastAdd: Z, onToastRemove: j } = R,
            z = (0, m.W)(() => {
              var e;
              (null == _ ? void 0 : _.contains(document.activeElement)) &&
                (null === (e = R.viewport) || void 0 === e || e.focus()),
                f();
            }),
            $ = (0, o.useCallback)(
              (e) => {
                e &&
                  e !== 1 / 0 &&
                  (window.clearTimeout(V.current),
                  (N.current = new Date().getTime()),
                  (V.current = window.setTimeout(z, e)));
              },
              [z]
            );
          (0, o.useEffect)(() => {
            let e = R.viewport;
            if (e) {
              let t = () => {
                  $(W.current), null == h || h();
                },
                n = () => {
                  let e = new Date().getTime() - N.current;
                  (W.current = W.current - e),
                    window.clearTimeout(V.current),
                    null == g || g();
                };
              return (
                e.addEventListener(P, n),
                e.addEventListener(k, t),
                () => {
                  e.removeEventListener(P, n), e.removeEventListener(k, t);
                }
              );
            }
          }, [R.viewport, L, g, h, $]),
            (0, o.useEffect)(() => {
              d && !R.isClosePausedRef.current && $(L);
            }, [d, L, R.isClosePausedRef, $]),
            (0, o.useEffect)(() => (Z(), () => j()), [Z, j]);
          let B = (0, o.useMemo)(
            () =>
              _
                ? (function e(t) {
                    let n = [];
                    return (
                      Array.from(t.childNodes).forEach((t) => {
                        if (
                          (t.nodeType === t.TEXT_NODE &&
                            t.textContent &&
                            n.push(t.textContent),
                          t.nodeType === t.ELEMENT_NODE)
                        ) {
                          let r =
                              t.ariaHidden ||
                              t.hidden ||
                              "none" === t.style.display,
                            o = "" === t.dataset.radixToastAnnounceExclude;
                          if (!r) {
                            if (o) {
                              let e = t.dataset.radixToastAnnounceAlt;
                              e && n.push(e);
                            } else n.push(...e(t));
                          }
                        }
                      }),
                      n
                    );
                  })(_)
                : null,
            [_]
          );
          return R.viewport
            ? (0, o.createElement)(
                o.Fragment,
                null,
                B &&
                  (0, o.createElement)(
                    F,
                    {
                      __scopeToast: n,
                      role: "status",
                      "aria-live": "foreground" === u ? "assertive" : "polite",
                      "aria-atomic": !0,
                    },
                    B
                  ),
                (0, o.createElement)(
                  I,
                  { scope: n, onClose: z },
                  (0, a.createPortal)(
                    (0, o.createElement)(
                      y.ItemSlot,
                      { scope: n },
                      (0, o.createElement)(
                        s.fC,
                        {
                          asChild: !0,
                          onEscapeKeyDown: (0, i.M)(v, () => {
                            R.isFocusedToastEscapeKeyDownRef.current || z(),
                              (R.isFocusedToastEscapeKeyDownRef.current = !1);
                          }),
                        },
                        (0, o.createElement)(
                          p.WV.li,
                          (0, r.Z)(
                            {
                              role: "status",
                              "aria-live": "off",
                              "aria-atomic": !0,
                              tabIndex: 0,
                              "data-state": d ? "open" : "closed",
                              "data-swipe-direction": R.swipeDirection,
                            },
                            C,
                            {
                              ref: S,
                              style: {
                                userSelect: "none",
                                touchAction: "none",
                                ...e.style,
                              },
                              onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                                "Escape" !== e.key ||
                                  (null == v || v(e.nativeEvent),
                                  e.nativeEvent.defaultPrevented ||
                                    ((R.isFocusedToastEscapeKeyDownRef.current =
                                      !0),
                                    z()));
                              }),
                              onPointerDown: (0, i.M)(e.onPointerDown, (e) => {
                                0 === e.button &&
                                  (O.current = { x: e.clientX, y: e.clientY });
                              }),
                              onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                                if (!O.current) return;
                                let t = e.clientX - O.current.x,
                                  n = e.clientY - O.current.y,
                                  r = !!A.current,
                                  o = ["left", "right"].includes(
                                    R.swipeDirection
                                  ),
                                  a = ["left", "up"].includes(R.swipeDirection)
                                    ? Math.min
                                    : Math.max,
                                  i = o ? a(0, t) : 0,
                                  l = o ? 0 : a(0, n),
                                  u = "touch" === e.pointerType ? 10 : 2,
                                  c = { x: i, y: l },
                                  s = { originalEvent: e, delta: c };
                                r
                                  ? ((A.current = c),
                                    K("toast.swipeMove", w, s, {
                                      discrete: !1,
                                    }))
                                  : U(c, R.swipeDirection, u)
                                  ? ((A.current = c),
                                    K("toast.swipeStart", b, s, {
                                      discrete: !1,
                                    }),
                                    e.target.setPointerCapture(e.pointerId))
                                  : (Math.abs(t) > u || Math.abs(n) > u) &&
                                    (O.current = null);
                              }),
                              onPointerUp: (0, i.M)(e.onPointerUp, (e) => {
                                let t = A.current,
                                  n = e.target;
                                if (
                                  (n.hasPointerCapture(e.pointerId) &&
                                    n.releasePointerCapture(e.pointerId),
                                  (A.current = null),
                                  (O.current = null),
                                  t)
                                ) {
                                  let n = e.currentTarget,
                                    r = { originalEvent: e, delta: t };
                                  U(t, R.swipeDirection, R.swipeThreshold)
                                    ? K("toast.swipeEnd", x, r, {
                                        discrete: !0,
                                      })
                                    : K("toast.swipeCancel", E, r, {
                                        discrete: !0,
                                      }),
                                    n.addEventListener(
                                      "click",
                                      (e) => e.preventDefault(),
                                      { once: !0 }
                                    );
                                }
                              }),
                            }
                          )
                        )
                      )
                    ),
                    R.viewport
                  )
                )
              )
            : null;
        });
      N.propTypes = {
        type: (e) =>
          e.type && !["foreground", "background"].includes(e.type)
            ? Error(
                `Invalid prop \`type\` supplied to \`${D}\`. Expected \`foreground | background\`.`
              )
            : null,
      };
      let F = (e) => {
          let { __scopeToast: t, children: n, ...r } = e,
            a = M(D, t),
            [i, l] = (0, o.useState)(!1),
            [u, c] = (0, o.useState)(!1);
          return (
            (function (e = () => {}) {
              let t = (0, m.W)(e);
              (0, g.b)(() => {
                let e = 0,
                  n = 0;
                return (
                  (e = window.requestAnimationFrame(
                    () => (n = window.requestAnimationFrame(t))
                  )),
                  () => {
                    window.cancelAnimationFrame(e),
                      window.cancelAnimationFrame(n);
                  }
                );
              }, [t]);
            })(() => l(!0)),
            (0, o.useEffect)(() => {
              let e = window.setTimeout(() => c(!0), 1e3);
              return () => window.clearTimeout(e);
            }, []),
            u
              ? null
              : (0, o.createElement)(
                  d.h,
                  { asChild: !0 },
                  (0, o.createElement)(
                    h.T,
                    r,
                    i && (0, o.createElement)(o.Fragment, null, a.label, " ", n)
                  )
                )
          );
        },
        W = (0, o.forwardRef)((e, t) => {
          let { __scopeToast: n, ...a } = e;
          return (0, o.createElement)(p.WV.div, (0, r.Z)({}, a, { ref: t }));
        }),
        V = (0, o.forwardRef)((e, t) => {
          let { __scopeToast: n, ...a } = e;
          return (0, o.createElement)(p.WV.div, (0, r.Z)({}, a, { ref: t }));
        }),
        Z = (0, o.forwardRef)((e, t) => {
          let { altText: n, ...a } = e;
          return n
            ? (0, o.createElement)(
                z,
                { altText: n, asChild: !0 },
                (0, o.createElement)(j, (0, r.Z)({}, a, { ref: t }))
              )
            : null;
        });
      Z.propTypes = {
        altText: (e) =>
          e.altText
            ? null
            : Error("Missing prop `altText` expected on `ToastAction`"),
      };
      let j = (0, o.forwardRef)((e, t) => {
          let { __scopeToast: n, ...a } = e,
            l = L("ToastClose", n);
          return (0, o.createElement)(
            z,
            { asChild: !0 },
            (0, o.createElement)(
              p.WV.button,
              (0, r.Z)({ type: "button" }, a, {
                ref: t,
                onClick: (0, i.M)(e.onClick, l.onClose),
              })
            )
          );
        }),
        z = (0, o.forwardRef)((e, t) => {
          let { __scopeToast: n, altText: a, ...i } = e;
          return (0, o.createElement)(
            p.WV.div,
            (0, r.Z)(
              {
                "data-radix-toast-announce-exclude": "",
                "data-radix-toast-announce-alt": a || void 0,
              },
              i,
              { ref: t }
            )
          );
        });
      function K(e, t, n, { discrete: r }) {
        let o = n.originalEvent.currentTarget,
          a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, p.jH)(o, a) : o.dispatchEvent(a);
      }
      let U = (e, t, n = 0) => {
        let r = Math.abs(e.x),
          o = Math.abs(e.y),
          a = r > o;
        return "left" === t || "right" === t ? a && r > n : !a && o > n;
      };
      function $(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      let B = _,
        H = S,
        G = A,
        Y = W,
        q = V,
        X = Z,
        Q = j;
    },
    90175: function (e, t, n) {
      n.d(t, {
        ck: function () {
          return T;
        },
        fC: function () {
          return _;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(73966),
        i = n(66840),
        l = n(1353),
        u = n(9987),
        c = n(80886),
        s = n(29114);
      let d = "ToggleGroup",
        [f, p] = (0, a.b)(d, [l.Pc]),
        m = (0, l.Pc)(),
        v = o.forwardRef((e, t) => {
          let { type: n, ...a } = e;
          if ("single" === n)
            return o.createElement(b, (0, r.Z)({}, a, { ref: t }));
          if ("multiple" === n)
            return o.createElement(y, (0, r.Z)({}, a, { ref: t }));
          throw Error(`Missing prop \`type\` expected on \`${d}\``);
        }),
        [g, h] = f(d),
        b = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: a,
              onValueChange: i = () => {},
              ...l
            } = e,
            [u, s] = (0, c.T)({ prop: n, defaultProp: a, onChange: i });
          return o.createElement(
            g,
            {
              scope: e.__scopeToggleGroup,
              type: "single",
              value: u ? [u] : [],
              onItemActivate: s,
              onItemDeactivate: o.useCallback(() => s(""), [s]),
            },
            o.createElement(x, (0, r.Z)({}, l, { ref: t }))
          );
        }),
        y = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: a,
              onValueChange: i = () => {},
              ...l
            } = e,
            [u = [], s] = (0, c.T)({ prop: n, defaultProp: a, onChange: i }),
            d = o.useCallback((e) => s((t = []) => [...t, e]), [s]),
            f = o.useCallback(
              (e) => s((t = []) => t.filter((t) => t !== e)),
              [s]
            );
          return o.createElement(
            g,
            {
              scope: e.__scopeToggleGroup,
              type: "multiple",
              value: u,
              onItemActivate: d,
              onItemDeactivate: f,
            },
            o.createElement(x, (0, r.Z)({}, l, { ref: t }))
          );
        }),
        [w, E] = f(d),
        x = o.forwardRef((e, t) => {
          let {
              __scopeToggleGroup: n,
              disabled: a = !1,
              rovingFocus: u = !0,
              orientation: c,
              dir: d,
              loop: f = !0,
              ...p
            } = e,
            v = m(n),
            g = (0, s.gm)(d),
            h = { role: "group", dir: g, ...p };
          return o.createElement(
            w,
            { scope: n, rovingFocus: u, disabled: a },
            u
              ? o.createElement(
                  l.fC,
                  (0, r.Z)({ asChild: !0 }, v, {
                    orientation: c,
                    dir: g,
                    loop: f,
                  }),
                  o.createElement(i.WV.div, (0, r.Z)({}, h, { ref: t }))
                )
              : o.createElement(i.WV.div, (0, r.Z)({}, h, { ref: t }))
          );
        }),
        C = "ToggleGroupItem",
        R = o.forwardRef((e, t) => {
          let n = h(C, e.__scopeToggleGroup),
            a = E(C, e.__scopeToggleGroup),
            i = m(e.__scopeToggleGroup),
            u = n.value.includes(e.value),
            c = a.disabled || e.disabled,
            s = { ...e, pressed: u, disabled: c },
            d = o.useRef(null);
          return a.rovingFocus
            ? o.createElement(
                l.ck,
                (0, r.Z)({ asChild: !0 }, i, {
                  focusable: !c,
                  active: u,
                  ref: d,
                }),
                o.createElement(M, (0, r.Z)({}, s, { ref: t }))
              )
            : o.createElement(M, (0, r.Z)({}, s, { ref: t }));
        }),
        M = o.forwardRef((e, t) => {
          let { __scopeToggleGroup: n, value: a, ...i } = e,
            l = h(C, n),
            c = {
              role: "radio",
              "aria-checked": e.pressed,
              "aria-pressed": void 0,
            },
            s = "single" === l.type ? c : void 0;
          return o.createElement(
            u.Z,
            (0, r.Z)({}, s, i, {
              ref: t,
              onPressedChange: (e) => {
                e ? l.onItemActivate(a) : l.onItemDeactivate(a);
              },
            })
          );
        }),
        _ = v,
        T = R;
    },
    9987: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
        f: function () {
          return c;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(80886),
        l = n(66840);
      let u = (0, o.forwardRef)((e, t) => {
          let {
              pressed: n,
              defaultPressed: u = !1,
              onPressedChange: c,
              ...s
            } = e,
            [d = !1, f] = (0, i.T)({ prop: n, onChange: c, defaultProp: u });
          return (0, o.createElement)(
            l.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-pressed": d,
                "data-state": d ? "on" : "off",
                "data-disabled": e.disabled ? "" : void 0,
              },
              s,
              {
                ref: t,
                onClick: (0, a.M)(e.onClick, () => {
                  e.disabled || f(!d);
                }),
              }
            )
          );
        }),
        c = u;
    },
    61312: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return j;
        },
        fC: function () {
          return W;
        },
        h_: function () {
          return Z;
        },
        xz: function () {
          return V;
        },
        zt: function () {
          return F;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(6741),
        i = n(98575),
        l = n(73966),
        u = n(15278),
        c = n(99255),
        s = n(26008),
        d = n(83832),
        f = n(71599),
        p = n(66840),
        m = n(37053),
        v = n(80886),
        g = n(95098);
      let [h, b] = (0, l.b)("Tooltip", [s.D7]),
        y = (0, s.D7)(),
        w = "tooltip.open",
        [E, x] = h("TooltipProvider"),
        C = "Tooltip",
        [R, M] = h(C),
        _ = "TooltipTrigger",
        T = (0, o.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...l } = e,
            u = M(_, n),
            c = x(_, n),
            d = y(n),
            f = (0, o.useRef)(null),
            m = (0, i.e)(t, f, u.onTriggerChange),
            v = (0, o.useRef)(!1),
            g = (0, o.useRef)(!1),
            h = (0, o.useCallback)(() => (v.current = !1), []);
          return (
            (0, o.useEffect)(
              () => () => document.removeEventListener("pointerup", h),
              [h]
            ),
            (0, o.createElement)(
              s.ee,
              (0, r.Z)({ asChild: !0 }, d),
              (0, o.createElement)(
                p.WV.button,
                (0, r.Z)(
                  {
                    "aria-describedby": u.open ? u.contentId : void 0,
                    "data-state": u.stateAttribute,
                  },
                  l,
                  {
                    ref: m,
                    onPointerMove: (0, a.M)(e.onPointerMove, (e) => {
                      "touch" === e.pointerType ||
                        g.current ||
                        c.isPointerInTransitRef.current ||
                        (u.onTriggerEnter(), (g.current = !0));
                    }),
                    onPointerLeave: (0, a.M)(e.onPointerLeave, () => {
                      u.onTriggerLeave(), (g.current = !1);
                    }),
                    onPointerDown: (0, a.M)(e.onPointerDown, () => {
                      (v.current = !0),
                        document.addEventListener("pointerup", h, { once: !0 });
                    }),
                    onFocus: (0, a.M)(e.onFocus, () => {
                      v.current || u.onOpen();
                    }),
                    onBlur: (0, a.M)(e.onBlur, u.onClose),
                    onClick: (0, a.M)(e.onClick, u.onClose),
                  }
                )
              )
            )
          );
        }),
        P = "TooltipPortal",
        [k, S] = h(P, { forceMount: void 0 }),
        O = "TooltipContent",
        D = (0, o.forwardRef)((e, t) => {
          let n = S(O, e.__scopeTooltip),
            { forceMount: a = n.forceMount, side: i = "top", ...l } = e,
            u = M(O, e.__scopeTooltip);
          return (0, o.createElement)(
            f.z,
            { present: a || u.open },
            u.disableHoverableContent
              ? (0, o.createElement)(N, (0, r.Z)({ side: i }, l, { ref: t }))
              : (0, o.createElement)(A, (0, r.Z)({ side: i }, l, { ref: t }))
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let n = M(O, e.__scopeTooltip),
            a = x(O, e.__scopeTooltip),
            l = (0, o.useRef)(null),
            u = (0, i.e)(t, l),
            [c, s] = (0, o.useState)(null),
            { trigger: d, onClose: f } = n,
            p = l.current,
            { onPointerInTransitChange: m } = a,
            v = (0, o.useCallback)(() => {
              s(null), m(!1);
            }, [m]),
            g = (0, o.useCallback)(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      a = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, a)) {
                      case a:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                s(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t, n = 5) {
                      let r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  m(!0);
              },
              [m]
            );
          return (
            (0, o.useEffect)(() => () => v(), [v]),
            (0, o.useEffect)(() => {
              if (d && p) {
                let e = (e) => g(e, p),
                  t = (e) => g(e, d);
                return (
                  d.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    d.removeEventListener("pointerleave", e),
                      p.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [d, p, g, v]),
            (0, o.useEffect)(() => {
              if (c) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == d ? void 0 : d.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                        let i = t[e].x,
                          l = t[e].y,
                          u = t[a].x,
                          c = t[a].y;
                        l > r != c > r &&
                          n < ((u - i) * (r - l)) / (c - l) + i &&
                          (o = !o);
                      }
                      return o;
                    })(n, c);
                  r ? v() : o && (v(), f());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [d, p, c, f, v]),
            (0, o.createElement)(N, (0, r.Z)({}, e, { ref: u }))
          );
        }),
        [I, L] = h(C, { isInside: !1 }),
        N = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTooltip: n,
              children: a,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: c,
              ...d
            } = e,
            f = M(O, n),
            p = y(n),
            { onClose: v } = f;
          return (
            (0, o.useEffect)(
              () => (
                document.addEventListener(w, v),
                () => document.removeEventListener(w, v)
              ),
              [v]
            ),
            (0, o.useEffect)(() => {
              if (f.trigger) {
                let e = (e) => {
                  let t = e.target;
                  null != t && t.contains(f.trigger) && v();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [f.trigger, v]),
            (0, o.createElement)(
              u.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: l,
                onPointerDownOutside: c,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: v,
              },
              (0, o.createElement)(
                s.VY,
                (0, r.Z)({ "data-state": f.stateAttribute }, p, d, {
                  ref: t,
                  style: {
                    ...d.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, o.createElement)(m.A4, null, a),
                (0, o.createElement)(
                  I,
                  { scope: n, isInside: !0 },
                  (0, o.createElement)(
                    g.f,
                    { id: f.contentId, role: "tooltip" },
                    i || a
                  )
                )
              )
            )
          );
        }),
        F = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: a = !1,
              children: i,
            } = e,
            [l, u] = (0, o.useState)(!0),
            c = (0, o.useRef)(!1),
            s = (0, o.useRef)(0);
          return (
            (0, o.useEffect)(() => {
              let e = s.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, o.createElement)(
              E,
              {
                scope: t,
                isOpenDelayed: l,
                delayDuration: n,
                onOpen: (0, o.useCallback)(() => {
                  window.clearTimeout(s.current), u(!1);
                }, []),
                onClose: (0, o.useCallback)(() => {
                  window.clearTimeout(s.current),
                    (s.current = window.setTimeout(() => u(!0), r));
                }, [r]),
                isPointerInTransitRef: c,
                onPointerInTransitChange: (0, o.useCallback)((e) => {
                  c.current = e;
                }, []),
                disableHoverableContent: a,
              },
              i
            )
          );
        },
        W = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: a = !1,
              onOpenChange: i,
              disableHoverableContent: l,
              delayDuration: u,
            } = e,
            d = x(C, e.__scopeTooltip),
            f = y(t),
            [p, m] = (0, o.useState)(null),
            g = (0, c.M)(),
            h = (0, o.useRef)(0),
            b = null != l ? l : d.disableHoverableContent,
            E = null != u ? u : d.delayDuration,
            M = (0, o.useRef)(!1),
            [_ = !1, T] = (0, v.T)({
              prop: r,
              defaultProp: a,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(w)))
                  : d.onClose(),
                  null == i || i(e);
              },
            }),
            P = (0, o.useMemo)(
              () =>
                _ ? (M.current ? "delayed-open" : "instant-open") : "closed",
              [_]
            ),
            k = (0, o.useCallback)(() => {
              window.clearTimeout(h.current), (M.current = !1), T(!0);
            }, [T]),
            S = (0, o.useCallback)(() => {
              window.clearTimeout(h.current), T(!1);
            }, [T]),
            O = (0, o.useCallback)(() => {
              window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => {
                  (M.current = !0), T(!0);
                }, E));
            }, [E, T]);
          return (
            (0, o.useEffect)(() => () => window.clearTimeout(h.current), []),
            (0, o.createElement)(
              s.fC,
              f,
              (0, o.createElement)(
                R,
                {
                  scope: t,
                  contentId: g,
                  open: _,
                  stateAttribute: P,
                  trigger: p,
                  onTriggerChange: m,
                  onTriggerEnter: (0, o.useCallback)(() => {
                    d.isOpenDelayed ? O() : k();
                  }, [d.isOpenDelayed, O, k]),
                  onTriggerLeave: (0, o.useCallback)(() => {
                    b ? S() : window.clearTimeout(h.current);
                  }, [S, b]),
                  onOpen: k,
                  onClose: S,
                  disableHoverableContent: b,
                },
                n
              )
            )
          );
        },
        V = T,
        Z = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = M(P, t);
          return (0, o.createElement)(
            k,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              f.z,
              { present: n || i.open },
              (0, o.createElement)(d.h, { asChild: !0, container: a }, r)
            )
          );
        },
        j = D;
    },
    26606: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          (0, r.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
    },
    80886: function (e, t, n) {
      n.d(t, {
        T: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(26606);
      function a({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [a, i] = (function ({ defaultProp: e, onChange: t }) {
            let n = (0, r.useState)(e),
              [a] = n,
              i = (0, r.useRef)(a),
              l = (0, o.W)(t);
            return (
              (0, r.useEffect)(() => {
                i.current !== a && (l(a), (i.current = a));
              }, [a, i, l]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          u = l ? e : a,
          c = (0, o.W)(n);
        return [
          u,
          (0, r.useCallback)(
            (t) => {
              if (l) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && c(n);
              } else i(t);
            },
            [l, e, i, c]
          ),
        ];
      }
    },
    61188: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(2265);
      let o = (null == globalThis ? void 0 : globalThis.document)
        ? r.useLayoutEffect
        : () => {};
    },
    6718: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    90420: function (e, t, n) {
      n.d(t, {
        t: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(61188);
      function a(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let a = t[0];
                if ("borderBoxSize" in a) {
                  let e = a.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    95098: function (e, t, n) {
      n.d(t, {
        T: function () {
          return i;
        },
        f: function () {
          return l;
        },
      });
      var r = n(1119),
        o = n(2265),
        a = n(66840);
      let i = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            a.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        l = i;
    },
    77712: function (e, t, n) {
      n.d(t, {
        j: function () {
          return a;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        a = (e, t) => (n) => {
          var a;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: i, defaultVariants: l } = t,
            u = Object.keys(i).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == l ? void 0 : l[e];
              if (null === t) return null;
              let a = r(t) || r(o);
              return i[e][a];
            }),
            c =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            u,
            null == t
              ? void 0
              : null === (a = t.compoundVariants) || void 0 === a
              ? void 0
              : a.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...l, ...c }[t])
                      : { ...l, ...c }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    61994: function (e, t, n) {
      n.d(t, {
        W: function () {
          return r;
        },
      });
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var a = t.length;
                  for (n = 0; n < a; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
    },
    53335: function (e, t, n) {
      n.d(t, {
        dV: function () {
          return i;
        },
        m6: function () {
          return N;
        },
      });
      let r = /^\[(.+)\]$/;
      function o(e, t) {
        let n = e;
        return (
          t.split("-").forEach((e) => {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e));
          }),
          n
        );
      }
      let a = /\s+/;
      function i() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              let n;
              if ("string" == typeof t) return t;
              let r = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (n = e(t[o])) && (r && (r += " "), (r += n));
              return r;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      function l(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        s = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        v =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return b(e) || s.has(e) || c.test(e);
      }
      function h(e) {
        return O(e, "length", D);
      }
      function b(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function y(e) {
        return O(e, "number", b);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function E(e) {
        return e.endsWith("%") && b(e.slice(0, -1));
      }
      function x(e) {
        return u.test(e);
      }
      function C(e) {
        return d.test(e);
      }
      let R = new Set(["length", "size", "percentage"]);
      function M(e) {
        return O(e, R, A);
      }
      function _(e) {
        return O(e, "position", A);
      }
      let T = new Set(["image", "url"]);
      function P(e) {
        return O(e, T, L);
      }
      function k(e) {
        return O(e, "", I);
      }
      function S() {
        return !0;
      }
      function O(e, t, n) {
        let r = u.exec(e);
        return (
          !!r &&
          (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
        );
      }
      function D(e) {
        return f.test(e) && !p.test(e);
      }
      function A() {
        return !1;
      }
      function I(e) {
        return m.test(e);
      }
      function L(e) {
        return v.test(e);
      }
      let N = (function (e, ...t) {
        let n, l, u;
        let c = function (a) {
          var i;
          return (
            (l = (n = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  n = new Map(),
                  r = new Map();
                function o(o, a) {
                  n.set(o, a), ++t > e && ((t = 0), (r = n), (n = new Map()));
                }
                return {
                  get(e) {
                    let t = n.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = r.get(e))
                      ? (o(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    n.has(e) ? n.set(e, t) : o(e, t);
                  },
                };
              })((i = t.reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  n = 1 === t.length,
                  r = t[0],
                  o = t.length;
                return function (e) {
                  let a;
                  let i = [],
                    l = 0,
                    u = 0;
                  for (let c = 0; c < e.length; c++) {
                    let s = e[c];
                    if (0 === l) {
                      if (s === r && (n || e.slice(c, c + o) === t)) {
                        i.push(e.slice(u, c)), (u = c + o);
                        continue;
                      }
                      if ("/" === s) {
                        a = c;
                        continue;
                      }
                    }
                    "[" === s ? l++ : "]" === s && l--;
                  }
                  let c = 0 === i.length ? e : e.substring(u),
                    s = c.startsWith("!"),
                    d = s ? c.substring(1) : c;
                  return {
                    modifiers: i,
                    hasImportantModifier: s,
                    baseClassName: d,
                    maybePostfixModifierPosition: a && a > u ? a - u : void 0,
                  };
                };
              })(i),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: n, prefix: r } = e,
                      a = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      r
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? r + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, t]) => [
                                      r + e,
                                      t,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, n, r, a) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? n : o(n, t)).classGroupId = r;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(a), n, r, a);
                                return;
                              }
                              n.validators.push({
                                validator: t,
                                classGroupId: r,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, i]) => {
                              e(i, o(n, t), r, a);
                            });
                          });
                        })(t, a, e, n);
                      }),
                      a
                    );
                  })(e),
                  {
                    conflictingClassGroups: n,
                    conflictingClassGroupModifiers: a,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let n = e.split("-");
                    return (
                      "" === n[0] && 1 !== n.length && n.shift(),
                      (function e(t, n) {
                        if (0 === t.length) return n.classGroupId;
                        let r = t[0],
                          o = n.nextPart.get(r),
                          a = o ? e(t.slice(1), o) : void 0;
                        if (a) return a;
                        if (0 === n.validators.length) return;
                        let i = t.join("-");
                        return n.validators.find(({ validator: e }) => e(i))
                          ?.classGroupId;
                      })(n, t) ||
                        (function (e) {
                          if (r.test(e)) {
                            let t = r.exec(e)[1],
                              n = t?.substring(0, t.indexOf(":"));
                            if (n) return "arbitrary.." + n;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let r = n[e] || [];
                    return t && a[e] ? [...r, ...a[e]] : r;
                  },
                };
              })(i),
            }).cache.get),
            (u = n.cache.set),
            (c = s),
            s(a)
          );
        };
        function s(e) {
          let t = l(e);
          if (t) return t;
          let r = (function (e, t) {
            let {
                splitModifiers: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: o,
              } = t,
              i = new Set();
            return e
              .trim()
              .split(a)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: a,
                    maybePostfixModifierPosition: i,
                  } = n(e),
                  l = r(i ? a.substring(0, i) : a),
                  u = !!i;
                if (!l) {
                  if (!i || !(l = r(a)))
                    return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    n = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...n.sort(), e), (n = []))
                        : n.push(e);
                    }),
                    t.push(...n.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? c + "!" : c,
                  classGroupId: l,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: n,
                    hasPostfixModifier: r,
                  } = e,
                  a = t + n;
                return (
                  !i.has(a) &&
                  (i.add(a), o(n, r).forEach((e) => i.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, n);
          return u(e, r), r;
        }
        return function () {
          return c(i.apply(null, arguments));
        };
      })(function () {
        let e = l("colors"),
          t = l("spacing"),
          n = l("blur"),
          r = l("brightness"),
          o = l("borderColor"),
          a = l("borderRadius"),
          i = l("borderSpacing"),
          u = l("borderWidth"),
          c = l("contrast"),
          s = l("grayscale"),
          d = l("hueRotate"),
          f = l("invert"),
          p = l("gap"),
          m = l("gradientColorStops"),
          v = l("gradientColorStopPositions"),
          R = l("inset"),
          T = l("margin"),
          O = l("opacity"),
          D = l("padding"),
          A = l("saturate"),
          I = l("scale"),
          L = l("sepia"),
          N = l("skew"),
          F = l("space"),
          W = l("translate"),
          V = () => ["auto", "contain", "none"],
          Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          j = () => ["auto", x, t],
          z = () => [x, t],
          K = () => ["", g, h],
          U = () => ["auto", b, x],
          $ = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          B = () => ["solid", "dashed", "dotted", "double", "none"],
          H = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          G = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", x],
          q = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          X = () => [b, y],
          Q = () => [b, x];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [S],
            spacing: [g, h],
            blur: ["none", "", C, x],
            brightness: X(),
            borderColor: [e],
            borderRadius: ["none", "", "full", C, x],
            borderSpacing: z(),
            borderWidth: K(),
            contrast: X(),
            grayscale: Y(),
            hueRotate: Q(),
            invert: Y(),
            gap: z(),
            gradientColorStops: [e],
            gradientColorStopPositions: [E, h],
            inset: j(),
            margin: j(),
            opacity: X(),
            padding: z(),
            saturate: X(),
            scale: X(),
            sepia: Y(),
            skew: Q(),
            space: z(),
            translate: z(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", x] }],
            container: ["container"],
            columns: [{ columns: [C] }],
            "break-after": [{ "break-after": q() }],
            "break-before": [{ "break-before": q() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...$(), x] }],
            overflow: [{ overflow: Z() }],
            "overflow-x": [{ "overflow-x": Z() }],
            "overflow-y": [{ "overflow-y": Z() }],
            overscroll: [{ overscroll: V() }],
            "overscroll-x": [{ "overscroll-x": V() }],
            "overscroll-y": [{ "overscroll-y": V() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [R] }],
            "inset-x": [{ "inset-x": [R] }],
            "inset-y": [{ "inset-y": [R] }],
            start: [{ start: [R] }],
            end: [{ end: [R] }],
            top: [{ top: [R] }],
            right: [{ right: [R] }],
            bottom: [{ bottom: [R] }],
            left: [{ left: [R] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, x] }],
            basis: [{ basis: j() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", x] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", w, x] }],
            "grid-cols": [{ "grid-cols": [S] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, x] }, x] }],
            "col-start": [{ "col-start": U() }],
            "col-end": [{ "col-end": U() }],
            "grid-rows": [{ "grid-rows": [S] }],
            "row-start-end": [{ row: ["auto", { span: [w, x] }, x] }],
            "row-start": [{ "row-start": U() }],
            "row-end": [{ "row-end": U() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", x] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", x] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...G()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...G(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...G(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [D] }],
            px: [{ px: [D] }],
            py: [{ py: [D] }],
            ps: [{ ps: [D] }],
            pe: [{ pe: [D] }],
            pt: [{ pt: [D] }],
            pr: [{ pr: [D] }],
            pb: [{ pb: [D] }],
            pl: [{ pl: [D] }],
            m: [{ m: [T] }],
            mx: [{ mx: [T] }],
            my: [{ my: [T] }],
            ms: [{ ms: [T] }],
            me: [{ me: [T] }],
            mt: [{ mt: [T] }],
            mr: [{ mr: [T] }],
            mb: [{ mb: [T] }],
            ml: [{ ml: [T] }],
            "space-x": [{ "space-x": [F] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [F] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, t] },
            ],
            "min-w": [{ "min-w": [x, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  x,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [C] },
                  C,
                ],
              },
            ],
            h: [
              { h: [x, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [x, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", C, h] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  y,
                ],
              },
            ],
            "font-family": [{ font: [S] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  x,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", b, y] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  x,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", x] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", x] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [O] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [O] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, h] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, x] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: z() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  x,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", x] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [O] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...$(), _] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", M] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  P,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [v] }],
            "gradient-via-pos": [{ via: [v] }],
            "gradient-to-pos": [{ to: [v] }],
            "gradient-from": [{ from: [m] }],
            "gradient-via": [{ via: [m] }],
            "gradient-to": [{ to: [m] }],
            rounded: [{ rounded: [a] }],
            "rounded-s": [{ "rounded-s": [a] }],
            "rounded-e": [{ "rounded-e": [a] }],
            "rounded-t": [{ "rounded-t": [a] }],
            "rounded-r": [{ "rounded-r": [a] }],
            "rounded-b": [{ "rounded-b": [a] }],
            "rounded-l": [{ "rounded-l": [a] }],
            "rounded-ss": [{ "rounded-ss": [a] }],
            "rounded-se": [{ "rounded-se": [a] }],
            "rounded-ee": [{ "rounded-ee": [a] }],
            "rounded-es": [{ "rounded-es": [a] }],
            "rounded-tl": [{ "rounded-tl": [a] }],
            "rounded-tr": [{ "rounded-tr": [a] }],
            "rounded-br": [{ "rounded-br": [a] }],
            "rounded-bl": [{ "rounded-bl": [a] }],
            "border-w": [{ border: [u] }],
            "border-w-x": [{ "border-x": [u] }],
            "border-w-y": [{ "border-y": [u] }],
            "border-w-s": [{ "border-s": [u] }],
            "border-w-e": [{ "border-e": [u] }],
            "border-w-t": [{ "border-t": [u] }],
            "border-w-r": [{ "border-r": [u] }],
            "border-w-b": [{ "border-b": [u] }],
            "border-w-l": [{ "border-l": [u] }],
            "border-opacity": [{ "border-opacity": [O] }],
            "border-style": [{ border: [...B(), "hidden"] }],
            "divide-x": [{ "divide-x": [u] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [u] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [O] }],
            "divide-style": [{ divide: B() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...B()] }],
            "outline-offset": [{ "outline-offset": [g, x] }],
            "outline-w": [{ outline: [g, h] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: K() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [O] }],
            "ring-offset-w": [{ "ring-offset": [g, h] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", C, k] }],
            "shadow-color": [{ shadow: [S] }],
            opacity: [{ opacity: [O] }],
            "mix-blend": [
              { "mix-blend": [...H(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": H() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", C, x] }],
            grayscale: [{ grayscale: [s] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [A] }],
            sepia: [{ sepia: [L] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [s] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [O] }],
            "backdrop-saturate": [{ "backdrop-saturate": [A] }],
            "backdrop-sepia": [{ "backdrop-sepia": [L] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [i] }],
            "border-spacing-x": [{ "border-spacing-x": [i] }],
            "border-spacing-y": [{ "border-spacing-y": [i] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  x,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", x] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", x] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [I] }],
            "scale-x": [{ "scale-x": [I] }],
            "scale-y": [{ "scale-y": [I] }],
            rotate: [{ rotate: [w, x] }],
            "translate-x": [{ "translate-x": [W] }],
            "translate-y": [{ "translate-y": [W] }],
            "skew-x": [{ "skew-x": [N] }],
            "skew-y": [{ "skew-y": [N] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  x,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  x,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": z() }],
            "scroll-mx": [{ "scroll-mx": z() }],
            "scroll-my": [{ "scroll-my": z() }],
            "scroll-ms": [{ "scroll-ms": z() }],
            "scroll-me": [{ "scroll-me": z() }],
            "scroll-mt": [{ "scroll-mt": z() }],
            "scroll-mr": [{ "scroll-mr": z() }],
            "scroll-mb": [{ "scroll-mb": z() }],
            "scroll-ml": [{ "scroll-ml": z() }],
            "scroll-p": [{ "scroll-p": z() }],
            "scroll-px": [{ "scroll-px": z() }],
            "scroll-py": [{ "scroll-py": z() }],
            "scroll-ps": [{ "scroll-ps": z() }],
            "scroll-pe": [{ "scroll-pe": z() }],
            "scroll-pt": [{ "scroll-pt": z() }],
            "scroll-pr": [{ "scroll-pr": z() }],
            "scroll-pb": [{ "scroll-pb": z() }],
            "scroll-pl": [{ "scroll-pl": z() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", x] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, h, y] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
