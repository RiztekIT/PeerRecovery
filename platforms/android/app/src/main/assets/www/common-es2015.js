(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/agm-overlays/fesm2015/agm-overlays.js":
/*!************************************************************!*\
  !*** ./node_modules/agm-overlays/fesm2015/agm-overlays.js ***!
  \************************************************************/
/*! exports provided: AgmOverlay, AgmOverlays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmOverlay", function() { return AgmOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmOverlays", function() { return AgmOverlays; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AgmOverlay = class AgmOverlay {
    constructor(_mapsWrapper, _markerManager //rename to fight the private declaration of parent
    ) {
        this._mapsWrapper = _mapsWrapper;
        this._markerManager = _markerManager;
        this.visible = true; //possibly doesn't work and just left over from agm-core marker replication
        this.zIndex = 1;
        //TIP: Do NOT use this... Just put (click) on your html overlay element
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openInfoWindow = true;
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        //TODO, implement this
        this.draggable = false;
        //elmGuts:any
        this._observableSubscriptions = [];
    }
    ngAfterViewInit() {
        //remove reference of info windows
        const iWins = this.template.nativeElement.getElementsByTagName('agm-info-window');
        for (let x = iWins.length - 1; x >= 0; --x) {
            iWins[x].parentNode.removeChild(iWins[x]);
        }
        this.load().then(() => {
            this.onChanges = this.onChangesOverride;
        });
    }
    ngAfterContentInit() {
        this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    ngOnChanges(changes) {
        this.onChanges(changes);
    }
    onChanges(changes) { }
    onChangesOverride(changes) {
        if (changes.latitude || changes.longitude || changes.zIndex) {
            this.overlayView.latitude = this.latitude;
            this.overlayView.longitude = this.longitude;
            this.overlayView.zIndex = this.zIndex;
            this.destroy().then(() => this.load());
        }
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        this.destroyed = true;
        const promise = this._markerManager.deleteMarker(this.overlayView);
        if (this.overlayView) {
            if (this.overlayView.div) {
                this.overlayView.remove();
            }
            this.overlayView.setMap(null);
        }
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        delete this.overlayView;
        //delete this.elmGuts
        return promise;
    }
    handleInfoWindowUpdate() {
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(iWin => {
            iWin.hostMarker = this.overlayView;
        });
    }
    load() {
        return this._mapsWrapper.getNativeMap()
            .then(map => {
            const overlay = this.getOverlay(map);
            this._markerManager.addMarker(overlay);
            this._addEventListeners();
            return this._markerManager.getNativeMarker(overlay);
        })
            .then(nativeMarker => {
            const setMap = nativeMarker.setMap;
            if (nativeMarker['map']) {
                this.overlayView.setMap(nativeMarker['map']);
            }
            nativeMarker.setMap = (map) => {
                setMap.call(nativeMarker, map);
                if (this.overlayView) {
                    this.overlayView.setMap(map);
                }
            };
        });
    }
    getOverlay(map) {
        this.overlayView = this.overlayView || new google.maps.OverlayView();
        /* make into foo marker that AGM likes */
        this.overlayView.iconUrl = " ";
        this.overlayView.latitude = this.latitude;
        this.overlayView.longitude = this.longitude;
        this.overlayView.visible = false; //hide 40x40 transparent placeholder that prevents hover events
        /* end */
        if (this.bounds) {
            this.overlayView.bounds_ = new google.maps.LatLngBounds(new google.maps.LatLng(this.latitude + this.bounds.x.latitude, this.longitude + this.bounds.x.longitude), new google.maps.LatLng(this.latitude + this.bounds.y.latitude, this.longitude + this.bounds.y.longitude));
        }
        // js-marker-clusterer does not support updating positions. We are forced to delete/add and compensate for .removeChild calls
        const elm = this.template.nativeElement.children[0];
        //const elm =  this.elmGuts || this.template.nativeElement.children[0]
        //we must always be sure to steal our stolen element back incase we are just in middle of changes and will redraw
        const restore = (div) => {
            this.template.nativeElement.appendChild(div);
        };
        this.overlayView.remove = function () {
            if (!this.div)
                return;
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
                const panes = this.getPanes();
                // if no panes then assumed not on map
                if (!panes || !panes.overlayImage)
                    return;
                panes.overlayImage.appendChild(elm);
            }
            const latlng = new google.maps.LatLng(this.latitude, this.longitude);
            const proj = this.getProjection();
            if (!proj)
                return;
            const point = proj.fromLatLngToDivPixel(latlng);
            if (point) {
                elm.style.left = (point.x - 10) + 'px';
                elm.style.top = (point.y - 20) + 'px';
            }
            if (this.bounds_) {
                // stretch content between two points leftbottom and righttop and resize
                const proj = this.getProjection();
                const sw = proj.fromLatLngToDivPixel(this.bounds_.getSouthWest());
                const ne = proj.fromLatLngToDivPixel(this.bounds_.getNorthEast());
                this.div.style.left = sw.x + 'px';
                this.div.style.top = ne.y + 'px';
                this.div.children[0].style.width = ne.x - sw.x + 'px';
                this.div.children[0].style.height = sw.y - ne.y + 'px';
            }
        };
        elm.addEventListener("click", event => {
            this.handleTap();
            event.stopPropagation();
        });
        this.handleInfoWindowUpdate();
        return this.overlayView;
    }
    handleTap() {
        if (this.openInfoWindow) {
            this.infoWindow.forEach(infoWindow => {
                infoWindow.open();
            });
        }
        this.markerClick.emit(null);
    }
    _addEventListeners() {
        const eo = this._markerManager.createEventObservable('click', this.overlayView);
        const cs = eo.subscribe(() => this.handleTap());
        this._observableSubscriptions.push(cs);
    }
};
AgmOverlay.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"] //rename to fight the private declaration of parent
     }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgmOverlay.prototype, "latitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgmOverlay.prototype, "longitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgmOverlay.prototype, "visible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgmOverlay.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgmOverlay.prototype, "bounds", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgmOverlay.prototype, "markerClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgmOverlay.prototype, "openInfoWindow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmInfoWindow"])
], AgmOverlay.prototype, "infoWindow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable')
], AgmOverlay.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], AgmOverlay.prototype, "template", void 0);
AgmOverlay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "agm-overlay",
        template: '<div #content><div style="position:absolute"><ng-content></ng-content></div></div>'
    })
], AgmOverlay);

