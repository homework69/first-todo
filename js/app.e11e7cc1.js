(function () {
    "use strict";
    var t = {
            785: function (t, e, o) {
                var n = o(9242),
                    s = o(3396),
                    i = o.p + "img/edit.43a30809.svg";
                const a = {
                        class: "wrapper"
                    },
                    l = (0, s._)("img", {
                        src: i,
                        alt: ""
                    }, null, -1),
                    r = [l];

                function c(t, e, o, i, l, c) {
                    const d = (0, s.up)("Navbar"),
                        u = (0, s.up)("Notes"),
                        h = (0, s.up)("Modal");
                    return (0, s.wg)(), (0, s.iD)("div", a, [(0, s.Wm)(d, {
                        onSetSearch: e[0] || (e[0] = t => l.searchValue = t)
                    }), (0, s.Wm)(u, {
                        notes: c.filterNotes,
                        onDelNote: c.delNote,
                        onEdit: c.edit
                    }, null, 8, ["notes", "onDelNote", "onEdit"]), (0, s.wy)((0, s.Wm)(h, {
                        onClose: e[1] || (e[1] = t => l.isModalOpen = !1),
                        onAddNote: c.addNote,
                        editNote: l.editNote,
                        currentNote: l.currentNote,
                        onChangeNote: c.changeNote,
                        titles: l.titles
                    }, null, 8, ["onAddNote", "editNote", "currentNote", "onChangeNote", "titles"]), [
                        [n.F8, l.isModalOpen]
                    ]), (0, s._)("button", {
                        class: "add__not",
                        onClick: e[2] || (e[2] = t => (l.isModalOpen = !0, l.editNote = !1))
                    }, r)])
                }
                o(560);
                var d = o(7139),
                    u = o.p + "img/search.2c9e71ed.svg",
                    h = o.p + "img/back.014b4ff1.svg",
                    _ = o.p + "img/clear.1d4d165f.svg";
                const p = {
                        class: "header"
                    },
                    f = {
                        key: 0,
                        class: "header__nav"
                    },
                    g = {
                        class: "header__nav-title"
                    },
                    m = (0, s._)("img", {
                        src: u,
                        alt: ""
                    }, null, -1),
                    v = [m],
                    w = {
                        key: 1,
                        class: "header__search"
                    },
                    b = (0, s._)("img", {
                        src: h,
                        alt: ""
                    }, null, -1),
                    N = [b],
                    k = ["placeholder"],
                    y = (0, s._)("button", {
                        class: "header__search-clear"
                    }, [(0, s._)("img", {
                        src: _,
                        alt: ""
                    })], -1);

                function C(t, e, o, i, a, l) {
                    return (0, s.wg)(), (0, s.iD)("header", p, [a.nav ? ((0, s.wg)(), (0, s.iD)("nav", f, [(0, s._)("button", {
                        class: "header__nav-lang",
                        onClick: e[0] || (e[0] = (...t) => l.switchLang && l.switchLang(...t))
                    }, (0, d.zw)(t.$i18n.locale), 1), (0, s._)("h1", g, (0, d.zw)(t.$t("notes")), 1), (0, s._)("button", {
                        class: "header__nav-search",
                        onClick: e[1] || (e[1] = t => a.nav = !1)
                    }, v)])) : ((0, s.wg)(), (0, s.iD)("nav", w, [(0, s._)("button", {
                        class: "header__search-back",
                        onClick: e[2] || (e[2] = t => a.nav = !0)
                    }, N), (0, s.wy)((0, s._)("input", {
                        type: "text",
                        placeholder: t.$t("search"),
                        class: "header__search-input",
                        "onUpdate:modelValue": e[3] || (e[3] = t => a.search = t)
                    }, null, 8, k), [
                        [n.nr, a.search]
                    ]), y]))])
                }
                var x = {
                        data() {
                            return {
                                nav: !0,
                                search: ""
                            }
                        },
                        watch: {
                            search(t) {
                                this.$emit("setSearch", t)
                            }
                        },
                        methods: {
                            switchLang() {
                                "ru" == this.$i18n.locale ? this.$i18n.locale = "uz" : this.$i18n.locale = "ru", localStorage.lang = this.$i18n.locale
                            }
                        }
                    },
                    O = o(89);
                const D = (0, O.Z)(x, [
                    ["render", C]
                ]);
                var M = D,
                    $ = o.p + "img/list.99446635.svg",
                    S = o.p + "img/grid.dbae4039.svg";
                const j = {
                        class: "main"
                    },
                    z = {
                        class: "notes"
                    },
                    L = {
                        class: "container"
                    },
                    V = {
                        class: "notes__top"
                    },
                    E = (0, s._)("h2", {
                        class: "notes__top-title"
                    }, "Все заметки", -1),
                    Z = {
                        src: $,
                        alt: ""
                    },
                    I = {
                        src: S,
                        alt: ""
                    };

                function F(t, e, o, i, a, l) {
                    const r = (0, s.up)("NotesItem");
                    return (0, s.wg)(), (0, s.iD)("main", j, [(0, s._)("section", z, [(0, s._)("div", L, [(0, s._)("div", V, [E, (0, s._)("button", {
                        class: "notes__top-btn",
                        onClick: e[0] || (e[0] = t => a.show = !a.show)
                    }, [(0, s.wy)((0, s._)("img", Z, null, 512), [
                        [n.F8, a.show]
                    ]), (0, s.wy)((0, s._)("img", I, null, 512), [
                        [n.F8, 0 == a.show]
                    ]), (0, s._)("span", null, (0, d.zw)(a.show ? "Список" : "Сетка"), 1)])]), (0, s._)("div", {
                        class: (0, d.C_)(["notes__list", {
                            active: !a.show
                        }])
                    }, [((0, s.wg)(!0), (0, s.iD)(s.HY, null, (0, s.Ko)(o.notes, (e => ((0, s.wg)(), (0, s.j4)(r, {
                        key: e.id,
                        note: e,
                        show: a.show,
                        onDelNote: o => t.$emit("delNote", e.id),
                        onEdit: o => t.$emit("edit", e.id, e.title)
                    }, null, 8, ["note", "show", "onDelNote", "onEdit"])))), 128))], 2)])])])
                }
                var J = o.p + "img/del.47da518f.svg";
                const T = {
                        class: "notes__item"
                    },
                    A = {
                        class: "notes__item-top-title"
                    },
                    U = {
                        class: "notes__item-top-date"
                    },
                    W = {
                        class: "notes__item-text"
                    },
                    B = {
                        class: "notes__item-btns"
                    },
                    P = (0, s._)("img", {
                        src: i,
                        alt: ""
                    }, null, -1),
                    H = (0, s._)("span", null, "Редактировать", -1),
                    K = [P, H],
                    Q = (0, s._)("img", {
                        src: J,
                        alt: ""
                    }, null, -1),
                    Y = (0, s._)("span", null, "Удалить", -1),
                    q = [Q, Y];

                function G(t, e, o, n, i, a) {
                    return (0, s.wg)(), (0, s.iD)("div", T, [(0, s._)("div", {
                        class: (0, d.C_)(["notes__item-top", {
                            active: !o.show
                        }])
                    }, [(0, s._)("h2", A, (0, d.zw)(o.note.title), 1), (0, s._)("p", U, (0, d.zw)(o.note.date), 1)], 2), (0, s._)("p", W, (0, d.zw)(o.note.text), 1), (0, s._)("div", B, [(0, s._)("button", {
                        class: "notes__item-btns-btn edit",
                        onClick: e[0] || (e[0] = e => t.$emit("edit", o.note.id, o.note.title))
                    }, K), (0, s._)("button", {
                        class: "notes__item-btns-btn del",
                        onClick: e[1] || (e[1] = e => t.$emit("delNote", o.note.id))
                    }, q)])])
                }
                var R = {
                    props: {
                        note: {
                            typeof: Object
                        },
                        show: {
                            typeof: Boolean
                        }
                    }
                };
                const X = (0, O.Z)(R, [
                    ["render", G]
                ]);
                var tt = X,
                    et = {
                        props: {
                            notes: {
                                typeof: Array
                            }
                        },
                        components: {
                            NotesItem: tt
                        },
                        data() {
                            return {
                                show: !0
                            }
                        }
                    };
                const ot = (0, O.Z)(et, [
                    ["render", F]
                ]);
                var nt = ot;
                const st = t => ((0, s.dD)("data-v-037af260"), t = t(), (0, s.Cn)(), t),
                    it = {
                        class: "modal__block-title"
                    },
                    at = {
                        class: "modal__block-inputs"
                    },
                    lt = {
                        for: "inp"
                    },
                    rt = st((() => (0, s._)("span", null, "Title", -1))),
                    ct = {
                        for: "area"
                    },
                    dt = st((() => (0, s._)("span", null, "Content", -1))),
                    ut = {
                        class: "modal__block-btns"
                    };

                function ht(t, e, o, i, a, l) {
                    return (0, s.wg)(), (0, s.j4)(n.uT, {
                        name: "modal"
                    }, {
                        default: (0, s.w5)((() => [(0, s._)("div", {
                            class: "modal",
                            onClick: e[6] || (e[6] = (...t) => l.closeModal && l.closeModal(...t))
                        }, [(0, s._)("div", {
                            class: "modal__block",
                            onClick: e[5] || (e[5] = (0, n.iM)((() => {}), ["stop"]))
                        }, [(0, s._)("h2", it, (0, d.zw)(o.editNote ? "Изменить заметку" : "Добавить заметку"), 1), (0, s._)("div", at, [(0, s._)("label", lt, [rt, (0, s.wy)((0, s._)("input", {
                            type: "text",
                            id: "inp",
                            "onUpdate:modelValue": e[0] || (e[0] = t => a.title = t)
                        }, null, 512), [
                            [n.nr, a.title]
                        ])]), (0, s._)("label", ct, [dt, (0, s.wy)((0, s._)("textarea", {
                            id: "area",
                            "onUpdate:modelValue": e[1] || (e[1] = t => a.text = t)
                        }, null, 512), [
                            [n.nr, a.text]
                        ])])]), (0, s._)("div", ut, [(0, s._)("button", {
                            class: "modal__block-btns-btn del",
                            onClick: e[2] || (e[2] = (...t) => l.closeModal && l.closeModal(...t))
                        }, " Отмена "), o.editNote ? ((0, s.wg)(), (0, s.iD)("button", {
                            key: 1,
                            class: "modal__block-btns-btn edit",
                            onClick: e[4] || (e[4] = (...t) => l.changeNote && l.changeNote(...t))
                        }, " Изменить ")) : ((0, s.wg)(), (0, s.iD)("button", {
                            key: 0,
                            class: "modal__block-btns-btn edit",
                            onClick: e[3] || (e[3] = (...t) => l.addNote && l.addNote(...t))
                        }, " Добавить "))])])])])),
                        _: 1
                    })
                }
                var _t = o(3029),
                    pt = {
                        props: {
                            editNote: {
                                typeof: Boolean
                            },
                            currentNote: {
                                typeof: Object
                            },
                            titles: {
                                typeof: String
                            }
                        },
                        data() {
                            return {
                                title: this.titles,
                                text: ""
                            }
                        },
                        methods: {
                            closeModal() {
                                this.$emit("close"), this.title = this.text = ""
                            },
                            addNote() {
                                if ("" != this.title && "" != this.text) {
                                    const t = {
                                        id: (0, _t.Z)(),
                                        title: this.title,
                                        text: this.text,
                                        date: (new Date).toLocaleDateString()
                                    };
                                    this.$emit("addNote", t), this.closeModal()
                                }
                            },
                            changeNote() {
                                if ("" != this.title && "" != this.text) {
                                    const t = {
                                        id: this.currentNote.id,
                                        title: this.title,
                                        text: this.text,
                                        date: (new Date).toLocaleDateString()
                                    };
                                    this.$emit("changeNote", t), this.closeModal()
                                }
                            }
                        }
                    };
                const ft = (0, O.Z)(pt, [
                    ["render", ht],
                    ["__scopeId", "data-v-037af260"]
                ]);
                var gt = ft,
                    mt = {
                        components: {
                            Navbar: M,
                            Notes: nt,
                            Modal: gt
                        },
                        data() {
                            return {
                                notes: [],
                                isModalOpen: !1,
                                editNote: !1,
                                currentNote: null,
                                searchValue: "",
                                titles: ""
                            }
                        },
                        mounted() {
                            this.getNotes()
                        },
                        methods: {
                            addNote(t) {
                                this.notes.push(t)
                            },
                            getNotes() {
                                let t = localStorage.notes;
                                t && (this.notes = JSON.parse(t))
                            },
                            delNote(t) {
                                let e = this.notes.findIndex((e => e.id == t));
                                this.notes.splice(e, 1)
                            },
                            edit(t, e) {
                                this.isModalOpen = this.editNote = !0;
                                let o = this.notes.find((e => e.id == t));
                                this.currentNote = o, this.titles = e
                            },
                            changeNote(t) {
                                let e = this.notes.findIndex((e => e.id == t.id));
                                this.notes[e] = t
                            }
                        },
                        computed: {
                            filterNotes() {
                                return this.searchValue ? this.notes.filter((t => t.title.toLowerCase().includes(this.searchValue.toLowerCase()))) : this.notes
                            }
                        },
                        watch: {
                            notes: {
                                handler() {
                                    localStorage.notes = JSON.stringify(this.notes)
                                },
                                deep: !0
                            }
                        }
                    };
                const vt = (0, O.Z)(mt, [
                    ["render", c]
                ]);
                var wt = vt,
                    bt = o(7853),
                    Nt = JSON.parse('{"notes":"Заметки","search":"Поиск"}'),
                    kt = JSON.parse('{"notes":"Eslatmalar","search":"Qidirish"}');
                const yt = {
                        ru: Nt,
                        uz: kt
                    },
                    Ct = localStorage.lang,
                    xt = (0, bt.o)({
                        locale: Ct || "ru",
                        messages: yt
                    });
                (0, n.ri)(wt).use(xt).mount("#app")
            }
        },
        e = {};

    function o(n) {
        var s = e[n];
        if (void 0 !== s) return s.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, o), i.exports
    }
    o.m = t,
        function () {
            var t = [];
            o.O = function (e, n, s, i) {
                if (!n) {
                    var a = 1 / 0;
                    for (d = 0; d < t.length; d++) {
                        n = t[d][0], s = t[d][1], i = t[d][2];
                        for (var l = !0, r = 0; r < n.length; r++)(!1 & i || a >= i) && Object.keys(o.O).every((function (t) {
                            return o.O[t](n[r])
                        })) ? n.splice(r--, 1) : (l = !1, i < a && (a = i));
                        if (l) {
                            t.splice(d--, 1);
                            var c = s();
                            void 0 !== c && (e = c)
                        }
                    }
                    return e
                }
                i = i || 0;
                for (var d = t.length; d > 0 && t[d - 1][2] > i; d--) t[d] = t[d - 1];
                t[d] = [n, s, i]
            }
        }(),
        function () {
            o.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t["default"]
                } : function () {
                    return t
                };
                return o.d(e, {
                    a: e
                }), e
            }
        }(),
        function () {
            o.d = function (t, e) {
                for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
            }
        }(),
        function () {
            o.g = function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function () {
            o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
        }(),
        function () {
            o.p = "/first-todo/"
        }(),
        function () {
            var t = {
                143: 0
            };
            o.O.j = function (e) {
                return 0 === t[e]
            };
            var e = function (e, n) {
                    var s, i, a = n[0],
                        l = n[1],
                        r = n[2],
                        c = 0;
                    if (a.some((function (e) {
                            return 0 !== t[e]
                        }))) {
                        for (s in l) o.o(l, s) && (o.m[s] = l[s]);
                        if (r) var d = r(o)
                    }
                    for (e && e(n); c < a.length; c++) i = a[c], o.o(t, i) && t[i] && t[i][0](), t[i] = 0;
                    return o.O(d)
                },
                n = self["webpackChunkcli"] = self["webpackChunkcli"] || [];
            n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
        }();
    var n = o.O(void 0, [998], (function () {
        return o(785)
    }));
    n = o.O(n)
})();
//# sourceMappingURL=app.e11e7cc1.js.map