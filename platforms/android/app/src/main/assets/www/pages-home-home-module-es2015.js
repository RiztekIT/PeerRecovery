(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/FCM.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/FCM.js ***!
  \*****************************************************************************/
/*! exports provided: FCMPluginOnIonic, FCM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCMPluginOnIonic", function() { return FCMPluginOnIonic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCM", function() { return FCM; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/index.js");


function FCMPluginOnIonic() {}
FCMPluginOnIonic.prototype.clearAllNotifications = function () {
    return window.FCM.clearAllNotifications()
}
FCMPluginOnIonic.prototype.createNotificationChannel = function (channelConfig) {
    return window.FCM.createNotificationChannel(channelConfig)
}
FCMPluginOnIonic.prototype.deleteInstanceId = function () {
    return window.FCM.deleteInstanceId()
}
FCMPluginOnIonic.prototype.getAPNSToken = function () {
    return window.FCM.getAPNSToken()
}
FCMPluginOnIonic.prototype.getInitialPushPayload = function () {
    return window.FCM.getInitialPushPayload()
}
FCMPluginOnIonic.prototype.getToken = function () {
    return window.FCM.getToken()
}
FCMPluginOnIonic.prototype.hasPermission = function () {
    return window.FCM.hasPermission()
}
FCMPluginOnIonic.prototype.onNotification = function (options) {
    var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]()
    var handler = function (payload) {
        return observable.next(payload)
    }
    window.FCM.onNotification(handler, options)
    return observable
}
FCMPluginOnIonic.prototype.onTokenRefresh = function (options) {
    var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]()
    window.FCM.onTokenRefresh(function (token) {
        return observable.next(token)
    }, options)
    return observable
}
FCMPluginOnIonic.prototype.requestPushPermission = function (options) {
    return window.FCM.requestPushPermission(options)
}
FCMPluginOnIonic.prototype.subscribeToTopic = function (topic) {
    return window.FCM.subscribeToTopic(topic)
}
FCMPluginOnIonic.prototype.unsubscribeFromTopic = function (topic) {
    return window.FCM.unsubscribeFromTopic(topic)
}


var FCM = new FCMPluginOnIonic()


/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asap, asapScheduler, async, asyncScheduler, queue, queueScheduler, animationFrame, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, NotificationKind, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, partition, race, range, throwError, timer, using, zip, scheduled, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "async", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["asyncScheduler"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queueScheduler"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrameScheduler"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["NotificationKind"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/partition */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_observable_partition__WEBPACK_IMPORTED_MODULE_44__["partition"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_45__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_46__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_47__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_48__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_49__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_50__["zip"]; });

/* harmony import */ var _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./internal/scheduled/scheduled */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return _internal_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_51__["scheduled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./internal/config */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_52__["config"]; });
























































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/AsyncSubject.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
  \**************************************************************************************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");


class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super(...arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    _subscribe(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        }
        return super._subscribe(subscriber);
    }
    next(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    }
    error(error) {
        if (!this.hasCompleted) {
            super.error(error);
        }
    }
    complete() {
        this.hasCompleted = true;
        if (this.hasNext) {
            super.next(this.value);
        }
        super.complete();
    }
}
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");


class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    }
    getValue() {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    }
    next(value) {
        super.next(this._value = value);
    }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");

class InnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    }
    _error(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Notification.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \**************************************************************************************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/throwError.js");



var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case 'E':
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case 'C':
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    }
    static createNext(value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    }
    static createError(err) {
        return new Notification('E', undefined, err);
    }
    static createComplete() {
        return Notification.completeNotification;
    }
}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js ***!
  \************************************************************************************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/config.js");





class Observable {
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const { operator } = this;
        const sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    }
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let subscription;
            subscription = this.subscribe((value) => {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        const { source } = this;
        return source && source.subscribe(subscriber);
    }
    [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]() {
        return this;
    }
    pipe(...operations) {
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observer.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observer.js ***!
  \**********************************************************************************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/hostReportError.js");


const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete() { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");

class OuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(error, innerSub) {
        this.destination.error(error);
    }
    notifyComplete(innerSub) {
        this.destination.complete();
    }
}
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/ReplaySubject.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \***************************************************************************************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js");






class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
        super();
        this.scheduler = scheduler;
        this._events = [];
        this._infiniteTimeWindow = false;
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            this._infiniteTimeWindow = true;
            this.next = this.nextInfiniteTimeWindow;
        }
        else {
            this.next = this.nextTimeWindow;
        }
    }
    nextInfiniteTimeWindow(value) {
        if (!this.isStopped) {
            const _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        super.next(value);
    }
    nextTimeWindow(value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        super.next(value);
    }
    _subscribe(subscriber) {
        const _infiniteTimeWindow = this._infiniteTimeWindow;
        const _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        const scheduler = this.scheduler;
        const len = _events.length;
        let subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    }
    _getNow() {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__["queue"]).now();
    }
    _trimBufferThenGetEvents() {
        const now = this._getNow();
        const _bufferSize = this._bufferSize;
        const _windowTime = this._windowTime;
        const _events = this._events;
        const eventsCount = _events.length;
        let spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    }
}
class ReplayEvent {
    constructor(time, value) {
        this.time = time;
        this.value = value;
    }
}
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Scheduler.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js ***!
  \*********************************************************************************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");






class SubjectSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"] {
    constructor(destination) {
        super(destination);
        this.destination = destination;
    }
}
class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    constructor() {
        super();
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__["rxSubscriber"]]() {
        return new SubjectSubscriber(this);
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    next(value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            const { observers } = this;
            const len = observers.length;
            const copy = observers.slice();
            for (let i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    }
    error(err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    }
    complete() {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    }
    unsubscribe() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    }
    _trySubscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        else {
            return super._trySubscribe(subscriber);
        }
    }
    _subscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__["SubjectSubscription"](this, subscriber);
        }
    }
    asObservable() {
        const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        const { destination } = this;
        if (destination && destination.next) {
            destination.next(value);
        }
    }
    error(err) {
        const { destination } = this;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    }
    complete() {
        const { destination } = this;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
    }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");

class SubjectSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(subject, subscriber) {
        super();
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
  \************************************************************************************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/hostReportError.js");






class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"] {
    constructor(destinationOrNext, error, complete) {
        super();
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        destinationOrNext.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__["rxSubscriber"]]() { return this; }
    static create(next, error, complete) {
        const subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    }
    next(value) {
        if (!this.isStopped) {
            this._next(value);
        }
    }
    error(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        super.unsubscribe();
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.destination.complete();
        this.unsubscribe();
    }
    _unsubscribeAndRecycle() {
        const { _parentOrParents } = this;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    }
}
class SafeSubscriber extends Subscriber {
    constructor(_parentSubscriber, observerOrNext, error, complete) {
        super();
        this._parentSubscriber = _parentSubscriber;
        let next;
        let context = this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    next(value) {
        if (!this.isStopped && this._next) {
            const { _parentSubscriber } = this;
            if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            const { useDeprecatedSynchronousErrorHandling } = _config__WEBPACK_IMPORTED_MODULE_4__["config"];
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    }
    complete() {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            if (this._complete) {
                const wrappedComplete = () => this._complete.call(this._context);
                if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    }
    __tryOrUnsub(fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
        }
    }
    __tryOrSetError(parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    }
    _unsubscribe() {
        const { _parentSubscriber } = this;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    }
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js");




class Subscription {
    constructor(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    unsubscribe() {
        let errors;
        if (this.closed) {
            return;
        }
        let { _parentOrParents, _ctorUnsubscribe, _unsubscribe, _subscriptions } = this;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (let index = 0; index < _parentOrParents.length; ++index) {
                const parent = _parentOrParents[index];
                parent.remove(this);
            }
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            let index = -1;
            let len = _subscriptions.length;
            while (++index < len) {
                const sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
        }
    }
    add(teardown) {
        let subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    const tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        let { _parentOrParents } = subscription;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        const subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    }
    remove(subscription) {
        const subscriptions = this._subscriptions;
        if (subscriptions) {
            const subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }
}
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce((errs, err) => errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err), []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/config.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/config.js ***!
  \********************************************************************************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            const error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/innerSubscribe.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/innerSubscribe.js ***!
  \****************************************************************************************************************************/
/*! exports provided: SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber, innerSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleInnerSubscriber", function() { return SimpleInnerSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexInnerSubscriber", function() { return ComplexInnerSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleOuterSubscriber", function() { return SimpleOuterSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexOuterSubscriber", function() { return ComplexOuterSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerSubscribe", function() { return innerSubscribe; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/subscribeTo */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");



class SimpleInnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    _next(value) {
        this.parent.notifyNext(value);
    }
    _error(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete();
        this.unsubscribe();
    }
}
class ComplexInnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    }
    _error(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
class SimpleOuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete() {
        this.destination.complete();
    }
}
class ComplexOuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(error) {
        this.destination.error(error);
    }
    notifyComplete(_innerSub) {
        this.destination.complete();
    }
}
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    let subscription;
    try {
        subscription = Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}
//# sourceMappingURL=innerSubscribe.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/refCount.js");





class ConnectableObservable extends _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] {
    constructor(source, subjectFactory) {
        super();
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
        this._isComplete = false;
    }
    _subscribe(subscriber) {
        return this.getSubject().subscribe(subscriber);
    }
    getSubject() {
        const subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    }
    connect() {
        let connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
            }
        }
        return connection;
    }
    refCount() {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_4__["refCount"])()(this);
    }
}
const connectableObservableDescriptor = (() => {
    const connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
class ConnectableSubscriber extends _Subject__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _error(err) {
        this._unsubscribe();
        super._error(err);
    }
    _complete() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        super._complete();
    }
    _unsubscribe() {
        const connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            const connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    }
}
class RefCountOperator {
    constructor(connectable) {
        this.connectable = connectable;
    }
    call(subscriber, source) {
        const { connectable } = this;
        connectable._refCount++;
        const refCounter = new RefCountSubscriber(subscriber, connectable);
        const subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    }
}
class RefCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _unsubscribe() {
        const { connectable } = this;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        const refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        const { connection } = this;
        const sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    }
}
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/bindCallback.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/bindCallback.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return (...args) => bindCallback(callbackFunc, scheduler)(...args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((args) => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
        }
    }
    return function (...args) {
        const context = this;
        let subject;
        const params = {
            context,
            subject,
            callbackFunc,
            scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    const handler = (...innerArgs) => {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, [...args, handler]);
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                const state = {
                    args, subscriber, params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    const self = this;
    const { args, subscriber, params } = state;
    const { callbackFunc, context, scheduler } = params;
    let { subject } = params;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        const handler = (...innerArgs) => {
            const value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
        };
        try {
            callbackFunc.apply(context, [...args, handler]);
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    const { value, subject } = state;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    const { err, subject } = state;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/bindNodeCallback.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return (...args) => bindNodeCallback(callbackFunc, scheduler)(...args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(args => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
        }
    }
    return function (...args) {
        const params = {
            subject: undefined,
            args,
            callbackFunc,
            scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const { context } = params;
            let { subject } = params;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    const handler = (...innerArgs) => {
                        const err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, [...args, handler]);
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params, subscriber, context });
            }
        });
    };
}
function dispatch(state) {
    const { params, subscriber, context } = state;
    const { callbackFunc, args, scheduler } = params;
    let subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        const handler = (...innerArgs) => {
            const err = innerArgs.shift();
            if (err) {
                this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
            }
            else {
                const value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
            }
        };
        try {
            callbackFunc.apply(context, [...args, handler]);
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    const { value, subject } = arg;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    const { err, subject } = arg;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js");





const NONE = {};
function combineLatest(...observables) {
    let resultSelector = undefined;
    let scheduler = undefined;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_4__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
class CombineLatestOperator {
    constructor(resultSelector) {
        this.resultSelector = resultSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    }
}
class CombineLatestSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, resultSelector) {
        super(destination);
        this.resultSelector = resultSelector;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    _next(observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    }
    _complete() {
        const observables = this.observables;
        const len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (let i = 0; i < len; i++) {
                const observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i));
            }
        }
    }
    notifyComplete(unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        const values = this.values;
        const oldVal = values[outerIndex];
        const toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    }
    _tryResultSelector(values) {
        let result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/concat.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/concat.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/concatAll.js");


function concat(...observables) {
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(Object(_of__WEBPACK_IMPORTED_MODULE_0__["of"])(...observables));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/defer.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/defer.js ***!
  \******************************************************************************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js");



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        const source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js ***!
  \******************************************************************************************************************************/
/*! exports provided: EMPTY, empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => subscriber.complete());
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/forkJoin.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isObject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObject.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js");





function forkJoin(...sources) {
    if (sources.length === 1) {
        const first = sources[0];
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(first)) {
            return forkJoinInternal(first, null);
        }
        if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(first) && Object.getPrototypeOf(first) === Object.prototype) {
            const keys = Object.keys(first);
            return forkJoinInternal(keys.map(key => first[key]), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        const resultSelector = sources.pop();
        sources = (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])((args) => resultSelector(...args)));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        const values = new Array(len);
        let completed = 0;
        let emitted = 0;
        for (let i = 0; i < len; i++) {
            const source = Object(_from__WEBPACK_IMPORTED_MODULE_4__["from"])(sources[i]);
            let hasValue = false;
            subscriber.add(source.subscribe({
                next: value => {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: err => subscriber.error(err),
                complete: () => {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce((result, key, i) => (result[key] = values[i], result), {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        }
    });
}
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js");



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
    }
    else {
        return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js");



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
    }
    else {
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromEvent.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js");




const toString = (() => Object.prototype.toString)();
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(args => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    let unsubscribe;
    if (isEventTarget(sourceObj)) {
        const source = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = () => source.removeEventListener(eventName, handler, options);
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = () => source.off(eventName, handler);
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = () => source.removeListener(eventName, handler);
    }
    else if (sourceObj && sourceObj.length) {
        for (let i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromEventPattern.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js");




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(args => Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
        let retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return () => removeHandler(handler, retValue);
    });
}
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/generate.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/generate.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    let resultSelector;
    let initialState;
    if (arguments.length == 1) {
        const options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber,
                iterate,
                condition,
                resultSelector,
                state
            });
        }
        do {
            if (condition) {
                let conditionResult;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            let value;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    const { subscriber, condition } = state;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        let conditionResult;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    let value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/iif.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/iif.js ***!
  \****************************************************************************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js");


function iif(condition, trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"], falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]) {
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => condition() ? trueResult : falseResult);
}
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/interval.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isNumeric.js");



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"]) {
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/merge.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
  \******************************************************************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js");




function merge(...observables) {
    let concurrent = Number.POSITIVE_INFINITY;
    let scheduler = null;
    let last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/never.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/never.js ***!
  \******************************************************************************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/noop.js");


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/of.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/of.js ***!
  \***************************************************************************************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js");



function of(...args) {
    let scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
    }
    else {
        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
    }
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/onErrorResumeNext.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js");




function onErrorResumeNext(...sources) {
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    const [first, ...remainder] = sources;
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext(...first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const subNext = () => subscriber.add(onErrorResumeNext(...remainder).subscribe(subscriber));
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next(value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/pairs.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/pairs.js ***!
  \******************************************************************************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const keys = Object.keys(obj);
            for (let i = 0; i < keys.length && !subscriber.closed; i++) {
                const key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
            const keys = Object.keys(obj);
            const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys, index: 0, subscriber, subscription, obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    const { keys, index, subscriber, subscription, obj } = state;
    if (!subscriber.closed) {
        if (index < keys.length) {
            const key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys, index: index + 1, subscriber, subscription, obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/partition.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/partition.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony import */ var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/not */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/not.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");
/* harmony import */ var _operators_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/filter */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/filter.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");




function partition(source, predicate, thisArg) {
    return [
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(predicate, thisArg)(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source))),
        Object(_operators_filter__WEBPACK_IMPORTED_MODULE_2__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(new _Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(source)))
    ];
}
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/race.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/race.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js");




function race(...observables) {
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
class RaceOperator {
    call(subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    }
}
class RaceSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    _next(observable) {
        this.observables.push(observable);
    }
    _complete() {
        const observables = this.observables;
        const len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (let i = 0; i < len && !this.hasFirst; i++) {
                const observable = observables[i];
                const subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (let i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    let subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    }
}
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/range.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/range.js ***!
  \******************************************************************************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");

function range(start = 0, count, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        let index = 0;
        let current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index, count, start, subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    const { start, index, count, subscriber } = state;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/throwError.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/timer.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \******************************************************************************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js");




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/using.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/using.js ***!
  \******************************************************************************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/empty.js");



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        let result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        const source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        const subscription = source.subscribe(subscriber);
        return () => {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/zip.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
  \****************************************************************************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../innerSubscribe */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/innerSubscribe.js");





function zip(...observables) {
    const resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
class ZipOperator {
    constructor(resultSelector) {
        this.resultSelector = resultSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    }
}
class ZipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, resultSelector, values = Object.create(null)) {
        super(destination);
        this.resultSelector = resultSelector;
        this.iterators = [];
        this.active = 0;
        this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : undefined;
    }
    _next(value) {
        const iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    }
    _complete() {
        const iterators = this.iterators;
        const len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                const destination = this.destination;
                destination.add(iterator.subscribe());
            }
            else {
                this.active--;
            }
        }
    }
    notifyInactive() {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    }
    checkIterators() {
        const iterators = this.iterators;
        const len = iterators.length;
        const destination = this.destination;
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        let shouldComplete = false;
        const args = [];
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            let result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    }
    _tryresultSelector(args) {
        let result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
class StaticIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    hasValue() {
        return true;
    }
    next() {
        const result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    }
    hasCompleted() {
        const nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    }
}
class StaticArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]() {
        return this;
    }
    next(value) {
        const i = this.index++;
        const array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    }
    hasValue() {
        return this.array.length > this.index;
    }
    hasCompleted() {
        return this.array.length === this.index;
    }
}
class ZipBufferIterator extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleOuterSubscriber"] {
    constructor(destination, parent, observable) {
        super(destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]() {
        return this;
    }
    next() {
        const buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    }
    hasValue() {
        return this.buffer.length > 0;
    }
    hasCompleted() {
        return this.buffer.length === 0 && this.isComplete;
    }
    notifyComplete() {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    }
    notifyNext(innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    }
    subscribe() {
        return Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["innerSubscribe"])(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleInnerSubscriber"](this));
    }
}
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/concatAll.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/concatAll.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js");

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/filter.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/filter.js ***!
  \******************************************************************************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");

