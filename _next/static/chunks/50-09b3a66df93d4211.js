"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [50],
  {
    16050: function (e, n, t) {
      t.d(n, {
        OR: function () {
          return u;
        },
        S1: function () {
          return i;
        },
        YZ: function () {
          return c;
        },
        LI: function () {
          return f;
        },
        ac: function () {
          return o;
        },
        rf: function () {
          return s;
        },
      });
      var r = t(2265),
        u = function (e, n, t, u) {
          let i = (0, r.useRef)(n);
          f(() => {
            i.current = n;
          }, [n]),
            (0, r.useEffect)(() => {
              var n;
              let r =
                null !== (n = null == t ? void 0 : t.current) && void 0 !== n
                  ? n
                  : window;
              if (!(r && r.addEventListener)) return;
              let c = (e) => i.current(e);
              return (
                r.addEventListener(e, c, u),
                () => {
                  r.removeEventListener(e, c, u);
                }
              );
            }, [e, t, u]);
        },
        i = function (
          e,
          {
            threshold: n = 0,
            root: t = null,
            rootMargin: u = "0%",
            freezeOnceVisible: i = !1,
          }
        ) {
          let [c, f] = (0, r.useState)(),
            o = (null == c ? void 0 : c.isIntersecting) && i,
            s = ([e]) => {
              f(e);
            };
          return (
            (0, r.useEffect)(() => {
              let r = null == e ? void 0 : e.current;
              if (!window.IntersectionObserver || o || !r) return;
              let i = new IntersectionObserver(s, {
                threshold: n,
                root: t,
                rootMargin: u,
              });
              return i.observe(r), () => i.disconnect();
            }, [null == e ? void 0 : e.current, JSON.stringify(n), t, u, o]),
            c
          );
        },
        c = function () {
          let e = (0, r.useRef)(!0);
          return e.current ? ((e.current = !1), !0) : e.current;
        },
        f = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        o = function (e) {
          let n = (e) =>
              "undefined" != typeof window && window.matchMedia(e).matches,
            [t, u] = (0, r.useState)(n(e));
          function i() {
            u(n(e));
          }
          return (
            (0, r.useEffect)(() => {
              let n = window.matchMedia(e);
              return (
                i(),
                n.addListener
                  ? n.addListener(i)
                  : n.addEventListener("change", i),
                () => {
                  n.removeListener
                    ? n.removeListener(i)
                    : n.removeEventListener("change", i);
                }
              );
            }, [e]),
            t
          );
        },
        s = function (e, n) {
          let t = c();
          (0, r.useEffect)(() => {
            if (!t) return e();
          }, n);
        };
    },
  },
]);