let AgmOverlays = class AgmOverlays {
};
AgmOverlays = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        declarations: [AgmOverlay],
        exports: [AgmOverlay],
    })
], AgmOverlays);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=agm-overlays.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/panics/panics.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/panics/panics.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar mode=\"md\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\" icon=\"chevron-back-outline\" text=\"\" mode=\"md\"></ion-back-button>\n        </ion-buttons>\n        <!--   <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons> -->\n        <ion-title>Users</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"today_div\">\n        <!--   <ion-fab-button *ngIf=\"llamando\" (click)=\"resVideoCall()\" d class=\"call-green\">\n        \n        <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-fab-button> -->\n        <!--         <ion-item *ngFor=\"let item of users\" lines=\"full\" (click)=\"startCamera()\" mode=\"md\"> -->\n        <ion-item *ngFor=\"let item of Users\" lines=\"full\" (click)=\"closeModal(item)\" mode=\"md\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"item?.photoUrl\">\n            </ion-avatar>\n            <ion-label>\n                <h3 class=\"name\">{{item?.displayName}}</h3>\n                <p class=\"detail\">{{item?.email}}</p>\n            </ion-label>\n        </ion-item>\n\n\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tracking/panics/panics-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tracking/panics/panics-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PanicsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicsPageRoutingModule", function() { return PanicsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _panics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panics.page */ "./src/app/pages/tracking/panics/panics.page.ts");




