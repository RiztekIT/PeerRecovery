function _createForOfIteratorHelper(t) {
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = _unsupportedIterableToArray(t))) {
            var e = 0,
                i = function() {};
            return { s: i, n: function() { return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] } }, e: function(t) { throw t }, f: i }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, n, o = !0,
        a = !1;
    return { s: function() { r = t[Symbol.iterator]() }, n: function() { var t = r.next(); return o = t.done, t }, e: function(t) { a = !0, n = t }, f: function() { try { o || null == r.return || r.return() } finally { if (a) throw n } } }
}

function _defineProperty(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }

function _toConsumableArray(t) { return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread() }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

function _unsupportedIterableToArray(t, e) { if (t) { if ("string" == typeof t) return _arrayLikeToArray(t, e); var i = Object.prototype.toString.call(t).slice(8, -1); return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0 } }

function _iterableToArray(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }

function _arrayWithoutHoles(t) { if (Array.isArray(t)) return _arrayLikeToArray(t) }

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
    return r
}

function asyncGeneratorStep(t, e, i, r, n, o, a) {
    try {
        var s = t[o](a),
            c = s.value
    } catch (l) { return void i(l) }
    s.done ? e(c) : Promise.resolve(c).then(r, n)
}

function _asyncToGenerator(t) {
    return function() {
        var e = this,
            i = arguments;
        return new Promise((function(r, n) {
            var o = t.apply(e, i);

            function a(t) { asyncGeneratorStep(o, r, n, a, s, "next", t) }

            function s(t) { asyncGeneratorStep(o, r, n, a, s, "throw", t) }
            a(void 0)
        }))
    }
}

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
}