function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
class FilterOperator {
    constructor(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    }
}
class FilterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }
    _next(value) {
        let result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/groupBy.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subject.js");




function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return (source) => source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
}
class GroupByOperator {
    constructor(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    }
}
class GroupBySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        super(destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    _next(value) {
        let key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    }
    _group(value, key) {
        let groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        let group = groups.get(key);
        let element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]());
            groups.set(key, group);
            const groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                let duration;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    }
    _error(err) {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    }
    _complete() {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    }
    removeGroup(key) {
        this.groups.delete(key);
    }
    unsubscribe() {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                super.unsubscribe();
            }
        }
    }
}
class GroupDurationSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(key, group, parent) {
        super(group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    _next(value) {
        this.complete();
    }
    _unsubscribe() {
        const { parent, key } = this;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    }
}
class GroupedObservable extends _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"] {
    constructor(key, groupSubject, refCountSubscription) {
        super();
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    _subscribe(subscriber) {
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        const { refCountSubscription, groupSubject } = this;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    }
}
class InnerRefCountSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"] {
    constructor(parent) {
        super();
        this.parent = parent;
        parent.count++;
    }
    unsubscribe() {
        const parent = this.parent;
        if (!parent.closed && !this.closed) {
            super.unsubscribe();
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js ***!
  \***************************************************************************************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");

function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
class MapOperator {
    constructor(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    }
}
class MapSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, project, thisArg) {
        super(destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    _next(value) {
        let result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js ***!
  \********************************************************************************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/identity.js");


function mergeAll(concurrent = Number.POSITIVE_INFINITY) {
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js ***!
  \********************************************************************************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber, flatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/from */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/observable/from.js");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/innerSubscribe.js");



function mergeMap(project, resultSelector, concurrent = Number.POSITIVE_INFINITY) {
    if (typeof resultSelector === 'function') {
        return (source) => source.pipe(mergeMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])((b, ii) => resultSelector(a, b, i, ii))), concurrent));
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (source) => source.lift(new MergeMapOperator(project, concurrent));
}
class MergeMapOperator {
    constructor(project, concurrent = Number.POSITIVE_INFINITY) {
        this.project = project;
        this.concurrent = concurrent;
    }
    call(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    }
}
class MergeMapSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"] {
    constructor(destination, project, concurrent = Number.POSITIVE_INFINITY) {
        super(destination);
        this.project = project;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    }
    _tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    }
    _innerSub(ish) {
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyComplete() {
        const buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    }
}
const flatMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/observeOn.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Notification.js");


function observeOn(scheduler, delay = 0) {
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
class ObserveOnOperator {
    constructor(scheduler, delay = 0) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    }
}
class ObserveOnSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, scheduler, delay = 0) {
        super(destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    static dispatch(arg) {
        const { notification, destination } = arg;
        notification.observe(destination);
        this.unsubscribe();
    }
    scheduleMessage(notification) {
        const destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    }
    _next(value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
    }
    _error(err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
        this.unsubscribe();
    }
    _complete() {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
        this.unsubscribe();
    }
}
class ObserveOnMessage {
    constructor(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/refCount.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/operators/refCount.js ***!
  \********************************************************************************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");

function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
class RefCountOperator {
    constructor(connectable) {
        this.connectable = connectable;
    }
    call(subscriber, source) {
        const { connectable } = this;
        connectable._refCount++;
        const refCounter = new RefCountSubscriber(subscriber, connectable);
        const subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    }
}
class RefCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _unsubscribe() {
        const { connectable } = this;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        const refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        const { connection } = this;
        const sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    }
}
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: scheduleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleArray", function() { return scheduleArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");


function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        let i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: scheduleIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleIterable", function() { return scheduleIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js");



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        let iterator;
        sub.add(() => {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(() => {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                let value;
                let done;
                try {
                    const result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: scheduleObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleObservable", function() { return scheduleObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js");



function scheduleObservable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(() => {
            const observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
            sub.add(observable.subscribe({
                next(value) { sub.add(scheduler.schedule(() => subscriber.next(value))); },
                error(err) { sub.add(scheduler.schedule(() => subscriber.error(err))); },
                complete() { sub.add(scheduler.schedule(() => subscriber.complete())); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: schedulePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedulePromise", function() { return schedulePromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");


function schedulePromise(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(() => input.then(value => {
            sub.add(scheduler.schedule(() => {
                subscriber.next(value);
                sub.add(scheduler.schedule(() => subscriber.complete()));
            }));
        }, err => {
            sub.add(scheduler.schedule(() => subscriber.error(err)));
        })));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: scheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return scheduled; });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedulePromise */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isIterable.js");








function scheduled(input, scheduler) {
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
            return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
            return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
            return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
            return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/Action.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \******************************************************************************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscription.js");

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(() => scheduler.flush(null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/Action.js");

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__["Action"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Scheduler.js");

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"] {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay = 0) {
        if (delay > 0) {
            return super.schedule(state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    }
    execute(state, delay) {
        return (delay > 0 || this.closed) ?
            super.execute(state, delay) :
            this._execute(state, delay);
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        return scheduler.flush(this);
    }
}
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
}
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/VirtualTimeScheduler.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");


class VirtualTimeScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"] {
    constructor(SchedulerAction = VirtualAction, maxFrames = Number.POSITIVE_INFINITY) {
        super(SchedulerAction, () => this.frame);
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    flush() {
        const { actions, maxFrames } = this;
        let error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
VirtualTimeScheduler.frameTimeFactor = 10;
class VirtualAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work, index = scheduler.index += 1) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    schedule(state, delay = 0) {
        if (!this.id) {
            return super.schedule(state, delay);
        }
        this.active = false;
        const action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    }
    requestAsyncId(scheduler, id, delay = 0) {
        this.delay = scheduler.frame + delay;
        const { actions } = scheduler;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        return undefined;
    }
    _execute(state, delay) {
        if (this.active === true) {
            return super._execute(state, delay);
        }
    }
    static sortActions(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    }
}
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: animationFrameScheduler, animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return animationFrameScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js");


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
const animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/asap.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \****************************************************************************************************************************/
/*! exports provided: asapScheduler, asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return asapScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js");


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
const asap = asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/async.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: asyncScheduler, async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return asyncScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js");


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/queue.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: queueScheduler, queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return queueScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js");


const queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
const queue = queueScheduler;
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
const iterator = getSymbolIterator();
const $$iterator = iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
const rxSubscriber = (() => typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random())();
const $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
const ArgumentOutOfRangeErrorImpl = (() => {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
const ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/EmptyError.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/EmptyError.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
const EmptyErrorImpl = (() => {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
const EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/Immediate.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Immediate, TestTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTools", function() { return TestTools; });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
const ObjectUnsubscribedErrorImpl = (() => {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
const TimeoutErrorImpl = (() => {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
const TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
const UnsubscriptionErrorImpl = (() => {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
const UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/canReportError.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");

function canReportError(observer) {
    while (observer) {
        const { closed, destination, isStopped } = observer;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/hostReportError.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
function hostReportError(err) {
    setTimeout(() => { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/identity.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/identity.js ***!
  \***************************************************************************************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
  \**************************************************************************************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
const isArray = (() => Array.isArray || ((x) => x && typeof x.length === 'number'))();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js ***!
  \******************************************************************************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
const isArrayLike = ((x) => x && typeof x.length === 'number' && typeof x !== 'function');
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isFunction.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js");

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isIterable.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isIterable.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isNumeric.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \****************************************************************************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArray.js");

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObject.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
  \***************************************************************************************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObservable.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObservable.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isPromise.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isPromise.js ***!
  \****************************************************************************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isScheduler.js ***!
  \******************************************************************************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/noop.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/noop.js ***!
  \***********************************************************************************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/not.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/not.js ***!
  \**********************************************************************************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/pipe.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
  \***********************************************************************************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/identity.js");

function pipe(...fns) {
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js ***!
  \******************************************************************************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPromise */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isObject */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js");









const subscribeTo = (result) => {
    if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
    }
    else {
        const value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : `'${result}'`;
        const msg = `You provided ${value} where a stream was expected.`
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
const subscribeToArray = (array) => (subscriber) => {
    for (let i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
};
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/iterator.js");

const subscribeToIterable = (iterable) => (subscriber) => {
    const iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
    do {
        let item;
        try {
            item = iterator.next();
        }
        catch (err) {
            subscriber.error(err);
            return subscriber;
        }
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(() => {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
};
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/observable.js");

const subscribeToObservable = (obj) => (subscriber) => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
};
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/hostReportError.js");

const subscribeToPromise = (promise) => (subscriber) => {
    promise.then((value) => {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, (err) => subscriber.error(err))
        .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
    return subscriber;
};
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js ***!
  \************************************************************************************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observable.js");



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex)) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/node_modules/rxjs/_esm2015/internal/Observer.js");



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border searchable-header\">\n    <ion-toolbar>\n        <div class=\"location-content\">\n            <ion-icon class=\"loc-icon margin-right-6 margin-left-15\" src=\"../../../assets/imgs/appicons/location-top.svg\"></ion-icon>\n            <div class=\"content\">\n                <h2>{{this.authSVC.usersign.displayName}}\n                    <!-- <ion-icon class=\"margin-left-14\" src=\"../../../assets/imgs/appicons/down-arrow.svg\"></ion-icon> -->\n                </h2>\n                <p>{{locatio}}</p>\n            </div>\n        </div>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <!--<ion-toolbar>\n        <ion-input (ionFocus)=\"goToSearch()\" placeholder=\"Search Doctor...\" class=\"search-input margin-right-15 margin-left-15\">\n            <ion-icon src=\"../../../assets/imgs/appicons/search.svg\"></ion-icon>\n        </ion-input>\n    </ion-toolbar>-->\n\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-avatar (click)=\"openEmotions()\">\n                        <img src=\"../../../assets/emotions/{{this.emotion.img}}\">\n                    </ion-avatar>\n\n                </ion-col>\n                <ion-col size=\"2\">\n                    <ion-button (click)=\"openProfileDataSheet()\">\n                        <ion-icon name=\"person-circle-outline\"></ion-icon>\n                    </ion-button>\n\n                </ion-col>\n                <ion-col size=\"2\">\n                    <ion-button (click)=\"openNote()\">\n                        <ion-icon name=\"document\"> </ion-icon>\n                    </ion-button>\n\n                </ion-col>\n                <ion-col size=\"2\">\n                    <ion-button (click)=\"newAppointmentPage()\">\n                        <ion-icon name=\"calendar\"> </ion-icon>\n                    </ion-button>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content class=\"ion-padding-bottom\">\n\n    <div class=\"head_div\">\n        <h3 class=\"main_lbl head_lbl\">Next appointments <span class=\"ion-float-right\">Total: {{totalAppointments}}</span></h3>\n    </div>\n\n    <!--   <ion-button (click)=\"start()\">Start</ion-button>\n    <ion-button (click)=\"getL()\">Obtener</ion-button>\n    <ion-button (click)=\"stop()\">Close</ion-button>\n\n    <div>\n        <ion-list *ngFor=\"let l of locations\">\n            <ion-item>\n                <ion-label>\n                    Latitud: {{l.latitude}}\n                </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                    Long: {{l.longitude}}\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </div> -->\n\n    <!--   <div class=\"data_div\" (click)=\"openAppointmentPage(item)\" *ngFor=\"let item of apps\">\n        \n        <ion-icon name=\"briefcase-outline\"> </ion-icon>\n        <div class=\"card_div\" [ngStyle]=\"getStyle(item)\">\n        \n            <div class=\"info_div\">\n                <h3 class=\"name\">{{item.title}} <span>{{item.appointmentdate.seconds * 1000| date: 'dd/MM/yy h:mm a' }}</span></h3>\n        \n                <p class=\"add\">{{item.description}}</p>\n            </div>\n        </div>\n    </div> -->\n\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of apps\">\n            <div [ngStyle]=\"getStyle(item)\">\n\n\n                <ion-item-options side=\"end\">\n\n                    <ion-item-option (click)=\"openlink(item)\">\n\n\n                        <ion-icon slot=\"icon-only\" name=\"eye\">\n\n                        </ion-icon>\n\n                    </ion-item-option>\n\n                </ion-item-options>\n\n                <ion-item (click)=\"openAppointmentPage(item)\" class=\"transparentbg\">\n                    <ion-icon name=\"briefcase-outline\"> </ion-icon>\n                    <ion-label>\n\n                        <h3 class=\"name\">{{item.title}} <span>{{item.appointmentdate.seconds * 1000| date: 'dd/MM/yy h:mm a' }}</span></h3>\n\n                        <p class=\"add\">{{item.description}}</p>\n\n                    </ion-label>\n\n\n                </ion-item>\n\n            </div>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <!--     <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"sendLocation()\">\n        <ion-fab-button color=\"success\">\n            <ion-icon name=\"radio-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab> -->\n\n    <!--     <ion-text>\n        {{this.emotion |json}}\n    </ion-text>\n -->\n\n\n\n\n\n</ion-content>\n\n<!-- Footer without a border -->\n<ion-footer class=\"ion-no-border\" (click)=\"presentAlert()\">\n    <ion-toolbar color=\"danger\">\n    </ion-toolbar>\n</ion-footer>\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" (click)=\"presentAlert()\">\n    <ion-fab-button color=\"danger\">\n        <ion-icon name=\"radio-outline\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n\n\n<!--  \n<ion-content class=\"ion-padding\">\n\n    <h2 class=\"heading margin-bottom-17\">Upcoming Appointment</h2>\n\n    <ion-item button=\"true\" (click)=\"goToAppointmentDetail()\" class=\"upcoming-appointment inProgress margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/UpcomingAppointment/dr1.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Christine Andrews\n                <p class=\"ion-float-end date\">31 Oct 2019</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">cardiologist</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">11:30 am</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <ion-item button=\"true\" (click)=\"goToAppointmentDetail()\" class=\"upcoming-appointment margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/UpcomingAppointment/dr2.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Christine Andrews\n                <p class=\"ion-float-end date\">31 Oct 2019</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Dermatology</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">01:30 am</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-4\">Specialist\n        <ion-button class=\"view-btn\" fill=\"clear\" (click)=\"goToAllSpecialist()\">\n            View all\n        </ion-button>\n    </h2>\n\n    <div class=\"specialist-container\">\n        <div (click)=\"goToDoctorDetail()\" *ngFor=\"let i of specialist\" class=\"specialist margin-right-17\">\n            <img class=\"margin-bottom-4\" [src]=\"i?.img\">\n            <h2>{{i?.name}}</h2>\n            <h3 class=\"padding-bottom-6\">{{i?.specialist}}</h3>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-15\">Treatments\n        <ion-button class=\"view-btn\" fill=\"clear\" (click)=\"goToAllTreatments()\">\n            View all\n        </ion-button>\n    </h2>\n\n    <div class=\"treatments margin-bottom-23\">\n        <div (click)=\"goToAllSpecialist()\" *ngFor=\"let i of treatments\" class=\"treatment margin-right-20\">\n            <div class=\"image-container\">\n                <ion-icon [style.color]=\"i?.color\" src=\"../../../assets/imgs/appicons/traingle.svg\"></ion-icon>\n                <img [src]=\"i?.img\">\n            </div>\n            <h2 class=\"name margin-top-4\">{{i?.name}}</h2>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-4\">What are you looking for?</h2>\n\n    <div class=\"looking-container\">\n        <div (click)=\"goToAllSpecialist()\" class=\"content margin-right-13\">\n            <div>\n                <h2 class=\"margin-left-9\">Meet a Doctor</h2>\n                <h3 class=\"margin-left-9\">Book Appointment</h3>\n            </div>\n            <img src=\"../../../assets/imgs/data/looking/lookingFor1.png\">\n        </div>\n        <div (click)=\"goToChatWithDoc()\" class=\"content margin-right-13\">\n            <div>\n                <h2 class=\"margin-left-9\">Consult with Doctor\n                </h2>\n                <h3 class=\"margin-left-9\">Private chat with doctor</h3>\n            </div>\n            <img src=\"../../../assets/imgs/data/looking/lookingFor1.png\">\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-20\">Offers</h2>\n\n    <div class=\"offer-container\">\n        <div class=\"offer margin-right-17\">\n            <div class=\"black-wrapper\"></div>\n            <img src=\"../../../assets/imgs/data/offers/offer1.png\">\n            <h2 class=\"margin-bottom-8 margin-left-9\">30% Off on Checkup</h2>\n        </div>\n        <div class=\"offer margin-right-17\">\n            <div class=\"black-wrapper\"></div>\n            <img src=\"../../../assets/imgs/data/offers/offer2.png\">\n            <h2 class=\"margin-bottom-8 margin-left-9\">50% Off on Face Treatment</h2>\n        </div>\n    </div>\n\n    <h2 class=\"heading margin-bottom-17 margin-top-23\">Favorite Doctor\n        <ion-button (click)=\"goToAllFavoriteDoctor()\" class=\"view-btn\" fill=\"clear\">\n            View all\n        </ion-button>\n    </h2>\n\n    <ion-item button=\"true\" (click)=\"goToDoctorDetail()\" class=\"fav-doctors margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/FavoriteDoctor/FavoriteDoctor1.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Nancy Stewart\n                <p class=\"ion-float-end date\">Available</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Orthopedics</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">$50</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <ion-item button=\"true\" (click)=\"goToDoctorDetail()\" class=\"upcoming-appointment margin-bottom-20\" lines=\"none\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"../../../assets/imgs/data/FavoriteDoctor/FavoriteDoctor2.png\">\n            <ion-button fill=\"clear\">\n                <ion-icon class=\"active\" name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-thumbnail>\n        <ion-label>\n            <h2 class=\"dr-name\">Dr.Dan Collins\n                <p class=\"ion-float-end date\">Available</p>\n            </h2>\n            <h3 class=\"specialist margin-bottom-8\">Paediatrics</h3>\n            <h4 class=\"location\">Low Mill Farm, Lendales Lane</h4>\n            <h4 class=\"last-line\">Pickering, YO18 8EE\n                <p class=\"ion-float-end time\">$70</p>\n            </h4>\n        </ion-label>\n    </ion-item>\n\n    <div class=\"plan-offer-banner\">\n        <div class=\"content margin-right-15 margin-left-15\">\n            <div class=\"top-line padding-top-18 margin-bottom-18\">\n                <h2 class=\"app-name margin-right-8\">Doctro</h2>\n                <div class=\"plus-label\">Plus</div>\n            </div>\n            <p class=\"offer-txt margin-bottom-5\">\n                Unlimited chat with doctors of any specialty\n            </p>\n            <p class=\"price\">\n                At just $199/month\n            </p>\n            <ion-button (click)=\"goToBuyPlan()\" class=\"plan-btn margin-top-30 margin-bottom-13\">\n                Buy Plan Now\n                <ion-icon class=\"margin-left-4\" name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n        </div>\n        <img src=\"../../../assets/imgs/plan_offer.png\">\n    </div>\n\n</ion-content>-->");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _emotions_emotions_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../emotions/emotions.module */ "./src/app/pages/emotions/emotions.module.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _emotions_emotions_module__WEBPACK_IMPORTED_MODULE_8__["EmotionsPageModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer ion-toolbar {\n  height: 30px;\n  border-top-right-radius: 100%;\n  border-top-left-radius: 100%;\n}\n\nion-fab-button {\n  margin: -17px 2px;\n  width: 65px;\n  height: 54px;\n  line-height: 40px;\n  --box-shadow: 0 3px 5px -1px rgba(0, 0, 0, -0.8), 0 6px 10px 0 rgba(0, 0, 0, -0.86), 0 1px 18px 0 rgba(0, 0, 0, -0.95);\n  --box-shadow: none !important;\n}\n\nion-content .main_lbl {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-content .date_div {\n  background-color: var(--div_back);\n  margin-top: 10px;\n}\n\nion-content .date_div ion-col {\n  text-align: center;\n  padding: 11px 0px 0px 0px;\n}\n\nion-content .date_div ion-col .date_lbl {\n  font-size: 14px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\n\nion-content .date_div ion-col ion-datetime {\n  color: var(--my_theme);\n  font-family: \"sf_ui_md\";\n  font-size: 14px;\n  padding-left: 0;\n  padding-top: 5px;\n  padding-bottom: 0;\n}\n\nion-content .date_div ion-col .time_l {\n  color: var(--blue);\n  margin-bottom: 10px;\n}\n\nion-content .date_div .first_Col {\n  /*border-right: solid;\n  border-right-color: var(--lht_blue);\n  border-right-width: 1px;*/\n}\n\nion-content .head_div {\n  height: 40px;\n  background-color: var(--div_back);\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n}\n\nion-content .head_div .head_lbl {\n  margin: 0;\n  width: 100%;\n}\n\nion-content .head_div .head_lbl span {\n  font-size: 13px;\n  color: var(--lht_blue);\n}\n\nion-content .data_div {\n  display: flex;\n  padding: 10px 16px;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\nion-content .data_div .time {\n  font-size: 16px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n  width: 50px;\n  text-align: center;\n}\n\nion-content .data_div .card_div {\n  display: flex;\n  margin-left: 10px;\n  padding: 10px 10px 10px 5px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);\n  width: 100%;\n}\n\nion-content .data_div .card_div img {\n  height: 58px;\n  width: 58px;\n  border-radius: 5px;\n}\n\nion-content .data_div .card_div .info_div {\n  padding-left: 15px;\n  width: 100%;\n  padding-top: 3px;\n}\n\nion-content .data_div .card_div .info_div .name {\n  font-size: 16px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .data_div .card_div .info_div .name span {\n  font-size: 12px;\n}\n\nion-content .data_div .card_div .info_div .age {\n  font-size: 12px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 3px 0px;\n}\n\nion-content .data_div .card_div .info_div .add {\n  font-size: 12px;\n  color: var(--lht_blue);\n  font-family: \"sf_ui_r\";\n  margin: 0;\n}\n\n.stacked-lbl {\n  font-size: 19px;\n  color: var(--blue);\n  font-family: \"sf_ui_md\";\n  margin: 0;\n}\n\nion-content .heading {\n  font-size: 16px;\n  color: var(--ion-color-primary-dark);\n  font-family: \"sfUi-m\";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .heading .view-btn {\n  height: auto;\n  width: auto;\n  --padding-start: 0;\n  --padding-end: 0;\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary);\n}\n\nion-content .upcoming-appointment,\nion-content .fav-doctors {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  --padding-start: 6px;\n  border-radius: 5px;\n}\n\nion-content .upcoming-appointment.inProgress,\nion-content .fav-doctors.inProgress {\n  --background: var(--ion-color-primary) !important;\n}\n\nion-content .upcoming-appointment.inProgress h2,\nion-content .upcoming-appointment.inProgress h3,\nion-content .upcoming-appointment.inProgress h4,\nion-content .upcoming-appointment.inProgress p,\nion-content .fav-doctors.inProgress h2,\nion-content .fav-doctors.inProgress h3,\nion-content .fav-doctors.inProgress h4,\nion-content .fav-doctors.inProgress p {\n  color: var(--ion-color-white) !important;\n}\n\nion-content .upcoming-appointment ion-thumbnail,\nion-content .fav-doctors ion-thumbnail {\n  height: 78px;\n  width: 78px;\n  margin-right: 10px;\n  position: relative;\n}\n\nion-content .upcoming-appointment ion-thumbnail ion-button,\nion-content .fav-doctors ion-thumbnail ion-button {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: auto;\n  width: auto;\n  margin: 0;\n}\n\nion-content .upcoming-appointment ion-thumbnail ion-button ion-icon,\nion-content .fav-doctors ion-thumbnail ion-button ion-icon {\n  font-size: 15px;\n  color: var(--ion-color-gray);\n}\n\nion-content .upcoming-appointment ion-thumbnail ion-button ion-icon.active,\nion-content .fav-doctors ion-thumbnail ion-button ion-icon.active {\n  color: var(--ion-color-red);\n}\n\nion-content .upcoming-appointment ion-thumbnail img,\nion-content .fav-doctors ion-thumbnail img {\n  height: 78px;\n  width: 78px;\n  border-radius: 5px;\n}\n\nion-content .upcoming-appointment ion-label .dr-name,\nion-content .fav-doctors ion-label .dr-name {\n  font-size: 15px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .upcoming-appointment ion-label .dr-name .date,\nion-content .fav-doctors ion-label .dr-name .date {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .upcoming-appointment ion-label .specialist,\nion-content .fav-doctors ion-label .specialist {\n  font-size: 13px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .upcoming-appointment ion-label .location,\nion-content .upcoming-appointment ion-label .last-line,\nion-content .fav-doctors ion-label .location,\nion-content .fav-doctors ion-label .last-line {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .upcoming-appointment ion-label .location .time,\nion-content .upcoming-appointment ion-label .last-line .time,\nion-content .fav-doctors ion-label .location .time,\nion-content .fav-doctors ion-label .last-line .time {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .specialist-container {\n  display: flex;\n  overflow: scroll;\n  padding: 10px 0px;\n}\n\nion-content .specialist-container .specialist {\n  text-align: center;\n  width: 140px;\n  min-width: 140px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\n\nion-content .specialist-container .specialist img {\n  width: 97px;\n  height: 90px;\n  border-radius: 5px;\n}\n\nion-content .specialist-container .specialist h2 {\n  font-size: 12px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-dark);\n}\n\nion-content .specialist-container .specialist h3 {\n  font-size: 11px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-primary-light);\n}\n\nion-content .offer-container {\n  display: flex;\n  overflow: scroll;\n  position: relative;\n}\n\nion-content .offer-container .offer {\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  min-width: 170px;\n}\n\nion-content .offer-container .offer .black-wrapper {\n  background: linear-gradient(180deg, #0000 25%, #000 138%);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\nion-content .offer-container .offer h2 {\n  position: absolute;\n  bottom: 0;\n  font-size: 12px;\n  color: var(--ion-color-white);\n  font-family: \"sfUi-m\";\n}\n\nion-content .looking-container {\n  display: flex;\n  overflow: scroll;\n}\n\nion-content .looking-container .content {\n  display: flex;\n  background: #FCE5F9;\n  width: 165px;\n  min-width: 165px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\nion-content .looking-container .content div {\n  width: 42%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\nion-content .looking-container .content div h2 {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .looking-container .content div h3 {\n  font-size: 14px;\n  font-family: \"sfUi-r\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .looking-container .content:nth-child(2) {\n  background: #F8E9E6;\n}\n\nion-content .plan-offer-banner {\n  background: #EEECF9;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n}\n\nion-content .plan-offer-banner img {\n  position: absolute;\n  bottom: 0;\n  right: 7px;\n}\n\nion-content .plan-offer-banner .content {\n  width: 63%;\n}\n\nion-content .plan-offer-banner .content .top-line {\n  display: flex;\n  align-items: center;\n}\n\nion-content .plan-offer-banner .content .top-line .app-name {\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .plan-offer-banner .content .top-line .plus-label {\n  width: 75px;\n  height: 30px;\n  background: var(--ion-color-primary);\n  font-size: 16px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-white);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\nion-content .plan-offer-banner .content .offer-txt {\n  font-size: 18px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .plan-offer-banner .content .price {\n  font-size: 14px;\n  font-family: \"sfUi-m\";\n  color: var(--ion-color-secondary);\n}\n\nion-content .plan-offer-banner .content .plan-btn {\n  --padding-start: 8px;\n  --padding-end: 0;\n  --border-radius: 5px;\n  --box-shadow: none;\n  width: 148px;\n  height: 40px;\n  font-size: 16px;\n  text-transform: capitalize;\n  font-family: \"sfUi-r\";\n  position: relative;\n  z-index: 99;\n}\n\nion-content .plan-offer-banner .content .plan-btn ion-icon {\n  font-size: 15px;\n}\n\nion-content .treatments {\n  display: flex;\n  overflow: scroll;\n}\n\nion-content .treatments .treatment .image-container {\n  height: 66px;\n  width: 66px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .treatments .treatment .image-container ion-icon {\n  font-size: 66px;\n}\n\nion-content .treatments .treatment .image-container img {\n  position: absolute;\n  min-height: 30px;\n  min-width: 30px;\n  max-height: 30px;\n  max-width: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-content .treatments .treatment .name {\n  font-size: 12px;\n  font-family: \"sfUi-sb\";\n  color: var(--ion-color-primary-dark);\n  text-align: center;\n}\n\n.transparentbg {\n  --ion-background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFudGFsYW1hbnRlcy9Eb2N1bWVudHMvUml6dGVrL0RldnMgQXBwcy9QRUVSUkVDT1ZFUlkvUGVlclJlY292ZXJ5QVBQL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FDQVI7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzSEFBQTtFQUNBLDZCQUFBO0FDREo7O0FES0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRlI7O0FESUk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FER1E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDRFo7O0FERVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNBaEI7O0FERVk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCOztBREVZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FoQjs7QURHUTtFQUNJOzsyQkFBQTtBQ0NaOztBRElJO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNIUjs7QURJUTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FDRlo7O0FER1k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUNEaEI7O0FES0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNIUjs7QURJUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZaOztBRElRO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBQ0ZaOztBREdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RoQjs7QURHWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRGhCOztBREVnQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQXBCOztBRENvQjtFQUNJLGVBQUE7QUNDeEI7O0FERWdCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQXBCOztBREVnQjtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0FwQjs7QURPQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0pKOztBRFFJO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0xSOztBRE1RO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNKWjs7QURPSTs7RUFFSSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNMUjs7QURNUTs7RUFPSSxpREFBQTtBQ1RaOztBREdZOzs7Ozs7OztFQUlJLHdDQUFBO0FDR2hCOztBRENROztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VaOztBRERZOztFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSWhCOztBREhnQjs7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNNcEI7O0FETG9COztFQUNJLDJCQUFBO0FDUXhCOztBREpZOztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNPaEI7O0FESFk7O0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNNaEI7O0FETGdCOztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFDQUFBO0FDUXBCOztBRExZOztFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDUWhCOztBRE5ZOzs7O0VBRUksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNVaEI7O0FEVGdCOzs7O0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNjcEI7O0FEVEk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1dSOztBRFZRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ1laOztBRFhZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2FoQjs7QURYWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FDYWhCOztBRFhZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUNhaEI7O0FEVEk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1dSOztBRFZRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNZWjs7QURYWTtFQUNJLHlEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2FoQjs7QURYWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDYWhCOztBRFRJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDV1I7O0FEVlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ1laOztBRFhZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDYWhCOztBRFpnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDY3BCOztBRFpnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDY3BCOztBRFZRO0VBQ0ksbUJBQUE7QUNZWjs7QURUSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDV1I7O0FEVlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDWVo7O0FEVlE7RUFDSSxVQUFBO0FDWVo7O0FEWFk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNhaEI7O0FEWmdCO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNjcEI7O0FEWmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2NwQjs7QURYWTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDYWhCOztBRFhZO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNhaEI7O0FEWFk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNhaEI7O0FEWmdCO0VBQ0ksZUFBQTtBQ2NwQjs7QURUSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ1dSOztBRFRZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDV2hCOztBRFZnQjtFQUNJLGVBQUE7QUNZcEI7O0FEVmdCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDWXBCOztBRFRZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ1doQjs7QURMQTtFQUNJLG1DQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIG1hcmdpbjogLTE3cHggMnB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIC0tYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAtMC44KSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLTAuODYpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAtMC45NSk7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLm1haW5fbGJsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5kYXRlX2RpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGl2X2JhY2spO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTFweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgLmRhdGVfbGJsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lX2wge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyc3RfQ29sIHtcclxuICAgICAgICAgICAgLypib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLWxodF9ibHVlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7Ki9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZF9kaXYge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZfYmFjayk7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuaGVhZF9sYmwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0YV9kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGh0X2JsdWUpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX2RpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm9fZGl2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwic2ZfdWlfclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0YWNrZWQtbGJsIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC52aWV3LWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVwY29taW5nLWFwcG9pbnRtZW50LFxyXG4gICAgLmZhdi1kb2N0b3JzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAxNiUpO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAmLmluUHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgIGg0LFxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzhweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3OHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIC5kci1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNwZWNpYWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2NhdGlvbixcclxuICAgICAgICAgICAgLmxhc3QtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNwZWNpYWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgICAgLnNwZWNpYWxpc3Qge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5N3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9mZmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAub2ZmZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgLmJsYWNrLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMDAgMjUlLCAjMDAwIDEzOCUpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9va2luZy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQ0U1Rjk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktcic7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEU5RTY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBsYW4tb2ZmZXItYmFubmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUVFQ0Y5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMTYlKTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNjMlO1xyXG4gICAgICAgICAgICAudG9wLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuYXBwLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBsdXMtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1tJztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vZmZlci10eHQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZlVpLW0nO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktbSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBsYW4tYnRuIHtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0OHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NmVWktcic7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudHJlYXRtZW50cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIC50cmVhdG1lbnQge1xyXG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDY2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2ZVaS1zYic7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudGJnIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59IiwiaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgbWFyZ2luOiAtMTdweCAycHg7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLTAuOCksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC0wLjg2KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLTAuOTUpO1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLm1haW5fbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMXB4IDBweCAwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRhdGVfZGl2IGlvbi1jb2wgLmRhdGVfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIGlvbi1kYXRldGltZSB7XG4gIGNvbG9yOiB2YXIoLS1teV90aGVtZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmlvbi1jb250ZW50IC5kYXRlX2RpdiBpb24tY29sIC50aW1lX2wge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuZGF0ZV9kaXYgLmZpcnN0X0NvbCB7XG4gIC8qYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4OyovXG59XG5pb24tY29udGVudCAuaGVhZF9kaXYge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpdl9iYWNrKTtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuaGVhZF9kaXYgLmhlYWRfbGJsIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5oZWFkX2RpdiAuaGVhZF9sYmwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWxodF9ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmRhdGFfZGl2IC5jYXJkX2RpdiBpbWcge1xuICBoZWlnaHQ6IDU4cHg7XG4gIHdpZHRoOiA1OHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LWZhbWlseTogXCJzZl91aV9tZFwiO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAuY2FyZF9kaXYgLmluZm9fZGl2IC5uYW1lIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAuZGF0YV9kaXYgLmNhcmRfZGl2IC5pbmZvX2RpdiAuYWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX21kXCI7XG4gIG1hcmdpbjogM3B4IDBweDtcbn1cbmlvbi1jb250ZW50IC5kYXRhX2RpdiAuY2FyZF9kaXYgLmluZm9fZGl2IC5hZGQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1saHRfYmx1ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmX3VpX3JcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3RhY2tlZC1sYmwge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwic2ZfdWlfbWRcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY29udGVudCAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmhlYWRpbmcgLnZpZXctYnRuIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50LFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQuaW5Qcm9ncmVzcyxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycy5pblByb2dyZXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudC5pblByb2dyZXNzIGgyLFxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50LmluUHJvZ3Jlc3MgaDMsXG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQuaW5Qcm9ncmVzcyBoNCxcbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudC5pblByb2dyZXNzIHAsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMuaW5Qcm9ncmVzcyBoMixcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycy5pblByb2dyZXNzIGgzLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzLmluUHJvZ3Jlc3MgaDQsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMuaW5Qcm9ncmVzcyBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tdGh1bWJuYWlsLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwge1xuICBoZWlnaHQ6IDc4cHg7XG4gIHdpZHRoOiA3OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tdGh1bWJuYWlsIGlvbi1idXR0b24sXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLXRodW1ibmFpbCBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCBpb24tYnV0dG9uIGlvbi1pY29uLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5KTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tdGh1bWJuYWlsIGlvbi1idXR0b24gaW9uLWljb24uYWN0aXZlLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi10aHVtYm5haWwgaW9uLWJ1dHRvbiBpb24taWNvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLXRodW1ibmFpbCBpbWcsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLXRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDc4cHg7XG4gIHdpZHRoOiA3OHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5kci1uYW1lLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAuZHItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tbGFiZWwgLmRyLW5hbWUgLmRhdGUsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5kci1uYW1lIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tbGFiZWwgLnNwZWNpYWxpc3QsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5zcGVjaWFsaXN0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgLnVwY29taW5nLWFwcG9pbnRtZW50IGlvbi1sYWJlbCAubG9jYXRpb24sXG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5sYXN0LWxpbmUsXG5pb24tY29udGVudCAuZmF2LWRvY3RvcnMgaW9uLWxhYmVsIC5sb2NhdGlvbixcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tbGFiZWwgLmxhc3QtbGluZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XG59XG5pb24tY29udGVudCAudXBjb21pbmctYXBwb2ludG1lbnQgaW9uLWxhYmVsIC5sb2NhdGlvbiAudGltZSxcbmlvbi1jb250ZW50IC51cGNvbWluZy1hcHBvaW50bWVudCBpb24tbGFiZWwgLmxhc3QtbGluZSAudGltZSxcbmlvbi1jb250ZW50IC5mYXYtZG9jdG9ycyBpb24tbGFiZWwgLmxvY2F0aW9uIC50aW1lLFxuaW9uLWNvbnRlbnQgLmZhdi1kb2N0b3JzIGlvbi1sYWJlbCAubGFzdC1saW5lIC50aW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5pb24tY29udGVudCAuc3BlY2lhbGlzdC1jb250YWluZXIgLnNwZWNpYWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5pb24tY29udGVudCAuc3BlY2lhbGlzdC1jb250YWluZXIgLnNwZWNpYWxpc3QgaW1nIHtcbiAgd2lkdGg6IDk3cHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIC5zcGVjaWFsaXN0IGgyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xufVxuaW9uLWNvbnRlbnQgLnNwZWNpYWxpc3QtY29udGFpbmVyIC5zcGVjaWFsaXN0IGgzIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbn1cbmlvbi1jb250ZW50IC5vZmZlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAub2ZmZXItY29udGFpbmVyIC5vZmZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDE3MHB4O1xufVxuaW9uLWNvbnRlbnQgLm9mZmVyLWNvbnRhaW5lciAub2ZmZXIgLmJsYWNrLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAwMCAyNSUsICMwMDAgMTM4JSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmlvbi1jb250ZW50IC5vZmZlci1jb250YWluZXIgLm9mZmVyIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xufVxuaW9uLWNvbnRlbnQgLmxvb2tpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbmlvbi1jb250ZW50IC5sb29raW5nLWNvbnRhaW5lciAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGQ0U1Rjk7XG4gIHdpZHRoOiAxNjVweDtcbiAgbWluLXdpZHRoOiAxNjVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5pb24tY29udGVudCAubG9va2luZy1jb250YWluZXIgLmNvbnRlbnQgZGl2IHtcbiAgd2lkdGg6IDQyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5pb24tY29udGVudCAubG9va2luZy1jb250YWluZXIgLmNvbnRlbnQgZGl2IGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWNvbnRlbnQgLmxvb2tpbmctY29udGFpbmVyIC5jb250ZW50IGRpdiBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1yXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5sb29raW5nLWNvbnRhaW5lciAuY29udGVudDpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjRjhFOUU2O1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIHtcbiAgYmFja2dyb3VuZDogI0VFRUNGOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogN3B4O1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIC5jb250ZW50IHtcbiAgd2lkdGg6IDYzJTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAudG9wLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIC5jb250ZW50IC50b3AtbGluZSAuYXBwLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5pb24tY29udGVudCAucGxhbi1vZmZlci1iYW5uZXIgLmNvbnRlbnQgLnRvcC1saW5lIC5wbHVzLWxhYmVsIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktbVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAub2ZmZXItdHh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJzZlVpLW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIC5jb250ZW50IC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwic2ZVaS1tXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5wbGFuLW9mZmVyLWJhbm5lciAuY29udGVudCAucGxhbi1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDE0OHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktclwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xufVxuaW9uLWNvbnRlbnQgLnBsYW4tb2ZmZXItYmFubmVyIC5jb250ZW50IC5wbGFuLWJ0biBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1jb250ZW50IC50cmVhdG1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbmlvbi1jb250ZW50IC50cmVhdG1lbnRzIC50cmVhdG1lbnQgLmltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjZweDtcbiAgd2lkdGg6IDY2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyAudHJlYXRtZW50IC5pbWFnZS1jb250YWluZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDY2cHg7XG59XG5pb24tY29udGVudCAudHJlYXRtZW50cyAudHJlYXRtZW50IC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIG1heC13aWR0aDogMzBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmlvbi1jb250ZW50IC50cmVhdG1lbnRzIC50cmVhdG1lbnQgLm5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcInNmVWktc2JcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWRhcmspO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50cmFuc3BhcmVudGJnIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/appointment.service */ "./src/app/services/appointment.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/foreground-service/ngx */ "./node_modules/@ionic-native/foreground-service/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/FCM.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _emotions_emotions_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../emotions/emotions.page */ "./src/app/pages/emotions/emotions.page.ts");













//import { FCM } from '@ionic-native/fcm/ngx';




//import { ModalPage } from '../modal/modal.page';

let HomePage = class HomePage {
    constructor(util, authSVC, geolocation, nativeGeocoder, platform, zone, alertController, nav, router, modalCtr, appointmentService, http, backgroundGeolocation, foregroundService, backgroundMode, http2, sanitizer, iab, modalController) {
        //this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
        //this.getAppointments();
        this.util = util;
        this.authSVC = authSVC;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.zone = zone;
        this.alertController = alertController;
        this.nav = nav;
        this.router = router;
        this.modalCtr = modalCtr;
        this.appointmentService = appointmentService;
        this.http = http;
        this.backgroundGeolocation = backgroundGeolocation;
        this.foregroundService = foregroundService;
        this.backgroundMode = backgroundMode;
        this.http2 = http2;
        this.sanitizer = sanitizer;
        this.iab = iab;
        this.modalController = modalController;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.Appointments = [];
        this.totalAppointments = 4;
        this.resp = '';
        this.specialist = [
            {
                name: "Dr.Janice Bailey",
                specialist: "Gynaecology",
                img: "../../../assets/imgs/data/Specialist/Specialist1.png",
            },
            {
                name: "Dr.Matthew Willis",
                specialist: "General Surgeon",
                img: "../../../assets/imgs/data/Specialist/Specialist2.png",
            },
            {
                name: "Dr.Diana Willis",
                specialist: "Homeopathic",
                img: "../../../assets/imgs/data/Specialist/Specialist3.png",
            },
        ];
        this.treatments = [
            {
                img: "../../../assets/imgs/data/home/treat1.svg",
                name: "General Medicine",
                color: "#81BA83",
            },
            {
                img: "../../../assets/imgs/data/home/treat2.svg",
                name: "Woman's Health",
                color: "#E48A84",
            },
            {
                img: "../../../assets/imgs/data/home/treat3.svg",
                name: "Bone & Joints",
                color: "#A585BD",
            },
            {
                img: "../../../assets/imgs/data/home/treat4.svg",
                name: "Skin & Hair",
                color: "#00A8E5",
            },
        ];
        this.apps = [];
    }
    ngOnInit() {
        this.locatio = 'Chihuahua, Chihuahua';
        this.authSVC.usersign = JSON.parse(sessionStorage.getItem('user'));
        /*    this.getLocation();
           this.getLocation2(); */
        this.arr = [];
        this.locations = [];
        this.emotion = {
            title: 'Happy',
            img: 'happy.svg'
        };
        this.nowLocation = {
            lat: '0',
            lng: '0'
        };
        this.initializeApp();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.stop();
    }
    ionViewWillEnter() {
        this.util.menuCtrl.enable(true);
    }
    startBackgroundGeolocation() {
        const config = {
            desiredAccuracy: 1,
            stationaryRadius: 10,
            distanceFilter: 10,
            debug: false,
            stopOnTerminate: true,
            notificationTitle: "PeerRecovery Tracking",
            notificationText: "Tracking " + this.nowLocation.lat + ' - ' + this.nowLocation.lng,
            interval: 20000,
        };
        this.backgroundGeolocation.configure(config).then(() => {
            this.backgroundGeolocation
                .on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundGeolocationEvents"].location)
                .subscribe((location) => {
                console.log(location);
                let locationstr = localStorage.getItem("location");
                if (locationstr != null) {
                    this.arr.push(location);
                }
                else {
                    let locationarr = JSON.parse(locationstr);
                    this.arr = locationstr;
                }
                localStorage.setItem("location", JSON.stringify(this.arr));
                this.nowLocation.lat = location.latitude;
                this.nowLocation.lng = location.longitude;
                this.authSVC.updateLocation(location.latitude, location.longitude, this.authSVC.usersign);
                /*    this.backgroundGeolocation.startTask().then(res=>{
         
                     
                     this.getGPS();
                     this.put();
                   }) */
                /* this.sendGPS(location); */
                /* this.getGPS(); */
                /* this.foregroundService.start('Tracking', 'Enabled', 'drawable/fsicon') */
                //this.getGPS()
                //this.authSVC.updateLocation(location.latitude,location.longitude, this.authSVC.usersign)
                /* this.getLocation(location.latitude,location.longitude); */
                /*    this.backgroundGeolocation.finish().then(res=>{
                     this.getGPS();
                   });
          */
                // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
                // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
            });
        });
        // start recording location
        window.app = this;
        // If you wish to turn OFF background-tracking, call the #stop method.
        //this.backgroundGeolocation.stop();
    }
    start() {
        this.backgroundGeolocation.start();
    }
    stop() {
        this.backgroundGeolocation.stop();
    }
    getL() {
        this.locations = JSON.parse(localStorage.getItem("location"));
    }
    /*
      sendGPS(location) {
        if (location.speed == undefined) {
          location.speed = 0;
        }
        let timestamp = new Date(location.time);
    
        this.http
          .put(
            this.gps_update_link, // backend api to post
            {
              lat: location.latitude,
              lng: location.longitude,
              speed: location.speed,
              timestamp: timestamp
            },
            {}
          )
          .then(data => {
          
            
          })
          .catch(error => {
          
            
          });
      } */
    // put(lat?,lng?){
    //   let timestamp = new Date();
    //   let data = {
    //     "lat": 39.7420054,
    //     "lng": -106.146794,
    //     "timestamp": {
    //         "nanoseconds": 870000000,
    //         "seconds": 1624645817
    //     }
    // }
    //   let headers = {
    //     'Content-Type': 'application/json',
    //      'Content-Length': '150',
    //      'Host' : 'peerrecovery-app-default-rtdb.firebaseio.com'
    //   }
    //   console.log(data);
    //   console.log(headers);
    //   /* let d = '{"lat":39.7420054,"lng":-106.146794,"timestamp":{"nanoseconds":870000000,"seconds":1624645817}}' */
    //   /* console.log(d); */
    //   this.http.put('https://peerrecovery-app-default-rtdb.firebaseio.com/Tracking/2ZrxjV7h9yNEQNOEv41Pn0Oaedr2/Current.json',data, headers).then(res=>{
    //     console.log(res,'RESPUESTA');
    //     this.resp = JSON.stringify(res.data)
    //   }).catch(e=>{
    //     console.log(e,'ERROR');
    //     this.resp = JSON.stringify(e)
    //   })
    // }
    getGPS() {
        /* Swal.showLoading(); */
        navigator.geolocation.watchPosition(resp => {
            console.log(resp);
            let pos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            //this.put(resp.coords.latitude,resp.coords.longitude)
            this.authSVC.updateLocation(resp.coords.latitude, resp.coords.longitude, this.authSVC.usersign);
            this.currentPos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude,
                active: true,
                user: this.authSVC.usersign
            };
            this.getLocation(resp.coords.latitude, resp.coords.longitude);
            /* this.foregroundService.start('Tracking2', 'Enabled2', 'drawable/fsicon') */
        });
    }
    getLocation(lat, long) {
        const TU_LLAVE = 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE';
        //const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
        this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`, {}, {}).then(data => {
            let l = JSON.parse(data.data);
            let loc = l.results[0].address_components[3].long_name + ', ' + l.results[0].address_components[4].long_name + ', ' + l.results[0].address_components[5].long_name;
            this.locatio = loc;
            /* this.locatio = l.results[0].formatted_address */
            this.backgroundGeolocation.finish();
        });
    }
    getAppointments() {
        /*   this.appointmentService.getAppointments().on('value', resp=>{
            this.Appointments  = [];
            resp.forEach((childSnapshot: any) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                this.Appointments.push(item);
            });
            console.log(resp);
            console.log(this.Appointments);
          }) */
        this.appointmentService.getApps(this.user.uid).on('value', resp => {
            this.apps = [];
            console.log(resp.val());
            resp.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.appkey = childSnapshot.key;
                this.apps.push(item);
            });
            this.totalAppointments = this.apps.length;
        });
    }
    openAppointmentPage(item) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(item)
            }
        };
        this.router.navigate(['appointment'], navigationExtras);
    }
    newAppointmentPage() {
        this.router.navigate(['appointment']);
    }
    panicAlert(land, param) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Someone in trouble, click on confirm to continue!</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm!',
                        handler: () => {
                            this.router.navigate([land], param);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    chatAlert(land, param) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>New Message, click on confirm to continue!</strong>!!!',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Are you in trouble?, click on confirm to continue!</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm!',
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log(this.currentPos);
                            this.authSVC.sendLocaltion(this.currentPos);
                            this.authSVC.getRel(this.authSVC.usersign).once('value', rel => {
                                let users = Object.keys(rel.val());
                                console.log(users, 'U');
                                users.forEach(u => {
                                    this.authSVC.getTokenID(u).once('value', token => {
                                        console.log(token.val(), 'USERS');
                                        this.sendLocation(this.currentPos, this.user.uid, token.val());
                                    });
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToSearch() {
        this.util.navCtrl.navigateForward("search");
    }
    goToAppointmentDetail() { }
    goToAllSpecialist() {
        this.util.navCtrl.navigateForward("doctorCardView");
    }
    goToDoctorDetail() { }
    goToAllTreatments() { }
    goToAllFavoriteDoctor() { }
    goToChatWithDoc() {
        this.util.navCtrl.navigateForward("chatWithDoctor");
    }
    goToBuyPlan() { }
    getLocationn() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            console.log(data);
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    }
    getLocation2() {
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
            .then((result) => console.log(JSON.stringify(result[0])))
            .catch((error) => console.log(error));
        /*   this.nativeGeocoder.forwardGeocode('Berlin', options)
            .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
            .catch((error: any) => console.log(error)); */
    }
    /*  */
    initializeApp() {
        this.platform.ready().then(() => {
            //this.getUserLocation();
            /* this.backgroundMode.enable(); */
            /*  this.backgroundMode.on('activate').subscribe(res=>{
               this.getGPS();
               this.presentAlert()
              
             }) */
            this.startBackgroundGeolocation();
            this.getGPS();
            this.getMenu();
            this.getAppointments();
            this.getEmotion();
            //FCM.getToken()
            cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_13__["FCM"].getToken().then(token => {
                console.log(token, 'token');
                this.authSVC.sendToken(this.authSVC.usersign, token);
            }).catch(res => {
                console.log(res, 'token');
            });
            this.getNoti();
            //this.startBackgroundGeolocation()
            //this.put(1,1);
            this.backgroundGeolocation.start();
        });
    }
    getUserLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            }
        }).catch((error) => {
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
            let options = {
                useLocale: true,
                maxResults: 5
            };
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                console.log('not cordove');
                this.getGeoLocation(data.coords.latitude, data.coords.longitude);
            }
        });
    }
    getGeoLocation(lat, lng, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (navigator.geolocation) {
                let geocoder = yield new google.maps.Geocoder();
                let latlng = yield new google.maps.LatLng(lat, lng);
                let request = { latLng: latlng };
                yield geocoder.geocode(request, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        let result = results[0];
                        this.zone.run(() => {
                            if (result != null) {
                                this.userCity = result.formatted_address;
                                if (type === 'reverseGeocode') {
                                    this.latLngResult = result.formatted_address;
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    reverseGeocode(lat, lng) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
                .then((result) => this.userLocationFromLatLng = result[0])
                .catch((error) => console.log(error));
        }
        else {
            this.getGeoLocation(lat, lng, 'reverseGeocode');
        }
    }
    forwardGeocode(address) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.forwardGeocode(address, options)
                .then((result) => {
                this.zone.run(() => {
                    this.lat = result[0].latitude;
                    this.lng = result[0].longitude;
                });
            })
                .catch((error) => console.log(error));
        }
        else {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    this.zone.run(() => {
                        this.lat = results[0].geometry.location.lat();
                        this.lng = results[0].geometry.location.lng();
                    });
                }
                else {
                    alert('Error - ' + results + ' & Status - ' + status);
                }
            });
        }
    }
    getMenu() {
        let menu;
        this.user = JSON.parse(sessionStorage.getItem('user'));
        console.log(this.user);
        this.authSVC.getMenu(this.user).orderByChild('order').on('value', (resp) => {
            console.log(resp);
            //const menu = snapshotToArray(resp);
            menu = [];
            let notemenu = {
                titulo: "Notes",
                url: "/notes",
                icono: "mdi mdi-note",
                order: 10,
                key: 'Notes'
            };
            resp.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                if ((item.titulo != 'Settings')) {
                    /* if ((item.titulo!='Settings') && (item.titulo!='Tracking')){ */
                    menu.push(item);
                }
            });
            menu.push(notemenu);
            console.log(menu, 'menu');
            this.authSVC.menu = menu;
        });
    }
    getStyle(item) {
        let color;
        let hoy = new Date();
        let fecha = new Date();
        fecha.setTime(item.appointmentdate.seconds * 1000);
        let h = +fecha - +hoy;
        h = h / 86400000;
        if (h < 0) {
            color = {
                'background-color': '#ff3333'
            };
            return color;
        }
        else if (h < 1) {
            color = {
                'background-color': '#ffb3b3'
            };
            return color;
        }
        else if (h < 3) {
            color = {
                'background-color': '#ffff99'
            };
            return color;
        }
        else {
            color = {
                'background-color': '#66ff66'
            };
            return color;
        }
    }
    getNoti() {
        cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_13__["FCM"].onNotification().subscribe(data => {
            console.log(data.data);
            let navigationExtras = {
                queryParams: {
                    data: JSON.stringify(data.data)
                }
            };
            if (data.wasTapped) {
                console.log('Received in background');
                this.router.navigate([data.landing_page], navigationExtras);
            }
            else {
                console.log('Received in foreground');
                if (data.landing_page == 'tracking') {
                    this.panicAlert(data.landing_page, navigationExtras);
                }
                else {
                    this.chatAlert(data.landing_page, navigationExtras);
                }
            }
        });
    }
    sendLocation(currentPos, uid, user) {
        let data = {
            "lat": currentPos.lat,
            "lng": currentPos.lng,
            "timestamp": currentPos.timestamp,
            "user": uid
        };
        let body = {
            "notification": {
                "title": "PeerRecovery",
                "body": "PANIC BUTTON",
                "sound": "default",
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "icon": "fcm_push_icon"
            },
            "data": {
                "landing_page": "tracking",
                "data": data
            },
            "to": user,
            "priority": "high",
            "restricted_package_name": ""
        };
        let headers = {
            'Authorization': 'key=AAAA7CwLHfI:APA91bGdbyFJFwO4xWEBilRVInU37vOoQ5jURZv0PHbD8zXc4pT58GEy1ETkskaOfIJEhHtR4YYMr4SbDRiuEI7BJG0JfoXDbguV691brsZri_bLqMQLc-FWffr1EakQsurEnb0ZrN2_',
            'Content-Type': 'application/json'
        };
        /*  this.http.post('https://fcm.googleapis.com/fcm/send',body,headers).then(res=>{
           console.log(res,'res');
         }).catch(e=>{
           console.log(e,'e');
         }) */
        this.http2.post('https://fcm.googleapis.com/fcm/send', body, { headers }).subscribe(res => {
            console.log(res);
        });
    }
    openlink(item) {
        /*
            const url = item.link;
        
            const link = document.createElement('a');
            link.href = url;
            link.target = '_system'
            link.click(); */
        this.iab.create(item.link, '_system', this.options).show();
    }
    openNote(item) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(item)
            }
        };
        this.router.navigate(['addeditnotes'], navigationExtras);
    }
    openProfileDataSheet() {
        this.router.navigate(['profiledatasheet']);
    }
    openEmotions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.router.navigate(['emotions']);
            const modal = yield this.modalController.create({
                component: _emotions_emotions_page__WEBPACK_IMPORTED_MODULE_17__["EmotionsPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    /*     newAppointmentPage(){
          this.router.navigate(['appointment']);
        }
       */
    getEmotion() {
        this.emotion = '';
        this.util.getEmotion(this.user.uid).on('value', resp => {
            this.emotion = resp.val();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundGeolocation"] },
    { type: _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_11__["ForegroundService"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
        _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundGeolocation"],
        _ionic_native_foreground_service_ngx__WEBPACK_IMPORTED_MODULE_11__["ForegroundService"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_16__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map