function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActive4927a4c1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./haptic-27b3f981.js */
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */


    var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index-f49d994d.js */
    "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegate4392cd63Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });
    /* harmony import */


    var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./helpers-dd7e4b7b.js */
    "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/agm-overlays/fesm2015/agm-overlays.js":
  /*!************************************************************!*\
    !*** ./node_modules/agm-overlays/fesm2015/agm-overlays.js ***!
    \************************************************************/

  /*! exports provided: AgmOverlay, AgmOverlays */

  /***/
  function node_modulesAgmOverlaysFesm2015AgmOverlaysJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmOverlay", function () {
      return AgmOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgmOverlays", function () {
      return AgmOverlays;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AgmOverlay = /*#__PURE__*/function () {
      function AgmOverlay(_mapsWrapper, _markerManager //rename to fight the private declaration of parent
      ) {
        _classCallCheck(this, AgmOverlay);

        this._mapsWrapper = _mapsWrapper;
        this._markerManager = _markerManager;
        this.visible = true; //possibly doesn't work and just left over from agm-core marker replication

        this.zIndex = 1; //TIP: Do NOT use this... Just put (click) on your html overlay element

        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openInfoWindow = true;
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"](); //TODO, implement this

        this.draggable = false; //elmGuts:any

        this._observableSubscriptions = [];
      }

      _createClass(AgmOverlay, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          //remove reference of info windows
          var iWins = this.template.nativeElement.getElementsByTagName('agm-info-window');

          for (var x = iWins.length - 1; x >= 0; --x) {
            iWins[x].parentNode.removeChild(iWins[x]);
          }

          this.load().then(function () {
            _this.onChanges = _this.onChangesOverride;
          });
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          this.infoWindow.changes.subscribe(function () {
            return _this2.handleInfoWindowUpdate();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.onChanges(changes);
        }
      }, {
        key: "onChanges",
        value: function onChanges(changes) {}
      }, {
        key: "onChangesOverride",
        value: function onChangesOverride(changes) {
          var _this3 = this;

          if (changes.latitude || changes.longitude || changes.zIndex) {
            this.overlayView.latitude = this.latitude;
            this.overlayView.longitude = this.longitude;
            this.overlayView.zIndex = this.zIndex;
            this.destroy().then(function () {
              return _this3.load();
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.destroyed = true;

          var promise = this._markerManager.deleteMarker(this.overlayView);

          if (this.overlayView) {
            if (this.overlayView.div) {
              this.overlayView.remove();
            }

            this.overlayView.setMap(null);
          }

          this._observableSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });

          delete this.overlayView; //delete this.elmGuts

          return promise;
        }
      }, {
        key: "handleInfoWindowUpdate",
        value: function handleInfoWindowUpdate() {
          var _this4 = this;

          if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
          }

          this.infoWindow.forEach(function (iWin) {
            iWin.hostMarker = _this4.overlayView;
          });
        }
      }, {
        key: "load",
        value: function load() {
          var _this5 = this;

          return this._mapsWrapper.getNativeMap().then(function (map) {
            var overlay = _this5.getOverlay(map);

            _this5._markerManager.addMarker(overlay);

            _this5._addEventListeners();

            return _this5._markerManager.getNativeMarker(overlay);
          }).then(function (nativeMarker) {
            var setMap = nativeMarker.setMap;

            if (nativeMarker['map']) {
              _this5.overlayView.setMap(nativeMarker['map']);
            }

            nativeMarker.setMap = function (map) {
              setMap.call(nativeMarker, map);

              if (_this5.overlayView) {
                _this5.overlayView.setMap(map);
              }
            };
          });
        }
      }, {
        key: "getOverlay",
        value: function getOverlay(map) {
          var _this6 = this;

          this.overlayView = this.overlayView || new google.maps.OverlayView();
          /* make into foo marker that AGM likes */

          this.overlayView.iconUrl = " ";
          this.overlayView.latitude = this.latitude;
          this.overlayView.longitude = this.longitude;
          this.overlayView.visible = false; //hide 40x40 transparent placeholder that prevents hover events

          /* end */

          if (this.bounds) {
            this.overlayView.bounds_ = new google.maps.LatLngBounds(new google.maps.LatLng(this.latitude + this.bounds.x.latitude, this.longitude + this.bounds.x.longitude), new google.maps.LatLng(this.latitude + this.bounds.y.latitude, this.longitude + this.bounds.y.longitude));
          } // js-marker-clusterer does not support updating positions. We are forced to delete/add and compensate for .removeChild calls


          var elm = this.template.nativeElement.children[0]; //const elm =  this.elmGuts || this.template.nativeElement.children[0]
          //we must always be sure to steal our stolen element back incase we are just in middle of changes and will redraw

          var restore = function restore(div) {
            _this6.template.nativeElement.appendChild(div);
          };

          this.overlayView.remove = function () {
            if (!this.div) return;
            this.div.parentNode.removeChild(this.div);
            restore(this.div);
            delete this.div;
          };

          this.overlayView.getDiv = function () {
            return this.div;
          };

          this.overlayView.draw = function () {
            if (!this.div) {
              this.div = elm;
              var panes = this.getPanes(); // if no panes then assumed not on map

              if (!panes || !panes.overlayImage) return;
              panes.overlayImage.appendChild(elm);
            }

            var latlng = new google.maps.LatLng(this.latitude, this.longitude);
            var proj = this.getProjection();
            if (!proj) return;
            var point = proj.fromLatLngToDivPixel(latlng);

            if (point) {
              elm.style.left = point.x - 10 + 'px';
              elm.style.top = point.y - 20 + 'px';
            }

            if (this.bounds_) {
              // stretch content between two points leftbottom and righttop and resize
              var _proj = this.getProjection();

              var sw = _proj.fromLatLngToDivPixel(this.bounds_.getSouthWest());

              var ne = _proj.fromLatLngToDivPixel(this.bounds_.getNorthEast());

              this.div.style.left = sw.x + 'px';
              this.div.style.top = ne.y + 'px';
              this.div.children[0].style.width = ne.x - sw.x + 'px';
              this.div.children[0].style.height = sw.y - ne.y + 'px';
            }
          };

          elm.addEventListener("click", function (event) {
            _this6.handleTap();

            event.stopPropagation();
          });
          this.handleInfoWindowUpdate();
          return this.overlayView;
        }
      }, {
        key: "handleTap",
        value: function handleTap() {
          if (this.openInfoWindow) {
            this.infoWindow.forEach(function (infoWindow) {
              infoWindow.open();
            });
          }

          this.markerClick.emit(null);
        }
      }, {
        key: "_addEventListeners",
        value: function _addEventListeners() {
          var _this7 = this;

          var eo = this._markerManager.createEventObservable('click', this.overlayView);

          var cs = eo.subscribe(function () {
            return _this7.handleTap();
          });

          this._observableSubscriptions.push(cs);
        }
      }]);

      return AgmOverlay;
    }();

    AgmOverlay.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"] //rename to fight the private declaration of parent

      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgmOverlay.prototype, "latitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgmOverlay.prototype, "longitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgmOverlay.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgmOverlay.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgmOverlay.prototype, "bounds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AgmOverlay.prototype, "markerClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AgmOverlay.prototype, "openInfoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"])], AgmOverlay.prototype, "infoWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable')], AgmOverlay.prototype, "draggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], AgmOverlay.prototype, "template", void 0);
    AgmOverlay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "agm-overlay",
      template: '<div #content><div style="position:absolute"><ng-content></ng-content></div></div>'
    })], AgmOverlay);

    var AgmOverlays = function AgmOverlays() {
      _classCallCheck(this, AgmOverlays);
    };

    AgmOverlays = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [AgmOverlay],
      exports: [AgmOverlay]
    })], AgmOverlays);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=agm-overlays.js.map

    /***/
  },

  /***/
  "./src/app/services/appointment.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/appointment.service.ts ***!
    \*************************************************/

  /*! exports provided: AppointmentService */

  /***/
  function srcAppServicesAppointmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentService", function () {
      return AppointmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");

    var AppointmentService = /*#__PURE__*/function () {
      function AppointmentService(firebaseAuthService) {
        _classCallCheck(this, AppointmentService);

        this.firebaseAuthService = firebaseAuthService;
      }

      _createClass(AppointmentService, [{
        key: "getAppointment",
        value: function getAppointment(appointmentID) {
          return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointments').child(appointmentID);
        }
      }, {
        key: "updateAppointment",
        value: function updateAppointment(appointmentID, appointmentObj) {
          return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointments').child(appointmentID).update(appointmentObj);
        }
      }, {
        key: "getAppointments",
        value: function getAppointments() {
          return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointments/').orderByChild("userID").equalTo(this.firebaseAuthService.usersign.uid);
        }
      }, {
        key: "postAppointment",
        value: function postAppointment(appointmentObj) {
          var key = this.firebaseAuthService.usersign.uid + "_" + Date.now();
          firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('/Appointments/' + key).set(appointmentObj);
        }
      }, {
        key: "getApps",
        value: function getApps(user) {
          return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Users/' + user);
        }
      }, {
        key: "addApp",
        value: function addApp(app) {
          console.log(app);
          var key = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Apps').push(app).key;
          firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Users/' + app.user + '/' + key).set(app);
        }
      }, {
        key: "editapp",
        value: function editapp(app) {
          //console.log(app);
          firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Apps/' + app.appkey + '/').set(app);
          firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Users/' + app.user + '/' + app.appkey).set(app);
        }
      }]);

      return AppointmentService;
    }();

    AppointmentService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppointmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AppointmentService);
    /***/
  },

  /***/
  "./src/app/services/reward.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/reward.service.ts ***!
    \********************************************/

  /*! exports provided: RewardService */

  /***/
  function srcAppServicesRewardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardService", function () {
      return RewardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.esm.js");

    var RewardService = /*#__PURE__*/function () {
      function RewardService() {
        _classCallCheck(this, RewardService);
      }

      _createClass(RewardService, [{
        key: "addReward",
        value: function addReward(reward) {
          console.log(reward);
          var key = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards').push(reward).key;
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + key).set(reward.task);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + key).set(reward);
        }
      }, {
        key: "getRewards",
        value: function getRewards(user) {
          return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + user);
        }
      }, {
        key: "editReward",
        value: function editReward(reward) {
          console.log(reward);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards/' + reward.rewardkey).set(reward);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + reward.rewardkey).set(reward.task);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + reward.rewardkey).set(reward);
        }
      }, {
        key: "addTask",
        value: function addTask() {}
      }, {
        key: "removeTask",
        value: function removeTask(reward) {
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards/' + reward.rewardkey + '/task').set(reward.task);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + reward.rewardkey).set(reward.task);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + reward.rewardkey).set(reward);
        }
      }, {
        key: "edittask",
        value: function edittask(reward, task, i) {
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards/' + reward.rewardkey + '/task/' + i).set(task);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + reward.rewardkey + '/' + i).set(task);
          firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + reward.rewardkey + '/task/' + i).set(task);
        }
      }]);

      return RewardService;
    }();

    RewardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RewardService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map