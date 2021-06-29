function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function asyncGeneratorStep(t,e,n,i,o,r,a){try{var s=t[r](a),d=s.value}catch(c){return void n(c)}s.done?e(d):Promise.resolve(d).then(i,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){asyncGeneratorStep(r,i,o,a,s,"next",t)}function s(t){asyncGeneratorStep(r,i,o,a,s,"throw",t)}a(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{kyFE:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return l})),n.d(e,"ion_menu_button",(function(){return g})),n.d(e,"ion_menu_toggle",(function(){return v}));var i=n("wEJo"),o=n("E/Mt"),r=n("bC4P"),a=n("y08P"),s=n("1vRN"),d=n("r7QR"),c=n("74mu");n("B4Jq"),n("meiF");var l=function(){function t(e){_classCallCheck(this,t),Object(i.o)(this,e),this.ionWillOpen=Object(i.g)(this,"ionWillOpen",7),this.ionWillClose=Object(i.g)(this,"ionWillClose",7),this.ionDidOpen=Object(i.g)(this,"ionDidOpen",7),this.ionDidClose=Object(i.g)(this,"ionDidClose",7),this.ionMenuChange=Object(i.g)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=a.a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}var e,c,l,f,g;return _createClass(t,[{key:"typeChanged",value:function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(s.m)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(g=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,i,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===this.type&&(this.type=o.c.get("menuType","overlay")),e=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),!(i=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))||!i.tagName){t.next=16;break}return this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),d.a._register(this),t.next=12,Promise.resolve().then(n.bind(null,"iWo5"));case 12:this.gesture=t.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:function(t){return r.canStart(t)},onWillStart:function(){return r.onWillStart()},onStart:function(){return r.onStart()},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}}),this.updateState(),t.next=17;break;case 16:console.error('Menu: must have a "content" element to listen for drag events on.');case 17:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})},{key:"componentDidLoad",value:(f=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 1:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),d.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,t)}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,t)}},{key:"setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return d.a._setOpen(this,t,e)}},{key:"_setOpen",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var n,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],t.t0=!this._isActive()||this.isAnimating||e===this._isOpen,t.t0){t.next=10;break}return this.beforeAnimation(e),t.next=6,this.loadAnimation();case 6:return t.next=8,this.startAnimation(e,n);case 8:this.afterAnimation(e),t.t0=0;case 10:return t.abrupt("return",!t.t0);case 11:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"loadAnimation",value:(c=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.menuInnerEl.offsetWidth,t.t0=e===this.width&&void 0!==this.animation,t.t0){t.next=10;break}return this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t.next=7,d.a._createAnimation(this.type,this);case 7:this.animation=t.sent,o.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"startAnimation",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n){var i,r,a,s,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=!e,r=Object(o.b)(this),a="ios"===r?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",s="ios"===r?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",d=this.animation.direction(i?"reverse":"normal").easing(i?s:a).onFinish((function(){"reverse"===d.getDirection()&&d.direction("normal")})),!n){t.next=6;break}return t.next=4,d.play();case 4:t.next=7;break;case 6:d.play({sync:!0});case 7:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!d.a._getOpenSync()&&h(window,t.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(s.l)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(t){if(this.isAnimating&&this.animation){var e=u(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else Object(s.l)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=u(t.deltaX,n,i),a=this.width,d=o/a,c=t.velocityX,l=a/2,h=c>=0&&(c>.2||t.deltaX>l),p=c<=0&&(c<-.2||t.deltaX<-l),m=n?i?h:p:i?p:h,b=!n&&m;n&&!m&&(b=!0),this.lastOnEnd=t.currentTime;var f=m?.001:-.001,g=d<0?.01:d;f+=Object(r.a)([0,0],[.4,0],[.6,1],[1,1],Object(s.j)(0,g,.9999))[0]||0;var v=this._isOpen?!m:m;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(b)}),{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-f:f,300)}else Object(s.l)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(t){Object(s.l)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(t){Object(s.l)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(b),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(b),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||d.a._setActiveMenu(this),Object(s.l)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(s.l)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var t,e=this,n=this.isEndSide,r=this.type,a=this.disabled,s=this.isPaneVisible,d=Object(o.b)(this);return Object(i.j)(i.c,{role:"navigation",class:(t={},_defineProperty(t,d,!0),_defineProperty(t,"menu-type-"+r,!0),_defineProperty(t,"menu-enabled",!a),_defineProperty(t,"menu-side-end",n),_defineProperty(t,"menu-side-start",!n),_defineProperty(t,"menu-pane-visible",s),t)},Object(i.j)("div",{class:"menu-inner",part:"container",ref:function(t){return e.menuInnerEl=t}},Object(i.j)("slot",null)),Object(i.j)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}},{key:"el",get:function(){return Object(i.k)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}}]),t}(),u=function(t,e,n){return Math.max(0,e!==n?-t:t)},h=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},p="show-menu",m="show-backdrop",b="menu-content-open";l.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var f=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get(e);case 2:if(n=t.sent,t.t0=!n,t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=!t.sent;case 8:return t.abrupt("return",!t.t0);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){function t(e){var n=this;_classCallCheck(this,t),Object(i.o)(this,e),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.a.toggle(n.menu));case 1:case"end":return t.stop()}}),t)})))}var e;return _createClass(t,[{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t,e=this.color,n=this.disabled,r=Object(o.b)(this),a=o.c.get("menuIcon","ios"===r?"menu-outline":"menu-sharp"),s=this.autoHide&&!this.visible,d={type:this.type};return Object(i.j)(i.c,{onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":s?"true":null,class:Object(c.a)(e,(t={},_defineProperty(t,r,!0),_defineProperty(t,"button",!0),_defineProperty(t,"menu-button-hidden",s),_defineProperty(t,"menu-button-disabled",n),_defineProperty(t,"in-toolbar",Object(c.c)("ion-toolbar",this.el)),_defineProperty(t,"in-toolbar-color",Object(c.c)("ion-toolbar[color]",this.el)),_defineProperty(t,"ion-activatable",!0),_defineProperty(t,"ion-focusable",!0),t))},Object(i.j)("button",Object.assign({},d,{disabled:n,class:"button-native",part:"native","aria-label":"menu"}),Object(i.j)("span",{class:"button-inner"},Object(i.j)("slot",null,Object(i.j)("ion-icon",{part:"icon",icon:a,mode:r,lazy:!1,"aria-hidden":"true"}))),"md"===r&&Object(i.j)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return Object(i.k)(this)}}]),t}();g.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var v=function(){function t(e){var n=this;_classCallCheck(this,t),Object(i.o)(this,e),this.visible=!1,this.autoHide=!0,this.onClick=function(){return d.a.toggle(n.menu)}}var e;return _createClass(t,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t,e=Object(o.b)(this),n=this.autoHide&&!this.visible;return Object(i.j)(i.c,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"menu-toggle-hidden",n),t)},Object(i.j)("slot",null))}}]),t}();v.style=":host(.menu-toggle-hidden){display:none}"}}]);