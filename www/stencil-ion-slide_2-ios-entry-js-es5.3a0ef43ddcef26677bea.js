function _slicedToArray(e, i) { return _arrayWithHoles(e) || _iterableToArrayLimit(e, i) || _unsupportedIterableToArray(e, i) || _nonIterableRest() }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }

function _unsupportedIterableToArray(e, i) { if (e) { if ("string" == typeof e) return _arrayLikeToArray(e, i); var t = Object.prototype.toString.call(e).slice(8, -1); return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, i) : void 0 } }

function _arrayLikeToArray(e, i) {
    (null == i || i > e.length) && (i = e.length);
    for (var t = 0, r = new Array(i); t < i; t++) r[t] = e[t];
    return r
}

function _iterableToArrayLimit(e, i) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var t = [],
            r = !0,
            n = !1,
            a = void 0;
        try { for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (t.push(o.value), !i || t.length !== i); r = !0); } catch (p) { n = !0, a = p } finally { try { r || null == s.return || s.return() } finally { if (n) throw a } }
        return t
    }
}

function _arrayWithHoles(e) { if (Array.isArray(e)) return e }

function asyncGeneratorStep(e, i, t, r, n, a, o) {
    try {
        var s = e[a](o),
            p = s.value
    } catch (l) { return void t(l) }
    s.done ? i(p) : Promise.resolve(p).then(r, n)
}

function _asyncToGenerator(e) {
    return function() {
        var i = this,
            t = arguments;
        return new Promise((function(r, n) {
            var a = e.apply(i, t);

            function o(e) { asyncGeneratorStep(a, r, n, o, s, "next", e) }

            function s(e) { asyncGeneratorStep(a, r, n, o, s, "throw", e) }
            o(void 0)
        }))
    }
}

function _defineProperty(e, i, t) { return i in e ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = t, e }

