import {r as h, R as kt, a1 as ft, E as Q, H, S as j, I as n, J as a, U as S, V as G, Z as M, C as r, K as t, N as i, a7 as it, X as D, W as z, A as ii, O as B, T as Ht, _ as pt, v as Ct, al as ko, y as nn, j as Ot, am as fo, B as At, M as Ci, ad as qi, D as Qt, Y as E, a3 as Ne, ac as vi, an as yo, ao as $o, ap as To, aq as Yn, a8 as Gt, a9 as Pt, a4 as mi, ar as wo, as as Jn, w as ti, at as Co, a0 as Hi, au as Zn, x as ki, av as No, ag as tn, aw as ta, l as oi, ax as Lo, ay as zo, ae as ci, a5 as ia, G as an, ak as _i, af as on, az as hi, P as de, aA as Yi, aj as Io, aB as xo, aC as Ro, aD as ea, aE as So, aF as Mo} from "./modules-8ac77d1d.js";
import {G as pi, S as Ei, l as Pn, g as Bo, a as tt, s as Go, c as Po, i as ve, _ as K, u as he, b as Rt, A as Zt, d as Do, e as Dn, f as Wi, h as na, j as ot, k as aa, m as oa, n as sa, o as la, p as Le, q as Ao, r as Oo, t as qo, v as Wo, w as Eo, x as ca, y as Vo, z as Fo, B as ze, C as jo, D as Ho, E as Uo, L as ra, F as Ko, H as Xo, I as Qo, J as en, K as Ni, M as Li, N as ua, O as da, P as sn, Q as Yo, R as Jo, T as Zo, U as ts, V as is, W as es, X as ns, Y as as, Z as os, $ as xi, a0 as ji, a1 as ri, a2 as Ui, a3 as ss, a4 as pa, a5 as ga, a6 as ls, a7 as ba, a8 as cs, a9 as rs, aa as us, ab as ma, ac as _a, ad as ln, ae as cn, af as ds, ag as ps, ah as gs, ai as bs, aj as ha, ak as va, al as ms, am as rn, an as _s, ao as hs, ap as vs, aq as ka, ar as ks, as as fa, at as fs, au as ys, av as ya, aw as $a, ax as $s, ay as Ts, az as ws, aA as Cs, aB as Ns, aC as Te, aD as Ti, aE as wi, aF as An, aG as On, aH as Ls, aI as Ta, aJ as wa, aK as zs, aL as Is, aM as xs, aN as Ca, aO as Rs, aP as Ss, aQ as Ms, aR as Na, aS as Bs, aT as Gs, aU as Ps, aV as Ds, aW as As} from "./page-activity-d6acd6b5.js";
const qn = h(!1);
function La() {
    const {locale: l} = kt()
      , e = pi()
      , s = ft();
    async function u(c, p) {
        l.value = c,
        e.updateLanguage(c),
        await Go(c),
        Po(ve.global.t),
        localStorage.setItem("needUpd", "1"),
        p === 1 ? g() : qn.value = !1
    }
    const g = ()=>{
        s.back()
    }
      , b = Q(()=>{
        let c = 0;
        const p = Ei().getLanguage
          , o = [];
        if (p) {
            const _ = p == null ? void 0 : p.replace("th", "tha").split("|");
            _ == null || _.forEach(m=>{
                Pn.forEach(T=>{
                    (m.toLowerCase().indexOf(T.key.toLowerCase()) !== -1 || T.key.toLowerCase().indexOf(m.toLowerCase()) !== -1) && (o.push(T),
                    c++)
                }
                )
            }
            )
        }
        return e.getLanguage || e.updateLanguage(Bo()),
        c == 0 ? Pn : o
    }
    );
    return {
        onClick: u,
        languagesList: b,
        getIcons: tt,
        locale: l,
        goBack: g,
        getLangName: c=>{
            const p = b.value.find(o=>o.key === c);
            return p ? p.key.toLocaleUpperCase() : e.getLanguage
        }
        ,
        show: qn
    }
}
const Os = ["onClick"]
  , qs = {
    class: "item-title"
}
  , Ws = ["src"]
  , Es = {
    key: 0
}
  , Vs = {
    key: 1
}
  , Fs = H({
    __name: "index",
    props: {
        type: {
            type: Number,
            default: 1
        }
    },
    setup(l) {
        const {onClick: e, getIcons: s, languagesList: u, locale: g} = La();
        return (b,d)=>{
            const c = j("van-radio")
              , p = j("van-radio-group");
            return n(),
            a("div", {
                class: M(l.type === 2 ? "list info" : "list")
            }, [(n(!0),
            a(S, null, G(r(u), (o,_)=>(n(),
            a("div", {
                class: M(["item ar-1px-b", o.key == r(g) ? "checked" : ""]),
                key: _,
                onClick: m=>r(e)(o.key, l.type)
            }, [t("div", qs, [t("img", {
                src: r(s)("languages", o.key)
            }, null, 8, Ws), l.type === 2 ? (n(),
            a("span", Es, i(o.key.toLocaleUpperCase()), 1)) : (n(),
            a("span", Vs, i(o.name), 1))]), o.key == r(g) ? (n(),
            it(p, {
                key: 0,
                modelValue: r(g),
                "onUpdate:modelValue": d[0] || (d[0] = m=>ii(g) ? g.value = m : null)
            }, {
                default: D(()=>[z(c, {
                    "checked-color": "#FAE59F",
                    name: o.key
                }, null, 8, ["name"])]),
                _: 2
            }, 1032, ["modelValue"])) : B("", !0)], 10, Os))), 128))], 2)
        }
    }
});
const js = K(Fs, [["__scopeId", "data-v-34d9d2f0"]])
  , Hs = {
    class: "img"
}
  , Us = {
    class: "lang-text"
}
  , Ks = H({
    __name: "LangPopup",
    setup(l) {
        const {getLangName: e, getIcons: s, locale: u, show: g} = La()
          , b = Ei()
          , d = Q(()=>b.getLoginChangeLanguage == "1");
        return (c,p)=>{
            const o = j("van-popup")
              , _ = Ht("lazy");
            return n(),
            a("div", null, [d.value ? (n(),
            a("div", {
                key: 0,
                class: "right",
                onClick: p[0] || (p[0] = m=>g.value = !0)
            }, [t("div", Hs, [pt(t("img", null, null, 512), [[_, r(s)("languages", r(u))]])]), t("span", Us, i(r(e)(r(u))), 1)])) : B("", !0), z(o, {
                show: r(g),
                "onUpdate:show": p[1] || (p[1] = m=>ii(g) ? g.value = m : null),
                class: "popup",
                position: "bottom",
                teleport: "body"
            }, {
                default: D(()=>[z(js, {
                    type: 2
                })]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const Xs = K(Ks, [["__scopeId", "data-v-187d09fa"]])
  , Qs = {
    class: "luckyWinners__container"
}
  , Ys = {
    class: "luckyWinners__container-wrapper"
}
  , Js = {
    class: "luckyWinners__container-wrapper__item-img"
}
  , Zs = ["data-img"]
  , tl = {
    class: "luckyWinners__container-wrapper__item-info"
}
  , il = {
    class: "luckyWinners__container-wrapper__item-winType"
}
  , el = {
    class: "luckyWinners__container-wrapper__item-winAmount"
}
  , nl = H({
    __name: "index",
    setup(l) {
        const e = he()
          , s = h(null)
          , u = h(null)
          , g = h({})
          , b = h([])
          , d = h({})
          , c = h({});
        (()=>{
            const m = {
                wlist: tt("home/AllGames/winner", "WinGo"),
                trxwigolist: tt("home/AllGames/winner", "TrxHash"),
                new5dwlist: tt("home/AllGames/winner", "5D"),
                k3list: tt("home/AllGames/winner", "K3"),
                fishslist: tt("home/AllGames/winner", "Fish"),
                smallgameslist: tt("home/AllGames/winner", "SmallGame"),
                CMD: tt("home/AllGames/winner", "CMD"),
                BB: tt("home/AllGames/winner", "BB"),
                IM: tt("home/AllGames/winner", "IM"),
                AG_Sport: tt("home/AllGames/winner", "AG_Sport"),
                V8Card: tt("home/AllGames/winner", "V8Card"),
                Card365: tt("home/AllGames/winner", "Card365"),
                TB: tt("home/AllGames/winner", "TB"),
                TB_Chess: tt("home/AllGames/winner", "TB_Chess"),
                PG: tt("home/AllGames/winner", "PG"),
                DG: tt("home/AllGames/winner", "DG"),
                EVO_Video: tt("home/AllGames/winner", "EVO_Video"),
                AG_Video: tt("home/AllGames/winner", "AG_Video"),
                HB: tt("home/AllGames/winner", "HB"),
                MG: tt("home/AllGames/winner", "MG"),
                JDB: tt("home/AllGames/winner", "JDB"),
                CQ9: tt("home/AllGames/winner", "CQ9"),
                JILI: tt("home/AllGames/winner", "JILI"),
                SaBa: tt("home/AllGames/winner", "SaBa"),
                SEXY_Video: tt("home/AllGames/winner", "SEXY_Video"),
                Wickets9: tt("home/AllGames/winner", "Wickets9"),
                AG_Electronic: tt("home/AllGames/winner", "AG_Electronic"),
                EVO_Electronic: tt("home/AllGames/winner", "EVO_Electronic"),
                EVO_Play: tt("home/AllGames/winner", "EVO_Play"),
                WM_Video: tt("home/AllGames/winner", "WM_Video"),
                Hacksaw: tt("home/AllGames/winner", "Hacksaw"),
                JOKER: tt("home/AllGames/winner", "JOKER"),
                BetSoft: tt("home/AllGames/winner", "BetSoft"),
                YGG: tt("home/AllGames/winner", "YGG")
            };
            d.value = m;
            const T = {
                wlist: "Win GO",
                trxwigolist: "Win GO",
                new5dwlist: "5D",
                k3list: "K3"
            };
            c.value = T
        }
        )();
        const o = m=>{
            if (m.length >= 7)
                return m.substring(0, 3) + "***" + m.substring(m.length - 3);
            {
                const T = "***"
                  , f = 7 - m.length
                  , y = "*".repeat(f);
                return m.substring(0, Math.ceil((7 - f) / 2)) + T + y + m.substring(Math.ceil((7 - f) / 2))
            }
        }
        ;
        async function _() {
            const [m,T] = await Zt(Do());
            if (m)
                Ot({
                    message: m.msg,
                    wordBreak: "break-word"
                });
            else if (T) {
                g.value = T;
                const $ = T.penarikanlist;
                $.length > 0 && e.setRankList($)
            }
            let f = fo(g.value);
            const y = ["c16list", "ddwzgamelist", "dmwzgamelist", "jswzgamelist", "k3list", "livewlist", "new5dwlist", "realpersonloglist", "s16list", "slotslist", "sportloglist", "trxwigolist", "vnmodellist", "wlist", "wnwzgamelist", "wzgamelist"];
            Object.keys(f).forEach($=>{
                var k;
                if (y.includes($)) {
                    if (((k = f[$]) == null ? void 0 : k.length) > 0)
                        for (var w in f[$]) {
                            let L = parseInt(f[$][w].userPhoto);
                            (L >= 0 || L <= 20) && (f[$][w].userPhoto = tt("main/Avatar", L + "")),
                            f[$][w] = {
                                ...f[$][w],
                                userPhoto: f[$][w].userPhoto || tt("images", "avatar"),
                                nickName: f[$][w].nickName || "",
                                key: $
                            }
                        }
                    let v = f[$] || [];
                    b.value = [...b.value, ...v]
                }
            }
            )
        }
        return Ct(async()=>{
            ko(u.value),
            await _(),
            b.value.length > 0 && (s.value = setInterval(async()=>{
                b.value.unshift(b.value.pop())
            }
            , 3e3))
        }
        ),
        nn(()=>{
            clearInterval(s.value)
        }
        ),
        (m,T)=>{
            const f = Ht("lazy");
            return n(),
            a("div", Qs, [t("h1", null, i(m.$t("winningDetal")), 1), t("div", Ys, [t("div", {
                ref_key: "wrapperRef",
                ref: u
            }, [(n(!0),
            a(S, null, G(b.value.slice(0, 6), y=>(n(),
            a("div", {
                class: "luckyWinners__container-wrapper__item",
                key: y
            }, [t("div", Js, [pt(t("img", {
                "data-img": r(tt)("home", "avatar")
            }, null, 8, Zs), [[f, y.userPhoto]])]), t("div", tl, [t("h1", null, i(o(y.nickName)), 1)]), t("div", il, [pt(t("img", null, null, 512), [[f, d.value[y.type] || d.value[y.key]]])]), t("div", el, [t("h1", null, i(m.$t("titleGot")) + " " + i(r(Rt)(y.amount || 0)), 1), t("span", null, i(m.$t("winningAmount")), 1)])]))), 128))], 512)])])
        }
    }
});
const al = K(nl, [["__scopeId", "data-v-84210c68"]])
  , ol = {
    class: "dailyProfitRank"
}
  , sl = {
    class: "dailyProfitRank__content"
}
  , ll = {
    class: "dailyProfitRank__content-topThree"
}
  , cl = ["data-img"]
  , rl = ["data-img"]
  , ul = {
    class: "dailyProfitRank__content-list"
}
  , dl = {
    class: "left-rank"
}
  , pl = ["data-img"]
  , gl = ["data-img"]
  , bl = {
    class: "middle-name"
}
  , ml = {
    class: "right-box"
}
  , _l = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = he()
          , u = {
            nickName: e("noData"),
            userPhoto: "",
            price: 0,
            time: "",
            typeName: ""
        }
          , g = Q(()=>"ibdg");
        At(()=>s.getRankList, c=>{
            b.value.splice(0, c.length, ...c.sort((p,o)=>o.price - p.price).slice(0, 3)),
            d.value.splice(0, c.length, ...c.sort((p,o)=>o.price - p.price).slice(3, 10))
        }
        );
        const b = h([u, u, u])
          , d = h([]);
        return (c,p)=>{
            const o = Ht("lazy");
            return n(),
            a("div", ol, [t("h1", null, i(c.$t("earningsRankingToday")), 1), t("div", sl, [t("div", ll, [(n(!0),
            a(S, null, G(b.value, (_,m)=>(n(),
            a("div", {
                class: "dailyProfitRank__content-topThree__item",
                key: m,
                style: Ci({
                    order: m === 0 ? 2 : m === 2 ? 3 : 1,
                    top: m === 0 ? "-45px" : "-20px"
                })
            }, [t("div", {
                style: Ci({
                    background: `url(${r(tt)("images/DailyProfitRank", `border${m + 1}`)}) no-repeat center center / 100% 100%`
                })
            }, [_.userPhoto.length > 2 ? pt((n(),
            a("img", {
                key: 0,
                "data-img": r(tt)("home", g.value + "-avatar")
            }, null, 8, cl)), [[o, _.userPhoto]]) : pt((n(),
            a("img", {
                key: 1,
                "data-img": r(tt)("home", g.value + "-avatar")
            }, null, 8, rl)), [[o, r(tt)("main/Avatar", _.userPhoto)]])], 4), t("div", null, [pt(t("img", null, null, 512), [[o, r(tt)("images/DailyProfitRank", `crown${m + 1}`)]]), pt(t("img", null, null, 512), [[o, r(tt)("images/DailyProfitRank", `place${m + 1}`)]])]), t("span", null, i(r(Dn)(_.nickName)), 1), t("span", null, i(r(Rt)(_.price)), 1)], 4))), 128))]), t("div", ul, [(n(!0),
            a(S, null, G(d.value, (_,m)=>(n(),
            a("div", {
                class: "dailyProfitRank__content-list__item",
                key: m
            }, [t("span", dl, i(m + 4), 1), _.userPhoto.length > 2 ? pt((n(),
            a("img", {
                key: 0,
                "data-img": r(tt)("home", g.value + "-avatar")
            }, null, 8, pl)), [[o, _.userPhoto]]) : pt((n(),
            a("img", {
                key: 1,
                "data-img": r(tt)("home", g.value + "-avatar")
            }, null, 8, gl)), [[o, r(tt)("main/Avatar", _.userPhoto)]]), t("span", bl, i(r(Dn)(_.nickName)), 1), t("span", ml, i(r(Rt)(_.price)), 1)]))), 128))])])])
        }
    }
});
const hl = K(_l, [["__scopeId", "data-v-c310f7df"]])
  , vl = {
    class: "game_menu"
}
  , kl = {
    class: "menu_box1"
}
  , fl = {
    alt: ""
}
  , yl = {
    alt: ""
}
  , $l = {
    alt: ""
}
  , Tl = {
    class: "menu_box2"
}
  , wl = {
    alt: ""
}
  , Cl = {
    alt: ""
}
  , Nl = {
    alt: ""
}
  , Ll = {
    class: "menu_box3"
}
  , zl = {
    alt: ""
}
  , Il = {
    alt: ""
}
  , xl = H({
    __name: "gameMenu",
    props: {
        allGameList: {
            type: Array,
            default: ()=>[]
        }
    },
    emits: ["clickMenu"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , g = Q(()=>{
            let d = {};
            return (u.allGameList || []).forEach((p,o)=>{
                d[p.gameType] = Object.assign(p, o)
            }
            ),
            d
        }
        )
          , b = d=>{
            const c = g.value[d];
            s("clickMenu", {
                type: d,
                gameMenu: c,
                index: c.index
            })
        }
        ;
        return e({
            handleClickMenu: b
        }),
        (d,c)=>{
            var o, _, m, T, f, y, $, w;
            const p = Ht("lazy");
            return n(),
            a("div", vl, [t("div", kl, [t("div", {
                onClick: c[0] || (c[0] = k=>b("lottery"))
            }, [pt(t("img", fl, null, 512), [[p, (o = g.value.lottery) == null ? void 0 : o.img]]), t("span", null, i(d.$t("lottery")), 1)]), t("div", {
                onClick: c[1] || (c[1] = k=>b("flash"))
            }, [pt(t("img", yl, null, 512), [[p, (_ = g.value.flash) == null ? void 0 : _.img]]), t("span", null, i(d.$t("miniGame")), 1)]), t("div", {
                onClick: c[2] || (c[2] = k=>b("slot"))
            }, [pt(t("img", $l, null, 512), [[p, (m = g.value.slot) == null ? void 0 : m.img]]), t("span", null, i(d.$t("electronic")), 1)])]), t("div", Tl, [t("div", {
                onClick: c[3] || (c[3] = k=>b("sport"))
            }, [pt(t("img", wl, null, 512), [[p, (T = g.value.sport) == null ? void 0 : T.img]]), t("span", null, i(d.$t("sport")), 1)]), t("div", {
                onClick: c[4] || (c[4] = k=>b("popular")),
                class: "live_menu"
            }, [pt(t("img", Cl, null, 512), [[p, (f = g.value.popular) == null ? void 0 : f.img]]), t("span", null, i(d.$t("hot")), 1)]), t("div", {
                onClick: c[5] || (c[5] = k=>b("video"))
            }, [pt(t("img", Nl, null, 512), [[p, (y = g.value.video) == null ? void 0 : y.img]]), t("span", null, i(d.$t("live")), 1)])]), t("div", Ll, [t("div", {
                onClick: c[6] || (c[6] = k=>b("chess"))
            }, [pt(t("img", zl, null, 512), [[p, ($ = g.value.chess) == null ? void 0 : $.img]]), t("span", null, i(d.$t("chess")), 1)]), t("div", {
                onClick: c[7] || (c[7] = k=>b("fish"))
            }, [pt(t("img", Il, null, 512), [[p, (w = g.value.fish) == null ? void 0 : w.img]]), t("span", null, i(d.$t("fishing")), 1)])])])
        }
    }
});
const Rl = K(xl, [["__scopeId", "data-v-4d52ec40"]])
  , Sl = {
    key: 0,
    class: "title"
}
  , Ml = {
    class: "list"
}
  , Bl = ["onClick"]
  , Gl = {
    class: "item"
}
  , Pl = ["src", "data-img"]
  , Dl = {
    key: 0,
    class: "win-odds"
}
  , Al = H({
    __name: "HotGameItem",
    props: {
        gameList: {},
        isAll: {
            type: Boolean
        }
    },
    emits: ["onItemClick"],
    setup(l, {emit: e}) {
        const s = qi(()=>Wi(()=>import("./noticeBarHot-aab64464.js"), ["assets/js/noticeBarHot-aab64464.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"]))
          , u = Ei()
          , g = b=>{
            e("onItemClick", {
                item: b,
                key: "popular"
            })
        }
        ;
        return (b,d)=>(n(),
        a("div", {
            class: M(["hot_container", {
                hot_all: b.isAll
            }])
        }, [b.gameList.length > 0 ? (n(),
        a("div", {
            key: 0,
            class: M(["popular", {
                pupularAll: b.isAll
            }])
        }, [b.isAll ? B("", !0) : (n(),
        a("div", Sl, [z(r(s), {
            class: "hotGames"
        }), t("span", null, i(b.$t("hot")), 1)])), t("div", Ml, [(n(!0),
        a(S, null, G(b.gameList, c=>(n(),
        a("div", {
            key: c.vendorId,
            onClick: p=>g(c)
        }, [t("div", Gl, [t("img", {
            src: c.imgUrl,
            alt: "",
            "data-img": r(tt)("images", "avatar")
        }, null, 8, Pl)]), r(u).isShowHotGameWinOdds ? (n(),
        a("div", Dl, [t("span", null, i(b.$t("winOdds")), 1), t("span", null, i(c.winOdds) + "%", 1), t("div", {
            class: "win-p",
            style: Ci({
                width: `${Math.min(c.winOdds, 100)}%`
            })
        }, null, 4)])) : B("", !0)], 8, Bl))), 128))])], 2)) : B("", !0)], 2))
    }
});
const Ol = K(Al, [["__scopeId", "data-v-86cdf512"]])
  , ql = ["onClick"]
  , Wl = H({
    __name: "OnlineGamesItem",
    props: {
        gameData: {},
        isAll: {
            type: Boolean
        },
        gameType: {}
    },
    emits: ["onItemClick"],
    setup(l, {emit: e}) {
        const s = l
          , u = Q(()=>s.isAll ? s.gameData.gameList : s.gameData.gameList.length > 8 ? s.gameData.gameList.slice(0, 8) : s.gameData.gameList)
          , g = b=>{
            e("onItemClick", {
                item: b,
                key: s.gameType
            })
        }
        ;
        return Ct(()=>{}
        ),
        (b,d)=>{
            const c = Ht("lazy");
            return n(),
            a("div", {
                class: M(["minGame_container", {
                    all_game: b.isAll
                }])
            }, [(n(!0),
            a(S, null, G(u.value, p=>(n(),
            a("div", {
                class: "onlineGamesItem",
                key: p.gameID,
                onClick: o=>g(p)
            }, [pt((n(),
            a("img", {
                class: M(b.gameType === "fish" ? "fish_img" : "min_game_img"),
                key: p.gameID
            }, null, 2)), [[c, p.img]])], 8, ql))), 128))], 2)
        }
    }
});
const El = K(Wl, [["__scopeId", "data-v-426319e6"]])
  , Vl = {
    class: "lottery_container"
}
  , Fl = {
    class: "lottery_container-tab"
}
  , jl = {
    class: "lottery_container-tab-wrap"
}
  , Hl = ["onClick"]
  , Ul = {
    class: "lottery_container-list"
}
  , Kl = ["onClick"]
  , Xl = {
    class: "lotterySlotItem_img"
}
  , Ql = H({
    __name: "LotterySlotItem",
    props: {
        gameData: {},
        isAll: {
            type: Boolean
        }
    },
    setup(l) {
        const e = l
          , {t: s} = kt()
          , u = ft()
          , g = Q(()=>e.gameData.gameList.filter(y=>y.state === 1))
          , b = Q(()=>g.value.map(y=>y.categoryCode));
        function d(y) {
            return y.reduce(($,w)=>Array.isArray(w) ? $.concat(d(w)) : $.concat(w), [])
        }
        const c = y=>{
            if (y) {
                let $ = y;
                switch ($) {
                case "Trx Win Go":
                    $ = "Trx Win";
                    break;
                case "FXOSO":
                    $ = s("FXOSO");
                default:
                    $ = $
                }
                return $
            }
            return ""
        }
          , p = Q(()=>{
            const y = {};
            return e.gameData.gameList.forEach($=>{
                y[$.categoryCode] = $.categoryImg
            }
            ),
            y
        }
        )
          , o = h("all");
        let _ = Qt({
            all: [],
            "4D": [{
                categoryCode: "4D",
                title: "4D",
                path: "4D"
            }],
            Bingo18: [{
                categoryCode: "Bingo18",
                title: "Bingo18",
                path: "Binguo"
            }],
            XOSO: [{
                categoryCode: "XOSO",
                title: "XOSO",
                path: "XoSo"
            }],
            FXOSO: [{
                categoryCode: "FXOSO",
                title: "FXOSO",
                path: "XoSo"
            }],
            "Win Go": [{
                typeId: 1,
                categoryCode: "Win Go",
                title: "Win Go 1Min",
                path: "WinGo"
            }, {
                typeId: 2,
                categoryCode: "Win Go",
                title: "Win Go 3Min",
                path: "WinGo"
            }, {
                typeId: 3,
                categoryCode: "Win Go",
                title: "Win Go 5Min",
                path: "WinGo"
            }, {
                typeId: 4,
                categoryCode: "Win Go",
                title: "Win Go 10Min",
                path: "WinGo"
            }],
            "5D": [{
                typeId: 5,
                categoryCode: "5D",
                title: "5D 1Min",
                path: "5D"
            }, {
                typeId: 6,
                categoryCode: "5D",
                title: "5D 3Min",
                path: "5D"
            }, {
                typeId: 7,
                categoryCode: "5D",
                title: "5D 5Min",
                path: "5D"
            }, {
                typeId: 8,
                categoryCode: "5D",
                title: "5D 10Min",
                path: "5D"
            }],
            K3: [{
                typeId: 9,
                categoryCode: "K3",
                title: "K3 1Min",
                path: "K3"
            }, {
                typeId: 10,
                categoryCode: "K3",
                title: "K3 3Min",
                path: "K3"
            }, {
                typeId: 11,
                categoryCode: "K3",
                title: "K3 5Min",
                path: "K3"
            }, {
                typeId: 12,
                categoryCode: "K3",
                title: "K3 10Min",
                path: "K3"
            }],
            "Trx Win Go": [{
                typeId: 13,
                categoryCode: "Trx Win Go",
                title: "Trx Win Go 1Min",
                path: "WinTrx"
            }, {
                typeId: 14,
                categoryCode: "Trx Win Go",
                title: "Trx Win Go 3Min",
                path: "WinTrx"
            }, {
                typeId: 15,
                categoryCode: "Trx Win Go",
                title: "Trx Win Go 5Min",
                path: "WinTrx"
            }, {
                typeId: 16,
                categoryCode: "Trx Win Go",
                title: "Trx Win Go 10Min",
                path: "WinTrx"
            }]
        });
        const m = Q(()=>_[o.value] || [])
          , T = [{
            value: 1,
            path: "WinGo"
        }, {
            value: 3,
            path: "5D"
        }, {
            value: 2,
            path: "K3"
        }, {
            value: 4,
            path: "WinTrx"
        }, {
            value: 5,
            path: "XoSo"
        }, {
            value: 6,
            path: "XoSo"
        }, {
            value: 7,
            path: "Binguo"
        }, {
            value: 8,
            path: "4D"
        }]
          , f = y=>{
            var w;
            let $ = (w = T.find(k=>k.path === y.path)) == null ? void 0 : w.value;
            y.categoryCode == "FXOSO" && ($ = 6),
            u.push({
                name: "AllLotteryGames-" + y.path,
                query: {
                    typeId: y.typeId || "",
                    id: $
                }
            })
        }
        ;
        return Ct(()=>{
            const y = d(Object.values(_));
            _.all = y.filter($=>b.value.includes($.categoryCode))
        }
        ),
        (y,$)=>{
            const w = Ht("lazy");
            return n(),
            a("div", Vl, [t("div", Fl, [t("ul", jl, [t("li", {
                class: M({
                    active: o.value === "all"
                }),
                onClick: $[0] || ($[0] = k=>o.value = "all")
            }, i(y.$t("all")), 3), (n(!0),
            a(S, null, G(g.value, k=>(n(),
            a("li", {
                onClick: v=>o.value = k.categoryCode,
                class: M({
                    active: k.categoryCode === o.value
                })
            }, i(c(k.categoryCode)), 11, Hl))), 256))])]), t("div", Ul, [(n(!0),
            a(S, null, G(m.value, k=>(n(),
            a("div", {
                class: "lotterySlotItem",
                key: k.id,
                onClick: v=>f(k)
            }, [t("div", Xl, [pt(t("img", null, null, 512), [[w, p.value[k.categoryCode]]])]), t("span", null, i(k.title), 1)], 8, Kl))), 128))])])
        }
    }
});
const Yl = K(Ql, [["__scopeId", "data-v-f0612e6a"]])
  , Jl = {
    class: "lotterySlotItem__container"
}
  , Zl = {
    class: "game_img"
}
  , tc = {
    class: "game_text"
}
  , ic = H({
    __name: "OtherGameItem",
    props: {
        info: {},
        title: {}
    },
    setup(l) {
        return kt(),
        (e,s)=>{
            const u = Ht("lazy");
            return n(),
            a("div", Jl, [pt(t("img", Zl, null, 512), [[u, e.info.vendorImg]]), t("span", tc, i(e.title), 1)])
        }
    }
});
const ec = K(ic, [["__scopeId", "data-v-685fb2f6"]])
  , nc = ["onClick"]
  , ac = {
    class: "gameImg"
}
  , oc = H({
    __name: "ElectronicItem",
    props: {
        gameData: {
            type: Object,
            default: ()=>({})
        },
        isAll: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["onItemClick"],
    setup(l, {emit: e}) {
        const s = l
          , u = Q(()=>{
            var b;
            return s.isAll ? s.gameData.gameList : (b = s.gameData) == null ? void 0 : b.gameList.slice(0, 6)
        }
        )
          , g = b=>{
            e("onItemClick", {
                item: b,
                key: "slot"
            })
        }
        ;
        return Ct(()=>{}
        ),
        (b,d)=>{
            const c = Ht("lazy");
            return n(),
            a("div", {
                class: M(["onlineGamesItem__container", {
                    allGame: l.isAll
                }])
            }, [(n(!0),
            a(S, null, G(u.value, p=>(n(),
            a("div", {
                key: p.slotsTypeID,
                class: "item",
                onClick: o=>g(p)
            }, [pt(t("img", ac, null, 512), [[c, p.vendorImg]])], 8, nc))), 128))], 2)
        }
    }
});
const sc = K(oc, [["__scopeId", "data-v-cd9f8293"]])
  , lc = {
    alt: ""
}
  , cc = H({
    __name: "ElectronicWinRate",
    setup(l) {
        const e = Ei()
          , s = Q(()=>e.winRate.electronicWinRateImgUrl || "")
          , u = Q(()=>!!(e.winRate.isShowElectronicWinRateExternalLink && s.value))
          , g = ()=>{
            e.winRate.electronicWinRateExternalLink && window.open(e.winRate.electronicWinRateExternalLink)
        }
        ;
        return (b,d)=>{
            const c = Ht("lazy");
            return u.value ? (n(),
            a("div", {
                key: 0,
                class: "WinRate",
                onClick: g
            }, [pt(t("img", lc, null, 512), [[c, s.value]])])) : B("", !0)
        }
    }
});
const rc = K(cc, [["__scopeId", "data-v-31fca86c"]])
  , uc = ["src"]
  , dc = H({
    __name: "GameListGrid",
    props: {
        currentGame: {
            type: Object,
            default: ()=>{}
        },
        isAll: {
            type: Boolean,
            default: !1
        }
    },
    setup(l) {
        const e = l
          , {t: s} = kt()
          , {start: u, end: g, flag: b} = na()
          , d = ft()
          , c = Q(()=>e.currentGame.gameType === "popular" ? 1 : ["sport", "chess", "video"].includes(e.currentGame.gameType) ? 2 : e.currentGame.gameType === "lottery" ? 3 : e.currentGame.gameType === "slot" ? 4 : e.currentGame.gameType === "flash" || e.currentGame.gameType === "fish" ? 5 : -1)
          , p = ()=>{
            sessionStorage.setItem("slotGamesList", JSON.stringify(e.currentGame.gameList)),
            sessionStorage.setItem("gameType", JSON.stringify(e.currentGame)),
            sessionStorage.setItem("clickedItem", JSON.stringify(e.currentGame.gameList[0])),
            d.push({
                name: "AllGames",
                query: {
                    type: e.currentGame.gameType
                }
            })
        }
          , o = _=>{
            if (!pi().token) {
                d.push({
                    name: "login"
                });
                return
            }
            let {item: T, key: f} = _;
            ["chess", "slot"].includes(f) ? (sessionStorage.setItem("slotGamesList", JSON.stringify(e.currentGame.gameList)),
            sessionStorage.setItem("gameType", JSON.stringify(e.currentGame)),
            sessionStorage.setItem("clickedItem", JSON.stringify(T)),
            d.push({
                name: "AllOnlineGames"
            })) : Ne({
                title: s("tips"),
                message: s("tipsPlayGame"),
                cancelButtonText: s("cancel"),
                showCancelButton: !0
            }).then(async()=>{
                u(()=>{
                    Ne({
                        title: "",
                        message: s("gameLoadTimeOut")
                    }).then(()=>{
                        d.push({
                            path: "/"
                        })
                    }
                    )
                }
                );
                let $ = {
                    gameCode: T.gameCode || T.gameID,
                    vendorCode: Number(T.vendorId) || Number(T.slotsTypeID)
                };
                const w = await ot(aa({
                    ...$,
                    phonetype: oa()
                }));
                if (w && !b.value)
                    sa() ? la("game", {
                        ...(w == null ? void 0 : w.data) || {},
                        gameName: _.item.slotsName || _.item.gameNameEn || ""
                    }) : Le(w == null ? void 0 : w.data, 1);
                else {
                    !b.value && g(!0);
                    return
                }
                !b.value && g()
            }
            )
        }
        ;
        return Ct(()=>{}
        ),
        (_,m)=>(n(),
        a("div", {
            class: M(["gameListGrid__container", {
                all_container: l.isAll
            }])
        }, [c.value === 1 ? (n(),
        it(Ol, {
            key: 0,
            gameList: l.currentGame.gameList,
            onOnItemClick: o,
            isAll: l.isAll
        }, null, 8, ["gameList", "isAll"])) : B("", !0), c.value === 2 ? (n(),
        a("div", {
            key: 1,
            class: M(["otherGame", {
                all_other: l.isAll
            }])
        }, [(n(!0),
        a(S, null, G(l.currentGame.gameList, (T,f)=>(n(),
        it(ec, {
            key: f,
            info: T,
            title: l.currentGame.title,
            onClick: y=>o({
                item: T,
                key: l.currentGame.gameType
            })
        }, null, 8, ["info", "title", "onClick"]))), 128))], 2)) : B("", !0), c.value === 4 ? (n(),
        it(rc, {
            key: 2
        })) : B("", !0), c.value === 4 ? (n(),
        it(sc, {
            key: 3,
            gameData: l.currentGame,
            isAll: l.isAll,
            onOnItemClick: o
        }, null, 8, ["gameData", "isAll"])) : B("", !0), c.value === 3 ? (n(),
        it(Yl, {
            key: 4,
            gameData: l.currentGame,
            isAll: l.isAll
        }, null, 8, ["gameData", "isAll"])) : B("", !0), c.value === 5 ? (n(),
        it(El, {
            key: 5,
            gameType: l.currentGame.gameType,
            gameData: l.currentGame,
            isAll: l.isAll,
            onOnItemClick: o
        }, null, 8, ["gameType", "gameData", "isAll"])) : B("", !0), l.isAll ? B("", !0) : (n(),
        a("button", {
            key: 6,
            onClick: p,
            class: "look_all"
        }, [t("img", {
            src: r(tt)("home", "all"),
            alt: ""
        }, null, 8, uc), E(" " + i(_.$t("viewAll")), 1)]))], 2))
    }
});
const pc = K(dc, [["__scopeId", "data-v-61326553"]])
  , gc = {
    class: "gamesList__container",
    id: "gameList"
}
  , bc = {
    key: 0,
    class: "gamesList__container-title"
}
  , mc = H({
    __name: "GameList",
    props: {
        gameData: {}
    },
    setup(l) {
        return (e,s)=>(n(),
        a("div", gc, [e.gameData.gameList.length > 0 && e.gameData.isShow ? (n(),
        a("div", bc, i(e.gameData.title), 1)) : B("", !0), e.gameData.isShow ? (n(),
        it(pc, {
            key: 1,
            currentGame: e.gameData,
            isAll: !0
        }, null, 8, ["currentGame"])) : B("", !0)]))
    }
});
const za = K(mc, [["__scopeId", "data-v-03f502bc"]])
  , _c = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = Qt({
            allGameList: [],
            currentGame: void 0
        })
          , u = d=>{
            const c = document.querySelector("#gameList")
              , p = (c == null ? void 0 : c.offsetTop) || 0;
            sessionStorage.setItem("clickMenu", d.type),
            s.currentGame = d.gameMenu,
            window.scrollTo({
                top: p - 100,
                behavior: "smooth"
            })
        }
          , g = async()=>{
            const d = await ot(Oo());
            d && (s.allGameList = d.data.filter(c=>c.categoryCode !== "BigAward").map(c=>({
                isAll: !1,
                img: c.categoryImg,
                isShow: c.state === 1,
                gameList: [],
                gameType: c.categoryCode.toLocaleLowerCase(),
                title: e("code" + c.typeNameCode)
            })))
        }
          , b = async()=>{
            await g();
            const d = await ot(Ao())
              , c = ["slot", "video", "chess", "sport", "lottery"];
            if (d) {
                const p = d.data;
                s.allGameList = s.allGameList.map(_=>(c.includes(_.gameType) ? _.gameList = p[_.gameType].filter(m=>m.state === 1) : _.gameType === "popular" ? _.gameList = [...p[_.gameType].platformList, ...p[_.gameType].clicksTopList] : _.gameList = p[_.gameType],
                _.gameList.length < 1 && (_.isShow = !1),
                _));
                let o = sessionStorage.getItem("clickMenu") || "";
                if (o)
                    s.currentGame = s.allGameList.find(_=>_.gameType === o);
                else {
                    let _ = s.allGameList.find(m=>m.gameType === "lottery");
                    _ || (_ = s.allGameList[0]),
                    s.currentGame = _
                }
                sessionStorage.setItem("allGameList", JSON.stringify(s.allGameList))
            }
        }
        ;
        return Ct(()=>{
            b()
        }
        ),
        (d,c)=>(n(),
        a(S, null, [z(Rl, {
            "all-game-list": s.allGameList,
            onClickMenu: u
        }, null, 8, ["all-game-list"]), s.currentGame ? (n(),
        it(za, {
            key: 0,
            gameData: s.currentGame
        }, null, 8, ["gameData"])) : B("", !0)], 64))
    }
})
  , hc = {
    class: "noticeBar__container"
}
  , vc = {
    class: "noticeBar__container-body"
}
  , kc = {
    key: 0,
    class: "noticeBar__container-body-text"
}
  , fc = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = pi()
          , u = h(null)
          , g = qi(()=>Wi(()=>import("./noticeBarSpeaker-cc107f2a.js"), ["assets/js/noticeBarSpeaker-cc107f2a.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"]))
          , b = qi(()=>Wi(()=>import("./noticeBarHot-aab64464.js"), ["assets/js/noticeBarHot-aab64464.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"]))
          , d = h(s.messageList)
          , c = async()=>{
            const p = await ot(qo({
                pageNo: 1,
                pageSize: 5
            }));
            if (p) {
                if (s.setMessage(p.data.list),
                d.value = p.data.list,
                !d.value.length)
                    return;
                u.value && clearInterval(u.value),
                u.value = setInterval(()=>{
                    d.value.push(d.value.shift())
                }
                , 7e3)
            }
        }
        ;
        return Ct(()=>{
            d.value || setTimeout(()=>{
                c()
            }
            , 1e3)
        }
        ),
        (p,o)=>{
            var _;
            return n(),
            a("div", hc, [(n(),
            it(vi(r(g)))), t("div", vc, [d.value && d.value[0] && d.value[0].siteMessage ? (n(),
            a("div", kc, i((_ = d.value[0]) == null ? void 0 : _.siteMessage), 1)) : B("", !0)]), t("button", {
                onClick: o[0] || (o[0] = m=>r(e).push({
                    name: "Notification"
                }))
            }, [(n(),
            it(vi(r(b)))), E(" " + i(p.$t("more")), 1)])])
        }
    }
});
const ke = K(fc, [["__scopeId", "data-v-2f7ed6fa"]])
  , yc = ["onClick"]
  , $c = H({
    __name: "index",
    setup(l) {
        const e = h([])
          , s = [To]
          , u = d=>{}
          , g = ()=>{}
          , b = d=>{
            d && (window.location.href = d)
        }
        ;
        return Ct(async()=>{
            const d = await ot(Wo());
            d && (e.value = d.data,
            e.value.length === 0 && e.value.push({
                bannerUrl: tt("home", "banner"),
                url: ""
            }))
        }
        ),
        (d,c)=>{
            const p = Ht("lazy");
            return n(),
            it(r($o), {
                class: "my-swipe",
                "slides-per-view": 1,
                "space-between": 20,
                onSwiper: u,
                onSlideChange: g,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1
                },
                modules: s,
                loop: !0
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(e.value, (o,_)=>(n(),
                it(r(yo), {
                    key: _
                }, {
                    default: D(()=>[pt(t("img", {
                        onClick: m=>b(o.url)
                    }, null, 8, yc), [[p, o.bannerUrl]])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            })
        }
    }
});
const Tc = K($c, [["__scopeId", "data-v-747942a2"]])
  , wc = H({
    __name: "ChangLong",
    setup(l) {
        const e = ft()
          , s = ()=>{
            e.push({
                name: "AllLotteryGames-ChangLong"
            })
        }
        ;
        return (u,g)=>(n(),
        a("div", {
            class: "changlongEnter",
            onClick: s
        }))
    }
});
const Ie = K(wc, [["__scopeId", "data-v-d3181efa"]])
  , Cc = H({
    __name: "Turntable",
    setup(l) {
        ft();
        const e = h()
          , s = Ei();
        h(!1);
        function u() {
            s.getBigTurntableLink && window.open(s.getBigTurntableLink)
        }
        return (g,b)=>r(s).getBigTurntableLink ? (n(),
        a("div", {
            key: 0,
            class: "turntable",
            onClick: u,
            ref_key: "turntableId",
            ref: e
        }, null, 512)) : B("", !0)
    }
});
const Nc = l=>(Gt("data-v-7669c43b"),
l = l(),
Pt(),
l)
  , Lc = Nc(()=>t("svg", {
    class: "line",
    width: "1",
    height: "60",
    viewBox: "0 0 1 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [t("line", {
    x1: "0.5",
    x2: "0.5",
    y2: "60",
    stroke: "#8F5206"
})], -1))
  , zc = ["src"]
  , Ic = {
    class: "text"
}
  , xc = 1.1
  , Rc = H({
    __name: "DownloadPWA",
    setup(l) {
        const e = Yn("show-pwa-download", !0);
        let s = null;
        const {t: u} = kt()
          , g = Qt({
            canIUse: !1,
            download: null
        });
        window.addEventListener("beforeinstallprompt", o=>{
            o.preventDefault(),
            s = o,
            g.canIUse = !0
        }
        , {
            once: !0
        }),
        g.download = function() {
            s.prompt().then(o=>{
                o.outcome === "accepted" && (g.canIUse = !1)
            }
            )
        }
        ;
        let b = Eo();
        b = b == null ? void 0 : b.toLowerCase();
        const d = Q(()=>tt("common", "downloadPWA" + b));
        /[\u4e00-\u9fa5]+/.test(b) && (b = "vxth");
        const c = document.querySelector("link[rel='manifest']");
        c == null || c.setAttribute("href", "/manifest/manifest." + b + ".json?version=" + xc);
        async function p() {
            if (e.value)
                if (g.canIUse)
                    g.download && g.download();
                else {
                    const o = await ot(ca());
                    if (!o)
                        return;
                    Le(Vo ? o.data.androidUrl : o.data.iosUrl)
                }
        }
        return (o,_)=>{
            const m = j("van-icon");
            return n(),
            a("div", {
                class: "btn",
                onClick: p
            }, [Lc, z(m, {
                class: "close",
                name: "close",
                color: "#8F5206",
                onClick: _[0] || (_[0] = T=>e.value = !1)
            }), t("img", {
                class: "icon",
                src: d.value
            }, null, 8, zc), t("div", Ic, i(g.canIUse ? r(u)("addToDesktop") : r(u)("downloadAPP")), 1)])
        }
    }
});
const Sc = K(Rc, [["__scopeId", "data-v-7669c43b"]])
  , Mc = {
    class: "dialog__container",
    role: "dialog",
    tabindex: "0"
}
  , Bc = {
    class: "dialog__container-img"
}
  , Gc = {
    alt: ""
}
  , Pc = {
    class: "dialog__container-title"
}
  , Dc = {
    class: "dialog__container-content"
}
  , Ac = {
    class: "dialog__container-footer"
}
  , Oc = H({
    __name: "HomeDialog",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        title: {
            type: String,
            default: ""
        },
        confirmText: {
            type: String,
            default: "comfirm"
        },
        showCancelBtn: {
            type: Boolean,
            default: !0
        },
        cancelText: {
            type: String,
            default: "cancel"
        },
        clickOutSide: {
            type: Boolean,
            default: !1
        },
        pathname: {
            type: String,
            default: "main/Laundry"
        },
        picname: {
            type: String,
            default: "superjackpotHome"
        }
    },
    emits: ["update:show", "confirm"],
    setup(l, {emit: e}) {
        const s = l
          , {t: u} = kt();
        At(()=>s.show, d=>{
            d ? window.addEventListener("touchmove", b, {
                passive: !1
            }) : window.removeEventListener("touchmove", b)
        }
        );
        function g(d) {
            s.clickOutSide && e("update:show", !1)
        }
        const b = d=>{
            s.show && d.preventDefault()
        }
        ;
        return (d,c)=>{
            const p = Ht("lazy");
            return n(),
            a("div", {
                class: M(["dialog", {
                    active: l.show,
                    inactive: !l.show
                }])
            }, [t("div", Mc, [t("div", Bc, [mi(d.$slots, "header", {}, ()=>[pt(t("img", Gc, null, 512), [[p, r(tt)(l.pathname, l.picname)]])], !0)]), t("div", Pc, [mi(d.$slots, "title", {}, ()=>[t("h1", null, i(r(u)(l.title)), 1)], !0)]), t("div", Dc, [mi(d.$slots, "content", {}, void 0, !0)]), t("div", Ac, [mi(d.$slots, "footer", {}, ()=>[l.showCancelBtn ? (n(),
            a("button", {
                key: 0,
                onClick: c[0] || (c[0] = ()=>{
                    e("update:show", !1)
                }
                )
            }, i(d.$t(l.cancelText)), 1)) : B("", !0), t("button", {
                onClick: c[1] || (c[1] = ()=>{
                    e("confirm")
                }
                )
            }, i(d.$t(l.confirmText)), 1)], !0)])]), t("div", {
                class: "dialog__outside",
                onClick: g
            })], 2)
        }
    }
});
const qc = K(Oc, [["__scopeId", "data-v-d6ad76e9"]])
  , fe = l=>(Gt("data-v-9bebd08e"),
l = l(),
Pt(),
l)
  , Wc = {
    class: "content"
}
  , Ec = {
    class: "logo"
}
  , Vc = ["src"]
  , Fc = {
    class: "languages"
}
  , jc = {
    class: "languages-text"
}
  , Hc = {
    class: "content__right"
}
  , Uc = fe(()=>t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
}, [t("g", {
    "clip-path": "url(#clip0_243_123505)"
}, [t("circle", {
    cx: "30",
    cy: "30",
    r: "28.5",
    stroke: "#3F3F3F",
    "stroke-width": "3"
}), t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M29.9999 36.25L16.25 22.5543H25.4166V10H34.5833V22.5543H43.75L29.9999 36.25Z",
    fill: "#3F3F3F",
    stroke: "#3F3F3F",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), t("path", {
    d: "M50 41H10",
    stroke: "#3F3F3F",
    "stroke-width": "3",
    "stroke-linecap": "round"
}), t("path", {
    d: "M41.25 48.5H18.75",
    stroke: "#3F3F3F",
    "stroke-width": "3",
    "stroke-linecap": "round"
})]), t("defs", null, [t("clipPath", {
    id: "clip0_243_123505"
}, [t("rect", {
    width: "60",
    height: "60",
    fill: "white"
})])])], -1))
  , Kc = fe(()=>t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
}, [t("path", {
    d: "M54.3525 27.2813C54.1013 13.8694 43.7044 3.03564 30.9375 3.03564H29.0625C16.2956 3.03564 5.89875 13.8694 5.6475 27.2794C3.405 28.5788 1.875 30.9769 1.875 33.75V37.5C1.875 41.6363 5.23875 45 9.375 45C13.5113 45 16.875 41.6363 16.875 37.5V33.75C16.8721 31.7748 16.0906 29.8803 14.6998 28.4777C13.3091 27.075 11.4214 26.2773 9.44625 26.2575C10.1794 15.3919 18.6863 6.78564 29.0625 6.78564H30.9375C41.3156 6.78564 49.8206 15.3919 50.5537 26.2575C48.5786 26.2773 46.6909 27.075 45.3002 28.4777C43.9094 29.8803 43.1279 31.7748 43.125 33.75V37.5C43.125 40.8863 45.3938 43.7213 48.48 44.6494C45.6947 48.3157 41.7173 50.8953 37.2337 51.9431C36.9242 51.0148 36.3309 50.2072 35.5376 49.6343C34.7443 49.0613 33.7911 48.752 32.8125 48.75C31.5693 48.75 30.377 49.2439 29.4979 50.123C28.6189 51.002 28.125 52.1943 28.125 53.4375C28.125 54.6807 28.6189 55.873 29.4979 56.7521C30.377 57.6312 31.5693 58.125 32.8125 58.125C33.611 58.124 34.3959 57.9181 35.0922 57.5271C35.7884 57.1362 36.3728 56.5732 36.7894 55.8919C40.1684 55.3008 43.3778 53.9795 46.1935 52.0202C49.0093 50.061 51.3637 47.511 53.0925 44.5481C56.0137 43.5244 58.125 40.7681 58.125 37.5V33.75C58.125 30.9769 56.595 28.5788 54.3525 27.2813ZM13.125 33.75V37.5C13.125 39.5681 11.4431 41.25 9.375 41.25C7.30687 41.25 5.625 39.5681 5.625 37.5V33.75C5.625 31.6819 7.30687 30 9.375 30C11.4431 30 13.125 31.6819 13.125 33.75ZM54.375 37.5C54.375 39.51 52.7812 41.1431 50.7938 41.2331L50.6475 41.1638C50.6344 41.1938 50.6138 41.2181 50.6006 41.2463C49.6109 41.2398 48.6639 40.8424 47.966 40.1407C47.2681 39.4389 46.876 38.4897 46.875 37.5V33.75C46.875 31.6819 48.5569 30 50.625 30C52.6931 30 54.375 31.6819 54.375 33.75V37.5Z",
    fill: "#3F3F3F"
})], -1))
  , Xc = {
    key: 0,
    class: "balance"
}
  , Qc = fe(()=>t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none"
}, [t("path", {
    d: "M20 19.8182C15.0509 19.8182 11.04 15.8292 11.04 10.9071C11.04 5.98507 15.0509 2 20 2C24.9491 2 28.96 5.98903 28.96 10.9071C28.96 15.8252 24.9491 19.8182 20 19.8182Z",
    fill: "#292929"
}), t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M20.3788 27.0402C20.1757 27.2624 19.8243 27.2624 19.6212 27.0402L14.3176 21.2395C8.47124 22.1545 4 27.1864 4 33.2567C4 35.3241 5.68552 37 7.76471 37H32.2353C34.3145 37 36 35.3241 36 33.2567C36 27.1864 31.5288 22.1545 25.6824 21.2395L20.3788 27.0402Z",
    fill: "#292929"
})], -1))
  , Yc = fe(()=>t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none"
}, [t("path", {
    d: "M4.31322 9.3733C4.56545 9.37359 4.81243 9.44542 5.02548 9.58046C5.23852 9.71549 5.4089 9.90818 5.51681 10.1362C5.62473 10.3642 5.66577 10.6181 5.63516 10.8684C5.60455 11.1188 5.50355 11.3554 5.34388 11.5506L5.34922 11.552C4.55792 12.7353 4.09671 14.1084 4.01317 15.5294C3.92963 16.9505 4.22679 18.3682 4.87399 19.6361C5.52119 20.904 6.49499 21.9762 7.69489 22.7422C8.8948 23.5081 10.2773 23.94 11.6999 23.9933L11.9999 24L18.6665 23.9986V21.4946C18.6664 21.3766 18.6924 21.2601 18.7425 21.1533L18.8012 21.0506C18.919 20.8742 19.102 20.7518 19.3101 20.7103C19.5181 20.6688 19.7341 20.7116 19.9106 20.8293L25.6666 24.6666C25.776 24.7397 25.8657 24.8387 25.9278 24.9547C25.9899 25.0708 26.0223 25.2004 26.0223 25.332C26.0223 25.4636 25.9899 25.5931 25.9278 25.7092C25.8657 25.8253 25.776 25.9242 25.6666 25.9973L19.9092 29.8373C19.7887 29.9177 19.6485 29.9639 19.5038 29.9709C19.359 29.9779 19.2151 29.9454 19.0873 29.8769C18.9596 29.8085 18.8529 29.7066 18.7785 29.5822C18.7042 29.4578 18.665 29.3156 18.6652 29.1706V26.664L11.9999 26.6666C10.055 26.6668 8.14709 26.1352 6.4825 25.1294C4.8179 24.1236 3.45999 22.6818 2.55562 20.9599C1.65126 19.2381 1.23486 17.3018 1.35147 15.3604C1.46808 13.419 2.11325 11.5465 3.21722 9.9453C3.34 9.76831 3.50384 9.6237 3.69471 9.52385C3.88558 9.42401 4.0978 9.37189 4.31322 9.37197V9.3733ZM13.1985 2.38397C13.2863 2.51541 13.3332 2.66991 13.3332 2.82797V5.3333H19.9999C21.9298 5.33301 23.8236 5.85631 25.4796 6.84745C27.1355 7.83859 28.4915 9.26042 29.4031 10.9614C30.3148 12.6625 30.7478 14.579 30.6561 16.5067C30.5644 18.4344 29.9515 20.3011 28.8826 21.908L28.8559 21.948C28.8314 21.9847 28.8065 22.0211 28.7812 22.0573C28.5306 22.3506 28.1612 22.5373 27.7479 22.5373C27.4891 22.5373 27.2358 22.462 27.0191 22.3206C26.8023 22.1791 26.6314 21.9776 26.5272 21.7407C26.423 21.5037 26.3901 21.2416 26.4323 20.9863C26.4746 20.7309 26.5902 20.4934 26.7652 20.3026L26.7519 20.292C27.5073 19.1038 27.9358 17.7372 27.994 16.3304C28.0522 14.9236 27.738 13.5263 27.0833 12.2798C26.4286 11.0333 25.4565 9.98161 24.2652 9.23107C23.0739 8.48053 21.7056 8.0577 20.2985 8.0053L19.9999 7.99997L13.3332 7.99863V10.5053C13.3334 10.6502 13.2943 10.7925 13.2199 10.9169C13.1456 11.0413 13.0388 11.1432 12.9111 11.2116C12.7834 11.2801 12.6394 11.3125 12.4947 11.3056C12.3499 11.2986 12.2098 11.2524 12.0892 11.172L6.33322 7.33063C6.22376 7.25755 6.13403 7.1586 6.07197 7.04254C6.0099 6.92648 5.97744 6.79691 5.97744 6.6653C5.97744 6.53369 6.0099 6.40411 6.07197 6.28806C6.13403 6.172 6.22376 6.07304 6.33322 5.99997L12.0905 2.15997C12.178 2.10174 12.2761 2.06131 12.3792 2.04099C12.4822 2.02066 12.5883 2.02085 12.6913 2.04152C12.7944 2.0622 12.8923 2.10297 12.9795 2.16149C13.0668 2.22002 13.1417 2.29517 13.1999 2.38263L13.1985 2.38397Z",
    fill: "#775B3E"
})], -1))
  , Jc = [Yc]
  , Zc = fe(()=>t("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none"
}, [t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M14 41H34C40 41 44 38 44 31V17C44 10 40 7 34 7H14C8 7 4 10 4 17V31C4 38 8 41 14 41ZM19.3181 24.164C20.6181 25.224 22.3181 25.744 23.9981 25.744C25.6781 25.744 27.3781 25.224 28.6581 24.164L34.9181 19.164C35.5781 18.664 35.6781 17.704 35.1581 17.064C34.6581 16.404 33.6981 16.304 33.0581 16.824L26.7981 21.824C25.2781 23.044 22.6981 23.044 21.1781 21.824L14.9181 16.824C14.6062 16.5974 14.2189 16.5 13.8369 16.5521C13.4549 16.6042 13.1078 16.8017 12.8679 17.1035C12.628 17.4053 12.5139 17.788 12.5493 18.1719C12.5848 18.5558 12.767 18.9112 13.0581 19.164L19.3181 24.164Z",
    fill: "#292929"
})], -1))
  , tr = [Zc]
  , ir = {
    class: "promptHeader"
}
  , er = ["innerHTML"]
  , nr = {
    class: "Laundry-Con"
}
  , ar = {
    class: "Laundry-Con_tip"
}
  , or = {
    class: "Landty-Con-tips"
}
  , sr = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft()
          , u = Fo()
          , {setLoading: g} = ze()
          , b = Ei()
          , {closeLaundry: d, closePrompt: c, store: p} = jo()
          , o = Q(()=>b.getIsShowLotteryDragon)
          , _ = Yn("show-pwa-download", !0);
        function m() {
            s.push({
                name: "CustomerService"
            })
        }
        const T = Q(()=>({}).VITE_SITE || "Game")
          , f = Q(()=>b.getIsCanAppDownload)
          , y = Q(()=>b.getIsShowAppDownloadIcon);
        async function $() {
            const R = await ot(ca());
            if (R) {
                let O = navigator.userAgent.toLowerCase()
                  , P = "";
                O.indexOf("windows") != -1 || O.indexOf("android") != -1 ? P = R.data.androidUrl : O.indexOf("iphone") != -1 || O.indexOf("mac") != -1 || O.indexOf("ipad") != -1 ? P = R.data.iosUrl : P = R.data.androidUrl,
                Le(P)
            }
        }
        g(!1);
        const w = ()=>{
            d(),
            s.push({
                name: "SuperJackpot"
            })
        }
        ;
        async function k() {
            u.resetData(!1, !0)
        }
        const v = pi()
          , L = h(!0);
        h();
        async function C() {
            const R = he();
            L.value = !(v.getUserInfo.unRead > 0),
            R.setReadState(L.value)
        }
        const I = h("");
        async function N() {
            const R = await ot(Ho());
            R && (I.value = R.data)
        }
        const x = Q(()=>b.getProjectLogo);
        return Ct(()=>{
            C(),
            !sessionStorage.getItem("promptShowCount") && v.token && N(),
            g(!1)
        }
        ),
        (R,O)=>{
            const P = j("NavBar")
              , F = j("van-dialog");
            return n(),
            a("div", Wc, [z(P, null, {
                left: D(()=>[t("div", Ec, [t("img", {
                    src: x.value,
                    alt: ""
                }, null, 8, Vc)]), t("div", Fc, [z(Xs), t("span", jc, "Welcome to BDG " + i(T.value), 1)])]),
                right: D(()=>[t("div", Hc, [f.value ? (n(),
                a("div", {
                    key: 0,
                    class: "btn",
                    onClick: $
                }, [Uc, t("span", null, i(r(e)("downloadAPP")), 1)])) : B("", !0), t("div", {
                    class: "btn",
                    onClick: m
                }, [Kc, t("span", null, i(r(e)("customerServiceTitle")), 1)])])]),
                _: 1
            }), z(Tc), z(ke, {
                key: "home"
            }), r(v).token ? (n(),
            a("div", Xc, [Qc, t("span", null, i(r(v).getUserInfo.nickName) + "-", 1), t("span", null, i(r(Rt)(r(u).getAmount)), 1), t("span", {
                onClick: k,
                class: "balance-refresh"
            }, Jc), t("span", {
                class: "balance-msg",
                onClick: O[0] || (O[0] = X=>r(s).push({
                    name: "Messages"
                }))
            }, tr)])) : B("", !0), z(_c), z(al), z(hl), o.value ? (n(),
            it(Ie, {
                key: 1
            })) : B("", !0), r(_) && y.value ? (n(),
            it(Sc, {
                key: 2
            })) : B("", !0), z(Cc), z(F, {
                show: r(p).prompt,
                "onUpdate:show": O[1] || (O[1] = X=>r(p).prompt = X),
                "confirm-button-text": r(e)("confirm"),
                onConfirm: r(c)
            }, {
                default: D(()=>[t("div", ir, i(r(e)("prompt")), 1), t("div", {
                    class: "promptContent",
                    innerHTML: I.value
                }, null, 8, er)]),
                _: 1
            }, 8, ["show", "confirm-button-text", "onConfirm"]), z(qc, {
                show: r(p).laundry,
                "onUpdate:show": O[2] || (O[2] = X=>r(p).laundry = X),
                onConfirm: w,
                "show-cancel-btn": !1,
                confirmText: "OK",
                title: r(e)("congratulations")
            }, {
                content: D(()=>[t("div", nr, [t("div", ar, i(r(e)("getSuper")), 1), t("div", or, i(r(e)("getRewards")), 1)])]),
                _: 1
            }, 8, ["show", "title"])])
        }
    }
});
const lr = K(sr, [["__scopeId", "data-v-9bebd08e"]])
  , rx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: lr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , cr = {
    moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
    redNum: /^([1-9]\d{0,2}|1000)$/,
    requiredNum: /^.{0,20}$/,
    passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
    passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
    outmoneypwd: /^\d{6}$/,
    name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
    tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
    yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
    httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
    password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
    account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
    email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
    email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    length1: /^.{6,30}$/,
    phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
    moneys21: /^\d{1,4}(\.\d{1,2})?$/,
    ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
    int: /^[1-9]\d*$/,
    verifyname: /[^a-zA-Z\s+$]/g,
    inputrule: /^[0-9,|]+$/
}
  , rr = {
    moneyup: "validateDesc1",
    redNum: "validateDesc2",
    requiredNum: "validateDesc3",
    passReg2: "pswRequirements",
    outmoneypwd: "validateDesc5",
    name: "validateDesc6",
    tuiName: "validateDesc7",
    endSpace: "validateDesc8",
    yaoma: "validateDesc9",
    httpCheck: "validateDesc10",
    password: "validateDesc11",
    account: "validateDesc13",
    email: "validateDesc14",
    length1: "validateDesc15",
    phone: "validateDesc16",
    moneys2: "validateDesc17",
    moneys21: "validateDesc18",
    ip: "validateDesc19",
    int: "validateDesc20",
    verifyname: "validateDesc21",
    inputtip: "validateDesc22"
}
  , Ia = Symbol();
var xa = (l,e)=>{
    const s = l.__vccOpts || l;
    for (const [u,g] of e)
        s[u] = g;
    return s
}
;
const ur = H({
    name: "FunTabItem",
    props: {
        title: String,
        name: [String, Number],
        badge: [String, Number]
    },
    setup(l) {
        const e = wo(Ia)
          , s = h()
          , u = Q(()=>(e == null ? void 0 : e.activeValue.value) === l.name ? {
            color: e == null ? void 0 : e.activeColor.value
        } : {})
          , g = ()=>{
            e == null || e.setActiveValue(l.name)
        }
          , b = {
            name: Jn(l, "name"),
            el: s
        };
        return Ct(()=>{
            var d;
            (d = e.addItem) == null || d.call(e, b)
        }
        ),
        nn(()=>{
            var d;
            (d = e.removeItem) == null || d.call(e, b)
        }
        ),
        {
            el: s,
            style: u,
            handleClick: g
        }
    }
})
  , dr = {
    class: "fun-tab-item__wrap"
}
  , pr = {
    class: "fun-tab-item__label"
}
  , gr = {
    key: 0,
    class: "fun-tab-item__badge"
};
function br(l, e, s, u, g, b) {
    return n(),
    a("div", {
        ref: "el",
        style: Ci(l.style),
        class: "fun-tab-item",
        onClick: e[0] || (e[0] = (...d)=>l.handleClick && l.handleClick(...d))
    }, [t("div", dr, [mi(l.$slots, "icon"), t("div", pr, [mi(l.$slots, "default", {}, ()=>[E(i(l.title), 1)])]), l.badge ? (n(),
    a("div", gr, i(l.badge), 1)) : B("v-if", !0)])], 4)
}
var mr = xa(ur, [["render", br], ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tab-item.vue"]]);
const Ue = window;
function _r() {
    let l = 0;
    const e = ["webkit", "moz"];
    for (let s = 0; s < e.length && !window.requestAnimationFrame; ++s)
        window.requestAnimationFrame = Ue[e[s] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = Ue[e[s] + "CancelAnimationFrame"] || Ue[e[s] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(s) {
        const u = Date.now()
          , g = u - l
          , b = Math.max(0, 16.7 - g)
          , d = window.setTimeout(function() {
            s(g)
        }, b);
        return l = u + b,
        d
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(s) {
        clearTimeout(s)
    }
    )
}
const hr = H({
    name: "FunTabs",
    props: {
        modelValue: {
            type: [String, Number],
            default: ""
        },
        lineWidth: {
            type: [Number, String],
            default: 30
        },
        lineHeight: {
            type: Number,
            default: 3
        },
        activeColor: {
            type: String,
            default: "#1677ff"
        },
        additionalX: {
            type: Number,
            default: 50
        },
        reBoundExponent: {
            type: Number,
            default: 10,
            validator(l) {
                return l > 0
            }
        },
        inertialDuration: {
            type: Number,
            default: 1e3,
            validator(l) {
                return l > 0
            }
        },
        reBoundingDuration: {
            type: Number,
            default: 360
        }
    },
    emits: ["update:modelValue", "change"],
    setup(l, {emit: e, expose: s}) {
        let u = null;
        const g = []
          , b = h()
          , d = h()
          , c = h(l.modelValue)
          , p = h(0)
          , o = h(0)
          , _ = h(0)
          , m = h(0)
          , T = h(0)
          , f = h(!1)
          , y = h(!1)
          , $ = h(0)
          , w = h(0)
          , k = h(0)
          , v = h(0)
          , L = h(0)
          , C = h(0)
          , I = h(16.7)
          , N = h(0)
          , x = h(0)
          , R = h(0)
          , O = h(.001)
          , P = h(.001)
          , F = Q(()=>{
            const A = y.value && !f.value ? l.reBoundingDuration : 0;
            return {
                transitionTimingFunction: y.value ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.1, 0.57, 0.1, 1)",
                transitionDuration: `${A}ms`,
                transform: `translate3d(${$.value}px, 0px, 0px)`
            }
        }
        )
          , X = Q(()=>({
            transition: "all 300ms",
            width: `${o.value}px`,
            height: `${l.lineHeight}px`,
            transform: `translate3d(${p.value}px, 0, 0)`,
            backgroundColor: l.activeColor
        }))
          , at = Q(()=>v.value <= w.value);
        At(()=>l.modelValue, A=>{
            c.value = A,
            dt()
        }
        );
        const dt = ()=>{
            u || (u = new Promise(A=>{
                ti(()=>{
                    Mt(),
                    A(),
                    u = null
                }
                )
            }
            ))
        }
          , lt = A=>{
            c.value = A,
            e("update:modelValue", A),
            e("change", A)
        }
          , st = A=>{
            g.push(A),
            dt()
        }
          , J = A=>{
            const nt = g.findIndex($t=>$t.name === A.name);
            nt !== -1 && (g.splice(nt, 1),
            dt())
        }
          , mt = {
            activeValue: c,
            activeColor: Jn(l, "activeColor"),
            addItem: st,
            removeItem: J,
            setActiveValue: lt
        };
        Co(Ia, mt);
        const Mt = ()=>{
            var A, nt;
            _.value = ((A = b.value) == null ? void 0 : A.offsetWidth) || 0,
            m.value = ((nt = d.value) == null ? void 0 : nt.offsetWidth) - _.value,
            wt(),
            yt()
        }
          , Et = ()=>(y.value = !1,
        $.value > 0 ? (y.value = !0,
        $.value = 0) : $.value < -m.value && (y.value = !0,
        $.value = -m.value),
        y.value)
          , gt = ()=>{
            at.value ? $.value <= 0 && $.value + m.value > 0 || $.value > 0 ? $.value += v.value - k.value : $.value + m.value <= 0 && ($.value += l.additionalX * (v.value - k.value) / (_.value + Math.abs($.value + m.value))) : $.value >= 0 ? $.value += l.additionalX * (v.value - k.value) / (_.value + $.value) : ($.value <= 0 && $.value + m.value >= 0 || $.value + m.value <= 0) && ($.value += v.value - k.value),
            k.value = v.value
        }
          , qt = ()=>{
            if (x.value = Date.now(),
            I.value = x.value - N.value,
            at.value ? $.value <= -m.value ? (P.value *= (l.reBoundExponent + Math.abs($.value + m.value)) / l.reBoundExponent,
            T.value = Math.min(T.value - P.value, 0)) : T.value = Math.min(T.value - P.value * I.value, 0) : $.value >= 0 ? (P.value *= (l.reBoundExponent + $.value) / l.reBoundExponent,
            T.value = Math.max(T.value - P.value, 0)) : T.value = Math.max(T.value - P.value * I.value, 0),
            $.value += T.value * I.value / 2,
            Math.abs(T.value) <= O.value) {
                Et();
                return
            }
            N.value = x.value,
            R.value = requestAnimationFrame(qt)
        }
          , Ft = ()=>{
            if (!g.length)
                return;
            const A = g.find(nt=>nt.name.value === c.value);
            return A && A.el.value
        }
          , yt = ()=>{
            const A = Ft();
            if (!A)
                return;
            const nt = A.offsetWidth
              , $t = A.offsetLeft
              , {lineWidth: Bt} = l;
            Bt === "auto" ? o.value = nt : Bt < 1 ? o.value = nt * Bt : o.value = Bt,
            p.value = $t + (nt - o.value) / 2
        }
          , wt = ()=>{
            const A = Ft();
            if (!A)
                return;
            const nt = A.offsetLeft
              , $t = (_.value - A.offsetWidth) / 2;
            let Bt = 0;
            const gi = Math.abs($.value);
            nt <= gi + $t ? Bt = $t - (nt + $.value) : Bt = -(nt - gi - $t);
            let ei = Bt + $.value;
            ei > 0 && (ei = 0),
            ei < -m.value && (ei = -m.value),
            y.value = !0,
            $.value = ei
        }
          , Nt = A=>{
            A.stopPropagation(),
            cancelAnimationFrame(R.value),
            k.value = A.touches[0].clientX
        }
          , Tt = A=>{
            m.value <= 0 || (A.preventDefault(),
            A.stopPropagation(),
            f.value = !0,
            L.value = C.value,
            w.value = k.value,
            v.value = A.touches[0].clientX,
            gt(),
            C.value = A.timeStamp)
        }
          , ct = A=>{
            if (f.value = !1,
            Et())
                cancelAnimationFrame(R.value);
            else {
                let nt = A.timeStamp - C.value
                  , $t = C.value - L.value;
                if ($t = $t > 0 ? $t : 8,
                nt > 100)
                    return;
                T.value = (k.value - w.value) / $t,
                P.value = T.value / l.inertialDuration,
                N.value = Date.now(),
                R.value = requestAnimationFrame(qt)
            }
        }
          , Y = ()=>{
            const A = b.value;
            A.addEventListener("touchstart", Nt, !1),
            A.addEventListener("touchmove", Tt, !1),
            A.addEventListener("touchend", ct, !1)
        }
          , et = ()=>{
            const A = b.value;
            A.removeEventListener("touchstart", Nt),
            A.removeEventListener("touchmove", Tt),
            A.removeEventListener("touchend", ct)
        }
        ;
        return Ct(()=>{
            _r(),
            Y(),
            dt()
        }
        ),
        Hi(()=>{
            et()
        }
        ),
        s({
            resize: Mt
        }),
        {
            viewAreaRef: b,
            listRef: d,
            activeValue: c,
            lineOffset: p,
            activeLineWidth: o,
            viewAreaWidth: _,
            offsetX: m,
            speed: T,
            touching: f,
            reBounding: y,
            translateX: $,
            startX: w,
            lastX: k,
            currentX: v,
            startMoveTime: L,
            endMoveTime: C,
            frameTime: I,
            frameStartTime: N,
            frameEndTime: x,
            inertiaFrame: R,
            zeroSpeed: O,
            acceleration: P,
            listStyle: F,
            activeBarStyle: X,
            isMoveLeft: at
        }
    }
})
  , vr = {
    ref: "viewAreaRef",
    class: "fun-tabs"
};
function kr(l, e, s, u, g, b) {
    return n(),
    a("div", vr, [t("div", {
        ref: "listRef",
        style: Ci(l.listStyle),
        class: "fun-tabs__tab-list"
    }, [mi(l.$slots, "default"), t("div", {
        style: Ci(l.activeBarStyle),
        class: "fun-tabs__active-line"
    }, null, 4)], 4)], 512)
}
var fr = xa(hr, [["render", kr], ["__file", "/Users/scoutyin/Documents/ScoutYin/fun-tab/src/tabs.vue"]]);
const ue = H({
    __name: "NavBar",
    props: {
        list: {},
        tabClassName: {},
        active: {
            default: 0
        },
        tabItemClassName: {}
    },
    emits: ["update:active", "onClickTab"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , g = h()
          , b = h(0)
          , d = (c,p)=>{
            s("update:active", b.value),
            s("onClickTab", {
                item: c,
                index: p
            })
        }
        ;
        return At(()=>u.active, c=>{
            b.value = c
        }
        ),
        e({
            funtabRef: g
        }),
        (c,p)=>(n(),
        it(r(fr), {
            modelValue: b.value,
            "onUpdate:modelValue": p[0] || (p[0] = o=>b.value = o),
            class: M(c.tabClassName),
            lineWidth: "0",
            ref_key: "funtabRef",
            ref: g
        }, {
            default: D(()=>[(n(!0),
            a(S, null, G(c.list, (o,_)=>(n(),
            it(r(mr), {
                name: _,
                key: _,
                class: M([c.tabItemClassName, {
                    activeClassName: c.active === _
                }]),
                onClick: m=>d(o, _)
            }, {
                default: D(()=>[mi(c.$slots, "default", {
                    item: o,
                    index: _
                })]),
                _: 2
            }, 1032, ["name", "class", "onClick"]))), 128))]),
            _: 3
        }, 8, ["modelValue", "class"]))
    }
})
  , yr = {
    class: "allGames__container"
}
  , Wn = 92 + 140
  , En = 16 + 28
  , $r = H({
    __name: "index",
    setup(l) {
        const e = h(0)
          , s = h(null)
          , u = h()
          , g = ft()
          , b = h([])
          , d = h({});
        function c() {
            g.go(-1)
        }
        const p = h(null)
          , {direction: o} = Zn(s, {
            onSwipeStart: ()=>{
                clearInterval(p.value),
                _()
            }
            ,
            onSwipe: _,
            onSwipeEnd: ()=>{
                _();
                let y = 0;
                p.value = setInterval(()=>{
                    y++,
                    y > 10 && clearInterval(p.value),
                    _()
                }
                , 100)
            }
        });
        function _() {
            const y = document.getElementById(`gamesList-${e.value}`);
            if (y) {
                const {top: $, bottom: w} = y.getBoundingClientRect();
                w - Wn - En < 0 ? o.value === "UP" && (e.value = e.value + 1) : $ - Wn - En > 0 && o.value === "DOWN" && (e.value = e.value - 1)
            }
        }
        const m = Q(()=>b.value[e.value]);
        Ct(()=>{
            T()
        }
        );
        const T = ()=>{
            b.value = JSON.parse(sessionStorage.getItem("gameMenu")),
            d.value = JSON.parse(sessionStorage.getItem("gameData"));
            const y = g.currentRoute.value.query.type || "";
            e.value = b.value.findIndex($=>$.key + "" === y) || 0
        }
        ;
        function f() {}
        return g.afterEach((y,$,w)=>{
            $.fullPath === "/" && T()
        }
        ),
        ki(()=>{}
        ),
        (y,$)=>{
            const w = j("NavBar")
              , k = j("van-sticky")
              , v = Ht("lazy");
            return n(),
            a("div", yr, [z(w, {
                title: y.$t("all"),
                "left-arrow": "",
                onClickLeft: c
            }, null, 8, ["title"]), z(k, {
                class: "alGames__container-sticky"
            }, {
                default: D(()=>[z(ue, {
                    list: b.value,
                    active: e.value,
                    "onUpdate:active": $[0] || ($[0] = L=>e.value = L),
                    tabClassName: "tabs",
                    onOnClickTab: f,
                    activeClassName: "tab_active",
                    ref_key: "tabRefs",
                    ref: u,
                    tabItemClassName: "funtab_item"
                }, {
                    default: D(({item: L, index: C})=>[L.isShow ? (n(),
                    a("div", {
                        key: 0,
                        class: M(["tab_item", {
                            tab_active: C === e.value
                        }])
                    }, [pt(t("img", null, null, 512), [[v, L.img]]), t("span", null, i(L.title), 1)], 2)) : B("", !0)]),
                    _: 1
                }, 8, ["list", "active"])]),
                _: 1
            }), t("div", {
                class: "allGames__container-list",
                ref_key: "allGamesContainer",
                ref: s
            }, [b.value.length > 0 ? (n(),
            it(za, {
                key: 0,
                gameType: m.value.key,
                title: m.value.title,
                gameData: d.value[m.value.key]
            }, null, 8, ["gameType", "title", "gameData"])) : B("", !0)], 512)])
        }
    }
});
const Tr = K($r, [["__scopeId", "data-v-7613dfce"]])
  , ux = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , wr = {
    class: "lotteryGamesList__container"
}
  , Cr = {
    alt: ""
}
  , Nr = {
    class: "lotteryGamesList__container-item__time"
}
  , Lr = H({
    __name: "index",
    props: {
        gamesList: {
            type: Object,
            default: ()=>{}
        }
    },
    setup(l) {
        const e = ft();
        function s() {
            e.push({
                name: "AllLotteryGames-VietnamLottery"
            })
        }
        return (u,g)=>{
            const b = Ht("lazy");
            return n(),
            a("div", wr, [t("div", {
                class: "lotteryGamesList__container-item",
                onClick: s
            }, [pt(t("img", Cr, null, 512), [[b, r(tt)("home/AllLotteryGames", "cover")]]), t("span", Nr, i(l.gamesList.title), 1)])])
        }
    }
});
const zr = K(Lr, [["__scopeId", "data-v-01da4a9c"]])
  , Ir = {
    class: "lotteryGames__container"
}
  , Ke = 46 + 90 + 35 + 16
  , Vn = 16 + 28
  , xr = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft()
          , u = h(0)
          , g = h(0)
          , b = h(null)
          , d = [{
            title: e("all"),
            value: "all"
        }, {
            title: "Win Go",
            value: "winGo"
        }, {
            title: e("Lotre4d"),
            value: "4DLottery"
        }, {
            title: "Lottery",
            value: "lottery"
        }, {
            title: "Xổ số",
            value: "lotteryVi"
        }, {
            title: "Xổ số",
            value: "lotteryVi"
        }]
          , c = [{
            title: e("all"),
            value: "all"
        }, {
            title: e("minites1"),
            value: "60"
        }, {
            title: e("minites3"),
            value: "180"
        }, {
            title: e("minites5"),
            value: "300"
        }, {
            title: e("minites10"),
            value: "600"
        }, {
            title: e("minitesLong"),
            value: "long"
        }];
        function p() {
            s.go(-1)
        }
        function o(y) {
            return y === u.value ? u.value : -1
        }
        const {direction: _} = Zn(b, {
            onSwipeStart: ()=>{
                m()
            }
            ,
            onSwipe: m,
            onSwipeEnd: ()=>{
                m()
            }
        });
        function m() {
            const y = document.getElementById(`gamesList-${u.value}`);
            if (y) {
                const {top: $, bottom: w} = y.getBoundingClientRect();
                w - Ke - Vn < 0 ? _.value === "UP" && (u.value = u.value + 1) : $ - Ke - Vn > 0 && _.value === "DOWN" && (u.value = u.value - 1)
            }
        }
        function T() {
            f()
        }
        function f() {
            const y = document.getElementById(`gamesList-${u.value}`);
            y && b.value.scrollTo({
                top: y.offsetTop - Ke,
                behavior: "smooth"
            })
        }
        return (y,$)=>{
            const w = j("NavBar")
              , k = j("van-tab")
              , v = j("van-tabs");
            return n(),
            a("div", Ir, [z(w, {
                "left-arrow": "",
                title: y.$t("lottery"),
                onClickLeft: p
            }, null, 8, ["title"]), z(v, {
                class: "lotteryGames__container-tabBar mgt10",
                active: u.value,
                "onUpdate:active": $[0] || ($[0] = L=>u.value = L),
                onClickTab: T,
                type: "card",
                color: "transparent",
                background: "transparent"
            }, {
                default: D(()=>[(n(),
                a(S, null, G(d, (L,C)=>z(k, {
                    name: C,
                    key: C,
                    title: L.title
                }, null, 8, ["name", "title"])), 64))]),
                _: 1
            }, 8, ["active"]), z(v, {
                class: "lotteryGames__container-timeTab",
                active: g.value,
                "onUpdate:active": $[1] || ($[1] = L=>g.value = L),
                color: "#ff7172",
                background: "#fff"
            }, {
                default: D(()=>[(n(),
                a(S, null, G(c, (L,C)=>z(k, {
                    name: C,
                    key: C,
                    title: L.title
                }, null, 8, ["name", "title"])), 64))]),
                _: 1
            }, 8, ["active"]), t("div", {
                class: "lotteryGames__container-list",
                ref_key: "allGamesContainer",
                ref: b
            }, [(n(),
            a(S, null, G(c, (L,C)=>z(zr, {
                "games-list": L,
                active: o(C),
                key: C,
                id: `gamesList-${C}`
            }, null, 8, ["games-list", "active", "id"])), 64))], 512)])
        }
    }
});
const Rr = K(xr, [["__scopeId", "data-v-ac2332a7"]])
  , dx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Rr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Sr = {
    class: "onlineGames__container"
}
  , Mr = ["placeholder"]
  , Br = ["src"]
  , Gr = {
    class: "onlineGames__container-list"
}
  , Pr = ["onClick"]
  , Dr = {
    key: 1
}
  , Ar = {
    class: "onlineGames__container-list miniGames"
}
  , Or = ["onClick"]
  , qr = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = h()
          , u = h(0)
          , {start: g, end: b, flag: d} = na();
        At(u, C=>{
            const I = T.value[C];
            f.value = [],
            L(I.slotsTypeID)
        }
        );
        const c = h(!1);
        At(c, C=>{
            C ? setTimeout(()=>{
                _.value.focus()
            }
            , 0) : o.value = ""
        }
        );
        const p = C=>C.indexOf("_") === -1 ? C : C.split("_")[0].toUpperCase()
          , o = h("");
        No(o, C=>{
            if (m.value)
                if (m.value.key === "fish" || m.value.key === "flash")
                    T.value = T.value.filter(I=>I.gameNameEn.toLowerCase().includes(C)),
                    C.length === 0 && (T.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null);
                else {
                    const I = T.value[u.value];
                    L(I.slotsTypeID, C)
                }
        }
        , {
            debounce: 300
        });
        const _ = h(null)
          , m = h()
          , T = h([])
          , f = h([])
          , y = ft();
        function $(C) {
            return C ? C.split(/(?=[A-Z])/).join(" ") : ""
        }
        function w() {
            y.go(-1)
        }
        function k(C) {
            c.value = C
        }
        function v(C) {
            if (!pi().token) {
                y.push({
                    name: "login"
                });
                return
            }
            Ne({
                title: e("tips"),
                message: e("tipsPlayGame"),
                cancelButtonText: e("cancel"),
                showCancelButton: !0
            }).then(async()=>{
                g(()=>{
                    Ne({
                        title: "",
                        message: e("gameLoadTimeOut")
                    }).then(()=>{
                        y.push({
                            path: "/"
                        })
                    }
                    )
                }
                );
                const N = await ot(aa({
                    vendorCode: Number(C.vendorId),
                    gameCode: C.gameID,
                    phonetype: oa()
                }));
                if (N && !d.value)
                    sa() ? la("game", {
                        ...(N == null ? void 0 : N.data) || {},
                        gameName: C.gameNameEn
                    }) : Le(N == null ? void 0 : N.data, 1);
                else {
                    !d.value && b(!0);
                    return
                }
                !d.value && b()
            }
            )
        }
        async function L(C, I="") {
            const N = await ot(Uo({
                type: C,
                gameNameEn: I
            }));
            N && (f.value = N.data)
        }
        return Ct(()=>{
            m.value = sessionStorage.getItem("gameType") ? JSON.parse(sessionStorage.getItem("gameType")) : null,
            T.value = sessionStorage.getItem("slotGamesList") ? JSON.parse(sessionStorage.getItem("slotGamesList")) : null;
            const C = JSON.parse(sessionStorage.getItem("clickedItem"));
            C && (u.value = T.value.findIndex(N=>N.slotsTypeID === C.slotsTypeID)),
            s.value && s.value.scrollTo(u.value);
            const I = T.value[u.value];
            L(I.slotsTypeID)
        }
        ),
        (C,I)=>{
            var F, X;
            const N = j("van-icon")
              , x = j("NavBar")
              , R = j("van-tab")
              , O = j("van-tabs")
              , P = Ht("lazy");
            return n(),
            a("div", Sr, [z(x, {
                "left-arrow": "",
                onClickLeft: w
            }, {
                center: D(()=>{
                    var at;
                    return [t("span", {
                        class: M({
                            active: c.value
                        })
                    }, i((at = m.value) == null ? void 0 : at.title) + i(C.$t("game")), 3), pt(t("input", {
                        type: "text",
                        placeholder: C.$t("searchGame"),
                        class: M({
                            active: c.value
                        }),
                        "onUpdate:modelValue": I[0] || (I[0] = dt=>o.value = dt),
                        ref_key: "searchBarRef",
                        ref: _
                    }, null, 10, Mr), [[tn, o.value]])]
                }
                ),
                right: D(()=>[z(N, {
                    name: r(tt)("searchBarIcons", "searchIcon"),
                    onClick: I[1] || (I[1] = at=>k(!0)),
                    class: M({
                        active: c.value
                    })
                }, null, 8, ["name", "class"]), t("span", {
                    class: M({
                        active: c.value
                    }),
                    onClick: I[2] || (I[2] = at=>k(!1))
                }, i(C.$t("cancel")), 3)]),
                _: 1
            }), ((F = m.value) == null ? void 0 : F.key) !== "fish" && ((X = m.value) == null ? void 0 : X.key) !== "flash" ? (n(),
            it(O, {
                key: 0,
                class: "onlineGames__container-tabBar",
                active: u.value,
                "onUpdate:active": I[3] || (I[3] = at=>u.value = at),
                type: "card",
                color: "transparent",
                background: "transparent",
                ref_key: "tabsRef",
                ref: s
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(T.value, (at,dt)=>(n(),
                it(R, {
                    key: dt
                }, {
                    title: D(()=>[t("img", {
                        src: r(tt)("home/AllOnlineGames/svg", `${dt === u.value ? p(at.slotsName) + "Active" : p(at.slotsName)}`)
                    }, null, 8, Br), t("span", null, i(at.slotsName), 1)]),
                    _: 2
                }, 1024))), 128)), t("div", Gr, [(n(!0),
                a(S, null, G(f.value, (at,dt)=>(n(),
                a("div", {
                    class: "onlineGames__container-list__item",
                    key: dt,
                    onClick: lt=>v(at)
                }, [pt(t("img", null, null, 512), [[P, at.img]]), t("span", null, i($(at.gameNameEn)), 1)], 8, Pr))), 128))])]),
                _: 1
            }, 8, ["active"])) : (n(),
            a("div", Dr, [t("div", Ar, [(n(!0),
            a(S, null, G(T.value, (at,dt)=>(n(),
            a("div", {
                class: "onlineGames__container-list__item",
                key: dt,
                onClick: lt=>v(at)
            }, [E(i(at) + " ", 1), pt(t("img", null, null, 512), [[P, at.img]]), t("span", null, i(at.gameNameEn), 1)], 8, Or))), 128))])]))])
        }
    }
});
const Wr = K(qr, [["__scopeId", "data-v-28acef37"]])
  , px = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Er = {
    class: "sysMessage__container"
}
  , Vr = {
    class: "sysMessage__container-msgWrapper__item-title"
}
  , Fr = {
    class: "sysMessage__container-msgWrapper__item-time"
}
  , jr = {
    class: "sysMessage__container-msgWrapper__item-content"
}
  , Hr = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , {setLoading: s} = ze()
          , u = h()
          , g = pi()
          , b = ft()
          , d = h(!1)
          , c = h([])
          , p = he()
          , o = h({
            pageSize: 25
        })
          , _ = {
            readAllIcon: qi(()=>Wi(()=>import("./messageReadAll-b68cb55c.js"), ["assets/js/messageReadAll-b68cb55c.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"])),
            messageIconRed: qi(()=>Wi(()=>import("./messageIconRed-4bf78c20.js"), ["assets/js/messageIconRed-4bf78c20.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"])),
            messageIconIsRead: qi(()=>Wi(()=>import("./messageIconIsRead-27e60883.js"), ["assets/js/messageIconIsRead-27e60883.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"])),
            messageGarbage: qi(()=>Wi(()=>import("./messageGarbage-9a1205cd.js"), ["assets/js/messageGarbage-9a1205cd.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"]))
        };
        function m() {
            b.back()
        }
        async function T() {
            const $ = he();
            await Ko({
                state: 1
            }).then(w=>{
                w && $.setReadState(!0)
            }
            ).catch(w=>{}
            )
        }
        function f($) {
            ta({
                title: e("warning"),
                message: e("warningTxt1")
            }).then(async()=>{
                if (await ot(en({
                    messageID: $.messageID,
                    state: 2
                }))) {
                    let k = c.value;
                    c.value = k.filter(v=>v.messageID !== $.messageID)
                }
            }
            )
        }
        const y = g.getUserInfo;
        return Ct(async()=>{
            s(!0),
            await T(),
            s(!1),
            u.value.resetRefresh(),
            y.unRead = 0,
            g.setUserInfo({
                ...y
            }),
            p.setReadState(!0)
        }
        ),
        ($,w)=>{
            const k = j("NavBar");
            return n(),
            a("div", Er, [z(k, {
                title: r(e)("notifications"),
                "left-arrow": "",
                onClickLeft: m
            }, null, 8, ["title"]), z(ra, {
                ref_key: "msgWrapperRef",
                ref: u,
                list: c.value,
                "onUpdate:list": w[0] || (w[0] = v=>c.value = v),
                "page-query": o.value,
                "onUpdate:pageQuery": w[1] || (w[1] = v=>o.value = v),
                api: r(Qo),
                distance: 100,
                isAutoLoad: d.value
            }, {
                content: D(()=>[(n(!0),
                a(S, null, G(c.value, v=>(n(),
                a("div", {
                    class: M(["sysMessage__container-msgWrapper__item", {
                        opacity: v.state !== 0
                    }]),
                    key: v.messageID
                }, [t("div", Vr, [(n(),
                it(vi(v.state === 0 ? _.messageIconRed : _.messageIconIsRead))), t("span", null, i(r(Xo)(v.title, 20)), 1), (n(),
                it(vi(_.messageGarbage), {
                    onClick: L=>{
                        L.stopPropagation(),
                        f(v)
                    }
                }, null, 8, ["onClick"]))]), t("div", Fr, i(v.addTime), 1), t("div", jr, i(v.messages), 1)], 2))), 128))]),
                _: 1
            }, 8, ["list", "page-query", "api", "isAutoLoad"])])
        }
    }
});
const Ur = K(Hr, [["__scopeId", "data-v-332fcc4a"]])
  , gx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ur
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Kr = [{
    typeID: 13,
    typeName: "Trx Win Go<br />1Min",
    tabName: "Trx 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}, {
    typeID: 14,
    typeName: "Trx Win Go<br />3Min",
    tabName: "Trx 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}, {
    typeID: 15,
    typeName: "Trx Win Go<br />5Min",
    tabName: "Trx 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}, {
    typeID: 16,
    typeName: "Trx Win Go<br />10Min",
    tabName: "Trx 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm là gì?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Bất kỳ ai biết những điều cơ bản về Bitcoin sẽ được tiếp xúc với một khái niệm, một giá trị băm. Tiêu đề khối của Bitcoin có một hàm băm của khối trước đó dùng để chỉ đến khối trước đó.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Hash là phiên âm của Hash trong tiếng Anh, chúng ta cũng có thể dịch nó thành băm, vì vậy còn được gọi là giá trị băm. Giá trị băm là một giá trị được tính bằng hàm băm (hoặc hàm băm / thuật toán băm). Để hiểu các giá trị băm, Cần phải hiểu các thuộc tính của hàm băm. Một hàm băm có thể biến đổi một cách tính toán đầu vào có độ dài tùy ý thành đầu ra có độ dài cố định.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Mỗi hàm băm có các thuộc tính sau: Nếu giá trị nhập vào giống nhau, Giá trị băm chuyển ra giống nhau,Nếu giá trị nhập vào khác,thì giá trị băm chuyển ra thường khác. Nhưng khả năng xảy ra xung đột băm là cực kỳ nhỏ. Nếu trong lúc nhập vào có sự thay đổi xung đột băm sẽ được giải trừ , sau đó xuất ra một giá trị băm hoàn toàn không liên quan. Vì hàm băm là không thể thay đổi và dễ dàng xác minh, Hầu như không thể đảo ngược giá trị nhập vào từ giá trị từ giá trị băm chuyển ra , Nếu có giá trị nhập vào, giá trị băm tương ứng có thể được xác minh ngay lập tức.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Do đó, giá trị băm của mỗi khối là duy nhất, ngẫu nhiên, không thể phá vỡ, không thể làm giả, giá trị băm của khối được tự động xác định và bản ghi không thể bị giả mạo.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Có bao nhiêu loại USDT?</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Omni-USDT dựa trên mạng Bitcoin, địa chỉ nạp tiền là địa chỉ BTC, gửi và rút tiền thông qua mạng BTC;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">ERC20-USDT dựa trên giao thức Ethereum ERC20, địa chỉ nạp tiền là địa chỉ ETH, gửi và rút tiền thông qua mạng ETH;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON), địa chỉ gửi tiền là địa chỉ TRON, và việc gửi và rút tiền đi qua mạng TRON.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">TrxHash là một mã băm khối của TRC20-USDT dựa trên giao thức TRON TRC20 và mạng TRX (TRON). Số cuối cùng được sử dụng làm kết quả để xác định xem bạn có trúng thưởng hay không (nhấp vào Chiều cao khối để chuyển đến chuỗi công khai để truy vấn hàm băm Khối duy nhất-Block hash)</span><span style="font-family: 等线; color: rgb(255, 0, 0); letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 8pt;"><o:p></o:p></span></p><p class="MsoNormal" style="margin: 0pt 0pt 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Luật chơi như sau :</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">1.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">1 phút mở thưởng 1 lần, 55 giây đặt cươc, Không thể cược trong vòng 5 giây cuối cùng .</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">2 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Sau khi đóng , băm khối của khối được tạo mới được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">mở thưởng.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">3 .&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Tổng số lượt mở thưởng trong một ngày là 1440 lượt.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><br></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">4. Nếu bạn thực hiện một giao dịch cược là 100, sẽ có khoản khấu trừ phí là 2%, do đó khoản đặt cược thực tế của bạn sẽ là 98.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">5 . 3 phút , 5 phút , 10 phút luật chơi giống 1 phút, chỉ có thời gian mở thưởng không giống nhau.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; text-indent: 0pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">6.&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Chữ số cuối cùng của</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">giá trị băm (</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;được sử dụng làm kết quả&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Ví dụ:</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**b569</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 9.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Giá trị băm (</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Block hash</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">)&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">**d14c</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;&nbsp;<font face="等线">Kết quả mở thưởng là 4.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 21pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 6pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;</span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">. Ch</font><font face="微软雅黑">ọ</font><font face="等线">n màu xanh: N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">1,3,7,9 b</font><font face="微软雅黑">ạ</font><font face="等线">n s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c(98*2)=196; N</font><font face="微软雅黑">ế</font><font face="等线">u k</font><font face="微软雅黑">ế</font><font face="等线">t qu</font><font face="微软雅黑">ả&nbsp;</font><font face="等线">hi</font><font face="微软雅黑">ệ</font><font face="等线">n th</font><font face="微软雅黑">ị&nbsp;</font><font face="等线">5, b</font><font face="微软雅黑">ạ</font><font face="等线">n</font></span><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><font face="等线">s</font><font face="微软雅黑">ẽ&nbsp;</font><font face="等线">nh</font><font face="微软雅黑">ậ</font><font face="等线">n đư</font><font face="微软雅黑">ợ</font><font face="等线">c (98*1.5)=147.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu đỏ: Nếu kết quả hiện thị 2,4,6,8, bạn sẽ nhận được (98*2)=196; Nếu kết quả hiện thị 0, bạn sẽ nhận được (98*1.5)=147.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn màu tím: Nếu kết quả hiện thị 0 hoặc 5, thì bạn sẽ nhận được (98*4.5)=441.</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn số : Nếu kết quả mở giống như kết quả bạn đã chọn, bạn sẽ nhận được (98*9)=882</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 6pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn lớn&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Big</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 5,6,7,8,9 bạn sẽ nhận được (98*2)=196.</font></span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"><o:p></o:p></span></p><p class="p" style="margin: 0pt 0pt 0pt 10.5pt; padding: 0pt; -webkit-tap-highlight-color: transparent; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-indent: -21pt;"><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">. Chọn nhỏ&nbsp;</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">Small</span><span style="font-family: 等线; letter-spacing: 0pt; font-size: 10.5pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">&nbsp;<font face="等线">: Nếu kết quả hiện thị 0,1,2,3,4 bạn sẽ nhận được (98*2)=196.</font></span></p>'
}]
  , Xr = [{
    typeID: 5,
    typeName: "5D Lotre<br />1Min",
    tabName: "5D 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}, {
    typeID: 6,
    typeName: "5D Lotre<br />3Min",
    tabName: "5D 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}, {
    typeID: 7,
    typeName: "5D Lotre<br />5Min",
    tabName: "5D 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}, {
    typeID: 8,
    typeName: "5D Lotre<br />10Min",
    tabName: "5D 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">LUẬT CHƠI XỔ SỐ 5D</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">*Quy định cá cược xổ số</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">( 2 )&nbsp;</font><span style="font-family: &quot;Times New Roman&quot;;">Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">HƯỚNG DẪN GIẢI THƯỞNG</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Mỗi kỳ sẽ mở ngẫu nhiên 5 con số （00000-99999）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Ví dụ :</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Kỳ xổ hiện tại là 12345</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A=1</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">B=2</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">C=3</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">D=4</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">E=5</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng =A+B+C+D+E=15</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Cách chơi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Người chơi có thể chỉ định đặt cược A,B,C,D,E và tổng hợp của năm kết quả</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">A,B,C,D,E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Con số（0 1 2 3 4 5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0 1 2 3 4）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （5 6 7 8 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 5 7 9）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 4 6 8）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Tổng hợp =A+B+C+D+E có thể mua</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Nhỏ&nbsp; （0-22）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lớn&nbsp; （23-45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Lẻ&nbsp; &nbsp;（1 3 ···43 45）</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="Times New Roman">Chẵn （0 2 ···42 44）</font></p>'
}]
  , Qr = [{
    typeID: 9,
    typeName: "K3 Lotre<br />1Min",
    tabName: "K3 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}, {
    typeID: 10,
    typeName: "K3 Lotre<br />3Min",
    tabName: "K3 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font><span style="font-family: 宋体;">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</span></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="margin-bottom: 0px; -webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}, {
    typeID: 11,
    typeName: "K3 Lotre<br />5Min",
    tabName: "K3 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}, {
    typeID: 12,
    typeName: "K3 Lotre<br />10Min",
    tabName: "K3 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Xổ số Fast 3 mỗi kỳ xổ sẽ là 3 con số,con số sẽ được mở ngẫu nhiên từ 111 đến 666 không có số 0 và các con số xổ không theo thứ tự cụ thể Fast 3 đó là đoán tất cả hoặc một phần của 3 con số trúng thưởng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược tổng</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số tổng của 3 viên xúc xắc</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 toàn bộ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi đặt cược nhóm các bộ ba giống nhau như: （111、222、…、666）bao trọn bộ và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược bộ 3 đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Người chơi chọn một trong tất cả các bộ ba bất kỳ（111、…、666）và tiến hành đặt cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược hai số đôi</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số gồm hai số đôi được chỉ định và một số bất kỳ</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược số đôi +1 số đơn</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số được chỉ định gồm hai số đôi và một số khác</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược vào ba số hoàn toàn khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 2 số khác nhau</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Đặt cược 2 số khác nhau + 1 số khác để đặt chung trong 1 vé cược</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược 3 số liên tiếp</font></p><p class="MsoNormal" style="-webkit-tap-highlight-color: transparent;"><font face="宋体">Cược toàn bộ các số liên tiếp là [123, 234, 345, 456] tiến hành đặt cược<br></font></p>'
}]
  , Yr = [{
    typeID: 1,
    typeName: "Win Go<br />1Min",
    tabName: "WinGo 1Min",
    intervalM: 1,
    scope: "1000|10000|100000|1000000",
    sort: 4,
    gamePresentation: '<p class="MsoNormal"><span style="font-family: &quot;Times New Roman&quot;;">\uFEFF</span><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 1 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Một phút mở thưởng một lần , 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 1440 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal" style="margin-bottom: 0px;"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
}, {
    typeID: 2,
    typeName: "Win Go<br />3Min",
    tabName: "WinGo 3Min",
    intervalM: 3,
    scope: "1000|10000|100000|1000000",
    sort: 3,
    gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 3 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Một phút mở thưởng một lần ,2 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 480 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
}, {
    typeID: 3,
    typeName: "Win Go<br />5Min",
    tabName: "WinGo 5Min",
    intervalM: 5,
    scope: "1000|10000|100000|1000000",
    sort: 2,
    gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 5 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Năm phút mở thưởng một lần , 4 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 288 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
}, {
    typeID: 4,
    typeName: "Win Go<br />10Min",
    tabName: "WinGo 10Min",
    intervalM: 10,
    scope: "1000|10000|100000|1000000",
    sort: 1,
    gamePresentation: '<p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">LUẬT CHƠI XỔ SỐ WINGO 5 Phút</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">*Quy định cá cược xổ số</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 1 ) Không được phép cược 2 bên (cược đối lập) ví dụ: trong một kỳ xổ không được đặt cược Lớn/Nhỏ,Chẵn/Lẻ...</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 2 ) Không được phép cược 8 số trở lên trong cùng một kỳ xổ.</span></span></font></p><p class="MsoNormal"><font face="Times New Roman"><span style="font-size: 16px;"><span style="font-weight: 700;">( 3 ) Nếu bị phát hiện có hành vi đặt cược phi pháp hoặc đặt cược đối đầu, sẽ bị hủy bỏ lệnh rút tiền.</span></span></font></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">HƯỚNG DẪN GIẢI THƯỞNG</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Năm phút mở thưởng một lần , 4 phút 55 giây đặt cược, 5 giây còn lại chờ đợi mở kết quả tạm ngưng đặt cược. Giải thưởng sẽ được mở cả ngày. Tổng số lượt mở thưởng mỗi ngày là 288 lượt.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">Nếu bạn thực hiện một giao dịch mua là 100, sẽ có khoản khấu trừ là 2, do đó khoản đặt thực tế của bạn là 98.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">1. Chọn màu xanh lá cây: nếu kết quả hiển thị số "1,3,7,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">- Nếu kết quả hiển thị số "5", bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">2. Chọn màu đỏ: nếu kết quả hiển thị số "2,4,6,8" bạn sẽ nhận được (98 * 2)= 196; nếu kết quả hiển thị là "0" bạn sẽ nhận được (98 * 1.5)= 147.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">3. Chọn màu tím: nếu kết quả hiển thị số "0" hoặc “5”, bạn sẽ nhận được (98 * 4,5)= 441.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">4. Chọn số: nếu kết quả mở ra giống với kết quả bạn đã chọn, bạn sẽ nhận được (98 * 9)= 882.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">5. Chọn lớn: nếu kết quả hiển thị số "5,6,7,8,9" bạn sẽ nhận được (98 * 2)= 196.</span><br></p><p class="MsoNormal"><span style="font-weight: 700; font-size: 16px; font-family: &quot;Times New Roman&quot;;">6. Chọn nhỏ: nếu kết quả hiển thị số "0,1,2,3,4" bạn sẽ nhận được (98 * 2)= 196.</span></p>'
}]
  , Jr = l=>Ni(Li.GetMyBingo18HistoryBetting, l)
  , Zr = ()=>Ni(Li.GetBinguoGameConfig)
  , tu = ()=>Ni(Li.GetBingo18OddsList)
  , iu = ()=>Ni(Li.GetGameBingo18Issue)
  , eu = ()=>Ni(Li.GetBingo18LastGameResult)
  , nu = l=>Ni(Li.GetBingo18BetAmount, l)
  , au = l=>Ni(Li.Bingo18Betting, l)
  , Ra = ()=>Ni(Li.GetBingo18Last50Result)
  , ou = ()=>Ni(Li.GetTrendstatistics)
  , su = ()=>Ni(Li.GetLotteryRankList)
  , lu = ()=>Ni(Li.GetLotteryResult7Day)
  , cu = l=>Ni(Li.GetUserRankList, {
    uid: l
})
  , li = Qt({
    currentTabIndex: 0,
    resultSumTrend: [],
    smallAndBigTrend: void 0,
    threeSameTrend: [],
    twoSameTrend: [],
    isTrend: !1,
    trendList: [],
    last50List: [],
    userRank: 0,
    last7Day: []
})
  , {t: re} = ve.global
  , we = h([{
    title: re("time"),
    key: "issueEndTime",
    isLockColumn: !0,
    isSlot: !0,
    width: "50px",
    cusTdClass: "column_time"
}])
  , Ji = ()=>{
    const l = {
        1: {
            player: re("xosoTxt60"),
            Big: {
                class: "big"
            },
            Small: {
                class: "small"
            },
            Drawn: {
                class: "sum"
            }
        },
        2: {
            player: re("same"),
            class: "small"
        },
        3: {
            player: re("sameNum")
        },
        4: {
            player: re("numbersMatch")
        }
    }
      , e = Q(()=>{
        let T = []
          , f = [];
        for (let y = 0; y < li.last50List.length; y++)
            f.length < 5 || (T.push(f),
            f = []),
            f.push(li.last50List[y].resultSum),
            y === li.last50List.length - 1 && T.push(f);
        return T
    }
    )
      , s = Q(()=>{
        let T = li.last50List.map(y=>y.resultSum)
          , f = _(T).slice(0, 10).reverse();
        return f.forEach(y=>{
            if (y.length < 5) {
                let $ = 5 - y.length;
                for (let w = 0; w < $; w++)
                    y.push("")
            }
        }
        ),
        f
    }
    )
      , u = Q(()=>li.last50List.map(T=>{
        const f = T.result.split("")
          , y = {};
        for (let $ = 1; $ <= 6; $++)
            y["num" + $] = f.filter(w=>w === $.toString()).length;
        return {
            issueNo: T.issueNo,
            sum: T.resultSum,
            ...y
        }
    }
    ))
      , g = async()=>{
        const T = await ot(lu());
        if (T != null && T.data) {
            we.value = [{
                title: re("time"),
                key: "issueEndTime",
                isLockColumn: !0,
                isSlot: !0,
                width: "50px",
                cusTdClass: "column_time"
            }];
            let f = T.data.reverse();
            [...new Set(T.data.map(k=>k.startDate))].slice(0, 7).reverse().forEach((k,v)=>{
                we.value.push({
                    key: "time_index_" + v,
                    title: k,
                    isSlot: !0
                })
            }
            );
            let $ = b(f, "issueEndTime")
              , w = [];
            Object.entries($).forEach(([k,v])=>{
                let L = {};
                v.forEach((C,I)=>{
                    var x;
                    let N = (x = we.value.find(R=>R.title === C.startDate)) == null ? void 0 : x.key;
                    L[`${N}`] = C
                }
                ),
                w.push({
                    issueEndTime: k,
                    ...L
                })
            }
            ),
            li.last7Day = w.sort((k,v)=>{
                const L = k.issueEndTime.split(":")
                  , C = v.issueEndTime.split(":")
                  , I = parseInt(L[0])
                  , N = parseInt(L[1])
                  , x = parseInt(C[0])
                  , R = parseInt(C[1]);
                return I === x ? N - R : I - x
            }
            )
        }
    }
    ;
    function b(T, f) {
        const y = {};
        return T.forEach($=>{
            const w = $[f];
            y[w] || (y[w] = []),
            y[w].push($)
        }
        ),
        y
    }
    const d = async()=>{
        const T = await ot(su());
        T != null && T.data && (li.trendList = T.data);
        const y = pi().getUserInfo
          , $ = await ot(cu(y.userId));
        $ != null && $.data && ($.data < 100 && (li.isTrend = !0),
        li.userRank = $.data)
    }
      , c = async()=>{
        const T = await ot(Ra());
        T != null && T.data && (li.last50List = T.data)
    }
      , p = async()=>{
        const T = await ot(ou());
        T && (li.resultSumTrend = T.data.resultSumTrend,
        li.smallAndBigTrend = T.data.smallAndBigTrend,
        li.threeSameTrend = T.data.threeSameTrend,
        li.twoSameTrend = T.data.twoSameTrend)
    }
      , o = (T,f)=>{
        let y = ""
          , $ = "";
        return T === 1 ? (Number(f) ? y = m(Number(f)) : y = l[1][f].class,
        $ = l[1].player) : T === 2 ? (y = l[2].class,
        $ = l[2].player) : T === 3 ? (Number(f) < 5 ? y = "small" : Number(f) === 5 ? y = "sum" : y = "big",
        $ = l[3].player) : T === 4 && (f.includes("*") ? y = "big" : /[123]/.test(f) ? y = "small" : y = "big",
        $ = l[4].player),
        {
            className: y,
            playerName: $
        }
    }
    ;
    function _(T) {
        const f = []
          , y = [];
        let $ = "";
        const w = v=>v < 10 ? "small" : v > 11 ? "big" : "sum"
          , k = (v,L)=>{
            let C = 0;
            if (v !== L[L.length - 1])
                return 0;
            for (let I = L.length - 1; I >= 0; I--)
                if (v === L[I])
                    C += 1;
                else
                    return C;
            return C
        }
        ;
        for (let v = 0; v < T.length; v++) {
            const L = T[v]
              , C = w(L);
            if (f.length === 0 || C !== $) {
                f.push([L]),
                $ = C,
                y.push($);
                continue
            }
            if (f[f.length - 1].length < 5)
                f[f.length - 1].push(L);
            else {
                let I = k(C, y)
                  , N = f[f.length - I].length;
                N === 5 ? (f.splice(f.length - I, 0, [L]),
                y.push(C)) : (N > 5,
                f[f.length - I].unshift(L))
            }
            $ = C
        }
        return f
    }
    const m = T=>Number(T) < 10 ? "small" : Number(T) > 11 ? "big" : "sum";
    return {
        store: li,
        last50Result: e,
        last50Record: s,
        last50RecordResult: u,
        columnOptions: we,
        filterStyle: m,
        filterGameType: o,
        getTrendstatistics: p,
        getLotteryRankList: d,
        getLotteryResult7Day: g,
        getBingo18Last50Result: c
    }
}
  , ru = {
    class: "ar-searchbar__selector"
}
  , uu = {
    key: 0,
    class: "noSelect"
}
  , du = {
    key: 1,
    class: "ar-searchbar__selector-default"
}
  , pu = H({
    __name: "Calendar",
    emits: ["confirm"],
    setup(l, {expose: e, emit: s}) {
        const {minDate: u, maxDate: g} = ua()
          , b = h("")
          , d = h("")
          , c = h(!1)
          , p = m=>`${m.getFullYear()}-${m.getMonth() + 1}-${m.getDate()}`
          , o = async m=>{
            c.value = !1;
            const [T,f] = m;
            b.value = p(T),
            d.value = p(f),
            s("confirm")
        }
        ;
        function _() {
            c.value = !0
        }
        return e({
            startDateValue: b,
            endDateValue: d
        }),
        (m,T)=>{
            const f = j("van-icon")
              , y = j("van-calendar");
            return n(),
            a(S, null, [t("div", ru, [t("div", {
                onClick: _
            }, [b.value === "" || d.value === "" ? (n(),
            a("span", uu, i(m.$t("datePick")), 1)) : (n(),
            a("span", du, i(b.value) + "/" + i(d.value), 1)), z(f, {
                name: "arrow-down"
            })])]), z(y, {
                show: c.value,
                "onUpdate:show": T[0] || (T[0] = $=>c.value = $),
                type: "range",
                onConfirm: o,
                "min-date": r(u),
                "max-date": r(g),
                teleport: "body"
            }, null, 8, ["show", "min-date", "max-date"])], 64)
        }
    }
})
  , gu = l=>(Gt("data-v-eebcfced"),
l = l(),
Pt(),
l)
  , bu = {
    class: "x-4d-head"
}
  , mu = {
    class: "menu"
}
  , _u = ["onClick"]
  , hu = {
    class: "lottery"
}
  , vu = {
    class: "item"
}
  , ku = gu(()=>t("div", {
    class: "box"
}, [t("div")], -1))
  , fu = [ku]
  , yu = {
    class: "mask"
}
  , $u = ["onClick"]
  , Tu = {
    class: "img"
}
  , wu = H({
    __name: "lotterylist",
    props: {
        modelValue: {
            type: Boolean,
            default: !1
        },
        timeIndex: {
            default: 0
        },
        timeVal: {
            default: oi().format("YYYY-MM-DD")
        },
        lotteryList: {},
        lotteryTab: {},
        timeWeek: {
            type: Function,
            default: ()=>""
        }
    },
    emits: ["onLotteryTab", "onTime", "update:modelValue"],
    setup(l, {emit: e}) {
        const u = Lo(l, "modelValue", e)
          , g = (_,m)=>{
            e("onLotteryTab", _, m)
        }
          , b = (_,m)=>{
            e("onTime", _, m)
        }
          , d = ()=>{
            u.value = !0
        }
          , c = ()=>{
            u.value = !1
        }
          , p = ()=>{
            u.value ? c() : d()
        }
          , o = h(null);
        return zo(o, _=>{
            u.value = !1
        }
        ),
        (_,m)=>{
            var y;
            const T = j("van-skeleton")
              , f = Ht("lazy");
            return n(),
            a("div", bu, [t("div", {
                class: "time",
                ref_key: "target",
                ref: o
            }, [t("div", {
                class: "box",
                onClick: p
            }, i(_.timeVal.replace(/-/g, "/")) + " " + i(_.timeWeek(_.timeVal)), 1), pt(t("div", mu, [t("h3", {
                onClick: c
            }, i(_.$t("Drawdate")), 1), t("ul", null, [(n(!0),
            a(S, null, G(_.lotteryTab, ($,w)=>(n(),
            a("li", {
                class: M([_.timeVal == $.date ? "active" : ""]),
                key: w,
                onClick: k=>b($, w)
            }, i($.date.replace(/-/g, "/")) + " " + i(_.timeWeek($.date)), 11, _u))), 128))])], 512), [[ci, r(u)]])], 512), t("div", hu, [z(T, {
                loading: !((y = _.lotteryTab[_.timeIndex]) != null && y.games),
                class: "flex"
            }, {
                template: D(()=>[(n(),
                a(S, null, G(10, ()=>t("div", vu, fu)), 64))]),
                default: D(()=>{
                    var $;
                    return [pt(t("div", yu, null, 512), [[ci, r(u)]]), (n(!0),
                    a(S, null, G(($ = _.lotteryTab[_.timeIndex]) == null ? void 0 : $.games, (w,k)=>(n(),
                    a("div", {
                        class: "item",
                        key: k,
                        onClick: v=>g(w, k)
                    }, [t("div", {
                        class: M(["box", [_.lotteryList.includes(w.type) ? "active" : ""]])
                    }, [pt(t("img", Tu, null, 512), [[f, w.typeImg]])], 2)], 8, $u))), 128))]
                }
                ),
                _: 1
            }, 8, ["loading"])])])
        }
    }
});
const Cu = K(wu, [["__scopeId", "data-v-eebcfced"]])
  , Nu = {
    class: "betType"
}
  , Lu = {
    class: "title"
}
  , zu = {
    class: "betType-list"
}
  , Iu = {
    class: "item action"
}
  , xu = ["onClick"]
  , Ru = H({
    __name: "bettype",
    props: {
        betType: {},
        betTypeList: {}
    },
    emits: ["onBetType"],
    setup(l, {emit: e}) {
        const s = u=>{
            e("onBetType", u)
        }
        ;
        return (u,g)=>{
            const b = j("van-skeleton");
            return n(),
            a("div", Nu, [t("h4", Lu, i(u.$t("xosoTxt78")), 1), t("ul", zu, [z(b, {
                loading: !u.betTypeList,
                class: "flex"
            }, {
                template: D(()=>[(n(),
                a(S, null, G(7, ()=>t("li", Iu)), 64))]),
                default: D(()=>[(n(!0),
                a(S, null, G(u.betTypeList, (d,c)=>(n(),
                a("li", {
                    class: M([u.betType.includes(d) ? "item action" : "item"]),
                    onClick: p=>s(d),
                    key: c
                }, i(u.$t("d4gameType" + d)), 11, xu))), 128))]),
                _: 1
            }, 8, ["loading"])])])
        }
    }
});
const Su = K(Ru, [["__scopeId", "data-v-df649127"]])
  , Mu = {
    class: "howPay"
}
  , Bu = {
    class: "title"
}
  , Gu = {
    class: "howPay-list"
}
  , Pu = {
    class: "item"
}
  , Du = {
    key: 0,
    class: "icon"
}
  , Au = H({
    __name: "betpay",
    props: {
        rollNum: {
            default: 1
        },
        banBetPay: {
            default: 0
        },
        betPayId: {
            default: 1
        },
        duplex: {
            type: Boolean,
            default: !1
        },
        betPayList: {}
    },
    emits: ["onBetpay"],
    setup(l, {emit: e}) {
        const s = l
          , u = d=>d.includes(5) ? d.slice(0, -1) : d
          , g = d=>{
            let c = !1
              , p = (d === 2 || d === 3) && s.banBetPay === 1 || s.rollNum > 0
              , o = s.duplex ? (d === 2 || d === 3 || d === 4) && s.banBetPay === 1 : d === 2 && (d === 2 || d === 3) && s.banBetPay === 1;
            return (p || o) && (c = !0),
            c
        }
          , b = d=>{
            e("onBetpay", d)
        }
        ;
        return (d,c)=>{
            const p = j("van-icon")
              , o = j("van-button")
              , _ = j("van-skeleton");
            return n(),
            a("div", Mu, [t("h4", Bu, i(d.$t("gamePlay")), 1), t("ul", Gu, [z(_, {
                loading: !u(d.betPayList),
                class: "flex"
            }, {
                template: D(()=>[(n(),
                a(S, null, G(4, ()=>t("li", Pu)), 64))]),
                default: D(()=>[(n(!0),
                a(S, null, G(u(d.betPayList), (m,T)=>(n(),
                it(o, {
                    plain: "",
                    disabled: g(m),
                    class: M([m == d.betPayId ? "item action" : "item"]),
                    onClick: f=>b(m),
                    key: T
                }, {
                    default: D(()=>[E(i(d.$t("d4gamePay" + m)) + " ", 1), m == d.betPayId ? (n(),
                    a("i", Du, [z(p, {
                        name: "success"
                    })])) : B("", !0)]),
                    _: 2
                }, 1032, ["disabled", "class", "onClick"]))), 128))]),
                _: 1
            }, 8, ["loading"])])])
        }
    }
});
const Ou = K(Au, [["__scopeId", "data-v-60a88d6a"]])
  , qu = {
    class: "betAmount"
}
  , Wu = {
    class: "title"
}
  , Eu = {
    class: "betAmount-list"
}
  , Vu = ["onClick"]
  , Fu = H({
    __name: "betamount",
    props: {
        count: {
            default: 10
        },
        list: {}
    },
    emits: ["onAmount"],
    setup(l, {emit: e}) {
        const s = u=>{
            e("onAmount", u)
        }
        ;
        return (u,g)=>(n(),
        a("div", qu, [t("h4", Wu, i(u.$t("betAmounts")), 1), t("ul", Eu, [(n(!0),
        a(S, null, G(u.list, (b,d)=>(n(),
        a("li", {
            class: M([b == u.count ? "item active" : "item"]),
            onClick: c=>s(b),
            key: d
        }, i(b), 11, Vu))), 128))])]))
    }
});
const ju = K(Fu, [["__scopeId", "data-v-6cea1b38"]])
  , Hu = l=>(Gt("data-v-018f548a"),
l = l(),
Pt(),
l)
  , Uu = {
    class: "select"
}
  , Ku = {
    class: "tab"
}
  , Xu = ["onClick"]
  , Qu = Hu(()=>t("span", null, "ALL", -1))
  , Yu = {
    class: "numList"
}
  , Ju = ["onClick"]
  , Zu = H({
    __name: "duplexbet",
    props: {
        tabList: {},
        allActive: {},
        numList: {}
    },
    emits: ["allAddnum", "addNumber"],
    setup(l, {emit: e}) {
        const s = g=>{
            e("allAddnum", g)
        }
          , u = (g,b)=>{
            e("addNumber", g, b)
        }
        ;
        return (g,b)=>(n(),
        a("div", Uu, [t("ul", Ku, [(n(!0),
        a(S, null, G(g.tabList, (d,c)=>(n(),
        a("li", {
            onClick: p=>s(d.type),
            class: M(g.allActive.includes(d.type) ? "active" : ""),
            key: c
        }, [E(i(d.name) + " ", 1), Qu], 10, Xu))), 128))]), t("div", Yu, [(n(!0),
        a(S, null, G(g.numList, (d,c)=>(n(),
        a("ul", {
            class: "",
            key: c
        }, [(n(),
        a(S, null, G(10, (p,o)=>t("li", {
            class: M([d != null && d.list.includes(o) ? "action" : ""]),
            key: p,
            onClick: _=>u(c, o)
        }, i(o), 11, Ju)), 64))]))), 128))])]))
    }
});
const td = K(Zu, [["__scopeId", "data-v-018f548a"]])
  , id = {
    class: "foot"
}
  , ed = {
    class: "item"
}
  , nd = {
    class: "item"
}
  , ad = H({
    __name: "navfoot",
    props: {
        betQuantity: {
            type: Number,
            default: 0
        },
        totalAmount: {
            type: Number,
            default: 0
        }
    },
    emits: ["onBet"],
    setup(l, {emit: e}) {
        const s = l
          , u = ()=>{
            s.totalAmount > 0 && e("onBet")
        }
        ;
        return (g,b)=>(n(),
        a("div", id, [t("div", ed, [t("p", null, i(g.$t("quantity")), 1), t("span", null, i(l.betQuantity), 1)]), t("div", nd, [t("p", null, i(g.$t("betAmounts")), 1), t("span", null, i(r(da)(l.totalAmount)), 1)]), t("div", {
            class: M(["item bet", [l.totalAmount > 0 ? "active" : ""]]),
            onClick: u
        }, i(g.$t("betting")), 3)]))
    }
});
const od = K(ad, [["__scopeId", "data-v-72be302f"]])
  , sd = {
    class: "x-bet"
}
  , ld = {
    class: "x-bet-sub"
}
  , cd = {
    class: "x-bet-lottery"
}
  , rd = {
    class: "x-bet-title"
}
  , ud = {
    class: "box"
}
  , dd = {
    class: "img"
}
  , pd = {
    class: "x-bet-type"
}
  , gd = {
    class: "x-bet-title"
}
  , bd = {
    class: "box"
}
  , md = {
    class: "x-bet-multiple"
}
  , _d = {
    class: "tit"
}
  , hd = {
    class: "box"
}
  , vd = {
    class: "multiple-list"
}
  , kd = {
    class: "box"
}
  , fd = ["onClick"]
  , yd = {
    class: "x-bet-list"
}
  , $d = {
    class: "item"
}
  , Td = {
    class: "lab"
}
  , wd = {
    class: "number"
}
  , Cd = {
    class: "item"
}
  , Nd = {
    class: "lab"
}
  , Ld = {
    class: "balance"
}
  , zd = {
    class: "item"
}
  , Id = {
    class: "lab"
}
  , xd = {
    class: "amount"
}
  , Rd = {
    key: 0,
    class: "x-bet-wallet"
}
  , Sd = {
    class: "tip"
}
  , Md = ["src"]
  , Bd = {
    class: "x-bet-agree"
}
  , Gd = {
    class: "agree"
}
  , Pd = {
    class: "x-bet-foot"
}
  , Dd = H({
    __name: "betpopup",
    props: {
        betShow: {
            type: Boolean,
            default: !1
        },
        betQuantity: {
            default: 0
        },
        timeIndex: {
            default: 0
        },
        totalAmount: {
            default: 0
        },
        balance: {
            default: 0
        },
        lotteryList: {},
        betType: {},
        countVal: {},
        multipleList: {},
        checked: {
            type: Boolean,
            default: !1
        },
        preSaleRule: {
            type: Boolean,
            default: !1
        },
        lotteryTab: {}
    },
    emits: ["getClear", "onStepper", "changeStep", "onMltiple", "checkboxChange", "onCancel", "update:checked", "update:betShow", "update:countVal", "update:preSaleRule", "onBet"],
    setup(l, {emit: e}) {
        const s = l
          , u = ft()
          , g = w=>{
            e("getClear", w)
        }
          , b = w=>{
            e("onStepper", w)
        }
          , d = w=>{
            e("changeStep", w)
        }
          , c = w=>{
            e("onMltiple", w)
        }
          , p = w=>{
            e("checkboxChange", w)
        }
          , o = ()=>{
            e("onCancel")
        }
          , _ = ()=>{
            e("onBet")
        }
          , m = w=>{
            const {lotteryTab: k, timeIndex: v} = s;
            let L = k[v].games.find(C=>C.type == w);
            return L == null ? void 0 : L.typeImg
        }
          , {checked: T, betShow: f, countVal: y, preSaleRule: $} = ia(s, e);
        return (w,k)=>{
            const v = j("van-icon")
              , L = j("van-field")
              , C = j("van-checkbox")
              , I = j("van-popup")
              , N = Ht("lazy");
            return n(),
            it(I, {
                show: r(f),
                "onUpdate:show": k[7] || (k[7] = x=>ii(f) ? f.value = x : null),
                position: "bottom",
                "close-on-click-overlay": !1,
                style: {
                    borderRadius: "15px 15px 0 0"
                }
            }, {
                default: D(()=>[t("div", sd, [t("div", ld, [E(i(w.$t("betting")) + " ", 1), t("div", {
                    class: "clear",
                    onClick: k[0] || (k[0] = x=>g(1))
                }, [z(v, {
                    class: "icon",
                    name: "delete-o"
                }), E(i(w.$t("Clear")), 1)])]), t("div", cd, [t("h5", rd, i(w.$t("ColorSpecies")), 1), t("ul", ud, [(n(!0),
                a(S, null, G(w.lotteryList, (x,R)=>(n(),
                a("li", {
                    class: "item",
                    key: R
                }, [pt(t("img", dd, null, 512), [[N, m(x)]])]))), 128))])]), t("div", pd, [t("h5", gd, i(w.$t("xosoTxt78")), 1), t("ul", bd, [(n(!0),
                a(S, null, G(w.betType, (x,R)=>(n(),
                a("li", {
                    class: "item",
                    key: R
                }, i(w.$t("d4gameType" + x)), 1))), 128))])]), mi(w.$slots, "default", {}, void 0, !0), t("div", md, [t("div", _d, i(w.$t("multiple")), 1), t("div", hd, [t("div", {
                    class: "li minus",
                    onClick: k[1] || (k[1] = x=>b(1))
                }, [z(v, {
                    name: "minus"
                })]), z(L, {
                    class: "digit",
                    modelValue: r(y),
                    "onUpdate:modelValue": k[2] || (k[2] = x=>ii(y) ? y.value = x : null),
                    type: "digit",
                    maxlength: 5,
                    onInput: d
                }, null, 8, ["modelValue"]), t("div", {
                    class: "li plus",
                    onClick: k[3] || (k[3] = x=>b(2))
                }, [z(v, {
                    name: "plus"
                })])])]), t("div", vd, [t("div", kd, [(n(!0),
                a(S, null, G(w.multipleList, (x,R)=>(n(),
                a("div", {
                    key: R,
                    class: M(r(y) == x ? "active item" : "item"),
                    onClick: O=>c(x)
                }, " X" + i(x), 11, fd))), 128))])]), t("div", yd, [t("div", $d, [t("div", Td, i(w.$t("quantity")), 1), t("div", wd, i(w.betQuantity) + i(w.$t("note")), 1)]), t("div", Cd, [t("div", Nd, i(w.$t("walletBalance")), 1), t("div", Ld, i(r(Rt)(w.balance)), 1)]), t("div", zd, [t("div", Id, i(w.$t("betAmounts")), 1), t("div", xd, i(r(da)(w.totalAmount)), 1)])]), w.totalAmount > w.balance ? (n(),
                a("div", Rd, [t("div", Sd, [t("img", {
                    src: r(tt)("home/AllLotteryGames/NewVietnam", "tip")
                }, null, 8, Md), E(i(w.$t("insufficientWallet")), 1)]), t("div", {
                    class: "txt",
                    onClick: k[4] || (k[4] = x=>r(u).push({
                        name: "Recharge"
                    }))
                }, i(w.$t("torecharge")) + " >>", 1)])) : B("", !0), t("div", Bd, [z(C, {
                    modelValue: r(T),
                    "onUpdate:modelValue": k[5] || (k[5] = x=>ii(T) ? T.value = x : null),
                    "checked-color": "#FF7172",
                    onChange: p
                }, {
                    default: D(()=>[t("div", Gd, i(w.$t("agree")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), t("span", {
                    class: "txt",
                    onClick: k[6] || (k[6] = x=>$.value = !0)
                }, i(w.$t("presaleRules")), 1)])]), t("div", Pd, [t("div", {
                    class: "cancel",
                    onClick: o
                }, i(w.$t("cancel")), 1), t("div", {
                    class: "bet",
                    onClick: _
                }, i(w.$t("betting")), 1)])]),
                _: 3
            }, 8, ["show"])
        }
    }
});
const Ad = K(Dd, [["__scopeId", "data-v-79a24f29"]])
  , Od = {
    class: "x-bet"
}
  , qd = {
    key: 0,
    class: "x-bet-box"
}
  , Wd = {
    class: "item"
}
  , Ed = {
    class: "pay"
}
  , Vd = {
    class: "txt"
}
  , Fd = {
    class: "item"
}
  , jd = {
    class: "num"
}
  , Hd = {
    class: "txt"
}
  , Ud = {
    key: 1,
    class: "x-bet-pay"
}
  , Kd = {
    class: "x-bet-title"
}
  , Xd = {
    class: "name"
}
  , Qd = {
    key: 2,
    class: "x-bet-dupleList"
}
  , Yd = {
    class: "digits"
}
  , Jd = {
    class: "sub"
}
  , Zd = {
    class: "list"
}
  , tp = {
    class: "item"
}
  , ip = H({
    __name: "betcontent",
    props: {
        tabId: {
            default: 0
        },
        betPay: {
            default: 0
        },
        num: {},
        dupleList: {},
        tabList: {}
    },
    setup(l) {
        return (e,s)=>(n(),
        a("div", Od, [e.tabId === 1 ? (n(),
        a("div", qd, [t("div", Wd, [t("span", Ed, i(e.$t("d4gamePay" + e.betPay)), 1), t("p", Vd, i(e.$t("gamePlay")), 1)]), t("div", Fd, [t("span", jd, i(e.num), 1), t("p", Hd, i(e.$t("bettingnumber")), 1)])])) : B("", !0), e.tabId === 2 ? (n(),
        a("div", Ud, [t("h5", Kd, i(e.$t("gamePlay")), 1), t("div", Xd, i(e.$t("d4gamePay" + e.betPay)), 1)])) : B("", !0), e.tabId === 2 ? (n(),
        a("div", Qd, [(n(!0),
        a(S, null, G(e.dupleList, (u,g)=>(n(),
        a("div", {
            class: "box",
            key: g
        }, [t("div", Yd, [t("div", Jd, i(e.tabList[g].name), 1), t("div", Zd, [(n(!0),
        a(S, null, G(u.list, (b,d)=>(n(),
        a("div", {
            class: "num",
            key: d
        }, [t("div", tp, i(b), 1)]))), 128))])])]))), 128))])) : B("", !0)]))
    }
});
const ep = K(ip, [["__scopeId", "data-v-57b6cde4"]])
  , Fn = h(!1)
  , Xe = h(!1)
  , jn = h(0)
  , Ce = h()
  , Hn = h();
function pe() {
    const l = Qt({
        timeVal: oi().format("YYYY-MM-DD"),
        timeIndex: 0,
        lotteryList: [],
        lotteryTab: [],
        tabId: 1,
        rollNum: 0,
        betQuantity: 0,
        betAmount: 0,
        totalAmount: 0,
        betType: [],
        betTypeList: [],
        betPay: 1,
        betPayList: [],
        dupleList: [{
            list: []
        }, {
            list: []
        }, {
            list: []
        }, {
            list: []
        }],
        allActive: [],
        banbetpay: 0,
        multipleList: [1, 5, 10, 20, 50, 100],
        betAmountList: [10, 50, 100, 500, 1e3, 5e3],
        duplex: !1,
        balance: 0,
        stopTime: null
    })
      , {t: e} = kt()
      , {setLoading: s} = ze()
      , u = h("")
      , g = h(1)
      , b = h(!0)
      , d = h(!1)
      , c = h(!1)
      , p = h([{}])
      , o = h()
      , _ = h()
      , m = [{
        name: e("xosoTxt90"),
        type: 0
    }, {
        name: e("xosoTxt89"),
        type: 1
    }, {
        name: e("xosoTxt88"),
        type: 2
    }, {
        name: e("xosoTxt87"),
        type: 3
    }]
      , T = Q(()=>l.timeVal)
      , f = Q(()=>l.timeIndex)
      , y = Q(()=>l.lotteryList)
      , $ = Q(()=>l.lotteryTab)
      , w = Q(()=>l.tabId)
      , k = Q(()=>l.rollNum)
      , v = Q(()=>l.betType)
      , L = Q(()=>l.betTypeList)
      , C = Q(()=>l.betPay)
      , I = Q(()=>l.betPayList)
      , N = Q(()=>l.betAmount)
      , x = Q(()=>l.totalAmount)
      , R = Q(()=>l.betQuantity)
      , O = Q(()=>l.banbetpay)
      , P = Q(()=>l.dupleList)
      , F = Q(()=>l.allActive)
      , X = Q(()=>l.multipleList)
      , at = Q(()=>l.betAmountList)
      , dt = Q(()=>l.duplex)
      , lt = Q(()=>l.balance)
      , st = V=>{
        const Z = [e("Sunday"), e("Monday"), e("Tuesday"), e("Wednesday"), e("Thursday"), e("Friday"), e("Saturday")]
          , ht = new Date(V);
        return Z[ht.getDay()]
    }
      , J = (V,Z)=>{
        l.timeIndex = Z,
        l.timeVal = V.date,
        Et(1),
        Fn.value = !1
    }
      , mt = (V,Z)=>{
        if (l.lotteryList.includes(V.type)) {
            let ht = l.lotteryList.indexOf(V.type);
            l.lotteryList.splice(ht, 1)
        } else
            l.lotteryList.push(V.type);
        et(l.betType.length, l.betAmount, l.betPay)
    }
      , Mt = V=>{
        l.tabId = V,
        Et(0)
    }
      , Et = V=>{
        u.value = "",
        l.betPay = 1,
        l.rollNum = 0,
        l.betType.length = 0,
        l.betAmount = l.betAmountList[0],
        l.dupleList.forEach(Z=>Z.list = []),
        l.allActive.length = 0,
        g.value = 1,
        gt(),
        c.value = !1,
        V == 1 && (l.lotteryList.length = 0)
    }
      , gt = ()=>{
        l.totalAmount = 0,
        l.betQuantity = 0,
        l.banbetpay = 0
    }
      , qt = ()=>{
        if (l.rollNum >= 2 || u.value.length >= 4)
            return Ot(e("EnterTip"));
        l.betPay = 5,
        u.value += "R",
        l.rollNum = Nt(u.value.split("")),
        et(l.betType.length, l.betAmount, l.betPay)
    }
      , Ft = V=>{
        u.value = V.target.value,
        u.value == "" && (l.betPay = 1),
        u.value.length !== 4 ? gt() : wt(V.target.value) ? (et(l.betType.length, l.betAmount, l.betPay),
        l.banbetpay = $t(u.value),
        l.banbetpay === 1 && (l.betPay = 1)) : (u.value = "",
        l.betPay = 1,
        Ot(e("FormatTip1"))),
        l.rollNum = Nt(u.value.split(""))
    }
      , yt = V=>{
        if (V.target.value == "" || V.target.value.length !== 4)
            return;
        wt(V.target.value) || (u.value = "",
        l.betPay = 1,
        Ot(e("FormatTip1")))
    }
      , wt = V=>/^[0-9]{4}|\R[0-9]{3}|[0-9]{1}\R[0-9]{2}|[0-9]{2}\R[0-9]{1}|\R[0-9]{2}\R|[0-9]{2}\R{2}|\R{2}[0-9]{2}|[0-9]{3}\R|[0-9]\R{2}[0-9]|[0-9]\R[0-9]\R|\R[0-9]\R[0-9]$/.test(V)
      , Nt = V=>{
        let Z = V.indexOf("R")
          , ht = 0;
        for (; Z !== -1; )
            ht++,
            Z = V.indexOf("R", Z + 1);
        return ht
    }
      , Tt = V=>{
        const {betType: Z, betAmount: ht, betPay: Lt} = l;
        if (Z.includes(V)) {
            let Dt = Z.indexOf(V);
            Z.splice(Dt, 1)
        } else
            Z.push(V);
        et(Z.length, ht, Lt)
    }
      , ct = V=>{
        l.betPay = V,
        et(l.betType.length, l.betAmount, V)
    }
      , Y = V=>{
        l.betAmount = V,
        et(l.betType.length, V, l.betPay)
    }
      , et = (V,Z,ht)=>{
        let {tabId: Lt, dupleList: Dt, lotteryList: St} = l;
        if (Lt === 1) {
            if (u.value.length !== 4)
                return !1;
            A(V, Z, u.value, ht)
        } else if (zi(Dt))
            l.betQuantity = _t(Dt) * St.length * l.betType.length,
            l.totalAmount = l.betQuantity * Z * St.length * g.value;
        else {
            const Jt = Dt.map(Wt=>Wt.list[0]).join("");
            if (Jt.length !== 4)
                return;
            l.banbetpay = $t(Jt),
            A(V, Z, Jt, ht)
        }
    }
      , A = (V,Z,ht,Lt)=>{
        let {rollNum: Dt, lotteryList: St} = l
          , Jt = V * Z * St.length * g.value
          , Wt = V * St.length
          , Kt = 0
          , si = 0;
        if (Lt === 1 || Lt === 2)
            Kt = Jt,
            si = Wt;
        else if (Lt === 3) {
            const Ai = $t(ht);
            Kt = Jt * Ai,
            si = Wt * Ai
        } else if (Lt === 4) {
            const Ai = nt(ht);
            Kt = Jt * (Ai ? 1 : 2),
            si = Wt * (Ai ? 1 : 2)
        } else
            Lt === 5 && (Kt = Jt * (Dt > 0 ? Dt == 1 ? 10 : 10 * 10 : 0),
            si = Wt * (Dt > 0 ? Dt == 1 ? 10 : 10 * 10 : 0));
        l.totalAmount = Kt,
        l.betQuantity = si
    }
      , nt = V=>V === V.split("").reverse().join("");
    function $t(V) {
        function Z(Wt) {
            return Wt <= 1 ? 1 : Wt * Z(Wt - 1)
        }
        let ht = V.split("").map(Number)
          , Lt = [...new Set(ht)]
          , Dt = Z(ht.length)
          , St = 1;
        for (const Wt of Lt) {
            const Kt = ht.filter(si=>si === Wt).length;
            St *= Z(Kt)
        }
        return Dt / St
    }
    const Bt = V=>{
        const {dupleList: Z, allActive: ht, betType: Lt, betAmount: Dt} = l;
        if (Z[V].list = [],
        ht.includes(V)) {
            let St = ht.indexOf(V);
            ht.splice(St, 1)
        } else {
            ht.push(V);
            for (let St = 0; St < 10; St++)
                Z[V].list.push(St)
        }
        ei(),
        et(Lt.length, Dt)
    }
      , gi = (V,Z)=>{
        const {dupleList: ht, allActive: Lt, betType: Dt, betAmount: St, betPay: Jt} = l
          , Wt = ht[V].list;
        if (Wt.includes(Z)) {
            let Kt = Wt.indexOf(Z);
            Wt.splice(Kt, 1)
        } else
            Wt.push(Z);
        if (Wt.length === 10)
            Lt.push(V);
        else if (Lt.includes(V)) {
            let Kt = Lt.indexOf(V);
            Lt.splice(Kt, 1)
        }
        if (ei(),
        _t(ht) > 0) {
            if (et(Dt.length, St, Jt),
            _t(ht) === 1) {
                const Kt = ht.map(si=>si.list[0]).join("");
                l.banbetpay = $t(Kt)
            }
            l.banbetpay === 1 && (l.betPay = 1)
        } else
            zi(ht) ? l.banbetpay = zi(ht) ? 1 : 0 : gt()
    }
      , ei = ()=>{
        const {dupleList: V} = l;
        l.duplex = zi(V),
        l.banbetpay = zi(V) ? 1 : 0,
        zi(V) && (l.betPay = 1)
    }
    ;
    function zi(V) {
        for (let Z = 0; Z < V.length; Z++) {
            const ht = V[Z].list;
            if (Array.isArray(ht) && ht.length > 1)
                return !0
        }
        return !1
    }
    function _t(V) {
        let Z = 1;
        return V.forEach((ht,Lt)=>{
            Z *= ht.list.length
        }
        ),
        Z
    }
    const Pi = ()=>{
        c.value = !0
    }
      , Ri = V=>{
        const {betType: Z, betAmount: ht, betPay: Lt} = l;
        switch (V) {
        case 1:
            g.value > 1 && g.value--;
            break;
        case 2:
            g.value++;
            break
        }
        et(Z.length, ht, Lt)
    }
      , fi = V=>{
        const {betType: Z, betAmount: ht, betPay: Lt} = l;
        g.value = V.target.value,
        et(Z.length, ht, Lt)
    }
      , zt = V=>{
        const {betType: Z, betAmount: ht, betPay: Lt} = l;
        g.value = V,
        et(Z.length, ht, Lt)
    }
      , Zi = V=>{
        b.value = V
    }
      , yi = ()=>{
        const {lotteryList: V, lotteryTab: Z, timeIndex: ht, tabId: Lt, betPay: Dt, betType: St, betQuantity: Jt, betAmount: Wt, dupleList: Kt, totalAmount: si, balance: Ai} = l;
        if (si > Ai)
            return Ot(e("wfDesc3"));
        if (Jt / V.length > 7e3)
            return Ot(e("d4BetTip", [7e3]));
        if (!b.value)
            return Ot(e("agreePresaleRules"));
        let bi = {};
        bi.type = V,
        bi.gameType = Dt;
        let Fi = "";
        Lt === 1 ? Fi = u.value : Fi = Kt.map(Oi=>Oi.list.sort((Mi,ne)=>Mi - ne).join(",")).join("|"),
        bi.betContent = Fi,
        bi.betType = St,
        bi.betMethod = Lt,
        bi.betNumber = Jt,
        bi.multiple = Number(g.value),
        bi.amount = Wt,
        bi.issueNumber = V.map(Oi=>{
            const Mi = Z[ht].games.find(ne=>ne.type === Oi);
            return Mi == null ? void 0 : Mi.issueNumber
        }
        ),
        c.value = !1,
        _e(bi),
        te()
    }
      , te = ()=>{
        setTimeout(()=>{
            Xe.value = !1
        }
        , 1500)
    }
      , $i = async()=>{
        const V = await ot(sn());
        V != null && V.data && (l.balance = (V == null ? void 0 : V.data.amount) || 0)
    }
      , qe = async()=>{
        const V = await ot(Yo());
        V != null && V.data && (l.multipleList = (V == null ? void 0 : V.data.betMultiplier) || [],
        l.betAmountList = (V == null ? void 0 : V.data.betAmount) || [],
        l.betTypeList = (V == null ? void 0 : V.data.betType) || [],
        l.betPayList = (V == null ? void 0 : V.data.gameType) || [],
        l.betAmount = (V == null ? void 0 : V.data.betAmount[0]) || 0)
    }
      , Yt = async()=>{
        s(!0);
        const V = await ot(Jo());
        V != null && V.data && (l.timeVal = V.data[l.timeIndex].date,
        l.lotteryTab = (V == null ? void 0 : V.data) || [],
        $e(V.serviceNowTime)),
        s(!1)
    }
      , $e = V=>{
        const {lotteryTab: Z, timeIndex: ht} = l
          , Dt = Z[ht].games.map(Kt=>Kt.stopTime).map(Kt=>new Date(Kt))
          , St = new Date(Math.min(...Dt))
          , Jt = oi(St).format("YYYY-MM-DD HH:mm:ss")
          , Wt = oi(Jt).diff(oi(V));
        Ut(Wt / 1e3)
    }
      , Ut = V=>{
        l.stopTime = setInterval(()=>{
            V > 0 ? V-- : (Et(1),
            clearInterval(l.stopTime),
            Yt())
        }
        , 1e3)
    }
      , _e = async V=>{
        const Z = await ot(Zo(V));
        (Z == null ? void 0 : Z.code) === 0 ? (Xe.value = !0,
        $i(),
        jn.value === 1 && Si({
            pageSize: 10,
            pageNo: 1,
            type: 0,
            date: oi(new Date).format("YYYY-MM-DD") + " 00:00:00"
        }),
        te()) : Yt(),
        Et(1)
    }
      , Di = async()=>{
        s(!0),
        p.value.length = 0;
        const V = await ot(ts());
        V != null && V.data && (V == null || V.data.forEach(Z=>{
            let ht = []
              , Lt = []
              , Dt = [];
            Z.items.forEach(St=>{
                St.playId.split("_").length == 1 ? Dt.push({
                    ...St,
                    code: St.playId
                }) : (St.playId.split("_")[0] == "1" && ht.push({
                    ...St,
                    code: St.playId.split("_")[1]
                }),
                St.playId.split("_")[0] == "2" && Lt.push({
                    ...St,
                    code: St.playId.split("_")[1]
                }))
            }
            ),
            p.value.push({
                playTypeId: Z.playTypeId,
                playTypeTitle: Z.playTypeTitle,
                lists: [{
                    type: 1,
                    list: ht
                }, {
                    type: 2,
                    list: Lt
                }, {
                    type: 3,
                    list: Dt
                }]
            })
        }
        )),
        s(!1)
    }
      , ie = async()=>{
        if (Ce.value)
            return;
        s(!0);
        const V = await ot(is());
        V != null && V.data && (Ce.value = V.data.map(Z=>(Z.typeName = e(`d4LType${Z.typeId}`),
        Z)),
        Ce.value.unshift({
            typeId: 0,
            typeName: e("all")
        })),
        s(!1)
    }
      , Si = async V=>{
        s(!0);
        const Z = await ot(es(V));
        Z != null && Z.data && (Hn.value = (Z == null ? void 0 : Z.data) || {}),
        s(!1)
    }
      , ee = async()=>{
        s(!0);
        const V = await ot(ns());
        V != null && V.data && (o.value = (V == null ? void 0 : V.data) || []),
        s(!1)
    }
      , Vi = async V=>{
        s(!0);
        const Z = await ot(as(V));
        Z && (_.value = (Z == null ? void 0 : Z.data) || {}),
        s(!1)
    }
      , Ki = async V=>{
        const Z = await ot(os(V));
        return new Promise(async(ht,Lt)=>{
            Z ? ht(Z) : Lt(Z)
        }
        )
    }
    ;
    return Hi(()=>{
        clearInterval(l.stopTime)
    }
    ),
    {
        tabList: m,
        getTimeWeek: st,
        onTime: J,
        lotterTab: mt,
        onTab: Mt,
        getClear: Et,
        onRoll: qt,
        getInput: Ft,
        getBlur: yt,
        onBetType: Tt,
        onBetpay: ct,
        onAmount: Y,
        onClickBet: Pi,
        addNumber: gi,
        allAddnum: Bt,
        onStepper: Ri,
        changeStep: fi,
        onMltiple: zt,
        checkboxChange: Zi,
        onBet: yi,
        getWinsUserAmount: $i,
        getGameConfig: qe,
        getGameIssue: Yt,
        getOddsList: Di,
        getTypeList: ie,
        getMy4DHistory: Si,
        get4DResult: ee,
        gameResultByType: Vi,
        gameCancelOrder: Ki,
        gameListIndex: jn,
        timeVal: T,
        lotteryTab: $,
        timeIndex: f,
        lotteryList: y,
        timeShow: Fn,
        betShow: c,
        tabId: w,
        rollNum: k,
        banbetpay: O,
        num: u,
        betType: v,
        betTypeList: L,
        betPay: C,
        betPayList: I,
        count: N,
        totalAmount: x,
        betQuantity: R,
        allActive: F,
        dupleList: P,
        countVal: g,
        checked: b,
        preSaleRule: d,
        multipleList: X,
        betAmountList: at,
        duplex: dt,
        balance: lt,
        promptShow: Xe,
        oddsList: p,
        typeList: Ce,
        myHistory: Hn,
        newGameResult: o,
        gameResultByTypeO: _
    }
}
const np = {
    key: 0,
    class: "resultBox"
}
  , ap = {
    class: "r123"
}
  , op = {
    class: "r"
}
  , sp = {
    class: "num"
}
  , lp = {
    class: "r"
}
  , cp = {
    class: "num"
}
  , rp = {
    class: "r"
}
  , up = {
    class: "num"
}
  , dp = {
    class: "title"
}
  , pp = {
    class: "rOther"
}
  , gp = {
    class: "title"
}
  , bp = {
    class: "rOther"
}
  , mp = H({
    __name: "showResult",
    props: {
        data: {}
    },
    setup(l) {
        return (e,s)=>{
            var u, g, b, d, c;
            return e.data ? (n(),
            a("div", np, [t("div", ap, [t("div", op, [t("div", sp, [(n(!0),
            a(S, null, G((u = e.data) == null ? void 0 : u.firstPrize.split(""), (p,o)=>(n(),
            a("span", {
                key: o
            }, i(p), 1))), 128))]), t("p", null, i(e.$t("d4gameType3")), 1)]), t("div", lp, [t("div", cp, [(n(!0),
            a(S, null, G((g = e.data) == null ? void 0 : g.secondPrize.split(""), (p,o)=>(n(),
            a("span", {
                key: o
            }, i(p), 1))), 128))]), t("p", null, i(e.$t("d4gameType4")), 1)]), t("div", rp, [t("div", up, [(n(!0),
            a(S, null, G((b = e.data) == null ? void 0 : b.thirdPrize.split(""), (p,o)=>(n(),
            a("span", {
                key: o
            }, i(p), 1))), 128))]), t("p", null, i(e.$t("d4gameType5")), 1)])]), t("div", dp, i(e.$t("d4gameType6")), 1), t("div", pp, [(n(!0),
            a(S, null, G((d = e.data) == null ? void 0 : d.specialPrize.split(","), (p,o)=>(n(),
            a("span", {
                key: o
            }, i(p), 1))), 128))]), t("div", gp, i(e.$t("d4gameType7")), 1), t("div", bp, [(n(!0),
            a(S, null, G((c = e.data) == null ? void 0 : c.consolationPrize.split(","), (p,o)=>(n(),
            a("span", {
                key: o
            }, i(p), 1))), 128))])])) : B("", !0)
        }
    }
});
const un = K(mp, [["__scopeId", "data-v-e89da5ba"]])
  , Gi = l=>(Gt("data-v-c26e419c"),
l = l(),
Pt(),
l)
  , _p = {
    key: 0,
    class: "gameBox"
}
  , hp = {
    class: "items"
}
  , vp = ["onClick"]
  , kp = {
    class: "left"
}
  , fp = {
    class: "time"
}
  , yp = {
    class: "right"
}
  , $p = {
    key: 0,
    class: "info"
}
  , Tp = {
    class: "order"
}
  , wp = ["onClick"]
  , Cp = {
    class: "copy"
}
  , Np = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , Lp = ["onClick"]
  , zp = {
    class: "copy"
}
  , Ip = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , xp = {
    class: "li"
}
  , Rp = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , Sp = {
    class: "li"
}
  , Mp = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , Bp = {
    class: "li"
}
  , Gp = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , Pp = {
    class: "li"
}
  , Dp = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , Ap = {
    class: "li"
}
  , Op = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , qp = {
    class: "li"
}
  , Wp = {
    class: "type"
}
  , Ep = Gi(()=>t("div", {
    class: "line1"
}, [t("p")], -1))
  , Vp = {
    class: "order"
}
  , Fp = {
    class: "li"
}
  , jp = {
    class: "numTit"
}
  , Hp = {
    class: "num type"
}
  , Up = {
    class: "li"
}
  , Kp = {
    class: "numTit"
}
  , Xp = {
    class: "num select"
}
  , Qp = {
    class: "n"
}
  , Yp = {
    class: "li"
}
  , Jp = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , Zp = {
    class: "li"
}
  , tg = {
    key: 1
}
  , ig = Gi(()=>t("div", {
    class: "line"
}, null, -1))
  , eg = {
    class: "li"
}
  , ng = {
    class: "reTitle"
}
  , ag = ["onClick"]
  , og = {
    class: "foot"
}
  , sg = {
    class: "page"
}
  , lg = H({
    __name: "showGame",
    props: {
        pageQuery: {}
    },
    emits: ["update:pageQuery"],
    setup(l, {emit: e}) {
        const s = l
          , {pageQuery: u} = ia(s, e)
          , {gameCancelOrder: g, myHistory: b, tabList: d, getMy4DHistory: c} = pe()
          , {t: p} = kt()
          , o = h(!1)
          , _ = h("")
          , m = h(-1);
        function T(v) {
            switch (v) {
            case 1:
                return p("bettingResultState1");
            case 2:
                return p("bettingResultState3");
            case 3:
                return p("hasWon");
            case 4:
                return p("xosoTxt74");
            case 5:
                return p("xosoTxt75");
            case 6:
                return p("xosoTxt76");
            default:
                return v
            }
        }
        const f = ()=>{
            u.value.pageNo--,
            m.value = -1,
            c(u.value)
        }
          , y = ()=>{
            u.value.pageNo++,
            m.value = -1,
            c(u.value)
        }
          , $ = v=>{
            m.value === v ? m.value = -1 : m.value = v
        }
        ;
        function w(v) {
            o.value = !0,
            _.value = v
        }
        function k() {
            o.value = !1,
            g({
                orderNumber: _.value
            }).then(v=>{
                v && (an(p("xosoTxt96")),
                c(u.value))
            }
            ).catch(v=>{}
            )
        }
        return (v,L)=>{
            var I, N, x;
            const C = j("van-icon");
            return n(),
            a(S, null, [((I = r(b)) == null ? void 0 : I.list.length) > 0 ? (n(),
            a("div", _p, [t("div", hp, [(n(!0),
            a(S, null, G(r(b).list, (R,O)=>(n(),
            a("div", {
                class: M(["itemBox", {
                    active: m.value === O
                }])
            }, [t("div", {
                class: "item",
                onClick: P=>$(O)
            }, [t("div", kp, [t("div", {
                class: M(["name", {
                    bold: m.value === O
                }])
            }, i(v.$t(`d4LType${R.type}`)), 3), t("div", fp, i(R.createTime), 1)]), t("div", yp, [t("div", {
                class: M(["state", `state${R.state}`])
            }, i(T(R.state)), 3), [2, 3].includes(R.state) ? (n(),
            a("div", {
                key: 0,
                class: M(["amount", R.state == 3 ? "green" : "red"])
            }, i(R.profitAmount), 3)) : B("", !0)])], 8, vp), m.value === O ? (n(),
            a("div", $p, [t("div", Tp, [t("div", {
                class: "li",
                onClick: P=>r(ji)(R.orderNumber)
            }, [t("span", null, i(v.$t("orderNo")), 1), t("h6", Cp, i(R.orderNumber), 1)], 8, wp), Np, t("div", {
                class: "li",
                onClick: P=>r(ji)(R.issueNumber)
            }, [t("span", null, i(v.$t("betNumber")), 1), t("h6", zp, i(R.issueNumber), 1)], 8, Lp), Ip, t("div", xp, [t("span", null, i(v.$t("ColorSpecies")), 1), t("h6", null, i(v.$t(`d4LType${R.type}`)), 1)]), Rp, t("div", Sp, [t("span", null, i(v.$t("gamePlay")), 1), t("h6", null, i(v.$t(`d4gamePay${R.gameType}`)), 1)]), Mp, t("div", Bp, [t("span", null, i(v.$t("betAmounts")), 1), t("h6", null, i(r(Rt)(R.amount)), 1)]), Gp, t("div", Pp, [t("span", null, i(v.$t("xosoTxt79")), 1), t("h6", null, i(R.betNumber) + " " + i(v.$t("note")), 1)]), Dp, t("div", Ap, [t("span", null, i(v.$t("multiple")), 1), t("h6", null, i(R.multiple), 1)]), Op, t("div", qp, [t("span", null, i(v.$t("xosoTxt78")), 1)]), t("div", Wp, [(n(!0),
            a(S, null, G(R.betType.split(","), P=>(n(),
            a("span", null, i(v.$t(`d4gameType${P}`)), 1))), 256))]), Ep]), t("div", Vp, [R.betMethod == 1 ? (n(),
            a(S, {
                key: 0
            }, [t("div", Fp, [t("span", jp, i(v.$t("bettingnumber")) + " (" + i(v.$t("EnterBet")) + ") ", 1)]), t("div", Hp, [t("span", null, i(R.betContent), 1)])], 64)) : B("", !0), R.betMethod == 2 ? (n(),
            a(S, {
                key: 1
            }, [t("div", Up, [t("span", Kp, i(v.$t("bettingnumber")) + " (" + i(v.$t("SelectBet")) + ")", 1)]), t("div", Xp, [(n(!0),
            a(S, null, G(R.betContent.split("|"), (P,F)=>(n(),
            a("div", {
                key: F
            }, [t("h6", null, i(r(d)[F].name), 1), t("div", Qp, [(n(!0),
            a(S, null, G(P.split(","), (X,at)=>(n(),
            a("span", {
                key: at
            }, i(X), 1))), 128))])]))), 128))])], 64)) : B("", !0), t("div", Yp, [t("span", null, i(v.$t("statusMay")), 1), t("h6", {
                class: M(["stateInfo", `state${R.state}`])
            }, i(T(R.state)), 3)]), Jp, t("div", Zp, [t("span", null, i(v.$t("winOrLose")), 1), [2, 3].includes(R.state) ? (n(),
            a("h6", {
                key: 0,
                class: M(["amountInfo", R.state == 3 ? "green" : "red"])
            }, i(R.profitAmount), 3)) : (n(),
            a("h6", tg, "--"))]), ig, t("div", eg, [t("span", null, i(v.$t("createTime")), 1), t("h6", null, i(R.createTime), 1)])]), [2, 3].includes(R.state) ? (n(),
            a(S, {
                key: 0
            }, [t("div", ng, i(v.$t("betResult")), 1), z(un, {
                data: R
            }, null, 8, ["data"])], 64)) : B("", !0), R.state == 1 ? (n(),
            a("div", {
                key: 1,
                class: "btn",
                onClick: P=>w(R.orderNumber)
            }, i(v.$t("xosoTxt82")), 9, ag)) : B("", !0)])) : B("", !0)], 2))), 256))]), t("div", og, [t("div", {
                class: M(["previous", {
                    disabled: r(b).pageNo <= 1
                }]),
                onClick: f
            }, [z(C, {
                name: "arrow-left",
                size: "20"
            })], 2), t("div", sg, i(r(b).pageNo) + "/" + i((N = r(b)) == null ? void 0 : N.totalPage), 1), t("div", {
                class: M(["next", {
                    disabled: r(b).pageNo >= ((x = r(b)) == null ? void 0 : x.totalPage)
                }]),
                onClick: y
            }, [z(C, {
                name: "arrow",
                size: "20"
            })], 2)])])) : (n(),
            it(ri, {
                key: 1
            })), z(xi, {
                show: o.value,
                "onUpdate:show": L[0] || (L[0] = R=>o.value = R),
                title: v.$t("xosoTxt99"),
                onConfirm: L[1] || (L[1] = R=>k())
            }, null, 8, ["show", "title"])], 64)
        }
    }
});
const Sa = K(lg, [["__scopeId", "data-v-c26e419c"]])
  , cg = {
    class: "gamelist"
}
  , rg = {
    class: "tab"
}
  , ug = {
    class: "con"
}
  , dg = {
    class: "head"
}
  , pg = ["src"]
  , gg = H({
    __name: "gameList",
    setup(l) {
        const e = ft()
          , {gameListIndex: s, newGameResult: u, get4DResult: g, getMy4DHistory: b} = pe();
        function d(_) {
            s.value = _,
            o()
        }
        function c() {
            s.value == 0 ? e.push({
                name: "AllLotteryGames-4DLotteryResults"
            }) : s.value == 1 && e.push({
                name: "AllLotteryGames-4DmyGame"
            })
        }
        const p = Qt({
            type: 0,
            date: oi(new Date).format("YYYY-MM-DD 00:00:00"),
            pageSize: 10,
            pageNo: 1
        });
        function o() {
            s.value == 0 ? g() : b(p)
        }
        return Ct(()=>{
            o()
        }
        ),
        (_,m)=>{
            var T;
            return n(),
            a("div", cg, [t("div", rg, [t("div", {
                class: M({
                    active: r(s) == 0
                }),
                onClick: m[0] || (m[0] = f=>d(0))
            }, i(_.$t("d4Tip1")), 3), t("div", {
                class: M({
                    active: r(s) == 1
                }),
                onClick: m[1] || (m[1] = f=>d(1))
            }, i(_.$t("myGame")), 3)]), t("div", ug, [t("div", {
                class: "more",
                onClick: c
            }, i(_.$t("more")), 1), r(s) == 0 ? (n(),
            a(S, {
                key: 0
            }, [(n(!0),
            a(S, null, G(r(u), f=>(n(),
            a("div", {
                class: "items",
                key: f.issueNumber
            }, [t("div", dg, [t("img", {
                src: f.typeImg,
                alt: ""
            }, null, 8, pg), t("h1", null, i(_.$t(`d4LType${f.type}`)), 1), t("p", null, i(f.openDate) + " " + i(_.$t(`${r(oi)(f.openDate).format("dddd")}`)), 1)]), z(un, {
                data: f
            }, null, 8, ["data"])]))), 128)), ((T = r(u)) == null ? void 0 : T.length) == 0 ? (n(),
            it(ri, {
                key: 0
            })) : B("", !0)], 64)) : B("", !0), r(s) == 1 ? (n(),
            it(Sa, {
                key: 1,
                pageQuery: p,
                "onUpdate:pageQuery": m[2] || (m[2] = f=>p = f)
            }, null, 8, ["pageQuery"])) : B("", !0)])])
        }
    }
});
const bg = K(gg, [["__scopeId", "data-v-d986c7ab"]])
  , mg = {
    class: "x-4d"
}
  , _g = {
    class: "x-4d-more"
}
  , hg = ["src"]
  , vg = ["src"]
  , kg = {
    class: "x-4d-body"
}
  , fg = {
    class: "x-4d-tab"
}
  , yg = {
    class: "x-4d-content"
}
  , $g = {
    key: 0,
    class: "enter"
}
  , Tg = ["placeholder"]
  , wg = ["placeholder"]
  , Cg = {
    class: "box"
}
  , Ng = ["src"]
  , Lg = {
    class: "PreSale"
}
  , zg = {
    class: "head"
}
  , Ig = {
    class: "body"
}
  , xg = {
    class: "foot"
}
  , Rg = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft()
          , {getTimeWeek: u, onTime: g, lotterTab: b, onTab: d, getClear: c, onRoll: p, getInput: o, getBlur: _, onBetType: m, onBetpay: T, onAmount: f, onClickBet: y, addNumber: $, allAddnum: w, onStepper: k, changeStep: v, onMltiple: L, checkboxChange: C, onBet: I, getWinsUserAmount: N, getGameConfig: x, getGameIssue: R, tabList: O, timeVal: P, lotteryTab: F, timeIndex: X, lotteryList: at, timeShow: dt, betShow: lt, tabId: st, num: J, rollNum: mt, banbetpay: Mt, betType: Et, betTypeList: gt, betPay: qt, betPayList: Ft, count: yt, totalAmount: wt, betQuantity: Nt, dupleList: Tt, allActive: ct, countVal: Y, checked: et, preSaleRule: A, multipleList: nt, betAmountList: $t, duplex: Bt, balance: gi, promptShow: ei} = pe();
        return Ct(()=>{
            N(),
            x(),
            R()
        }
        ),
        (zi,_t)=>{
            const Pi = j("NavBar")
              , Ri = j("van-button")
              , fi = j("van-popup");
            return n(),
            a("div", mg, [z(Pi, {
                "left-arrow": "",
                onClickLeft: _t[2] || (_t[2] = zt=>r(s).go(-1)),
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: "4D"
            }, {
                right: D(()=>[t("div", _g, [t("img", {
                    class: "img",
                    src: r(tt)("home/AllLotteryGames/4D", "howpay"),
                    alt: "",
                    onClick: _t[0] || (_t[0] = ()=>r(s).push({
                        name: "AllLotteryGames-4DPlay"
                    }))
                }, null, 8, hg), t("img", {
                    class: "img",
                    src: r(tt)("home/AllLotteryGames/4D", "odds"),
                    alt: "",
                    onClick: _t[1] || (_t[1] = ()=>r(s).push({
                        name: "AllLotteryGames-4DOdds"
                    }))
                }, null, 8, vg)])]),
                _: 1
            }), z(Cu, {
                onOnTime: r(g),
                "lottery-tab": r(F),
                "time-index": r(X),
                onOnLotteryTab: r(b),
                "time-week": r(u),
                "lottery-list": r(at),
                modelValue: r(dt),
                "onUpdate:modelValue": _t[3] || (_t[3] = zt=>ii(dt) ? dt.value = zt : null),
                "time-val": r(P)
            }, null, 8, ["onOnTime", "lottery-tab", "time-index", "onOnLotteryTab", "time-week", "lottery-list", "modelValue", "time-val"]), t("div", kg, [t("div", fg, [t("div", {
                onClick: _t[4] || (_t[4] = zt=>r(d)(1)),
                class: M([r(st) == 1 ? "active" : ""])
            }, i(r(e)("EnterBet")), 3), t("div", {
                onClick: _t[5] || (_t[5] = zt=>r(d)(2)),
                class: M([r(st) == 2 ? "active" : ""])
            }, i(r(e)("SelectBet")), 3)]), t("div", yg, [r(st) === 1 ? (n(),
            a("div", $g, [r(qt) != 5 ? pt((n(),
            a("input", {
                key: 0,
                class: M(r(J).length > 0 ? "input fz24" : "input"),
                oninput: "value=value.replace(/\\D/g,'')",
                "onUpdate:modelValue": _t[6] || (_t[6] = zt=>ii(J) ? J.value = zt : null),
                type: "text",
                placeholder: r(e)("PenterNumber"),
                maxlength: "4",
                onInput: _t[7] || (_t[7] = (...zt)=>r(o) && r(o)(...zt)),
                onBlur: _t[8] || (_t[8] = (...zt)=>r(_) && r(_)(...zt))
            }, null, 42, Tg)), [[tn, r(J)]]) : pt((n(),
            a("input", {
                key: 1,
                class: M(r(J).length > 0 ? "input fz24" : "input"),
                oninput: "value=value.replace(/[^A-Z0-9]/g,'').toUpperCase()",
                "onUpdate:modelValue": _t[9] || (_t[9] = zt=>ii(J) ? J.value = zt : null),
                type: "text",
                placeholder: r(e)("PenterNumber"),
                maxlength: "4",
                onInput: _t[10] || (_t[10] = (...zt)=>r(o) && r(o)(...zt)),
                onBlur: _t[11] || (_t[11] = (...zt)=>r(_) && r(_)(...zt))
            }, null, 42, wg)), [[tn, r(J)]]), pt(z(Ri, {
                class: "btn",
                onClick: r(p)
            }, {
                default: D(()=>[E("ROll")]),
                _: 1
            }, 8, ["onClick"]), [[ci, r(Ft).includes(5)]])])) : B("", !0), z(Su, {
                class: "mb30",
                "bet-type": r(Et),
                "bet-type-list": r(gt),
                onOnBetType: r(m)
            }, null, 8, ["bet-type", "bet-type-list", "onOnBetType"]), r(st) === 2 ? (n(),
            it(td, {
                key: 1,
                "tab-list": r(O),
                "all-active": r(ct),
                "num-list": r(Tt),
                onAddNumber: r($),
                onAllAddnum: r(w)
            }, null, 8, ["tab-list", "all-active", "num-list", "onAddNumber", "onAllAddnum"])) : B("", !0), z(Ou, {
                class: "mb30",
                "roll-num": r(mt),
                "ban-bet-pay": r(Mt),
                "bet-pay-list": r(Ft),
                "bet-pay-id": r(qt),
                duplex: r(Bt),
                onOnBetpay: r(T)
            }, null, 8, ["roll-num", "ban-bet-pay", "bet-pay-list", "bet-pay-id", "duplex", "onOnBetpay"]), z(ju, {
                count: r(yt),
                list: r($t),
                onOnAmount: r(f)
            }, null, 8, ["count", "list", "onOnAmount"])])]), z(bg), z(od, {
                "total-amount": r(wt),
                "bet-quantity": r(Nt),
                onOnBet: r(y)
            }, null, 8, ["total-amount", "bet-quantity", "onOnBet"]), z(Ad, {
                betShow: r(lt),
                "onUpdate:betShow": _t[12] || (_t[12] = zt=>ii(lt) ? lt.value = zt : null),
                "bet-quantity": r(Nt),
                "lottery-tab": r(F),
                "time-index": r(X),
                "total-amount": r(wt),
                balance: r(gi),
                "lottery-list": r(at),
                "bet-type": r(Et),
                "multiple-list": r(nt),
                "count-val": r(Y),
                "onUpdate:countVal": _t[13] || (_t[13] = zt=>ii(Y) ? Y.value = zt : null),
                checked: r(et),
                "onUpdate:checked": _t[14] || (_t[14] = zt=>ii(et) ? et.value = zt : null),
                "pre-sale-rule": r(A),
                "onUpdate:preSaleRule": _t[15] || (_t[15] = zt=>ii(A) ? A.value = zt : null),
                onCheckboxChange: r(C),
                onOnCancel: _t[16] || (_t[16] = zt=>lt.value = !1),
                onGetClear: r(c),
                onOnStepper: r(k),
                onOnMltiple: r(L),
                onChangeStep: r(v),
                onOnBet: r(I)
            }, {
                default: D(()=>[z(ep, {
                    num: r(J),
                    "tab-id": r(st),
                    "bet-pay": r(qt),
                    "duple-list": r(Tt),
                    "tab-list": r(O)
                }, null, 8, ["num", "tab-id", "bet-pay", "duple-list", "tab-list"])]),
                _: 1
            }, 8, ["betShow", "bet-quantity", "lottery-tab", "time-index", "total-amount", "balance", "lottery-list", "bet-type", "multiple-list", "count-val", "checked", "pre-sale-rule", "onCheckboxChange", "onGetClear", "onOnStepper", "onOnMltiple", "onChangeStep", "onOnBet"]), z(fi, {
                show: r(ei),
                "onUpdate:show": _t[17] || (_t[17] = zt=>ii(ei) ? ei.value = zt : null),
                position: "center",
                class: "x-4d-prompt",
                style: {
                    borderRadius: "10px",
                    width: "8rem",
                    height: "80px"
                }
            }, {
                default: D(()=>[t("div", Cg, [t("img", {
                    src: r(tt)("home/AllLotteryGames/4D", "success")
                }, null, 8, Ng), E(" " + i(zi.$t("code402")), 1)])]),
                _: 1
            }, 8, ["show"]), z(fi, {
                show: r(A),
                "onUpdate:show": _t[19] || (_t[19] = zt=>ii(A) ? A.value = zt : null),
                class: "PreSaleRule",
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", Lg, [t("div", zg, i(r(e)("presaleRules")), 1), t("div", Ig, i(zi.$t("betPopTXT")), 1), t("div", xg, [t("div", {
                    class: "btn",
                    onClick: _t[18] || (_t[18] = zt=>A.value = !1)
                }, i(r(e)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const Sg = K(Rg, [["__scopeId", "data-v-607c0d0f"]])
  , bx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Sg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Mg = {
    class: "LR"
}
  , Bg = {
    class: "lotterys"
}
  , Gg = ["onClick"]
  , Pg = {
    alt: ""
}
  , Dg = {
    class: "date"
}
  , Ag = {
    class: "dateBox"
}
  , Og = {
    class: "result"
}
  , qg = H({
    __name: "index",
    setup(l) {
        const {typeList: e, getTypeList: s, gameResultByType: u, gameResultByTypeO: g} = pe();
        s();
        const {t: b} = kt()
          , d = ft()
          , c = h(0)
          , p = Q(()=>e.value ? e.value.slice(1) : [])
          , {minDate: o, maxDate: _} = ua(0)
          , m = oi(_).startOf("day")
          , T = h(!1)
          , f = Qt({
            type: 0,
            date: m.format("YYYY-MM-DD")
        });
        At(()=>p, ()=>{
            p.value.length > 0 && (f.type = p.value[0].typeId,
            u(f))
        }
        , {
            deep: !0,
            immediate: !0
        });
        const y = Q(()=>oi(f.date).format("YYYY-MM-DD") + " " + b(`${oi(f.date).format("dddd")}`))
          , $ = k=>{
            T.value = !1,
            f.date = oi(k).format("YYYY-MM-DD"),
            u(f)
        }
        ;
        function w(k, v) {
            c.value = v,
            f.type = k.typeId,
            u(f)
        }
        return (k,v)=>{
            const L = j("NavBar")
              , C = j("ArSelect")
              , I = j("van-calendar")
              , N = Ht("lazy");
            return n(),
            a("div", Mg, [z(L, {
                "left-arrow": "",
                onClickLeft: v[0] || (v[0] = ()=>r(d).back()),
                title: k.$t("d4Tip2")
            }, null, 8, ["title"]), t("div", Bg, [(n(!0),
            a(S, null, G(p.value, (x,R)=>(n(),
            a("div", {
                class: M(["lottery", {
                    active: c.value === R
                }]),
                onClick: O=>w(x, R),
                key: R
            }, [pt(t("img", Pg, null, 512), [[N, x.typeImg]])], 10, Gg))), 128))]), t("div", Dg, [t("div", Ag, [z(C, {
                onClickSelect: v[1] || (v[1] = x=>T.value = !0),
                selectName: y.value
            }, null, 8, ["selectName"])])]), t("div", Og, [t("h1", null, i(k.$t("betResult")), 1), JSON.stringify(r(g)) !== "{}" ? (n(),
            it(un, {
                key: 0,
                data: r(g)
            }, null, 8, ["data"])) : (n(),
            it(ri, {
                key: 1
            }))]), z(I, {
                show: T.value,
                "onUpdate:show": v[2] || (v[2] = x=>T.value = x),
                onCancel: v[3] || (v[3] = ()=>T.value = !1),
                onConfirm: $,
                "min-date": r(o),
                "max-date": r(_)
            }, null, 8, ["show", "min-date", "max-date"])])
        }
    }
});
const Wg = K(qg, [["__scopeId", "data-v-c9e6bdf5"]])
  , mx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ge = l=>(Gt("data-v-f9374ea3"),
l = l(),
Pt(),
l)
  , Eg = {
    class: "oddsBox"
}
  , Vg = {
    class: "title"
}
  , Fg = {
    class: "tabHead"
}
  , jg = {
    class: "tabCon1"
}
  , Hg = {
    class: "item"
}
  , Ug = ge(()=>t("div", null, null, -1))
  , Kg = ge(()=>t("div", null, null, -1))
  , Xg = [Ug, Kg]
  , Qg = {
    class: "tabHead h2"
}
  , Yg = {
    class: "tabCon2"
}
  , Jg = {
    class: "tabHead h2"
}
  , Zg = {
    key: 0
}
  , tb = {
    key: 1
}
  , ib = {
    key: 2
}
  , eb = ge(()=>t("br", null, null, -1))
  , nb = ge(()=>t("br", null, null, -1))
  , ab = ge(()=>t("br", null, null, -1))
  , ob = ge(()=>t("br", null, null, -1))
  , sb = {
    class: "tabCon1 c2"
}
  , lb = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft()
          , {getOddsList: u, oddsList: g} = pe();
        return Ct(()=>{
            u()
        }
        ),
        (b,d)=>{
            const c = j("NavBar");
            return n(),
            a("div", Eg, [z(c, {
                "left-arrow": "",
                title: r(e)("odds"),
                onClickLeft: d[0] || (d[0] = ()=>r(s).back())
            }, null, 8, ["title"]), (n(!0),
            a(S, null, G(r(g), p=>{
                var o, _, m, T, f;
                return n(),
                a("div", {
                    class: "items",
                    key: p.playTypeId
                }, [t("div", Vg, i(r(e)(`d4gamePay${p.playTypeId}`)), 1), p.playTypeId != 2 ? (n(),
                a(S, {
                    key: 0
                }, [t("div", Fg, [t("span", null, i(r(e)("d4gameType1")), 1), t("span", null, i(r(e)("d4gameType2")), 1)]), t("div", jg, [(n(!0),
                a(S, null, G((o = p.lists) == null ? void 0 : o.filter(y=>[1, 2].includes(y.type)), y=>(n(),
                a("div", {
                    key: y.type
                }, [(n(!0),
                a(S, null, G(y.list, $=>(n(),
                a("div", {
                    class: "item",
                    key: $.playId
                }, [t("div", null, i(r(e)(`d4gameType${$.code}`)), 1), t("div", null, i($.odds > 0 ? $.odds : $.oddsDefault), 1)]))), 128)), y.list.length < 5 ? (n(),
                a(S, {
                    key: 0
                }, G(2, $=>t("div", Hg, Xg)), 64)) : B("", !0)]))), 128))]), t("div", Qg, [(n(!0),
                a(S, null, G((m = (_ = p.lists) == null ? void 0 : _.filter(y=>[3].includes(y.type))[0]) == null ? void 0 : m.list, y=>(n(),
                a("span", {
                    key: y.playId
                }, i(r(e)(`d4gameType${y.playId}`)), 1))), 128))]), t("div", Yg, [(n(!0),
                a(S, null, G((f = (T = p.lists) == null ? void 0 : T.filter(y=>[3].includes(y.type))[0]) == null ? void 0 : f.list, y=>(n(),
                a("div", {
                    key: y.playId
                }, i(y.odds > 0 ? y.odds : y.oddsDefault), 1))), 128))])], 64)) : (n(!0),
                a(S, {
                    key: 1
                }, G(p.lists, y=>(n(),
                a(S, null, [t("div", Jg, [y.type == 1 ? (n(),
                a("span", Zg, i(r(e)("d4gameType1")), 1)) : B("", !0), y.type == 2 ? (n(),
                a("span", tb, i(r(e)("d4gameType2")), 1)) : B("", !0), y.type == 3 ? (n(),
                a("span", ib, i(r(e)("d4Tip3")), 1)) : B("", !0), t("span", null, [E(i(r(e)("d4Tip4")), 1), eb, E("24")]), t("span", null, [E(i(r(e)("d4Tip4")), 1), nb, E("12")]), t("span", null, [E(i(r(e)("d4Tip4")), 1), ab, E("6")]), t("span", null, [E(i(r(e)("d4Tip4")), 1), ob, E("4")])]), t("div", sb, [(n(!0),
                a(S, null, G(y.list, $=>(n(),
                a("div", {
                    class: "itemR item",
                    key: $.playId
                }, [t("div", null, i(r(e)(`d4gameType${$.code}`)), 1), t("div", null, i($.odds24 > 0 ? $.odds24 : $.oddsDefault24), 1), t("div", null, i($.odds12 > 0 ? $.odds12 : $.oddsDefault12), 1), t("div", null, i($.odds6 > 0 ? $.odds6 : $.oddsDefault6), 1), t("div", null, i($.odds4 > 0 ? $.odds4 : $.oddsDefault4), 1)]))), 128))])], 64))), 256))])
            }
            ), 128))])
        }
    }
});
const cb = K(lb, [["__scopeId", "data-v-f9374ea3"]])
  , _x = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , rb = {
    class: "playBox"
}
  , ub = {
    class: "con"
}
  , db = {
    class: "tip"
}
  , pb = {
    class: "tip"
}
  , gb = ["innerHTML"]
  , bb = {
    class: "txt"
}
  , mb = {
    key: 0,
    class: "num"
}
  , _b = ["innerHTML"]
  , hb = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft()
          , u = h(0)
          , g = h([{
            title: e("d4gamePay1"),
            tip1: e("Play4DTip2"),
            tip2: e("Play4DTip4"),
            txt: {
                tip1: "[1234]",
                tip2: "",
                tip3: [],
                tip4: e("Play4DTip1", ["1234"])
            }
        }, {
            title: e("d4gamePay5"),
            tip1: e("Play4DTip5"),
            tip2: e("Play4DTip6"),
            txt: {
                tip1: "[123R]",
                tip2: e("Play4DTip10", [10]),
                tip3: ["1230", "1231", "1232", "1233", "1234", "1235", "1236", "1237", "1238", "1239"],
                tip4: e("Play4DTip1", ["1234"])
            }
        }, {
            title: e("d4gamePay2"),
            tip1: e("Play4DTip7"),
            tip2: e("Play4DTip8"),
            txt: {
                tip1: "[1122]",
                tip2: e("Play4DTip11"),
                tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                tip4: e("Play4DTip1", ["1212"])
            }
        }, {
            title: e("d4gamePay3"),
            tip1: e("Play4DTip9"),
            tip2: e("Play4DTip8"),
            txt: {
                tip1: "[1122]",
                tip2: e("Play4DTip10", [6]),
                tip3: ["1122", "1212", "1221", "2112", "2121", "2211"],
                tip4: e("Play4DTip1", ["1212"])
            }
        }, {
            title: e("d4gamePay4"),
            tip1: e("Play4DTip3"),
            tip2: e("Play4DTip4"),
            txt: {
                tip1: "[1234]",
                tip2: e("Play4DTip10", [2]),
                tip3: ["1234", "4321"],
                tip4: e("Play4DTip1", ["1234"])
            }
        }]);
        return (b,d)=>{
            const c = j("NavBar")
              , p = j("van-icon")
              , o = j("van-tab")
              , _ = j("van-tabs");
            return n(),
            a("div", rb, [z(c, {
                "left-arrow": "",
                title: r(e)("lotteryManual"),
                onClickLeft: d[0] || (d[0] = ()=>r(s).back())
            }, null, 8, ["title"]), z(_, {
                active: u.value,
                "onUpdate:active": d[1] || (d[1] = m=>u.value = m),
                type: "card",
                "swipe-threshold": 3
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(g.value, (m,T)=>(n(),
                it(o, {
                    title: m.title,
                    key: T
                }, {
                    default: D(()=>[t("div", ub, [t("h1", null, [z(p, {
                        name: "play",
                        class: "icon",
                        size: "20"
                    }), E(i(r(e)("betting")), 1)]), t("div", db, i(m.tip1), 1), t("h1", null, [z(p, {
                        name: "play",
                        class: "icon",
                        size: "20"
                    }), E(i(r(e)("winningconditions")), 1)]), t("div", pb, [t("span", {
                        innerHTML: m.tip2
                    }, null, 8, gb)]), t("div", bb, [t("div", null, i(r(e)("example")), 1), t("div", null, i(r(e)("betting")) + ":   " + i(m.txt.tip1), 1), t("div", null, i(m.txt.tip2), 1), m.txt.tip3.length > 0 ? (n(),
                    a("div", mb, [(n(!0),
                    a(S, null, G(m.txt.tip3, (f,y)=>(n(),
                    a("span", {
                        key: y
                    }, i(f), 1))), 128))])) : B("", !0), t("div", null, [E(i(r(e)("result")) + ":   ", 1), t("span", {
                        innerHTML: m.txt.tip4
                    }, null, 8, _b)])])])]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"])])
        }
    }
});
const vb = K(hb, [["__scopeId", "data-v-a47a122f"]])
  , hx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , kb = {
    class: "MG"
}
  , fb = H({
    __name: "index",
    setup(l) {
        const {getTypeList: e, typeList: s, getMy4DHistory: u} = pe();
        e();
        const {t: g} = kt()
          , b = ft()
          , d = h(!1)
          , c = h(g("all"))
          , p = Qt({
            type: 0,
            date: "",
            pageSize: 20,
            pageNo: 1
        });
        u(p);
        const o = async({selectedOptions: _})=>{
            d.value = !1,
            p.type = _[0].typeId,
            p.pageNo = 1,
            c.value = _[0].typeName,
            u(p)
        }
        ;
        return (_,m)=>{
            const T = j("NavBar")
              , f = j("ArSelect")
              , y = j("van-picker")
              , $ = j("van-popup");
            return n(),
            a("div", kb, [z(T, {
                "left-arrow": "",
                onClickLeft: m[0] || (m[0] = ()=>r(b).back()),
                title: _.$t("xosoTxt73")
            }, null, 8, ["title"]), z(f, {
                onClickSelect: m[1] || (m[1] = w=>d.value = !0),
                selectName: c.value
            }, null, 8, ["selectName"]), z(Sa, {
                pageQuery: p,
                "onUpdate:pageQuery": m[2] || (m[2] = w=>p = w)
            }, null, 8, ["pageQuery"]), z($, {
                show: d.value,
                "onUpdate:show": m[4] || (m[4] = w=>d.value = w),
                round: "",
                position: "bottom"
            }, {
                default: D(()=>[z(y, {
                    "columns-field-names": {
                        text: "typeName",
                        value: "typeId"
                    },
                    columns: r(s),
                    onCancel: m[3] || (m[3] = w=>d.value = !1),
                    onConfirm: o
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const yb = K(fb, [["__scopeId", "data-v-59bf1373"]])
  , vx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , $b = {
    class: "Wallet__C"
}
  , Tb = {
    class: "Wallet__C-balance"
}
  , wb = {
    class: "Wallet__C-balance-l2"
}
  , Cb = {
    class: "Wallet__C-balance-l1"
}
  , Nb = {
    class: "Wallet__C-balance-l3"
}
  , Lb = H({
    __name: "Wallet",
    setup(l, {expose: e}) {
        const {t: s} = kt()
          , u = h(0)
          , g = async(c=!0)=>{
            const p = await ot(sn());
            p && (u.value = (p == null ? void 0 : p.data.amount) || 0,
            c && _i(s("refreshSuccess")))
        }
          , b = ft()
          , d = c=>{
            b.push({
                name: c
            })
        }
        ;
        return Ct(()=>{
            g(!1)
        }
        ),
        e({
            getWinsUserAmount: g
        }),
        (c,p)=>{
            const o = Ht("throttle-click");
            return n(),
            a("div", $b, [t("div", Tb, [t("div", wb, [t("div", null, i(c.$t("walletBalance")), 1)]), t("div", Cb, [pt((n(),
            a("div", null, [E(i(r(Rt)(u.value)), 1)])), [[o, {
                handler: g,
                wait: 2e3
            }]])]), t("div", Nb, [t("div", {
                onClick: p[0] || (p[0] = _=>d("Recharge"))
            }, i(c.$t("recharge")), 1), t("div", {
                onClick: p[1] || (p[1] = _=>d("Withdraw"))
            }, i(c.$t("withdraw")), 1)])])])
        }
    }
});
const xe = K(Lb, [["__scopeId", "data-v-5b319853"]])
  , zb = {
    class: "GameList__C"
}
  , Ib = ["onClick"]
  , xb = ["innerHTML"]
  , Rb = H({
    __name: "GameList",
    props: {
        gameList: {
            default: {
                type: Array,
                default: ()=>[]
            }
        },
        currentGameIndex: {
            default: {
                type: Number,
                default: 0
            }
        }
    },
    setup(l) {
        const e = l;
        return (s,u)=>(n(),
        a("div", zb, [(n(!0),
        a(S, null, G(e.gameList, (g,b)=>(n(),
        a("div", {
            key: b,
            class: M(["GameList__C-item", {
                active: s.currentGameIndex == b
            }]),
            onClick: d=>s.$emit("changeGame", b)
        }, [t("div", {
            innerHTML: g.typeName
        }, null, 8, xb)], 10, Ib))), 128))]))
    }
});
const Re = K(Rb, [["__scopeId", "data-v-5aa99411"]])
  , Sb = {
    class: "TimeLeft__C-PreSale"
}
  , Mb = {
    class: "TimeLeft__C-PreSale-head"
}
  , Bb = {
    class: "TimeLeft__C-PreSale-body"
}
  , Gb = ["innerHTML"]
  , Pb = {
    class: "TimeLeft__C-PreSale-foot"
}
  , Db = H({
    __name: "rule",
    props: {
        howPlayShow: {
            type: Boolean,
            default: !1
        },
        gamePresentation: {
            type: String,
            default: ""
        }
    },
    emits: ["close"],
    setup(l, {emit: e}) {
        const s = l
          , u = Q({
            get() {
                return s.howPlayShow || !1
            },
            set(g) {
                g || e("close")
            }
        });
        return (g,b)=>{
            const d = j("van-popup");
            return n(),
            it(d, {
                show: u.value,
                "onUpdate:show": b[1] || (b[1] = c=>u.value = c),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", Sb, [t("div", Mb, i(g.$t("winTrxIndicate")), 1), t("div", Bb, [t("div", {
                    innerHTML: l.gamePresentation
                }, null, 8, Gb)]), t("div", Pb, [t("div", {
                    class: "TimeLeft__C-PreSale-foot-btn",
                    onClick: b[0] || (b[0] = c=>e("close"))
                }, i(g.$t("winTrxClose")), 1)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const Se = K(Db, [["__scopeId", "data-v-79b922e1"]])
  , Ab = l=>(Gt("data-v-3f9a78f2"),
l = l(),
Pt(),
l)
  , Ob = {
    class: "FDTL__C"
}
  , qb = {
    class: "FDTL__C-l1"
}
  , Wb = {
    class: "left"
}
  , Eb = {
    class: "FDTL__C-l2"
}
  , Vb = {
    class: "FDTL__C-time"
}
  , Fb = Ab(()=>t("div", {
    notime: ""
}, ":", -1))
  , jb = {
    class: "FDTL__C-l3"
}
  , Hb = {
    class: "box"
}
  , Ub = ["num"]
  , Kb = on('<div class="slot-num" data-v-3f9a78f2>1</div><div class="slot-num" data-v-3f9a78f2>2</div><div class="slot-num" data-v-3f9a78f2>0</div><div class="slot-num" data-v-3f9a78f2>1</div><div class="slot-num" data-v-3f9a78f2>2</div><div class="slot-num" data-v-3f9a78f2>3</div><div class="slot-num" data-v-3f9a78f2>4</div><div class="slot-num" data-v-3f9a78f2>5</div><div class="slot-num" data-v-3f9a78f2>6</div><div class="slot-num" data-v-3f9a78f2>7</div><div class="slot-num" data-v-3f9a78f2>8</div><div class="slot-num" data-v-3f9a78f2>9</div><div class="slot-num" data-v-3f9a78f2>0</div><div class="slot-num" data-v-3f9a78f2>1</div><div class="slot-num" data-v-3f9a78f2>2</div><div class="slot-num" data-v-3f9a78f2>3</div><div class="slot-num" data-v-3f9a78f2>4</div><div class="slot-num" data-v-3f9a78f2>5</div><div class="slot-num" data-v-3f9a78f2>6</div><div class="slot-num" data-v-3f9a78f2>7</div><div class="slot-num" data-v-3f9a78f2>8</div><div class="slot-num" data-v-3f9a78f2>9</div><div class="slot-num" data-v-3f9a78f2>0</div><div class="slot-num" data-v-3f9a78f2>1</div><div class="slot-num" data-v-3f9a78f2>2</div><div class="slot-num" data-v-3f9a78f2>3</div><div class="slot-num" data-v-3f9a78f2>4</div><div class="slot-num" data-v-3f9a78f2>5</div><div class="slot-num" data-v-3f9a78f2>6</div><div class="slot-num" data-v-3f9a78f2>7</div><div class="slot-num" data-v-3f9a78f2>8</div><div class="slot-num" data-v-3f9a78f2>9</div>', 32)
  , Xb = ["num"]
  , Qb = H({
    __name: "TimeLeft",
    props: {
        premium: {},
        currentInfo: {},
        currentGame: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , u = h(0)
          , g = h([{
            arr: []
        }, {
            arr: []
        }, {
            arr: []
        }, {
            arr: []
        }, {
            arr: []
        }]);
        At(()=>s.premium, _=>{
            _ && (g.value = b(_))
        }
        );
        const b = _=>{
            let m = [];
            for (let f = 0; f < _.length; f++) {
                let y = _[f];
                var T = [];
                switch (y) {
                case 9:
                    T.push(y - 8, y - 9, y);
                    break;
                case 0:
                    T.push(y + 8, y + 9, y);
                    break;
                default:
                    T.push(y - 2, y - 1, y)
                }
                m.push({
                    arr: T
                })
            }
            return m
        }
          , d = ()=>{
            u.value = 1,
            setTimeout(()=>{
                u.value = 0
            }
            , 3e3)
        }
          , c = h(!1)
          , p = Ui()
          , o = ()=>{
            c.value = !0,
            p.get5DRule(s.currentGame.typeID)
        }
        ;
        return e({
            animationShow: d
        }),
        (_,m)=>(n(),
        a(S, null, [t("div", Ob, [t("div", qb, [t("div", Wb, [t("div", null, i(_.$t("betIssue")), 1), t("div", {
            class: "FDTL__C-rule",
            onClick: o
        }, i(_.$t("winTrxIndicate")), 1)]), t("div", null, i(_.$t("k3TimeLeftToBuy")), 1)]), t("div", Eb, [t("div", null, i(s.currentInfo.gameNo), 1), t("div", Vb, [t("div", null, i(_.currentInfo.time1), 1), t("div", null, i(_.currentInfo.time2), 1), Fb, t("div", null, i(_.currentInfo.time3), 1), t("div", null, i(_.currentInfo.time4), 1)])]), t("div", jb, [t("div", Hb, [(n(!0),
        a(S, null, G(g.value, (T,f)=>(n(),
        a("div", {
            key: f,
            class: "slot-column"
        }, [t("div", {
            class: M(["slot-transform", "transform" + f, u.value == 1 && "slot-scroll"])
        }, [(n(!0),
        a(S, null, G(T.arr, (y,$)=>(n(),
        a("div", {
            class: "slot-num",
            num: T,
            key: "2" + $
        }, i(y), 9, Ub))), 128)), Kb, (n(!0),
        a(S, null, G(T.arr, (y,$)=>(n(),
        a("div", {
            class: "slot-num",
            num: T,
            key: "2" + $
        }, i(y), 9, Xb))), 128))], 2)]))), 128))])])]), z(Se, {
            howPlayShow: c.value,
            gamePresentation: _.currentGame.gamePresentation,
            onClose: m[0] || (m[0] = T=>c.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
});
const Yb = K(Qb, [["__scopeId", "data-v-3f9a78f2"]])
  , Jb = {
    class: "FDB__C-nav"
}
  , Zb = ["onClick"]
  , tm = {
    class: "FDB__C-H"
}
  , im = ["onClick"]
  , em = {
    class: "FDB__C-Num"
}
  , nm = ["txt", "onClick"]
  , am = {
    class: "round"
}
  , om = {
    class: "rate"
}
  , sm = H({
    __name: "BetCom",
    props: {
        betTypeNameMap: {},
        betType: {},
        BettingH: {},
        onTabID: {},
        numberChack: {},
        OddsList: {}
    },
    emits: ["changeType", "onTab", "numberTab"],
    setup(l, {emit: e}) {
        return (s,u)=>(n(),
        a(S, null, [t("div", Jb, [(n(!0),
        a(S, null, G(s.betTypeNameMap, (g,b)=>(n(),
        a("div", {
            key: b,
            class: M({
                active: s.betType == b
            }),
            onClick: d=>e("changeType", b)
        }, i(g), 11, Zb))), 128))]), t("div", tm, [(n(!0),
        a(S, null, G(s.BettingH, (g,b)=>(n(),
        a("div", {
            key: b,
            class: M({
                active: s.onTabID == g.id
            }),
            onClick: d=>e("onTab", g.id)
        }, [t("span", null, i(g.name), 1), t("span", null, i(g.rate), 1)], 10, im))), 128))]), t("div", em, [s.betType != 5 ? (n(),
        a(S, {
            key: 0
        }, G(10, (g,b)=>t("div", {
            key: b,
            txt: b,
            class: M({
                active: s.numberChack[b]
            }),
            onClick: d=>e("numberTab", b)
        }, [t("div", am, i(b), 1), t("div", om, i(s.OddsList[0].playRate ? s.OddsList[0].playRate : s.OddsList[0].playRate_Original), 1)], 10, nm)), 64)) : B("", !0)])], 64))
    }
});
const Un = K(sm, [["__scopeId", "data-v-8d2c1c7a"]])
  , lm = l=>(Gt("data-v-831909f9"),
l = l(),
Pt(),
l)
  , cm = {
    class: "Betting__Popup-body"
}
  , rm = {
    class: "Betting__Popup-body-line"
}
  , um = {
    class: "Betting__Popup-body-line-list"
}
  , dm = ["onClick"]
  , pm = {
    class: "Betting__Popup-body-line"
}
  , gm = {
    class: "Betting__Popup-body-line-btnL"
}
  , bm = {
    class: "Betting__Popup-body-line"
}
  , mm = lm(()=>t("div", null, null, -1))
  , _m = {
    class: "Betting__Popup-body-line-list"
}
  , hm = ["onClick"]
  , vm = {
    class: "Betting__Popup-body-line"
}
  , km = {
    class: "Betting__Popup-foot"
}
  , fm = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , ym = {
    class: "Betting__Popup-PreSale"
}
  , $m = {
    class: "Betting__Popup-PreSale-head"
}
  , Tm = {
    class: "Betting__Popup-PreSale-body"
}
  , wm = {
    class: "Betting__Popup-PreSale-foot"
}
  , Cm = H({
    __name: "BettingPopup",
    props: {
        currentInfo: {},
        currentGame: {},
        bettingPopupShow: {},
        betTypeList: {},
        selectInfo: {}
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "computedCoin", "submitBetting"],
    setup(l, {emit: e}) {
        const s = l
          , {t: u} = kt()
          , g = h(!1)
          , b = h(!0)
          , d = Q(()=>s.currentGame.betMultiple.split("|"));
        At(()=>d, ()=>{
            s.selectInfo.count = d.value[0]
        }
        , {
            deep: !0,
            immediate: !0
        });
        let c = Q({
            get() {
                return s.bettingPopupShow || !1
            },
            set(y) {
                e("update:bettingPopupShow", y)
            }
        });
        const p = y=>{
            switch (y) {
            case 1:
                s.selectInfo.count > 1 && s.selectInfo.count--;
                break;
            case 2:
                s.selectInfo.count++;
                break
            }
            e("computedCoin")
        }
          , o = y=>{
            y > 0 && (s.selectInfo.count = Math.floor(y)),
            e("computedCoin")
        }
          , _ = y=>{
            s.selectInfo.count = y,
            e("computedCoin")
        }
          , m = y=>{
            s.selectInfo.coin = y,
            e("computedCoin")
        }
          , T = ()=>{
            g.value = !1,
            b.value = !0
        }
          , f = async()=>{
            if (!b.value) {
                _i(u("agreePresaleRules"));
                return
            }
            e("submitBetting")
        }
        ;
        return (y,$)=>{
            const w = j("van-field")
              , k = j("van-popup")
              , v = Ht("throttle-click");
            return n(),
            a(S, null, [z(k, {
                show: r(c),
                "onUpdate:show": $[6] || ($[6] = L=>ii(c) ? c.value = L : c = L),
                position: "bottom",
                style: {
                    "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)",
                    background: "#3A3A3A"
                },
                round: !0,
                "close-on-click-overlay": !1
            }, {
                default: D(()=>[t("div", cm, [mi(y.$slots, "default", {}, void 0, !0), t("div", rm, [E(i(r(u)("amount")) + " ", 1), t("div", um, [(n(!0),
                a(S, null, G(y.betTypeList, (L,C)=>(n(),
                a("div", {
                    key: C,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: s.selectInfo.coin == L
                    }]),
                    onClick: I=>m(L)
                }, i(L), 11, dm))), 128))])]), t("div", pm, [E(i(r(u)("numbers")) + " ", 1), t("div", gm, [t("div", {
                    class: M(["Betting__Popup-btn", {
                        bgcolor: s.selectInfo.count > 0
                    }]),
                    onClick: $[0] || ($[0] = L=>p(1))
                }, "-", 2), z(w, {
                    class: "Betting__Popup-input",
                    modelValue: s.selectInfo.count,
                    "onUpdate:modelValue": $[1] || ($[1] = L=>s.selectInfo.count = L),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    maxlength: 4,
                    onInput: o
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor",
                    onClick: $[2] || ($[2] = L=>p(2))
                }, "+")])]), t("div", bm, [mm, t("div", _m, [(n(!0),
                a(S, null, G(d.value, (L,C)=>(n(),
                a("div", {
                    key: C,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: s.selectInfo.count == L
                    }]),
                    onClick: I=>_(L)
                }, " X" + i(L), 11, hm))), 128))])]), t("div", vm, [t("span", {
                    class: M(["Betting__Popup-agree", {
                        active: b.value
                    }]),
                    onClick: $[3] || ($[3] = L=>b.value = !b.value)
                }, i(r(u)("agree")), 3), t("span", {
                    onClick: $[4] || ($[4] = L=>g.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, i(r(u)("presaleRules")), 1)])]), t("div", km, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: $[5] || ($[5] = L=>e("clearBetting"))
                }, i(r(u)("cancel")), 1), pt((n(),
                a("div", fm, [E(i(r(u)("totalAmount")) + i(r(Rt)(s.selectInfo.allCoin || 0)), 1)])), [[v, {
                    handler: f,
                    wait: 2e3
                }]])])]),
                _: 3
            }, 8, ["show"]), z(k, {
                show: g.value,
                "onUpdate:show": $[7] || ($[7] = L=>g.value = L),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", ym, [t("div", $m, i(r(u)("presaleRules")), 1), t("div", Tm, i(y.$t("betPopTXT")), 1), t("div", wm, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: T
                }, i(r(u)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const Nm = K(Cm, [["__scopeId", "data-v-831909f9"]])
  , Lm = {
    class: "FDB__C"
}
  , zm = {
    class: "FDB__C-mark"
}
  , Im = H({
    __name: "Betting",
    props: {
        currentInfo: {
            type: Object,
            default: ()=>({})
        },
        ProhibitBuyTime: {
            type: Number,
            default: 5
        },
        currentGame: {
            type: Object,
            default: ()=>({})
        }
    },
    emits: ["betting", "changeBettingP"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , {t: g} = kt();
        h();
        const b = h(!1);
        At(()=>b.value, O=>{
            O && (f.value.coin = $.value[0])
        }
        );
        const d = h(0)
          , c = h(["A", "B", "C", "D", "E", "SUM"])
          , p = h([{
            playID: 1,
            playType: 1,
            playBet: "0-9",
            playResult: "0-9",
            playRate: 9,
            playRate_Original: 9
        }, {
            playID: 2,
            playType: 2,
            playBet: "H",
            playResult: "H",
            playRate: 2,
            playRate_Original: 2
        }, {
            playID: 3,
            playType: 2,
            playBet: "L",
            playResult: "L",
            playRate: 2,
            playRate_Original: 2
        }, {
            playID: 4,
            playType: 3,
            playBet: "O",
            playResult: "O",
            playRate: 2,
            playRate_Original: 2
        }, {
            playID: 5,
            playType: 3,
            playBet: "E",
            playResult: "E",
            playRate: 2,
            playRate_Original: 2
        }])
          , o = h(0)
          , _ = h([])
          , m = h([!1, !1, !1, !1, !1, !1, !1, !1])
          , T = Q(()=>[{
            id: 1,
            name: g("k3Big"),
            rate: p.value[1].playRate || p.value[1].playRate_Original
        }, {
            id: 2,
            name: g("k3Small"),
            rate: p.value[2].playRate || p.value[2].playRate_Original
        }, {
            id: 3,
            name: g("k3Odd"),
            rate: p.value[3].playRate || p.value[3].playRate_Original
        }, {
            id: 4,
            name: g("k3Even"),
            rate: p.value[4].playRate || p.value[4].playRate_Original
        }])
          , f = h({
            coin: 0,
            count: 1,
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "2020",
            selecttype: ""
        })
          , y = Q(()=>(u.currentInfo.passTime < u.ProhibitBuyTime && N(),
        u.currentInfo.passTime < u.ProhibitBuyTime))
          , $ = Q(()=>u.currentGame.scope ? u.currentGame.scope.split("|").map(O=>Number(O)) : [])
          , w = O=>{
            d.value = O,
            O == 5 && I()
        }
          , k = async()=>{
            const [O,P] = await Zt(ss());
            P && (p.value = P)
        }
          , v = O=>{
            I(),
            o.value == O ? (o.value = 0,
            b.value = !0) : (o.value = O,
            b.value = !0),
            C()
        }
          , L = O=>{
            if (o.value = 0,
            m.value[O]) {
                m.value[O] = !1;
                const P = _.value.indexOf(O);
                P > -1 && _.value.splice(P, 1),
                b.value = !0
            } else
                _.value.push(O),
                m.value[O] = !0,
                b.value = !0;
            C()
        }
          , C = ()=>{
            ti(()=>{
                _.value.length > 0 ? f.value.allCoin = f.value.coin * f.value.count * _.value.length : o.value ? f.value.allCoin = f.value.coin * f.value.count : f.value.allCoin = 0
            }
            )
        }
          , I = ()=>{
            _.value = [];
            for (let O = 0; m.value.length > O; O++)
                m.value[O] = !1;
            C()
        }
          , N = ()=>{
            var O;
            f.value.count = ((O = u.currentGame.betMultiple) == null ? void 0 : O.split("|")[0]) || 1,
            b.value = !1,
            x()
        }
          , x = ()=>{
            _.value = [],
            m.value = [!1, !1, !1, !1, !1, !1, !1, !1],
            o.value = 0
        }
          , R = async()=>{
            if (f.value.count == 0)
                return Ot(g("bteNoCount"));
            let O;
            if (_.value.length > 0)
                O = _.value.join("|");
            else
                switch (o.value) {
                case 1:
                    O = "H";
                    break;
                case 2:
                    O = "L";
                    break;
                case 3:
                    O = "O";
                    break;
                case 4:
                    O = "E";
                    break
                }
            if (!O)
                return Ot("请下注");
            const P = {
                issuenumber: u.currentInfo.gameNo,
                typeId: u.currentGame.typeID,
                amount: f.value.coin,
                betCount: Number(f.value.count),
                gameType: d.value + 1,
                selectType: O
            }
              , F = await ot(pa(P));
            (F == null ? void 0 : F.code) === 0 && (_i(g("code" + (F == null ? void 0 : F.msgCode))),
            b.value = !1,
            x(),
            s("betting", u.currentInfo.gameNo))
        }
        ;
        return Ct(()=>{
            k()
        }
        ),
        e({
            bettingPopupShow: b
        }),
        (O,P)=>(n(),
        a("div", Lm, [pt(t("div", zm, [t("div", null, i(u.currentInfo.time3 || "0"), 1), t("div", null, i(u.currentInfo.time4 || "0"), 1)], 512), [[ci, y.value]]), z(Un, {
            betTypeNameMap: c.value,
            betType: d.value,
            BettingH: T.value,
            onTabID: o.value,
            OddsList: p.value,
            numberChack: m.value,
            onChangeType: w,
            onNumberTab: L,
            onOnTab: v
        }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"]), z(Nm, {
            currentInfo: l.currentInfo,
            currentGame: l.currentGame,
            bettingPopupShow: b.value,
            betTypeList: $.value,
            selectInfo: f.value,
            onComputedCoin: C,
            onClearBetting: N,
            onSubmitBetting: R
        }, {
            default: D(()=>[z(Un, {
                betTypeNameMap: c.value,
                betType: d.value,
                BettingH: T.value,
                onTabID: o.value,
                OddsList: p.value,
                numberChack: m.value,
                onChangeType: w,
                onNumberTab: L,
                onOnTab: v
            }, null, 8, ["betTypeNameMap", "betType", "BettingH", "onTabID", "OddsList", "numberChack"])]),
            _: 1
        }, 8, ["currentInfo", "currentGame", "bettingPopupShow", "betTypeList", "selectInfo"])]))
    }
});
const xm = K(Im, [["__scopeId", "data-v-61b41d1b"]])
  , Rm = {
    class: "RecordNav__C"
}
  , Sm = ["onClick"]
  , Mm = H({
    __name: "RecordNav",
    props: {
        record: {
            type: String,
            default: "GameRecord"
        }
    },
    setup(l) {
        const e = l
          , {t: s} = kt()
          , u = h([{
            name: s("gameRecords"),
            componentName: "GameRecord"
        }, {
            name: s("chartTrends"),
            componentName: "Trend"
        }, {
            name: s("myGameRecords"),
            componentName: "MyGameRecord"
        }]);
        return (g,b)=>(n(),
        a("div", Rm, [(n(!0),
        a(S, null, G(u.value, (d,c)=>(n(),
        a("div", {
            key: c,
            onClick: p=>g.$emit("changeC", d.componentName),
            class: M({
                active: e.record == d.componentName
            })
        }, i(d.name), 11, Sm))), 128))]))
    }
});
const Me = K(Mm, [["__scopeId", "data-v-a0861d49"]])
  , Bm = {
    class: "GameRecord__C"
}
  , Gm = {
    class: "GameRecord__C-head"
}
  , Pm = {
    class: "GameRecord__C-body"
}
  , Dm = {
    class: "numList"
}
  , Am = {
    class: "numItem"
}
  , Om = {
    class: "redNumItem"
}
  , qm = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , Wm = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , Em = {
    class: "GameRecord__C-foot-page"
}
  , Vm = H({
    __name: "GameRecord",
    props: {
        typeid: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , u = h([])
          , g = h(4)
          , b = h(10)
          , d = h(1)
          , c = ()=>{
            d.value--,
            o()
        }
          , p = ()=>{
            d.value++,
            o()
        }
          , o = async(_=!1)=>{
            if (s.typeid == null)
                return;
            _ && (d.value = 1);
            const m = await ot(ga({
                pageSize: b.value,
                pageNo: d.value,
                typeId: s.typeid
            }));
            u.value = (m == null ? void 0 : m.data.list) || [],
            g.value = (m == null ? void 0 : m.data.totalPage) || 0
        }
        ;
        return e({
            getData: o
        }),
        ki(()=>{
            o()
        }
        ),
        (_,m)=>{
            const T = j("van-col")
              , f = j("van-row")
              , y = j("van-icon");
            return n(),
            a("div", Bm, [t("div", Gm, [z(f, null, {
                default: D(()=>[z(T, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(_.$t("FDNumber")), 1)]),
                    _: 1
                }), z(T, {
                    span: "12"
                }, {
                    default: D(()=>[E(i(_.$t("FDResult")), 1)]),
                    _: 1
                }), z(T, {
                    span: "4"
                }, {
                    default: D(()=>[E(i(_.$t("FDTotal")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", Pm, [u.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(u.value, ($,w)=>(n(),
            it(f, {
                key: w
            }, {
                default: D(()=>[z(T, {
                    span: "8"
                }, {
                    default: D(()=>[E(i($.issueNumber), 1)]),
                    _: 2
                }, 1024), z(T, {
                    span: "12"
                }, {
                    default: D(()=>[t("div", Dm, [(n(!0),
                    a(S, null, G([...$.premium], (k,v)=>(n(),
                    a("div", Am, i(k), 1))), 256))])]),
                    _: 2
                }, 1024), z(T, {
                    span: "4"
                }, {
                    default: D(()=>[t("span", Om, i($.sumCount), 1)]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", qm, [z(ri)]))]), u.value.length ? (n(),
            a("div", Wm, [t("div", {
                class: M(["GameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: c
            }, [z(y, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", Em, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["GameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: p
            }, [z(y, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const Fm = K(Vm, [["__scopeId", "data-v-c9e4cd08"]])
  , jm = {
    class: "Trend__C"
}
  , Hm = {
    class: "Trend__C-body1"
}
  , Um = {
    class: "Trend__C-nav"
}
  , Km = ["onClick"]
  , Xm = {
    class: "Trend__C-body1-line"
}
  , Qm = {
    key: 0,
    class: "Trend__C-body1-line"
}
  , Ym = {
    class: "Trend__C-body1-line-num"
}
  , Jm = {
    key: 1,
    class: "Trend__C-body1-line"
}
  , Zm = {
    class: "Trend__C-body1-line-num"
}
  , t_ = {
    key: 2,
    class: "Trend__C-body1-line"
}
  , i_ = {
    class: "Trend__C-body1-line-num"
}
  , e_ = {
    key: 3,
    class: "Trend__C-body1-line"
}
  , n_ = {
    class: "Trend__C-body1-line-num"
}
  , a_ = {
    class: "Trend__C-head"
}
  , o_ = {
    class: "Trend__C-body2"
}
  , s_ = ["IssueNumber", "Number", "Colour", "rowId"]
  , l_ = {
    class: "Trend__C-body2-IssueNumber"
}
  , c_ = {
    class: "Trend__C-body2-Num"
}
  , r_ = ["id"]
  , u_ = {
    key: 1,
    class: "Trend__C-body2-empty"
}
  , d_ = {
    key: 0,
    class: "Trend__C-foot"
}
  , p_ = {
    class: "Trend__C-foot-page"
}
  , g_ = H({
    __name: "Trend",
    props: {
        typeid: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , u = h([])
          , g = h([])
          , b = h()
          , d = h()
          , c = h()
          , p = h()
          , o = h()
          , _ = h(["A", "B", "C", "D", "E"])
          , m = h(0)
          , T = h(1)
          , f = h(4);
        function y() {
            ti(()=>{
                for (let I = 0; I < g.value.length; I++)
                    g.value[I + 1] && w(g.value[I], g.value[I + 1])
            }
            )
        }
        const $ = I=>{
            m.value = I,
            L(!0)
        }
        ;
        function w(I, N) {
            let x = parseInt(I.number)
              , R = parseInt(N.number);
            var O = document.getElementById("myCanvas" + I.rowId);
            if (O && O.getContext) {
                var P = O.getContext("2d");
                P.clearRect(0, 0, O.width, O.height),
                P.beginPath(),
                P.moveTo(x == 0 ? 14 : x * 27 + 14, 0),
                P.lineTo(R == 0 ? 14 : R * 27 + 14, O.height),
                P.strokeStyle = "red",
                P.stroke(),
                P.closePath()
            }
        }
        const k = ()=>{
            T.value--,
            C()
        }
          , v = ()=>{
            T.value++,
            C()
        }
          , L = async(I=!1)=>{
            if (s.typeid == null)
                return;
            C(),
            I && (T.value = 1);
            const N = await ot(ls({
                typeId: s.typeid,
                typeNumber: m.value + 1
            }));
            if (N) {
                const x = Object.keys(N.data[0]).filter(R=>R.startsWith("number_"));
                u.value = N.data.filter(R=>R.type_Number == m.value + 1).map(R=>{
                    const O = {
                        list: [],
                        type: 0
                    };
                    return O.type = R.type,
                    O.list = [],
                    x.forEach(P=>{
                        O.list.push(R[P])
                    }
                    ),
                    O
                }
                )
            }
            b.value = u.value.find(x=>x.type == 1),
            d.value = u.value.find(x=>x.type == 2),
            c.value = u.value.find(x=>x.type == 3),
            p.value = u.value.find(x=>x.type == 4),
            o.value = u.value.find(x=>x.type == 5)
        }
          , C = async(I=!1)=>{
            if (s.typeid == null)
                return;
            I && (T.value = 1);
            const N = await ot(ga({
                pageSize: 10,
                pageNo: T.value,
                typeId: s.typeid
            }));
            N && (g.value = N.data.list.map((x,R)=>(x.rowId = R,
            x.number = x.premium[m.value],
            x)) || []),
            f.value = (N == null ? void 0 : N.data.totalPage) || 0,
            y()
        }
        ;
        return e({
            getData: L
        }),
        ki(()=>{
            L()
        }
        ),
        (I,N)=>{
            const x = j("van-col")
              , R = j("van-row")
              , O = j("van-icon");
            return n(),
            a("div", jm, [t("div", Hm, [t("div", Um, [(n(!0),
            a(S, null, G(_.value, (P,F)=>(n(),
            a("div", {
                key: F,
                class: M({
                    active: m.value == F
                }),
                onClick: X=>$(F)
            }, i(P), 11, Km))), 128))]), t("div", Xm, i(I.$t("trendDesc1")), 1), d.value ? (n(),
            a("div", Qm, [t("div", null, i(I.$t("trendDesc3")), 1), t("div", Ym, [(n(!0),
            a(S, null, G(d.value.list, (P,F)=>(n(),
            a("div", {
                key: "2" + F
            }, i(P), 1))), 128))])])) : B("", !0), p.value ? (n(),
            a("div", Jm, [t("div", null, i(I.$t("trendDesc4")), 1), t("div", Zm, [(n(!0),
            a(S, null, G(p.value.list, (P,F)=>(n(),
            a("div", {
                key: "4" + F
            }, i(P), 1))), 128))])])) : B("", !0), b.value ? (n(),
            a("div", t_, [t("div", null, i(I.$t("trendDesc5")), 1), t("div", i_, [(n(!0),
            a(S, null, G(b.value.list, (P,F)=>(n(),
            a("div", {
                key: "5" + F
            }, i(P), 1))), 128))])])) : B("", !0), c.value ? (n(),
            a("div", e_, [t("div", null, i(I.$t("trendDesc6")), 1), t("div", n_, [(n(!0),
            a(S, null, G(c.value.list, (P,F)=>(n(),
            a("div", {
                key: "3" + F
            }, i(P), 1))), 128))])])) : B("", !0)]), t("div", a_, [z(R, null, {
                default: D(()=>[z(x, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(I.$t("betIssue")), 1)]),
                    _: 1
                }), z(x, {
                    span: "16"
                }, {
                    default: D(()=>[E(i(I.$t("number")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", o_, [g.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (P,F)=>(n(),
            a("div", {
                key: F,
                IssueNumber: P.issueNumber,
                Number: P.number,
                Colour: P.colour,
                rowId: P.rowId
            }, [z(R, null, {
                default: D(()=>[z(x, {
                    span: "8"
                }, {
                    default: D(()=>[t("div", l_, i(P.issueNumber), 1)]),
                    _: 2
                }, 1024), z(x, {
                    span: "16"
                }, {
                    default: D(()=>[t("div", c_, [t("canvas", {
                        canvas: "",
                        id: "myCanvas" + P.rowId,
                        ref_for: !0,
                        ref: "canvas",
                        class: "line-canvas"
                    }, null, 8, r_), (n(),
                    a(S, null, G(10, X=>t("div", {
                        class: M(["Trend__C-body2-Num-item", {
                            action: Number(P.number) == X - 1
                        }]),
                        key: X
                    }, i(X - 1), 3)), 64)), t("div", {
                        class: M(["Trend__C-body2-Num-BS", {
                            isB: Number(P.number) > 4
                        }])
                    }, i(Number(P.number) > 4 ? "H" : "L"), 3), t("div", {
                        class: M(["Trend__C-body2-Num-OE", {
                            isE: Number(P.number) % 2
                        }])
                    }, i(Number(P.number) % 2 ? "O" : "E"), 3)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024)], 8, s_))), 128)) : (n(),
            a("div", u_, [z(ri)]))]), g.value.length ? (n(),
            a("div", d_, [t("div", {
                class: M(["Trend__C-foot-previous", {
                    disabled: T.value <= 1
                }]),
                onClick: k
            }, [z(O, {
                name: "arrow-left",
                class: "Trend__C-icon",
                size: "20"
            })], 2), t("div", p_, i(T.value) + "/" + i(f.value), 1), t("div", {
                class: M(["Trend__C-foot-next", {
                    disabled: T.value >= f.value
                }]),
                onClick: v
            }, [z(O, {
                name: "arrow",
                class: "Trend__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const b_ = K(g_, [["__scopeId", "data-v-bc93e4ae"]])
  , m_ = {
    class: "MyGameRecordList__C"
}
  , __ = ["onClick"]
  , h_ = {
    class: "MyGameRecordList__C-item-m"
}
  , v_ = {
    class: "MyGameRecordList__C-item-m-top"
}
  , k_ = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , f_ = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , y_ = {
    class: "MyGameRecordList__C-detail-text"
}
  , $_ = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
}
  , T_ = ["onClick"]
  , w_ = ["src"]
  , C_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , N_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , L_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , z_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , I_ = {
    class: "red"
}
  , x_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , R_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , S_ = {
    key: 0,
    class: "numList"
}
  , M_ = {
    key: 1
}
  , B_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , G_ = {
    class: "line1"
}
  , P_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , D_ = {
    key: 1
}
  , A_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , O_ = {
    key: 1
}
  , q_ = {
    class: "MyGameRecordList__C-detail-line"
}
  , W_ = H({
    __name: "MayrecordList",
    props: {
        mayrecord: {}
    },
    setup(l) {
        const {t: e} = kt()
          , s = h(-1)
          , u = c=>["", "A", "B", "C", "D", "E"][c]
          , g = c=>{
            switch (c) {
            case "L":
                return e("k3Small");
            case "O":
                return e("k3Odd");
            case "E":
                return e("k3Even");
            case "H":
                return e("k3Big");
            default:
                return c
            }
        }
          , b = c=>{
            s.value == c ? s.value = -1 : s.value = c
        }
          , d = c=>{
            switch (c) {
            case "E":
                return "Even";
            case "O":
                return "Odd";
            case "H":
                return "Big";
            case "L":
                return "Small";
            default:
                return c
            }
        }
        ;
        return (c,p)=>(n(),
        a("div", m_, [(n(!0),
        a(S, null, G(c.mayrecord, (o,_)=>(n(),
        a(S, {
            key: _
        }, [t("div", {
            class: "MyGameRecordList__C-item",
            onClick: hi(m=>b(_), ["stop", "prevent"])
        }, [t("div", {
            class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + o.selectType]])
        }, i(d(o.selectType)), 3), t("div", h_, [t("div", v_, i(o.issueNumber), 1), t("div", k_, i(o.addTime), 1)]), o.profitAmount ? (n(),
        a("div", {
            key: 0,
            class: M(["MyGameRecordList__C-item-r", {
                success: o.state
            }])
        }, [o.profitAmount ? (n(),
        a("div", {
            key: 0,
            class: M({
                success: o.state
            })
        }, i(o.state ? c.$t("success") : c.$t("fail")), 3)) : B("", !0), t("span", null, i(`${o.state ? "+" : "-"}${r(Rt)(o.profitAmount)}`), 1)], 2)) : B("", !0)], 8, __), _ == s.value ? (n(),
        a("div", f_, [t("div", y_, i(c.$t("detailMay")), 1), o.orderNumber ? (n(),
        a("div", $_, [E(i(c.$t("orderNoMay")) + " ", 1), t("div", {
            onClick: m=>r(ji)(o.orderNumber)
        }, [E(i(o.orderNumber) + " ", 1), t("img", {
            src: r(tt)("home/AllLotteryGames/WinGo", "copy")
        }, null, 8, w_)], 8, T_)])) : B("", !0), t("div", C_, [E(i(c.$t("issueMay")) + " ", 1), t("div", null, i(o.issueNumber), 1)]), t("div", N_, [E(i(c.$t("amountMay")) + " ", 1), t("div", null, i(r(Rt)(o.amount)), 1)]), t("div", L_, [E(i(c.$t("numMay")) + " ", 1), t("div", null, i(o.betCount), 1)]), t("div", z_, [E(i(c.$t("afterTaxAmount")) + " ", 1), t("div", I_, i(r(Rt)(o.realAmount)), 1)]), t("div", x_, [E(i(c.$t("tax")) + " ", 1), t("div", null, i(r(Rt)(o.fee)), 1)]), t("div", R_, [E(i(c.$t("resultMay")) + " ", 1), o.premium ? (n(),
        a("div", S_, [(n(!0),
        a(S, null, G(o.premium, (m,T)=>(n(),
        a("div", {
            key: T
        }, i(m), 1))), 128))])) : (n(),
        a("div", M_, "--"))]), t("div", B_, [E(i(c.$t("selectMay")) + " ", 1), t("div", G_, [t("div", null, i(u(o.gameType)), 1), (n(!0),
        a(S, null, G(o.selectType.split("|"), (m,T)=>(n(),
        a("div", {
            class: "num",
            key: T
        }, i(g(m)), 1))), 128))])]), t("div", P_, [E(i(c.$t("statusMay")) + " ", 1), o.state != 2 ? (n(),
        a("div", {
            key: 0,
            class: M([o.state ? "green" : "red"])
        }, i(o.state ? c.$t("success") : c.$t("fail")), 3)) : (n(),
        a("div", D_, i(c.$t("unsettled")), 1))]), t("div", A_, [E(i(c.$t("winOrLose")) + " ", 1), o.state != 2 ? (n(),
        a("div", {
            key: 0,
            class: M([o.state ? "green" : "red"])
        }, i(`${o.state ? "+" : "-"} ${r(Rt)(o.profitAmount)}`), 3)) : (n(),
        a("div", O_, "--"))]), t("div", q_, [E(i(c.$t("createTime")) + " ", 1), t("div", null, i(o.addTime), 1)])])) : B("", !0)], 64))), 128))]))
    }
});
const Ma = K(W_, [["__scopeId", "data-v-1f0cbdc6"]])
  , E_ = {
    class: "MyGameRecord__C"
}
  , V_ = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , F_ = {
    class: "MyGameRecord__C-body"
}
  , j_ = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
}
  , H_ = {
    key: 1,
    class: "MyGameRecord__C-foot"
}
  , U_ = {
    class: "MyGameRecord__C-foot-page"
}
  , K_ = H({
    __name: "MyGameRecord",
    props: {
        typeid: {},
        goPathName: {},
        hasHead: {
            type: Boolean,
            default: !0
        }
    },
    setup(l, {expose: e}) {
        const s = l
          , u = ft()
          , g = h(4)
          , b = h(20)
          , d = h(1)
          , c = h([])
          , p = T=>{
            u.push({
                name: T
            })
        }
          , o = ()=>{
            d.value--,
            m()
        }
          , _ = ()=>{
            d.value++,
            m()
        }
          , m = async(T=!1)=>{
            if (s.typeid == null)
                return;
            T && (d.value = 1);
            const f = await ot(ba({
                pageSize: b.value,
                pageNo: d.value,
                typeId: s.typeid
            }));
            c.value = (f == null ? void 0 : f.data.list) || [],
            g.value = (f == null ? void 0 : f.data.totalPage) || 0
        }
        ;
        return e({
            getData: m
        }),
        ki(()=>{
            m()
        }
        ),
        (T,f)=>{
            const y = j("van-icon");
            return n(),
            a("div", E_, [T.hasHead ? (n(),
            a("div", V_, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: f[0] || (f[0] = $=>p(T.goPathName))
            }, i(T.$t("more")), 1)])) : B("", !0), t("div", F_, [c.value.length ? (n(),
            it(Ma, {
                key: 0,
                mayrecord: c.value
            }, null, 8, ["mayrecord"])) : (n(),
            a("div", j_, [z(ri)]))]), c.value.length ? (n(),
            a("div", H_, [t("div", {
                class: M(["MyGameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: o
            }, [z(y, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", U_, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["MyGameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: _
            }, [z(y, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const Ba = K(K_, [["__scopeId", "data-v-71dd9c4e"]])
  , X_ = l=>(Gt("data-v-734f0079"),
l = l(),
Pt(),
l)
  , Q_ = {
    class: "FDP__C"
}
  , Y_ = {
    class: "FDP__C-text"
}
  , J_ = {
    class: "FDP__C-list"
}
  , Z_ = {
    class: "num"
}
  , th = {
    class: "letter"
}
  , ih = X_(()=>t("div", {
    class: "FDP__C-symbol"
}, "=", -1))
  , eh = {
    class: "FDP__C-sum"
}
  , nh = H({
    __name: "premium",
    props: {
        sumCount: {
            type: Number,
            default: 0
        },
        premium: {
            type: String,
            default: "00000"
        }
    },
    setup(l) {
        const e = l
          , s = Q(()=>[...e.premium])
          , u = h(["A", "B", "C", "D", "E"]);
        return (g,b)=>(n(),
        a("div", Q_, [t("div", Y_, i(g.$t("betResult")), 1), t("div", J_, [(n(!0),
        a(S, null, G(s.value, (d,c)=>(n(),
        a("div", {
            key: c
        }, [t("div", Z_, i(d), 1), t("div", th, i(u.value[c]), 1)]))), 128))]), ih, t("div", eh, i(l.sumCount), 1)]))
    }
});
const ah = K(nh, [["__scopeId", "data-v-734f0079"]])
  , oh = l=>(Gt("data-v-76bd2203"),
l = l(),
Pt(),
l)
  , sh = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , lh = {
    class: "WinningTip__C-body-l2"
}
  , ch = {
    class: "line1"
}
  , rh = {
    class: "title"
}
  , uh = {
    class: "num"
}
  , dh = oh(()=>t("div", {
    class: "title sum"
}, "SUM", -1))
  , ph = {
    class: "num"
}
  , gh = {
    class: "WinningTip__C-body-l3"
}
  , bh = {
    key: 0,
    class: "isLose"
}
  , mh = {
    class: "head"
}
  , _h = {
    class: "bonus"
}
  , hh = {
    class: "gameDetail"
}
  , vh = {
    class: "WinningTip__C-body-l4"
}
  , kh = ["onClick"]
  , fh = H({
    __name: "WinningTips",
    setup(l, {expose: e}) {
        const s = Q(()=>b.value[0] ? b.value[0].state == 0 : !1)
          , u = Q(()=>b.value[0] || {})
          , g = h(!1)
          , b = h([])
          , d = h(["A", "B", "C", "D", "E", "SUM"]);
        let c = h();
        const p = ()=>{
            clearTimeout(c.value),
            b.value.shift(),
            g.value && b.value.length && (c.value = setTimeout(()=>{
                p()
            }
            , 1e3 * 3))
        }
          , o = ()=>{
            g.value = !g.value,
            g.value ? c.value = setTimeout(()=>{
                p()
            }
            , 1e3 * 3) : clearTimeout(c.value)
        }
          , _ = T=>{
            T.list = T.premium.split(""),
            T.sum = T.sumCount,
            b.value.push(T),
            g.value && (c.value = setTimeout(()=>{
                p()
            }
            , 1e3 * 3))
        }
          , m = ()=>{
            b.value = []
        }
        ;
        return e({
            showMark: _
        }),
        (T,f)=>pt((n(),
        a("div", {
            class: "WinningTip__C",
            onClick: p
        }, [t("div", {
            class: M(["WinningTip__C-body", {
                isL: s.value
            }])
        }, [s.value ? (n(),
        a("div", {
            key: 0,
            class: M(["WinningTip__C-body-l1", {
                isL: s.value
            }])
        }, i(T.$t("k3WarningTip1")), 3)) : (n(),
        a("div", sh, i(T.$t("k3WarningTip2")), 1)), t("div", lh, [E(i(T.$t("betResult")) + " ", 1), t("div", ch, [(n(!0),
        a(S, null, G(u.value.list, (y,$)=>(n(),
        a("div", {
            key: $
        }, [t("div", rh, i(d.value[$]), 1), t("div", uh, i(y), 1)]))), 128)), t("div", null, [dh, t("div", ph, i(u.value.sum), 1)])])]), t("div", gh, [s.value ? (n(),
        a("div", bh, i(T.$t("k3WarningTip3")), 1)) : (n(),
        a(S, {
            key: 1
        }, [t("div", mh, i(T.$t("k3WarningTip4")), 1), t("div", _h, i(r(Rt)(Number(u.value.winAmount))), 1)], 64)), t("div", hh, i(T.$t("k3WarningTip5")) + i(u.value.typeName) + " " + i(u.value.issueNumber), 1)]), t("div", vh, [t("div", {
            class: M(["acitveBtn", {
                active: g.value
            }]),
            onClick: hi(o, ["stop"])
        }, null, 10, kh), E(" " + i(T.$t("autoShutOff3s")), 1)]), t("div", {
            class: "closeBtn",
            onClick: m
        })], 2)], 512)), [[ci, b.value.length]])
    }
});
const yh = K(fh, [["__scopeId", "data-v-76bd2203"]])
  , $h = "/assets/mp3/di1-0f3d86cb.mp3"
  , Th = "/assets/mp3/di2-ad9aa8fb.mp3"
  , wh = ["muted"]
  , Ch = t("source", {
    src: $h,
    type: "audio/mpeg"
}, null, -1)
  , Nh = [Ch]
  , Lh = ["muted"]
  , zh = t("source", {
    src: Th,
    type: "audio/mpeg"
}, null, -1)
  , Ih = [zh]
  , Be = H({
    __name: "audio",
    setup(l) {
        const e = h(!1);
        At(()=>pi().visibility, u=>{
            u === 0 ? e.value = !0 : setTimeout(()=>{
                e.value = !1
            }
            , 500)
        }
        );
        const s = ()=>{
            e.value = !0,
            ti(()=>{
                const u = document.getElementById("voice1")
                  , g = document.getElementById("voice2");
                u.play(),
                g.play(),
                u.pause(),
                g.pause(),
                e.value = !1,
                document.removeEventListener("touchstart", s)
            }
            )
        }
        ;
        return Ct(()=>{
            document.addEventListener("touchstart", s)
        }
        ),
        (u,g)=>(n(),
        a(S, null, [t("audio", {
            id: "voice1",
            muted: e.value
        }, Nh, 8, wh), t("audio", {
            id: "voice2",
            muted: e.value
        }, Ih, 8, Lh)], 64))
    }
})
  , xh = {
    class: "FD__C"
}
  , Rh = {
    class: "FD__C-head-more"
}
  , Sh = H({
    __name: "index",
    setup(l) {
        const s = de().query.typeId
          , u = {
            GameRecord: Fm,
            Trend: b_,
            MyGameRecord: Ba
        }
          , g = h()
          , b = h()
          , d = h()
          , c = h()
          , p = h(!1)
          , o = h("GameRecord")
          , _ = ft()
          , m = Ui()
          , T = m.get5D
          , f = h(0)
          , y = h(localStorage.getItem("volumeShow") || "1")
          , $ = h(!1)
          , w = h(null)
          , k = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , v = h(5)
          , L = h("")
          , C = h(!1)
          , I = h(null)
          , N = h("00000")
          , x = h(0)
          , R = Q(()=>T[f.value] || {})
          , O = Ei()
          , P = Q(()=>O.getIsShowLotteryDragon);
        Ct(()=>{
            dt()
        }
        ),
        Hi(()=>{
            clearInterval(w.value),
            yt.value.forEach(Y=>{
                clearInterval(Y)
            }
            ),
            Tt.value && clearTimeout(Tt.value)
        }
        ),
        At(()=>pi().visibility, Y=>{
            Y === 0 ? clearInterval(w.value) : (dt(),
            st(f.value))
        }
        );
        const F = ()=>{
            sessionStorage.setItem("clickedGameType", "lottery"),
            _.push({
                path: "/"
            })
        }
          , X = ()=>{
            y.value == "1" ? y.value = "2" : y.value = "1",
            localStorage.setItem("volumeShow", y.value)
        }
          , at = Y=>{
            _.push({
                name: Y
            })
        }
          , dt = ()=>{
            const Y = T.findIndex(et=>et.typeID == s);
            st(Y !== -1 ? Y : 0)
        }
          , lt = async(Y,et=!1)=>{
            const [A,nt] = await Zt(rs({
                typeId: Y
            }));
            N.value = nt.premium,
            x.value = nt.sumCount,
            et && c.value.animationShow()
        }
          , st = Y=>{
            m.get5DData(),
            f.value = Y,
            I.value = T[Y].typeID,
            J(I.value),
            ti(()=>{
                g.value.getData(I.value)
            }
            )
        }
          , J = async(Y,et=!1)=>{
            lt(Y, et);
            const [A,nt] = await Zt(cs({
                typeId: Y
            }));
            k.value.gameNo = nt.issueNumber,
            k.value.currentTime = nt.serviceTime.replace(/-/g, "/"),
            k.value.beginTime = nt.startTime.replace(/-/g, "/"),
            mt()
        }
          , mt = ()=>{
            if (!T.length)
                return;
            var Y = new Date(k.value.currentTime).getTime()
              , et = new Date(k.value.beginTime).getTime();
            let A = (Y - et) / 1e3
              , nt = T[f.value];
            if (A > nt.intervalM * 60 && (A = nt.intervalM * 60),
            k.value.passTime = nt.intervalM * 60 - A,
            k.value.passTime < 0) {
                L.value = "An error occurred, please contact customer service。The game time is " + nt.intervalM + " minutes,start time is " + k.value.beginTime + ",current time is" + k.value.currentTime + "!",
                $.value = !0;
                return
            }
            Mt()
        }
          , Mt = ()=>{
            clearInterval(w.value),
            Et(!1),
            w.value = setInterval(function() {
                Et()
            }, 1e3)
        }
          , Et = (Y=!0)=>{
            if (k.value.passTime <= v.value && (C.value = !1),
            y.value == "1" && (k.value.passTime <= v.value && k.value.passTime > 1 ? gt(1) : k.value.passTime == 1 && gt(2)),
            k.value.passTime > 0) {
                let et = k.value.passTime;
                k.value.time2 = Math.floor(et / 60),
                k.value.time3 = Math.floor(et % 60 / 10),
                k.value.time4 = Math.floor(et % 10),
                k.value.passTime--
            } else
                clearInterval(w.value),
                Y && qt()
        }
          , gt = (Y=1)=>{
            const et = document.getElementById(`voice${Y}`);
            et && (et.currentTime = 0,
            et.play())
        }
          , qt = ()=>{
            J(I.value, !0),
            d.value.getWinsUserAmount(!1),
            g.value.getData(!0)
        }
          , Ft = h({})
          , yt = h([])
          , wt = Y=>{
            if (d.value.getWinsUserAmount(!1),
            g.value.getData(),
            Ft.value[Y])
                return;
            Ft.value[Y] = !0;
            const {time1: et, time2: A, time3: nt, time4: $t} = k.value
              , Bt = (et * 10 * 60 + A * 60 + nt * 10 + $t) * 1e3;
            yt.value[R.value.intervalM] = setTimeout(()=>{
                ct(Y)
            }
            , Bt)
        }
          , Nt = Y=>{
            p.value = Y
        }
          , Tt = h(null)
          , ct = async Y=>{
            const [et,A] = await Zt(us({
                issueNumber: Y
            }));
            if (A.data)
                if (A.data.state != 2)
                    b.value.showMark(A.data),
                    delete Ft.value[Y];
                else {
                    Tt.value = setTimeout(()=>{
                        ct(Y)
                    }
                    , 2e3);
                    return
                }
        }
        ;
        return (Y,et)=>{
            const A = j("NavBar");
            return n(),
            a("div", xh, [z(A, {
                "left-arrow": "",
                onClickLeft: F,
                "background-color": "#3F3F3F",
                headLogo: !0
            }, {
                right: D(()=>[t("div", Rh, [t("div", {
                    onClick: et[0] || (et[0] = nt=>at("CustomerService"))
                }), t("div", {
                    class: M({
                        disableVoice: y.value == "2"
                    }),
                    onClick: X
                }, null, 2)])]),
                _: 1
            }), z(xe, {
                ref_key: "WallteRef",
                ref: d
            }, null, 512), z(ke, {
                key: "5d"
            }), z(Re, {
                gameList: r(T),
                currentGameIndex: f.value,
                onChangeGame: st
            }, null, 8, ["gameList", "currentGameIndex"]), z(ah, {
                premium: N.value,
                sumCount: x.value
            }, null, 8, ["premium", "sumCount"]), z(Yb, {
                ref_key: "tiemLeftRef",
                ref: c,
                currentInfo: k.value,
                premium: N.value,
                currentGame: R.value
            }, null, 8, ["currentInfo", "premium", "currentGame"]), z(xm, {
                currentInfo: k.value,
                currentGame: R.value,
                VoiceType: y.value,
                typeid: I.value,
                onBetting: wt,
                onChangeBettingP: Nt
            }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), z(Me, {
                record: o.value,
                onChangeC: et[1] || (et[1] = nt=>o.value = nt)
            }, null, 8, ["record"]), (n(),
            it(Yi, null, [(n(),
            it(vi(u[o.value]), {
                ref_key: "RecordComponent",
                ref: g,
                typeid: I.value,
                EmerdApi: r(ma),
                goPathName: "AllLotteryGames-BettingRecord5D"
            }, null, 8, ["typeid", "EmerdApi"]))], 1024)), z(xi, {
                show: $.value,
                onConfirm: et[2] || (et[2] = nt=>at("/login"))
            }, {
                content: D(()=>[t("div", null, i(L.value), 1)]),
                _: 1
            }, 8, ["show"]), z(yh, {
                ref_key: "WinningTipsRef",
                ref: b
            }, null, 512), P.value ? (n(),
            it(Ie, {
                key: 0
            })) : B("", !0), z(Be)])
        }
    }
});
const Mh = K(Sh, [["__scopeId", "data-v-a43af5bc"]])
  , kx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Mh
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Bh = {
    class: "BettingRecord5D__C"
}
  , Gh = {
    class: "BettingRecord5D__C-nav"
}
  , Ph = {
    class: "BettingRecord5D__C-list"
}
  , Dh = {
    key: 0,
    class: "BettingRecord5D__C-foot"
}
  , Ah = {
    class: "BettingRecord5D__C-foot-page"
}
  , Oh = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = h(Xr)
          , u = h([])
          , g = h(0)
          , b = h(1)
          , d = h(4)
          , c = y=>{
            p.value = y.name,
            b.value = 1,
            o()
        }
          , p = h(0)
          , o = async()=>{
            const y = await ot(ba({
                pageSize: 20,
                pageNo: b.value,
                typeId: p.value
            }));
            u.value = (y == null ? void 0 : y.data.list) || [],
            d.value = (y == null ? void 0 : y.data.totalPage) || 0
        }
          , _ = ()=>{
            p.value = s.value[0].typeID,
            o()
        }
        ;
        function m() {
            e.go(-1)
        }
        const T = ()=>{
            b.value--,
            o()
        }
          , f = ()=>{
            b.value++,
            o()
        }
        ;
        return Ct(()=>{
            _()
        }
        ),
        (y,$)=>{
            const w = j("van-tab")
              , k = j("van-tabs")
              , v = j("van-icon");
            return n(),
            a("div", Bh, [t("div", {
                class: "BettingRecord5D__C-head"
            }, [t("div", {
                class: "BettingRecord5D__C-head-bcak",
                onClick: m
            }), E(" 5D Lotre ")]), t("div", Gh, [z(k, {
                active: g.value,
                "onUpdate:active": $[0] || ($[0] = L=>g.value = L),
                onClickTab: c
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(s.value, (L,C)=>(n(),
                it(w, {
                    key: C,
                    title: L.tabName,
                    name: L.typeID
                }, null, 8, ["title", "name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", Ph, [z(Ma, {
                mayrecord: u.value
            }, null, 8, ["mayrecord"])]), u.value.length ? (n(),
            a("div", Dh, [t("div", {
                class: M(["BettingRecord5D__C-foot-previous", {
                    disabled: b.value <= 1
                }]),
                onClick: T
            }, [z(v, {
                name: "arrow-left",
                class: "BettingRecord5D__C-icon",
                size: "20"
            })], 2), t("div", Ah, i(b.value) + "/" + i(d.value), 1), t("div", {
                class: M(["BettingRecord5D__C-foot-next", {
                    disabled: b.value >= d.value
                }]),
                onClick: f
            }, [z(v, {
                name: "arrow",
                class: "BettingRecord5D__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const qh = K(Oh, [["__scopeId", "data-v-e54b821b"]])
  , fx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: qh
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wh = {
    class: "MyGameRecordList__C"
}
  , Eh = ["onClick"]
  , Vh = {
    class: "MyGameRecordList__C-item-m"
}
  , Fh = {
    class: "MyGameRecordList__C-item-m-top"
}
  , jh = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , Hh = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , Uh = {
    class: "MyGameRecordList__C-detail-text"
}
  , Kh = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
}
  , Xh = ["onClick"]
  , Qh = ["src"]
  , Yh = {
    class: "MyGameRecordList__C-detail-line"
}
  , Jh = {
    class: "MyGameRecordList__C-detail-line"
}
  , Zh = {
    class: "MyGameRecordList__C-detail-line"
}
  , tv = {
    class: "MyGameRecordList__C-detail-line"
}
  , iv = {
    class: "red"
}
  , ev = {
    class: "MyGameRecordList__C-detail-line"
}
  , nv = {
    class: "MyGameRecordList__C-detail-line"
}
  , av = {
    key: 0,
    class: "numList"
}
  , ov = {
    key: 1
}
  , sv = {
    class: "MyGameRecordList__C-detail-line noLine"
}
  , lv = {
    key: 0,
    class: "line1"
}
  , cv = {
    key: 1,
    class: "line1"
}
  , rv = {
    class: ""
}
  , uv = {
    class: ""
}
  , dv = {
    key: 2,
    class: "line1"
}
  , pv = {
    class: ""
}
  , gv = {
    key: 1,
    class: "btn actionBtn"
}
  , bv = {
    key: 3,
    class: "line1"
}
  , mv = {
    class: ""
}
  , _v = {
    key: 1,
    class: "actionBtn"
}
  , hv = {
    class: ""
}
  , vv = {
    class: "MyGameRecordList__C-detail-line"
}
  , kv = {
    key: 1
}
  , fv = {
    class: "MyGameRecordList__C-detail-line"
}
  , yv = {
    key: 1
}
  , $v = {
    class: "MyGameRecordList__C-detail-line"
}
  , Tv = H({
    __name: "MayrecordList",
    props: {
        mayrecord: {}
    },
    setup(l) {
        const {t: e} = kt()
          , s = h(-1)
          , u = c=>{
            switch (c) {
            case "H":
                return e("k3Big");
            case "L":
                return e("k3Small");
            case "O":
                return e("k3Odd");
            case "E":
                return e("k3Even");
            default:
                return c
            }
        }
          , g = c=>{
            s.value == c ? s.value = -1 : s.value = c
        }
          , b = c=>{
            var p, o;
            if (c.gameType == "3") {
                if (c.selectType == "|AAA|")
                    return "3=";
                if (c.oneList.length)
                    return c.oneList[0]
            }
            if (c.gameType == "4")
                return c.selectType == "|ABC|" ? "3≠" : c.threeList.length ? `${c.threeList.join("")}` : `${c.oneList.join("")}`;
            if ((p = c.towList) != null && p.length)
                return c.towList[0];
            if ((o = c.oneList) != null && o.length)
                switch (c.oneList[0]) {
                case "H":
                    return "Big";
                case "L":
                    return "Small";
                case "O":
                    return "Odd";
                case "E":
                    return "Even";
                default:
                    return c.oneList[0]
                }
        }
          , d = c=>{
            var p, o;
            if ((p = c.towList) != null && p.length)
                return "num";
            if ((o = c.oneList) != null && o.length)
                return c.oneList[0].length > 2 ? "num" : c.oneList[0]
        }
        ;
        return (c,p)=>(n(),
        a("div", Wh, [(n(!0),
        a(S, null, G(c.mayrecord, (o,_)=>(n(),
        a(S, {
            key: _
        }, [t("div", {
            class: "MyGameRecordList__C-item",
            onClick: hi(m=>g(_), ["stop", "prevent"])
        }, [t("div", {
            class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + d(o)]])
        }, i(b(o)), 3), t("div", Vh, [t("div", Fh, i(o.issueNumber), 1), t("div", jh, i(o.addTime), 1)]), o.profitAmount ? (n(),
        a("div", {
            key: 0,
            class: M(["MyGameRecordList__C-item-r", {
                success: o.state
            }])
        }, [o.profitAmount ? (n(),
        a("div", {
            key: 0,
            class: M({
                success: o.state
            })
        }, i(o.state ? c.$t("success") : c.$t("fail")), 3)) : B("", !0), t("span", null, i(`${o.state ? "+" : "-"}${r(Rt)(o.profitAmount)}`), 1)], 2)) : B("", !0)], 8, Eh), _ == s.value ? (n(),
        a("div", Hh, [t("div", Uh, i(c.$t("detailMay")), 1), o.orderNumber ? (n(),
        a("div", Kh, [E(i(c.$t("orderNoMay")) + " ", 1), t("div", {
            onClick: m=>r(ji)(o.orderNumber)
        }, [E(i(o.orderNumber) + " ", 1), t("img", {
            src: r(tt)("home/AllLotteryGames/WinGo", "copy")
        }, null, 8, Qh)], 8, Xh)])) : B("", !0), t("div", Yh, [E(i(c.$t("issueMay")) + " ", 1), t("div", null, i(o.issueNumber), 1)]), t("div", Jh, [E(i(c.$t("amountMay")) + " ", 1), t("div", null, i(r(Rt)(o.amount)), 1)]), t("div", Zh, [E(i(c.$t("numMay")) + " ", 1), t("div", null, i(o.betCount), 1)]), t("div", tv, [E(i(c.$t("afterTaxAmount")) + " ", 1), t("div", iv, i(r(Rt)(o.realAmount)), 1)]), t("div", ev, [E(i(c.$t("tax")) + " ", 1), t("div", null, i(r(Rt)(o.fee)), 1)]), t("div", nv, [E(i(c.$t("resultMay")) + " ", 1), o.premium ? (n(),
        a("div", av, [(n(!0),
        a(S, null, G(o.premium, (m,T)=>(n(),
        a("div", {
            key: T,
            class: M(["n" + m])
        }, null, 2))), 128))])) : (n(),
        a("div", ov, "--"))]), t("div", sv, [E(i(c.$t("selectMay")) + " ", 1), o.gameType == 1 ? (n(),
        a("div", lv, [o.oneList.length > 0 ? (n(),
        a(S, {
            key: 0
        }, [t("span", null, i(c.$t("k3RecordDesc1")), 1), (n(!0),
        a(S, null, G(o.oneList, (m,T)=>(n(),
        a("span", {
            key: T + "1",
            class: "btn"
        }, i(u(m)), 1))), 128))], 64)) : B("", !0)])) : B("", !0), o.gameType == 2 ? (n(),
        a("div", cv, [o.oneList.length > 0 ? (n(),
        a(S, {
            key: 0
        }, [t("span", rv, i(c.$t("k3RecordDesc2")), 1), (n(!0),
        a(S, null, G(o.oneList, (m,T)=>(n(),
        a("span", {
            class: "btn actionViolet",
            key: T + "1"
        }, i(m), 1))), 128))], 64)) : B("", !0), o.towList.length > 0 ? (n(),
        a(S, {
            key: 1
        }, [t("span", uv, i(c.$t("k3RecordDesc3")), 1), (n(!0),
        a(S, null, G(o.towList, (m,T)=>(n(),
        a("span", {
            class: "btn actionRedGreen",
            key: T + "1"
        }, i(m), 1))), 128))], 64)) : B("", !0)])) : B("", !0), o.gameType == 3 ? (n(),
        a("div", dv, [o.oneList.length > 0 ? (n(),
        a(S, {
            key: 0
        }, [t("span", pv, i(c.$t("k3RecordDesc4")), 1), (n(!0),
        a(S, null, G(o.oneList, (m,T)=>(n(),
        a("span", {
            class: "btn actionViolet",
            key: T + "1"
        }, i(m), 1))), 128))], 64)) : B("", !0), o.towList ? (n(),
        a("div", gv, i(c.$t("k3RecordDesc5")), 1)) : B("", !0)])) : B("", !0), o.gameType == 4 ? (n(),
        a("div", bv, [o.oneList.length > 0 ? (n(),
        a(S, {
            key: 0
        }, [t("span", mv, i(c.$t("k3RecordDesc6")), 1), (n(!0),
        a(S, null, G(o.oneList, (m,T)=>(n(),
        a("span", {
            class: "actionViolet",
            key: T + "1"
        }, i(m), 1))), 128))], 64)) : B("", !0), o.towList ? (n(),
        a("div", _v, i(c.$t("k3RecordDesc7")), 1)) : B("", !0), o.threeList.length > 0 ? (n(),
        a(S, {
            key: 2
        }, [t("span", hv, i(c.$t("k3RecordDesc8")), 1), (n(!0),
        a(S, null, G(o.threeList, (m,T)=>(n(),
        a("span", {
            class: "actionViolet",
            key: T + "1"
        }, i(m), 1))), 128))], 64)) : B("", !0)])) : B("", !0)]), t("div", vv, [E(i(c.$t("statusMay")) + " ", 1), o.state != 2 ? (n(),
        a("div", {
            key: 0,
            class: M([o.state ? "green" : "red"])
        }, i(o.state ? c.$t("success") : c.$t("fail")), 3)) : (n(),
        a("div", kv, i(c.$t("k3RecordDesc9")), 1))]), t("div", fv, [E(i(c.$t("winOrLose")) + " ", 1), o.state != 2 ? (n(),
        a("div", {
            key: 0,
            class: M([o.state ? "green" : "red"])
        }, i(`${o.state ? "+" : "-"} ${r(Rt)(o.profitAmount)}`), 3)) : (n(),
        a("div", yv, "--"))]), t("div", $v, [E(i(c.$t("createTime")) + " ", 1), t("div", null, i(o.addTime), 1)])])) : B("", !0)], 64))), 128))]))
    }
});
const Ga = K(Tv, [["__scopeId", "data-v-ae99b594"]])
  , wv = {
    class: "BettingRecordK3__C"
}
  , Cv = {
    class: "BettingRecordK3__C-nav"
}
  , Nv = {
    class: "BettingRecordK3__C-list"
}
  , Lv = {
    key: 0,
    class: "BettingRecordK3__C-foot"
}
  , zv = {
    class: "BettingRecordK3__C-foot-page"
}
  , Iv = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = h(Qr)
          , u = h([])
          , g = h(0)
          , b = h(1)
          , d = h(4)
          , c = $=>{
            p.value = $.name,
            b.value = 1,
            o()
        }
          , p = h(0)
          , o = async()=>{
            const $ = await ot(_a({
                pageSize: 20,
                pageNo: b.value,
                typeId: p.value
            }))
              , w = ($ == null ? void 0 : $.data.list) || [];
            for (let k = 0; w.length > k; k++) {
                let v = w[k].gameType.split(",")
                  , L = w[k].selectType.split(",");
                for (let C = 0; v.length > C; C++)
                    if (v[C] == "1" || v[C] == "2" || v[C] == "3")
                        w[k].gameType = "1",
                        w[k].oneList = L;
                    else if (v[C] == "5" || v[C] == "6") {
                        let I = []
                          , N = []
                          , x = [];
                        for (let R = 0; L.length > R; R++) {
                            if (L[R] == "|11|" || L[R] == "|22|" || L[R] == "|33|" || L[R] == "|44|" || L[R] == "|55|" || L[R] == "|66|") {
                                let O = L[R].split("|");
                                O.pop(),
                                O.shift(),
                                I.push(O.join())
                            }
                            if (L[R] == ":11:" || L[R] == ":22:" || L[R] == ":33:" || L[R] == ":44:" || L[R] == ":55:" || L[R] == ":66:") {
                                let O = L[R].split(":");
                                O.pop(),
                                O.shift(),
                                N.push(O.join())
                            }
                            if (L[R] == ":1:" || L[R] == ":2:" || L[R] == ":3:" || L[R] == ":4:" || L[R] == ":5:" || L[R] == ":6:") {
                                let O = L[R].split(":");
                                O.pop(),
                                O.shift(),
                                x.push(O.join())
                            }
                        }
                        w[k].gameType = "2",
                        w[k].oneList = I,
                        w[k].towList = !!_(N, x)
                    } else if (v[C] == "7" || v[C] == "8") {
                        let I = []
                          , N = !1;
                        for (let x = 0; L.length > x; x++) {
                            if (L[x] == "|111|" || L[x] == "|222|" || L[x] == "|333|" || L[x] == "|444|" || L[x] == "|555|" || L[x] == "|666|") {
                                let R = L[x].split("|");
                                R.pop(),
                                R.shift(),
                                I.push(R.join())
                            }
                            L[x] == "|AAA|" && (N = !0),
                            w[k].oneList = I,
                            w[k].towList = N,
                            w[k].gameType = "3"
                        }
                    } else if (v[C] == "9" || v[C] == "10" || v[C] == "4") {
                        let I = []
                          , N = !1
                          , x = [];
                        for (let R = 0; L.length > R; R++) {
                            if (L[R] == "|1|" || L[R] == "|2|" || L[R] == "|3|" || L[R] == "|4|" || L[R] == "|5|" || L[R] == "|6|") {
                                let O = L[R].split("|");
                                O.pop(),
                                O.shift(),
                                I.push(O.join())
                            }
                            if (L[R] == "|ABC|" && (N = !0),
                            L[R] == ".1." || L[R] == ".2." || L[R] == ".3." || L[R] == ".4." || L[R] == ".5." || L[R] == ".6.") {
                                let O = L[R].split(".");
                                O.pop(),
                                O.shift(),
                                x.push(O.join())
                            }
                        }
                        w[k].oneList = I,
                        w[k].towList = N,
                        w[k].threeList = x,
                        w[k].gameType = "4"
                    }
            }
            u.value = w || [],
            d.value = ($ == null ? void 0 : $.data.totalPage) || 0
        }
          , _ = ($,w)=>{
            let k = [];
            for (var v = 0; $.length > v; v++) {
                let C = $[v]
                  , I = [];
                for (var L = 0; w.length > L; L++)
                    I.push(w[L]);
                if (I.length > 0) {
                    let N = I.sort().join(",");
                    k.push(C + "|" + N)
                }
            }
            return k.sort()
        }
          , m = ()=>{
            p.value = s.value[0].typeID,
            o()
        }
        ;
        function T() {
            e.go(-1)
        }
        const f = ()=>{
            b.value--,
            o()
        }
          , y = ()=>{
            b.value++,
            o()
        }
        ;
        return Ct(()=>{
            m()
        }
        ),
        ($,w)=>{
            const k = j("van-tab")
              , v = j("van-tabs")
              , L = j("van-icon");
            return n(),
            a("div", wv, [t("div", {
                class: "BettingRecordK3__C-head"
            }, [t("div", {
                class: "BettingRecordK3__C-head-bcak",
                onClick: T
            }), E(" K3 Lotre ")]), t("div", Cv, [z(v, {
                active: g.value,
                "onUpdate:active": w[0] || (w[0] = C=>g.value = C),
                onClickTab: c
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(s.value, (C,I)=>(n(),
                it(k, {
                    key: I,
                    title: C.tabName,
                    name: C.typeID
                }, null, 8, ["title", "name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", Nv, [z(Ga, {
                mayrecord: u.value
            }, null, 8, ["mayrecord"])]), u.value.length ? (n(),
            a("div", Lv, [t("div", {
                class: M(["BettingRecordK3__C-foot-previous", {
                    disabled: b.value <= 1
                }]),
                onClick: f
            }, [z(L, {
                name: "arrow-left",
                class: "BettingRecordK3__C-icon",
                size: "20"
            })], 2), t("div", zv, i(b.value) + "/" + i(d.value), 1), t("div", {
                class: M(["BettingRecordK3__C-foot-next", {
                    disabled: b.value >= d.value
                }]),
                onClick: y
            }, [z(L, {
                name: "arrow",
                class: "BettingRecordK3__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const xv = K(Iv, [["__scopeId", "data-v-0d6ca188"]])
  , yx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Rv = {
    class: "MyGameRecordList__C"
}
  , Sv = ["onClick"]
  , Mv = {
    class: "MyGameRecordList__C-item-m"
}
  , Bv = {
    class: "MyGameRecordList__C-item-m-top"
}
  , Gv = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , Pv = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , Dv = {
    class: "MyGameRecordList__C-detail-text"
}
  , Av = {
    key: 0,
    class: "MyGameRecordList__C-detail-line"
}
  , Ov = ["onClick"]
  , qv = ["src"]
  , Wv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Ev = {
    class: "MyGameRecordList__C-detail-line"
}
  , Vv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Fv = {
    class: "MyGameRecordList__C-detail-line"
}
  , jv = {
    class: "red"
}
  , Hv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Uv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Kv = {
    key: 0
}
  , Xv = {
    class: "MyGameRecordList__C-inlineB"
}
  , Qv = {
    key: 0,
    class: "MyGameRecordList__C-inlineB purpleColor"
}
  , Yv = {
    key: 1
}
  , Jv = {
    class: "MyGameRecordList__C-detail-line"
}
  , Zv = {
    class: "MyGameRecordList__C-detail-line"
}
  , tk = {
    key: 1
}
  , ik = {
    class: "MyGameRecordList__C-detail-line"
}
  , ek = {
    key: 1
}
  , nk = {
    class: "MyGameRecordList__C-detail-line"
}
  , ak = H({
    __name: "MayrecordList",
    props: {
        mayrecord: {}
    },
    setup(l) {
        const {t: e} = kt()
          , s = h(-1)
          , u = p=>{
            switch (p) {
            case "big":
                return "big";
            case "green":
            case "red":
            case "violet":
                return "";
            default:
                return p
            }
        }
          , g = p=>{
            switch (p % 2) {
            case 1:
                return e("greenColor");
            default:
                return e("redColor")
            }
        }
          , b = p=>{
            switch (p % 2) {
            case 1:
                return "greenColor";
            default:
                return "redColor"
            }
        }
          , d = p=>{
            switch (p) {
            case "small":
                return e("small");
            case "big":
                return e("big");
            case "green":
                return e("green");
            case "violet":
                return e("purpleColor");
            case "red":
                return e("redColor");
            default:
                return p
            }
        }
          , c = p=>{
            s.value == p ? s.value = -1 : s.value = p
        }
        ;
        return (p,o)=>(n(),
        a("div", Rv, [(n(!0),
        a(S, null, G(p.mayrecord, (_,m)=>(n(),
        a(S, {
            key: m
        }, [t("div", {
            class: "MyGameRecordList__C-item",
            onClick: hi(T=>c(m), ["stop", "prevent"])
        }, [t("div", {
            class: M(["MyGameRecordList__C-item-l", ["MyGameRecordList__C-item-l-" + _.selectType]])
        }, i(u(_.selectType)), 3), t("div", Mv, [t("div", Bv, i(_.issueNumber), 1), t("div", Gv, i(_.addTime), 1)]), _.profitAmount ? (n(),
        a("div", {
            key: 0,
            class: M(["MyGameRecordList__C-item-r", {
                success: _.state
            }])
        }, [_.profitAmount ? (n(),
        a("div", {
            key: 0,
            class: M({
                success: _.state
            })
        }, i(_.state ? p.$t("success") : p.$t("fail")), 3)) : B("", !0), t("span", null, i(`${_.state ? "+" : "-"}${r(Rt)(_.profitAmount)}`), 1)], 2)) : B("", !0)], 8, Sv), m == s.value ? (n(),
        a("div", Pv, [t("div", Dv, i(p.$t("detailMay")), 1), _.orderNumber ? (n(),
        a("div", Av, [E(i(p.$t("orderNoMay")) + " ", 1), t("div", {
            onClick: T=>r(ji)(_.orderNumber)
        }, [E(i(_.orderNumber) + " ", 1), t("img", {
            src: r(tt)("home/AllLotteryGames/WinGo", "copy")
        }, null, 8, qv)], 8, Ov)])) : B("", !0), t("div", Wv, [E(i(p.$t("issueMay")) + " ", 1), t("div", null, i(_.issueNumber), 1)]), t("div", Ev, [E(i(p.$t("amountMay")) + " ", 1), t("div", null, i(r(Rt)(_.amount)), 1)]), t("div", Vv, [E(i(p.$t("numMay")) + " ", 1), t("div", null, i(_.betCount), 1)]), t("div", Fv, [E(i(p.$t("afterTaxAmount")) + " ", 1), t("div", jv, i(r(Rt)(_.realAmount)), 1)]), t("div", Hv, [E(i(p.$t("tax")) + " ", 1), t("div", null, i(r(Rt)(_.fee)), 1)]), t("div", Uv, [E(i(p.$t("resultMay")) + " ", 1), _.number ? (n(),
        a("div", Kv, [t("div", Xv, i(_.number), 1), t("div", {
            class: M(["MyGameRecordList__C-inlineB", [b(Number(_.number))]])
        }, i(g(Number(_.number))), 3), _.number == 0 || _.number == 5 ? (n(),
        a("div", Qv, i(p.$t("purpleColor")), 1)) : B("", !0), t("div", {
            class: M(["MyGameRecordList__C-inlineB", [Number(_.number) > 4 ? "big" : "small"]])
        }, i(Number(_.number) > 4 ? p.$t("big") : p.$t("small")), 3)])) : (n(),
        a("div", Yv, "--"))]), t("div", Jv, [E(i(p.$t("selectMay")) + " ", 1), t("div", null, i(d(_.selectType)), 1)]), t("div", Zv, [E(i(p.$t("statusMay")) + " ", 1), _.state != 2 ? (n(),
        a("div", {
            key: 0,
            class: M([_.state ? "green" : "red"])
        }, i(_.state ? p.$t("success") : p.$t("fail")), 3)) : (n(),
        a("div", tk, i(p.$t("k3RecordDesc9")), 1))]), t("div", ik, [E(i(p.$t("winOrLose")) + " ", 1), _.state != 2 ? (n(),
        a("div", {
            key: 0,
            class: M([_.state ? "green" : "red"])
        }, i(`${_.state ? "+" : "-"} ${r(Rt)(_.profitAmount)}`), 3)) : (n(),
        a("div", ek, "--"))]), t("div", nk, [E(i(p.$t("createTime")) + " ", 1), t("div", null, i(_.addTime), 1)])])) : B("", !0)], 64))), 128))]))
    }
});
const dn = K(ak, [["__scopeId", "data-v-373b3197"]])
  , ok = {
    class: "BettingRecordWin__C"
}
  , sk = {
    class: "BettingRecordWin__C-nav"
}
  , lk = {
    class: "BettingRecordWin__C-list"
}
  , ck = {
    key: 0,
    class: "BettingRecordWin__C-foot"
}
  , rk = {
    class: "BettingRecordWin__C-foot-page"
}
  , uk = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = h(Yr)
          , u = h([])
          , g = h(0)
          , b = h(1)
          , d = h(4)
          , c = y=>{
            p.value = y.name,
            b.value = 1,
            o()
        }
          , p = h(0)
          , o = async()=>{
            const [y,$] = await Zt(ln({
                pageSize: 20,
                pageNo: b.value,
                typeId: p.value
            }));
            u.value = $.list || [],
            d.value = $.totalPage
        }
          , _ = ()=>{
            p.value = s.value[0].typeID,
            o()
        }
        ;
        function m() {
            e.go(-1)
        }
        const T = ()=>{
            b.value--,
            o()
        }
          , f = ()=>{
            b.value++,
            o()
        }
        ;
        return Ct(()=>{
            _()
        }
        ),
        (y,$)=>{
            const w = j("van-tab")
              , k = j("van-tabs")
              , v = j("van-icon");
            return n(),
            a("div", ok, [t("div", {
                class: "BettingRecordWin__C-head"
            }, [t("div", {
                class: "BettingRecordWin__C-head-bcak",
                onClick: m
            }), E(" Win Go ")]), t("div", sk, [z(k, {
                active: g.value,
                "onUpdate:active": $[0] || ($[0] = L=>g.value = L),
                onClickTab: c
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(s.value, (L,C)=>(n(),
                it(w, {
                    key: C,
                    title: L.tabName,
                    name: L.typeID
                }, null, 8, ["title", "name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", lk, [z(dn, {
                mayrecord: u.value
            }, null, 8, ["mayrecord"])]), u.value.length ? (n(),
            a("div", ck, [t("div", {
                class: M(["BettingRecordWin__C-foot-previous", {
                    disabled: b.value <= 1
                }]),
                onClick: T
            }, [z(v, {
                name: "arrow-left",
                class: "BettingRecordWin__C-icon",
                size: "20"
            })], 2), t("div", rk, i(b.value) + "/" + i(d.value), 1), t("div", {
                class: M(["BettingRecordWin__C-foot-next", {
                    disabled: b.value >= d.value
                }]),
                onClick: f
            }, [z(v, {
                name: "arrow",
                class: "BettingRecordWin__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const dk = K(uk, [["__scopeId", "data-v-4102d7e4"]])
  , $x = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , pk = {
    class: "BettingRecordWinTrx__C"
}
  , gk = {
    class: "BettingRecordWinTrx__C-nav"
}
  , bk = {
    class: "BettingRecordWinTrx__C-list"
}
  , mk = {
    key: 0,
    class: "BettingRecordWinTrx__C-foot"
}
  , _k = {
    class: "BettingRecordWinTrx__C-foot-page"
}
  , hk = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = h(Kr)
          , u = h([])
          , g = h(0)
          , b = h(1)
          , d = h(0)
          , c = h(4)
          , p = y=>{
            d.value = y.name,
            b.value = 1,
            o()
        }
          , o = async()=>{
            const [y,$] = await Zt(cn({
                pageSize: 20,
                pageNo: b.value,
                typeId: d.value
            }));
            u.value = $.list || [],
            c.value = $.totalPage
        }
          , _ = async()=>{
            d.value = s.value[0].typeID,
            o()
        }
        ;
        function m() {
            e.go(-1)
        }
        const T = ()=>{
            b.value--,
            o()
        }
          , f = ()=>{
            b.value++,
            o()
        }
        ;
        return Ct(()=>{
            _()
        }
        ),
        (y,$)=>{
            const w = j("van-tab")
              , k = j("van-tabs")
              , v = j("van-icon");
            return n(),
            a("div", pk, [t("div", {
                class: "BettingRecordWinTrx__C-head"
            }, [t("div", {
                class: "BettingRecordWinTrx__C-head-bcak",
                onClick: m
            }), E(" Trx Win Go ")]), t("div", gk, [z(k, {
                active: g.value,
                "onUpdate:active": $[0] || ($[0] = L=>g.value = L),
                onClickTab: p
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(s.value, (L,C)=>(n(),
                it(w, {
                    key: C,
                    title: L.tabName,
                    name: L.typeID
                }, null, 8, ["title", "name"]))), 128))]),
                _: 1
            }, 8, ["active"])]), t("div", bk, [z(dn, {
                mayrecord: u.value
            }, null, 8, ["mayrecord"])]), u.value.length ? (n(),
            a("div", mk, [t("div", {
                class: M(["BettingRecordWinTrx__C-foot-previous", {
                    disabled: b.value <= 1
                }]),
                onClick: T
            }, [z(v, {
                name: "arrow-left",
                class: "BettingRecordWinTrx__C-icon",
                size: "20"
            })], 2), t("div", _k, i(b.value) + "/" + i(c.value), 1), t("div", {
                class: M(["BettingRecordWinTrx__C-foot-next", {
                    disabled: b.value >= c.value
                }]),
                onClick: f
            }, [z(v, {
                name: "arrow",
                class: "BettingRecordWinTrx__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const vk = K(hk, [["__scopeId", "data-v-54c80bcf"]])
  , Tx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , rt = h({
    odds: 1.5,
    money_list: [100, 1e3, 200, 5e3, 1e4],
    bet_money: 0,
    binguoType: 1,
    currentNumber: "20230610858776",
    award_result: "246",
    bet_item: "",
    trend_result: ["6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "5"],
    trend_result2: ["123", "245", "532", "666"],
    currentMoneyIndex: 0,
    bet_number: "",
    beishu: 1,
    beishuList: [1, 5, 10, 20, 50, 100],
    currentBeishuIndex: 0,
    currentBetType: void 0,
    currentPlayId: 0,
    currentSelectType: "",
    currentOdds: "",
    drawIssnum: ""
})
  , oe = h()
  , Qe = h(!1)
  , se = h(!1)
  , Kn = h(!0)
  , Xn = h(!1)
  , kk = h(!1)
  , Ye = h("00:00")
  , fk = h(!1)
  , Je = h(!0)
  , {t: Ze} = ve.global
  , le = h([])
  , Xi = h([{
    value: Ze("small"),
    type: 1,
    range: "3-9",
    beishu: "2.0",
    bet_amount: 0,
    key: "Small",
    groupId: 1,
    playId: 0,
    hot: !1
}, {
    value: Ze("binguoHe"),
    type: 2,
    range: "10-11",
    beishu: "3.0",
    bet_amount: 0,
    key: "Drawn",
    groupId: 1,
    playId: 0,
    hot: !1
}, {
    value: Ze("k3Big"),
    type: 3,
    range: "12-18",
    beishu: "5.0",
    bet_amount: 0,
    key: "Big",
    groupId: 1,
    playId: 0,
    hot: !1
}])
  , ce = h(Array.from({
    length: 16
}, (l,e)=>{
    const s = e + 3;
    return {
        value: s,
        type: s < 10 ? 1 : s > 11 ? 3 : 2,
        beishu: "2.0",
        bet_amount: 0,
        hot: !1,
        groupId: 1,
        playId: 0
    }
}
))
  , Ii = h({
    third: {
        amount1: 0,
        amount2: 0
    },
    two: 0,
    one: {
        amount1: 0,
        amount2: 0,
        amount3: 0
    }
})
  , Bi = h([{
    value: "1",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "2",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "3",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "4",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "5",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "6",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}, {
    value: "*",
    amount1: 0,
    amount2: 0,
    amount3: 0,
    hot1: !1,
    hot2: !1,
    hot3: !1
}])
  , Ge = ()=>{
    const {t: l} = kt()
      , e = h()
      , s = Q(()=>[tt("home/AllLotteryGames/binguo", "dice_" + rt.value.award_result.toString()[0]), tt("home/AllLotteryGames/binguo", "dice_" + rt.value.award_result.toString()[1]), tt("home/AllLotteryGames/binguo", "dice_" + rt.value.award_result.toString()[2])])
      , u = Q(()=>rt.value.currentBetType === 1 ? "small" : rt.value.currentBetType === 2 ? "and" : "big")
      , g = async()=>{
        const N = await ot(Zr());
        N != null && N.data && (rt.value.money_list = N.data.betAmount,
        rt.value.beishuList = N.data.betMultiplier,
        rt.value.bet_money = N.data.betAmount[0])
    }
      , b = async()=>{
        const N = await ot(tu());
        if (N != null && N.data) {
            le.value = N == null ? void 0 : N.data;
            let x = N == null ? void 0 : N.data;
            x.filter(P=>P.groupId === 1).forEach(P=>{
                Number(P.betType) ? ce.value.forEach(F=>{
                    P.betType === F.value + "" && (F.beishu = P.odds,
                    F.playId = P.playId)
                }
                ) : Xi.value.forEach(F=>{
                    F.key === P.betType && (F.beishu = P.odds,
                    F.playId = P.playId)
                }
                )
            }
            ),
            x.filter(P=>P.groupId !== 1).forEach(P=>{
                P.groupId === 4 && (P.betType === "1" ? Ii.value.third.amount1 = P.odds : Ii.value.third.amount2 = P.odds),
                P.groupId === 3 && (Ii.value.two = P.odds),
                P.groupId === 2 && (P.betType === "1" ? Ii.value.one.amount1 = P.odds : P.betType === "2" ? Ii.value.one.amount2 = P.odds : Ii.value.one.amount3 = P.odds)
            }
            )
        }
    }
      , d = async()=>{
        const N = await ot(nu({
            issueNumber: rt.value.currentNumber
        }));
        N != null && N.data && (N.data.forEach(x=>{
            switch (Xi.value.forEach(R=>{
                x.playId === R.playId && (R.bet_amount = x.amount)
            }
            ),
            ce.value.forEach(R=>{
                x.playId === R.playId && (R.bet_amount = x.amount)
            }
            ),
            x.playId) {
            case 28:
                Bi.value[Number(x.selectType[0]) - 1].amount1 = x.amount;
                break;
            case 29:
                Bi.value[6].amount1 = x.amount;
                break;
            case 27:
                Bi.value[Number(x.selectType[0]) - 1].amount2 = x.amount;
                break;
            case 24:
                Bi.value[Number(x.selectType[0]) - 1].amount3 = x.amount;
                break
            }
        }
        ),
        await c(0),
        ti(()=>{
            N.data.sort((O,P)=>P.amount - O.amount).slice(0, 3).forEach(O=>{
                let P = Xi.value.findIndex(X=>O.playId === X.playId);
                P > -1 && (Xi.value[P].hot = !0);
                let F = ce.value.findIndex(X=>O.playId === X.playId);
                switch (F > -1 && (ce.value[F].hot = !0),
                O.playId) {
                case 28:
                    Bi.value[Number(O.selectType[0]) - 1].hot1 = !0;
                    break;
                case 29:
                    Bi.value[6].hot1 = !0;
                    break;
                case 27:
                    Bi.value[Number(O.selectType[0]) - 1].hot2 = !0;
                    break;
                case 24:
                    Bi.value[Number(O.selectType[0]) - 1].hot3 = !0;
                    break
                }
            }
            )
        }
        ))
    }
      , c = async N=>{
        Bi.value.forEach(x=>{
            x.hot1 = !1,
            x.hot2 = !1,
            x.hot3 = !1,
            N === 1 && (x.amount1 = 0,
            x.amount2 = 0,
            x.amount3 = 0)
        }
        ),
        Xi.value.forEach(x=>{
            N === 1 && (x.bet_amount = 0),
            x.hot = !1
        }
        ),
        ce.value.forEach(x=>{
            N === 1 && (x.bet_amount = 0),
            x.hot = !1
        }
        )
    }
      , p = async()=>{
        const N = await ot(iu());
        N && (N.data ? N.data.startTime && N.data.endTime && (rt.value.currentNumber = N == null ? void 0 : N.data.issueNumber,
        w(N.data.serviceTime, N.data.endTime, async()=>{
            Ye.value = "10:00",
            await p(),
            clearInterval(e.value),
            setTimeout(()=>{
                o()
            }
            , 60 * 1e3),
            c(1)
        }
        )) : Je.value = !1,
        await d())
    }
      , o = async()=>{
        let N = 1;
        e.value = setInterval(async()=>{
            N === 10 ? clearInterval(e.value) : (await _(),
            await m(),
            N++)
        }
        , 1e4)
    }
      , _ = async()=>{
        const N = await ot(eu());
        N && (rt.value.award_result = N == null ? void 0 : N.data.result,
        rt.value.drawIssnum = N == null ? void 0 : N.data.issueNo)
    }
      , m = async()=>{
        const N = await ot(Ra());
        N && (rt.value.trend_result = N == null ? void 0 : N.data.map(x=>x.resultSum + "").slice(0, 13).reverse(),
        rt.value.trend_result2 = N == null ? void 0 : N.data.map(x=>x.result + "").slice(0, 4).reverse())
    }
      , T = N=>{
        se.value = !0,
        rt.value.bet_number = N.value + "",
        rt.value.currentBetType = N.type,
        rt.value.currentPlayId = N.playId,
        rt.value.currentOdds = N.beishu + ""
    }
      , f = (N,x)=>{
        var R, O, P, F;
        x === 1 ? (rt.value.bet_number = N,
        rt.value.currentBetType = x,
        rt.value.currentPlayId = (R = le.value.find(X=>X.betType === "1" && X.groupId === 2)) == null ? void 0 : R.playId,
        rt.value.currentOdds = Ii.value.one.amount1 + "") : x === 2 ? (rt.value.bet_number = N + "," + N,
        N.includes("6") ? rt.value.currentBetType = 3 : N.includes("5") ? rt.value.currentBetType = 2 : rt.value.currentBetType = 1,
        rt.value.currentOdds = Ii.value.two + "",
        rt.value.currentPlayId = (O = le.value.find(X=>X.betType === "2" && X.groupId === 3)) == null ? void 0 : O.playId) : x === 3 && (rt.value.bet_number = N + "," + N + "," + N,
        /[123]/.test(N) ? rt.value.currentBetType = 1 : rt.value.currentBetType = 3,
        N.includes("*") ? (rt.value.currentOdds = Ii.value.third.amount2 + "",
        rt.value.currentPlayId = (P = le.value.find(X=>X.betType === "2" && X.groupId === 4)) == null ? void 0 : P.playId) : (rt.value.currentOdds = Ii.value.third.amount1 + "",
        rt.value.currentPlayId = (F = le.value.find(X=>X.betType === "1" && X.groupId === 4)) == null ? void 0 : F.playId)),
        se.value = !0
    }
      , y = async()=>{
        var P;
        if (!Je.value) {
            se.value = !1,
            Xn.value = !0;
            return
        }
        if (!Kn.value)
            return;
        let N = le.value.find(F=>F.playId === rt.value.currentPlayId)
          , x = "";
        (N == null ? void 0 : N.groupId) === 2 || (N == null ? void 0 : N.groupId) === 3 ? x = rt.value.bet_number.split(",")[0] : (N == null ? void 0 : N.groupId) === 4 ? x = rt.value.bet_number.includes("*") ? "***" : rt.value.bet_number.split(",").join("") : x = Number(rt.value.bet_number) ? rt.value.bet_number : (P = Xi.value.find(F=>F.value === rt.value.bet_number)) == null ? void 0 : P.key;
        let R = {
            issueNumber: rt.value.currentNumber,
            amount: rt.value.bet_money * rt.value.beishu,
            figure: Number(rt.value.beishu),
            gameType: (N == null ? void 0 : N.groupId) + "",
            selectType: x,
            playId: rt.value.currentPlayId
        };
        (await ot(au(R))).data && (an(l("code402")),
        se.value = !1,
        d())
    }
      , $ = (N,x)=>{
        let R = new Date(N.replace(/-/g, "/"));
        return new Date(x.replace(/-/g, "/")).getTime() - R.getTime()
    }
      , w = (N,x,R)=>{
        clearInterval(oe.value),
        oe.value = void 0;
        let O = $(N, x);
        if (O <= 1e3)
            throw new Error("时间不正确");
        oe.value = setInterval(()=>{
            if (O -= 1e3,
            O <= 1e3) {
                clearInterval(oe.value),
                R();
                return
            }
            Ye.value = ds(O, "mm:ss")
        }
        , 1e3)
    }
      , k = ()=>Qe.value = !Qe.value
      , v = N=>{
        N === "add" ? rt.value.beishu = Number(rt.value.beishu) + 1 : rt.value.beishu = Number(rt.value.beishu) - 1
    }
      , L = ()=>{
        se.value = !1,
        rt.value.currentBeishuIndex = 0,
        rt.value.currentMoneyIndex = 0
    }
      , C = ()=>ps.back()
      , I = N=>N >= 1e6 ? (N / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : N >= 1e3 ? (N / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : N + "";
    return At(()=>rt.value.currentMoneyIndex, N=>{
        rt.value.bet_money = Number(rt.value.money_list[N])
    }
    , {
        immediate: !0
    }),
    At(()=>rt.value.bet_number, ()=>{
        rt.value.currentMoneyIndex = 0,
        rt.value.currentBeishuIndex = 0
    }
    , {
        immediate: !0
    }),
    At(()=>rt.value.currentBeishuIndex, N=>{
        rt.value.beishu = Number(rt.value.beishuList[N])
    }
    , {
        immediate: !0
    }),
    Hi(()=>{
        clearInterval(oe.value)
    }
    ),
    {
        store: rt,
        timer: oe,
        isShowBetMoney: Qe,
        filterNumberSize: u,
        handleToggleShwoMoney: k,
        handleBet: T,
        goBack: C,
        handleStep: v,
        handleCancel: L,
        isSell: Je,
        handleAlike: f,
        getBinguoConfig: g,
        getBinguoOddsList: b,
        getGameBingo18Issue: p,
        countdownTimeFun: w,
        getBingo18LastGameResult: _,
        getBingo18BetAmount: d,
        handleBetSubmit: y,
        getBingo18Last50Result: m,
        formatNum: I,
        checkRule: Kn,
        resultImgList: s,
        betSizeList: Xi,
        betNumberList: ce,
        betSheetVisible: se,
        overVisble: Xn,
        alikeList: Bi,
        timeText: Ye,
        oddObject: Ii,
        playerRuleVisble: kk,
        betPopTXT: fk
    }
}
  , Pa = l=>(Gt("data-v-ebbda7cb"),
l = l(),
Pt(),
l)
  , yk = {
    class: "binguo_info"
}
  , $k = {
    class: "binguo_award"
}
  , Tk = {
    key: 0,
    class: "main"
}
  , wk = {
    class: "current_award"
}
  , Ck = {
    class: "tit"
}
  , Nk = {
    class: "current_number"
}
  , Lk = {
    class: "award_time"
}
  , zk = {
    class: "award_result"
}
  , Ik = {
    class: "tit"
}
  , xk = {
    class: "award_type"
}
  , Rk = {
    key: 1,
    class: "over_tip"
}
  , Sk = {
    class: "trend"
}
  , Mk = {
    key: 0,
    class: "trend_result1"
}
  , Bk = {
    class: "text"
}
  , Gk = {
    class: "result_list"
}
  , Pk = Pa(()=>t("span", {
    class: "tag animation_tag"
}, "-", -1))
  , Dk = {
    key: 1,
    class: "trend_result2"
}
  , Ak = {
    class: "result_list2"
}
  , Ok = {
    class: "result_list2"
}
  , qk = {
    class: "animation_tag"
}
  , Wk = Pa(()=>t("div", {
    id: "time"
}, null, -1))
  , Ek = H({
    __name: "BinguoInfo",
    setup(l) {
        const {store: e, resultImgList: s, isSell: u, timeText: g, getGameBingo18Issue: b, getBingo18LastGameResult: d, getBingo18Last50Result: c} = Ge()
          , p = ft();
        function o(m) {
            let T = 0;
            return e.value.binguoType === 1 ? T = Number(m) : (T = 0,
            m.split("").forEach(f=>{
                T += Number(f)
            }
            )),
            T < 10 ? "small" : T === 11 || T === 10 ? "sum" : "big"
        }
        const _ = ()=>{
            p.push({
                path: "/home/AllLotteryGames/BinguoCount"
            })
        }
        ;
        return b(),
        d(),
        c(),
        (m,T)=>{
            const f = j("van-icon");
            return n(),
            a(S, null, [t("div", yk, [t("div", $k, [r(u) ? (n(),
            a("div", Tk, [t("div", wk, [t("div", Ck, i(m.$t("currentIssNumber")), 1), t("div", Nk, i(r(e).currentNumber), 1)]), t("div", Lk, i(r(g)), 1), t("div", zk, [t("div", Ik, i(r(e).drawIssnum), 1), t("div", xk, [t("div", {
                style: Ci({
                    backgroundImage: `url(${r(s)[0]}) `
                })
            }, null, 4), r(e).binguoType !== 2 ? (n(),
            it(f, {
                key: 0,
                name: r(tt)("home/AllLotteryGames/binguo", "add")
            }, null, 8, ["name"])) : B("", !0), t("div", {
                style: Ci({
                    backgroundImage: `url(${r(s)[1]}) `
                })
            }, null, 4), r(e).binguoType !== 2 ? (n(),
            it(f, {
                key: 1,
                name: r(tt)("home/AllLotteryGames/binguo", "add")
            }, null, 8, ["name"])) : B("", !0), t("div", {
                style: Ci({
                    backgroundImage: `url(${r(s)[2]})`
                })
            }, null, 4)])])])) : (n(),
            a("div", Rk, i(m.$t("playerEnd")), 1))]), t("div", Sk, [r(e).binguoType === 1 ? (n(),
            a("div", Mk, [t("div", Bk, i(m.$t("result")), 1), t("div", Gk, [(n(!0),
            a(S, null, G(r(e).trend_result, y=>(n(),
            a("span", {
                class: M(["tag", `${o(y)}_tag`])
            }, i(y), 3))), 256)), Pk])])) : (n(),
            a("div", Dk, [(n(!0),
            a(S, null, G(r(e).trend_result2, y=>(n(),
            a("div", Ak, [(n(!0),
            a(S, null, G(y, $=>(n(),
            a("span", {
                class: M(`${o(y)}_tag`)
            }, i($), 3))), 256))]))), 256)), t("div", Ok, [(n(),
            a(S, null, G(3, ()=>t("span", qk)), 64))])])), t("div", {
                class: "trend_img",
                onClick: T[0] || (T[0] = y=>_())
            })])]), Wk], 64)
        }
    }
});
const Vk = K(Ek, [["__scopeId", "data-v-ebbda7cb"]])
  , Fk = l=>(Gt("data-v-c361e07d"),
l = l(),
Pt(),
l)
  , jk = {
    class: "main_desk"
}
  , Hk = {
    key: 0,
    class: "rule_tip"
}
  , Uk = {
    class: "bet_size"
}
  , Kk = ["onClick"]
  , Xk = {
    class: "head"
}
  , Qk = {
    class: "range"
}
  , Yk = {
    key: 0,
    class: "hot"
}
  , Jk = ["onClick"]
  , Zk = {
    key: 1,
    class: "alike_box"
}
  , t1 = {
    class: "rule_tip"
}
  , i1 = {
    class: "alike"
}
  , e1 = ["onClick"]
  , n1 = {
    class: "amount"
}
  , a1 = {
    class: "third_list"
}
  , o1 = {
    class: "ball"
}
  , s1 = {
    class: "ball2"
}
  , l1 = {
    key: 0,
    class: "ball_hot2"
}
  , c1 = {
    class: "rule_tip"
}
  , r1 = {
    class: "alike two_alike"
}
  , u1 = ["onClick"]
  , d1 = {
    class: "amount"
}
  , p1 = {
    class: "third_list"
}
  , g1 = {
    class: "ball"
}
  , b1 = {
    class: "ball2"
}
  , m1 = {
    key: 0,
    class: "ball_hot2"
}
  , _1 = {
    class: "rule_tip"
}
  , h1 = {
    class: "alike one_alike"
}
  , v1 = ["onClick"]
  , k1 = {
    class: "amount"
}
  , f1 = Fk(()=>t("div", {
    class: "ball_hot"
}, null, -1))
  , y1 = {
    class: "third_list"
}
  , $1 = {
    class: "ball"
}
  , T1 = {
    class: "ball2"
}
  , w1 = {
    key: 0,
    class: "ball_hot2"
}
  , C1 = {
    class: "rule_tip_header"
}
  , N1 = ["src"]
  , L1 = {
    class: "rule_tip_dialog"
}
  , z1 = {
    class: "rule_tip_tit"
}
  , I1 = {
    class: "rule_tip_text"
}
  , x1 = H({
    __name: "BinguoMainDesk",
    setup(l) {
        const {t: e} = kt()
          , {betSizeList: s, betNumberList: u, isShowBetMoney: g, handleBet: b, store: d, alikeList: c, handleAlike: p, oddObject: o, formatNum: _} = Ge()
          , m = {
            sum: {
                dice: "1,3,6",
                tip1: e("result"),
                tip2: e("binguoRuleTipText1")
            },
            third: {
                dice: "6,6,6",
                tip1: e("numbersMatch"),
                tip2: e("binguoRuleTipText2")
            },
            two: {
                dice: "6,6",
                tip1: e("sameNum"),
                tip2: e("binguoRuleTipText3")
            },
            one: {
                dice: "1,2,3,5,4,6",
                tip1: e("same"),
                tip2: e("binguoRuleTipText4")
            }
        }
          , T = h(!1)
          , f = h()
          , y = ()=>{
            const $ = document.querySelectorAll(".rule_tip");
            for (let w = 0; w < $.length; w++)
                $[w].addEventListener("click", ()=>{
                    T.value = !0,
                    w === 0 && (f.value = m.sum),
                    w === 1 && (f.value = m.third),
                    w === 2 && (f.value = m.two),
                    w === 3 && (f.value = m.one)
                }
                )
        }
        ;
        return At(()=>d.value.binguoType, $=>{
            $ === 2 && ti(()=>{
                y()
            }
            )
        }
        , {
            deep: !0,
            immediate: !0
        }),
        ($,w)=>(n(),
        a("div", jk, [r(d).binguoType === 2 ? (n(),
        a("div", Hk, i($.$t("xosoTxt60")), 1)) : B("", !0), t("div", Uk, [(n(!0),
        a(S, null, G(r(s), k=>(n(),
        a("div", {
            class: "size_item",
            onClick: hi(v=>r(b)(k), ["stop"])
        }, [t("div", Xk, [t("span", null, i(r(g) && k.bet_amount ? r(_)(k.bet_amount) : ""), 1), t("span", null, i(k.beishu + "x" || ""), 1)]), t("div", {
            class: M(`value value_${k.type}`)
        }, i(k.value), 3), t("div", Qk, i(k.range), 1), k.hot && r(g) ? (n(),
        a("div", Yk)) : B("", !0)], 8, Kk))), 256))]), t("div", {
            class: M(["bet_number", {
                betAll: r(d).binguoType === 2
            }])
        }, [(n(!0),
        a(S, null, G(r(u), k=>(n(),
        a("div", {
            key: k.value,
            class: "item",
            onClick: v=>r(b)(k)
        }, [t("div", null, i(r(g) && k.bet_amount ? r(_)(k.bet_amount) : ""), 1), t("div", null, i(k.value), 1), t("div", null, i(k.beishu) + "X", 1), k.hot && r(g) ? (n(),
        a("div", {
            key: 0,
            class: M(["hot", {
                hot2: r(d).binguoType === 2
            }])
        }, null, 2)) : B("", !0)], 8, Jk))), 128))], 2), r(d).binguoType === 2 ? (n(),
        a("div", Zk, [t("div", t1, i($.$t("trendTXT4")) + " " + i($.$t("odds")) + i(r(o).third.amount1) + "x " + i($.$t("k3bet3Desc4")) + " " + i($.$t("odds")) + i(r(o).third.amount2) + "x ", 1), t("div", i1, [(n(!0),
        a(S, null, G(r(c), k=>(n(),
        a("div", {
            class: "alike_item",
            onClick: v=>r(p)(k.value, 3)
        }, [t("div", n1, i(r(g) && k.amount1 ? r(_)(k.amount1) : ""), 1), t("div", a1, [(n(),
        a(S, null, G(3, ()=>t("div", o1, [t("span", s1, i(k.value), 1), k.hot1 ? (n(),
        a("span", l1)) : B("", !0)])), 64))])], 8, e1))), 256))]), t("div", c1, i($.$t("trendTXT3") + $.$t("odds")) + " " + i(r(o).two) + "x", 1), t("div", r1, [(n(!0),
        a(S, null, G(r(c).slice(0, 6), k=>(n(),
        a("div", {
            class: "alike_item",
            onClick: v=>r(p)(k.value, 2)
        }, [t("div", d1, i(r(g) && k.amount2 ? r(_)(k.amount2) : ""), 1), t("div", p1, [(n(),
        a(S, null, G(2, ()=>t("div", g1, [t("span", b1, i(k.value), 1), k.hot2 ? (n(),
        a("span", m1)) : B("", !0)])), 64))])], 8, u1))), 256))]), t("div", _1, i($.$t("binguoRuleTip1")) + i(r(o).one.amount1) + "x " + i($.$t("binguoRuleTip2")) + i(r(o).one.amount2) + "x " + i($.$t("binguoRuleTip3")) + " " + i(r(o).one.amount3) + "x ", 1), t("div", h1, [(n(!0),
        a(S, null, G(r(c).slice(0, 6), k=>(n(),
        a("div", {
            class: "alike_item",
            onClick: v=>r(p)(k.value, 1)
        }, [t("div", k1, i(r(g) && k.amount3 ? r(_)(k.amount3) : ""), 1), f1, t("div", y1, [t("span", $1, [t("span", T1, i(k.value), 1), k.hot3 ? (n(),
        a("span", w1)) : B("", !0)])])], 8, v1))), 256))])])) : B("", !0), z(xi, {
            show: T.value,
            "onUpdate:show": w[0] || (w[0] = k=>T.value = k),
            showCloseIcon: !0,
            clickOutSide: !0,
            "show-cancel-btn": !1,
            showFooter: !1,
            isShowHeader: !1
        }, {
            title: D(()=>{
                var k;
                return [t("div", C1, [(n(!0),
                a(S, null, G((k = f.value) == null ? void 0 : k.dice.split(","), v=>(n(),
                a("img", {
                    src: r(tt)("home/AllLotteryGames/binguo", `rule_dice_${v}`),
                    alt: ""
                }, null, 8, N1))), 256))])]
            }
            ),
            content: D(()=>{
                var k, v;
                return [t("div", L1, [t("div", z1, i((k = f.value) == null ? void 0 : k.tip1), 1), t("div", I1, i((v = f.value) == null ? void 0 : v.tip2), 1)])]
            }
            ),
            footer: D(()=>[]),
            _: 1
        }, 8, ["show"])]))
    }
});
const R1 = K(x1, [["__scopeId", "data-v-c361e07d"]])
  , S1 = {
    class: "bet_content"
}
  , M1 = {
    class: "bet_tit"
}
  , B1 = {
    class: "bet_cnt"
}
  , G1 = {
    class: "bet_item"
}
  , P1 = {
    class: "bet_item_tit"
}
  , D1 = {
    class: "bet_money_list"
}
  , A1 = ["onClick"]
  , O1 = {
    class: "bet_item"
}
  , q1 = {
    class: "bet_item_tit"
}
  , W1 = {
    class: "bet_step"
}
  , E1 = {
    class: "bet_money_list bet_beishu"
}
  , V1 = ["onClick"]
  , F1 = {
    class: "bet_info"
}
  , j1 = {
    class: "tit"
}
  , H1 = {
    class: "pl",
    style: {
        color: "#fff"
    }
}
  , U1 = {
    class: "bet_info"
}
  , K1 = {
    class: "tit"
}
  , X1 = {
    class: "pl",
    style: {
        color: "#cee98c"
    }
}
  , Q1 = {
    class: "bet_info"
}
  , Y1 = {
    class: "tit"
}
  , J1 = {
    class: "pl",
    style: {
        color: "#f9bc36"
    }
}
  , Z1 = {
    key: 0,
    class: "recharge_tip"
}
  , tf = {
    class: "apply"
}
  , ef = {
    class: "bet_btn_group"
}
  , nf = H({
    __name: "BinguoBetSheet",
    setup(l) {
        const {betSheetVisible: e, store: s, betPopTXT: u, filterNumberSize: g, handleStep: b, checkRule: d, handleCancel: c, handleBetSubmit: p} = Ge()
          , _ = pi().getUserInfo
          , m = ft()
          , T = ()=>{
            m.push("/wallet/recharge")
        }
        ;
        return (f,y)=>{
            const $ = j("van-field")
              , w = j("van-icon")
              , k = j("van-checkbox")
              , v = j("van-action-sheet");
            return n(),
            it(v, {
                show: r(e),
                "onUpdate:show": y[8] || (y[8] = L=>ii(e) ? e.value = L : null),
                closeable: !1
            }, {
                default: D(()=>[t("div", S1, [t("div", M1, i(f.$t("betting")), 1), t("div", B1, [(n(!0),
                a(S, null, G(r(s).bet_number.split(","), L=>(n(),
                a("span", {
                    class: M(`${r(g)}`)
                }, i(L), 3))), 256))]), t("div", G1, [t("div", P1, i(f.$t("amount")), 1), t("div", D1, [(n(!0),
                a(S, null, G(r(s).money_list, (L,C)=>(n(),
                a("div", {
                    class: M(["money_item", {
                        monyActive: r(s).currentMoneyIndex === C
                    }]),
                    onClick: I=>r(s).currentMoneyIndex = C
                }, i(L), 11, A1))), 256))])]), t("div", O1, [t("div", q1, [t("span", null, i(f.$t("multiple")), 1), t("div", W1, [t("span", {
                    onClick: y[0] || (y[0] = L=>r(b)("sub"))
                }, "-"), z($, {
                    modelValue: r(s).beishu,
                    "onUpdate:modelValue": y[1] || (y[1] = L=>r(s).beishu = L),
                    "input-align": "center",
                    onInput: y[2] || (y[2] = L=>{
                        if (9999 < Number(L.target.value)) {
                            r(s).beishu = 9999;
                            return
                        }
                        if (Number(L.target.value) < 1) {
                            r(s).beishu = 0;
                            return
                        }
                        r(s).beishu = Number(L.target.value)
                    }
                    ),
                    type: "digit",
                    class: "bet_beishu_input"
                }, null, 8, ["modelValue"]), t("span", {
                    onClick: y[3] || (y[3] = L=>r(b)("add"))
                }, "+")])]), t("div", E1, [(n(!0),
                a(S, null, G(r(s).beishuList, (L,C)=>(n(),
                a("div", {
                    class: M(["money_item", {
                        monyActive: r(s).currentBeishuIndex === C
                    }]),
                    onClick: I=>r(s).currentBeishuIndex = C
                }, " X" + i(L), 11, V1))), 256))])]), t("div", F1, [t("div", j1, i(f.$t("odds")), 1), t("div", H1, i(r(s).currentOdds), 1)]), t("div", U1, [t("div", K1, i(f.$t("walletBalance")), 1), t("div", X1, i(r(_).amount), 1)]), t("div", Q1, [t("div", Y1, i(f.$t("betAmounts")), 1), t("div", J1, i(r(s).bet_money * r(s).beishu), 1)]), r(_).amount < r(s).bet_money * r(s).beishu ? (n(),
                a("div", Z1, [t("div", null, [z(w, {
                    name: "warning-o",
                    size: "18"
                }), E(" " + i(f.$t("walletTip")), 1)]), t("span", {
                    onClick: T
                }, i(f.$t("goRecharge")) + " >>", 1)])) : B("", !0), z(k, {
                    modelValue: r(d),
                    "onUpdate:modelValue": y[5] || (y[5] = L=>ii(d) ? d.value = L : null),
                    "checked-color": "#CEE98C",
                    "label-disabled": "",
                    "icon-size": "24px"
                }, {
                    default: D(()=>[t("span", tf, i(f.$t("agree")), 1), t("span", {
                        class: "rule",
                        onClick: y[4] || (y[4] = ()=>{
                            e.value = !1,
                            u.value = !0
                        }
                        )
                    }, i(f.$t("presaleRules")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), t("div", ef, [t("div", {
                    class: "cancel_btn",
                    onClick: y[6] || (y[6] = (...L)=>r(c) && r(c)(...L))
                }, i(f.$t("cancel")), 1), t("div", {
                    class: M(["bet_btn", {
                        inconformity: r(_).amount < r(s).bet_money * r(s).beishu || !r(d) || r(s).bet_money * r(s).beishu === 0
                    }]),
                    onClick: y[7] || (y[7] = (...L)=>r(p) && r(p)(...L))
                }, i(f.$t("betting")), 3)])])]),
                _: 1
            }, 8, ["show"])
        }
    }
});
const af = K(nf, [["__scopeId", "data-v-999f9938"]]);
const of = {}
  , pn = l=>(Gt("data-v-65bb586b"),
l = l(),
Pt(),
l)
  , sf = {
    class: "container"
}
  , lf = {
    class: "first-paragraph"
}
  , cf = {
    class: "first-statement"
}
  , rf = {
    class: "paragraph-two"
}
  , uf = {
    class: "paragraph-two-statement"
}
  , df = {
    class: "paragraph-three"
}
  , pf = {
    class: "paragraph-three-statement"
}
  , gf = {
    class: "svg-container"
}
  , bf = on('<div class="first-vector" data-v-65bb586b><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-65bb586b><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.99997C-2.41411e-08 6.72383 0.223857 6.49997 0.499999 6.49997L119.5 6.49996C119.776 6.49996 120 6.72382 120 6.99996C120 7.27611 119.776 7.49996 119.5 7.49996L0.5 7.49997C0.223858 7.49997 2.41411e-08 7.27612 0 6.99997Z" fill="url(#paint0_linear_22_2052)" data-v-65bb586b></path><path d="M119.515 8.41418C118.734 7.63313 118.734 6.3668 119.515 5.58575L123.757 1.34311C124.538 0.562062 125.805 0.562062 126.586 1.34311L130.828 5.58575C131.609 6.3668 131.609 7.63313 130.828 8.41418L126.586 12.6568C125.805 13.4379 124.538 13.4379 123.757 12.6568L119.515 8.41418Z" fill="url(#paint1_linear_22_2052)" data-v-65bb586b></path><defs data-v-65bb586b><linearGradient id="paint0_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient><linearGradient id="paint1_linear_22_2052" x1="126" y1="7.00003" x2="-4.8188e-08" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient></defs></svg></div>', 1)
  , mf = {
    class: "vector-heading"
}
  , _f = on('<div class="vector-two" data-v-65bb586b><svg xmlns="http://www.w3.org/2000/svg" width="132" height="14" viewBox="0 0 132 14" fill="none" data-v-65bb586b><path fill-rule="evenodd" clip-rule="evenodd" d="M132 6.99997C132 6.72383 131.776 6.49997 131.5 6.49997L12.5 6.49996C12.2239 6.49996 12 6.72382 12 6.99996C12 7.27611 12.2239 7.49996 12.5 7.49996L131.5 7.49997C131.776 7.49997 132 7.27612 132 6.99997Z" fill="url(#paint0_linear_22_2053)" data-v-65bb586b></path><path d="M12.4853 8.41418C13.2664 7.63313 13.2664 6.3668 12.4853 5.58575L8.24268 1.34311C7.46163 0.562062 6.1953 0.562062 5.41425 1.34311L1.17162 5.58575C0.390564 6.3668 0.390564 7.63313 1.17162 8.41418L5.41425 12.6568C6.1953 13.4379 7.46163 13.4379 8.24268 12.6568L12.4853 8.41418Z" fill="url(#paint1_linear_22_2053)" data-v-65bb586b></path><defs data-v-65bb586b><linearGradient id="paint0_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient><linearGradient id="paint1_linear_22_2053" x1="6.00001" y1="7.00003" x2="132" y2="7.00003" gradientUnits="userSpaceOnUse" data-v-65bb586b><stop stop-color="#5DBA47" data-v-65bb586b></stop><stop offset="1" stop-color="#5DBA47" stop-opacity="0" data-v-65bb586b></stop></linearGradient></defs></svg></div>', 1)
  , hf = {
    class: "details-container-one"
}
  , vf = {
    class: "details-container-items"
}
  , kf = {
    class: "first-heading"
}
  , ff = {
    class: "fontBold"
}
  , yf = {
    class: "paragraph-inside-container"
}
  , $f = {
    class: "paragraph-title"
}
  , Tf = {
    class: "paragraph-inside-container"
}
  , wf = {
    class: "paragraph-title"
}
  , Cf = {
    class: "paragraph-inside-container"
}
  , Nf = {
    class: "paragraph-title"
}
  , Lf = {
    class: "paragraph-inside-container"
}
  , zf = {
    class: "paragraph-title"
}
  , If = {
    class: "details-container-one"
}
  , xf = {
    class: "details-container-items"
}
  , Rf = {
    class: "first-heading"
}
  , Sf = pn(()=>t("span", {
    class: "fontBold"
}, "1,2,3,4,5,6", -1))
  , Mf = {
    class: "paragraph-inside-container"
}
  , Bf = {
    class: "paragraph-title"
}
  , Gf = {
    class: "details-container-one"
}
  , Pf = {
    class: "details-container-items"
}
  , Df = {
    class: "first-heading"
}
  , Af = pn(()=>t("span", {
    class: "fontBold"
}, "11,22...66", -1))
  , Of = {
    class: "paragraph-inside-container"
}
  , qf = {
    class: "paragraph-title"
}
  , Wf = {
    class: "details-container-one"
}
  , Ef = {
    class: "details-container-items"
}
  , Vf = {
    class: "first-heading"
}
  , Ff = pn(()=>t("span", {
    class: "fontBold"
}, "111,222...666,***", -1))
  , jf = {
    class: "paragraph-inside-container"
}
  , Hf = {
    class: "paragraph-title"
}
  , Uf = {
    class: "paragraph-inside-container"
}
  , Kf = {
    class: "paragraph-title"
};
function Xf(l, e) {
    return n(),
    a("div", sf, [t("div", lf, [t("p", cf, i(l.$t("binguoRuleText1")), 1)]), t("div", rf, [t("p", uf, i(l.$t("binguoRuleText2")), 1)]), t("div", df, [t("p", pf, i(l.$t("binguoRuleText3")), 1)]), t("div", gf, [bf, t("div", mf, i(l.$t("gamePlay")), 1), _f]), t("div", hf, [t("div", vf, i(l.$t("xosoTxt60")), 1), t("div", kf, [E(i(l.$t("binguoRuleText4")) + " ", 1), t("span", ff, i(l.$t("binguoRuleText5")), 1), E(i(l.$t("binguoRuleText6")), 1)]), t("div", yf, [t("div", $f, [t("span", null, i(l.$t("binguoRuleText7")) + ":", 1), E(i(l.$t("binguoRuleText8")), 1)])]), t("div", Tf, [t("div", wf, [t("span", null, i(l.$t("binguoRuleText9")) + ":", 1), E(i(l.$t("binguoRuleText10")), 1)])]), t("div", Cf, [t("div", Nf, [t("span", null, i(l.$t("binguoRuleText17")) + ":", 1), E(i(l.$t("binguoRuleText18")), 1)])]), t("div", Lf, [t("div", zf, [t("span", null, i(l.$t("binguoRuleText11")) + ",", 1), E(i(l.$t("binguoRuleText12")), 1)])])]), t("div", If, [t("div", xf, i(l.$t("same")), 1), t("div", Rf, [E(i(l.$t("binguoRuleText4")) + " ", 1), Sf]), t("div", Mf, [t("div", Bf, i(l.$t("binguoRuleText13")), 1)])]), t("div", Gf, [t("div", Pf, i(l.$t("sameNum")), 1), t("div", Df, [E(i(l.$t("binguoRuleText4")), 1), Af]), t("div", Of, [t("div", qf, i(l.$t("binguoRuleText14")), 1)])]), t("div", Wf, [t("div", Ef, i(l.$t("numbersMatch")), 1), t("div", Vf, [E(i(l.$t("binguoRuleText4")), 1), Ff]), t("div", jf, [t("div", Hf, i(l.$t("binguoRuleText15")), 1)]), t("div", Uf, [t("div", Kf, i(l.$t("binguoRuleText16")), 1)])])])
}
const Qf = K(of, [["render", Xf], ["__scopeId", "data-v-65bb586b"]])
  , Yf = l=>(Gt("data-v-e2b24d31"),
l = l(),
Pt(),
l)
  , Jf = {
    class: "binguo_container"
}
  , Zf = Yf(()=>t("span", {
    class: "nav_title"
}, "BINGO18", -1))
  , ty = {
    class: "nav_right"
}
  , iy = {
    class: "binguo_btn_group"
}
  , ey = ["src"]
  , ny = {
    class: "over_dialog_tip"
}
  , ay = {
    class: "playerRule"
}
  , oy = {
    class: "playerRule"
}
  , sy = {
    style: {
        color: "#fff"
    }
}
  , ly = H({
    __name: "index",
    setup(l) {
        const {goBack: e, betPopTXT: s, isShowBetMoney: u, handleToggleShwoMoney: g, store: b, overVisble: d, getBinguoConfig: c, getBinguoOddsList: p, playerRuleVisble: o} = Ge()
          , _ = ft()
          , m = ()=>{
            _.push({
                path: "/home/AllLotteryGames/BinguoRecord"
            })
        }
        ;
        return Ct(()=>{
            c(),
            p()
        }
        ),
        (T,f)=>{
            const y = j("van-icon")
              , $ = j("NavBar");
            return n(),
            a("div", Jf, [z($, {
                "left-arrow": "",
                onClickLeft: r(e),
                backgroundColor: "#0a4529"
            }, {
                left: D(()=>[z(y, {
                    name: "arrow-left",
                    size: 24
                }), Zf]),
                right: D(()=>[t("div", ty, [t("div", {
                    onClick: f[0] || (f[0] = hi(()=>o.value = !0, ["stop"])),
                    class: "binguo_explain"
                }), t("div", {
                    class: M(["binguo_money", r(u) ? "binguo_money_look" : "binguo_money_hidden"]),
                    onClick: f[1] || (f[1] = hi(()=>r(g)(), ["stop"]))
                }, null, 2), t("div", {
                    onClick: f[2] || (f[2] = hi(()=>m(), ["stop"])),
                    class: "binguo_count1"
                })])]),
                _: 1
            }, 8, ["onClickLeft"]), t("div", iy, [t("div", {
                class: M(["btn_1", {
                    active_btn: r(b).binguoType === 1
                }]),
                onClick: f[3] || (f[3] = w=>r(b).binguoType = 1)
            }, i(T.$t("binguoDesk1")), 3), t("div", {
                class: M(["btn_2", {
                    active_btn: r(b).binguoType === 2
                }]),
                onClick: f[4] || (f[4] = w=>r(b).binguoType = 2)
            }, i(T.$t("binguoDesk2")), 3)]), z(Vk), z(R1), z(af), z(xi, {
                show: r(d),
                onConfirm: f[5] || (f[5] = w=>d.value = !1),
                "show-cancel-btn": !1,
                confirmText: T.$t("confirm")
            }, {
                header: D(()=>[t("img", {
                    src: r(tt)("home/AllLotteryGames/binguo", "binguo_tip"),
                    alt: "",
                    class: "binguo_tip"
                }, null, 8, ey)]),
                content: D(()=>[t("div", ny, i(T.$t("over_dialog_tip")), 1)]),
                _: 1
            }, 8, ["show", "confirmText"]), z(xi, {
                class: "rule_dialog",
                show: r(o),
                onConfirm: f[6] || (f[6] = w=>o.value = !1),
                "show-cancel-btn": !1,
                isShowHeader: !1,
                confirmText: T.$t("iKonw")
            }, {
                title: D(()=>[t("div", null, i(T.$t("binguo_playerRule")), 1)]),
                content: D(()=>[t("div", ay, [z(Qf)])]),
                _: 1
            }, 8, ["show", "confirmText"]), z(xi, {
                class: "rule_dialog",
                show: r(s),
                onConfirm: f[7] || (f[7] = w=>s.value = !1),
                "show-cancel-btn": !1,
                isShowHeader: !1,
                confirmText: T.$t("iKonw")
            }, {
                title: D(()=>[t("div", null, i(T.$t("presaleRules")), 1)]),
                content: D(()=>[t("div", oy, [t("div", sy, i(T.$t("betPopTXT")), 1)])]),
                _: 1
            }, 8, ["show", "confirmText"])])
        }
    }
});
const cy = K(ly, [["__scopeId", "data-v-e2b24d31"]])
  , wx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ry = {
    class: "binguo_count_tab"
}
  , uy = ["onClick"]
  , dy = H({
    __name: "BinguoTab",
    setup(l) {
        const {store: e} = Ji()
          , {t: s} = kt()
          , u = [{
            lable: s("betting"),
            value: 1
        }, {
            lable: s("detail"),
            value: 2
        }, {
            lable: s("thisWeek"),
            value: 3
        }, {
            lable: s("binguoLeaderboard"),
            value: 4
        }];
        return (g,b)=>(n(),
        a("div", ry, [(n(),
        a(S, null, G(u, (d,c)=>t("div", {
            class: M(["item", {
                active: r(e).currentTabIndex === c
            }]),
            key: d.value,
            onClick: p=>r(e).currentTabIndex = c
        }, i(d.lable), 11, uy)), 64))]))
    }
});
const py = K(dy, [["__scopeId", "data-v-0f91ea76"]])
  , gy = l=>(Gt("data-v-c375424d"),
l = l(),
Pt(),
l)
  , by = {
    class: "t-table_border"
}
  , my = {
    class: "t-table_th_round"
}
  , _y = {
    class: "tab_header"
}
  , hy = {
    key: 0,
    class: "tab_default_cell"
}
  , vy = {
    class: "tab_default_cell"
}
  , ky = {
    key: 0
}
  , fy = {
    key: 0
}
  , yy = ["colspan"]
  , $y = gy(()=>t("div", {
    style: {
        color: "#666",
        "font-size": "14px",
        padding: "6px",
        "text-align": "center"
    }
}, "暂无数据", -1))
  , Ty = H({
    __name: "index",
    props: {
        dataSource: {},
        columnOptions: {},
        headerClass: {},
        bodyClass: {},
        isLockHeader: {
            type: Boolean
        },
        border: {
            type: Boolean,
            default: !0
        },
        scroll: {
            type: Boolean,
            default: !0
        },
        borderColor: {
            default: "#0B462A"
        },
        hBgColor: {
            default: "linear-gradient(180deg, #0A603E 0%, #168055 100%)"
        },
        hColor: {
            default: "#F9BC36"
        },
        align: {
            default: "center"
        },
        rowHeight: {
            default: "auto"
        },
        rowBgColor: {
            default: "#09613E"
        },
        tabWidth: {
            default: "100%"
        },
        tabHeight: {
            default: "600px"
        }
    },
    setup(l) {
        const e = l;
        Io(o=>({
            "70334ce3": o.tabWidth,
            "7c6755aa": o.tabHeight,
            "5911c82f": r(d),
            f4262ada: r(g),
            e5d07fd4: r(u),
            "41635e0d": o.hColor,
            31354248: r(b)
        }));
        const s = h([])
          , {rowBgColor: u, align: g, hBgColor: b, rowHeight: d} = e
          , c = ()=>{
            s.value = JSON.parse(JSON.stringify(e.dataSource))
        }
          , p = ()=>{
            e.columnOptions.forEach((o,_)=>{
                if (o.isLockColumn) {
                    let m = document.querySelector(`.th_${o.key}_${_}`)
                      , T = document.querySelectorAll(`.td_${o.key}`);
                    m.style.position = "sticky",
                    m.style.top = "-2px",
                    m.style.left = "0",
                    m.style.zIndex = "11",
                    T.forEach(f=>{
                        f.style.position = "sticky",
                        f.style.left = "0",
                        f.style.zIndex = "10"
                    }
                    )
                }
            }
            )
        }
        ;
        return Ct(()=>{
            p()
        }
        ),
        At(()=>e.dataSource, (o,_)=>{
            o !== _ && (c(),
            p())
        }
        , {
            deep: !0
        }),
        (o,_)=>(n(),
        a("div", {
            class: "cuTable",
            style: Ci({
                ...o.scroll && {
                    overflowX: "auto"
                },
                ...!o.scroll && {
                    overflow: "hidden"
                }
            })
        }, [t("div", by, [t("table", my, [t("tr", _y, [(n(!0),
        a(S, null, G(o.columnOptions, (m,T)=>(n(),
        a("th", {
            style: Ci({
                width: m.width || 100 / o.columnOptions.length + "%"
            }),
            key: T + "p",
            class: M(`th_${m.key}_${T} default_header_cell ${o.border ? "" : "noBorder"}`)
        }, [m.isSlotHeader ? mi(o.$slots, m.key + "_head", {
            key: 1,
            item: m
        }, void 0, !0) : (n(),
        a("div", hy, i(m.title), 1))], 6))), 128))]), (n(!0),
        a(S, null, G(o.dataSource, (m,T)=>pt((n(),
        a("tr", {
            class: "tab_body",
            key: T + "p1"
        }, [(n(!0),
        a(S, null, G(o.columnOptions, (f,y)=>(n(),
        a("td", {
            key: y + "p2",
            class: M(`td_${f.key} default_cell ${f.cusTdClass || ""} ${o.border ? "" : "noBorder"}`),
            style: Ci({
                width: f.width
            })
        }, [t("div", vy, [f.isSlot ? B("", !0) : (n(),
        a("span", ky, i(m[f.key]), 1)), mi(o.$slots, f.key, {
            item: m
        }, void 0, !0)])], 6))), 128))])), [[ci, o.dataSource && o.dataSource.length > 0]])), 128)), o.dataSource.length === 0 ? (n(),
        a("tr", fy, [t("td", {
            colspan: o.columnOptions.length
        }, [mi(o.$slots, "empty", {}, ()=>[$y], !0)], 8, yy)])) : B("", !0)])])], 4))
    }
});
const Qi = K(Ty, [["__scopeId", "data-v-c375424d"]])
  , wy = {
    class: "binguo_bet_count"
}
  , Cy = {
    class: "bingtip_count_title"
}
  , Ny = {
    class: "lately"
}
  , Ly = {
    class: "average_column"
}
  , zy = {
    class: "noaverage_column"
}
  , Iy = {
    class: "average_column"
}
  , xy = {
    class: "noaverage_column"
}
  , Ry = {
    class: "progress_box"
}
  , Sy = {
    class: "progress"
}
  , My = {
    class: "tit"
}
  , By = {
    class: "progress"
}
  , Gy = {
    class: "tit"
}
  , Py = {
    class: "progress"
}
  , Dy = {
    class: "tit"
}
  , Ay = {
    class: "bingtip_count_title"
}
  , Oy = {
    class: "alike_column"
}
  , qy = {
    class: "big"
}
  , Wy = {
    class: "bingtip_count_title two_title"
}
  , Ey = {
    class: "alike_column"
}
  , Vy = {
    class: "big"
}
  , Fy = H({
    __name: "BinguoBetCount",
    setup(l) {
        const {store: e, filterStyle: s} = Ji()
          , {t: u} = kt()
          , g = Q(()=>{
            var p, o, _, m;
            return (p = e.smallAndBigTrend) != null && p.bigCount ? ((o = e.smallAndBigTrend) == null ? void 0 : o.bigCount) + ((_ = e.smallAndBigTrend) == null ? void 0 : _.smallCount) + ((m = e.smallAndBigTrend) == null ? void 0 : m.equalCount) : 0
        }
        )
          , b = h([{
            title: u("xosoTxt60"),
            key: "number",
            isSlot: !0,
            cusTdClass: "sum_column"
        }, {
            title: u("binguoAvgCount"),
            key: "avgCount",
            isSlot: !0
        }, {
            title: u("binguoNotOpenCount"),
            key: "notOpenCount",
            isSlot: !0
        }])
          , d = h([{
            title: u("numbersMatch"),
            key: "number",
            isSlot: !0,
            cusTdClass: "sum_column"
        }, {
            title: u("binguoOpenCount"),
            key: "openCount",
            isSlot: !1
        }, {
            title: u("binguoAvgCount"),
            key: "avgCount",
            isSlot: !1
        }, {
            title: u("binguoNotOpenCount"),
            key: "notOpenCount",
            isSlot: !1
        }])
          , c = Q(()=>{
            let p = gs(d.value);
            return p[0].title = u("sameNum"),
            p
        }
        );
        return (p,o)=>{
            var m, T, f, y, $, w;
            const _ = j("van-progress");
            return n(),
            a("div", wy, [t("div", Cy, i(p.$t("binguoLastIssue")), 1), t("div", Ny, [z(Qi, {
                "column-options": b.value,
                "data-source": r(e).resultSumTrend.slice(0, 8),
                rowHeight: "40px",
                tabWidth: "49.6%",
                tabHeight: "100%",
                border: !1
            }, {
                number: D(({item: k})=>[t("div", {
                    class: M(`sum_column ${r(s)(k.number)}`)
                }, i(k.number), 3)]),
                avgCount: D(({item: k})=>[t("div", Ly, i(k.avgCount), 1)]),
                notOpenCount: D(({item: k})=>[t("div", zy, i(k.notOpenCount), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"]), z(Qi, {
                "column-options": b.value,
                "data-source": r(e).resultSumTrend.slice(8, 16),
                rowHeight: "40px",
                tabWidth: "49.6%",
                tabHeight: "100%",
                border: !1
            }, {
                number: D(({item: k})=>[t("div", {
                    class: M(`sum_column ${r(s)(k.number)}`)
                }, i(k.number), 3)]),
                avgCount: D(({item: k})=>[t("div", Iy, i(k.avgCount), 1)]),
                notOpenCount: D(({item: k})=>[t("div", xy, i(k.notOpenCount), 1)]),
                _: 1
            }, 8, ["column-options", "data-source"])]), t("div", Ry, [t("div", Sy, [t("div", My, [t("span", null, i(p.$t("small")), 1), t("div", null, [E(i(p.$t("binguoAppeared")), 1), t("span", null, i((m = r(e).smallAndBigTrend) == null ? void 0 : m.smallCount), 1)])]), z(_, {
                percentage: ((T = r(e).smallAndBigTrend) == null ? void 0 : T.smallCount) / g.value * 100,
                "stroke-width": "10",
                "track-color": "#0A603E",
                color: "#5DBA47"
            }, null, 8, ["percentage"])]), t("div", By, [t("div", Gy, [t("span", null, i(p.$t("binguoHe")), 1), t("div", null, [E(i(p.$t("binguoAppeared")), 1), t("span", null, i((f = r(e).smallAndBigTrend) == null ? void 0 : f.equalCount), 1)])]), z(_, {
                percentage: ((y = r(e).smallAndBigTrend) == null ? void 0 : y.equalCount) / g.value * 100,
                "stroke-width": "10",
                "track-color": "#0A603E",
                color: "#F9BC36"
            }, null, 8, ["percentage"])]), t("div", Py, [t("div", Dy, [t("span", null, i(p.$t("k3Big")), 1), t("div", null, [E(i(p.$t("binguoAppeared")), 1), t("span", null, i(($ = r(e).smallAndBigTrend) == null ? void 0 : $.bigCount), 1)])]), z(_, {
                percentage: ((w = r(e).smallAndBigTrend) == null ? void 0 : w.bigCount) / g.value * 100,
                "stroke-width": "10",
                "track-color": "#0A603E",
                color: "#5DBA47"
            }, null, 8, ["percentage"])])]), t("div", Ay, i(p.$t("binguoThirdAlike")), 1), z(Qi, {
                "column-options": d.value,
                "data-source": r(e).threeSameTrend,
                rowHeight: "40px",
                tabWidth: "100%",
                tabHeight: "100%",
                border: !1,
                class: "binguoCountTable"
            }, {
                number: D(({item: k})=>[t("div", Oy, [(n(!0),
                a(S, null, G((k.number + "").split(""), v=>(n(),
                a("div", qy, i(v), 1))), 256))])]),
                _: 1
            }, 8, ["column-options", "data-source"]), t("div", Wy, i(p.$t("binguoTwoAlike")), 1), z(Qi, {
                "column-options": c.value,
                "data-source": r(e).twoSameTrend,
                rowHeight: "40px",
                tabWidth: "100%",
                tabHeight: "100%",
                border: !1,
                class: "binguoCountTable"
            }, {
                number: D(({item: k})=>[t("div", Ey, [(n(!0),
                a(S, null, G((k.number + "").split(""), v=>(n(),
                a("div", Vy, i(v), 1))), 256))])]),
                _: 1
            }, 8, ["column-options", "data-source"])])
        }
    }
});
const jy = K(Fy, [["__scopeId", "data-v-0c2d4a4c"]])
  , be = l=>(Gt("data-v-f1b0d287"),
l = l(),
Pt(),
l)
  , Hy = {
    class: "binguo_detail"
}
  , Uy = {
    class: "bingtip_count_title"
}
  , Ky = {
    class: "result1"
}
  , Xy = {
    class: "column_list"
}
  , Qy = {
    class: "bingtip_count_title"
}
  , Yy = {
    class: "record_list"
}
  , Jy = {
    class: "record_item"
}
  , Zy = {
    class: "item"
}
  , t0 = {
    key: 1
}
  , i0 = {
    class: "bingtip_count_title"
}
  , e0 = {
    class: "issueNo_head"
}
  , n0 = {
    class: "issue_text"
}
  , a0 = {
    class: "issue_number"
}
  , o0 = be(()=>t("div", {
    class: "ball"
}, "1", -1))
  , s0 = be(()=>t("div", {
    class: "ball"
}, "2", -1))
  , l0 = be(()=>t("div", {
    class: "ball"
}, "3", -1))
  , c0 = be(()=>t("div", {
    class: "ball"
}, "4", -1))
  , r0 = be(()=>t("div", {
    class: "ball"
}, "5", -1))
  , u0 = be(()=>t("div", {
    class: "ball"
}, "6", -1))
  , d0 = {
    class: "issueNo_column"
}
  , p0 = H({
    __name: "BinguoDetail",
    setup(l) {
        const {t: e} = kt()
          , s = h([{
            title: e("betNumber"),
            key: "issueNo",
            isSlotHeader: !0,
            isSlot: !0,
            width: "28%"
        }, {
            title: "1",
            key: "num1",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "2",
            key: "num2",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "3",
            key: "num3",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "4",
            key: "num4",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "5",
            key: "num5",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: "6",
            key: "num6",
            isSlotHeader: !0,
            isSlot: !0,
            width: "10%"
        }, {
            title: e("gameRecordTotal"),
            key: "sum",
            isSlot: !0,
            width: "10%"
        }])
          , {filterStyle: u, last50Result: g, last50Record: b, last50RecordResult: d} = Ji();
        return (c,p)=>(n(),
        a("div", Hy, [t("div", Uy, i(c.$t("binguoLast50")), 1), t("div", Ky, [(n(!0),
        a(S, null, G(r(g), o=>(n(),
        a("div", Xy, [(n(!0),
        a(S, null, G(o, _=>(n(),
        a("div", {
            class: M(`item ${r(u)(_)}`)
        }, i(_), 3))), 256))]))), 256))]), t("div", Qy, i(c.$t("binguoLast50Record")), 1), t("div", Yy, [(n(!0),
        a(S, null, G(r(b), o=>(n(),
        a("div", Jy, [(n(!0),
        a(S, null, G(o, _=>(n(),
        a("div", Zy, [_ ? (n(),
        a("div", {
            key: 0,
            class: M(`${r(u)(_)}`)
        }, i(_), 3)) : (n(),
        a("div", t0))]))), 256))]))), 256))]), t("div", i0, i(c.$t("binguoRecordResult")), 1), z(Qi, {
            "column-options": s.value,
            "data-source": r(d),
            rowHeight: "30px",
            tabWidth: "100%",
            hBgColor: "linear-gradient(180deg, #0A603E 0%, #168055 100%)",
            tabHeight: "100%",
            border: !0,
            hColor: "#FFF880"
        }, {
            issueNo_head: D(()=>[t("div", e0, [t("span", n0, i(c.$t("betNumber")), 1), t("span", a0, i(c.$t("binguoNumber")), 1)])]),
            num1_head: D(()=>[o0]),
            num2_head: D(()=>[s0]),
            num3_head: D(()=>[l0]),
            num4_head: D(()=>[c0]),
            num5_head: D(()=>[r0]),
            num6_head: D(()=>[u0]),
            issueNo: D(({item: o})=>[t("div", d0, i(o.issueNo), 1)]),
            sum: D(({item: o})=>[t("div", {
                class: M(`sum_column ${r(u)(o.sum)}`)
            }, i(o.sum), 3)]),
            num1: D(({item: o})=>[t("div", {
                class: M(`num_column num_column${o.num1}`)
            }, [(n(!0),
            a(S, null, G(o.num1, ()=>(n(),
            a("div"))), 256))], 2)]),
            num2: D(({item: o})=>[t("div", {
                class: M(`num_column num_column${o.num2}`)
            }, [(n(!0),
            a(S, null, G(o.num2, ()=>(n(),
            a("div"))), 256))], 2)]),
            num3: D(({item: o})=>[t("div", {
                class: M(`num_column num_column${o.num3}`)
            }, [(n(!0),
            a(S, null, G(o.num3, ()=>(n(),
            a("div"))), 256))], 2)]),
            num4: D(({item: o})=>[t("div", {
                class: M(`num_column num_column${o.num4}`)
            }, [(n(!0),
            a(S, null, G(o.num4, ()=>(n(),
            a("div"))), 256))], 2)]),
            num5: D(({item: o})=>[t("div", {
                class: M(`num_column num_column${o.num5}`)
            }, [(n(!0),
            a(S, null, G(o.num5, ()=>(n(),
            a("div"))), 256))], 2)]),
            num6: D(({item: o})=>[t("div", {
                class: M(`num_column num_column${o.num6}`)
            }, [(n(!0),
            a(S, null, G(o.num6, ()=>(n(),
            a("div"))), 256))], 2)]),
            _: 1
        }, 8, ["column-options", "data-source"])]))
    }
});
const g0 = K(p0, [["__scopeId", "data-v-f1b0d287"]])
  , gn = l=>(Gt("data-v-596004d5"),
l = l(),
Pt(),
l)
  , b0 = {
    class: "trend_container"
}
  , m0 = {
    class: "trend_header"
}
  , _0 = {
    class: "trend_header_title"
}
  , h0 = gn(()=>t("span", null, "7", -1))
  , v0 = gn(()=>t("br", null, null, -1))
  , k0 = gn(()=>t("span", null, "100", -1))
  , f0 = ["src"]
  , y0 = ["src"]
  , $0 = {
    class: "trend_table"
}
  , T0 = {
    class: "trend_tip"
}
  , w0 = {
    class: "tip_text"
}
  , C0 = {
    key: 0
}
  , N0 = {
    key: 0
}
  , L0 = {
    class: "custom_column"
}
  , z0 = {
    class: "custom_column winmount_column"
}
  , I0 = H({
    __name: "BinguoTrend",
    setup(l) {
        const {store: e} = Ji()
          , {t: s} = kt()
          , u = h([{
            title: "Top",
            key: "rankID",
            isSlot: !0,
            width: "20%",
            cusTdClass: "rankID_column"
        }, {
            title: s("account"),
            key: "userName",
            width: "38%",
            isSlot: !0
        }, {
            title: s("winningAmount"),
            width: "42%",
            key: "winAmount",
            isSlot: !0
        }])
          , g = ft()
          , b = ()=>{
            e.isTrend || g.back()
        }
        ;
        return (d,c)=>(n(),
        a("div", b0, [t("div", m0, [t("div", _0, [E(i(d.$t("binguoLately")), 1), h0, E(i(d.$t("days")), 1), v0, E(" " + i(d.$t("binguoQian")), 1), k0, E(i(d.$t("binguoMin") + d.$t("binguoPaimin")), 1)]), t("img", {
            src: r(tt)("home/AllLotteryGames/binguo", "trend1"),
            class: "trend1",
            alt: ""
        }, null, 8, f0), t("img", {
            src: r(tt)("home/AllLotteryGames/binguo", "trend2"),
            class: "trend2",
            alt: ""
        }, null, 8, y0)]), t("div", $0, [t("div", T0, [t("div", w0, [E(i(r(e).isTrend ? d.$t("binguoMyLead") : d.$t("binguoNotBoard")) + " ", 1), r(e).isTrend ? B("", !0) : (n(),
        a("br", C0)), E(" " + i(r(e).isTrend ? "" : d.$t("binguoGoPlay")), 1)]), t("div", {
            class: "trend_go",
            onClick: b
        }, [E(i(r(e).isTrend ? r(e).userRank : "GO") + " ", 1), r(e).isTrend ? (n(),
        a("span", N0, i(d.$t("binguoMin")), 1)) : B("", !0)])]), z(Qi, {
            "column-options": u.value,
            "data-source": r(e).trendList,
            rowHeight: "50px",
            tabWidth: "100%",
            hBgColor: "linear-gradient(180deg, #13AB62 0%, #0F6946 100%)",
            tabHeight: "100%",
            border: !1,
            hColor: "#FFF880"
        }, {
            rankID: D(({item: p})=>[t("div", {
                class: M(["rankID_column", `${p.rankID < 4 ? "top_" + p.rankID : "rank_text"}`])
            }, i(p.rankID > 3 ? p.rankID : ""), 3)]),
            userName: D(({item: p})=>[t("div", L0, i(p.userName), 1)]),
            winAmount: D(({item: p})=>[t("div", z0, i(r(Rt)(p.winAmount)), 1)]),
            _: 1
        }, 8, ["column-options", "data-source"])])]))
    }
});
const x0 = K(I0, [["__scopeId", "data-v-596004d5"]])
  , R0 = {
    class: "last7Day_container"
}
  , S0 = {
    class: "bingtip_count_title"
}
  , M0 = {
    class: "column_time"
}
  , B0 = {
    key: 0,
    class: "result"
}
  , G0 = {
    class: "quan"
}
  , P0 = {
    key: 0,
    class: "result"
}
  , D0 = {
    class: "quan"
}
  , A0 = {
    key: 0,
    class: "result"
}
  , O0 = {
    class: "quan"
}
  , q0 = {
    key: 0,
    class: "result"
}
  , W0 = {
    class: "quan"
}
  , E0 = {
    key: 0,
    class: "result"
}
  , V0 = {
    class: "quan"
}
  , F0 = {
    key: 0,
    class: "result"
}
  , j0 = {
    class: "quan"
}
  , H0 = {
    key: 0,
    class: "result"
}
  , U0 = {
    class: "quan"
}
  , K0 = H({
    __name: "BinguoLast7Day",
    setup(l) {
        const {store: e, columnOptions: s, filterStyle: u} = Ji();
        return (g,b)=>(n(),
        a("div", R0, [t("div", S0, i(g.$t("binguoLast7Result")), 1), z(Qi, {
            "column-options": r(s),
            "data-source": r(e).last7Day,
            rowHeight: "40px",
            "tab-height": "1200px"
        }, {
            issueEndTime: D(({item: d})=>[t("div", M0, i(d.issueEndTime), 1)]),
            time_index_0: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_0 ? (n(),
                a("div", B0, [t("div", G0, [(n(!0),
                a(S, null, G((c = d.time_index_0) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_0) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_0) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            time_index_1: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_1 ? (n(),
                a("div", P0, [t("div", D0, [(n(!0),
                a(S, null, G((c = d.time_index_1) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_1) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_1) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            time_index_2: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_2 ? (n(),
                a("div", A0, [t("div", O0, [(n(!0),
                a(S, null, G((c = d.time_index_2) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_2) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_2) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            time_index_3: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_3 ? (n(),
                a("div", q0, [t("div", W0, [(n(!0),
                a(S, null, G((c = d.time_index_3) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_3) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_3) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            time_index_4: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_4 ? (n(),
                a("div", E0, [t("div", V0, [(n(!0),
                a(S, null, G((c = d.time_index_4) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_4) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_4) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            time_index_5: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_5 ? (n(),
                a("div", F0, [t("div", j0, [(n(!0),
                a(S, null, G((c = d.time_index_5) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_5) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_5) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            time_index_6: D(({item: d})=>{
                var c, p, o;
                return [d.time_index_6 ? (n(),
                a("div", H0, [t("div", U0, [(n(!0),
                a(S, null, G((c = d.time_index_6) == null ? void 0 : c.result.split(""), _=>(n(),
                a("div", null, i(_), 1))), 256))]), t("div", {
                    class: M(["result_sum", r(u)((p = d.time_index_6) == null ? void 0 : p.resultSum)])
                }, i((o = d.time_index_6) == null ? void 0 : o.resultSum), 3)])) : B("", !0)]
            }
            ),
            _: 1
        }, 8, ["column-options", "data-source"])]))
    }
});
const X0 = K(K0, [["__scopeId", "data-v-5e5628ad"]])
  , Q0 = {
    class: "binguo_count"
}
  , Y0 = H({
    __name: "index",
    setup(l) {
        const {store: e, getTrendstatistics: s, getLotteryRankList: u, getLotteryResult7Day: g, getBingo18Last50Result: b} = Ji()
          , d = ft()
          , c = ()=>{
            d.back()
        }
        ;
        return At(()=>e.currentTabIndex, p=>{
            switch (p) {
            case 0:
                s();
                break;
            case 1:
                b();
                break;
            case 2:
                g();
                break;
            case 3:
                u();
                break
            }
        }
        , {
            immediate: !0
        }),
        (p,o)=>{
            const _ = j("NavBar");
            return n(),
            a("div", Q0, [z(_, {
                "left-arrow": "",
                onClickLeft: c,
                backgroundColor: "#0a4529",
                title: `${p.$t("binguoCount")}`
            }, null, 8, ["title"]), z(py), r(e).currentTabIndex === 0 ? (n(),
            it(jy, {
                key: 0
            })) : B("", !0), r(e).currentTabIndex === 1 ? (n(),
            it(g0, {
                key: 1
            })) : B("", !0), r(e).currentTabIndex === 2 ? (n(),
            it(X0, {
                key: 2
            })) : B("", !0), r(e).currentTabIndex === 3 ? (n(),
            it(x0, {
                key: 3
            })) : B("", !0)])
        }
    }
});
const Cx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Y0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Pe = l=>(Gt("data-v-1f6155ee"),
l = l(),
Pt(),
l)
  , J0 = {
    class: "body-container"
}
  , Z0 = {
    class: "MyGameRecordList__C"
}
  , t2 = ["onClick"]
  , i2 = {
    class: "MyGameRecordList__C_left"
}
  , e2 = {
    class: "MyGameRecordList__C-item-m"
}
  , n2 = {
    class: "MyGameRecordList__C-item-m-top"
}
  , a2 = {
    class: "MyGameRecordList__C-item-m-bottom"
}
  , o2 = {
    key: 0
}
  , s2 = {
    key: 0,
    class: "MyGameRecordList__C-detail"
}
  , l2 = {
    class: "detail_title"
}
  , c2 = {
    class: "detail_item"
}
  , r2 = {
    class: "item_title"
}
  , u2 = {
    class: "item_result"
}
  , d2 = ["onClick"]
  , p2 = Pe(()=>t("path", {
    d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}, null, -1))
  , g2 = Pe(()=>t("path", {
    d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
    fill: "#87C7AF",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linejoin": "round"
}, null, -1))
  , b2 = [p2, g2]
  , m2 = {
    class: "detail_item"
}
  , _2 = {
    class: "item_title"
}
  , h2 = {
    class: "item_result"
}
  , v2 = ["onClick"]
  , k2 = Pe(()=>t("path", {
    d: "M6.5 6.2158V3.90625C6.5 3.1296 7.1296 2.5 7.90625 2.5H20.0938C20.8704 2.5 21.5 3.1296 21.5 3.90625V16.0938C21.5 16.8704 20.8704 17.5 20.0938 17.5H17.7582",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}, null, -1))
  , f2 = Pe(()=>t("path", {
    d: "M16.0938 6.5H3.90625C3.1296 6.5 2.5 7.1296 2.5 7.90625V20.0938C2.5 20.8704 3.1296 21.5 3.90625 21.5H16.0938C16.8704 21.5 17.5 20.8704 17.5 20.0938V7.90625C17.5 7.1296 16.8704 6.5 16.0938 6.5Z",
    fill: "#87C7AF",
    stroke: "#87C7AF",
    "stroke-width": "2",
    "stroke-linejoin": "round"
}, null, -1))
  , y2 = [k2, f2]
  , $2 = {
    class: "detail_item"
}
  , T2 = {
    class: "item_title"
}
  , w2 = {
    class: "item_result"
}
  , C2 = {
    class: "detail_item"
}
  , N2 = {
    class: "item_title"
}
  , L2 = {
    class: "item_result"
}
  , z2 = {
    class: "detail_item"
}
  , I2 = {
    class: "item_title"
}
  , x2 = {
    class: "item_result"
}
  , R2 = {
    class: "detail_item"
}
  , S2 = {
    class: "item_title"
}
  , M2 = {
    class: "item_result"
}
  , B2 = {
    class: "detail_item"
}
  , G2 = {
    class: "item_title"
}
  , P2 = {
    class: "item_result"
}
  , D2 = {
    class: "detail_item"
}
  , A2 = {
    class: "item_title"
}
  , O2 = {
    class: "item_result"
}
  , q2 = {
    class: "draw_result"
}
  , W2 = {
    class: "detail_item"
}
  , E2 = {
    class: "item_title"
}
  , V2 = {
    key: 1,
    class: "item_result"
}
  , F2 = {
    class: "detail_item"
}
  , j2 = {
    class: "item_title"
}
  , H2 = {
    class: "detail_item"
}
  , U2 = {
    class: "item_title"
}
  , K2 = {
    class: "item_result"
}
  , X2 = {
    class: "detail_item"
}
  , Q2 = {
    class: "item_title"
}
  , Y2 = {
    class: "item_result"
}
  , J2 = H({
    __name: "RecordList",
    props: {
        mayrecord: {}
    },
    setup(l) {
        const {t: e} = kt()
          , {filterGameType: s} = Ji()
          , u = h(-1)
          , g = c=>{
            u.value == c ? u.value = -1 : u.value = c
        }
          , b = (c,p)=>{
            if (p == 1)
                switch (c) {
                case 0:
                    return e("bettingResultState3");
                case 1:
                    return e("hasWon");
                case 2:
                    return e("bettingResultState1");
                case 3:
                    return e("xosoTxt76");
                default:
                    return ""
                }
            else
                switch (c) {
                case 0:
                    return "fail";
                case 1:
                    return "success";
                case 2:
                    return "wait";
                case 3:
                    return "ing";
                default:
                    return "ing"
                }
        }
          , d = c=>{
            switch (c) {
            case "Big":
                return e("big");
            case "Drawn":
                return e("binguoHe");
            case "Small":
                return e("small");
            default:
                return c
            }
        }
        ;
        return (c,p)=>(n(),
        a("div", J0, [t("div", Z0, [(n(!0),
        a(S, null, G(c.mayrecord, (o,_)=>(n(),
        a(S, {
            key: _
        }, [t("div", {
            class: "MyGameRecordList__C-item",
            onClick: m=>g(_)
        }, [t("div", {
            class: M(["MyGameRecordList__C-item-l", r(s)(Number(o.gameType), o.selectType).className])
        }, i(d(o.selectType)), 3), t("div", i2, [t("div", e2, [t("div", n2, i(o.issueNumber), 1), t("div", a2, i(o.addTime), 1)]), t("div", {
            class: M(["MyGameRecordList__C-item-r", b(o.state, 2)])
        }, [t("div", {
            class: M(b(o.state, 2))
        }, i(b(o.state, 1)), 3), o.premium ? (n(),
        a("span", o2, i(r(Rt)(o.profitAmount)), 1)) : B("", !0)], 2)])], 8, t2), _ == u.value ? (n(),
        a("div", s2, [t("div", l2, i(c.$t("details")), 1), t("div", c2, [t("div", r2, i(c.$t("orderNoMay")), 1), t("div", u2, [E(i(o.orderNumber) + " ", 1), (n(),
        a("svg", {
            onClick: m=>r(ji)(o.orderNumber),
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none"
        }, b2, 8, d2))])]), t("div", m2, [t("div", _2, i(c.$t("issueMay")), 1), t("div", h2, [E(i(o.issueNumber) + " ", 1), (n(),
        a("svg", {
            onClick: m=>r(ji)(o.issueNumber),
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none"
        }, y2, 8, v2))])]), t("div", $2, [t("div", T2, i(c.$t("gamePlay")), 1), t("div", w2, i(r(s)(Number(o.gameType), o.selectType).playerName), 1)]), t("div", C2, [t("div", N2, i(c.$t("amountMay")), 1), t("div", L2, i(o.amount), 1)]), t("div", z2, [t("div", I2, i(c.$t("multiple")), 1), t("div", x2, i(o.figure), 1)]), t("div", R2, [t("div", S2, i(c.$t("afterTaxAmount")), 1), t("div", M2, i(o.realAmount), 1)]), t("div", B2, [t("div", G2, i(c.$t("tax")), 1), t("div", P2, i(o.serviceCharge || "-"), 1)]), t("div", D2, [t("div", A2, i(c.$t("winTips3")), 1), t("div", O2, [t("div", {
            class: M(["draw_num", `${o.sumCount ? r(s)(Number(o.gameType), o.selectType).className : ""}`])
        }, i(o.sumCount || "-"), 3), o.premium ? (n(!0),
        a(S, {
            key: 0
        }, G(o.premium.split(""), m=>(n(),
        a("div", q2, i(m), 1))), 256)) : B("", !0)])]), t("div", W2, [t("div", E2, i(c.$t("betting")), 1), o.gameType === "2" || o.gameType === "1" ? (n(),
        a("div", {
            key: 0,
            class: M(["item_result item_bet", `${r(s)(Number(o.gameType), o.selectType).className}`])
        }, i(o.selectType), 3)) : (n(),
        a("div", V2, [(n(!0),
        a(S, null, G(o.selectType.split(""), m=>(n(),
        a("div", {
            class: M(["item_result item_bet item_alike", `${r(s)(Number(o.gameType), o.selectType).className}`])
        }, i(m), 3))), 256))]))]), t("div", F2, [t("div", j2, i(c.$t("statusMay")), 1), t("div", {
            class: M(["item_result", b(o.state, 2)])
        }, i(b(o.state, 1)), 3)]), t("div", H2, [t("div", U2, i(c.$t("winOrLose")), 1), t("div", K2, i(o.profitAmount ? r(Rt)(o.profitAmount) : "-"), 1)]), t("div", X2, [t("div", Q2, i(c.$t("createTime")), 1), t("div", Y2, i(o.addTime), 1)])])) : B("", !0)], 64))), 128))])]))
    }
});
const Z2 = K(J2, [["__scopeId", "data-v-1f6155ee"]])
  , t$ = {
    class: "record-container"
}
  , i$ = {
    class: "WinTrx__C-head-more"
}
  , e$ = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = ()=>{
            e.back()
        }
          , u = h([])
          , g = h({
            pageSize: 20
        })
          , b = ()=>{}
          , d = ()=>{}
          , c = h("");
        return (p,o)=>{
            const _ = j("NavBar");
            return n(),
            a("div", t$, [z(_, {
                "left-arrow": "",
                onClickLeft: s,
                "background-color": "#0a4529",
                title: p.$t("xosoTxt73")
            }, {
                right: D(()=>[t("div", i$, [t("div", {
                    onClick: o[0] || (o[0] = m=>b())
                }), t("div", {
                    class: M({
                        disableVoice: c.value == "2"
                    }),
                    onClick: d
                }, null, 2)])]),
                _: 1
            }, 8, ["title"]), z(ra, {
                list: u.value,
                "onUpdate:list": o[1] || (o[1] = m=>u.value = m),
                pageQuery: g.value,
                "onUpdate:pageQuery": o[2] || (o[2] = m=>g.value = m),
                api: r(Jr),
                distance: 100,
                ref: "listRef",
                isAutoLoad: !0
            }, {
                content: D(()=>[z(Z2, {
                    mayrecord: u.value
                }, null, 8, ["mayrecord"])]),
                _: 1
            }, 8, ["list", "pageQuery", "api"])])
        }
    }
});
const n$ = K(e$, [["__scopeId", "data-v-121431cd"]])
  , Nx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: n$
}, Symbol.toStringTag, {
    value: "Module"
}))
  , a$ = l=>(Gt("data-v-e6d02863"),
l = l(),
Pt(),
l)
  , o$ = {
    class: "Betting__Popup"
}
  , s$ = {
    class: "Betting__Popup-head"
}
  , l$ = {
    class: "Betting__Popup-head-title"
}
  , c$ = {
    class: "Betting__Popup-head-selectName"
}
  , r$ = {
    class: "Betting__Popup-body"
}
  , u$ = {
    class: "Betting__Popup-body-line"
}
  , d$ = {
    class: "Betting__Popup-body-line-list"
}
  , p$ = ["onClick"]
  , g$ = {
    class: "Betting__Popup-body-line"
}
  , b$ = {
    class: "Betting__Popup-body-line-btnL"
}
  , m$ = {
    class: "Betting__Popup-body-line"
}
  , _$ = a$(()=>t("div", null, null, -1))
  , h$ = {
    class: "Betting__Popup-body-line-list"
}
  , v$ = ["onClick"]
  , k$ = {
    class: "Betting__Popup-body-line"
}
  , f$ = {
    class: "Betting__Popup-foot"
}
  , y$ = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , $$ = {
    class: "Betting__Popup-PreSale"
}
  , T$ = {
    class: "Betting__Popup-PreSale-head"
}
  , w$ = {
    class: "Betting__Popup-PreSale-body"
}
  , C$ = {
    class: "Betting__Popup-PreSale-foot"
}
  , N$ = H({
    __name: "BettingPopup",
    props: {
        selectInfo: {
            type: Object,
            default: ()=>({})
        },
        bettingPopupShow: {
            type: Boolean,
            default: h(!1)
        },
        actionItem: {
            type: Object,
            default: ()=>({})
        }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(l, {emit: e}) {
        const s = l
          , {t: u} = kt()
          , g = h(!1)
          , b = h(!0)
          , d = Q(()=>s.actionItem.scopeList || [])
          , c = h([1, 5, 10, 20, 50, 100])
          , p = Q({
            get() {
                return s.bettingPopupShow || !1
            },
            set(w) {
                e("update:bettingPopupShow", w)
            }
        })
          , o = w=>{
            switch (w) {
            case 1:
                s.selectInfo.count > 1 && (s.selectInfo.count--,
                $());
                break;
            case 2:
                s.selectInfo.count++,
                $();
                break
            }
        }
          , _ = w=>{
            w > 0 && (s.selectInfo.count = parseInt(w),
            $())
        }
          , m = w=>{
            s.selectInfo.count = w,
            $()
        }
          , T = w=>{
            s.selectInfo.coin = w,
            $()
        }
          , f = ()=>{
            g.value = !1,
            b.value = !0
        }
          , y = ()=>{
            b.value ? e("submitBetting") : _i(u("agreePresaleRules"))
        }
          , $ = ()=>{
            s.selectInfo.allCoin = s.selectInfo.coin * s.selectInfo.count
        }
        ;
        return (w,k)=>{
            const v = j("van-field")
              , L = j("van-popup")
              , C = Ht("throttle-click");
            return n(),
            a(S, null, [z(L, {
                show: p.value,
                "onUpdate:show": k[6] || (k[6] = I=>p.value = I),
                position: "bottom",
                round: !0,
                "close-on-click-overlay": !1
            }, {
                default: D(()=>[t("div", o$, [t("div", s$, [t("div", l$, i(l.actionItem.lotteryName), 1), t("div", c$, [t("span", null, i(r(u)("choose")), 1), t("span", null, i(l.selectInfo.selectCon), 1)])]), t("div", r$, [t("div", u$, [E(i(r(u)("amount")) + " ", 1), t("div", d$, [(n(!0),
                a(S, null, G(d.value, (I,N)=>(n(),
                a("div", {
                    key: N,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: l.selectInfo.coin == I
                    }]),
                    onClick: x=>T(I)
                }, i(I), 11, p$))), 128))])]), t("div", g$, [E(i(r(u)("numbers")) + " ", 1), t("div", b$, [t("div", {
                    class: M(["Betting__Popup-btn border", {
                        bgcolor: l.selectInfo.count > 0
                    }]),
                    onClick: k[0] || (k[0] = I=>o(1))
                }, "-", 2), z(v, {
                    class: "Betting__Popup-input",
                    modelValue: l.selectInfo.count,
                    "onUpdate:modelValue": k[1] || (k[1] = I=>l.selectInfo.count = I),
                    type: "digit",
                    maxlength: 4,
                    onInput: _
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor border",
                    onClick: k[2] || (k[2] = I=>o(2))
                }, "+")])]), t("div", m$, [_$, t("div", h$, [(n(!0),
                a(S, null, G(c.value, (I,N)=>(n(),
                a("div", {
                    key: N,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: l.selectInfo.count == I
                    }]),
                    onClick: x=>m(I)
                }, " X" + i(I), 11, v$))), 128))])]), t("div", k$, [t("span", {
                    class: M(["Betting__Popup-agree", {
                        active: b.value
                    }]),
                    onClick: k[3] || (k[3] = I=>b.value = !b.value)
                }, i(r(u)("agree")), 3), t("span", {
                    onClick: k[4] || (k[4] = I=>g.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, i(r(u)("presaleRules")), 1)])]), t("div", f$, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: k[5] || (k[5] = I=>e("clearBetting"))
                }, i(r(u)("cancel")), 1), pt((n(),
                a("div", y$, [E(i(r(u)("totalAmount")) + " " + i(r(Rt)(l.selectInfo.count * l.selectInfo.coin || 0)), 1)])), [[C, {
                    handler: y,
                    wait: 2e3
                }]])])])]),
                _: 1
            }, 8, ["show"]), z(L, {
                show: g.value,
                "onUpdate:show": k[7] || (k[7] = I=>g.value = I),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", $$, [t("div", T$, i(r(u)("presaleRules")), 1), t("div", w$, i(w.$t("betPopTXT")), 1), t("div", C$, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: f
                }, i(r(u)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const L$ = K(N$, [["__scopeId", "data-v-e6d02863"]])
  , z$ = {
    class: "changLong__C"
}
  , I$ = {
    class: "changLong__C-bet"
}
  , x$ = {
    class: "changLong__C-bet-l"
}
  , R$ = {
    class: "num"
}
  , S$ = {
    class: "time"
}
  , M$ = {
    class: "other"
}
  , B$ = {
    class: "remark"
}
  , G$ = {
    class: "issue"
}
  , P$ = ["onClick"]
  , D$ = ["onClick"]
  , A$ = ["onClick"]
  , O$ = ["onClick"]
  , q$ = ["onClick"]
  , W$ = ["onClick"]
  , E$ = ["onClick"]
  , V$ = ["onClick"]
  , F$ = ["onClick"]
  , j$ = ["onClick"]
  , H$ = ["onClick"]
  , Qn = 5
  , U$ = H({
    __name: "Bet",
    setup(l) {
        const e = ve.global.t
          , s = h(!1)
          , u = h({})
          , g = h({
            coin: 0,
            count: 1,
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "2020",
            selecttype: 1,
            selectCon: ""
        })
          , b = xo([]);
        let d = null;
        const c = (v,L,C,I,N)=>{
            if (b.value[L].action = C,
            u.value = v,
            g.value.selectCon = I,
            g.value.coin = v.scopeList[0],
            g.value.typeid = v.type,
            g.value.gametype = v.bettingGameType,
            v.type > 4)
                N == "big" ? g.value.selecttype = "H" : N == "small" ? g.value.selecttype = "L" : g.value.selecttype = N;
            else {
                const x = {
                    red: 10,
                    green: 11,
                    violet: 12,
                    big: 13,
                    small: 14
                };
                g.value.selecttype = x[N]
            }
            g.value.issuenumber = v.issueNumber,
            s.value = !0
        }
          , p = h(!1)
          , o = async()=>{
            if (d && clearInterval(d),
            p.value)
                return;
            p.value = !0;
            const v = await ot(bs({
                gameType: -1
            }));
            if (p.value = !1,
            !v)
                return;
            const L = v.data.serviceTime;
            b.value = v.data.list.map(C=>{
                let I = new Date(L).getTime()
                  , N = new Date(C.startTime).getTime()
                  , x = (I - N) / 1e3;
                return x > C.intervalM * 60 && (x = C.intervalM * 60),
                C.scopeList = C.scope.split("|").map(R=>Number(R)),
                C.passTime = Math.floor(C.intervalM * 60 - x),
                C.time1 = 0,
                C.time2 = Math.floor(C.passTime / 60),
                C.time3 = Math.floor(C.passTime % 60 / 10),
                C.time4 = Math.floor(C.passTime % 10),
                C
            }
            ),
            d = setInterval(function() {
                _()
            }, 1e3)
        }
          , _ = ()=>{
            const v = b.value.length;
            let L = !1;
            for (let C = 0; C < v; C++) {
                let I = b.value[C];
                if (I.passTime < Qn && I.issueNumber == u.value.issueNumber && m(),
                I.passTime > 0)
                    I.time2 = Math.floor(I.passTime / 60),
                    I.time3 = Math.floor(I.passTime % 60 / 10),
                    I.time4 = Math.floor(I.passTime % 10),
                    I.passTime--;
                else {
                    L = !1,
                    clearInterval(d),
                    o();
                    break
                }
                L = I.time3 + I.time4 == 0
            }
            Ro(b),
            L && (clearInterval(d),
            o())
        }
          , m = ()=>{
            s.value = !1;
            let v = b.value.findIndex(L=>JSON.stringify(L) == JSON.stringify(u.value));
            v != -1 && (b.value[v].action = 0),
            g.value.coin = u.value.scopeList ? u.value.scopeList[0] : 0,
            g.value.count = 1,
            u.value = {}
        }
          , T = ()=>{
            const {typeid: v=0} = g.value;
            v && (v < 5 ? y() : v < 9 ? w() : $())
        }
          , f = v=>v < 5 ? "winGo" : v < 9 ? "Fd" : "k3"
          , y = async()=>{
            const v = await ot(ha({
                typeId: g.value.typeid,
                issuenumber: g.value.issuenumber,
                amount: g.value.coin,
                betCount: Number(g.value.count),
                gameType: g.value.gametype,
                selectType: g.value.selecttype
            }));
            (v == null ? void 0 : v.code) === 0 && (_i(e("code" + v.msgCode)),
            m())
        }
          , $ = async()=>{
            let {coin: v, count: L, issuenumber: C, gametype: I, selecttype: N, typeid: x} = g.value;
            const R = await ot(va({
                amount: v,
                betCount: Number(L),
                gameType: I.toString(),
                selectType: N,
                typeId: x,
                issuenumber: C
            }));
            (R == null ? void 0 : R.code) === 0 && (_i(e("code" + R.msgCode)),
            m())
        }
          , w = async()=>{
            let {coin: v, count: L, issuenumber: C, gametype: I, selecttype: N, typeid: x} = g.value;
            const R = {
                issuenumber: C,
                typeId: x,
                amount: v,
                betCount: Number(L),
                gameType: I,
                selectType: N
            }
              , O = await ot(pa(R));
            (O == null ? void 0 : O.code) === 0 && (_i(e("code" + O.msgCode)),
            m())
        }
          , k = v=>v == "H" ? "B" : v.trim() == "L" ? "S" : v;
        return Ct(()=>{
            o()
        }
        ),
        Hi(()=>{
            clearInterval(d)
        }
        ),
        At(()=>pi().visibility, v=>{
            o()
        }
        ),
        (v,L)=>(n(),
        a(S, null, [t("div", z$, [(n(!0),
        a(S, null, G(b.value, (C,I)=>(n(),
        a("div", I$, [t("div", x$, [t("div", {
            class: M(["titel", [f(C.type)]])
        }, i(C.lotteryName), 3), t("div", R$, [E(i(C.issueNumber) + " ", 1), t("span", S$, i(`${C.time1}${C.time2}:${C.time3}${C.time4}`), 1)]), t("div", M$, [t("div", B$, i(C.remark), 1), t("div", {
            class: M(["gameResult", "bg-" + C.gameResult])
        }, i(k(C.gameResult)), 3), t("div", G$, i(C.issue) + i(v.$t("betIssues")), 1)])]), t("div", {
            class: M(["changLong__C-bet-r", {
                disable: C.passTime < Qn
            }])
        }, [C.gameType == 0 ? (n(),
        a(S, {
            key: 0
        }, [t("div", {
            class: M({
                active: C.action == 1,
                big: !0
            }),
            onClick: N=>c(C, I, 1, v.$t("betBig"), "big")
        }, i(v.$t("betBig")), 11, P$), t("div", {
            class: M({
                active: C.action == 2,
                small: !0
            }),
            onClick: N=>c(C, I, 2, v.$t("betSmall"), "small")
        }, i(v.$t("betSmall")), 11, D$)], 64)) : B("", !0), C.gameType == 1 ? (n(),
        a(S, {
            key: 1
        }, [t("div", {
            class: M({
                active: C.action == 1,
                red: !0
            }),
            onClick: N=>c(C, I, 1, v.$t("betRed"), "red")
        }, i(v.$t("betRed")), 11, A$), t("div", {
            class: M({
                active: C.action == 2,
                green: !0
            }),
            onClick: N=>c(C, I, 2, v.$t("betGreen"), "green")
        }, i(v.$t("betGreen")), 11, O$), t("div", {
            class: M({
                active: C.action == 3,
                violet: !0
            }),
            onClick: N=>c(C, I, 3, v.$t("betPurple"), "violet")
        }, i(v.$t("betPurple")), 11, q$)], 64)) : B("", !0), C.gameType == 2 ? (n(),
        a(S, {
            key: 2
        }, [t("div", {
            class: M({
                active: C.action == 1,
                O: !0
            }),
            onClick: N=>c(C, I, 1, v.$t("betOdd"), "O")
        }, i(v.$t("betOdd")), 11, W$), t("div", {
            class: M({
                active: C.action == 2,
                E: !0
            }),
            onClick: N=>c(C, I, 2, v.$t("betEven"), "E")
        }, i(v.$t("betEven")), 11, E$)], 64)) : B("", !0), C.gameType == 3 ? (n(),
        a(S, {
            key: 3
        }, [t("div", {
            class: M({
                active: C.action == 1,
                O: !0
            }),
            onClick: N=>c(C, I, 1, v.$t("betWithSingle"), "O")
        }, i(v.$t("betWithSingle")), 11, V$), t("div", {
            class: M({
                active: C.action == 2,
                E: !0
            }),
            onClick: N=>c(C, I, 2, v.$t("betWithDouble"), "E")
        }, i(v.$t("betWithDouble")), 11, F$)], 64)) : B("", !0), C.gameType == 4 ? (n(),
        a(S, {
            key: 4
        }, [t("div", {
            class: M({
                active: C.action == 1,
                H: !0
            }),
            onClick: N=>c(C, I, 1, v.$t("betWithBig"), "H")
        }, i(v.$t("betWithBig")), 11, j$), t("div", {
            class: M({
                active: C.action == 2,
                L: !0
            }),
            onClick: N=>c(C, I, 2, v.$t("betWithSmall"), "L")
        }, i(v.$t("betWithSmall")), 11, H$)], 64)) : B("", !0)], 2)]))), 256))]), z(L$, {
            bettingPopupShow: s.value,
            selectInfo: g.value,
            actionItem: u.value,
            onClearBetting: m,
            onSubmitBetting: T
        }, null, 8, ["bettingPopupShow", "selectInfo", "actionItem"])], 64))
    }
});
const K$ = K(U$, [["__scopeId", "data-v-823188e5"]])
  , X$ = {
    class: "MyGameRecord__C"
}
  , Q$ = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , Y$ = {
    class: "MyGameRecord__C-body"
}
  , J$ = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
}
  , Z$ = {
    key: 1,
    class: "MyGameRecord__C-foot"
}
  , tT = {
    class: "MyGameRecord__C-foot-page"
}
  , iT = H({
    __name: "MyGameRecord",
    props: {
        typeid: {},
        ApiFun: {},
        goPathName: {},
        hasHead: {
            type: Boolean,
            default: !0
        }
    },
    setup(l, {expose: e}) {
        const s = l
          , u = ft()
          , g = h(4)
          , b = h(20)
          , d = h(1)
          , c = h([])
          , p = T=>{
            u.push({
                name: T
            })
        }
          , o = ()=>{
            d.value--,
            m()
        }
          , _ = ()=>{
            d.value++,
            m()
        }
          , m = async(T=!1)=>{
            if (s.typeid == null)
                return;
            T && (d.value = 1);
            const [f,y] = await Zt(s.ApiFun({
                pageSize: b.value,
                pageNo: d.value,
                typeId: s.typeid
            }));
            y && (c.value = (y == null ? void 0 : y.list) || [],
            g.value = (y == null ? void 0 : y.totalPage) || 0)
        }
        ;
        return e({
            getData: m
        }),
        ki(()=>{
            m()
        }
        ),
        (T,f)=>{
            const y = j("van-icon");
            return n(),
            a("div", X$, [T.hasHead ? (n(),
            a("div", Q$, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: f[0] || (f[0] = $=>p(T.goPathName))
            }, i(T.$t("more")), 1)])) : B("", !0), t("div", Y$, [c.value.length ? (n(),
            it(dn, {
                key: 0,
                mayrecord: c.value
            }, null, 8, ["mayrecord"])) : (n(),
            a("div", J$, [z(ri)]))]), c.value.length ? (n(),
            a("div", Z$, [t("div", {
                class: M(["MyGameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: o
            }, [z(y, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", tT, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["MyGameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: _
            }, [z(y, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const bn = K(iT, [["__scopeId", "data-v-27897c55"]])
  , eT = {
    class: "MyGameRecord__C"
}
  , nT = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , aT = {
    class: "MyGameRecord__C-body"
}
  , oT = {
    key: 1,
    class: "MyGameRecord__C-body-empty"
}
  , sT = {
    key: 1,
    class: "MyGameRecord__C-foot"
}
  , lT = {
    class: "MyGameRecord__C-foot-page"
}
  , cT = H({
    __name: "MyGameRecord",
    props: {
        typeid: {},
        goPathName: {},
        hasHead: {
            type: Boolean,
            default: !0
        }
    },
    setup(l, {expose: e}) {
        const s = l
          , u = ft()
          , g = h(4)
          , b = h(20)
          , d = h(1)
          , c = h([])
          , p = f=>{
            u.push({
                name: f
            })
        }
          , o = ()=>{
            d.value--,
            m()
        }
          , _ = ()=>{
            d.value++,
            m()
        }
          , m = async(f=!1)=>{
            if (s.typeid == null)
                return;
            f && (d.value = 1);
            const y = await ot(_a({
                pageSize: b.value,
                pageNo: d.value,
                typeId: s.typeid
            }))
              , $ = (y == null ? void 0 : y.data.list) || [];
            for (let w = 0; $.length > w; w++) {
                let k = $[w].gameType.split(",")
                  , v = $[w].selectType.split(",");
                for (let L = 0; k.length > L; L++)
                    if (k[L] == "1" || k[L] == "2" || k[L] == "3")
                        $[w].gameType = "1",
                        $[w].oneList = v;
                    else if (k[L] == "5" || k[L] == "6") {
                        let C = []
                          , I = []
                          , N = [];
                        for (let x = 0; v.length > x; x++) {
                            if (v[x] == "|11|" || v[x] == "|22|" || v[x] == "|33|" || v[x] == "|44|" || v[x] == "|55|" || v[x] == "|66|") {
                                let R = v[x].split("|");
                                R.pop(),
                                R.shift(),
                                C.push(R.join())
                            }
                            if (v[x] == ":11:" || v[x] == ":22:" || v[x] == ":33:" || v[x] == ":44:" || v[x] == ":55:" || v[x] == ":66:") {
                                let R = v[x].split(":");
                                R.pop(),
                                R.shift(),
                                I.push(R.join())
                            }
                            if (v[x] == ":1:" || v[x] == ":2:" || v[x] == ":3:" || v[x] == ":4:" || v[x] == ":5:" || v[x] == ":6:") {
                                let R = v[x].split(":");
                                R.pop(),
                                R.shift(),
                                N.push(R.join())
                            }
                        }
                        $[w].gameType = "2",
                        $[w].oneList = C,
                        $[w].towList = T(I, N)
                    } else if (k[L] == "7" || k[L] == "8") {
                        let C = []
                          , I = !1;
                        for (let N = 0; v.length > N; N++) {
                            if (v[N] == "|111|" || v[N] == "|222|" || v[N] == "|333|" || v[N] == "|444|" || v[N] == "|555|" || v[N] == "|666|") {
                                let x = v[N].split("|");
                                x.pop(),
                                x.shift(),
                                C.push(x.join())
                            }
                            v[N] == "|AAA|" && (I = !0),
                            $[w].oneList = C,
                            $[w].towList = I,
                            $[w].gameType = "3"
                        }
                    } else if (k[L] == "9" || k[L] == "10" || k[L] == "4") {
                        let C = []
                          , I = !1
                          , N = [];
                        for (let x = 0; v.length > x; x++) {
                            if (v[x] == "|1|" || v[x] == "|2|" || v[x] == "|3|" || v[x] == "|4|" || v[x] == "|5|" || v[x] == "|6|") {
                                let R = v[x].split("|");
                                R.pop(),
                                R.shift(),
                                C.push(R.join())
                            }
                            if (v[x] == "|ABC|" && (I = !0),
                            v[x] == ".1." || v[x] == ".2." || v[x] == ".3." || v[x] == ".4." || v[x] == ".5." || v[x] == ".6.") {
                                let R = v[x].split(".");
                                R.pop(),
                                R.shift(),
                                N.push(R.join())
                            }
                        }
                        $[w].oneList = C,
                        $[w].towList = I,
                        $[w].threeList = N,
                        $[w].gameType = "4"
                    }
            }
            c.value = $ || [],
            g.value = (y == null ? void 0 : y.data.totalPage) || 0
        }
          , T = (f,y)=>{
            let $ = [];
            for (var w = 0; f.length > w; w++) {
                let v = f[w]
                  , L = [];
                for (var k = 0; y.length > k; k++)
                    L.push(y[k]);
                if (L.length > 0) {
                    let C = L.sort().join(",");
                    $.push(v + "|" + C)
                }
            }
            return $.sort()
        }
        ;
        return e({
            getData: m
        }),
        ki(()=>{
            m()
        }
        ),
        (f,y)=>{
            const $ = j("van-icon");
            return n(),
            a("div", eT, [f.hasHead ? (n(),
            a("div", nT, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: y[0] || (y[0] = w=>p(f.goPathName))
            }, i(f.$t("more")), 1)])) : B("", !0), t("div", aT, [c.value.length ? (n(),
            it(Ga, {
                key: 0,
                mayrecord: c.value
            }, null, 8, ["mayrecord"])) : (n(),
            a("div", oT, [z(ri)]))]), c.value.length ? (n(),
            a("div", sT, [t("div", {
                class: M(["MyGameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: o
            }, [z($, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", lT, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["MyGameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: _
            }, [z($, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const Da = K(cT, [["__scopeId", "data-v-f398e520"]])
  , rT = {
    class: "BetRecord__C"
}
  , uT = H({
    __name: "BetRecord",
    setup(l) {
        const e = {
            Win: bn,
            FD: Ba,
            K3: Da
        }
          , s = h()
          , u = h(0)
          , g = h(0)
          , b = h([{
            name: "WinGo",
            com: "Win"
        }, {
            name: "5D Lotre",
            com: "FD"
        }, {
            name: "K3Lotre",
            com: "K3"
        }])
          , d = h(["1min", "3min", "5min", "10min"])
          , c = h(1)
          , p = ()=>{
            c.value = u.value * 4 + g.value + 1,
            ti(()=>{
                s.value && s.value.getData()
            }
            )
        }
        ;
        return Ct(()=>{
            p()
        }
        ),
        (o,_)=>{
            const m = j("van-tab")
              , T = j("van-tabs");
            return n(),
            a("div", rT, [z(T, {
                class: "BetRecord__C-gameTab",
                active: u.value,
                "onUpdate:active": _[1] || (_[1] = f=>u.value = f),
                onClick: p
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(b.value, (f,y)=>(n(),
                it(m, {
                    key: y,
                    title: f.name
                }, {
                    default: D(()=>[z(T, {
                        class: "BetRecord__C-timeTab",
                        active: g.value,
                        "onUpdate:active": _[0] || (_[0] = $=>g.value = $)
                    }, {
                        default: D(()=>[(n(!0),
                        a(S, null, G(d.value, ($,w)=>(n(),
                        it(m, {
                            key: w,
                            title: $
                        }, null, 8, ["title"]))), 128))]),
                        _: 2
                    }, 1032, ["active"])]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"]), (n(),
            it(vi(e[b.value[u.value].com]), {
                ref_key: "RecRef",
                ref: s,
                typeid: c.value,
                "has-head": !1,
                ApiFun: r(ln),
                "go-path-name": "0"
            }, null, 8, ["typeid", "ApiFun"]))])
        }
    }
});
const dT = K(uT, [["__scopeId", "data-v-a67b8652"]])
  , pT = {
    class: "changLong__C"
}
  , gT = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = h(0);
        function u() {
            e.go(-1)
        }
        return Ct(()=>{}
        ),
        (g,b)=>{
            const d = j("NavBar")
              , c = j("van-tab")
              , p = j("van-tabs");
            return n(),
            a("div", pT, [z(d, {
                "left-arrow": "",
                title: g.$t("loongAssistant"),
                "background-color": "#3F3F3F",
                onClickLeft: u
            }, null, 8, ["title"]), z(p, {
                class: "changLong__C-tab",
                active: s.value,
                "onUpdate:active": b[0] || (b[0] = o=>s.value = o)
            }, {
                default: D(()=>[z(c, {
                    title: g.$t("latestLoong")
                }, null, 8, ["title"]), z(c, {
                    title: g.$t("myBet")
                }, null, 8, ["title"])]),
                _: 1
            }, 8, ["active"]), s.value == 0 ? (n(),
            it(K$, {
                key: 0
            })) : (n(),
            it(dT, {
                key: 1
            }))])
        }
    }
});
const bT = K(gT, [["__scopeId", "data-v-07c65734"]])
  , Lx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bT
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mT = l=>(Gt("data-v-a5c2a933"),
l = l(),
Pt(),
l)
  , _T = {
    class: "K3TL__C"
}
  , hT = {
    class: "K3TL__C-l1"
}
  , vT = {
    class: "left"
}
  , kT = {
    class: "K3TL__C-l2"
}
  , fT = {
    class: "K3TL__C-time"
}
  , yT = mT(()=>t("div", {
    notime: ""
}, ":", -1))
  , $T = {
    class: "K3TL__C-l3"
}
  , TT = {
    class: "box"
}
  , wT = H({
    __name: "TimeLeft",
    props: {
        currentInfo: {
            type: Object,
            default: ()=>({
                gameNo: "loading",
                currentTime: "",
                beginTime: "",
                passTime: 180,
                time1: 0,
                time2: 0,
                time3: 0,
                time4: 0
            })
        },
        premium: {
            type: String,
            default: "666"
        },
        currentGame: {
            type: Object,
            default: ()=>({})
        }
    },
    setup(l) {
        const e = l
          , s = Q(()=>[...e.premium])
          , u = h(!1)
          , g = Ui()
          , b = ()=>{
            u.value = !0,
            g.getK3Rule(e.currentGame.typeID)
        }
        ;
        return (d,c)=>(n(),
        a(S, null, [t("div", _T, [t("div", hT, [t("div", vT, [t("div", null, i(d.$t("k3Number")), 1), t("div", {
            class: "K3TL__C-rule",
            onClick: b
        }, i(d.$t("winTrxIndicate")), 1)]), t("div", null, i(d.$t("k3TimeLeftToBuy")), 1)]), t("div", kT, [t("div", null, i(e.currentInfo.gameNo), 1), t("div", fT, [t("div", null, i(l.currentInfo.time1), 1), t("div", null, i(l.currentInfo.time2), 1), yT, t("div", null, i(l.currentInfo.time3), 1), t("div", null, i(l.currentInfo.time4), 1)])]), t("div", $T, [t("div", TT, [(n(!0),
        a(S, null, G(s.value, (p,o)=>(n(),
        a("div", {
            key: o,
            class: M(["num" + p])
        }, null, 2))), 128))])])]), z(Se, {
            howPlayShow: u.value,
            gamePresentation: l.currentGame.gamePresentation,
            onClose: c[0] || (c[0] = p=>u.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
});
const CT = K(wT, [["__scopeId", "data-v-a5c2a933"]])
  , NT = {
    class: "K3B__C-bettingList"
}
  , LT = ["onClick"]
  , zT = {
    key: 1,
    class: ""
}
  , IT = {
    key: 2,
    class: "K3B__C-odds-rate"
}
  , xT = {
    key: 3,
    class: "K3B__C-odds-rate"
}
  , RT = {
    key: 4,
    class: "K3B__C-odds-rate"
}
  , ST = H({
    __name: "Betting1",
    props: {
        OddsList: {},
        betnumList: {}
    },
    emits: ["showP", "upAll"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , {t: g} = kt()
          , b = h([{
            num: 3,
            odds: 191.16,
            chack: !1
        }, {
            num: 4,
            odds: 63.72,
            chack: !1
        }, {
            num: 5,
            odds: 31.86,
            chack: !1
        }, {
            num: 6,
            odds: 19.11,
            chack: !1
        }, {
            num: 7,
            odds: 12.74,
            chack: !1
        }, {
            num: 8,
            odds: 9.1,
            chack: !1
        }, {
            num: 9,
            odds: 7.64,
            chack: !1
        }, {
            num: 10,
            odds: 7.08,
            chack: !1
        }, {
            num: 11,
            odds: 7.08,
            chack: !1
        }, {
            num: 12,
            odds: 7.64,
            chack: !1
        }, {
            num: 13,
            odds: 9.1,
            chack: !1
        }, {
            num: 14,
            odds: 12.74,
            chack: !1
        }, {
            num: 15,
            odds: 19.11,
            chack: !1
        }, {
            num: 16,
            odds: 31.86,
            chack: !1
        }, {
            num: 17,
            odds: 63.72,
            chack: !1
        }, {
            num: 18,
            odds: 191.16,
            chack: !1
        }, {
            num: "A",
            odds: 2,
            chack: !1
        }, {
            num: "B",
            odds: 2,
            chack: !1
        }, {
            num: "C",
            odds: 2,
            chack: !1
        }, {
            num: "D",
            odds: 2,
            chack: !1
        }])
          , d = T=>{
            switch (T) {
            case "A":
                return g("k3Big");
            case "B":
                return g("k3Small");
            case "C":
                return g("k3Odd");
            case "D":
                return g("k3Even");
            default:
                return T
            }
        }
          , c = (T,f)=>{
            f < 16 ? b.value[f].chack ? _(T, f) : (u.betnumList.push(T.num),
            b.value[f].chack = !0) : p(T, f),
            u.betnumList.length > 0 ? s("showP", !0) : s("showP", !1),
            s("upAll")
        }
          , p = (T,f)=>{
            switch (f) {
            case 16:
                o(T, f, 17);
                break;
            case 17:
                o(T, f, 16);
                break;
            case 18:
                o(T, f, 19);
                break;
            case 19:
                o(T, f, 18);
                break
            }
        }
          , o = (T,f,y)=>{
            b.value[y].chack && _(b.value[y], y),
            b.value[f].chack ? _(T, f) : (u.betnumList.push(T.num),
            b.value[f].chack = !0)
        }
          , _ = (T,f)=>{
            b.value[f].chack = !1;
            let y = u.betnumList.indexOf(T.num);
            y > -1 && u.betnumList.splice(y, 1)
        }
        ;
        return e({
            clearList: ()=>{
                b.value = b.value.map(T=>(T.chack = !1,
                T))
            }
        }),
        (T,f)=>(n(),
        a("div", NT, [(n(!0),
        a(S, null, G(b.value, (y,$)=>(n(),
        a("div", {
            class: M("num num" + y.num),
            key: $,
            onClick: w=>c(y, $)
        }, [$ < 16 ? (n(),
        a("div", {
            key: 0,
            class: M($ % 2 == 0 ? "ball rball" : "ball gball")
        }, [t("div", {
            class: M("K3B__C-odds-bet num" + y.num)
        }, i(d(y.num)), 3)], 2)) : (n(),
        a("div", zT, i(d(y.num)), 1)), $ < 16 ? (n(),
        a("div", IT, i(u.OddsList[$] && (u.OddsList[$].playRate || u.OddsList[$].playRate_Original)) + "X ", 1)) : $ < 18 ? (n(),
        a("div", xT, i(u.OddsList[16] && (u.OddsList[16].playRate || u.OddsList[16].playRate_Original)) + "X ", 1)) : (n(),
        a("div", RT, i(u.OddsList[17] && (u.OddsList[17].playRate || u.OddsList[17].playRate_Original)) + "X ", 1))], 10, LT))), 128))]))
    }
});
const MT = K(ST, [["__scopeId", "data-v-546758b4"]])
  , BT = {
    class: "K3B__C-betting2"
}
  , GT = {
    class: "K3B__C-betting2-tip1"
}
  , PT = {
    key: 0
}
  , DT = {
    class: "K3B__C-betting2-line1 mb30"
}
  , AT = ["onClick"]
  , OT = {
    class: "K3B__C-betting2-tip1"
}
  , qT = {
    key: 0
}
  , WT = {
    class: "K3B__C-betting2-line2"
}
  , ET = ["onClick"]
  , VT = {
    class: ""
}
  , FT = {
    class: "K3B__C-betting2-line3"
}
  , jT = ["onClick"]
  , HT = {
    class: ""
}
  , UT = H({
    __name: "Betting2",
    props: {
        OddsList: {},
        numList: {},
        betnumList: {},
        numTow: {},
        numOne: {},
        numChack: {
            type: Boolean
        }
    },
    emits: ["showP", "upAll", "selectNum", "onQuestion"],
    setup(l, {emit: e}) {
        const s = l
          , u = (d,c,p)=>{
            let o = d.num
              , _ = d.num + "" + d.num;
            if (p == 1)
                if (s.numList[c].chackOne) {
                    s.numList[c].chackOne = !1;
                    let m = s.numTow.indexOf(_);
                    m > -1 && s.numTow.splice(m, 1)
                } else {
                    s.numList[c].chackOne = !0,
                    s.numList[c].chackTow = !1;
                    let m = s.numOne.indexOf(o);
                    m > -1 && s.numOne.splice(m, 1),
                    s.numTow.push(_)
                }
            else if (s.numList[c].chackTow) {
                s.numList[c].chackTow = !1;
                let m = s.numOne.indexOf(o);
                m > -1 && s.numOne.splice(m, 1)
            } else {
                s.numList[c].chackTow = !0,
                s.numList[c].chackOne = !1;
                let m = s.numTow.indexOf(_);
                m > -1 && s.numTow.splice(m, 1),
                s.numOne.push(o)
            }
            e("selectNum"),
            s.numTow.length > 0 && s.numOne.length > 0 || s.betnumList.length > 0 ? e("showP", !0) : e("showP", !1)
        }
          , g = (d,c)=>{
            let p = d.num + "" + d.num;
            if (s.numList[c].chack) {
                s.numList[c].chack = !1;
                let o = s.betnumList.indexOf(p);
                o > -1 && s.betnumList.splice(o, 1)
            } else
                s.betnumList.push(p),
                s.betnumList.sort(),
                s.numList[c].chack = !0;
            s.numChack || s.betnumList.length > 0 || s.numTow.length > 0 && s.numOne.length > 0 ? e("showP", !0) : e("showP", !1)
        }
          , b = (d,c)=>{
            e("onQuestion", d, c)
        }
        ;
        return Ct(()=>{}
        ),
        (d,c)=>{
            const p = j("van-icon");
            return n(),
            a("div", BT, [t("div", GT, [E(i(d.$t("k3bet2Desc1")), 1), d.OddsList[20] ? (n(),
            a("span", PT, "(" + i(d.OddsList[20].playRate ? d.OddsList[20].playRate : d.OddsList[20].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[0] || (c[0] = o=>b(d.$t("k3bet2Desc2"), [5, 5])),
                class: "icon",
                color: "",
                size: "16",
                name: "question"
            })]), t("div", DT, [(n(!0),
            a(S, null, G(d.numList, (o,_)=>(n(),
            a("div", {
                class: M({
                    active: o.chack
                }),
                key: _,
                onClick: m=>g(o, _)
            }, [t("div", null, i(o.num) + i(o.num), 1)], 10, AT))), 128))]), t("div", OT, [E(i(d.$t("k3bet2Desc3")), 1), d.OddsList[19] ? (n(),
            a("span", qT, "(" + i(d.OddsList[19].playRate ? d.OddsList[19].playRate : d.OddsList[19].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[1] || (c[1] = o=>b(d.$t("k3bet2Desc4"), [6, 1, 6])),
                class: "icon",
                color: "",
                size: "16",
                name: "question"
            })]), t("div", WT, [(n(!0),
            a(S, null, G(d.numList, (o,_)=>(n(),
            a("div", {
                class: M({
                    active: o.chackOne
                }),
                key: _,
                onClick: m=>u(o, _, 1)
            }, [t("div", VT, i(o.num) + i(o.num), 1)], 10, ET))), 128))]), t("div", FT, [(n(!0),
            a(S, null, G(d.numList, (o,_)=>(n(),
            a("div", {
                class: M({
                    active: o.chackTow
                }),
                key: _,
                onClick: m=>u(o, _, 2)
            }, [t("div", HT, i(o.num), 1)], 10, jT))), 128))])])
        }
    }
});
const KT = K(UT, [["__scopeId", "data-v-383785d4"]])
  , XT = {
    class: "K3B__C-betting3"
}
  , QT = {
    class: "K3B__C-betting3-tip1"
}
  , YT = {
    key: 0
}
  , JT = {
    class: "K3B__C-betting3-line1 mb30"
}
  , ZT = ["onClick"]
  , t3 = {
    class: "K3B__C-betting3-tip1"
}
  , i3 = {
    key: 0
}
  , e3 = H({
    __name: "Betting3",
    props: {
        OddsList: {},
        numList: {},
        betnumList: {},
        numChack: {},
        numTow: {},
        numOne: {}
    },
    emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
    setup(l, {emit: e}) {
        const s = l
          , u = (d,c)=>{
            let p = d.num + "" + d.num + d.num;
            if (s.numList[c].chack) {
                s.numList[c].chack = !1;
                let o = s.betnumList.indexOf(p);
                o > -1 && s.betnumList.splice(o, 1)
            } else
                s.betnumList.push(p),
                s.betnumList.sort(),
                s.numList[c].chack = !0;
            s.numChack || s.betnumList.length > 0 || s.numTow.length > 0 && s.numOne.length > 0 ? e("showP", !0) : e("showP", !1)
        }
          , g = ()=>{
            e("cNumChack"),
            ti(()=>{
                s.numChack || s.betnumList.length > 0 || s.numTow.length > 1 || s.numOne.length > 2 ? e("showP", !0) : e("showP", !1)
            }
            )
        }
          , b = (d,c)=>{
            e("onQuestion", d, c)
        }
        ;
        return Ct(()=>{}
        ),
        (d,c)=>{
            const p = j("van-icon");
            return n(),
            a("div", XT, [t("div", QT, [E(i(d.$t("k3bet3Desc1")) + " ", 1), d.OddsList[21] ? (n(),
            a("span", YT, "(" + i(d.OddsList[21].playRate ? d.OddsList[21].playRate : d.OddsList[21].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[0] || (c[0] = o=>b(d.$t("k3bet3Desc2"), [6, 6, 6])),
                class: "icon",
                color: "#D9AC4F",
                size: "16",
                name: "question"
            })]), t("div", JT, [(n(!0),
            a(S, null, G(d.numList, (o,_)=>(n(),
            a("div", {
                class: M({
                    active: o.chack
                }),
                key: _,
                onClick: m=>u(o, _)
            }, [t("div", null, i(o.num) + i(o.num) + i(o.num), 1)], 10, ZT))), 128))]), t("div", t3, [E(i(d.$t("k3bet3Desc3")) + " ", 1), d.OddsList[22] ? (n(),
            a("span", i3, "(" + i(d.OddsList[22].playRate ? d.OddsList[22].playRate : d.OddsList[22].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[1] || (c[1] = o=>b(d.$t("k3bet3Desc5"), [7, 7, 7])),
                class: "icon",
                color: "#D9AC4F",
                size: "16",
                name: "question"
            })]), t("div", {
                class: M(["K3B__C-betting3-btn", {
                    active: s.numChack
                }]),
                onClick: g
            }, i(d.$t("k3bet3Desc4")), 3)])
        }
    }
});
const n3 = K(e3, [["__scopeId", "data-v-1ace94bb"]])
  , a3 = {
    class: "K3B__C-betting4"
}
  , o3 = {
    class: "K3B__C-betting4-tip1"
}
  , s3 = {
    key: 0
}
  , l3 = {
    class: "K3B__C-betting4-line1 mb30"
}
  , c3 = ["onClick"]
  , r3 = {
    class: "K3B__C-betting4-tip1"
}
  , u3 = {
    key: 0
}
  , d3 = {
    class: "K3B__C-betting4-tip1"
}
  , p3 = {
    key: 0
}
  , g3 = {
    class: "K3B__C-betting4-line1"
}
  , b3 = ["onClick"]
  , m3 = H({
    __name: "Betting4",
    props: {
        OddsList: {},
        numList: {},
        numTow: {},
        numOne: {},
        numChack: {},
        betnumList: {}
    },
    emits: ["showP", "upAll", "selectNum", "cNumChack", "onQuestion"],
    setup(l, {emit: e}) {
        const s = l
          , u = (d,c,p)=>{
            if (p == 1)
                if (s.numList[c].chackOne) {
                    s.numList[c].chackOne = !1;
                    var o = s.numOne.indexOf(d.num);
                    o > -1 && s.numOne.splice(o, 1)
                } else
                    s.numList[c].chackOne = !0,
                    s.numOne.push(d.num),
                    s.numOne.sort();
            else if (s.numList[c].chackTow) {
                s.numList[c].chackTow = !1;
                var c = s.numTow.indexOf(d.num);
                c > -1 && s.numTow.splice(c, 1)
            } else
                s.numList[c].chackTow = !0,
                s.numTow.push(d.num),
                s.numTow.sort();
            s.numChack || s.numTow.length > 1 || s.numOne.length > 2 ? e("showP", !0) : e("showP", !1)
        }
          , g = (d,c)=>{
            e("onQuestion", d, c)
        }
          , b = ()=>{
            e("cNumChack"),
            ti(()=>{
                s.numChack || s.betnumList.length > 0 || s.numTow.length > 1 || s.numOne.length > 2 ? e("showP", !0) : e("showP", !1)
            }
            )
        }
        ;
        return Ct(()=>{}
        ),
        (d,c)=>{
            const p = j("van-icon");
            return n(),
            a("div", a3, [t("div", o3, [E(i(d.$t("k3bet4Desc1")) + " ", 1), d.OddsList[23] ? (n(),
            a("span", s3, "(" + i(d.OddsList[23].playRate ? d.OddsList[23].playRate : d.OddsList[23].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[0] || (c[0] = o=>g(d.$t("k3bet4Desc2"), [1, 2, 4])),
                class: "icon",
                color: "#D9AC4F",
                size: "16",
                name: "question"
            })]), t("div", l3, [(n(!0),
            a(S, null, G(d.numList, (o,_)=>(n(),
            a("div", {
                class: M({
                    active: o.chackOne
                }),
                key: _,
                onClick: m=>u(o, _, 1)
            }, [t("div", null, i(o.num), 1)], 10, c3))), 128))]), t("div", r3, [E(i(d.$t("k3bet4Desc3")) + " ", 1), d.OddsList[24] ? (n(),
            a("span", u3, "(" + i(d.OddsList[24].playRate ? d.OddsList[24].playRate : d.OddsList[24].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[1] || (c[1] = o=>g(d.$t("k3bet4Desc4"), [1, 2, 3])),
                class: "icon",
                color: "#D9AC4F",
                size: "16",
                name: "question"
            })]), t("div", {
                class: M(["K3B__C-betting4-btn", {
                    active: d.numChack
                }]),
                onClick: b
            }, i(d.$t("betPopDesc7")), 3), t("div", d3, [E(i(d.$t("k3bet4Desc5")) + " ", 1), d.OddsList[18] ? (n(),
            a("span", p3, "(" + i(d.OddsList[18].playRate ? d.OddsList[18].playRate : d.OddsList[18].playRate_Original) + ")", 1)) : B("", !0), z(p, {
                onClick: c[2] || (c[2] = o=>g(d.$t("k3bet4Desc6"), [1, 2])),
                class: "icon",
                color: "#D9AC4F",
                size: "16",
                name: "question"
            })]), t("div", g3, [(n(!0),
            a(S, null, G(d.numList, (o,_)=>(n(),
            a("div", {
                class: M({
                    active: o.chackTow
                }),
                key: _,
                onClick: m=>u(o, _, 2)
            }, [t("div", null, i(o.num), 1)], 10, b3))), 128))])])
        }
    }
});
const _3 = K(m3, [["__scopeId", "data-v-6741c1eb"]])
  , h3 = l=>(Gt("data-v-d519a2ac"),
l = l(),
Pt(),
l)
  , v3 = {
    class: "Betting__Popup-body"
}
  , k3 = {
    key: 0,
    class: "Betting__Popup-type1"
}
  , f3 = {
    class: "title"
}
  , y3 = {
    class: "list"
}
  , $3 = {
    key: 0,
    class: "Betting__Popup-type2"
}
  , T3 = {
    class: "title"
}
  , w3 = {
    class: "list"
}
  , C3 = {
    key: 1,
    class: "Betting__Popup-type2"
}
  , N3 = {
    class: "title"
}
  , L3 = {
    class: "list"
}
  , z3 = ["innerHTML"]
  , I3 = {
    key: 0,
    class: "Betting__Popup-type2"
}
  , x3 = {
    class: "title"
}
  , R3 = {
    class: "list"
}
  , S3 = {
    key: 1,
    class: "title"
}
  , M3 = {
    key: 2,
    class: "Betting__Popup-type2-r"
}
  , B3 = {
    key: 0,
    class: "Betting__Popup-type2"
}
  , G3 = {
    class: "title"
}
  , P3 = {
    class: "list"
}
  , D3 = {
    key: 1,
    class: "title"
}
  , A3 = {
    key: 2,
    class: "Betting__Popup-type2-r"
}
  , O3 = {
    key: 3,
    class: "Betting__Popup-type2"
}
  , q3 = {
    class: "title"
}
  , W3 = {
    class: "list"
}
  , E3 = {
    class: "Betting__Popup-body-line"
}
  , V3 = {
    class: "Betting__Popup-body-line-list"
}
  , F3 = ["onClick"]
  , j3 = {
    class: "Betting__Popup-body-line"
}
  , H3 = {
    class: "Betting__Popup-body-line-btnL"
}
  , U3 = {
    class: "Betting__Popup-body-line"
}
  , K3 = h3(()=>t("div", null, null, -1))
  , X3 = {
    class: "Betting__Popup-body-line-list"
}
  , Q3 = ["onClick"]
  , Y3 = {
    class: "Betting__Popup-body-line"
}
  , J3 = {
    class: "Betting__Popup-foot"
}
  , Z3 = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , t5 = {
    class: "Betting__Popup-PreSale"
}
  , i5 = {
    class: "Betting__Popup-PreSale-head"
}
  , e5 = {
    class: "Betting__Popup-PreSale-body"
}
  , n5 = {
    class: "Betting__Popup-PreSale-foot"
}
  , a5 = H({
    __name: "BettingPopup",
    props: {
        currentInfo: {},
        currentGame: {},
        bettingPopupShow: {},
        betTypeList: {},
        betnumList: {},
        numTow: {},
        numOne: {},
        actNav: {},
        numTowList: {},
        numChack: {}
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , {t: g} = kt()
          , b = h(!1)
          , d = h(!0)
          , c = Q(()=>u.currentGame.betMultiple.split("|"));
        At(()=>u.bettingPopupShow, ()=>{
            p.value.coin = Number(u.betTypeList[0]),
            p.value.count = c.value[0]
        }
        );
        const p = h({
            coin: 0,
            count: c.value[0],
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "",
            selecttype: "1"
        });
        At(()=>c, ()=>{
            p.value.count = c.value[0]
        }
        , {
            deep: !0,
            immediate: !0
        });
        let o = Q({
            get() {
                return k(),
                u.bettingPopupShow || !1
            },
            set(N) {
                s("update:bettingPopupShow", N)
            }
        });
        const _ = N=>{
            switch (N) {
            case 1:
                p.value.count > 1 && (p.value.count--,
                k());
                break;
            case 2:
                p.value.count++,
                k();
                break
            }
        }
          , m = N=>{
            N > 0 && (p.value.count = parseInt(N),
            k())
        }
          , T = N=>{
            p.value.count = N,
            k()
        }
          , f = N=>{
            p.value.coin = N,
            k()
        }
          , y = ()=>{
            b.value = !1,
            d.value = !0
        }
          , $ = async()=>{
            if (!d.value) {
                _i(g("agreePresaleRules"));
                return
            }
            let {coin: N, count: x, selecttype: R} = p.value;
            if (x == 0)
                return Ot(g("bteNoCount"));
            let O = null
              , P = u.betnumList;
            if (u.actNav === 0 && u.betnumList.length) {
                O = w(u.betnumList),
                P.sort();
                for (let X = 0; P.length > X; X++)
                    P[X] == "A" && (P[X] = "H"),
                    P[X] == "B" && (P[X] = "L"),
                    P[X] == "C" && (P[X] = "O"),
                    P[X] == "D" && (P[X] = "E");
                R = P.join(",")
            } else if (u.actNav == 1) {
                let X = []
                  , at = ""
                  , dt = "";
                if (P.length > 0) {
                    let lt = [];
                    for (let st = 0; P.length > st; st++) {
                        let J = "|" + P[st] + "|";
                        lt.push(J)
                    }
                    dt = lt.join(","),
                    X.push(6)
                }
                if (u.numTowList.length > 0) {
                    let lt = []
                      , st = [];
                    for (let J = 0; u.numOne.length > J; J++) {
                        let mt = ":" + u.numOne[J] + ":";
                        lt.push(mt),
                        lt = lt.sort()
                    }
                    for (let J = 0; u.numTow.length > J; J++) {
                        let mt = ":" + u.numTow[J] + ":";
                        st.push(mt),
                        st = st.sort()
                    }
                    at = st.join(",") + "," + lt.join(","),
                    X.push(5)
                }
                X = X.sort((lt,st)=>lt - st),
                O = X.join(","),
                at && (R = at),
                dt && (R = dt),
                at && dt && (R = at + "," + dt)
            } else if (u.actNav == 2) {
                let X = []
                  , at = ""
                  , dt = "";
                if (P.length > 0) {
                    let lt = [];
                    for (let st = 0; P.length > st; st++) {
                        let J = "|" + P[st] + "|";
                        lt.push(J),
                        lt = lt.sort()
                    }
                    at = lt.join(","),
                    X.push(7)
                }
                u.numChack && (dt = "|AAA|",
                X.push(8)),
                X = X.sort((lt,st)=>lt - st),
                O = X.join(","),
                at && (R = at),
                dt && (R = dt),
                at && dt && (R = at + "," + dt)
            } else if (u.actNav == 3) {
                let X = []
                  , at = ""
                  , dt = ""
                  , lt = "";
                if (u.numOne.length > 2) {
                    let st = [];
                    for (let J = 0; u.numOne.length > J; J++) {
                        let mt = "|" + u.numOne[J] + "|";
                        st.push(mt),
                        st = st.sort()
                    }
                    at = st.join(","),
                    X.push(9)
                }
                if (u.numChack && (dt = "|ABC|",
                X.push(10)),
                u.numTow.length > 1) {
                    let st = [];
                    for (let J = 0; u.numTow.length > J; J++) {
                        let mt = "." + u.numTow[J] + ".";
                        st.push(mt),
                        st = st.sort()
                    }
                    lt = st.join(","),
                    X.push(4)
                }
                X = X.sort((st,J)=>st - J),
                O = X.join(","),
                lt && (R = lt),
                at && (R = at),
                dt && (R = dt),
                at && dt && (R = at + "," + dt),
                lt && at && (R = lt + "," + at),
                lt && dt && (R = lt + "," + dt),
                lt && at && dt && (R = lt + "," + at + "," + dt)
            }
            const F = await ot(va({
                amount: N,
                betCount: Number(x),
                gameType: O,
                selectType: R,
                typeId: u.currentGame.typeID,
                issuenumber: u.currentInfo.gameNo
            }));
            (F == null ? void 0 : F.code) === 0 ? (_i(g("code" + (F == null ? void 0 : F.msgCode))),
            s("submitBetting", u.currentInfo.gameNo)) : s("clearBetting")
        }
          , w = N=>{
            let x = [];
            for (let R = 0; N.length > R; R++) {
                if (N[R] == "3" || N[R] == "4" || N[R] == "5" || N[R] == "6" || N[R] == "7" || N[R] == "8" || N[R] == "9" || N[R] == "10" || N[R] == "11" || N[R] == "12" || N[R] == "13" || N[R] == "14" || N[R] == "15" || N[R] == "16" || N[R] == "17" || N[R] == "18") {
                    x.push(1);
                    continue
                }
                if (N[R] == "A" || N[R] == "B") {
                    x.push(2);
                    continue
                }
                if (N[R] == "C" || N[R] == "D") {
                    x.push(3);
                    continue
                }
            }
            return x = x.sort(function(R, O) {
                return R - O
            }),
            [...new Set(x)].join(",")
        }
          , k = ()=>{
            const N = u.betnumList.length + v() + (u.numChack ? 1 : 0) + L(u.numOne, 3) + L(u.numTow);
            p.value.allCoin = p.value.coin * p.value.count * N
        }
          , v = ()=>{
            const N = u.numTowList.length;
            return N && u.numTowList[0].split("|")[1].split(",").length * N
        }
          , L = (N,x=2)=>{
            if (u.actNav != 3)
                return 0;
            function R(P) {
                let F = 1;
                for (let X = 2; X <= P; X++)
                    F *= X;
                return F
            }
            const O = N.length;
            return O < x ? 0 : R(O) / (R(x) * R(O - x))
        }
          , C = N=>{
            switch (N) {
            case "A":
                return g("betBig");
            case "B":
                return g("betSmall");
            case "C":
                return g("betOdd");
            case "D":
                return g("betEven");
            default:
                return N
            }
        }
          , I = N=>{
            let x = N.split("|")
              , R = "";
            return x.forEach(O=>{
                R += `<div>${O}</div>`
            }
            ),
            R
        }
        ;
        return e({
            setAllCoin: k
        }),
        (N,x)=>{
            const R = j("van-field")
              , O = j("van-popup")
              , P = Ht("throttle-click");
            return n(),
            a(S, null, [z(O, {
                show: r(o),
                "onUpdate:show": x[6] || (x[6] = F=>ii(o) ? o.value = F : o = F),
                position: "bottom",
                style: {
                    "box-shadow": "0px -18px 40px rgba(37, 37, 60, 0.26)",
                    background: "#3A3A3A"
                },
                round: !0,
                overlay: !1,
                "close-on-click-overlay": !1,
                "lock-scroll": !1
            }, {
                default: D(()=>[t("div", v3, [N.actNav === 0 && N.betnumList.length ? (n(),
                a("div", k3, [t("p", f3, i(N.$t("betPopDesc1")), 1), t("div", y3, [(n(!0),
                a(S, null, G(N.betnumList, (F,X)=>(n(),
                a("div", {
                    class: M(F % 2 === 0 ? "green" : "red num" + F),
                    key: X
                }, i(C(F)), 3))), 128))])])) : B("", !0), N.actNav === 1 ? (n(),
                a(S, {
                    key: 1
                }, [N.betnumList.length ? (n(),
                a("div", $3, [t("p", T3, i(N.$t("betPopDesc2")), 1), t("div", w3, [(n(!0),
                a(S, null, G(N.betnumList, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, i(C(F)), 1))), 128))])])) : B("", !0), N.numTowList.length ? (n(),
                a("div", C3, [t("p", N3, i(N.$t("betPopDesc3")), 1), t("div", L3, [(n(!0),
                a(S, null, G(N.numTowList, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-o",
                    innerHTML: I(F)
                }, null, 8, z3))), 128))])])) : B("", !0)], 64)) : B("", !0), N.actNav === 2 ? (n(),
                a(S, {
                    key: 2
                }, [N.betnumList.length ? (n(),
                a("div", I3, [t("p", x3, i(N.$t("betPopDesc4")), 1), t("div", R3, [(n(!0),
                a(S, null, G(N.betnumList, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, i(C(F)), 1))), 128))])])) : B("", !0), N.numChack ? (n(),
                a("p", S3, i(N.$t("betPopDesc5")), 1)) : B("", !0), N.numChack ? (n(),
                a("div", M3, i(N.$t("k3bet3Desc4")), 1)) : B("", !0)], 64)) : B("", !0), N.actNav === 3 ? (n(),
                a(S, {
                    key: 3
                }, [N.numOne.length > 2 ? (n(),
                a("div", B3, [t("p", G3, i(N.$t("betPopDesc6")), 1), t("div", P3, [(n(!0),
                a(S, null, G(N.numOne, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, i(C(F)), 1))), 128))])])) : B("", !0), N.numChack ? (n(),
                a("p", D3, i(N.$t("betPopDesc7")), 1)) : B("", !0), N.numChack ? (n(),
                a("div", A3, i(N.$t("betPopDesc7")), 1)) : B("", !0), N.numTow.length > 1 ? (n(),
                a("div", O3, [t("p", q3, i(N.$t("betPopDesc8")), 1), t("div", W3, [(n(!0),
                a(S, null, G(N.numTow, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: "Betting__Popup-type2-d"
                }, i(C(F)), 1))), 128))])])) : B("", !0)], 64)) : B("", !0), t("div", E3, [E(i(r(g)("amount")) + " ", 1), t("div", V3, [(n(!0),
                a(S, null, G(N.betTypeList, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: p.value.coin == F
                    }]),
                    onClick: at=>f(F)
                }, i(F), 11, F3))), 128))])]), t("div", j3, [E(i(r(g)("numbers")) + " ", 1), t("div", H3, [t("div", {
                    class: M(["Betting__Popup-btn", {
                        bgcolor: p.value.count > 0
                    }]),
                    onClick: x[0] || (x[0] = F=>_(1))
                }, "-", 2), z(R, {
                    class: "Betting__Popup-input",
                    modelValue: p.value.count,
                    "onUpdate:modelValue": x[1] || (x[1] = F=>p.value.count = F),
                    type: "digit",
                    maxlength: 4,
                    onInput: m
                }, null, 8, ["modelValue"]), t("div", {
                    class: "Betting__Popup-btn bgcolor",
                    onClick: x[2] || (x[2] = F=>_(2))
                }, "+")])]), t("div", U3, [K3, t("div", X3, [(n(!0),
                a(S, null, G(c.value, (F,X)=>(n(),
                a("div", {
                    key: X,
                    class: M(["Betting__Popup-body-line-item border", {
                        bgcolor: p.value.count == F
                    }]),
                    onClick: at=>T(F)
                }, " X" + i(F), 11, Q3))), 128))])]), t("div", Y3, [t("span", {
                    class: M(["Betting__Popup-agree", {
                        active: d.value
                    }]),
                    onClick: x[3] || (x[3] = F=>d.value = !d.value)
                }, i(r(g)("agree")), 3), t("span", {
                    onClick: x[4] || (x[4] = F=>b.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, i(r(g)("presaleRules")), 1)])]), t("div", J3, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: x[5] || (x[5] = F=>s("clearBetting"))
                }, i(r(g)("cancel")), 1), pt((n(),
                a("div", Z3, [E(i(r(g)("totalAmount")) + " " + i(r(Rt)(p.value.allCoin || 0)), 1)])), [[P, {
                    handler: $,
                    wait: 2e3
                }]])])]),
                _: 1
            }, 8, ["show"]), z(O, {
                show: b.value,
                "onUpdate:show": x[7] || (x[7] = F=>b.value = F),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", t5, [t("div", i5, i(r(g)("presaleRules")), 1), t("div", e5, i(N.$t("betPopTXT")), 1), t("div", n5, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: y
                }, i(r(g)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const o5 = K(a5, [["__scopeId", "data-v-d519a2ac"]])
  , s5 = {
    class: "K3B__C"
}
  , l5 = {
    class: "K3B__C-mark"
}
  , c5 = {
    class: "K3B__C-nav"
}
  , r5 = ["onClick"]
  , u5 = {
    class: "qpopup-box"
}
  , d5 = {
    class: "qpopup-box-list"
}
  , p5 = {
    class: "qpopup-box-txt"
}
  , g5 = H({
    __name: "Betting",
    props: {
        currentInfo: {
            type: Object,
            default: ()=>({})
        },
        ProhibitBuyTime: {
            type: Number,
            default: 5
        },
        currentGame: {
            type: Object,
            default: ()=>({})
        }
    },
    emits: ["betting", "changeBettingP"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , {t: g} = kt()
          , b = {
            bt1: MT,
            bt2: KT,
            bt3: n3,
            bt4: _3
        }
          , d = h()
          , c = h()
          , p = h([])
          , o = h(0)
          , _ = h([{
            name: g("totalBet"),
            comp: "bt1"
        }, {
            name: g("sameNum"),
            comp: "bt2"
        }, {
            name: g("numbersMatch"),
            comp: "bt3"
        }, {
            name: g("numbersUnmatch"),
            comp: "bt4"
        }])
          , m = h([{
            num: 1,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 2,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 3,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 4,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 5,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }, {
            num: 6,
            chack: !1,
            chackOne: !1,
            chackTow: !1
        }])
          , T = h([])
          , f = h([])
          , y = h([])
          , $ = h(!1)
          , w = h([])
          , k = h(!1)
          , v = Q(()=>(u.currentInfo.passTime < u.ProhibitBuyTime && C(),
        u.currentInfo.passTime < u.ProhibitBuyTime))
          , L = Q(()=>u.currentGame.scope ? u.currentGame.scope.split("|").map(lt=>Number(lt)) : [])
          , C = ()=>{
            k.value = !1,
            I()
        }
          , I = ()=>{
            c.value.clearList && c.value.clearList(),
            T.value = [],
            f.value = [],
            y.value = [],
            $.value = !1,
            w.value = [],
            m.value = [{
                num: 1,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 2,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 3,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 4,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 5,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }, {
                num: 6,
                chack: !1,
                chackOne: !1,
                chackTow: !1
            }]
        }
          , N = async()=>{
            const lt = await ot(ms());
            p.value = (lt == null ? void 0 : lt.data) || []
        }
          , x = ()=>{
            d.value.setAllCoin()
        }
          , R = lt=>{
            o.value = lt,
            k.value = !1,
            I()
        }
          , O = ()=>{
            let lt = [];
            for (let st = 0; f.value.length > st; st++) {
                let J = f.value[st]
                  , mt = [];
                for (let Mt = 0; y.value.length > Mt; Mt++)
                    mt.push(y.value[Mt]);
                if (mt.length > 0) {
                    let Mt = mt.sort().join(",");
                    lt.push(J + "|" + Mt)
                }
            }
            w.value = lt.sort()
        }
          , P = async lt=>{
            s("betting", lt),
            k.value = !1,
            I()
        }
          , F = h(!1)
          , X = h([])
          , at = h("")
          , dt = (lt,st)=>{
            at.value = lt,
            X.value = st,
            F.value = !0
        }
        ;
        return Ct(()=>{
            N()
        }
        ),
        e({
            bettingPopupShow: k
        }),
        (lt,st)=>{
            const J = j("van-popup");
            return n(),
            a("div", s5, [pt(t("div", l5, [t("div", null, i(u.currentInfo.time3 || "0"), 1), t("div", null, i(u.currentInfo.time4 || "0"), 1)], 512), [[ci, v.value]]), t("div", c5, [(n(!0),
            a(S, null, G(_.value, (mt,Mt)=>(n(),
            a("div", {
                key: Mt,
                class: M({
                    active: o.value == Mt
                }),
                onClick: Et=>R(Mt)
            }, i(mt.name), 11, r5))), 128))]), (n(),
            it(vi(b[_.value[o.value].comp]), {
                ref_key: "BetRef",
                ref: c,
                OddsList: p.value,
                numList: m.value,
                numTow: f.value,
                numOne: y.value,
                numChack: $.value,
                betnumList: T.value,
                onSelectNum: O,
                onShowP: st[0] || (st[0] = mt=>k.value = mt),
                onUpAll: x,
                onCNumChack: st[1] || (st[1] = mt=>$.value = !$.value),
                onOnQuestion: dt
            }, null, 40, ["OddsList", "numList", "numTow", "numOne", "numChack", "betnumList"])), z(o5, {
                ref_key: "betPopupRef",
                ref: d,
                currentInfo: u.currentInfo,
                bettingPopupShow: k.value,
                numTow: f.value,
                numOne: y.value,
                betTypeList: L.value,
                numTowList: w.value,
                currentGame: l.currentGame,
                actNav: o.value,
                betnumList: T.value,
                numChack: $.value,
                onClearBetting: C,
                onSubmitBetting: P
            }, null, 8, ["currentInfo", "bettingPopupShow", "numTow", "numOne", "betTypeList", "numTowList", "currentGame", "actNav", "betnumList", "numChack"]), z(J, {
                class: "qpopup",
                show: F.value,
                "onUpdate:show": st[2] || (st[2] = mt=>F.value = mt),
                "close-on-click-overlay": !1,
                closeable: "",
                "close-icon": "close",
                "close-icon-position": "bottom-left",
                round: ""
            }, {
                default: D(()=>[t("div", u5, [t("div", d5, [(n(!0),
                a(S, null, G(X.value, (mt,Mt)=>(n(),
                a("div", {
                    class: M("num num" + mt),
                    key: Mt
                }, null, 2))), 128))]), t("div", p5, i(at.value), 1)])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const b5 = K(g5, [["__scopeId", "data-v-4b0cace2"]])
  , m5 = {
    class: "GameRecord__C"
}
  , _5 = {
    class: "GameRecord__C-head"
}
  , h5 = {
    class: "GameRecord__C-body"
}
  , v5 = {
    class: "GameRecord__C-body-premium"
}
  , k5 = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , f5 = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , y5 = {
    class: "GameRecord__C-foot-page"
}
  , $5 = H({
    __name: "GameRecord",
    props: {
        typeid: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , u = h([])
          , g = h(4)
          , b = h(10)
          , d = h(1)
          , c = ()=>{
            d.value--,
            o()
        }
          , p = ()=>{
            d.value++,
            o()
        }
          , o = async(_=!1)=>{
            if (s.typeid == null)
                return;
            _ && (d.value = 1);
            const [m,T] = await Zt(rn({
                pageSize: b.value,
                pageNo: d.value,
                typeId: s.typeid
            }));
            u.value = T.list || [],
            g.value = T.totalPage
        }
        ;
        return e({
            getData: o
        }),
        ki(()=>{
            o()
        }
        ),
        (_,m)=>{
            const T = j("van-col")
              , f = j("van-row")
              , y = j("van-icon");
            return n(),
            a("div", m5, [t("div", _5, [z(f, null, {
                default: D(()=>[z(T, {
                    span: "10"
                }, {
                    default: D(()=>[E(i(_.$t("gameRecordNum")), 1)]),
                    _: 1
                }), z(T, {
                    span: "4"
                }, {
                    default: D(()=>[E(i(_.$t("gameRecordTotal")), 1)]),
                    _: 1
                }), z(T, {
                    span: "10"
                }, {
                    default: D(()=>[E(i(_.$t("gameRecordResult")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", h5, [u.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(u.value, ($,w)=>(n(),
            it(f, {
                key: w
            }, {
                default: D(()=>[z(T, {
                    span: "8"
                }, {
                    default: D(()=>[E(i($.issueNumber), 1)]),
                    _: 2
                }, 1024), z(T, {
                    span: "1"
                }, {
                    default: D(()=>[t("span", null, i($.sumCount), 1)]),
                    _: 2
                }, 1024), z(T, {
                    span: "4"
                }, {
                    default: D(()=>[t("span", null, i($.sumCount > 10 ? _.$t("big") : _.$t("small")), 1)]),
                    _: 2
                }, 1024), z(T, {
                    span: "4"
                }, {
                    default: D(()=>[t("span", null, i($.sumCount % 2 ? _.$t("k3Odd") : _.$t("k3Even")), 1)]),
                    _: 2
                }, 1024), z(T, {
                    span: "6"
                }, {
                    default: D(()=>[t("div", v5, [(n(!0),
                    a(S, null, G($.premium, (k,v)=>(n(),
                    a("div", {
                        key: v,
                        class: M("n" + k)
                    }, null, 2))), 128))])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", k5, [z(ri)]))]), u.value.length ? (n(),
            a("div", f5, [t("div", {
                class: M(["GameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: c
            }, [z(y, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", y5, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["GameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: p
            }, [z(y, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const T5 = K($5, [["__scopeId", "data-v-bc985eb8"]])
  , w5 = {
    class: "Trend__C"
}
  , C5 = {
    class: "Trend__C-head"
}
  , N5 = {
    class: "Trend__C-body"
}
  , L5 = {
    class: "Trend__C-body-premium"
}
  , z5 = {
    class: "Trend__C-body-gameText"
}
  , I5 = {
    key: 1,
    class: "Trend__C-body-empty"
}
  , x5 = {
    key: 0,
    class: "Trend__C-foot"
}
  , R5 = {
    class: "Trend__C-foot-page"
}
  , S5 = H({
    __name: "Trend",
    props: {
        typeid: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , {t: u} = kt()
          , g = h([])
          , b = h(4)
          , d = h(10)
          , c = h(1)
          , p = ()=>{
            c.value--,
            _()
        }
          , o = ()=>{
            c.value++,
            _()
        }
          , _ = async(f=!1)=>{
            if (s.typeid == null)
                return;
            f && (c.value = 1);
            const [y,$] = await Zt(rn({
                pageSize: d.value,
                pageNo: c.value,
                typeId: s.typeid
            }));
            g.value = $.list.map(w=>{
                let k = [0, 0, 0, 0, 0, 0]
                  , v = w.premium.split("").map(Number)
                  , L = w.premium.split("").map(Number);
                for (let C = 0; k.length > C; C++)
                    k[v[C] - 1] = v[C];
                return w.Premiums = k,
                w.AllEqual = T(L),
                w
            }
            ) || [],
            b.value = $.totalPage
        }
          , m = h([u("trendTXT1"), u("trendTXT2"), u("trendTXT3"), u("trendTXT4")])
          , T = f=>{
            let y = [0, 0, 0, 0, 0, 0]
              , $ = f.sort()
              , w = 2;
            for (let k = 0; k < $.length - 1; k++)
                $[k] == $[k + 1] && (y[$[k] - 1] = w++);
            return y
        }
        ;
        return e({
            getData: _
        }),
        ki(()=>{
            _()
        }
        ),
        (f,y)=>{
            const $ = j("van-col")
              , w = j("van-row")
              , k = j("van-icon");
            return n(),
            a("div", w5, [t("div", C5, [z(w, null, {
                default: D(()=>[z($, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(f.$t("trendNumber")), 1)]),
                    _: 1
                }), z($, {
                    span: "6"
                }, {
                    default: D(()=>[E(i(f.$t("trendResult")), 1)]),
                    _: 1
                }), z($, {
                    span: "10"
                }, {
                    default: D(()=>[E(i(f.$t("trendNum")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", N5, [g.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (v,L)=>(n(),
            it(w, {
                key: L
            }, {
                default: D(()=>[z($, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(v.issueNumber), 1)]),
                    _: 2
                }, 1024), z($, {
                    span: "6"
                }, {
                    default: D(()=>[t("div", L5, [(n(!0),
                    a(S, null, G(v.premium, (C,I)=>(n(),
                    a("div", {
                        key: I,
                        class: M("n" + C)
                    }, null, 2))), 128))])]),
                    _: 2
                }, 1024), z($, {
                    span: "10"
                }, {
                    default: D(()=>[t("div", z5, [t("span", null, i(m.value[v.gameType]), 1)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", I5, [z(ri)]))]), g.value.length ? (n(),
            a("div", x5, [t("div", {
                class: M(["Trend__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: p
            }, [z(k, {
                name: "arrow-left",
                class: "Trend__C-icon",
                size: "20"
            })], 2), t("div", R5, i(c.value) + "/" + i(b.value), 1), t("div", {
                class: M(["Trend__C-foot-next", {
                    disabled: c.value >= b.value
                }]),
                onClick: o
            }, [z(k, {
                name: "arrow",
                class: "Trend__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const M5 = K(S5, [["__scopeId", "data-v-e311f3d1"]])
  , B5 = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , G5 = {
    class: "WinningTip__C-body-l2"
}
  , P5 = {
    class: "line1"
}
  , D5 = {
    class: "line2"
}
  , A5 = {
    class: "yuan"
}
  , O5 = {
    class: "WinningTip__C-body-l3"
}
  , q5 = {
    key: 0,
    class: "isLose"
}
  , W5 = {
    class: "head"
}
  , E5 = {
    class: "bonus"
}
  , V5 = {
    class: "gameDetail"
}
  , F5 = {
    class: "WinningTip__C-body-l4"
}
  , j5 = ["onClick"]
  , H5 = H({
    __name: "WinningTips",
    setup(l, {expose: e}) {
        const s = Q(()=>b.value[0] ? b.value[0].state == 0 : !1)
          , u = Q(()=>b.value[0] || {})
          , g = h(!1)
          , b = h([]);
        let d = h();
        const c = ()=>{
            clearTimeout(d.value),
            b.value.shift(),
            g.value && b.value.length && (d.value = setTimeout(()=>{
                c()
            }
            , 1e3 * 3))
        }
          , p = ()=>{
            g.value = !g.value,
            g.value ? d.value = setTimeout(()=>{
                c()
            }
            , 1e3 * 3) : clearTimeout(d.value)
        }
          , o = m=>{
            m.list = m.premium.split(""),
            m.sum = Number(m.list[0]) + Number(m.list[1]) + Number(m.list[2]),
            b.value.push(m),
            g.value && (d.value = setTimeout(()=>{
                c()
            }
            , 1e3 * 3))
        }
          , _ = ()=>{
            b.value = []
        }
        ;
        return e({
            showMark: o
        }),
        (m,T)=>pt((n(),
        a("div", {
            class: "WinningTip__C",
            onClick: c
        }, [t("div", {
            class: M(["WinningTip__C-body", {
                isL: s.value
            }])
        }, [s.value ? (n(),
        a("div", {
            key: 0,
            class: M(["WinningTip__C-body-l1", {
                isL: s.value
            }])
        }, i(m.$t("k3WarningTip1")), 3)) : (n(),
        a("div", B5, i(m.$t("k3WarningTip2")), 1)), t("div", G5, [t("div", P5, [(n(!0),
        a(S, null, G(u.value.list, (f,y)=>(n(),
        a("div", {
            class: M(["n" + f])
        }, null, 2))), 256))]), t("div", D5, [t("div", null, i(u.value.premium), 1), t("div", A5, i(u.value.sum > 10 ? m.$t("big") : m.$t("small")), 1), t("div", null, i(u.value.sum % 2 ? m.$t("k3Odd") : m.$t("k3Even")), 1)])]), t("div", O5, [s.value ? (n(),
        a("div", q5, i(m.$t("k3WarningTip3")), 1)) : (n(),
        a(S, {
            key: 1
        }, [t("div", W5, i(m.$t("k3WarningTip4")), 1), t("div", E5, i(r(Rt)(Number(u.value.winAmount))), 1)], 64)), t("div", V5, i(m.$t("k3WarningTip5")) + i(u.value.typeName) + " " + i(u.value.issueNumber), 1)]), t("div", F5, [t("div", {
            class: M(["acitveBtn", {
                active: g.value
            }]),
            onClick: hi(p, ["stop"])
        }, null, 10, j5), E(" " + i(m.$t("autoShutOff3s")), 1)]), t("div", {
            class: "closeBtn",
            onClick: _
        })], 2)], 512)), [[ci, b.value.length]])
    }
});
const U5 = K(H5, [["__scopeId", "data-v-af2e7991"]])
  , K5 = {
    class: "K3__C"
}
  , X5 = {
    class: "K3__C-head-more"
}
  , Q5 = H({
    __name: "index",
    setup(l) {
        const s = de().query.typeId
          , u = {
            GameRecord: T5,
            Trend: M5,
            MyGameRecord: Da
        }
          , g = h()
          , b = h()
          , d = h()
          , c = h(!1)
          , p = h("GameRecord")
          , o = ft()
          , _ = Ui()
          , m = _.getK3
          , T = h(0)
          , f = h(localStorage.getItem("volumeShow") || "1")
          , y = h(!1)
          , $ = h([])
          , w = h(null)
          , k = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , v = h("666")
          , L = h(5)
          , C = h("")
          , I = h(!1)
          , N = h(null)
          , x = Q(()=>m[T.value] || {})
          , R = Ei()
          , O = Q(()=>R.getIsShowLotteryDragon);
        Ct(()=>{
            at()
        }
        ),
        Hi(()=>{
            clearInterval(w.value),
            clearInterval(qt.value),
            Nt.value.forEach(A=>{
                clearInterval(A)
            }
            ),
            Y.value && clearTimeout(Y.value)
        }
        ),
        At(()=>pi().visibility, A=>{
            A === 0 ? clearInterval(w.value) : (at(),
            lt(T.value))
        }
        );
        const P = ()=>{
            sessionStorage.setItem("clickedGameType", "lottery"),
            o.push({
                path: "/"
            })
        }
          , F = ()=>{
            f.value == "1" ? f.value = "2" : f.value = "1",
            localStorage.setItem("volumeShow", f.value)
        }
          , X = A=>{
            o.push({
                name: A
            })
        }
          , at = ()=>{
            const A = m.findIndex(nt=>nt.typeID == s);
            lt(A !== -1 ? A : 0)
        }
          , dt = async(A,nt=!1)=>{
            const $t = await ot(hs({
                typeId: A
            }));
            $t && (v.value = $t.data.premium,
            nt && yt(v.value))
        }
          , lt = A=>{
            _.getK3Data(),
            T.value = A,
            N.value = m[A].typeID,
            st(N.value),
            ti(()=>{
                g.value.getData(N.value)
            }
            )
        }
          , st = async(A,nt=!1)=>{
            dt(A, nt);
            const [$t,Bt] = await Zt(_s({
                typeId: A
            }));
            k.value.gameNo = Bt.issueNumber,
            k.value.currentTime = Bt.serviceTime.replace(/-/g, "/"),
            k.value.beginTime = Bt.startTime.replace(/-/g, "/"),
            J()
        }
          , J = ()=>{
            if (!m.length)
                return;
            var A = new Date(k.value.currentTime).getTime()
              , nt = new Date(k.value.beginTime).getTime();
            let $t = (A - nt) / 1e3
              , Bt = m[T.value];
            if ($t > Bt.intervalM * 60 && ($t = Bt.intervalM * 60),
            k.value.passTime = Bt.intervalM * 60 - $t,
            k.value.passTime < 0) {
                C.value = "An error occurred, please contact customer service。The game time is " + Bt.intervalM + " minutes,start time is " + k.value.beginTime + ",current time is" + k.value.currentTime + "!",
                y.value = !0;
                return
            }
            mt()
        }
          , mt = ()=>{
            clearInterval(w.value),
            Mt(!1),
            w.value = setInterval(function() {
                Mt()
            }, 1e3)
        }
          , Mt = (A=!0)=>{
            if (k.value.passTime <= L.value && (I.value = !1),
            f.value == "1" && (k.value.passTime <= L.value && k.value.passTime > 1 ? Et(1) : k.value.passTime == 1 && Et(2)),
            k.value.passTime > 0) {
                let nt = k.value.passTime;
                k.value.time2 = Math.floor(nt / 60),
                k.value.time3 = Math.floor(nt % 60 / 10),
                k.value.time4 = Math.floor(nt % 10),
                k.value.passTime--
            } else
                clearInterval(w.value),
                A && gt()
        }
          , Et = (A=1)=>{
            const nt = document.getElementById(`voice${A}`);
            nt && nt.play()
        }
          , gt = ()=>{
            st(N.value, !0),
            d.value.getWinsUserAmount(!1),
            g.value.getData(!0)
        }
          , qt = h(null)
          , Ft = (A,nt)=>{
            if (A >= 0 && nt > 0 && nt >= A) {
                let $t = nt - A + 1;
                return Math.floor(Math.random() * $t + A)
            } else
                return 0
        }
          , yt = A=>{
            qt.value || (qt.value = setInterval(function() {
                for (var nt = [], $t = 0; 3 > $t; $t++)
                    nt.push(Ft(1, 6));
                v.value = nt.join("")
            }, 50)),
            setTimeout(function() {
                clearInterval(qt.value),
                v.value = A,
                qt.value = null
            }, 2e3)
        }
          , wt = h({})
          , Nt = h([])
          , Tt = A=>{
            if (d.value.getWinsUserAmount(!1),
            g.value.getData(),
            wt.value[A])
                return;
            wt.value[A] = !0;
            const {time1: nt, time2: $t, time3: Bt, time4: gi} = k.value
              , ei = (nt * 10 * 60 + $t * 60 + Bt * 10 + gi) * 1e3;
            Nt.value[x.value.intervalM] = setTimeout(()=>{
                et(A)
            }
            , ei)
        }
          , ct = A=>{
            c.value = A
        }
          , Y = h(null)
          , et = async A=>{
            const nt = await ot(vs({
                issueNumber: A
            }));
            if (nt) {
                if (!(nt.data.state != 2)) {
                    Y.value = setTimeout(()=>{
                        et(A)
                    }
                    , 2e3);
                    return
                }
                b.value.showMark(nt.data),
                delete wt.value[A]
            }
        }
        ;
        return (A,nt)=>{
            const $t = j("NavBar");
            return n(),
            a("div", K5, [z($t, {
                "left-arrow": "",
                onClickLeft: P,
                "background-color": "#3F3F3F",
                headLogo: !0
            }, {
                right: D(()=>[t("div", X5, [t("div", {
                    onClick: nt[0] || (nt[0] = Bt=>X("CustomerService"))
                }), t("div", {
                    class: M({
                        disableVoice: f.value == "2"
                    }),
                    onClick: F
                }, null, 2)])]),
                _: 1
            }), z(xe, {
                ref_key: "WallteRef",
                ref: d
            }, null, 512), z(ke, {
                siteMsg: $.value,
                key: "k3"
            }, null, 8, ["siteMsg"]), z(Re, {
                gameList: r(m),
                currentGameIndex: T.value,
                onChangeGame: lt
            }, null, 8, ["gameList", "currentGameIndex"]), z(CT, {
                currentInfo: k.value,
                premium: v.value,
                currentGame: x.value
            }, null, 8, ["currentInfo", "premium", "currentGame"]), z(b5, {
                currentInfo: k.value,
                currentGame: x.value,
                VoiceType: f.value,
                typeid: N.value,
                onBetting: Tt,
                onChangeBettingP: ct
            }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid"]), z(Me, {
                record: p.value,
                onChangeC: nt[1] || (nt[1] = Bt=>p.value = Bt)
            }, null, 8, ["record"]), (n(),
            it(Yi, null, [(n(),
            it(vi(u[p.value]), {
                ref_key: "RecordComponent",
                ref: g,
                typeid: N.value,
                ApiFun: r(cn),
                listApi: r(rn),
                EmerdApi: r(ka),
                goPathName: "AllLotteryGames-BettingRecordK3"
            }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), z(xi, {
                show: y.value,
                onConfirm: nt[2] || (nt[2] = Bt=>X("/login"))
            }, {
                content: D(()=>[t("div", null, i(C.value), 1)]),
                _: 1
            }, 8, ["show"]), z(U5, {
                ref_key: "WinningTipsRef",
                ref: b
            }, null, 512), O.value ? (n(),
            it(Ie, {
                key: 0
            })) : B("", !0), z(Be)])
        }
    }
});
const Y5 = K(Q5, [["__scopeId", "data-v-aca05fdb"]])
  , zx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Y5
}, Symbol.toStringTag, {
    value: "Module"
}))
  , De = l=>(Gt("data-v-5d6270a9"),
l = l(),
Pt(),
l)
  , J5 = {
    class: "TimeLeft__C"
}
  , Z5 = {
    class: "box"
}
  , tw = {
    class: "tit"
}
  , iw = {
    class: "citycon"
}
  , ew = De(()=>t("div", {
    class: "citybg"
}, null, -1))
  , nw = {
    class: "font30"
}
  , aw = {
    class: "playmethod"
}
  , ow = {
    key: 0,
    class: "odds"
}
  , sw = De(()=>t("div", {
    class: "line"
}, "|", -1))
  , lw = {
    class: "odd"
}
  , cw = {
    key: 1,
    class: "color8"
}
  , rw = {
    class: "bettingcut"
}
  , uw = {
    class: "font22"
}
  , dw = {
    class: "info"
}
  , pw = De(()=>t("div", {
    class: "illustratebg"
}, null, -1))
  , gw = {
    class: "font24"
}
  , bw = {
    class: "issue"
}
  , mw = De(()=>t("div", {
    class: "issuebg"
}, null, -1))
  , _w = {
    class: "font26"
}
  , hw = {
    class: "closure"
}
  , vw = {
    class: "closuretime"
}
  , kw = {
    class: "closurtimes"
}
  , fw = H({
    __name: "TimeLeft",
    props: {
        defaultcityname: {
            type: String,
            default: ""
        },
        defaultplayname: {
            type: String,
            default: ""
        },
        defaultexpiredate: {
            type: String,
            default: ""
        },
        issue: {
            type: String,
            default: ""
        },
        time: {
            type: String,
            default: ""
        },
        odds: {
            type: Number,
            default: 0
        },
        colorId: {
            type: Number,
            default: 0
        },
        areId: {
            type: Number,
            default: 0
        }
    },
    setup(l) {
        const e = l
          , s = ft()
          , u = ()=>{
            s.push({
                name: "AllLotteryGames-Play",
                query: {
                    id: e.areId,
                    gVSs: 1
                }
            })
        }
        ;
        return (g,b)=>(n(),
        a("div", J5, [t("div", Z5, [t("div", tw, [t("div", iw, [ew, t("div", nw, i(l.defaultcityname), 1)]), t("div", aw, i(g.$t("code" + l.defaultplayname)), 1), l.colorId != 8 ? (n(),
        a("div", ow, [t("div", null, i(g.$t("odds")), 1), sw, t("div", lw, "1:" + i(l.odds), 1)])) : B("", !0), l.colorId == 8 ? (n(),
        a("div", cw)) : B("", !0), t("div", rw, [t("div", uw, i(g.$t("xosoTxt91")), 1), t("div", null, i(l.defaultexpiredate), 1)])]), t("div", dw, [t("div", {
            class: "playillustrate",
            onClick: u
        }, [pw, t("div", gw, i(g.$t("lotteryManual")), 1)]), t("div", bw, [mw, t("div", _w, i(l.issue), 1)]), t("div", hw, [t("div", vw, i(g.$t("xosoTxt92")), 1), t("div", kw, [(n(!0),
        a(S, null, G(l.time.split(""), (d,c)=>(n(),
        a("div", {
            class: M(d == ":" ? "red" : "redsqure"),
            key: c
        }, i(d), 3))), 128))])])])])]))
    }
});
const yw = K(fw, [["__scopeId", "data-v-5d6270a9"]])
  , mn = l=>(Gt("data-v-a467b1ca"),
l = l(),
Pt(),
l)
  , $w = {
    class: "TimeLeft__C"
}
  , Tw = {
    class: "box"
}
  , ww = {
    class: "tit"
}
  , Cw = {
    class: "citycon"
}
  , Nw = mn(()=>t("div", {
    class: "citybg"
}, null, -1))
  , Lw = {
    class: "font30"
}
  , zw = {
    key: 0,
    class: "playmethod"
}
  , Iw = {
    class: "odd"
}
  , xw = {
    class: "odds"
}
  , Rw = {
    class: "result"
}
  , Sw = {
    class: "info"
}
  , Mw = mn(()=>t("div", {
    class: "illustratebg"
}, null, -1))
  , Bw = {
    class: "font24"
}
  , Gw = {
    class: "issue"
}
  , Pw = mn(()=>t("div", {
    class: "issuebg"
}, null, -1))
  , Dw = {
    class: "font26"
}
  , Aw = {
    key: 0,
    class: "closure isShowPreparing"
}
  , Ow = {
    key: 1,
    class: "closure"
}
  , qw = {
    class: "closuretime"
}
  , Ww = {
    class: "closurtimes"
}
  , Ew = H({
    __name: "TimeLeftF",
    props: {
        defaultcityname: {
            type: String,
            default: ""
        },
        defaultplayname: {
            type: String,
            default: ""
        },
        issue: {
            type: String,
            default: ""
        },
        time: {
            type: String,
            default: ""
        },
        odds: {
            type: Number,
            default: 0
        },
        colorId: {
            type: Number,
            default: 0
        },
        areId: {
            type: Number,
            default: 0
        },
        resultList: {
            type: Object,
            default: {}
        },
        isShowPreparing: {
            type: Boolean,
            defauft: !1
        }
    },
    setup(l) {
        const e = l
          , s = ft()
          , u = Q(()=>{
            var d, c;
            let b = (d = e.resultList) != null && d.openingResult ? (c = e.resultList) == null ? void 0 : c.openingResult.find(p=>p.resultType == 0).result : "";
            return Array.isArray(b) && (b = b[0]),
            b
        }
        )
          , g = ()=>{
            s.push({
                name: "AllLotteryGames-Play",
                query: {
                    id: e.areId,
                    gVSs: 2
                }
            })
        }
        ;
        return (b,d)=>{
            var c;
            return n(),
            a("div", $w, [t("div", Tw, [t("div", ww, [t("div", Cw, [Nw, t("div", Lw, i(l.defaultcityname), 1)]), l.colorId != 8 ? (n(),
            a("div", zw, [t("div", null, "(" + i(b.$t("code" + l.defaultplayname)) + ")", 1), t("div", Iw, "1:" + i(l.odds), 1)])) : B("", !0), t("div", xw, [t("div", null, i(b.$t("betResult")), 1), t("div", null, i((c = l.resultList) == null ? void 0 : c.issueNumber), 1), t("div", Rw, [(n(!0),
            a(S, null, G(u.value.split(""), (p,o)=>(n(),
            a("span", {
                key: o
            }, i(p), 1))), 128))])])]), t("div", Sw, [t("div", {
                class: "playillustrate",
                onClick: g
            }, [Mw, t("div", Bw, i(b.$t("lotteryManual")), 1)]), t("div", Gw, [Pw, t("div", Dw, i(l.issue), 1)]), l.isShowPreparing ? (n(),
            a("div", Aw, i(b.$t("preparing")), 1)) : B("", !0), l.isShowPreparing ? B("", !0) : (n(),
            a("div", Ow, [t("div", qw, i(b.$t("xosoTxt91")), 1), t("div", Ww, [(n(!0),
            a(S, null, G(l.time.split(""), (p,o)=>(n(),
            a("div", {
                class: M(p == ":" ? "red" : "redsqure"),
                key: o
            }, i(p), 3))), 128))])]))])])])
        }
    }
});
const Vw = K(Ew, [["__scopeId", "data-v-a467b1ca"]])
  , Fw = {
    class: "ColorsContainer"
}
  , jw = H({
    __name: "ColorsAndPlay",
    props: {
        gameCategoryList: {
            type: Array,
            default: ()=>[]
        },
        colortab: {
            type: Number,
            default: 0
        },
        playtab: {
            type: Number,
            default: 0
        }
    },
    emits: ["colorupdate", "update"],
    setup(l, {emit: e}) {
        const s = l
          , u = h(s.colortab)
          , g = h(s.playtab)
          , b = Q(()=>{
            var p;
            return ((p = s.gameCategoryList[u.value]) == null ? void 0 : p.gamePlayList) || []
        }
        );
        function d(p) {
            e("colorupdate", p.item.categoryId, p.index)
        }
        function c({item: p, index: o}) {
            e("update", p.playId, o, p.playNameCode, p.betType)
        }
        return At(()=>s.playtab, ()=>{
            g.value = s.playtab
        }
        ),
        At(()=>s.colortab, ()=>{
            u.value = s.colortab
        }
        ),
        (p,o)=>(n(),
        a("div", Fw, [z(ue, {
            list: l.gameCategoryList,
            active: u.value,
            "onUpdate:active": o[0] || (o[0] = _=>u.value = _),
            tabClassName: "ColorsMethod",
            onOnClickTab: d
        }, {
            default: D(({item: _, index: m})=>[t("div", {
                class: M(["coloritem", {
                    active: m === u.value
                }])
            }, i(p.$t("code" + _.categoryNameCode)), 3)]),
            _: 1
        }, 8, ["list", "active"]), z(ue, {
            list: b.value,
            active: g.value,
            "onUpdate:active": o[1] || (o[1] = _=>g.value = _),
            tabClassName: "PlayMethod",
            onOnClickTab: c
        }, {
            default: D(({item: _, index: m})=>[t("div", {
                class: M(["playitem", {
                    active: m === g.value
                }])
            }, i(p.$t("code" + _.playNameCode)), 3)]),
            _: 1
        }, 8, ["list", "active"])]))
    }
});
const Ae = l=>(Gt("data-v-1b2d551c"),
l = l(),
Pt(),
l)
  , Hw = {
    class: "NumberSelectContainer"
}
  , Uw = {
    class: "NumberSelectContainer-mark"
}
  , Kw = {
    class: "NumberTabContent"
}
  , Xw = {
    key: 0,
    class: "selectcontainer"
}
  , Qw = {
    class: "selectbutton"
}
  , Yw = {
    class: "selectcontent"
}
  , Jw = {
    class: "selectheader"
}
  , Zw = {
    class: "selectball"
}
  , tC = ["onClick"]
  , iC = {
    key: 1,
    class: "selectcontainer"
}
  , eC = {
    class: "selectbutton"
}
  , nC = {
    class: "selectcontent"
}
  , aC = {
    class: "selectheader"
}
  , oC = {
    class: "selectball"
}
  , sC = ["onClick"]
  , lC = {
    key: 2,
    class: "selectcontainer"
}
  , cC = {
    class: "selectbutton"
}
  , rC = {
    class: "selectcontent"
}
  , uC = {
    class: "selectheader"
}
  , dC = {
    class: "selectball"
}
  , pC = ["onClick"]
  , gC = {
    key: 3,
    class: "selectcontainer"
}
  , bC = {
    class: "selectbutton"
}
  , mC = {
    class: "selectcontent"
}
  , _C = {
    class: "selectheader"
}
  , hC = {
    class: "selectball"
}
  , vC = ["onClick"]
  , kC = {
    class: "quickcontainer"
}
  , fC = {
    key: 0,
    class: "intervalcontainer"
}
  , yC = ["onClick"]
  , $C = {
    key: 1,
    class: "randomcontainer"
}
  , TC = {
    class: "randomheader"
}
  , wC = Ae(()=>t("div", {
    class: "redline"
}, null, -1))
  , CC = {
    class: "font30"
}
  , NC = {
    class: "randombutton"
}
  , LC = ["onClick"]
  , zC = {
    key: 2,
    class: "specialcontainer"
}
  , IC = {
    class: "specialheader"
}
  , xC = Ae(()=>t("div", {
    class: "redline"
}, null, -1))
  , RC = {
    class: "font30"
}
  , SC = {
    class: "specialbutton"
}
  , MC = {
    class: "Ntit"
}
  , BC = Ae(()=>t("br", null, null, -1))
  , GC = Ae(()=>t("br", null, null, -1))
  , PC = {
    class: "list"
}
  , DC = ["onClick"]
  , AC = H({
    __name: "NumberSelect",
    props: {
        methodList: {
            type: String,
            default: ""
        },
        activeTab: {
            type: Number,
            default: 0
        },
        randomList: {
            type: Array,
            default: ()=>{}
        },
        randomtype: {
            type: Number,
            default: 0
        },
        specialtype: {
            type: Number,
            default: 0
        },
        isthreenumber: {
            type: Number,
            default: 0
        },
        speciaSelectNo: {
            type: String,
            default: ""
        },
        isShowMark: {
            type: Boolean,
            default: !1
        },
        hundred: {
            type: String,
            default: ""
        },
        betconfig: {
            type: String,
            default: ""
        },
        groupTab: {
            type: Number,
            default: 30
        },
        thousandnumList: {
            type: Array,
            default: []
        },
        hundrednumList: {
            type: Array,
            default: []
        },
        tennumList: {
            type: Array,
            default: []
        },
        indicualnumList: {
            type: Array,
            default: []
        },
        quicknumList: {
            type: Array,
            default: []
        },
        intervalnumber: {
            type: Array,
            default: []
        },
        intervalTab: {
            type: Number,
            default: 0
        }
    },
    emits: ["tabupdate", "selectgroup", "selectspecial", "betNum", "betQuickNum", "getselect", "getquick", "selectinterval"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , {t: g} = kt()
          , b = [{
            name: g("selectNo"),
            value: 1
        }, {
            name: g("xosoTxt81"),
            value: 3
        }, {
            name: g("xosoTxt80"),
            value: 2
        }]
          , d = Q(()=>b.filter(L=>{
            var C;
            return (C = u.methodList) == null ? void 0 : C.includes(L.value + "")
        }
        ))
          , c = h(0)
          , p = h("")
          , o = h(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
          , _ = ({item: L})=>{
            s("tabupdate", L.value)
        }
          , m = (L,C,I)=>{
            s("selectgroup", L, C, I)
        }
          , T = (L,C)=>{
            s("betNum", L, C)
        }
          , f = (L,C,I)=>{
            s("betQuickNum", L, C, I)
        }
          , y = (L,C,I,N)=>{
            s("getselect", L, C, I, N)
        }
          , $ = (L,C)=>{
            s("getquick", L, C)
        }
          , w = (L,C)=>{
            s("selectinterval", L, C)
        }
          , k = L=>{
            L.target.value != "" && s("inputblur", L.target.value)
        }
          , v = ()=>{
            p.value = ""
        }
        ;
        return At(()=>u.activeTab, async()=>{
            await ti();
            const L = d.value.findIndex(C=>C.value == u.activeTab);
            L !== -1 && (c.value = L)
        }
        ),
        e({
            cleardata: v
        }),
        (L,C)=>{
            var N, x, R, O;
            const I = j("van-field");
            return n(),
            a("div", Hw, [pt(t("div", Uw, [t("div", null, i(r(g)("nomorebet")), 1)], 512), [[ci, l.isShowMark]]), d.value.length > 0 ? (n(),
            it(ue, {
                key: 0,
                list: d.value,
                active: c.value,
                "onUpdate:active": C[0] || (C[0] = P=>c.value = P),
                tabClassName: "NumberTab",
                onOnClickTab: _
            }, {
                default: D(({item: P, index: F})=>[t("div", {
                    class: M(["tabitem", {
                        active: P.value === l.activeTab
                    }])
                }, i(P.name), 3)]),
                _: 1
            }, 8, ["list", "active"])) : B("", !0), t("div", Kw, [pt(t("div", null, [(N = l.betconfig) != null && N.includes("4") ? (n(),
            a("div", Xw, [t("div", Qw, [t("div", {
                class: "selectall",
                onClick: C[1] || (C[1] = P=>y("Thousand", 0, 9, "all"))
            }, i(r(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: C[2] || (C[2] = P=>y("Thousand", 0, 9, "big"))
            }, i(r(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: C[3] || (C[3] = P=>y("Thousand", 0, 9, "small"))
            }, i(r(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: C[4] || (C[4] = P=>y("Thousand", 0, 9, "odd"))
            }, i(r(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: C[5] || (C[5] = P=>y("Thousand", 0, 9, "even"))
            }, i(r(g)("xosoTxt70")), 1)]), t("div", Yw, [t("div", Jw, i(r(g)("xosoTxt87")), 1), t("div", Zw, [(n(!0),
            a(S, null, G(o.value, (P,F)=>(n(),
            a("div", {
                key: F,
                onClick: X=>T("Thousand", P)
            }, [t("div", {
                class: M(l.thousandnumList.includes(P) ? "ball action " : "ball")
            }, i(P), 3)], 8, tC))), 128))])])])) : B("", !0), (x = l.betconfig) != null && x.includes("3") ? (n(),
            a("div", iC, [t("div", eC, [t("div", {
                class: "selectall",
                onClick: C[6] || (C[6] = P=>y("hundred", 0, 9, "all"))
            }, i(r(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: C[7] || (C[7] = P=>y("hundred", 0, 9, "big"))
            }, i(r(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: C[8] || (C[8] = P=>y("hundred", 0, 9, "small"))
            }, i(r(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: C[9] || (C[9] = P=>y("hundred", 0, 9, "odd"))
            }, i(r(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: C[10] || (C[10] = P=>y("hundred", 0, 9, "even"))
            }, i(r(g)("xosoTxt70")), 1)]), t("div", nC, [t("div", aC, i(r(g)("xosoTxt88")), 1), t("div", oC, [(n(!0),
            a(S, null, G(o.value, (P,F)=>(n(),
            a("div", {
                key: F,
                onClick: X=>T("Hundred", P)
            }, [t("div", {
                class: M(l.hundrednumList.includes(P) ? "action ball" : "ball")
            }, i(P), 3)], 8, sC))), 128))])])])) : B("", !0), (R = l.betconfig) != null && R.includes("2") ? (n(),
            a("div", lC, [t("div", cC, [t("div", {
                class: "selectall",
                onClick: C[11] || (C[11] = P=>y("ten", 0, 9, "all"))
            }, i(r(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: C[12] || (C[12] = P=>y("ten", 0, 9, "big"))
            }, i(r(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: C[13] || (C[13] = P=>y("ten", 0, 9, "small"))
            }, i(r(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: C[14] || (C[14] = P=>y("ten", 0, 9, "odd"))
            }, i(r(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: C[15] || (C[15] = P=>y("ten", 0, 9, "even"))
            }, i(r(g)("xosoTxt70")), 1)]), t("div", rC, [t("div", uC, i(r(g)("xosoTxt89")), 1), t("div", dC, [(n(!0),
            a(S, null, G(o.value, (P,F)=>(n(),
            a("div", {
                key: F,
                onClick: X=>T("ten", P)
            }, [t("div", {
                class: M(l.tennumList.includes(P) ? "action ball" : "ball")
            }, i(P), 3)], 8, pC))), 128))])])])) : B("", !0), (O = l.betconfig) != null && O.includes("1") ? (n(),
            a("div", gC, [t("div", bC, [t("div", {
                class: "selectall",
                onClick: C[16] || (C[16] = P=>y("Indivual", 0, 9, "all"))
            }, i(r(g)("all")), 1), t("div", {
                class: "selectbig",
                onClick: C[17] || (C[17] = P=>y("Indivual", 0, 9, "big"))
            }, i(r(g)("big")), 1), t("div", {
                class: "selectsmall",
                onClick: C[18] || (C[18] = P=>y("Indivual", 0, 9, "small"))
            }, i(r(g)("small")), 1), t("div", {
                class: "selectodd",
                onClick: C[19] || (C[19] = P=>y("Indivual", 0, 9, "odd"))
            }, i(r(g)("xosoTxt71")), 1), t("div", {
                class: "selecteven",
                onClick: C[20] || (C[20] = P=>y("Indivual", 0, 9, "even"))
            }, i(r(g)("xosoTxt70")), 1)]), t("div", mC, [t("div", _C, i(r(g)("xosoTxt90")), 1), t("div", hC, [(n(!0),
            a(S, null, G(o.value, (P,F)=>(n(),
            a("div", {
                key: F,
                onClick: X=>T("Indivual", P)
            }, [t("div", {
                class: M(l.indicualnumList.includes(P) ? "ball action" : "ball")
            }, i(P), 3)], 8, vC))), 128))])])])) : B("", !0)], 512), [[ci, l.activeTab === 1]]), pt(t("div", null, [z(I, {
                class: "custom-field",
                modelValue: p.value,
                "onUpdate:modelValue": C[21] || (C[21] = P=>p.value = P),
                rows: "4",
                autosize: "",
                type: "textarea",
                placeholder: r(g)("xosoTxt86"),
                onInput: k
            }, null, 8, ["modelValue", "placeholder"])], 512), [[ci, l.activeTab === 2]]), pt(t("div", null, [t("div", kC, [l.isthreenumber === 1 ? (n(),
            a("div", fC, [(n(!0),
            a(S, null, G(l.intervalnumber, (P,F)=>(n(),
            a("div", {
                class: M(["intervalitem", [l.intervalTab === F ? "active" : ""]]),
                key: F,
                onClick: X=>w(P, F)
            }, i(P), 11, yC))), 128))])) : B("", !0), l.randomtype === 1 ? (n(),
            a("div", $C, [t("div", TC, [wC, t("div", CC, i(r(g)("xosoTxt83")), 1)]), t("div", NC, [(n(!0),
            a(S, null, G(l.randomList, (P,F)=>(n(),
            a("div", {
                class: M([l.groupTab === F ? "active" : ""]),
                key: F,
                onClick: X=>m(P, F, l.isthreenumber)
            }, i(P) + i(r(g)("xosoTxt84")), 11, LC))), 128))])])) : B("", !0), l.specialtype === 1 ? (n(),
            a("div", zC, [t("div", IC, [xC, t("div", RC, i(r(g)("xosoTxt97")), 1)]), t("div", SC, [l.speciaSelectNo.includes("1") ? (n(),
            a("div", {
                key: 0,
                class: "specialsame",
                onClick: C[22] || (C[22] = P=>$(l.isthreenumber, "same"))
            }, i(r(g)("xosoTxt85")), 1)) : B("", !0), l.speciaSelectNo.includes("4") ? (n(),
            a("div", {
                key: 1,
                class: "specialbig",
                onClick: C[23] || (C[23] = P=>$(l.isthreenumber, "big"))
            }, i(r(g)("big")), 1)) : B("", !0), l.speciaSelectNo.includes("5") ? (n(),
            a("div", {
                key: 2,
                class: "specialsmall",
                onClick: C[24] || (C[24] = P=>$(l.isthreenumber, "small"))
            }, i(r(g)("small")), 1)) : B("", !0), l.speciaSelectNo.includes("2") ? (n(),
            a("div", {
                key: 3,
                class: "specialodd",
                onClick: C[25] || (C[25] = P=>$(l.isthreenumber, "odd"))
            }, i(r(g)("xosoTxt71")), 1)) : B("", !0), l.speciaSelectNo.includes("3") ? (n(),
            a("div", {
                key: 4,
                class: "specialeven",
                onClick: C[26] || (C[26] = P=>$(l.isthreenumber, "even"))
            }, i(r(g)("xosoTxt70")), 1)) : B("", !0)])])) : B("", !0), l.activeTab === 3 ? (n(),
            a(S, {
                key: 3
            }, G(10, (P,F)=>t("div", {
                class: "numbercontainer",
                key: P
            }, [t("div", MC, [t("div", null, [E(i(l.hundred) + i(F) + "0", 1), BC, E("/"), GC, E(i(l.hundred) + i(F) + "9", 1)])]), t("div", PC, [(n(),
            a(S, null, G(10, (X,at)=>t("div", {
                class: "item",
                key: X
            }, [t("div", {
                onClick: dt=>f(l.hundred, F, at)
            }, [t("div", {
                class: M(l.quicknumList.includes(l.hundred + "" + F + at) ? "number action" : "number")
            }, i(l.hundred) + i(F) + i(at), 3)], 8, DC)])), 64))])])), 64)) : B("", !0)])], 512), [[ci, l.activeTab === 3]])])])
        }
    }
});
const OC = K(AC, [["__scopeId", "data-v-1b2d551c"]])
  , qC = {
    class: "TasteContainer"
}
  , WC = {
    class: "TasteHeader"
}
  , EC = {
    class: "NumberSelect"
}
  , VC = {
    class: "NumberSelectCon"
}
  , FC = ["onClick"]
  , jC = H({
    __name: "TasteSelect",
    props: {
        funplaylist: {
            type: Array,
            default: []
        },
        numbercon: {
            type: String,
            default: "1000"
        }
    },
    emits: ["selectvalue"],
    setup(l, {emit: e}) {
        const s = (u,g)=>{
            e("selectvalue", u, g)
        }
        ;
        return (u,g)=>(n(),
        a("div", qC, [t("div", WC, i(u.$t("xosoTxt60")), 1), t("div", EC, [t("div", VC, [(n(!0),
        a(S, null, G(l.funplaylist, (b,d)=>(n(),
        a("div", {
            class: M(["NumberCon", {
                action: b.oddTypeName === l.numbercon,
                more: d == 18
            }]),
            key: d,
            onClick: c=>s(b, d)
        }, [t("div", {
            class: M(["number", {
                active: b.oddTypeName === l.numbercon
            }])
        }, i(u.$t("code" + b.oddTypeNameCode)), 3), t("div", {
            class: M(["odds", {
                active: b.oddTypeName === l.numbercon
            }])
        }, i(b.oddsOrAmount), 3)], 10, FC))), 128))])])]))
    }
});
const HC = K(jC, [["__scopeId", "data-v-292b9857"]])
  , UC = {
    class: "Footer__C"
}
  , KC = {
    class: "nav c-row c-row-between"
}
  , XC = {
    class: "c-row left c-row c-row-middle-center"
}
  , QC = {
    class: "item"
}
  , YC = {
    class: "txt"
}
  , JC = {
    class: "num"
}
  , ZC = {
    class: "item"
}
  , t4 = {
    class: "txt"
}
  , i4 = {
    class: "num"
}
  , e4 = {
    class: ""
}
  , n4 = H({
    __name: "Footer",
    props: {
        betNumber: {
            default: {
                type: Number,
                default: 0
            }
        },
        betSum: {
            default: {
                type: Number,
                default: 0
            }
        }
    },
    emits: ["playBet"],
    setup(l, {emit: e}) {
        const s = ()=>{
            e("playBet")
        }
        ;
        return (u,g)=>(n(),
        a("div", UC, [t("div", KC, [t("div", XC, [t("div", QC, [t("p", YC, i(u.$t("quantity")), 1), t("span", JC, i(u.betNumber || 0), 1)]), t("div", ZC, [t("p", t4, i(u.$t("betAmount")), 1), t("span", i4, i(r(Rt)(u.betSum || 0)), 1)])]), t("div", {
            class: M(["c-row c-row-middle-center", [u.betSum > 0 ? "bet-btn" : "disabled-btn"]]),
            onClick: g[0] || (g[0] = b=>s())
        }, [t("span", e4, i(u.$t("betting")), 1)], 2)])]))
    }
});
const a4 = K(n4, [["__scopeId", "data-v-afe1106e"]])
  , o4 = {
    class: "RecordNav__C"
}
  , s4 = ["onClick"]
  , l4 = H({
    __name: "RecordNav",
    props: {
        record: {
            type: String,
            default: "GameRecord"
        }
    },
    setup(l) {
        const e = l
          , {t: s} = kt()
          , u = h([{
            name: s("gameRecords"),
            componentName: "GameRecord"
        }, {
            name: s("myGame"),
            componentName: "MyGameRecord"
        }]);
        return (g,b)=>(n(),
        a("div", o4, [(n(!0),
        a(S, null, G(u.value, (d,c)=>(n(),
        a("div", {
            key: c,
            onClick: p=>g.$emit("changeC", d.componentName),
            class: M({
                active: e.record == d.componentName
            })
        }, i(d.name), 11, s4))), 128))]))
    }
});
const c4 = K(l4, [["__scopeId", "data-v-884042b3"]])
  , r4 = {
    class: "GameRecord__C"
}
  , u4 = {
    class: "GameRecord__C-head"
}
  , d4 = {
    class: "GameRecord__C-body"
}
  , p4 = {
    class: "c-tc goItem"
}
  , g4 = {
    class: "c-row"
}
  , b4 = {
    class: "c-row c-row-middle-center"
}
  , m4 = {
    class: "c-row c-row-middle-center time"
}
  , _4 = {
    key: 0
}
  , h4 = {
    key: 1
}
  , v4 = {
    key: 0,
    class: "details"
}
  , k4 = {
    key: 0,
    class: "detailLi"
}
  , f4 = {
    class: "prize-tit"
}
  , y4 = {
    key: 0
}
  , $4 = {
    class: "prize-box c-row c-flex-warp"
}
  , T4 = {
    class: "prize-box-item action"
}
  , w4 = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , C4 = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , N4 = {
    class: "GameRecord__C-foot-page"
}
  , L4 = H({
    __name: "GameRecord",
    props: {
        areId: {},
        cityCode: {},
        gVSs: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , {t: u} = kt()
          , g = h([])
          , b = h(4)
          , d = h(10)
          , c = h(1)
          , p = h(-1)
          , o = async(w=!1,k)=>{
            var v, L, C;
            if ((k == null ? void 0 : k.list.length) > 0)
                g.value = ea(k == null ? void 0 : k.list) || [],
                b.value = k == null ? void 0 : k.totalPage,
                c.value = k == null ? void 0 : k.pageNo;
            else {
                if (s.cityCode === "")
                    return;
                let I;
                s.gVSs == "1" ? I = await ot(ks({
                    pageSize: d.value,
                    pageNo: c.value,
                    areId: s == null ? void 0 : s.areId,
                    cityCode: s == null ? void 0 : s.cityCode
                })) : s.gVSs == "2" && (I = await ot(fa({
                    pageSize: d.value,
                    pageNo: c.value,
                    areId: s.areId,
                    typeId: Number(s.cityCode)
                }))),
                g.value = ((v = I.data) == null ? void 0 : v.list) || [],
                b.value = (L = I.data) == null ? void 0 : L.totalPage,
                c.value = (C = I.data) == null ? void 0 : C.pageNo
            }
        }
          , _ = w=>{
            for (var k = [], v = 0; v < w.length; v++) {
                var L = k.findIndex(function(C) {
                    return C.resultType === w[v].resultType
                });
                L !== -1 ? k[L].result.push(w[v].result) : k.push({
                    resultType: w[v].resultType,
                    result: [w[v].result]
                })
            }
            return k
        }
        ;
        function m(w) {
            return w.join("-")
        }
        function T(w) {
            switch (w) {
            case 0:
                return u("GrandPrize");
            case 1:
                return u("firstprize");
            case 2:
                return u("secondprize");
            case 3:
                return u("thirdprize");
            case 4:
                return u("fourprize");
            case 5:
                return u("fiveprize");
            case 6:
                return u("sixprize");
            case 7:
                return u("sevenprize");
            case 8:
                return u("eightprize")
            }
        }
        const f = ()=>{
            c.value--,
            o()
        }
          , y = w=>{
            p.value == w ? p.value = -1 : p.value = w
        }
          , $ = ()=>{
            c.value++,
            o()
        }
        ;
        return e({
            getData: o
        }),
        ki(()=>{
            p.value = -1
        }
        ),
        (w,k)=>{
            var I, N;
            const v = j("van-col")
              , L = j("van-row")
              , C = j("van-icon");
            return n(),
            a("div", r4, [t("div", u4, [z(L, null, {
                default: D(()=>[z(v, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(w.$t("betSerial")), 1)]),
                    _: 1
                }), z(v, {
                    span: "10"
                }, {
                    default: D(()=>[E(i(w.$t("result")), 1)]),
                    _: 1
                }), z(v, {
                    span: "6"
                }, {
                    default: D(()=>[E(i(w.$t("time")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", d4, [(I = g.value) != null && I.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (x,R)=>(n(),
            it(L, {
                key: R,
                onClick: O=>y(R)
            }, {
                default: D(()=>[z(v, {
                    span: "8"
                }, {
                    default: D(()=>[t("div", p4, i(x.issueNumber), 1)]),
                    _: 2
                }, 1024), z(v, {
                    span: "10",
                    class: "c-row c-row-middle-center"
                }, {
                    default: D(()=>[t("div", g4, [t("div", b4, [x.openingResult ? (n(!0),
                    a(S, {
                        key: 0
                    }, G(x.openingResult[0].result, (O,P)=>(n(),
                    a("div", {
                        class: "li circle-black c-row c-row-middle-center c-tc",
                        key: P
                    }, [t("div", null, i(O), 1)]))), 128)) : B("", !0)])])]),
                    _: 2
                }, 1024), z(v, {
                    span: "6"
                }, {
                    default: D(()=>[t("div", m4, [w.gVSs == "1" ? (n(),
                    a("div", _4, i(x.openingTime.substr(0, 10)), 1)) : (n(),
                    a("div", h4, i(x.openingTime), 1))])]),
                    _: 2
                }, 1024), R == p.value ? (n(),
                a("div", v4, [x.openingResult ? (n(),
                a("div", k4, [(n(!0),
                a(S, null, G(_(x.openingResult), (O,P)=>(n(),
                a("div", {
                    class: M([`selectItem${O.resultType}`, "prize"]),
                    key: P
                }, [t("div", f4, i(T(O.resultType)), 1), [0, 1, 2].includes(O.resultType) ? (n(),
                a("div", y4, "|")) : B("", !0), t("div", $4, [t("span", T4, i(m(O.result)), 1)])], 2))), 128))])) : B("", !0)])) : B("", !0)]),
                _: 2
            }, 1032, ["onClick"]))), 128)) : (n(),
            a("div", w4, [z(ri)]))]), (N = g.value) != null && N.length ? (n(),
            a("div", C4, [t("div", {
                class: M(["GameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: f
            }, [z(C, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", N4, i(c.value) + "/" + i(b.value), 1), t("div", {
                class: M(["GameRecord__C-foot-next", {
                    disabled: c.value >= b.value
                }]),
                onClick: $
            }, [z(C, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const z4 = K(L4, [["__scopeId", "data-v-b5a08846"]])
  , I4 = l=>(Gt("data-v-81486f6a"),
l = l(),
Pt(),
l)
  , x4 = {
    class: "MyGameRecordList__C"
}
  , R4 = ["onClick"]
  , S4 = {
    class: "box"
}
  , M4 = {
    class: "time"
}
  , B4 = {
    key: 0,
    class: "state state0"
}
  , G4 = {
    key: 1,
    class: "state state3"
}
  , P4 = {
    key: 2,
    class: "state state4"
}
  , D4 = {
    key: 3,
    class: "state state2"
}
  , A4 = {
    key: 4,
    class: "state state5"
}
  , O4 = {
    key: 5,
    class: "state state1"
}
  , q4 = {
    key: 0,
    class: "info"
}
  , W4 = {
    class: "order"
}
  , E4 = {
    key: 0,
    class: "li"
}
  , V4 = {
    class: "lab"
}
  , F4 = ["onClick"]
  , j4 = ["src"]
  , H4 = {
    key: 1,
    class: "li"
}
  , U4 = {
    class: "lab"
}
  , K4 = {
    class: "sub"
}
  , X4 = {
    class: "li"
}
  , Q4 = {
    class: "lab"
}
  , Y4 = {
    key: 0,
    class: "sub"
}
  , J4 = {
    key: 1,
    class: "sub"
}
  , Z4 = {
    key: 2,
    class: "li"
}
  , t6 = {
    class: "lab"
}
  , i6 = {
    class: "sub"
}
  , e6 = {
    class: "li"
}
  , n6 = {
    class: "lab"
}
  , a6 = {
    class: "sub"
}
  , o6 = {
    class: "li"
}
  , s6 = {
    class: "lab"
}
  , l6 = {
    class: "sub"
}
  , c6 = {
    class: "li"
}
  , r6 = {
    class: "lab"
}
  , u6 = {
    class: "sub"
}
  , d6 = {
    class: "li"
}
  , p6 = {
    class: "lab"
}
  , g6 = {
    class: "sub"
}
  , b6 = {
    class: "li"
}
  , m6 = {
    class: "lab"
}
  , _6 = {
    class: "sub"
}
  , h6 = I4(()=>t("div", {
    class: "line"
}, [t("p")], -1))
  , v6 = {
    class: "bet"
}
  , k6 = {
    class: "li betNum"
}
  , f6 = {
    class: "lab"
}
  , y6 = {
    key: 0,
    class: "txt"
}
  , $6 = {
    key: 1,
    class: "txt"
}
  , T6 = {
    key: 2,
    class: "txt"
}
  , w6 = {
    key: 3,
    class: "betList select"
}
  , C6 = {
    key: 4,
    class: "betList select"
}
  , N6 = {
    class: "li"
}
  , L6 = {
    class: "lab"
}
  , z6 = {
    key: 0,
    class: "state state0"
}
  , I6 = {
    key: 1,
    class: "state state3"
}
  , x6 = {
    key: 2,
    class: "state state4"
}
  , R6 = {
    key: 3,
    class: "state state2"
}
  , S6 = {
    key: 4,
    class: "state state5"
}
  , M6 = {
    key: 5,
    class: "state state1"
}
  , B6 = {
    class: "li"
}
  , G6 = {
    class: "lab"
}
  , P6 = {
    key: 0,
    class: "sub success"
}
  , D6 = {
    key: 1,
    class: "sub fail"
}
  , A6 = {
    key: 2,
    class: "sub"
}
  , O6 = {
    key: 0,
    class: "li"
}
  , q6 = {
    class: "lab"
}
  , W6 = {
    class: "sub"
}
  , E6 = {
    key: 1,
    class: "li"
}
  , V6 = {
    class: "lab"
}
  , F6 = {
    class: "sub"
}
  , j6 = {
    key: 0
}
  , H6 = ["onClick"]
  , U6 = {
    key: 1,
    class: "result"
}
  , K6 = {
    key: 0,
    class: "txt"
}
  , X6 = {
    key: 1,
    class: "txt"
}
  , Q6 = {
    key: 2,
    class: "txt"
}
  , Y6 = {
    key: 3,
    class: "txt"
}
  , J6 = {
    key: 4,
    class: "txt"
}
  , Z6 = {
    key: 5,
    class: "txt"
}
  , t8 = {
    key: 6,
    class: "txt"
}
  , i8 = {
    key: 7,
    class: "txt"
}
  , e8 = {
    key: 8,
    class: "txt"
}
  , n8 = {
    class: "num"
}
  , a8 = H({
    __name: "MyRecordList",
    props: {
        mayrecord: {},
        gVSs: {}
    },
    emits: ["click-cance"],
    setup(l, {emit: e}) {
        const {t: s} = kt()
          , u = h(-1)
          , g = w=>{
            u.value === w ? u.value = -1 : u.value = w
        }
          , b = h(!1)
          , d = h("")
          , c = async()=>{
            await ot(ys({
                orderId: d.value
            })) && (b.value = !1,
            an(s("xosoTxt96")),
            e("click-cance"))
        }
          , p = w=>{
            d.value = w,
            b.value = !0
        }
          , o = fs(c, 1e3)
          , _ = w=>{
            for (var k = [], v = 0; v < w.length; v++) {
                var L = k.findIndex(function(C) {
                    return C.resultType === w[v].resultType
                });
                L !== -1 ? k[L].result.push("-" + w[v].result) : k.push({
                    resultType: w[v].resultType,
                    result: [w[v].result]
                })
            }
            return k
        }
          , m = w=>{
            const k = T(w);
            return f(k)
        }
          , T = w=>{
            let k = [];
            if (w.includes(",")) {
                let v = w.split(",")
                  , L = {};
                for (let C = 0; v.length > C; C++)
                    L = v[C].split("|"),
                    k.push(L);
                return k
            }
            return w
        }
          , f = w=>{
            let k = w[0]
              , v = w[1]
              , L = [];
            for (let I = 0; k.length > I; I++)
                for (let N = 0; v.length > N; N++)
                    L.push(k[I] + v[N]);
            let C = w.slice(2);
            return C.length > 0 ? f([L, ...C]) : L
        }
          , y = w=>{
            if (w != null) {
                let k = w.split(",");
                if (k.length > 0)
                    return k
            }
            return []
        }
          , $ = w=>w.replace(/\|/g, ",");
        return Ct(()=>{}
        ),
        (w,k)=>(n(),
        a("div", x4, [(n(!0),
        a(S, null, G(w.mayrecord, (v,L)=>(n(),
        a("div", {
            class: M(u.value === L ? "item active" : "item"),
            key: v,
            onClick: C=>g(L)
        }, [t("div", S4, [t("div", null, [t("h4", null, i(r(s)("code" + v.bettingParentTypeNameCode)), 1), t("span", M4, i(v.createTime), 1)]), v.status === 1 ? (n(),
        a("div", B4, [t("p", null, i(r(s)("bettingResultState1")), 1)])) : B("", !0), v.status === 3 ? (n(),
        a("div", G4, [t("p", null, i(r(s)("hasWon")), 1), t("span", null, "+" + i(v.winningAmount), 1)])) : B("", !0), v.status === 2 ? (n(),
        a("div", P4, [t("p", null, i(r(s)("bettingResultState3")), 1), t("span", null, "-" + i(v.realBettingAmount), 1)])) : B("", !0), v.status === 4 ? (n(),
        a("div", D4, [t("p", null, i(r(s)("xosoTxt74")), 1)])) : B("", !0), v.status === 5 ? (n(),
        a("div", A4, [t("p", null, i(r(s)("xosoTxt75")), 1)])) : B("", !0), v.status === 6 ? (n(),
        a("div", O4, [t("p", null, i(r(s)("xosoTxt76")), 1)])) : B("", !0)]), u.value === L ? (n(),
        a("div", q4, [t("div", W4, [v.orderNo ? (n(),
        a("div", E4, [t("div", V4, i(r(s)("orderNo")), 1), t("div", {
            class: "sub",
            onClick: hi(C=>r(ji)(v.orderNo), ["stop"])
        }, [E(i(v.orderNo) + " ", 1), t("img", {
            src: r(tt)("home/AllLotteryGames/WinGo", "copy")
        }, null, 8, j4)], 8, F4)])) : B("", !0), v.issueNo ? (n(),
        a("div", H4, [t("div", U4, i(r(s)("betIssue")), 1), t("div", K4, i(v.issueNo), 1)])) : B("", !0), t("div", X4, [t("div", Q4, i(r(s)("area")), 1), w.gVSs == "1" ? (n(),
        a("div", Y4, i(r(s)("code" + v.areNameCode)), 1)) : w.gVSs == "2" ? (n(),
        a("div", J4, i(r(s)("code" + v.typeCode)), 1)) : B("", !0)]), w.gVSs == "1" ? (n(),
        a("div", Z4, [t("div", t6, i(r(s)("xosoTxt77")), 1), t("div", i6, i(r(s)("code" + v.nameCode)), 1)])) : B("", !0), t("div", e6, [t("div", n6, i(r(s)("gamePlay")), 1), t("div", a6, i(r(s)("code" + v.bettingParentTypeNameCode)), 1)]), t("div", o6, [t("div", s6, i(r(s)("xosoTxt78")), 1), t("div", l6, i(r(s)("code" + v.bettingTypeNameCode)), 1)]), t("div", c6, [t("div", r6, i(r(s)("amountMay")), 1), t("div", u6, i(v.amount), 1)]), t("div", d6, [t("div", p6, i(r(s)("multiple")), 1), t("div", g6, i(v.bettingMultiple), 1)]), t("div", b6, [t("div", m6, i(r(s)("xosoTxt79")), 1), t("div", _6, i(v.totalBetting) + " " + i(r(s)("note")), 1)])]), h6, t("div", v6, [t("div", k6, [t("div", f6, [E(i(r(s)("bettingnumber")), 1), v.bettingFormat === 1 ? (n(),
        a("span", y6, "(" + i(r(s)("selectNo")) + ")", 1)) : B("", !0), v.bettingFormat === 2 ? (n(),
        a("span", $6, "(" + i(r(s)("xosoTxt80")) + ")", 1)) : B("", !0), v.bettingFormat === 3 ? (n(),
        a("span", T6, "(" + i(r(s)("xosoTxt81")) + ")", 1)) : B("", !0), v.bettingFormat == 1 ? (n(),
        a("div", w6, [(n(!0),
        a(S, null, G(m(v.bettingContent), (C,I)=>(n(),
        a("span", {
            class: M({
                active: y(v.winningNum).includes(C)
            }),
            key: I
        }, i(C), 3))), 128))])) : (n(),
        a("div", C6, [(n(!0),
        a(S, null, G(v.bettingContent.split(","), (C,I)=>(n(),
        a("span", {
            class: M({
                active: y(v.winningNum).includes(C)
            }),
            key: I
        }, i($(C)), 3))), 128))]))])]), t("div", N6, [t("div", L6, i(r(s)("statusMay")), 1), v.status === 1 ? (n(),
        a("div", z6, [t("p", null, i(r(s)("bettingResultState1")), 1)])) : B("", !0), v.status === 3 ? (n(),
        a("div", I6, [t("p", null, i(r(s)("hasWon")), 1)])) : B("", !0), v.status === 2 ? (n(),
        a("div", x6, [t("p", null, i(r(s)("bettingResultState3")), 1)])) : B("", !0), v.status === 4 ? (n(),
        a("div", R6, [t("p", null, i(r(s)("xosoTxt74")), 1)])) : B("", !0), v.status === 5 ? (n(),
        a("div", S6, [t("p", null, i(r(s)("xosoTxt75")), 1)])) : B("", !0), v.status === 6 ? (n(),
        a("div", M6, [t("p", null, i(r(s)("xosoTxt76")), 1)])) : B("", !0)]), t("div", B6, [t("div", G6, i(r(s)("winOrLose")), 1), v.status === 3 ? (n(),
        a("div", P6, "+" + i(v.winningAmount), 1)) : v.status === 2 ? (n(),
        a("div", D6, "-" + i(v.realBettingAmount), 1)) : (n(),
        a("div", A6, "---"))]), v.createTime ? (n(),
        a("div", O6, [t("div", q6, i(r(s)("createTime")), 1), t("div", W6, i(v.createTime), 1)])) : B("", !0), v.openingTime ? (n(),
        a("div", E6, [t("div", V6, i(r(s)("winTrxTime")), 1), t("div", F6, i(v.openingTime), 1)])) : B("", !0)]), v.issueNoStatus === 1 && v.status === 1 && w.gVSs == "1" ? (n(),
        a("div", j6, [t("div", {
            class: "btn",
            onClick: hi(C=>p(v.id), ["stop"])
        }, i(r(s)("xosoTxt82")), 9, H6)])) : B("", !0), v.openingResult ? (n(),
        a("div", U6, [(n(!0),
        a(S, null, G(_(v.openingResult), (C,I)=>(n(),
        a("div", {
            class: M(I < 3 ? "result-item jusb" : "result-item"),
            key: I
        }, [C.resultType == 0 ? (n(),
        a("div", K6, i(r(s)("GrandPrize")), 1)) : B("", !0), C.resultType == 1 ? (n(),
        a("div", X6, i(r(s)("firstprize")), 1)) : B("", !0), C.resultType == 2 ? (n(),
        a("div", Q6, i(r(s)("secondprize")), 1)) : B("", !0), C.resultType == 3 ? (n(),
        a("div", Y6, i(r(s)("thirdprize")), 1)) : B("", !0), C.resultType == 4 ? (n(),
        a("div", J6, i(r(s)("fourprize")), 1)) : B("", !0), C.resultType == 5 ? (n(),
        a("div", Z6, i(r(s)("fiveprize")), 1)) : B("", !0), C.resultType == 6 ? (n(),
        a("div", t8, i(r(s)("sixprize")), 1)) : B("", !0), C.resultType == 7 ? (n(),
        a("div", i8, i(r(s)("sevenprize")), 1)) : B("", !0), C.resultType == 8 ? (n(),
        a("div", e8, i(r(s)("eightprize")), 1)) : B("", !0), t("div", n8, [(n(!0),
        a(S, null, G(C.result, (N,x)=>(n(),
        a("span", {
            key: x
        }, i(N), 1))), 128))])], 2))), 128))])) : B("", !0)])) : B("", !0)], 10, R4))), 128)), z(xi, {
            show: b.value,
            "onUpdate:show": k[0] || (k[0] = v=>b.value = v),
            title: r(s)("xosoTxt99"),
            onConfirm: r(o)
        }, null, 8, ["show", "title", "onConfirm"])]))
    }
});
const o8 = K(a8, [["__scopeId", "data-v-81486f6a"]])
  , s8 = {
    class: "MyGameRecord__C"
}
  , l8 = {
    class: "MyGameRecord__C-body"
}
  , c8 = {
    key: 0,
    class: "MyGameRecord__C-head"
}
  , r8 = {
    key: 2,
    class: "MyGameRecord__C-body-empty"
}
  , u8 = {
    key: 0,
    class: "MyGameRecord__C-foot"
}
  , d8 = {
    class: "MyGameRecord__C-foot-page"
}
  , p8 = H({
    __name: "MyGameRecord",
    props: {
        parmas: {},
        ApiFun: {},
        cityCode: {},
        hasHead: {
            type: Boolean,
            default: !0
        },
        gVSs: {},
        areId: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , u = ft()
          , g = h(0)
          , b = h(10)
          , d = h(1)
          , c = h([])
          , p = async()=>{
            var k, v, L;
            const $ = o(s.parmas);
            (s == null ? void 0 : s.gVSs) == "2" && (s != null && s.areId && ($.areId = s == null ? void 0 : s.areId),
            s != null && s.cityCode && ($.typeId = Number(s == null ? void 0 : s.cityCode)));
            const w = await ot(s.ApiFun({
                pageSize: b.value,
                pageNo: d.value,
                ...$
            }));
            w && (c.value = ((k = w.data) == null ? void 0 : k.list) || [],
            g.value = ((v = w.data) == null ? void 0 : v.totalPage) || 0,
            d.value = (L = w.data) == null ? void 0 : L.pageNo)
        }
        ;
        function o($) {
            const w = {};
            for (const k in $)
                $[k] !== "" && (w[k] = $[k]);
            return w
        }
        const _ = ()=>{
            p()
        }
          , m = Q(()=>s.gVSs == "1" ? "AllLotteryGames-XoSoRecord" : s.gVSs == "2" ? "AllLotteryGames-XoSoRecordF" : "")
          , T = $=>{
            u.push({
                name: $,
                query: {
                    areId: s.areId,
                    typeId: s.cityCode
                }
            })
        }
          , f = ()=>{
            d.value--,
            p()
        }
          , y = ()=>{
            d.value++,
            p()
        }
        ;
        return e({
            getData: p
        }),
        ki(()=>{
            p()
        }
        ),
        ($,w)=>{
            var v, L;
            const k = j("van-icon");
            return n(),
            a("div", s8, [t("div", l8, [$.hasHead ? (n(),
            a("div", c8, [t("div", {
                class: "MyGameRecord__C-head-moreB",
                onClick: w[0] || (w[0] = C=>T(m.value || ""))
            }, i($.$t("more")), 1)])) : B("", !0), (v = c.value) != null && v.length ? (n(),
            it(o8, {
                key: 1,
                mayrecord: c.value,
                onClickCance: _,
                gVSs: $.gVSs
            }, null, 8, ["mayrecord", "gVSs"])) : (n(),
            a("div", r8, [z(ri)]))]), (L = c.value) != null && L.length ? (n(),
            a("div", u8, [t("div", {
                class: M(["MyGameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: f
            }, [z(k, {
                name: "arrow-left",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2), t("div", d8, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["MyGameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: y
            }, [z(k, {
                name: "arrow",
                class: "MyGameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const _n = K(p8, [["__scopeId", "data-v-a9fa5d22"]])
  , g8 = {
    key: 0,
    class: "WinningTip__C-body-l1 isL"
}
  , b8 = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , m8 = {
    key: 2,
    class: "notwinning"
}
  , _8 = {
    key: 3,
    class: "WinningTip__C-body-l2"
}
  , h8 = {
    key: 4,
    class: "WinningTip__C-body-l5"
}
  , v8 = {
    class: "WinningTip__C-body-l5-content"
}
  , k8 = {
    class: "balltext"
}
  , f8 = {
    class: "WinningTip__C-body-l3"
}
  , y8 = {
    key: 0,
    class: "isLose"
}
  , $8 = {
    class: "head"
}
  , T8 = {
    class: "bonus"
}
  , w8 = {
    class: "gameDetail"
}
  , C8 = {
    class: "gameDetail"
}
  , N8 = {
    class: "WinningTip__C-body-l4"
}
  , L8 = ["onClick"]
  , z8 = H({
    __name: "WinningTips",
    setup(l, {expose: e}) {
        const s = Q(()=>b.value[0] ? b.value[0].winningAmount == 0 : !1)
          , u = Q(()=>b.value[0] || {})
          , g = h(!1)
          , b = h([]);
        let d = h();
        const c = ()=>{
            clearTimeout(d.value),
            b.value.shift(),
            g.value && b.value.length && (d.value = setTimeout(()=>{
                c()
            }
            , 1e3 * 3))
        }
        ;
        At(()=>b.value.length, m=>{
            m ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }
        );
        const p = ()=>{
            g.value = !g.value,
            g.value ? d.value = setTimeout(()=>{
                c()
            }
            , 1e3 * 3) : clearTimeout(d.value)
        }
          , o = m=>{
            b.value.push(m),
            g.value && (d.value = setTimeout(()=>{
                c()
            }
            , 1e3 * 3))
        }
          , _ = ()=>{
            b.value = []
        }
        ;
        return e({
            showMark: o
        }),
        (m,T)=>pt((n(),
        a("div", {
            class: "WinningTip__C",
            onClick: c
        }, [t("div", {
            class: M(["WinningTip__C-body", {
                isL: s.value
            }])
        }, [s.value ? (n(),
        a("div", g8, i(m.$t("k3WarningTip1")), 1)) : B("", !0), s.value ? B("", !0) : (n(),
        a("div", b8, i(m.$t("k3WarningTip2")), 1)), s.value ? (n(),
        a("div", m8)) : B("", !0), s.value ? B("", !0) : (n(),
        a("div", _8, i(m.$t("code" + u.value.bettingParentTypeNameCode)) + "/" + i(m.$t("code" + u.value.bettingTypeNameCode)), 1)), s.value ? B("", !0) : (n(),
        a("div", h8, [t("div", v8, [(n(!0),
        a(S, null, G(u.value.openingResult, (f,y)=>(n(),
        a("div", {
            class: "ball",
            key: y
        }, [t("div", k8, i(f), 1)]))), 128))])])), t("div", f8, [s.value ? (n(),
        a("div", y8, i(m.$t("winTips4")), 1)) : B("", !0), s.value ? B("", !0) : (n(),
        a(S, {
            key: 1
        }, [t("div", $8, i(m.$t("winTips5")), 1), t("div", T8, i(r(Rt)(u.value.winningAmount)), 1)], 64)), t("div", w8, i(m.$t(`code${u.value.typeCode}`)), 1), t("div", C8, i(m.$t("winTips6")) + i(u.value.issueNo), 1)]), t("div", N8, [t("div", {
            class: M(["acitveBtn", {
                active: g.value
            }]),
            onClick: hi(p, ["stop"])
        }, null, 10, L8), E(" " + i(m.$t("autoShutOff3s")), 1)]), t("div", {
            class: "closeBtn",
            onClick: _
        })], 2)], 512)), [[ci, b.value.length]])
    }
});
const I8 = K(z8, [["__scopeId", "data-v-b229ff74"]])
  , hn = l=>(Gt("data-v-273cca7e"),
l = l(),
Pt(),
l)
  , x8 = {
    class: "NewVietnam__C"
}
  , R8 = hn(()=>t("div", {
    class: "bottombg"
}, null, -1))
  , S8 = {
    class: "box p-l-10 p-r-10 p-t-10 p-b-10"
}
  , M8 = ["src"]
  , B8 = {
    class: "title c-tc"
}
  , G8 = {
    key: 0,
    class: "titlebets c-tc border60"
}
  , P8 = {
    class: "box"
}
  , D8 = {
    class: "c-row"
}
  , A8 = {
    key: 2,
    class: M("c-row c-flex-warp compound")
}
  , O8 = {
    key: 0,
    class: "item"
}
  , q8 = {
    class: "title"
}
  , W8 = {
    class: "numcontainer"
}
  , E8 = {
    key: 1,
    class: "item"
}
  , V8 = {
    class: "title"
}
  , F8 = {
    class: "numcontainer"
}
  , j8 = {
    key: 2,
    class: "item"
}
  , H8 = {
    class: "title"
}
  , U8 = {
    class: "numcontainer"
}
  , K8 = {
    key: 3,
    class: "item"
}
  , X8 = {
    class: "title"
}
  , Q8 = {
    class: "numcontainer"
}
  , Y8 = {
    key: 4,
    class: "item"
}
  , J8 = {
    class: "numcontainer"
}
  , Z8 = {
    class: "popup-info"
}
  , tN = {
    class: "popup-info-item c-row c-row-between"
}
  , iN = {
    class: "tit"
}
  , eN = {
    class: "c-row c-row-between stepper-box"
}
  , nN = {
    class: "popup-info-item c-row c-flew-end"
}
  , aN = {
    class: "c-row multiple-box"
}
  , oN = ["onClick"]
  , sN = {
    class: "c-row c-row-between c-row-middle quantity"
}
  , lN = {
    class: "c-row c-row-middle-center"
}
  , cN = hn(()=>t("span", {
    class: "line"
}, "|", -1))
  , rN = {
    class: "num"
}
  , uN = {
    class: "c-row c-row-middle-center"
}
  , dN = hn(()=>t("span", {
    class: "line"
}, "|", -1))
  , pN = {
    class: "num"
}
  , gN = {
    class: "wallet c-row c-row-between c-row-middle"
}
  , bN = {
    class: "txt c-row"
}
  , mN = {
    class: "num c-row c-row-middle"
}
  , _N = {
    class: "balance c-row c-row-middle"
}
  , hN = {
    class: "txt"
}
  , vN = {
    class: "num yellow"
}
  , kN = {
    key: 0,
    class: "wallet c-row c-row-between c-row-middle"
}
  , fN = {
    class: "txt c-row bg7172"
}
  , yN = ["src"]
  , $N = {
    class: "popup-info-item c-row c-row-middle"
}
  , TN = {
    class: "agree p-r-15"
}
  , wN = {
    class: "popup-btn c-row c-row-between"
}
  , CN = {
    class: "left"
}
  , NN = {
    class: "right"
}
  , LN = {
    class: ""
}
  , zN = {
    class: "areList"
}
  , IN = ["src"]
  , xN = {
    class: "itemsC"
}
  , RN = ["onClick"]
  , SN = {
    class: "PreSale"
}
  , MN = {
    class: "head"
}
  , BN = {
    class: "body"
}
  , GN = {
    class: "foot"
}
  , PN = ["src"]
  , DN = ["src"]
  , AN = {
    class: "font36"
}
  , ON = {
    class: "tipMsg"
}
  , qN = H({
    __name: "index",
    setup(l) {
        var Nn, Ln;
        const e = ft()
          , s = de()
          , {t: u} = kt()
          , g = h(!1)
          , b = Q(()=>{
            var q, W;
            return m.value ? (q = m.value) == null ? void 0 : q.type : (W = s.query) == null ? void 0 : W.type
        }
        )
          , d = h(e.currentRoute.value.query.nameCode)
          , c = h(Number((Nn = s.query) == null ? void 0 : Nn.areId) || 1)
          , p = Q(()=>d.value ? u("code" + d.value) : "")
          , o = h((Ln = s.query) == null ? void 0 : Ln.code)
          , _ = h()
          , m = h()
          , T = Qt({
            bettingParentType: "",
            areId: "",
            startDate: "",
            endDate: ""
        })
          , f = new Date
          , y = `${oi(f).format("YYYY-MM-DD")} 00:00:00`
          , $ = `${oi(f).format("YYYY-MM-DD")} 23:59:59`;
        T.startDate = y,
        T.endDate = $;
        const w = h(!1)
          , k = h([])
          , v = h([])
          , L = h({})
          , C = h(0)
          , I = h(1)
          , N = h(0)
          , x = h(1)
          , R = h(1)
          , O = h("")
          , P = h("")
          , F = h("00:00:00")
          , X = h(1.995)
          , at = h(1)
          , dt = h([])
          , lt = h(0)
          , st = h("")
          , J = h(1)
          , mt = h("")
          , Mt = h([])
          , Et = h(0)
          , gt = h(0)
          , qt = h(0)
          , Ft = h(0)
          , yt = h("")
          , wt = h()
          , Nt = h(1e3)
          , Tt = h([])
          , ct = h([])
          , Y = h([])
          , et = h([])
          , A = h([])
          , nt = h([])
          , $t = h("1000")
          , Bt = h(1)
          , gi = h(!1)
          , ei = Q(()=>!(Di.value > ie.value || Yt.value <= 0))
          , zi = h(["000/099", "100/199", "200/299", "300/399", "400/499", "500/599", "600/699", "700/799", "800/899", "900/999"])
          , _t = h("000/099")
          , Pi = h(0)
          , Ri = h(!1)
          , fi = h(1)
          , zt = h(1)
          , Zi = h(0)
          , yi = h(0)
          , te = h(0)
          , $i = h("GameRecord")
          , qe = {
            GameRecord: z4,
            MyGameRecord: _n
        }
          , Yt = h(1)
          , $e = h()
          , Ut = h(!1)
          , _e = h(!0)
          , Di = h(0)
          , ie = h(0)
          , Si = h(0)
          , ee = h(!1)
          , Vi = h()
          , Ki = h(!1)
          , V = h("")
          , Z = h("")
          , ht = Q(()=>{
            if (b.value == "1")
                return Ta;
            if (b.value == "2")
                return wa
        }
        )
          , Lt = q=>{
            const W = String(Math.floor(Dt.value % 3600 / 60)).padStart(2, "0")
              , U = String(Dt.value % 60).padStart(2, "0");
            return `${W}:${U}`
        }
          , Dt = h()
          , St = h(null)
          , Jt = h("00:00")
          , Wt = h(!1)
          , Kt = ()=>{
            St.value = setInterval(()=>{
                Dt.value <= 0 ? (Jt.value = "00:00",
                setTimeout(()=>{
                    Wt.value = !0
                }
                , 500),
                clearInterval(St.value),
                Fi(),
                setTimeout(()=>{
                    ae(!0)
                }
                , 5e3)) : (Wt.value = !1,
                Jt.value = Lt(Dt.value),
                Dt.value--)
            }
            , 1e3)
        }
          , si = h(null)
          , Ai = (q,W)=>{
            clearInterval(Si.value),
            gi.value = !1,
            Si.value = (W - q) / 1e3,
            si.value = setInterval(()=>{
                if (Si.value <= 0)
                    clearInterval(si.value),
                    F.value = "00:00:00",
                    gi.value = !0;
                else {
                    const U = String(Math.floor(Si.value / 3600)).padStart(2, "0")
                      , ut = String(Math.floor(Si.value % 3600 / 60)).padStart(2, "0")
                      , vt = String(Si.value % 60).padStart(2, "0");
                    F.value = U + ":" + ut + ":" + vt,
                    Si.value--
                }
            }
            , 1e3)
        }
        ;
        function bi() {
            m.value || (_i({
                message: u("xosoTip5"),
                wordBreak: "break-word"
            }),
            setTimeout(function() {
                Cn("AllLotteryGames-XoSo")
            }, 2e3))
        }
        const Fi = async()=>{
            let q;
            if (b.value == "1") {
                const vt = oi(s.query.day).format("YYYY-MM-DD HH:mm:ss");
                q = await ot(ya({
                    dateTime: vt
                }))
            } else
                b.value == "2" && (q = await ot($a({
                    are: c.value,
                    typeId: Number(o.value)
                })));
            q.data.length == 0 && bi();
            let W = q.data.find(vt=>vt.day == s.query.day);
            P.value = W.day;
            let U = W.areInfos.find(vt=>(vt == null ? void 0 : vt.areId) == c.value);
            const ut = U == null ? void 0 : U.serverTime;
            if (m.value = U.areIssueNos.find(vt=>vt.code == o.value),
            m.value || bi(),
            b.value == "1") {
                const vt = U == null ? void 0 : U.closingTime;
                clearInterval(si.value),
                Ai(new Date(ut.replace(/-/g, "/")).getTime(), new Date(vt.replace(/-/g, "/")).getTime())
            } else
                b.value == "2" && (Dt.value = (new Date(m.value.endTime.replace(/-/g, "/")).getTime() - new Date(ut.replace(/-/g, "/")).getTime()) / 1e3,
                clearInterval(St.value),
                Kt())
        }
        ;
        let Oi = null;
        const Mi = h("")
          , ne = h()
          , ae = async(q=!1)=>{
            var ut, vt, jt, Xt, ui, di, bt, It;
            if (g.value || b.value != "2")
                return;
            let W, U = !0;
            if ($i.value === "GameRecord") {
                if (W = await ot(fa({
                    pageSize: 10,
                    pageNo: 1,
                    areId: c.value,
                    typeId: Number(o.value)
                })),
                W) {
                    if (((vt = (ut = W.data) == null ? void 0 : ut.list) == null ? void 0 : vt.length) > 0 && (Mi.value.trim().length == 0 || Mi.value != ((Xt = (jt = W.data) == null ? void 0 : jt.list[0]) == null ? void 0 : Xt.issueNumber)) && (U = !1,
                    Mi.value = (di = (ui = W.data) == null ? void 0 : ui.list[0]) == null ? void 0 : di.issueNumber),
                    U == !0 && q) {
                        clearTimeout(Oi),
                        Oi = setTimeout(()=>{
                            ae(!0)
                        }
                        , 1e3);
                        return
                    }
                    L.value = (bt = W.data) == null ? void 0 : bt.list[0],
                    ne.value = W.data,
                    ti(()=>{
                        Vi.value.getData(!1, ne.value)
                    }
                    )
                }
            } else if ($i.value === "MyGameRecord" && (W = await ot($s({
                areId: c.value,
                typeId: Number(o.value)
            })),
            W && W.data && W.data.openingResult && W.data.openingResult.length > 0 && (U = !1,
            Mi.value = (It = W.data) == null ? void 0 : It.issueNumber,
            L.value = W.data),
            U == !0 && q)) {
                clearTimeout(Oi),
                Oi = setTimeout(()=>{
                    ae(!0)
                }
                , 1e3);
                return
            }
        }
        ;
        function Wa() {
            let q = JSON.parse(sessionStorage.getItem("xosoList") || "")
              , W = [];
            for (let U = 0; U < q.areInfos.length; U++)
                W.push({
                    text: u("code" + q.areInfos[U].areNameCode),
                    value: q.areInfos[U].areId,
                    disabled: !0,
                    info: q.areInfos[U].areIssueNos
                });
            k.value = W
        }
        function Ea(q, W) {
            var U;
            if (o.value == q.code) {
                Ri.value = !1;
                return
            }
            je(),
            c.value = W,
            d.value = q.nameCode,
            o.value = q.code,
            C.value = 0,
            N.value = 0,
            I.value = v.value.length > 0 ? (U = v == null ? void 0 : v.value[0]) == null ? void 0 : U.categoryId : 1,
            Ri.value = !1,
            Va(q, W),
            m.value = q,
            q.type == "2" && (gi.value = !1,
            ae()),
            Fi(),
            vn(),
            ti(()=>{
                $i.value === "MyGameRecord" && Vi.value.getData(!0)
            }
            )
        }
        function Va(q, W) {
            const U = Mo("hash");
            U.code = q == null ? void 0 : q.code,
            U.nameCode = q == null ? void 0 : q.nameCode,
            U.type = q == null ? void 0 : q.type,
            U.areId = W
        }
        const vn = async()=>{
            var W, U, ut, vt, jt, Xt, ui, di;
            kn(),
            ni();
            let q;
            b.value == "1" ? q = await ot(Ts({
                areaId: c.value
            })) : b.value == "2" && (q = await ot(ws({
                areaId: c.value,
                typeId: Number(o.value)
            }))),
            q && (v.value = (U = (W = q.data) == null ? void 0 : W.areaConfigList[0]) == null ? void 0 : U.gameCategoryList,
            localStorage.setItem("gameCategoryList", JSON.stringify((ut = q.data.areaConfigList[0]) == null ? void 0 : ut.gameCategoryList)),
            O.value = (jt = (vt = v == null ? void 0 : v.value[0]) == null ? void 0 : vt.gamePlayList[0]) == null ? void 0 : jt.playNameCode,
            x.value = (ui = (Xt = v == null ? void 0 : v.value[0]) == null ? void 0 : Xt.gamePlayList[0]) == null ? void 0 : ui.playId,
            I.value = (di = v == null ? void 0 : v.value[0]) == null ? void 0 : di.categoryId,
            We())
        }
          , Fa = (q,W)=>{
            ni(),
            C.value = W,
            I.value = q,
            N.value = 0,
            x.value = v == null ? void 0 : v.value[W].gamePlayList[0].playId,
            R.value = v.value[W].gamePlayList[0].betType,
            O.value = v.value[W].gamePlayList[0].playNameCode,
            Pi.value = 0,
            We()
        }
          , ja = (q,W,U,ut)=>{
            N.value = W,
            x.value = q,
            O.value = U,
            R.value = Number(ut),
            Pi.value = 0,
            We(),
            ni()
        }
          , We = async()=>{
            var W, U, ut, vt, jt, Xt, ui, di, bt, It, ai, xt, He, zn, In, xn, Rn, Sn, Mn, Bn, Gn;
            kn();
            let q;
            b.value == "1" ? q = await ot(Cs({
                areaId: c.value,
                categoryId: I.value,
                playId: x.value
            })) : b.value == "2" && (q = await ot(Ns({
                areaId: c.value,
                categoryId: I.value,
                playId: x.value
            }))),
            st.value = (W = q.data) == null ? void 0 : W.betMethod,
            mt.value = (U = q.data) == null ? void 0 : U.betScopeConfig,
            Et.value = (ut = q.data) == null ? void 0 : ut.isThreeNumber,
            gt.value = (vt = q.data) == null ? void 0 : vt.betNumber,
            yt.value = (jt = q.data) == null ? void 0 : jt.fastSpeciaSelectNo,
            qt.value = (Xt = q.data) == null ? void 0 : Xt.fastRandomType,
            Ft.value = (ui = q.data) == null ? void 0 : ui.fastSpeciaType,
            te.value = (di = q.data) == null ? void 0 : di.playOddInfo.defaultOdds,
            X.value = (bt = q.data) == null ? void 0 : bt.playOddInfo.oddsOrAmount,
            Zi.value = (It = q.data) == null ? void 0 : It.playOddInfo.bettingAmount,
            Mt.value = (xt = (ai = q.data) == null ? void 0 : ai.fastRandomSelecNo) == null ? void 0 : xt.split(",").map(Number),
            dt.value = (zn = (He = q.data) == null ? void 0 : He.playOddInfo.bettingMultiple) == null ? void 0 : zn.split(",").map(Number),
            Yt.value = (xn = (In = q.data) == null ? void 0 : In.playOddInfo.bettingMultiple) == null ? void 0 : xn.split(",")[0],
            zt.value = (Rn = q.data) == null ? void 0 : Rn.perBetNumber,
            I.value == 8 && (nt.value = (Sn = q.data) == null ? void 0 : Sn.funPlayOddList),
            Ha((Mn = q.data) == null ? void 0 : Mn.betMethod),
            Ka((Bn = q.data) == null ? void 0 : Bn.betNumber),
            Xa((Gn = q.data) == null ? void 0 : Gn.isThreeNumber)
        }
          , Ha = q=>{
            q != null && q.includes("1") ? J.value = 1 : I.value === 4 || I.value === 8 ? J.value == 1 : J.value = 3
        }
          , Ua = (q,W)=>{
            $t.value = q.oddTypeName,
            Bt.value = q.oddsOrAmount,
            A.value = [$t.value],
            Vt(3, gt.value)
        }
          , Ka = q=>{
            q == 10 ? fi.value = 1 : q == 8 ? fi.value = 2 : q == 4 ? fi.value = 3 : q == 3 ? fi.value = 4 : q == 2 ? fi.value = 5 : fi.value = 0
        }
          , Xa = q=>{
            q == 1 && (wt.value = _t.value.split("/")[0][0].toString())
        }
          , kn = ()=>{
            J.value = 1,
            X.value = 0,
            Zi.value = 0,
            dt.value = [],
            st.value = "",
            mt.value = "",
            Mt.value = [],
            Et.value = 0,
            gt.value = 0,
            yt.value = "",
            qt.value = 0,
            Ft.value = 0,
            Nt.value = 1e3,
            wt.value = ""
        }
          , ni = ()=>{
            Tt.value = [],
            ct.value = [],
            Y.value = [],
            et.value = [],
            A.value = [],
            at.value = 0,
            $t.value = "1000",
            Di.value = 0,
            yi.value = 0,
            Yt.value = 1,
            Z.value = "",
            Nt.value = 1e3,
            ti(()=>{
                _.value && _.value.cleardata()
            }
            )
        }
          , Qa = q=>{
            Z.value = q;
            let U = q.split(",").flatMap(ut=>ut.split("|"));
            A.value = U.map(String),
            Vt(J.value, gt.value)
        }
          , Ya = (q,W,U,ut)=>{
            q == "Thousand" ? ut == "all" ? Tt.value = Te(W, U) : ut == "big" ? Tt.value = Ti(W, U, "big", 0) : ut == "small" ? Tt.value = Ti(W, U, "small", 0) : ut == "odd" ? Tt.value = wi(W, U, "odd", 0) : Tt.value = wi(W, U, "even", 0) : q == "hundred" ? ut == "all" ? ct.value = Te(W, U) : ut == "big" ? ct.value = Ti(W, U, "big", 0) : ut == "small" ? ct.value = Ti(W, U, "small", 0) : ut == "odd" ? ct.value = wi(W, U, "odd", 0) : ct.value = wi(W, U, "even", 0) : q == "ten" ? ut == "all" ? Y.value = Te(W, U) : ut == "big" ? Y.value = Ti(W, U, "big", 0) : ut == "small" ? Y.value = Ti(W, U, "small", 0) : ut == "odd" ? Y.value = wi(W, U, "odd", 0) : Y.value = wi(W, U, "even", 0) : ut == "all" ? et.value = Te(W, U) : ut == "big" ? et.value = Ti(W, U, "big", 0) : ut == "small" ? et.value = Ti(W, U, "small", 0) : ut == "odd" ? et.value = wi(W, U, "odd", 0) : et.value = wi(W, U, "even", 0),
            Vt(J.value, gt.value)
        }
          , Ja = (q,W)=>{
            if (q == 0)
                W == "even" ? (ni(),
                A.value = wi(0, 99, "even", 2),
                Vt(J.value, gt.value)) : W == "big" ? (ni(),
                A.value = Ti(0, 99, "big", 2),
                Vt(J.value, gt.value)) : W == "small" ? (ni(),
                A.value = Ti(0, 99, "small", 2),
                Vt(J.value, gt.value)) : W == "odd" ? (ni(),
                A.value = wi(0, 99, "odd", 2),
                Vt(J.value, gt.value)) : (ni(),
                A.value = An(0, 99, 2),
                Vt(J.value, gt.value));
            else {
                let U = Number(_t.value.split("/")[0])
                  , ut = Number(_t.value.split("/")[1]);
                W == "even" ? (ni(),
                A.value = wi(U, ut, "even", 3),
                Vt(J.value, gt.value)) : W == "big" ? (ni(),
                A.value = Ti(U, ut, "big", 3),
                Vt(J.value, gt.value)) : W == "small" ? (ni(),
                A.value = Ti(U, ut, "small", 3),
                Vt(J.value, gt.value)) : W == "odd" ? (ni(),
                A.value = wi(U, ut, "odd", 3),
                Vt(J.value, gt.value)) : (ni(),
                A.value = An(U, ut, 3),
                Vt(J.value, gt.value))
            }
        }
          , Za = (q,W,U)=>{
            if (q == "") {
                let ut = W + "" + U;
                A.value.includes(ut) ? A.value = A.value.filter(function(vt) {
                    return vt != ut
                }) : A.value.push(ut)
            } else {
                let ut = q + "" + W + U;
                A.value.includes(ut) ? A.value = A.value.filter(function(vt) {
                    return vt != ut
                }) : A.value.push(ut)
            }
            Vt(J.value, gt.value)
        }
          , to = (q,W)=>{
            q == "Thousand" ? Tt.value.includes(W) ? Tt.value = Tt.value.filter(function(U) {
                return U != W
            }) : Tt.value.push(W) : q == "Hundred" ? ct.value.includes(W) ? ct.value = ct.value.filter(function(U) {
                return U != W
            }) : ct.value.push(W) : q == "ten" ? Y.value.includes(W) ? Y.value = Y.value.filter(function(U) {
                return U != W
            }) : Y.value.push(W) : et.value.includes(W) ? et.value = et.value.filter(function(U) {
                return U != W
            }) : et.value.push(W),
            Vt(J.value, gt.value)
        }
          , io = (q,W)=>{
            Pi.value = W,
            _t.value = q,
            Nt.value = 1e3,
            wt.value = _t.value.split("/")[0][0].toString(),
            ni()
        }
          , eo = (q,W,U)=>{
            if (Nt.value = W,
            U == 0)
                A.value = On(Number(q) * gt.value, 0, 99, U),
                Vt(J.value, gt.value);
            else {
                let ut = Number(_t.value.split("/")[0])
                  , vt = Number(_t.value.split("/")[1]);
                A.value = On(Number(q), ut, vt, U),
                Vt(J.value, gt.value)
            }
        }
          , no = q=>{
            J.value = q,
            ni()
        }
          , ao = ()=>{
            Ut.value = !1,
            ni()
        }
          , oo = q=>{}
          , so = ()=>{
            ee.value = !1,
            _e.value = !0
        }
          , lo = ()=>{
            Ut.value = !1,
            Yt.value = 1,
            Vt(J.value, gt.value)
        }
          , fn = ()=>{
            const q = v.value[C.value].gamePlayList[N.value].availableBetNumber
              , W = v.value[C.value].gamePlayList[N.value].eachIssueBetMaxWinningAmount;
            return yi.value > q ? Ot(u("xosoTip1", [q])) : Di.value > W ? Ot(u("xosoTip2", [W])) : !0
        }
          , co = async()=>{
            var W, U, ut, vt;
            if (fn() === !0) {
                if (yi.value > 5e3)
                    return Ot(u("xosoTxt94"));
                if (J.value == 1)
                    (W = mt.value) != null && W.includes("4") ? et.value.length > 0 && Y.value.length > 0 && ct.value.length > 0 && Tt.value.length > 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : (U = mt.value) != null && U.includes("3") ? et.value.length > 0 && Y.value.length > 0 && ct.value.length > 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : (ut = mt.value) != null && ut.includes("2") ? et.value.length > 0 && Y.value.length > 0 && I.value != 4 || Y.value.length > 0 && I.value == 4 ? Ut.value = !0 : Ot(u("xosoTxt95")) : (vt = mt.value) != null && vt.includes("1") ? et.value.length > 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : A.value.length > 0 && I.value == 8 ? Ut.value = !0 : Ot(u("xosoTxt95"));
                else if (J.value == 3)
                    yn(gt.value, A.value);
                else if (J.value == 2) {
                    if (!cr.inputrule.test(Z.value))
                        return Ot({
                            message: u(rr.inputtip),
                            wordBreak: "break-word"
                        });
                    for (let jt = 0; jt < A.value.length; jt++)
                        if (A.value[jt].toString().length != zt.value)
                            return Ot(u("xosoTxt95"));
                    if (Ls(A.value))
                        return Ot(u("xosoTxt98"));
                    yn(gt.value, A.value)
                } else
                    I.value == 8 && A.value.length === 1 ? Ut.value = !0 : Ot(u("xosoTxt95"));
                Vt(J.value, gt.value)
            }
        }
          , yn = (q,W)=>{
            q == 1 ? W.length > 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : q == 2 ? W.length % 2 == 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : q == 3 ? W.length % 3 == 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : q == 4 ? W.length % 4 == 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : q == 8 ? W.length % 8 == 0 ? Ut.value = !0 : Ot(u("xosoTxt95")) : q == 10 && (W.length % 10 == 0 ? Ut.value = !0 : Ot(u("xosoTxt95")))
        }
          , Ee = h(null)
          , ro = async()=>{
            Ee.value && clearTimeout(Ee.value),
            Ee.value = setTimeout(async()=>{
                var Xt, ui, di;
                if (Wt.value)
                    return _i({
                        message: u("xosoTip6"),
                        wordBreak: "break-word"
                    });
                if (!ei.value || fn() !== !0)
                    return;
                let W = []
                  , U = "";
                if (J.value == 1 ? mt.value.toString().includes("4") ? U = Tt.value.join("|") + "," + ct.value.join("|") + "," + Y.value.join("|") + "," + et.value.join("|") : mt.value.toString().includes("3") ? U = ct.value.join("|") + "," + Y.value.join("|") + "," + et.value.join("|") : mt.value.toString().includes("2") ? I.value == 4 ? U = Y.value.join(",") : U = Y.value.join("|") + "," + et.value.join("|") : I.value == 4 ? (U = et.value.join(","),
                J.value = 3) : I.value == 8 && (U = A.value[0]) : [2, 3].includes(J.value) ? gt.value == 1 ? U = A.value.join(",") : gt.value == 2 ? U = A.value.reduce((It,ai,xt)=>(xt % 2 === 0 && It.push(ai + "|" + A.value[xt + 1]),
                It), []).join(",") : gt.value == 3 ? U = A.value.reduce((It,ai,xt)=>(xt % 3 === 0 && It.push(ai + "|" + A.value[xt + 1] + "|" + A.value[xt + 2]),
                It), []).join(",") : gt.value == 4 ? U = A.value.reduce((It,ai,xt)=>(xt % 4 === 0 && It.push(ai + "|" + A.value[xt + 1] + "|" + A.value[xt + 2] + "|" + A.value[xt + 3]),
                It), []).join(",") : gt.value == 8 ? U = A.value.reduce((It,ai,xt)=>(xt % 8 === 0 && It.push(ai + "|" + A.value[xt + 1] + "|" + A.value[xt + 2] + "|" + A.value[xt + 3] + "|" + A.value[xt + 4] + "|" + A.value[xt + 5] + "|" + A.value[xt + 6] + "|" + A.value[xt + 7]),
                It), []).join(",") : U = A.value.reduce((It,ai,xt)=>(xt % 10 === 0 && It.push(ai + "|" + A.value[xt + 1] + "|" + A.value[xt + 2] + "|" + A.value[xt + 3] + "|" + A.value[xt + 4] + "|" + A.value[xt + 5] + "|" + A.value[xt + 6] + "|" + A.value[xt + 7] + "|" + A.value[xt + 8] + "|" + A.value[xt + 9]),
                It), []).join(",") : I.value === 8 && gt.value == 1 && (U = A.value[0],
                yi.value = gt.value),
                [4, 8].includes(I.value) && (J.value = 3),
                U.replace(",", "").trim().length == 0 || yi.value == 0)
                    return;
                W.push({
                    bettingParentType: I.value,
                    bettingType: R.value,
                    bettingFormat: J.value,
                    bettingContent: U,
                    totalBetting: yi.value,
                    initialAmount: Zi.value,
                    bettingMultiple: Yt.value,
                    defaultOdds: te.value
                });
                let[ut,vt] = [null, null]
                  , jt = ea((Xt = m.value) == null ? void 0 : Xt.issueNo);
                if (b.value == "1" ? [ut,vt] = await Zt(zs({
                    areId: c.value,
                    issueNo: (ui = m.value) == null ? void 0 : ui.issueNo,
                    xosoBettingData: W
                })) : b.value == "2" && ([ut,vt] = await Zt(Is({
                    areId: c.value,
                    typeId: Number(o.value),
                    issueNo: (di = m.value) == null ? void 0 : di.issueNo,
                    xosoBettingData: W
                }))),
                vt) {
                    I.value === 4 && (J.value = 1),
                    Ut.value = !1;
                    const bt = $n(vt == null ? void 0 : vt.msgCode, vt == null ? void 0 : vt.msg);
                    V.value = bt,
                    Pi.value = 0,
                    ni(),
                    Fe(),
                    $i.value === "MyGameRecord" && Vi.value.getData(),
                    setTimeout(()=>{
                        Tn(jt)
                    }
                    , Number(Dt.value * 1e3) + 5e3)
                } else {
                    Ut.value = !1;
                    const bt = $n(vt == null ? void 0 : vt.msgCode, vt == null ? void 0 : vt.msg);
                    V.value = bt
                }
            }
            , 500)
        }
          , uo = ()=>{
            setTimeout(()=>{
                Ki.value && (Ki.value = !1)
            }
            , 1500)
        }
          , $n = (q,W)=>{
            let U = "";
            switch (q) {
            case 345:
                U = u("xosoTip2", [W]),
                w.value = !0;
                break;
            case 346:
                U = u("xosoTip3"),
                w.value = !0;
                break;
            case 347:
                U = u("xosoTip3"),
                w.value = !0;
                break;
            case 348:
                U = u("xosoTip1", [W]),
                w.value = !0;
                break;
            case 349:
                U = u("xosoTip4"),
                w.value = !0;
                break;
            default:
                U = "code" + q,
                Ki.value = !0,
                uo();
                break
            }
            return U
        }
          , po = ()=>{
            w.value = !1
        }
        ;
        let Ve = null;
        async function Tn(q) {
            if (g.value || b.value != "2")
                return;
            const W = await ot(xs({
                issueNo: q
            }));
            if (W) {
                if (W.data.status == 1) {
                    clearTimeout(Ve),
                    Ve = setTimeout(()=>{
                        Tn(q)
                    }
                    , 1e3);
                    return
                }
                $e.value.showMark(W.data),
                $i.value === "MyGameRecord" && Vi.value.getData()
            }
        }
        const go = q=>{
            q <= 0 || (q >= 5e4 ? Yt.value = 5e4 : Yt.value = q),
            Vt(J.value, gt.value)
        }
          , bo = (q,W)=>{
            lt.value = W,
            Yt.value = q,
            Vt(J.value, gt.value)
        }
          , wn = q=>{
            switch (q) {
            case 1:
                Yt.value > 1 && (Yt.value--,
                Vt(J.value, gt.value));
                break;
            case 2:
                Yt.value++,
                Vt(J.value, gt.value);
                break
            }
        }
          , Vt = (q,W)=>{
            W != 0 && (yi.value = mo(q, W),
            Di.value = yi.value * Zi.value * Yt.value * te.value,
            I.value === 8 ? at.value = Bt.value : at.value = X.value)
        }
          , mo = (q,W)=>{
            let U = 0;
            if (q == 1) {
                let ut = Tt.value.length
                  , vt = ct.value.length
                  , jt = Y.value.length
                  , Xt = et.value.length;
                return mt.value.toString().includes("4") ? U = ut * vt * jt * Xt : mt.value.toString().includes("3") ? U = vt * jt * Xt : mt.value.toString().includes("2") ? I.value === 4 ? U = jt : U = jt * Xt : mt.value.toString().includes("1") ? U = Xt : I.value === 8 && (U = 1),
                U
            } else {
                if (q == 3)
                    return U = Math.floor(A.value.length / W),
                    U;
                if (q == 2)
                    return A.value.length == 1 && A.value[0] == "1" ? U = 0 : U = Math.floor(A.value.length / W),
                    U
            }
            return U
        }
          , _o = ()=>{
            e.go(-1)
        }
          , Cn = q=>{
            var W;
            e.push({
                name: q,
                query: {
                    id: (W = s.query) == null ? void 0 : W.id
                }
            })
        }
          , Fe = async()=>{
            const q = await ot(sn());
            q && (ie.value = (q == null ? void 0 : q.data.amount) || 0)
        }
        ;
        function ho(q) {
            $i.value = q,
            $i.value == "GameRecord" && ti(()=>{
                Vi.value.getData()
            }
            )
        }
        Wa(),
        Fi(),
        b.value == "2" && ae(),
        vn(),
        Fe();
        function je() {
            clearInterval(si.value),
            clearInterval(St.value),
            clearTimeout(Oi),
            clearTimeout(Ve)
        }
        nn(()=>{
            g.value = !0,
            je()
        }
        );
        const vo = So();
        return At(vo, (q,W)=>{
            q === "visible" && W === "hidden" ? (Fi(),
            b.value == "2" && ae(),
            Fe()) : je()
        }
        ),
        (q,W)=>{
            var ui, di;
            const U = j("NavBar")
              , ut = j("van-field")
              , vt = j("van-checkbox")
              , jt = j("van-button")
              , Xt = j("van-popup");
            return n(),
            a(S, null, [t("div", x8, [z(U, {
                "left-arrow": "",
                onClickLeft: _o,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
            }, {
                center: D(()=>[t("div", {
                    class: "centercity",
                    onClick: W[0] || (W[0] = bt=>Ri.value = !0)
                }, [E(i(p.value) + " ", 1), R8])]),
                _: 1
            }), z(jw, {
                gameCategoryList: v.value,
                colortab: C.value,
                playtab: N.value,
                onColorupdate: Fa,
                onUpdate: ja
            }, null, 8, ["gameCategoryList", "colortab", "playtab"]), b.value == "1" ? (n(),
            it(yw, {
                key: 0,
                defaultcityname: p.value,
                defaultplayname: O.value,
                defaultexpiredate: P.value,
                colorId: I.value,
                issue: (ui = m.value) == null ? void 0 : ui.issueNo,
                time: F.value,
                odds: X.value,
                areId: c.value
            }, null, 8, ["defaultcityname", "defaultplayname", "defaultexpiredate", "colorId", "issue", "time", "odds", "areId"])) : b.value == "2" ? (n(),
            it(Vw, {
                key: 1,
                defaultcityname: p.value,
                defaultplayname: O.value,
                colorId: I.value,
                issue: (di = m.value) == null ? void 0 : di.issueNo,
                time: Jt.value,
                odds: X.value,
                areId: c.value,
                resultList: L.value,
                isShowPreparing: Wt.value
            }, null, 8, ["defaultcityname", "defaultplayname", "colorId", "issue", "time", "odds", "areId", "resultList", "isShowPreparing"])) : B("", !0), I.value === 8 ? (n(),
            it(HC, {
                key: 2,
                funplaylist: nt.value,
                numbercon: $t.value,
                onSelectvalue: Ua
            }, null, 8, ["funplaylist", "numbercon"])) : (n(),
            it(OC, {
                key: 3,
                ref_key: "numberselectRef",
                ref: _,
                methodList: st.value,
                activeTab: J.value,
                randomList: Mt.value,
                randomtype: qt.value,
                specialtype: Ft.value,
                isthreenumber: Et.value,
                speciaSelectNo: yt.value,
                isShowMark: gi.value,
                betconfig: mt.value,
                hundred: wt.value,
                groupTab: Nt.value,
                thousandnumList: Tt.value,
                hundrednumList: ct.value,
                tennumList: Y.value,
                indicualnumList: et.value,
                quicknumList: A.value,
                intervalnumber: zi.value,
                intervalTab: Pi.value,
                onTabupdate: no,
                onSelectgroup: eo,
                onSelectinterval: io,
                onBetNum: to,
                onBetQuickNum: Za,
                onGetselect: Ya,
                onGetquick: Ja,
                onInputblur: Qa
            }, null, 8, ["methodList", "activeTab", "randomList", "randomtype", "specialtype", "isthreenumber", "speciaSelectNo", "isShowMark", "betconfig", "hundred", "groupTab", "thousandnumList", "hundrednumList", "tennumList", "indicualnumList", "quicknumList", "intervalnumber", "intervalTab"])), z(c4, {
                record: $i.value,
                onChangeC: ho
            }, null, 8, ["record"]), (n(),
            it(Yi, null, [(n(),
            it(vi(qe[$i.value]), {
                ref_key: "RecordComponent",
                ref: Vi,
                ApiFun: ht.value,
                areId: c.value,
                cityCode: o.value,
                parmas: T,
                gVSs: b.value
            }, null, 8, ["ApiFun", "areId", "cityCode", "parmas", "gVSs"]))], 1024)), z(a4, {
                betNumber: yi.value,
                betSum: Di.value,
                onPlayBet: co
            }, null, 8, ["betNumber", "betSum"]), z(I8, {
                ref_key: "WinningTipsRef",
                ref: $e
            }, null, 512)]), z(Xt, {
                show: Ut.value,
                "onUpdate:show": W[8] || (W[8] = bt=>Ut.value = bt),
                "close-on-click-overlay": !1,
                class: "popup",
                position: "bottom"
            }, {
                default: D(()=>[t("div", S8, [t("div", {
                    class: "close",
                    onClick: ao
                }, [t("img", {
                    class: "img",
                    src: r(tt)("home/AllLotteryGames/NewVietnam", "close")
                }, null, 8, M8)]), t("div", B8, i(q.$t("bettingnumber")), 1), I.value === 6 || c.value === 2 && I.value === 1 && x.value === 4 || c.value === 3 && I.value === 1 && x.value === 4 || c.value === 1 && I.value === 1 && x.value === 5 ? (n(),
                a("div", G8, i(q.$t("xosoTxt93")), 1)) : B("", !0), J.value == 2 || J.value == 3 ? (n(),
                a("div", {
                    key: 1,
                    class: M("c-row c-flex-warp compound" + J.value)
                }, [t("div", {
                    class: M("c-row item item" + fi.value + "-" + zt.value)
                }, [t("div", P8, [t("div", D8, [(n(!0),
                a(S, null, G(A.value, (bt,It)=>(n(),
                a("div", {
                    class: "num c-row c-row-middle-center",
                    key: It
                }, i(bt), 1))), 128))])])], 2)], 2)) : B("", !0), J.value == 1 ? (n(),
                a("div", A8, [Tt.value.length > 0 ? (n(),
                a("div", O8, [t("div", q8, i(q.$t("xosoTxt87")), 1), t("div", W8, [(n(!0),
                a(S, null, G(Tt.value, (bt,It)=>(n(),
                a("div", {
                    class: "num",
                    key: It
                }, i(bt), 1))), 128))])])) : B("", !0), ct.value.length > 0 ? (n(),
                a("div", E8, [t("div", V8, i(q.$t("xosoTxt88")), 1), t("div", F8, [(n(!0),
                a(S, null, G(ct.value, (bt,It)=>(n(),
                a("div", {
                    class: "num",
                    key: It
                }, i(bt), 1))), 128))])])) : B("", !0), Y.value.length > 0 ? (n(),
                a("div", j8, [t("div", H8, i(q.$t("xosoTxt89")), 1), t("div", U8, [(n(!0),
                a(S, null, G(Y.value, (bt,It)=>(n(),
                a("div", {
                    class: "num",
                    key: It
                }, i(bt), 1))), 128))])])) : B("", !0), et.value.length > 0 ? (n(),
                a("div", K8, [t("div", X8, i(q.$t("xosoTxt90")), 1), t("div", Q8, [(n(!0),
                a(S, null, G(et.value, (bt,It)=>(n(),
                a("div", {
                    class: "num",
                    key: It
                }, i(bt), 1))), 128))])])) : B("", !0), A.value.length > 0 ? (n(),
                a("div", Y8, [t("div", J8, [(n(!0),
                a(S, null, G(A.value, (bt,It)=>(n(),
                a("div", {
                    class: "num",
                    key: It
                }, i(bt), 1))), 128))])])) : B("", !0)])) : B("", !0), t("div", Z8, [t("div", tN, [t("div", iN, i(q.$t("multiple")), 1), t("div", eN, [t("div", {
                    class: "li minus",
                    onClick: W[1] || (W[1] = bt=>wn(1))
                }, "-"), z(ut, {
                    class: "digit-box",
                    modelValue: Yt.value,
                    "onUpdate:modelValue": W[2] || (W[2] = bt=>Yt.value = bt),
                    type: "digit",
                    maxlength: 5,
                    onInput: W[3] || (W[3] = bt=>go(Yt.value))
                }, null, 8, ["modelValue"]), t("div", {
                    class: "li plus c-row c-row-middle-center",
                    onClick: W[4] || (W[4] = bt=>wn(2))
                }, "+")])]), t("div", nN, [t("div", aN, [(n(!0),
                a(S, null, G(dt.value, (bt,It)=>(n(),
                a("div", {
                    class: M(Yt.value == bt ? "action li" : "li"),
                    onClick: ai=>bo(bt, It)
                }, " X" + i(bt), 11, oN))), 256))])]), t("div", sN, [t("div", lN, [E(i(q.$t("quantity")) + " ", 1), cN, t("span", rN, i(yi.value || 0) + i(q.$t("note")), 1)]), t("div", uN, [E(i(q.$t("odds")), 1), dN, E(), t("span", pN, i(at.value), 1)])]), t("div", gN, [t("div", bN, [E(i(q.$t("walletBalance")) + " ", 1), t("span", mN, i(r(Rt)(ie.value)), 1)])]), t("div", _N, [t("div", hN, [E(i(q.$t("betAmounts")), 1), t("span", vN, i(r(Rt)(Di.value)), 1)])]), Di.value > ie.value ? (n(),
                a("div", kN, [t("div", fN, [t("img", {
                    src: r(tt)("home/AllLotteryGames/NewVietnam", "tip")
                }, null, 8, yN), E(i(q.$t("insufficientWallet")), 1)]), t("div", {
                    class: "txt bg333",
                    onClick: W[5] || (W[5] = bt=>Cn("Recharge"))
                }, i(q.$t("torecharge")) + " >>", 1)])) : B("", !0), t("div", $N, [z(vt, {
                    modelValue: _e.value,
                    "onUpdate:modelValue": W[6] || (W[6] = bt=>_e.value = bt),
                    shape: "square",
                    "checked-color": "#F4453E",
                    onChange: oo
                }, {
                    default: D(()=>[t("div", TN, i(q.$t("agree")), 1)]),
                    _: 1
                }, 8, ["modelValue"]), t("span", {
                    class: "txt",
                    onClick: W[7] || (W[7] = bt=>ee.value = !0)
                }, i(q.$t("presaleRules")), 1)])])]), t("div", wN, [t("div", CN, [z(jt, {
                    class: "btn",
                    block: "",
                    onClick: lo
                }, {
                    default: D(()=>[t("span", null, i(q.$t("cancel")), 1)]),
                    _: 1
                })]), t("div", NN, [z(jt, {
                    class: M(["btn", {
                        noActive: !ei.value
                    }]),
                    block: "",
                    onClick: ro
                }, {
                    default: D(()=>[t("span", LN, i(q.$t("betting")), 1)]),
                    _: 1
                }, 8, ["class"])])])]),
                _: 1
            }, 8, ["show"]), z(Xt, {
                class: "areBox",
                show: Ri.value,
                "onUpdate:show": W[10] || (W[10] = bt=>Ri.value = bt),
                round: "",
                position: "bottom",
                style: {
                    overflow: "initial"
                }
            }, {
                default: D(()=>[t("div", zN, [t("img", {
                    class: "close",
                    src: r(tt)("common", "close"),
                    alt: "",
                    onClick: W[9] || (W[9] = ()=>Ri.value = !1)
                }, null, 8, IN), (n(!0),
                a(S, null, G(k.value, (bt,It)=>(n(),
                a("div", {
                    class: "items",
                    key: It
                }, [t("h1", null, i(bt.text), 1), t("div", xN, [(n(!0),
                a(S, null, G(bt.info, (ai,xt)=>(n(),
                a("div", {
                    key: xt,
                    class: M({
                        isActive: o.value == ai.code
                    }),
                    onClick: He=>Ea(ai, bt.value)
                }, i(q.$t("code" + ai.nameCode)), 11, RN))), 128))])]))), 128))])]),
                _: 1
            }, 8, ["show"]), z(Xt, {
                show: ee.value,
                "onUpdate:show": W[11] || (W[11] = bt=>ee.value = bt),
                class: "PreSaleRule",
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", SN, [t("div", MN, i(r(u)("presaleRules")), 1), t("div", BN, i(q.$t("betPopTXT")), 1), t("div", GN, [t("div", {
                    class: "btn",
                    onClick: so
                }, i(r(u)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"]), z(Xt, {
                show: Ki.value,
                "onUpdate:show": W[12] || (W[12] = bt=>Ki.value = bt),
                class: "Tips",
                "close-on-click-overlay": !0
            }, {
                default: D(()=>[t("div", null, [V.value == "code402" ? (n(),
                a("img", {
                    key: 0,
                    src: r(tt)("home/AllLotteryGames/NewVietnam", "success")
                }, null, 8, PN)) : (n(),
                a("img", {
                    key: 1,
                    src: r(tt)("home/AllLotteryGames/NewVietnam", "fail")
                }, null, 8, DN)), t("div", AN, i(q.$t(V.value)), 1)])]),
                _: 1
            }, 8, ["show"]), z(xi, {
                show: w.value,
                "onUpdate:show": W[13] || (W[13] = bt=>w.value = bt),
                onConfirm: po,
                confirmText: r(u)("confirm"),
                showCancelBtn: !1
            }, {
                content: D(()=>[t("div", ON, i(V.value ? q.$t(V.value) : ""), 1)]),
                _: 1
            }, 8, ["show", "confirmText"])], 64)
        }
    }
});
const WN = K(qN, [["__scopeId", "data-v-273cca7e"]])
  , Ix = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: WN
}, Symbol.toStringTag, {
    value: "Module"
}))
  , EN = {
    class: "Play__C"
}
  , VN = {
    class: "title"
}
  , FN = ["src"]
  , jN = {
    class: "info"
}
  , HN = ["src"]
  , UN = {
    class: "sub"
}
  , KN = {
    class: "text"
}
  , XN = {
    class: "info_text"
}
  , QN = {
    class: "forexample"
}
  , YN = {
    key: 0,
    class: "betting"
}
  , JN = {
    class: "result"
}
  , ZN = {
    key: 0,
    class: "info_item"
}
  , t9 = ["src"]
  , i9 = {
    class: "sub"
}
  , e9 = {
    class: "text"
}
  , n9 = {
    key: 1,
    class: "info_text"
}
  , a9 = {
    class: "forexample"
}
  , o9 = {
    class: "result"
}
  , s9 = H({
    __name: "NorthPlay",
    setup(l) {
        const {t: e} = kt()
          , s = h(0)
          , u = Qt([{
            title: e("xosoTab1"),
            subList: [{
                sub: e("xosoSub1"),
                num: "［45］",
                resultTip: e("xosoTxt3", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["27", "2"])
                }]
            }, {
                sub: e("xosoSub2"),
                num: "［45］",
                resultTip: e("xosoTxt5"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt4")
                }]
            }, {
                sub: e("xosoSub3"),
                num: "［45］",
                resultTip: e("xosoTxt6", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["27", "2"])
                }]
            }, {
                sub: e("xosoSub4"),
                num: "［456］",
                resultTip: e("xosoTxt9", ["23"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt8")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["23", "3"])
                }]
            }, {
                sub: e("xosoSub5"),
                num: "［4567］",
                resultTip: e("xosoTxt11", ["20"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt10")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["20", "4"])
                }]
            }]
        }, {
            title: e("xosoTab2"),
            subList: [{
                sub: e("xosoSub6"),
                num: "［45/55］",
                resultTip: e("xosoTxt14", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["2"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt13", ["27", "2", "2"])
                }]
            }, {
                sub: e("xosoSub7"),
                num: "［45/55/65］",
                resultTip: e("xosoTxt15", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["3"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt13", ["27", "3", "2"])
                }]
            }, {
                sub: e("xosoSub8"),
                num: "［45/55/65/75］",
                resultTip: e("xosoTxt16", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["4"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt13", ["27", "4", "2"])
                }]
            }]
        }, {
            title: e("xosoTab3"),
            subList: [{
                sub: e("xosoSub9"),
                num: "［45］",
                resultTip: e("xosoTxt19"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt17")
                }]
            }, {
                sub: e("xosoSub18"),
                num: "［45］",
                resultTip: e("xosoTxt23"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt21")
                }]
            }, {
                sub: e("xosoSub11"),
                num: "［45］",
                resultTip: e("xosoTxt27"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt25")
                }]
            }, {
                sub: e("xosoSub12"),
                num: "［45］",
                resultTip: e("xosoTxt35"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt34")
                }]
            }, {
                sub: e("xosoSub13"),
                num: "［45］",
                resultTip: e("xosoTxt37"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt36")
                }]
            }]
        }, {
            title: e("xosoTab4"),
            subList: [{
                sub: e("xosoSub17"),
                num: "［4］",
                resultTip: e("xosoTxt31"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt29")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt30")
                }]
            }, {
                sub: e("xosoTxt100"),
                num: "［4］",
                resultTip: e("xosoTxt33"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt101")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt102")
                }]
            }]
        }, {
            title: e("xosoTab5"),
            subList: [{
                sub: e("xosoSub19"),
                num: "［456］",
                resultTip: e("xosoTxt41"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt38")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt39")
                }]
            }, {
                sub: e("xosoSub20"),
                num: "［456］",
                resultTip: e("xosoTxt45"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt43")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt44")
                }]
            }, {
                sub: e("xosoSub21"),
                num: "［456］",
                resultTip: e("xosoTxt49"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt43")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt47")
                }]
            }, {
                sub: e("xosoSub22"),
                num: "［456］",
                resultTip: e("xosoTxt55"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt43")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt54")
                }]
            }]
        }, {
            title: e("xosoTab6"),
            subList: [{
                sub: e("xosoSub25"),
                num: "［4567］",
                resultTip: e("xosoTxt53"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt51")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt52")
                }]
            }]
        }, {
            title: e("xosoTab7"),
            subList: [{
                sub: e("xosoSub26"),
                num: "［45/55/66/77］",
                resultTip: e("xosoTxt57", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["4"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt56", ["27"])
                }]
            }, {
                sub: e("xosoSub27"),
                num: "［45/55/66/77/88/99/11/22］",
                resultTip: e("xosoTxt58", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["8"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt56", ["27"])
                }]
            }, {
                sub: e("xosoSub28"),
                num: "［45/55/66/77/88/99/11/22/33/44］",
                resultTip: e("xosoTxt59", ["27"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["10"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt56", ["27"])
                }]
            }]
        }, {
            title: e("xosoTab8"),
            subList: [{
                sub: e("xosoTxt60"),
                num: "",
                resultTip: e("xosoTxt66"),
                txtList: [{
                    bet: e("xosoTxt60"),
                    betTip: e("xosoTxt61")
                }, {
                    bet: e("big"),
                    betTip: e("xosoTxt62")
                }, {
                    bet: e("small"),
                    betTip: e("xosoTxt63")
                }, {
                    bet: e("xosoTxt69"),
                    betTip: e("xosoTxt64")
                }, {
                    bet: e("xosoTxt70"),
                    betTip: e("xosoTxt65")
                }]
            }]
        }]);
        return (g,b)=>{
            const d = j("van-tab")
              , c = j("van-tabs");
            return n(),
            a("div", EN, [z(c, {
                active: s.value,
                "onUpdate:active": b[0] || (b[0] = p=>s.value = p),
                type: "card"
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(u, (p,o)=>(n(),
                it(d, {
                    title: p.title,
                    key: o
                }, {
                    default: D(()=>[(n(!0),
                    a(S, null, G(p.subList, (_,m)=>(n(),
                    a("div", {
                        class: "Play__C-Cotent",
                        key: m
                    }, [t("div", VN, [t("img", {
                        src: r(tt)("home/AllLotteryGames/NewVietnam", "Star")
                    }, null, 8, FN), t("span", null, i(_.sub), 1)]), t("div", jN, [(n(!0),
                    a(S, null, G(_.txtList, (T,f)=>(n(),
                    a("div", {
                        class: "info_item",
                        key: f
                    }, [t("img", {
                        src: r(tt)("home/AllLotteryGames/NewVietnam", "Triangle")
                    }, null, 8, HN), t("span", UN, i(T.bet), 1), t("div", KN, i(T.betTip), 1)]))), 128)), t("div", XN, [t("div", QN, i(r(e)("forexample")), 1), _.num ? (n(),
                    a("div", YN, i(r(e)("betting")) + "：" + i(_.num), 1)) : B("", !0), t("div", JN, i(r(e)("result")) + "：" + i(_.resultTip), 1)]), s.value === 7 ? (n(),
                    a("div", ZN, [t("img", {
                        src: r(tt)("home/AllLotteryGames/NewVietnam", "Triangle")
                    }, null, 8, t9), t("span", i9, i(r(e)("xosoTxt71")), 1), t("div", e9, i(r(e)("xosoTxt67")), 1)])) : B("", !0), s.value === 7 ? (n(),
                    a("div", n9, [t("div", a9, i(r(e)("forexample")), 1), t("div", o9, i(r(e)("result")) + "： " + i(r(e)("xosoTxt68")), 1)])) : B("", !0)])]))), 128))]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"])])
        }
    }
});
const l9 = K(s9, [["__scopeId", "data-v-9fb9bedb"]])
  , ye = l=>(Gt("data-v-fa6bdd16"),
l = l(),
Pt(),
l)
  , c9 = {
    class: "NorthRule__C"
}
  , r9 = {
    class: "NorthRule__C-title"
}
  , u9 = {
    class: "NorthRule__C-tips"
}
  , d9 = ye(()=>t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , p9 = {
    class: "title"
}
  , g9 = {
    class: "text"
}
  , b9 = {
    class: "table"
}
  , m9 = {
    class: "table-row header-time"
}
  , _9 = {
    class: "table-time-1"
}
  , h9 = ye(()=>t("div", {
    class: "table-time-1"
}, "18:15", -1))
  , v9 = {
    class: "table-row header-week"
}
  , k9 = {
    class: "table-week-1"
}
  , f9 = {
    class: "table-week-1"
}
  , y9 = {
    class: "table-cell-1"
}
  , $9 = {
    class: "table-cell-1"
}
  , T9 = ye(()=>t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , w9 = {
    class: "title"
}
  , C9 = {
    class: "text"
}
  , N9 = {
    key: 0,
    class: "text"
}
  , L9 = {
    key: 1,
    class: "text"
}
  , z9 = {
    class: "NorthRule__C-Rule"
}
  , I9 = {
    class: "NorthRule__C-Struct"
}
  , x9 = ye(()=>t("span", {
    class: "left"
}, null, -1))
  , R9 = ye(()=>t("span", {
    class: "right"
}, null, -1))
  , S9 = {
    class: "table-rule"
}
  , M9 = {
    class: "table-header"
}
  , B9 = {
    class: "table-header-cell"
}
  , G9 = {
    class: "table-header-cell"
}
  , P9 = {
    class: "table-header-cell"
}
  , D9 = {
    class: "table-cell"
}
  , A9 = {
    class: "table-cell"
}
  , O9 = {
    class: "table-cell"
}
  , q9 = {
    class: "table-rule"
}
  , W9 = {
    class: "table-header"
}
  , E9 = {
    class: "table-header-cell"
}
  , V9 = {
    key: 0,
    class: "table-box-title"
}
  , F9 = H({
    __name: "NorthRule",
    setup(l) {
        const {t: e} = kt()
          , s = Qt([{
            title: "01",
            sub: e("resultsVielottery")
        }, {
            title: "02",
            sub: e("systemresult")
        }, {
            title: "03",
            sub: e("lotterytime")
        }])
          , u = Qt([{
            title: "04",
            sub: e("oddsmiscalculated")
        }, {
            title: "05",
            sub: e("oddsbettingprincipal")
        }, {
            title: "06",
            sub: e("oddsfluctuate")
        }, {
            title: "07",
            sub: e("oncebetgenerated")
        }, {
            title: "08",
            sub: e("anyreasonCauses")
        }, {
            title: "09",
            sub: e("platformcancel"),
            sub1: e("drawdelayedtoolong"),
            sub2: e("resultsofthelotterybeenleaked")
        }])
          , g = Qt([{
            week: e("Monday"),
            addressList: e("Hanoi")
        }, {
            week: e("Tuesday"),
            addressList: e("quangNinh")
        }, {
            week: e("Wednesday"),
            addressList: e("bacninh")
        }, {
            week: e("Thursday"),
            addressList: e("Hanoi")
        }, {
            week: e("Friday"),
            addressList: e("haiphong")
        }, {
            week: e("Saturday"),
            addressList: e("nanning")
        }, {
            week: e("Sunday"),
            addressList: e("taiping")
        }])
          , b = Qt([{
            title: e("GrandPrize"),
            quantity: 1,
            number: e("fivedigits"),
            drawsNumber: ["29818"]
        }, {
            title: e("FirstPrize"),
            quantity: 1,
            number: e("fivedigits"),
            drawsNumber: ["69388"]
        }, {
            title: e("SecondPrize"),
            quantity: 2,
            number: e("fivedigits"),
            drawsNumber: ["66992", "95797"]
        }, {
            title: e("ThirdPrize"),
            quantity: 6,
            number: e("fivedigits"),
            drawsNumber: ["99095", "32620", "51685", "12345", "69548", "69874"]
        }, {
            title: e("FourPrize"),
            quantity: 4,
            number: e("fourdigits"),
            drawsNumber: ["6545", "5257", "7896", "3682"]
        }, {
            title: e("FivePrize"),
            quantity: 6,
            number: e("fourdigits"),
            drawsNumber: ["4567", "8533", "7632", "7632", "6673", "7855"]
        }, {
            title: e("SixPrize"),
            quantity: 3,
            number: e("fourdigits"),
            drawsNumber: ["567", "642", "934"]
        }, {
            title: e("SevenPrize"),
            quantity: 4,
            number: e("seconddigits"),
            drawsNumber: ["48", "64", "32", "51"]
        }, {
            title: e("intotal"),
            quantity: e("lotteryawards"),
            number: ""
        }]);
        return (d,c)=>(n(),
        a("div", c9, [t("div", r9, i(r(e)("northVieLotteryGameRules")), 1), t("div", u9, i(r(e)("precautions")), 1), (n(!0),
        a(S, null, G(s, (p,o)=>(n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: o
        }, [d9, t("div", p9, i(p.title), 1), t("div", g9, i(p.sub), 1)]))), 128)), t("div", b9, [t("div", m9, [t("div", _9, i(r(e)("winTrxTime")), 1), h9]), t("div", v9, [t("div", k9, i(r(e)("weeks")), 1), t("div", f9, i(r(e)("northLotteryCities")), 1)]), (n(!0),
        a(S, null, G(g, (p,o)=>(n(),
        a("div", {
            class: "table-row",
            key: o
        }, [t("div", y9, i(p.week), 1), t("div", $9, i(p.addressList), 1)]))), 128))]), (n(!0),
        a(S, null, G(u, (p,o)=>(n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: o
        }, [T9, t("div", w9, i(p.title), 1), t("div", C9, i(p.sub), 1), p.sub1 ? (n(),
        a("div", N9, i(p.sub1), 1)) : B("", !0), p.sub2 ? (n(),
        a("div", L9, i(p.sub2), 1)) : B("", !0)]))), 128)), t("div", z9, i(r(e)("northernLotteryGameRules")), 1), t("div", I9, [x9, E(i(r(e)("colorstructure")), 1), R9]), t("div", S9, [t("div", M9, [t("div", B9, i(r(e)("Lottery")), 1), t("div", G9, i(r(e)("numberofPrizes")), 1), t("div", P9, i(r(e)("Number")), 1)]), (n(!0),
        a(S, null, G(b, (p,o)=>(n(),
        a("div", {
            class: "table-row",
            key: o
        }, [t("div", D9, i(p.title), 1), t("div", A9, i(p.quantity), 1), t("div", O9, i(p.number), 1)]))), 128))]), t("div", q9, [t("div", W9, [t("div", E9, i(r(e)("sorthlotteryresult")), 1)]), (n(!0),
        a(S, null, G(b, (p,o)=>(n(),
        a("div", {
            class: M(o == 8 ? "table-box none" : "table-box"),
            key: o
        }, [o != 8 ? (n(),
        a("div", V9, i(p.title), 1)) : B("", !0), (n(!0),
        a(S, null, G(p.drawsNumber, (_,m)=>(n(),
        a("div", {
            class: "table-box-number",
            key: m
        }, i(_), 1))), 128))], 2))), 128))])]))
    }
});
const j9 = K(F9, [["__scopeId", "data-v-fa6bdd16"]])
  , H9 = {
    class: "Play__C"
}
  , U9 = {
    class: "title"
}
  , K9 = ["src"]
  , X9 = {
    class: "info"
}
  , Q9 = ["src"]
  , Y9 = {
    class: "sub"
}
  , J9 = {
    class: "text"
}
  , Z9 = {
    class: "info_text"
}
  , tL = {
    class: "forexample"
}
  , iL = {
    key: 0,
    class: "betting"
}
  , eL = {
    class: "result"
}
  , nL = {
    key: 0,
    class: "info_item"
}
  , aL = ["src"]
  , oL = {
    class: "sub"
}
  , sL = {
    class: "text"
}
  , lL = {
    key: 1,
    class: "info_text"
}
  , cL = {
    class: "forexample"
}
  , rL = {
    class: "result"
}
  , uL = H({
    __name: "SorthPlay",
    setup(l) {
        const {t: e} = kt()
          , s = h(0)
          , u = Qt([{
            title: e("xosoTab1"),
            subList: [{
                sub: e("xosoSub1"),
                num: "［45］",
                resultTip: e("xosoTxt3", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["18", "2"])
                }]
            }, {
                sub: e("xosoSub3"),
                num: "［45］",
                resultTip: e("xosoTxt6", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["18", "2"])
                }]
            }, {
                sub: e("xosoSub4"),
                num: "［456］",
                resultTip: e("xosoTxt9", ["17"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt8")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["17", "3"])
                }]
            }, {
                sub: e("xosoSub5"),
                num: "［4567］",
                resultTip: e("xosoTxt11", ["16"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt10")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt2", ["16", "4"])
                }]
            }]
        }, {
            title: e("xosoTab2"),
            subList: [{
                sub: e("xosoSub6"),
                num: "［45/55］",
                resultTip: e("xosoTxt14", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["2"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt13", ["18", "2", "2"])
                }]
            }, {
                sub: e("xosoSub7"),
                num: "［45/55/65］",
                resultTip: e("xosoTxt15", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["3"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt13", ["18", "3", "2"])
                }]
            }, {
                sub: e("xosoSub8"),
                num: "［45/55/65/75］",
                resultTip: e("xosoTxt16", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["4"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt13", ["18", "4", "2"])
                }]
            }]
        }, {
            title: e("xosoTab3"),
            subList: [{
                sub: e("xosoSub14"),
                num: "［45］",
                resultTip: e("xosoTxt20"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt18")
                }]
            }, {
                sub: e("xosoSub15"),
                num: "［45］",
                resultTip: e("xosoTxt24"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt22")
                }]
            }, {
                sub: e("xosoSub16"),
                num: "［45］",
                resultTip: e("xosoTxt28"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt1")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt26")
                }]
            }]
        }, {
            title: e("xosoTab4"),
            subList: [{
                sub: e("xosoSub17"),
                num: "［4］",
                resultTip: e("xosoTxt31"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt29")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt30")
                }]
            }, {
                sub: e("xosoTxt100"),
                num: "［4］",
                resultTip: e("xosoTxt33"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt101")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt102")
                }]
            }]
        }, {
            title: e("xosoTab5"),
            subList: [{
                sub: e("xosoSub23"),
                num: "［456］",
                resultTip: e("xosoTxt42"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt38")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt40")
                }]
            }, {
                sub: e("xosoSub20"),
                num: "［456］",
                resultTip: e("xosoTxt45"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt43")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt44")
                }]
            }, {
                sub: e("xosoSub24"),
                num: "［456］",
                resultTip: e("xosoTxt50"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt43")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt48")
                }]
            }]
        }, {
            title: e("xosoTab6"),
            subList: [{
                sub: e("xosoSub25"),
                num: "［4567］",
                resultTip: e("xosoTxt53"),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt51")
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt52")
                }]
            }]
        }, {
            title: e("xosoTab7"),
            subList: [{
                sub: e("xosoSub26"),
                num: "［45/55/66/77］",
                resultTip: e("xosoTxt57", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["4"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt56", ["18"])
                }]
            }, {
                sub: e("xosoSub27"),
                num: "［45/55/66/77/88/99/11/22］",
                resultTip: e("xosoTxt58", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["8"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt56", ["18"])
                }]
            }, {
                sub: e("xosoSub28"),
                num: "［45/55/66/77/88/99/11/22/33/44］",
                resultTip: e("xosoTxt59", ["18"]),
                txtList: [{
                    bet: e("betting"),
                    betTip: e("xosoTxt12", ["10"])
                }, {
                    bet: e("winningconditions"),
                    betTip: e("xosoTxt56", ["18"])
                }]
            }]
        }, {
            title: e("xosoTab8"),
            subList: [{
                sub: e("xosoTxt60"),
                num: "",
                resultTip: e("xosoTxt66"),
                txtList: [{
                    bet: e("xosoTxt60"),
                    betTip: e("xosoTxt61")
                }, {
                    bet: e("big"),
                    betTip: e("xosoTxt62")
                }, {
                    bet: e("small"),
                    betTip: e("xosoTxt63")
                }, {
                    bet: e("xosoTxt69"),
                    betTip: e("xosoTxt64")
                }, {
                    bet: e("xosoTxt70"),
                    betTip: e("xosoTxt65")
                }]
            }]
        }]);
        return (g,b)=>{
            const d = j("van-tab")
              , c = j("van-tabs");
            return n(),
            a("div", H9, [z(c, {
                active: s.value,
                "onUpdate:active": b[0] || (b[0] = p=>s.value = p),
                type: "card"
            }, {
                default: D(()=>[(n(!0),
                a(S, null, G(u, (p,o)=>(n(),
                it(d, {
                    title: p.title,
                    key: o
                }, {
                    default: D(()=>[(n(!0),
                    a(S, null, G(p.subList, (_,m)=>(n(),
                    a("div", {
                        class: "Play__C-Cotent",
                        key: m
                    }, [t("div", U9, [t("img", {
                        src: r(tt)("home/AllLotteryGames/NewVietnam", "Star")
                    }, null, 8, K9), t("span", null, i(_.sub), 1)]), t("div", X9, [(n(!0),
                    a(S, null, G(_.txtList, (T,f)=>(n(),
                    a("div", {
                        class: "info_item",
                        key: f
                    }, [t("img", {
                        src: r(tt)("home/AllLotteryGames/NewVietnam", "Triangle")
                    }, null, 8, Q9), t("span", Y9, i(T.bet), 1), t("div", J9, i(T.betTip), 1)]))), 128)), t("div", Z9, [t("div", tL, i(r(e)("forexample")), 1), _.num ? (n(),
                    a("div", iL, i(r(e)("betting")) + "：" + i(_.num), 1)) : B("", !0), t("div", eL, i(r(e)("result")) + "：" + i(_.resultTip), 1)]), s.value === 7 ? (n(),
                    a("div", nL, [t("img", {
                        src: r(tt)("home/AllLotteryGames/NewVietnam", "Triangle")
                    }, null, 8, aL), t("span", oL, i(r(e)("xosoTxt71")), 1), t("div", sL, i(r(e)("xosoTxt67")), 1)])) : B("", !0), s.value === 7 ? (n(),
                    a("div", lL, [t("div", cL, i(r(e)("forexample")), 1), t("div", rL, i(r(e)("result")) + "： " + i(r(e)("xosoTxt68")), 1)])) : B("", !0)])]))), 128))]),
                    _: 2
                }, 1032, ["title"]))), 128))]),
                _: 1
            }, 8, ["active"])])
        }
    }
});
const dL = K(uL, [["__scopeId", "data-v-584e1104"]])
  , me = l=>(Gt("data-v-1d7b1eb6"),
l = l(),
Pt(),
l)
  , pL = {
    class: "NorthRule__C"
}
  , gL = {
    class: "NorthRule__C-title"
}
  , bL = {
    class: "NorthRule__C-tips"
}
  , mL = me(()=>t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , _L = {
    class: "title"
}
  , hL = {
    class: "text"
}
  , vL = {
    class: "table"
}
  , kL = {
    class: "table-row header-time"
}
  , fL = {
    class: "table-time-1"
}
  , yL = me(()=>t("div", {
    class: "table-time-1"
}, "16:20(GMT+7)", -1))
  , $L = me(()=>t("div", {
    class: "table-time-1"
}, "17:15(GMT+7)", -1))
  , TL = {
    class: "table-row header-week"
}
  , wL = {
    class: "table-week-1"
}
  , CL = {
    class: "table-week-1"
}
  , NL = {
    class: "table-week-1"
}
  , LL = {
    class: "table-cell-1"
}
  , zL = {
    class: "table-cell-2"
}
  , IL = me(()=>t("div", {
    class: "borderTopStyle"
}, [t("span"), t("span")], -1))
  , xL = {
    class: "title"
}
  , RL = {
    class: "text"
}
  , SL = {
    key: 0,
    class: "text"
}
  , ML = {
    key: 1,
    class: "text"
}
  , BL = {
    class: "NorthRule__C-Rule"
}
  , GL = {
    class: "NorthRule__C-Struct"
}
  , PL = me(()=>t("span", {
    class: "left"
}, null, -1))
  , DL = me(()=>t("span", {
    class: "right"
}, null, -1))
  , AL = {
    class: "table-rule"
}
  , OL = {
    class: "table-header"
}
  , qL = {
    class: "table-header-cell"
}
  , WL = {
    class: "table-header-cell"
}
  , EL = {
    class: "table-header-cell"
}
  , VL = {
    class: "table-cell"
}
  , FL = {
    class: "table-cell"
}
  , jL = {
    class: "table-cell"
}
  , HL = {
    class: "table-rule"
}
  , UL = {
    class: "table-header"
}
  , KL = {
    class: "table-header-cell"
}
  , XL = {
    key: 0,
    class: "table-box-title"
}
  , QL = H({
    __name: "SorthRule",
    setup(l) {
        const {t: e} = kt()
          , s = Qt([{
            title: "01",
            sub: e("resultsVielottery")
        }, {
            title: "02",
            sub: e("systemresult")
        }, {
            title: "03",
            sub: e("lotterytime1")
        }])
          , u = Qt([{
            title: "04",
            sub: e("oddsmiscalculated")
        }, {
            title: "05",
            sub: e("oddsbettingprincipal")
        }, {
            title: "06",
            sub: e("oddsfluctuate")
        }, {
            title: "07",
            sub: e("oncebetgenerated")
        }, {
            title: "08",
            sub: e("anyreasonCauses")
        }, {
            title: "09",
            sub: e("platformcancel"),
            sub1: e("drawdelayedtoolong"),
            sub2: e("resultsofthelotterybeenleaked")
        }])
          , g = Qt([{
            week: e("Monday"),
            addressList: [e("hochiminhcity"), e("sametower"), e("camua"), e("fuan"), e("hue")]
        }, {
            week: e("Tuesday"),
            addressList: [e("BenTre"), e("VungTau"), e("BacLieu"), e("Guangnan"), e("Dole")]
        }, {
            week: e("Wednesday"),
            addressList: [e("DongNai"), e("CanTho"), e("Shuozhuang"), e("danang"), e("Qinghe")]
        }, {
            week: e("Thursday"),
            addressList: [e("Xining"), e("Anjiang"), e("smooth"), e("putdown"), e("QuangBinh"), e("Koji")]
        }, {
            week: e("Friday"),
            addressList: [e("VinhLong"), e("BinhDuong"), e("ChaRong"), e("Carai"), e("NinhThun")]
        }, {
            week: e("Saturday"),
            addressList: [e("hochiminhcity"), e("LongAn"), e("Pingfu"), e("Houjiang"), e("danang"), e("Generalized"), e("Denon")]
        }, {
            week: e("Sunday"),
            addressList: [e("Qianjiang"), e("jianjiang"), e("DaLat"), e("Qinghe"), e("KonTum")]
        }])
          , b = Qt([{
            title: e("GrandPrize"),
            quantity: 1,
            number: e("onedigits"),
            drawsNumber: ["575333"]
        }, {
            title: e("FirstPrize"),
            quantity: 1,
            number: e("onedigits"),
            drawsNumber: ["34521"]
        }, {
            title: e("SecondPrize"),
            quantity: 1,
            number: e("onedigits"),
            drawsNumber: ["34675"]
        }, {
            title: e("ThirdPrize"),
            quantity: 2,
            number: e("seconddigits"),
            drawsNumber: ["34575", "45732"]
        }, {
            title: e("FourPrize"),
            quantity: 7,
            number: e("sevendigits"),
            drawsNumber: ["43211", "23545", "78023", "46954", "32463", "23478", "34522"]
        }, {
            title: e("FivePrize"),
            quantity: 1,
            number: e("onedigits"),
            drawsNumber: ["6425"]
        }, {
            title: e("SixPrize"),
            quantity: 3,
            number: e("threedigits"),
            drawsNumber: ["66992", "95797", "4356"]
        }, {
            title: e("SevenPrize"),
            quantity: 1,
            number: e("onedigits"),
            drawsNumber: ["69388"]
        }, {
            title: e("EightPrize"),
            quantity: 1,
            number: e("onedigits"),
            drawsNumber: ["12"]
        }, {
            title: e("intotal"),
            quantity: e("eightlotteryawards"),
            number: ""
        }])
          , d = c=>c.slice().reverse();
        return (c,p)=>(n(),
        a("div", pL, [t("div", gL, i(r(e)("sorthVieLotteryGameRules")), 1), t("div", bL, i(r(e)("precautions")), 1), (n(!0),
        a(S, null, G(s, (o,_)=>(n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: _
        }, [mL, t("div", _L, i(o.title), 1), t("div", hL, i(o.sub), 1)]))), 128)), t("div", vL, [t("div", kL, [t("div", fL, i(r(e)("winTrxTime")), 1), yL, $L]), t("div", TL, [t("div", wL, i(r(e)("weeks")), 1), t("div", CL, i(r(e)("sorthLotteryCities")), 1), t("div", NL, i(r(e)("middleLotteryCities")), 1)]), (n(!0),
        a(S, null, G(g, (o,_)=>(n(),
        a("div", {
            class: "table-row",
            key: _
        }, [t("div", LL, i(o.week), 1), t("div", zL, [(n(!0),
        a(S, null, G(o.addressList, (m,T)=>(n(),
        a("div", {
            class: "table-column-1",
            key: T
        }, i(m), 1))), 128))])]))), 128))]), (n(!0),
        a(S, null, G(u, (o,_)=>(n(),
        a("div", {
            class: "NorthRule__C-Content",
            key: _
        }, [IL, t("div", xL, i(o.title), 1), t("div", RL, i(o.sub), 1), o.sub1 ? (n(),
        a("div", SL, i(o.sub1), 1)) : B("", !0), o.sub2 ? (n(),
        a("div", ML, i(o.sub2), 1)) : B("", !0)]))), 128)), t("div", BL, i(r(e)("sorthernLotteryGameRules")), 1), t("div", GL, [PL, E(i(r(e)("colorstructure")), 1), DL]), t("div", AL, [t("div", OL, [t("div", qL, i(r(e)("Lottery")), 1), t("div", WL, i(r(e)("numberofPrizes")), 1), t("div", EL, i(r(e)("Number")), 1)]), (n(!0),
        a(S, null, G(b, (o,_)=>(n(),
        a("div", {
            class: "table-row",
            key: _
        }, [t("div", VL, i(o.title), 1), t("div", FL, i(o.quantity), 1), t("div", jL, i(o.number), 1)]))), 128))]), t("div", HL, [t("div", UL, [t("div", KL, i(r(e)("sorthlotteryresult")), 1)]), (n(!0),
        a(S, null, G(d(b), (o,_)=>(n(),
        a("div", {
            class: M(_ == 0 ? "table-box none" : "table-box"),
            key: _
        }, [_ != 0 ? (n(),
        a("div", XL, i(o.title), 1)) : B("", !0), (n(!0),
        a(S, null, G(o.drawsNumber, (m,T)=>(n(),
        a("div", {
            class: "table-box-number",
            key: T
        }, i(m), 1))), 128))], 2))), 128))])]))
    }
});
const YL = K(QL, [["__scopeId", "data-v-1d7b1eb6"]])
  , JL = {
    class: "vietnamPlay__C"
}
  , ZL = {
    key: 0,
    class: "play"
}
  , tz = {
    key: 1,
    class: "play"
}
  , iz = {
    key: 0,
    class: "northrule"
}
  , ez = {
    key: 1,
    class: "sorthrule"
}
  , nz = H({
    __name: "index",
    setup(l) {
        var d, c;
        const e = ft()
          , s = h(0)
          , u = e.currentRoute.value.query.id
          , g = ((c = (d = e.currentRoute.value.query) == null ? void 0 : d.gVSs) == null ? void 0 : c.toString()) || ""
          , b = ()=>{
            e.go(-1)
        }
        ;
        return (p,o)=>{
            const _ = j("NavBar")
              , m = j("van-tab")
              , T = j("van-tabs");
            return n(),
            a("div", JL, [z(_, {
                "left-arrow": "",
                title: p.$t("lotteryManual"),
                onClickLeft: b,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)"
            }, null, 8, ["title"]), z(T, {
                active: s.value,
                "onUpdate:active": o[0] || (o[0] = f=>s.value = f),
                type: "card",
                class: M({
                    dis: r(g) == "2"
                })
            }, {
                default: D(()=>[z(m, {
                    title: p.$t("gamePlay")
                }, {
                    default: D(()=>[r(u) == "1" ? (n(),
                    a("div", ZL, [z(l9)])) : (n(),
                    a("div", tz, [z(dL)]))]),
                    _: 1
                }, 8, ["title"]), r(g) != "2" ? (n(),
                it(m, {
                    key: 0,
                    title: p.$t("rule")
                }, {
                    default: D(()=>[r(u) == "1" ? (n(),
                    a("div", iz, [z(j9)])) : (n(),
                    a("div", ez, [z(YL)]))]),
                    _: 1
                }, 8, ["title"])) : B("", !0)]),
                _: 1
            }, 8, ["active", "class"])])
        }
    }
});
const az = K(nz, [["__scopeId", "data-v-f2d38c45"]])
  , xx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: az
}, Symbol.toStringTag, {
    value: "Module"
}))
  , oz = l=>(Gt("data-v-40fe88e0"),
l = l(),
Pt(),
l)
  , sz = {
    class: "TimeLeft__C"
}
  , lz = {
    class: "TimeLeft__C-name"
}
  , cz = {
    class: "TimeLeft__C-num"
}
  , rz = {
    class: "TimeLeft__C-id"
}
  , uz = {
    class: "TimeLeft__C-text"
}
  , dz = {
    class: "TimeLeft__C-time"
}
  , pz = oz(()=>t("div", null, ":", -1))
  , gz = H({
    __name: "TimeLeft",
    props: {
        currentInfo: {
            type: Object,
            default: ()=>({
                gameNo: "loading",
                currentTime: "",
                beginTime: "",
                passTime: 180,
                time1: 0,
                time2: 0,
                time3: 0,
                time4: 0
            })
        },
        winNum: {
            type: Array,
            default: [0, 0, 0, 0, 0]
        },
        gameName: {
            type: String,
            default: ""
        },
        currentGame: {
            type: Object,
            default: ()=>({})
        }
    },
    setup(l) {
        const e = l
          , s = h(!1)
          , u = Ui()
          , g = ()=>{
            s.value = !0,
            u.getWinGoRule(e.currentGame.typeID)
        }
        ;
        return (b,d)=>(n(),
        a(S, null, [t("div", sz, [t("div", {
            class: "TimeLeft__C-rule",
            onClick: g
        }, i(b.$t("winTrxIndicate")), 1), t("div", lz, i(e.gameName.replace("<br />", " ")), 1), t("div", cz, [(n(!0),
        a(S, null, G(l.winNum, (c,p)=>(n(),
        a("div", {
            key: p,
            class: M(["n" + c])
        }, null, 2))), 128))]), t("div", rz, i(e.currentInfo.gameNo), 1), t("div", uz, i(b.$t("timeLeftToBuy")), 1), t("div", dz, [t("div", null, i(l.currentInfo.time1), 1), t("div", null, i(l.currentInfo.time2), 1), pz, t("div", null, i(l.currentInfo.time3), 1), t("div", null, i(l.currentInfo.time4), 1)])]), z(Se, {
            howPlayShow: s.value,
            gamePresentation: l.currentGame.gamePresentation,
            onClose: d[0] || (d[0] = c=>s.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])], 64))
    }
});
const bz = K(gz, [["__scopeId", "data-v-40fe88e0"]])
  , mz = l=>(Gt("data-v-dc81bf96"),
l = l(),
Pt(),
l)
  , _z = {
    class: "Betting__Popup-head"
}
  , hz = {
    class: "Betting__Popup-head-title"
}
  , vz = {
    class: "Betting__Popup-head-selectName"
}
  , kz = {
    class: "Betting__Popup-body"
}
  , fz = {
    class: "Betting__Popup-body-line"
}
  , yz = {
    class: "Betting__Popup-body-line-list"
}
  , $z = ["onClick"]
  , Tz = {
    class: "Betting__Popup-body-line"
}
  , wz = {
    class: "Betting__Popup-body-line-btnL"
}
  , Cz = {
    class: "Betting__Popup-body-line"
}
  , Nz = mz(()=>t("div", null, null, -1))
  , Lz = {
    class: "Betting__Popup-body-line-list"
}
  , zz = ["onClick"]
  , Iz = {
    class: "Betting__Popup-body-line"
}
  , xz = {
    class: "Betting__Popup-foot"
}
  , Rz = {
    class: "Betting__Popup-foot-s bgcolor"
}
  , Sz = {
    class: "Betting__Popup-PreSale"
}
  , Mz = {
    class: "Betting__Popup-PreSale-head"
}
  , Bz = {
    class: "Betting__Popup-PreSale-body"
}
  , Gz = {
    class: "Betting__Popup-PreSale-foot"
}
  , Pz = H({
    __name: "BettingPopup",
    props: {
        currentGame: {
            type: Object,
            default: ()=>({})
        },
        selectInfo: {
            type: Object,
            default: ()=>({})
        },
        bettingPopupShow: {
            type: Boolean,
            default: h(!1)
        },
        betTypeList: {
            type: Array,
            default: []
        },
        multipleList: {
            type: Array,
            default: ()=>[1, 5, 10, 20, 50, 100]
        }
    },
    emits: ["update:bettingPopupShow", "update:selectInfo", "clearBetting", "submitBetting"],
    setup(l, {emit: e}) {
        const s = l
          , {t: u} = kt()
          , g = h(!1)
          , b = h(!0)
          , d = Q({
            get() {
                return s.bettingPopupShow || !1
            },
            set(w) {
                e("update:bettingPopupShow", w)
            }
        })
          , c = Q(()=>{
            switch (s.selectInfo.selecttype) {
            case 13:
                return u("big");
            case 14:
                return u("small");
            case 10:
                return u("redColor");
            case 11:
                return u("greenColor");
            case 12:
                return u("purpleColor");
            default:
                return s.selectInfo.selecttype
            }
        }
        )
          , p = Q(()=>s.currentGame.typeName)
          , o = w=>{
            switch (w) {
            case 1:
                s.selectInfo.count > 1 && (s.selectInfo.count--,
                $());
                break;
            case 2:
                s.selectInfo.count++,
                $();
                break
            }
        }
          , _ = w=>{
            w > 0 && (s.selectInfo.count = parseInt(w),
            $())
        }
          , m = w=>{
            s.selectInfo.count = w,
            $()
        }
          , T = w=>{
            s.selectInfo.coin = w,
            $()
        }
          , f = ()=>{
            g.value = !1,
            b.value = !0
        }
          , y = ()=>{
            if (s.selectInfo.count == 0)
                return Ot(u("bteNoCount"));
            b.value ? e("submitBetting") : _i(u("agreePresaleRules"))
        }
          , $ = ()=>{
            s.selectInfo.allCoin = s.selectInfo.coin * s.selectInfo.count
        }
        ;
        return (w,k)=>{
            const v = j("van-field")
              , L = j("van-popup")
              , C = Ht("throttle-click");
            return n(),
            a(S, null, [z(L, {
                show: d.value,
                "onUpdate:show": k[6] || (k[6] = I=>d.value = I),
                position: "bottom",
                round: !0,
                "close-on-click-overlay": !1
            }, {
                default: D(()=>[t("div", {
                    class: M([`Betting__Popup-${l.selectInfo.selecttype}`])
                }, [t("div", _z, [t("div", hz, i(p.value.replace("<br />", " ")), 1), t("div", vz, [t("span", null, i(r(u)("choose")), 1), t("span", null, i(c.value), 1)])]), t("div", kz, [t("div", fz, [E(i(r(u)("amount")) + " ", 1), t("div", yz, [(n(!0),
                a(S, null, G(l.betTypeList, (I,N)=>(n(),
                a("div", {
                    key: N,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: l.selectInfo.coin == I
                    }]),
                    onClick: x=>T(I)
                }, i(I), 11, $z))), 128))])]), t("div", Tz, [E(i(r(u)("numbers")) + " ", 1), t("div", wz, [t("div", {
                    class: M(["Betting__Popup-btn reduce", {
                        bgcolor: l.selectInfo.count > 0
                    }]),
                    onClick: k[0] || (k[0] = I=>o(1))
                }, null, 2), z(v, {
                    class: "Betting__Popup-input",
                    modelValue: l.selectInfo.count,
                    "onUpdate:modelValue": k[1] || (k[1] = I=>l.selectInfo.count = I),
                    modelModifiers: {
                        number: !0
                    },
                    type: "digit",
                    maxlength: 4,
                    onInput: _
                }, null, 8, ["modelValue"]), t("div", {
                    class: M(["Betting__Popup-btn", {
                        bgcolor: l.selectInfo.count > 0
                    }]),
                    onClick: k[2] || (k[2] = I=>o(2))
                }, null, 2)])]), t("div", Cz, [Nz, t("div", Lz, [(n(!0),
                a(S, null, G(l.multipleList, (I,N)=>(n(),
                a("div", {
                    key: N,
                    class: M(["Betting__Popup-body-line-item", {
                        bgcolor: l.selectInfo.count == I
                    }]),
                    onClick: x=>m(I)
                }, " X" + i(I), 11, zz))), 128))])]), t("div", Iz, [t("span", {
                    class: M(["Betting__Popup-agree", {
                        active: b.value
                    }]),
                    onClick: k[3] || (k[3] = I=>b.value = !b.value)
                }, i(r(u)("agree")), 3), t("span", {
                    onClick: k[4] || (k[4] = I=>g.value = !0),
                    class: "Betting__Popup-preSaleShow"
                }, i(r(u)("presaleRules")), 1)])]), t("div", xz, [t("div", {
                    class: "Betting__Popup-foot-c",
                    onClick: k[5] || (k[5] = I=>e("clearBetting"))
                }, i(r(u)("cancel")), 1), pt((n(),
                a("div", Rz, [E(i(r(u)("totalAmount")) + " " + i(r(Rt)(l.selectInfo.count * l.selectInfo.coin || 0)), 1)])), [[C, {
                    handler: y,
                    wait: 2e3
                }]])])], 2)]),
                _: 1
            }, 8, ["show"]), z(L, {
                show: g.value,
                "onUpdate:show": k[7] || (k[7] = I=>g.value = I),
                "close-on-click-overlay": !1,
                round: ""
            }, {
                default: D(()=>[t("div", Sz, [t("div", Mz, i(r(u)("presaleRules")), 1), t("div", Bz, i(w.$t("betPopTXT")), 1), t("div", Gz, [t("div", {
                    class: "Betting__Popup-PreSale-foot-btn",
                    onClick: f
                }, i(r(u)("iKonw")), 1)])])]),
                _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const Dz = K(Pz, [["__scopeId", "data-v-dc81bf96"]])
  , Az = {
    class: "Betting__C"
}
  , Oz = {
    class: "Betting__C-mark"
}
  , qz = {
    class: "Betting__C-head"
}
  , Wz = {
    class: "Betting__C-numC"
}
  , Ez = ["onClick"]
  , Vz = {
    class: "Betting__C-multiple"
}
  , Fz = ["onClick"]
  , jz = {
    class: "Betting__C-foot"
}
  , Hz = H({
    __name: "Betting",
    props: {
        currentInfo: {
            type: Object,
            default: ()=>({})
        },
        ProhibitBuyTime: {
            type: Number,
            default: 5
        },
        currentGame: {
            type: Object,
            default: ()=>({})
        },
        bettingApiFun: {
            type: Function,
            required: !0
        }
    },
    emits: ["betting", "changeBettingP"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , g = ve.global.t
          , b = Q(()=>u.currentGame.betMultiple.split("|"))
          , d = h(!1)
          , c = h("")
          , p = h({
            coin: 0,
            count: b.value[0],
            allCoin: 0,
            gametype: 0,
            typeid: 1,
            issuenumber: "2020",
            selecttype: 1
        });
        At(()=>b, ()=>{
            p.value.count = b.value[0]
        }
        , {
            deep: !0,
            immediate: !0
        });
        const o = h(null)
          , _ = h(0)
          , m = h(!1)
          , T = Q(()=>(u.currentInfo.passTime < u.ProhibitBuyTime && L(),
        u.currentInfo.passTime < u.ProhibitBuyTime))
          , f = Q(()=>u.currentGame.typeID)
          , y = Q(()=>u.currentGame.scope ? u.currentGame.scope.split("|").map(I=>Number(I)) : [])
          , $ = I=>{
            p.value.count = I,
            w()
        }
          , w = ()=>{
            p.value.allCoin = p.value.coin * p.value.count
        }
          , k = (I,N,x)=>{
            p.value.gametype = x,
            p.value.selecttype = I,
            p.value.issuenumber = u.currentInfo.gameNo,
            p.value.typeid = f.value,
            p.value.coin = y.value[0],
            c.value = I,
            d.value = !0
        }
          , v = ()=>{
            m.value || (m.value = !0,
            o.value || (o.value = setInterval(function() {
                _.value = Math.floor(Math.random() * 11)
            }, 50)),
            setTimeout(function() {
                _.value > 9 && (_.value = 9),
                clearInterval(o.value),
                m.value = !1,
                o.value = null,
                k(_.value, "color" + _.value, 1)
            }, 5e3))
        }
          , L = ()=>{
            d.value && (d.value = !1,
            p.value.coin = y.value[0],
            p.value.count = b.value[0],
            w(),
            s("changeBettingP", d.value))
        }
          , C = async()=>{
            const I = await ot(u.bettingApiFun({
                typeId: p.value.typeid,
                issuenumber: p.value.issuenumber,
                amount: p.value.coin,
                betCount: Number(p.value.count),
                gameType: p.value.gametype,
                selectType: p.value.selecttype
            }));
            (I == null ? void 0 : I.code) === 0 && (_i(g("code" + I.msgCode)),
            s("betting", p.value.issuenumber),
            L())
        }
        ;
        return e({
            bettingPopupShow: d
        }),
        (I,N)=>(n(),
        a("div", Az, [pt(t("div", Oz, [t("div", null, i(u.currentInfo.time3 || "0"), 1), t("div", null, i(u.currentInfo.time4 || "0"), 1)], 512), [[ci, T.value]]), t("div", qz, [t("div", {
            class: "Betting__C-head-g",
            onClick: N[0] || (N[0] = x=>k(11, "#5CBA47", 0))
        }, i(I.$t("greenColor")), 1), t("div", {
            class: "Betting__C-head-p",
            onClick: N[1] || (N[1] = x=>k(12, "#9831E9", 0))
        }, i(I.$t("purpleColor")), 1), t("div", {
            class: "Betting__C-head-r",
            onClick: N[2] || (N[2] = x=>k(10, "#FB4E4E", 0))
        }, i(I.$t("redColor")), 1)]), t("div", Wz, [(n(),
        a(S, null, G(10, (x,R)=>t("div", {
            key: R,
            class: M([_.value == x ? "active" : "", "Betting__C-numC-item" + R]),
            onClick: O=>k(R, "color" + R, 1)
        }, null, 10, Ez)), 64))]), t("div", Vz, [t("div", {
            class: "Betting__C-multiple-l",
            onClick: v
        }, i(I.$t("randomBet")), 1), (n(!0),
        a(S, null, G(b.value, (x,R)=>(n(),
        a("div", {
            key: R,
            class: M(["Betting__C-multiple-r", {
                active: p.value.count == x
            }]),
            onClick: O=>$(x)
        }, " X" + i(x), 11, Fz))), 128))]), t("div", jz, [t("div", {
            class: "Betting__C-foot-b",
            onClick: N[3] || (N[3] = x=>k(13, "#ffc511", 2))
        }, i(I.$t("big")), 1), t("div", {
            class: "Betting__C-foot-s",
            onClick: N[4] || (N[4] = x=>k(14, "#5CBA47", 2))
        }, i(I.$t("small")), 1)]), z(Dz, {
            currentGame: l.currentGame,
            selectInfo: p.value,
            bettingPopupShow: d.value,
            betTypeList: y.value,
            multipleList: b.value,
            onClearBetting: L,
            onSubmitBetting: C
        }, null, 8, ["currentGame", "selectInfo", "bettingPopupShow", "betTypeList", "multipleList"])]))
    }
});
const Aa = K(Hz, [["__scopeId", "data-v-2194ac19"]])
  , Oe = l=>(Gt("data-v-4cca3a73"),
l = l(),
Pt(),
l)
  , Uz = {
    class: "GameRecord__C"
}
  , Kz = {
    class: "GameRecord__C-head"
}
  , Xz = {
    class: "GameRecord__C-body"
}
  , Qz = {
    key: 0
}
  , Yz = {
    key: 1
}
  , Jz = {
    class: "GameRecord__C-origin"
}
  , Zz = Oe(()=>t("div", {
    class: "GameRecord__C-origin-I red"
}, null, -1))
  , t7 = Oe(()=>t("div", {
    class: "GameRecord__C-origin-I violet"
}, null, -1))
  , i7 = {
    key: 1,
    class: "GameRecord__C-origin-I green"
}
  , e7 = {
    key: 2,
    class: "GameRecord__C-origin-I red"
}
  , n7 = Oe(()=>t("div", {
    class: "GameRecord__C-origin-I green"
}, null, -1))
  , a7 = Oe(()=>t("div", {
    class: "GameRecord__C-origin-I violet"
}, null, -1))
  , o7 = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , s7 = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , l7 = {
    class: "GameRecord__C-foot-page"
}
  , c7 = H({
    __name: "GameRecord",
    props: {
        typeid: {}
    },
    emits: ["changefive"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , g = h([])
          , b = h(4)
          , d = h(10)
          , c = h(1)
          , p = ()=>{
            c.value--,
            _()
        }
          , o = ()=>{
            c.value++,
            _()
        }
          , _ = async(f=!1)=>{
            if (u.typeid == null)
                return;
            f && (c.value = 1);
            const [y,$] = await Zt(Ca({
                pageSize: d.value,
                pageNo: c.value,
                typeId: u.typeid
            }));
            g.value = $.list || [],
            b.value = $.totalPage,
            f && s("changefive", $.list.slice(0, 5).map(w=>w.number))
        }
          , m = f=>parseInt(f, 10) % 2 !== 0
          , T = f=>{
            let y = "";
            switch (m(f) ? y = "greenColor" : y = "defaultColor",
            f) {
            case "0":
                y = "mixedColor0";
                break;
            case "5":
                y = "mixedColor5";
                break
            }
            return y
        }
        ;
        return e({
            getData: _
        }),
        ki(()=>{
            _()
        }
        ),
        (f,y)=>{
            const $ = j("van-col")
              , w = j("van-row")
              , k = j("van-icon");
            return n(),
            a("div", Uz, [t("div", Kz, [z(w, null, {
                default: D(()=>[z($, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(f.$t("betSerial")), 1)]),
                    _: 1
                }), z($, {
                    span: "5"
                }, {
                    default: D(()=>[E(i(f.$t("num")), 1)]),
                    _: 1
                }), z($, {
                    span: "5"
                }, {
                    default: D(()=>[E(i(f.$t("bigOrSmall")), 1)]),
                    _: 1
                }), z($, {
                    span: "6"
                }, {
                    default: D(()=>[E(i(f.$t("color")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", Xz, [g.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(g.value, (v,L)=>(n(),
            it(w, {
                key: L
            }, {
                default: D(()=>[z($, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(v.issueNumber), 1)]),
                    _: 2
                }, 1024), z($, {
                    span: "5",
                    class: "numcenter"
                }, {
                    default: D(()=>[t("div", {
                        class: M(["GameRecord__C-body-num", T(v.number)])
                    }, i(v.number), 3)]),
                    _: 2
                }, 1024), z($, {
                    span: "5"
                }, {
                    default: D(()=>[Number(v.number) > 4 ? (n(),
                    a("span", Qz, i(f.$t("big")), 1)) : (n(),
                    a("span", Yz, i(f.$t("small")), 1))]),
                    _: 2
                }, 1024), z($, {
                    span: "6"
                }, {
                    default: D(()=>[t("div", Jz, [v.number == "0" ? (n(),
                    a(S, {
                        key: 0
                    }, [Zz, t7], 64)) : B("", !0), v.number == "1" || v.number == "3" || v.number == "7" || v.number == "9" ? (n(),
                    a("div", i7)) : B("", !0), v.number == "2" || v.number == "4" || v.number == "6" || v.number == "8" ? (n(),
                    a("div", e7)) : B("", !0), v.number == "5" ? (n(),
                    a(S, {
                        key: 3
                    }, [n7, a7], 64)) : B("", !0)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", o7, [z(ri)]))]), g.value.length ? (n(),
            a("div", s7, [t("div", {
                class: M(["GameRecord__C-foot-previous", {
                    disabled: c.value <= 1
                }]),
                onClick: p
            }, [z(k, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", l7, i(c.value) + "/" + i(b.value), 1), t("div", {
                class: M(["GameRecord__C-foot-next", {
                    disabled: c.value >= b.value
                }]),
                onClick: o
            }, [z(k, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const r7 = K(c7, [["__scopeId", "data-v-4cca3a73"]])
  , u7 = {
    class: "Trend__C"
}
  , d7 = {
    class: "Trend__C-head"
}
  , p7 = {
    class: "Trend__C-body1"
}
  , g7 = {
    class: "Trend__C-body1-line"
}
  , b7 = {
    class: "Trend__C-body1-line lottery"
}
  , m7 = {
    key: 0,
    class: "Trend__C-body1-line-num"
}
  , _7 = {
    key: 0,
    class: "Trend__C-body1-line"
}
  , h7 = {
    class: "Trend__C-body1-line-num"
}
  , v7 = {
    key: 1,
    class: "Trend__C-body1-line"
}
  , k7 = {
    class: "Trend__C-body1-line-num"
}
  , f7 = {
    key: 2,
    class: "Trend__C-body1-line"
}
  , y7 = {
    class: "Trend__C-body1-line-num"
}
  , $7 = {
    key: 3,
    class: "Trend__C-body1-line"
}
  , T7 = {
    class: "Trend__C-body1-line-num"
}
  , w7 = {
    class: "Trend__C-body2"
}
  , C7 = ["IssueNumber", "Number", "Colour", "rowId"]
  , N7 = {
    class: "Trend__C-body2-IssueNumber"
}
  , L7 = {
    class: "Trend__C-body2-Num"
}
  , z7 = ["id"]
  , I7 = {
    key: 1,
    class: "Trend__C-body2-empty"
}
  , x7 = {
    key: 0,
    class: "Trend__C-foot"
}
  , R7 = {
    class: "Trend__C-foot-page"
}
  , S7 = H({
    __name: "Trend",
    props: {
        typeid: {},
        listApi: {},
        EmerdApi: {}
    },
    emits: ["changefive"],
    setup(l, {expose: e, emit: s}) {
        const u = l
          , g = h([])
          , b = h([])
          , d = h()
          , c = h()
          , p = h()
          , o = h()
          , _ = h()
          , m = h(1)
          , T = h(4);
        function f() {
            ti(()=>{
                for (let L = 0; L < b.value.length; L++)
                    b.value[L + 1] && y(b.value[L], b.value[L + 1])
            }
            )
        }
        function y(L, C) {
            let I = parseInt(L.number)
              , N = parseInt(C.number);
            var x = document.getElementById("myCanvas" + L.rowId);
            if (x && x.getContext) {
                var R = x.getContext("2d");
                R.clearRect(0, 0, x.width, x.height),
                R.beginPath(),
                R.moveTo(I == 0 ? 15 : I * 29 + 15, 0),
                R.lineTo(N == 0 ? 15 : N * 29 + 15, x.height),
                R.strokeStyle = "red",
                R.stroke(),
                R.closePath()
            }
        }
        const $ = ()=>{
            m.value--,
            v()
        }
          , w = ()=>{
            m.value++,
            v()
        }
          , k = async(L=!1)=>{
            if (u.typeid == null)
                return;
            L && (m.value = 1,
            v(L));
            const [C,I] = await Zt(u.EmerdApi({
                typeId: u.typeid
            }));
            if (I.length) {
                const N = Object.keys(I[0]).filter(x=>x.startsWith("number_"));
                g.value = I.map(x=>{
                    const R = {
                        list: []
                    };
                    return R.type = x.type,
                    R.list = [],
                    N.forEach(O=>{
                        R.list.push(x[O])
                    }
                    ),
                    R
                }
                )
            }
            d.value = g.value[0],
            c.value = g.value[1],
            p.value = g.value[2],
            o.value = g.value[3],
            _.value = g.value[4]
        }
          , v = async(L=!1)=>{
            var N;
            if (u.typeid == null)
                return;
            L && (m.value = 1);
            const [C,I] = await Zt(u.listApi({
                pageSize: 10,
                pageNo: m.value,
                typeId: u.typeid
            }));
            if (I.list ? b.value = I.list.map((x,R)=>(x.rowId = R,
            x)) || [] : I.data.gameslist && (b.value = I.data.gameslist.map((x,R)=>(x.rowId = R,
            x)) || []),
            T.value = I.totalPage,
            L) {
                const x = ((N = I.data) == null ? void 0 : N.gameslist) || I.list || [];
                s("changefive", x.slice(0, 5).map(R=>R.number))
            }
            f()
        }
        ;
        return e({
            getData: k
        }),
        ki(()=>{
            k(),
            v()
        }
        ),
        (L,C)=>{
            const I = j("van-col")
              , N = j("van-row")
              , x = j("van-icon");
            return n(),
            a("div", u7, [t("div", d7, [z(N, null, {
                default: D(()=>[z(I, {
                    span: "8"
                }, {
                    default: D(()=>[E(i(L.$t("betIssue")), 1)]),
                    _: 1
                }), z(I, {
                    span: "16"
                }, {
                    default: D(()=>[E(i(L.$t("number")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", p7, [t("div", g7, i(L.$t("trendDesc1")), 1), t("div", b7, [t("div", null, i(L.$t("trendDesc2")), 1), d.value ? (n(),
            a("div", m7, [(n(),
            a(S, null, G(10, R=>t("div", {
                key: R
            }, i(R - 1), 1)), 64))])) : B("", !0)]), o.value && o.value.type == 2 ? (n(),
            a("div", _7, [t("div", null, i(L.$t("trendDesc3")), 1), t("div", h7, [(n(!0),
            a(S, null, G(o.value.list, (R,O)=>(n(),
            a("div", {
                key: "4" + O
            }, i(R), 1))), 128))])])) : B("", !0), c.value && c.value.type == 4 ? (n(),
            a("div", v7, [t("div", null, i(L.$t("trendDesc4")), 1), t("div", k7, [(n(!0),
            a(S, null, G(c.value.list, (R,O)=>(n(),
            a("div", {
                key: "2" + O
            }, i(R), 1))), 128))])])) : B("", !0), _.value && _.value.type == 1 ? (n(),
            a("div", f7, [t("div", null, i(L.$t("trendDesc5")), 1), t("div", y7, [(n(!0),
            a(S, null, G(_.value.list, (R,O)=>(n(),
            a("div", {
                key: "5" + O
            }, i(R), 1))), 128))])])) : B("", !0), p.value && p.value.type == 3 ? (n(),
            a("div", $7, [t("div", null, i(L.$t("trendDesc6")), 1), t("div", T7, [(n(!0),
            a(S, null, G(p.value.list, (R,O)=>(n(),
            a("div", {
                key: "3" + O
            }, i(R), 1))), 128))])])) : B("", !0)]), t("div", w7, [b.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(b.value, (R,O)=>(n(),
            a("div", {
                key: O,
                IssueNumber: R.issueNumber,
                Number: R.number,
                Colour: R.colour,
                rowId: R.rowId
            }, [z(N, null, {
                default: D(()=>[z(I, {
                    span: "8"
                }, {
                    default: D(()=>[t("div", N7, i(R.issueNumber), 1)]),
                    _: 2
                }, 1024), z(I, {
                    span: "16"
                }, {
                    default: D(()=>[t("div", L7, [t("canvas", {
                        canvas: "",
                        id: "myCanvas" + R.rowId,
                        ref_for: !0,
                        ref: "canvas",
                        class: "line-canvas"
                    }, null, 8, z7), (n(),
                    a(S, null, G(10, P=>t("div", {
                        class: M(["Trend__C-body2-Num-item", Number(R.number) == P - 1 ? "action" + (P - 1) : ""]),
                        key: P
                    }, i(P - 1), 3)), 64)), t("div", {
                        class: M(["Trend__C-body2-Num-BS", {
                            isB: Number(R.number) > 4
                        }])
                    }, i(Number(R.number) > 4 ? "B" : "S"), 3)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024)], 8, C7))), 128)) : (n(),
            a("div", I7, [z(ri)]))]), b.value.length ? (n(),
            a("div", x7, [t("div", {
                class: M(["Trend__C-foot-previous", {
                    disabled: m.value <= 1
                }]),
                onClick: $
            }, [z(x, {
                name: "arrow-left",
                class: "Trend__C-icon",
                size: "20"
            })], 2), t("div", R7, i(m.value) + "/" + i(T.value), 1), t("div", {
                class: M(["Trend__C-foot-next", {
                    disabled: m.value >= T.value
                }]),
                onClick: w
            }, [z(x, {
                name: "arrow",
                class: "Trend__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const Oa = K(S7, [["__scopeId", "data-v-ae0503ca"]])
  , M7 = {
    key: 1,
    class: "WinningTip__C-body-l1"
}
  , B7 = {
    class: "colorW"
}
  , G7 = {
    class: "WinningNum"
}
  , P7 = {
    class: "colorW"
}
  , D7 = {
    class: "WinningTip__C-body-l3"
}
  , A7 = {
    key: 0,
    class: "isLose"
}
  , O7 = {
    class: "head"
}
  , q7 = {
    class: "bonus"
}
  , W7 = {
    class: "gameDetail"
}
  , E7 = {
    class: "WinningTip__C-body-l4"
}
  , V7 = ["onClick"]
  , F7 = H({
    __name: "WinningTips",
    setup(l, {expose: e}) {
        const {t: s} = kt()
          , u = Q(()=>d.value[0] ? d.value[0].state == 0 : !1)
          , g = Q(()=>d.value[0] || {})
          , b = h(!1)
          , d = h([])
          , c = h({
            red: s("winColor1"),
            green: s("winColor2"),
            "red,violet": s("winColor3"),
            "green,violet": s("winColor4"),
            violet: s("winColor5")
        });
        let p = h();
        const o = ()=>{
            clearTimeout(p.value),
            d.value.shift(),
            b.value && d.value.length && (p.value = setTimeout(()=>{
                o()
            }
            , 1e3 * 3))
        }
        ;
        At(()=>d.value.length, f=>{
            f ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }
        );
        const _ = ()=>{
            b.value = !b.value,
            b.value ? p.value = setTimeout(()=>{
                o()
            }
            , 1e3 * 3) : clearTimeout(p.value)
        }
          , m = f=>{
            d.value.push(...f),
            b.value && (p.value = setTimeout(()=>{
                o()
            }
            , 1e3 * 3))
        }
          , T = ()=>{
            d.value = []
        }
        ;
        return e({
            showMark: m
        }),
        (f,y)=>pt((n(),
        a("div", {
            class: "WinningTip__C",
            onClick: o
        }, [t("div", {
            class: M(["WinningTip__C-body", {
                isL: u.value
            }])
        }, [u.value ? (n(),
        a("div", {
            key: 0,
            class: M(["WinningTip__C-body-l1", {
                isL: u.value
            }])
        }, i(f.$t("k3WarningTip1")), 3)) : (n(),
        a("div", M7, i(f.$t("k3WarningTip2")), 1)), t("div", {
            class: M(["WinningTip__C-body-l2", [`type${g.value.number}`]])
        }, [E(i(f.$t("winTips3")) + " ", 1), t("div", B7, i(c.value[g.value.colour]), 1), t("div", G7, i(g.value.number), 1), t("div", P7, i(g.value.number > 4 ? f.$t("big") : f.$t("small")), 1)], 2), t("div", D7, [u.value ? (n(),
        a("div", A7, i(f.$t("winTips4")), 1)) : (n(),
        a(S, {
            key: 1
        }, [t("div", O7, i(f.$t("winTips5")), 1), t("div", q7, i(r(Rt)(Number(g.value.winAmount))), 1)], 64)), t("div", W7, i(f.$t("winTips6")) + i(g.value.typeName) + " " + i(g.value.issueNumber), 1)]), t("div", E7, [t("div", {
            class: M(["acitveBtn", {
                active: b.value
            }]),
            onClick: hi(_, ["stop"])
        }, null, 10, V7), E(" " + i(f.$t("autoShutOff3s")), 1)]), t("div", {
            class: "closeBtn",
            onClick: T
        })], 2)], 512)), [[ci, d.value.length]])
    }
});
const qa = K(F7, [["__scopeId", "data-v-dc3f9366"]])
  , j7 = {
    class: "WinGo__C"
}
  , H7 = {
    class: "WinGo__C-head-more"
}
  , U7 = H({
    __name: "index",
    setup(l) {
        const s = de().query.typeId
          , u = {
            GameRecord: r7,
            Trend: Oa,
            MyGameRecord: bn
        }
          , g = h()
          , b = h()
          , d = h()
          , c = h(!1)
          , p = h("GameRecord")
          , o = ft()
          , _ = Ui();
        _.getWinGoData();
        const m = _.getWingo
          , T = h(0)
          , f = h(localStorage.getItem("volumeShow") || "1")
          , y = h(!1)
          , $ = h(null)
          , w = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , k = h(5)
          , v = h("")
          , L = h(!1)
          , C = h(null)
          , I = Q(()=>m[T.value] || {})
          , N = h([0, 0, 0, 0, 0])
          , x = Ei()
          , R = Q(()=>x.getIsShowLotteryDragon);
        Ct(()=>{
            X()
        }
        ),
        Hi(()=>{
            clearInterval($.value),
            qt.value.forEach(ct=>{
                clearInterval(ct)
            }
            ),
            Nt.value && clearTimeout(Nt.value)
        }
        ),
        At(()=>pi().visibility, ct=>{
            ct === 0 ? clearInterval($.value) : (X(),
            at(T.value))
        }
        );
        const O = ()=>{
            sessionStorage.setItem("clickedGameType", "lottery"),
            o.push({
                path: "/"
            })
        }
          , P = ()=>{
            f.value == "1" ? f.value = "2" : f.value = "1",
            localStorage.setItem("volumeShow", f.value)
        }
          , F = ct=>{
            o.push({
                name: ct
            })
        }
          , X = ()=>{
            const ct = m.findIndex(Y=>Y.typeID == s);
            at(ct !== -1 ? ct : 0)
        }
          , at = ct=>{
            _.getWinGoData(),
            T.value = ct,
            C.value = m[ct].typeID,
            dt(C.value),
            ti(()=>{
                g.value.getData(C.value)
            }
            )
        }
          , dt = async ct=>{
            p.value == "MyGameRecord" && lt(ct);
            const [Y,et] = await Zt(Rs({
                typeId: ct
            }));
            w.value.gameNo = et.issueNumber,
            w.value.currentTime = et.serviceTime.replace(/-/g, "/"),
            w.value.beginTime = et.startTime.replace(/-/g, "/"),
            st()
        }
          , lt = async ct=>{
            const Y = await ot(Ss({
                typeId: ct
            }));
            Y && (N.value = Y.data.number.split(","))
        }
          , st = ()=>{
            const ct = new Date(w.value.currentTime).getTime()
              , Y = new Date(w.value.beginTime).getTime();
            let et = (ct - Y) / 1e3
              , A = m[T.value];
            if (et > A.intervalM * 60 && (et = A.intervalM * 60),
            w.value.passTime = A.intervalM * 60 - et,
            w.value.passTime < 0) {
                v.value = "An error occurred, please contact customer service。The game time is " + A.intervalM + " minutes,start time is " + w.value.beginTime + ",current time is" + w.value.currentTime + "!",
                y.value = !0;
                return
            }
            J()
        }
          , J = ()=>{
            clearInterval($.value),
            mt(!1),
            $.value = setInterval(function() {
                mt()
            }, 1e3)
        }
          , mt = (ct=!0)=>{
            if (w.value.passTime <= k.value && (L.value = !1),
            f.value == "1" && (w.value.passTime <= k.value && w.value.passTime > 1 ? Mt(1) : w.value.passTime == 1 && Mt(2)),
            w.value.passTime > 0) {
                let Y = w.value.passTime;
                w.value.time2 = Math.floor(Y / 60),
                w.value.time3 = Math.floor(Y % 60 / 10),
                w.value.time4 = Math.floor(Y % 10),
                w.value.passTime--
            } else
                clearInterval($.value),
                ct && Et()
        }
          , Mt = (ct=1)=>{
            const Y = document.getElementById(`voice${ct}`);
            Y && Y.play()
        }
          , Et = ()=>{
            dt(C.value || 0),
            d.value.getWinsUserAmount(!1),
            g.value.getData(!0)
        }
          , gt = h({})
          , qt = h([])
          , Ft = ct=>{
            if (d.value.getWinsUserAmount(!1),
            g.value.getData(),
            gt.value[ct])
                return;
            gt.value[ct] = !0;
            const {time1: Y, time2: et, time3: A, time4: nt} = w.value
              , $t = (Y * 10 * 60 + et * 60 + A * 10 + nt) * 1e3 + Math.floor(Math.random() * 2e3) + 1e3;
            qt.value[I.value.intervalM] = setTimeout(()=>{
                Tt(ct)
            }
            , $t)
        }
          , yt = ct=>{
            c.value = ct
        }
          , wt = ct=>{
            N.value = ct
        }
          , Nt = h(null)
          , Tt = async ct=>{
            const [Y,et] = await Zt(Ms({
                issueNumber: [ct]
            }));
            if (et) {
                const A = et.filter(nt=>nt.state != 2);
                if (!A.length)
                    return;
                b.value.showMark(A),
                delete gt.value[ct]
            }
        }
        ;
        return (ct,Y)=>{
            const et = j("NavBar");
            return n(),
            a("div", j7, [z(et, {
                "left-arrow": "",
                onClickLeft: O,
                "background-color": "#3F3F3F",
                headLogo: !0
            }, {
                right: D(()=>[t("div", H7, [t("div", {
                    onClick: Y[0] || (Y[0] = A=>F("CustomerService"))
                }), t("div", {
                    class: M({
                        disableVoice: f.value == "2"
                    }),
                    onClick: P
                }, null, 2)])]),
                _: 1
            }), z(xe, {
                ref_key: "WallteRef",
                ref: d
            }, null, 512), z(ke, {
                key: "wingo"
            }), z(Re, {
                gameList: r(m),
                currentGameIndex: T.value,
                onChangeGame: at
            }, null, 8, ["gameList", "currentGameIndex"]), z(bz, {
                currentInfo: w.value,
                winNum: N.value,
                gameName: I.value.typeName,
                currentGame: I.value
            }, null, 8, ["currentInfo", "winNum", "gameName", "currentGame"]), z(Aa, {
                currentInfo: w.value,
                currentGame: I.value,
                VoiceType: f.value,
                typeid: C.value,
                onBetting: Ft,
                onChangeBettingP: yt,
                "betting-api-fun": r(ha)
            }, null, 8, ["currentInfo", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), z(Me, {
                record: p.value,
                onChangeC: Y[1] || (Y[1] = A=>p.value = A)
            }, null, 8, ["record"]), (n(),
            it(Yi, null, [(n(),
            it(vi(u[p.value]), {
                ref_key: "RecordComponent",
                ref: g,
                typeid: C.value,
                ApiFun: r(ln),
                listApi: r(Ca),
                EmerdApi: r(ma),
                goPathName: "AllLotteryGames-BettingRecordWin",
                onChangefive: wt
            }, null, 40, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), z(xi, {
                show: y.value,
                onConfirm: Y[2] || (Y[2] = A=>F("/login"))
            }, {
                content: D(()=>[t("div", null, i(v.value), 1)]),
                _: 1
            }, 8, ["show"]), z(qa, {
                ref_key: "WinningTipsRef",
                ref: b
            }, null, 512), R.value ? (n(),
            it(Ie, {
                key: 0
            })) : B("", !0), z(Be)])
        }
    }
});
const K7 = K(U7, [["__scopeId", "data-v-28738ead"]])
  , Rx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: K7
}, Symbol.toStringTag, {
    value: "Module"
}))
  , X7 = l=>(Gt("data-v-c2c23aca"),
l = l(),
Pt(),
l)
  , Q7 = {
    class: "TimeLeft__C"
}
  , Y7 = {
    class: "TimeLeft__C-l1"
}
  , J7 = {
    class: "TimeLeft__C-l1-l"
}
  , Z7 = {
    class: "TimeLeft__C-l1-no"
}
  , tI = {
    class: "TimeLeft__C-l2"
}
  , iI = {
    class: "TimeLeft__C-time"
}
  , eI = X7(()=>t("div", {
    notime: ""
}, ":", -1))
  , nI = {
    class: "TimeLeft__C-l3"
}
  , aI = H({
    __name: "TimeLeft",
    props: {
        currentInfo: {
            type: Object,
            default: ()=>({
                gameNo: "loading",
                currentTime: "",
                beginTime: "",
                passTime: 180,
                time1: 0,
                time2: 0,
                time3: 0,
                time4: 0
            })
        },
        settled: {
            type: Object,
            default: ()=>({})
        },
        gameName: {
            type: String,
            default: ""
        },
        currentGame: {
            type: Object,
            default: ()=>({})
        }
    },
    setup(l) {
        const e = l
          , s = h(!1)
          , u = ft()
          , g = Q(()=>{
            const {blockID: o} = e.settled;
            if (!o)
                return [0, 0, 0, 0, 0];
            let _ = o.substring(o.length - 5).toUpperCase();
            return /\d/.test(_) ? [..._] : [...o.substring(o.length - 5, o.length - 10).toUpperCase()]
        }
        )
          , b = Q(()=>{
            var o;
            return (o = e.settled) == null ? void 0 : o.number
        }
        )
          , d = ()=>{
            let o = "https://tronscan.org";
            u.push({
                name: "AllLotteryGames-WinTrxIframe",
                query: {
                    url: o
                }
            })
        }
          , c = Ui()
          , p = ()=>{
            s.value = !0,
            c.getTrxRule(e.currentGame.typeID)
        }
        ;
        return (o,_)=>(n(),
        a("div", Q7, [t("div", Y7, [t("div", J7, [t("div", Z7, i(o.$t("winTrxNum")), 1), t("div", {
            class: "TimeLeft__C-l1-tip",
            onClick: p
        }, i(o.$t("winTrxIndicate")), 1)]), t("div", {
            class: "TimeLeft__C-l1-r",
            onClick: d
        }, i(o.$t("winTrxPub")), 1)]), t("div", tI, [t("div", null, i(e.currentInfo.gameNo), 1), t("div", iI, [t("span", null, i(o.$t("winTrxTime")), 1), t("div", null, i(l.currentInfo.time1), 1), t("div", null, i(l.currentInfo.time2), 1), eI, t("div", null, i(l.currentInfo.time3), 1), t("div", null, i(l.currentInfo.time4), 1)])]), t("div", nI, [(n(!0),
        a(S, null, G(g.value, (m,T)=>(n(),
        a(S, {
            key: T
        }, [b.value == m ? (n(),
        a("p", {
            key: 0,
            class: M(["num" + m, b.value == m && "prize" + m])
        }, null, 2)) : (n(),
        a("div", {
            key: 1,
            class: M(["num" + m, b.value == m && "prize" + m])
        }, null, 2))], 64))), 128))]), z(Se, {
            howPlayShow: s.value,
            gamePresentation: l.currentGame.gamePresentation,
            onClose: _[0] || (_[0] = m=>s.value = !1)
        }, null, 8, ["howPlayShow", "gamePresentation"])]))
    }
});
const oI = K(aI, [["__scopeId", "data-v-c2c23aca"]])
  , sI = {
    class: "GameRecord__C"
}
  , lI = {
    class: "GameRecord__C-head"
}
  , cI = {
    class: "GameRecord__C-body"
}
  , rI = {
    class: "Binquire"
}
  , uI = {
    class: "numberC"
}
  , dI = {
    key: 1,
    class: "GameRecord__C-body-empty"
}
  , pI = {
    key: 0,
    class: "GameRecord__C-foot"
}
  , gI = {
    class: "GameRecord__C-foot-page"
}
  , bI = H({
    __name: "GameRecord",
    props: {
        typeid: {}
    },
    setup(l, {expose: e}) {
        const s = l
          , u = h([])
          , g = h(4)
          , b = h(10)
          , d = h(1)
          , c = ft()
          , p = ()=>{
            d.value--,
            _()
        }
          , o = ()=>{
            d.value++,
            _()
        }
          , _ = async(T=!1)=>{
            if (s.typeid == null)
                return;
            T && (d.value = 1);
            const [f,y] = await Zt(Na({
                pageSize: b.value,
                pageNo: d.value,
                typeId: s.typeid
            }));
            if (!y)
                return;
            let $ = y == null ? void 0 : y.data.date.serviceTime;
            u.value = y.data.gameslist.map(w=>{
                if (w.blockID) {
                    var k = w.blockID.length
                      , v = w.blockID.substring(k - 4, k);
                    w.blockName = "**" + v
                }
                if (w.issueNumber) {
                    var L = w.issueNumber.substring(0, 3)
                      , C = w.issueNumber.length
                      , I = w.issueNumber.substring(C - 4, C);
                    w.issue = L + "**" + I
                }
                if (w.blockTime) {
                    let N = $.split(" ")
                      , x = w.blockTime.split(" ");
                    w.day = N[0].substring(8, 10) == x[0].substring(8, 10),
                    w.time = x[1]
                }
                return w
            }
            ),
            g.value = y.totalPage
        }
          , m = T=>{
            let f = `https://tronscan.org/#/block/${T}`;
            c.push({
                name: "AllLotteryGames-WinTrxIframe",
                query: {
                    url: f
                }
            })
        }
        ;
        return e({
            getData: _
        }),
        ki(()=>{
            _()
        }
        ),
        (T,f)=>{
            const y = j("van-col")
              , $ = j("van-row")
              , w = j("van-icon");
            return n(),
            a("div", sI, [t("div", lI, [z($, null, {
                default: D(()=>[z(y, {
                    span: "6"
                }, {
                    default: D(()=>[E(i(T.$t("betSerial")), 1)]),
                    _: 1
                }), z(y, {
                    span: "4"
                }, {
                    default: D(()=>[E(i(T.$t("winTrxDesc1")), 1)]),
                    _: 1
                }), z(y, {
                    span: "5"
                }, {
                    default: D(()=>[E(i(T.$t("winTrxDesc2")), 1)]),
                    _: 1
                }), z(y, {
                    span: "4"
                }, {
                    default: D(()=>[E(i(T.$t("winTrxDesc3")), 1)]),
                    _: 1
                }), z(y, {
                    span: "5"
                }, {
                    default: D(()=>[E(i(T.$t("winTrxDesc4")), 1)]),
                    _: 1
                })]),
                _: 1
            })]), t("div", cI, [u.value.length ? (n(!0),
            a(S, {
                key: 0
            }, G(u.value, (k,v)=>(n(),
            it($, {
                key: v
            }, {
                default: D(()=>[z(y, {
                    span: "6"
                }, {
                    default: D(()=>[E(i(k.issue), 1)]),
                    _: 2
                }, 1024), z(y, {
                    span: "4",
                    onClick: L=>m(k.blockNumber)
                }, {
                    default: D(()=>[E(i(k.blockNumber) + " ", 1), pt(t("div", rI, null, 512), [[ci, k.day]])]),
                    _: 2
                }, 1032, ["onClick"]), z(y, {
                    span: "5"
                }, {
                    default: D(()=>[E(i(k.time), 1)]),
                    _: 2
                }, 1024), z(y, {
                    span: "4"
                }, {
                    default: D(()=>[E(i(k.blockName), 1)]),
                    _: 2
                }, 1024), z(y, {
                    span: "5"
                }, {
                    default: D(()=>[t("div", uI, [t("div", {
                        class: M(["number", ["num" + k.number]])
                    }, i(k.number), 3), t("div", {
                        class: M([Number(k.number) > 4 ? "big" : "small"])
                    }, i(Number(k.number) > 4 ? "B" : "S"), 3)])]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1024))), 128)) : (n(),
            a("div", dI, [z(ri)]))]), u.value.length ? (n(),
            a("div", pI, [t("div", {
                class: M(["GameRecord__C-foot-previous", {
                    disabled: d.value <= 1
                }]),
                onClick: p
            }, [z(w, {
                name: "arrow-left",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2), t("div", gI, i(d.value) + "/" + i(g.value), 1), t("div", {
                class: M(["GameRecord__C-foot-next", {
                    disabled: d.value >= g.value
                }]),
                onClick: o
            }, [z(w, {
                name: "arrow",
                class: "GameRecord__C-icon",
                size: "20"
            })], 2)])) : B("", !0)])
        }
    }
});
const mI = K(bI, [["__scopeId", "data-v-0a4daaed"]])
  , _I = {
    class: "WinTrx__C"
}
  , hI = {
    class: "WinTrx__C-head-more"
}
  , vI = H({
    __name: "index",
    setup(l) {
        const s = de().query.typeId
          , u = {
            GameRecord: mI,
            Trend: Oa,
            MyGameRecord: bn
        }
          , g = h()
          , b = h()
          , d = h()
          , c = h(!1)
          , p = h("GameRecord")
          , o = ft()
          , _ = Ui()
          , m = _.getTrx
          , T = h(0)
          , f = h(localStorage.getItem("volumeShow") || "1")
          , y = h(!1)
          , $ = h(null)
          , w = h()
          , k = h({
            gameNo: "loading",
            currentTime: "",
            beginTime: "",
            passTime: 180,
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0
        })
          , v = h(10)
          , L = h("")
          , C = h(!1)
          , I = h(null)
          , N = Q(()=>m[T.value] || {});
        Ct(()=>{
            P()
        }
        ),
        Hi(()=>{
            clearInterval($.value),
            Mt.value.forEach(yt=>{
                clearInterval(yt)
            }
            ),
            qt.value && clearTimeout(qt.value)
        }
        ),
        At(()=>pi().visibility, yt=>{
            yt === 0 ? clearInterval($.value) : (P(),
            F(T.value))
        }
        );
        const x = ()=>{
            sessionStorage.setItem("clickedGameType", "lottery"),
            o.push({
                path: "/"
            })
        }
          , R = ()=>{
            f.value == "1" ? f.value = "2" : f.value = "1",
            localStorage.setItem("volumeShow", f.value)
        }
          , O = yt=>{
            o.push({
                name: yt
            })
        }
          , P = ()=>{
            const yt = m.findIndex(wt=>wt.typeID == s);
            F(yt !== -1 ? yt : 0)
        }
          , F = yt=>{
            _.getTrxData(),
            T.value = yt,
            I.value = m[yt].typeID,
            X(I.value),
            ti(()=>{
                g.value.getData(I.value)
            }
            )
        }
          , X = async yt=>{
            const [wt,Nt] = await Zt(Bs({
                typeId: yt
            }));
            k.value.gameNo = Nt.predraw.issueNumber,
            k.value.currentTime = Nt.predraw.serviceTime.replace(/-/g, "/"),
            k.value.beginTime = Nt.predraw.startTime.replace(/-/g, "/"),
            w.value = Nt.settled,
            at()
        }
          , at = ()=>{
            if (!m.length)
                return;
            var yt = new Date(k.value.currentTime).getTime()
              , wt = new Date(k.value.beginTime).getTime();
            let Nt = (yt - wt) / 1e3
              , Tt = m[T.value];
            if (Nt > Tt.intervalM * 60 && (Nt = Tt.intervalM * 60),
            k.value.passTime = Tt.intervalM * 60 - Nt,
            k.value.passTime < 0) {
                L.value = "An error occurred, please contact customer service。The game time is " + Tt.intervalM + " minutes,start time is " + k.value.beginTime + ",current time is" + k.value.currentTime + "!",
                y.value = !0;
                return
            }
            dt()
        }
          , dt = ()=>{
            clearInterval($.value),
            lt(!1),
            $.value = setInterval(function() {
                lt()
            }, 1e3)
        }
          , lt = (yt=!0)=>{
            if (k.value.passTime <= v.value && (C.value = !1),
            f.value == "1" && (k.value.passTime <= v.value && k.value.passTime > 1 ? st(1) : k.value.passTime == 1 && st(2)),
            k.value.passTime > 0) {
                let wt = k.value.passTime;
                k.value.time2 = Math.floor(wt / 60),
                k.value.time3 = Math.floor(wt % 60 / 10),
                k.value.time4 = Math.floor(wt % 10),
                k.value.passTime--
            } else
                clearInterval($.value),
                yt && J()
        }
          , st = (yt=1)=>{
            const wt = document.getElementById(`voice${yt}`);
            wt && wt.play()
        }
          , J = ()=>{
            X(I.value),
            d.value.getWinsUserAmount(!1),
            g.value.getData(!0)
        }
          , mt = h({})
          , Mt = h([])
          , Et = yt=>{
            if (d.value.getWinsUserAmount(!1),
            g.value.getData(),
            mt.value[yt])
                return;
            mt.value[yt] = !0;
            const {time1: wt, time2: Nt, time3: Tt, time4: ct} = k.value
              , Y = (wt * 10 * 60 + Nt * 60 + Tt * 10 + ct) * 1e3;
            Mt.value[N.value.intervalM] = setTimeout(()=>{
                Ft(yt)
            }
            , Y)
        }
          , gt = yt=>{
            c.value = yt
        }
          , qt = h(null)
          , Ft = async yt=>{
            const wt = await ot(Gs({
                issueNumber: [yt]
            }));
            if (wt) {
                const Nt = wt.data.filter(Tt=>Tt.state != 2);
                if (!Nt.length) {
                    qt.value = setTimeout(()=>{
                        Ft(yt)
                    }
                    , 2e3);
                    return
                }
                b.value.showMark(Nt),
                delete mt.value[yt]
            }
        }
        ;
        return (yt,wt)=>{
            const Nt = j("NavBar");
            return n(),
            a("div", _I, [z(Nt, {
                "left-arrow": "",
                onClickLeft: x,
                "background-color": "#3F3F3F",
                headLogo: !0
            }, {
                right: D(()=>[t("div", hI, [t("div", {
                    onClick: wt[0] || (wt[0] = Tt=>O("CustomerService"))
                }), t("div", {
                    class: M({
                        disableVoice: f.value == "2"
                    }),
                    onClick: R
                }, null, 2)])]),
                _: 1
            }), z(xe, {
                ref_key: "WallteRef",
                ref: d
            }, null, 512), z(ke, {
                key: "winx"
            }), z(Re, {
                gameList: r(m),
                currentGameIndex: T.value,
                onChangeGame: F
            }, null, 8, ["gameList", "currentGameIndex"]), z(oI, {
                currentInfo: k.value,
                gameName: N.value.typeName,
                currentGame: N.value,
                settled: w.value
            }, null, 8, ["currentInfo", "gameName", "currentGame", "settled"]), z(Aa, {
                currentInfo: k.value,
                ProhibitBuyTime: v.value,
                currentGame: N.value,
                VoiceType: f.value,
                typeid: I.value,
                onBetting: Et,
                onChangeBettingP: gt,
                "betting-api-fun": r(Ps)
            }, null, 8, ["currentInfo", "ProhibitBuyTime", "currentGame", "VoiceType", "typeid", "betting-api-fun"]), z(Me, {
                record: p.value,
                onChangeC: wt[1] || (wt[1] = Tt=>p.value = Tt)
            }, null, 8, ["record"]), (n(),
            it(Yi, null, [(n(),
            it(vi(u[p.value]), {
                ref_key: "RecordComponent",
                ref: g,
                typeid: I.value,
                ApiFun: r(cn),
                listApi: r(Na),
                EmerdApi: r(ka),
                goPathName: "AllLotteryGames-BettingRecordWinTrx"
            }, null, 8, ["typeid", "ApiFun", "listApi", "EmerdApi"]))], 1024)), z(xi, {
                show: y.value,
                onConfirm: wt[2] || (wt[2] = Tt=>O("/login"))
            }, {
                content: D(()=>[t("div", null, i(L.value), 1)]),
                _: 1
            }, 8, ["show"]), z(qa, {
                ref_key: "WinningTipsRef",
                ref: b
            }, null, 512), z(Be)])
        }
    }
});
const kI = K(vI, [["__scopeId", "data-v-8745b0cb"]])
  , Sx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: kI
}, Symbol.toStringTag, {
    value: "Module"
}))
  , fI = {
    class: "WinTrxIfram__C"
}
  , yI = ["src"]
  , $I = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = Q(()=>String(e.currentRoute.value.query.url))
          , u = ()=>{
            e.go(-1)
        }
        ;
        return (g,b)=>{
            const d = j("NavBar");
            return n(),
            a("div", fI, [z(d, {
                "left-arrow": "",
                onClickLeft: u,
                backgroundColor: "linear-gradient(90deg,#cd0103,#f64841)",
                title: "TRX"
            }), t("iframe", {
                class: "iframe",
                sandbox: "allow-same-origin allow-popups allow-scripts",
                frameborder: "0",
                marginwidth: "0",
                marginheight: "0",
                vspace: "0",
                hspace: "0",
                allowtransparency: "true",
                allowfullscreen: !0,
                ref: "iframe",
                src: s.value
            }, null, 8, yI)])
        }
    }
});
const TI = K($I, [["__scopeId", "data-v-7ae895b3"]])
  , Mx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: TI
}, Symbol.toStringTag, {
    value: "Module"
}))
  , wI = {
    class: "Xoso"
}
  , CI = {
    style: {
        "background-color": "#f7f8ff"
    }
}
  , NI = {
    key: 1,
    class: "Xoso-page"
}
  , LI = {
    class: "title"
}
  , zI = {
    class: "list"
}
  , II = ["onClick"]
  , xI = {
    key: 0
}
  , RI = ["src"]
  , SI = {
    key: 1,
    class: "info"
}
  , MI = {
    class: "issue"
}
  , BI = ["src"]
  , GI = {
    class: "time"
}
  , PI = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft();
        let u = s.currentRoute.value.query.id;
        const g = Q(()=>u == "5" ? "XOSO" : u == "6" ? e("fXosoTitle") : "XOSO")
          , {setLoading: b} = ze()
          , d = ()=>{
            s.go(-1)
        }
          , c = (f,y,$,w)=>{
            y.day = $,
            y.id = u,
            y.areId = w,
            s.push({
                name: f,
                query: y
            })
        }
          , p = h(null)
          , o = h(0)
          , _ = f=>{
            sessionStorage.setItem("xosoList", JSON.stringify(m.value[f.index]))
        }
          , m = h([]);
        return (async()=>{
            b(!0);
            let f;
            u == "5" ? f = await ot(ya()) : u == "6" && (f = await ot($a())),
            f && (m.value = f.data,
            sessionStorage.setItem("xosoList", JSON.stringify(f.data[0]))),
            b(!1)
        }
        )(),
        (f,y)=>{
            const $ = j("NavBar")
              , w = j("van-sticky");
            return n(),
            a("div", wI, [z($, {
                "left-arrow": "",
                onClickLeft: d,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: g.value
            }, null, 8, ["title"]), r(u) == "5" ? (n(),
            it(w, {
                key: 0,
                "offset-top": 46,
                container: p.value,
                class: "bet-container-sticky"
            }, {
                default: D(()=>[t("div", CI, [z(ue, {
                    list: m.value,
                    active: o.value,
                    "onUpdate:active": y[0] || (y[0] = k=>o.value = k),
                    tabClassName: "tabs",
                    onOnClickTab: _,
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item"
                }, {
                    default: D(({item: k, index: v})=>[t("div", {
                        class: M(["tab_item", {
                            tab_active: v === o.value
                        }])
                    }, [t("span", null, i(f.$t(k.week)), 1), t("p", null, i(k.day), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"])])]),
                _: 1
            }, 8, ["container"])) : B("", !0), m.value[o.value] ? (n(),
            a("div", NI, [(n(!0),
            a(S, null, G(m.value[o.value].areInfos, (k,v)=>(n(),
            a("div", {
                class: "Xoso-page-box",
                key: v
            }, [t("div", LI, i(f.$t("code" + k.areNameCode)), 1), t("div", zI, [(n(!0),
            a(S, null, G(k.areIssueNos, (L,C)=>(n(),
            a("div", {
                class: "item",
                key: C,
                onClick: I=>c("AllLotteryGames-NewVietnam", L, m.value[o.value].day, k.areId)
            }, [L.status == 1 || L.status == 2 || L.status == 3 ? (n(),
            a("h4", xI, [E(i(f.$t("code" + L.nameCode)) + " ", 1), t("img", {
                class: "img",
                src: r(tt)("home/AllLotteryGames/NewVietnam", "xosoCity"),
                alt: ""
            }, null, 8, RI)])) : B("", !0), L.status == 1 || L.status == 2 || L.status == 3 ? (n(),
            a("div", SI, [t("div", MI, [t("img", {
                class: "img",
                src: r(tt)("home/AllLotteryGames/NewVietnam", "ticketstar"),
                alt: ""
            }, null, 8, BI), E(i(L.issueNo), 1)]), t("p", null, i(f.$t("xosoTxt72")), 1), t("div", GI, [(n(!0),
            a(S, null, G(m.value[o.value].day.split("-"), (I,N)=>(n(),
            a("div", {
                key: N
            }, i(I), 1))), 128))])])) : B("", !0)], 8, II))), 128))])]))), 128))])) : B("", !0)])
        }
    }
});
const DI = K(PI, [["__scopeId", "data-v-c55e9a5b"]])
  , Bx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: DI
}, Symbol.toStringTag, {
    value: "Module"
}))
  , AI = {
    class: "TeamReport__C"
}
  , OI = {
    class: "TeamReport__C-head"
}
  , qI = {
    class: "TeamReport__C-head-fixed"
}
  , WI = {
    class: "TeamReport__C-head-line1"
}
  , EI = {
    key: 0,
    class: "default"
}
  , VI = {
    key: 1,
    class: "default"
}
  , FI = {
    class: "TeamReport__C-head-line2"
}
  , jI = {
    key: 0,
    class: "default"
}
  , HI = {
    key: 1,
    class: "default"
}
  , UI = {
    class: "TeamReport__C-list"
}
  , KI = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = ft()
          , u = de()
          , g = ()=>{
            s.go(-1)
        }
          , b = h([])
          , d = h([])
          , c = {
            text: "nameCode",
            value: "value"
        }
          , p = h()
          , o = h(!1)
          , _ = h(!1)
          , m = Qt({
            bettingParentType: "",
            areId: "",
            startDate: "",
            endDate: ""
        })
          , T = h()
          , f = h()
          , y = ({selectedOptions: C})=>{
            m.bettingParentType = Number(C[0].value),
            f.value = C[0].nameCode,
            T.value.getData(),
            o.value = !1
        }
          , $ = h()
          , w = ({selectedOptions: C})=>{
            m.areId = Number(C[0].value),
            $.value = C[0].nameCode,
            T.value.getData(),
            _.value = !1
        }
        ;
        async function k() {
            let C = p.value.endDateValue !== "" ? `${p.value.endDateValue} 23:59:59` : "";
            m.startDate = `${oi(p.value.startDateValue).format("YYYY-MM-DD")} 23:59:59`,
            m.endDate = `${oi(C).format("YYYY-MM-DD")} 23:59:59`,
            T.value.getData()
        }
        const v = async()=>{
            const C = Number(u.query.areId) | 0
              , I = await ot(Ds({
                areId: C
            }));
            d.value = L(I.data.categorys),
            d.value.unshift({
                value: "",
                nameCode: e("all")
            }),
            b.value = L(I.data.ares),
            b.value.unshift({
                value: "",
                nameCode: e("all")
            })
        }
          , L = C=>C.map(N=>{
            let x = {
                value: "",
                nameCode: ""
            };
            return x.value = N.value,
            x.nameCode = e("code" + N.nameCode),
            x
        }
        );
        return v(),
        (C,I)=>{
            const N = j("NavBar")
              , x = j("van-icon")
              , R = j("van-picker")
              , O = j("van-popup");
            return n(),
            a("div", AI, [z(N, {
                "left-arrow": "",
                onClickLeft: g,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: C.$t("xosoTxt73")
            }, null, 8, ["title"]), t("div", OI, [t("div", qI, [t("div", WI, [t("div", {
                onClick: I[0] || (I[0] = P=>_.value = !0)
            }, [$.value ? (n(),
            a("span", EI, i($.value), 1)) : (n(),
            a("span", VI, i(r(e)("all")), 1)), z(x, {
                name: "arrow-down"
            })])]), t("div", FI, [t("div", {
                onClick: I[1] || (I[1] = P=>o.value = !0)
            }, [f.value ? (n(),
            a("span", jI, i(f.value), 1)) : (n(),
            a("span", HI, i(r(e)("all")), 1)), z(x, {
                name: "arrow-down"
            })]), t("div", null, [z(pu, {
                ref_key: "calendar",
                ref: p,
                onConfirm: k
            }, null, 512)])])])]), t("div", UI, [(n(),
            it(Yi, null, [z(_n, {
                ref_key: "RecordComponent",
                ref: T,
                parmas: m,
                ApiFun: r(Ta),
                hasHead: !1,
                gVSs: "1"
            }, null, 8, ["parmas", "ApiFun"])], 1024))]), z(O, {
                show: o.value,
                "onUpdate:show": I[3] || (I[3] = P=>o.value = P),
                round: "",
                position: "bottom"
            }, {
                default: D(()=>[z(R, {
                    "columns-field-names": c,
                    columns: d.value,
                    onCancel: I[2] || (I[2] = P=>o.value = !1),
                    onConfirm: y
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"]), z(O, {
                show: _.value,
                "onUpdate:show": I[5] || (I[5] = P=>_.value = P),
                round: "",
                position: "bottom"
            }, {
                default: D(()=>[z(R, {
                    "columns-field-names": c,
                    columns: b.value,
                    onCancel: I[4] || (I[4] = P=>_.value = !1),
                    onConfirm: w
                }, null, 8, ["columns"])]),
                _: 1
            }, 8, ["show"])])
        }
    }
});
const XI = K(KI, [["__scopeId", "data-v-9ee753e7"]])
  , Gx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: XI
}, Symbol.toStringTag, {
    value: "Module"
}))
  , QI = {
    class: "TeamReport__C"
}
  , YI = {
    style: {
        "background-color": "#f7f8ff"
    }
}
  , JI = {
    class: "TeamReport__C-list"
}
  , ZI = H({
    __name: "index",
    setup(l) {
        const e = ft()
          , s = ()=>{
            e.go(-1)
        }
          , u = h(0)
          , g = h([])
          , b = h();
        let d = e.currentRoute.value.query.areId
          , c = e.currentRoute.value.query.typeId;
        const p = Qt({
            bettingParentType: "",
            startDate: "",
            endDate: "",
            areId: "",
            typeId: ""
        })
          , o = m=>{
            p.areId = m.item.areId,
            p.typeId = m.item.typeId,
            b.value.getData()
        }
        ;
        async function _() {
            let m = JSON.parse(sessionStorage.getItem("xosoList") || "")
              , T = [];
            for (let f = 0; f < m.areInfos.length; f++)
                for (let y = 0; y < m.areInfos[f].areIssueNos.length; y++)
                    m.areInfos[f].areIssueNos[y].type == 2 && T.push({
                        areId: m.areInfos[f].areId,
                        typeId: m.areInfos[f].areIssueNos[y].code,
                        nameCode: m.areInfos[f].areIssueNos[y].nameCode
                    });
            g.value = T,
            g.value.length > 0 && (u.value = g.value.findIndex(f=>f.areId == d && f.typeId == c))
        }
        return _(),
        (m,T)=>{
            const f = j("NavBar")
              , y = j("van-sticky");
            return n(),
            a("div", QI, [z(f, {
                "left-arrow": "",
                onClickLeft: s,
                "background-color": "linear-gradient(90deg, #F95959 0%, #FF9A8E 100%)",
                title: m.$t("fXosoTitle")
            }, null, 8, ["title"]), z(y, {
                "offset-top": 46,
                class: "bet-container-sticky"
            }, {
                default: D(()=>[t("div", YI, [z(ue, {
                    list: g.value,
                    active: u.value,
                    "onUpdate:active": T[0] || (T[0] = $=>u.value = $),
                    tabClassName: "tabs",
                    activeClassName: "tab_active",
                    ref: "tabRefs",
                    tabItemClassName: "funtab_item",
                    onOnClickTab: o
                }, {
                    default: D(({item: $, index: w})=>[t("div", {
                        class: M(["tab_item", {
                            tab_active: w === u.value
                        }])
                    }, [t("p", null, i(m.$t(`code${$.nameCode}`)), 1)], 2)]),
                    _: 1
                }, 8, ["list", "active"])])]),
                _: 1
            }), t("div", JI, [(n(),
            it(Yi, null, [z(_n, {
                ref_key: "RecordComponent",
                ref: b,
                parmas: p,
                ApiFun: r(wa),
                hasHead: !1,
                gVSs: "2"
            }, null, 8, ["parmas", "ApiFun"])], 1024))])])
        }
    }
});
const tx = K(ZI, [["__scopeId", "data-v-7ab1268a"]])
  , Px = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tx
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ix = {
    class: "messageDetail__container content"
}
  , ex = {
    class: "messageDetail__container-wrapper"
}
  , nx = {
    class: "messageDetail__container-title"
}
  , ax = {
    class: "messageDetail__container-content"
}
  , ox = H({
    __name: "index",
    setup(l) {
        const {t: e} = kt()
          , s = As()
          , u = ft()
          , g = h({})
          , b = qi(()=>Wi(()=>import("./messageIconNoDot-76337ecc.js"), ["assets/js/messageIconNoDot-76337ecc.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"]))
          , d = qi(()=>Wi(()=>import("./messageGarbage-9a1205cd.js"), ["assets/js/messageGarbage-9a1205cd.js", "assets/js/page-activity-d6acd6b5.js", "assets/js/modules-8ac77d1d.js", "assets/css/modules-96c1e775.css", "assets/js/native/index-79255603.js", "assets/js/en-50e0d64b.js", "assets/js/rus-be103059.js", "assets/js/vi-8cadb4e1.js", "assets/js/id-94d444aa.js", "assets/js/hd-eadb17fe.js", "assets/js/tha-3145a154.js", "assets/js/md-426dfcb9.js", "assets/js/bra-9252c082.js", "assets/js/my-c960f939.js", "assets/js/bdt-611cea81.js", "assets/js/zh-94c82ee8.js", "assets/css/page-activity-d48e62db.css"]));
        function c() {
            u.back()
        }
        function p() {
            ta({
                title: e("warning"),
                message: e("warningTxt1")
            }).then(()=>{
                en({
                    messageID: g.value.messageID,
                    state: 2
                }),
                u.back()
            }
            )
        }
        return Ct(async()=>{
            g.value = s.getMessagesDetail,
            g.value.state !== 1 && (await en({
                messageID: g.value.messageID,
                state: 1
            }),
            s.setMessageDetail({
                ...g.value,
                state: 1
            }))
        }
        ),
        (o,_)=>{
            const m = j("NavBar");
            return n(),
            a("div", ix, [z(m, {
                "left-arrow": "",
                onClickLeft: c,
                title: r(e)("notificationDetails")
            }, null, 8, ["title"]), t("div", ex, [t("div", nx, [t("div", null, [t("div", null, [(n(),
            it(vi(r(b)))), t("span", null, i(g.value.title), 1)]), t("span", null, i(g.value.addTime), 1)]), (n(),
            it(vi(r(d)), {
                onClick: p
            }))]), t("div", ax, i(g.value.messages), 1)])])
        }
    }
});
const sx = K(ox, [["__scopeId", "data-v-4c381eda"]])
  , Dx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sx
}, Symbol.toStringTag, {
    value: "Module"
}));
export {zx as A, Ix as B, xx as C, qc as D, Rx as E, Xr as F, Sx as G, Mx as H, Bx as I, Gx as J, Qr as K, Xs as L, Px as M, Dx as N, ue as _, rr as a, Kr as b, js as c, pu as d, ux as e, dx as f, px as g, gx as h, rx as i, bx as j, mx as k, _x as l, hx as m, vx as n, kx as o, fx as p, yx as q, $x as r, Tx as s, wx as t, Ji as u, cr as v, Yr as w, Cx as x, Nx as y, Lx as z};