const routes = [
    {
        path: '',
        component: _panics_page__WEBPACK_IMPORTED_MODULE_3__["PanicsPage"]
    }
];
let PanicsPageRoutingModule = class PanicsPageRoutingModule {
};
PanicsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PanicsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tracking/panics/panics.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tracking/panics/panics.module.ts ***!
  \********************************************************/
/*! exports provided: PanicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicsPageModule", function() { return PanicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _panics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panics-routing.module */ "./src/app/pages/tracking/panics/panics-routing.module.ts");
/* harmony import */ var _panics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panics.page */ "./src/app/pages/tracking/panics/panics.page.ts");







let PanicsPageModule = class PanicsPageModule {
};
PanicsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _panics_routing_module__WEBPACK_IMPORTED_MODULE_5__["PanicsPageRoutingModule"]
        ],
        declarations: [_panics_page__WEBPACK_IMPORTED_MODULE_6__["PanicsPage"]]
    })
], PanicsPageModule);



/***/ }),

/***/ "./src/app/pages/tracking/panics/panics.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tracking/panics/panics.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWNraW5nL3Bhbmljcy9wYW5pY3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/tracking/panics/panics.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tracking/panics/panics.page.ts ***!
  \******************************************************/
/*! exports provided: PanicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicsPage", function() { return PanicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tracking.service */ "./src/app/services/tracking.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let PanicsPage = class PanicsPage {
    constructor(trackingSVC, router, modalController, navParams) {
        this.trackingSVC = trackingSVC;
        this.router = router;
        this.modalController = modalController;
        this.navParams = navParams;
        this.Users = [];
    }
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        this.getUser();
    }
    getUser() {
        /* console.log(this.user); */
        this.trackingSVC.getUsers().on('value', resp => {
            this.Users = [];
            let c = 0;
            resp.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                /* item.selected = true; */
                if (item.key != this.user.uid) {
                    console.log(item);
                    console.log(this.user);
                    this.trackingSVC.getRel(this.user, item.key).once('value', (resp) => {
                        console.log(resp);
                        console.log(resp.val());
                        item.selected = resp.val();
                        if (resp.val()) {
                            this.Users.push(item);
                        }
                    });
                }
            });
            //this.selected = this.Users
            console.log(this.Users);
        });
    }
    selectUser(item) {
        console.log(item);
        this.trackingSVC.panicselectUser = item;
    }
    closeModal(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const onClosedData = JSON.stringify(item);
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
PanicsPage.ctorParameters = () => [
    { type: src_app_services_tracking_service__WEBPACK_IMPORTED_MODULE_3__["TrackingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
PanicsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/panics/panics.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panics.page.scss */ "./src/app/pages/tracking/panics/panics.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tracking_service__WEBPACK_IMPORTED_MODULE_3__["TrackingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])
], PanicsPage);



/***/ }),

/***/ "./src/app/services/appointment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");




let AppointmentService = class AppointmentService {
    constructor(firebaseAuthService) {
        this.firebaseAuthService = firebaseAuthService;
    }
    getAppointment(appointmentID) {
        return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointments').child(appointmentID);
    }
    updateAppointment(appointmentID, appointmentObj) {
        return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database()
            .ref('Appointments')
            .child(appointmentID)
            .update(appointmentObj);
    }
    getAppointments() {
        return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database()
            .ref('Appointments/')
            .orderByChild("userID")
            .equalTo(this.firebaseAuthService.usersign.uid);
    }
    postAppointment(appointmentObj) {
        var key = this.firebaseAuthService.usersign.uid + "_" + Date.now();
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('/Appointments/' + key).set(appointmentObj);
    }
    getApps(user) {
        return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Users/' + user);
    }
    addApp(app) {
        console.log(app);
        let key = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Apps').push(app).key;
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Users/' + app.user + '/' + key).set(app);
    }
    editapp(app) {
        //console.log(app);
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Apps/' + app.appkey + '/').set(app);
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('Appointment/Users/' + app.user + '/' + app.appkey).set(app);
    }
};
AppointmentService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppointmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppointmentService);



