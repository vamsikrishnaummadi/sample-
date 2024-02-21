import {H as C, I as u, a7 as y, Z as Y, ac as ee, C as r, ad as pe, a1 as te, P as Z, J as b, U as Q, V as ge, K as i, W as S, N as p, v as G, a0 as ce, aj as re, r as _, T as ue, _ as A, l as he, F as ye, E as P, B as J, S as U, X as x, O as B, R as be, aA as we, aV as ke, aW as Se, aq as Ce, a4 as H, M as oe, w as Ie, aX as $e, ae as z, af as Le, aS as Ae, aY as De, aZ as Te, a_ as Ee, a$ as Be, b0 as Pe, b1 as xe, b2 as Re, b3 as Ve, b4 as Ne, b5 as Oe, b6 as Fe, b7 as Me, b8 as Ge, b9 as Ue, ba as Ke, bb as je, bc as ze, bd as He, be as Ye, bf as We, bg as Xe, bh as qe, bi as Je, bj as Ze, bk as Qe, bl as et, bm as tt, bn as at, bo as st, bp as ot, bq as nt, br as it, bs as lt, bt as ct, bu as rt, bv as ut, bw as dt, bx as vt, by as _t, bz as mt, bA as ft} from "./modules-8ac77d1d.js";
import {f as M, _ as V, G as de, a as R, w as pt, C as ae, di as ve, dj as gt, b as ne, aW as ht, S as _e, B as yt, dk as bt, dl as wt, dm as kt, dn as St, b7 as Ct, s as It, c as $t, i as me, dp as ie, ag as Lt} from "./page-activity-d6acd6b5.js";
import "./native/index-79255603.js";
import "./en-50e0d64b.js";
import "./rus-be103059.js";
import "./vi-8cadb4e1.js";
import "./id-94d444aa.js";
import "./hd-eadb17fe.js";
import "./tha-3145a154.js";
import "./md-426dfcb9.js";
import "./bra-9252c082.js";
import "./my-c960f939.js";
import "./bdt-611cea81.js";
import "./zh-94c82ee8.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        o(s);
    new MutationObserver(s=>{
        for (const n of s)
            if (n.type === "childList")
                for (const l of n.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(s) {
        const n = {};
        return s.integrity && (n.integrity = s.integrity),
        s.referrerPolicy && (n.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? n.credentials = "include" : s.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function o(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const n = a(s);
        fetch(s.href, n)
    }
}
)();
const At = (t,e)=>{
    const a = t[e];
    return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((o,s)=>{
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + e)))
    }
    )
}
  , Dt = C({
    __name: "Icon",
    props: {
        name: {
            type: String,
            required: !0
        }
    },
    setup(t) {
        const e = t
          , a = pe(()=>At(Object.assign({
            "../../assets/icons/tabBarIcons/activity.svg": ()=>M(()=>import("./activity-19706f6f.js"), ["assets/js/activity-19706f6f.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css"]),
            "../../assets/icons/tabBarIcons/chat.svg": ()=>M(()=>import("./chat-bb59b4a2.js"), ["assets/js/chat-bb59b4a2.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css"]),
            "../../assets/icons/tabBarIcons/home.svg": ()=>M(()=>import("./home-3bf44fd3.js"), ["assets/js/home-3bf44fd3.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css"]),
            "../../assets/icons/tabBarIcons/main.svg": ()=>M(()=>import("./main-722ff665.js"), ["assets/js/main-722ff665.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css"]),
            "../../assets/icons/tabBarIcons/promotion.svg": ()=>M(()=>import("./promotion-1ac8397d.js"), ["assets/js/promotion-1ac8397d.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css"]),
            "../../assets/icons/tabBarIcons/wallet.svg": ()=>M(()=>import("./wallet-5ea054ae.js"), ["assets/js/wallet-5ea054ae.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css"])
        }), `../../assets/icons/tabBarIcons/${e.name}.svg`))
          , o = e.name === "promotion"
          , s = e.name === "wallet";
        return (n,l)=>(u(),
        y(ee(r(a)), {
            viewBox: o ? "0 0 140 140" : "0 0 56 56",
            class: Y({
                wallet: s
            })
        }, null, 8, ["viewBox", "class"]))
    }
})
  , Tt = {
    class: "tabbar__container"
}
  , Et = ["onClick"]
  , Bt = C({
    __name: "index",
    setup(t) {
        const e = te()
          , a = Z();
        async function o(n) {
            await e.push({
                name: n
            })
        }
        const s = [{
            name: "home"
        }, {
            name: "activity"
        }, {
            name: "promotion"
        }, {
            name: "wallet"
        }, {
            name: "main"
        }];
        return (n,l)=>(u(),
        b("div", Tt, [(u(),
        b(Q, null, ge(s, (c,m)=>i("div", {
            class: Y(["tabbar__container-item", {
                active: c.name === r(a).name
            }]),
            key: c + "" + m,
            onClick: v=>o(c.name)
        }, [S(Dt, {
            name: c.name
        }, null, 8, ["name"]), i("span", null, p(n.$t(c.name)), 1)], 10, Et)), 64))]))
    }
});
const Pt = V(Bt, [["__scopeId", "data-v-76c247f8"]]);
function xt() {
    const t = de()
      , e = ()=>{
        document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0)
    }
    ;
    G(()=>{
        document.addEventListener("visibilitychange", e)
    }
    ),
    ce(()=>{
        document.removeEventListener("visibilitychange", e)
    }
    )
}
const Rt = C({
    __name: "Customer",
    setup(t) {
        re(d=>({
            "17a7a9f6": j.value
        }));
        const e = _(!1)
          , a = _({
            x: 0,
            y: 0
        })
          , o = _(0)
          , s = _(0)
          , n = _(0)
          , l = _(0)
          , c = _(0)
          , m = _(0)
          , v = _();
        let I, N, O, D;
        const T = te();
        function K() {
            $(I, N, O, D) || T.push({
                name: "CustomerService"
            })
        }
        G(()=>{
            v.value = document.getElementById("customerId")
        }
        );
        function F(d) {
            e.value = !0;
            var g;
            d.touches ? g = d.touches[0] : g = d,
            a.value.x = g.clientX,
            a.value.y = g.clientY,
            o.value = v.value.offsetLeft,
            s.value = v.value.offsetTop,
            I = d.clientX,
            N = d.clientY
        }
        function f(d) {
            if (e.value) {
                var g, L = document.getElementById("customerId"), E = L.clientWidth, W = L.clientHeight, h = document.documentElement.clientHeight, k = document.documentElement.clientWidth;
                d.touches ? g = d.touches[0] : g = d,
                n.value = g.clientX - a.value.x,
                l.value = g.clientY - a.value.y,
                c.value = o.value + n.value,
                m.value = s.value + l.value,
                c.value <= 0 && (c.value = 0),
                m.value <= 0 && (m.value = 0),
                c.value >= k - E && (c.value = k - E),
                m.value >= h - W && (m.value = h - W),
                v.value.style.left = c.value + "px",
                v.value.style.top = m.value + "px",
                document.addEventListener("touchmove", function() {
                    d.preventDefault()
                }, !1)
            }
            d.stopPropagation(),
            d.preventDefault()
        }
        function w(d) {
            e.value = !1,
            O = d.clientX,
            D = d.clientY
        }
        function $(d, g, L, E) {
            return !(Math.sqrt((d - L) * (d - L) + (g - E) * (g - E)) <= 1)
        }
        const j = _("bahnschrift");
        return (d,g)=>{
            const L = ue("lazy");
            return u(),
            b("div", {
                class: "customer",
                onClick: K,
                onMousedown: F,
                onTouchstart: F,
                onMousemove: f,
                onTouchmove: f,
                onMouseup: w,
                id: "customerId"
            }, [A(i("img", null, null, 512), [[L, r(R)("home", "icon_sevice")]])], 32)
        }
    }
});
const Vt = {
    class: "start-page"
}
  , Nt = ["src"]
  , Ot = C({
    __name: "StartPage",
    setup(t) {
        const e = "ibdg"
          , a = {}.VITE_STARTEXT || "";
        return (o,s)=>(u(),
        b("div", Vt, [i("div", null, [i("div", {
            class: Y(["dice", [r(e)]])
        }, null, 2), i("p", null, p(r(a) || o.$t("fairAndSafe")), 1), i("img", {
            class: Y(["logo", [r(e)]]),
            src: r(R)("home/StartPage", r(pt)())
        }, null, 10, Nt)])]))
    }
});
const Ft = V(Ot, [["__scopeId", "data-v-4ffe0462"]])
  , Mt = {
    class: "header"
}
  , Gt = {
    class: "title"
}
  , Ut = {
    class: "tip"
}
  , Kt = {
    class: "container"
}
  , jt = {
    class: "footer"
}
  , zt = C({
    __name: "dialog",
    setup(t) {
        const e = te()
          , a = Z()
          , o = _(!1)
          , {store: s, closeFirstSave: n} = ae()
          , {ActiveSotre: l, getFirstRechargeList: c} = ve()
          , m = he(new Date).format("YYYY-MM-DD")
          , v = ye("firstSave", null)
          , I = P(()=>v.value == m)
          , N = ()=>{
            I.value ? (v.value = "",
            localStorage.removeItem("firstSave")) : v.value = m
        }
          , O = ()=>{
            o.value = !1,
            n()
        }
          , D = ["activity", "home", "main", "wallet", "promotion"];
        J(()=>a.name, f=>{
            D.includes(a.name) && T()
        }
        );
        const T = ()=>{
            v.value != m && c().then(f=>{
                if (!f.length)
                    return o.value = !1;
                const w = f.find($=>$.isFinshed);
                w && (l.value.isShowFirstSaveDialog = !1),
                w || (o.value = !0)
            }
            )
        }
          , K = ()=>{
            o.value = !1,
            n(!0),
            e.push({
                name: "FirstRecharge"
            })
        }
          , F = ()=>{
            o.value = !1,
            n(!0),
            e.push({
                name: "Recharge"
            })
        }
        ;
        return G(()=>{
            D.includes(a.name) && T()
        }
        ),
        (f,w)=>{
            const $ = U("van-dialog");
            return u(),
            y($, {
                show: o.value,
                "onUpdate:show": w[0] || (w[0] = j=>o.value = j),
                className: "firstSaveDialog"
            }, {
                title: x(()=>[i("div", Mt, [i("div", Gt, p(f.$t("firstDialogH")), 1), i("div", Ut, p(f.$t("firstDialogTip")), 1)])]),
                footer: x(()=>[i("div", jt, [i("div", {
                    class: Y(["active", {
                        a: I.value
                    }]),
                    onClick: N
                }, p(f.$t("noTipToday")), 3), i("div", {
                    class: "btn",
                    onClick: K
                }, p(f.$t("activity")), 1)])]),
                default: x(()=>[i("div", Kt, [S(gt, {
                    list: r(l).FirstRechargeList,
                    onGorecharge: F
                }, null, 8, ["list"])]), i("div", {
                    class: "close",
                    onClick: O
                })]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Ht = V(zt, [["__scopeId", "data-v-fc801a01"]])
  , Yt = {
    class: "dialog-window"
}
  , Wt = {
    class: "dialog-wrapper"
}
  , Xt = {
    class: "dialog-title"
}
  , qt = {
    class: "dialog-content"
}
  , Jt = {
    class: "dialog-window"
}
  , Zt = {
    class: "dialog-wrapper"
}
  , Qt = {
    class: "dialog-title"
}
  , ea = {
    class: "dialog-tips"
}
  , ta = {
    class: "dialog-content"
}
  , aa = {
    class: "dialog-tips",
    style: {
        "margin-bottom": "0"
    }
}
  , sa = C({
    __name: "AllPageDialog",
    setup(t) {
        Z();
        const {ActiveSotre: e} = ve()
          , {store: a, closeInvite: o, showFirstSave: s} = ae();
        return (n,l)=>{
            const c = U("van-dialog")
              , m = ue("lazy");
            return u(),
            b(Q, null, [r(s) ? (u(),
            y(Ht, {
                key: 0
            })) : B("", !0), S(c, {
                show: r(e).showReceiveDialog,
                "onUpdate:show": l[1] || (l[1] = v=>r(e).showReceiveDialog = v),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: x(()=>[i("div", Yt, [i("div", Wt, [A(i("img", null, null, 512), [[m, r(R)("activity/DailyTask", "confirmationReceived")]]), i("div", Xt, p(n.$t("awardsReceived")), 1), i("div", qt, [A(i("img", null, null, 512), [[m, r(R)("activity/DailyTask", "amountIcon")]]), i("span", null, p(r(ne)(r(e).receiveAmount)), 1)]), i("div", {
                    class: "dialog-btn",
                    onClick: l[0] || (l[0] = v=>r(e).showReceiveDialog = !1)
                }, p(n.$t("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"]), S(c, {
                show: r(a).invite,
                "onUpdate:show": l[3] || (l[3] = v=>r(a).invite = v),
                "show-confirm-button": !1,
                className: "noOverHidden"
            }, {
                default: x(()=>[i("div", Jt, [i("div", Zt, [A(i("img", null, null, 512), [[m, r(R)("activity/DailyTask", "confirmationReceived")]]), i("div", Qt, p(n.$t("inviteTips")), 1), i("p", ea, p(n.$t("inviteAmount")), 1), i("div", ta, [i("span", aa, p(n.$t("commissionAmount")), 1), i("span", null, p(r(ne)(r(a).rebateAmount)), 1)]), i("div", {
                    class: "dialog-btn",
                    onClick: l[2] || (l[2] = v=>r(o)())
                }, p(n.$t("receive")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const oa = V(sa, [["__scopeId", "data-v-6c5d1234"]])
  , na = C({
    __name: "App",
    setup(t) {
        re(h=>({
            "7688837a": $.value
        }));
        const {openAll: e} = ae()
          , a = Ct()
          , o = _(!1)
          , s = _(!1)
          , n = Z()
          , l = ht()
          , c = _e()
          , {locale: m} = be()
          , v = de()
          , I = _(!1)
          , N = P(()=>n.meta.tabBar)
          , O = P(()=>["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C"].includes(n.path))
          , D = _(0)
          , T = _(Math.floor(Math.random() * 1e4))
          , K = P(()=>n.name + T.value)
          , F = ()=>{
            a.on("changeKeepAliveKey", ()=>{
                T.value = Math.floor(Math.random() * 1e4)
            }
            )
        }
        ;
        sessionStorage.getItem("isload") ? o.value = !1 : (s.value = !0,
        sessionStorage.setItem("isload", s.value.toString()),
        o.value = !0),
        c.getHomeSetting(),
        J(()=>c.getAreacode, h=>{
            h && l.setNumberType(h.substring(1))
        }
        ),
        J(()=>c.getDL, h=>{
            m.value = h,
            v.updateLanguage(h),
            It(h),
            $t(me.global.t)
        }
        ),
        setTimeout(()=>{
            o.value = !1
        }
        , 2e3);
        const f = _(!1)
          , w = yt();
        w.$subscribe((h,k)=>{
            f.value = k.isLoading,
            w.setLoading(f.value)
        }
        );
        const $ = _("bahnschrift");
        let j = bt()
          , d = c.getLanguage
          , g = wt(j, d);
        const L = async h=>{
            const k = [{
                title: "vi",
                fontStyle: "bahnschrift"
            }, {
                title: "else",
                fontStyle: "'Roboto', 'Inter', sans-serif"
            }]
              , X = k.findIndex(q=>q.title == g);
            X >= 0 ? $.value = k[X].fontStyle : $.value = k[k.length - 1].fontStyle
        }
          , E = ()=>{
            a.on("keyChange", ()=>{
                D.value++
            }
            ),
            a.on("changeIsGame", ()=>{
                I.value = !I.value,
                f.value = !f.value
            }
            )
        }
          , W = ()=>{
            a.off("keyChange"),
            a.off("changeKeepAliveKey"),
            a.off("changeIsGame")
        }
        ;
        return l.setNumberType(c.getAreacode.substring(1)),
        L(),
        G(()=>{
            kt() && St(),
            e(),
            W(),
            E(),
            F()
        }
        ),
        xt(),
        (h,k)=>{
            const X = U("LoadingView");
            return u(),
            b(Q, null, [S(X, {
                loading: f.value,
                type: "loading",
                isGame: I.value
            }, {
                default: x(()=>[(u(),
                y(r(ke), {
                    key: D.value
                }, {
                    default: x(({Component: q})=>[(u(),
                    y(we, {
                        max: 1
                    }, [r(n).meta.keepAlive ? (u(),
                    y(ee(q), {
                        key: K.value
                    })) : B("", !0)], 1024)), r(n).meta.keepAlive ? B("", !0) : (u(),
                    y(ee(q), {
                        key: 0
                    }))]),
                    _: 1
                })), O.value ? (u(),
                y(r(Se), {
                    key: 1,
                    license: "15861567"
                })) : (u(),
                y(Rt, {
                    key: 0
                })), N.value ? (u(),
                y(Pt, {
                    key: 2
                })) : B("", !0)]),
                _: 1
            }, 8, ["loading", "isGame"]), o.value ? (u(),
            y(Ft, {
                key: 0
            })) : B("", !0), S(oa)], 64)
        }
    }
});
const ia = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-debounce: value must be an array that includes a function and a number");
        let a = null;
        const o = e.value[0]
          , s = e.value[1];
        t.__handleClick__ = function() {
            a && clearTimeout(a),
            a = setTimeout(()=>{
                o()
            }
            , s || 500)
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , la = {
    mounted(t, e) {
        if (typeof e.value[0] != "function" || typeof e.value[1] != "number")
            throw new Error("v-throttle: value must be an array that includes a function and a number");
        let a = null;
        const o = e.value[0]
          , s = e.value[1];
        t.__handleClick__ = function() {
            a && clearTimeout(a),
            t.disabled || (t.disabled = !0,
            o(),
            a = setTimeout(()=>{
                t.disabled = !1
            }
            , s || 500))
        }
        ,
        t.addEventListener("click", t.__handleClick__)
    },
    beforeUnmount(t) {
        t.removeEventListener("click", t.__handleClick__)
    }
}
  , ca = {
    mounted(t, e) {
        t.addEventListener("input", a=>{
            const s = t.value.replace(/\D+/g, "");
            t.value = s,
            e.value = s
        }
        )
    }
}
  , ra = t=>({
    beforeMount: (e,a)=>{
        e.classList.add("ar-lazyload");
        const {value: o} = a;
        e.dataset.origin = o,
        t.observe(e)
    }
    ,
    updated(e, a) {
        e.dataset.origin = a.value,
        t.observe(e)
    },
    unmounted(e, a) {
        t.unobserve(e)
    },
    mounted(e, a) {
        t.observe(e)
    }
})
  , ua = {
    mounted(t, e) {
        let a = 0;
        const o = e.value && e.value.wait ? e.value.wait : 3e3
          , s = n=>{
            const l = Date.now();
            l - a >= o && (a = l,
            e.value && e.value.handler && e.value.handler(n))
        }
        ;
        t.addEventListener("click", s),
        t._throttleClickCleanup = ()=>{
            t.removeEventListener("click", s)
        }
    },
    unmounted(t) {
        t._throttleClickCleanup && t._throttleClickCleanup(),
        delete t._throttleClickCleanup
    }
}
  , da = {
    mounted(t, e) {
        const {value: a} = e;
        let o = Ce("permission", null);
        o.value === null || !a || (o && (o = JSON.parse(o.value)),
        o && o[a] === !1 && (t.style.display = "none"))
    }
}
  , le = {
    debounce: ia,
    throttle: la,
    onlyNum: ca,
    throttleClick: ua,
    haspermission: da
}
  , va = {
    install: function(t) {
        Object.keys(le).forEach(a=>{
            t.directive(a, le[a])
        }
        );
        const e = new IntersectionObserver(a=>{
            a.forEach(o=>{
                if (o.isIntersecting) {
                    const s = o.target;
                    s.src = s.dataset.origin || R("images", "avatar"),
                    s.onerror = ()=>{
                        let n = s.dataset.img;
                        s.src = n || R("images", "avatar"),
                        s.style.objectFit = "contain"
                    }
                    ,
                    s.classList.remove("ar-lazyload"),
                    e.unobserve(s)
                }
            }
            )
        }
        ,{
            rootMargin: "0px 0px -50px 0px"
        });
        t.directive("lazy", ra(e))
    }
}
  , _a = {
    class: "navbar__content"
}
  , ma = {
    class: "navbar__content-center"
}
  , fa = {
    class: "navbar__content-title"
}
  , pa = C({
    __name: "NavBar",
    props: {
        title: {
            type: String,
            default: ""
        },
        placeholder: {
            type: Boolean,
            default: !0
        },
        leftArrow: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            type: String,
            default: "#3F3F3F"
        },
        classN: {
            type: String,
            default: ""
        },
        headLogo: {
            type: Boolean,
            default: !1
        },
        headerUrl: {
            type: String,
            default: ""
        }
    },
    emits: ["click-left", "click-right"],
    setup(t, {emit: e}) {
        const a = _()
          , o = _e()
          , s = P(()=>o.getHeadLogo)
          , n = ()=>{
            e("click-left")
        }
          , l = ()=>{
            e("click-right")
        }
        ;
        return G(()=>{}
        ),
        (c,m)=>{
            const v = U("van-icon");
            return u(),
            b("div", {
                class: "navbar",
                ref_key: "navbar",
                ref: a
            }, [i("div", {
                class: "navbar-fixed",
                style: oe({
                    background: t.backgroundColor
                })
            }, [i("div", _a, [i("div", {
                class: "navbar__content-left",
                onClick: n
            }, [H(c.$slots, "left", {}, ()=>[t.leftArrow ? (u(),
            y(v, {
                key: 0,
                name: "arrow-left"
            })) : B("", !0)], !0)]), i("div", ma, [t.headLogo ? (u(),
            b("div", {
                key: 0,
                class: "headLogo",
                style: oe({
                    backgroundImage: "url(" + (t.headerUrl || s.value) + ")"
                })
            }, null, 4)) : B("", !0), H(c.$slots, "center", {}, ()=>[i("div", fa, p(t.title), 1)], !0)]), i("div", {
                class: "navbar__content-right",
                onClick: l
            }, [H(c.$slots, "right", {}, void 0, !0)])])], 4)], 512)
        }
    }
});
const ga = V(pa, [["__scopeId", "data-v-58c5e826"]])
  , ha = {
    class: "ar-loading-view"
}
  , ya = {
    class: "loading-wrapper"
}
  , ba = {
    class: "com__box"
}
  , wa = Le('<div class="loading" data-v-1690b988><div class="shape shape-1" data-v-1690b988></div><div class="shape shape-2" data-v-1690b988></div><div class="shape shape-3" data-v-1690b988></div><div class="shape shape-4" data-v-1690b988></div></div>', 1)
  , ka = [wa]
  , Sa = {
    class: "skeleton-wrapper"
}
  , Ca = C({
    __name: "LoadingView",
    props: {
        loading: {
            type: Boolean
        },
        type: {},
        isGame: {
            type: Boolean
        }
    },
    setup(t) {
        const e = t
          , a = _();
        let o = null;
        return G(async()=>{
            const s = "ibdg";
            await Ie(),
            o = $e.loadAnimation({
                container: a.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: `/loading/${s}/data.json`
            })
        }
        ),
        J(()=>e.loading, ()=>{
            e.type === "loading" && !e.isGame && (e.loading ? o && o.play() : o && o.stop())
        }
        ),
        ce(()=>{
            o && o.destroy(),
            o = null
        }
        ),
        (s,n)=>{
            const l = U("VanSkeleton");
            return u(),
            b(Q, null, [A(i("div", ha, [H(s.$slots, "template", {}, ()=>[A(i("div", ya, [A(i("div", {
                ref_key: "element",
                ref: a,
                class: "loading-animat"
            }, null, 512), [[z, !s.isGame]]), A(i("div", ba, ka, 512), [[z, s.isGame]])], 512), [[z, s.type === "loading"]]), A(i("div", Sa, [S(l, {
                row: 10
            }), S(l, {
                title: "",
                avatar: "",
                row: 5
            }), S(l, {
                title: "",
                row: 5
            })], 512), [[z, s.type === "skeleton"]])], !0)], 512), [[z, s.loading]]), H(s.$slots, "default", {}, void 0, !0)], 64)
        }
    }
});
const Ia = V(Ca, [["__scopeId", "data-v-1690b988"]]);
const $a = ["xlink:href"]
  , La = {
    __name: "svgIcons",
    props: {
        name: {
            type: String,
            required: !0
        },
        color: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const e = t
          , a = P(()=>`#icon-${e.name}`)
          , o = P(()=>e.name ? `svg-icon icon-${e.name}` : "svg-icon");
        return (s,n)=>(u(),
        b("svg", Ae({
            class: o.value
        }, s.$attrs, {
            style: {
                color: t.color
            }
        }), [i("use", {
            "xlink:href": a.value
        }, null, 8, $a)], 16))
    }
}
  , Aa = {
    class: "ar-searchbar__selector"
}
  , Da = {
    class: "ar-searchbar__selector-default"
}
  , Ta = C({
    __name: "ArSelect",
    props: {
        selectName: {
            type: String,
            default: ""
        }
    },
    emits: ["click-select"],
    setup(t, {emit: e}) {
        const a = ()=>{
            e("click-select")
        }
        ;
        return (o,s)=>{
            const n = U("van-icon");
            return u(),
            b("div", Aa, [i("div", {
                onClick: a
            }, [i("span", Da, p(t.selectName), 1), S(n, {
                name: "arrow-down"
            })])])
        }
    }
});
const Ea = V(Ta, [["__scopeId", "data-v-f330f1f2"]])
  , Ba = t=>{
    t.component("NavBar", ga),
    t.component("LoadingView", Ia),
    t.component("ArSelect", Ea),
    t.component("svg-icon", La),
    t.use(De).use(Te).use(Ee).use(Be).use(Pe).use(xe).use(Re).use(Ve).use(Ne).use(Oe).use(Fe).use(Me).use(Ge).use(Ue).use(Ke).use(je).use(ze).use(He).use(Ye).use(We).use(Xe).use(qe).use(Je).use(Ze).use(Qe).use(et).use(tt).use(at).use(st).use(ot).use(nt).use(it).use(lt).use(ct).use(rt).use(ut).use(dt).use(me).use(va).use(vt);
    let e = t.config.globalProperties
      , a = {};
    a.TopHeight = 38,
    Object.keys(ie.refiter).forEach(o=>{
        a[o] = ie.refiter[o]
    }
    ),
    e.$u = a
}
  , Pa = {};
({}).VITE_POINT && Pa[{}.VITE_POINT]();
const se = _t(na)
  , fe = mt();
Ba(se);
fe.use(ft);
se.use(Lt).use(fe);
se.mount("#app");