function _classCallCheck(e, i) { if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function") }

function _defineProperties(e, i) {
    for (var t = 0; t < i.length; t++) {
        var r = i[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, i, t) { return i && _defineProperties(e.prototype, i), t && _defineProperties(e, t), e }(window.webpackJsonp = window.webpackJsonp || []).push([
    [76], {
        "F/Xn": function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, "ion_slide", (function() { return a })), t.d(i, "ion_slides", (function() { return o }));
            var r = t("Wbmy"),
                n = t("8XIS"),
                a = function() {
                    function e(i) { _classCallCheck(this, e), Object(r.l)(this, i) }
                    return _createClass(e, [{ key: "render", value: function() { var e, i = Object(n.b)(this); return Object(r.j)(r.b, { class: (e = {}, _defineProperty(e, i, !0), _defineProperty(e, "swiper-slide", !0), _defineProperty(e, "swiper-zoom-container", !0), e) }) } }]), e
                }();
            a.style = "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";
            var o = function() {
                    function e(i) {
                        var t = this;
                        _classCallCheck(this, e), Object(r.l)(this, i), this.swiperReady = !1, this.swiper = new Promise((function(e) { t.readySwiper = e })), this.options = {}, this.pager = !1, this.scrollbar = !1, this.ionSlidesDidLoad = Object(r.f)(this, "ionSlidesDidLoad", 7), this.ionSlideTap = Object(r.f)(this, "ionSlideTap", 7), this.ionSlideDoubleTap = Object(r.f)(this, "ionSlideDoubleTap", 7), this.ionSlideWillChange = Object(r.f)(this, "ionSlideWillChange", 7), this.ionSlideDidChange = Object(r.f)(this, "ionSlideDidChange", 7), this.ionSlideNextStart = Object(r.f)(this, "ionSlideNextStart", 7), this.ionSlidePrevStart = Object(r.f)(this, "ionSlidePrevStart", 7), this.ionSlideNextEnd = Object(r.f)(this, "ionSlideNextEnd", 7), this.ionSlidePrevEnd = Object(r.f)(this, "ionSlidePrevEnd", 7), this.ionSlideTransitionStart = Object(r.f)(this, "ionSlideTransitionStart", 7), this.ionSlideTransitionEnd = Object(r.f)(this, "ionSlideTransitionEnd", 7), this.ionSlideDrag = Object(r.f)(this, "ionSlideDrag", 7), this.ionSlideReachStart = Object(r.f)(this, "ionSlideReachStart", 7), this.ionSlideReachEnd = Object(r.f)(this, "ionSlideReachEnd", 7), this.ionSlideTouchStart = Object(r.f)(this, "ionSlideTouchStart", 7), this.ionSlideTouchEnd = Object(r.f)(this, "ionSlideTouchEnd", 7)
                    }
                    var i, a, o, p, l, c, w, d, g, b, u, f, m, h, k, v, x, y, C;
                    return _createClass(e, [{
                        key: "optionsChanged",
                        value: (C = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            var i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.swiperReady) { e.next = 7; break }
                                        return e.next = 3, this.getSwiper();
                                    case 3:
                                        return i = e.sent, Object.assign(i.params, this.options), e.next = 7, this.update();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return C.apply(this, arguments) })
                    }, { key: "connectedCallback", value: function() { var e = this; "undefined" != typeof MutationObserver && ((this.mutationO = new MutationObserver((function() { e.swiperReady && e.update() }))).observe(this.el, { childList: !0, subtree: !0 }), this.el.componentOnReady().then((function() { return e.initSwiper() }))) } }, {
                        key: "disconnectedCallback",
                        value: (y = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            var i = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.mutationO && (this.mutationO.disconnect(), this.mutationO = void 0), e.next = 3, this.getSwiper();
                                    case 3:
                                        e.sent.destroy(!0, !0), this.swiper = new Promise((function(e) { i.readySwiper = e })), this.swiperReady = !1;
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return y.apply(this, arguments) })
                    }, {
                        key: "update",
                        value: (x = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            var i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([this.getSwiper(), s(this.el)]);
                                    case 2:
                                        i = e.sent, _slicedToArray(i, 1)[0].update();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return x.apply(this, arguments) })
                    }, {
                        key: "updateAutoHeight",
                        value: (v = _asyncToGenerator(regeneratorRuntime.mark((function e(i) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        e.sent.updateAutoHeight(i);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) { return v.apply(this, arguments) })
                    }, {
                        key: "slideTo",
                        value: (k = _asyncToGenerator(regeneratorRuntime.mark((function e(i, t, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        e.sent.slideTo(i, t, r);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, i, t) { return k.apply(this, arguments) })
                    }, {
                        key: "slideNext",
                        value: (h = _asyncToGenerator(regeneratorRuntime.mark((function e(i, t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        e.sent.slideNext(i, t);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, i) { return h.apply(this, arguments) })
                    }, {
                        key: "slidePrev",
                        value: (m = _asyncToGenerator(regeneratorRuntime.mark((function e(i, t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        e.sent.slidePrev(i, t);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, i) { return m.apply(this, arguments) })
                    }, {
                        key: "getActiveIndex",
                        value: (f = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        return e.abrupt("return", e.sent.activeIndex);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return f.apply(this, arguments) })
                    }, {
                        key: "getPreviousIndex",
                        value: (u = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        return e.abrupt("return", e.sent.previousIndex);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return u.apply(this, arguments) })
                    }, {
                        key: "length",
                        value: (b = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        return e.abrupt("return", e.sent.slides.length);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return b.apply(this, arguments) })
                    }, {
                        key: "isEnd",
                        value: (g = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        return e.abrupt("return", e.sent.isEnd);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return g.apply(this, arguments) })
                    }, {
                        key: "isBeginning",
                        value: (d = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        return e.abrupt("return", e.sent.isBeginning);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return d.apply(this, arguments) })
                    }, {
                        key: "startAutoplay",
                        value: (w = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            var i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        (i = e.sent).autoplay && i.autoplay.start();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return w.apply(this, arguments) })
                    }, {
                        key: "stopAutoplay",
                        value: (c = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            var i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        (i = e.sent).autoplay && i.autoplay.stop();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return c.apply(this, arguments) })
                    }, {
                        key: "lockSwipeToNext",
                        value: (l = _asyncToGenerator(regeneratorRuntime.mark((function e(i) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        e.sent.allowSlideNext = !i;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) { return l.apply(this, arguments) })
                    }, {
                        key: "lockSwipeToPrev",
                        value: (p = _asyncToGenerator(regeneratorRuntime.mark((function e(i) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        e.sent.allowSlidePrev = !i;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) { return p.apply(this, arguments) })
                    }, {
                        key: "lockSwipes",
                        value: (o = _asyncToGenerator(regeneratorRuntime.mark((function e(i) {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getSwiper();
                                    case 2:
                                        (t = e.sent).allowSlideNext = !i, t.allowSlidePrev = !i, t.allowTouchMove = !i;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) { return o.apply(this, arguments) })
                    }, {
                        key: "getSwiper",
                        value: (a = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.swiper);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return a.apply(this, arguments) })
                    }, {
                        key: "initSwiper",
                        value: (i = _asyncToGenerator(regeneratorRuntime.mark((function e() {
                            var i, r, n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = this.normalizeOptions(), e.next = 3, t.e(10).then(t.bind(null, "4ItX"));
                                    case 3:
                                        return r = e.sent, n = r.Swiper, e.next = 7, s(this.el);
                                    case 7:
                                        a = new n(this.el, i), this.swiperReady = !0, this.readySwiper(a);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() { return i.apply(this, arguments) })
                    }, {
                        key: "normalizeOptions",
                        value: function() {
                            var e = this,
                                i = { effect: void 0, direction: "horizontal", initialSlide: 0, loop: !1, parallax: !1, slidesPerView: 1, spaceBetween: 0, speed: 300, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, touchEventsTarget: "container", autoplay: !1, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, zoom: { maxRatio: 3, minRatio: 1, toggle: !1 }, touchRatio: 1, touchAngle: 45, simulateTouch: !0, touchStartPreventDefault: !1, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, loopAdditionalSlides: 0, noSwiping: !0, runCallbacksOnInit: !0, coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flipEffect: { slideShadows: !0, limitRotation: !0 }, cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fadeEffect: { crossfade: !1 }, a11y: { prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide" } };
                            this.pager && (i.pagination = { el: this.paginationEl, type: "bullets", clickable: !1, hideOnClick: !1 }), this.scrollbar && (i.scrollbar = { el: this.scrollbarEl, hide: !0 });
                            var t = { on: { init: function() { setTimeout((function() { e.ionSlidesDidLoad.emit() }), 20) }, slideChangeTransitionStart: this.ionSlideWillChange.emit, slideChangeTransitionEnd: this.ionSlideDidChange.emit, slideNextTransitionStart: this.ionSlideNextStart.emit, slidePrevTransitionStart: this.ionSlidePrevStart.emit, slideNextTransitionEnd: this.ionSlideNextEnd.emit, slidePrevTransitionEnd: this.ionSlidePrevEnd.emit, transitionStart: this.ionSlideTransitionStart.emit, transitionEnd: this.ionSlideTransitionEnd.emit, sliderMove: this.ionSlideDrag.emit, reachBeginning: this.ionSlideReachStart.emit, reachEnd: this.ionSlideReachEnd.emit, touchStart: this.ionSlideTouchStart.emit, touchEnd: this.ionSlideTouchEnd.emit, tap: this.ionSlideTap.emit, doubleTap: this.ionSlideDoubleTap.emit } },
                                r = { on: Object.assign(Object.assign({}, this.options && this.options.on ? this.options.on : {}), t.on) };
                            return Object.assign(Object.assign(Object.assign({}, i), this.options), r)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, i = this,
                                t = Object(n.b)(this);
                            return Object(r.j)(r.b, { class: (e = {}, _defineProperty(e, "".concat(t), !0), _defineProperty(e, "slides-".concat(t), !0), _defineProperty(e, "swiper-container", !0), e) }, Object(r.j)("div", { class: "swiper-wrapper" }, Object(r.j)("slot", null)), this.pager && Object(r.j)("div", { class: "swiper-pagination", ref: function(e) { return i.paginationEl = e } }), this.scrollbar && Object(r.j)("div", { class: "swiper-scrollbar", ref: function(e) { return i.scrollbarEl = e } }))
                        }
                    }, { key: "el", get: function() { return Object(r.g)(this) } }], [{ key: "assetsDirs", get: function() { return ["swiper"] } }, { key: "watchers", get: function() { return { options: ["optionsChanged"] } } }]), e
                }(),
                s = function(e) { return Promise.all(Array.from(e.querySelectorAll("ion-slide")).map((function(e) { return e.componentOnReady() }))) };
            o.style = { ios: ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical{height:100%}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px, 0, 0);transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height, -webkit-transform;transition-property:height, -webkit-transform;-o-transition-property:transform, height;transition-property:transform, height;transition-property:transform, height, -webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:0.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:300ms opacity;-o-transition:300ms opacity;transition:300ms opacity;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:0.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px, -50%, 0);transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:200ms top, 200ms -webkit-transform;transition:200ms top, 200ms -webkit-transform;-o-transition:200ms transform, 200ms top;transition:200ms transform, 200ms top;transition:200ms transform, 200ms top, 200ms -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms left, 200ms -webkit-transform;transition:200ms left, 200ms -webkit-transform;-o-transition:200ms transform, 200ms left;transition:200ms transform, 200ms left;transition:200ms transform, 200ms left, 200ms -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms right, 200ms -webkit-transform;transition:200ms right, 200ms -webkit-transform;-o-transition:200ms transform, 200ms right;transition:200ms transform, 200ms right;transition:200ms transform, 200ms right, 200ms -webkit-transform}.swiper-pagination-progressbar{background:rgba(0, 0, 0, 0.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progressbar,.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#ffffff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255, 255, 255, 0.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#ffffff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0, 0, 0, 0.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0, 0, 0, 0.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0, 0, 0, 0.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12, end) infinite;animation:swiper-preloader-spin 1s steps(12, end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:0.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-ios{--bullet-background:var(--ion-color-step-200, #cccccc);--bullet-background-active:var(--ion-color-primary, #3666b0);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}", md: ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical{height:100%}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px, 0, 0);transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height, -webkit-transform;transition-property:height, -webkit-transform;-o-transition-property:transform, height;transition-property:transform, height;transition-property:transform, height, -webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-wrapper,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));background-image:-webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:-o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:0.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:300ms opacity;-o-transition:300ms opacity;transition:300ms opacity;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-container-horizontal>.swiper-pagination-bullets{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(0.33);-ms-transform:scale(0.33);transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:0.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px, -50%, 0);transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:200ms top, 200ms -webkit-transform;transition:200ms top, 200ms -webkit-transform;-o-transition:200ms transform, 200ms top;transition:200ms transform, 200ms top;transition:200ms transform, 200ms top, 200ms -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms left, 200ms -webkit-transform;transition:200ms left, 200ms -webkit-transform;-o-transition:200ms transform, 200ms left;transition:200ms transform, 200ms left;transition:200ms transform, 200ms left, 200ms -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:200ms right, 200ms -webkit-transform;transition:200ms right, 200ms -webkit-transform;-o-transition:200ms transform, 200ms right;transition:200ms transform, 200ms right;transition:200ms transform, 200ms right, 200ms -webkit-transform}.swiper-pagination-progressbar{background:rgba(0, 0, 0, 0.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progressbar,.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#ffffff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255, 255, 255, 0.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#ffffff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0, 0, 0, 0.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0, 0, 0, 0.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0, 0, 0, 0.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12, end) infinite;animation:swiper-preloader-spin 1s steps(12, end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-prev,.swiper-container-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:0.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}ion-slides{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swiper-pagination-bullet{background:var(--bullet-background)}.swiper-pagination-bullet-active{background:var(--bullet-background-active)}.swiper-pagination-progressbar{background:var(--progress-bar-background)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--progress-bar-background-active)}.swiper-scrollbar{background:var(--scroll-bar-background)}.swiper-scrollbar-drag{background:var(--scroll-bar-background-active)}.slides-md{--bullet-background:var(--ion-color-step-200, #cccccc);--bullet-background-active:var(--ion-color-primary, #3666b0);--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}" }
        }
    }
]);