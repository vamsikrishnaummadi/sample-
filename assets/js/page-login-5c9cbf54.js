import {v as ye, a as Ge, L as je} from "./page-home-7e4756c8.js";
import {H as O, r as c, a1 as ee, R as ne, E as R, S as j, T as oe, J as S, W as T, X as z, I as $, K as e, N as n, C as o, _ as E, ag as pe, Y as V, j as q, v as de, y as Xe, a7 as ae, M as J, O as G, ae as Y, Z as U, w as Q, a8 as ve, a9 as me, B as be, G as ge, ay as Ye, aG as Fe, a0 as xe, a6 as Ke} from "./modules-8ac77d1d.js";
import {a as H, _ as W, i as fe, aW as te, G as Ze, aX as Je, j as ue, aY as Qe, aZ as Re, a_ as Ee, a$ as et, B as Ve, $ as Be, b0 as Ne, b1 as Ue, b2 as tt, b3 as st, C as ot} from "./page-activity-d6acd6b5.js";
const at = {
    class: "popups"
}
  , nt = {
    class: "popup-content"
}
  , lt = {
    class: "tit"
}
  , rt = {
    class: "con"
}
  , it = {
    class: "info"
}
  , ut = {
    class: "txt"
}
  , ct = {
    class: "txt"
}
  , dt = {
    class: "box"
}
  , pt = ["placeholder"]
  , vt = {
    class: "lab"
}
  , mt = {
    class: "popup-foot"
}
  , _t = O({
    __name: "index",
    props: {
        showPopup: {
            type: Boolean,
            default: c(!1)
        }
    },
    emits: ["update:showPopup", "onConfirm", "onBack"],
    setup(p, {emit: k}) {
        const d = p
          , t = ee()
          , {t: i} = ne()
          , s = R({
            get() {
                return d.showPopup || !1
            },
            set(b) {
                k("update:showPopup", b)
            }
        })
          , a = c("")
          , _ = ()=>{
            if (!a.value)
                return q(i("googleKey"));
            k("onConfirm", a.value.toString())
        }
          , r = ()=>{
            a.value = "",
            k("onBack")
        }
        ;
        function v() {
            t.push({
                name: "CustomerService"
            })
        }
        return (b,u)=>{
            const y = j("van-icon")
              , C = j("van-popup")
              , l = oe("throttle-click")
              , g = oe("lazy");
            return $(),
            S("div", at, [T(C, {
                show: s.value,
                "onUpdate:show": u[1] || (u[1] = f=>s.value = f),
                position: "center",
                round: "",
                class: "popup",
                "close-on-click-overlay": !1
            }, {
                default: z(()=>[e("div", nt, [e("div", lt, n(o(i)("googleVerification")), 1), e("div", rt, [e("div", it, [e("p", ut, n(o(i)("googleTip5")), 1), e("p", ct, n(o(i)("googleTip6")), 1)]), e("div", dt, [E(e("input", {
                    class: "input",
                    type: "text",
                    "onUpdate:modelValue": u[0] || (u[0] = f=>a.value = f),
                    maxlength: "6",
                    oninput: "value=value.replace(/\\D/g,'')",
                    placeholder: o(i)("PgoogleVerification")
                }, null, 8, pt), [[pe, a.value]]), e("p", vt, [T(y, {
                    class: "icon",
                    name: "warning-o"
                }), V(n(o(i)("PVerificationCode")) + " ", 1), e("span", {
                    onClick: v
                }, n(o(i)("contactServicer")), 1)])]), e("div", mt, [E(($(),
                S("div", null, [V(n(o(i)("confirm")), 1)])), [[l, {
                    handler: _,
                    wait: 1e3
                }]]), e("div", {
                    onClick: r
                }, n(o(i)("withdrawDialogDesc6")), 1)])]), E(e("img", {
                    class: "close",
                    onClick: r
                }, null, 512), [[g, o(H)("main", "close")]])])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const De = W(_t, [["__scopeId", "data-v-5acdbb67"]])
  , K = p=>(ve("data-v-3eaa4b0b"),
p = p(),
me(),
p)
  , ht = ["src"]
  , gt = ["src"]
  , ft = {
    key: 1,
    class: "captcha_message"
}
  , wt = {
    class: "captcha_message__icon"
}
  , yt = {
    key: 0,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg"
}
  , bt = K(()=>e("g", {
    fill: "none",
    "fill-rule": "evenodd",
    stroke: "#fff",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.5"
}, [e("path", {
    d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845"
}), e("path", {
    d: "M7 12.5l7 7 13-13"
})], -1))
  , $t = [bt]
  , kt = {
    key: 1,
    height: "28",
    viewBox: "0 0 28 28",
    width: "28",
    xmlns: "http://www.w3.org/2000/svg"
}
  , St = K(()=>e("g", {
    fill: "none",
    "fill-rule": "evenodd",
    stroke: "#fff",
    "stroke-width": "1.5"
}, [e("circle", {
    cx: "14",
    cy: "14",
    r: "13.25"
}), e("path", {
    d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , Ct = [St]
  , It = {
    class: "captcha_message__text"
}
  , Tt = {
    key: 2,
    class: "captcha_message loadding"
}
  , Pt = K(()=>e("div", {
    class: "captcha_message__icon captcha_message__icon--loadding"
}, null, -1))
  , Ft = K(()=>e("div", {
    class: "captcha_message__text"
}, "加载中...", -1))
  , xt = [Pt, Ft]
  , Rt = {
    key: 3,
    class: "captcha_message"
}
  , Et = K(()=>e("div", {
    class: "captcha_message__icon captcha_message__icon--loadding"
}, null, -1))
  , Vt = K(()=>e("div", {
    class: "captcha_message__text"
}, null, -1))
  , Bt = [Et, Vt]
  , Nt = K(()=>e("path", {
    d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
    "p-id": "820"
}, null, -1))
  , Ut = K(()=>e("path", {
    d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
    "p-id": "821"
}, null, -1))
  , Dt = [Nt, Ut]
  , Mt = {
    key: 0,
    class: "captcha__actions"
}
  , Lt = ["fill"]
  , Ht = K(()=>e("path", {
    d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
    "fill-rule": "nonzero"
}, null, -1))
  , Ot = [Ht]
  , Wt = O({
    __name: "SlideCaptcha",
    props: {
        width: {
            type: Number,
            default: 340
        },
        height: {
            type: Number,
            default: 212
        },
        barHeight: {
            type: Number,
            default: 40
        },
        handlerIconWidth: {
            type: Number,
            default: 16
        },
        handlerIconHeigth: {
            type: Number,
            default: 16
        },
        background: {
            type: String,
            default: "#eee"
        },
        circle: {
            type: Boolean,
            default: !1
        },
        radius: {
            type: String,
            default: "4px"
        },
        text: {
            type: String,
            default: "按住滑块拖动"
        },
        progressBarBg: {
            type: String,
            default: "#76c61d"
        },
        successTip: {
            type: String,
            default: "验证通过，超过80%用户"
        },
        failTip: {
            type: String,
            default: "验证未通过，拖动滑块将悬浮图像正确合并"
        },
        showRefresh: {
            type: Boolean,
            default: !1
        },
        refreshColor: {
            type: String,
            default: "#505050"
        }
    },
    emits: ["finish", "refresh"],
    setup(p, {expose: k, emit: d}) {
        const t = p
          , i = c(!1)
          , s = c(!1)
          , a = c(0)
          , _ = c(0)
          , r = c(!1)
          , v = c(!1)
          , b = c(!1)
          , u = c([])
          , y = c(void 0)
          , C = c(!1)
          , l = c(!1)
          , g = c(!1)
          , f = c("")
          , D = c("")
          , N = c(!1)
          , w = R(()=>({
            width: t.width + "px",
            height: t.height + "px",
            position: "relative",
            overflow: "hidden"
        }))
          , P = R(()=>({
            width: t.width + "px"
        }))
          , x = R(()=>({
            width: t.width + "px",
            height: t.barHeight + "px",
            lineHeight: t.barHeight + "px",
            background: t.background,
            borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius
        }))
          , A = R(()=>({
            background: t.progressBarBg,
            height: t.barHeight + "px",
            borderRadius: t.circle ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px" : t.radius
        }))
          , le = R(()=>({
            height: t.barHeight + "px",
            width: t.width + "px"
        }))
          , h = R(()=>({
            width: t.barHeight + "px",
            height: t.barHeight - 2 + "px"
        }))
          , F = R(()=>({
            width: t.handlerIconWidth + "px",
            height: t.handlerIconHeigth + "px"
        }))
          , se = R(()=>t.refreshColor)
          , M = R(()=>({
            color: t.refreshColor
        }))
          , re = c()
          , m = c()
          , I = c()
          , Z = c()
          , ie = c();
        de(()=>{}
        );
        const L = ()=>{
            i.value = !0,
            Q(()=>{
                Ie(),
                ze()
            }
            ),
            g.value = !0
        }
          , Le = (B,X)=>{
            g.value = !1,
            f.value = B,
            D.value = X
        }
          , He = ()=>{
            l.value = !0
        }
          , Oe = B=>{
            B.value = B,
            l.value = !1,
            C.value = !0
        }
          , Ie = ()=>{
            a.value = 0,
            _.value = 0,
            u.value = [],
            s.value = !1,
            b.value = !1,
            g.value = !1,
            l.value = !1,
            C.value = !1,
            N.value = !1,
            m && (m.value.style.width = 0),
            Z && (Z.value.style.left = 0),
            ie && (ie.value.style.left = 0)
        }
          , Te = ()=>{
            window.removeEventListener("touchmove", _e),
            window.removeEventListener("touchend", he),
            window.removeEventListener("mousemove", _e),
            window.removeEventListener("mouseup", he)
        }
          , Pe = B=>{
            !N.value && f.value && D.value && !b.value && (window.addEventListener("touchmove", _e),
            window.addEventListener("touchend", he),
            window.addEventListener("mousemove", _e),
            window.addEventListener("mouseup", he),
            s.value = !0,
            y.value = new Date,
            a.value = B.pageX || B.touches[0].pageX,
            _.value = B.pageY || B.touches[0].pageY)
        }
          , _e = B=>{
            if (s.value && !N.value && f.value && D.value && !b.value) {
                const X = (B.pageX || B.touches[0].pageX) - a.value
                  , we = (B.pageY || B.touches[0].pageY) - _.value;
                ie.value.style.left = X + "px",
                m.value.style.width = X + t.barHeight / 2 + "px",
                Z.value.style.left = X + "px",
                u.value.push({
                    x: Math.round(X),
                    y: Math.round(we),
                    t: new Date().getTime() - y.value.getTime()
                })
            }
        }
          , he = ()=>{
            s.value && !N.value && f.value && D.value && !b.value && (s.value = !1,
            b.value = !0,
            Te(),
            d("finish", {
                backgroundImageWidth: I.value.offsetWidth,
                backgroundImageHeight: I.value.offsetHeight,
                sliderImageWidth: Z.value.offsetWidth,
                sliderImageHeight: Z.value.offsetHeight,
                startTime: y.value,
                endTime: new Date,
                tracks: u.value
            }))
        }
          , We = B=>{
            i.value = B
        }
          , ze = ()=>{
            re.value.style.setProperty("--textColor", "#333"),
            re.value.style.setProperty("--width", Math.floor(t.width / 2) + "px"),
            re.value.style.setProperty("--pwidth", -Math.floor(t.width / 2) + "px")
        }
          , qe = ()=>{
            Ie(),
            d("refresh")
        }
        ;
        return k({
            startRequestVerify: He,
            endRequestVerify: Oe,
            startRequestGenerate: L,
            endRequestGenerate: Le,
            setShowHiden: We
        }),
        Xe(()=>{
            Te()
        }
        ),
        (B,X)=>{
            const we = j("van-popup");
            return $(),
            ae(we, {
                show: i.value,
                "onUpdate:show": X[0] || (X[0] = Ae=>i.value = Ae),
                teleport: "body"
            }, {
                default: z(()=>[e("div", {
                    class: "captcha",
                    style: J(P.value)
                }, [e("div", {
                    class: "captcha__main",
                    style: J(w.value)
                }, [f.value ? ($(),
                S("img", {
                    key: 0,
                    ref_key: "backgroundRef",
                    ref: I,
                    alt: "background",
                    class: "captcha_background",
                    src: f.value
                }, null, 8, ht)) : G("", !0), E(e("img", {
                    ref_key: "sliderRef",
                    ref: Z,
                    alt: "slider",
                    class: U(["captcha_slider", {
                        goFirst: r.value,
                        goKeep: v.value
                    }]),
                    src: D.value
                }, null, 10, gt), [[Y, D.value]]), C.value ? ($(),
                S("div", ft, [e("div", wt, [N.value ? ($(),
                S("svg", yt, $t)) : ($(),
                S("svg", kt, Ct))]), e("div", It, n(N.value ? p.successTip : p.failTip), 1)])) : G("", !0), g.value ? ($(),
                S("div", Tt, xt)) : G("", !0), l.value ? ($(),
                S("div", Rt, Bt)) : G("", !0)], 4), e("div", {
                    ref_key: "dragVerifyRef",
                    ref: re,
                    class: "captcha__bar",
                    style: J(x.value)
                }, [e("div", {
                    ref_key: "progressBarRef",
                    ref: m,
                    class: U(["captcha_progress_bar", {
                        goFirst2: r.value
                    }]),
                    style: J(A.value)
                }, null, 6), e("div", {
                    class: "captcha_progress_bar__text",
                    style: J(le.value)
                }, n(p.text), 5), e("div", {
                    ref_key: "handlerRef",
                    ref: ie,
                    class: U(["captcha_handler", {
                        goFirst: r.value
                    }]),
                    style: J(h.value),
                    onMousedown: Pe,
                    onTouchstart: Pe
                }, [($(),
                S("svg", {
                    "p-id": "819",
                    style: J(F.value),
                    version: "1.1",
                    viewBox: "0 0 1024 1024",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Dt, 4))], 38)], 4), p.showRefresh ? ($(),
                S("div", Mt, [e("a", {
                    class: "captcha__action",
                    style: J(M.value),
                    onClick: qe
                }, [($(),
                S("svg", {
                    fill: se.value,
                    height: "20px",
                    version: "1.1",
                    viewBox: "0 0 20 20",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Ot, 8, Lt))], 4)])) : G("", !0)], 4)]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Me = W(Wt, [["__scopeId", "data-v-3eaa4b0b"]])
  , zt = {
    class: "verifyInput__container"
}
  , qt = {
    class: "verifyInput__container-label"
}
  , At = {
    class: "verifyInput__container-label__icon"
}
  , Gt = {
    key: 0
}
  , jt = {
    key: 1
}
  , Xt = {
    class: "verifyInput__container-input"
}
  , Yt = ["placeholder"]
  , Kt = {
    key: 0
}
  , Zt = {
    key: 1
}
  , Jt = {
    class: "verifyInput__container-tip"
}
  , Qt = O({
    __name: "VerifyInput",
    props: {
        value: {},
        typeP: {},
        isShowVerifyT: {
            type: Boolean
        },
        placeholder: {
            default: fe.global.t("registerTip1")
        },
        sendFunc: {},
        number: {},
        numberType: {
            default: ""
        },
        showVerify: {
            type: Boolean,
            default: !0
        },
        email: {},
        loginType: {}
    },
    emits: ["update:value"],
    setup(p, {emit: k}) {
        const d = p
          , {t} = ne()
          , i = te()
          , a = Ze().getUserInfo
          , _ = ee()
          , r = R({
            get() {
                return d.value || ""
            },
            set(l) {
                k("update:value", l)
            }
        })
          , v = c(!0);
        async function b() {
            var g;
            if (v.value && (v.value = !1),
            i.countDown > 0)
                return;
            if (_.currentRoute.value.name === "rpwd" || _.currentRoute.value.name === "register" || _.currentRoute.value.name === "SettingC-UpdatePhone" && !d.isShowVerifyT) {
                if (!((g = d.number) != null && g.trim()))
                    return q({
                        message: t("telUndetected"),
                        wordBreak: "break-word"
                    });
                const f = (d.number.trim() + d.numberType.trim()).length;
                if (f < 10 || f > 14)
                    return q({
                        message: t("wrongTel"),
                        wordBreak: "break-word"
                    })
            } else if (!localStorage.getItem("numberType") && localStorage.getItem("number"))
                return q({
                    message: t("telUndetected"),
                    wordBreak: "break-word"
                });
            !d.sendFunc || await d.sendFunc() === -1 || i.sendCode()
        }
        const u = R(()=>{
            var l;
            return d.number ? d.numberType + d.number : ((l = a == null ? void 0 : a.verifyMethods) == null ? void 0 : l.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number")
        }
        )
          , y = l=>{
            const g = l.target;
            g.value = g.value.replace(/\s+/g, ""),
            g.value = g.value.replace(/[^\d]/g, "")
        }
        ;
        function C() {
            _.push({
                name: "CustomerService"
            })
        }
        return (l,g)=>{
            const f = j("van-icon")
              , D = oe("lazy");
            return E(($(),
            S("div", zt, [E(e("div", qt, [E(e("img", At, null, 512), [[D, o(H)("login", "verify")]]), l.typeP === "updatePhone" || l.typeP === "lock" ? ($(),
            S("span", Gt, n(l.$t("sendVerifyCodeTo")) + " " + n(o(Je)(u.value)), 1)) : ($(),
            S("span", jt, n(l.$t("verifyCode")), 1))], 512), [[Y, !(l.isShowVerifyT === !1 && l.typeP === "updatePhone")]]), e("div", Xt, [E(e("input", {
                type: "text",
                "onUpdate:modelValue": g[0] || (g[0] = N=>r.value = N),
                placeholder: l.$t("phEnterVerificationCode"),
                maxlength: "6",
                onInput: y
            }, null, 40, Yt), [[pe, r.value]]), e("button", {
                onClick: b,
                class: U({
                    inActive: o(i).countDown > 0
                })
            }, [o(i).countDown === 0 ? ($(),
            S("span", Kt, n(l.$t("send")), 1)) : ($(),
            S("span", Zt, n(o(i).countDown) + "S ", 1))], 2)]), E(e("div", Jt, [T(f, {
                name: "warning-o"
            }), e("span", null, n(l.$t("codeUnreceived")) + "?", 1), e("span", {
                onClick: g[1] || (g[1] = N=>C())
            }, n(l.$t("contactServicer")), 1)], 512), [[Y, !v.value]])], 512)), [[Y, l.showVerify]])
        }
    }
});
const es = W(Qt, [["__scopeId", "data-v-b0dc21fd"]])
  , ts = {
    class: "passwordInput__container"
}
  , ss = {
    class: "passwordInput__container-label"
}
  , os = {
    class: "passwordInput__container-label__icon"
}
  , as = {
    class: "passwordInput__container-input"
}
  , ns = ["type", "placeholder", "maxlength", "value"]
  , ls = ["src"]
  , rs = O({
    __name: "PasswordInput",
    props: {
        value: {},
        maxlength: {
            default: 15
        },
        label: {}
    },
    emits: ["update:value"],
    setup(p, {emit: k}) {
        const d = p
          , t = fe.global.t
          , i = c()
          , s = c("")
          , a = c(!1);
        be(s, w=>{
            k("update:value", w)
        }
        , {
            flush: "post"
        });
        const _ = w=>{
            if (a.value)
                return;
            let P = b();
            const x = w.target;
            x.value = x.value.replace(/\s+/g, "");
            const A = /[\u4e00-\u9fa5]/g;
            x.value = x.value.replace(A, ""),
            u(P, x.value),
            y(x.value),
            C(P)
        }
          , r = c(!1)
          , v = R(()=>H("login", `${r.value ? "eyeVisible" : "eyeInvisible"}`))
          , b = ()=>{
            var w = {
                start: 0,
                end: 0
            };
            return w.start = i.value.selectionStart,
            w.end = i.value.selectionEnd,
            w
        }
          , u = (w,P)=>{
            if (P.length > 1 && !P.includes("•")) {
                s.value = P;
                return
            }
            let x = P.split("•").join("");
            if (x) {
                let A = s.value.length - (P.length - w.end);
                s.value = s.value.slice(0, w.end - x.length) + x + s.value.slice(A)
            } else
                s.value = s.value.slice(0, w.end) + s.value.slice(w.end + s.value.length - P.length)
        }
          , y = w=>{
            if (r.value)
                return;
            if (!w) {
                i.value.value = "";
                return
            }
            let P = "";
            for (let x = 0; x < w.length; x++)
                P += "•";
            i.value.value = P
        }
          , C = w=>{
            i.value.setSelectionRange(w.start, w.end)
        }
          , l = ()=>{
            a.value = !0
        }
          , g = w=>{
            a.value && (a.value = !1,
            _(w))
        }
          , f = ()=>{
            r.value = !r.value,
            r.value ? i.value.value = s.value : y(s.value)
        }
        ;
        de(()=>{
            s.value = d.value || "",
            y(s.value)
        }
        );
        const D = localStorage.getItem("language")
          , N = R(()=>{
            let w, P = d.label;
            switch (D) {
            case "vi":
                switch (P) {
                case "Đặt mật khẩu":
                    w = t("setLoginPSW");
                    break;
                case "Xác nhận mật khẩu":
                    w = t("enterPswConfirmation");
                    break;
                default:
                    w = t("phEnter") + P;
                    break
                }
                break;
            default:
                w = t("phEnter") + P
            }
            return w
        }
        );
        return (w,P)=>{
            const x = oe("lazy");
            return $(),
            S("div", ts, [e("div", ss, [E(e("img", os, null, 512), [[x, o(H)("login", "password")]]), e("span", null, n(w.label), 1)]), e("div", as, [e("input", {
                type: r.value ? "text" : "password",
                placeholder: N.value,
                maxlength: w.maxlength,
                onInput: _,
                onCompositionstart: l,
                onCompositionend: g,
                ref_key: "inputPwd",
                ref: i,
                value: w.value,
                autocomplete: "new-password"
            }, null, 40, ns), e("img", {
                src: v.value,
                class: "eye",
                onClick: f
            }, null, 8, ls)])])
        }
    }
});
const ce = W(rs, [["__scopeId", "data-v-57d49070"]])
  , $e = p=>(ve("data-v-9c76da21"),
p = p(),
me(),
p)
  , is = {
    class: "RpwdPopup"
}
  , us = {
    class: "RpwdPopup-head"
}
  , cs = {
    class: "RpwdPopup-topTip"
}
  , ds = $e(()=>e("br", null, null, -1))
  , ps = {
    class: "RpwdPopup-tip"
}
  , vs = $e(()=>e("div", {
    class: "tipbg"
}, null, -1))
  , ms = {
    class: "RpwdPopup-errorTip"
}
  , _s = {
    key: 0
}
  , hs = ["src"]
  , gs = {
    class: "errorTip"
}
  , fs = $e(()=>e("br", null, null, -1))
  , ws = {
    class: "RpwdPopup-foot"
}
  , ys = O({
    __name: "RpwdPopup",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        gamePresentation: {
            type: String,
            default: ""
        },
        phoneNumber: {
            type: String,
            default: ""
        },
        phoneNumberType: {
            type: String,
            default: ""
        },
        passwordErrorMaxNum: {
            default: 10
        }
    },
    emits: ["update:show"],
    setup(p, {emit: k}) {
        const d = p
          , {t} = ne()
          , i = ee()
          , s = c(!1)
          , a = te()
          , _ = c(!1)
          , r = c({
            smsvcode: "",
            password: "",
            rePassword: ""
        })
          , v = R({
            get() {
                return d.show || !0
            },
            set(C) {
                C || k("update:show", !1)
            }
        })
          , b = async()=>{
            if (!d.phoneNumber)
                return;
            await ue(Qe({
                phone: d.phoneNumberType + d.phoneNumber,
                codeType: Re.resetPassword
            })) ? ge(t("sendSuccess")) : setTimeout(()=>{
                a.setCountDown(0)
            }
            , 500)
        }
          , u = async()=>{
            if (!r.value.smsvcode.trim())
                return q({
                    message: t("registerTip1"),
                    wordBreak: "break-word"
                });
            if (r.value.smsvcode.trim().length != 6)
                return q({
                    message: t("verifyCode6Digits"),
                    wordBreak: "break-word"
                });
            if (!ye.passReg3.test(r.value.password)) {
                s.value = !0;
                return
            }
            if (!r.value.rePassword.trim())
                return q({
                    message: t("registerTip3"),
                    wordBreak: "break-word"
                });
            if (r.value.password !== r.value.rePassword) {
                _.value = !0;
                return
            } else
                _.value = !1;
            const {password: C, smsvcode: l} = r.value;
            let g = {
                username: d.phoneNumberType + d.phoneNumber,
                password: C,
                type: "mobile",
                smsvcode: l
            };
            await ue(Ee(g)) && (ge(t("rpdsucceed")),
            localStorage.clear(),
            k("update:show", !1))
        }
          , y = ()=>{
            i.push({
                name: "CustomerService"
            })
        }
        ;
        return (C,l)=>{
            const g = j("van-popup");
            return $(),
            ae(g, {
                show: v.value,
                "onUpdate:show": l[4] || (l[4] = f=>v.value = f),
                "close-on-click-overlay": !1,
                position: "bottom",
                round: ""
            }, {
                default: z(()=>[e("div", is, [e("div", us, n(o(t)("idlockTitle")), 1), e("div", cs, [V(n(o(t)("idlockTip1", [p.passwordErrorMaxNum])), 1), ds, V(n(o(t)("idlockTip3")), 1)]), T(es, {
                    value: r.value.smsvcode,
                    "onUpdate:value": l[0] || (l[0] = f=>r.value.smsvcode = f),
                    number: p.phoneNumber,
                    sendFunc: b,
                    numberType: p.phoneNumberType,
                    "type-p": "lock"
                }, null, 8, ["value", "number", "numberType"]), T(ce, {
                    value: r.value.password,
                    "onUpdate:value": l[1] || (l[1] = f=>r.value.password = f),
                    label: o(t)("newPSWRest")
                }, null, 8, ["value", "label"]), E(e("div", ps, [vs, e("span", null, n(o(t)("pswRule")), 1)], 512), [[Y, s.value]]), T(ce, {
                    value: r.value.rePassword,
                    "onUpdate:value": l[2] || (l[2] = f=>r.value.rePassword = f),
                    label: o(t)("newPSWconfirm")
                }, null, 8, ["value", "label"]), e("div", ms, [_.value ? ($(),
                S("span", _s, n(o(t)("unmatchedInput")), 1)) : G("", !0)]), e("div", {
                    class: "gotuserver van-hairline--surround",
                    onClick: y
                }, [e("img", {
                    src: o(H)("login", "iconservr-r")
                }, null, 8, hs), V(n(o(t)("contactServicer")), 1)]), e("div", gs, [V(n(o(t)("wrongTel")), 1), fs, V(n(o(t)("rpwdPopupTip")), 1)]), e("div", ws, [e("button", {
                    class: "dialogBtn",
                    onClick: l[3] || (l[3] = f=>k("update:show", !1))
                }, n(o(t)("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: u
                }, n(o(t)("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const bs = W(ys, [["__scopeId", "data-v-9c76da21"]])
  , $s = {
    class: "phoneInput__container"
}
  , ks = {
    class: "phoneInput__container-label"
}
  , Ss = ["src"]
  , Cs = {
    class: "phoneInput__container-input"
}
  , Is = ["placeholder"]
  , Ts = O({
    __name: "PhoneInput",
    props: {
        type: {},
        showValidate: {
            type: Boolean
        },
        typeP: {},
        numberType: {},
        number: {}
    },
    emits: ["update:show-validate", "changeT", "changeN"],
    setup(p, {expose: k, emit: d}) {
        const t = p
          , i = c()
          , s = R({
            get() {
                return t.number
            },
            set(u) {
                d("changeN", u.replace(/[^0-9]/g, ""))
            }
        });
        function a(u) {
            u.target.value.length < 6 && d("update:show-validate", !0)
        }
        function _(u) {
            const y = u.target
              , C = /[\u4e00-\u9fa5]/g;
            y.value = y.value.replace(C, ""),
            y.value.length > 0 && d("update:show-validate", !1)
        }
        const r = u=>{
            d("changeT", u)
        }
        ;
        Ye(i, ()=>{
            i.value.close()
        }
        ),
        de(()=>{}
        );
        const v = c();
        function b() {
            Q(()=>{
                v.value.focus()
            }
            )
        }
        return k({
            getFocus: b
        }),
        (u,y)=>{
            const C = oe("only-num");
            return $(),
            S("div", $s, [e("div", ks, [e("img", {
                src: o(H)("login", "cellphone"),
                class: "phoneInput__container-label__icon"
            }, null, 8, Ss), e("span", null, n(u.$t("phone")), 1)]), e("div", Cs, [T(et, {
                typeValue: t.numberType,
                ref_key: "dropDown",
                ref: i,
                onChangeT: r
            }, null, 8, ["typeValue"]), E(e("input", {
                type: "text",
                name: "userNumber",
                "onUpdate:modelValue": y[0] || (y[0] = l=>s.value = l),
                placeholder: u.$t("plsEnterTel"),
                onBlur: a,
                onInput: _,
                ref_key: "number",
                ref: v
            }, null, 40, Is), [[C], [pe, s.value]])])])
        }
    }
});
const Ps = W(Ts, [["__scopeId", "data-v-93f53084"]])
  , ke = p=>(ve("data-v-bd1ce77a"),
p = p(),
me(),
p)
  , Fs = {
    class: "signIn__container"
}
  , xs = {
    class: "signIn__container-remember"
}
  , Rs = {
    class: "signIn__container-button"
}
  , Es = {
    class: "signIn_footer"
}
  , Vs = ke(()=>e("div", {
    class: "forgetbg"
}, null, -1))
  , Bs = {
    class: "font24"
}
  , Ns = ke(()=>e("div", {
    class: "custombg"
}, null, -1))
  , Us = {
    class: "font24"
}
  , Ds = {
    class: "idlockTip"
}
  , Ms = ke(()=>e("br", null, null, -1))
  , Ls = ["src"]
  , Hs = {
    class: "dialogBtnClose"
}
  , Os = O({
    __name: "SignIn",
    setup(p, {expose: k}) {
        const d = ee()
          , {t} = ne()
          , i = c("login")
          , {setLoading: s} = Ve()
          , a = te()
          , _ = c(!1)
          , r = c(!1)
          , v = c(10)
          , b = c();
        let u = !1;
        async function y() {
            if (!u) {
                if (u = !0,
                Ne() && await new Promise(m=>setTimeout(m, 1e3)),
                u = !1,
                !a.userForm.number || a.userForm.number.toString().trim() === "") {
                    r.value = !0;
                    return
                }
                a.userForm.numberType = a.getUserForm.numberType.replace("+", ""),
                a.userForm.remember && a.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", a.userForm.password) : localStorage.setItem("remember", ""),
                a.isOpenCaptcha ? h() : (s(!0),
                await a.signIn(a.userForm).then(m=>{
                    a.userForm.vCode = ""
                }
                ).catch(m=>{
                    var I;
                    m.code === 1 && (v.value = ((I = m.data) == null ? void 0 : I.passwordErrorMaxNum) || 10),
                    m.msgCode === 33 ? Q(()=>se.value = !0) : F(m.msgCode || 0)
                }
                ).finally(()=>{
                    w.value.setShowHiden(!1),
                    s(!1)
                }
                ))
            }
        }
        const C = ()=>{
            _.value = !1
        }
          , l = ()=>{
            d.push({
                name: "register"
            })
        }
        ;
        function g() {
            d.push({
                name: "rpwd"
            }),
            a.setCurrentView("ResetPassword")
        }
        function f() {
            d.push({
                name: "CustomerService"
            })
        }
        const D = m=>{
            a.getUserForm.numberType = m
        }
          , N = m=>{
            a.getUserForm.number = m
        }
          , w = c()
          , P = c("")
          , x = ()=>{
            _.value = !1,
            d.push({
                name: "CustomerService"
            })
        }
        ;
        Fe(window, "keydown", m=>{
            m.key == "Enter" && y()
        }
        ),
        de(async()=>{
            var I;
            const m = a.getUserForm;
            localStorage.getItem("remember") != null && ((I = localStorage.getItem("remember")) == null ? void 0 : I.toString().trim()) != "" ? m.password = localStorage.getItem("remember") : m.password = "",
            a.setUserForm({
                ...m
            })
        }
        );
        let A = be(()=>a.userForm.number, m=>{
            a.setCountDown(0)
        }
        , {
            flush: "post"
        });
        const le = async m=>{
            Q(async()=>{
                w.value.startRequestVerify(),
                s(!0),
                a.signIn(Object.assign(a.userForm, {
                    captchaId: P.value,
                    track: m
                })).then(I=>{}
                ).catch(I=>{
                    F(I.msgCode || 0)
                }
                ).finally(()=>{
                    w.value.setShowHiden(!1),
                    s(!1)
                }
                )
            }
            )
        }
          , h = ()=>{
            Q(async()=>{
                w.value.startRequestGenerate();
                const m = await ue(Ue());
                m ? (P.value = m.data.captchaId,
                w.value.endRequestGenerate(m.data.backgroundImage, m.data.sliderImage)) : w.value.endRequestGenerate(null, null)
            }
            )
        }
          , F = m=>{
            m == 122 && (_.value = !0)
        }
        ;
        xe(()=>{
            A(),
            a.getUserForm.remember || (a.getUserForm.password = "")
        }
        );
        const se = c(!1)
          , M = m=>{
            a.userForm.vCode = m,
            y()
        }
          , re = ()=>{
            se.value = !1,
            a.userForm.vCode = ""
        }
        ;
        return k({
            showPhoneValidate: r
        }),
        (m,I)=>{
            const Z = j("van-checkbox")
              , ie = oe("lazy");
            return $(),
            S("div", Fs, [T(Ps, {
                "show-validate": r.value,
                "onUpdate:showValidate": I[0] || (I[0] = L=>r.value = L),
                ref_key: "phone",
                ref: b,
                type: i.value,
                "number-type": o(a).getUserForm.numberType,
                number: o(a).userForm.number,
                onChangeT: D,
                onChangeN: N
            }, null, 8, ["show-validate", "type", "number-type", "number"]), T(ce, {
                value: o(a).userForm.password,
                "onUpdate:value": I[1] || (I[1] = L=>o(a).userForm.password = L),
                label: m.$t("password"),
                maxlength: 32
            }, null, 8, ["value", "label"]), e("div", xs, [T(Z, {
                modelValue: o(a).userForm.rememberpwd,
                "onUpdate:modelValue": I[2] || (I[2] = L=>o(a).userForm.rememberpwd = L),
                "checked-color": "#C7A054"
            }, {
                default: z(()=>[V(n(m.$t("rememberPSW")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), e("div", Rs, [e("button", {
                class: U([o(a).userForm.number != "" ? "active" : ""]),
                onClick: y
            }, n(m.$t("login")), 3), e("button", {
                class: "register",
                onClick: l
            }, n(m.$t("register")), 1)]), e("div", Es, [o(a).isOpenForgetPasswordSMSState || o(a).isOpenForgetPasswordEmailState ? ($(),
            S("div", {
                key: 0,
                class: "forgetcon",
                onClick: g
            }, [Vs, e("div", Bs, n(m.$t("forgetPSW")), 1)])) : G("", !0), e("div", {
                class: "customcon",
                onClick: f
            }, [Ns, e("div", Us, n(m.$t("customerServiceTitle")), 1)])]), T(Me, {
                ref_key: "captchaRef",
                ref: w,
                "refresh-color": "#FFFFFF",
                "show-refresh": !0,
                text: o(t)("slideCaptchaText"),
                onFinish: le,
                onRefresh: h
            }, null, 8, ["text"]), o(a).isOpenForgetPasswordSMSState && _.value ? ($(),
            ae(bs, {
                key: 0,
                show: _.value,
                "onUpdate:show": I[3] || (I[3] = L=>_.value = L),
                phoneNumber: o(a).getUserForm.number,
                phoneNumberType: o(a).getUserForm.numberType,
                passwordErrorMaxNum: v.value
            }, null, 8, ["show", "phoneNumber", "phoneNumberType", "passwordErrorMaxNum"])) : ($(),
            ae(Be, {
                key: 1,
                show: _.value,
                "onUpdate:show": I[5] || (I[5] = L=>_.value = L),
                "show-cancel-btn": !0,
                title: m.$t("idlockTitle")
            }, {
                content: z(()=>[e("div", Ds, [V(n(m.$t("idlockTip1", [v.value])) + " ", 1), Ms, V(n(m.$t("idlockTip2")), 1)])]),
                footer: z(()=>[e("button", {
                    class: "dialogBtn",
                    onClick: I[4] || (I[4] = L=>_.value = !1)
                }, n(m.$t("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: x
                }, [e("img", {
                    src: o(H)("login", "iconservr")
                }, null, 8, Ls), V(" " + n(m.$t("contactServicer")), 1)]), e("div", {
                    class: "dialogClose",
                    onClick: C
                }, [E(e("img", Hs, null, 512), [[ie, o(H)("login", "close")]])])]),
                _: 1
            }, 8, ["show", "title"])), T(De, {
                showPopup: se.value,
                onOnConfirm: M,
                onOnBack: re
            }, null, 8, ["showPopup"])])
        }
    }
});
const Ws = W(Os, [["__scopeId", "data-v-bd1ce77a"]])
  , zs = {
    class: "verifyInput__container"
}
  , qs = {
    class: "verifyInput__container-label"
}
  , As = {
    class: "verifyInput__container-label__icon"
}
  , Gs = {
    key: 0
}
  , js = {
    key: 1
}
  , Xs = {
    class: "verifyInput__container-input"
}
  , Ys = ["placeholder"]
  , Ks = {
    key: 0
}
  , Zs = {
    key: 1
}
  , Js = {
    class: "verifyInput__container-tip"
}
  , Qs = O({
    __name: "VerifyEmailInput",
    props: {
        value: {},
        typeP: {},
        isShowVerifyT: {
            type: Boolean
        },
        placeholder: {
            default: fe.global.t("registerTip6")
        },
        sendFunc: {},
        number: {},
        numberType: {},
        showVerify: {
            type: Boolean,
            default: !0
        },
        email: {
            default: ""
        },
        loginType: {}
    },
    emits: ["update:value"],
    setup(p, {emit: k}) {
        const d = p;
        ne();
        const t = te()
          , i = ee()
          , s = R({
            get() {
                return d.value || ""
            },
            set(u) {
                k("update:value", u)
            }
        })
          , a = c(!0);
        async function _() {
            a.value && (a.value = !1),
            !(t.countEmailDown > 0) && (t.sendEmailCode(),
            d.sendFunc && d.sendFunc())
        }
        const r = R(()=>localStorage.getItem("email") || d.email)
          , v = u=>{
            const y = u.target;
            y.value = y.value.replace(/\s+/g, ""),
            y.value = y.value.replace(/[^\d]/g, "")
        }
        ;
        function b() {
            i.push({
                name: "CustomerService"
            })
        }
        return (u,y)=>{
            const C = j("van-icon")
              , l = oe("lazy");
            return E(($(),
            S("div", zs, [E(e("div", qs, [E(e("img", As, null, 512), [[l, o(H)("login", "verify")]]), u.typeP === "updateEmail" || u.typeP === "lock" ? ($(),
            S("span", Gs, n(u.$t("sendVerifyCodeTo")) + " " + n(o(tt)(r.value)), 1)) : ($(),
            S("span", js, n(u.$t("verifyCode")), 1))], 512), [[Y, !(u.isShowVerifyT === !1 && u.typeP === "updateEmail")]]), e("div", Xs, [E(e("input", {
                type: "text",
                "onUpdate:modelValue": y[0] || (y[0] = g=>s.value = g),
                placeholder: u.$t("phEnterVerificationCode"),
                maxlength: "6",
                onInput: v
            }, null, 40, Ys), [[pe, s.value]]), e("button", {
                onClick: _,
                class: U({
                    inActive: o(t).countEmailDown > 0
                })
            }, [o(t).countEmailDown === 0 ? ($(),
            S("span", Ks, n(u.$t("send")), 1)) : ($(),
            S("span", Zs, n(o(t).countEmailDown) + "S ", 1))], 2)]), E(e("div", Js, [T(C, {
                name: "warning-o"
            }), e("span", null, n(u.$t("codeUnreceived")) + "?", 1), e("span", {
                onClick: y[1] || (y[1] = g=>b())
            }, n(u.$t("contactServicer")), 1)], 512), [[Y, !a.value]])], 512)), [[Y, u.showVerify]])
        }
    }
});
const eo = W(Qs, [["__scopeId", "data-v-a65efda2"]])
  , Se = p=>(ve("data-v-ee0b4c95"),
p = p(),
me(),
p)
  , to = {
    class: "RpwdPopup"
}
  , so = {
    class: "RpwdPopup-head"
}
  , oo = {
    class: "RpwdPopup-topTip"
}
  , ao = Se(()=>e("br", null, null, -1))
  , no = {
    class: "RpwdPopup-tip"
}
  , lo = Se(()=>e("div", {
    class: "tipbg"
}, null, -1))
  , ro = {
    class: "RpwdPopup-errorTip"
}
  , io = {
    key: 0
}
  , uo = ["src"]
  , co = {
    class: "errorTip"
}
  , po = Se(()=>e("br", null, null, -1))
  , vo = {
    class: "RpwdPopup-foot"
}
  , mo = O({
    __name: "EmailRpwdPopup",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        gamePresentation: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            default: ""
        },
        passwordErrorMaxNum: {
            default: 10
        }
    },
    emits: ["update:show"],
    setup(p, {emit: k}) {
        const d = p
          , {t} = ne()
          , i = ee()
          , s = c(!1)
          , a = te()
          , _ = c(!1)
          , r = c({
            smsvcode: "",
            password: "",
            rePassword: ""
        })
          , v = R({
            get() {
                return d.show || !1
            },
            set(C) {
                C || k("update:show", !1)
            }
        })
          , b = async()=>{
            if (!d.email)
                return;
            await ue(st({
                email: d.email,
                emailType: Re.resetPassword
            })) ? ge(t("sendSuccess")) : setTimeout(()=>{
                a.setCountEmailDown(0)
            }
            , 500)
        }
          , u = async()=>{
            if (!r.value.smsvcode.trim())
                return q({
                    message: t("registerTip6"),
                    wordBreak: "break-word"
                });
            if (r.value.smsvcode.trim().length != 6)
                return q({
                    message: t("verifyCode6Digits"),
                    wordBreak: "break-word"
                });
            if (!ye.passReg3.test(r.value.password)) {
                s.value = !0;
                return
            }
            if (!r.value.rePassword.trim())
                return q({
                    message: t("registerTip3"),
                    wordBreak: "break-word"
                });
            if (r.value.password !== r.value.rePassword) {
                _.value = !0;
                return
            } else
                _.value = !1;
            const {password: C, smsvcode: l} = r.value;
            let g = {
                username: d.email,
                type: "email",
                password: C,
                smsvcode: l
            };
            await ue(Ee(g)) && (ge(t("rpdsucceed")),
            localStorage.clear(),
            k("update:show", !1))
        }
          , y = ()=>{
            i.push({
                name: "CustomerService"
            })
        }
        ;
        return (C,l)=>{
            const g = j("van-popup");
            return $(),
            ae(g, {
                show: v.value,
                "onUpdate:show": l[4] || (l[4] = f=>v.value = f),
                style: {
                    background: "#292929"
                },
                "close-on-click-overlay": !1,
                position: "bottom",
                round: ""
            }, {
                default: z(()=>[e("div", to, [e("div", so, n(o(t)("idlockTitle")), 1), e("div", oo, [V(n(o(t)("idlockTip1", [p.passwordErrorMaxNum])), 1), ao, V(n(o(t)("idlockTip3")), 1)]), T(eo, {
                    value: r.value.smsvcode,
                    "onUpdate:value": l[0] || (l[0] = f=>r.value.smsvcode = f),
                    sendFunc: b,
                    email: p.email,
                    "type-p": "lock"
                }, null, 8, ["value", "email"]), T(ce, {
                    value: r.value.password,
                    "onUpdate:value": l[1] || (l[1] = f=>r.value.password = f),
                    label: o(t)("newPSWRest")
                }, null, 8, ["value", "label"]), E(e("div", no, [lo, e("span", null, n(o(t)("pswRule")), 1)], 512), [[Y, s.value]]), T(ce, {
                    value: r.value.rePassword,
                    "onUpdate:value": l[2] || (l[2] = f=>r.value.rePassword = f),
                    label: o(t)("newPSWconfirm")
                }, null, 8, ["value", "label"]), e("div", ro, [_.value ? ($(),
                S("span", io, n(o(t)("unmatchedInput")), 1)) : G("", !0)]), e("div", {
                    class: "gotuserver",
                    onClick: y
                }, [e("img", {
                    src: o(H)("login", "iconservr-r")
                }, null, 8, uo), V(n(o(t)("contactServicer")), 1)]), e("div", co, [V(n(o(t)("wrongemail")), 1), po, V(n(o(t)("rpwdEmailPopupTip")), 1)]), e("div", vo, [e("button", {
                    class: "dialogBtn",
                    onClick: l[3] || (l[3] = f=>k("update:show", !1))
                }, n(o(t)("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: u
                }, n(o(t)("confirm")), 1)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const _o = W(mo, [["__scopeId", "data-v-ee0b4c95"]])
  , ho = {
    class: "emailcontainer"
}
  , go = {
    class: "emailinput__container"
}
  , fo = {
    class: "emailinput__container-label"
}
  , wo = ["src"]
  , yo = {
    class: "emailinput__container-input"
}
  , bo = ["placeholder"]
  , $o = O({
    __name: "EmailInput",
    props: {
        type: {},
        email: {}
    },
    emits: ["update:show-validate", "changeN"],
    setup(p, {expose: k, emit: d}) {
        const t = p
          , i = te()
          , s = R({
            get() {
                return t.email
            },
            set(v) {
                d("changeN", v)
            }
        });
        function a(v) {
            const b = v.target
              , u = /[\u4e00-\u9fa5]/g;
            b.value = b.value.replace(u, ""),
            b.value.length > 0 && d("update:show-validate", !1)
        }
        const _ = c();
        function r() {
            Q(()=>{
                _.value.focus()
            }
            )
        }
        return k({
            getFocus: r
        }),
        (v,b)=>($(),
        S("div", ho, [e("div", go, [e("div", fo, [e("img", {
            src: o(H)("login/newlogin", "emailnumber"),
            class: "emailinput__container-label__icon"
        }, null, 8, wo), e("span", null, n(o(i).isOpenExternalAccount ? `${v.$t("otherlogin")} ${v.$t("login")}` : v.$t("email")), 1)]), e("div", yo, [E(e("input", {
            type: "text",
            name: "userEmail",
            maxlength: "250",
            "onUpdate:modelValue": b[0] || (b[0] = u=>s.value = u),
            placeholder: v.$t("inputemail"),
            onInput: a,
            ref_key: "email",
            ref: _
        }, null, 40, bo), [[pe, s.value]])])])]))
    }
});
const ko = W($o, [["__scopeId", "data-v-144f0059"]])
  , Ce = p=>(ve("data-v-2edbff44"),
p = p(),
me(),
p)
  , So = {
    class: "signIn__container"
}
  , Co = {
    class: "signIn__container-remember"
}
  , Io = {
    class: "signIn__container-button"
}
  , To = {
    class: "signIn_footer"
}
  , Po = Ce(()=>e("div", {
    class: "forgetbg"
}, null, -1))
  , Fo = {
    class: "font24"
}
  , xo = Ce(()=>e("div", {
    class: "custombg"
}, null, -1))
  , Ro = {
    class: "font24"
}
  , Eo = {
    class: "idlockTip"
}
  , Vo = Ce(()=>e("br", null, null, -1))
  , Bo = ["src"]
  , No = O({
    __name: "EmailSignIn",
    setup(p) {
        const k = ee()
          , {t: d} = ne()
          , t = c(10)
          , {setLoading: i} = Ve()
          , s = te()
          , a = c(!1)
          , _ = c(!1)
          , r = c()
          , v = c("login");
        async function b() {
            if (Ne() && await new Promise(h=>setTimeout(h, 500)),
            !(!s.userForm.email || s.userForm.email.toString().trim() === "")) {
                if (!s.isOpenExternalAccount && !ye.email1.test(s.userForm.email))
                    return q({
                        message: d(Ge.email),
                        wordBreak: "break-word"
                    });
                s.userForm.remember && s.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", s.userForm.password) : localStorage.setItem("remember", ""),
                s.isOpenCaptcha ? A() : (i(!0),
                await s.signIn(s.userForm).then(h=>{}
                ).catch(h=>{
                    var F;
                    h.code === 1 && (t.value = ((F = h.data) == null ? void 0 : F.passwordErrorMaxNum) || 10),
                    h.msgCode === 33 ? _.value = !0 : le(h.msgCode || 0)
                }
                ).finally(()=>{
                    g.value.setShowHiden(!1),
                    i(!1)
                }
                ))
            }
        }
        const u = ()=>{
            k.push({
                name: "register"
            })
        }
        ;
        function y() {
            k.push({
                name: "rpwd"
            }),
            s.setCurrentView("ResetPassword")
        }
        function C() {
            k.push({
                name: "CustomerService"
            })
        }
        const l = h=>{
            s.getUserForm.email = h
        }
          , g = c()
          , f = c("")
          , D = ()=>{
            a.value = !1,
            k.push({
                name: "CustomerService"
            })
        }
        ;
        Fe(window, "keydown", h=>{
            h.key == "Enter" && b()
        }
        );
        const N = h=>{
            s.userForm.vCode = h,
            b()
        }
          , w = ()=>{
            _.value = !1,
            s.userForm.vCode = ""
        }
        ;
        de(async()=>{
            var F;
            const h = s.getUserForm;
            localStorage.getItem("remember") != null && ((F = localStorage.getItem("remember")) == null ? void 0 : F.toString().trim()) != "" ? h.password = localStorage.getItem("remember") : h.password = "",
            s.setUserForm({
                ...h
            })
        }
        );
        let P = be(()=>s.userForm.number, h=>{
            s.setCountDown(0)
        }
        , {
            flush: "post"
        });
        const x = async h=>{
            Q(async()=>{
                g.value.startRequestVerify(),
                i(!0),
                s.signIn(Object.assign(s.userForm, {
                    captchaId: f.value,
                    track: h
                })).then(F=>{
                    s.userForm.vCode = ""
                }
                ).catch(F=>{
                    le(F.msgCode || 0)
                }
                ).finally(()=>{
                    g.value.setShowHiden(!1),
                    i(!1)
                }
                )
            }
            )
        }
          , A = ()=>{
            Q(async()=>{
                g.value.startRequestGenerate();
                const h = await ue(Ue());
                h ? (f.value = h.data.captchaId,
                g.value.endRequestGenerate(h.data.backgroundImage, h.data.sliderImage)) : g.value.endRequestGenerate(null, null)
            }
            )
        }
          , le = h=>{
            h == 122 && (a.value = !0)
        }
        ;
        return xe(()=>{
            P(),
            s.getUserForm.remember || (s.getUserForm.password = "")
        }
        ),
        (h,F)=>{
            const se = j("van-checkbox");
            return $(),
            S("div", So, [T(ko, {
                ref_key: "email",
                ref: r,
                type: v.value,
                email: o(s).userForm.email,
                onChangeN: l
            }, null, 8, ["type", "email"]), T(ce, {
                value: o(s).userForm.password,
                "onUpdate:value": F[0] || (F[0] = M=>o(s).userForm.password = M),
                label: h.$t("password"),
                maxlength: 32
            }, null, 8, ["value", "label"]), e("div", Co, [T(se, {
                modelValue: o(s).userForm.rememberpwd,
                "onUpdate:modelValue": F[1] || (F[1] = M=>o(s).userForm.rememberpwd = M),
                "checked-color": "#C7A054"
            }, {
                default: z(()=>[V(n(h.$t("rememberPSW")), 1)]),
                _: 1
            }, 8, ["modelValue"])]), e("div", Io, [e("button", {
                class: U([o(s).userForm.email != "" ? "active" : ""]),
                onClick: b
            }, n(h.$t("login")), 3), e("button", {
                class: "register",
                onClick: u
            }, n(h.$t("register")), 1)]), e("div", To, [o(s).isOpenForgetPasswordSMSState || o(s).isOpenForgetPasswordEmailState ? ($(),
            S("div", {
                key: 0,
                class: "forgetcon",
                onClick: y
            }, [Po, e("div", Fo, n(h.$t("forgetPSW")), 1)])) : G("", !0), e("div", {
                class: "customcon",
                onClick: C
            }, [xo, e("div", Ro, n(h.$t("customerServiceTitle")), 1)])]), T(Me, {
                ref_key: "captchaRef",
                ref: g,
                "refresh-color": "#FFFFFF",
                "show-refresh": !0,
                text: o(d)("slideCaptchaText"),
                onFinish: x,
                onRefresh: A
            }, null, 8, ["text"]), o(s).isOpenForgetPasswordEmailState && a.value ? ($(),
            ae(_o, {
                key: 0,
                show: a.value,
                "onUpdate:show": F[2] || (F[2] = M=>a.value = M),
                email: o(s).getUserForm.email,
                passwordErrorMaxNum: t.value
            }, null, 8, ["show", "email", "passwordErrorMaxNum"])) : ($(),
            ae(Be, {
                key: 1,
                show: a.value,
                "onUpdate:show": F[4] || (F[4] = M=>a.value = M),
                "show-cancel-btn": !0,
                title: h.$t("idlockTitle")
            }, {
                content: z(()=>[e("div", Eo, [V(n(h.$t("idlockTip1", [t.value])) + " ", 1), Vo, V(n(h.$t("idlockTip2")), 1)])]),
                footer: z(()=>[e("button", {
                    class: "dialogBtn",
                    onClick: F[3] || (F[3] = M=>a.value = !1)
                }, n(h.$t("cancel")), 1), e("button", {
                    class: "dialogBtn",
                    onClick: D
                }, [e("img", {
                    src: o(H)("login", "iconservr")
                }, null, 8, Bo), V(" " + n(h.$t("contactServicer")), 1)])]),
                _: 1
            }, 8, ["show", "title"])), T(De, {
                showPopup: _.value,
                onOnConfirm: N,
                onOnBack: w
            }, null, 8, ["showPopup"])])
        }
    }
});
const Uo = W(No, [["__scopeId", "data-v-2edbff44"]])
  , Do = {
    class: "login__container-heading"
}
  , Mo = {
    class: "login__container-heading__title"
}
  , Lo = {
    class: "login__container-heading__subTitle"
}
  , Ho = {
    class: "login_container-tab"
}
  , Oo = {
    class: "login__container-form"
}
  , Wo = O({
    __name: "index",
    setup(p) {
        const {t: k} = fe.global
          , d = ee()
          , t = te();
        t.getRegisterState();
        const i = c("mobile")
          , s = c(void 0);
        t.userForm.logintype = i.value;
        const {openAll: a} = ot();
        function _() {
            d.replace("/")
        }
        const r = v=>{
            i.value = v,
            t.userForm.logintype = v,
            t.userForm.password = "",
            t.remember(!0)
        }
        ;
        return Ke((v,b,u)=>{
            u(),
            v.name === "home" && a()
        }
        ),
        de(()=>{
            t.remember(!0),
            t.getIp()
        }
        ),
        (v,b)=>{
            const u = j("NavBar");
            return $(),
            S("div", {
                class: "login__container",
                ref_key: "loginContainerRef",
                ref: s
            }, [T(u, {
                onClickLeft: _,
                leftArrow: !0,
                headLogo: !0
            }, {
                right: z(()=>[T(je)]),
                _: 1
            }), e("div", Do, [e("h1", Mo, n(o(k)("login")), 1), e("div", Lo, [e("div", null, n(v.$t("pleaseloginphoneoremail")), 1), e("div", null, n(v.$t("forgetyourpassword")), 1)])]), e("div", Ho, [e("div", {
                class: U(["tab", [i.value == "mobile" ? "active" : ""]]),
                onClick: b[0] || (b[0] = y=>r("mobile"))
            }, [e("div", {
                class: U(["phonebg", [i.value == "mobile" ? "phoneactive" : ""]])
            }, null, 2), e("div", {
                class: U(["font30", [i.value == "mobile" ? "phonefont30active" : ""]])
            }, n(v.$t("mobilelogin")), 3)], 2), o(t).isOpenEmialLogin ? ($(),
            S("div", {
                key: 0,
                class: U(["tab", [i.value == "email" ? "active" : ""]]),
                onClick: b[1] || (b[1] = y=>r("email"))
            }, [e("div", {
                class: U(["emialbg", [i.value == "email" ? "emailactive" : "", o(t).isOpenExternalAccount && "other"]])
            }, null, 2), e("div", {
                class: U(["font30", [i.value == "email" ? "emailfont30active" : ""]])
            }, n(o(t).isOpenExternalAccount ? v.$t("otherlogin") : v.$t("emaillogin")), 3)], 2)) : G("", !0)]), e("div", Oo, [e("div", {
                class: U(["tab-content", [i.value == "mobile" ? "activecontent" : ""]])
            }, [T(Ws, {
                ref: "signIn"
            }, null, 512)], 2), e("div", {
                class: U(["tab-content", [i.value == "email" ? "activecontent" : ""]])
            }, [T(Uo, {
                ref: "signIn"
            }, null, 512)], 2)])], 512)
        }
    }
});
const zo = W(Wo, [["__scopeId", "data-v-8752c961"]])
  , jo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zo
}, Symbol.toStringTag, {
    value: "Module"
}));
export {ko as E, ce as P, Me as S, es as V, De as a, eo as b, Ps as c, jo as i};
