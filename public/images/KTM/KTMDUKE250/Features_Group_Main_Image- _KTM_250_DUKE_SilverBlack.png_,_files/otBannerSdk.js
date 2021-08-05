/**
 * onetrust-banner-sdk
 * v6.7.0
 * by OneTrust LLC
 * Copyright 2020
 */
!(function () {
  "use strict";
  var o = function (e, t) {
    return (o =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
      })(e, t);
  };
  var r = function () {
    return (r =
      Object.assign ||
      function (e) {
        for (var t, o = 1, n = arguments.length; o < n; o++)
          for (var r in (t = arguments[o]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  };
  function l(s, i, a, l) {
    return new (a = a || Promise)(function (e, t) {
      function o(e) {
        try {
          r(l.next(e));
        } catch (e) {
          t(e);
        }
      }
      function n(e) {
        try {
          r(l.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function r(t) {
        t.done
          ? e(t.value)
          : new a(function (e) {
              e(t.value);
            }).then(o, n);
      }
      r((l = l.apply(s, i || [])).next());
    });
  }
  function k(o, n) {
    var r,
      s,
      i,
      e,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (e = { next: t(0), throw: t(1), return: t(2) }),
      "function" == typeof Symbol &&
        (e[Symbol.iterator] = function () {
          return this;
        }),
      e
    );
    function t(t) {
      return function (e) {
        return (function (t) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((r = 1),
                s &&
                  (i =
                    2 & t[0]
                      ? s.return
                      : t[0]
                      ? s.throw || ((i = s.return) && i.call(s), 0)
                      : s.next) &&
                  !(i = i.call(s, t[1])).done)
              )
                return i;
              switch (((s = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                case 0:
                case 1:
                  i = t;
                  break;
                case 4:
                  return a.label++, { value: t[1], done: !1 };
                case 5:
                  a.label++, (s = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(i = 0 < (i = a.trys).length && i[i.length - 1]) &&
                    (6 === t[0] || 2 === t[0])
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                    a.label = t[1];
                    break;
                  }
                  if (6 === t[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = t);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(t);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              t = n.call(o, a);
            } catch (e) {
              (t = [6, e]), (s = 0);
            } finally {
              r = i = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, e]);
      };
    }
  }
  function h() {
    for (var e = 0, t = 0, o = arguments.length; t < o; t++)
      e += arguments[t].length;
    var n = Array(e),
      r = 0;
    for (t = 0; t < o; t++)
      for (var s = arguments[t], i = 0, a = s.length; i < a; i++, r++)
        n[r] = s[i];
    return n;
  }
  var t = setTimeout;
  function c(e) {
    return Boolean(e && void 0 !== e.length);
  }
  function n() {}
  function s(e) {
    if (!(this instanceof s))
      throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      b(e, this);
  }
  function i(o, n) {
    for (; 3 === o._state; ) o = o._value;
    0 !== o._state
      ? ((o._handled = !0),
        s._immediateFn(function () {
          var e = 1 === o._state ? n.onFulfilled : n.onRejected;
          if (null !== e) {
            var t;
            try {
              t = e(o._value);
            } catch (e) {
              return void d(n.promise, e);
            }
            a(n.promise, t);
          } else (1 === o._state ? a : d)(n.promise, o._value);
        }))
      : o._deferreds.push(n);
  }
  function a(t, e) {
    try {
      if (e === t)
        throw new TypeError("A promise cannot be resolved with itself.");
      if (e && ("object" == typeof e || "function" == typeof e)) {
        var o = e.then;
        if (e instanceof s) return (t._state = 3), (t._value = e), void u(t);
        if ("function" == typeof o)
          return void b(
            ((n = o),
            (r = e),
            function () {
              n.apply(r, arguments);
            }),
            t
          );
      }
      (t._state = 1), (t._value = e), u(t);
    } catch (e) {
      d(t, e);
    }
    var n, r;
  }
  function d(e, t) {
    (e._state = 2), (e._value = t), u(e);
  }
  function u(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      s._immediateFn(function () {
        e._handled || s._unhandledRejectionFn(e._value);
      });
    for (var t = 0, o = e._deferreds.length; t < o; t++) i(e, e._deferreds[t]);
    e._deferreds = null;
  }
  function p(e, t, o) {
    (this.onFulfilled = "function" == typeof e ? e : null),
      (this.onRejected = "function" == typeof t ? t : null),
      (this.promise = o);
  }
  function b(e, t) {
    var o = !1;
    try {
      e(
        function (e) {
          o || ((o = !0), a(t, e));
        },
        function (e) {
          o || ((o = !0), d(t, e));
        }
      );
    } catch (e) {
      if (o) return;
      (o = !0), d(t, e);
    }
  }
  function e() {}
  (s.prototype.catch = function (e) {
    return this.then(null, e);
  }),
    (s.prototype.then = function (e, t) {
      var o = new this.constructor(n);
      return i(this, new p(e, t, o)), o;
    }),
    (s.prototype.finally = function (t) {
      var o = this.constructor;
      return this.then(
        function (e) {
          return o.resolve(t()).then(function () {
            return e;
          });
        },
        function (e) {
          return o.resolve(t()).then(function () {
            return o.reject(e);
          });
        }
      );
    }),
    (s.all = function (t) {
      return new s(function (n, r) {
        if (!c(t)) return r(new TypeError("Promise.all accepts an array"));
        var s = Array.prototype.slice.call(t);
        if (0 === s.length) return n([]);
        var i = s.length;
        function a(t, e) {
          try {
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var o = e.then;
              if ("function" == typeof o)
                return void o.call(
                  e,
                  function (e) {
                    a(t, e);
                  },
                  r
                );
            }
            (s[t] = e), 0 == --i && n(s);
          } catch (e) {
            r(e);
          }
        }
        for (var e = 0; e < s.length; e++) a(e, s[e]);
      });
    }),
    (s.resolve = function (t) {
      return t && "object" == typeof t && t.constructor === s
        ? t
        : new s(function (e) {
            e(t);
          });
    }),
    (s.reject = function (o) {
      return new s(function (e, t) {
        t(o);
      });
    }),
    (s.race = function (r) {
      return new s(function (e, t) {
        if (!c(r)) return t(new TypeError("Promise.race accepts an array"));
        for (var o = 0, n = r.length; o < n; o++) s.resolve(r[o]).then(e, t);
      });
    }),
    (s._immediateFn =
      "function" == typeof setImmediate
        ? function (e) {
            setImmediate(e);
          }
        : function (e) {
            t(e, 0);
          }),
    (s._unhandledRejectionFn = function (e) {
      "undefined" != typeof console &&
        console &&
        console.warn("Possible Unhandled Promise Rejection:", e);
    });
  var U,
    y = new ((e.prototype.initPolyfill = function () {
      this.initArrayIncludesPolyfill(),
        this.initObjectAssignPolyfill(),
        this.initArrayFillPolyfill(),
        this.initClosestPolyfill(),
        this.initIncludesPolyfill(),
        this.initEndsWithPoly(),
        this.initCustomEventPolyfill(),
        this.promisesPolyfil();
    }),
    (e.prototype.initArrayIncludesPolyfill = function () {
      Array.prototype.includes ||
        Object.defineProperty(Array.prototype, "includes", {
          value: function (e) {
            for (var t = [], o = 1; o < arguments.length; o++)
              t[o - 1] = arguments[o];
            if (null == this)
              throw new TypeError(
                "Array.prototype.includes called on null or undefined"
              );
            var n = Object(this),
              r = parseInt(n.length, 10) || 0;
            if (0 === r) return !1;
            var s,
              i,
              a = t[1] || 0;
            for (0 <= a ? (s = a) : (s = r + a) < 0 && (s = 0); s < r; ) {
              if (e === (i = n[s]) || (e != e && i != i)) return !0;
              s++;
            }
            return !1;
          },
          writable: !0,
          configurable: !0,
        });
    }),
    (e.prototype.initEndsWithPoly = function () {
      String.prototype.endsWith ||
        Object.defineProperty(String.prototype, "endsWith", {
          value: function (e, t) {
            return (
              (void 0 === t || t > this.length) && (t = this.length),
              this.substring(t - e.length, t) === e
            );
          },
          writable: !0,
          configurable: !0,
        });
    }),
    (e.prototype.initClosestPolyfill = function () {
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          Object.defineProperty(Element.prototype, "closest", {
            value: function (e) {
              var t = this;
              do {
                if (t.matches(e)) return t;
                t = t.parentElement || t.parentNode;
              } while (null !== t && 1 === t.nodeType);
              return null;
            },
            writable: !0,
            configurable: !0,
          });
    }),
    (e.prototype.initIncludesPolyfill = function () {
      String.prototype.includes ||
        Object.defineProperty(String.prototype, "includes", {
          value: function (e, t) {
            return (
              "number" != typeof t && (t = 0),
              !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            );
          },
          writable: !0,
          configurable: !0,
        });
    }),
    (e.prototype.initObjectAssignPolyfill = function () {
      "function" != typeof Object.assign &&
        Object.defineProperty(Object, "assign", {
          value: function (e, t) {
            if (null == e)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(e), n = 1; n < arguments.length; n++) {
              var r = arguments[n];
              if (null != r)
                for (var s in r)
                  Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s]);
            }
            return o;
          },
          writable: !0,
          configurable: !0,
        });
    }),
    (e.prototype.initArrayFillPolyfill = function () {
      Array.prototype.fill ||
        Object.defineProperty(Array.prototype, "fill", {
          value: function (e) {
            if (null == this)
              throw new TypeError("this is null or not defined");
            for (
              var t = Object(this),
                o = t.length >>> 0,
                n = arguments[1] >> 0,
                r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o),
                s = arguments[2],
                i = void 0 === s ? o : s >> 0,
                a = i < 0 ? Math.max(o + i, 0) : Math.min(i, o);
              r < a;

            )
              (t[r] = e), r++;
            return t;
          },
        });
    }),
    (e.prototype.initCustomEventPolyfill = function () {
      if ("function" == typeof window.CustomEvent) return !1;
      function e(e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var o = document.createEvent("CustomEvent");
        return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o;
      }
      (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    }),
    (e.prototype.insertViewPortTag = function () {
      var e = document.querySelector('meta[name="viewport"]'),
        t = document.createElement("meta");
      (t.name = "viewport"),
        (t.content = "width=device-width, initial-scale=1"),
        e || document.head.appendChild(t);
    }),
    (e.prototype.promisesPolyfil = function () {
      "undefined" == typeof Promise && (window.Promise = s);
    }),
    e)(),
    f = {
      P_Content: "#ot-pc-content",
      P_Logo: ".ot-pc-logo",
      P_Title: "#ot-pc-title",
      P_Policy_Txt: "#ot-pc-desc",
      P_Vendor_Title: "#ot-lst-title span",
      P_Manage_Cookies_Txt: "#ot-category-title",
      P_Label_Txt: ".ot-label-txt",
      P_Category_Header: ".ot-cat-header",
      P_Category_Grp: ".ot-cat-grp",
      P_Category_Item: ".ot-cat-item",
      P_Vendor_List: "#ot-pc-lst",
      P_Vendor_Content: "#ot-lst-cnt",
      P_Vendor_Container: "#ot-ven-lst",
      P_Ven_Bx: "ot-ven-box",
      P_Ven_Name: ".ot-ven-name",
      P_Ven_Link: ".ot-ven-link",
      P_Ven_Ctgl: "ot-ven-ctgl",
      P_Ven_Ltgl: "ot-ven-litgl",
      P_Ven_Ltgl_Only: "ot-ven-litgl-only",
      P_Ven_Opts: ".ot-ven-opts",
      P_Triangle: "#ot-anchor",
      P_Fltr_Modal: "#ot-fltr-modal",
      P_Fltr_Options: ".ot-fltr-opts",
      P_Fltr_Option: ".ot-fltr-opt",
      P_Select_Cntr: "#ot-sel-blk",
      P_Host_Cntr: "#ot-host-lst",
      P_Host_Hdr: ".ot-host-hdr",
      P_Host_Desc: ".ot-host-desc",
      P_Li_Hdr: ".ot-pli-hdr",
      P_Li_Title: ".ot-li-title",
      P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
      P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
      P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
      P_Host_Title: ".ot-host-name",
      P_Leg_Select_All: ".ot-sel-all-hdr",
      P_Leg_Header: ".ot-li-hdr",
      P_Acc_Header: ".ot-acc-hdr",
      P_Cnsnt_Header: ".ot-consent-hdr",
      P_Tgl_Cntr: ".ot-tgl-cntr",
      P_CBx_Cntr: ".ot-chkbox",
      P_Sel_All_Host_El: "ot-selall-hostcntr",
      P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
      P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
      P_c_Name: "ot-c-name",
      P_c_Host: "ot-c-host",
      P_c_Duration: "ot-c-duration",
      P_c_Type: "ot-c-type",
      P_c_Category: "ot-c-category",
      P_c_Desc: "ot-c-description",
      P_Host_View_Cookies: ".ot-host-expand",
      P_Host_Opt: ".ot-host-opt",
      P_Host_Info: ".ot-host-info",
      P_Arrw_Cntr: ".ot-arw-cntr",
      P_Acc_Txt: ".ot-acc-txt",
      P_Vendor_CheckBx: "ot-ven-chkbox",
      P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
      P_Host_UI: "ot-hosts-ui",
      P_Host_Cnt: "ot-host-cnt",
      P_Host_Bx: "ot-host-box",
      P_Close_Btn: ".ot-close-icon",
      P_Ven_Lst_Cntr: ".ot-vlst-cntr",
      P_Host_Lst_cntr: ".ot-hlst-cntr",
      P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
      P_Subgrp_Desc: ".ot-subgrp-desc",
      P_Subgp_ul: ".ot-subgrps",
      P_Subgrp_li: ".ot-subgrp",
      P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
      P_Grp_Container: ".ot-grps-cntr",
      P_Privacy_Txt: "#ot-pvcy-txt",
      P_Privacy_Hdr: "#ot-pvcy-hdr",
      P_Active_Menu: "ot-active-menu",
      P_Desc_Container: ".ot-desc-cntr",
      P_Tab_Grp_Hdr: "ot-grp-hdr1",
      P_Search_Cntr: "#ot-search-cntr",
      P_Clr_Fltr_Txt: "#clear-filters-handler",
      P_Acc_Grp_Desc: ".ot-acc-grpdesc",
      P_Acc_Container: ".ot-acc-grpcntr",
    },
    g = {
      P_Grp_Container: ".groups-container",
      P_Content: "#ot-content",
      P_Category_Header: ".category-header",
      P_Desc_Container: ".description-container",
      P_Label_Txt: ".label-text",
      P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
      P_Leg_Int_Hdr: ".leg-int-header",
      P_Not_Always_Active: "p:not(.ot-always-active)",
      P_Category_Grp: ".category-group",
      P_Category_Item: ".category-item",
      P_Sub_Grp_Cntr: ".cookie-subgroups-container",
      P_Acc_Container: ".ot-accordion-pc-container",
      P_Close_Btn: ".pc-close-button",
      P_Logo: ".pc-logo",
      P_Title: "#pc-title",
      P_Privacy_Txt: "#privacy-text",
      P_Privacy_Hdr: "#pc-privacy-header",
      P_Policy_Txt: "#pc-policy-text",
      P_Manage_Cookies_Txt: "#manage-cookies-text",
      P_Vendor_Title: "#vendors-list-title",
      P_Vendor_List: "#vendors-list",
      P_Vendor_Content: "#vendor-list-content",
      P_Vendor_Container: "#vendors-list-container",
      P_Ven_Bx: "vendor-box",
      P_Ven_Name: ".vendor-title",
      P_Ven_Link: ".vendor-privacy-notice",
      P_Ven_Ctgl: "ot-vendor-consent-tgl",
      P_Ven_Ltgl: "ot-leg-int-tgl",
      P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
      P_Ven_Opts: ".vendor-options",
      P_Triangle: "#ot-triangle",
      P_Fltr_Modal: "#ot-filter-modal",
      P_Fltr_Options: ".ot-group-options",
      P_Fltr_Option: ".ot-group-option",
      P_Select_Cntr: "#select-all-container",
      P_Host_Cntr: "#hosts-list-container",
      P_Host_Hdr: ".host-info",
      P_Host_Desc: ".host-description",
      P_Host_Opt: ".host-option-group",
      P_Host_Info: ".vendor-host",
      P_Arrw_Cntr: ".ot-arrow-container",
      P_Li_Hdr: ".leg-int-header",
      P_Li_Title: ".leg-int-title",
      P_Acc_Txt: ".accordion-text",
      P_Tgl_Cntr: ".ot-toggle-group",
      P_CBx_Cntr: ".ot-chkbox-container",
      P_Host_Title: ".host-title",
      P_Leg_Select_All: ".leg-int-sel-all-hdr",
      P_Leg_Header: ".leg-int-hdr",
      P_Cnsnt_Header: ".consent-hdr",
      P_Acc_Header: ".accordion-header",
      P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
      P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
      P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
      P_Sel_All_Host_El: "select-all-hosts-input-container",
      P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
      P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
      P_c_Name: "cookie-name-container",
      P_c_Host: "cookie-host-container",
      P_c_Duration: "cookie-duration-container",
      P_c_Type: "cookie-type-container",
      P_c_Category: "cookie-category-container",
      P_c_Desc: "cookie-description-container",
      P_Host_View_Cookies: ".host-view-cookies",
      P_Vendor_CheckBx: "vendor-chkbox",
      P_Vendor_LegCheckBx: "vendor-leg-chkbox",
      P_Host_UI: "hosts-list",
      P_Host_Cnt: "host-list-content",
      P_Host_Bx: "host-box",
      P_Ven_Lst_Cntr: ".category-vendors-list-container",
      P_Host_Lst_cntr: ".category-host-list-container",
      P_Subgrp_Desc: ".cookie-subgroups-description-legal",
      P_Subgp_ul: ".cookie-subgroups",
      P_Subgrp_li: ".cookie-subgroup",
      P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
      P_Active_Menu: "active-group",
      P_Tab_Grp_Hdr: "group-toggle",
      P_Search_Cntr: "#search-container",
      P_Clr_Fltr_Txt: "#clear-filters-handler p",
    };
  var K = new (function () {})();
  function m() {}
  var W = new ((m.prototype.convertKeyValueLowerCase = function (e) {
      for (var t in e)
        e[t.toLowerCase()]
          ? (e[t.toLowerCase()] = e[t].toLowerCase())
          : ((e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
      return e;
    }),
    (m.prototype.getValidUrl = function (e) {
      if (e)
        return e.match(/^:\/\//)
          ? "http" + e
          : e.match(/^(http)s?:\/\//i)
          ? e
          : "http://" + e;
    }),
    (m.prototype.hexToRgb = function (e) {
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return t
        ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16),
          }
        : null;
    }),
    (m.prototype.serialiseArrayToString = function (e) {
      return e.toString();
    }),
    (m.prototype.deserialiseStringToArray = function (e) {
      return e ? e.split(",") : [];
    }),
    (m.prototype.empty = function (e) {
      var t = document.getElementById(e);
      if (t) for (; t.hasChildNodes(); ) t.removeChild(t.lastChild);
    }),
    (m.prototype.show = function (e) {
      var t = document.getElementById(e);
      t && (t.style.display = "block");
    }),
    (m.prototype.remove = function (e) {
      var t = document.getElementById(e);
      t && t.parentNode && t.parentNode.removeChild(t);
    }),
    (m.prototype.appendTo = function (e, t) {
      var o,
        n = document.getElementById(e);
      n &&
        (((o = document.createElement("div")).innerHTML = t), n.appendChild(o));
    }),
    (m.prototype.contains = function (e, t) {
      var o;
      for (o = 0; o < e.length; o += 1)
        if (e[o].toString().toLowerCase() === t.toString().toLowerCase())
          return !0;
      return !1;
    }),
    (m.prototype.indexOf = function (e, t) {
      var o;
      for (o = 0; o < e.length; o += 1) if (e[o] === t) return o;
      return -1;
    }),
    (m.prototype.endsWith = function (e, t) {
      return -1 !== e.indexOf(t, e.length - t.length);
    }),
    (m.prototype.param = function (e) {
      var t,
        o = "";
      for (t in e)
        e.hasOwnProperty(t) &&
          ("" !== o && (o += "&"),
          (o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+")));
      return o;
    }),
    (m.prototype.generateUUID = function () {
      var o = new Date().getTime();
      return (
        "undefined" != typeof performance &&
          "function" == typeof performance.now &&
          (o += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = (o + 16 * Math.random()) % 16 | 0;
          return (
            (o = Math.floor(o / 16)), ("x" === e ? t : (3 & t) | 8).toString(16)
          );
        })
      );
    }),
    (m.prototype.convertIABVendorPurposeArrayToObject = function (e) {
      var o = {};
      return (
        e.map(function (e) {
          var t = e.split(":");
          o[parseInt(t[0])] = "true" === t[1];
        }),
        o
      );
    }),
    (m.prototype.getActiveIdArray = function (e) {
      return e
        .filter(function (e) {
          return "true" === e.split(":")[1];
        })
        .map(function (e) {
          return parseInt(e.split(":")[0]);
        });
    }),
    (m.prototype.distinctArray = function (e) {
      var t = new Array();
      return (
        e.forEach(function (e) {
          t.indexOf(e) < 0 && t.push(e);
        }),
        t
      );
    }),
    (m.prototype.getIdArray = function (e) {
      return e.map(function (e) {
        return parseInt(e.split(":")[0]);
      });
    }),
    (m.prototype.getURL = function (e) {
      var t = document.createElement("a");
      return (t.href = e), t;
    }),
    (m.prototype.removeURLPrefixes = function (e) {
      return e
        .toLowerCase()
        .replace(/(^\w+:|^)\/\//, "")
        .replace("www.", "");
    }),
    (m.prototype.getFilteredVenderList = function (t, e) {
      return (
        (t = t.filter(function (e) {
          var t = parseInt(e.split(":")[0]);
          return -1 < this.indexOf(t);
        }, e)),
        e
          .filter(function (e) {
            var t = e + ":true";
            return this.indexOf(t) <= -1;
          }, t)
          .forEach(function (e) {
            t.push(e + ":false");
          }),
        t
      );
    }),
    (m.prototype.removeChild = function (e) {
      if (e)
        if (e instanceof NodeList)
          for (var t = 0; t < e.length; t++)
            e[t].parentElement.removeChild(e[t]);
        else e.parentElement.removeChild(e);
    }),
    (m.prototype.getRelativeURL = function (e, t, o) {
      if ((void 0 === o && (o = !1), t)) {
        var n =
          "./" +
          e
            .replace(/^(http|https):\/\//, "")
            .split("/")
            .slice(1)
            .join("/")
            .replace(".json", "");
        return o ? n : n + ".js";
      }
      return e;
    }),
    (m.prototype.setCheckedAttribute = function (e, t, o) {
      e && (t = document.querySelector(e)),
        t &&
          (t.setAttribute("aria-checked", o.toString()),
          o ? t.setAttribute("checked", "") : t.removeAttribute("checked"),
          (t.checked = o));
    }),
    (m.prototype.setDisabledAttribute = function (e, t, o) {
      e && (t = document.querySelector(e)),
        t &&
          (o
            ? t.setAttribute("disabled", o.toString())
            : t.removeAttribute("disabled"));
    }),
    (m.prototype.setHtmlAttributes = function (e, t) {
      for (var o in t) e.setAttribute(o, t[o]), (e[o] = t[o]);
    }),
    m)(),
    C = "BRANCH",
    v = "COOKIE",
    P = "IAB",
    A = "IAB2_FEATURE",
    V = "IAB2_PURPOSE",
    T = "IAB2_SPL_FEATURE",
    I = "IAB2_SPL_PURPOSE",
    w = "IAB2_STACK",
    B = [
      "IAB",
      "IAB2_PURPOSE",
      "IAB2_STACK",
      "IAB2_FEATURE",
      "IAB2_SPL_PURPOSE",
      "IAB2_SPL_FEATURE",
    ],
    E = ["COOKIE", "BRANCH", "IAB2_STACK"],
    D = ["IAB", "IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
    G = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
    H = [
      "IAB2_PURPOSE",
      "IAB2_SPL_PURPOSE",
      "IAB2_FEATURE",
      "IAB2_SPL_FEATURE",
    ];
  function S() {}
  var O = new ((S.prototype.getGroupIdForCookie = function (e) {
    return e.CustomGroupId
      ? e.CustomGroupId
      : 0 === e.OptanonGroupId
      ? "0_" + e.GroupId
      : e.OptanonGroupId;
  }),
  (S.prototype.isValidConsentNoticeGroup = function (e, t) {
    var o = this;
    if (!e.ShowInPopup) return !1;
    var n = e.FirstPartyCookies.length || e.Hosts.length,
      r = !1,
      s = !1,
      i = !1;
    if (this.isTopLevelGroup(e)) {
      e.SubGroups.length &&
        ((r = e.SubGroups.some(function (e) {
          return (
            o.safeGroupName(e) && e.ShowInPopup && e.FirstPartyCookies.length
          );
        })),
        (s = e.SubGroups.some(function (e) {
          return o.safeGroupName(e) && e.ShowInPopup && e.Hosts.length;
        })),
        !t ||
          (e.FirstPartyCookies.length && e.Hosts.length) ||
          (i = !e.SubGroups.some(function (e) {
            return -1 === B.indexOf(e.Type);
          })));
      var a = e.SubGroups.some(function (e) {
        return -1 < B.indexOf(e.Type);
      });
      (-1 < B.indexOf(e.Type) || a) && (e.ShowVendorList = !0),
        (e.Hosts.length || s || r) && (e.ShowHostList = !0);
    }
    return n || -1 < B.indexOf(e.Type) || r || s || i;
  }),
  (S.prototype.isTopLevelGroup = function (e) {
    return e && !e.Parent;
  }),
  (S.prototype.safeGroupName = function (e) {
    return e && e.GroupName ? e.GroupName : "";
  }),
  (S.prototype.isBundleOrStackActive = function (e, t, r) {
    var s = this;
    void 0 === r && (r = null);
    var i = e.oneTrustIABConsent,
      a = !0;
    return (
      (r = r || e.optanonHtmlGroupData),
      t.SubGroups.some(function (o) {
        if (!a) return !0;
        if (o.Type === v)
          r.some(function (e) {
            var t = e.split(":");
            if (t[0] === o.CustomGroupId) return "0" === t[1] && (a = !1), !0;
          });
        else {
          var n = s.extractGroupIdForIabGroup(o.CustomGroupId);
          (o.Type === T ? i.specialFeatures : i.purpose).some(function (e) {
            var t = e.split(":");
            if (t[0] === n) return "false" === t[1] && (a = !1), !0;
          });
        }
      }),
      a
    );
  }),
  (S.prototype.extractGroupIdForIabGroup = function (e, t) {
    return (
      void 0 === t && (t = "IAB2"),
      "IAB" === t
        ? (e = e.replace("IAB", ""))
        : "IAB2" === t &&
          (-1 < e.indexOf("ISPV2_")
            ? (e = e.replace("ISPV2_", ""))
            : -1 < e.indexOf("IABV2_")
            ? (e = e.replace("IABV2_", ""))
            : -1 < e.indexOf("IFEV2_")
            ? (e = e.replace("IFEV2_", ""))
            : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", ""))),
      e
    );
  }),
  S)();
  function x() {}
  var L,
    _,
    N,
    M,
    F,
    R,
    q,
    j,
    z,
    Y,
    J,
    Q,
    Z,
    X,
    $,
    ee,
    te,
    oe,
    ne,
    re,
    se,
    ie,
    ae,
    le,
    ce = new ((x.prototype.setUseDocumentLanguage = function (e) {
      this.useDocumentLanguage = e;
    }),
    (x.prototype.getLanguageSwitcherScriptElement = function (e) {
      return document.querySelector("script[src*='" + e + "']");
    }),
    x)();
  function de() {
    (this.otCookieData =
      (window.OneTrust && window.OneTrust.otCookieData) || []),
      (this.userLocation = { country: "", state: "" }),
      (this.iabGroups = {
        purposes: {},
        legIntPurposes: {},
        specialPurposes: {},
        features: {},
        specialFeatures: {},
      }),
      (this.iabType = null),
      (this.legIntPurposesCount = 0),
      (this.grpContainLegalOptOut = !1),
      (this.addtlConsentVersion = "1~"),
      (this.vendorsSetting = {}),
      (this.isAddtlConsent = !1),
      (this.dsParams = {}),
      (this.ampData = {}),
      (this.isV2Stub = !1),
      (this.stubFileName = "otSDKStub"),
      (this.purposeOneTreatment = !1),
      (this.cookieSettingsButtonFileName = "otCookieSettingsButton.json"),
      (this.cookieSettingsButtonFileNameRtl = "otCookieSettingsButtonRtl.json"),
      (this.purposeOneGrpId = "IABV2_1"),
      this.initData();
  }
  ((_ = L = L || {})[(_.Unknown = 0)] = "Unknown"),
    (_[(_.BannerCloseButton = 1)] = "BannerCloseButton"),
    (_[(_.ConfirmChoiceButton = 2)] = "ConfirmChoiceButton"),
    (_[(_.AcceptAll = 3)] = "AcceptAll"),
    (_[(_.RejectAll = 4)] = "RejectAll"),
    ((M = N = N || {})[(M.Purpose = 1)] = "Purpose"),
    (M[(M.SpecialFeature = 2)] = "SpecialFeature"),
    ((R = F = F || {}).Legal = "legal"),
    (R.UserFriendly = "user_friendly"),
    ((j = q = q || {}).Top = "top"),
    (j.Bottom = "bottom"),
    ((Y = z = z || {})[(Y.Banner = 0)] = "Banner"),
    (Y[(Y.PrefCenterHome = 1)] = "PrefCenterHome"),
    (Y[(Y.VendorList = 2)] = "VendorList"),
    (Y[(Y.CookieList = 3)] = "CookieList"),
    ((Q = J = J || {})[(Q.RightArrow = 39)] = "RightArrow"),
    (Q[(Q.LeftArrow = 37)] = "LeftArrow"),
    ((X = Z = Z || {}).AfterTitle = "AfterTitle"),
    (X.AfterDescription = "AfterDescription"),
    (X.AfterDPD = "AfterDPD"),
    ((ee = $ = $ || {}).PlusMinus = "Plusminus"),
    (ee.Caret = "Caret"),
    (ee.NoAccordion = "NoAccordion"),
    ((oe = te = te || {}).Consent = "Consent"),
    (oe.LI = "LI"),
    (oe.AddtlConsent = "AddtlConsent"),
    ((re = ne = ne || {}).Iab1Pub = "eupubconsent"),
    (re.Iab2Pub = "eupubconsent-v2"),
    (re.Iab1Eu = "euconsent"),
    (re.Iab2Eu = "euconsent-v2"),
    ((ie = se = se || {})[(ie.Disabled = 0)] = "Disabled"),
    (ie[(ie.Consent = 1)] = "Consent"),
    (ie[(ie.LegInt = 2)] = "LegInt"),
    ((le = ae = ae || {})[(le["Banner - Allow All"] = 1)] =
      "Banner - Allow All"),
    (le[(le["Banner - Reject All"] = 2)] = "Banner - Reject All"),
    (le[(le["Banner - Close"] = 3)] = "Banner - Close"),
    (le[(le["Preference Center - Allow All"] = 4)] =
      "Preference Center - Allow All"),
    (le[(le["Preference Center - Reject All"] = 5)] =
      "Preference Center - Reject All"),
    (le[(le["Preference Center - Confirm"] = 6)] =
      "Preference Center - Confirm");
  var ue,
    pe = new ((de.prototype.setbannerDataParentURL = function (e) {
      this.bannerDataParentURL = e;
    }),
    (de.prototype.setDefaultCookiesData = function () {
      this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag();
    }),
    (de.prototype.initializeBannerVariables = function (e) {
      var t,
        o = e.DomainData;
      (this.iabType = o.IabType),
        "IAB2" === o.IabType &&
          ((this.BannerVariables.oneTrustIABCookieName = ne.Iab2Pub),
          (this.BannerVariables.oneTrustIAB3rdPartyCookieName = ne.Iab2Eu)),
        (t = o.PCTemplateUpgrade),
        (U = t ? f : g),
        this.setPublicDomainData(JSON.parse(JSON.stringify(o))),
        this.domainDataMapper(o),
        this.commonDataMapper(e),
        this.setDefaultCookiesData(),
        this.BannerVariables.domainData.IsConsentLoggingEnabled &&
          this.setConsentData();
    }),
    (de.prototype.initializeVendorInOverriddenVendors = function (e) {
      this.BannerVariables.domainData.OverriddenVendors[e] = {
        disabledCP: [],
        disabledLIP: [],
        active: !0,
        legInt: !1,
        consent: !1,
      };
    }),
    (de.prototype.applyGlobalRestrictionsonNewVendor = function (e, t, o, n) {
      var r = this.BannerVariables.domainData,
        s = r.GlobalRestrictions;
      switch (
        (r.OverriddenVendors[t] || this.initializeVendorInOverriddenVendors(t),
        s[o])
      ) {
        case se.Disabled:
          n
            ? r.OverriddenVendors[t].disabledCP.push(o)
            : r.OverriddenVendors[t].disabledLIP.push(o);
          break;
        case se.Consent:
          n
            ? (r.OverriddenVendors[t].consent = !0)
            : (r.OverriddenVendors[t].disabledLIP.push(o),
              this.checkFlexiblePurpose(e, t, o, !1));
          break;
        case se.LegInt:
          n
            ? (r.OverriddenVendors[t].disabledCP.push(o),
              this.checkFlexiblePurpose(e, t, o, !0))
            : (r.OverriddenVendors[t].legInt = !0);
      }
    }),
    (de.prototype.checkFlexiblePurpose = function (e, t, o, n) {
      var r = this.BannerVariables.domainData;
      e.flexiblePurposes.includes(o)
        ? (n
            ? (r.OverriddenVendors[t].legInt = !0)
            : (r.OverriddenVendors[t].consent = !0),
          (r.Publisher.restrictions[o][t] = n ? se.LegInt : se.Consent))
        : (r.Publisher.restrictions[o][t] = se.Disabled);
    }),
    (de.prototype.removeInActiveVendorsForTcf = function (s) {
      var i = this,
        a = this.BannerVariables.domainData,
        l = this.BannerVariables.iabData.vendorListVersion,
        e = a.Publisher,
        c = a.GlobalRestrictionEnabled,
        d = !(
          0 === Object.keys(e).length ||
          (e && 0 === Object.keys(e.restrictions).length)
        );
      Object.keys(s.vendors).forEach(function (t) {
        var o = s.vendors[t];
        c &&
          o.iab2GVLVersion > l &&
          (o.purposes.forEach(function (e) {
            i.applyGlobalRestrictionsonNewVendor(o, t, e, !0);
          }),
          o.legIntPurposes.forEach(function (e) {
            i.applyGlobalRestrictionsonNewVendor(o, t, e, !1);
          }));
        var e = !1;
        a.IsIabThirdPartyCookieEnabled ||
          (i.legIntSettings.PAllowLI
            ? a.OverriddenVendors[t] &&
              !a.OverriddenVendors[t].active &&
              (e = !0)
            : -1 < a.Vendors.indexOf(Number(t)) && (e = !0));
        var n = !1;
        "IAB" === i.iabType
          ? (n = !o.purposes.length)
          : i.legIntSettings.PAllowLI &&
            a.OverriddenVendors[t] &&
            !a.OverriddenVendors[t].consent &&
            (n = !0);
        var r = !0;
        i.legIntSettings.PAllowLI &&
          (!o.legIntPurposes.length ||
            (a.OverriddenVendors[t] && !a.OverriddenVendors[t].legInt) ||
            (r = !1)),
          !n ||
            !r ||
            o.specialPurposes.length ||
            o.features.length ||
            o.specialFeatures.length ||
            (e = !0),
          !c && d && o.iab2GVLVersion > l && (e = !0),
          e && delete s.vendors[t];
      });
    }),
    (de.prototype.setPublisherRestrictions = function () {
      var i = this,
        e = this.BannerVariables.domainData.Publisher;
      if (e && e.restrictions) {
        var a = this.iabStringSDK(),
          t = e.restrictions,
          l = this.BannerVariables.iabData,
          c = this.BannerVariables.oneTrustIABConsent.vendorList.vendors;
        Object.keys(t).forEach(function (n) {
          var r,
            s = t[n],
            e = pe.iabGroups.purposes[n];
          e &&
            (r = {
              description: e.description,
              purposeId: e.id,
              purposeName: e.name,
            }),
            Object.keys(s).forEach(function (e) {
              if (i.vendorsSetting[e]) {
                var t = i.vendorsSetting[e].arrIndex;
                1 === s[e] && -1 === c[e].purposes.indexOf(Number(n))
                  ? l.vendors[t].purposes.push(r)
                  : 2 === s[e] &&
                    -1 === c[e].legIntPurposes.indexOf(Number(n)) &&
                    l.vendors[t].legIntPurposes.push(r);
                var o = a.purposeRestriction(Number(n), s[e]);
                i.tcModel.publisherRestrictions.add(Number(e), o);
              }
            });
        });
      }
    }),
    (de.prototype.populateVendorListTCF = function () {
      return l(this, void 0, void 0, function () {
        var t, o, n, r, s, i, a, l, c;
        return k(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (t = this.iabStringSDK()),
                (o = this.BannerVariables.iabData),
                (n = this.updateCorrectIABUrl(o.globalVendorListUrl)),
                (r = !this.isIABCrossConsentEnabled()),
                this.checkMobileOfflineRequest(this.getBannerVersionUrl())
                  ? [3, 1]
                  : (this.BannerVariables.mobileOnlineURL.push(n),
                    (s = t.gvl(n, this.gvlObj)),
                    [3, 3])
              );
            case 1:
              return (
                (a = (i = t).gvl),
                (l = [null]),
                [4, this.otFetchOfflineFile(W.getRelativeURL(n, !0))]
              );
            case 2:
              (s = a.apply(i, l.concat([e.sent()]))), (e.label = 3);
            case 3:
              return (
                this.removeInActiveVendorsForTcf(s),
                (this.BannerVariables.oneTrustIABConsent.vendorList = s),
                this.assignIABDataWithGlobalVendorList(s),
                (c = this),
                [4, t.tcModel(s)]
              );
            case 4:
              (c.tcModel = e.sent()),
                r && this.setPublisherRestrictions(),
                (this.tcModel.cmpId = parseInt(o.cmpId)),
                (this.tcModel.cmpVersion = parseInt(o.cmpVersion));
              try {
                this.tcModel.consentLanguage = this.consentLanguage;
              } catch (e) {
                this.tcModel.consentLanguage = "EN";
              }
              return (
                (this.tcModel.consentScreen = parseInt(o.consentScreen)),
                (this.tcModel.isServiceSpecific = r),
                (this.tcModel.purposeOneTreatment = this.purposeOneTreatment),
                K.moduleInitializer.PublisherCC
                  ? (this.tcModel.publisherCountryCode =
                      K.moduleInitializer.PublisherCC)
                  : this.userLocation.country &&
                    (this.tcModel.publisherCountryCode =
                      this.userLocation.country),
                (this.cmpApi = t.cmpApi(
                  this.tcModel.cmpId,
                  this.tcModel.cmpVersion,
                  r,
                  this.BannerVariables.domainData.UseGoogleVendors
                    ? {
                        getTCData: this.addtlConsentString,
                        getInAppTCData: this.addtlConsentString,
                      }
                    : void 0
                )),
                this.isAlertBoxClosedAndValid() || this.resetTCModel(),
                [2]
              );
          }
        });
      });
    }),
    (de.prototype.resetTCModel = function () {
      var e = this.iabStringSDK(),
        t = this.tcModel.clone();
      t.unsetAll(), this.cmpApi.update(e.tcString().encode(t), !0);
    }),
    (de.prototype.removeInActiveVendorsForCmp = function (e) {
      for (var t = 0; t < e.vendors.length; t++)
        -1 <
          this.BannerVariables.domainData.Vendors.indexOf(
            Number(e.vendors[t].id)
          ) && (e.vendors.splice(t, 1), t--);
    }),
    (de.prototype.populateVendorListCMP = function () {
      return l(this, void 0, void 0, function () {
        var t, o, n;
        return k(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (t = this.BannerVariables.iabData),
                (o = this.updateCorrectIABUrl(t.globalVendorListUrl)),
                this.checkMobileOfflineRequest(this.getBannerVersionUrl())
                  ? [4, this.otFetchOfflineFile(W.getRelativeURL(o, !0))]
                  : [3, 2]
              );
            case 1:
              return (n = e.sent()), [3, 4];
            case 2:
              return [4, this.otFetch(o)];
            case 3:
              (n = e.sent()), (e.label = 4);
            case 4:
              if (!n) throw new URIError();
              return (
                this.BannerVariables.domainData.IsIabThirdPartyCookieEnabled ||
                  this.removeInActiveVendorsForCmp(n),
                (this.BannerVariables.oneTrustIABConsent.vendorList = n),
                this.assignIABDataWithGlobalVendorList(n),
                [2]
              );
          }
        });
      });
    }),
    (de.prototype.loadCMP = function (e) {
      var o = this;
      return "IAB2" === e
        ? new Promise(function (e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            o.jsonp(o.getBannerVersionUrl() + "/" + t + ".js", e, e);
          })
        : "IAB" === e
        ? new Promise(function (e) {
            o.jsonp(o.getBannerVersionUrl() + "/otCMP.js", e, e);
          })
        : void 0;
    }),
    (de.prototype.checkIfRequiresPollyfill = function () {
      var e = window.navigator.userAgent;
      return (
        0 < e.indexOf("MSIE ") ||
        0 < e.indexOf("Trident/") ||
        "undefined" == typeof Set
      );
    }),
    (de.prototype.addtlConsentString = function (e, t, o) {
      (t.addtlConsent =
        "" +
        pe.addtlConsentVersion +
        (pe.isAddtlConsent
          ? pe.BannerVariables.addtlVendors.vendorConsent.join(".")
          : "")),
        e(t, o);
    }),
    (de.prototype.jsonp = function (e, t, o) {
      this.checkMobileOfflineRequest(e) ||
        this.BannerVariables.mobileOnlineURL.push(e);
      var n = document.createElement("script"),
        r = document.getElementsByTagName("head")[0];
      function s() {
        t();
      }
      (n.onreadystatechange = function () {
        ("loaded" !== this.readyState && "complete" !== this.readyState) || s();
      }),
        (n.onload = s),
        (n.onerror = function () {
          o();
        }),
        (n.type = "text/javascript"),
        (n.async = !0),
        (n.src = e),
        pe.crossOrigin && n.setAttribute("crossorigin", pe.crossOrigin),
        r.appendChild(n);
    }),
    (de.prototype.checkMobileOfflineRequest = function (e) {
      return (
        K.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
      );
    }),
    (de.prototype.commonDataMapper = function (e) {
      var t = e.CommonData;
      (this.BannerVariables.commonData = {
        iabThirdPartyConsentUrl: t.IabThirdPartyCookieUrl,
        optanonHideAcceptButton: t.OptanonHideAcceptButton,
        optanonHideCookieSettingButton: t.OptanonHideCookieSettingButton,
        optanonStyle: t.OptanonStyle,
        optanonStaticContentLocation: t.OptanonStaticContentLocation,
        bannerCustomCSS: t.BannerCustomCSS.replace(/\\n/g, ""),
        pcCustomCSS: t.PCCustomCSS.replace(/\\n/g, ""),
        textColor: t.TextColor,
        buttonColor: t.ButtonColor,
        buttonTextColor: t.ButtonTextColor,
        bannerMPButtonColor: t.BannerMPButtonColor,
        bannerMPButtonTextColor: t.BannerMPButtonTextColor,
        backgroundColor: t.BackgroundColor,
        bannerAccordionBackgroundColor: t.BannerAccordionBackgroundColor,
        pcTextColor: t.PcTextColor,
        pcButtonColor: t.PcButtonColor,
        pcButtonTextColor: t.PcButtonTextColor,
        pcAccordionBackgroundColor: t.PcAccordionBackgroundColor,
        pcLinksTextColor: t.PcLinksTextColor,
        bannerLinksTextColor: t.BannerLinksTextColor,
        pcEnableToggles: t.PcEnableToggles,
        pcBackgroundColor: t.PcBackgroundColor,
        pcMenuColor: t.PcMenuColor,
        pcMenuHighLightColor: t.PcMenuHighLightColor,
        legacyBannerLayout: t.LegacyBannerLayout,
        optanonLogo: t.OptanonLogo,
        oneTrustFtrLogo: t.OneTrustFooterLogo,
        optanonCookieDomain: t.OptanonCookieDomain,
        optanonGroupIdPerformanceCookies: t.OptanonGroupIdPerformanceCookies,
        optanonGroupIdFunctionalityCookies:
          t.OptanonGroupIdFunctionalityCookies,
        optanonGroupIdTargetingCookies: t.OptanonGroupIdTargetingCookies,
        optanonGroupIdSocialCookies: t.OptanonGroupIdSocialCookies,
        optanonShowSubGroupCookies: t.ShowSubGroupCookies,
        cssPath: t.CssFilePathUrl,
        useRTL: t.UseRTL,
        showBannerCookieSettings: t.ShowBannerCookieSettings,
        showBannerAcceptButton: t.ShowBannerAcceptButton,
        showCookieList: t.ShowCookieList,
        allowHostOptOut: t.AllowHostOptOut,
        CookiesV2NewCookiePolicy: t.CookiesV2NewCookiePolicy,
        cookieListTitleColor: t.CookieListTitleColor,
        cookieListGroupNameColor: t.CookieListGroupNameColor,
        cookieListTableHeaderColor: t.CookieListTableHeaderColor,
        CookieListTableHeaderBackgroundColor:
          t.CookieListTableHeaderBackgroundColor,
        cookieListPrimaryColor: t.CookieListPrimaryColor,
        cookieListCustomCss: t.CookieListCustomCss,
        pcShowCookieHost: t.PCShowCookieHost,
        pcShowCookieDuration: t.PCShowCookieDuration,
        pcShowCookieType: t.PCShowCookieType,
        pcShowCookieCategory: t.PCShowCookieCategory,
        pcShowCookieDescription: t.PCShowCookieDescription,
        ConsentIntegration: t.ConsentIntegration,
        ConsentPurposesText: t.BConsentPurposesText || "Consent Purposes",
        FeaturesText: t.BFeaturesText || "Features",
        LegitimateInterestPurposesText:
          t.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
        ConsentText: t.BConsentText || "Consent",
        LegitInterestText: t.BLegitInterestText || "Legit. Interest",
        pcDialogClose: t.PCDialogClose || "dialog closed",
        SpecialFeaturesText: t.BSpecialFeaturesText || "Special Features",
        SpecialPurposesText: t.BSpecialPurposesText || "Special Purposes",
        pcCListName: t.PCCListName || "Name",
        pcCListHost: t.PCCListHost || "Host",
        pcCListDuration: t.PCCListDuration || "Duration",
        pcCListType: t.PCCListType || "Type",
        pcCListCategory: t.PCCListCategory || "Category",
        pcCListDescription: t.PCCListDescription || "Description",
        IabLegalTextUrl: t.IabLegalTextUrl,
        pcLegIntButtonColor: t.PcLegIntButtonColor,
        pcLegIntButtonTextColor: t.PcLegIntButtonTextColor,
      }),
        (this.BannerVariables.isRTL = t.UseRTL),
        this.checkMobileOfflineRequest(this.getBannerVersionUrl()) ||
          (this.BannerVariables.mobileOnlineURL.push(
            pe.updateCorrectUrl(t.OptanonLogo)
          ),
          this.BannerVariables.mobileOnlineURL.push(
            pe.updateCorrectUrl(t.OneTrustFooterLogo)
          ));
    }),
    (de.prototype.otFetch = function (n) {
      return l(this, void 0, void 0, function () {
        var t,
          o = this;
        return k(this, function (e) {
          switch (e.label) {
            case 0:
              return pe.checkMobileOfflineRequest(n)
                ? [4, this.otFetchOfflineFile(n)]
                : [3, 2];
            case 1:
              return [2, e.sent()];
            case 2:
              return (
                e.trys.push([2, 8, , 9]),
                this.BannerVariables.mobileOnlineURL.push(n),
                "undefined" != typeof fetch
                  ? [3, 4]
                  : [
                      4,
                      new Promise(function (e) {
                        o.getJSON(n, e, e);
                      }),
                    ]
              );
            case 3:
              return [2, e.sent()];
            case 4:
              return [4, fetch(n)];
            case 5:
              return [4, e.sent().json()];
            case 6:
              return [2, e.sent()];
            case 7:
              return [3, 9];
            case 8:
              return (
                (t = e.sent()),
                console.log("Error in fetch URL : " + n + " Exception : " + t),
                [3, 9]
              );
            case 9:
              return [2];
          }
        });
      });
    }),
    (de.prototype.getJSON = function (e, t, o) {
      var n = new XMLHttpRequest();
      n.open("GET", e, !0),
        (n.onload = function () {
          if (200 <= this.status && this.status < 400) {
            var e = JSON.parse(this.responseText);
            t(e);
          } else o({ message: "Error Loading Data", statusCode: this.status });
        }),
        (n.onerror = function (e) {
          o(e);
        }),
        n.send();
    }),
    (de.prototype.otFetchOfflineFile = function (r) {
      return l(this, void 0, void 0, function () {
        var t, o, n;
        return k(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (r = r.replace(".json", ".js")),
                (t = r.split("/")),
                (o = t[t.length - 1]),
                (n = o.split(".js")[0]),
                [
                  4,
                  new Promise(function (e) {
                    function t() {
                      e(window[n]);
                    }
                    pe.jsonp(r, t, t);
                  }),
                ]
              );
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
    (de.prototype.initData = function () {
      this.BannerVariables = {
        otSDKVersion: "6.7.0",
        optanonCookieName: "OptanonConsent",
        optanonAlertBoxClosedCookieName: "OptanonAlertBoxClosed",
        optanonDoNotTrackEnabled:
          "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack,
        doNotTrackText: "do not track",
        optanonIsOptInMode: !1,
        optanonIsSoftOptInMode: !1,
        optanonHostList: [],
        optanonHtmlGroupData: [],
        optanonWrapperScriptExecutedGroups: [],
        optanonWrapperHtmlExecutedGroups: [],
        optanonWrapperScriptExecutedGroupsTemp: [],
        optanonWrapperHtmlExecutedGroupsTemp: [],
        optanonAboutCookiesGroupName: "",
        optanonNotLandingPageName: "NotLandingPage",
        optanonAwaitingReconsentName: "AwaitingReconsent",
        oneTrustAddtlConsentCookie: "OTAdditionalConsentString",
        consentIntegrationParam: "consentId",
        bannerInteractionParam: "interactionCount",
        isRTL: !1,
        isClassic: !1,
        isPCVisible: !1,
        oneTrustHostConsent: [],
        oneTrustAlwaysActiveHosts: [],
        oneTrustIABConsent: {
          purpose: [],
          legimateInterest: [],
          features: [],
          specialFeatures: [],
          specialPurposes: [],
          vendors: [],
          legIntVendors: [],
          vendorList: null,
          defaultPurpose: [],
          IABCookieValue: "",
        },
        addtlVendors: { vendorConsent: [], vendorSelected: {} },
        dataGroupState: [],
        oneTrustIABCookieName: "eupubconsent",
        oneTrustIAB3rdPartyCookieName: "euconsent",
        oneTrustIABgdprAppliesGlobally: !0,
        oneTrustIsIABCrossConsentEnableParam: "isIABGlobal",
        onetrustJsonData: {},
        useGeoLocationService: !0,
        geolocationCookiesParam: "geolocation",
        pagePushedDown: !1,
        constant: {
          IMPLIEDCONSENT: "implied consent",
          DOWNLOADTOLOCAL: "LOCAL",
          TESTSCRIPT: "TEST",
          EUCOUNTRIES: [
            "BE",
            "BG",
            "CZ",
            "DK",
            "DE",
            "EE",
            "IE",
            "GR",
            "ES",
            "FR",
            "IT",
            "CY",
            "LV",
            "LT",
            "LU",
            "HU",
            "MT",
            "NL",
            "AT",
            "PL",
            "PT",
            "RO",
            "SI",
            "SK",
            "FI",
            "SE",
            "GB",
            "HR",
            "LI",
            "NO",
            "IS",
          ],
          GLOBAL: "global",
          documentLanguageAttibute: "data-document-language",
          dataLanguage: "data-language",
          IGNOREGA: "data-ignore-ga",
          TRANSACTIONTYPE: {
            CONFIRMED: "CONFIRMED",
            OPT_OUT: "OPT_OUT",
            NO_CHOICE: "NO_CHOICE",
            NOT_GIVEN: "NOTGIVEN",
          },
          IGNOREHTMLCSS: "data-ignore-html",
          GROUPSTATUS: {
            ALWAYSACTIVE: "always active",
            ACTIVE: "active",
            INACTIVELANDINGPAGE: "inactive landingpage",
            INACTIVE: "inactive",
          },
        },
        vendors: {
          list: [],
          pageList: [],
          searchParam: "",
          currentPage: 1,
          numberPerPage: 50,
          numberOfPages: 1,
          vendorTemplate: null,
          selectedVendors: [],
          selectedPurpose: [],
          selectedLegInt: [],
          selectedLegIntVendors: [],
          selectedSpecialFeatures: [],
        },
        hosts: { hostTemplate: null, hostCookieTemplate: null },
        publicDomainData: void 0,
        domainData: void 0,
        iabData: void 0,
        consentData: void 0,
        cookieGroupData: [],
        languageSwitcherJson: void 0,
        commonData: void 0,
        ignoreGoogleAnlyticsCall: !1,
        isCookieList: !1,
        filterByCategories: [],
        filterByIABCategories: [],
        currentGlobalFilteredList: [],
        oneTrustCategories: [],
        mobileOnlineURL: [],
        ignoreInjectingHtmlCss: !1,
      };
    }),
    (de.prototype.getBannerSDKAssestsUrl = function () {
      return this.getBannerVersionUrl() + "/assets";
    }),
    (de.prototype.getBannerVersionUrl = function () {
      var e = this.bannerScriptElement.getAttribute("src");
      return (
        "" +
        (-1 !== e.indexOf("/consent/")
          ? e.split("consent/")[0] + "scripttemplates/"
          : e.split(this.stubFileName)[0]) +
        K.moduleInitializer.Version
      );
    }),
    (de.prototype.getBannerScriptElement = function () {
      return this.bannerScriptElement;
    }),
    (de.prototype.setConsentModelFlag = function (e, t) {
      (this.BannerVariables.optanonIsOptInMode = e),
        (this.BannerVariables.optanonIsSoftOptInMode = t);
    }),
    (de.prototype.getBannerScriptData = function () {
      var e = this.getRegionRule();
      this.setLanguageSwitcherJson(e);
      var t = pe.getDataLanguageCulture();
      this.consentLanguage = t.substr(0, 2);
      var o = this.getBannerDataParentUrl() + "/" + e.Id + "/" + t;
      return this.otFetch(o + ".json");
    }),
    (de.prototype.setRegionRule = function (e) {
      this.regionRuleObject = e;
    }),
    (de.prototype.getRegionRule = function () {
      return this.regionRuleObject;
    }),
    (de.prototype.getBannerDataParentUrl = function () {
      return this.bannerDataParentURL;
    }),
    (de.prototype.populateGroups = function (e, r) {
      var s = this,
        i = {},
        a = [];
      e.forEach(function (e) {
        var t = O.getGroupIdForCookie(e);
        if (
          ((void 0 !== e.HasConsentOptOut && e.IsIabPurpose) ||
            (e.HasConsentOptOut = !0),
          !(
            (!r.IsIabEnabled && -1 < B.indexOf(e.Type)) ||
            ("IAB2" === s.iabType &&
              (e.Type === V || e.Type === w) &&
              !e.HasConsentOptOut &&
              !e.HasLegIntOptOut) ||
            (e.Type === T && !e.HasConsentOptOut)
          ) &&
            (t !== s.purposeOneGrpId ||
              e.ShowInPopup ||
              (s.purposeOneTreatment = !0),
            (s.grpContainLegalOptOut =
              e.HasLegIntOptOut || s.grpContainLegalOptOut),
            (e.SubGroups = []),
            e.Parent ? a.push(e) : (i[t] = e),
            "IAB2" === s.iabType && -1 < B.indexOf(e.Type)))
        ) {
          var o = O.extractGroupIdForIabGroup(t),
            n = {
              description: e.GroupDescription,
              descriptionLegal: e.DescriptionLegal,
              id: Number(o),
              name: e.GroupName,
            };
          switch (e.Type) {
            case V:
            case P:
              s.iabGroups.purposes[o] = n;
              break;
            case I:
              s.iabGroups.specialPurposes[o] = n;
              break;
            case A:
              s.iabGroups.features[o] = n;
              break;
            case T:
              s.iabGroups.specialFeatures[o] = n;
          }
        }
      }),
        a.forEach(function (e) {
          i[e.Parent] &&
            e.ShowInPopup &&
            (e.FirstPartyCookies.length ||
              e.Hosts.length ||
              -1 < B.indexOf(e.Type)) &&
            i[e.Parent].SubGroups.push(e);
        });
      var t = [];
      return (
        Object.keys(i).forEach(function (e) {
          O.isValidConsentNoticeGroup(i[e], r.IsIabEnabled) &&
            (i[e].SubGroups.sort(function (e, t) {
              return e.Order - t.Order;
            }),
            t.push(i[e]));
        }),
        t.sort(function (e, t) {
          return e.Order - t.Order;
        })
      );
    }),
    (de.prototype.setPublicDomainData = function (t) {
      (this.BannerVariables.publicDomainData = {
        cctId: t.cctId,
        MainText: t.MainText,
        MainInfoText: t.MainInfoText,
        AboutText: t.AboutText,
        AboutCookiesText: t.AboutCookiesText,
        ConfirmText: t.ConfirmText,
        AllowAllText: t.PreferenceCenterConfirmText,
        ManagePreferenceText: t.PreferenceCenterManagePreferencesText,
        CookiesUsedText: t.CookiesUsedText,
        AboutLink: t.AboutLink,
        HideToolbarCookieListAboutLink: t.HideToolbarCookieListAboutLink,
        ActiveText: t.ActiveText,
        AlwaysActiveText: t.AlwaysActiveText,
        AlertNoticeText: t.AlertNoticeText,
        AlertCloseText: t.AlertCloseText,
        AlertMoreInfoText: t.AlertMoreInfoText,
        AlertAllowCookiesText: t.AlertAllowCookiesText,
        CloseShouldAcceptAllCookies: t.CloseShouldAcceptAllCookies,
        BannerTitle: t.BannerTitle,
        ForceConsent: t.ForceConsent,
        LastReconsentDate: t.LastReconsentDate,
        InactiveText: t.InactiveText,
        CookiesText: t.CookiesText,
        CookieSettingButtonText: t.CookieSettingButtonText,
        CategoriesText: t.CategoriesText,
        IsLifespanEnabled: t.IsLifespanEnabled,
        LifespanText: t.LifespanText,
        Groups: null,
        Language: t.Language,
        showBannerCloseButton: t.showBannerCloseButton,
        ShowPreferenceCenterCloseButton: t.ShowPreferenceCenterCloseButton,
        FooterDescriptionText: t.FooterDescriptionText,
        CustomJs: t.CustomJs,
        LifespanTypeText: t.LifespanTypeText,
        LifespanDurationText: t.LifespanDurationText,
        CloseText: t.CloseText,
        BannerCloseButtonText: t.BannerCloseButtonText,
        HideToolbarCookieList: t.HideToolbarCookieList,
        AlertLayout: t.AlertLayout,
        AddLinksToCookiepedia: t.AddLinksToCookiepedia,
        ShowAlertNotice: t.ShowAlertNotice,
        IsIABEnabled: t.IsIabEnabled,
        IabType: t.IabType,
        BannerPosition: t.BannerPosition,
        PreferenceCenterPosition: t.PreferenceCenterPosition,
        VendorLevelOptOut: t.IsIabEnabled,
        ConsentModel: { Name: t.ConsentModel },
        VendorConsentModel: t.VendorConsentModel,
        IsConsentLoggingEnabled: t.IsConsentLoggingEnabled,
        IsIabThirdPartyCookieEnabled: t.IsIabThirdPartyCookieEnabled,
        ScrollCloseBanner: t.ScrollCloseBanner,
        ScrollAcceptAllCookies: t.ScrollAcceptAllCookies,
        OnClickCloseBanner: t.OnClickCloseBanner,
        OnClickAcceptAllCookies: t.OnClickAcceptAllCookies,
        NextPageCloseBanner: t.NextPageCloseBanner,
        NextPageAcceptAllCookies: t.NextPageAcceptAllCookies,
        VendorListText: t.VendorListText,
        ThirdPartyCookieListText: t.ThirdPartyCookieListText,
        CookieListDescription: t.CookieListDescription,
        CookieListTitle: t.CookieListTitle,
        BannerPurposeTitle: t.BannerPurposeTitle,
        BannerPurposeDescription: t.BannerPurposeDescription,
        BannerFeatureTitle: t.BannerFeatureTitle,
        BannerFeatureDescription: t.BannerFeatureDescription,
        BannerInformationTitle: t.BannerInformationTitle,
        BannerInformationDescription: t.BannerInformationDescription,
        BannerIABPartnersLink: t.BannerIABPartnersLink,
        BannerShowRejectAllButton: t.BannerShowRejectAllButton,
        BannerRejectAllButtonText: t.BannerRejectAllButtonText,
        PCenterShowRejectAllButton: t.PCenterShowRejectAllButton,
        PCenterRejectAllButtonText: t.PCenterRejectAllButtonText,
        BannerSettingsButtonDisplayLink: t.BannerSettingsButtonDisplayLink,
        BannerDPDTitle: t.BannerDPDTitle || "",
        BannerDPDDescription: t.BannerDPDDescription || [],
        BannerDPDDescriptionFormat: t.BannerDPDDescriptionFormat || "",
        ConsentIntegrationData: null,
        PCFirstPartyCookieListText: t.PCFirstPartyCookieListText,
        PCViewCookiesText: t.PCViewCookiesText,
        IsBannerLoaded: !1,
        PCenterBackText: t.PCenterBackText,
        PCenterVendorsListText: t.PCenterVendorsListText,
        PCenterViewPrivacyPolicyText: t.PCenterViewPrivacyPolicyText,
        PCenterClearFiltersText: t.PCenterClearFiltersText,
        PCenterApplyFiltersText: t.PCenterApplyFiltersText,
        PCenterEnableAccordion: t.PCenterEnableAccordion,
        PCGrpDescType: t.PCGrpDescType,
        PCGrpDescLinkPosition: t.PCGrpDescLinkPosition,
        PCVendorFullLegalText: t.PCVendorFullLegalText,
        PCAccordionStyle: $.Caret,
        PCenterExpandToViewText: t.PCenterExpandToViewText,
        PCenterAllowAllConsentText: t.PCenterAllowAllConsentText,
        PCenterCookiesListText: t.PCenterCookiesListText,
        PCenterCancelFiltersText: t.PCenterCancelFiltersText,
        PCenterSelectAllVendorsText: t.PCenterSelectAllVendorsText,
        PCShowPersistentCookiesHoverButton:
          t.PCShowPersistentCookiesHoverButton,
        PCenterFilterText: t.PCenterFilterText,
        UseGoogleVendors:
          !!t.PCTemplateUpgrade && this.regionRuleObject.UseGoogleVendors,
        OverridenGoogleVendors: t.OverridenGoogleVendors,
        PCGoogleVendorsText: t.PCGoogleVendorsText,
        PCIABVendorsText: t.PCIABVendorsText,
        PCTemplateUpgrade: t.PCTemplateUpgrade,
      }),
        t.PCTemplateUpgrade &&
          (t.Center || t.Panel) &&
          t.PCAccordionStyle !== $.NoAccordion &&
          (this.BannerVariables.publicDomainData.PCAccordionStyle =
            t.PCAccordionStyle),
        (this.BannerVariables.publicDomainData.PCenterEnableAccordion =
          t.PCAccordionStyle !== $.NoAccordion);
      var o = [];
      t.Groups.forEach(function (e) {
        (!t.IsIabEnabled && e.IsIabPurpose) ||
          ((e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies))),
          o.push(e));
      }),
        (this.BannerVariables.publicDomainData.Groups = o);
    }),
    (de.prototype.setConsentIntegrationDataInPublicDomainData = function (e) {
      this.BannerVariables.publicDomainData.ConsentIntegrationData = e;
    }),
    (de.prototype.domainDataMapper = function (e) {
      (this.BannerVariables.domainData = {
        cctId: e.cctId,
        MainText: e.MainText,
        MainInfoText: e.MainInfoText,
        AboutText: e.AboutText,
        AboutCookiesText: e.AboutCookiesText,
        ConfirmText: e.ConfirmText,
        AllowAllText: e.PreferenceCenterConfirmText,
        ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
        CookiesUsedText: e.CookiesUsedText,
        AboutLink: e.AboutLink,
        HideToolbarCookieListAboutLink: e.HideToolbarCookieListAboutLink,
        ActiveText: e.ActiveText,
        AlwaysActiveText: e.AlwaysActiveText,
        AlertNoticeText: e.AlertNoticeText,
        AlertCloseText: e.AlertCloseText,
        AlertMoreInfoText: e.AlertMoreInfoText,
        AlertAllowCookiesText: e.AlertAllowCookiesText,
        AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || "",
        CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
        BannerTitle: e.BannerTitle,
        ForceConsent: e.ForceConsent,
        LastReconsentDate: e.LastReconsentDate,
        InactiveText: e.InactiveText,
        CookiesText: e.CookiesText,
        CategoriesText: e.CategoriesText,
        CookieSettingButtonText: e.CookieSettingButtonText,
        IsLifespanEnabled: e.IsLifespanEnabled,
        LifespanText: e.LifespanText,
        Groups: this.populateGroups(e.Groups, e),
        Language: e.Language,
        showBannerCloseButton: e.showBannerCloseButton,
        ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
        FooterDescriptionText: e.FooterDescriptionText,
        CustomJs: e.CustomJs,
        LifespanTypeText: e.LifespanTypeText,
        LifespanDurationText: e.LifespanDurationText,
        CloseText: e.CloseText,
        BannerCloseButtonText: e.BannerCloseButtonText,
        HideToolbarCookieList: e.HideToolbarCookieList,
        AlertLayout: e.AlertLayout,
        AddLinksToCookiepedia: e.AddLinksToCookiepedia,
        ShowAlertNotice: e.ShowAlertNotice,
        IsIabEnabled: e.IsIabEnabled,
        IabType: e.IabType,
        BannerPosition: e.BannerPosition,
        PreferenceCenterPosition: e.PreferenceCenterPosition,
        ReconsentFrequencyDays: e.ReconsentFrequencyDays,
        VendorLevelOptOut: e.IsIabEnabled,
        ConsentModel: { Name: e.ConsentModel },
        VendorConsentModel: e.VendorConsentModel,
        IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
        IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
        ScrollCloseBanner: e.ScrollCloseBanner,
        ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
        OnClickCloseBanner: e.OnClickCloseBanner,
        OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
        NextPageCloseBanner: e.NextPageCloseBanner,
        NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
        VendorListText: e.VendorListText,
        ThirdPartyCookieListText: e.ThirdPartyCookieListText,
        CookieListDescription: e.CookieListDescription,
        CookieListTitle: e.CookieListTitle,
        PreferenceCenterMoreInfoScreenReader:
          e.PreferenceCenterMoreInfoScreenReader,
        BannerPushDown: e.BannerPushDown,
        Flat: e.Flat,
        FloatingFlat: e.FloatingFlat,
        FloatingRoundedCorner: e.FloatingRoundedCorner,
        FloatingRoundedIcon: e.FloatingRoundedIcon,
        FloatingRounded: e.FloatingRounded,
        CenterRounded: e.CenterRounded,
        Center: e.Center,
        Panel: e.Panel,
        Popup: e.Popup,
        List: e.List,
        Tab: e.Tab,
        BannerPurposeTitle: e.BannerPurposeTitle,
        BannerPurposeDescription: e.BannerPurposeDescription,
        BannerFeatureTitle: e.BannerFeatureTitle,
        BannerFeatureDescription: e.BannerFeatureDescription,
        BannerInformationTitle: e.BannerInformationTitle,
        BannerInformationDescription: e.BannerInformationDescription,
        BannerIABPartnersLink: e.BannerIABPartnersLink,
        BannerShowRejectAllButton: e.BannerShowRejectAllButton,
        BannerRejectAllButtonText: e.BannerRejectAllButtonText,
        PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
        PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
        BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
        BannerDPDTitle: e.BannerDPDTitle || "",
        BannerDPDDescription: e.BannerDPDDescription || [],
        BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || "",
        PCFirstPartyCookieListText:
          e.PCFirstPartyCookieListText || "First Party Cookies",
        PCViewCookiesText: e.PCViewCookiesText,
        PCenterBackText: e.PCenterBackText,
        PCenterVendorsListText: e.PCenterVendorsListText,
        PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
        PCenterClearFiltersText: e.PCenterClearFiltersText,
        PCenterApplyFiltersText: e.PCenterApplyFiltersText,
        PCenterEnableAccordion: e.PCenterEnableAccordion,
        PCGrpDescType: e.PCGrpDescType,
        PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
        PCVendorFullLegalText: e.PCVendorFullLegalText,
        PCAccordionStyle: $.Caret,
        PCenterExpandToViewText: e.PCenterExpandToViewText,
        PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
        PCenterCookiesListText: e.PCenterCookiesListText,
        PCenterCancelFiltersText: e.PCenterCancelFiltersText,
        PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
        PCenterFilterText: e.PCenterFilterText,
        Vendors: e.Vendors,
        OverriddenVendors: e.OverriddenVendors,
        Publisher: e.publisher,
        BannerAdditionalDescription: e.BannerAdditionalDescription,
        BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
        PCShowConsentLabels:
          !(!e.Tab || !e.PCTemplateUpgrade) && e.PCShowConsentLabels,
        PCActiveText: e.PCActiveText,
        PCShowPersistentCookiesHoverButton:
          e.PCShowPersistentCookiesHoverButton || !1,
        PCInactiveText: e.PCInactiveText,
        UseGoogleVendors:
          !!e.PCTemplateUpgrade && this.regionRuleObject.UseGoogleVendors,
        OverridenGoogleVendors: e.OverridenGoogleVendors,
        PCGoogleVendorsText: e.PCGoogleVendorsText,
        PCIABVendorsText: e.PCIABVendorsText,
        PCTemplateUpgrade: e.PCTemplateUpgrade,
        GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
        GlobalRestrictions: e.GlobalRestrictions,
      }),
        e.PCTemplateUpgrade &&
          (e.Center || e.Panel) &&
          e.PCAccordionStyle === $.PlusMinus &&
          (this.BannerVariables.domainData.PCAccordionStyle =
            e.PCAccordionStyle),
        (this.BannerVariables.domainData.PCenterEnableAccordion =
          e.PCAccordionStyle !== $.NoAccordion),
        (this.legIntSettings = e.LegIntSettings || {}),
        void 0 === this.legIntSettings.PAllowLI &&
          (this.legIntSettings.PAllowLI = !0),
        K.moduleInitializer.MobileSDK ||
          (this.BannerVariables.pagePushedDown = e.BannerPushesDownPage);
    }),
    (de.prototype.setLanguageSwitcherJson = function (e) {
      this.BannerVariables.languageSwitcherJson = e.LanguageSwitcherPlaceholder;
    }),
    (de.prototype.setIabData = function () {
      (this.BannerVariables.iabData =
        "IAB" === this.iabType
          ? K.moduleInitializer.IabData
          : K.moduleInitializer.IabV2Data),
        (this.BannerVariables.iabData.consentLanguage = this.consentLanguage);
    }),
    (de.prototype.setConsentData = function () {
      var e = {},
        t = pe.BannerVariables.commonData.ConsentIntegration;
      (e.requestInformation = t.RequestInformation),
        (this.BannerVariables.consentData = {
          consentApi: t.ConsentApi,
          consentPayload: e,
        });
    }),
    (de.prototype.assignIABDataWithGlobalVendorList = function (r) {
      var s = this,
        i = this.BannerVariables.domainData.OverriddenVendors;
      (this.BannerVariables.iabData.vendorListVersion = r.vendorListVersion),
        "IAB2" === this.iabType
          ? ((this.BannerVariables.iabData.vendors = []),
            Object.keys(r.vendors).forEach(function (n) {
              s.vendorsSetting[n] = { consent: !0, legInt: !0, arrIndex: 0 };
              var e = {},
                t = r.vendors[n];
              (e.vendorId = n),
                (e.vendorName = t.name),
                (e.policyUrl = t.policyUrl),
                (pe.legIntSettings.PAllowLI &&
                  (!i[n] || i[n].legInt) &&
                  (i[n] || t.legIntPurposes.length)) ||
                  (s.vendorsSetting[n].legInt = !1),
                pe.legIntSettings.PAllowLI
                  ? ((i[n] && !i[n].consent) ||
                      (!i[n] && !t.purposes.length)) &&
                    (s.vendorsSetting[n].consent = !1)
                  : t.purposes.length || (s.vendorsSetting[n].consent = !1),
                (e.features = t.features.map(function (e) {
                  var t,
                    o = s.iabGroups.features[e];
                  return (
                    o &&
                      (t = {
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name,
                      }),
                    t
                  );
                })),
                (e.specialFeatures = r.vendors[n].specialFeatures.reduce(
                  function (e, t) {
                    var o = s.iabGroups.specialFeatures[t];
                    return (
                      o &&
                        e.push({
                          description: o.description,
                          featureId: o.id,
                          featureName: o.name,
                        }),
                      e
                    );
                  },
                  []
                )),
                (e.purposes = r.vendors[n].purposes.reduce(function (e, t) {
                  var o = pe.iabGroups.purposes[t];
                  return (
                    !o ||
                      (i[n] &&
                        i[n].disabledCP &&
                        -1 !== i[n].disabledCP.indexOf(t)) ||
                      e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name,
                      }),
                    e
                  );
                }, [])),
                (e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(
                  function (e, t) {
                    var o = pe.iabGroups.purposes[t];
                    return (
                      !o ||
                        (i[n] &&
                          i[n].disabledLIP &&
                          -1 !== i[n].disabledLIP.indexOf(t)) ||
                        e.push({
                          description: o.description,
                          purposeId: o.id,
                          purposeName: o.name,
                        }),
                      e
                    );
                  },
                  []
                )),
                (e.specialPurposes = t.specialPurposes.map(function (e) {
                  var t,
                    o = s.iabGroups.specialPurposes[e];
                  return (
                    o &&
                      (t = {
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name,
                      }),
                    t
                  );
                })),
                s.BannerVariables.iabData.vendors.push(e),
                (s.vendorsSetting[n].arrIndex =
                  s.BannerVariables.iabData.vendors.length - 1);
            }))
          : (this.BannerVariables.iabData.vendors = r.vendors.reduce(function (
              e,
              t
            ) {
              return (
                (e = e || []),
                (t.vendorId = t.id),
                (t.vendorName = t.name),
                (s.vendorsSetting[t.id] = { consent: !0, legInt: !1 }),
                (t.legIntPurposes = t.legIntPurposeIds.map(function (t) {
                  var o;
                  return (
                    r.purposes.some(function (e) {
                      if (e.id === t)
                        return (
                          (o = {
                            description: e.description,
                            purposeId: e.id,
                            purposeName: e.name,
                          }),
                          !0
                        );
                    }),
                    o
                  );
                })),
                (t.features = t.featureIds.map(function (t) {
                  var o;
                  return (
                    r.features.some(function (e) {
                      if (e.id === t)
                        return (
                          (o = {
                            description: e.description,
                            featureId: e.id,
                            featureName: e.name,
                          }),
                          !0
                        );
                    }),
                    o
                  );
                })),
                (t.purposes = t.purposeIds.map(function (t) {
                  var o;
                  return (
                    r.purposes.some(function (e) {
                      if (e.id === t)
                        return (
                          (o = {
                            description: e.description,
                            purposeId: e.id,
                            purposeName: e.name,
                          }),
                          !0
                        );
                    }),
                    o
                  );
                })),
                e.push(t),
                e
              );
            },
            []));
    }),
    (de.prototype.populateIABCookies = function () {
      if (this.isIABCrossConsentEnabled())
        try {
          this.setIAB3rdPartyCookie(
            this.BannerVariables.oneTrustIAB3rdPartyCookieName,
            "",
            0,
            !0
          );
        } catch (e) {
          this.setIABCookieData(), this.updateCrossConsentCookie(!1);
        }
      else pe.needReconsent() || this.setIABCookieData();
    }),
    (de.prototype.setIAB3rdPartyCookie = function (e, t, o, n) {
      var r = this.BannerVariables.commonData.iabThirdPartyConsentUrl;
      try {
        if (r && document.body)
          return this.updateThirdPartyConsent(r, e, t, o, n);
        throw new ReferenceError();
      } catch (e) {
        throw e;
      }
    }),
    (de.prototype.setIABCookieData = function () {
      this.BannerVariables.oneTrustIABConsent.IABCookieValue = this.getCookie(
        this.BannerVariables.oneTrustIABCookieName
      );
    }),
    (de.prototype.getPcName = function () {
      var e;
      return (
        this.BannerVariables.domainData.Center
          ? (e = "otPcCenter")
          : this.BannerVariables.domainData.Panel
          ? (e = "otPcPanel")
          : this.BannerVariables.domainData.Popup
          ? (e = "otPcPopup")
          : this.BannerVariables.domainData.List
          ? (e = "otPcList")
          : this.BannerVariables.domainData.Tab && (e = "otPcTab"),
        e
      );
    }),
    (de.prototype.getPcContent = function (r) {
      return (
        void 0 === r && (r = !1),
        l(this, void 0, void 0, function () {
          var t, o, n;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return this.preferenceCenterContent && !r
                  ? [3, 2]
                  : ((t = void 0),
                    (o = this.getBannerSDKAssestsUrl()),
                    this.BannerVariables.domainData.PCTemplateUpgrade &&
                      (o += "/v2"),
                    (t = this.BannerVariables.commonData.useRTL
                      ? o + "/" + this.getPcName() + "Rtl.json"
                      : o + "/" + this.getPcName() + ".json")
                      ? [4, (n = this).otFetch(t)]
                      : [3, 2]);
              case 1:
                (n.preferenceCenterContent = e.sent()), (e.label = 2);
              case 2:
                return [2, this.preferenceCenterContent];
            }
          });
        })
      );
    }),
    (de.prototype.getBannerName = function () {
      var e;
      return (
        this.BannerVariables.domainData.Flat
          ? (e = "otFlat")
          : this.BannerVariables.domainData.FloatingRoundedCorner
          ? (e = "otFloatingRoundedCorner")
          : this.BannerVariables.domainData.FloatingFlat
          ? (e = "otFloatingFlat")
          : this.BannerVariables.domainData.FloatingRounded
          ? (e = "otFloatingRounded")
          : this.BannerVariables.domainData.FloatingRoundedIcon
          ? (e = "otFloatingRoundedIcon")
          : this.BannerVariables.domainData.CenterRounded &&
            (e = "otCenterRounded"),
        e
      );
    }),
    (de.prototype.getBannerContent = function (n) {
      return (
        void 0 === n && (n = !1),
        l(this, void 0, void 0, function () {
          var t, o;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return this.bannerContent && !n
                  ? [3, 2]
                  : ((t = void 0),
                    (t = this.BannerVariables.commonData.useRTL
                      ? this.getBannerSDKAssestsUrl() +
                        "/" +
                        this.getBannerName() +
                        "Rtl.json"
                      : this.getBannerSDKAssestsUrl() +
                        "/" +
                        this.getBannerName() +
                        ".json")
                      ? [4, (o = this).otFetch(t)]
                      : [3, 2]);
              case 1:
                (o.bannerContent = e.sent()), (e.label = 2);
              case 2:
                return [2, this.bannerContent];
            }
          });
        })
      );
    }),
    (de.prototype.getCookieSettingsButtonContent = function () {
      return l(this, void 0, void 0, function () {
        var t;
        return k(this, function (e) {
          return (
            (t = this.BannerVariables.commonData.useRTL
              ? this.getBannerSDKAssestsUrl() +
                "/" +
                this.cookieSettingsButtonFileNameRtl
              : this.getBannerSDKAssestsUrl() +
                "/" +
                this.cookieSettingsButtonFileName),
            [2, this.otFetch(t)]
          );
        });
      });
    }),
    (de.prototype.updateThirdPartyConsent = function (n, r, s, i, a) {
      return l(this, void 0, void 0, function () {
        var t, o;
        return k(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (t =
                  window.location.protocol +
                  "//" +
                  n +
                  "/?name=" +
                  r +
                  "&value=" +
                  s +
                  "&expire=" +
                  i +
                  "&isFirstRequest=" +
                  a),
                document.getElementById("onetrustIabCookie")
                  ? (document
                      .getElementById("onetrustIabCookie")
                      .contentWindow.location.replace(t),
                    [3, 3])
                  : [3, 1]
              );
            case 1:
              return (
                ((o = document.createElement("iframe")).style.display = "none"),
                (o.id = "onetrustIabCookie"),
                o.setAttribute("title", "OneTrust IAB Cookie"),
                (o.src = t),
                document.body.appendChild(o),
                [
                  4,
                  new Promise(function (e) {
                    (o.onload = function () {
                      e();
                    }),
                      (o.onerror = function () {
                        throw (e(), new URIError());
                      });
                  }),
                ]
              );
            case 2:
              return [2, e.sent()];
            case 3:
              return [2];
          }
        });
      });
    }),
    (de.prototype.setIABVendor = function (n) {
      var r = this;
      if (
        (void 0 === n && (n = !0),
        this.BannerVariables.iabData.vendors.forEach(function (e) {
          var t = e.vendorId;
          if (r.legIntSettings.PAllowLI && "IAB2" === r.iabType) {
            var o = !r.vendorsSetting[t].consent;
            r.BannerVariables.oneTrustIABConsent.vendors.push(
              t.toString() + ":" + (o ? "false" : n)
            ),
              r.BannerVariables.oneTrustIABConsent.legIntVendors.push(
                t.toString() + ":" + r.vendorsSetting[t].legInt
              );
          } else (r.BannerVariables.oneTrustIABConsent.legIntVendors = []), r.BannerVariables.oneTrustIABConsent.vendors.push(t.toString() + ":" + n);
        }),
        this.BannerVariables.domainData.UseGoogleVendors)
      ) {
        var t = this.BannerVariables.addtlVendors;
        Object.keys(this.addtlVendorsList).forEach(function (e) {
          n &&
            ((t.vendorSelected["" + e.toString()] = !0),
            t.vendorConsent.push("" + e.toString()));
        });
      }
    }),
    (de.prototype.updateCorrectIABUrl = function (e) {
      var t = W.getURL(e),
        o = this.getBannerScriptElement(),
        n = o && o.getAttribute("src") ? W.getURL(o.getAttribute("src")) : null;
      return (
        K.moduleInitializer.ScriptType ===
          this.BannerVariables.constant.DOWNLOADTOLOCAL &&
          n &&
          t &&
          n.hostname !== t.hostname &&
          (e = (e =
            (n = "" + this.getBannerDataParentUrl()) +
            t.pathname
              .split("/")
              .pop()
              .replace(/(^\/?)/, "/")).replace(t.hostname, n.hostname)),
        e
      );
    }),
    (de.prototype.updateCorrectUrl = function (e, t) {
      void 0 === t && (t = !1);
      var o = W.getURL(e),
        n = this.getBannerScriptElement(),
        r = n && n.getAttribute("src") ? W.getURL(n.getAttribute("src")) : null;
      if (r && o && r.hostname !== o.hostname) {
        if (
          K.moduleInitializer.ScriptType ===
          this.BannerVariables.constant.DOWNLOADTOLOCAL
        )
          return t
            ? e
            : (e =
                (r =
                  this.getBannerDataParentUrl() +
                  "/" +
                  this.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/"));
        e = e.replace(o.hostname, r.hostname);
      }
      return e;
    }),
    (de.prototype.getDataLanguageCulture = function () {
      var e = this.getBannerScriptElement();
      return e && e.getAttribute(pe.BannerVariables.constant.dataLanguage)
        ? e.getAttribute(pe.BannerVariables.constant.dataLanguage).toLowerCase()
        : pe.detectDocumentOrBrowserLanguage().toLowerCase();
    }),
    (de.prototype.detectDocumentOrBrowserLanguage = function () {
      var e = W.convertKeyValueLowerCase(
          this.BannerVariables.languageSwitcherJson
        ),
        t = this.getUserLanguge().toLowerCase(),
        o = "";
      if (!(o = e[t] || e[t + "-" + t] || (e.default === t ? e.default : null)))
        if (2 === t.length)
          for (var n = 0; n < Object.keys(e).length; n += 1) {
            var r = Object.keys(e)[n];
            if (r.substr(0, 2) === t) {
              o = e[r];
              break;
            }
          }
        else 2 < t.length && (o = e[t.substr(0, 2)]);
      return (o = o || e.default);
    }),
    (de.prototype.getUserLanguge = function () {
      return ce.useDocumentLanguage
        ? document.documentElement.lang
        : navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language || navigator.userLanguage;
    }),
    (de.prototype.setOrUpdate3rdPartyIABConsentFlag = function () {
      var e = this.getIABCrossConsentflagData(),
        t = this.BannerVariables.domainData;
      t.IsIabEnabled
        ? (e && !this.reconsentRequired()) ||
          this.updateCrossConsentCookie(t.IsIabThirdPartyCookieEnabled)
        : (e && !this.reconsentRequired() && "true" !== e) ||
          this.updateCrossConsentCookie(!1);
    }),
    (de.prototype.isIABCrossConsentEnabled = function () {
      return "true" === this.getIABCrossConsentflagData();
    }),
    (de.prototype.getIABCrossConsentflagData = function () {
      return this.readCookieParam(
        this.BannerVariables.optanonCookieName,
        this.BannerVariables.oneTrustIsIABCrossConsentEnableParam
      );
    }),
    (de.prototype.setGeolocationInCookies = function () {
      var e = this.readCookieParam(
        this.BannerVariables.optanonCookieName,
        this.BannerVariables.geolocationCookiesParam
      );
      if (this.userLocation && !e && this.isAlertBoxClosedAndValid()) {
        var t = this.userLocation.country + ";" + this.userLocation.state;
        this.setUpdateGeolocationCookiesData(t);
      } else
        this.reconsentRequired() &&
          e &&
          this.setUpdateGeolocationCookiesData("");
    }),
    (de.prototype.iabStringSDK = function (e) {
      void 0 === e && (e = "");
      var t = K.moduleInitializer.otIABModuleData;
      if (this.BannerVariables.domainData.IsIabEnabled && t)
        return "IAB2" === this.iabType
          ? {
              gvl: t.tcfSdkRef.gvl,
              tcModel: t.tcfSdkRef.tcModel,
              tcString: t.tcfSdkRef.tcString,
              cmpApi: t.tcfSdkRef.cmpApi,
              purposeRestriction: t.tcfSdkRef.purposeRestriction,
            }
          : t.consentString(e);
    }),
    (de.prototype.setUpdateGeolocationCookiesData = function (e) {
      this.writeCookieParam(
        this.BannerVariables.optanonCookieName,
        this.BannerVariables.geolocationCookiesParam,
        e
      );
    }),
    (de.prototype.writeCookieParam = function (e, t, o) {
      var n,
        r,
        s,
        i,
        a = {},
        l = this.getCookie(e);
      if (l)
        for (r = l.split("&"), n = 0; n < r.length; n += 1)
          (s = r[n].split("=")),
            (a[decodeURIComponent(s[0])] = decodeURIComponent(s[1]).replace(
              /\+/g,
              " "
            ));
      a[t] = o;
      var c = K.moduleInitializer.TenantFeatures;
      c && c.CookieV2CookieDateTimeInISO
        ? (a.datestamp = new Date().toISOString())
        : (a.datestamp = new Date().toString()),
        (a.version = this.BannerVariables.otSDKVersion),
        (i = W.param(a)),
        this.setCookie(
          e,
          i,
          this.BannerVariables.domainData.ReconsentFrequencyDays
        );
    }),
    (de.prototype.readCookieParam = function (e, t) {
      var o,
        n,
        r,
        s,
        i = this.getCookie(e);
      if (i) {
        for (n = {}, r = i.split("&"), o = 0; o < r.length; o += 1)
          (s = r[o].split("=")),
            (n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]).replace(
              /\+/g,
              " "
            ));
        return t && n[t] ? n[t] : t && !n[t] ? "" : n;
      }
      return "";
    }),
    (de.prototype.getCookie = function (e) {
      if (K.moduleInitializer.MobileSDK) {
        var t = this.getCookieDataObj(e);
        if (t) return t.value;
      }
      if (
        this.isAMP &&
        ((this.ampData =
          JSON.parse(localStorage.getItem(this.dataDomainId)) || {}),
        this.ampData)
      )
        return this.ampData[e] || null;
      var o,
        n,
        r = e + "=",
        s = document.cookie.split(";");
      for (o = 0; o < s.length; o += 1) {
        for (n = s[o]; " " === n.charAt(0); ) n = n.substring(1, n.length);
        if (0 === n.indexOf(r)) return n.substring(r.length, n.length);
      }
      return null;
    }),
    (de.prototype.setAmpLocalStorage = function () {
      localStorage.setItem(this.dataDomainId, JSON.stringify(this.ampData));
    }),
    (de.prototype.setCookie = function (e, t, o, n, r) {
      if (
        (void 0 === n && (n = !1), void 0 === r && (r = new Date()), this.isAMP)
      )
        "" != t && ((this.ampData[e] = t), this.setAmpLocalStorage());
      else {
        var s = void 0;
        s = o
          ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3),
            "; expires=" + r.toUTCString())
          : n
          ? "; expires=" + new Date(0).toUTCString()
          : "";
        var i = this.BannerVariables.commonData.optanonCookieDomain.split("/"),
          a = "",
          l = K.moduleInitializer.TenantFeatures;
        i.length <= 1 ? (i[1] = "") : (a = i.slice(1).join("/"));
        var c = "Samesite=Lax";
        if (
          (l && l.CookiesSameSiteNone && (c = "Samesite=None; Secure"),
          K.moduleInitializer.ScriptType ===
            this.BannerVariables.constant.TESTSCRIPT ||
            K.moduleInitializer.MobileSDK)
        ) {
          var d = t + s + "; path=/; " + c;
          K.moduleInitializer.MobileSDK
            ? this.setCookieDataObj({
                name: e,
                value: t,
                expires: s,
                date: r,
                domainAndPath: i,
              })
            : (document.cookie = e + "=" + d);
        } else
          (d = t + s + "; path=/" + a + "; domain=." + i[0] + "; " + c),
            (document.cookie = e + "=" + d);
      }
    }),
    (de.prototype.reconsentRequired = function () {
      return (
        (K.moduleInitializer.MobileSDK || this.awaitingReconsent()) &&
        this.needReconsent()
      );
    }),
    (de.prototype.awaitingReconsent = function () {
      return (
        "true" ===
        this.readCookieParam(
          this.BannerVariables.optanonCookieName,
          this.BannerVariables.optanonAwaitingReconsentName
        )
      );
    }),
    (de.prototype.needReconsent = function () {
      var e = this.BannerVariables.domainData,
        t = this.alertBoxCloseDate(),
        o = e.LastReconsentDate;
      return t && o && new Date(o) > new Date(t);
    }),
    (de.prototype.removeAlertBoxCookie = function () {
      pe.setCookie(
        pe.BannerVariables.optanonAlertBoxClosedCookieName,
        "",
        0,
        !0
      );
    }),
    (de.prototype.removeIab1Cookie = function () {
      pe.setCookie(ne.Iab1Pub, "", 0, !0);
    }),
    (de.prototype.removeIab2PubCookie = function () {
      pe.setCookie(ne.Iab2Pub, "", 0, !0);
    }),
    (de.prototype.updateCrossConsentCookie = function (e) {
      this.writeCookieParam(
        this.BannerVariables.optanonCookieName,
        this.BannerVariables.oneTrustIsIABCrossConsentEnableParam,
        e
      );
    }),
    (de.prototype.alertBoxCloseDate = function () {
      return this.getCookie(
        this.BannerVariables.optanonAlertBoxClosedCookieName
      );
    }),
    (de.prototype.setCookieDataObj = function (o) {
      if (o) {
        this.otCookieData ||
          (window.OneTrust && window.OneTrust.otCookieData
            ? (this.otCookieData = window.OneTrust.otCookieData)
            : (this.otCookieData = []));
        var n = -1;
        this.otCookieData.some(function (e, t) {
          if (e.name === o.name) return (n = t), !0;
        }),
          -1 < n ? (this.otCookieData[n] = o) : this.otCookieData.push(o);
      }
    }),
    (de.prototype.getCookieDataObj = function (o) {
      this.otCookieData ||
        (window.OneTrust && window.OneTrust.otCookieData
          ? (this.otCookieData = window.OneTrust.otCookieData)
          : (this.otCookieData = []));
      var n = -1;
      if (
        (this.otCookieData.some(function (e, t) {
          if (e.name === o) return (n = t), !0;
        }),
        0 <= n)
      ) {
        var e = this.otCookieData[n];
        if (e.date)
          return new Date(e.date) < new Date()
            ? (this.otCookieData.splice(n, 1), null)
            : e;
      }
      return null;
    }),
    (de.prototype.isAlertBoxClosedAndValid = function () {
      return null !== this.alertBoxCloseDate() && !this.reconsentRequired();
    }),
    (de.prototype.getOptanonIdForIabGroup = function (e, t) {
      var o;
      return (
        "IAB" === this.iabType
          ? (o = "IAB" + e)
          : "IAB2" === this.iabType &&
            (t === N.Purpose
              ? (o = "IABV2_" + e)
              : t === N.SpecialFeature && (o = "ISFV2_" + e)),
        o
      );
    }),
    (de.prototype.generateLegIntButtonElements = function (e, t, o) {
      void 0 === o && (o = !1);
      var n = this.BannerVariables.commonData;
      return (
        '<div className="ot-leg-btn-container" data-group-id="' +
        t +
        '" data-el-id="' +
        t +
        '-leg-out" is-vendor="' +
        o +
        '">\n                    <button className="ot-obj-leg-btn-handler ' +
        (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") +
        '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' +
        n.pcButtonTextColor +
        '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                       <span>' +
        (e
          ? pe.legIntSettings.PObjectLegIntText
          : pe.legIntSettings.PObjectionAppliedText) +
        '\n                        </span>\n                    </button>\n                    <button className="ot-remove-objection-handler" style="color:' +
        n.pcButtonColor +
        "; " +
        (e ? "display:none;" : "") +
        '">' +
        pe.legIntSettings.PRemoveObjectionText +
        "</button>\n                </div>\n        "
      );
    }),
    (de.prototype.fetchGvlObj = function () {
      return this.otFetch(K.moduleInitializer.IabV2Data.globalVendorListUrl);
    }),
    (de.prototype.fetchGoogleVendors = function () {
      var e = this.updateCorrectIABUrl(
        K.moduleInitializer.GoogleData.googleVendorListUrl
      );
      return this.checkMobileOfflineRequest(this.getBannerVersionUrl())
        ? this.otFetchOfflineFile(W.getRelativeURL(e, !0))
        : (this.BannerVariables.mobileOnlineURL.push(e), this.otFetch(e));
    }),
    (de.prototype.setGvlObj = function (e) {
      this.gvlObj = e;
    }),
    (de.prototype.setGoogleVendors = function (e) {
      this.addtlVendorsList = e ? e.vendors : null;
    }),
    (de.prototype.syncAlertBoxCookie = function (e) {
      var t = pe.BannerVariables,
        o = t.domainData.ReconsentFrequencyDays;
      pe.setCookie(t.optanonAlertBoxClosedCookieName, e, o, !1, new Date(e));
    }),
    (de.prototype.syncCookieExpiry = function () {
      if (pe.syncRequired) {
        var e = pe.BannerVariables,
          t = e.domainData.ReconsentFrequencyDays,
          o = pe.getCookie(e.optanonAlertBoxClosedCookieName),
          n = pe.getCookie(e.optanonCookieName);
        pe.setCookie(e.optanonCookieName, n, t, !1, new Date(o)),
          pe.needReconsent()
            ? this.removeAlertBoxCookie()
            : this.syncAlertBoxCookie(o);
        var r = pe.getCookie(e.oneTrustIABCookieName);
        r &&
          (pe.isIABCrossConsentEnabled()
            ? pe.removeIab2PubCookie()
            : pe.setCookie(e.oneTrustIABCookieName, r, t, !1, new Date(o)));
      }
    }),
    de)(),
    ke = function () {};
  var he =
    ((be.insertAfter = function (e, t) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }),
    (be.insertBefore = function (e, t) {
      t.parentNode.insertBefore(e, t);
    }),
    (be.inArray = function (e, t) {
      return t.indexOf(e);
    }),
    (be.ajax = function (e) {
      var t,
        o,
        n,
        r,
        s,
        i,
        a = null,
        l = new XMLHttpRequest();
      (t = e.type),
        (o = e.url),
        e.dataType,
        (n = e.contentType),
        (r = e.data),
        (s = e.success),
        (a = e.error),
        (i = e.sync),
        l.open(t, o, !i),
        l.setRequestHeader("Content-Type", n),
        (l.onload = function () {
          if (200 <= this.status && this.status < 400) {
            var e = JSON.parse(this.responseText);
            s(e);
          } else a({ message: "Error Loading Data", statusCode: this.status });
        }),
        (l.onerror = function (e) {
          a(e);
        }),
        "post" === t.toLowerCase() || "put" === t.toLowerCase()
          ? l.send(r)
          : l.send();
    }),
    (be.prevNextHelper = function (o, e, n) {
      var r = [];
      function s(e, t, o) {
        t[e] && o
          ? o.includes(".")
            ? (t[e].classList[0] ||
                (t[e].classList.value &&
                  t[e].classList.value.includes(o.split(".")[1]))) &&
              r.push(t[e])
            : o.includes("#")
            ? t[e].id === o.split("#")[1] && r.push(t[e])
            : t[e].tagName === document.createElement(o.trim()).tagName &&
              r.push(t[e])
          : t[e] && r.push(t[e]);
      }
      return (
        "string" == typeof e
          ? Array.prototype.forEach.call(
              document.querySelectorAll(e),
              function (e, t) {
                s(o, e, n);
              }
            )
          : s(o, e, n),
        r
      );
    }),
    (be.browser = function () {
      var e, t, o;
      return (
        (navigator.sayswho =
          ((t = navigator.userAgent),
          (o =
            t.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || []),
          /trident/i.test(o[1])
            ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "")
            : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/))
            ? e.slice(1).join(" ").replace("OPR", "Opera")
            : ((o = o[2]
                ? [o[1], o[2]]
                : [navigator.appName, navigator.appVersion, "-?"]),
              null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]),
              o.join(" ")))),
        {
          version: parseInt(navigator.sayswho.split(" ")[1]),
          type: navigator.sayswho.split(" ")[0],
          userAgent: navigator.userAgent,
        }
      );
    }),
    (be.isNodeList = function (e) {
      return "[object NodeList]" === Object.prototype.toString.call(e);
    }),
    (be.prototype.fadeOut = function (e) {
      var t = this;
      if ((void 0 === e && (e = 60), 1 <= this.el.length))
        for (var o = 0; o < this.el.length; o++)
          (this.el[o].style.visibility = "hidden"),
            (this.el[o].style.opacity = "0"),
            (this.el[o].style.transition =
              "visibility 0s " + e + "ms, opacity " + e + "ms linear");
      var n = setInterval(function () {
        if (1 <= t.el.length)
          for (var e = 0; e < t.el.length; e++)
            t.el[e].style.opacity <= 0 &&
              ((t.el[e].style.display = "none"),
              clearInterval(n),
              "optanon-popup-bg" === t.el[e].id &&
                t.el[e].setAttribute("style", ""));
      }, e);
      return this;
    }),
    (be.prototype.hide = function () {
      if (1 <= this.el.length)
        for (var e = 0; e < this.el.length; e++)
          this.el[e].style.display = "none";
      else be.isNodeList(this.el) || (this.el.style.display = "none");
      return this;
    }),
    (be.prototype.show = function (e) {
      if ((void 0 === e && (e = "block"), 1 <= this.el.length))
        for (var t = 0; t < this.el.length; t++) this.el[t].style.display = e;
      else be.isNodeList(this.el) || (this.el.style.display = e);
      return this;
    }),
    (be.prototype.remove = function () {
      if (1 <= this.el.length)
        for (var e = 0; e < this.el.length; e++)
          this.el[e].parentNode.removeChild(this.el[e]);
      else this.el.parentNode.removeChild(this.el);
      return this;
    }),
    (be.prototype.css = function (e) {
      if (e)
        if (1 <= this.el.length) {
          if (e.includes(":"))
            for (var t = 0; t < this.el.length; t++)
              this.el[t].setAttribute("style", e);
          else if ((t = 0) < this.el.length) return this.el[t].style[e];
        } else {
          if (!e.includes(":")) return this.el.style[e];
          this.el.setAttribute("style", e);
        }
      return this;
    }),
    (be.prototype.offset = function () {
      return 1 <= this.el.length
        ? this.el[0].getBoundingClientRect()
        : this.el.getBoundingClientRect();
    }),
    (be.prototype.prop = function (e, t) {
      if (1 <= this.el.length)
        for (var o = 0; o < this.el.length; o++) this.el[o][e] = t;
      else this.el[e] = t;
      return this;
    }),
    (be.prototype.removeclassName = function (e) {
      if (1 <= this.el.length)
        for (var t = 0; t < this.el.length; t++)
          this.el[t].classList
            ? this.el[t].classList.remove(e)
            : (this.el[t].className = this.el[t].className.replace(
                new RegExp(
                  "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                  "gi"
                ),
                " "
              ));
      else
        this.el.classList
          ? this.el.classList.remove(e)
          : (this.el.className = this.el.className.replace(
              new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
              " "
            ));
      return this;
    }),
    (be.prototype.addclassName = function (e) {
      if (1 <= this.el.length)
        for (var t = 0; t < this.el.length; t++)
          this.el[t].classList
            ? this.el[t].classList.add(e)
            : (this.el[t].className += " " + e);
      else
        this.el.classList
          ? this.el.classList.add(e)
          : (this.el.className += " " + e);
      return this;
    }),
    (be.prototype.on = function (r, e, s) {
      var t = this;
      if ("string" != typeof e)
        if (
          ("HTML" === this.el.nodeName && "load" === r) ||
          "resize" === r ||
          "scroll" === r
        )
          switch (r) {
            case "load":
              window.onload = e;
              break;
            case "resize":
              window.onresize = e;
              break;
            case "scroll":
              window.onscroll = e;
          }
        else if (1 <= this.el.length)
          for (var o = 0; o < this.el.length; o++)
            this.el[o].addEventListener(r, e);
        else this.el.addEventListener(r, e);
      else if (
        ("HTML" === this.el.nodeName && "load" === r) ||
        "resize" === r ||
        "scroll" === r
      )
        switch (r) {
          case "load":
            window.onload = s;
            break;
          case "resize":
            window.onresize = s;
            break;
          case "scroll":
            window.onscroll = s;
        }
      else {
        var i = function (o) {
          var n = o.target;
          (t.el.eventExecuted = !0),
            Array.prototype.forEach.call(
              document.querySelectorAll(e),
              function (e, t) {
                e.addEventListener(r, s), e === n && s && s.call(e, o);
              }
            ),
            t.el[0]
              ? t.el[0].removeEventListener(r, i)
              : t.el.removeEventListener(r, i);
        };
        if (1 <= this.el.length)
          for (o = 0; o < this.el.length; o++)
            (this.el[o].eventExecuted = !1),
              this.el[o].eventExecuted || this.el[o].addEventListener(r, i);
        else
          (this.el.eventExecuted = !1),
            this.el.eventExecuted || this.el.addEventListener(r, i);
      }
      return this;
    }),
    (be.prototype.off = function (e, t) {
      if (1 <= this.el.length)
        for (var o = 0; o < this.el.length; o++)
          this.el[o].removeEventListener(e, t);
      else this.el.removeEventListener(e, t);
      return this;
    }),
    (be.prototype.one = function (e, t) {
      if (1 <= this.el.length)
        for (var o = 0; o < this.el.length; o++)
          this.el[o].addEventListener(e, function (e) {
            e.stopPropagation(),
              e.currentTarget.dataset.triggered ||
                (t(), (e.currentTarget.dataset.triggered = !0));
          });
      else
        this.el.addEventListener(e, function (e) {
          e.stopPropagation(),
            e.currentTarget.dataset.triggered ||
              (t(), (e.currentTarget.dataset.triggered = !0));
        });
      return this;
    }),
    (be.prototype.trigger = function (e) {
      var t = new CustomEvent(e, { customEvent: "yes" });
      return this.el.dispatchEvent(t), this;
    }),
    (be.prototype.focus = function () {
      return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this;
    }),
    (be.prototype.attr = function (e, t) {
      return 1 <= this.el.length
        ? t
          ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t),
            this)
          : this.el[0].getAttribute(e)
        : t
        ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this)
        : this.el.getAttribute(e);
    }),
    (be.prototype.html = function (e) {
      if (null == e) {
        if (!(1 <= this.el.length)) return this.el.innerHTML;
        if ((t = 0) < this.el.length) return this.el[t].innerHTML;
      } else if (1 <= this.el.length)
        for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
      else this.el.innerHTML = e;
      return this;
    }),
    (be.prototype.append = function (o) {
      if ("string" != typeof o || o.includes("<") || o.includes(">"))
        if (Array.isArray(o)) {
          var n = this;
          Array.prototype.forEach.call(o, function (e, t) {
            document.querySelector(n.selector).appendChild(new be(e, "ce").el);
          });
        } else if ("string" == typeof o || Array.isArray(o))
          if ("string" == typeof this.selector)
            document
              .querySelector(this.selector)
              .appendChild(new be(o, "ce").el);
          else if (this.useEl) {
            var r = document.createDocumentFragment(),
              s = !(!o.includes("<th") && !o.includes("<td"));
            if (s) {
              var e = o.split(" ")[0].split("<")[1];
              r.appendChild(document.createElement(e)),
                (r.firstChild.innerHTML = o);
            }
            Array.prototype.forEach.call(this.el, function (e, t) {
              s
                ? e.appendChild(r.firstChild)
                : e.appendChild(new be(o, "ce").el);
            });
          } else this.selector.appendChild(new be(o, "ce").el);
        else if ("string" == typeof this.selector)
          document.querySelector(this.selector).appendChild(o);
        else if (1 <= o.length)
          for (var t = 0; t < o.length; t++) this.selector.appendChild(o[t]);
        else this.selector.appendChild(o);
      else this.el.insertAdjacentText("beforeend", o);
      return this;
    }),
    (be.prototype.text = function (o) {
      if (this.el) {
        if (1 <= this.el.length) {
          if (!o) return this.el[0].textContent;
          Array.prototype.forEach.call(this.el, function (e, t) {
            e.textContent = o;
          });
        } else {
          if (!o) return this.el.textContent;
          this.el.textContent = o;
        }
        return this;
      }
    }),
    (be.prototype.data = function (o, n) {
      if (this.el.length < 1) return this;
      if (!(1 <= this.el.length)) return r(this.el, n);
      function r(e, t) {
        if (!t) return JSON.parse(e.getAttribute("data-" + o));
        "object" == typeof t
          ? e.setAttribute("data-" + o, JSON.stringify(t))
          : e.setAttribute("data-" + o, t);
      }
      return (
        Array.prototype.forEach.call(this.el, function (e, t) {
          r(e, n);
        }),
        this
      );
    }),
    (be.prototype.height = function (e) {
      this.el.length && (this.el = this.el[0]);
      for (
        var t = parseInt(
            window
              .getComputedStyle(this.el, null)
              .getPropertyValue("padding-top")
              .split("px")[0]
          ),
          o = parseInt(
            window
              .getComputedStyle(this.el, null)
              .getPropertyValue("padding-bottom")
              .split("px")[0]
          ),
          n = parseInt(
            window
              .getComputedStyle(this.el, null)
              .getPropertyValue("margin-top")
              .split("px")[0]
          ),
          r = parseInt(
            window
              .getComputedStyle(this.el, null)
              .getPropertyValue("margin-bottom")
              .split("px")[0]
          ),
          s = parseInt(
            window
              .getComputedStyle(this.el, null)
              .getPropertyValue("height")
              .split("px")[0]
          ),
          i = [t, o, n, r],
          a = 0,
          l = 0;
        l < i.length;
        l++
      )
        0 < i[l] && (a += i[l]);
      if (!e) return this.selector === document ? s : this.el.clientHeight - a;
      var c = e.toString().split(parseInt(e))[1]
          ? e.toString().split(parseInt(e))[1]
          : "px",
        d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
      return (
        ((c && "px" === c) || "%" === c || "em" === c || "rem" === c) &&
          (0 < d
            ? (this.el.style.height = a + d + c)
            : "auto" === e && (this.el.style.height = e)),
        this
      );
    }),
    (be.prototype.find = function (o) {
      var n = [];
      if (o) {
        if ("string" == typeof o) {
          var e = "." === o.split("")[0],
            t = "#" === o.split("")[0];
          if (e || t) {
            var r = e ? "classList" : "id";
            Array.prototype.forEach.call(this.el.childNodes, function (e, t) {
              "function" == typeof e[r].includes &&
              e[r].includes(o.split(o.split("")[0])[1])
                ? n.push(e)
                : e[r] &&
                  e[r].contains(o.split(o.split("")[0])[1]) &&
                  n.push(e);
            });
          } else
            Array.prototype.forEach.call(this.el.childNodes, function (e, t) {
              e.tagName.toLowerCase() === o && n.push(e);
            });
        }
        (this.el = n), (this.useEl = !0);
      }
      return this;
    }),
    (be.prototype.each = function (e) {
      var t = !1;
      return (
        void 0 === this.el.length && ((this.el = [this.el]), (t = !0)),
        Array.prototype.forEach.call(this.el, e),
        t && (this.el = this.el[0]),
        this
      );
    }),
    (be.prototype.parent = function (o) {
      var n = [];
      if (
        (Object.prototype.toString.call(this.el).includes("NodeList")
          ? Array.prototype.forEach.call(this.el, function (e, t) {
              n.push(e.parentNode);
            })
          : n.push(this.el.parentNode),
        (n = n.filter(function (e, t, o) {
          return o.indexOf(e) === t;
        })),
        o)
      ) {
        var r = [];
        n.forEach(function (e) {
          if (o.includes("."))
            for (var t = 0; t < e.classList.length; t++)
              e.classList[t].includes(o.split(".")[1]) && r.push(e);
          else e.id === o.split("#")[1] && r.push(e);
        }),
          (n = r);
      }
      return (this.el = n), this;
    }),
    (be.prototype.is = function (e) {
      return this.el.length
        ? (
            this.el[0].matches ||
            this.el[0].matchesSelector ||
            this.el[0].msMatchesSelector ||
            this.el[0].mozMatchesSelector ||
            this.el[0].webkitMatchesSelector ||
            this.el[0].oMatchesSelector
          ).call(this.el[0], e)
        : (
            this.el.matches ||
            this.el.matchesSelector ||
            this.el.msMatchesSelector ||
            this.el.mozMatchesSelector ||
            this.el.webkitMatchesSelector ||
            this.el.oMatchesSelector
          ).call(this.el, e);
    }),
    (be.prototype.hasclassName = function (e) {
      return void 0 === this.el.length
        ? this.el.classList.contains(e)
        : this.el[0].classList.contains(e);
    }),
    (be.prototype.filter = function (e) {
      return (
        (this.el = Array.prototype.filter.call(
          document.querySelectorAll(this.selector),
          e
        )),
        this
      );
    }),
    (be.prototype.replaceWith = function (o) {
      return (
        "string" != typeof this.selector
          ? (this.el.outerHTML = o)
          : Array.prototype.forEach.call(
              document.querySelectorAll(this.selector),
              function (e, t) {
                e.outerHTML = o;
              }
            ),
        this
      );
    }),
    (be.prototype.prepend = function (o) {
      return (
        Array.prototype.forEach.call(
          document.querySelectorAll(this.selector),
          function (e, t) {
            e.insertBefore(new be(o, "ce").el, e.firstChild);
          }
        ),
        this
      );
    }),
    (be.prototype.prev = function (e) {
      return (
        (this.el = be.prevNextHelper(
          "previousElementSibling",
          this.selector,
          e
        )),
        this
      );
    }),
    (be.prototype.next = function (e) {
      return (
        (this.el = be.prevNextHelper("nextElementSibling", this.selector, e)),
        this
      );
    }),
    (be.prototype.before = function (o) {
      return (
        Array.prototype.forEach.call(
          document.querySelectorAll(this.selector),
          function (e, t) {
            e.insertAdjacentHTML("beforebegin", o);
          }
        ),
        this
      );
    }),
    (be.prototype.after = function (o) {
      return (
        Array.prototype.forEach.call(
          document.querySelectorAll(this.selector),
          function (e, t) {
            e.insertAdjacentHTML("afterend", o);
          }
        ),
        this
      );
    }),
    (be.prototype.siblings = function () {
      var t = this;
      return Array.prototype.filter.call(
        this.el[0].parentNode.children,
        function (e) {
          return e !== t.el[0];
        }
      );
    }),
    (be.prototype.outerHeight = function () {
      if ("string" == typeof this.selector)
        return document.querySelector(this.selector).offsetHeight;
      Array.prototype.forEach.call(this.selector, function (e, t) {
        return e.offsetHeight;
      });
    }),
    (be.prototype.animate = function (i, a) {
      var l,
        c = this;
      for (var e in ((this.el = document.querySelector(this.selector)), i))
        (l = e),
          (function () {
            var e = parseInt(i[l]),
              t = i[l].split(parseInt(i[l]))[1]
                ? i[l].split(parseInt(i[l]))[1]
                : "px",
              o =
                "\n                      @keyframes slide-" +
                ("top" === l ? "up" : "down") +
                "-custom {\n                          0% {\n                              " +
                ("top" === l ? "top" : "bottom") +
                ": " +
                ("top" === l
                  ? c.el.getBoundingClientRect().top
                  : window.innerHeight) +
                "px !important;\n                          }\n                          100% {\n                              " +
                ("top" === l ? "top" : "bottom") +
                ": " +
                (e + t) +
                ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" +
                ("top" === l ? "up" : "down") +
                "-custom {\n                          0% {\n                              " +
                ("top" === l ? "top" : "bottom") +
                ": " +
                ("top" === l
                  ? c.el.getBoundingClientRect().top
                  : window.innerHeight) +
                "px !important;\n                          }\n                          100% {\n                              " +
                ("top" === l ? "top" : "bottom") +
                ": " +
                (e + t) +
                ";\n                          }\n                      }\n                      @-moz-keyframes slide-" +
                ("top" === l ? "up" : "down") +
                "-custom {\n                          0% {\n                              " +
                ("top" === l ? "top" : "bottom") +
                ": " +
                ("top" === l
                  ? c.el.getBoundingClientRect().top
                  : window.innerHeight) +
                "px !important;\n                          }\n                          100% {\n                              " +
                ("top" === l ? "top" : "bottom") +
                ": " +
                (e + t) +
                ";\n                          }\n                      }\n                      ",
              n = document.head.querySelector("#onetrust-style");
            if (n) n.innerHTML += o;
            else {
              var r = document.createElement("style");
              (r.id = "onetrust-legacy-style"),
                (r.type = "text/css"),
                (r.innerHTML = o),
                document.head.appendChild(r);
            }
            if ((be.browser().type = be.browser().version <= 8)) {
              var s =
                "top" === l
                  ? "-webkit-animation: slide-up-custom "
                  : "-webkit-animation: slide-down-custom " +
                    a +
                    "ms ease-out forwards;";
              c.el.setAttribute("style", s);
            } else
              (c.el.style.animationName =
                "top" === l ? "slide-up-custom" : "slide-down-custom"),
                (c.el.style.animationDuration = a + "ms"),
                (c.el.style.animationFillMode = "forwards"),
                (c.el.style.animationTimingFunction = "ease-out");
          })();
      return this;
    }),
    (be.prototype.wrap = function (i) {
      return (
        Array.prototype.forEach.call(
          document.querySelectorAll(this.selector),
          function (e, t) {
            var o,
              n = be.browser().type.toLowerCase(),
              r = be.browser().version;
            if (
              (r < 10 && "safari" === n) ||
              ("chrome" === n && r <= 44) ||
              (r <= 40 && "firefox" === n)
            ) {
              var s = document.implementation.createHTMLDocument();
              (s.body.innerHTML = i), (o = s.body.children[0]);
            } else
              o = document.createRange().createContextualFragment(i).firstChild;
            e.parentNode.insertBefore(o, e), o.appendChild(e);
          }
        ),
        this
      );
    }),
    (be.prototype.scrollTop = function () {
      return this.el.scrollTop;
    }),
    be);
  function be(e, t) {
    switch (
      (void 0 === t && (t = ""), (this.selector = e), (this.useEl = !1), t)
    ) {
      case "ce":
        var o = be.browser().type.toLowerCase(),
          n = be.browser().version;
        if (
          (n < 10 && "safari" === o) ||
          ("chrome" === o && n <= 44) ||
          (n <= 40 && "firefox" === o)
        ) {
          var r = document.implementation.createHTMLDocument();
          (r.body.innerHTML = e), (this.el = r.body.children[0]);
        } else {
          var s = document.createRange().createContextualFragment(e);
          this.el = s.firstChild;
        }
        this.length = 1;
        break;
      case "":
        (this.el =
          e === document || e === window
            ? document.documentElement
            : "string" != typeof e
            ? e
            : document.querySelectorAll(e)),
          (this.length =
            e === document || e === window || "string" != typeof e
              ? 1
              : this.el.length);
        break;
      default:
        this.length = 0;
    }
  }
  function ye(e, t) {
    return void 0 === t && (t = ""), new he(e, t);
  }
  var fe,
    ge =
      ((me.prototype.setUseDocumentLanguage = function (e) {
        ce.setUseDocumentLanguage(e);
      }),
      (me.prototype.getCookie = function (e) {
        return pe.getCookie(e);
      }),
      (me.prototype.isIABCrossConsentEnabled = function () {
        return pe.isIABCrossConsentEnabled();
      }),
      (me.prototype.setDomainElementAttributes = function () {
        pe.bannerScriptElement &&
          (pe.bannerScriptElement.hasAttribute(
            pe.BannerVariables.constant.documentLanguageAttibute
          ) &&
            fe.setUseDocumentLanguage(
              "true" ===
                pe.bannerScriptElement.getAttribute(
                  pe.BannerVariables.constant.documentLanguageAttibute
                )
            ),
          pe.bannerScriptElement.hasAttribute(
            pe.BannerVariables.constant.IGNOREGA
          ) &&
            (pe.BannerVariables.ignoreGoogleAnlyticsCall =
              "true" ===
              pe.bannerScriptElement.getAttribute(
                pe.BannerVariables.constant.IGNOREGA
              )),
          pe.bannerScriptElement.hasAttribute(
            pe.BannerVariables.constant.IGNOREHTMLCSS
          ) &&
            (pe.BannerVariables.ignoreInjectingHtmlCss =
              "true" ===
              pe.bannerScriptElement.getAttribute(
                pe.BannerVariables.constant.IGNOREHTMLCSS
              )));
      }),
      (me.prototype.setBannerScriptElement = function (e) {
        (pe.bannerScriptElement = e), this.setDomainElementAttributes();
      }),
      me);
  function me() {}
  var Ce,
    ve =
      ((Pe.prototype.isIabCookieValid = function () {
        var e = null;
        switch (pe.iabType) {
          case "IAB":
            e = pe.getCookie("eupubconsent");
            break;
          case "IAB2":
            e = pe.getCookie("eupubconsent-v2");
        }
        return null !== e;
      }),
      (Pe.prototype.iabTypeIsChanged = function () {
        this.isIabCookieValid() ||
          (pe.removeAlertBoxCookie(),
          "IAB2" === pe.iabType && pe.removeIab1Cookie());
      }),
      (Pe.prototype.initializeIABModule = function () {
        return l(this, void 0, void 0, function () {
          var t;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return (t = pe.BannerVariables.domainData).IsIabEnabled
                  ? ((K.moduleInitializer.otIABModuleData = window.otIabModule),
                    pe.setIabData(),
                    "IAB" !== pe.iabType
                      ? [3, 2]
                      : [4, pe.populateVendorListCMP()])
                  : [3, 5];
              case 1:
                return e.sent(), [3, 4];
              case 2:
                return [4, pe.populateVendorListTCF()];
              case 3:
                e.sent(), (e.label = 4);
              case 4:
                return (
                  pe.isIABCrossConsentEnabled() || this.iabTypeIsChanged(),
                  pe.populateIABCookies(),
                  t.UseGoogleVendors && this.removeInActiveAddtlVendors(),
                  [3, 6]
                );
              case 5:
                pe.removeIab1Cookie(), (e.label = 6);
              case 6:
                return [2];
            }
          });
        });
      }),
      (Pe.prototype.removeInActiveAddtlVendors = function () {
        var e = pe.BannerVariables.domainData.OverridenGoogleVendors;
        for (var t in pe.addtlVendorsList)
          e[t] && !e[t].active && delete pe.addtlVendorsList[t];
      }),
      (Pe.prototype.getIABConsentData = function () {
        var e = pe.BannerVariables.oneTrustIABConsent;
        if ("IAB2" === pe.BannerVariables.domainData.IabType) {
          var t = pe.iabStringSDK().tcString();
          pe.tcModel.unsetAllPurposeConsents(),
            pe.tcModel.unsetAllVendorConsents(),
            pe.tcModel.unsetAllVendorLegitimateInterests(),
            pe.tcModel.unsetAllSpecialFeatureOptins(),
            pe.tcModel.unsetAllPurposeLegitimateInterests(),
            pe.tcModel.publisherConsents.empty(),
            pe.tcModel.publisherLegitimateInterests.empty(),
            pe.tcModel.purposeConsents.set(W.getActiveIdArray(e.purpose)),
            pe.tcModel.publisherConsents.set(W.getActiveIdArray(e.purpose));
          var o = pe.legIntSettings.PAllowLI
            ? W.getActiveIdArray(e.legimateInterest)
            : [];
          pe.tcModel.purposeLegitimateInterests.set(o),
            pe.tcModel.publisherLegitimateInterests.set(o),
            pe.tcModel.vendorConsents.set(
              W.getActiveIdArray(W.distinctArray(e.vendors))
            ),
            pe.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []),
            pe.tcModel.vendorLegitimateInterests.set(
              W.getActiveIdArray(W.distinctArray(e.legIntVendors))
            ),
            pe.tcModel.specialFeatureOptins.set(
              W.getActiveIdArray(e.specialFeatures)
            );
          var n = t.encode(pe.tcModel);
          return pe.cmpApi.update(n, !1), n;
        }
        var r = pe.BannerVariables.iabData,
          s = void 0;
        return (
          e.IABCookieValue && !pe.reconsentRequired()
            ? (s = pe.iabStringSDK(e.IABCookieValue))
            : ((s = pe.iabStringSDK()).setCmpId(parseInt(r.cmpId)),
              s.setCmpVersion(parseInt(r.cmpVersion)),
              s.setConsentLanguage(r.consentLanguage),
              s.setConsentScreen(parseInt(r.consentScreen))),
          s.setGlobalVendorList(e.vendorList),
          s.setPurposesAllowed(
            pe.isAlertBoxClosedAndValid() ? W.getActiveIdArray(e.purpose) : []
          ),
          s.setVendorsAllowed(
            pe.isAlertBoxClosedAndValid()
              ? W.getActiveIdArray(W.distinctArray(e.vendors))
              : []
          ),
          s.getConsentString()
        );
      }),
      (Pe.prototype.decodeTCString = function (e) {
        return pe.iabStringSDK().tcString().decode(e);
      }),
      (Pe.prototype.getPingRequest = function (e) {
        return e(
          {
            gdprAppliesGlobally:
              pe.BannerVariables.oneTrustIABgdprAppliesGlobally,
            cmpLoaded:
              pe.BannerVariables.oneTrustIABConsent.vendorList &&
              !(null == pe.BannerVariables.oneTrustIABgdprAppliesGlobally),
          },
          !0
        );
      }),
      (Pe.prototype.getVendorConsentsRequest = function (e, t) {
        var o = pe.BannerVariables.iabData,
          n = W.distinctArray(pe.BannerVariables.oneTrustIABConsent.vendors);
        t && Array.isArray(t) && (n = W.getFilteredVenderList(n, t));
        var r = Ce.getIABConsentData(),
          s = pe.iabStringSDK(r);
        return e(
          {
            metadata: r,
            gdprApplies: pe.BannerVariables.oneTrustIABgdprAppliesGlobally,
            hasGlobalScope: pe.isIABCrossConsentEnabled(),
            cookieVersion: o.cookieVersion,
            created: o.createdTime,
            lastUpdated: o.updatedTime,
            cmpId: s.getCmpId(),
            cmpVersion: s.getCmpVersion(),
            consentLanguage: s.getConsentLanguage(),
            consentScreen: s.getConsentScreen(),
            vendorListVersion: s.getVendorListVersion(),
            maxVendorId: s.getMaxVendorId(),
            purposeConsents: pe.isAlertBoxClosedAndValid()
              ? W.convertIABVendorPurposeArrayToObject(
                  pe.BannerVariables.oneTrustIABConsent.purpose
                )
              : {},
            vendorConsents: pe.isAlertBoxClosedAndValid()
              ? W.convertIABVendorPurposeArrayToObject(n)
              : {},
          },
          !0
        );
      }),
      (Pe.prototype.getConsentDataRequest = function (e) {
        return e(
          {
            gdprApplies: pe.BannerVariables.oneTrustIABgdprAppliesGlobally,
            hasGlobalScope: fe.isIABCrossConsentEnabled(),
            consentData:
              pe.BannerVariables.oneTrustIABConsent.IABCookieValue ||
              Ce.getIABConsentData(),
          },
          !0
        );
      }),
      (Pe.prototype.getVendorConsentsRequestV2 = function (e) {
        var o;
        return (
          window.__tcfapi("getInAppTCData", 2, function (e, t) {
            o = [e, t];
          }),
          e.apply(this, o)
        );
      }),
      (Pe.prototype.getPingRequestForTcf = function (e) {
        var t;
        return (
          window.__tcfapi("ping", 2, function (e) {
            t = [e];
          }),
          e.apply(this, t)
        );
      }),
      (Pe.prototype.populateVendorAndPurposeFromCookieData = function () {
        if (
          (pe.BannerVariables.oneTrustIABConsent,
          "IAB2" === pe.BannerVariables.domainData.IabType)
        ) {
          var e = Ce.decodeTCString(
            pe.BannerVariables.oneTrustIABConsent.IABCookieValue
          );
          e.vendorConsents.forEach(function (e, t) {
            pe.BannerVariables.oneTrustIABConsent.vendors.push(t + ":" + e);
          }),
            e.vendorLegitimateInterests.forEach(function (e, t) {
              pe.BannerVariables.oneTrustIABConsent.legIntVendors.push(
                t + ":" + e
              );
            }),
            e.purposeConsents.forEach(function (e, o) {
              var n = o;
              pe.BannerVariables.oneTrustIABConsent.purpose.some(function (
                e,
                t
              ) {
                if (e.split(":")[0] === o.toString()) return (n = t), !0;
              }),
                (pe.BannerVariables.oneTrustIABConsent.purpose[n] =
                  o + ":" + e);
            }),
            e.specialFeatureOptins.forEach(function (e, o) {
              var n = o;
              pe.BannerVariables.oneTrustIABConsent.specialFeatures.some(
                function (e, t) {
                  if (e.split(":")[0] === o.toString()) return (n = t), !0;
                }
              ),
                (pe.BannerVariables.oneTrustIABConsent.specialFeatures[n] =
                  o + ":" + e);
            }),
            e.purposeLegitimateInterests.forEach(function (e, o) {
              var n = o;
              pe.BannerVariables.oneTrustIABConsent.legimateInterest.some(
                function (e, t) {
                  if (e.split(":")[0] === o.toString()) return (n = t), !0;
                }
              ),
                (pe.BannerVariables.oneTrustIABConsent.legimateInterest[n] =
                  o + ":" + e);
            }),
            this.syncBundleAndStack(),
            (e.gvl = pe.tcModel.gvl),
            (e.isServiceSpecific = !pe.isIABCrossConsentEnabled()),
            (pe.tcModel = e),
            pe.isAlertBoxClosedAndValid()
              ? pe.cmpApi.update(pe.iabStringSDK().tcString().encode(e), !1)
              : pe.resetTCModel();
        } else {
          var t = pe.iabStringSDK(
            pe.BannerVariables.oneTrustIABConsent.IABCookieValue
          );
          t.getVendorsAllowed().forEach(function (e) {
            pe.BannerVariables.oneTrustIABConsent.vendors.push(
              e.toString() + ":true"
            );
          }),
            t.getPurposesAllowed().forEach(function (o) {
              var n = o;
              pe.BannerVariables.oneTrustIABConsent.purpose.some(function (
                e,
                t
              ) {
                if (e.split(":")[0] === o.toString()) return (n = t), !0;
              }),
                (pe.BannerVariables.oneTrustIABConsent.purpose[n] =
                  o.toString() + ":true");
            });
        }
      }),
      (Pe.prototype.syncBundleAndStack = function () {
        var r = pe.BannerVariables,
          e = pe.readCookieParam(r.optanonCookieName, "groups");
        (r.optanonHtmlGroupData = W.deserialiseStringToArray(e)),
          r.domainData.Groups.forEach(function (o) {
            if (o.Type === C || o.Type === w) {
              var e = O.isBundleOrStackActive(r, o),
                n = -1;
              r.optanonHtmlGroupData.some(function (e, t) {
                e.split(":")[0] === o.CustomGroupId && (n = t);
              });
              var t = o.CustomGroupId + ":" + Number(e);
              -1 < n
                ? (r.optanonHtmlGroupData[n] = t)
                : r.optanonHtmlGroupData.push(t);
            }
          }),
          pe.writeCookieParam(
            r.optanonCookieName,
            "groups",
            r.optanonHtmlGroupData.join(",")
          );
      }),
      (Pe.prototype.populateGoogleConsent = function () {
        if (pe.BannerVariables.domainData.UseGoogleVendors) {
          var e = pe.getCookie(pe.BannerVariables.oneTrustAddtlConsentCookie);
          e &&
            ((pe.isAddtlConsent = !0),
            (pe.BannerVariables.addtlVendors.vendorConsent = e
              .replace(pe.addtlConsentVersion, "")
              .split(".")));
        }
      }),
      (Pe.prototype.isInitIABCookieData = function (e) {
        return "init" === e || pe.needReconsent();
      }),
      (Pe.prototype.updateFromGlobalConsent = function (e) {
        var t = pe.BannerVariables.oneTrustIABConsent;
        (t.IABCookieValue = e),
          (t.purpose = t.purpose || []),
          (t.specialFeatures = t.specialFeatures || []),
          (t.legIntVendors = []),
          (t.legimateInterest = []),
          (t.vendors = []),
          Ce.populateVendorAndPurposeFromCookieData(),
          pe.setCookie(pe.BannerVariables.oneTrustIABCookieName, "", -1);
      }),
      Pe);
  function Pe() {}
  var Ae,
    Te =
      ((Ie.prototype.getCookieLabel = function (e, t) {
        if ((void 0 === t && (t = !0), !e)) return "";
        var o = pe.BannerVariables.domainData,
          n = t
            ? "http://cookiepedia.co.uk/cookies/"
            : "http://cookiepedia.co.uk/host/",
          r = e.Name;
        return (
          o.AddLinksToCookiepedia &&
            (r =
              '<a href="' +
              n +
              e.Name +
              '" target="_blank"\n            style="text-decoration: underline;">' +
              e.Name +
              "</a>"),
          r
        );
      }),
      (Ie.prototype.writeHostCookieParam = function (e, t) {
        void 0 === t && (t = null),
          pe.writeCookieParam(
            e,
            "hosts",
            W.serialiseArrayToString(
              t || pe.BannerVariables.oneTrustHostConsent
            )
          );
      }),
      (Ie.prototype.updateGroupsInCookie = function (e, t) {
        void 0 === t && (t = null),
          pe.writeCookieParam(
            e,
            "groups",
            W.serialiseArrayToString(
              t || pe.BannerVariables.optanonHtmlGroupData
            )
          );
      }),
      (Ie.prototype.writeCookieGroupsParam = function (e, t) {
        void 0 === t && (t = null),
          this.updateGroupsInCookie(e, t),
          pe.BannerVariables.domainData.IsIabEnabled &&
            pe.isAlertBoxClosedAndValid() &&
            this.insertOrUpdateIabCookies();
      }),
      (Ie.prototype.insertOrUpdateIabCookies = function () {
        var e = pe.BannerVariables,
          t = e.oneTrustIABConsent;
        if (t.purpose && t.vendors) {
          t.IABCookieValue = Ce.getIABConsentData();
          var o = e.domainData.ReconsentFrequencyDays;
          pe.isIABCrossConsentEnabled()
            ? pe.setIAB3rdPartyCookie(
                e.oneTrustIAB3rdPartyCookieName,
                t.IABCookieValue,
                o,
                !1
              )
            : (pe.setCookie(e.oneTrustIABCookieName, t.IABCookieValue, o),
              e.domainData.UseGoogleVendors &&
                ((pe.isAddtlConsent = !0),
                pe.setCookie(
                  e.oneTrustAddtlConsentCookie,
                  "" +
                    pe.addtlConsentVersion +
                    e.addtlVendors.vendorConsent.join("."),
                  o
                )));
        }
      }),
      Ie);
  function Ie() {}
  var Be,
    Se =
      ((xe.prototype.checkIsActiveByDefault = function (e) {
        if (this.safeGroupDefaultStatus(e)) {
          var t = this.safeGroupDefaultStatus(e).toLowerCase(),
            o = pe.BannerVariables.constant;
          return (
            e.Parent &&
              t !== o.GROUPSTATUS.ALWAYSACTIVE &&
              (t = this.safeGroupDefaultStatus(
                this.getParentGroup(e.Parent)
              ).toLowerCase()),
            t === o.GROUPSTATUS.ALWAYSACTIVE ||
              t === o.GROUPSTATUS.INACTIVELANDINGPAGE ||
              t === o.GROUPSTATUS.ACTIVE ||
              (t === pe.BannerVariables.doNotTrackText &&
                !pe.BannerVariables.optanonDoNotTrackEnabled)
          );
        }
        return !0;
      }),
      (xe.prototype.safeGroupDefaultStatus = function (e) {
        return e && e.Status
          ? pe.BannerVariables.optanonDoNotTrackEnabled && e.IsDntEnabled
            ? pe.BannerVariables.doNotTrackText
            : e.Status
          : "";
      }),
      (xe.prototype.getParentGroup = function (t) {
        if (t) {
          var e = pe.BannerVariables.domainData.Groups.filter(function (e) {
            return e.OptanonGroupId === t;
          });
          return 0 < e.length ? e[0] : null;
        }
        return null;
      }),
      (xe.prototype.synchroniseCookieGroupData = function (e) {
        var o = this,
          n = pe.BannerVariables,
          t = pe.readCookieParam(n.optanonCookieName, "groups"),
          r = W.deserialiseStringToArray(t),
          s = W.deserialiseStringToArray(t.replace(/:0|:1/g, "")),
          i = n.domainData,
          a = !1,
          l = !1;
        e.forEach(function (e) {
          var t = e.CustomGroupId;
          ((e.Type === C || e.Type === w) && n.domainData.IsIabEnabled) ||
            -1 !== W.indexOf(s, t) ||
            (e.Type === C
              ? O.isBundleOrStackActive(pe.BannerVariables, e, r)
              : ((a = !0), o.checkIsActiveByDefault(e)),
            (l = !0),
            r.push(t + (o.checkIsActiveByDefault(e) ? ":1" : ":0")));
        });
        for (
          var c = r.length,
            d = function () {
              var t = r[c].replace(/:0|:1/g, "");
              i.Groups.some(function (e) {
                return (
                  (!pe.needReconsent() || e.Type !== w) &&
                  (e.CustomGroupId === t ||
                    e.SubGroups.some(function (e) {
                      return e.CustomGroupId === t;
                    }))
                );
              }) || ((l = !0), r.splice(c, 1));
            };
          c--;

        )
          d();
        l &&
          (Ae.updateGroupsInCookie(n.optanonCookieName, r),
          pe.syncRequired && a && pe.removeAlertBoxCookie());
      }),
      (xe.prototype.groupHasConsent = function (o) {
        var e = pe.BannerVariables,
          t = W.deserialiseStringToArray(
            pe.readCookieParam(e.optanonCookieName, "groups")
          ),
          n = !1;
        return (
          t.some(function (e) {
            var t = e.split(":");
            if (t[0] === o.CustomGroupId) return "1" === t[1] && (n = !0), !0;
          }),
          n
        );
      }),
      (xe.prototype.synchroniseCookieHostData = function () {
        var n = this,
          e = pe.readCookieParam(pe.BannerVariables.optanonCookieName, "hosts"),
          r = W.deserialiseStringToArray(e),
          s = W.deserialiseStringToArray(e.replace(/:0|:1/g, "")),
          o = pe.BannerVariables.domainData,
          i = !1;
        o.Groups.forEach(function (e) {
          h(e.SubGroups, [e]).forEach(function (o) {
            o.Hosts.length &&
              o.Hosts.forEach(function (e) {
                if (-1 === W.indexOf(s, e.HostId)) {
                  i = !0;
                  var t = pe.syncRequired
                    ? n.groupHasConsent(o)
                    : n.checkIsActiveByDefault(o);
                  r.push(e.HostId + (t ? ":1" : ":0"));
                }
              });
          });
        });
        for (
          var a = r.length,
            t = function () {
              var t = r[a].replace(/:0|:1/g, "");
              o.Groups.some(function (e) {
                return h(e.SubGroups, [e]).some(function (e) {
                  return e.Hosts.some(function (e) {
                    return e.HostId === t;
                  });
                });
              }) || ((i = !0), r.splice(a, 1));
            };
          a--;

        )
          t();
        i && Ae.writeHostCookieParam(pe.BannerVariables.optanonCookieName, r);
      }),
      (xe.prototype.getGroupById = function (t) {
        var o;
        return (
          pe.BannerVariables.domainData.Groups.some(function (e) {
            return h(e.SubGroups, [e]).some(function (e) {
              if (O.getGroupIdForCookie(e) === t) return (o = e), !0;
            });
          }),
          o
        );
      }),
      (xe.prototype.getGroupByPurposeId = function (t) {
        var o;
        return (
          pe.BannerVariables.domainData.Groups.some(function (e) {
            return h(e.SubGroups, [e]).some(function (e) {
              if (e.PurposeId === t) return (o = e), !0;
            });
          }),
          o
        );
      }),
      (xe.prototype.toggleGroupHosts = function (e, t) {
        var o = this;
        e.Hosts.forEach(function (e) {
          o.updateHostStatus(e, t);
        });
      }),
      (xe.prototype.updateHostStatus = function (n, r) {
        var s = this;
        pe.BannerVariables.oneTrustHostConsent.some(function (e, t) {
          if (!n.isActive && n.HostId === e.replace(/:0|:1/g, "")) {
            var o = r || s.isHostPartOfAlwaysActiveGroup(n.HostId);
            return (
              (pe.BannerVariables.oneTrustHostConsent[t] =
                n.HostId + ":" + (o ? "1" : "0")),
              !0
            );
          }
        });
      }),
      (xe.prototype.isHostPartOfAlwaysActiveGroup = function (e) {
        return pe.BannerVariables.oneTrustAlwaysActiveHosts.includes(e);
      }),
      xe);
  function xe() {}
  var Le,
    we =
      ((_e.prototype.ensureConsentId = function (e, t) {
        var o,
          n = !1,
          r = pe.BannerVariables,
          s = pe.readCookieParam(
            r.optanonCookieName,
            r.consentIntegrationParam
          );
        if (s) {
          var i = parseInt(
            pe.readCookieParam(r.optanonCookieName, r.bannerInteractionParam),
            10
          );
          (o = isNaN(i) ? (!e && t ? ((n = !0), 1) : 0) : t ? ++i : i),
            pe.writeCookieParam(
              r.optanonCookieName,
              r.bannerInteractionParam,
              o
            );
        } else
          (o = !e && t ? ((n = !0), 1) : 0),
            (s = W.generateUUID()),
            pe.writeCookieParam(
              r.optanonCookieName,
              r.consentIntegrationParam,
              s
            ),
            pe.writeCookieParam(
              r.optanonCookieName,
              r.bannerInteractionParam,
              o
            );
        return {
          dataSubjectIdentifier: s,
          bannerInteractionCount: o,
          addDefaultInteraction: n,
        };
      }),
      (_e.prototype.isAnonymousConsent = function () {
        var e = !0;
        return (
          pe.dsParams &&
            pe.dsParams.hasOwnProperty("isAnonymous") &&
            (e = pe.dsParams.isAnonymous),
          e
        );
      }),
      (_e.prototype.checkIsAuthenticatedUser = function (e) {
        var t = pe.BannerVariables;
        pe.consentPreferences
          ? pe.writeCookieParam(t.optanonCookieName, "iType", "")
          : pe.writeCookieParam(t.optanonCookieName, "iType", "" + ae[e]);
      }),
      (_e.prototype.createConsentTransaction = function (e, t, o, n) {
        void 0 === t && (t = ""),
          void 0 === o && (o = !1),
          void 0 === n && (n = !0);
        var r = pe.BannerVariables,
          s = this.ensureConsentId(e, n),
          i = r.consentData;
        if (this.canCreateTransaction(i, s)) {
          (i.consentPayload.identifier = s.dataSubjectIdentifier),
            (i.consentPayload.customPayload = {
              Interaction: s.bannerInteractionCount,
              AddDefaultInteraction: s.addDefaultInteraction,
            }),
            K.fp.CookieV2ConsentIsAnonymous &&
              (i.consentPayload.isAnonymous = this.isAnonymousConsent()),
            pe.isV2Stub &&
              "IAB2" === pe.iabType &&
              !pe.isIABCrossConsentEnabled() &&
              (i.consentPayload.tcStringV2 = pe.getCookie(
                r.oneTrustIABCookieName
              )),
            pe.isV2Stub && (i.consentPayload.syncGroup = pe.syncGrpId),
            (i.consentPayload.purposes = this.getConsetPurposes(e)),
            (i.consentPayload.dsDataElements = {}),
            (i.consentPayload.test =
              K.moduleInitializer.ScriptType === r.constant.TESTSCRIPT);
          var a = Be.getGroupById(r.domainData.AdvancedAnalyticsCategory);
          if (
            (a &&
              this.canSendAdvancedAnalytics(i.consentPayload.purposes, a) &&
              ((i.consentPayload.dsDataElements.InteractionType = t),
              (i.consentPayload.dsDataElements.Country =
                pe.userLocation.country),
              (i.consentPayload.dsDataElements.UserAgent =
                window.navigator.userAgent)),
            !K.moduleInitializer.MobileSDK &&
              n &&
              i.consentPayload.purposes.length)
          ) {
            var l = JSON.stringify(i.consentPayload);
            e && navigator.sendBeacon
              ? navigator.sendBeacon(i.consentApi, l)
              : (!o && pe.consentInteractionType === t) ||
                (pe.isV2Stub && t && this.checkIsAuthenticatedUser(t),
                he.ajax({
                  url: i.consentApi,
                  type: "post",
                  dataType: "json",
                  contentType: "application/json",
                  data: JSON.stringify(i.consentPayload),
                  sync: e,
                  success: function () {},
                  error: function () {},
                }));
          }
          pe.setConsentIntegrationDataInPublicDomainData(i);
        }
        pe.consentInteractionType = t;
      }),
      (_e.prototype.getGroupDetails = function (e, s) {
        var i = [];
        return (
          e.forEach(function (e) {
            var t = e.split(":"),
              o = t[0],
              n = "true" === t[1] ? "1" : "0",
              r = pe.getOptanonIdForIabGroup(o, s);
            i.push(r + ":" + n);
          }),
          i
        );
      }),
      (_e.prototype.getConsetPurposes = function (r) {
        var e,
          t,
          s = this,
          i = [],
          o = [],
          a = pe.BannerVariables,
          n = a.oneTrustIABConsent;
        return (
          (e = this.getGroupDetails(
            pe.BannerVariables.oneTrustIABConsent.purpose,
            N.Purpose
          )),
          (t = this.getGroupDetails(
            pe.BannerVariables.oneTrustIABConsent.specialFeatures,
            N.SpecialFeature
          )),
          (o = h(n.specialPurposes, n.features)),
          h(a.optanonHtmlGroupData, e, t).forEach(function (e) {
            var t = e.split(":"),
              o = Be.getGroupById(t[0]);
            if (o && o.PurposeId) {
              var n = {};
              (n.Id = o.PurposeId),
                o.Status === a.constant.GROUPSTATUS.ALWAYSACTIVE
                  ? (n.TransactionType = a.constant.TRANSACTIONTYPE.NO_CHOICE)
                  : (a.bannerCloseSource === L.BannerCloseButton &&
                      o.Status === a.constant.GROUPSTATUS.INACTIVE) ||
                    r
                  ? (n.TransactionType = a.constant.TRANSACTIONTYPE.NOT_GIVEN)
                  : (n.TransactionType = s.getPurposeTransactionType(t[1])),
                i.push(n);
            }
          }),
          o.forEach(function (e) {
            if (e.purposeId) {
              var t = {};
              (t.Id = e.purposeId),
                (t.TransactionType = a.constant.TRANSACTIONTYPE.NO_CHOICE),
                i.push(t);
            }
          }),
          (pe.BannerVariables.bannerCloseSource = L.Unknown),
          i
        );
      }),
      (_e.prototype.getPurposeTransactionType = function (e) {
        return "0" === e
          ? pe.BannerVariables.constant.TRANSACTIONTYPE.OPT_OUT
          : pe.BannerVariables.constant.TRANSACTIONTYPE.CONFIRMED;
      }),
      (_e.prototype.canCreateTransaction = function (e, t) {
        return !!(
          e &&
          e.consentApi &&
          e.consentPayload &&
          e.consentPayload.requestInformation &&
          t.dataSubjectIdentifier
        );
      }),
      (_e.prototype.isPurposeConsentedTo = function (e, t) {
        var o = [
          pe.BannerVariables.constant.TRANSACTIONTYPE.CONFIRMED,
          pe.BannerVariables.constant.TRANSACTIONTYPE.NO_CHOICE,
        ];
        return e.some(function (e) {
          return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType);
        });
      }),
      (_e.prototype.canSendAdvancedAnalytics = function (t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type
          ? e.SubGroups.length &&
              e.SubGroups.every(function (e) {
                return o.isPurposeConsentedTo(t, e);
              })
          : this.isPurposeConsentedTo(t, e);
      }),
      _e);
  function _e() {}
  var Ve,
    Ee = function () {
      this.assets = function () {
        return {
          name: "otCookiePolicy",
          html: '<div className="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 className="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p className="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h6 className="cookies-used-header">Cookies Used</h6>\n        <ul className="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <thead>\n                <tr>\n                    <th className="table-header host">Host</th>\n                    <th className="table-header host-description">Host Description</th>\n                    <th className="table-header cookies">Cookies</th>\n                    <th className="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td className="host-td" data-label="Host"><span className="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td className="host-description-td" data-label="Host Description"><span\n                            className="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td className="cookies-td" data-label="Cookies">\n                        <span className="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td className="life-span-td" data-label="Life Span"><span className="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section className="subgroup">\n        <h4 className="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p className="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 className="cookies-used-header">Cookies Used</h6>\n        <ul className="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <thead>\n                <tr>\n                    <th className="table-header host">Host</th>\n                    <th className="table-header host-description">Host Description</th>\n                    <th className="table-header cookies">Cookies</th>\n                    <th className="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td className="host-td" data-label="Host"><span className="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td className="host-description-td" data-label="Host Description">\n                        <span className="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td className="cookies-td" data-label="Cookies">\n                        <span className="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td className="life-span-td" data-label="Life Span"><span className="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" className="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" className="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 className="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p className="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section className="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h4 className="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n                    <p className="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <thead>\n                <tr>\n                    <th className="ot-table-header ot-host">Host</th>\n                    <th className="ot-table-header ot-host-description">Host Description</th>\n                    <th className="ot-table-header ot-cookies">Cookies</th>\n                    <th className="ot-table-header ot-cookies-type">Type</th>\n                    <th className="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td className="ot-host-td" data-label="Host"><span className="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td className="ot-host-description-td" data-label="Host Description">\n                        <span className="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td className="ot-cookies-td" data-label="Cookies">\n                        <span className="ot-mobile-border"></span>\n                        <span className="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td className="ot-cookies-type" data-label="Type">\n                        <span className="ot-mobile-border"></span>\n                        <span className="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td className="ot-life-span-td" data-label="Life Span">\n                        <span className="ot-mobile-border"></span>\n                        <span className="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
          css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:16px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span{font-size:.9rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1rem;margin-bottom:.6rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1rem 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1rem 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
          cssRTL:
            ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:16px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span{font-size:.9rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1rem;margin-bottom:.6rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1rem 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1rem 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
        };
      };
    },
    De =
      ((Ge.prototype.isLandingPage = function () {
        var e = pe.readCookieParam(
          pe.BannerVariables.optanonCookieName,
          "landingPath"
        );
        return !e || e === location.href;
      }),
      (Ge.prototype.setLandingPathParam = function (e) {
        pe.writeCookieParam(
          pe.BannerVariables.optanonCookieName,
          "landingPath",
          e
        );
      }),
      Ge);
  function Ge() {}
  var He,
    Oe = "#onetrust-banner-sdk",
    Ne =
      ((Me.prototype.BannerPushDownHandler = function () {
        this.checkIsBrowserIE11OrBelow() ||
          (He.pushPageDown(Oe),
          ye(window).on("resize", function () {
            "none" !== ye(Oe).css("display") && He.pushPageDown(Oe);
          }));
      }),
      (Me.prototype.pushPageUp = function () {
        ye("body").css("top: 0;");
      }),
      (Me.prototype.checkIsBrowserIE11OrBelow = function () {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/");
      }),
      (Me.prototype.pushPageDown = function (e) {
        var t = ye(e).height() + "px";
        ye(e)
          .show()
          .css(" bottom: auto; position:absolute; top:-" + t),
          ye("body").css("position: relative; top:" + t);
      }),
      Me);
  function Me() {}
  var Fe,
    Re =
      ((qe.prototype.loadBanner = function () {
        pe.BannerVariables.domainData.IsIabEnabled &&
          "IAB" === pe.BannerVariables.domainData.IabType &&
          K.moduleInitializer.otIABModuleData.proccessQueue(),
          K.moduleInitializer.ScriptDynamicLoadEnabled
            ? "complete" === document.readyState
              ? ye(window).trigger("otloadbanner")
              : window.addEventListener("load", function (e) {
                  ye(window).trigger("otloadbanner");
                })
            : "loading" !== document.readyState
            ? ye(window).trigger("otloadbanner")
            : window.addEventListener("DOMContentLoaded", function (e) {
                ye(window).trigger("otloadbanner");
              }),
          (pe.BannerVariables.publicDomainData.IsBannerLoaded = !0);
      }),
      (qe.prototype.OnConsentChanged = function (e) {
        var t = e.toString();
        Fe.consentChangedEventMap[t] ||
          ((Fe.consentChangedEventMap[t] = !0),
          window.addEventListener("consent.onetrust", e));
      }),
      (qe.prototype.triggerGoogleAnalyticsEvent = function (e, t, o, n) {
        pe.BannerVariables.ignoreGoogleAnlyticsCall ||
          (void 0 !== window._gaq &&
            window._gaq.push(["_trackEvent", e, t, o, n]),
          void 0 !== window.ga && window.ga("send", "event", e, t, o, n)),
          void 0 !== window.dataLayer &&
            window.dataLayer.constructor === Array &&
            window.dataLayer.push({
              event: "trackOptanonEvent",
              optanonCategory: e,
              optanonAction: t,
              optanonLabel: o,
              optanonValue: n,
            });
      }),
      (qe.prototype.setAlertBoxClosed = function (e) {
        var t = new Date().toISOString();
        e
          ? pe.setCookie(
              pe.BannerVariables.optanonAlertBoxClosedCookieName,
              t,
              pe.BannerVariables.domainData.ReconsentFrequencyDays
            )
          : pe.setCookie(
              pe.BannerVariables.optanonAlertBoxClosedCookieName,
              t,
              0
            ),
          pe.BannerVariables.pagePushedDown &&
            !He.checkIsBrowserIE11OrBelow() &&
            He.pushPageUp();
        var o = ye(".onetrust-pc-dark-filter").el[0];
        o &&
          "none" !== getComputedStyle(o).getPropertyValue("display") &&
          ye(".onetrust-pc-dark-filter").fadeOut(400);
      }),
      (qe.prototype.updateConsentFromCookie = function (t) {
        return l(this, void 0, void 0, function () {
          return k(this, function (e) {
            return (
              t
                ? (Ce.isInitIABCookieData(t) || Ce.updateFromGlobalConsent(t),
                  "init" === t &&
                    ("IAB2" === pe.iabType &&
                      (pe.removeIab1Cookie(),
                      pe.isAlertBoxClosedAndValid() && pe.resetTCModel()),
                    pe.removeAlertBoxCookie()))
                : ("IAB2" === pe.iabType && pe.resetTCModel(),
                  pe.updateCrossConsentCookie(!1),
                  pe.setIABCookieData()),
              Fe.assetPromise.then(function () {
                Fe.loadBanner();
              }),
              [2]
            );
          });
        });
      }),
      qe);
  function qe() {
    var t = this;
    (this.consentChangedEventMap = {}),
      (this.assetResolve = null),
      (this.assetPromise = new Promise(function (e) {
        t.assetResolve = e;
      }));
  }
  var je,
    ze = "opt-out",
    Ue = "OneTrust Cookie Consent",
    Ke = new Ee().assets(),
    We =
      ((Ye.prototype.initializeFeaturesAndSpecialPurposes = function () {
        (pe.BannerVariables.oneTrustIABConsent.features = []),
          (pe.BannerVariables.oneTrustIABConsent.specialPurposes = []),
          pe.BannerVariables.domainData.Groups.forEach(function (e) {
            if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
              var t = {};
              (t.groupId = e.OptanonGroupId),
                (t.purposeId = e.PurposeId),
                (t.value = !0),
                "IAB2_FEATURE" === e.Type
                  ? pe.BannerVariables.oneTrustIABConsent.features.push(t)
                  : pe.BannerVariables.oneTrustIABConsent.specialPurposes.push(
                      t
                    );
            }
          });
      }),
      (Ye.prototype.ensureHtmlGroupDataInitialised = function () {
        var t = pe.BannerVariables,
          e = t.domainData,
          o = [];
        if (
          ((t.oneTrustIABConsent.defaultPurpose = []),
          (pe.legIntPurposesCount = 0),
          e.Groups.forEach(function (e) {
            h(e.SubGroups, [e]).forEach(function (e) {
              -1 === E.indexOf(e.Type)
                ? (e.Type === V &&
                    e.HasLegIntOptOut &&
                    pe.legIntPurposesCount++,
                  t.oneTrustIABConsent.defaultPurpose.push(e))
                : o.push(e);
            });
          }),
          this.initializeGroupData(o),
          e.IsIabEnabled &&
            (this.initializeIABData(),
            this.initializeFeaturesAndSpecialPurposes()),
          (t.oneTrustCategories = o),
          t.commonData.showCookieList && t.commonData.allowHostOptOut
            ? this.initializeHostData(o)
            : ((t.oneTrustHostConsent = []),
              Ae.writeHostCookieParam(pe.BannerVariables.optanonCookieName)),
          pe.setOrUpdate3rdPartyIABConsentFlag(),
          pe.setGeolocationInCookies(),
          e.IsConsentLoggingEnabled)
        ) {
          var n = window.OneTrust.dataSubjectParams || {},
            r = pe.readCookieParam(t.optanonCookieName, "iType"),
            s = "",
            i = !1;
          r && pe.isV2Stub && n.id && n.token && ((i = !0), (s = ae[r])),
            Le.createConsentTransaction(!1, s, !1, i);
        }
      }),
      (Ye.prototype.initializeGroupData = function (e) {
        var t = pe.BannerVariables,
          o = pe.readCookieParam(t.optanonCookieName, "groups");
        o
          ? (Be.synchroniseCookieGroupData(e),
            (o = pe.readCookieParam(t.optanonCookieName, "groups")),
            (t.optanonHtmlGroupData = W.deserialiseStringToArray(o)))
          : ((t.optanonHtmlGroupData = []),
            e.forEach(function (e) {
              t.optanonHtmlGroupData.push(
                O.getGroupIdForCookie(e) +
                  (Be.checkIsActiveByDefault(e) && e.HasConsentOptOut
                    ? ":1"
                    : ":0")
              );
            }),
            t.domainData.IsConsentLoggingEnabled &&
              window.addEventListener("beforeunload", this.consentDefaulCall));
      }),
      (Ye.prototype.initializeHostData = function (e) {
        var r = pe.BannerVariables,
          t = pe.readCookieParam(r.optanonCookieName, "hosts");
        if (t)
          Be.synchroniseCookieHostData(),
            (t = pe.readCookieParam(r.optanonCookieName, "hosts")),
            (r.oneTrustHostConsent = W.deserialiseStringToArray(t)),
            e.forEach(function (e) {
              je.isAlwaysActiveGroup(e) &&
                e.Hosts.length &&
                e.Hosts.forEach(function (e) {
                  r.oneTrustAlwaysActiveHosts.push(e.HostId);
                });
            });
        else {
          r.oneTrustHostConsent = [];
          var s = {};
          e.forEach(function (e) {
            var o = je.isAlwaysActiveGroup(e),
              n = pe.syncRequired
                ? Be.groupHasConsent(e)
                : Be.checkIsActiveByDefault(e);
            e.Hosts.length &&
              e.Hosts.forEach(function (e) {
                if (s[e.HostId]) Be.updateHostStatus(e, n);
                else {
                  (s[e.HostId] = !0),
                    o && r.oneTrustAlwaysActiveHosts.push(e.HostId);
                  var t = Be.isHostPartOfAlwaysActiveGroup(e.HostId);
                  r.oneTrustHostConsent.push(e.HostId + (t || n ? ":1" : ":0"));
                }
              });
          });
        }
      }),
      (Ye.prototype.consentDefaulCall = function () {
        var e = parseInt(
          pe.readCookieParam(
            pe.BannerVariables.optanonCookieName,
            pe.BannerVariables.bannerInteractionParam
          ),
          10
        );
        (!isNaN(e) && 0 !== e) ||
          (Fe.triggerGoogleAnalyticsEvent(
            Ue,
            "Click",
            "No interaction",
            void 0
          ),
          pe.BannerVariables.domainData.IsConsentLoggingEnabled &&
            Le.createConsentTransaction(!0),
          window.removeEventListener("beforeunload", this.consentDefaulCall));
      }),
      (Ye.prototype.consentNoticeInit = function () {
        return l(this, void 0, void 0, function () {
          var t, o, n, r, s, i, a, l, c, d, u, p;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (r = K.moduleInitializer),
                  (s = pe.BannerVariables.domainData),
                  (i = pe.BannerVariables.commonData),
                  (a = r.IsSuppressPC),
                  (l = r.IsSuppressBanner),
                  (c =
                    ye("#ot-sdk-btn").length ||
                    ye(".ot-sdk-show-settings").length ||
                    ye(".optanon-show-settings").length),
                  (d =
                    !r.TenantFeatures.CookieV2RemoveSettingsIcon &&
                    s.IsIabEnabled &&
                    "IAB2" === s.IabType &&
                    !c),
                  l || a
                    ? [3, 5]
                    : d
                    ? [3, 2]
                    : [
                        4,
                        Promise.all([pe.getBannerContent(), pe.getPcContent()]),
                      ]
                );
              case 1:
                return (u = e.sent()), (t = u[0]), (o = u[1]), [3, 4];
              case 2:
                return [
                  4,
                  Promise.all([
                    pe.getBannerContent(),
                    pe.getPcContent(),
                    pe.getCookieSettingsButtonContent(),
                  ]),
                ];
              case 3:
                (p = e.sent()),
                  (t = p[0]),
                  (o = p[1]),
                  (n = p[2]),
                  (e.label = 4);
              case 4:
                return [3, 9];
              case 5:
                return l ? [3, 7] : [4, pe.getBannerContent()];
              case 6:
                return (t = e.sent()), [3, 9];
              case 7:
                return a ? [3, 9] : [4, pe.getPcContent()];
              case 8:
                (o = e.sent()), (e.label = 9);
              case 9:
                return (!d && !s.PCShowPersistentCookiesHoverButton) || n
                  ? [3, 11]
                  : [4, pe.getCookieSettingsButtonContent()];
              case 10:
                (n = e.sent()), (e.label = 11);
              case 11:
                return (
                  t &&
                    (this.bannerGroup = {
                      name: t.name,
                      html: atob(t.html),
                      css: t.css,
                    }),
                  o &&
                    ((this.preferenceCenterGroup = {
                      name: o.name,
                      html: atob(o.html),
                      css: o.css,
                    }),
                    (K.isV2Template =
                      s.PCTemplateUpgrade &&
                      /otPcPanel|otPcCenter|otPcTab/.test(o.name))),
                  (this.cookieListGroup = {
                    name: Ke.name,
                    html: Ke.html,
                    css: i.useRTL ? Ke.cssRTL : Ke.css,
                  }),
                  n &&
                    (this.cookieSettingsButtonGroup = {
                      name: "CookieSettingsButton",
                      html: atob(n.html),
                      css: n.css,
                    }),
                  (this.mobileSDKEnabled = r.MobileSDK),
                  [2]
                );
            }
          });
        });
      }),
      (Ye.prototype.initializeIabPurposeConsentOnReload = function () {
        var t = this;
        pe.BannerVariables.oneTrustIABConsent.defaultPurpose.forEach(function (
          e
        ) {
          -1 < D.indexOf(e.Type) &&
            (t.setIABConsent(e, !1),
            (e.IsLegIntToggle = !0),
            t.setIABConsent(e, !1));
        });
      }),
      (Ye.prototype.initializeIABData = function (o, n) {
        var r = this;
        void 0 === o && (o = !1), void 0 === n && (n = !1);
        var e = pe.BannerVariables.oneTrustIABConsent;
        if (
          ((e.purpose = []),
          (e.vendors = []),
          (e.legIntVendors = []),
          (e.specialFeatures = []),
          (e.legimateInterest = []),
          (pe.BannerVariables.addtlVendors.vendorConsent = []),
          !e.IABCookieValue || o || n || pe.reconsentRequired())
        ) {
          e.defaultPurpose.forEach(function (e) {
            if (-1 < D.indexOf(e.Type))
              if (n) r.setIABConsent(e, r.isAlwaysActiveGroup(e));
              else {
                var t =
                  ("IAB" === pe.iabType &&
                    Be.checkIsActiveByDefault(e) &&
                    r.canSoftOptInInsertForGroup(O.getGroupIdForCookie(e))) ||
                  (o && e.HasConsentOptOut);
                r.setIABConsent(e, t),
                  "IAB2_PURPOSE" === e.Type &&
                    ((e.IsLegIntToggle = !0),
                    r.setIABConsent(e, e.HasLegIntOptOut));
              }
          });
          var t =
            o ||
            (!n && pe.BannerVariables.domainData.VendorConsentModel === ze);
          pe.setIABVendor(t),
            "IAB2" !== pe.iabType ||
              !pe.reconsentRequired() ||
              o ||
              n ||
              pe.resetTCModel();
        } else
          this.initializeIabPurposeConsentOnReload(),
            Ce.populateVendorAndPurposeFromCookieData(),
            Ce.populateGoogleConsent();
      }),
      (Ye.prototype.canSoftOptInInsertForGroup = function (e) {
        var t = Be.getGroupById(e);
        if (t) {
          var o = O.isTopLevelGroup(t) ? t : Be.getParentGroup(t.Parent);
          return (
            "inactive landingpage" !==
              Be.safeGroupDefaultStatus(o).toLowerCase() || !Ve.isLandingPage()
          );
        }
      }),
      (Ye.prototype.isAlwaysActiveGroup = function (e) {
        if (Be.safeGroupDefaultStatus(e)) {
          var t = Be.safeGroupDefaultStatus(e).toLowerCase();
          return (
            e.Parent &&
              t !== pe.BannerVariables.constant.GROUPSTATUS.ALWAYSACTIVE &&
              (t = Be.safeGroupDefaultStatus(
                Be.getParentGroup(e.Parent)
              ).toLowerCase()),
            t === pe.BannerVariables.constant.GROUPSTATUS.ALWAYSACTIVE
          );
        }
        return !0;
      }),
      (Ye.prototype.setIABConsent = function (e, t) {
        e.Type === T
          ? this.setIabSpeciFeatureConsent(e, t)
          : e.IsLegIntToggle
          ? (this.setIabLegIntConsent(e, t), (e.IsLegIntToggle = !1))
          : this.setIabPurposeConsent(e, t);
      }),
      (Ye.prototype.setIabPurposeConsent = function (o, n) {
        var r = !1;
        if (
          ((pe.BannerVariables.oneTrustIABConsent.purpose =
            pe.BannerVariables.oneTrustIABConsent.purpose.map(function (e) {
              var t = e.split(":")[0];
              return (
                t ===
                  O.extractGroupIdForIabGroup(
                    O.getGroupIdForCookie(o).toString()
                  ) && ((e = t + ":" + n), (r = !0)),
                e
              );
            })),
          !r)
        ) {
          var e = O.extractGroupIdForIabGroup(
            O.getGroupIdForCookie(o).toString()
          );
          pe.BannerVariables.oneTrustIABConsent.purpose.push(e + ":" + n);
        }
      }),
      (Ye.prototype.setIabLegIntConsent = function (e, o) {
        var n = !1,
          r = O.extractGroupIdForIabGroup(O.getGroupIdForCookie(e).toString());
        (pe.BannerVariables.oneTrustIABConsent.legimateInterest =
          pe.BannerVariables.oneTrustIABConsent.legimateInterest.map(function (
            e
          ) {
            var t = e.split(":")[0];
            return t === r && ((e = t + ":" + o), (n = !0)), e;
          })),
          n ||
            pe.BannerVariables.oneTrustIABConsent.legimateInterest.push(
              r + ":" + o
            );
      }),
      (Ye.prototype.setIabSpeciFeatureConsent = function (o, n) {
        var r = !1;
        if (
          ((pe.BannerVariables.oneTrustIABConsent.specialFeatures =
            pe.BannerVariables.oneTrustIABConsent.specialFeatures.map(function (
              e
            ) {
              var t = e.split(":")[0];
              return (
                t ===
                  O.extractGroupIdForIabGroup(
                    O.getGroupIdForCookie(o).toString()
                  ) && ((e = t + ":" + n), (r = !0)),
                e
              );
            })),
          !r)
        ) {
          var e = O.extractGroupIdForIabGroup(
            O.getGroupIdForCookie(o).toString()
          );
          pe.BannerVariables.oneTrustIABConsent.specialFeatures.push(
            e + ":" + n
          );
        }
      }),
      (Ye.prototype.insertCookieSettingText = function () {
        for (
          var e = pe.BannerVariables.domainData.CookieSettingButtonText,
            t = ye(".ot-sdk-show-settings").el,
            o = 0;
          o < t.length;
          o++
        )
          ye(t[o]).text(e);
        var n = ye(".optanon-toggle-display").el;
        for (o = 0; o < n.length; o++) ye(n[o]).text(e);
      }),
      Ye);
  function Ye() {}
  var Je,
    Qe =
      ((Ze.prototype.getAllowAllButton = function () {
        return ye("#onetrust-pc-sdk #accept-recommended-btn-handler");
      }),
      (Ze.prototype.getSelectedVendors = function () {
        return ye(
          "#onetrust-pc-sdk " + U.P_Tgl_Cntr + " .ot-checkbox input:checked"
        );
      }),
      Ze);
  function Ze() {}
  var Xe,
    $e =
      ((et.prototype.getAllGroupElements = function () {
        return document.querySelectorAll(
          "div#onetrust-pc-sdk " + U.P_Category_Grp + " " + U.P_Category_Item
        );
      }),
      (et.prototype.toggleGrpElements = function (e, t, o) {
        var n = pe.BannerVariables.domainData;
        "otPcTab" === je.preferenceCenterGroup.name &&
          n.PCTemplateUpgrade &&
          (e = document.querySelector(
            "#ot-desc-id-" + e.getAttribute("data-optanongroupid")
          ));
        for (
          var r = e.querySelectorAll('input[class*="category-switch-handler"]'),
            s = 0;
          s < r.length;
          s++
        )
          W.setCheckedAttribute(null, r[s], o),
            r[s] &&
              n.PCShowConsentLabels &&
              (r[s].parentElement.parentElement.querySelector(
                ".ot-label-status"
              ).innerHTML = o ? n.PCActiveText : n.PCInactiveText);
        pe.legIntSettings.PAllowLI &&
          pe.legIntSettings.PShowLegIntBtn &&
          t.Type === V &&
          t.HasLegIntOptOut &&
          Xe.updateLegIntBtnElement(
            e.querySelector(".ot-leg-btn-container"),
            o
          );
      }),
      (et.prototype.toogleAllSubGrpElements = function (e, t) {
        if (e.ShowSubgroup) {
          var o = O.getGroupIdForCookie(e),
            n = this.getGroupElementByOptanonGroupId(o.toString());
          Xe.toogleSubGroupElement(n, t, e.IsLegIntToggle);
        } else this.updateHiddenSubGroupData(e, t);
      }),
      (et.prototype.toogleSubGroupElement = function (e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1);
        var r = pe.BannerVariables.domainData;
        "otPcTab" === je.preferenceCenterGroup.name &&
          r.PCTemplateUpgrade &&
          (e = document.querySelector(
            "#ot-desc-id-" + e.getAttribute("data-optanongroupid")
          ));
        for (
          var s = e.querySelectorAll("li" + U.P_Subgrp_li), i = 0;
          i < s.length;
          i++
        ) {
          var a = Be.getGroupById(s[i].getAttribute("data-optanongroupid")),
            l = a.OptanonGroupId,
            c = Be.getParentGroup(a.Parent);
          pe.legIntSettings.PAllowLI &&
            pe.legIntSettings.PShowLegIntBtn &&
            o &&
            a.Type === V &&
            a.HasLegIntOptOut &&
            c.ShowSubgroupToggle &&
            Xe.updateLegIntBtnElement(s[i], t);
          var d = o
              ? "[id='ot-sub-group-id-" + l + "-leg-out']"
              : "[id='ot-sub-group-id-" + l + "']",
            u = s[i].querySelector(
              'input[class*="cookie-subgroup-handler"]' + d
            );
          W.setCheckedAttribute(null, u, t),
            u &&
              r.PCShowConsentLabels &&
              (u.parentElement.parentElement.querySelector(
                ".ot-label-status"
              ).innerHTML = t ? r.PCActiveText : r.PCInactiveText),
            n ||
              ((a.IsLegIntToggle = o),
              Xe.toggleGrpStatus(a, t),
              (a.IsLegIntToggle = !1),
              Be.toggleGroupHosts(a, t));
        }
      }),
      (et.prototype.toggleGrpStatus = function (e, t) {
        var o = O.safeGroupName(e);
        Fe.triggerGoogleAnalyticsEvent(
          Ue,
          "Preferences Toggle " + (t ? "On" : "Off"),
          o,
          void 0
        ),
          t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e);
      }),
      (et.prototype.updateEnabledGroupData = function (e) {
        if (-1 < D.indexOf(e.Type)) this.updateIabGroupData(e, !0);
        else {
          var t = Xe.getGroupVariable(),
            o = W.indexOf(t, O.getGroupIdForCookie(e) + ":0");
          -1 !== o && (t[o] = O.getGroupIdForCookie(e) + ":1");
        }
      }),
      (et.prototype.updateDisabledGroupData = function (e) {
        if (-1 < D.indexOf(e.Type)) this.updateIabGroupData(e, !1);
        else {
          var t = Xe.getGroupVariable(),
            o = W.indexOf(t, O.getGroupIdForCookie(e) + ":1");
          -1 !== o && (t[o] = O.getGroupIdForCookie(e) + ":0");
        }
      }),
      (et.prototype.updateIabGroupData = function (e, t) {
        var o = O.extractGroupIdForIabGroup(
          O.getGroupIdForCookie(e).toString()
        );
        if (e.Type === T) this.updateIabSpecialFeatureData(o, t);
        else {
          var n = e.IsLegIntToggle
            ? pe.BannerVariables.vendors.selectedLegInt
            : pe.BannerVariables.vendors.selectedPurpose;
          this.updateIabPurposeData(o, t, n);
        }
      }),
      (et.prototype.isAllSubgroupsDisabled = function (e) {
        var t = !0;
        return (
          e.SubGroups.some(function (e) {
            if (Xe.isGroupActive(e)) return !(t = !1);
          }),
          t
        );
      }),
      (et.prototype.isAllSubgroupsEnabled = function (e) {
        var t = !0;
        return (
          e.SubGroups.some(function (e) {
            if (Xe.IsGroupInActive(e)) return !(t = !1);
          }),
          t
        );
      }),
      (et.prototype.toggleGroupHtmlElement = function (e, t, o) {
        if (
          pe.legIntSettings.PAllowLI &&
          pe.legIntSettings.PShowLegIntBtn &&
          e.Type === V &&
          e.HasLegIntOptOut
        ) {
          var n = document.querySelector("[data-el-id=" + t + "]");
          n && this.updateLegIntBtnElement(n, o);
        }
        var r = ye("#ot-group-id-" + t).el[0];
        W.setCheckedAttribute(null, r, o),
          r &&
            pe.BannerVariables.domainData.PCShowConsentLabels &&
            (r.parentElement.querySelector(".ot-label-status").innerHTML = o
              ? pe.BannerVariables.domainData.PCActiveText
              : pe.BannerVariables.domainData.PCInactiveText);
      }),
      (et.prototype.updateLegIntBtnElement = function (e, t) {
        var o = pe.legIntSettings,
          n = e.querySelector(".ot-obj-leg-btn-handler"),
          r = e.querySelector(".ot-remove-objection-handler");
        t
          ? (n.classList.add("ot-inactive-leg-btn"),
            n.classList.add("ot-leg-int-enabled"),
            n.classList.remove("ot-active-leg-btn"))
          : (n.classList.add("ot-active-leg-btn"),
            n.classList.remove("ot-inactive-leg-btn"),
            n.classList.remove("ot-leg-int-enabled")),
          (n.querySelector("span").innerText = t
            ? o.PObjectLegIntText
            : o.PObjectionAppliedText),
          (r.style.display = t ? "none" : "inline-block");
      }),
      (et.prototype.isGroupActive = function (e) {
        return -1 < D.indexOf(e.Type)
          ? -1 !== this.isIabPurposeActive(e)
          : -1 !==
              he.inArray(
                O.getGroupIdForCookie(e) + ":1",
                Xe.getGroupVariable()
              );
      }),
      (et.prototype.safeFormattedGroupDescription = function (e) {
        return e && e.GroupDescription
          ? e.GroupDescription.replace(/\r\n/g, "<br>")
          : "";
      }),
      (et.prototype.canInsertForGroup = function (e, t) {
        void 0 === t && (t = !1);
        var o,
          n = null != e && void 0 !== e,
          r = pe.BannerVariables,
          s = pe.readCookieParam(r.optanonCookieName, "groups"),
          i = r.optanonHtmlGroupData.join(","),
          a = pe.readCookieParam(r.optanonCookieName, "hosts"),
          l = r.oneTrustHostConsent.join(",");
        if (t) return !0;
        (s === i && a === l) || je.ensureHtmlGroupDataInitialised(),
          (o = W.contains(
            r.optanonHtmlGroupData.concat(r.oneTrustHostConsent),
            e + ":1"
          ));
        var c = this.doesHostExist(e),
          d = this.doesGroupExist(e),
          u = !!c || (o && je.canSoftOptInInsertForGroup(e));
        return !(!n || !((o && u) || (!d && !c)));
      }),
      (et.prototype.setAllowAllButton = function () {
        var t = 0,
          e = pe.BannerVariables.domainData.Groups.some(function (e) {
            if (-1 === G.indexOf(e.Type))
              return (
                Xe.IsGroupInActive(e) && t++,
                e.SubGroups.some(function (e) {
                  if (Xe.IsGroupInActive(e)) return t++, !0;
                }),
                1 <= t
              );
          });
        return (
          e
            ? Je.getAllowAllButton().show("inline-block")
            : Je.getAllowAllButton().hide(),
          e
        );
      }),
      (et.prototype.getGroupVariable = function () {
        return pe.BannerVariables.optanonHtmlGroupData;
      }),
      (et.prototype.IsGroupInActive = function (e) {
        return -1 < D.indexOf(e.Type)
          ? -1 === this.isIabPurposeActive(e)
          : -1 ===
              he.inArray(
                O.getGroupIdForCookie(e) + ":1",
                Xe.getGroupVariable()
              );
      }),
      (et.prototype.updateIabPurposeData = function (o, e, t) {
        var n = Number(o);
        t.some(function (e, t) {
          if (e.split(":")[0] === o) return (n = t), !0;
        }),
          (t[n] = o + ":" + e);
      }),
      (et.prototype.updateIabSpecialFeatureData = function (o, e) {
        var n = Number(o);
        pe.BannerVariables.vendors.selectedSpecialFeatures.some(function (
          e,
          t
        ) {
          if (e.split(":")[0] === o) return (n = t), !0;
        }),
          (pe.BannerVariables.vendors.selectedSpecialFeatures[n] = o + ":" + e);
      }),
      (et.prototype.getGroupElementByOptanonGroupId = function (e) {
        return document.querySelector(
          "#onetrust-pc-sdk " +
            U.P_Category_Grp +
            " " +
            U.P_Category_Item +
            '[data-optanongroupid=\n            "' +
            e +
            '"]'
        );
      }),
      (et.prototype.updateHiddenSubGroupData = function (e, t) {
        e.SubGroups.forEach(function (e) {
          Xe.toggleGrpStatus(e, t), Be.toggleGroupHosts(e, t);
        });
      }),
      (et.prototype.isIabPurposeActive = function (e) {
        var t,
          o = O.extractGroupIdForIabGroup(O.getGroupIdForCookie(e).toString());
        return (
          (t =
            e.Type === T
              ? pe.BannerVariables.vendors.selectedSpecialFeatures
              : e.IsLegIntToggle
              ? pe.BannerVariables.vendors.selectedLegInt
              : pe.BannerVariables.vendors.selectedPurpose),
          he.inArray(o + ":true", t)
        );
      }),
      (et.prototype.doesGroupExist = function (e) {
        return !!Be.getGroupById(e);
      }),
      (et.prototype.doesHostExist = function (e) {
        var t = pe.BannerVariables.oneTrustHostConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1");
      }),
      et);
  function et() {}
  var tt,
    ot =
      ((nt.prototype.updateFilterSelection = function (e) {
        var t, o;
        void 0 === e && (e = !1),
          (o = e
            ? ((t = pe.BannerVariables.filterByCategories),
              "data-optanongroupid")
            : ((t = pe.BannerVariables.filterByIABCategories),
              "data-purposeid"));
        for (
          var n = ye("#onetrust-pc-sdk .category-filter-handler").el, r = 0;
          r < n.length;
          r++
        ) {
          var s = n[r].getAttribute(o);
          -1 < t.indexOf(s) ? (n[r].checked = !0) : (n[r].checked = !1);
        }
      }),
      (nt.prototype.cancelHostFilter = function () {
        for (
          var e = ye("#onetrust-pc-sdk .category-filter-handler").el, t = 0;
          t < e.length;
          t++
        ) {
          var o = e[t].getAttribute("data-optanongroupid");
          e[t].checked &&
            pe.BannerVariables.filterByCategories.indexOf(o) < 0 &&
            (e[t].checked = "");
        }
      }),
      (nt.prototype.updateHostFilterList = function () {
        for (
          var e = ye("#onetrust-pc-sdk .category-filter-handler").el, t = 0;
          t < e.length;
          t++
        ) {
          var o = e[t].getAttribute("data-optanongroupid");
          if (
            e[t].checked &&
            pe.BannerVariables.filterByCategories.indexOf(o) < 0
          )
            pe.BannerVariables.filterByCategories.push(o);
          else if (
            !e[t].checked &&
            -1 < pe.BannerVariables.filterByCategories.indexOf(o)
          ) {
            var n = pe.BannerVariables.filterByCategories;
            pe.BannerVariables.filterByCategories.splice(n.indexOf(o), 1);
          }
        }
        return pe.BannerVariables.filterByCategories;
      }),
      (nt.prototype.InitializeHostList = function () {
        (pe.BannerVariables.hosts.hostTemplate = ye(
          U.P_Vendor_List + " " + U.P_Host_Cntr + " li"
        ).el[0].cloneNode(!0)),
          (pe.BannerVariables.hosts.hostCookieTemplate = ye(
            U.P_Vendor_List + " " + U.P_Host_Cntr + " " + U.P_Host_Opt + " li"
          ).el[0].cloneNode(!0));
      }),
      (nt.prototype.getCookiesForGroup = function (t) {
        var o = [],
          n = [];
        return (
          t.FirstPartyCookies.length &&
            t.FirstPartyCookies.forEach(function (e) {
              n.push(r(r({}, e), { groupName: t.GroupName }));
            }),
          t.Hosts.length &&
            t.Hosts.forEach(function (e) {
              o.push(
                r(r({}, e), {
                  isActive:
                    "always active" ===
                    Be.safeGroupDefaultStatus(t).toLowerCase(),
                  groupName: t.GroupName,
                })
              );
            }),
          { firstPartyCookiesList: n, thirdPartyCookiesList: o }
        );
      }),
      (nt.prototype.getDuration = function (e) {
        if (!e || 0 === parseInt(e)) return "a few seconds";
        var t = parseInt(e);
        return (
          365 <= t
            ? ((t /= 365),
              (t =
                1 < (t = this.round_to_precision(t, 0.5))
                  ? t + " years"
                  : t + " year"))
            : (t += " days "),
          t
        );
      }),
      (nt.prototype.reactivateSrcTag = function (e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])),
          e.removeAttribute("data-src");
      }),
      (nt.prototype.reactivateScriptTag = function (e) {
        var t = e.parentNode,
          o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
          for (var r = 0; r < n.length; r++)
            "type" !== n[r].name
              ? o.setAttribute(n[r].name, n[r].value, !0)
              : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e);
      }),
      (nt.prototype.reactivateTag = function (e, t) {
        var o = e.className
            .match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/)[0]
            .split(/optanon-category-/i)[1]
            .split("-"),
          n = !0;
        if (o && 0 < o.length) {
          for (var r = 0; r < o.length; r++)
            if (!Xe.canInsertForGroup(o[r].trim())) {
              n = !1;
              break;
            }
          n && (t ? this.reactivateSrcTag(e) : this.reactivateScriptTag(e));
        }
      }),
      (nt.prototype.substitutePlainTextScriptTags = function () {
        var t = this,
          e = [].slice.call(
            document.querySelectorAll('script[class*="optanon-category"]')
          ),
          o = document.querySelectorAll('*[class*="optanon-category"]');
        Array.prototype.forEach.call(o, function (e) {
          "SCRIPT" !== e.tagName &&
            e.hasAttribute("data-src") &&
            t.reactivateTag(e, !0);
        }),
          Array.prototype.forEach.call(e, function (e) {
            e.hasAttribute("type") &&
              "text/plain" === e.getAttribute("type") &&
              t.reactivateTag(e, !1);
          });
      }),
      (nt.prototype.round_to_precision = function (e, t) {
        var o = +e + (void 0 === t ? 0.5 : t / 2);
        return o - (o % (void 0 === t ? 1 : +t));
      }),
      nt);
  function nt() {}
  var rt,
    st =
      ((it.prototype.getSearchQuery = function (e) {
        var t = this,
          o = e.trim().split(/\s+/g);
        return new RegExp(
          o
            .map(function (e) {
              return t.escapeRegExp(e);
            })
            .join("|") + "(.+)?",
          "gi"
        );
      }),
      (it.prototype.escapeRegExp = function (e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      }),
      (it.prototype.setGlobalFilteredList = function (e) {
        return (pe.BannerVariables.currentGlobalFilteredList = e);
      }),
      (it.prototype.filterList = function (t, e, n) {
        var o = n && n.length;
        if ("" === t && !o) return this.setGlobalFilteredList(e);
        if (o) {
          var r = ye("#onetrust-pc-sdk " + U.P_Fltr_Options + " input").el
              .length,
            s = [],
            i = !1;
          r !== n.length
            ? e.filter(function (o) {
                (i = !0),
                  o.vendorName &&
                    n.forEach(function (e) {
                      var t = parseInt(O.extractGroupIdForIabGroup(e));
                      -1 < e.indexOf("IFEV2_")
                        ? (o.features || []).forEach(function (e) {
                            e.featureId === t && s.push(o);
                          })
                        : -1 < e.indexOf("ISFV2_")
                        ? o.specialFeatures.forEach(function (e) {
                            e.featureId === t && s.push(o);
                          })
                        : -1 < e.indexOf("ISPV2_")
                        ? (o.specialPurposes || []).forEach(function (e) {
                            e.purposeId === t && s.push(o);
                          })
                        : (o.purposes.forEach(function (e) {
                            e.purposeId === t && s.push(o);
                          }),
                          o.legIntPurposes.forEach(function (e) {
                            e.purposeId === t && s.push(o);
                          }));
                    });
              })
            : (s = e),
            i &&
              (s = s.filter(function (e, t, o) {
                return o.indexOf(e) === t;
              })),
            this.setGlobalFilteredList(s);
        }
        return "" === t
          ? pe.BannerVariables.currentGlobalFilteredList
          : pe.BannerVariables.currentGlobalFilteredList.filter(function (e) {
              if (e.vendorName)
                return e.vendorName.toLowerCase().includes(t.toLowerCase());
            });
      }),
      (it.prototype.loadVendorList = function (e, t) {
        void 0 === e && (e = "");
        var o = pe.BannerVariables.vendors;
        (pe.BannerVariables.currentGlobalFilteredList = o.list),
          e
            ? ((o.searchParam = e),
              (pe.BannerVariables.filterByIABCategories = []),
              tt.updateFilterSelection(!1))
            : o.searchParam !== e
            ? (o.searchParam = "")
            : (t = pe.BannerVariables.filterByIABCategories);
        var n = this.filterList(o.searchParam, o.list, t);
        (o.currentPage = 1),
          (o.pageList = n),
          (ye("#onetrust-pc-sdk " + U.P_Vendor_Content).el[0].scrollTop = 0),
          this.initVendorsData(e, n);
      }),
      (it.prototype.searchGoogleVendors = function (e) {
        if (e) {
          var t = this.getSearchQuery(e),
            o = pe.addtlVendorsList,
            n = 0;
          for (var r in o)
            if (o[r]) {
              var s = ye("#ot-addtl-venlst #Adtl-IAB" + r).el[0].parentElement;
              t.test(o[r].name)
                ? ((s.style.display = ""), n++)
                : (s.style.display = "none");
            }
          0 === n
            ? (ye("#ot-lst-cnt .ot-acc-cntr + .ot-acc-cntr").hide(),
              (this.hasGoogleVendors = !1))
            : (ye("#ot-lst-cnt .ot-acc-cntr + .ot-acc-cntr").show(),
              (this.hasGoogleVendors = !0)),
            this.showEmptyResults(
              !this.hasGoogleVendors && !this.hasIabVendors,
              e,
              !1
            );
        } else
          for (
            var i = ye(' #ot-addtl-venlst li[style^="display"]').el, a = 0;
            a < i.length;
            a++
          )
            i[a].style.display = "";
      }),
      (it.prototype.initGoogleVendors = function () {
        this.populateAddtlVendors(pe.addtlVendorsList),
          this.venAdtlSelAllTglEvent();
      }),
      (it.prototype.resetAddtlVendors = function () {
        this.searchGoogleVendors(), this.showConsentHeader();
      }),
      (it.prototype.venAdtlSelAllTglEvent = function () {
        for (
          var e = ye(
              '#ot-addtl-venlst li:not([style^="display"]) .ot-ven-adtlctgl input'
            ).el,
            t = ye("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0],
            o = ye("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0],
            n = !0,
            r = 0;
          r < e.length;
          r++
        ) {
          if (!e[r].checked) {
            n = !1;
            break;
          }
          n = !0;
        }
        n
          ? t.classList.remove("line-through")
          : t.classList.add("line-through"),
          (o.checked = !0);
        for (var s = 0; s < e.length && !e[s].checked; s++)
          s !== e.length - 1 || e[s].checked || (o.checked = !1);
      }),
      (it.prototype.vendorLegIntToggleEvent = function () {
        for (
          var e = ye(
              U.P_Vendor_Container +
                ' li:not([style^="display"]) .' +
                U.P_Ven_Ltgl +
                " input"
            ).el,
            t = ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Leg_El).el[0],
            o = ye("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0],
            n = !0,
            r = 0;
          r < e.length;
          r++
        ) {
          if (!e[r].checked) {
            n = !1;
            break;
          }
          n = !0;
        }
        n
          ? t.classList.remove("line-through")
          : t.classList.add("line-through"),
          (o.checked = !0);
        for (var s = 0; s < e.length && !e[s].checked; s++)
          s !== e.length - 1 || e[s].checked || (o.checked = !1);
      }),
      (it.prototype.vendorsListEvent = function () {
        for (
          var e = ye(
              U.P_Vendor_Container +
                ' li:not([style^="display"]) .' +
                U.P_Ven_Ctgl +
                " input"
            ).el,
            t = ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Consent_El).el[0],
            o = ye("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0],
            n = !0,
            r = 0;
          r < e.length;
          r++
        ) {
          if (!e[r].checked) {
            n = !1;
            break;
          }
          n = !0;
        }
        n
          ? t.classList.remove("line-through")
          : t.classList.add("line-through"),
          (o.checked = !0);
        for (var s = 0; s < e.length && !e[s].checked; s++)
          s !== e.length - 1 || e[s].checked || (o.checked = !1);
      }),
      (it.prototype.showEmptyResults = function (e, t, o) {
        void 0 === o && (o = !1);
        var n = ye("#onetrust-pc-sdk #no-results");
        e
          ? this.setNoResultsContent(t, !1)
          : (ye("#onetrust-pc-sdk " + U.P_Vendor_Content).removeClass(
              "no-results"
            ),
            n.length && n.remove());
      }),
      (it.prototype.setNoResultsContent = function (e, t) {
        void 0 === t && (t = !1);
        var o = ye("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
          var n = document.createElement("div"),
            r = document.createElement("p"),
            s = document.createTextNode(
              " did not match any " + (t ? "hosts." : "vendors.")
            ),
            i = document.createElement("span");
          return (
            (n.id = "no-results"),
            (i.id = "user-text"),
            (i.innerText = e),
            r.appendChild(i),
            r.appendChild(s),
            n.appendChild(r),
            ye("#onetrust-pc-sdk " + U.P_Vendor_Content).addClass("no-results"),
            ye("#vendor-search-handler").el[0].setAttribute(
              "aria-describedby",
              n.id
            ),
            ye("#onetrust-pc-sdk " + U.P_Vendor_Content).append(n)
          );
        }
        o.querySelector("span").innerText = e;
      }),
      (it.prototype.searchHostList = function (e) {
        var t = pe.BannerVariables.currentGlobalFilteredList;
        e && (t = this.searchList(e, t)), this.initHostData(e, t);
      }),
      (it.prototype.searchList = function (e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function (e) {
          return (o.lastIndex = 0), o.test(e.DisplayName || e.HostName);
        });
      }),
      (it.prototype.initHostData = function (e, p) {
        pe.BannerVariables.optanonHostList = p;
        var k = pe.BannerVariables.domainData,
          h = pe.BannerVariables.commonData,
          a = (ye("#onetrust-pc-sdk #no-results").el[0], K.isV2Template),
          l = je.preferenceCenterGroup.name,
          c = 0;
        ye(U.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(
          k.PCenterBackText
        ),
          ye(U.P_Vendor_List + " #select-all-text-container p").html(
            k.PCenterAllowAllConsentText
          ),
          ye(
            "#onetrust-pc-sdk " + U.P_Vendor_Content + " ul" + U.P_Host_Cntr
          ).html(""),
          this.showEmptyResults(p && 0 === p.length, e, !0),
          (!K.isV2Template && "otPcTab" === l) ||
            ye("#onetrust-pc-sdk " + U.P_Vendor_Title).html(
              k.PCenterCookiesListText
            ),
          K.isV2Template &&
            ye("#ot-sel-blk span:first-child").html(
              k.PCenterAllowAllConsentText || h.ConsentText
            );
        for (
          var t = function (d) {
              var u = pe.BannerVariables.hosts.hostTemplate.cloneNode(!0),
                e = u.querySelector("." + U.P_Host_Bx),
                t = p[d].DisplayName || p[d].HostName;
              e &&
                W.setHtmlAttributes(e, {
                  id: "host-" + d,
                  name: "host-" + d,
                  "aria-label": t + " " + k.PCViewCookiesText,
                  "aria-controls": "ot-host-acc-txt-" + d,
                });
              var o = u.querySelector(U.P_Acc_Txt);
              if (
                (o &&
                  W.setHtmlAttributes(o, {
                    id: "ot-host-acc-txt-" + d,
                    role: "region",
                    "aria-labelledby": e.id,
                  }),
                !h.allowHostOptOut || p[d].isFirstParty)
              ) {
                var n = u.querySelector(".ot-host-tgl");
                n && n.parentElement.removeChild(n);
              } else {
                var r = void 0;
                a
                  ? ((r = ue.chkboxEl.cloneNode(!0)).classList.add(
                      "ot-host-tgl"
                    ),
                    r
                      .querySelector("input")
                      .classList.add("host-checkbox-handler"),
                    "otPcTab" === l
                      ? u
                          .querySelector(U.P_Host_Hdr)
                          .insertAdjacentElement("beforeBegin", r)
                      : u
                          .querySelector(U.P_Tgl_Cntr)
                          .insertAdjacentElement("beforeEnd", r))
                  : (r = u.querySelector(".ot-host-tgl")),
                  W.setHtmlAttributes(r.querySelector("input"), {
                    id: "ot-host-chkbox-" + d,
                    "aria-label": t,
                    hostId: p[d].HostId,
                  }),
                  r
                    .querySelector("label")
                    .setAttribute("for", "ot-host-chkbox-" + d),
                  -1 !==
                  pe.BannerVariables.oneTrustHostConsent.indexOf(
                    p[d].HostId + ":1"
                  )
                    ? (W.setCheckedAttribute(
                        null,
                        r.querySelector("input"),
                        !0
                      ),
                      p[d].isActive &&
                        (c++,
                        W.setDisabledAttribute(
                          null,
                          r.querySelector("input"),
                          !0
                        )))
                    : W.setCheckedAttribute(null, r.querySelector("input"), !1),
                  (r.querySelector(U.P_Label_Txt).innerText = t);
              }
              if (k.PCAccordionStyle === $.PlusMinus)
                u.querySelector(U.P_Acc_Header).insertAdjacentElement(
                  "afterBegin",
                  ue.plusMinusEl.cloneNode(!0)
                );
              else if (a) {
                var s = ue.arrowEl.cloneNode(!0);
                "otPcTab" === l
                  ? u
                      .querySelector(U.P_Host_View_Cookies)
                      .insertAdjacentElement("afterend", s)
                  : u
                      .querySelector(U.P_Tgl_Cntr)
                      .insertAdjacentElement("beforeEnd", s);
              }
              if (
                (k.AddLinksToCookiepedia &&
                  !p[d].isFirstParty &&
                  (t =
                    '<a href="http://cookiepedia.co.uk/host/' +
                    p[d].HostName +
                    '" target="_blank"\n              style="text-decoration: underline;">' +
                    t +
                    "</a>"),
                (u.querySelector(U.P_Host_Title).innerHTML = t),
                (u.querySelector(U.P_Host_Desc).innerText = p[d].Description),
                p[d].PrivacyPolicy &&
                  h.pcShowCookieHost &&
                  u
                    .querySelector(U.P_Host_Desc)
                    .insertAdjacentHTML(
                      "afterend",
                      '<a href="' +
                        p[d].PrivacyPolicy +
                        '" target="_blank"\n                        >' +
                        p[d].PrivacyPolicy +
                        "</a>"
                    ),
                k.PCViewCookiesText &&
                  (u.querySelector(U.P_Host_View_Cookies).innerHTML =
                    k.PCViewCookiesText),
                !p[d].Description || !h.pcShowCookieHost)
              ) {
                var i = u.querySelector(U.P_Host_Desc);
                i.parentElement.removeChild(i);
              }
              ye(u.querySelector(U.P_Host_Opt)).html(""),
                p[d].Cookies.forEach(function (e) {
                  var t = pe.BannerVariables.hosts.hostCookieTemplate.cloneNode(
                      !0
                    ),
                    o = t.querySelector("div").cloneNode(!0);
                  o.classList.remove("cookie-name-container"), ye(t).html("");
                  var n = e.Name;
                  k.AddLinksToCookiepedia &&
                    p[d].isFirstParty &&
                    (n = Ae.getCookieLabel(e));
                  var r = o.cloneNode(!0);
                  if (
                    (r.classList.add(U.P_c_Name),
                    (r.querySelector("div:nth-child(1)").innerHTML =
                      h.pcCListName),
                    (r.querySelector("div:nth-child(2)").innerHTML = n),
                    ye(t).append(r),
                    h.pcShowCookieHost)
                  ) {
                    var s = o.cloneNode(!0);
                    s.classList.add(U.P_c_Host),
                      (s.querySelector("div:nth-child(1)").innerHTML =
                        h.pcCListHost),
                      (s.querySelector("div:nth-child(2)").innerHTML = e.Host),
                      ye(t).append(s);
                  }
                  if (h.pcShowCookieDuration) {
                    var i = o.cloneNode(!0);
                    i.classList.add(U.P_c_Duration),
                      (i.querySelector("div:nth-child(1)").innerHTML =
                        h.pcCListDuration),
                      (i.querySelector("div:nth-child(2)").innerHTML =
                        e.IsSession ? "Session" : tt.getDuration(e.Length)),
                      ye(t).append(i);
                  }
                  if (h.pcShowCookieType) {
                    var a = o.cloneNode(!0);
                    a.classList.add(U.P_c_Type),
                      (a.querySelector("div:nth-child(1)").innerHTML =
                        h.pcCListType),
                      (a.querySelector("div:nth-child(2)").innerHTML = p[d]
                        .isFirstParty
                        ? "1st Party"
                        : "3rd Party"),
                      ye(t).append(a);
                  }
                  if (h.pcShowCookieCategory) {
                    var l = o.cloneNode(!0);
                    l.classList.add(U.P_c_Category),
                      (l.querySelector("div:nth-child(1)").innerHTML =
                        h.pcCListCategory),
                      (l.querySelector("div:nth-child(2)").innerHTML = p[d]
                        .isFirstParty
                        ? e.groupName
                        : p[d].groupName),
                      ye(t).append(l);
                  }
                  if (h.pcShowCookieDescription && e.description) {
                    var c = o.cloneNode(!0);
                    c.classList.add(U.P_c_Desc),
                      (c.querySelector("div:nth-child(1)").innerHTML =
                        h.pcCListDescription),
                      (c.querySelector("div:nth-child(2)").innerHTML =
                        e.description),
                      ye(t).append(c);
                  }
                  ye(u.querySelector(U.P_Host_Opt)).append(t);
                }),
                ye(
                  "#onetrust-pc-sdk " +
                    U.P_Vendor_Content +
                    " ul" +
                    U.P_Host_Cntr
                ).append(u);
            },
            o = 0;
          o < p.length;
          o++
        )
          t(o);
        var n =
          1 === p.length && p[0].HostName === k.PCFirstPartyCookieListText;
        if (h.allowHostOptOut && !n) {
          W.setDisabledAttribute(
            "#onetrust-pc-sdk #select-all-hosts-groups-handler",
            null,
            1 <= c
          );
          for (
            var r = ye(
                "#onetrust-pc-sdk " + U.P_Host_Cntr + " .ot-host-tgl input"
              ).el,
              s = 0;
            s < r.length;
            s++
          )
            r[s].addEventListener("click", this.hostsListEvent);
          ye("#onetrust-pc-sdk " + U.P_Select_Cntr).removeClass("ot-hide"),
            this.hostsListEvent();
        } else ye("#onetrust-pc-sdk " + U.P_Select_Cntr).addClass("ot-hide");
      }),
      (it.prototype.hostsListEvent = function () {
        for (
          var e = pe.BannerVariables.domainData,
            t = ye(
              "#onetrust-pc-sdk " + U.P_Host_Cntr + " .ot-host-tgl input"
            ).el,
            o = ye("#onetrust-pc-sdk #" + U.P_Sel_All_Host_El).el[0],
            n = ye("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0],
            r = ye("#onetrust-pc-sdk " + U.P_Cnsnt_Header).el[0],
            s = !0,
            i = 0;
          i < t.length;
          i++
        ) {
          if (!t[i].checked) {
            s = !1;
            break;
          }
          s = !0;
        }
        s
          ? o.classList.remove("line-through")
          : o.classList.add("line-through"),
          (n.checked = !0);
        for (var a = 0; a < t.length && !t[a].checked; a++)
          a !== t.length - 1 || t[a].checked || (n.checked = !1);
        n &&
          r &&
          n.setAttribute(
            "aria-label",
            r.textContent + " " + e.PCenterSelectAllVendorsText
          );
      }),
      (it.prototype.loadHostList = function (e, o) {
        void 0 === e && (e = "");
        var t = pe.BannerVariables.domainData,
          n = [],
          r = [];
        t.Groups.forEach(function (e) {
          h(e.SubGroups, [e]).forEach(function (e) {
            if (o.length) {
              if (-1 !== o.indexOf(O.getGroupIdForCookie(e))) {
                var t = tt.getCookiesForGroup(e);
                (r = h(r, t.firstPartyCookiesList)),
                  (n = h(n, t.thirdPartyCookiesList));
              }
            } else (t = tt.getCookiesForGroup(e)), (r = h(r, t.firstPartyCookiesList)), (n = h(n, t.thirdPartyCookiesList));
          });
        }),
          r.length &&
            n.unshift({
              HostName: t.PCFirstPartyCookieListText,
              DisplayName: t.PCFirstPartyCookieListText,
              HostId: "first-party-cookies-group",
              isFirstParty: !0,
              Cookies: r,
              Description: "",
            }),
          (pe.BannerVariables.currentGlobalFilteredList = n),
          this.initHostData(e, n);
      }),
      (it.prototype.initVendorsData = function (e, t) {
        var o = t,
          n = pe.BannerVariables,
          r = n.vendors.list,
          s = n.domainData,
          i = n.commonData;
        if (
          (ye(U.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(
            s.PCenterBackText
          ),
          ye(U.P_Vendor_List + " #select-all-text-container p").html(
            s.PCenterAllowAllConsentText
          ),
          K.isV2Template &&
            (ye("#ot-sel-blk span:first-child").html(
              s.PCenterAllowAllConsentText || i.ConsentText
            ),
            ye("#ot-sel-blk span:last-child").html(i.LegitInterestText)),
          (this.hasIabVendors = 0 < o.length),
          this.showEmptyResults(
            !this.hasGoogleVendors && !this.hasIabVendors,
            e,
            !1
          ),
          0 === o.length
            ? ye("#ot-lst-cnt .ot-acc-cntr").hide()
            : ye("#ot-lst-cnt .ot-acc-cntr").show(),
          ye("#onetrust-pc-sdk " + U.P_Vendor_Container + " ." + U.P_Ven_Bx)
            .length !== r.length && this.attachVendorsToDOM(),
          o.length !== r.length)
        )
          r.forEach(function (e) {
            ye(
              U.P_Vendor_Container + " #IAB" + e.vendorId
            ).el[0].parentElement.style.display =
              -1 === o.indexOf(e) ? "none" : "";
          });
        else
          for (
            var a = ye(U.P_Vendor_Container + ' li[style^="display"]').el,
              l = 0;
            l < a.length;
            l++
          )
            a[l].style.display = "";
        (!K.isV2Template && "otPcTab" === je.preferenceCenterGroup.name) ||
          ye("#onetrust-pc-sdk " + U.P_Vendor_Title).html(
            s.PCenterVendorsListText
          ),
          ye("#onetrust-pc-sdk " + U.P_Select_Cntr).removeClass("ot-hide"),
          this.vendorsListEvent(),
          pe.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent();
      }),
      (it.prototype.updateVendorsDOMToggleStatus = function (e) {
        for (
          var t = ye(U.P_Vendor_Container + " " + U.P_Tgl_Cntr).el, o = 0;
          o < t.length;
          o++
        ) {
          var n = t[o].querySelector("." + U.P_Ven_Ctgl + " input"),
            r = t[o].querySelector("." + U.P_Ven_Ltgl + " input");
          n && W.setCheckedAttribute("", n, e),
            r && W.setCheckedAttribute("", r, e);
        }
        var s = ye("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        s &&
          (s.parentElement.classList.remove("line-through"),
          W.setCheckedAttribute("", s, e));
        var i = ye("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        i &&
          (i.parentElement.classList.remove("line-through"),
          W.setCheckedAttribute("", i, e)),
          pe.BannerVariables.domainData.UseGoogleVendors &&
            this.updateGoogleCheckbox(e);
      }),
      (it.prototype.updateGoogleCheckbox = function (e) {
        for (
          var t = ye("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0;
          o < t.length;
          o++
        )
          W.setCheckedAttribute("", t[o], e);
        var n = ye("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n &&
          (n.parentElement.classList.remove("line-through"),
          W.setCheckedAttribute("", n, e));
      }),
      (it.prototype.attachVendorsToDOM = function () {
        var O,
          e = pe.BannerVariables,
          N = e.vendors.list,
          M = e.commonData,
          F = e.domainData,
          R = F.IabType,
          q = je.preferenceCenterGroup.name,
          j = e.vendors.vendorTemplate.cloneNode(!0);
        K.isV2Template &&
          ((O = j.querySelector(".ot-ven-pur").cloneNode(!0)),
          ye(j.querySelector(".ot-ven-dets")).html(""));
        for (
          var t = function (o) {
              var e = j.cloneNode(!0),
                t = N[o].vendorId,
                n = N[o].vendorName,
                r = e.querySelector("." + U.P_Ven_Bx),
                s = pe.vendorsSetting[t],
                i = 0;
              W.setHtmlAttributes(r, {
                id: "IAB" + t,
                name: "IAB" + t,
                "aria-controls": "IAB-ACC-TXT" + t,
                "aria-label": n,
              }),
                r.nextElementSibling.setAttribute("for", "IAB" + t),
                (e.querySelector(U.P_Ven_Name).innerText = n),
                W.setHtmlAttributes(e.querySelector(U.P_Ven_Link), {
                  href: N[o].policyUrl,
                  target: "_blank",
                }),
                (e.querySelector(U.P_Ven_Link).innerHTML =
                  F.PCenterViewPrivacyPolicyText);
              var a = K.isV2Template
                  ? ue.chkboxEl.cloneNode(!0)
                  : e.querySelector(".ot-checkbox"),
                l = a.cloneNode(!0),
                c = a.cloneNode(!0),
                d = e.querySelector(U.P_Tgl_Cntr);
              K.isV2Template || a.parentElement.removeChild(a);
              var u = e.querySelector(U.P_Arrw_Cntr);
              if (s.consent) {
                c.classList.add(U.P_Ven_Ctgl);
                var p =
                    -1 !==
                    he.inArray(
                      t + ":true",
                      pe.BannerVariables.vendors.selectedVendors
                    ),
                  k = c.querySelector("input");
                if (K.isV2Template) {
                  k.classList.add("vendor-checkbox-handler");
                  var h = c.querySelector(".ot-label-status");
                  F.PCShowConsentLabels
                    ? (h.innerHTML = p ? F.PCActiveText : F.PCInactiveText)
                    : W.removeChild(h);
                }
                W.setCheckedAttribute("", k, p),
                  W.setHtmlAttributes(k, {
                    id: U.P_Vendor_CheckBx + "-" + o,
                    vendorid: t,
                    "aria-label": n,
                  }),
                  c
                    .querySelector("label")
                    .setAttribute("for", U.P_Vendor_CheckBx + "-" + o),
                  (c.querySelector(U.P_Label_Txt).textContent = n),
                  "otPcTab" === q
                    ? F.PCTemplateUpgrade
                      ? d.insertAdjacentElement("beforeend", c)
                      : ye(d).append(c)
                    : d.insertBefore(c, u);
              }
              if (s.legInt) {
                var b =
                  -1 !==
                  he.inArray(
                    t + ":true",
                    pe.BannerVariables.vendors.selectedLegIntVendors
                  );
                if (pe.legIntSettings.PShowLegIntBtn) {
                  var y = pe.generateLegIntButtonElements(b, t, !0);
                  e.querySelector(U.P_Acc_Txt).insertAdjacentHTML(
                    "beforeend",
                    y
                  );
                } else
                  (k = l.querySelector("input")),
                    K.isV2Template &&
                      (k.classList.add("vendor-checkbox-handler"),
                      (h = l.querySelector(".ot-label-status")),
                      F.PCShowConsentLabels
                        ? (h.innerHTML = b ? F.PCActiveText : F.PCInactiveText)
                        : W.removeChild(h)),
                    l.classList.add(U.P_Ven_Ltgl),
                    k.classList.remove("vendor-checkbox-handler"),
                    k.classList.add("vendor-leg-checkbox-handler"),
                    W.setCheckedAttribute("", k, b),
                    W.setHtmlAttributes(k, {
                      id: U.P_Vendor_LegCheckBx + "-" + o,
                      "leg-vendorid": t,
                      "aria-label": n,
                    }),
                    l
                      .querySelector("label")
                      .setAttribute("for", U.P_Vendor_LegCheckBx + "-" + o),
                    (l.querySelector(U.P_Label_Txt).textContent = n),
                    e.querySelector("." + U.P_Ven_Ctgl) &&
                      (u = e.querySelector("." + U.P_Ven_Ctgl)),
                    "otPcTab" !== q || d.children.length
                      ? d.insertBefore(l, u)
                      : ye(d).append(l),
                    s.consent ||
                      "otPcTab" !== q ||
                      l.classList.add(U.P_Ven_Ltgl_Only);
              }
              K.isV2Template &&
                (d.insertAdjacentElement("beforeend", ue.arrowEl.cloneNode(!0)),
                F.PCAccordionStyle !== $.Caret &&
                  e
                    .querySelector(".ot-ven-hdr")
                    .insertAdjacentElement(
                      "beforebegin",
                      ue.plusMinusEl.cloneNode(!0)
                    ));
              var f = e.querySelector(U.P_Acc_Txt);
              if (
                (f &&
                  W.setHtmlAttributes(f, {
                    id: "IAB-ACC-TXT" + t,
                    "aria-labelledby": "IAB-ACC-TXT" + t,
                    role: "region",
                  }),
                K.isV2Template)
              )
                z.populateVendorDetailsHtml(e, O, N[o]);
              else {
                var g = e.querySelector(".vendor-option-purpose"),
                  m = e.querySelector(".vendor-consent-group"),
                  C = e.querySelector(".legitimate-interest"),
                  v = e.querySelector(".legitimate-interest-group"),
                  P = e.querySelector(".spl-purpose"),
                  A = e.querySelector(".spl-purpose-grp"),
                  T = e.querySelector(".vendor-feature"),
                  I = e.querySelector(".vendor-feature-group"),
                  B = e.querySelector(".vendor-spl-feature"),
                  S = e.querySelector(".vendor-spl-feature-grp"),
                  x = m.cloneNode(!0),
                  L = v.cloneNode(!0),
                  w = A.cloneNode(!0),
                  _ = I.cloneNode(!0),
                  V = S.cloneNode(!0);
                m.parentElement.removeChild(m),
                  s.consent &&
                    (ye(g.querySelector("p")).text(M.ConsentPurposesText),
                    N[o].purposes.forEach(function (e) {
                      ye(x.querySelector(".consent-category")).text(
                        e.purposeName
                      );
                      var t = x.querySelector(".consent-status");
                      t && x.removeChild(t),
                        C.insertAdjacentHTML("beforebegin", x.outerHTML),
                        i++;
                    })),
                  s.consent || g.parentElement.removeChild(g);
                var E = L.querySelector(".vendor-opt-out-handler");
                "IAB2" === F.IabType && E.parentElement.removeChild(E),
                  v.parentElement.removeChild(v),
                  (!s.legInt && "IAB" !== F.IabType) ||
                    (ye(C.querySelector("p")).text(
                      M.LegitimateInterestPurposesText
                    ),
                    ("IAB" === F.IabType ||
                      (pe.legIntSettings.PAllowLI && "IAB2" === F.IabType)) &&
                      N[o].legIntPurposes.forEach(function (e) {
                        ye(L.querySelector(".consent-category")).text(
                          e.purposeName
                        );
                        var t = L.querySelector(".vendor-opt-out-handler");
                        "IAB" === F.IabType &&
                          ye(t).attr("href", N[o].policyUrl),
                          C.insertAdjacentHTML("afterend", L.outerHTML),
                          i++;
                      })),
                  s.legInt || C.parentElement.removeChild(C),
                  A.parentElement.removeChild(A),
                  "IAB2" === R &&
                    N[o].specialPurposes.forEach(function (e) {
                      ye(w.querySelector(".consent-category")).text(
                        e.purposeName
                      ),
                        P.insertAdjacentHTML("afterend", w.outerHTML);
                    }),
                  "IAB" === R || 0 === N[o].specialPurposes.length
                    ? P.parentElement.removeChild(P)
                    : ye(P.querySelector("p")).text(M.SpecialPurposesText),
                  I.parentElement.removeChild(I),
                  ye(T.querySelector("p")).text(M.FeaturesText),
                  N[o].features.forEach(function (e) {
                    ye(_.querySelector(".consent-category")).text(
                      e.featureName
                    ),
                      T.insertAdjacentHTML("afterend", _.outerHTML);
                  }),
                  0 === N[o].features.length && T.parentElement.removeChild(T),
                  B.parentElement.removeChild(S),
                  "IAB2" === R &&
                    N[o].specialFeatures.forEach(function (e) {
                      ye(V.querySelector(".consent-category")).text(
                        e.featureName
                      ),
                        B.insertAdjacentHTML("afterend", V.outerHTML);
                    }),
                  "IAB" === R || 0 === N[o].specialFeatures.length
                    ? B.parentElement.removeChild(B)
                    : ye(B.querySelector("p")).text(M.SpecialFeaturesText);
                var D = r.parentElement.querySelector(".vendor-purposes p");
                "IAB" === pe.iabType
                  ? ye(D).text(i + " " + (i < 2 ? "Purpose" : "Purposes"))
                  : D.parentElement.removeChild(D);
              }
              ye("#onetrust-pc-sdk " + U.P_Vendor_Container).append(e);
              var G = ye(
                "#onetrust-pc-sdk " + U.P_Sel_All_Vendor_Consent_Handler
              ).el[0];
              G &&
                G.setAttribute(
                  "aria-label",
                  F.PCenterSelectAllVendorsText +
                    " " +
                    pe.BannerVariables.commonData.LegitInterestText
                );
              var H = ye("#onetrust-pc-sdk " + U.P_Sel_All_Vendor_Leg_Handler)
                .el[0];
              H &&
                H.setAttribute(
                  "aria-label",
                  F.PCenterSelectAllVendorsText +
                    " " +
                    pe.BannerVariables.commonData.ConsentText
                );
            },
            z = this,
            o = 0;
          o < N.length;
          o++
        )
          t(o);
      }),
      (it.prototype.populateVendorDetailsHtml = function (e, t, o) {
        var n = e.querySelector(".ot-ven-dets"),
          r = pe.BannerVariables.commonData,
          s = pe.vendorsSetting[o.vendorId];
        if (s.consent) {
          var i = t.cloneNode(!0),
            a = "<p>" + r.ConsentPurposesText + "</p>";
          o.purposes.forEach(function (e) {
            a += "<p>" + e.purposeName + "</p>";
          }),
            (i.innerHTML = a),
            n.insertAdjacentElement("beforeEnd", i);
        }
        if ((s.legInt || "IAB" === pe.iabType) && o.legIntPurposes.length) {
          i = t.cloneNode(!0);
          var l = "<p>" + r.LegitimateInterestPurposesText + "</p>";
          o.legIntPurposes.forEach(function (e) {
            l += "<p>" + e.purposeName + "</p>";
          }),
            (i.innerHTML = l),
            n.insertAdjacentElement("beforeEnd", i);
        }
        if ("IAB2" === pe.iabType && o.specialPurposes.length) {
          i = t.cloneNode(!0);
          var c = "<p>" + r.SpecialPurposesText + "</p>";
          o.specialPurposes.forEach(function (e) {
            c += "<p>" + e.purposeName + "</p>";
          }),
            (i.innerHTML = c),
            n.insertAdjacentElement("beforeEnd", i);
        }
        if (o.features.length) {
          i = t.cloneNode(!0);
          var d = "<p>" + r.FeaturesText + "</p>";
          o.features.forEach(function (e) {
            d += "<p>" + e.featureName + "</p>";
          }),
            (i.innerHTML = d),
            n.insertAdjacentElement("beforeEnd", i);
        }
        if ("IAB2" === pe.iabType && o.specialFeatures.length) {
          i = t.cloneNode(!0);
          var u = "<p>" + r.SpecialFeaturesText + "</p>";
          o.specialFeatures.forEach(function (e) {
            u += "<p>" + e.featureName + "</p>";
          }),
            (i.innerHTML = u),
            n.insertAdjacentElement("beforeEnd", i);
        }
      }),
      (it.prototype.InitializeVendorList = function () {
        var e = pe.BannerVariables;
        if (
          ((e.vendors.list = e.iabData ? e.iabData.vendors : null),
          (e.vendors.vendorTemplate = ye(
            U.P_Vendor_Container + " li"
          ).el[0].cloneNode(!0)),
          ye("#onetrust-pc-sdk " + U.P_Vendor_Container).html(""),
          !K.isV2Template && "otPcTab" === je.preferenceCenterGroup.name)
        ) {
          var t,
            o = e.vendors.vendorTemplate.querySelectorAll(U.P_Acc_Header);
          pe.legIntSettings.PAllowLI && "IAB2" === pe.iabType
            ? (t = o[0]).parentElement.removeChild(t)
            : (t = o[1]).parentElement.removeChild(t);
        }
      }),
      (it.prototype.cancelVendorFilter = function () {
        for (
          var e = ye("#onetrust-pc-sdk .category-filter-handler").el, t = 0;
          t < e.length;
          t++
        ) {
          var o = e[t].getAttribute("data-purposeid");
          e[t].checked &&
            pe.BannerVariables.filterByIABCategories.indexOf(o) < 0 &&
            (e[t].checked = "");
        }
      }),
      (it.prototype.updateVendorFilterList = function () {
        for (
          var e = ye("#onetrust-pc-sdk .category-filter-handler").el, t = 0;
          t < e.length;
          t++
        ) {
          var o = e[t].getAttribute("data-purposeid");
          if (
            e[t].checked &&
            pe.BannerVariables.filterByIABCategories.indexOf(o) < 0
          )
            pe.BannerVariables.filterByIABCategories.push(o);
          else if (
            !e[t].checked &&
            -1 < pe.BannerVariables.filterByIABCategories.indexOf(o)
          ) {
            var n = pe.BannerVariables.filterByIABCategories;
            pe.BannerVariables.filterByIABCategories.splice(n.indexOf(o), 1);
          }
        }
        return pe.BannerVariables.filterByIABCategories;
      }),
      (it.prototype.saveVendorStatus = function () {
        var e = pe.BannerVariables.vendors,
          t = pe.BannerVariables.oneTrustIABConsent;
        (t.purpose = e.selectedPurpose.slice()),
          (t.legimateInterest = e.selectedLegInt.slice()),
          (t.vendors = e.selectedVendors.slice()),
          (t.legIntVendors = e.selectedLegIntVendors.slice()),
          (t.specialFeatures = e.selectedSpecialFeatures.slice());
        var o = pe.BannerVariables.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected);
      }),
      (it.prototype.updateIabVariableReference = function () {
        var e = pe.BannerVariables.oneTrustIABConsent,
          t = pe.BannerVariables.vendors;
        (t.selectedPurpose = e.purpose.slice()),
          (t.selectedLegInt = e.legimateInterest.slice()),
          (t.selectedVendors = e.vendors.slice()),
          (t.selectedLegIntVendors = e.legIntVendors.slice()),
          (t.selectedSpecialFeatures = e.specialFeatures.slice());
        var o = pe.BannerVariables.addtlVendors;
        (o.vendorSelected = {}),
          o.vendorConsent.forEach(function (e) {
            o.vendorSelected[e] = !0;
          });
      }),
      (it.prototype.allowAllhandler = function () {
        je.initializeIABData(!0, !1);
      }),
      (it.prototype.rejectAllHandler = function () {
        je.initializeIABData(!1, !0);
      }),
      (it.prototype.assignIABGlobalScope = function () {
        pe.BannerVariables.oneTrustIABgdprAppliesGlobally =
          0 <=
          pe.BannerVariables.constant.EUCOUNTRIES.indexOf(
            pe.userLocation.country
          );
      }),
      (it.prototype.populateAddtlVendors = function (e) {
        var t = pe.BannerVariables,
          o = t.domainData,
          n =
            o.PCAccordionStyle === $.Caret
              ? ue.arrowEl.cloneNode(!0)
              : ue.plusMinusEl.cloneNode(!0),
          r = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
          s = r.cloneNode(!0);
        W.removeChild(s.querySelector("#ot-selall-hostcntr")),
          W.removeChild(r.querySelector("#ot-selall-vencntr")),
          W.removeChild(r.querySelector("#ot-selall-licntr"));
        var i = ue.accordionEl.cloneNode(!0);
        i
          .querySelector(".ot-acc-hdr")
          .insertAdjacentElement("beforeEnd", n.cloneNode(!0)),
          i
            .querySelector(".ot-acc-hdr")
            .insertAdjacentHTML(
              "beforeEnd",
              "<div className='ot-vensec-title'>" +
                o.PCIABVendorsText +
                "</div>"
            ),
          i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", s),
          i
            .querySelector(".ot-acc-txt")
            .insertAdjacentElement("beforeEnd", ye("#ot-ven-lst").el[0]),
          ye("#ot-lst-cnt .ot-sdk-column").append(i);
        var a = s.cloneNode(!0);
        W.removeChild(a.querySelector("#ot-selall-licntr")),
          (a.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr"),
          (a.querySelector("input").id = "ot-selall-adtlven-handler"),
          a
            .querySelector("label")
            .setAttribute("for", "ot-selall-adtlven-handler");
        var l = ue.accordionEl.cloneNode(!0);
        l
          .querySelector(".ot-acc-hdr")
          .insertAdjacentElement("beforeEnd", n.cloneNode(!0)),
          l
            .querySelector(".ot-acc-hdr")
            .insertAdjacentHTML(
              "beforeEnd",
              "<div className='ot-vensec-title'>" +
                o.PCGoogleVendorsText +
                "</div>"
            ),
          l.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", a),
          l
            .querySelector(".ot-acc-txt")
            .insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>");
        var c = t.vendors.vendorTemplate.cloneNode(!0);
        for (var d in (c.querySelector("input").classList.remove("ot-ven-box"),
        c.querySelector("input").classList.add("ot-addtl-venbox"),
        W.removeChild(c.querySelector(".ot-acc-txt")),
        e))
          if (e[d]) {
            var u = c.cloneNode(!0),
              p = e[d].name;
            u.querySelector(U.P_Ven_Name).innerText = p;
            var k = u.querySelector("input");
            W.setHtmlAttributes(k, { id: "Adtl-IAB" + d }),
              W.setHtmlAttributes(u.querySelector(U.P_Ven_Link), {
                href: e[d].policyUrl,
                target: "_blank",
              }),
              (u.querySelector(U.P_Ven_Link).innerHTML =
                o.PCenterViewPrivacyPolicyText);
            var h = ue.chkboxEl.cloneNode(!0);
            h.classList.remove("ot-ven-ctgl"),
              h.classList.add("ot-ven-adtlctgl");
            var b = Boolean(t.addtlVendors.vendorSelected[d]),
              y = h.querySelector("input");
            y.classList.add("ot-addtlven-chkbox-handler");
            var f = h.querySelector(".ot-label-status");
            o.PCShowConsentLabels
              ? (f.innerHTML = b ? o.PCActiveText : o.PCInactiveText)
              : W.removeChild(f),
              W.setCheckedAttribute("", y, b),
              W.setHtmlAttributes(y, {
                id: "ot-addtlven-chkbox-" + d,
                "addtl-vid": d,
                "aria-label": p,
              }),
              h
                .querySelector("label")
                .setAttribute("for", "ot-addtlven-chkbox-" + d),
              (h.querySelector(U.P_Label_Txt).textContent = p);
            var g = u.querySelector(U.P_Tgl_Cntr);
            ye(g).append(h),
              g.insertAdjacentElement("beforeend", ue.arrowEl.cloneNode(!0)),
              o.PCAccordionStyle !== $.Caret &&
                u
                  .querySelector(".ot-ven-hdr")
                  .insertAdjacentElement(
                    "beforebegin",
                    ue.plusMinusEl.cloneNode(!0)
                  ),
              ye(l.querySelector("#ot-addtl-venlst")).append(u);
          }
        ye("#ot-lst-cnt .ot-sdk-column").append(l),
          ye("#onetrust-pc-sdk").on(
            "click",
            "#ot-pc-lst .ot-acc-cntr > input",
            function (e) {
              W.setCheckedAttribute(null, e.target, e.target.checked);
            }
          ),
          this.showConsentHeader();
      }),
      (it.prototype.showConsentHeader = function () {
        var e = pe.legIntSettings;
        ye("#onetrust-pc-sdk .ot-sel-all-hdr").show(),
          (e.PAllowLI && !e.PShowLegIntBtn) ||
            ye("#onetrust-pc-sdk .ot-li-hdr").hide();
      }),
      it);
  function it() {
    (this.hasIabVendors = !1), (this.hasGoogleVendors = !1);
  }
  var at,
    lt =
      ((ct.prototype.insertCookiePolicyHtml = function () {
        if (ye(this.ONETRUST_COOKIE_POLICY).length) {
          var e = pe.BannerVariables.domainData,
            t = pe.BannerVariables.commonData;
          je.insertCookieSettingText();
          var o,
            n = document.createDocumentFragment();
          if (je.cookieListGroup) {
            var r = t.CookiesV2NewCookiePolicy
                ? ".ot-sdk-cookie-policy"
                : "#ot-sdk-cookie-policy-v2",
              s = document.createElement("div");
            ye(s).html(je.cookieListGroup.html),
              s.removeChild(s.querySelector(r)),
              (o = s.querySelector(".ot-sdk-cookie-policy")),
              t.useRTL && ye(o).attr("dir", "rtl");
          }
          (o.querySelector("#cookie-policy-title").innerHTML =
            e.CookieListTitle || ""),
            (o.querySelector("#cookie-policy-description").innerHTML =
              e.CookieListDescription || "");
          var i = o.querySelector("section"),
            a = o.querySelector("section tbody tr"),
            l = null,
            c = null;
          t.CookiesV2NewCookiePolicy ||
            ((l = o.querySelector("section.subgroup")),
            (c = o.querySelector("section.subgroup tbody tr")),
            ye(o).el.removeChild(o.querySelector("section.subgroup"))),
            ye(o).el.removeChild(o.querySelector("section")),
            !ye("#ot-sdk-cookie-policy").length &&
              ye("#optanon-cookie-policy").length &&
              ye("#optanon-cookie-policy").append(
                '<div id="ot-sdk-cookie-policy"></div>'
              );
          for (var d = 0; d < e.Groups.length; d++)
            if (t.CookiesV2NewCookiePolicy)
              this.insertGroupHTMLV2(e, e.Groups, i, d, a, o, n);
            else if (
              (this.insertGroupHTML(e, e.Groups, i, d, a, o, n),
              e.Groups[d].ShowSubgroup)
            )
              for (var u = 0; u < e.Groups[d].SubGroups.length; u++)
                this.insertGroupHTML(e, e.Groups[d].SubGroups, l, u, c, o, n);
        }
      }),
      (ct.prototype.transformFirstPartyCookies = function (e, t) {
        var o = t.slice();
        return (
          e.forEach(function (t) {
            o.some(function (e) {
              if (e.HostName === t.Host) return e.Cookies.push(t), !0;
            }) ||
              o.unshift({
                HostName: t.Host,
                DisplayName: t.Host,
                HostId: "",
                Description: "",
                Type: "1st Party",
                Cookies: [t],
              });
          }),
          o
        );
      }),
      (ct.prototype.insertGroupHTMLV2 = function (a, e, t, o, l, n, r) {
        var s,
          c,
          d,
          i = this;
        s = e[o];
        var u = t.cloneNode(!0),
          p = e[o].SubGroups;
        function k(e) {
          return u.querySelector(e);
        }
        a.CookiesText || (a.CookiesText = "Cookies"),
          a.CategoriesText || (a.CategoriesText = "Categories"),
          a.LifespanText || (a.LifespanText = "Lifespan"),
          a.LifespanTypeText || (a.LifespanTypeText = "Session"),
          a.LifespanDurationText || (a.LifespanDurationText = "days"),
          ye(k("tbody")).html("");
        var h = s.Hosts.slice(),
          b = s.FirstPartyCookies.slice();
        if (e[o].ShowSubgroup && p.length) {
          var y = u.querySelector("section.ot-sdk-subgroup ul li");
          p.forEach(function (e) {
            var t = y.cloneNode(!0);
            (h = h.concat(e.Hosts)),
              (b = b.concat(e.FirstPartyCookies)),
              ye(t.querySelector(".ot-sdk-cookie-policy-group")).html(
                O.safeGroupName(e)
              ),
              ye(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(
                i.groupsClass.safeFormattedGroupDescription(e)
              ),
              ye(y.parentElement).append(t);
          }),
            u.querySelector("section.ot-sdk-subgroup ul").removeChild(y);
        } else u.removeChild(u.querySelector("section.ot-sdk-subgroup"));
        a.IsLifespanEnabled
          ? (ye(k("th.ot-life-span")).el.innerHTML = a.LifespanText)
          : ye(k("thead tr")).el.removeChild(ye(k("th.ot-life-span")).el),
          (ye(k("th.ot-cookies")).el.innerHTML = a.CookiesText),
          (ye(k("th.ot-host")).el.innerHTML = a.CategoriesText),
          (ye(k("th.ot-cookies-type")).el.innerHTML = a.CookiesUsedText),
          (c = this.transformFirstPartyCookies(b, h));
        var f = !1;
        c.some(function (e) {
          return e.Description;
        })
          ? (f = !0)
          : ye(k("thead tr")).el.removeChild(
              ye(k("th.ot-host-description")).el
            ),
          ye(k(".ot-sdk-cookie-policy-group")).html(O.safeGroupName(s)),
          ye(k(".ot-sdk-cookie-policy-group-desc")).html(
            this.groupsClass.safeFormattedGroupDescription(s)
          );
        for (
          var g = function (e) {
              function t(e) {
                return o.querySelector(e);
              }
              var o = l.cloneNode(!0);
              ye(t(".ot-cookies-td span")).text(""),
                ye(t(".ot-life-span-td span")).text(""),
                ye(t(".ot-cookies-type span")).text(""),
                ye(t(".ot-cookies-td .ot-cookies-td-content")).html(""),
                ye(t(".ot-host-td")).html(""),
                ye(t(".ot-host-description-td")).html(
                  '<span className="ot-mobile-border"></span>\n                        <p>' +
                    c[e].Description +
                    "</p> "
                );
              for (var n = [], r = [], s = 0; s < c[e].Cookies.length; s++)
                (d = c[e].Cookies[s]).IsSession
                  ? n.push(a.LifespanTypeText)
                  : 0 === d.Length
                  ? n.push("<1 " + a.LifespanDurationText)
                  : n.push(d.Length + " " + a.LifespanDurationText),
                  r.push(
                    c[e].Type
                      ? '<a href="https://cookiepedia.co.uk/cookies/' +
                          d.Name +
                          '" target="_blank">' +
                          d.Name +
                          "</a>"
                      : d.Name
                  );
              ye(t(".ot-host-td")).append(
                '<span className="ot-mobile-border"></span>'
              ),
                t(".ot-host-td").setAttribute("data-label", a.CategoriesText),
                t(".ot-cookies-td").setAttribute("data-label", a.CookiesText),
                t(".ot-cookies-type").setAttribute(
                  "data-label",
                  a.CookiesUsedText
                ),
                t(".ot-life-span-td").setAttribute(
                  "data-label",
                  a.LifespanText
                );
              var i = c[e].DisplayName || c[e].HostName;
              ye(t(".ot-host-td")).append(
                c[e].Type
                  ? i
                  : '<a href="https://cookiepedia.co.uk/host/' +
                      d.Host +
                      '" target="_blank">' +
                      i +
                      "</a>"
              ),
                t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML(
                  "beforeend",
                  r.join(", ")
                ),
                (t(".ot-life-span-td .ot-life-span-td-content").innerText =
                  n.join(", ")),
                (t(".ot-cookies-type .ot-cookies-type-td-content").innerText =
                  c[e].Type ? "1st Party" : "3rd Party"),
                a.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")),
                f || o.removeChild(t("td.ot-host-description-td")),
                ye(k("tbody")).append(o);
            },
            m = 0;
          m < c.length;
          m++
        )
          g(m);
        0 === c.length && u.removeChild(u.querySelector("table")),
          ye(n).append(u),
          ye(r).append(n),
          ye("#ot-sdk-cookie-policy").append(r);
      }),
      (ct.prototype.insertGroupHTML = function (s, e, t, o, i, n, r) {
        var a, l, c, d;
        a = e[o];
        var u = t.cloneNode(!0);
        function p(e) {
          return u.querySelector(e);
        }
        s.CookiesText || (s.CookiesText = "Cookies"),
          s.CategoriesText || (s.CategoriesText = "Categories"),
          s.LifespanText || (s.LifespanText = "Lifespan"),
          s.LifespanTypeText || (s.LifespanTypeText = "Session"),
          s.LifespanDurationText || (s.LifespanDurationText = "days"),
          ye(p("tbody")).html(""),
          ye(p("thead tr")),
          s.IsLifespanEnabled
            ? (ye(p("th.life-span")).el.innerHTML = s.LifespanText)
            : ye(p("thead tr")).el.removeChild(ye(p("th.life-span")).el),
          (ye(p("th.cookies")).el.innerHTML = s.CookiesText),
          (ye(p("th.host")).el.innerHTML = s.CategoriesText);
        var k = !1;
        if (
          (a.Hosts.some(function (e) {
            return e.description;
          })
            ? (k = !0)
            : ye(p("thead tr")).el.removeChild(ye(p("th.host-description")).el),
          ye(p(".ot-sdk-cookie-policy-group")).html(O.safeGroupName(a)),
          ye(p(".ot-sdk-cookie-policy-group-desc")).html(
            this.groupsClass.safeFormattedGroupDescription(a)
          ),
          0 < a.FirstPartyCookies.length)
        ) {
          ye(p(".cookies-used-header")).html(s.CookiesUsedText),
            ye(p(".cookies-list")).html("");
          for (var h = 0; h < a.FirstPartyCookies.length; h++)
            (l = a.FirstPartyCookies[h]),
              ye(p(".cookies-list")).append(
                "<li> " + Ae.getCookieLabel(l) + " <li>"
              );
        } else
          u.removeChild(p(".cookies-used-header")),
            u.removeChild(p(".cookies-list"));
        c = a.Hosts;
        for (
          var b = function (e) {
              function t(e) {
                return o.querySelector(e);
              }
              var o = i.cloneNode(!0);
              ye(t(".cookies-td ul")).html(""),
                ye(t(".life-span-td ul")).html(""),
                ye(t(".host-td")).html(""),
                ye(t(".host-description-td")).html(
                  '<span className="ot-mobile-border"></span>\n                        <p>' +
                    c[e].Description +
                    "</p> "
                );
              for (var n = 0; n < c[e].Cookies.length; n++) {
                var r = "";
                (r = (d = c[e].Cookies[n]).IsSession
                  ? s.LifespanTypeText
                  : 0 === d.Length
                  ? "<1 " + s.LifespanDurationText
                  : d.Length + " " + s.LifespanDurationText),
                  ye(t(".cookies-td ul")).append(
                    "<li> " +
                      d.Name +
                      " " +
                      (s.IsLifespanEnabled ? "&nbsp;(" + r + ")" : "") +
                      " </li>"
                  ),
                  s.IsLifespanEnabled &&
                    ye(t(".life-span-td ul")).append(
                      "<li>" + (d.Length ? d.Length + " days" : "N/A") + "</li>"
                    ),
                  0 === n &&
                    (ye(t(".host-td")).append(
                      '<span className="ot-mobile-border"></span>'
                    ),
                    ye(t(".host-td")).append(
                      '<a href="https://cookiepedia.co.uk/host/' +
                        d.Host +
                        '" target="_blank">' +
                        (c[e].DisplayName || c[e].HostName) +
                        "</a>"
                    ));
              }
              k || o.removeChild(t("td.host-description-td")),
                ye(p("tbody")).append(o);
            },
            y = 0;
          y < c.length;
          y++
        )
          b(y);
        0 === c.length && ye(p("table")).el.removeChild(ye(p("thead")).el),
          ye(n).append(u),
          ye(r).append(n),
          ye("#ot-sdk-cookie-policy").append(r);
      }),
      ct);
  function ct() {
    (this.groupsclassName = Xe),
      (this.ONETRUST_COOKIE_POLICY =
        "#ot-sdk-cookie-policy, #optanon-cookie-policy");
  }
  var dt,
    ut = new (function () {
      this.importCSS = function () {
        return {
          css: '#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-left:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-right:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}#ot-sdk-btn.ot-sdk-show-settings:focus,#ot-sdk-btn.optanon-show-settings:focus{outline:none}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;left:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}\n#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy{font-size:16px}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;left:auto;right:auto;top:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before{content:"";content:none}\n#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:left;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-left:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-left:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-left:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-left:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-left:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-left:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-left:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-left:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-left:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-left:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-left:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-left:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-left:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #33c3f0;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-left:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-left:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:right}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:left}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block;margin:0}#onetrust-banner-sdk .banner-option-input:focus+label{outline-color:-webkit-focus-ring-color;outline-style:auto;outline-width:1px}\n',
          cssRTL:
            '#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-right:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-left:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;right:50%;margin-right:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;right:50%;margin-right:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}#ot-sdk-btn.ot-sdk-show-settings:focus,#ot-sdk-btn.optanon-show-settings:focus{outline:none}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;right:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}\n#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy{font-size:16px}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;right:auto;left:auto;top:auto;text-align:right;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before{content:"";content:none}\n#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:right;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-right:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-right:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-right:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-right:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-right:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-right:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-right:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-right:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-right:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-right:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-right:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-right:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-right:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-right:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-right:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-right:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-right:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #33c3f0;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-right:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-right:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 3rem 1.5rem 0;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:right;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:left}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:right}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block;margin:0}#onetrust-banner-sdk .banner-option-input:focus+label{outline-color:-webkit-focus-ring-color;outline-style:auto;outline-width:1px}\n',
        };
      };
    })().importCSS(),
    pt =
      ((kt.prototype.initialiseCssReferences = function () {
        var e;
        document.getElementById("onetrust-style")
          ? (e = document.getElementById("onetrust-style"))
          : (((e = document.createElement("style")).type = "text/css"),
            (e.id = "onetrust-style")),
          (e.innerHTML += pe.BannerVariables.commonData.useRTL
            ? ut.cssRTL
            : ut.css),
          je.bannerGroup &&
            ((e.innerHTML += je.bannerGroup.css),
            (e.innerHTML += this.addCustomBannerCSS())),
          je.preferenceCenterGroup &&
            ((e.innerHTML += je.preferenceCenterGroup.css),
            (e.innerHTML += this.addCustomPreferenceCenterCSS())),
          je.cookieListGroup &&
            ((e.innerHTML += je.cookieListGroup.css),
            (e.innerHTML += this.addCustomCookieListCSS())),
          (this.processedCSS = e.innerHTML),
          pe.BannerVariables.ignoreInjectingHtmlCss ||
            ye(document.head).append(e);
      }),
      kt);
  function kt() {
    (this.processedCSS = ""),
      (this.addCustomBannerCSS = function () {
        var e = pe.BannerVariables.commonData,
          t = e.backgroundColor,
          o = e.buttonColor,
          n = e.textColor,
          r = e.buttonTextColor,
          s = e.bannerMPButtonColor,
          i = e.bannerMPButtonTextColor,
          a = e.bannerAccordionBackgroundColor,
          l =
            "\n        " +
            ("otFloatingFlat" === je.bannerGroup.name
              ? t
                ? "#onetrust-consent-sdk #onetrust-banner-sdk > .ot-sdk-container {\n                    background-color: " +
                  t +
                  ";}"
                : ""
              : t
              ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " +
                t +
                ";}"
              : "") +
            "\n            " +
            (n
              ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options * {\n                        color: " +
                n +
                ";\n                    }"
              : "") +
            "\n            " +
            (a
              ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " +
                a +
                ";}"
              : "") +
            "\n            ";
        return (
          (o || r) &&
            ((l +=
              "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " +
              (o
                ? "background-color: " + o + ";border-color: " + o + ";"
                : "") +
              "\n                            " +
              (r ? "color: " + r + ";" : "") +
              "\n                        }"),
            (l +=
              "#onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                            border-color: " +
              t +
              ";\n                            background-color: " +
              t +
              ";\n                            " +
              (o ? "color: " + o : "") +
              "\n                        }")),
          (i || s) &&
            (l +=
              "#onetrust-consent-sdk #onetrust-pc-btn-handler {\n                      " +
              (i ? "color: " + i + "; border-color: " + i + ";" : "") +
              "\n        " +
              (s ? "background-color: " + s + ";" : "") +
              "\n  }"),
          e.bannerCustomCSS && (l += e.bannerCustomCSS),
          l
        );
      }),
      (this.addCustomPreferenceCenterCSS = function () {
        var e = pe.BannerVariables.commonData,
          t = e.pcBackgroundColor,
          o = e.pcButtonColor,
          n = e.pcTextColor,
          r = e.pcButtonTextColor,
          s = e.pcLinksTextColor,
          i = e.bannerLinksTextColor,
          a = pe.BannerVariables.domainData.PCenterEnableAccordion,
          l = e.pcAccordionBackgroundColor,
          c = e.pcMenuColor,
          d = e.pcMenuHighLightColor,
          u = e.pcLegIntButtonColor,
          p = e.pcLegIntButtonTextColor,
          k =
            "\n            " +
            (t
              ? ("otPcList" === je.preferenceCenterGroup.name
                  ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container, \n                        #onetrust-pc-sdk " +
                    U.P_Vendor_List
                  : "#onetrust-consent-sdk #onetrust-pc-sdk") +
                ",\n                #onetrust-consent-sdk " +
                U.P_Search_Cntr +
                ",\n                " +
                (a && "otPcList" === je.preferenceCenterGroup.name
                  ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" +
                    U.P_Category_Item
                  : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Tab_Grp_Hdr +
                " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Title +
                ":after\n                " +
                (K.isV2Template
                  ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " +
                    U.P_Triangle
                  : "") +
                " {\n                    background-color: " +
                t +
                ";\n                }\n               "
              : "") +
            "\n            " +
            (n
              ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Vendor_Container +
                " " +
                U.P_Ven_Opts +
                " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Policy_Txt +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Title +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Li_Title +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Leg_Select_All +
                " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Host_Cntr +
                " " +
                U.P_Host_Info +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Fltr_Modal +
                " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Vendor_List +
                " " +
                U.P_Select_Cntr +
                " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Vendor_List +
                " " +
                U.P_Vendor_Title +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Vendor_List +
                " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Vendor_List +
                " " +
                U.P_Ven_Name +
                ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Vendor_List +
                " " +
                U.P_Vendor_Container +
                " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler \n                {\n                    color: " +
                n +
                ";\n                }"
              : "") +
            "\n            " +
            (s
              ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Ven_Link +
                ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Host_Cntr +
                " " +
                U.P_Host_Title +
                " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Host_Cntr +
                " " +
                U.P_Acc_Header +
                " " +
                U.P_Host_View_Cookies +
                ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Host_Cntr +
                " " +
                U.P_Host_Info +
                " a\n                    {\n                        color: " +
                s +
                ";\n                    }"
              : "") +
            "\n            " +
            (i
              ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href]\n                        {\n                            color: " +
                i +
                ";\n                        }"
              : "") +
            "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}\n            " +
            (a && l
              ? "#onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Acc_Container +
                U.P_Acc_Txt +
                ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " +
                U.P_Acc_Txt +
                " " +
                U.P_Subgrp_Tgl_Cntr +
                " .ot-switch.ot-toggle\n             {\n                background-color: " +
                l +
                ";\n            }"
              : "") +
            "\n        ";
        return (
          (o || r) &&
            (k +=
              "#onetrust-consent-sdk #onetrust-pc-sdk \n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " +
              (o
                ? "background-color: " + o + ";border-color: " + o + ";"
                : "") +
              "\n                " +
              (r ? "color: " + r + ";" : "") +
              "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." +
              U.P_Active_Menu +
              " {\n                " +
              (o ? "border-color: " + o + ";" : "") +
              "\n            }\n            " +
              ("otPcList" === je.preferenceCenterGroup.name
                ? "#onetrust-consent-sdk #onetrust-pc-sdk " +
                  U.P_Category_Item +
                  ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " +
                  U.P_Li_Hdr +
                  "{\n                border-color: " +
                  o +
                  ";\n            }"
                : "") +
              "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border:1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " +
              (u ? "background-color: " + u + ";" : "") +
              "\n                " +
              (p ? "color: " + p + "; border-color: " + p + ";" : "") +
              "\n            }\n            "),
          "otPcTab" === je.preferenceCenterGroup.name &&
            (c &&
              (k +=
                "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " +
                c +
                "\n                }"),
            d &&
              (k +=
                "#onetrust-consent-sdk #onetrust-pc-sdk ." +
                U.P_Active_Menu +
                " {\n                    background-color: " +
                d +
                "\n                }")),
          e.pcCustomCSS && (k += e.pcCustomCSS),
          k
        );
      }),
      (this.addCustomCookieListCSS = function () {
        var e = pe.BannerVariables.commonData,
          t = e.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
          o =
            "\n                " +
            (e.cookieListPrimaryColor
              ? "\n                    #ot-sdk-cookie-policy" +
                t +
                " h5,\n                    #ot-sdk-cookie-policy" +
                t +
                " h6,\n                    #ot-sdk-cookie-policy" +
                t +
                " li,\n                    #ot-sdk-cookie-policy" +
                t +
                " p,\n                    #ot-sdk-cookie-policy" +
                t +
                " a,\n                    #ot-sdk-cookie-policy" +
                t +
                " span,\n                    #ot-sdk-cookie-policy" +
                t +
                " td,\n                    #ot-sdk-cookie-policy" +
                t +
                " #cookie-policy-description {\n                        color: " +
                e.cookieListPrimaryColor +
                ";\n                    }"
              : "") +
            "\n                    " +
            (e.cookieListTableHeaderColor
              ? "#ot-sdk-cookie-policy" +
                t +
                " th {\n                        color: " +
                e.cookieListTableHeaderColor +
                ";\n                    }"
              : "") +
            "\n                    " +
            (e.cookieListGroupNameColor
              ? "#ot-sdk-cookie-policy" +
                t +
                " .ot-sdk-cookie-policy-group {\n                        color: " +
                e.cookieListGroupNameColor +
                ";\n                    }"
              : "") +
            "\n                    " +
            (e.cookieListTitleColor
              ? "\n                    #ot-sdk-cookie-policy" +
                t +
                " #cookie-policy-title {\n                            color: " +
                e.cookieListTitleColor +
                ";\n                        }\n                    "
              : "") +
            "\n            " +
            (t && e.CookieListTableHeaderBackgroundColor
              ? "\n                    #ot-sdk-cookie-policy" +
                t +
                " table th {\n                            background-color: " +
                e.CookieListTableHeaderBackgroundColor +
                ";\n                        }\n                    "
              : "") +
            "\n            ";
        return e.cookieListCustomCss && (o += e.cookieListCustomCss), o;
      });
  }
  var ht,
    bt =
      ((yt.prototype.setFilterList = function (t) {
        var o = this,
          e = pe.BannerVariables.domainData,
          n = ye(
            "#onetrust-pc-sdk " + U.P_Fltr_Modal + " " + U.P_Fltr_Option
          ).el[0].cloneNode(!0);
        ye("#onetrust-pc-sdk " + U.P_Fltr_Modal + " " + U.P_Fltr_Options).html(
          ""
        ),
          (K.isV2Template || pe.BannerVariables.domainData.Popup) &&
            ye("#onetrust-pc-sdk #filter-cancel-handler").html(
              e.PCenterCancelFiltersText || "Cancel"
            ),
          (!K.isV2Template && pe.BannerVariables.domainData.Popup) ||
            (ye("#onetrust-pc-sdk " + U.P_Clr_Fltr_Txt).html(
              e.PCenterClearFiltersText
            ),
            ye("#filter-btn-handler").el[0].setAttribute(
              "aria-label",
              e.PCenterFilterText
            )),
          ye("#onetrust-pc-sdk #filter-apply-handler").html(
            e.PCenterApplyFiltersText
          ),
          t
            ? pe.BannerVariables.oneTrustCategories.forEach(function (e) {
                (e.Hosts.length || e.FirstPartyCookies.length) &&
                  o.filterGroupOptionSetter(n, e, t);
              })
            : pe.BannerVariables.oneTrustIABConsent.defaultPurpose.forEach(
                function (e) {
                  o.filterGroupOptionSetter(n, e, t);
                }
              );
      }),
      (yt.prototype.hideConsentNoticeV2 = function () {
        if (0 !== ye("" + this.ONETRUST_PC_SDK).length) {
          var e = pe.BannerVariables.domainData;
          if ((K.isV2Template && this.closePCText(), e.ForceConsent))
            ht.isCookiePolicyPage(e.AlertNoticeText) ||
            pe.isAlertBoxClosedAndValid() ||
            !e.ShowAlertNotice
              ? ye(
                  this.ONETRUST_PC_DARK_FILTER + ", " + this.ONETRUST_PC_SDK
                ).fadeOut(400)
              : (ye("" + this.ONETRUST_PC_DARK_FILTER)
                  .css("z-index: 2147483645")
                  .show(),
                ye("" + this.ONETRUST_PC_SDK).fadeOut(400));
          else
            switch (pe.getPcName()) {
              case "otPcPanel":
                var t = pe.BannerVariables.domainData.PreferenceCenterPosition,
                  o = pe.BannerVariables.commonData.useRTL,
                  n = o ? "right" : "left",
                  r = o ? "left" : "right";
                ye("" + this.ONETRUST_PC_SDK).removeClass(
                  "ot-slide-in-" + ("right" === t ? r : n)
                ),
                  ye("" + this.ONETRUST_PC_SDK).addClass(
                    "ot-slide-out-" + ("right" === t ? r : n)
                  ),
                  ye(
                    this.ONETRUST_PC_DARK_FILTER + ", " + this.ONETRUST_PC_SDK
                  ).fadeOut(500);
                break;
              default:
                ye(
                  this.ONETRUST_PC_DARK_FILTER + ", " + this.ONETRUST_PC_SDK
                ).fadeOut(400);
            }
          if (
            ((pe.BannerVariables.isPCVisible = !1),
            (ye("html").el[0].style.overflow = this.htmlScrollProp || ""),
            (ye("body").el[0].style.overflow = this.bodyScrollProp || ""),
            (pe.pcLayer = z.Banner),
            pe.pcSource || pe.isAlertBoxClosedAndValid())
          )
            if (pe.pcSource) pe.pcSource.focus(), (pe.pcSource = null);
            else if (K.fp.CookieV2BannerFocus)
              document.activeElement && document.activeElement.blur();
            else {
              var s = document.querySelectorAll(
                'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
              );
              s.length && s[0].focus();
            }
          else ht.setBannerFocus(null, null, !0, !1);
        }
      }),
      (yt.prototype.isCookiePolicyPage = function (e) {
        var t = !1,
          o = W.removeURLPrefixes(window.location.href),
          n = ye("<div></div>", "ce").el;
        ye(n).html(e);
        for (var r = n.querySelectorAll("a"), s = 0; s < r.length; s++)
          if (W.removeURLPrefixes(r[s].href) === o) {
            t = !0;
            break;
          }
        return t;
      }),
      (yt.prototype.getPCFocusableElement = function (e) {
        var t =
          "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk ." +
          U.P_Active_Menu +
          ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return (
          (t += e
            ? " ,#onetrust-pc-sdk " + U.P_Content + " .powered-by-logo"
            : ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo"),
          Array.prototype.slice.call(ye(t).el)
        );
      }),
      (yt.prototype.setBannerFocus = function (e, t, o, n) {
        var r = pe.BannerVariables.domainData;
        if (o) {
          var s = ye("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
          s && s.focus();
        } else if (e && !(e.length <= 0)) {
          if (null != t)
            for (var i = 0; i < e.length; i++)
              e[i].setAttribute("tabindex", t.toString());
          var a = this.getdefaultElementsForFocus(e, 0, !0),
            l = a ? this.getdefaultElementsForFocus(e, e.length - 1, !1) : null;
          a
            ? (ye(a).on("keydown", function (e) {
                if (9 === e.keyCode && e.shiftKey)
                  e.preventDefault(), l.focus();
                else if (r.Tab && 1 === pe.pcLayer) {
                  var t = ht.getActiveTab();
                  t && (e.preventDefault(), t.focus());
                }
              }),
              a.focus())
            : e[0].focus(),
            !n &&
              l &&
              ye(l).on("keydown", function (e) {
                if (9 === e.keyCode && !e.shiftKey) {
                  e.preventDefault();
                  var t = r.ShowPreferenceCenterCloseButton,
                    o = 2 === pe.pcLayer || 3 === pe.pcLayer;
                  r.Tab && pe.BannerVariables.isPCVisible && !t && !o
                    ? ht.getActiveTab().focus()
                    : a.focus();
                }
              });
        }
      }),
      (yt.prototype.closePCText = function () {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
          t = pe.BannerVariables.domainData.AboutCookiesText;
        e.innerText = t + " " + pe.BannerVariables.commonData.pcDialogClose;
      }),
      (yt.prototype.getActiveTab = function () {
        return document.querySelector(
          '#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]'
        );
      }),
      (yt.prototype.getdefaultElementsForFocus = function (e, t, o) {
        for (
          var n = e.length, r = e[t];
          o
            ? null === r.offsetParent && t < n - 1
            : null === r.offsetParent && 0 < t;

        )
          (r = e[t]), o ? ++t : --t;
        return r;
      }),
      (yt.prototype.filterGroupOptionSetter = function (e, t, o) {
        var n = O.getGroupIdForCookie(t),
          r = n + "-filter",
          s = e.cloneNode(!0);
        ye(U.P_Fltr_Modal + " " + U.P_Fltr_Options).append(s),
          ye(s.querySelector("input")).attr("id", r),
          ye(s.querySelector("label")).attr("for", r),
          K.isV2Template
            ? ye(s.querySelector(U.P_Label_Txt)).html(t.GroupName)
            : ye(s.querySelector("label span")).html(t.GroupName),
          ye(s.querySelector("input")).attr(
            o ? "data-optanongroupid" : "data-purposeid",
            n
          );
      }),
      yt);
  function yt() {
    (this.bodyScrollProp = ""),
      (this.htmlScrollProp = ""),
      (this.ONETRUST_PC_SDK = "#onetrust-pc-sdk"),
      (this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter");
  }
  var ft,
    gt =
      ((mt.prototype.updateGtmMacros = function (e) {
        void 0 === e && (e = !0);
        var t = [];
        pe.BannerVariables.optanonHtmlGroupData.forEach(function (e) {
          W.endsWith(e, ":1") &&
            je.canSoftOptInInsertForGroup(e.replace(":1", "")) &&
            t.push(e.replace(":1", ""));
        }),
          pe.BannerVariables.oneTrustHostConsent.forEach(function (e) {
            W.endsWith(e, ":1") && t.push(e.replace(":1", ""));
          });
        var o = "," + W.serialiseArrayToString(t) + ",";
        (window.OnetrustActiveGroups = o),
          (window.OptanonActiveGroups = o),
          void 0 !== window.dataLayer
            ? window.dataLayer.constructor === Array &&
              (window.dataLayer.push({
                event: "OneTrustLoaded",
                OnetrustActiveGroups: o,
              }),
              window.dataLayer.push({
                event: "OptanonLoaded",
                OptanonActiveGroups: o,
              }))
            : (window.dataLayer = [
                { event: "OneTrustLoaded", OnetrustActiveGroups: o },
                { event: "OptanonLoaded", OptanonActiveGroups: o },
              ]),
          e &&
            setTimeout(function () {
              var e = new CustomEvent("consent.onetrust", { detail: t });
              window.dispatchEvent(e);
            });
      }),
      mt);
  function mt() {}
  var Ct,
    vt = "Banner",
    Pt = "Preference Center",
    At = "Close",
    Tt = "Allow All",
    It = "Reject All",
    Bt = "Confirm",
    St =
      ((xt.prototype.closeBanner = function (e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1);
      }),
      (xt.prototype.allowAll = function (e, t) {
        void 0 === t && (t = !1),
          K.moduleInitializer.MobileSDK
            ? window.OneTrust.AllowAll()
            : this.AllowAllV2(e, t);
      }),
      (xt.prototype.bannerActionsHandler = function (t, n) {
        var e = pe.BannerVariables.domainData;
        Ve.setLandingPathParam(pe.BannerVariables.optanonNotLandingPageName),
          (pe.BannerVariables.optanonHtmlGroupData = []),
          (pe.BannerVariables.oneTrustHostConsent = []);
        var r = {};
        e.Groups.forEach(function (e) {
          if (e.IsAboutGroup) return !1;
          h(e.SubGroups, [e]).forEach(function (e) {
            var o = !!t || (!!n && je.isAlwaysActiveGroup(e));
            -1 < E.indexOf(e.Type) &&
              pe.BannerVariables.optanonHtmlGroupData.push(
                O.getGroupIdForCookie(e) +
                  ":" +
                  (o && e.HasConsentOptOut ? "1" : "0")
              ),
              e.Hosts.length &&
                pe.BannerVariables.commonData.allowHostOptOut &&
                e.Hosts.forEach(function (e) {
                  if (r[e.HostId]) Be.updateHostStatus(e, o);
                  else {
                    r[e.HostId] = !0;
                    var t = Be.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                    pe.BannerVariables.oneTrustHostConsent.push(
                      e.HostId + ":" + (t ? "1" : "0")
                    );
                  }
                });
          });
        }),
          pe.BannerVariables.domainData.IsIabEnabled &&
            (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler()),
          ht.hideConsentNoticeV2(),
          Ae.writeCookieGroupsParam(pe.BannerVariables.optanonCookieName),
          Ae.writeHostCookieParam(pe.BannerVariables.optanonCookieName),
          tt.substitutePlainTextScriptTags(),
          ft.updateGtmMacros(),
          this.executeOptanonWrapper();
      }),
      (xt.prototype.nextPageCloseBanner = function () {
        Ve.isLandingPage() ||
          pe.isAlertBoxClosedAndValid() ||
          this.closeBanner(
            pe.BannerVariables.domainData.NextPageAcceptAllCookies
          );
      }),
      (xt.prototype.rmScrollAndClickBodyEvents = function () {
        var e = pe.BannerVariables.domainData;
        e.ScrollCloseBanner &&
          window.removeEventListener("scroll", this.scrollCloseBanner),
          e.OnClickCloseBanner &&
            document.body.removeEventListener("click", this.bodyClickEvent);
      }),
      (xt.prototype.onClickCloseBanner = function (e) {
        pe.isAlertBoxClosedAndValid() ||
          (Fe.triggerGoogleAnalyticsEvent(
            Ue,
            "Banner Auto Close",
            void 0,
            void 0
          ),
          this.closeBanner(
            pe.BannerVariables.domainData.OnClickAcceptAllCookies
          ),
          Ct.rmScrollAndClickBodyEvents(),
          e.stopPropagation());
      }),
      (xt.prototype.scrollCloseBanner = function () {
        var e = ye(document).height() - ye(window).height();
        0 === e && (e = ye(window).height());
        var t = (100 * ye(window).scrollTop()) / e;
        t <= 0 &&
          (t =
            (100 *
              ((document.scrollingElement &&
                document.scrollingElement.scrollTop) ||
                (document.documentElement &&
                  document.documentElement.scrollTop) ||
                (document.body && document.body.scrollTop))) /
            ((document.scrollingElement &&
              document.scrollingElement.scrollHeight) ||
              (document.documentElement &&
                document.documentElement.scrollHeight) ||
              (document.body && document.body.scrollHeight))),
          25 < t &&
          !pe.isAlertBoxClosedAndValid() &&
          !pe.BannerVariables.isPCVisible
            ? (Fe.triggerGoogleAnalyticsEvent(
                Ue,
                "Banner Auto Close",
                void 0,
                void 0
              ),
              Ct.closeBanner(
                pe.BannerVariables.domainData.ScrollAcceptAllCookies
              ),
              Ct.rmScrollAndClickBodyEvents())
            : pe.isAlertBoxClosedAndValid() && Ct.rmScrollAndClickBodyEvents();
      }),
      (xt.prototype.AllowAllV2 = function (e, t) {
        void 0 === t && (t = !1);
        for (
          var o = this.groupsClass.getAllGroupElements(), n = 0;
          n < o.length;
          n++
        ) {
          var r = Be.getGroupById(o[n].getAttribute("data-optanongroupid"));
          this.groupsClass.toggleGrpElements(o[n], r, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0);
        }
        this.bannerActionsHandler(!0, !1),
          this.consentTransactions(e, !0, t),
          pe.BannerVariables.domainData.IsIabEnabled &&
            (this.iab.updateIabVariableReference(),
            this.iab.updateVendorsDOMToggleStatus(!0),
            this.updateVendorLegBtns(!0));
      }),
      (xt.prototype.rejectAll = function (e, t) {
        void 0 === t && (t = !1);
        for (
          var o = this.groupsClass.getAllGroupElements(), n = 0;
          n < o.length;
          n++
        ) {
          var r = Be.getGroupById(o[n].getAttribute("data-optanongroupid"));
          "always active" !== Be.safeGroupDefaultStatus(r).toLowerCase() &&
            (Xe.toggleGrpElements(o[n], r, !1),
            this.groupsClass.toogleSubGroupElement(o[n], !1, !1, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !1, !0, !0));
        }
        this.bannerActionsHandler(!1, !0),
          this.consentTransactions(e, !1, t),
          pe.BannerVariables.domainData.IsIabEnabled &&
            (this.iab.updateIabVariableReference(),
            this.iab.updateVendorsDOMToggleStatus(!1),
            this.updateVendorLegBtns(!1));
      }),
      (xt.prototype.executeCustomScript = function () {
        var e = pe.BannerVariables.domainData;
        e.CustomJs && new Function(e.CustomJs)();
      }),
      (xt.prototype.updateConsentData = function (e) {
        Ve.setLandingPathParam(pe.BannerVariables.optanonNotLandingPageName),
          pe.BannerVariables.domainData.IsIabEnabled &&
            !e &&
            this.iab.saveVendorStatus(),
          Ae.writeCookieGroupsParam(pe.BannerVariables.optanonCookieName),
          Ae.writeHostCookieParam(pe.BannerVariables.optanonCookieName),
          tt.substitutePlainTextScriptTags(),
          ft.updateGtmMacros();
      }),
      (xt.prototype.close = function (e, t) {
        void 0 === t && (t = !1),
          ht.hideConsentNoticeV2(),
          this.updateConsentData(e),
          pe.BannerVariables.domainData.IsConsentLoggingEnabled &&
            Le.createConsentTransaction(
              !1,
              (t ? Pt : vt) + " - " + (t ? Bt : At),
              t
            ),
          this.executeOptanonWrapper();
      }),
      (xt.prototype.executeOptanonWrapper = function () {
        if (
          (this.executeCustomScript(),
          "function" == typeof window.OptanonWrapper &&
            "undefined" !== window.OptanonWrapper)
        ) {
          window.OptanonWrapper();
          for (
            var e = 0;
            e <
            pe.BannerVariables.optanonWrapperScriptExecutedGroupsTemp.length;
            e += 1
          )
            W.contains(
              pe.BannerVariables.optanonWrapperScriptExecutedGroups,
              pe.BannerVariables.optanonWrapperScriptExecutedGroupsTemp[e]
            ) ||
              pe.BannerVariables.optanonWrapperScriptExecutedGroups.push(
                pe.BannerVariables.optanonWrapperScriptExecutedGroupsTemp[e]
              );
          for (
            pe.BannerVariables.optanonWrapperScriptExecutedGroupsTemp = [],
              e = 0;
            e < pe.BannerVariables.optanonWrapperHtmlExecutedGroupsTemp.length;
            e += 1
          )
            W.contains(
              pe.BannerVariables.optanonWrapperHtmlExecutedGroups,
              pe.BannerVariables.optanonWrapperHtmlExecutedGroupsTemp[e]
            ) ||
              pe.BannerVariables.optanonWrapperHtmlExecutedGroups.push(
                pe.BannerVariables.optanonWrapperHtmlExecutedGroupsTemp[e]
              );
          pe.BannerVariables.optanonWrapperHtmlExecutedGroupsTemp = [];
        }
      }),
      (xt.prototype.showConsentNotice = function () {
        switch (
          (ye(".onetrust-pc-dark-filter").removeClass("ot-hide"),
          ye("#onetrust-pc-sdk").removeClass("ot-hide"),
          je.preferenceCenterGroup.name)
        ) {
          case "otPcPanel":
            ye("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") ||
              ye("#onetrust-pc-sdk").addClass("ot-animated");
            var e = pe.BannerVariables.domainData.PreferenceCenterPosition,
              t = pe.BannerVariables.commonData.useRTL,
              o = t ? "right" : "left",
              n = t ? "left" : "right";
            ye("#onetrust-pc-sdk").el[0].classList.contains(
              "ot-slide-out-" + ("right" === e ? n : o)
            ) &&
              ye("#onetrust-pc-sdk").removeClass(
                "ot-slide-out-" + ("right" === e ? n : o)
              ),
              ye("#onetrust-pc-sdk").addClass(
                "ot-slide-in-" + ("right" === e ? n : o)
              );
        }
        var r;
        "otPcTab" !== je.preferenceCenterGroup.name && (r = 0),
          this.groupsClass.setAllowAllButton(),
          ht.setBannerFocus(ht.getPCFocusableElement(!1), r),
          this.pcHasScroll();
      }),
      (xt.prototype.updateVendorLegBtns = function (e) {
        if (pe.legIntSettings.PAllowLI && pe.legIntSettings.PShowLegIntBtn)
          for (
            var t = ye(U.P_Vendor_Container + " .ot-leg-btn-container").el,
              o = 0;
            o < t.length;
            o++
          )
            this.groupsClass.updateLegIntBtnElement(t[o], e);
      }),
      (xt.prototype.pcHasScroll = function () {
        var e =
          ye(U.P_Grp_Container).el[0] ||
          ye("#onetrust-pc-sdk " + U.P_Content).el[0];
        e.scrollHeight > e.clientHeight &&
          ((ht.bodyScrollProp = ye("body").el[0].style.overflow),
          (ht.htmlScrollProp = ye("html").el[0].style.overflow),
          (ye("html").el[0].style.overflow = "hidden"),
          (ye("body").el[0].style.overflow = "hidden"));
      }),
      (xt.prototype.showFltgCkStgButton = function () {
        var e = ye("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"),
          e.removeClass("ot-pc-open"),
          ye(".ot-floating-button__front svg").attr("aria-hidden", ""),
          ye(".ot-floating-button__back svg").attr("aria-hidden", "true");
      }),
      (xt.prototype.consentTransactions = function (e, t, o) {
        void 0 === o && (o = !1),
          Le &&
            !e &&
            pe.BannerVariables.domainData.IsConsentLoggingEnabled &&
            Le.createConsentTransaction(
              !1,
              (o ? Pt : vt) + " - " + (t ? Tt : It),
              o
            );
      }),
      xt);
  function xt() {
    var o = this;
    (this.iab = rt),
      (this.groupsclassName = Xe),
      (this.closeOptanonAlertBox = function () {
        ye("#onetrust-banner-sdk").fadeOut(400),
          (!pe.BannerVariables.optanonIsOptInMode &&
            (pe.BannerVariables.optanonIsOptInMode ||
              pe.isAlertBoxClosedAndValid())) ||
            Fe.setAlertBoxClosed(!0),
          je.cookieSettingsButtonGroup && o.showFltgCkStgButton();
      }),
      (this.bodyClickEvent = function (e) {
        var t = e.target;
        t.closest("#onetrust-banner-sdk") ||
          t.closest("#onetrust-pc-sdk") ||
          t.closest(".onetrust-pc-dark-filter") ||
          t.closest(".ot-sdk-show-settings") ||
          t.closest(".optanon-show-settings") ||
          t.closest(".optanon-toggle-display") ||
          Ct.onClickCloseBanner(e);
      }),
      (this.bannerCloseButtonHandler = function (e) {
        if (
          (void 0 === e && (e = !1),
          Ct.closeOptanonAlertBox(),
          K.moduleInitializer.MobileSDK)
        )
          window.OneTrust.Close();
        else {
          var t =
            pe.BannerVariables.bannerCloseSource === L.ConfirmChoiceButton;
          Ct.close(e, t);
        }
        return !1;
      }),
      (this.allowAllEventHandler = function (e) {
        void 0 === e && (e = !1);
        var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
        Fe.triggerGoogleAnalyticsEvent(Ue, t, void 0, void 0),
          o.allowAllEvent(!1, e);
      }),
      (this.allowAllEvent = function (e, t) {
        void 0 === e && (e = !1),
          void 0 === t && (t = !1),
          o.closeOptanonAlertBox(),
          Ct.allowAll(e, t);
      }),
      (this.rejectAllEventHandler = function (e) {
        void 0 === e && (e = !1);
        var t = e ? "Preferences Reject All" : "Banner Reject All";
        Fe.triggerGoogleAnalyticsEvent(Ue, t, void 0, void 0),
          K.moduleInitializer.MobileSDK
            ? window.OneTrust.RejectAll()
            : o.rejectAllEvent(!1, e);
      }),
      (this.rejectAllEvent = function (e, t) {
        void 0 === e && (e = !1),
          void 0 === t && (t = !1),
          o.closeOptanonAlertBox(),
          o.rejectAll(e, t);
      });
  }
  var Lt,
    wt =
      ((_t.prototype.setParentGroupName = function (e, t, o, n) {
        var r = e.querySelector("h4,h3");
        ye(r).html(t),
          ye(r).attr("id", o),
          "otPcTab" === je.preferenceCenterGroup.name &&
            ((e.querySelector(U.P_Category_Header).innerHTML = t),
            e.querySelector("" + U.P_Desc_Container).setAttribute("id", n),
            e
              .querySelector(".category-menu-switch-handler")
              .setAttribute("aria-controls", n));
      }),
      (_t.prototype.setLegIntButton = function (e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0,
          s = O.extractGroupIdForIabGroup(t.OptanonGroupId.toString());
        -1 < pe.BannerVariables.vendors.selectedLegInt.indexOf(s + ":false") &&
          (r = !1);
        var i = pe.generateLegIntButtonElements(r, t.OptanonGroupId);
        o
          ? n.insertAdjacentHTML("afterend", i)
          : e.insertAdjacentHTML("beforeend", i);
      }),
      (_t.prototype.setParentGroupDescription = function (e, t, o, n, r) {
        var s = je.preferenceCenterGroup.name,
          i = Xe.safeFormattedGroupDescription(t),
          a = e.querySelector("p:not(.ot-always-active)"),
          l = e.querySelector(U.P_Acc_Grp_Desc),
          c = a || l;
        return (
          -1 < H.indexOf(t.Type) && o.PCGrpDescType === F.Legal
            ? (i = t.DescriptionLegal)
            : c.classList.add("ot-category-desc"),
          pe.legIntSettings.PAllowLI &&
            !pe.legIntSettings.PShowLegIntBtn &&
            (t.SubGroups.some(function (e) {
              return e.HasLegIntOptOut;
            }) || t.HasLegIntOptOut
              ? c.parentElement.classList.add("ot-leg-border-color")
              : W.removeChild(e.querySelector(U.P_Li_Hdr))),
          "otPcTab" !== s && c.setAttribute("id", n),
          ye(c).html(i),
          t.Type === w && W.removeChild(c),
          c
        );
      }),
      (_t.prototype.cloneOtHtmlEls = function (e) {
        (ue.toggleEl = ye(e(".ot-tgl")).el.cloneNode(!0)),
          (ue.arrowEl = ye(
            e("#onetrust-pc-sdk > " + U.P_Arrw_Cntr)
          ).el.cloneNode(!0)),
          (ue.subGrpEl = ye(e(U.P_Sub_Grp_Cntr)).el.cloneNode(!0)),
          (ue.vListEl = ye(e(U.P_Ven_Lst_Cntr)).el.cloneNode(!0)),
          (ue.cListEl = ye(e(U.P_Host_Lst_cntr)).el.cloneNode(!0)),
          (ue.chkboxEl = ye(e(U.P_CBx_Cntr)).el.cloneNode(!0)),
          (ue.accordionEl = ye(e(".ot-acc-cntr")).el.cloneNode(!0)),
          /otPcPanel|otPcCenter/.test(je.preferenceCenterGroup.name) &&
            (ue.plusMinusEl = ye(e(".ot-plus-minus")).el.cloneNode(!0)),
          W.removeChild(e(".ot-tgl")),
          W.removeChild(e("#onetrust-pc-sdk > " + U.P_Arrw_Cntr)),
          W.removeChild(e(U.P_Sub_Grp_Cntr)),
          W.removeChild(e(U.P_Ven_Lst_Cntr)),
          W.removeChild(e(U.P_Host_Lst_cntr)),
          W.removeChild(e(U.P_CBx_Cntr)),
          W.removeChild(e(".ot-acc-cntr")),
          /otPcPanel|otPcCenter/.test(je.preferenceCenterGroup.name) &&
            W.removeChild(e(".ot-plus-minus"));
      }),
      (_t.prototype.insertSelectAllEls = function (e) {
        var t = e(U.P_Select_Cntr + " .ot-sel-all-chkbox"),
          o = ue.chkboxEl.cloneNode(!0);
        (o.id = U.P_Sel_All_Host_El),
          (o.querySelector("input").id = "select-all-hosts-groups-handler"),
          o
            .querySelector("label")
            .setAttribute("for", "select-all-hosts-groups-handler"),
          ye(t).append(o);
        var n = ue.chkboxEl.cloneNode(!0);
        (n.id = U.P_Sel_All_Vendor_Consent_El),
          (n.querySelector("input").id = "select-all-vendor-groups-handler"),
          n
            .querySelector("label")
            .setAttribute("for", "select-all-vendor-groups-handler"),
          ye(t).append(n);
        var r = ue.chkboxEl.cloneNode(!0);
        (r.id = U.P_Sel_All_Vendor_Leg_El),
          (r.querySelector("input").id = "select-all-vendor-leg-handler"),
          r
            .querySelector("label")
            .setAttribute("for", "select-all-vendor-leg-handler"),
          ye(t).append(r);
      }),
      (_t.prototype.initializePreferenceCenterGroups = function (e, t) {
        var o = pe.BannerVariables.domainData,
          n = pe.BannerVariables.commonData,
          r = je.preferenceCenterGroup.name;
        if (K.isV2Template) {
          Lt.cloneOtHtmlEls(e);
          var s = ue.chkboxEl.cloneNode(!0);
          s.querySelector("input").classList.add("category-filter-handler"),
            ye(e(U.P_Fltr_Modal + " " + U.P_Fltr_Option)).append(s),
            Lt.insertSelectAllEls(e);
        }
        var i = ye(e("#onetrust-pc-sdk " + U.P_Category_Grp));
        "otPcCenter" === r || "otPcPanel" === r || "otPcList" === r
          ? o.PCenterEnableAccordion
            ? W.removeChild(
                i.el.querySelector(
                  U.P_Category_Item + ":not(.ot-accordion-layout)"
                )
              )
            : W.removeChild(
                i.el.querySelector(U.P_Category_Item + ".ot-accordion-layout")
              )
          : "otPcTab" === r && (o.PCenterEnableAccordion = !1);
        var a,
          l = e("#onetrust-pc-sdk " + U.P_Category_Item),
          c = K.isV2Template
            ? ue.subGrpEl.cloneNode(!0)
            : ye(e(U.P_Sub_Grp_Cntr)),
          d = K.isV2Template
            ? ""
            : ye(e(U.P_Acc_Container + " " + U.P_Sub_Grp_Cntr));
        o.PCTemplateUpgrade &&
          /otPcTab/.test(r) &&
          ((a = e(".ot-abt-tab").cloneNode(!0)),
          W.removeChild(e(".ot-abt-tab"))),
          i.el.removeChild(l),
          K.isV2Template
            ? o.PCAccordionStyle === $.Caret &&
              (ye(e("#onetrust-pc-sdk " + U.P_Vendor_List)).addClass(
                "ot-enbl-chr"
              ),
              o.PCenterEnableAccordion &&
                ye(e("#onetrust-pc-sdk " + U.P_Content)).addClass(
                  "ot-enbl-chr"
                ))
            : ye(l.querySelector(U.P_Sub_Grp_Cntr)).remove();
        var u = o.Groups.filter(function (e) {
            return e.Order;
          }),
          p = 0 === i.el.children.length,
          k = e(U.P_Li_Hdr) || l.querySelector(U.P_Li_Hdr);
        pe.legIntSettings.PAllowLI &&
        pe.grpContainLegalOptOut &&
        "IAB2" === o.IabType &&
        !pe.legIntSettings.PShowLegIntBtn
          ? ((k.querySelector("span:first-child").innerText = n.ConsentText),
            (k.querySelector("span:last-child").innerText =
              n.LegitInterestText),
            o.PCenterEnableAccordion && k
              ? k.classList.add("ot-leg-border-color")
              : "otPcList" === r && l.insertAdjacentElement("afterbegin", k))
          : (W.removeChild(e("#onetrust-pc-sdk " + U.P_Li_Hdr)),
            W.removeChild(l.querySelector(U.P_Li_Hdr)));
        for (var h = e(".ot-tab-desc"), b = 0; b < u.length; b++) {
          var y = u[b],
            f = O.safeGroupName(y),
            g = O.getGroupIdForCookie(y),
            m = l.cloneNode(!0),
            C = "ot-group-id-" + g,
            v = "ot-header-id-" + g,
            P = "ot-desc-id-" + g;
          (m = ye(m).el).setAttribute("data-optanongroupid", g),
            m.querySelector("input") &&
              (m.querySelector("input").setAttribute("aria-controls", P),
              m.querySelector("input").setAttribute("aria-labelledby", v)),
            Lt.setParentGroupName(m, f, v, P),
            "otPcPopup" === r &&
              (y.ShowVendorList && "IAB2" === o.IabType
                ? (W.removeChild(m.querySelector("p:not(.ot-always-active)")),
                  W.removeChild(
                    m.querySelector(
                      U.P_Acc_Txt + ":not(" + U.P_Acc_Container + ")"
                    )
                  ),
                  y.SubGroups.length ||
                    K.isV2Template ||
                    W.removeChild(m.querySelector(U.P_Sub_Grp_Cntr)))
                : W.removeChild(m.querySelector(U.P_Acc_Container)));
          var A = Lt.setParentGroupDescription(m, y, o, P, C);
          K.isV2Template
            ? Lt.setToggle(m, A, y, C, v)
            : Lt.setToggleProps(m, A, y, C, v);
          var T = !!e("#onetrust-pc-sdk " + U.P_Category_Grp).querySelector(
              U.P_Category_Item
            ),
            I = i.el.querySelectorAll(U.P_Category_Item);
          if (
            ((I = I[I.length - 1]),
            p
              ? i.append(m)
              : T
              ? he.insertAfter(m, I)
              : he.insertAfter(
                  m,
                  i.el.querySelector(U.P_Li_Hdr) || i.el.querySelector("h3")
                ),
            0 < y.SubGroups.length && y.ShowSubgroup)
          ) {
            var B =
              "otPcPopup" === r &&
              y.ShowVendorList &&
              "IAB2" === o.IabType &&
              !o.PCTemplateUpgrade;
            Lt.setSubGrps(y, B ? d : c, m, o);
          }
          var S = o.PCGrpDescLinkPosition === q.Top;
          y.Type === w && S && (A = m.querySelector(U.P_Sub_Grp_Cntr));
          var x = S ? A : null;
          Lt.setVendorListBtn(m, e, t, y, x, o),
            Lt.setHostListBtn(m, e, t, y),
            pe.BannerVariables.dataGroupState.push(y);
        }
        if ("otPcTab" === r)
          if (
            (a &&
              e("#onetrust-pc-sdk " + U.P_Category_Grp).insertAdjacentElement(
                "afterbegin",
                a
              ),
            h &&
              640 < window.innerWidth &&
              ye(h).append(
                t.querySelectorAll("#onetrust-pc-sdk " + U.P_Desc_Container)
              ),
            o.IsIabEnabled)
          )
            e(
              U.P_Desc_Container + " .category-vendors-list-handler"
            ).innerHTML = o.VendorListText + "&#x200E;";
          else {
            var L = e(U.P_Desc_Container + " .category-vendors-list-handler");
            L && L.parentElement.removeChild(L);
          }
      }),
      (_t.prototype.jsonAddAboutCookies = function (e) {
        var t = {};
        return (
          e.AboutCookiesText,
          (t.GroupName = e.AboutCookiesText),
          (t.GroupDescription = e.MainInfoText),
          (t.ShowInPopup = !0),
          (t.Order = 0),
          (t.IsAboutGroup = !0),
          t
        );
      }),
      (_t.prototype.insertConsentNoticeHtml = function () {
        var e = pe.BannerVariables.domainData,
          t = pe.BannerVariables.commonData,
          o = je.preferenceCenterGroup.name;
        Lt.jsonAddAboutCookies(e);
        var n = document.createDocumentFragment();
        if (je.preferenceCenterGroup) {
          var r = document.createElement("div");
          ye(r).html(je.preferenceCenterGroup.html);
          var s = r.querySelector("#onetrust-pc-sdk");
          (/Chrome|Safari/i.test(navigator.userAgent) &&
            /Google Inc|Apple Computer/i.test(navigator.vendor)) ||
            ye(s).addClass("ot-sdk-not-webkit"),
            t.useRTL && ye(s).attr("dir", "rtl"),
            pe.legIntSettings.PAllowLI &&
              "IAB2" === pe.iabType &&
              (ye(s).addClass("ot-leg-opt-out"),
              pe.legIntSettings.PShowLegIntBtn && ye(s).addClass("ot-leg-btn")),
            e.PCShowConsentLabels && ye(s).addClass("ot-tgl-with-label"),
            e.UseGoogleVendors && ye(s).addClass("ot-addtl-vendors"),
            "right" === e.PreferenceCenterPosition &&
              ye(s).addClass(t.useRTL ? "right-rtl" : "right"),
            ye(n).append(s);
          var i = function (e) {
              return n.querySelector(e);
            },
            a = function (e) {
              return n.querySelectorAll(e);
            },
            l = ye(a(U.P_Close_Btn)).el;
          if (e.ShowPreferenceCenterCloseButton)
            for (
              e.CloseText || (e.CloseText = "Close Preference Center"), c = 0;
              c < l.length;
              c++
            )
              ye(l[c]).el.setAttribute("aria-label", e.CloseText);
          else
            for (var c = 0; c < l.length; c++)
              ye(l[c].parentElement).el.removeChild(l[c]);
          if (
            (e.Language &&
              e.Language.Culture &&
              ye(i("#onetrust-pc-sdk")).attr("lang", e.Language.Culture),
            i(U.P_Logo) && t.optanonLogo)
          ) {
            var d = pe.updateCorrectUrl(t.optanonLogo);
            pe.checkMobileOfflineRequest(pe.getBannerVersionUrl()) &&
              (d = W.getRelativeURL(d, !0, !0)),
              ye(i(U.P_Logo)).attr(
                "style",
                'background-image: url("' + d + '")'
              );
          }
          var u = ye(a(".ot-pc-footer-logo a")).el;
          if (u.length && t.oneTrustFtrLogo)
            for (
              d = pe.updateCorrectUrl(t.oneTrustFtrLogo),
                pe.checkMobileOfflineRequest(pe.getBannerVersionUrl()) &&
                  (d = W.getRelativeURL(d, !0, !0)),
                c = 0;
              c < u.length;
              c++
            )
              -1 < d.indexOf("poweredBy_cp_logo") &&
                ye(u[c]).attr(
                  "href",
                  "https://www.cookiepro.com/products/cookie-consent/"
                ),
                ye(u[c]).attr("style", 'background-image: url("' + d + '")');
          ye(i(U.P_Title)).html(e.MainText),
            "otPcTab" === o &&
              (ye(i(U.P_Privacy_Txt)).html(e.AboutCookiesText),
              ye(i(U.P_Privacy_Hdr)).html(e.AboutCookiesText)),
            ye(i(U.P_Policy_Txt)).html(e.MainInfoText),
            e.AboutText &&
              ye(i(U.P_Policy_Txt)).html(
                ye(i(U.P_Policy_Txt)).html() +
                  '\n                        <a href="' +
                  e.AboutLink +
                  '" className="privacy-notice-link" target="_blank"\n                        aria-label="' +
                  e.AboutText +
                  ", " +
                  e.PreferenceCenterMoreInfoScreenReader +
                  '">' +
                  e.AboutText +
                  "</a>"
              ),
            e.ConfirmText.trim()
              ? ye(i("#accept-recommended-btn-handler")).html(e.ConfirmText)
              : i("#accept-recommended-btn-handler").parentElement.removeChild(
                  i("#accept-recommended-btn-handler")
                );
          var p = a(".save-preference-btn-handler");
          for (c = 0; c < p.length; c++) ye(p[c]).html(e.AllowAllText);
          var k = a(".ot-pc-refuse-all-handler");
          if (
            e.PCenterShowRejectAllButton &&
            e.PCenterRejectAllButtonText.trim()
          )
            for (c = 0; c < k.length; c++)
              ye(k[c]).html(e.PCenterRejectAllButtonText);
          else W.removeChild(k);
          i(U.P_Manage_Cookies_Txt) &&
            ye(i(U.P_Manage_Cookies_Txt)).html(e.ManagePreferenceText),
            Lt.initializePreferenceCenterGroups(i, n);
        }
        ye(n.querySelector("#onetrust-pc-sdk")).append(
          '<iframe className="ot-text-resize" title="onetrust-text-resize" style="position:absolute;top:-50000px;width:100em;" aria-hidden="true"></iframe>'
        );
        var h = document.getElementById("onetrust-consent-sdk");
        ye(h).append(n),
          pe.BannerVariables.ignoreInjectingHtmlCss ||
            ye(document.body).append(h),
          tt.InitializeHostList();
      }),
      (_t.prototype.setVendorListBtn = function (e, t, o, n, r, s) {
        var i = je.preferenceCenterGroup.name;
        if (n.ShowVendorList) {
          var a = void 0,
            l = void 0;
          if (
            (K.isV2Template
              ? (a = (l = ue.vListEl.cloneNode(!0)).querySelector(
                  ".category-vendors-list-handler"
                ))
              : (l = (a = e.querySelector(".category-vendors-list-handler"))
                  .parentElement),
            (a.innerHTML = s.VendorListText + "&#x200E;"),
            a.setAttribute("data-parent-id", O.getGroupIdForCookie(n)),
            s.PCGrpDescType === F.UserFriendly &&
              a.insertAdjacentHTML(
                "afterend",
                "<a href='" +
                  pe.BannerVariables.commonData.IabLegalTextUrl +
                  "?lang=" +
                  pe.consentLanguage +
                  "' target='_blank'>&nbsp;|&nbsp;" +
                  s.PCVendorFullLegalText +
                  "</a>"
              ),
            K.isV2Template)
          ) {
            var c = e;
            "otPcTab" === i
              ? (c = e.querySelector("" + U.P_Desc_Container))
              : s.PCenterEnableAccordion && (c = e.querySelector(U.P_Acc_Txt)),
              c.insertAdjacentElement("beforeend", l);
          }
          r && r.insertAdjacentElement("beforebegin", l);
        } else if (!K.isV2Template) {
          if (
            ("otPcPanel" !== i && "otPcCenter" !== i) ||
            s.PCenterEnableAccordion
          ) {
            if (
              "otPcPopup" === i ||
              "otPcPanel" === i ||
              ("otPcCenter" === i && s.PCenterEnableAccordion)
            ) {
              var d = t("#vendor-list-container"),
                u = e.querySelector(U.P_Acc_Txt);
              d && o.querySelector("" + U.P_Content).removeChild(d),
                K.isV2Template ||
                  ye(u).el.removeChild(u.querySelector(U.P_Ven_Lst_Cntr));
            }
          } else W.removeChild(e.querySelector(U.P_Ven_Lst_Cntr));
          if ("otPcTab" === i || "otPcList" === i) {
            var p = e.querySelector(U.P_Ven_Lst_Cntr);
            p && p.parentElement.removeChild(p);
          }
        }
      }),
      (_t.prototype.setHostListBtn = function (e, t, o, n) {
        var r = pe.BannerVariables.commonData,
          s = pe.BannerVariables.domainData,
          i = je.preferenceCenterGroup.name,
          a = !1;
        if (
          (r.showCookieList &&
            h(n.SubGroups, [n]).some(function (e) {
              if (-1 === B.indexOf(e.Type) && e.FirstPartyCookies.length)
                return (a = !0);
            }),
          r.showCookieList && (n.ShowHostList || a))
        ) {
          var l = void 0;
          if (K.isV2Template) {
            var c = ue.cListEl.cloneNode(!0);
            l = c.querySelector(".category-host-list-handler");
            var d = e;
            "otPcTab" === i
              ? (d = e.querySelector("" + U.P_Desc_Container))
              : s.PCenterEnableAccordion && (d = e.querySelector(U.P_Acc_Txt)),
              d.insertAdjacentElement("beforeend", c);
          } else l = e.querySelector(".category-host-list-handler");
          l &&
            ((l.innerHTML = s.ThirdPartyCookieListText + "&#x200E;"),
            l.setAttribute("data-parent-id", O.getGroupIdForCookie(n)));
        } else if ("otPcPopup" === i) {
          var u = t("#vendor-list-container"),
            p = e.querySelector(U.P_Acc_Txt);
          u && o.querySelector("" + U.P_Content).removeChild(u),
            p.querySelector(U.P_Host_Lst_cntr) &&
              ye(p).el.removeChild(p.querySelector(U.P_Host_Lst_cntr));
        } else {
          var k = e.querySelector(U.P_Host_Lst_cntr);
          k && k.parentElement.removeChild(k);
        }
      }),
      (_t.prototype.setSubGrps = function (A, T, I, B) {
        var S = je.preferenceCenterGroup.name,
          x = B.PCGrpDescType === F.Legal,
          L = h(D, E),
          w = "otPcPopup" === S && A.ShowVendorList && "IAB2" === B.IabType,
          _ = pe.BannerVariables.domainData;
        if (w && !_.PCTemplateUpgrade) {
          var e = I.querySelector(U.P_Sub_Grp_Cntr);
          e.parentElement.removeChild(e);
        }
        A.SubGroups.forEach(function (e) {
          var t;
          "IAB2" !== pe.iabType ||
            e.Type !== V ||
            e.HasConsentOptOut ||
            (t = !0);
          var o,
            n,
            r = K.isV2Template ? T.cloneNode(!0) : T.el.cloneNode(!0),
            s = r.querySelector(U.P_Subgrp_li).cloneNode(!0),
            i = O.getGroupIdForCookie(e),
            a = "ot-sub-group-id-" + i,
            l = Be.safeGroupDefaultStatus(e).toLowerCase(),
            c = Be.safeGroupDefaultStatus(A).toLowerCase(),
            d = s.querySelector("h5,h6"),
            u = s.querySelector(U.P_Tgl_Cntr);
          s.setAttribute("data-optanongroupid", i),
            K.isV2Template
              ? ((n = ue.toggleEl.cloneNode(!0))
                  .querySelector("input")
                  .setAttribute("data-optanongroupid", i),
                n
                  .querySelector("input")
                  .classList.add("cookie-subgroup-handler"),
                (o = n.cloneNode(!0)),
                u.insertAdjacentElement("beforeend", o))
              : (o = s.querySelector(".ot-toggle"))
                  .querySelector("input")
                  .setAttribute("data-optanongroupid", i),
            ye(r.querySelector(U.P_Subgp_ul)).html(""),
            ye(d).html(e.GroupName),
            o.querySelector("input").setAttribute("id", a),
            o.querySelector("input").setAttribute("aria-label", e.GroupName),
            o.querySelector("label").setAttribute("for", a);
          var p = ye(s.querySelector(U.P_Subgrp_Desc));
          if (w) {
            var k =
              e.DescriptionLegal && x ? e.DescriptionLegal : e.GroupDescription;
            p.html(k);
          } else {
            k = Xe.safeFormattedGroupDescription(e);
            var h = !1;
            -1 < H.indexOf(e.Type) && x && ((h = !0), (k = e.DescriptionLegal)),
              (B.PCenterEnableAccordion && h) || (p = ye(s.querySelector("p"))),
              A.ShowSubGroupDescription ? p.html(k) : p.html("");
          }
          if (A.ShowSubgroupToggle && -1 < L.indexOf(e.Type)) {
            var b = Xe.isGroupActive(e);
            b &&
              (s.querySelector("input").setAttribute("checked", ""),
              "always active" === c &&
                -1 === H.indexOf(e.Type) &&
                ((s.querySelector("input").disabled = !0),
                s.querySelector("input").setAttribute("disabled", !0)));
            var y = u.querySelector(".ot-label-status");
            if (
              (_.PCShowConsentLabels
                ? (y.innerHTML = b ? _.PCActiveText : _.PCInactiveText)
                : W.removeChild(y),
              pe.legIntSettings.PAllowLI && e.Type === V && e.HasLegIntOptOut)
            )
              if (pe.legIntSettings.PShowLegIntBtn) Lt.setLegIntButton(s, e);
              else {
                var f = u.cloneNode(!0);
                u.insertAdjacentElement("afterend", f);
                var g = f.querySelector(".ot-label-status"),
                  m = f.querySelector("input");
                m.setAttribute("id", a + "-leg-out"),
                  f.querySelector("label").setAttribute("for", a + "-leg-out"),
                  (e.IsLegIntToggle = !0);
                var C = Xe.isGroupActive(e);
                _.PCShowConsentLabels
                  ? (g.innerHTML = C ? _.PCActiveText : _.PCInactiveText)
                  : W.removeChild(g),
                  W.setCheckedAttribute(null, m, C),
                  (e.IsLegIntToggle = !1);
              }
          } else ("always active" === l && (A.ShowSubgroupToggle || -1 === G.indexOf(e.Type))) || (t = !0);
          if (
            (t &&
              (o.classList.add("ot-hide-tgl"),
              o.querySelector("input").setAttribute("aria-hidden", !0)),
            "always active" !== l ||
              t ||
              (o && o.parentElement.removeChild(o),
              s
                .querySelector(U.P_Tgl_Cntr)
                .classList.add("ot-always-active-subgroup"),
              Lt.setAlwaysActive(s, !0)),
            "COOKIE" === e.Type &&
              -1 !== e.Parent.indexOf("STACK") &&
              (r.style = "display:none;"),
            ye(r.querySelector(U.P_Subgp_ul)).append(s),
            K.isV2Template)
          ) {
            var v = I;
            "otPcTab" === S
              ? (v = I.querySelector("" + U.P_Desc_Container))
              : B.PCenterEnableAccordion && (v = I.querySelector(U.P_Acc_Txt)),
              v.insertAdjacentElement("beforeend", r);
          } else {
            var P = I.querySelector(U.P_Category_Item + " " + U.P_Ven_Lst_Cntr);
            P && P.insertAdjacentElement("beforebegin", r);
          }
        });
      }),
      (_t.prototype.setToggle = function (e, t, o, n, r) {
        var s = pe.BannerVariables.domainData,
          i = ue.toggleEl.cloneNode(!0);
        i.querySelector("input").classList.add("category-switch-handler");
        var a = i.querySelector("input"),
          l = e.querySelector(U.P_Category_Header),
          c = Xe.isGroupActive(o),
          d = "always active" === Be.safeGroupDefaultStatus(o).toLowerCase(),
          u = o.OptanonGroupId.toString(),
          p = !0;
        if (
          ("IAB2" !== pe.iabType ||
            (o.Type !== V && o.Type !== w) ||
            o.HasConsentOptOut ||
            (p = !1),
          ye(i.querySelector("label")).attr("for", n),
          ye(i.querySelector(".ot-label-txt")).html(o.GroupName),
          pe.legIntSettings.PAllowLI && o.Type === V && o.HasLegIntOptOut)
        )
          if (pe.legIntSettings.PShowLegIntBtn) Lt.setLegIntButton(e, o, !0, t);
          else {
            var k = i.cloneNode(!0);
            o.IsLegIntToggle = !0;
            var h = Xe.isGroupActive(o),
              b = k.querySelector(".ot-label-status");
            s.PCShowConsentLabels
              ? (b.innerHTML = h ? s.PCActiveText : s.PCInactiveText)
              : W.removeChild(b),
              (o.IsLegIntToggle = !1),
              Lt.setInputID(k.querySelector("input"), n + "-leg-out", u, h, r),
              ye(k.querySelector("label")).attr("for", n + "-leg-out"),
              l.insertAdjacentElement("afterend", k);
          }
        var y = i.querySelector(".ot-label-status");
        s.PCShowConsentLabels
          ? (y.innerHTML = c ? s.PCActiveText : s.PCInactiveText)
          : W.removeChild(y),
          (!d && p) ||
            (i.classList.add("ot-hide-tgl"),
            i.querySelector("input").setAttribute("aria-hidden", !0)),
          p &&
            (d
              ? Lt.setAlwaysActive(e)
              : (l.insertAdjacentElement("afterend", i),
                Lt.setInputID(a, n, u, c, r))),
          s.PCenterEnableAccordion &&
            (s.PCAccordionStyle === $.Caret
              ? l.insertAdjacentElement("afterend", ue.arrowEl.cloneNode(!0))
              : l.insertAdjacentElement(
                  "beforebegin",
                  ue.plusMinusEl.cloneNode(!0)
                ));
      }),
      (_t.prototype.setToggleProps = function (e, t, o, n, r) {
        var s = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
          i = e.querySelectorAll("label"),
          a = Xe.isGroupActive(o),
          l = O.getGroupIdForCookie(o).toString(),
          c = e.querySelector(".label-text");
        c && ye(c).html(o.GroupName);
        for (var d = 0; d < s.length; d++)
          if ((i[d] && ye(i[d]).attr("for", n), 2 <= s.length && 0 === d))
            ye(s[d]).attr("id", n + "-toggle");
          else {
            var u = !0;
            if (
              ("IAB2" !== pe.iabType ||
                (o.Type !== V && o.Type !== w) ||
                o.HasConsentOptOut ||
                (u = !1),
              pe.legIntSettings.PAllowLI && o.Type === V && o.HasLegIntOptOut)
            )
              if (pe.legIntSettings.PShowLegIntBtn)
                Lt.setLegIntButton(e, o, !0, t);
              else {
                var p =
                    e.querySelector(
                      U.P_Tgl_Cntr + ":not(" + U.P_Subgrp_Tgl_Cntr + ")"
                    ) || e.querySelector(".ot-toggle"),
                  k = p.cloneNode(!0);
                p.insertAdjacentElement("afterend", k);
                var h = k.querySelector("input");
                o.IsLegIntToggle = !0;
                var b = Xe.isGroupActive(o);
                (o.IsLegIntToggle = !1),
                  Lt.setInputID(h, n + "-leg-out", l, b, r),
                  ye(k.querySelector("label")).attr("for", n + "-leg-out"),
                  W.removeChild(k.querySelector(U.P_Arrw_Cntr));
              }
            var y =
              "always active" === Be.safeGroupDefaultStatus(o).toLowerCase();
            if (y || !u) {
              var f = s[d].closest(".ot-toggle");
              f &&
                (f.classList.add("ot-hide-tgl"),
                f.querySelector("input").setAttribute("aria-hidden", !0));
            }
            u && (y && Lt.setAlwaysActive(e), Lt.setInputID(s[d], n, l, a, r));
          }
      }),
      (_t.prototype.setAlwaysActive = function (e, t) {
        void 0 === t && (t = !1);
        var o = je.preferenceCenterGroup.name,
          n = pe.BannerVariables.domainData;
        if ("otPcPopup" === o || "otPcTab" === o || t)
          e.querySelector(U.P_Tgl_Cntr).insertAdjacentElement(
            "afterbegin",
            ye(
              "<div className='ot-always-active'>" +
                n.AlwaysActiveText +
                "</div>",
              "ce"
            ).el
          );
        else {
          var r = e.querySelector(U.P_Category_Header);
          !K.isV2Template &&
            n.PCenterEnableAccordion &&
            (r = e.querySelector(U.P_Arrw_Cntr)),
            ye(r).el.insertAdjacentElement(
              "afterend",
              ye(
                "<div className='ot-always-active'>" +
                  n.AlwaysActiveText +
                  "</div>",
                "ce"
              ).el
            );
        }
        if (n.PCenterEnableAccordion) {
          var s = e.querySelector(U.P_Acc_Header);
          s && s.classList.add("ot-always-active-group");
        } else {
          var i = e.querySelector("" + U.P_Desc_Container);
          i && i.classList.add("ot-always-active-group"),
            e.classList.add("ot-always-active-group");
        }
      }),
      (_t.prototype.setInputID = function (e, t, o, n, r) {
        ye(e).attr("id", t),
          ye(e).attr("name", t),
          ye(e).data("optanonGroupId", o),
          W.setCheckedAttribute(null, e, n),
          ye(e).attr("aria-labelledby", r);
      }),
      _t);
  function _t() {}
  var Vt,
    Et =
      ((Dt.prototype.insertAlertHtml = function () {
        function e(e) {
          return a.querySelector(e);
        }
        var t,
          o = this,
          n = pe.BannerVariables.domainData,
          r = pe.BannerVariables.commonData,
          s = [
            {
              type: "purpose",
              titleKey: "BannerPurposeTitle",
              descriptionKey: "BannerPurposeDescription",
              identifier: "purpose-option",
            },
            {
              type: "feature",
              titleKey: "BannerFeatureTitle",
              descriptionKey: "BannerFeatureDescription",
              identifier: "feature-option",
            },
            {
              type: "information",
              titleKey: "BannerInformationTitle",
              descriptionKey: "BannerInformationDescription",
              identifier: "information-option",
            },
          ],
          i =
            n.BannerPurposeTitle ||
            n.BannerPurposeDescription ||
            n.BannerFeatureTitle ||
            n.BannerFeatureDescription ||
            n.BannerInformationTitle ||
            n.BannerInformationDescription,
          a = document.createDocumentFragment();
        if (je.bannerGroup) {
          var l = je.bannerGroup.name,
            c = document.createElement("div");
          ye(c).html(je.bannerGroup.html);
          var d,
            u = c.querySelector("#onetrust-banner-sdk");
          K.fp.CookieV2BannerFocus && u.setAttribute("tabindex", "0"),
            pe.BannerVariables.commonData.useRTL && ye(u).attr("dir", "rtl"),
            "IAB2" === pe.iabType &&
              n.BannerDPDDescription.length &&
              ye(u).addClass("ot-iab-2");
          var p = n.BannerPosition;
          p &&
            ("bottom-left" === p
              ? ye(u).addClass("ot-bottom-left")
              : "bottom-right" === p
              ? ye(u).addClass("ot-bottom-right")
              : ye(u).addClass(p)),
            ye(a).append(u),
            n.BannerTitle
              ? ye(e("#onetrust-policy-title")).html(n.BannerTitle)
              : ye(e("#onetrust-policy")).el.removeChild(
                  ye(e("#onetrust-policy-title")).el
                ),
            ye(e("#onetrust-policy-text")).html(n.AlertNoticeText),
            "IAB2" === n.IabType && n.BannerDPDDescription.length
              ? (ye(e(".ot-dpd-container .ot-dpd-title")).html(
                  n.BannerDPDTitle
                ),
                ye(e(".ot-dpd-container .ot-dpd-desc")).html(
                  n.BannerDPDDescription.join(",&nbsp;")
                ))
              : W.removeChild(e(".ot-dpd-container")),
            "IAB2" === pe.iabType &&
              n.BannerAdditionalDescription.trim() &&
              this.setAdditionalDesc(e);
          var k =
            "IAB2" === n.IabType && n.BannerDPDDescription.length
              ? ye(e(".ot-dpd-container .ot-dpd-desc"))
              : ye(e("#onetrust-policy-text"));
          n.IsIabEnabled &&
            n.BannerIABPartnersLink &&
            k.append(
              '<a className="onetrust-vendors-list-handler" role="button" href="javascript:void(0)">\n                ' +
                n.BannerIABPartnersLink +
                "\n                </a>"
            ),
            r.showBannerAcceptButton
              ? (ye(e("#onetrust-accept-btn-handler")).html(
                  n.AlertAllowCookiesText
                ),
                "otFloatingRounded" !== l ||
                  r.showBannerCookieSettings ||
                  n.BannerShowRejectAllButton ||
                  ye(e("#onetrust-accept-btn-handler").parentElement).addClass(
                    "accept-btn-only"
                  ))
              : e("#onetrust-accept-btn-handler").parentElement.removeChild(
                  e("#onetrust-accept-btn-handler")
                ),
            n.BannerShowRejectAllButton && n.BannerRejectAllButtonText.trim()
              ? (ye(e("#onetrust-reject-all-handler")).html(
                  n.BannerRejectAllButtonText
                ),
                e("#onetrust-button-group-parent").classList.add(
                  "has-reject-all-button"
                ))
              : e("#onetrust-reject-all-handler").parentElement.removeChild(
                  e("#onetrust-reject-all-handler")
                ),
            r.showBannerCookieSettings
              ? (ye(e("#onetrust-pc-btn-handler")).html(n.AlertMoreInfoText),
                n.BannerSettingsButtonDisplayLink &&
                  e("#onetrust-pc-btn-handler").classList.add(
                    "cookie-setting-link"
                  ),
                "otFloatingRounded" !== l ||
                  r.showBannerAcceptButton ||
                  ye(e("#onetrust-pc-btn-handler")).addClass(
                    "cookie-settings-btn-only"
                  ))
              : e("#onetrust-pc-btn-handler").parentElement.removeChild(
                  e("#onetrust-pc-btn-handler")
                );
          var h =
            !r.showBannerAcceptButton &&
            !r.showBannerCookieSettings &&
            !n.BannerShowRejectAllButton;
          h &&
            e("#onetrust-button-group-parent").parentElement.removeChild(
              e("#onetrust-button-group-parent")
            );
          var b = n.showBannerCloseButton;
          if (
            ((d = ye(((t = ".banner-close-button"), a.querySelectorAll(t))).el),
            b)
          )
            for (
              n.BannerCloseButtonText ||
                (n.BannerCloseButtonText = "Close Cookie Banner"),
                y = 0;
              y < d.length;
              y++
            )
              ye(d[y]).el.setAttribute("aria-label", n.BannerCloseButtonText);
          else
            for (var y = 0; y < d.length; y++)
              ye(d[y].parentElement).el.removeChild(d[y]);
          if (
            ("otFlat" === l &&
              ("IAB2" === pe.iabType &&
                (ye(e("#onetrust-group-container")).removeClass("ot-sdk-eight"),
                r.showBannerAcceptButton &&
                  e("#onetrust-button-group").insertAdjacentElement(
                    "afterbegin",
                    e("#onetrust-accept-btn-handler")
                  ),
                r.showBannerCookieSettings &&
                  e("#onetrust-button-group").insertAdjacentElement(
                    "beforeend",
                    e("#onetrust-pc-btn-handler")
                  )),
              b && !h && "IAB2" === pe.iabType
                ? ye(e("#onetrust-group-container")).addClass("ot-sdk-nine")
                : b && h
                ? ye(e("#onetrust-group-container")).addClass("ot-sdk-eleven")
                : !b && h
                ? ye(e("#onetrust-group-container")).addClass("ot-sdk-twelve")
                : b ||
                  h ||
                  "IAB2" !== pe.iabType ||
                  (ye(e("#onetrust-group-container")).addClass("ot-sdk-ten"),
                  ye(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"),
                  ye(e("#onetrust-button-group-parent")).removeClass(
                    "ot-sdk-three"
                  ))),
            b && "otFloatingFlat" === l && "IAB2" === pe.iabType)
          ) {
            var f = e(".banner-close-btn-container");
            f.parentElement.removeChild(f),
              ye(u).el.insertAdjacentElement("afterBegin", f);
          }
          if (i)
            "otFloatingRoundedIcon" === l
              ? this.setFloatingRoundedIconBannerCmpOptions(e, s)
              : this.setCmpBannerOptions(e, s),
              ye(window).on("resize", function () {
                window.innerWidth <= 896 && o.setBannerOptionContent();
              });
          else {
            var g = ye(e("#banner-options")).el;
            "otFloatingFlat" === je.bannerGroup.name &&
              (g = ye(e(".banner-options-card")).el),
              g.parentElement.removeChild(g);
          }
        }
        var m = document.createElement("div");
        ye(m).append(a),
          pe.BannerVariables.ignoreInjectingHtmlCss ||
            (ye("#onetrust-consent-sdk").append(m.firstChild),
            i && this.setBannerOptionContent());
        var C = ye("#onetrust-group-container").el,
          v = ye("#onetrust-button-group-parent").el;
        (C.length && C[0].clientHeight) < (v.length && v[0].clientHeight)
          ? ye("#onetrust-banner-sdk").removeClass("vertical-align-content")
          : ye("#onetrust-banner-sdk").addClass("vertical-align-content");
        var P = document.querySelector(
            "#onetrust-button-group-parent button:first-of-type"
          ),
          A = document.querySelector(
            "#onetrust-button-group-parent button:last-of-type"
          );
        A &&
          P &&
          1 < Math.abs(A.offsetTop - P.offsetTop) &&
          ye("#onetrust-banner-sdk").addClass("ot-buttons-fw");
      }),
      (Dt.prototype.setCmpBannerOptions = function (s, e) {
        var i = pe.BannerVariables.domainData,
          a = ye(s("#banner-options .banner-option")).el.cloneNode(!0);
        ye(s("#banner-options")).html("");
        var l = 1;
        e.forEach(function (e) {
          var t = a.cloneNode(!0),
            o = i[e.titleKey],
            n = i[e.descriptionKey];
          if (o || n) {
            (t.querySelector(".banner-option-header :first-child").innerHTML =
              o),
              t
                .querySelector("input")
                .setAttribute("aria-controls", "option-details-" + l),
              (t.querySelector("input").id = e.identifier),
              t.querySelector("label").setAttribute("for", e.identifier);
            var r = t.querySelector(".banner-option-details");
            n
              ? (r.setAttribute("id", "option-details-" + l++),
                (r.innerHTML = n))
              : r.parentElement.removeChild(r),
              ye(s("#banner-options")).el.appendChild(t);
          }
        });
      }),
      (Dt.prototype.setFloatingRoundedIconBannerCmpOptions = function (s, e) {
        var i = pe.BannerVariables.domainData,
          a = ye(s("#banner-options input")).el.cloneNode(!0),
          l = ye(s("#banner-options label")).el.cloneNode(!0),
          n = ye(s(".banner-option-details")).el.cloneNode(!0);
        ye(s("#banner-options")).html(""),
          e.forEach(function (e) {
            var t = a.cloneNode(!0),
              o = l.cloneNode(!0),
              n = i[e.titleKey],
              r = i[e.descriptionKey];
            (n || r) &&
              (t.setAttribute("id", e.identifier),
              o.setAttribute("for", e.identifier),
              (o.querySelector(".banner-option-header :first-child").innerHTML =
                n),
              ye(s("#banner-options")).el.appendChild(t),
              ye(s("#banner-options")).el.appendChild(o));
          }),
          e.forEach(function (e) {
            var t = i[e.descriptionKey];
            if (t) {
              var o = n.cloneNode(!0);
              (o.innerHTML = t),
                o.classList.add(e.identifier),
                ye(s("#banner-options")).el.appendChild(o);
            }
          });
      }),
      (Dt.prototype.setBannerOptionContent = function () {
        ("otFlat" !== je.bannerGroup.name &&
          "otFloatingRoundedIcon" !== je.bannerGroup.name) ||
          setTimeout(function () {
            if (window.innerWidth < 769) {
              var e = ye("#banner-options").el[0];
              ye("#onetrust-group-container").el[0].appendChild(e);
            } else (e = ye("#banner-options").el[0]), "otFloatingRoundedIcon" === je.bannerGroup.name ? ye(".banner-content").el[0].appendChild(e) : ye("#onetrust-banner-sdk").el[0].appendChild(e);
          });
      }),
      (Dt.prototype.setAdditionalDesc = function (e) {
        var t = pe.BannerVariables.domainData,
          o = t.BannerAdditionalDescPlacement,
          n = document.createElement("span");
        n.classList.add("ot-b-addl-desc"),
          (n.innerHTML = t.BannerAdditionalDescription);
        var r = e("#onetrust-policy-text");
        o === Z.AfterTitle
          ? r.insertAdjacentElement("beforeBegin", n)
          : o === Z.AfterDescription
          ? r.insertAdjacentElement("afterEnd", n)
          : o === Z.AfterDPD &&
            e(".ot-dpd-container .ot-dpd-desc").insertAdjacentElement(
              "beforeEnd",
              n
            );
      }),
      Dt);
  function Dt() {}
  var Gt,
    Ht =
      ((Ot.prototype.initCommonEventHandlers = function () {
        ye(document).on(
          "click",
          ".ot-sdk-show-settings",
          this.cookieSettingsBoundListner
        );
      }),
      (Ot.prototype.initFlgtCkStgBtnEventHandlers = function () {
        ye(".ot-floating-button__open").on(
          "click",
          this.floatingCookieSettingOpenBtnClicked
        ),
          ye(".ot-floating-button__close").on(
            "click",
            this.floatingCookieSettingCloseBtnClicked
          );
      }),
      (Ot.prototype.floatingCookieSettingOpenBtnClicked = function (e) {
        ye(Gt.fltgBtnSltr).addClass("ot-pc-open"),
          ye(Gt.fltgBtnFSltr).attr("aria-hidden", "true"),
          ye(Gt.fltgBtnBSltr).attr("aria-hidden", ""),
          Fe.triggerGoogleAnalyticsEvent(
            Ue,
            "Floating Cookie Settings Open Button",
            void 0,
            void 0
          ),
          Gt.showCookieSettingsHandler(e);
      }),
      (Ot.prototype.floatingCookieSettingCloseBtnClicked = function (e) {
        Fe.triggerGoogleAnalyticsEvent(
          Ue,
          "Floating Cookie Settings Close Button",
          void 0,
          void 0
        ),
          Gt.hideCookieSettingsHandler(e);
      }),
      (Ot.prototype.initBannerEventHandlers = function () {
        ye(document).on(
          "click",
          "#onetrust-banner-sdk .onetrust-close-btn-handler",
          this.bannerCloseBoundListener
        ),
          ye(document).on(
            "click",
            ".optanon-show-settings",
            this.showCookieSettingsHandler.bind(this)
          ),
          ye(document).on(
            "click",
            ".optanon-toggle-display",
            this.showCookieSettingsHandler.bind(this)
          ),
          ye(document).on(
            "click",
            "#onetrust-pc-btn-handler",
            this.showCookieSettingsHandler.bind(this)
          ),
          ye(document).on(
            "click",
            "#onetrust-accept-btn-handler",
            Ct.allowAllEventHandler.bind(this, !1)
          ),
          ye(document).on(
            "click",
            "#onetrust-reject-all-handler",
            Ct.rejectAllEventHandler.bind(this, !1)
          ),
          "otFloatingRoundedIcon" === je.bannerGroup.name &&
            ye(document).on(
              "click",
              "#onetrust-banner-sdk .banner-option-input",
              this.toggleBannerOptions
            );
      }),
      (Ot.prototype.initialiseLegIntBtnHandlers = function () {
        ye(document).on(
          "click",
          ".ot-obj-leg-btn-handler",
          this.onLegIntButtonClick
        ),
          ye(document).on(
            "click",
            ".ot-remove-objection-handler",
            this.onLegIntButtonClick
          );
      }),
      (Ot.prototype.initialiseAddtlVenHandler = function () {
        ye("#onetrust-pc-sdk #ot-addtl-venlst").on(
          "click",
          this.selectVendorsGroupHandler
        ),
          ye("#onetrust-pc-sdk #ot-selall-adtlven-handler").on(
            "click",
            this.selAllAdtlVenHandler
          );
      }),
      (Ot.prototype.initialiseConsentNoticeHandlers = function () {
        var t = 37,
          o = 39;
        if (
          ("otPcTab" === je.preferenceCenterGroup.name &&
            this.categoryMenuSwitchHandler(),
          ye(document).on(
            "click",
            "#onetrust-pc-sdk .onetrust-close-btn-handler",
            this.bannerCloseBoundListener
          ),
          ye(document).on(
            "click",
            "#accept-recommended-btn-handler",
            Ct.allowAllEventHandler.bind(this, !0)
          ),
          ye(document).on(
            "click",
            ".ot-pc-refuse-all-handler",
            Ct.rejectAllEventHandler.bind(this, !0)
          ),
          ye(document).on(
            "click",
            "#close-pc-btn-handler",
            this.hideCookieSettingsHandler
          ),
          ye(document).on("keydown", function (e) {
            var t = document.getElementById("onetrust-pc-sdk");
            if (
              27 === e.keyCode &&
              t &&
              "none" !== window.getComputedStyle(t).display
            ) {
              var o = ye("#onetrust-pc-sdk " + U.P_Fltr_Modal).el[0];
              "block" === o.style.display || "0px" < o.style.width
                ? (Gt.closeFilter(),
                  ye("#onetrust-pc-sdk #filter-btn-handler").focus())
                : Gt.hideCookieSettingsHandler();
            }
          }),
          ye(document).on(
            "click",
            "#vendor-close-pc-btn-handler",
            this.hideCookieSettingsHandler
          ),
          ye("#onetrust-pc-sdk").on(
            "click",
            ".category-switch-handler",
            this.toggleV2Category
          ),
          ye("#onetrust-pc-sdk").on(
            "click",
            ".cookie-subgroup-handler",
            this.toggleSubCategory
          ),
          ye("#onetrust-pc-sdk").on(
            "keydown",
            ".category-menu-switch-handler",
            function (e) {
              "otPcTab" === je.preferenceCenterGroup.name &&
                ((e.keyCode !== t && e.keyCode !== o) ||
                  (pe.BannerVariables.domainData.PCTemplateUpgrade
                    ? Gt.changeSelectedTabV2(e)
                    : Gt.changeSelectedTab(e)));
            }
          ),
          ye("#onetrust-pc-sdk").on(
            "click",
            U.P_Category_Item + " > input:first-child",
            Gt.onCategoryItemToggle.bind(this)
          ),
          ye("#onetrust-pc-sdk").on(
            "click",
            ".banner-option-input",
            Gt.toggleAccordionStatus.bind(this)
          ),
          pe.BannerVariables.commonData.showCookieList &&
            (ye("#onetrust-pc-sdk").on(
              "click",
              ".category-host-list-handler",
              this.loadCookieList
            ),
            pe.BannerVariables.commonData.allowHostOptOut &&
              (ye("#onetrust-pc-sdk #select-all-hosts-groups-handler").on(
                "click",
                this.selectAllHostsGroupsHandler
              ),
              ye("#onetrust-pc-sdk " + U.P_Host_Cntr).on(
                "click",
                this.selectHostsGroupHandler
              ))),
          pe.BannerVariables.domainData.IsIabEnabled &&
            (ye("#onetrust-pc-sdk").on(
              "click",
              ".category-vendors-list-handler",
              this.showVendorsList
            ),
            ye("#onetrust-pc-sdk " + U.P_Vendor_Container).on(
              "click",
              this.selectVendorsGroupHandler
            ),
            pe.BannerVariables.domainData.UseGoogleVendors ||
              this.bindSelAllHandlers(),
            this.initialiseLegIntBtnHandlers()),
          pe.BannerVariables.domainData.IsIabEnabled ||
            pe.BannerVariables.commonData.showCookieList)
        ) {
          ye(document).on("click", ".back-btn-handler", this.backBtnHandler),
            ye("#onetrust-pc-sdk #vendor-search-handler").on(
              "keyup",
              function (e) {
                var t = e.target.value.trim();
                pe.BannerVariables.isCookieList
                  ? rt.searchHostList(t)
                  : (rt.loadVendorList(t, []),
                    pe.BannerVariables.domainData.UseGoogleVendors &&
                      rt.searchGoogleVendors(t));
              }
            ),
            ye("#onetrust-pc-sdk #filter-btn-handler").on(
              "click",
              this.toggleVendorFiltersHandler
            ),
            ye("#onetrust-pc-sdk #filter-apply-handler").on(
              "click",
              this.applyFilterHandler
            ),
            (!K.isV2Template &&
              "otPcPopup" !== je.preferenceCenterGroup.name) ||
              ye("#onetrust-pc-sdk #filter-cancel-handler").on(
                "click",
                this.cancelFilterHandler
              ),
            (!K.isV2Template &&
              "otPcPopup" === je.preferenceCenterGroup.name) ||
              ye("#onetrust-pc-sdk #clear-filters-handler").on(
                "click",
                this.clearFiltersHandler
              ),
            K.isV2Template
              ? ye("#onetrust-pc-sdk #filter-cancel-handler").on(
                  "keydown",
                  function (e) {
                    (9 !== e.keyCode && "tab" !== e.code) ||
                      e.shiftKey ||
                      (e.preventDefault(),
                      ye(
                        "#onetrust-pc-sdk #clear-filters-handler"
                      ).el[0].focus());
                  }
                )
              : ye("#onetrust-pc-sdk #filter-apply-handler").on(
                  "keydown",
                  function (e) {
                    (9 !== e.keyCode && "tab" !== e.code) ||
                      e.shiftKey ||
                      (e.preventDefault(),
                      ye(
                        "#onetrust-pc-sdk .category-filter-handler"
                      ).el[0].focus());
                  }
                );
          var e = ye("#onetrust-pc-sdk .category-filter-handler").el;
          ye(e[0]).on("keydown", function (e) {
            (9 !== e.keyCode && "tab" !== e.code) ||
              !e.shiftKey ||
              (e.preventDefault(),
              ye("#onetrust-pc-sdk #filter-apply-handler").el[0].focus());
          });
        }
      }),
      (Ot.prototype.bindSelAllHandlers = function () {
        ye("#onetrust-pc-sdk #select-all-vendor-leg-handler").on(
          "click",
          this.selectAllVendorsLegIntHandler
        ),
          ye("#onetrust-pc-sdk #select-all-vendor-groups-handler").on(
            "click",
            this.SelectAllVendorConsentHandler
          );
      }),
      (Ot.prototype.hideCookieSettingsHandler = function (e) {
        void 0 === e && (e = window.event),
          Fe.triggerGoogleAnalyticsEvent(
            Ue,
            "Preferences Close Button",
            void 0,
            void 0
          ),
          ht.hideConsentNoticeV2(),
          Gt.getResizeElement().removeEventListener(
            "resize",
            Gt.setCenterLayoutFooterHeight
          ),
          window.removeEventListener("resize", Gt.setCenterLayoutFooterHeight),
          (!K.isV2Template && "otPcPopup" !== je.preferenceCenterGroup.name) ||
            ye("#onetrust-pc-sdk #filter-cancel-handler").el[0].click(),
          "otPcList" === je.preferenceCenterGroup.name &&
            ye("#onetrust-pc-sdk " + U.P_Content).removeClass("ot-hide"),
          Gt.hideVendorsList();
        var t = !1,
          o = document.getElementById("onetrust-banner-sdk");
        return (
          o
            ? o.getAttribute("style") &&
              (t = -1 !== o.getAttribute("style").indexOf("display:none"))
            : (t = !0),
          je.mobileSDKEnabled &&
            (pe.isAlertBoxClosedAndValid() || t) &&
            (e && e.preventDefault(), Gt.closePreferenceCenter()),
          je.cookieSettingsButtonGroup &&
            (ye(Gt.fltgBtnSltr).removeClass("ot-pc-open"),
            ye(Gt.fltgBtnFSltr).attr("aria-hidden", ""),
            ye(Gt.fltgBtnBSltr).attr("aria-hidden", "true")),
          !1
        );
      }),
      (Ot.prototype.selectAllHostsGroupsHandler = function (t) {
        var e = ye("#onetrust-pc-sdk #" + U.P_Sel_All_Host_El).el[0],
          o = e.classList.contains("line-through"),
          n = ye("#onetrust-pc-sdk .host-checkbox-handler").el;
        W.setCheckedAttribute(
          "#select-all-hosts-groups-handler",
          null,
          t.target.checked
        );
        for (var r = 0; r < n.length; r++)
          n[r].getAttribute("disabled") ||
            W.setCheckedAttribute(null, n[r], t.target.checked);
        pe.BannerVariables.optanonHostList.forEach(function (e) {
          Be.updateHostStatus(e, t.target.checked);
        }),
          o && e.classList.remove("line-through");
      }),
      (Ot.prototype.selectHostsGroupHandler = function (e) {
        Gt.toggleAccordionStatus(e);
        var t,
          o = e.target.getAttribute("hostId");
        null !== o &&
          (pe.BannerVariables.optanonHostList.some(function (e) {
            if (e.HostId === o) return (t = e), !0;
          }),
          W.setCheckedAttribute(null, e.target, e.target.checked),
          Gt.toggleHostStatus(t, e.target.checked));
      }),
      (Ot.prototype.onCategoryItemToggle = function (e) {
        "otPcList" === je.preferenceCenterGroup.name &&
          this.setPcListContainerHeight(),
          Gt.toggleAccordionStatus(e);
      }),
      (Ot.prototype.toggleAccordionStatus = function (e) {
        var t = e.target;
        t &&
          "checkbox" === t.type &&
          ("true" === t.getAttribute("ot-accordion") ||
            t.classList.contains(U.P_Host_Bx) ||
            t.classList.contains(U.P_Ven_Bx)) &&
          t.setAttribute("aria-expanded", t.checked);
      }),
      (Ot.prototype.toggleHostStatus = function (e, t) {
        var o = t ? "Preferences Toggle On" : "Preferences Toggle Off";
        Fe.triggerGoogleAnalyticsEvent(Ue, o, e.HostName, void 0),
          Be.updateHostStatus(e, t);
      }),
      (Ot.prototype.toggleBannerOptions = function () {
        var e = ye(this).hasClass("chk");
        ye(
          'input[name="' + ye(this).attr("name") + '"]:not(:checked)'
        ).removeClass("chk"),
          ye(".banner-option-input").each(function (e) {
            ye(e).el.setAttribute("aria-expanded", !1);
          }),
          e
            ? (ye(this).removeClass("chk"),
              ye(this).prop("checked", !1),
              ye(this).attr("aria-expanded", !1))
            : (ye(this).addClass("chk"),
              ye(this).prop("checked", !0),
              ye(this).attr("aria-expanded", !0));
      }),
      (Ot.prototype.bannerCloseButtonHandler = function (e) {
        if (e && e.target && e.target.className) {
          var t = e.target.className;
          -1 < t.indexOf("save-preference-btn-handler")
            ? ((pe.BannerVariables.bannerCloseSource = L.ConfirmChoiceButton),
              Fe.triggerGoogleAnalyticsEvent(
                Ue,
                "Preferences Save Settings",
                void 0,
                void 0
              ))
            : -1 < t.indexOf("banner-close-button") &&
              ((pe.BannerVariables.bannerCloseSource = L.BannerCloseButton),
              Fe.triggerGoogleAnalyticsEvent(
                Ue,
                "Banner Close Button",
                void 0,
                void 0
              ));
        }
        return Gt.hideVendorsList(), Ct.bannerCloseButtonHandler();
      }),
      (Ot.prototype.onLegIntButtonClick = function (e) {
        if (e) {
          var t = event.currentTarget,
            o = "true" === t.parentElement.getAttribute("is-vendor"),
            n = t.parentElement.getAttribute("data-group-id"),
            r = !t.classList.contains("ot-leg-int-enabled");
          if (o) Gt.onVendorToggle(n, te.LI);
          else {
            var s = Be.getGroupById(n);
            s.Parent
              ? Gt.updateSubGroupToggles(s, r, !0)
              : Gt.updateGroupToggles(s, r, !0);
          }
          Xe.updateLegIntBtnElement(t.parentElement, r);
        }
      }),
      (Ot.prototype.updateGroupToggles = function (e, t, o) {
        Be.toggleGroupHosts(e, t),
          (e.IsLegIntToggle = o),
          Xe.toggleGrpStatus(e, t),
          e.SubGroups && e.SubGroups.length && Xe.toogleAllSubGrpElements(e, t),
          this.allowAllVisible(Xe.setAllowAllButton()),
          (e.IsLegIntToggle = !1);
      }),
      (Ot.prototype.updateSubGroupToggles = function (e, t, o) {
        Be.toggleGroupHosts(e, t);
        var n = Be.getGroupById(e.Parent);
        (e.IsLegIntToggle = o), (n.IsLegIntToggle = e.IsLegIntToggle);
        var r = Xe.isGroupActive(n);
        t
          ? (Xe.toggleGrpStatus(e, !0),
            Xe.isAllSubgroupsEnabled(n) &&
              !r &&
              (Xe.toggleGrpStatus(n, !0),
              Be.toggleGroupHosts(n, t),
              Xe.toggleGroupHtmlElement(
                e,
                e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""),
                !0
              )))
          : (Xe.toggleGrpStatus(e, !1),
            Xe.isAllSubgroupsDisabled(n) && r
              ? (Xe.toggleGrpStatus(n, !1),
                Be.toggleGroupHosts(n, t),
                Xe.toggleGroupHtmlElement(
                  e,
                  e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""),
                  t
                ))
              : (Xe.toggleGrpStatus(n, !1),
                Be.toggleGroupHosts(n, !1),
                Xe.toggleGroupHtmlElement(
                  e,
                  e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""),
                  !1
                ))),
          this.allowAllVisible(Xe.setAllowAllButton()),
          (e.IsLegIntToggle = !1),
          (n.IsLegIntToggle = e.IsLegIntToggle);
      }),
      (Ot.prototype.hideCategoryContainer = function (e) {
        void 0 === e && (e = !1);
        var t = je.preferenceCenterGroup.name,
          o = K.isV2Template,
          n = pe.BannerVariables;
        n.isCookieList = e;
        var r = n.domainData;
        r.PCTemplateUpgrade
          ? ye("#onetrust-pc-sdk " + U.P_Content).addClass("ot-hide")
          : ye("#onetrust-pc-sdk .ot-main-content").hide(),
          ye("#onetrust-pc-sdk " + U.P_Vendor_List).removeClass("ot-hide"),
          "otPcPopup" !== t &&
            "otPcList" !== t &&
            ye("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(),
          "otPcList" === t && (ye("#onetrust-pc-sdk").el[0].style.height = ""),
          e
            ? (ye(U.P_Vendor_List + " #select-all-text-container").show(
                "inline-block"
              ),
              ye("#onetrust-pc-sdk " + U.P_Host_Cntr).show(),
              n.commonData.allowHostOptOut
                ? ye("#onetrust-pc-sdk #" + U.P_Sel_All_Host_El).show(
                    "inline-block"
                  )
                : ye("#onetrust-pc-sdk #" + U.P_Sel_All_Host_El).hide(),
              ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Leg_El).hide(),
              ye("#onetrust-pc-sdk " + U.P_Leg_Header).hide(),
              o || ye("#onetrust-pc-sdk " + U.P_Leg_Select_All).hide(),
              ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Consent_El).hide(),
              ye("#onetrust-pc-sdk  " + U.P_Vendor_Container).hide(),
              r.UseGoogleVendors && ye("#onetrust-pc-sdk .ot-acc-cntr").hide(),
              ye("#onetrust-pc-sdk " + U.P_Vendor_List).addClass(U.P_Host_UI),
              ye("#onetrust-pc-sdk " + U.P_Vendor_Content).addClass(
                U.P_Host_Cnt
              ))
            : (ye("#onetrust-pc-sdk " + U.P_Vendor_Container).show(),
              ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Consent_El).show(
                "inline-block"
              ),
              r.UseGoogleVendors && ye("#onetrust-pc-sdk .ot-acc-cntr").show(),
              pe.legIntSettings.PAllowLI && "IAB2" === pe.iabType
                ? (ye("#onetrust-pc-sdk " + U.P_Select_Cntr).show(
                    K.isV2Template ? void 0 : "inline-block"
                  ),
                  ye("#onetrust-pc-sdk " + U.P_Leg_Select_All).show(
                    "inline-block"
                  ),
                  ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Leg_El).show(
                    "inline-block"
                  ),
                  ye(U.P_Vendor_List + " #select-all-text-container").hide(),
                  pe.legIntSettings.PShowLegIntBtn
                    ? (ye("#onetrust-pc-sdk " + U.P_Leg_Header).hide(),
                      ye(
                        "#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Leg_El
                      ).hide())
                    : ye("#onetrust-pc-sdk " + U.P_Leg_Header).show())
                : (ye("#onetrust-pc-sdk " + U.P_Select_Cntr).show(),
                  ye(U.P_Vendor_List + " #select-all-text-container").show(
                    "inline-block"
                  ),
                  ye("#onetrust-pc-sdk " + U.P_Leg_Select_All).hide(),
                  ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Leg_El).hide()),
              ye("#onetrust-pc-sdk #" + U.P_Sel_All_Host_El).hide(),
              ye("#onetrust-pc-sdk " + U.P_Host_Cntr).hide(),
              ye("#onetrust-pc-sdk " + U.P_Vendor_List).removeClass(
                U.P_Host_UI
              ),
              ye("#onetrust-pc-sdk " + U.P_Vendor_Content).removeClass(
                U.P_Host_Cnt
              )),
          ht.setFilterList(e);
      }),
      (Ot.prototype.showAllVendors = function () {
        return l(this, void 0, void 0, function () {
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, Gt.fetchAndSetupPC()];
              case 1:
                return (
                  e.sent(),
                  Gt.showVendorsList(null, !0),
                  [4, Gt.showCookieSettingsHandler()]
                );
              case 2:
                return e.sent(), [2];
            }
          });
        });
      }),
      (Ot.prototype.fetchAndSetupPC = function () {
        return l(this, void 0, void 0, function () {
          var t, o, n;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return K.moduleInitializer.IsSuppressPC &&
                  0 === ye("#onetrust-pc-sdk").length
                  ? [4, pe.getPcContent()]
                  : [3, 2];
              case 1:
                (t = e.sent()),
                  (je.preferenceCenterGroup = {
                    name: t.name,
                    html: atob(t.html),
                    css: t.css,
                  }),
                  (o = pe.BannerVariables.domainData),
                  (K.isV2Template =
                    o.PCTemplateUpgrade &&
                    /otPcPanel|otPcCenter|otPcTab/.test(t.name)),
                  ((n = document.getElementById("onetrust-style")).innerHTML +=
                    je.preferenceCenterGroup.css),
                  (n.innerHTML += dt.addCustomPreferenceCenterCSS()),
                  Lt.insertConsentNoticeHtml(),
                  Gt.initialiseConsentNoticeHandlers(),
                  o.IsIabEnabled && rt.InitializeVendorList(),
                  (e.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (Ot.prototype.showVendorsList = function (e, t) {
        if ((void 0 === t && (t = !1), Gt.hideCategoryContainer(!1), !t)) {
          var o = this.getAttribute("data-parent-id");
          if (o) {
            var n = Be.getGroupById(o);
            if (n) {
              var r = h(n.SubGroups, [n]).reduce(function (e, t) {
                return (
                  -1 < B.indexOf(t.Type) && e.push(O.getGroupIdForCookie(t)), e
                );
              }, []);
              pe.BannerVariables.filterByIABCategories = h(
                pe.BannerVariables.filterByIABCategories,
                r
              );
            }
          }
        }
        return (
          ye("#onetrust-pc-sdk #filter-count").text(
            pe.BannerVariables.filterByIABCategories.length.toString()
          ),
          rt.loadVendorList("", pe.BannerVariables.filterByIABCategories),
          pe.BannerVariables.domainData.UseGoogleVendors &&
            (Gt.vendorDomInitialized
              ? rt.resetAddtlVendors()
              : rt.initGoogleVendors()),
          Gt.vendorDomInitialized ||
            ((Gt.vendorDomInitialized = !0),
            Gt.initialiseLegIntBtnHandlers(),
            pe.BannerVariables.domainData.UseGoogleVendors &&
              (Gt.initialiseAddtlVenHandler(), Gt.bindSelAllHandlers())),
          tt.updateFilterSelection(!1),
          Gt.setBackButtonFocus(),
          (pe.pcLayer = z.VendorList),
          e && ht.setBannerFocus(ht.getPCFocusableElement(!1), 0, null, !1),
          !1
        );
      }),
      (Ot.prototype.loadCookieList = function () {
        (pe.BannerVariables.filterByCategories = []),
          Gt.hideCategoryContainer(!0);
        var e = this.getAttribute("data-parent-id"),
          t = Be.getGroupById(e);
        return (
          pe.BannerVariables.filterByCategories.push(e),
          t.SubGroups.length &&
            t.SubGroups.forEach(function (e) {
              if (-1 === B.indexOf(e.Type)) {
                var t = O.getGroupIdForCookie(e);
                pe.BannerVariables.filterByCategories.indexOf(t) < 0 &&
                  pe.BannerVariables.filterByCategories.push(t);
              }
            }),
          rt.loadHostList("", pe.BannerVariables.filterByCategories),
          ye("#onetrust-pc-sdk #filter-count").text(
            pe.BannerVariables.filterByCategories.length.toString()
          ),
          tt.updateFilterSelection(!0),
          Gt.setBackButtonFocus(),
          (pe.pcLayer = z.CookieList),
          ht.setBannerFocus(ht.getPCFocusableElement(!0), 0, null, !1),
          !1
        );
      }),
      (Ot.prototype.selectAllVendorsLegIntHandler = function (e) {
        for (
          var t = ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = ye("#onetrust-pc-sdk .vendor-leg-checkbox-handler").el,
            r = pe.BannerVariables.domainData,
            s = 0;
          s < n.length;
          s++
        )
          W.setCheckedAttribute(null, n[s], e.target.checked),
            r.PCShowConsentLabels &&
              (n[s].parentElement.querySelector(".ot-label-status").innerHTML =
                e.target.checked ? r.PCActiveText : r.PCInactiveText);
        e.target.checked
          ? (pe.BannerVariables.vendors.selectedLegIntVendors =
              pe.BannerVariables.vendors.list.map(function (e) {
                return e.vendorId + ":" + pe.vendorsSetting[e.vendorId].legInt;
              }))
          : (pe.BannerVariables.vendors.selectedLegIntVendors = []),
          o && t.classList.remove("line-through");
      }),
      (Ot.prototype.selAllAdtlVenHandler = function (e) {
        for (
          var t = ye("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0],
            o = t.classList.contains("line-through"),
            n = ye("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el,
            r = pe.BannerVariables.domainData,
            s = e.target.checked,
            i = 0;
          i < n.length;
          i++
        )
          W.setCheckedAttribute(null, n[i], s),
            r.PCShowConsentLabels &&
              (n[i].parentElement.querySelector(".ot-label-status").innerHTML =
                s ? r.PCActiveText : r.PCInactiveText);
        s
          ? r.UseGoogleVendors &&
            Object.keys(pe.addtlVendorsList).forEach(function (e) {
              pe.BannerVariables.addtlVendors.vendorSelected[e] = !0;
            })
          : (pe.BannerVariables.addtlVendors.vendorSelected = {}),
          o && t.classList.remove("line-through");
      }),
      (Ot.prototype.SelectAllVendorConsentHandler = function (e) {
        for (
          var t = ye("#onetrust-pc-sdk #" + U.P_Sel_All_Vendor_Consent_El)
              .el[0],
            o = t.classList.contains("line-through"),
            n = ye("#onetrust-pc-sdk .vendor-checkbox-handler").el,
            r = pe.BannerVariables.domainData,
            s = e.target.checked,
            i = 0;
          i < n.length;
          i++
        )
          W.setCheckedAttribute(null, n[i], s),
            r.PCShowConsentLabels &&
              (n[i].parentElement.querySelector(".ot-label-status").innerHTML =
                s ? r.PCActiveText : r.PCInactiveText);
        (pe.BannerVariables.vendors.selectedVendors = s
          ? pe.BannerVariables.vendors.list.map(function (e) {
              return e.vendorId + ":" + pe.vendorsSetting[e.vendorId].consent;
            })
          : []),
          o && t.classList.remove("line-through");
      }),
      (Ot.prototype.onVendorToggle = function (n, e) {
        var t = pe.BannerVariables.vendors,
          o = pe.BannerVariables.addtlVendors,
          r =
            e === te.LI
              ? t.selectedLegIntVendors
              : e === te.AddtlConsent
              ? []
              : t.selectedVendors,
          s = !1,
          i = Number(n);
        r.some(function (e, t) {
          var o = e.split(":");
          if (o[0] === n) return (i = t), (s = "true" === o[1]), !0;
        }),
          e === te.LI
            ? ((t.selectedLegIntVendors[i] = n + ":" + !s),
              pe.legIntSettings.PShowLegIntBtn || rt.vendorLegIntToggleEvent())
            : e === te.AddtlConsent
            ? (o.vendorSelected[n]
                ? delete o.vendorSelected[n]
                : (o.vendorSelected[n] = !0),
              rt.venAdtlSelAllTglEvent())
            : ((t.selectedVendors[i] = n + ":" + !s), rt.vendorsListEvent());
      }),
      (Ot.prototype.selectVendorsGroupHandler = function (e) {
        Gt.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
          o = e.target.getAttribute("vendorid"),
          n = e.target.getAttribute("addtl-vid");
        if (
          (t
            ? Gt.onVendorToggle(t, te.LI)
            : o
            ? Gt.onVendorToggle(o, te.Consent)
            : n && Gt.onVendorToggle(n, te.AddtlConsent),
          t || o || n)
        ) {
          W.setCheckedAttribute(null, e.target, e.target.checked);
          var r = pe.BannerVariables.domainData;
          r.PCShowConsentLabels &&
            (e.target.parentElement.querySelector(
              ".ot-label-status"
            ).innerHTML = e.target.checked ? r.PCActiveText : r.PCInactiveText);
        }
      }),
      (Ot.prototype.toggleVendorFiltersHandler = function () {
        var e = ye("#onetrust-pc-sdk " + U.P_Fltr_Modal).el[0];
        switch (je.preferenceCenterGroup.name) {
          case "otPcPanel":
          case "otPcCenter":
          case "otPcList":
          case "otPcTab":
            var t = ye("#onetrust-pc-sdk " + U.P_Triangle).el[0];
            if ("block" === e.style.display)
              ye(t).attr("style", "display:none"),
                ye(e).attr("style", "display:none");
            else {
              var o = e.querySelectorAll("[href], input, button");
              ye(t).attr("style", "display:block"),
                ye(e).attr("style", "display:block"),
                ht.setBannerFocus(o);
            }
            break;
          case "otPcPopup":
            896 < window.innerWidth || 896 < window.screen.height
              ? (e.style.width = "400px")
              : e.setAttribute("style", "height: 100%; width: 100%"),
              e.querySelector(".ot-checkbox input").focus();
            break;
          default:
            return;
        }
        K.isV2Template &&
          (ye("#onetrust-pc-sdk").addClass("ot-shw-fltr"),
          (ye("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0));
      }),
      (Ot.prototype.clearFiltersHandler = function () {
        for (
          var e = ye("#onetrust-pc-sdk " + U.P_Fltr_Modal + " input").el, t = 0;
          t < e.length;
          t++
        )
          e[t].checked && (e[t].checked = !1);
        pe.BannerVariables.isCookieList
          ? (pe.BannerVariables.filterByCategories = [])
          : (pe.BannerVariables.filterByIABCategories = []);
      }),
      (Ot.prototype.cancelFilterHandler = function () {
        pe.BannerVariables.isCookieList
          ? tt.cancelHostFilter()
          : rt.cancelVendorFilter(),
          Gt.closeFilter(),
          ye("#onetrust-pc-sdk #filter-btn-handler").focus();
      }),
      (Ot.prototype.applyFilterHandler = function () {
        var e;
        pe.BannerVariables.isCookieList
          ? ((e = tt.updateHostFilterList()), rt.loadHostList("", e))
          : ((e = rt.updateVendorFilterList()), rt.loadVendorList("", e)),
          ye("#onetrust-pc-sdk #filter-count").text(String(e.length)),
          Gt.closeFilter(),
          ye("#onetrust-pc-sdk #filter-btn-handler").focus();
      }),
      (Ot.prototype.setPcListContainerHeight = function () {
        ye("#onetrust-pc-sdk " + U.P_Content).el[0].classList.contains(
          "ot-hide"
        )
          ? (ye("#onetrust-pc-sdk").el[0].style.height = "")
          : setTimeout(function () {
              var e = window.innerHeight;
              768 <= window.innerWidth &&
                600 <= window.innerHeight &&
                (e = 0.8 * window.innerHeight),
                !ye("#onetrust-pc-sdk " + U.P_Content).el[0].scrollHeight ||
                ye("#onetrust-pc-sdk " + U.P_Content).el[0].scrollHeight >= e
                  ? (ye("#onetrust-pc-sdk").el[0].style.height = e + "px")
                  : (ye("#onetrust-pc-sdk").el[0].style.height = "auto");
            });
      }),
      (Ot.prototype.changeSelectedTab = function (e) {
        var t,
          o = ye("#onetrust-pc-sdk .category-menu-switch-handler"),
          n = 0,
          r = ye(o.el[0]);
        o.each(function (e, t) {
          ye(e).el.classList.contains(U.P_Active_Menu) &&
            ((n = t), ye(e).el.classList.remove(U.P_Active_Menu), (r = ye(e)));
        }),
          e.keyCode === J.RightArrow
            ? (t = n + 1 >= o.el.length ? ye(o.el[0]) : ye(o.el[n + 1]))
            : e.keyCode === J.LeftArrow &&
              (t = ye(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])),
          this.tabMenuToggle(t, r);
      }),
      (Ot.prototype.changeSelectedTabV2 = function (e) {
        var t,
          o = e.target.parentElement;
        e.keyCode === J.RightArrow
          ? (t = o.nextElementSibling || o.parentElement.firstChild)
          : e.keyCode === J.LeftArrow &&
            (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(), this.groupTabClick(n);
      }),
      (Ot.prototype.categoryMenuSwitchHandler = function () {
        for (
          var t = this,
            e = ye("#onetrust-pc-sdk .category-menu-switch-handler").el,
            o = 0;
          o < e.length;
          o++
        )
          e[o].addEventListener("click", this.groupTabClick),
            e[o].addEventListener("keydown", function (e) {
              if (32 === e.keyCode || "space" === e.code)
                return t.groupTabClick(e.currentTarget), e.preventDefault(), !1;
            });
      }),
      (Ot.prototype.groupTabClick = function (e) {
        var t = ye("#onetrust-pc-sdk " + U.P_Grp_Container).el[0],
          o = t.querySelector("." + U.P_Active_Menu),
          n = e.currentTarget || e,
          r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1),
          o.setAttribute("aria-selected", !1),
          o.classList.remove(U.P_Active_Menu),
          t
            .querySelector(U.P_Desc_Container + ":not(.ot-hide)")
            .classList.add("ot-hide"),
          t.querySelector("#" + r).classList.remove("ot-hide"),
          n.setAttribute("tabindex", 0),
          n.setAttribute("aria-selected", !0),
          n.classList.add(U.P_Active_Menu);
      }),
      (Ot.prototype.tabMenuToggle = function (e, t) {
        e.el.setAttribute("tabindex", 0),
          e.el.setAttribute("aria-selected", !0),
          t.el.setAttribute("tabindex", -1),
          t.el.setAttribute("aria-selected", !1),
          e.focus(),
          t.el.parentElement.parentElement
            .querySelector("" + U.P_Desc_Container)
            .classList.add("ot-hide"),
          e.el.parentElement.parentElement
            .querySelector("" + U.P_Desc_Container)
            .classList.remove("ot-hide"),
          e.el.classList.add(U.P_Active_Menu);
      }),
      (Ot.prototype.hideVendorsList = function () {
        ye("#onetrust-pc-sdk").length &&
          (pe.BannerVariables.domainData.PCTemplateUpgrade
            ? ye("#onetrust-pc-sdk " + U.P_Content).removeClass("ot-hide")
            : ye("#onetrust-pc-sdk .ot-main-content").show(),
          ye("#onetrust-pc-sdk #close-pc-btn-handler.main").show(),
          ye("#onetrust-pc-sdk " + U.P_Vendor_List).addClass("ot-hide"));
      }),
      (Ot.prototype.closeFilter = function () {
        var e = ye("#onetrust-pc-sdk " + U.P_Fltr_Modal).el[0],
          t = ye("#onetrust-pc-sdk " + U.P_Triangle).el[0];
        "otPcPopup" === je.preferenceCenterGroup.name
          ? 896 < window.innerWidth || 896 < window.screen.height
            ? (e.style.width = "0")
            : e.setAttribute("style", "height:0")
          : e.setAttribute("style", "display:none"),
          t && ye(t).attr("style", "display:none"),
          K.isV2Template && ye("#onetrust-pc-sdk").removeClass("ot-shw-fltr");
      }),
      (Ot.prototype.setBackButtonFocus = function () {
        ye("#onetrust-pc-sdk .back-btn-handler").el[0].focus();
      }),
      (Ot.prototype.setCenterLayoutFooterHeight = function () {
        var e = je.preferenceCenterGroup.name,
          t = Gt.pc;
        if ((Gt.setMainContentHeight(), "otPcTab" === e && t)) {
          var o = t.querySelectorAll("" + U.P_Desc_Container),
            n = t.querySelectorAll("li .category-menu-switch-handler");
          if (
            !t.querySelector(
              ".category-menu-switch-handler + " + U.P_Desc_Container
            ) &&
            window.innerWidth < 640
          )
            for (var r = 0; r < o.length; r++)
              n[r].insertAdjacentElement("afterend", o[r]);
          else
            t.querySelector(
              ".category-menu-switch-handler + " + U.P_Desc_Container
            ) &&
              640 < window.innerWidth &&
              ye(t.querySelector(".ot-tab-desc")).append(o);
        }
      }),
      (Ot.prototype.setMainContentHeight = function () {
        var e = this.pc,
          t = e.querySelector(".ot-pc-footer"),
          o = e.querySelector(".ot-pc-header"),
          n = e.querySelectorAll(".ot-pc-footer button"),
          r = n[n.length - 1];
        e.classList.remove("ot-ftr-stacked"),
          n[0] &&
            r &&
            1 < Math.abs(n[0].offsetTop - r.offsetTop) &&
            e.classList.add("ot-ftr-stacked"),
          (e.querySelector("" + U.P_Vendor_List).style.height =
            e.clientHeight - t.clientHeight - o.clientHeight - 3 + "px"),
          (e.querySelector("" + U.P_Content).style.height =
            e.clientHeight - t.clientHeight - o.clientHeight - 3 + "px");
      }),
      (Ot.prototype.allowAllVisible = function (e) {
        var t = pe.BannerVariables.domainData;
        e !== this.allowVisible &&
          t.Tab &&
          t.PCTemplateUpgrade &&
          (this.setMainContentHeight(), (this.allowVisible = e));
      }),
      (Ot.prototype.toggleInfoDisplay = function () {
        return l(this, void 0, void 0, function () {
          var t, o, n;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  je.cookieSettingsButtonGroup &&
                    (ye(Gt.fltgBtnSltr).addClass("ot-pc-open"),
                    ye(Gt.fltgBtnFSltr).attr("aria-hidden", "true"),
                    ye(Gt.fltgBtnBSltr).attr("aria-hidden", "")),
                  [4, Gt.fetchAndSetupPC()]
                );
              case 1:
                return (
                  e.sent(),
                  "otPcList" === je.preferenceCenterGroup.name &&
                    this.setPcListContainerHeight(),
                  (t = ye("#onetrust-pc-sdk").el[0]),
                  ye(".onetrust-pc-dark-filter").el[0].setAttribute(
                    "style",
                    ""
                  ),
                  t.setAttribute("style", ""),
                  (o = pe.BannerVariables).isPCVisible ||
                    (Ct.showConsentNotice(),
                    (o.isPCVisible = !0),
                    o.domainData.PCTemplateUpgrade &&
                      ((this.pc = t),
                      (n = t.querySelector("#accept-recommended-btn-handler")),
                      (this.allowVisible = n && 0 < n.clientHeight),
                      this.setCenterLayoutFooterHeight(),
                      Gt.getResizeElement().addEventListener(
                        "resize",
                        Gt.setCenterLayoutFooterHeight
                      ),
                      window.addEventListener(
                        "resize",
                        Gt.setCenterLayoutFooterHeight
                      ))),
                  [2]
                );
            }
          });
        });
      }),
      (Ot.prototype.close = function (e) {
        Ct.bannerCloseButtonHandler(e),
          Gt.getResizeElement().removeEventListener(
            "resize",
            Gt.setCenterLayoutFooterHeight
          ),
          window.removeEventListener("resize", Gt.setCenterLayoutFooterHeight);
      }),
      (Ot.prototype.closePreferenceCenter = function () {
        window.location.href = "http://otsdk//consentChanged";
      }),
      (Ot.prototype.initializeAlartHtmlAndHandler = function (e) {
        void 0 === e && (e = !1),
          e || Vt.insertAlertHtml(),
          this.initialiseAlertHandlers();
      }),
      (Ot.prototype.setBannerPosition = function () {
        var e = je.bannerGroup.name,
          t = ye("#onetrust-banner-sdk");
        if (K.moduleInitializer.IsSuppressBanner) {
          var o = document.querySelector("#onetrust-banner-sdk");
          if ("block" === getComputedStyle(o).getPropertyValue("display"))
            return;
          "otFloatingRoundedCorner" !== e &&
            "otFlat" !== e &&
            "otFloatingRounded" !== e &&
            t.css("display: block");
        }
        if ("otFlat" !== e)
          return "otFloatingRoundedCorner" === e || "otFloatingRounded" === e
            ? (t.css("bottom: -300px"),
              t.animate({ bottom: "1em" }, 2e3),
              void setTimeout(function () {
                t.css("bottom: 1rem");
              }, 2e3))
            : void (
                ("otFlat" !== e && "otFloatingRoundedCorner" !== e) ||
                t.animate({ top: "0px" }, 1e3)
              );
        "bottom" === pe.BannerVariables.domainData.BannerPosition
          ? (t.css("bottom: -99px"),
            t.animate({ bottom: "0px" }, 1e3),
            setTimeout(function () {
              t.css("bottom: 0px");
            }, 1e3))
          : (t.css("top: -99px; bottom: auto"),
            pe.BannerVariables.pagePushedDown && !He.checkIsBrowserIE11OrBelow()
              ? He.BannerPushDownHandler()
              : (t.animate({ top: "0" }, 1e3),
                setTimeout(function () {
                  t.css("top: 0px; bottom: auto");
                }, 1e3)));
      }),
      (Ot.prototype.initialiseAlertHandlers = function () {
        var e = pe.BannerVariables.domainData;
        this.setBannerPosition(),
          e.ForceConsent &&
            (ht.isCookiePolicyPage(e.AlertNoticeText) ||
              ye(".onetrust-pc-dark-filter")
                .removeClass("ot-hide")
                .css("z-index:2147483645")),
          e.OnClickCloseBanner &&
            document.body.addEventListener("click", Ct.bodyClickEvent),
          e.ScrollCloseBanner &&
            (window.addEventListener("scroll", Ct.scrollCloseBanner),
            ye(document).on(
              "click",
              ".onetrust-close-btn-handler",
              Ct.rmScrollAndClickBodyEvents
            ),
            ye(document).on(
              "click",
              "#onetrust-accept-btn-handler",
              Ct.rmScrollAndClickBodyEvents
            ),
            ye(document).on(
              "click",
              "#accept-recommended-btn-handler",
              Ct.rmScrollAndClickBodyEvents
            )),
          ye(document).on(
            "click",
            ".onetrust-vendors-list-handler",
            this.showAllVendors
          ),
          e.FloatingRoundedIcon &&
            ye("#onetrust-cookie-btn").on(
              "click",
              this.showCookieSettingsHandler.bind(this)
            );
      }),
      (Ot.prototype.getResizeElement = function () {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e.contentWindow || e || document;
      }),
      Ot);
  function Ot() {
    var e = this;
    (this.vendorDomInitialized = !1),
      (this.fltgBtnSltr = "#ot-sdk-btn-floating"),
      (this.fltgBtnFSltr = ".ot-floating-button__front svg"),
      (this.fltgBtnBSltr = ".ot-floating-button__back svg"),
      (this.pc = null),
      (this.allowVisible = !1),
      (this.showCookieSettingsHandler = function (t) {
        return l(e, void 0, void 0, function () {
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  t && t.stopPropagation(),
                  t &&
                    t.target &&
                    "ot-sdk-show-settings" === t.target.className &&
                    (pe.pcSource = t.target),
                  [4, this.toggleInfoDisplay()]
                );
              case 1:
                return e.sent(), [2, !1];
            }
          });
        });
      }),
      (this.cookieSettingsBoundListner =
        this.showCookieSettingsHandler.bind(this)),
      (this.backBtnHandler = function () {
        return (
          e.hideVendorsList(),
          "otPcList" === je.preferenceCenterGroup.name &&
            (ye("#onetrust-pc-sdk " + U.P_Content).removeClass("ot-hide"),
            ye("#onetrust-pc-sdk").el[0].removeAttribute("style"),
            e.setPcListContainerHeight()),
          ye("#onetrust-pc-sdk #filter-count").text("0"),
          ye("#onetrust-pc-sdk #vendor-search-handler").length &&
            (ye("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""),
          (pe.BannerVariables.currentGlobalFilteredList = []),
          (pe.BannerVariables.filterByCategories = []),
          (pe.BannerVariables.filterByIABCategories = []),
          (pe.BannerVariables.vendors.searchParam = ""),
          Gt.closeFilter(),
          (pe.pcLayer = z.PrefCenterHome),
          ht.setBannerFocus(ht.getPCFocusableElement(!1), 0, null, !1),
          !1
        );
      }),
      (this.bannerCloseBoundListener =
        this.bannerCloseButtonHandler.bind(this)),
      (this.toggleV2Category = function (e, t, o, n) {
        var r,
          s = this;
        t ||
          pe.BannerVariables.dataGroupState.some(function (e) {
            if (
              "function" == typeof s.getAttribute &&
              O.getGroupIdForCookie(e) === s.getAttribute("data-optanongroupid")
            )
              return (t = e), !0;
          }),
          void 0 === o && (o = ye(this).is(":checked")),
          n
            ? document.querySelector("#ot-group-id-" + n) &&
              (W.setCheckedAttribute("#ot-group-id-" + n, null, o),
              (r = document.querySelector("#ot-group-id-" + n)))
            : ((r = this), W.setCheckedAttribute(null, this, o)),
          pe.BannerVariables.domainData.PCShowConsentLabels &&
            (r.parentElement.parentElement.querySelector(
              ".ot-label-status"
            ).innerHTML = o
              ? pe.BannerVariables.domainData.PCActiveText
              : pe.BannerVariables.domainData.PCInactiveText);
        var i =
          this instanceof HTMLElement &&
          -1 !== this.getAttribute("id").indexOf("-leg-out");
        Gt.updateGroupToggles(t, o, i);
      }),
      (this.toggleSubCategory = function (e, t, o, n) {
        t = t || this.getAttribute("data-optanongroupid");
        var r,
          s = Be.getGroupById(t);
        void 0 === o && (o = ye(this).is(":checked")),
          n
            ? (W.setCheckedAttribute("#ot-sub-group-id-" + n, null, o),
              (r = document.querySelector("#ot-sub-group-id-" + n)))
            : ((r = this), W.setCheckedAttribute(null, this, o)),
          pe.BannerVariables.domainData.PCShowConsentLabels &&
            (r.parentElement.parentElement.querySelector(
              ".ot-label-status"
            ).innerHTML = o
              ? pe.BannerVariables.domainData.PCActiveText
              : pe.BannerVariables.domainData.PCInactiveText);
        var i =
          this instanceof HTMLElement &&
          -1 !== this.getAttribute("id").indexOf("-leg-out");
        Gt.updateSubGroupToggles(s, o, i);
      });
  }
  var Nt,
    Mt =
      ((Ft.prototype.init = function () {
        return l(this, void 0, void 0, function () {
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, je.consentNoticeInit()];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (Ft.prototype.initBanner = function () {
        this.canImpliedConsentLandingPage(),
          K.moduleInitializer.CookieSPAEnabled
            ? ye(window).on("otloadbanner", this.windowLoadBanner.bind(this))
            : ye(window).one("otloadbanner", this.windowLoadBanner.bind(this));
      }),
      (Ft.prototype.insertCookieSettingsButtonHtmlAndCss = function (e) {
        document.getElementById("onetrust-style").innerHTML +=
          je.cookieSettingsButtonGroup.css;
        var t = document.createElement("div");
        ye(t).html(je.cookieSettingsButtonGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && ye(o).removeClass("ot-hide"),
          ye("#onetrust-consent-sdk").append(o);
      }),
      (Ft.prototype.windowLoadBannerFocus = function () {
        if (
          K.fp.CookieV2BannerFocus &&
          !pe.BannerVariables.domainData.ForceConsent
        )
          document.getElementById("onetrust-banner-sdk") &&
            document.getElementById("onetrust-banner-sdk").focus();
        else {
          var e = Array.prototype.slice.call(
            ye(
              "#onetrust-banner-sdk [href]:not(.ot-mobile),\n            #onetrust-banner-sdk #onetrust-accept-btn-handler,\n            #onetrust-banner-sdk #onetrust-reject-all-handler,\n            #onetrust-banner-sdk #onetrust-pc-btn-handler,\n            #onetrust-banner-sdk #purpose-option,\n            #onetrust-banner-sdk #feature-option,\n            #onetrust-banner-sdk #information-option,\n            #onetrust-close-btn-container button,\n            .banner-close-btn-container button"
            ).el
          );
          ht.setBannerFocus(e, 0, null, !1);
        }
      }),
      (Ft.prototype.fetchAndSetupBanner = function () {
        return l(this, void 0, void 0, function () {
          var t;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, pe.getBannerContent()];
              case 1:
                return (
                  (t = e.sent()),
                  (je.bannerGroup = {
                    name: t.name,
                    html: atob(t.html),
                    css: t.css,
                  }),
                  (document.getElementById("onetrust-style").innerHTML +=
                    je.bannerGroup.css),
                  this.setupBanner(),
                  [2]
                );
            }
          });
        });
      }),
      (Ft.prototype.setupBanner = function () {
        (document.getElementById("onetrust-style").innerHTML +=
          dt.addCustomBannerCSS()),
          Gt.initBannerEventHandlers();
      }),
      (Ft.prototype.canImpliedConsentLandingPage = function () {
        this.isImpliedConsent() &&
          !Ve.isLandingPage() &&
          "true" ===
            pe.readCookieParam(
              pe.BannerVariables.optanonCookieName,
              pe.BannerVariables.optanonAwaitingReconsentName
            ) &&
          this.checkForRefreshCloseImplied();
      }),
      (Ft.prototype.isImpliedConsent = function () {
        var e = pe.BannerVariables.domainData;
        return (
          e.ConsentModel &&
          e.ConsentModel.Name.toLowerCase() ===
            pe.BannerVariables.constant.IMPLIEDCONSENT
        );
      }),
      (Ft.prototype.checkForRefreshCloseImplied = function () {
        Ct.closeOptanonAlertBox(), Ct.close(!0);
      }),
      (Ft.prototype.windowLoadBanner = function () {
        return l(this, void 0, void 0, function () {
          var t, o, n, r, s, i, a, l;
          return k(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  this.core.substitutePlainTextScriptTags(),
                  (t = K.moduleInitializer.IsSuppressBanner),
                  (o = K.moduleInitializer.IsSuppressPC),
                  ye("#onetrust-consent-sdk").length
                    ? (r = document.getElementById("onetrust-consent-sdk"))
                    : ((r = document.createElement("div")),
                      ye(r).attr("id", "onetrust-consent-sdk"),
                      ye(document.body).append(r)),
                  ye(".onetrust-pc-dark-filter").length ||
                    ((n = document.createElement("div")),
                    ye(n).attr("class", "onetrust-pc-dark-filter"),
                    ye(n).attr("class", "ot-hide"),
                    ye(n).attr("class", "ot-fade-in"),
                    r.firstChild
                      ? r.insertBefore(n, r.firstChild)
                      : ye(r).append(n)),
                  pe.BannerVariables.domainData.IsIabEnabled &&
                    this.iab.updateIabVariableReference(),
                  t || o
                    ? t
                      ? o ||
                        (Lt.insertConsentNoticeHtml(),
                        Gt.initialiseConsentNoticeHandlers())
                      : Gt.initBannerEventHandlers()
                    : (Lt.insertConsentNoticeHtml(),
                      Gt.initBannerEventHandlers(),
                      Gt.initialiseConsentNoticeHandlers()),
                  Gt.initCommonEventHandlers(),
                  (s =
                    pe.BannerVariables.domainData.ShowAlertNotice &&
                    !pe.isAlertBoxClosedAndValid())
                    ? ((i = !1),
                      t
                        ? ye("#onetrust-banner-sdk").length
                          ? ((je.bannerGroup = { name: pe.getBannerName() }),
                            this.setupBanner(),
                            (i = !0),
                            [3, 3])
                          : [3, 1]
                        : [3, 3])
                    : [3, 4]
                );
              case 1:
                return [4, this.fetchAndSetupBanner()];
              case 2:
                e.sent(), (e.label = 3);
              case 3:
                return Gt.initializeAlartHtmlAndHandler(i), [3, 5];
              case 4:
                (a = document.getElementById("onetrust-banner-sdk")) &&
                  a.setAttribute("style", "display:none"),
                  (e.label = 5);
              case 5:
                return (
                  je.cookieSettingsButtonGroup &&
                    (this.insertCookieSettingsButtonHtmlAndCss(!s),
                    Gt.initFlgtCkStgBtnEventHandlers()),
                  pe.BannerVariables.domainData.IsIabEnabled &&
                    !o &&
                    this.iab.InitializeVendorList(),
                  je.insertCookieSettingText(),
                  (l = ye(this.FLOATING_COOKIE_BTN)).length &&
                    l.attr(
                      "title",
                      pe.BannerVariables.domainData.CookieSettingButtonText
                    ),
                  0 < ye(this.ONETRUST_COOKIE_POLICY).length &&
                    at.insertCookiePolicyHtml(),
                  Ct.executeOptanonWrapper(),
                  pe.readCookieParam(
                    pe.BannerVariables.optanonCookieName,
                    "groups"
                  ) ||
                    Ae.writeCookieGroupsParam(
                      pe.BannerVariables.optanonCookieName
                    ),
                  pe.readCookieParam(
                    pe.BannerVariables.optanonCookieName,
                    "hosts"
                  ) ||
                    Ae.writeHostCookieParam(
                      pe.BannerVariables.optanonCookieName
                    ),
                  s && this.windowLoadBannerFocus(),
                  [2]
                );
            }
          });
        });
      }),
      Ft);
  function Ft() {
    (this.iab = rt),
      (this.core = tt),
      (this.ONETRUST_COOKIE_POLICY =
        "#ot-sdk-cookie-policy, #optanon-cookie-policy"),
      (this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating");
  }
  var Rt,
    qt =
      ((jt.prototype.postGeolocationCall = function () {
        pe.BannerVariables.domainData.IsIabEnabled && rt.assignIABGlobalScope(),
          Nt.initBanner();
      }),
      (jt.prototype.setGeoLocation = function (e, t) {
        void 0 === t && (t = ""), (pe.userLocation = { country: e, state: t });
      }),
      jt);
  function jt() {}
  var zt,
    Ut =
      ((Kt.prototype.initialiseLandingPath = function () {
        if (Ve.isLandingPage()) Ve.setLandingPathParam(location.href);
        else {
          if (pe.needReconsent() && !pe.awaitingReconsent())
            return (
              Ve.setLandingPathParam(location.href),
              void pe.writeCookieParam(
                pe.BannerVariables.optanonCookieName,
                pe.BannerVariables.optanonAwaitingReconsentName,
                !0
              )
            );
          Ve.setLandingPathParam(pe.BannerVariables.optanonNotLandingPageName),
            pe.writeCookieParam(
              pe.BannerVariables.optanonCookieName,
              pe.BannerVariables.optanonAwaitingReconsentName,
              !1
            ),
            pe.BannerVariables.optanonIsSoftOptInMode &&
              !K.moduleInitializer.MobileSDK &&
              Fe.setAlertBoxClosed(!0);
          var e = pe.BannerVariables.domainData;
          e.NextPageCloseBanner &&
            e.ShowAlertNotice &&
            Ct.nextPageCloseBanner();
        }
      }),
      Kt);
  function Kt() {}
  var Wt,
    Yt =
      ((Jt.prototype.IsAlertBoxClosedAndValid = function () {
        return pe.isAlertBoxClosedAndValid();
      }),
      (Jt.prototype.LoadBanner = function () {
        Fe.loadBanner();
      }),
      (Jt.prototype.Init = function () {
        y.insertViewPortTag(),
          je.ensureHtmlGroupDataInitialised(),
          ft.updateGtmMacros(!1),
          zt.initialiseLandingPath(),
          dt.initialiseCssReferences();
      }),
      (Jt.prototype.FetchAndDownloadPC = function () {
        Gt.fetchAndSetupPC();
      }),
      (Jt.prototype.ToggleInfoDisplay = function () {
        Wt.sdkEvents.toggleInfoDisplay();
      }),
      (Jt.prototype.Close = function (e) {
        Wt.sdkEvents.close(e);
      }),
      (Jt.prototype.AllowAll = function (e) {
        Ct.allowAllEvent(e);
      }),
      (Jt.prototype.RejectAll = function (e) {
        Ct.rejectAllEvent(e);
      }),
      (Jt.prototype.setDataSubjectId = function (e) {
        e &&
          e.trim() &&
          pe.writeCookieParam(
            pe.BannerVariables.optanonCookieName,
            pe.BannerVariables.consentIntegrationParam,
            e
          );
      }),
      (Jt.prototype.setDataSubjectIdV2 = function (e, t) {
        void 0 === t && (t = !1),
          e &&
            e.trim &&
            (pe.writeCookieParam(
              pe.BannerVariables.optanonCookieName,
              pe.BannerVariables.consentIntegrationParam,
              e
            ),
            (pe.dsParams.isAnonymous = t));
      }),
      (Jt.prototype.getDataSubjectId = function () {
        return pe.readCookieParam(
          pe.BannerVariables.optanonCookieName,
          pe.BannerVariables.consentIntegrationParam
        );
      }),
      (Jt.prototype.synchroniseCookieWithPayload = function (r) {
        var e = pe.readCookieParam(
            pe.BannerVariables.optanonCookieName,
            "groups"
          ),
          t = W.deserialiseStringToArray(e),
          s = [];
        t.forEach(function (e) {
          var t,
            o = e.split(":"),
            n = Be.getGroupById(o[0]);
          r.some(function (e) {
            if (e.Id === n.PurposeId) return (t = e), !0;
          }),
            t
              ? t.TransactionType ===
                pe.BannerVariables.constant.TRANSACTIONTYPE.CONFIRMED
                ? (s.push(o[0] + ":1"),
                  n.Parent
                    ? Gt.toggleSubCategory(
                        null,
                        n.CustomGroupId,
                        !0,
                        n.CustomGroupId
                      )
                    : Gt.toggleV2Category(null, n, !0, n.CustomGroupId))
                : (s.push(o[0] + ":0"),
                  n.Parent
                    ? Gt.toggleSubCategory(
                        null,
                        n.CustomGroupId,
                        !1,
                        n.CustomGroupId
                      )
                    : Gt.toggleV2Category(null, n, !1, n.CustomGroupId))
              : s.push(o[0] + ":" + o[1]);
        }),
          Ae.writeCookieGroupsParam(pe.BannerVariables.optanonCookieName, s);
      }),
      (Jt.prototype.getGeolocationData = function () {
        return pe.userLocation;
      }),
      (Jt.prototype.TriggerGoogleAnalyticsEvent = function (e, t, o, n) {
        Fe.triggerGoogleAnalyticsEvent(e, t, o, n);
      }),
      (Jt.prototype.ReconsentGroups = function () {
        var r = !1,
          e = pe.readCookieParam(
            pe.BannerVariables.optanonCookieName,
            "groups"
          ),
          s = W.deserialiseStringToArray(e),
          i = W.deserialiseStringToArray(e.replace(/:0|:1/g, "")),
          a = !1,
          t = pe.readCookieParam(pe.BannerVariables.optanonCookieName, "hosts"),
          l = W.deserialiseStringToArray(t),
          c = W.deserialiseStringToArray(t.replace(/:0|:1/g, "")),
          o = pe.BannerVariables.domainData,
          d = ["inactive", "inactive landingpage", "do not track"];
        e &&
          (o.Groups.forEach(function (e) {
            h(e.SubGroups, [e]).forEach(function (e) {
              var t = O.getGroupIdForCookie(e),
                o = W.indexOf(i, t);
              if (-1 !== o) {
                var n = Be.safeGroupDefaultStatus(e).toLowerCase();
                -1 < d.indexOf(n) &&
                  ((r = !0),
                  (s[o] = t + ("inactive landingpage" === n ? ":1" : ":0")));
              }
            });
          }),
          r &&
            Ae.writeCookieGroupsParam(pe.BannerVariables.optanonCookieName, s)),
          t &&
            (o.Groups.forEach(function (e) {
              h(e.SubGroups, [e]).forEach(function (n) {
                n.Hosts.forEach(function (e) {
                  var t = W.indexOf(c, e.HostId);
                  if (-1 !== t) {
                    var o = Be.safeGroupDefaultStatus(n).toLowerCase();
                    -1 < d.indexOf(o) &&
                      ((a = !0),
                      (l[t] =
                        e.HostId +
                        ("inactive landingpage" === o ? ":1" : ":0")));
                  }
                });
              });
            }),
            a &&
              Ae.writeHostCookieParam(pe.BannerVariables.optanonCookieName, l));
      }),
      (Jt.prototype.SetAlertBoxClosed = function (e) {
        Fe.setAlertBoxClosed(e);
      }),
      (Jt.prototype.GetDomainData = function () {
        return pe.BannerVariables.publicDomainData;
      }),
      Jt);
  function Jt() {
    (this.processedHtml = ""),
      (this.useGeoLocationService = pe.BannerVariables.useGeoLocationService),
      (this.groupsclassName = Xe),
      (this.sdkEvents = Gt),
      (this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid),
      (this.InitializeBanner = function () {
        return Nt.initBanner();
      }),
      (this.getHTML = function () {
        return (
          document.getElementById("onetrust-banner-sdk") ||
            (Lt.insertConsentNoticeHtml(), Vt.insertAlertHtml()),
          Wt.processedHtml ||
            (Wt.processedHtml = document.querySelector(
              "#onetrust-consent-sdk"
            ).outerHTML),
          Wt.processedHtml
        );
      }),
      (this.getCSS = function () {
        return dt.processedCSS;
      }),
      (this.setConsentProfile = function (e) {
        if (e.customPayload) {
          var t = e.customPayload;
          t.Interaction &&
            pe.writeCookieParam(
              pe.BannerVariables.optanonCookieName,
              pe.BannerVariables.bannerInteractionParam,
              t.Interaction
            );
        }
        K.fp.CookieV2ConsentIsAnonymous
          ? Wt.setDataSubjectIdV2(e.identifier, e.isAnonymous)
          : Wt.setDataSubjectId(e.identifier),
          Wt.synchroniseCookieWithPayload(e.purposes),
          Ct.executeOptanonWrapper();
      }),
      (this.InsertScript = function (e, t, o, n, r, s) {
        var i,
          a,
          l,
          c,
          d = null != n && void 0 !== n,
          u = d && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
        if (
          Xe.canInsertForGroup(r, u) &&
          !W.contains(pe.BannerVariables.optanonWrapperScriptExecutedGroups, r)
        ) {
          switch (
            (pe.BannerVariables.optanonWrapperScriptExecutedGroupsTemp.push(r),
            d &&
              void 0 !== n.deleteSelectorContent &&
              !0 === n.deleteSelectorContent &&
              W.empty(t),
            (l = document.createElement("script")),
            null != o &&
              void 0 !== o &&
              ((c = !1),
              (l.onload = l.onreadystatechange =
                function () {
                  c ||
                    (this.readyState &&
                      "loaded" !== this.readyState &&
                      "complete" !== this.readyState) ||
                    ((c = !0), o());
                })),
            (l.type = "text/javascript"),
            (l.src = e),
            s && (l.async = s),
            t)
          ) {
            case "head":
              document.getElementsByTagName("head")[0].appendChild(l);
              break;
            case "body":
              document.getElementsByTagName("body")[0].appendChild(l);
              break;
            default:
              var p = document.getElementById(t);
              p &&
                (p.appendChild(l),
                d &&
                  void 0 !== n.makeSelectorVisible &&
                  !0 === n.makeSelectorVisible &&
                  W.show(t));
          }
          if (d && void 0 !== n.makeElementsVisible)
            for (i = 0; i < n.makeElementsVisible.length; i += 1)
              W.show(n.makeElementsVisible[i]);
          if (d && void 0 !== n.deleteElements)
            for (a = 0; a < n.deleteElements.length; a += 1)
              W.remove(n.deleteElements[a]);
        }
      }),
      (this.InsertHtml = function (e, t, o, n, r) {
        var s,
          i,
          a = null != n && void 0 !== n,
          l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
        if (
          Xe.canInsertForGroup(r, l) &&
          !W.contains(pe.BannerVariables.optanonWrapperHtmlExecutedGroups, r)
        ) {
          if (
            (pe.BannerVariables.optanonWrapperHtmlExecutedGroupsTemp.push(r),
            a &&
              void 0 !== n.deleteSelectorContent &&
              !0 === n.deleteSelectorContent &&
              W.empty(t),
            W.appendTo(t, e),
            a &&
              void 0 !== n.makeSelectorVisible &&
              !0 === n.makeSelectorVisible &&
              W.show(t),
            a && void 0 !== n.makeElementsVisible)
          )
            for (s = 0; s < n.makeElementsVisible.length; s += 1)
              W.show(n.makeElementsVisible[s]);
          if (a && void 0 !== n.deleteElements)
            for (i = 0; i < n.deleteElements.length; i += 1)
              W.remove(n.deleteElements[i]);
          null != o && void 0 !== o && o();
        }
      }),
      (this.BlockGoogleAnalytics = function (e, t) {
        window["ga-disable-" + e] = !Xe.canInsertForGroup(t);
      });
  }
  var Qt,
    Zt,
    Xt,
    $t,
    eo =
      (o((Zt = oo), (Xt = Qt = Yt)),
      (Zt.prototype =
        null === Xt
          ? Object.create(Xt)
          : ((to.prototype = Xt.prototype), new to())),
      (oo.prototype.Close = function (e) {
        Ct.closeBanner(!1),
          (window.location.href = "http://otsdk//consentChanged");
      }),
      (oo.prototype.RejectAll = function (e) {
        Ct.rejectAllEvent(),
          (window.location.href = "http://otsdk//consentChanged");
      }),
      (oo.prototype.AllowAll = function (e) {
        Ct.AllowAllV2(e),
          (window.location.href = "http://otsdk//consentChanged");
      }),
      (oo.prototype.ToggleInfoDisplay = function () {
        Gt.toggleInfoDisplay();
      }),
      oo);
  function to() {
    this.constructor = Zt;
  }
  function oo() {
    var e = (null !== Qt && Qt.apply(this, arguments)) || this;
    return (e.mobileOnlineURL = pe.BannerVariables.mobileOnlineURL), e;
  }
  var no,
    ro =
      ((so.prototype.getIsOptInMode = function () {
        return !pe.BannerVariables.domainData.Groups.some(function (e) {
          var t = Be.safeGroupDefaultStatus(e).toLowerCase();
          return (
            !t ||
            "active" === t ||
            "inactive landingpage" === t ||
            t === pe.BannerVariables.doNotTrackText ||
            e.SubGroups.some(function (e) {
              var t = Be.safeGroupDefaultStatus(e).toLowerCase();
              if (
                !t ||
                "active" === t ||
                "inactive landingpage" === t ||
                t === pe.BannerVariables.doNotTrackText
              )
                return !0;
            })
          );
        });
      }),
      (so.prototype.getIsSoftOptInMode = function () {
        return !pe.BannerVariables.domainData.Groups.some(function (e) {
          var t = Be.safeGroupDefaultStatus(e).toLowerCase();
          return (
            ("inactive landingpage" !== t && "always active" !== t) ||
            e.SubGroups.some(function (e) {
              var t = Be.safeGroupDefaultStatus(e).toLowerCase();
              if ("inactive landingpage" !== t && "always active" !== t)
                return !0;
            })
          );
        });
      }),
      so);
  function so() {
    pe.setConsentModelFlag(this.getIsOptInMode(), this.getIsSoftOptInMode());
  }
  y.initPolyfill(),
    (fe = new ge()),
    (no = window.otStubData) &&
      ((K.moduleInitializer = no.domainData),
      (K.fp = K.moduleInitializer.TenantFeatures),
      fe.setBannerScriptElement(no.stubElement),
      pe.setRegionRule(no.regionRule),
      (pe.userLocation = no.userLocation),
      (pe.crossOrigin = no.crossOrigin),
      (pe.isAMP = no.isAmp),
      pe.isAMP &&
        (pe.dataDomainId = no.stubElement.getAttribute("data-domain-script")),
      (pe.isV2Stub = no.isV2Stub || !1),
      pe.setbannerDataParentURL(no.bannerBaseDataURL),
      (pe.BannerVariables.mobileOnlineURL = h(
        pe.BannerVariables.mobileOnlineURL,
        no.mobileOnlineURL
      )),
      (pe.syncRequired = no.syncRequired),
      (pe.consentPreferences = no.preferences),
      (pe.syncGrpId = no.syncGrpId),
      (window.otStubData = { userLocation: pe.userLocation }),
      (window.OneTrustStub = null)),
    (function () {
      l(this, void 0, void 0, function () {
        var t, o, n, r, s, i;
        return k(this, function (e) {
          switch (e.label) {
            case 0:
              return (
                (Xe = new $e()),
                (Je = new Qe()),
                (rt = new st()),
                (tt = new ot()),
                (Ct = new St()),
                (Gt = new Ht()),
                (Lt = new wt()),
                (Vt = new Et()),
                (Nt = new Mt()),
                (at = new lt()),
                (dt = new pt()),
                (je = new We()),
                (ft = new gt()),
                (zt = new Ut()),
                (Rt = new qt()),
                (Fe = new Re()),
                (ue = new ke()),
                K.moduleInitializer.MobileSDK
                  ? ($t = new eo())
                  : (Wt = new Yt()),
                (Ce = new ve()),
                (t = pe.getRegionRule().Type),
                (o = pe.getRegionRule().UseGoogleVendors),
                "IAB2" !== t
                  ? [3, 2]
                  : [
                      4,
                      Promise.all([
                        pe.getBannerScriptData(),
                        pe.fetchGvlObj(),
                        o ? pe.fetchGoogleVendors() : Promise.resolve(null),
                        pe.loadCMP(t),
                      ]),
                    ]
              );
            case 1:
              return (
                (i = e.sent()),
                (n = i[0]),
                (r = i[1]),
                (s = i[2]),
                pe.setGvlObj(r),
                pe.setGoogleVendors(s),
                [3, 6]
              );
            case 2:
              return "IAB" !== t
                ? [3, 4]
                : [4, Promise.all([pe.getBannerScriptData(), pe.loadCMP(t)])];
            case 3:
              return (n = e.sent()[0]), [3, 6];
            case 4:
              return [4, pe.getBannerScriptData()];
            case 5:
              (n = e.sent()), (e.label = 6);
            case 6:
              return (
                (function (o) {
                  l(this, void 0, void 0, function () {
                    var t;
                    return k(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (window.OneTrust = window.Optanon =
                              Object.assign(
                                {},
                                window.OneTrust,
                                (function (e) {
                                  var t,
                                    o = K.moduleInitializer.MobileSDK;
                                  t = o ? $t : Wt;
                                  var n = {
                                    AllowAll: t.AllowAll,
                                    BlockGoogleAnalytics:
                                      t.BlockGoogleAnalytics,
                                    Close: t.Close,
                                    getCSS: t.getCSS,
                                    GetDomainData: t.GetDomainData,
                                    getGeolocationData: t.getGeolocationData,
                                    getHTML: t.getHTML,
                                    Init: t.Init,
                                    InitializeBanner: t.InitializeBanner,
                                    initializeCookiePolicyHtml:
                                      at.insertCookiePolicyHtml.bind(at),
                                    InsertHtml: t.InsertHtml,
                                    InsertScript: t.InsertScript,
                                    IsAlertBoxClosed: t.IsAlertBoxClosed,
                                    IsAlertBoxClosedAndValid:
                                      t.IsAlertBoxClosedAndValid,
                                    LoadBanner: t.LoadBanner,
                                    OnConsentChanged: Fe.OnConsentChanged,
                                    ReconsentGroups: t.ReconsentGroups,
                                    RejectAll: t.RejectAll,
                                    SetAlertBoxClosed: t.SetAlertBoxClosed,
                                    setGeoLocation: Rt.setGeoLocation,
                                    ToggleInfoDisplay: t.ToggleInfoDisplay,
                                    TriggerGoogleAnalyticsEvent:
                                      t.TriggerGoogleAnalyticsEvent,
                                    useGeoLocationService:
                                      t.useGeoLocationService,
                                    FetchAndDownloadPC: t.FetchAndDownloadPC,
                                  };
                                  e.IsConsentLoggingEnabled &&
                                    ((n.getDataSubjectId = t.getDataSubjectId),
                                    (n.setConsentProfile = t.setConsentProfile),
                                    (n.setDataSubjectId = K.fp
                                      .CookieV2ConsentIsAnonymous
                                      ? t.setDataSubjectIdV2
                                      : t.setDataSubjectId));
                                  o &&
                                    ((n.mobileOnlineURL = t.mobileOnlineURL),
                                    (n.otCookieData = pe.otCookieData));
                                  e.IsIabEnabled &&
                                    ((n.updateConsentFromCookies =
                                      Fe.updateConsentFromCookie),
                                    "IAB" === e.IabType
                                      ? ((n.getConsentDataRequest =
                                          Ce.getConsentDataRequest),
                                        (n.getPingRequest = Ce.getPingRequest),
                                        (n.getVendorConsentsRequest =
                                          Ce.getVendorConsentsRequest))
                                      : "IAB2" === e.IabType &&
                                        ((n.getPingRequest =
                                          Ce.getPingRequestForTcf),
                                        (n.getVendorConsentsRequestV2 =
                                          Ce.getVendorConsentsRequestV2)));
                                  return n;
                                })(o.DomainData)
                              )),
                            pe.initializeBannerVariables(o),
                            pe.syncCookieExpiry(),
                            (Ae = new Te()),
                            (Be = new Se()),
                            new ro(),
                            (Le = new we()),
                            (He = new Ne()),
                            (Ve = new De()),
                            (ht = new bt()),
                            (t = window.OneTrust.dataSubjectParams || {}).id &&
                              ((pe.dsParams = t),
                              Wt.setDataSubjectIdV2(t.id, t.isAnonymous)),
                            [4, Ce.initializeIABModule()]
                          );
                        case 1:
                          return e.sent(), [4, Nt.init()];
                        case 2:
                          return (
                            e.sent(),
                            Rt.postGeolocationCall(),
                            Fe.assetResolve(!0),
                            pe.BannerVariables.domainData.IsIabEnabled &&
                              "IAB" === pe.BannerVariables.domainData.IabType &&
                              ((window.__cmp =
                                K.moduleInitializer.otIABModuleData.excuteAPI),
                              K.moduleInitializer.otIABModuleData.proccessQueue()),
                            K.moduleInitializer.MobileSDK
                              ? $t.Init()
                              : Wt.Init(),
                            pe.isIABCrossConsentEnabled() ||
                              (K.moduleInitializer.MobileSDK
                                ? $t.LoadBanner()
                                : Wt.LoadBanner()),
                            [2]
                          );
                      }
                    });
                  });
                })(n),
                [2]
              );
          }
        });
      });
    })();
})();
