"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [813],
  {
    2: function (e, r, n) {
      n.r(r),
        n.d(r, {
          useAsync: function () {
            return l;
          },
        });
      var t = n(2265);
      function l(e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          [n, l] = (0, t.useState)(!0),
          [a, s] = (0, t.useState)(),
          [c, i] = (0, t.useState)(),
          o = (0, t.useCallback)(() => {
            l(!0),
              s(void 0),
              i(void 0),
              e()
                .then(i)
                .catch(s)
                .finally(() => l(!1));
          }, r);
        return (
          (0, t.useEffect)(() => {
            o();
          }, [o]),
          { loading: n, error: a, value: c }
        );
      }
    },
    67033: function (e, r, n) {
      n.r(r),
        n.d(r, {
          useUnmount: function () {
            return l;
          },
        });
      var t = n(2265);
      function l(e) {
        let r = (0, t.useRef)(e);
        (r.current = e),
          (0, t.useEffect)(
            () => () => {
              r.current();
            },
            []
          );
      }
    },
    71013: function (e, r, n) {
      n.d(r, {
        UQ: function () {
          return t.UQ;
        },
        zx: function () {
          return l.z;
        },
        h_: function () {
          return a.h_;
        },
        AW: function () {
          return a.AW;
        },
        $F: function () {
          return a.$F;
        },
        iv: function () {
          return g;
        },
        eT: function () {
          return u.eT;
        },
        t3: function () {
          return u.t3;
        },
        FO: function () {
          return u.FO;
        },
        Yy: function () {
          return u.Yy;
        },
        ch: function () {
          return u.ch;
        },
        S2: function () {
          return u.S2;
        },
        Cl: function () {
          return u.Ph;
        },
        S$: function () {
          return u.S$;
        },
        Vr: function () {
          return s.Vr;
        },
        wV: function () {
          return c.wV;
        },
        Yj: function () {
          return b.Y;
        },
        b_: function () {
          return b.b;
        },
        Od: function () {
          return i.O;
        },
        CO: function () {
          return o.CO;
        },
        u: function () {
          return d.u;
        },
        _v: function () {
          return d._v;
        },
        pn: function () {
          return d.pn;
        },
        aJ: function () {
          return d.aJ;
        },
        cn: function () {
          return h.cn;
        },
        D: function () {
          return x;
        },
        w_: function () {
          return m;
        },
        OE: function () {
          return f;
        },
        r5: function () {
          return p.useAsync;
        },
        kw: function () {
          return _.useUnmount;
        },
      });
      var t = n(59618);
      n(76572);
      var l = n(91611);
      n(9233), n(99654), n(32408);
      var a = n(91717);
      n(55106);
      var s = n(96952);
      n(42843);
      var c = n(88659);
      n(94115), n(40044), n(8836), n(48103);
      var i = n(77070);
      n(54636), n(10573), n(5878);
      var o = n(39347),
        d = n(55383),
        u = n(37670),
        h = n(80248);
      function x(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return new Intl.NumberFormat("en-US", {
          notation: "compact",
          compactDisplay: "short",
          maximumFractionDigits: r,
          roundingMode: "floor",
        }).format(e);
      }
      function m(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: r,
          roundingMode: "floor",
        }).format(e);
      }
      function f(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return new Intl.NumberFormat("en-US", {
          style: "percent",
          maximumFractionDigits: r,
          roundingMode: "floor",
        }).format(e);
      }
      let g = !1;
      var b = n(51673),
        p = n(2),
        _ = n(67033);
    },
    32950: function (e, r, n) {
      n.d(r, {
        i: function () {
          return a;
        },
      });
      var t = n(57437),
        l = n(71013);
      function a(e) {
        let {
          tooltip: r = "Coming soon",
          children: n,
          side: a = "bottom",
          className: s = "",
        } = e;
        return (0, t.jsx)(l.pn, {
          delayDuration: 0,
          children: (0, t.jsxs)(l.u, {
            children: [
              (0, t.jsx)(l.aJ, {
                className: (0, l.cn)("cursor-default", s),
                children: n,
              }),
              (0, t.jsx)(l._v, { side: a, children: r }),
            ],
          }),
        });
      }
    },
    95395: function (e, r, n) {
      n.d(r, {
        SJ: function () {
          return c;
        },
        Yw: function () {
          return s;
        },
        mQ: function () {
          return o;
        },
        nw: function () {
          return i;
        },
      });
      var t = n(57437),
        l = n(71013),
        a = n(3092);
      let s = {
          Docs: [
            {
              href: a.b_.DOCS_DOR,
              scroll: !0,
              children: (0, t.jsx)(l.wV, {
                className:
                  "rounded-xl min-h-10 h-auto overflow-visible text-clip whitespace-normal py-2",
                target: "_blank",
                children: "Treehouse Protocol (DOR)",
              }),
            },
            {
              href: a.b_.DOCS_TETH,
              scroll: !0,
              children: (0, t.jsx)(l.wV, {
                className: "rounded-xl",
                target: "_blank",
                children: "tAsset (tETH)",
              }),
            },
          ],
          Whitepaper: [
            {
              href: a.b_.WHITEPAPER_DOR,
              scroll: !0,
              children: (0, t.jsx)(l.wV, {
                className:
                  "rounded-xl bg-green-gray-12 min-h-10 h-auto overflow-visible text-clip whitespace-normal py-2",
                target: "_blank",
                "aria-disabled": "true",
                children: (0, t.jsxs)("span", {
                  children: [
                    "Treehouse Protocol (DOR)",
                    " ",
                    (0, t.jsx)("span", {
                      className: "md:hidden",
                      children: "(Coming soon)",
                    }),
                  ],
                }),
              }),
            },
            {
              href: a.b_.WHITEPAPER_TETH,
              scroll: !0,
              children: (0, t.jsx)(l.wV, {
                className: "rounded-xl",
                target: "_blank",
                children: "tAsset (tETH)",
              }),
            },
          ],
          Resources: [
            {
              href: a.Yj.BLOG,
              scroll: !0,
              children: (0, t.jsx)(l.wV, {
                className: "rounded-xl",
                children: "Blog",
              }),
            },
            {
              href: a.Yj.FAQ,
              scroll: !0,
              children: (0, t.jsx)(l.wV, {
                className: "rounded-xl",
                children: "FAQ",
              }),
            },
            {
              href: a.b_.ONE_RATE_TO_RULE_THEM_ALL,
              target: "_blank",
              children: (0, t.jsx)(l.wV, {
                className:
                  "rounded-xl min-h-10 h-auto overflow-visible text-clip whitespace-normal py-2",
                target: "_blank",
                children: "eBook | 1RTRTA (PDF)",
              }),
            },
            {
              href: a.b_.ONE_RATE_TO_RULE_THEM_ALL_EPUB,
              target: "_blank",
              children: (0, t.jsx)(l.wV, {
                className:
                  "rounded-xl min-h-10 h-auto overflow-visible text-clip whitespace-normal py-2",
                target: "_blank",
                children: "eBook | 1RTRTA (ePub)",
              }),
            },
          ],
        },
        c = [
          {
            href: a.b_.X,
            scroll: !0,
            children: (0, t.jsxs)(l.wV, {
              className: "rounded-xl gap-3",
              target: "_blank",
              children: [
                (0, t.jsx)(a.G7, {
                  className:
                    "h-4 w-4 text-green-gray-5 group-hover:text-green-gray-1 group-data-[hover=on]:text-green-gray-1",
                }),
                "X",
              ],
            }),
          },
          {
            href: a.b_.DISCORD,
            scroll: !0,
            children: (0, t.jsxs)(l.wV, {
              className: "rounded-xl gap-3",
              target: "_blank",
              children: [
                (0, t.jsx)(a.bL, {
                  className:
                    "h-4 w-4 text-green-gray-5 group-hover:text-[#5865F2] group-data-[hover=on]:text-[#5865F2]",
                }),
                "Discord",
              ],
            }),
          },
        ],
        i = [
          {
            title: "Docs",
            orderClass: "order-1",
            links: [
              {
                href: a.b_.DOCS_TETH,
                target: "_blank",
                scroll: !0,
                children: "tAsset (tETH)",
              },
              {
                href: a.b_.DOCS_DOR,
                target: "_blank",
                scroll: !0,
                children: "Treehouse Protocol (DOR)",
              },
            ],
          },
          {
            title: "Learn",
            orderClass: "order-3 md:order-2",
            links: [
              { href: a.Yj.FAQ, scroll: !0, children: "FAQ" },
              { href: a.Yj.BLOG, scroll: !0, children: "Blog" },
              {
                href: a.b_.ONE_RATE_TO_RULE_THEM_ALL,
                target: "_blank",
                scroll: !0,
                children: "eBook | 1RTRTA (PDF)",
              },
              {
                href: a.b_.ONE_RATE_TO_RULE_THEM_ALL_EPUB,
                target: "_blank",
                scroll: !0,
                children: "eBook | 1RTRTA (ePub)",
              },
            ],
          },
          {
            title: "Developers",
            orderClass: "order-5 md:order-3",
            links: [
              {
                href: a.b_.BUG_BOUNTY,
                target: "_blank",
                scroll: !0,
                children: "Bug Bounty",
              },
              {
                href: a.b_.AUDIT,
                target: "_blank",
                scroll: !0,
                children: "Audit",
              },
            ],
          },
          {
            title: "Treehouse Labs",
            orderClass: "order-7 md:order-4",
            links: [
              {
                href: a.b_.ABOUT_US,
                target: "_blank",
                scroll: !0,
                children: "About Us",
              },
              {
                href: a.b_.CAREERS,
                target: "_blank",
                scroll: !0,
                children: "Careers",
              },
            ],
          },
          {
            title: "Whitepaper",
            orderClass: "order-2 md:order-5",
            links: [
              {
                href: a.b_.WHITEPAPER_TETH,
                target: "_blank",
                scroll: !0,
                children: "tAsset (tETH)",
              },
              {
                href: a.b_.WHITEPAPER_DOR,
                target: "_blank",
                scroll: !0,
                children: "Treehouse Protocol (DOR)",
                "aria-disabled": !0,
                className: "mr-auto",
                isComingSoon: !0,
              },
            ],
          },
          {
            title: "Community",
            orderClass: "order-4 md:order-6",
            links: [
              { href: a.b_.X, target: "_blank", scroll: !0, children: "X" },
              {
                href: a.b_.DISCORD,
                target: "_blank",
                scroll: !0,
                children: "Discord",
              },
            ],
          },
          {
            title: "Institutions",
            orderClass: "order-6 md:order-7",
            links: [
              {
                href: a.b_.HYPERION,
                target: "_blank",
                scroll: !0,
                children: "Hyperion",
              },
              {
                href: a.b_.TRHX_RESEARCH,
                target: "_blank",
                scroll: !0,
                children: "TRHX Research",
              },
            ],
          },
        ],
        o = {
          learn: "navigation-menu-learn",
          community: "navigation-menu-community",
          mobile: "navigation-menu-mobile",
        };
    },
    45523: function (e, r, n) {
      n.d(r, {
        c: function () {
          return a;
        },
      });
      var t = n(2265),
        l = n(97048);
      function a() {
        let [e, r] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            r(l.tq);
          }, []),
          e
        );
      }
    },
    20814: function (e, r, n) {
      n.r(r),
        n.d(r, {
          useIsDesktop: function () {
            return a;
          },
        });
      var t = n(2265),
        l = n(16050);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "(min-width: 835px)",
          r = (0, l.ac)(e),
          [n, a] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            n !== r && a(r);
          }, [r]),
          n
        );
      }
    },
    28679: function (e, r, n) {
      n.r(r),
        n.d(r, {
          AdapterByViewportLayout: function () {
            return s;
          },
        });
      var t = n(57437),
        l = n(2265),
        a = n(34463);
      function s(e) {
        let {
            query: r = "(min-width: 835px)",
            children: n = (0, t.jsx)(t.Fragment, {}),
            incorrectSide: s = (0, t.jsx)(t.Fragment, {}),
          } = e,
          c = (0, a.Ce)(r);
        return (0, t.jsx)(l.Fragment, { children: c ? n : s });
      }
    },
    55009: function (e, r, n) {
      n.r(r),
        n.d(r, {
          FooterDefaultLayout: function () {
            return d;
          },
        });
      var t = n(57437),
        l = n(2265),
        a = n(3092),
        s = n(27648),
        c = n(32950),
        i = n(95395),
        o = n(45523);
      function d(e) {
        let r = (0, o.c)();
        return (0, t.jsx)("footer", {
          className: "bg-green-gray-13",
          children: (0, t.jsxs)("nav", {
            className:
              "container py-16 md:p-20 flex flex-col md:flex-row gap-16 md:gap-0",
            children: [
              (0, t.jsx)(s.default, {
                href: a.Yj.HOME_PAGE,
                shallow: !0,
                scroll: !0,
                className: "block md:hidden",
                children: (0, t.jsx)(a.U, {
                  className:
                    "w-[95px] h-8 min-h-8 min-w-[95px] hover:opacity-70",
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-y-16 flex-auto",
                children: i.nw.map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: (0, a.cn)(
                        "flex flex-col gap-6 pr-4",
                        e.orderClass
                      ),
                      children: [
                        (0, t.jsx)("h6", {
                          className: "text-grey-1 text-lg font-semibold",
                          children: e.title,
                        }),
                        (0, t.jsx)("div", {
                          className: "flex flex-col gap-3",
                          children: e.links.map((e, n) => {
                            let {
                              className: i,
                              isComingSoon: o = !1,
                              children: d,
                              ...u
                            } = e;
                            return o
                              ? (0, t.jsx)(
                                  c.i,
                                  {
                                    side: "right",
                                    className: "mr-auto",
                                    children: (0, l.createElement)(s.default, {
                                      ...u,
                                      className: (0, a.cn)(
                                        "text-grey-4 aria-[disabled=true]:text-grey-7 aria-[disabled=true]:pointer-events-none hover:text-grey-4/80 cursor-pointer flex gap-3 text-md",
                                        i
                                      ),
                                      key: n,
                                      children: (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          d,
                                          " ",
                                          r ? "(Coming soon)" : "",
                                        ],
                                      }),
                                    }),
                                  },
                                  n
                                )
                              : (0, l.createElement)(s.default, {
                                  ...u,
                                  className: (0, a.cn)(
                                    "text-grey-4 aria-[disabled=true]:text-grey-7 aria-[disabled=true]:pointer-events-none hover:text-grey-4/80 cursor-pointer flex gap-3 text-md",
                                    i
                                  ),
                                  children: d,
                                  key: n,
                                });
                          }),
                        }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
              (0, t.jsxs)("div", {
                className: "flex-col flex",
                children: [
                  (0, t.jsx)(s.default, {
                    href: a.Yj.HOME_PAGE,
                    shallow: !0,
                    scroll: !0,
                    className: "hidden md:block",
                    children: (0, t.jsx)(a.U, {
                      className:
                        "w-[119px] h-10 min-h-10 min-w-[119px] hover:opacity-70",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex flex-col mt-auto gap-3 text-left md:text-right",
                    children: [
                      (0, t.jsx)(s.default, {
                        href: a.b_.TERMS_OF_SERVICE,
                        className:
                          "text-green-gray-4 hover:text-green-gray-4/70 text-md",
                        target: "_blank",
                        children: "Terms of Service",
                      }),
                      (0, t.jsx)(s.default, {
                        href: a.b_.PRIVACY_POLICY,
                        className:
                          "text-green-gray-4 hover:text-green-gray-4/70 text-md",
                        target: "_blank",
                        children: "Privacy Policy",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    71344: function (e, r, n) {
      n.r(r),
        n.d(r, {
          HeaderDefaultLayout: function () {
            return x;
          },
        });
      var t = n(57437),
        l = n(3092),
        a = n(27648),
        s = n(2265),
        c = n(95395),
        i = (e) =>
          (0, t.jsxs)(l.zE, {
            className: "hidden md:block",
            value: c.mQ.community,
            children: [
              (0, t.jsx)(l.Lo, { children: "Community" }),
              (0, t.jsx)(l.CG, {
                className:
                  "rounded-3xl px-20 py-6 grid grid-cols-3 gap-[100px]",
                children: c.SJ.map((e, r) => {
                  let { ...n } = e;
                  return (0, s.createElement)(a.default, {
                    legacyBehavior: !0,
                    scroll: !0,
                    ...n,
                    key: r,
                  });
                }),
              }),
            ],
          }),
        o = (e) =>
          (0, t.jsxs)(l.zE, {
            className: "hidden md:block",
            value: c.mQ.learn,
            children: [
              (0, t.jsx)(l.Lo, { children: "Learn" }),
              (0, t.jsx)(l.CG, {
                className:
                  "rounded-3xl px-8 xl:px-20 py-6 grid grid-cols-3 gap-8 xl:gap-[100px]",
                children: Object.keys(c.Yw).map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-grey-4 px-3 text-md ",
                          children: e,
                        }),
                        (0, t.jsx)("div", {
                          className: "flex flex-col",
                          children: c.Yw[e].map((e, r) => {
                            let { ...n } = e;
                            return (0, s.createElement)(a.default, {
                              legacyBehavior: !0,
                              ...n,
                              key: r,
                            });
                          }),
                        }),
                      ],
                    },
                    e
                  )
                ),
              }),
            ],
          }),
        d = n(37053);
      let u = (e) =>
        (0, t.jsxs)(l.zE, {
          className: "block md:hidden",
          value: c.mQ.mobile,
          children: [
            (0, t.jsx)(l.Lo, {
              icon: (0, t.jsx)(t.Fragment, {}),
              className:
                "p-1 focus:bg-transparent data-[active=true]:bg-transparent hover:bg-transparent data-[state=open]:bg-green-gray-12",
              children: (0, t.jsx)(l.gg, {}),
            }),
            (0, t.jsx)(l.CG, {
              className: "rounded-b-3xl pb-6 px-1",
              hasAnimation: !1,
              children: (0, t.jsxs)("div", {
                className:
                  "max-h-[calc(100vh-200px)] overflow-auto px-5 flex flex-col gap-6 rounded-b-3xl",
                children: [
                  (0, t.jsx)(l.zx, {
                    size: "lg",
                    asChild: !0,
                    fluid: !0,
                    children: (0, t.jsx)(a.default, {
                      href: "./app/index.html",
                      target: "_blank",
                      children: "Launch App",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-5",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-gray-1 text-lg font-semibold",
                        children: "Learn",
                      }),
                      Object.keys(c.Yw).map((e) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-grey-4 text-md",
                                children: e,
                              }),
                              (0, t.jsx)("div", {
                                className: "flex flex-col gap-3",
                                children: c.Yw[e].map((e, r) => {
                                  let { children: n, ...l } = e;
                                  return (0, s.createElement)(
                                    a.default,
                                    { legacyBehavior: !0, ...l, key: r },
                                    (0, t.jsx)(d.g7, {
                                      className: "bg-green-gray-10",
                                      "data-hover": "on",
                                      children: n,
                                    })
                                  );
                                }),
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-5",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-gray-1 text-lg font-semibold",
                        children: "Community",
                      }),
                      (0, t.jsx)("div", {
                        className: "flex flex-col gap-3",
                        children: c.SJ.map((e, r) => {
                          let { children: n, ...l } = e;
                          return (0, s.createElement)(
                            a.default,
                            { legacyBehavior: !0, ...l, key: r },
                            (0, t.jsx)(d.g7, {
                              className: "bg-green-gray-10",
                              "data-hover": "on",
                              children: n,
                            })
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-5",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-gray-1 text-lg font-semibold",
                        children: "Treehouse Labs",
                      }),
                      (0, t.jsx)(a.default, {
                        href: l.b_.TREEHOUSE_LABS,
                        legacyBehavior: !0,
                        passHref: !0,
                        shallow: !0,
                        children: (0, t.jsx)(l.wV, {
                          className: "rounded-xl bg-green-gray-10",
                          target: "_blank",
                          children: "Treehouse Labs",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      function h(e) {
        let { onValueChange: r } = e;
        return (0, t.jsxs)(l.i9, {
          onValueChange: r,
          delayDuration: 0,
          skipDelayDuration: 0,
          children: [
            (0, t.jsxs)(l.S6, {
              children: [
                (0, t.jsx)(o, {}),
                (0, t.jsx)(i, {}),
                (0, t.jsx)(l.zE, {
                  className: "hidden md:block",
                  value: "navigation-menu-th-labs",
                  children: (0, t.jsx)(a.default, {
                    href: l.b_.TREEHOUSE_LABS,
                    legacyBehavior: !0,
                    passHref: !0,
                    target: "_blank",
                    children: (0, t.jsx)(l.wV, {
                      className: "font-normal",
                      target: "_blank",
                      children: "Treehouse Labs",
                    }),
                  }),
                }),
                (0, t.jsx)(u, {}),
              ],
            }),
            (0, t.jsx)(l.OK, {
              className:
                "w-screen md:w-[calc(100vw-160px)] mt-5 md:mt-8 rounded-b-3xl md:rounded-3xl max-w-screen-2xl",
              classNameBox: "left-auto right-[-24px] md:right-auto",
            }),
          ],
        });
      }
      function x(e) {
        let [r, n] = (0, s.useState)(!1),
          c = (0, s.useCallback)((e) => n("" !== e), []);
        return (0, t.jsx)("header", {
          className: (0, l.cn)(
            "sticky top-0 z-[40] w-full",
            r ? "bg-green-gray-12" : "bg-green-gray-13"
          ),
          children: (0, t.jsxs)("section", {
            className:
              "container flex md:px-20 h-[80px] md:h-[72px] justify-between items-center",
            children: [
              (0, t.jsx)("div", {
                className: "min-w-[133px]",
                children: (0, t.jsx)(a.default, {
                  href: l.Yj.HOME_PAGE,
                  shallow: !0,
                  scroll: !0,
                  passHref: !0,
                  children: (0, t.jsx)(l.U, {
                    className:
                      "w-[95px] h-8 min-h-8 min-w-[95px] hover:opacity-70",
                  }),
                }),
              }),
              (0, t.jsx)(h, { onValueChange: c }),
              (0, t.jsx)("div", {
                className: "hidden md:block",
                children: (0, t.jsx)(l.zx, {
                  size: "md",
                  className: "w-[133px]",
                  asChild: !0,
                  children: (0, t.jsx)(a.default, {
                    href: "./app/index.html",
                    target: "_blank",
                    children: "Launch App",
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    72762: function (e, r, n) {
      n(57437), n(3092), n(27648);
    },
    34463: function (e, r, n) {
      n.d(r, {
        Ce: function () {
          return t.useIsDesktop;
        },
      }),
        n(28679),
        n(55009),
        n(71344),
        n(72762);
      var t = n(20814);
    },
  },
]);