function _createClass(t, e, i) { return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t }(window.webpackJsonp = window.webpackJsonp || []).push([
    [36], {
        Z1Jy: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, "ion_datetime", (function() { return J })), i.d(e, "ion_picker", (function() { return K })), i.d(e, "ion_picker_column", (function() { return et }));
            var r = i("Wbmy"),
                n = i("8XIS"),
                o = i("pM1R"),
                a = i("LTBd"),
                s = (i("uk6j"), i("2Szf")),
                c = i("KwJk"),
                l = i("fzvj"),
                d = function(t, e, i, r) { if (t !== _ && t !== I) { if (t === H) return void 0 !== i && void 0 !== i.hour ? i.hour < 12 ? "AM" : "PM" : e ? e.toUpperCase() : ""; if (t === N) return void 0 !== i && void 0 !== i.hour ? i.hour < 12 ? "am" : "pm" : e || ""; if (null == e) return ""; if (t === C || t === T || t === z || t === P || t === Y || t === E) return w(e); if (t === M) return O(e); if (t === S) return (r.monthNames ? r.monthNames : R)[e - 1]; if (t === D) return (r.monthShortNames ? r.monthShortNames : L)[e - 1]; if (t === A || t === F) { if (0 === e) return "12"; if (e > 12 && (e -= 12), t === A && e < 10) return "0" + e } return e.toString() } try { return e = new Date(i.year, i.month - 1, i.day).getDay(), t === _ ? (r.dayNames ? r.dayNames : V)[e] : (r.dayShortNames ? r.dayShortNames : B)[e] } catch (n) {} },
                h = function(t, e, i) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    return parseInt("1".concat(O(t)).concat(w(e)).concat(w(i)).concat(w(r)).concat(w(n)), 10)
                },
                p = function(t) { return h(t.year, t.month, t.day, t.hour, t.minute) },
                u = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
                f = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
                m = function(t) { var e = null; if (null != t && "" !== t && ((e = f.exec(t)) ? (e.unshift(void 0, void 0), e[2] = e[3] = void 0) : e = u.exec(t)), null !== e) { for (var i = 1; i < 8; i++) e[i] = void 0 !== e[i] ? parseInt(e[i], 10) : void 0; var r = 0; return e[9] && e[10] && (r = 60 * parseInt(e[10], 10), e[11] && (r += parseInt(e[11], 10)), "-" === e[9] && (r *= -1)), { year: e[1], month: e[2], day: e[3], hour: e[4], minute: e[5], second: e[6], millisecond: e[7], tzOffset: r } } },
                g = function(t, e) {
                    var i = new Date(t.toLocaleString("en-US", { timeZone: "utc" })),
                        r = new Date(t.toLocaleString("en-US", { timeZone: e }));
                    return i.getTime() - r.getTime()
                },
                b = function(t, e) { return e === H || e === N ? t.hour < 12 ? "am" : "pm" : e === A || e === F ? t.hour > 12 ? t.hour - 12 : 0 === t.hour ? 12 : t.hour : t[v(e)] },
                v = function(t) {
                    for (var e in W)
                        if (W[e].f === t) return W[e].k
                },
                k = function(t) { var e = ""; return void 0 !== t.year ? (e = O(t.year), void 0 !== t.month && (e += "-" + w(t.month), void 0 !== t.day && (e += "-" + w(t.day), void 0 !== t.hour && (e += "T".concat(w(t.hour), ":").concat(w(t.minute), ":").concat(w(t.second)), t.millisecond > 0 && (e += "." + j(t.millisecond)), e += void 0 === t.tzOffset ? "Z" : (t.tzOffset > 0 ? "+" : "-") + w(Math.floor(Math.abs(t.tzOffset / 60))) + ":" + w(t.tzOffset % 60))))) : void 0 !== t.hour && (e = w(t.hour) + ":" + w(t.minute), void 0 !== t.second && (e += ":" + w(t.second), void 0 !== t.millisecond && (e += "." + j(t.millisecond)))), e },
                y = function(t, e) { var i; if (null != t) return "string" == typeof t && (t = t.replace(/\[|\]/g, "").split(",")), Array.isArray(t) && (i = t.map((function(t) { return t.toString().trim() }))), void 0 !== i && 0 !== i.length || console.warn('Invalid "'.concat(e, 'Names". Must be an array of strings, or a comma separated string.')), i },
                x = function(t, e) { var i; return "string" == typeof t && (t = t.replace(/\[|\]|\s/g, "").split(",")), 0 === (i = Array.isArray(t) ? t.map((function(t) { return parseInt(t, 10) })).filter(isFinite) : [t]).length && console.warn('Invalid "'.concat(e, 'Values". Must be an array of numbers, or a comma separated string of numbers.')), i },
                w = function(t) { return ("0" + (void 0 !== t ? Math.abs(t) : "0")).slice(-2) },
                j = function(t) { return ("00" + (void 0 !== t ? Math.abs(t) : "0")).slice(-3) },
                O = function(t) { return ("000" + (void 0 !== t ? Math.abs(t) : "0")).slice(-4) },
                M = "YYYY",
                C = "YY",
                S = "MMMM",
                D = "MMM",
                T = "MM",
                _ = "DDDD",
                I = "DDD",
                z = "DD",
                P = "HH",
                A = "hh",
                F = "h",
                Y = "mm",
                E = "ss",
                H = "A",
                N = "a",
                W = [{ f: M, k: "year" }, { f: S, k: "month" }, { f: _, k: "day" }, { f: D, k: "month" }, { f: I, k: "day" }, { f: C, k: "year" }, { f: T, k: "month" }, { f: z, k: "day" }, { f: P, k: "hour" }, { f: A, k: "hour" }, { f: Y, k: "minute" }, { f: E, k: "second" }, { f: "M", k: "month" }, { f: "D", k: "day" }, { f: "H", k: "hour" }, { f: F, k: "hour" }, { f: "m", k: "minute" }, { f: "s", k: "second" }, { f: H, k: "ampm" }, { f: N, k: "ampm" }],
                V = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                B = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                R = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                L = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                G = [A, F, Y, "m", E, "s"],
                J = function() {
                    function t(e) {
                        var i = this;
                        _classCallCheck(this, t), Object(r.l)(this, e), this.inputId = "ion-dt-".concat(U++), this.locale = {}, this.datetimeMin = {}, this.datetimeMax = {}, this.datetimeValue = {}, this.isExpanded = !1, this.name = this.inputId, this.disabled = !1, this.readonly = !1, this.displayFormat = "MMM D, YYYY", this.cancelText = "Cancel", this.doneText = "Done", this.onClick = function() { i.setFocus(), i.open() }, this.onFocus = function() { i.ionFocus.emit() }, this.onBlur = function() { i.ionBlur.emit() }, this.ionCancel = Object(r.f)(this, "ionCancel", 7), this.ionChange = Object(r.f)(this, "ionChange", 7), this.ionFocus = Object(r.f)(this, "ionFocus", 7), this.ionBlur = Object(r.f)(this, "ionBlur", 7), this.ionStyle = Object(r.f)(this, "ionStyle", 7)
                    }
                    var e;
                    return _createClass(t, [{ key: "disabledChanged", value: function() { this.emitStyle() } }, { key: "valueChanged", value: function() { this.updateDatetimeValue(this.value), this.emitStyle(), this.ionChange.emit({ value: this.value }) } }, { key: "componentWillLoad", value: function() { this.locale = { monthNames: y(this.monthNames, "monthNames"), monthShortNames: y(this.monthShortNames, "monthShortNames"), dayNames: y(this.dayNames, "dayNames"), dayShortNames: y(this.dayShortNames, "dayShortNames") }, this.updateDatetimeValue(this.value), this.emitStyle() } }, {
                        key: "open",
                        value: (e = _asyncToGenerator(regeneratorRuntime.mark((function t() {
                            var e, i, r = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.disabled && !this.isExpanded) { t.next = 2; break }
                                        return t.abrupt("return");
                                    case 2:
                                        return e = this.generatePickerOptions(), t.next = 5, s.m.create(e);
                                    case 5:
                                        return i = t.sent, this.isExpanded = !0, i.onDidDismiss().then((function() { r.isExpanded = !1, r.setFocus() })), i.addEventListener("ionPickerColChange", function() {
                                            var t = _asyncToGenerator(regeneratorRuntime.mark((function t(e) {
                                                var n, o;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            n = e.detail, (o = {})[n.name] = { value: n.options[n.selectedIndex].value }, r.updateDatetimeValue(o), i.columns = r.generateColumns();
                                                        case 2:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) { return t.apply(this, arguments) }
                                        }()), t.next = 11, i.present();
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() { return e.apply(this, arguments) })
                    }, { key: "emitStyle", value: function() { this.ionStyle.emit({ interactive: !0, datetime: !0, "has-placeholder": null != this.placeholder, "has-value": this.hasValue(), "interactive-disabled": this.disabled }) } }, {
                        key: "updateDatetimeValue",
                        value: function(t) {
                            var e = this;
                            ! function(t, i, r) {
                                if (!i || "string" == typeof i) {
                                    var n = function() {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                        null == t && (t = ""), 10 !== t.length && 7 !== t.length || (t += " ");
                                        var i = "string" == typeof t && t.length > 0 ? new Date(t) : new Date,
                                            r = new Date(Date.UTC(i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds()));
                                        return e && e.length > 0 ? new Date(i.getTime() - g(r, e)) : r
                                    }(i, e.displayTimezone);
                                    Number.isNaN(n.getTime()) || (i = n.toISOString())
                                }
                                if (i && "" !== i) {
                                    if ("string" == typeof i) { if (i = m(i)) return Object.assign(t, i), !0 } else {
                                        if (i.year || i.hour || i.month || i.day || i.minute || i.second) {
                                            i.ampm && i.hour && (i.hour.value = "pm" === i.ampm.value ? 12 === i.hour.value ? 12 : i.hour.value + 12 : 12 === i.hour.value ? 0 : i.hour.value);
                                            for (var o = 0, a = Object.keys(i); o < a.length; o++) {
                                                var s = a[o];
                                                t[s] = i[s].value
                                            }
                                            return !0
                                        }
                                        if (i.ampm) return i.hour = { value: i.hour ? i.hour.value : "pm" === i.ampm.value ? t.hour < 12 ? t.hour + 12 : t.hour : t.hour >= 12 ? t.hour - 12 : t.hour }, t.hour = i.hour.value, !0
                                    }
                                    console.warn('Error parsing date: "'.concat(i, '". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime'))
                                } else
                                    for (var c in t) t.hasOwnProperty(c) && delete t[c]
                            }(this.datetimeValue, t)
                        }
                    }, {
                        key: "generatePickerOptions",
                        value: function() {
                            var t = this,
                                e = Object(n.b)(this),
                                i = Object.assign(Object.assign({ mode: e }, this.pickerOptions), { columns: this.generateColumns() }),
                                r = i.buttons;
                            return r && 0 !== r.length || (i.buttons = [{ text: this.cancelText, role: "cancel", handler: function() { t.updateDatetimeValue(t.value), t.ionCancel.emit() } }, {
                                text: this.doneText,
                                handler: function(e) {
                                    t.updateDatetimeValue(e);
                                    var i = new Date(k(t.datetimeValue));
                                    t.datetimeValue.tzOffset = void 0 !== t.displayTimezone && t.displayTimezone.length > 0 ? g(i, t.displayTimezone) / 1e3 / 60 * -1 : -1 * i.getTimezoneOffset(), t.value = k(t.datetimeValue)
                                }
                            }]), i
                        }
                    }, {
                        key: "generateColumns",
                        value: function() {
                            var t = this,
                                e = this.pickerFormat || this.displayFormat || q;
                            if (0 === e.length) return [];
                            this.calcMinMax(), -1 === (e = e.replace("DDDD", "{~}").replace("DDD", "{~}")).indexOf("D") && (e = e.replace("{~}", "D"));
                            var i = function(t) {
                                    var e = [];
                                    t = t.replace(/[^\w\s]/gi, " "), W.forEach((function(e) { e.f.length > 1 && t.indexOf(e.f) > -1 && t.indexOf(e.f + e.f.charAt(0)) < 0 && (t = t.replace(e.f, " " + e.f + " ")) }));
                                    var i = t.split(" ").filter((function(t) { return t.length > 0 }));
                                    return i.forEach((function(t, r) {
                                        W.forEach((function(n) {
                                            if (t === n.f) {
                                                if ((t === H || t === N) && (e.indexOf(F) < 0 && e.indexOf(A) < 0 || -1 === G.indexOf(i[r - 1]))) return;
                                                e.push(t)
                                            }
                                        }))
                                    })), e
                                }(e = e.replace(/{~}/g, "")).map((function(e) {
                                    var i = v(e),
                                        r = (t[i + "Values"] ? x(t[i + "Values"], i) : function(t, e, i) {
                                            var r = [];
                                            if (t === M || t === C) { if (void 0 === i.year || void 0 === e.year) throw new Error("min and max year is undefined"); for (var n = i.year; n >= e.year; n--) r.push(n) } else if (t === S || t === D || t === T || "M" === t || t === A || t === F)
                                                for (var o = 1; o < 13; o++) r.push(o);
                                            else if (t === _ || t === I || t === z || "D" === t)
                                                for (var a = 1; a < 32; a++) r.push(a);
                                            else if (t === P || "H" === t)
                                                for (var s = 0; s < 24; s++) r.push(s);
                                            else if (t === Y || "m" === t)
                                                for (var c = 0; c < 60; c++) r.push(c);
                                            else if (t === E || "s" === t)
                                                for (var l = 0; l < 60; l++) r.push(l);
                                            else t !== H && t !== N || r.push("am", "pm");
                                            return r
                                        }(e, t.datetimeMin, t.datetimeMax)).map((function(i) { return { value: i, text: d(e, i, void 0, t.locale) } })),
                                        n = function(e, i) { var r = b(t.datetimeValue, i); if (void 0 !== r) return r; var n = m((new Date).toISOString()); return b(n, i) }(0, e),
                                        o = r.findIndex((function(t) { return t.value === n }));
                                    return { name: i, selectedIndex: o >= 0 ? o : 0, options: r }
                                })),
                                r = this.datetimeMin,
                                n = this.datetimeMax;
                            return ["month", "day", "hour", "minute"].filter((function(t) { return !i.find((function(e) { return e.name === t })) })).forEach((function(t) { r[t] = 0, n[t] = 0 })), this.validateColumns(Z(i))
                        }
                    }, {
                        key: "validateColumns",
                        value: function(t) {
                            var e = new Date,
                                i = p(this.datetimeMin),
                                r = p(this.datetimeMax),
                                n = t.find((function(t) { return "year" === t.name })),
                                o = e.getFullYear();
                            if (n) {
                                n.options.find((function(t) { return t.value === e.getFullYear() })) || (o = n.options[0].value);
                                var a = n.selectedIndex;
                                if (void 0 !== a) {
                                    var s = n.options[a];
                                    s && (o = s.value)
                                }
                            }
                            var c, l, d = this.validateColumn(t, "month", 1, i, r, [o, 0, 0, 0, 0], [o, 12, 31, 23, 59]),
                                h = 4 === (l = d) || 6 === l || 9 === l || 11 === l ? 30 : 2 === l ? (c = o) % 4 == 0 && c % 100 != 0 || c % 400 == 0 ? 29 : 28 : 31,
                                u = this.validateColumn(t, "day", 2, i, r, [o, d, 0, 0, 0], [o, d, h, 23, 59]),
                                f = this.validateColumn(t, "hour", 3, i, r, [o, d, u, 0, 0], [o, d, u, 23, 59]);
                            return this.validateColumn(t, "minute", 4, i, r, [o, d, u, f, 0], [o, d, u, f, 59]), t
                        }
                    }, {
                        key: "calcMinMax",
                        value: function() {
                            var t = (new Date).getFullYear();
                            if (void 0 !== this.yearValues) {
                                var e = x(this.yearValues, "year");
                                void 0 === this.min && (this.min = Math.min.apply(Math, _toConsumableArray(e)).toString()), void 0 === this.max && (this.max = Math.max.apply(Math, _toConsumableArray(e)).toString())
                            } else void 0 === this.min && (this.min = (t - 100).toString()), void 0 === this.max && (this.max = t.toString());
                            var i = this.datetimeMin = m(this.min),
                                r = this.datetimeMax = m(this.max);
                            i.year = i.year || t, r.year = r.year || t, i.month = i.month || 1, r.month = r.month || 12, i.day = i.day || 1, r.day = r.day || 31, i.hour = i.hour || 0, r.hour = void 0 === r.hour ? 23 : r.hour, i.minute = i.minute || 0, r.minute = void 0 === r.minute ? 59 : r.minute, i.second = i.second || 0, r.second = void 0 === r.second ? 59 : r.second, i.year > r.year && (console.error("min.year > max.year"), i.year = r.year - 100), i.year === r.year && (i.month > r.month ? (console.error("min.month > max.month"), i.month = 1) : i.month === r.month && i.day > r.day && (console.error("min.day > max.day"), i.day = 1))
                        }
                    }, {
                        key: "validateColumn",
                        value: function(t, e, i, r, n, a, s) {
                            var c = t.find((function(t) { return t.name === e }));
                            if (!c) return 0;
                            for (var l = a.slice(), d = s.slice(), p = c.options, u = p.length - 1, f = 0, m = 0; m < p.length; m++) {
                                var g = p[m],
                                    b = g.value;
                                l[i] = g.value, d[i] = g.value, (g.disabled = b < a[i] || b > s[i] || h(d[0], d[1], d[2], d[3], d[4]) < r || h(l[0], l[1], l[2], l[3], l[4]) > n) || (u = Math.min(u, m), f = Math.max(f, m))
                            }
                            var v = c.selectedIndex = Object(o.c)(u, c.selectedIndex, f),
                                k = c.options[v];
                            return k ? k.value : 0
                        }
                    }, { key: "hasValue", value: function() { return void 0 !== this.text } }, { key: "setFocus", value: function() { this.buttonEl && this.buttonEl.focus() } }, {
                        key: "render",
                        value: function() {
                            var t, e = this,
                                i = this.inputId,
                                a = this.text,
                                s = this.disabled,
                                l = this.readonly,
                                d = this.isExpanded,
                                h = this.el,
                                p = this.placeholder,
                                u = Object(n.b)(this),
                                f = i + "-lbl",
                                m = Object(o.f)(h),
                                g = void 0 === a && null != p,
                                b = void 0 === a ? null != p ? p : "" : a;
                            return m && (m.id = f), Object(o.a)(!0, h, this.name, this.value, this.disabled), Object(r.j)(r.b, { onClick: this.onClick, role: "combobox", "aria-disabled": s ? "true" : null, "aria-expanded": "".concat(d), "aria-haspopup": "true", "aria-labelledby": f, class: (t = {}, _defineProperty(t, u, !0), _defineProperty(t, "datetime-disabled", s), _defineProperty(t, "datetime-readonly", l), _defineProperty(t, "datetime-placeholder", g), _defineProperty(t, "in-item", Object(c.c)("ion-item", h)), t) }, Object(r.j)("div", { class: "datetime-text" }, b), Object(r.j)("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: function(t) { return e.buttonEl = t } }))
                        }
                    }, {
                        key: "text",
                        get: function() {
                            if (null != this.value && 0 !== this.value.length) return function(t, e, i) {
                                if (void 0 !== e) {
                                    var r = [],
                                        n = !1;
                                    if (W.forEach((function(o, a) {
                                            if (t.indexOf(o.f) > -1) {
                                                var s = "{" + a + "}",
                                                    c = d(o.f, e[o.k], e, i);
                                                n || void 0 === c || null == e[o.k] || (n = !0), r.push(s, c || ""), t = t.replace(o.f, s)
                                            }
                                        })), n) { for (var o = 0; o < r.length; o += 2) t = t.replace(r[o], r[o + 1]); return t }
                                }
                            }(this.displayFormat || this.pickerFormat || q, this.datetimeValue, this.locale)
                        }
                    }, { key: "el", get: function() { return Object(r.g)(this) } }], [{ key: "watchers", get: function() { return { disabled: ["disabledChanged"], value: ["valueChanged"] } } }]), t
                }(),
                Z = function(t) {
                    for (var e, i, r = [], n = 0; n < t.length; n++) {
                        e = t[n], r.push(0);
                        var o, a = _createForOfIteratorHelper(e.options);
                        try {
                            for (a.s(); !(o = a.n()).done;) {
                                (i = o.value.text.length) > r[n] && (r[n] = i)
                            }
                        } catch (s) { a.e(s) } finally { a.f() }
                    }
                    return 2 === r.length ? (i = Math.max(r[0], r[1]), t[0].align = "right", t[1].align = "left", t[0].optionsWidth = t[1].optionsWidth = "".concat(17 * i, "px")) : 3 === r.length && (i = Math.max(r[0], r[2]), t[0].align = "right", t[1].columnWidth = "".concat(17 * r[1], "px"), t[0].optionsWidth = t[2].optionsWidth = "".concat(17 * i, "px"), t[2].align = "left"), t
                },
                q = "MMM D, YYYY",
                U = 0;
            J.style = { ios: ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}", md: ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}" };
            var $ = function(t) {
                    var e = Object(a.a)(),
                        i = Object(a.a)(),
                        r = Object(a.a)();
                    return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({ "pointer-events": "none" }).afterClearStyles(["pointer-events"]), r.addElement(t.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)"), e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i, r])
                },
                X = function(t) {
                    var e = Object(a.a)(),
                        i = Object(a.a)(),
                        r = Object(a.a)();
                    return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", .01), r.addElement(t.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)"), e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i, r])
                },
                K = function() {
                    function t(e) {
                        var i = this;
                        _classCallCheck(this, t), Object(r.l)(this, e), this.presented = !1, this.keyboardClose = !0, this.buttons = [], this.columns = [], this.duration = 0, this.showBackdrop = !0, this.backdropDismiss = !0, this.animated = !0, this.onBackdropTap = function() { i.dismiss(void 0, s.a) }, this.dispatchCancelHandler = function(t) {
                            var e = t.detail.role;
                            if (Object(s.j)(e)) {
                                var r = i.buttons.find((function(t) { return "cancel" === t.role }));
                                i.callButtonHandler(r)
                            }
                        }, Object(s.e)(this.el), this.didPresent = Object(r.f)(this, "ionPickerDidPresent", 7), this.willPresent = Object(r.f)(this, "ionPickerWillPresent", 7), this.willDismiss = Object(r.f)(this, "ionPickerWillDismiss", 7), this.didDismiss = Object(r.f)(this, "ionPickerDidDismiss", 7)
                    }
                    var e, i, o;
                    return _createClass(t, [{
                        key: "present",
                        value: (o = _asyncToGenerator(regeneratorRuntime.mark((function t() {
                            var e = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(s.f)(this, "pickerEnter", $, $, void 0);
                                    case 2:
                                        this.duration > 0 && (this.durationTimeout = setTimeout((function() { return e.dismiss() }), this.duration));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() { return o.apply(this, arguments) })
                    }, { key: "dismiss", value: function(t, e) { return this.durationTimeout && clearTimeout(this.durationTimeout), Object(s.g)(this, t, e, "pickerLeave", X, X) } }, { key: "onDidDismiss", value: function() { return Object(s.h)(this.el, "ionPickerDidDismiss") } }, { key: "onWillDismiss", value: function() { return Object(s.h)(this.el, "ionPickerWillDismiss") } }, { key: "getColumn", value: function(t) { return Promise.resolve(this.columns.find((function(e) { return e.name === t }))) } }, {
                        key: "buttonClick",
                        value: (i = _asyncToGenerator(regeneratorRuntime.mark((function t(e) {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.role, !Object(s.j)(i)) { t.next = 5; break }
                                        t.t0 = this.dismiss(void 0, i), t.next = 13;
                                        break;
                                    case 5:
                                        return t.next = 7, this.callButtonHandler(e);
                                    case 7:
                                        if (!t.sent) { t.next = 11; break }
                                        t.t1 = this.dismiss(this.getSelected(), e.role), t.next = 12;
                                        break;
                                    case 11:
                                        t.t1 = Promise.resolve();
                                    case 12:
                                        t.t0 = t.t1;
                                    case 13:
                                        return t.abrupt("return", t.t0);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) { return i.apply(this, arguments) })
                    }, {
                        key: "callButtonHandler",
                        value: (e = _asyncToGenerator(regeneratorRuntime.mark((function t(e) {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.t0 = !e, t.t0) { t.next = 7; break }
                                        return t.t1 = !1, t.next = 5, Object(s.n)(e.handler, this.getSelected());
                                    case 5:
                                        t.t2 = t.sent, t.t0 = t.t1 !== t.t2;
                                    case 7:
                                        return t.abrupt("return", t.t0);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) { return e.apply(this, arguments) })
                    }, {
                        key: "getSelected",
                        value: function() {
                            var t = {};
                            return this.columns.forEach((function(e, i) {
                                var r = void 0 !== e.selectedIndex ? e.options[e.selectedIndex] : void 0;
                                t[e.name] = { text: r ? r.text : void 0, value: r ? r.value : void 0, columnIndex: i }
                            })), t
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this,
                                i = Object(n.b)(this);
                            return Object(r.j)(r.b, { "aria-modal": "true", class: Object.assign((t = {}, _defineProperty(t, i, !0), _defineProperty(t, "picker-".concat(i), !0), t), Object(c.b)(this.cssClass)), style: { zIndex: "".concat(2e4 + this.overlayIndex) }, onIonBackdropTap: this.onBackdropTap, onIonPickerWillDismiss: this.dispatchCancelHandler }, Object(r.j)("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(r.j)("div", { class: "picker-wrapper", role: "dialog" }, Object(r.j)("div", { class: "picker-toolbar" }, this.buttons.map((function(t) { return Object(r.j)("div", { class: Q(t) }, Object(r.j)("button", { type: "button", onClick: function() { return e.buttonClick(t) }, class: tt(t) }, t.text)) }))), Object(r.j)("div", { class: "picker-columns" }, Object(r.j)("div", { class: "picker-above-highlight" }), this.presented && this.columns.map((function(t) { return Object(r.j)("ion-picker-column", { col: t }) })), Object(r.j)("div", { class: "picker-below-highlight" }))))
                        }
                    }, { key: "el", get: function() { return Object(r.g)(this) } }]), t
                }(),
                Q = function(t) { var e; return _defineProperty(e = {}, "picker-toolbar-".concat(t.role), void 0 !== t.role), _defineProperty(e, "picker-toolbar-button", !0), e },
                tt = function(t) { return Object.assign({ "picker-button": !0, "ion-activatable": !0 }, Object(c.b)(t.cssClass)) };
            K.style = { ios: ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3666b0);font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}", md: ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3666b0);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}" };
            var et = function() {
                    function t(e) { _classCallCheck(this, t), Object(r.l)(this, e), this.optHeight = 0, this.rotateFactor = 0, this.scaleFactor = 1, this.velocity = 0, this.y = 0, this.noAnimate = !0, this.ionPickerColChange = Object(r.f)(this, "ionPickerColChange", 7) }
                    var e;
                    return _createClass(t, [{ key: "colChanged", value: function() { this.refresh() } }, {
                        key: "connectedCallback",
                        value: (e = _asyncToGenerator(regeneratorRuntime.mark((function t() {
                            var e, r, o = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = 0, r = .81, "ios" === Object(n.b)(this) && (e = -.46, r = 1), this.rotateFactor = e, this.scaleFactor = r, t.next = 6, Promise.resolve().then(i.bind(null, "t265"));
                                    case 6:
                                        this.gesture = t.sent.createGesture({ el: this.el, gestureName: "picker-swipe", gesturePriority: 100, threshold: 0, onStart: function(t) { return o.onStart(t) }, onMove: function(t) { return o.onMove(t) }, onEnd: function(t) { return o.onEnd(t) } }), this.gesture.enable(), this.tmrId = setTimeout((function() { o.noAnimate = !1, o.refresh(!0) }), 250);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function() { return e.apply(this, arguments) })
                    }, {
                        key: "componentDidLoad",
                        value: function() {
                            var t = this.optsEl;
                            t && (this.optHeight = t.firstElementChild ? t.firstElementChild.clientHeight : 0), this.refresh()
                        }
                    }, { key: "disconnectedCallback", value: function() { cancelAnimationFrame(this.rafId), clearTimeout(this.tmrId), this.gesture && (this.gesture.destroy(), this.gesture = void 0) } }, { key: "emitColChange", value: function() { this.ionPickerColChange.emit(this.col) } }, {
                        key: "setSelected",
                        value: function(t, e) {
                            var i = t > -1 ? -t * this.optHeight : 0;
                            this.velocity = 0, cancelAnimationFrame(this.rafId), this.update(i, e, !0), this.emitColChange()
                        }
                    }, {
                        key: "update",
                        value: function(t, e, i) {
                            if (this.optsEl) {
                                for (var r = 0, n = 0, o = this.col, a = this.rotateFactor, s = o.selectedIndex = this.indexForY(-t), c = 0 === e ? "" : e + "ms", d = "scale(".concat(this.scaleFactor, ")"), h = this.optsEl.children, p = 0; p < h.length; p++) {
                                    var u = h[p],
                                        f = o.options[p],
                                        m = p * this.optHeight + t,
                                        g = "";
                                    if (0 !== a) {
                                        var b = m * a;
                                        Math.abs(b) <= 90 ? (r = 0, n = 90, g = "rotateX(".concat(b, "deg) ")) : r = -9999
                                    } else n = 0, r = m;
                                    var v = s === p;
                                    g += "translate3d(0px,".concat(r, "px,").concat(n, "px) "), 1 === this.scaleFactor || v || (g += d), this.noAnimate ? (f.duration = 0, u.style.transitionDuration = "") : e !== f.duration && (f.duration = e, u.style.transitionDuration = c), g !== f.transform && (f.transform = g, u.style.transform = g), v !== f.selected && (f.selected = v, v ? u.classList.add(it) : u.classList.remove(it))
                                }
                                this.col.prevSelected = s, i && (this.y = t), this.lastIndex !== s && (Object(l.b)(), this.lastIndex = s)
                            }
                        }
                    }, {
                        key: "decelerate",
                        value: function() {
                            var t = this;
                            if (0 !== this.velocity) {
                                this.velocity *= rt, this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
                                var e = this.y + this.velocity;
                                e > this.minY ? (e = this.minY, this.velocity = 0) : e < this.maxY && (e = this.maxY, this.velocity = 0), this.update(e, 0, !0), Math.round(e) % this.optHeight != 0 || Math.abs(this.velocity) > 1 ? this.rafId = requestAnimationFrame((function() { return t.decelerate() })) : (this.velocity = 0, this.emitColChange())
                            } else if (this.y % this.optHeight != 0) {
                                var i = Math.abs(this.y % this.optHeight);
                                this.velocity = i > this.optHeight / 2 ? 1 : -1, this.decelerate()
                            }
                        }
                    }, { key: "indexForY", value: function(t) { return Math.min(Math.max(Math.abs(Math.round(t / this.optHeight)), 0), this.col.options.length - 1) } }, {
                        key: "onStart",
                        value: function(t) {
                            t.event.preventDefault(), t.event.stopPropagation(), cancelAnimationFrame(this.rafId);
                            for (var e = this.col.options, i = e.length - 1, r = 0, n = 0; n < e.length; n++) e[n].disabled || (i = Math.min(i, n), r = Math.max(r, n));
                            this.minY = -i * this.optHeight, this.maxY = -r * this.optHeight
                        }
                    }, {
                        key: "onMove",
                        value: function(t) {
                            t.event.preventDefault(), t.event.stopPropagation();
                            var e = this.y + t.deltaY;
                            e > this.minY ? (e = Math.pow(e, .8), this.bounceFrom = e) : e < this.maxY ? (e += Math.pow(this.maxY - e, .9), this.bounceFrom = e) : this.bounceFrom = 0, this.update(e, 0, !1)
                        }
                    }, {
                        key: "onEnd",
                        value: function(t) {
                            if (this.bounceFrom > 0) return this.update(this.minY, 100, !0), void this.emitColChange();
                            if (this.bounceFrom < 0) return this.update(this.maxY, 100, !0), void this.emitColChange();
                            if (this.velocity = Object(o.c)(-nt, 23 * t.velocityY, nt), 0 === this.velocity && 0 === t.deltaY) {
                                var e = t.event.target.closest(".picker-opt");
                                e && e.hasAttribute("opt-index") && this.setSelected(parseInt(e.getAttribute("opt-index"), 10), ot)
                            } else {
                                if (this.y += t.deltaY, Math.abs(t.velocityY) < .05) {
                                    var i = t.deltaY > 0,
                                        r = Math.abs(this.y) % this.optHeight / this.optHeight;
                                    i && r > .5 ? this.velocity = -1 * Math.abs(this.velocity) : !i && r <= .5 && (this.velocity = Math.abs(this.velocity))
                                }
                                this.decelerate()
                            }
                        }
                    }, {
                        key: "refresh",
                        value: function(t) {
                            for (var e = this.col.options.length - 1, i = 0, r = this.col.options, n = 0; n < r.length; n++) r[n].disabled || (e = Math.min(e, n), i = Math.max(i, n));
                            if (0 === this.velocity) {
                                var a = Object(o.c)(e, this.col.selectedIndex || 0, i);
                                if (this.col.prevSelected !== a || t) {
                                    var s = a * this.optHeight * -1;
                                    this.velocity = 0, this.update(s, ot, !0)
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t, e = this,
                                i = this.col,
                                o = Object(n.b)(this);
                            return Object(r.j)(r.b, { class: (t = {}, _defineProperty(t, o, !0), _defineProperty(t, "picker-col", !0), _defineProperty(t, "picker-opts-left", "left" === this.col.align), _defineProperty(t, "picker-opts-right", "right" === this.col.align), t), style: { "max-width": this.col.columnWidth } }, i.prefix && Object(r.j)("div", { class: "picker-prefix", style: { width: i.prefixWidth } }, i.prefix), Object(r.j)("div", { class: "picker-opts", style: { maxWidth: i.optionsWidth }, ref: function(t) { return e.optsEl = t } }, i.options.map((function(t, e) { return Object(r.j)("button", { type: "button", class: { "picker-opt": !0, "picker-opt-disabled": !!t.disabled }, "opt-index": e }, t.text) }))), i.suffix && Object(r.j)("div", { class: "picker-suffix", style: { width: i.suffixWidth } }, i.suffix))
                        }
                    }, { key: "el", get: function() { return Object(r.g)(this) } }], [{ key: "watchers", get: function() { return { col: ["colChanged"] } } }]), t
                }(),
                it = "picker-opt-selected",
                rt = .97,
                nt = 90,
                ot = 150;
            et.style = { ios: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}", md: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3666b0)}" }
        }
    }
]);