/***/ }),

/***/ "./src/app/services/reward.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/reward.service.ts ***!
  \********************************************/
/*! exports provided: RewardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardService", function() { return RewardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");



let RewardService = class RewardService {
    constructor() { }
    addReward(reward) {
        console.log(reward);
        let key = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards').push(reward).key;
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + key).set(reward.task);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + key).set(reward);
    }
    getRewards(user) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + user);
    }
    editReward(reward) {
        console.log(reward);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards/' + reward.rewardkey).set(reward);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + reward.rewardkey).set(reward.task);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + reward.rewardkey).set(reward);
    }
    addTask() {
    }
    removeTask(reward) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards/' + reward.rewardkey + '/task').set(reward.task);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + reward.rewardkey).set(reward.task);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + reward.rewardkey).set(reward);
    }
    edittask(reward, task, i) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Rewards/' + reward.rewardkey + '/task/' + i).set(task);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Tasks/' + reward.rewardkey + '/' + i).set(task);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Rewards/Users/' + reward.user + '/' + reward.rewardkey + '/task/' + i).set(task);
    }
};
RewardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RewardService);



/***/ }),

/***/ "./src/app/services/tracking.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/tracking.service.ts ***!
  \**********************************************/
/*! exports provided: TrackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingService", function() { return TrackingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");



let TrackingService = class TrackingService {
    constructor() { }
    updateLocation(lat, lng, user) {
        let location = {
            lat: lat,
            lng: lng,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.Timestamp.fromDate(new Date()),
        };
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Current').set(location);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Historic').push(location);
    }
    getLocation(user) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Current');
    }
    getHistoric(user) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/' + user.uid + '/Historic');
    }
    getUser(uid) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Users/' + uid);
    }
    getPanic(uid) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Tracking/Panic/' + uid);
    }
    getUsers() {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Users');
    }
    getRel(user, key) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Relations/' + user.uid + '/' + key);
    }
};
TrackingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrackingService);



/***/ }),

/***/ "./src/app/services/videocall.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/videocall.service.ts ***!
  \***********************************************/
/*! exports provided: VideocallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocallService", function() { return VideocallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");




let VideocallService = class VideocallService {
    constructor(storage) {
        this.storage = storage;
    }
    getUsers() {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Users');
    }
    getRel(user, key) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Relations/' + user.uid + '/' + key);
    }
    newcall(user, usercall) {
        let video = {
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.Timestamp.fromDate(new Date()),
            channel: '',
            state: true
        };
        let key = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/').push(video).key;
        video.channel = key;
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key).set(video);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/Members/' + user.uid).set(true);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/Members/' + usercall.uid).set(false);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + user.uid + '/' + key).set(usercall.uid);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + usercall.uid + '/' + key).set(user.uid);
        this.keycall = key;
    }
    getCall(key) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key);
    }
    hangup(user, key) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/Members/' + user.uid).set(false);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/state').set(false);
    }
    reconnect(user, key) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/Members/' + user.uid).set(true);
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/state').set(true);
    }
    answerccall(user, key) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + key + '/Members/' + user.uid).set(true);
    }
    getCalls(user) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('VideosCall/VideosCall/' + user.uid);
    }
    getUser(key) {
        return firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref('Users/' + key);
    }
    downloadvideo(key) {
        let storage = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage();
        let pathReference = storage.ref('Videos/' + key);
        return pathReference;
    }
    tareaCloudStorage(nombreArchivo, datos) {
        return this.storage.upload('Videos/' + nombreArchivo, datos);
    }
};
VideocallService.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
VideocallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
], VideocallService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map