import * as U from "react";
import V, { useRef as te, useCallback as tt, useEffect as we, useState as Ce, useMemo as ue, useLayoutEffect as Vn, createContext as He, useContext as Fe, forwardRef as pd, Fragment as Lt, isValidElement as gd, cloneElement as hd, createElement as md, useId as vt, useReducer as yo, useSyncExternalStore as bd, createRef as Mn } from "react";
import * as yd from "react-dom";
import { createPortal as kl, flushSync as An } from "react-dom";
var Ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ro = { exports: {} }, Wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function wd() {
  if (Gi)
    return Wr;
  Gi = 1;
  var e = V, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, f, v) {
    var d, y = {}, k = null, w = null;
    v !== void 0 && (k = "" + v), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (d in f)
      n.call(f, d) && !l.hasOwnProperty(d) && (y[d] = f[d]);
    if (c && c.defaultProps)
      for (d in f = c.defaultProps, f)
        y[d] === void 0 && (y[d] = f[d]);
    return { $$typeof: t, type: c, key: k, ref: w, props: y, _owner: a.current };
  }
  return Wr.Fragment = r, Wr.jsx = u, Wr.jsxs = u, Wr;
}
var Vr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function xd() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = V, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), T = Symbol.iterator, g = "@@iterator";
    function $(m) {
      if (m === null || typeof m != "object")
        return null;
      var M = T && m[T] || m[g];
      return typeof M == "function" ? M : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(m) {
      {
        for (var M = arguments.length, B = new Array(M > 1 ? M - 1 : 0), ee = 1; ee < M; ee++)
          B[ee - 1] = arguments[ee];
        O("error", m, B);
      }
    }
    function O(m, M, B) {
      {
        var ee = R.ReactDebugCurrentFrame, xe = ee.getStackAddendum();
        xe !== "" && (M += "%s", B = B.concat([xe]));
        var $e = B.map(function(pe) {
          return String(pe);
        });
        $e.unshift("Warning: " + M), Function.prototype.apply.call(console[m], console, $e);
      }
    }
    var N = !1, H = !1, C = !1, K = !1, j = !1, ne;
    ne = Symbol.for("react.module.reference");
    function ge(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === l || j || m === a || m === v || m === d || K || m === w || N || H || C || typeof m == "object" && m !== null && (m.$$typeof === k || m.$$typeof === y || m.$$typeof === u || m.$$typeof === c || m.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === ne || m.getModuleId !== void 0));
    }
    function se(m, M, B) {
      var ee = m.displayName;
      if (ee)
        return ee;
      var xe = M.displayName || M.name || "";
      return xe !== "" ? B + "(" + xe + ")" : B;
    }
    function J(m) {
      return m.displayName || "Context";
    }
    function Y(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case a:
          return "StrictMode";
        case v:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            var M = m;
            return J(M) + ".Consumer";
          case u:
            var B = m;
            return J(B._context) + ".Provider";
          case f:
            return se(m, m.render, "ForwardRef");
          case y:
            var ee = m.displayName || null;
            return ee !== null ? ee : Y(m.type) || "Memo";
          case k: {
            var xe = m, $e = xe._payload, pe = xe._init;
            try {
              return Y(pe($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ve = Object.assign, I = 0, Z, D, ae, q, fe, he, Re;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Be() {
      {
        if (I === 0) {
          Z = console.log, D = console.info, ae = console.warn, q = console.error, fe = console.group, he = console.groupCollapsed, Re = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: Le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        I++;
      }
    }
    function kr() {
      {
        if (I--, I === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ve({}, m, {
              value: Z
            }),
            info: ve({}, m, {
              value: D
            }),
            warn: ve({}, m, {
              value: ae
            }),
            error: ve({}, m, {
              value: q
            }),
            group: ve({}, m, {
              value: fe
            }),
            groupCollapsed: ve({}, m, {
              value: he
            }),
            groupEnd: ve({}, m, {
              value: Re
            })
          });
        }
        I < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ht = R.ReactCurrentDispatcher, Bt;
    function kt(m, M, B) {
      {
        if (Bt === void 0)
          try {
            throw Error();
          } catch (xe) {
            var ee = xe.stack.trim().match(/\n( *(at )?)/);
            Bt = ee && ee[1] || "";
          }
        return `
` + Bt + m;
      }
    }
    var Tt = !1, Pe;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Ne();
    }
    function Qe(m, M) {
      if (!m || Tt)
        return "";
      {
        var B = Pe.get(m);
        if (B !== void 0)
          return B;
      }
      var ee;
      Tt = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Ht.current, Ht.current = null, Be();
      try {
        if (M) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (Je) {
              ee = Je;
            }
            Reflect.construct(m, [], pe);
          } else {
            try {
              pe.call();
            } catch (Je) {
              ee = Je;
            }
            m.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            ee = Je;
          }
          m();
        }
      } catch (Je) {
        if (Je && ee && typeof Je.stack == "string") {
          for (var oe = Je.stack.split(`
`), ze = ee.stack.split(`
`), Me = oe.length - 1, Ae = ze.length - 1; Me >= 1 && Ae >= 0 && oe[Me] !== ze[Ae]; )
            Ae--;
          for (; Me >= 1 && Ae >= 0; Me--, Ae--)
            if (oe[Me] !== ze[Ae]) {
              if (Me !== 1 || Ae !== 1)
                do
                  if (Me--, Ae--, Ae < 0 || oe[Me] !== ze[Ae]) {
                    var rt = `
` + oe[Me].replace(" at new ", " at ");
                    return m.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", m.displayName)), typeof m == "function" && Pe.set(m, rt), rt;
                  }
                while (Me >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, Ht.current = $e, kr(), Error.prepareStackTrace = xe;
      }
      var gt = m ? m.displayName || m.name : "", ht = gt ? kt(gt) : "";
      return typeof m == "function" && Pe.set(m, ht), ht;
    }
    function Tr(m, M, B) {
      return Qe(m, !1);
    }
    function Rr(m) {
      var M = m.prototype;
      return !!(M && M.isReactComponent);
    }
    function nr(m, M, B) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return Qe(m, Rr(m));
      if (typeof m == "string")
        return kt(m);
      switch (m) {
        case v:
          return kt("Suspense");
        case d:
          return kt("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case f:
            return Tr(m.render);
          case y:
            return nr(m.type, M, B);
          case k: {
            var ee = m, xe = ee._payload, $e = ee._init;
            try {
              return nr($e(xe), M, B);
            } catch {
            }
          }
        }
      return "";
    }
    var Wt = Object.prototype.hasOwnProperty, an = {}, ar = R.ReactDebugCurrentFrame;
    function or(m) {
      if (m) {
        var M = m._owner, B = nr(m.type, m._source, M ? M.type : null);
        ar.setExtraStackFrame(B);
      } else
        ar.setExtraStackFrame(null);
    }
    function on(m, M, B, ee, xe) {
      {
        var $e = Function.call.bind(Wt);
        for (var pe in m)
          if ($e(m, pe)) {
            var oe = void 0;
            try {
              if (typeof m[pe] != "function") {
                var ze = Error((ee || "React class") + ": " + B + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              oe = m[pe](M, pe, ee, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Me) {
              oe = Me;
            }
            oe && !(oe instanceof Error) && (or(xe), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", B, pe, typeof oe), or(null)), oe instanceof Error && !(oe.message in an) && (an[oe.message] = !0, or(xe), P("Failed %s type: %s", B, oe.message), or(null));
          }
      }
    }
    var ln = Array.isArray;
    function ir(m) {
      return ln(m);
    }
    function un(m) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, B = M && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return B;
      }
    }
    function sn(m) {
      try {
        return Pr(m), !1;
      } catch {
        return !0;
      }
    }
    function Pr(m) {
      return "" + m;
    }
    function _r(m) {
      if (sn(m))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", un(m)), Pr(m);
    }
    var Rt = R.ReactCurrentOwner, cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Or, Cr, Fr;
    Fr = {};
    function oa(m) {
      if (Wt.call(m, "ref")) {
        var M = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function fn(m) {
      if (Wt.call(m, "key")) {
        var M = Object.getOwnPropertyDescriptor(m, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function dn(m, M) {
      if (typeof m.ref == "string" && Rt.current && M && Rt.current.stateNode !== M) {
        var B = Y(Rt.current.type);
        Fr[B] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Rt.current.type), m.ref), Fr[B] = !0);
      }
    }
    function ia(m, M) {
      {
        var B = function() {
          Or || (Or = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function la(m, M) {
      {
        var B = function() {
          Cr || (Cr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var vn = function(m, M, B, ee, xe, $e, pe) {
      var oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: M,
        ref: B,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return oe._store = {}, Object.defineProperty(oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.freeze && (Object.freeze(oe.props), Object.freeze(oe)), oe;
    };
    function pn(m, M, B, ee, xe) {
      {
        var $e, pe = {}, oe = null, ze = null;
        B !== void 0 && (_r(B), oe = "" + B), fn(M) && (_r(M.key), oe = "" + M.key), oa(M) && (ze = M.ref, dn(M, xe));
        for ($e in M)
          Wt.call(M, $e) && !cn.hasOwnProperty($e) && (pe[$e] = M[$e]);
        if (m && m.defaultProps) {
          var Me = m.defaultProps;
          for ($e in Me)
            pe[$e] === void 0 && (pe[$e] = Me[$e]);
        }
        if (oe || ze) {
          var Ae = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          oe && ia(pe, Ae), ze && la(pe, Ae);
        }
        return vn(m, oe, ze, xe, ee, Rt.current, pe);
      }
    }
    var Mr = R.ReactCurrentOwner, gn = R.ReactDebugCurrentFrame;
    function Pt(m) {
      if (m) {
        var M = m._owner, B = nr(m.type, m._source, M ? M.type : null);
        gn.setExtraStackFrame(B);
      } else
        gn.setExtraStackFrame(null);
    }
    var Lr;
    Lr = !1;
    function Ar(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function hn() {
      {
        if (Mr.current) {
          var m = Y(Mr.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function ua(m) {
      return "";
    }
    var mn = {};
    function sa(m) {
      {
        var M = hn();
        if (!M) {
          var B = typeof m == "string" ? m : m.displayName || m.name;
          B && (M = `

Check the top-level render call using <` + B + ">.");
        }
        return M;
      }
    }
    function bn(m, M) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var B = sa(M);
        if (mn[B])
          return;
        mn[B] = !0;
        var ee = "";
        m && m._owner && m._owner !== Mr.current && (ee = " It was passed a child from " + Y(m._owner.type) + "."), Pt(m), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, ee), Pt(null);
      }
    }
    function yn(m, M) {
      {
        if (typeof m != "object")
          return;
        if (ir(m))
          for (var B = 0; B < m.length; B++) {
            var ee = m[B];
            Ar(ee) && bn(ee, M);
          }
        else if (Ar(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var xe = $(m);
          if (typeof xe == "function" && xe !== m.entries)
            for (var $e = xe.call(m), pe; !(pe = $e.next()).done; )
              Ar(pe.value) && bn(pe.value, M);
        }
      }
    }
    function ca(m) {
      {
        var M = m.type;
        if (M == null || typeof M == "string")
          return;
        var B;
        if (typeof M == "function")
          B = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === y))
          B = M.propTypes;
        else
          return;
        if (B) {
          var ee = Y(M);
          on(B, m.props, "prop", ee, m);
        } else if (M.PropTypes !== void 0 && !Lr) {
          Lr = !0;
          var xe = Y(M);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fa(m) {
      {
        for (var M = Object.keys(m.props), B = 0; B < M.length; B++) {
          var ee = M[B];
          if (ee !== "children" && ee !== "key") {
            Pt(m), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), Pt(null);
            break;
          }
        }
        m.ref !== null && (Pt(m), P("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var Nr = {};
    function Ir(m, M, B, ee, xe, $e) {
      {
        var pe = ge(m);
        if (!pe) {
          var oe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = ua();
          ze ? oe += ze : oe += hn();
          var Me;
          m === null ? Me = "null" : ir(m) ? Me = "array" : m !== void 0 && m.$$typeof === t ? (Me = "<" + (Y(m.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : Me = typeof m, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Me, oe);
        }
        var Ae = pn(m, M, B, xe, $e);
        if (Ae == null)
          return Ae;
        if (pe) {
          var rt = M.children;
          if (rt !== void 0)
            if (ee)
              if (ir(rt)) {
                for (var gt = 0; gt < rt.length; gt++)
                  yn(rt[gt], m);
                Object.freeze && Object.freeze(rt);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yn(rt, m);
        }
        if (Wt.call(M, "key")) {
          var ht = Y(m), Je = Object.keys(M).filter(function(ha) {
            return ha !== "key";
          }), Dr = Je.length > 0 ? "{key: someKey, " + Je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[ht + Dr]) {
            var ga = Je.length > 0 ? "{" + Je.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dr, ht, ga, ht), Nr[ht + Dr] = !0;
          }
        }
        return m === n ? fa(Ae) : ca(Ae), Ae;
      }
    }
    function da(m, M, B) {
      return Ir(m, M, B, !0);
    }
    function va(m, M, B) {
      return Ir(m, M, B, !1);
    }
    var pa = va, lr = da;
    Vr.Fragment = n, Vr.jsx = pa, Vr.jsxs = lr;
  }()), Vr;
}
process.env.NODE_ENV === "production" ? ro.exports = wd() : ro.exports = xd();
var re = ro.exports;
const Rl = typeof document < "u" ? V.useLayoutEffect : () => {
};
function Ed(e) {
  const t = te(null);
  return Rl(() => {
    t.current = e;
  }, [
    e
  ]), tt((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
const Jr = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, qt = (e) => e && "window" in e && e.window === e ? e : Jr(e).defaultView || window;
function Pl(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (r = Pl(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Ua() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
    (e = arguments[r]) && (t = Pl(e)) && (n && (n += " "), n += t);
  return n;
}
function $d(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function Sd(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function kd() {
  return Sd(/^Mac/i);
}
function Td() {
  return $d(/Android/i);
}
function Rd(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Td() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class Pd {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, r) {
    this.nativeEvent = r, this.target = r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget, this.bubbles = r.bubbles, this.cancelable = r.cancelable, this.defaultPrevented = r.defaultPrevented, this.eventPhase = r.eventPhase, this.isTrusted = r.isTrusted, this.timeStamp = r.timeStamp, this.type = t;
  }
}
function _l(e) {
  let t = te({
    isFocused: !1,
    observer: null
  });
  Rl(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = Ed((n) => {
    e == null || e(n);
  });
  return tt((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = n.target, l = (u) => {
        t.current.isFocused = !1, a.disabled && r(new Pd("blur", u)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", l, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var u;
          (u = t.current.observer) === null || u === void 0 || u.disconnect();
          let c = a === document.activeElement ? null : document.activeElement;
          a.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: c
          })), a.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: c
          }));
        }
      }), t.current.observer.observe(a, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
function _d(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: a } = e;
  const l = tt((f) => {
    if (f.target === f.currentTarget)
      return n && n(f), a && a(!1), !0;
  }, [
    n,
    a
  ]), u = _l(l), c = tt((f) => {
    const v = Jr(f.target);
    f.target === f.currentTarget && v.activeElement === f.target && (r && r(f), a && a(!0), u(f));
  }, [
    a,
    r,
    u
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || a || n) ? c : void 0,
      onBlur: !t && (n || a) ? l : void 0
    }
  };
}
let Zr = null, no = /* @__PURE__ */ new Set(), zr = /* @__PURE__ */ new Map(), Zt = !1, ao = !1;
const Od = {
  Tab: !0,
  Escape: !0
};
function wo(e, t) {
  for (let r of no)
    r(e, t);
}
function Cd(e) {
  return !(e.metaKey || !kd() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Nn(e) {
  Zt = !0, Cd(e) && (Zr = "keyboard", wo("keyboard", e));
}
function lt(e) {
  Zr = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Zt = !0, wo("pointer", e));
}
function Ol(e) {
  Rd(e) && (Zt = !0, Zr = "virtual");
}
function Cl(e) {
  e.target === window || e.target === document || (!Zt && !ao && (Zr = "virtual", wo("virtual", e)), Zt = !1, ao = !1);
}
function Fl() {
  Zt = !1, ao = !0;
}
function oo(e) {
  if (typeof window > "u" || zr.get(qt(e)))
    return;
  const t = qt(e), r = Jr(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Zt = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", Nn, !0), r.addEventListener("keyup", Nn, !0), r.addEventListener("click", Ol, !0), t.addEventListener("focus", Cl, !0), t.addEventListener("blur", Fl, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", lt, !0), r.addEventListener("pointermove", lt, !0), r.addEventListener("pointerup", lt, !0)) : (r.addEventListener("mousedown", lt, !0), r.addEventListener("mousemove", lt, !0), r.addEventListener("mouseup", lt, !0)), t.addEventListener("beforeunload", () => {
    Ml(e);
  }, {
    once: !0
  }), zr.set(t, {
    focus: n
  });
}
const Ml = (e, t) => {
  const r = qt(e), n = Jr(e);
  t && n.removeEventListener("DOMContentLoaded", t), zr.has(r) && (r.HTMLElement.prototype.focus = zr.get(r).focus, n.removeEventListener("keydown", Nn, !0), n.removeEventListener("keyup", Nn, !0), n.removeEventListener("click", Ol, !0), r.removeEventListener("focus", Cl, !0), r.removeEventListener("blur", Fl, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", lt, !0), n.removeEventListener("pointermove", lt, !0), n.removeEventListener("pointerup", lt, !0)) : (n.removeEventListener("mousedown", lt, !0), n.removeEventListener("mousemove", lt, !0), n.removeEventListener("mouseup", lt, !0)), zr.delete(r));
};
function Fd(e) {
  const t = Jr(e);
  let r;
  return t.readyState !== "loading" ? oo(e) : (r = () => {
    oo(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Ml(e, r);
}
typeof document < "u" && Fd();
function Ll() {
  return Zr !== "pointer";
}
const Md = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ld(e, t, r) {
  var n;
  const a = typeof window < "u" ? qt(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, l = typeof window < "u" ? qt(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, u = typeof window < "u" ? qt(r == null ? void 0 : r.target).HTMLElement : HTMLElement, c = typeof window < "u" ? qt(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || (r == null ? void 0 : r.target) instanceof a && !Md.has(r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type) || (r == null ? void 0 : r.target) instanceof l || (r == null ? void 0 : r.target) instanceof u && (r == null ? void 0 : r.target.isContentEditable), !(e && t === "keyboard" && r instanceof c && !Od[r.key]);
}
function Ad(e, t, r) {
  oo(), we(() => {
    let n = (a, l) => {
      Ld(!!(r != null && r.isTextInput), a, l) && e(Ll());
    };
    return no.add(n), () => {
      no.delete(n);
    };
  }, t);
}
function Nd(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: a } = e, l = te({
    isFocusWithin: !1
  }), u = tt((v) => {
    l.current.isFocusWithin && !v.currentTarget.contains(v.relatedTarget) && (l.current.isFocusWithin = !1, r && r(v), a && a(!1));
  }, [
    r,
    a,
    l
  ]), c = _l(u), f = tt((v) => {
    !l.current.isFocusWithin && document.activeElement === v.target && (n && n(v), a && a(!0), l.current.isFocusWithin = !0, c(v));
  }, [
    n,
    a,
    c
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: f,
      onBlur: u
    }
  };
}
let In = !1, za = 0;
function io() {
  In = !0, setTimeout(() => {
    In = !1;
  }, 50);
}
function qi(e) {
  e.pointerType === "touch" && io();
}
function Id() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", qi) : document.addEventListener("touchend", io), za++, () => {
      za--, !(za > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", qi) : document.removeEventListener("touchend", io));
    };
}
function xo(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: a } = e, [l, u] = Ce(!1), c = te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  we(Id, []);
  let { hoverProps: f, triggerHoverEnd: v } = ue(() => {
    let d = (w, T) => {
      if (c.pointerType = T, a || T === "touch" || c.isHovered || !w.currentTarget.contains(w.target))
        return;
      c.isHovered = !0;
      let g = w.currentTarget;
      c.target = g, t && t({
        type: "hoverstart",
        target: g,
        pointerType: T
      }), r && r(!0), u(!0);
    }, y = (w, T) => {
      if (c.pointerType = "", c.target = null, T === "touch" || !c.isHovered)
        return;
      c.isHovered = !1;
      let g = w.currentTarget;
      n && n({
        type: "hoverend",
        target: g,
        pointerType: T
      }), r && r(!1), u(!1);
    }, k = {};
    return typeof PointerEvent < "u" ? (k.onPointerEnter = (w) => {
      In && w.pointerType === "mouse" || d(w, w.pointerType);
    }, k.onPointerLeave = (w) => {
      !a && w.currentTarget.contains(w.target) && y(w, w.pointerType);
    }) : (k.onTouchStart = () => {
      c.ignoreEmulatedMouseEvents = !0;
    }, k.onMouseEnter = (w) => {
      !c.ignoreEmulatedMouseEvents && !In && d(w, "mouse"), c.ignoreEmulatedMouseEvents = !1;
    }, k.onMouseLeave = (w) => {
      !a && w.currentTarget.contains(w.target) && y(w, "mouse");
    }), {
      hoverProps: k,
      triggerHoverEnd: y
    };
  }, [
    t,
    r,
    n,
    a,
    c
  ]);
  return we(() => {
    a && v({
      currentTarget: c.target
    }, c.pointerType);
  }, [
    a
  ]), {
    hoverProps: f,
    isHovered: l
  };
}
function Eo(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, a = te({
    isFocused: !1,
    isFocusVisible: t || Ll()
  }), [l, u] = Ce(!1), [c, f] = Ce(() => a.current.isFocused && a.current.isFocusVisible), v = tt(() => f(a.current.isFocused && a.current.isFocusVisible), []), d = tt((w) => {
    a.current.isFocused = w, u(w), v();
  }, [
    v
  ]);
  Ad((w) => {
    a.current.isFocusVisible = w, v();
  }, [], {
    isTextInput: r
  });
  let { focusProps: y } = _d({
    isDisabled: n,
    onFocusChange: d
  }), { focusWithinProps: k } = Nd({
    isDisabled: !n,
    onFocusWithinChange: d
  });
  return {
    isFocused: l,
    isFocusVisible: c,
    focusProps: n ? k : y
  };
}
var Dd = Object.defineProperty, jd = (e, t, r) => t in e ? Dd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ga = (e, t, r) => (jd(e, typeof t != "symbol" ? t + "" : t, r), r);
let Hd = class {
  constructor() {
    Ga(this, "current", this.detect()), Ga(this, "handoffState", "pending"), Ga(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Jt = new Hd();
function Er(e) {
  return Jt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Al(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Et() {
  let e = [], t = { addEventListener(r, n, a, l) {
    return r.addEventListener(n, a, l), t.add(() => r.removeEventListener(n, a, l));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return Al(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, a) {
    let l = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: a }), this.add(() => {
      Object.assign(r.style, { [n]: l });
    });
  }, group(r) {
    let n = Et();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.includes(r) || e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let a of e.splice(n, 1))
          a();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function At() {
  let [e] = Ce(Et);
  return we(() => () => e.dispose(), [e]), e;
}
let je = (e, t) => {
  Jt.isServer ? we(e, t) : Vn(e, t);
};
function $t(e) {
  let t = te(e);
  return je(() => {
    t.current = e;
  }, [e]), t;
}
let X = function(e) {
  let t = $t(e);
  return V.useCallback((...r) => t.current(...r), [t]);
};
function Bd(e) {
  let t = e.width / 2, r = e.height / 2;
  return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function Wd(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function $o({ disabled: e = !1 } = {}) {
  let t = te(null), [r, n] = Ce(!1), a = At(), l = X(() => {
    t.current = null, n(!1), a.dispose();
  }), u = X((c) => {
    if (a.dispose(), t.current === null) {
      t.current = c.currentTarget, n(!0);
      {
        let f = Er(c.currentTarget);
        a.addEventListener(f, "pointerup", l, !1), a.addEventListener(f, "pointermove", (v) => {
          if (t.current) {
            let d = Bd(v);
            n(Wd(d, t.current.getBoundingClientRect()));
          }
        }, !1), a.addEventListener(f, "pointercancel", l, !1);
      }
    }
  });
  return { pressed: r, pressProps: e ? {} : { onPointerDown: u, onPointerUp: l, onClick: l } };
}
let Vd = He(void 0);
function Un() {
  return Fe(Vd);
}
function Ki(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ze(e, t, ...r) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...r) : a;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Ze), n;
}
var Qt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Qt || {}), Ud = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ud || {});
function Ue({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: a, visible: l = !0, name: u, mergeRefs: c }) {
  c = c ?? Gd;
  let f = Nl(t, e);
  if (l)
    return Pn(f, r, n, u, c);
  let v = a ?? 0;
  if (v & 2) {
    let { static: d = !1, ...y } = f;
    if (d)
      return Pn(y, r, n, u, c);
  }
  if (v & 1) {
    let { unmount: d = !0, ...y } = f;
    return Ze(d ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Pn({ ...y, hidden: !0, style: { display: "none" } }, r, n, u, c);
    } });
  }
  return Pn(f, r, n, u, c);
}
function Pn(e, t = {}, r, n, a) {
  let { as: l = r, children: u, refName: c = "ref", ...f } = Ya(e, ["unmount", "static"]), v = e.ref !== void 0 ? { [c]: e.ref } : {}, d = typeof u == "function" ? u(t) : u;
  "className" in f && f.className && typeof f.className == "function" && (f.className = f.className(t)), f["aria-labelledby"] && f["aria-labelledby"] === f.id && (f["aria-labelledby"] = void 0);
  let y = {};
  if (t) {
    let k = !1, w = [];
    for (let [T, g] of Object.entries(t))
      typeof g == "boolean" && (k = !0), g === !0 && w.push(T.replace(/([A-Z])/g, ($) => `-${$.toLowerCase()}`));
    if (k) {
      y["data-headlessui-state"] = w.join(" ");
      for (let T of w)
        y[`data-${T}`] = "";
    }
  }
  if (l === Lt && (Object.keys(Gt(f)).length > 0 || Object.keys(Gt(y)).length > 0))
    if (!gd(d) || Array.isArray(d) && d.length > 1) {
      if (Object.keys(Gt(f)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Gt(f)).concat(Object.keys(Gt(y))).map((k) => `  - ${k}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((k) => `  - ${k}`).join(`
`)].join(`
`));
    } else {
      let k = d.props, w = k == null ? void 0 : k.className, T = typeof w == "function" ? (...R) => Ki(w(...R), f.className) : Ki(w, f.className), g = T ? { className: T } : {}, $ = Nl(d.props, Gt(Ya(f, ["ref"])));
      for (let R in y)
        R in $ && delete y[R];
      return hd(d, Object.assign({}, $, y, v, { ref: a(d.ref, v.ref) }, g));
    }
  return md(l, Object.assign({}, Ya(f, ["ref"]), l !== Lt && v, l !== Lt && y), d);
}
function zd() {
  let e = te([]), t = tt((r) => {
    for (let n of e.current)
      n != null && (typeof n == "function" ? n(r) : n.current = r);
  }, []);
  return (...r) => {
    if (!r.every((n) => n == null))
      return e.current = r, t;
  };
}
function Gd(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Nl(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let a in n)
      a.startsWith("on") && typeof n[a] == "function" ? (r[a] != null || (r[a] = []), r[a].push(n[a])) : t[a] = n[a];
  if (t.disabled || t["aria-disabled"])
    for (let n in r)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) && (r[n] = [(a) => {
        var l;
        return (l = a == null ? void 0 : a.preventDefault) == null ? void 0 : l.call(a);
      }]);
  for (let n in r)
    Object.assign(t, { [n](a, ...l) {
      let u = r[n];
      for (let c of u) {
        if ((a instanceof Event || (a == null ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented)
          return;
        c(a, ...l);
      }
    } });
  return t;
}
function wr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let a in n)
      a.startsWith("on") && typeof n[a] == "function" ? (r[a] != null || (r[a] = []), r[a].push(n[a])) : t[a] = n[a];
  for (let n in r)
    Object.assign(t, { [n](...a) {
      let l = r[n];
      for (let u of l)
        u == null || u(...a);
    } });
  return t;
}
function Xe(e) {
  var t;
  return Object.assign(pd(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Gt(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Ya(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Il(e, t, r) {
  let [n, a] = Ce(r), l = e !== void 0, u = te(l), c = te(!1), f = te(!1);
  return l && !u.current && !c.current ? (c.current = !0, u.current = l, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !l && u.current && !f.current && (f.current = !0, u.current = l, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [l ? e : n, X((v) => (l || a(v), t == null ? void 0 : t(v)))];
}
function Dl(e) {
  let [t] = Ce(e);
  return t;
}
function jl(e = {}, t = null, r = []) {
  for (let [n, a] of Object.entries(e))
    Bl(r, Hl(t, n), a);
  return r;
}
function Hl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Bl(e, t, r) {
  if (Array.isArray(r))
    for (let [n, a] of r.entries())
      Bl(e, Hl(t, n.toString()), a);
  else
    r instanceof Date ? e.push([t, r.toISOString()]) : typeof r == "boolean" ? e.push([t, r ? "1" : "0"]) : typeof r == "string" ? e.push([t, r]) : typeof r == "number" ? e.push([t, `${r}`]) : r == null ? e.push([t, ""]) : jl(r, t, e);
}
function Wl(e) {
  var t, r;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let a of n.elements)
      if (a !== e && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
        a.click();
        return;
      }
    (r = n.requestSubmit) == null || r.call(n);
  }
}
let Yd = "div";
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
function qd(e, t) {
  var r;
  let { features: n = 1, ...a } = e, l = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : (r = a["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Ue({ ourProps: l, theirProps: a, slot: {}, defaultTag: Yd, name: "Hidden" });
}
let er = Xe(qd), Kd = He(null);
function Xd({ children: e }) {
  let t = Fe(Kd);
  if (!t)
    return V.createElement(V.Fragment, null, e);
  let { target: r } = t;
  return r ? kl(V.createElement(V.Fragment, null, e), r) : null;
}
function Vl({ data: e, form: t, disabled: r, onReset: n, overrides: a }) {
  let [l, u] = Ce(null), c = At();
  return we(() => {
    if (n && l)
      return c.addEventListener(l, "reset", n);
  }, [l, t, n]), V.createElement(Xd, null, V.createElement(Jd, { setForm: u, formId: t }), jl(e).map(([f, v]) => V.createElement(er, { features: Nt.Hidden, ...Gt({ key: f, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: r, name: f, value: v, ...a }) })));
}
function Jd({ setForm: e, formId: t }) {
  return we(() => {
    if (t) {
      let r = document.getElementById(t);
      r && e(r);
    }
  }, [e, t]), t ? null : V.createElement(er, { features: Nt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (r) => {
    if (!r)
      return;
    let n = r.closest("form");
    n && e(n);
  } });
}
let Zd = He(void 0);
function So() {
  return Fe(Zd);
}
function zn(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && Qd(r) ? !1 : n;
}
function Qd(e) {
  if (!e)
    return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ul = Symbol();
function zl(e, t = !0) {
  return Object.assign(e, { [Ul]: t });
}
function Ke(...e) {
  let t = te(e);
  we(() => {
    t.current = e;
  }, [e]);
  let r = X((n) => {
    for (let a of t.current)
      a != null && (typeof a == "function" ? a(n) : a.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Ul])) ? void 0 : r;
}
let Gn = He(null);
Gn.displayName = "DescriptionContext";
function Gl() {
  let e = Fe(Gn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Gl), t;
  }
  return e;
}
function Yl() {
  var e, t;
  return (t = (e = Fe(Gn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ev() {
  let [e, t] = Ce([]);
  return [e.length > 0 ? e.join(" ") : void 0, ue(() => function(r) {
    let n = X((l) => (t((u) => [...u, l]), () => t((u) => {
      let c = u.slice(), f = c.indexOf(l);
      return f !== -1 && c.splice(f, 1), c;
    }))), a = ue(() => ({ register: n, slot: r.slot, name: r.name, props: r.props, value: r.value }), [n, r.slot, r.name, r.props, r.value]);
    return V.createElement(Gn.Provider, { value: a }, r.children);
  }, [t])];
}
let tv = "p";
function rv(e, t) {
  let r = vt(), n = Un(), { id: a = `headlessui-description-${r}`, ...l } = e, u = Gl(), c = Ke(t);
  je(() => u.register(a), [a, u.register]);
  let f = n || !1, v = ue(() => ({ ...u.slot, disabled: f }), [u.slot, f]), d = { ref: c, ...u.props, id: a };
  return Ue({ ourProps: d, theirProps: l, slot: v, defaultTag: tv, name: u.name || "Description" });
}
let nv = Xe(rv), av = Object.assign(nv, {});
var _e = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_e || {});
let Yn = He(null);
Yn.displayName = "LabelContext";
function ql() {
  let e = Fe(Yn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ql), t;
  }
  return e;
}
function ko(e) {
  var t, r, n;
  let a = (r = (t = Fe(Yn)) == null ? void 0 : t.value) != null ? r : void 0;
  return ((n = e == null ? void 0 : e.length) != null ? n : 0) > 0 ? [a, ...e].filter(Boolean).join(" ") : a;
}
function Kl({ inherit: e = !1 } = {}) {
  let t = ko(), [r, n] = Ce([]), a = e ? [t, ...r].filter(Boolean) : r;
  return [a.length > 0 ? a.join(" ") : void 0, ue(() => function(l) {
    let u = X((f) => (n((v) => [...v, f]), () => n((v) => {
      let d = v.slice(), y = d.indexOf(f);
      return y !== -1 && d.splice(y, 1), d;
    }))), c = ue(() => ({ register: u, slot: l.slot, name: l.name, props: l.props, value: l.value }), [u, l.slot, l.name, l.props, l.value]);
    return V.createElement(Yn.Provider, { value: c }, l.children);
  }, [n])];
}
let ov = "label";
function iv(e, t) {
  var r;
  let n = vt(), a = ql(), l = So(), u = Un(), { id: c = `headlessui-label-${n}`, htmlFor: f = l ?? ((r = a.props) == null ? void 0 : r.htmlFor), passive: v = !1, ...d } = e, y = Ke(t);
  je(() => a.register(c), [c, a.register]);
  let k = X(($) => {
    let R = $.currentTarget;
    if (R instanceof HTMLLabelElement && $.preventDefault(), a.props && "onClick" in a.props && typeof a.props.onClick == "function" && a.props.onClick($), R instanceof HTMLLabelElement) {
      let P = document.getElementById(R.htmlFor);
      if (P) {
        let O = P.getAttribute("disabled");
        if (O === "true" || O === "")
          return;
        let N = P.getAttribute("aria-disabled");
        if (N === "true" || N === "")
          return;
        (P instanceof HTMLInputElement && (P.type === "radio" || P.type === "checkbox") || P.role === "radio" || P.role === "checkbox" || P.role === "switch") && P.click(), P.focus({ preventScroll: !0 });
      }
    }
  }), w = u || !1, T = ue(() => ({ ...a.slot, disabled: w }), [a.slot, w]), g = { ref: y, ...a.props, id: c, htmlFor: f, onClick: k };
  return v && ("onClick" in g && (delete g.htmlFor, delete g.onClick), "onClick" in d && delete d.onClick), Ue({ ourProps: g, theirProps: d, slot: T, defaultTag: f ? ov : "div", name: a.name || "Label" });
}
let lv = Xe(iv), Xl = Object.assign(lv, {}), uv = He(() => {
});
function sv({ value: e, children: t }) {
  return V.createElement(uv.Provider, { value: e }, t);
}
function cv(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function fv(e = cv) {
  return tt((t, r) => {
    if (typeof e == "string") {
      let n = e;
      return (t == null ? void 0 : t[n]) === (r == null ? void 0 : r[n]);
    }
    return e(t, r);
  }, [e]);
}
function dv(e) {
  if (e === null)
    return { width: 0, height: 0 };
  let { width: t, height: r } = e.getBoundingClientRect();
  return { width: t, height: r };
}
function Jl(e, t = !1) {
  let r = e === null ? null : "current" in e ? e.current : e, [n, a] = yo(() => ({}), {}), l = ue(() => dv(r), [r, n]);
  return je(() => {
    if (!r)
      return;
    let u = new ResizeObserver(a);
    return u.observe(r), () => {
      u.disconnect();
    };
  }, [r]), t ? { width: `${l.width}px`, height: `${l.height}px` } : l;
}
let lo = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map();
function Xi(e) {
  var t;
  let r = (t = Gr.get(e)) != null ? t : 0;
  return Gr.set(e, r + 1), r !== 0 ? () => Ji(e) : (lo.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Ji(e));
}
function Ji(e) {
  var t;
  let r = (t = Gr.get(e)) != null ? t : 1;
  if (r === 1 ? Gr.delete(e) : Gr.set(e, r - 1), r !== 1)
    return;
  let n = lo.get(e);
  n && (n["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n["aria-hidden"]), e.inert = n.inert, lo.delete(e));
}
function vv({ allowed: e, disallowed: t } = {}, r = !0) {
  je(() => {
    var n, a;
    if (!r)
      return;
    let l = Et();
    for (let c of (n = t == null ? void 0 : t()) != null ? n : [])
      c && l.add(Xi(c));
    let u = (a = e == null ? void 0 : e()) != null ? a : [];
    for (let c of u) {
      if (!c)
        continue;
      let f = Er(c);
      if (!f)
        continue;
      let v = c.parentElement;
      for (; v && v !== f.body; ) {
        for (let d of v.children)
          u.some((y) => d.contains(y)) || l.add(Xi(d));
        v = v.parentElement;
      }
    }
    return l.dispose;
  }, [r, e, t]);
}
function Zl(e, t, r = !0) {
  let n = $t((a) => {
    let l = a.getBoundingClientRect();
    l.x === 0 && l.y === 0 && l.width === 0 && l.height === 0 && t();
  });
  we(() => {
    if (!r)
      return;
    let a = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!a)
      return;
    let l = Et();
    if (typeof ResizeObserver < "u") {
      let u = new ResizeObserver(() => n.current(a));
      u.observe(a), l.add(() => u.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let u = new IntersectionObserver(() => n.current(a));
      u.observe(a), l.add(() => u.disconnect());
    }
    return () => l.dispose();
  }, [e, n, r]);
}
let uo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), pv = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var yt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(yt || {}), Dn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Dn || {}), gv = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(gv || {});
function qn(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(uo)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function hv(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(pv)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Kn = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Kn || {});
function To(e, t = 0) {
  var r;
  return e === ((r = Er(e)) == null ? void 0 : r.body) ? !1 : Ze(t, { 0() {
    return e.matches(uo);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(uo))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var mv = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(mv || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let bv = ["textarea", "input"].join(",");
function yv(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, bv)) != null ? r : !1;
}
function Ql(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let a = t(r), l = t(n);
    if (a === null || l === null)
      return 0;
    let u = a.compareDocumentPosition(l);
    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Kt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: a = [] } = {}) {
  let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, u = Array.isArray(e) ? r ? Ql(e) : e : t & 64 ? hv(e) : qn(e);
  a.length > 0 && u.length > 1 && (u = u.filter((w) => !a.some((T) => T != null && "current" in T ? (T == null ? void 0 : T.current) === w : T === w))), n = n ?? l.activeElement;
  let c = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, u.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(n)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = t & 32 ? { preventScroll: !0 } : {}, d = 0, y = u.length, k;
  do {
    if (d >= y || d + y <= 0)
      return 0;
    let w = f + d;
    if (t & 16)
      w = (w + y) % y;
    else {
      if (w < 0)
        return 3;
      if (w >= y)
        return 1;
    }
    k = u[w], k == null || k.focus(v), d += c;
  } while (k !== l.activeElement);
  return t & 6 && yv(k) && k.select(), 2;
}
function eu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function wv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function xv() {
  return eu() || wv();
}
function _n(e, t, r) {
  let n = $t(t);
  we(() => {
    function a(l) {
      n.current(l);
    }
    return document.addEventListener(e, a, r), () => document.removeEventListener(e, a, r);
  }, [e, r]);
}
function tu(e, t, r) {
  let n = $t(t);
  we(() => {
    function a(l) {
      n.current(l);
    }
    return window.addEventListener(e, a, r), () => window.removeEventListener(e, a, r);
  }, [e, r]);
}
function ru(e, t, r = !0) {
  let n = te(!1);
  we(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function a(u, c) {
    if (!n.current || u.defaultPrevented)
      return;
    let f = c(u);
    if (f === null || !f.getRootNode().contains(f) || !f.isConnected)
      return;
    let v = function d(y) {
      return typeof y == "function" ? d(y()) : Array.isArray(y) || y instanceof Set ? y : [y];
    }(e);
    for (let d of v) {
      if (d === null)
        continue;
      let y = d instanceof HTMLElement ? d : d.current;
      if (y != null && y.contains(f) || u.composed && u.composedPath().includes(y))
        return;
    }
    return !To(f, Kn.Loose) && f.tabIndex !== -1 && u.preventDefault(), t(u, f);
  }
  let l = te(null);
  _n("pointerdown", (u) => {
    var c, f;
    n.current && (l.current = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target);
  }, !0), _n("mousedown", (u) => {
    var c, f;
    n.current && (l.current = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target);
  }, !0), _n("click", (u) => {
    xv() || l.current && (a(u, () => l.current), l.current = null);
  }, !0), _n("touchend", (u) => a(u, () => u.target instanceof HTMLElement ? u.target : null), !0), tu("blur", (u) => a(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function rr(...e) {
  return ue(() => Er(...e), [...e]);
}
function Ev(e, t, r, n) {
  let a = $t(r);
  we(() => {
    e = e ?? window;
    function l(u) {
      a.current(u);
    }
    return e.addEventListener(t, l, n), () => e.removeEventListener(t, l, n);
  }, [e, t, n]);
}
function Zi(e) {
  var t;
  if (e.type)
    return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function Ro(e, t) {
  let [r, n] = Ce(() => Zi(e));
  return je(() => {
    n(Zi(e));
  }, [e.type, e.as]), je(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button");
  }, [r, t]), r;
}
function $v(e) {
  return bd(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Sv(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(a) {
    return n.add(a), () => n.delete(a);
  }, dispatch(a, ...l) {
    let u = t[a].call(r, ...l);
    u && (r = u, n.forEach((c) => c()));
  } };
}
function kv() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement, a = (r = t.defaultView) != null ? r : window;
    e = Math.max(0, a.innerWidth - n.clientWidth);
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, a = Math.max(0, n.clientWidth - n.offsetWidth), l = Math.max(0, e - a);
    r.style(n, "paddingRight", `${l}px`);
  } };
}
function Tv() {
  return eu() ? { before({ doc: e, d: t, meta: r }) {
    function n(a) {
      return r.containers.flatMap((l) => l()).some((l) => l.contains(a));
    }
    t.microTask(() => {
      var a;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let c = Et();
        c.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => c.dispose()));
      }
      let l = (a = window.scrollY) != null ? a : window.pageYOffset, u = null;
      t.addEventListener(e, "click", (c) => {
        if (c.target instanceof HTMLElement)
          try {
            let f = c.target.closest("a");
            if (!f)
              return;
            let { hash: v } = new URL(f.href), d = e.querySelector(v);
            d && !n(d) && (u = d);
          } catch {
          }
      }, !0), t.addEventListener(e, "touchstart", (c) => {
        if (c.target instanceof HTMLElement)
          if (n(c.target)) {
            let f = c.target;
            for (; f.parentElement && n(f.parentElement); )
              f = f.parentElement;
            t.style(f, "overscrollBehavior", "contain");
          } else
            t.style(c.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (c) => {
        if (c.target instanceof HTMLElement) {
          if (c.target.tagName === "INPUT")
            return;
          if (n(c.target)) {
            let f = c.target;
            for (; f.parentElement && f.dataset.headlessuiPortal !== "" && !(f.scrollHeight > f.clientHeight || f.scrollWidth > f.clientWidth); )
              f = f.parentElement;
            f.dataset.headlessuiPortal === "" && c.preventDefault();
          } else
            c.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var c;
        let f = (c = window.scrollY) != null ? c : window.pageYOffset;
        l !== f && window.scrollTo(0, l), u && u.isConnected && (u.scrollIntoView({ block: "nearest" }), u = null);
      });
    });
  } } : {};
}
function Rv() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Pv(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let Xt = Sv(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Et(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Pv(r) }, a = [Tv(), kv(), Rv()];
  a.forEach(({ before: l }) => l == null ? void 0 : l(n)), a.forEach(({ after: l }) => l == null ? void 0 : l(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Xt.subscribe(() => {
  let e = Xt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", a = r.count !== 0;
    (a && !n || !a && n) && Xt.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Xt.dispatch("TEARDOWN", r);
  }
});
function _v(e, t, r = () => ({ containers: [] })) {
  let n = $v(Xt), a = e ? n.get(e) : void 0, l = a ? a.count > 0 : !1;
  return je(() => {
    if (!(!e || !t))
      return Xt.dispatch("PUSH", e, r), () => Xt.dispatch("POP", e, r);
  }, [t, e]), l;
}
function nu(e, t, r = () => [document.body]) {
  _v(e, t, (n) => {
    var a;
    return { containers: [...(a = n.containers) != null ? a : [], r] };
  });
}
function Qi(e) {
  return [e.screenX, e.screenY];
}
function Ov() {
  let e = te([-1, -1]);
  return { wasMoved(t) {
    let r = Qi(t);
    return e.current[0] === r[0] && e.current[1] === r[1] ? !1 : (e.current = r, !0);
  }, update(t) {
    e.current = Qi(t);
  } };
}
function $r(e) {
  return au(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function it(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function St(e) {
  var t;
  return (t = (au(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function au(e) {
  return e instanceof Node || e instanceof it(e).Node;
}
function et(e) {
  return e instanceof Element || e instanceof it(e).Element;
}
function pt(e) {
  return e instanceof HTMLElement || e instanceof it(e).HTMLElement;
}
function el(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof it(e).ShadowRoot;
}
function Qr(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: a
  } = ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function Cv(e) {
  return ["table", "td", "th"].includes($r(e));
}
function Po(e) {
  const t = _o(), r = ft(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Fv(e) {
  let t = It(e);
  for (; pt(t) && !xr(t); ) {
    if (Po(t))
      return t;
    t = It(t);
  }
  return null;
}
function _o() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xr(e) {
  return ["html", "body", "#document"].includes($r(e));
}
function ft(e) {
  return it(e).getComputedStyle(e);
}
function Xn(e) {
  return et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function It(e) {
  if ($r(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    el(e) && e.host || // Fallback.
    St(e)
  );
  return el(t) ? t.host : t;
}
function ou(e) {
  const t = It(e);
  return xr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pt(t) && Qr(t) ? t : ou(t);
}
function qr(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const a = ou(e), l = a === ((n = e.ownerDocument) == null ? void 0 : n.body), u = it(a);
  return l ? t.concat(u, u.visualViewport || [], Qr(a) ? a : [], u.frameElement && r ? qr(u.frameElement) : []) : t.concat(a, qr(a, [], r));
}
function Mv() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: r,
      version: n
    } = t;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
const Mt = Math.min, ot = Math.max, jn = Math.round, On = Math.floor, Dt = (e) => ({
  x: e,
  y: e
}), Lv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Av = {
  start: "end",
  end: "start"
};
function tl(e, t, r) {
  return ot(e, Mt(t, r));
}
function en(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e) {
  return e.split("-")[0];
}
function tn(e) {
  return e.split("-")[1];
}
function iu(e) {
  return e === "x" ? "y" : "x";
}
function lu(e) {
  return e === "y" ? "height" : "width";
}
function rn(e) {
  return ["top", "bottom"].includes(jt(e)) ? "y" : "x";
}
function uu(e) {
  return iu(rn(e));
}
function Nv(e, t, r) {
  r === void 0 && (r = !1);
  const n = tn(e), a = uu(e), l = lu(a);
  let u = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (u = Hn(u)), [u, Hn(u)];
}
function Iv(e) {
  const t = Hn(e);
  return [so(e), t, so(t)];
}
function so(e) {
  return e.replace(/start|end/g, (t) => Av[t]);
}
function Dv(e, t, r) {
  const n = ["left", "right"], a = ["right", "left"], l = ["top", "bottom"], u = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? l : u;
    default:
      return [];
  }
}
function jv(e, t, r, n) {
  const a = tn(e);
  let l = Dv(jt(e), r === "start", n);
  return a && (l = l.map((u) => u + "-" + a), t && (l = l.concat(l.map(so)))), l;
}
function Hn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lv[t]);
}
function Hv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bv(e) {
  return typeof e != "number" ? Hv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Bn(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: a
  } = e;
  return {
    width: n,
    height: a,
    top: r,
    left: t,
    right: t + n,
    bottom: r + a,
    x: t,
    y: r
  };
}
function rl(e, t, r) {
  let {
    reference: n,
    floating: a
  } = e;
  const l = rn(t), u = uu(t), c = lu(u), f = jt(t), v = l === "y", d = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, k = n[c] / 2 - a[c] / 2;
  let w;
  switch (f) {
    case "top":
      w = {
        x: d,
        y: n.y - a.height
      };
      break;
    case "bottom":
      w = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      w = {
        x: n.x + n.width,
        y
      };
      break;
    case "left":
      w = {
        x: n.x - a.width,
        y
      };
      break;
    default:
      w = {
        x: n.x,
        y: n.y
      };
  }
  switch (tn(t)) {
    case "start":
      w[u] -= k * (r && v ? -1 : 1);
      break;
    case "end":
      w[u] += k * (r && v ? -1 : 1);
      break;
  }
  return w;
}
const Wv = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: l = [],
    platform: u
  } = r, c = l.filter(Boolean), f = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let v = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y
  } = rl(v, n, f), k = n, w = {}, T = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: $,
      fn: R
    } = c[g], {
      x: P,
      y: O,
      data: N,
      reset: H
    } = await R({
      x: d,
      y,
      initialPlacement: n,
      placement: k,
      strategy: a,
      middlewareData: w,
      rects: v,
      platform: u,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = P ?? d, y = O ?? y, w = {
      ...w,
      [$]: {
        ...w[$],
        ...N
      }
    }, H && T <= 50 && (T++, typeof H == "object" && (H.placement && (k = H.placement), H.rects && (v = H.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : H.rects), {
      x: d,
      y
    } = rl(v, k, f)), g = -1);
  }
  return {
    x: d,
    y,
    placement: k,
    strategy: a,
    middlewareData: w
  };
};
async function Jn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: l,
    rects: u,
    elements: c,
    strategy: f
  } = e, {
    boundary: v = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: y = "floating",
    altBoundary: k = !1,
    padding: w = 0
  } = en(t, e), T = Bv(w), $ = c[k ? y === "floating" ? "reference" : "floating" : y], R = Bn(await l.getClippingRect({
    element: (r = await (l.isElement == null ? void 0 : l.isElement($))) == null || r ? $ : $.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(c.floating)),
    boundary: v,
    rootBoundary: d,
    strategy: f
  })), P = y === "floating" ? {
    x: n,
    y: a,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c.floating)), N = await (l.isElement == null ? void 0 : l.isElement(O)) ? await (l.getScale == null ? void 0 : l.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, H = Bn(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: P,
    offsetParent: O,
    strategy: f
  }) : P);
  return {
    top: (R.top - H.top + T.top) / N.y,
    bottom: (H.bottom - R.bottom + T.bottom) / N.y,
    left: (R.left - H.left + T.left) / N.x,
    right: (H.right - R.right + T.right) / N.x
  };
}
const Vv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: a,
        middlewareData: l,
        rects: u,
        initialPlacement: c,
        platform: f,
        elements: v
      } = t, {
        mainAxis: d = !0,
        crossAxis: y = !0,
        fallbackPlacements: k,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: g = !0,
        ...$
      } = en(e, t);
      if ((r = l.arrow) != null && r.alignmentOffset)
        return {};
      const R = jt(a), P = jt(c) === c, O = await (f.isRTL == null ? void 0 : f.isRTL(v.floating)), N = k || (P || !g ? [Hn(c)] : Iv(c));
      !k && T !== "none" && N.push(...jv(c, g, T, O));
      const H = [c, ...N], C = await Jn(t, $), K = [];
      let j = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (d && K.push(C[R]), y) {
        const J = Nv(a, u, O);
        K.push(C[J[0]], C[J[1]]);
      }
      if (j = [...j, {
        placement: a,
        overflows: K
      }], !K.every((J) => J <= 0)) {
        var ne, ge;
        const J = (((ne = l.flip) == null ? void 0 : ne.index) || 0) + 1, Y = H[J];
        if (Y)
          return {
            data: {
              index: J,
              overflows: j
            },
            reset: {
              placement: Y
            }
          };
        let ve = (ge = j.filter((I) => I.overflows[0] <= 0).sort((I, Z) => I.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : ge.placement;
        if (!ve)
          switch (w) {
            case "bestFit": {
              var se;
              const I = (se = j.map((Z) => [Z.placement, Z.overflows.filter((D) => D > 0).reduce((D, ae) => D + ae, 0)]).sort((Z, D) => Z[1] - D[1])[0]) == null ? void 0 : se[0];
              I && (ve = I);
              break;
            }
            case "initialPlacement":
              ve = c;
              break;
          }
        if (a !== ve)
          return {
            reset: {
              placement: ve
            }
          };
      }
      return {};
    }
  };
};
async function Uv(e, t) {
  const {
    placement: r,
    platform: n,
    elements: a
  } = e, l = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), u = jt(r), c = tn(r), f = rn(r) === "y", v = ["left", "top"].includes(u) ? -1 : 1, d = l && f ? -1 : 1, y = en(t, e);
  let {
    mainAxis: k,
    crossAxis: w,
    alignmentAxis: T
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...y
  };
  return c && typeof T == "number" && (w = c === "end" ? T * -1 : T), f ? {
    x: w * d,
    y: k * v
  } : {
    x: k * v,
    y: w * d
  };
}
const zv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: a,
        y: l,
        placement: u,
        middlewareData: c
      } = t, f = await Uv(t, e);
      return u === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: a + f.x,
        y: l + f.y,
        data: {
          ...f,
          placement: u
        }
      };
    }
  };
}, Gv = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: a
      } = t, {
        mainAxis: l = !0,
        crossAxis: u = !1,
        limiter: c = {
          fn: ($) => {
            let {
              x: R,
              y: P
            } = $;
            return {
              x: R,
              y: P
            };
          }
        },
        ...f
      } = en(e, t), v = {
        x: r,
        y: n
      }, d = await Jn(t, f), y = rn(jt(a)), k = iu(y);
      let w = v[k], T = v[y];
      if (l) {
        const $ = k === "y" ? "top" : "left", R = k === "y" ? "bottom" : "right", P = w + d[$], O = w - d[R];
        w = tl(P, w, O);
      }
      if (u) {
        const $ = y === "y" ? "top" : "left", R = y === "y" ? "bottom" : "right", P = T + d[$], O = T - d[R];
        T = tl(P, T, O);
      }
      const g = c.fn({
        ...t,
        [k]: w,
        [y]: T
      });
      return {
        ...g,
        data: {
          x: g.x - r,
          y: g.y - n
        }
      };
    }
  };
}, Yv = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: r,
        rects: n,
        platform: a,
        elements: l
      } = t, {
        apply: u = () => {
        },
        ...c
      } = en(e, t), f = await Jn(t, c), v = jt(r), d = tn(r), y = rn(r) === "y", {
        width: k,
        height: w
      } = n.floating;
      let T, g;
      v === "top" || v === "bottom" ? (T = v, g = d === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (g = v, T = d === "end" ? "top" : "bottom");
      const $ = w - f.top - f.bottom, R = k - f.left - f.right, P = Mt(w - f[T], $), O = Mt(k - f[g], R), N = !t.middlewareData.shift;
      let H = P, C = O;
      if (y ? C = d || N ? Mt(O, R) : R : H = d || N ? Mt(P, $) : $, N && !d) {
        const j = ot(f.left, 0), ne = ot(f.right, 0), ge = ot(f.top, 0), se = ot(f.bottom, 0);
        y ? C = k - 2 * (j !== 0 || ne !== 0 ? j + ne : ot(f.left, f.right)) : H = w - 2 * (ge !== 0 || se !== 0 ? ge + se : ot(f.top, f.bottom));
      }
      await u({
        ...t,
        availableWidth: C,
        availableHeight: H
      });
      const K = await a.getDimensions(l.floating);
      return k !== K.width || w !== K.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function su(e) {
  const t = ft(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = pt(e), l = a ? e.offsetWidth : r, u = a ? e.offsetHeight : n, c = jn(r) !== l || jn(n) !== u;
  return c && (r = l, n = u), {
    width: r,
    height: n,
    $: c
  };
}
function Oo(e) {
  return et(e) ? e : e.contextElement;
}
function yr(e) {
  const t = Oo(e);
  if (!pt(t))
    return Dt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: l
  } = su(t);
  let u = (l ? jn(r.width) : r.width) / n, c = (l ? jn(r.height) : r.height) / a;
  return (!u || !Number.isFinite(u)) && (u = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: u,
    y: c
  };
}
const qv = /* @__PURE__ */ Dt(0);
function cu(e) {
  const t = it(e);
  return !_o() || !t.visualViewport ? qv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kv(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== it(e) ? !1 : t;
}
function tr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), l = Oo(e);
  let u = Dt(1);
  t && (n ? et(n) && (u = yr(n)) : u = yr(e));
  const c = Kv(l, r, n) ? cu(l) : Dt(0);
  let f = (a.left + c.x) / u.x, v = (a.top + c.y) / u.y, d = a.width / u.x, y = a.height / u.y;
  if (l) {
    const k = it(l), w = n && et(n) ? it(n) : n;
    let T = k, g = T.frameElement;
    for (; g && n && w !== T; ) {
      const $ = yr(g), R = g.getBoundingClientRect(), P = ft(g), O = R.left + (g.clientLeft + parseFloat(P.paddingLeft)) * $.x, N = R.top + (g.clientTop + parseFloat(P.paddingTop)) * $.y;
      f *= $.x, v *= $.y, d *= $.x, y *= $.y, f += O, v += N, T = it(g), g = T.frameElement;
    }
  }
  return Bn({
    width: d,
    height: y,
    x: f,
    y: v
  });
}
const Xv = [":popover-open", ":modal"];
function Co(e) {
  return Xv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Jv(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: a
  } = e;
  const l = a === "fixed", u = St(n), c = t ? Co(t.floating) : !1;
  if (n === u || c && l)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, v = Dt(1);
  const d = Dt(0), y = pt(n);
  if ((y || !y && !l) && (($r(n) !== "body" || Qr(u)) && (f = Xn(n)), pt(n))) {
    const k = tr(n);
    v = yr(n), d.x = k.x + n.clientLeft, d.y = k.y + n.clientTop;
  }
  return {
    width: r.width * v.x,
    height: r.height * v.y,
    x: r.x * v.x - f.scrollLeft * v.x + d.x,
    y: r.y * v.y - f.scrollTop * v.y + d.y
  };
}
function Zv(e) {
  return Array.from(e.getClientRects());
}
function fu(e) {
  return tr(St(e)).left + Xn(e).scrollLeft;
}
function Qv(e) {
  const t = St(e), r = Xn(e), n = e.ownerDocument.body, a = ot(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), l = ot(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let u = -r.scrollLeft + fu(e);
  const c = -r.scrollTop;
  return ft(n).direction === "rtl" && (u += ot(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: l,
    x: u,
    y: c
  };
}
function e0(e, t) {
  const r = it(e), n = St(e), a = r.visualViewport;
  let l = n.clientWidth, u = n.clientHeight, c = 0, f = 0;
  if (a) {
    l = a.width, u = a.height;
    const v = _o();
    (!v || v && t === "fixed") && (c = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: l,
    height: u,
    x: c,
    y: f
  };
}
function t0(e, t) {
  const r = tr(e, !0, t === "fixed"), n = r.top + e.clientTop, a = r.left + e.clientLeft, l = pt(e) ? yr(e) : Dt(1), u = e.clientWidth * l.x, c = e.clientHeight * l.y, f = a * l.x, v = n * l.y;
  return {
    width: u,
    height: c,
    x: f,
    y: v
  };
}
function nl(e, t, r) {
  let n;
  if (t === "viewport")
    n = e0(e, r);
  else if (t === "document")
    n = Qv(St(e));
  else if (et(t))
    n = t0(t, r);
  else {
    const a = cu(e);
    n = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Bn(n);
}
function du(e, t) {
  const r = It(e);
  return r === t || !et(r) || xr(r) ? !1 : ft(r).position === "fixed" || du(r, t);
}
function r0(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = qr(e, [], !1).filter((c) => et(c) && $r(c) !== "body"), a = null;
  const l = ft(e).position === "fixed";
  let u = l ? It(e) : e;
  for (; et(u) && !xr(u); ) {
    const c = ft(u), f = Po(u);
    !f && c.position === "fixed" && (a = null), (l ? !f && !a : !f && c.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Qr(u) && !f && du(e, u)) ? n = n.filter((d) => d !== u) : a = c, u = It(u);
  }
  return t.set(e, n), n;
}
function n0(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: a
  } = e;
  const u = [...r === "clippingAncestors" ? Co(t) ? [] : r0(t, this._c) : [].concat(r), n], c = u[0], f = u.reduce((v, d) => {
    const y = nl(t, d, a);
    return v.top = ot(y.top, v.top), v.right = Mt(y.right, v.right), v.bottom = Mt(y.bottom, v.bottom), v.left = ot(y.left, v.left), v;
  }, nl(t, c, a));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function a0(e) {
  const {
    width: t,
    height: r
  } = su(e);
  return {
    width: t,
    height: r
  };
}
function o0(e, t, r) {
  const n = pt(t), a = St(t), l = r === "fixed", u = tr(e, !0, l, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Dt(0);
  if (n || !n && !l)
    if (($r(t) !== "body" || Qr(a)) && (c = Xn(t)), n) {
      const y = tr(t, !0, l, t);
      f.x = y.x + t.clientLeft, f.y = y.y + t.clientTop;
    } else
      a && (f.x = fu(a));
  const v = u.left + c.scrollLeft - f.x, d = u.top + c.scrollTop - f.y;
  return {
    x: v,
    y: d,
    width: u.width,
    height: u.height
  };
}
function qa(e) {
  return ft(e).position === "static";
}
function al(e, t) {
  return !pt(e) || ft(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function vu(e, t) {
  const r = it(e);
  if (Co(e))
    return r;
  if (!pt(e)) {
    let a = It(e);
    for (; a && !xr(a); ) {
      if (et(a) && !qa(a))
        return a;
      a = It(a);
    }
    return r;
  }
  let n = al(e, t);
  for (; n && Cv(n) && qa(n); )
    n = al(n, t);
  return n && xr(n) && qa(n) && !Po(n) ? r : n || Fv(e) || r;
}
const i0 = async function(e) {
  const t = this.getOffsetParent || vu, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: o0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function l0(e) {
  return ft(e).direction === "rtl";
}
const u0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jv,
  getDocumentElement: St,
  getClippingRect: n0,
  getOffsetParent: vu,
  getElementRects: i0,
  getClientRects: Zv,
  getDimensions: a0,
  getScale: yr,
  isElement: et,
  isRTL: l0
};
function s0(e, t) {
  let r = null, n;
  const a = St(e);
  function l() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function u(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), l();
    const {
      left: v,
      top: d,
      width: y,
      height: k
    } = e.getBoundingClientRect();
    if (c || t(), !y || !k)
      return;
    const w = On(d), T = On(a.clientWidth - (v + y)), g = On(a.clientHeight - (d + k)), $ = On(v), P = {
      rootMargin: -w + "px " + -T + "px " + -g + "px " + -$ + "px",
      threshold: ot(0, Mt(1, f)) || 1
    };
    let O = !0;
    function N(H) {
      const C = H[0].intersectionRatio;
      if (C !== f) {
        if (!O)
          return u();
        C ? u(!1, C) : n = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      O = !1;
    }
    try {
      r = new IntersectionObserver(N, {
        ...P,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(N, P);
    }
    r.observe(e);
  }
  return u(!0), l;
}
function c0(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: l = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = n, v = Oo(e), d = a || l ? [...v ? qr(v) : [], ...qr(t)] : [];
  d.forEach((R) => {
    a && R.addEventListener("scroll", r, {
      passive: !0
    }), l && R.addEventListener("resize", r);
  });
  const y = v && c ? s0(v, r) : null;
  let k = -1, w = null;
  u && (w = new ResizeObserver((R) => {
    let [P] = R;
    P && P.target === v && w && (w.unobserve(t), cancelAnimationFrame(k), k = requestAnimationFrame(() => {
      var O;
      (O = w) == null || O.observe(t);
    })), r();
  }), v && !f && w.observe(v), w.observe(t));
  let T, g = f ? tr(e) : null;
  f && $();
  function $() {
    const R = tr(e);
    g && (R.x !== g.x || R.y !== g.y || R.width !== g.width || R.height !== g.height) && r(), g = R, T = requestAnimationFrame($);
  }
  return r(), () => {
    var R;
    d.forEach((P) => {
      a && P.removeEventListener("scroll", r), l && P.removeEventListener("resize", r);
    }), y == null || y(), (R = w) == null || R.disconnect(), w = null, f && cancelAnimationFrame(T);
  };
}
const Ka = Jn, f0 = zv, d0 = Gv, v0 = Vv, p0 = Yv, g0 = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: u0,
    ...r
  }, l = {
    ...a.platform,
    _c: n
  };
  return Wv(e, t, {
    ...a,
    platform: l
  });
};
var Ln = typeof document < "u" ? Vn : we;
function Wn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Wn(e[n], t[n]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const l = a[n];
      if (!(l === "_owner" && e.$$typeof) && !Wn(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pu(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ol(e, t) {
  const r = pu(e);
  return Math.round(t * r) / r;
}
function il(e) {
  const t = U.useRef(e);
  return Ln(() => {
    t.current = e;
  }), t;
}
function h0(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: a,
    elements: {
      reference: l,
      floating: u
    } = {},
    transform: c = !0,
    whileElementsMounted: f,
    open: v
  } = e, [d, y] = U.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [k, w] = U.useState(n);
  Wn(k, n) || w(n);
  const [T, g] = U.useState(null), [$, R] = U.useState(null), P = U.useCallback((D) => {
    D !== C.current && (C.current = D, g(D));
  }, []), O = U.useCallback((D) => {
    D !== K.current && (K.current = D, R(D));
  }, []), N = l || T, H = u || $, C = U.useRef(null), K = U.useRef(null), j = U.useRef(d), ne = f != null, ge = il(f), se = il(a), J = U.useCallback(() => {
    if (!C.current || !K.current)
      return;
    const D = {
      placement: t,
      strategy: r,
      middleware: k
    };
    se.current && (D.platform = se.current), g0(C.current, K.current, D).then((ae) => {
      const q = {
        ...ae,
        isPositioned: !0
      };
      Y.current && !Wn(j.current, q) && (j.current = q, yd.flushSync(() => {
        y(q);
      }));
    });
  }, [k, t, r, se]);
  Ln(() => {
    v === !1 && j.current.isPositioned && (j.current.isPositioned = !1, y((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [v]);
  const Y = U.useRef(!1);
  Ln(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), Ln(() => {
    if (N && (C.current = N), H && (K.current = H), N && H) {
      if (ge.current)
        return ge.current(N, H, J);
      J();
    }
  }, [N, H, J, ge, ne]);
  const ve = U.useMemo(() => ({
    reference: C,
    floating: K,
    setReference: P,
    setFloating: O
  }), [P, O]), I = U.useMemo(() => ({
    reference: N,
    floating: H
  }), [N, H]), Z = U.useMemo(() => {
    const D = {
      position: r,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return D;
    const ae = ol(I.floating, d.x), q = ol(I.floating, d.y);
    return c ? {
      ...D,
      transform: "translate(" + ae + "px, " + q + "px)",
      ...pu(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ae,
      top: q
    };
  }, [r, c, I.floating, d.x, d.y]);
  return U.useMemo(() => ({
    ...d,
    update: J,
    refs: ve,
    elements: I,
    floatingStyles: Z
  }), [d, J, ve, I, Z]);
}
const gu = (e, t) => ({
  ...f0(e),
  options: [e, t]
}), m0 = (e, t) => ({
  ...d0(e),
  options: [e, t]
}), b0 = (e, t) => ({
  ...v0(e),
  options: [e, t]
}), y0 = (e, t) => ({
  ...p0(e),
  options: [e, t]
}), hu = {
  ...U
}, w0 = hu.useInsertionEffect, x0 = w0 || ((e) => e());
function mu(e) {
  const t = U.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return x0(() => {
    t.current = e;
  }), U.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
var co = typeof document < "u" ? Vn : we;
let ll = !1, E0 = 0;
const ul = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + E0++
);
function $0() {
  const [e, t] = U.useState(() => ll ? ul() : void 0);
  return co(() => {
    e == null && t(ul());
  }, []), U.useEffect(() => {
    ll = !0;
  }, []), e;
}
const S0 = hu.useId, k0 = S0 || $0;
let Kr;
process.env.NODE_ENV !== "production" && (Kr = /* @__PURE__ */ new Set());
function T0() {
  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  const a = "Floating UI: " + r.join(" ");
  if (!((e = Kr) != null && e.has(a))) {
    var l;
    (l = Kr) == null || l.add(a), console.warn(a);
  }
}
function R0() {
  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  const a = "Floating UI: " + r.join(" ");
  if (!((e = Kr) != null && e.has(a))) {
    var l;
    (l = Kr) == null || l.add(a), console.error(a);
  }
}
function P0() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((a) => a(r));
    },
    on(t, r) {
      e.set(t, [...e.get(t) || [], r]);
    },
    off(t, r) {
      var n;
      e.set(t, ((n = e.get(t)) == null ? void 0 : n.filter((a) => a !== r)) || []);
    }
  };
}
const _0 = /* @__PURE__ */ U.createContext(null), O0 = /* @__PURE__ */ U.createContext(null), C0 = () => {
  var e;
  return ((e = U.useContext(_0)) == null ? void 0 : e.id) || null;
}, F0 = () => U.useContext(O0);
function M0(e) {
  const {
    open: t = !1,
    onOpenChange: r,
    elements: n
  } = e, a = k0(), l = U.useRef({}), [u] = U.useState(() => P0()), c = C0() != null;
  if (process.env.NODE_ENV !== "production") {
    const w = n.reference;
    w && !et(w) && R0("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [f, v] = U.useState(n.reference), d = mu((w, T, g) => {
    l.current.openEvent = w ? T : void 0, u.emit("openchange", {
      open: w,
      event: T,
      reason: g,
      nested: c
    }), r == null || r(w, T, g);
  }), y = U.useMemo(() => ({
    setPositionReference: v
  }), []), k = U.useMemo(() => ({
    reference: f || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [f, n.reference, n.floating]);
  return U.useMemo(() => ({
    dataRef: l,
    open: t,
    onOpenChange: d,
    elements: k,
    events: u,
    floatingId: a,
    refs: y
  }), [t, d, k, u, a, y]);
}
function L0(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, r = M0({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), n = e.rootContext || r, a = n.elements, [l, u] = U.useState(null), [c, f] = U.useState(null), d = (a == null ? void 0 : a.reference) || l, y = U.useRef(null), k = F0();
  co(() => {
    d && (y.current = d);
  }, [d]);
  const w = h0({
    ...e,
    elements: {
      ...a,
      ...c && {
        reference: c
      }
    }
  }), T = U.useCallback((O) => {
    const N = et(O) ? {
      getBoundingClientRect: () => O.getBoundingClientRect(),
      contextElement: O
    } : O;
    f(N), w.refs.setReference(N);
  }, [w.refs]), g = U.useCallback((O) => {
    (et(O) || O === null) && (y.current = O, u(O)), (et(w.refs.reference.current) || w.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    O !== null && !et(O)) && w.refs.setReference(O);
  }, [w.refs]), $ = U.useMemo(() => ({
    ...w.refs,
    setReference: g,
    setPositionReference: T,
    domReference: y
  }), [w.refs, g, T]), R = U.useMemo(() => ({
    ...w.elements,
    domReference: d
  }), [w.elements, d]), P = U.useMemo(() => ({
    ...w,
    ...n,
    refs: $,
    elements: R,
    nodeId: t
  }), [w, $, R, t, n]);
  return co(() => {
    n.dataRef.current.floatingContext = P;
    const O = k == null ? void 0 : k.nodesRef.current.find((N) => N.id === t);
    O && (O.context = P);
  }), U.useMemo(() => ({
    ...w,
    context: P,
    refs: $,
    elements: R
  }), [w, $, R, P]);
}
const sl = "active", cl = "selected";
function Xa(e, t, r) {
  const n = /* @__PURE__ */ new Map(), a = r === "item";
  let l = e;
  if (a && e) {
    const {
      [sl]: u,
      [cl]: c,
      ...f
    } = e;
    l = f;
  }
  return {
    ...r === "floating" && {
      tabIndex: -1
    },
    ...l,
    ...t.map((u) => {
      const c = u ? u[r] : null;
      return typeof c == "function" ? e ? c(e) : null : c;
    }).concat(e).reduce((u, c) => (c && Object.entries(c).forEach((f) => {
      let [v, d] = f;
      if (!(a && [sl, cl].includes(v)))
        if (v.indexOf("on") === 0) {
          if (n.has(v) || n.set(v, []), typeof d == "function") {
            var y;
            (y = n.get(v)) == null || y.push(d), u[v] = function() {
              for (var k, w = arguments.length, T = new Array(w), g = 0; g < w; g++)
                T[g] = arguments[g];
              return (k = n.get(v)) == null ? void 0 : k.map(($) => $(...T)).find(($) => $ !== void 0);
            };
          }
        } else
          u[v] = d;
    }), u), {})
  };
}
function A0(e) {
  e === void 0 && (e = []);
  const t = e, r = U.useCallback(
    (l) => Xa(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), n = U.useCallback(
    (l) => Xa(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), a = U.useCallback(
    (l) => Xa(l, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((l) => l == null ? void 0 : l.item)
  );
  return U.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: n,
    getItemProps: a
  }), [r, n, a]);
}
function fl(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const N0 = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: r,
      overflowRef: n,
      onFallbackChange: a,
      offset: l = 0,
      index: u = 0,
      minItemsVisible: c = 4,
      referenceOverflowThreshold: f = 0,
      scrollRef: v,
      ...d
    } = e, {
      rects: y,
      elements: {
        floating: k
      }
    } = t, w = r.current[u];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || T0('`placement` side must be "bottom" when using the `inner`', "middleware.")), !w)
      return {};
    const T = {
      ...t,
      ...await gu(-w.offsetTop - k.clientTop - y.reference.height / 2 - w.offsetHeight / 2 - l).fn(t)
    }, g = (v == null ? void 0 : v.current) || k, $ = await Ka(fl(T, g.scrollHeight), d), R = await Ka(T, {
      ...d,
      elementContext: "reference"
    }), P = Math.max(0, $.top), O = T.y + P, N = Math.max(0, g.scrollHeight - P - Math.max(0, $.bottom));
    return g.style.maxHeight = N + "px", g.scrollTop = P, a && (g.offsetHeight < w.offsetHeight * Math.min(c, r.current.length - 1) - 1 || R.top >= -f || R.bottom >= -f ? An(() => a(!0)) : An(() => a(!1))), n && (n.current = await Ka(fl({
      ...T,
      y: O
    }, g.offsetHeight), d)), {
      y: O
    };
  }
});
function I0(e, t) {
  const {
    open: r,
    elements: n
  } = e, {
    enabled: a = !0,
    overflowRef: l,
    scrollRef: u,
    onChange: c
  } = t, f = mu(c), v = U.useRef(!1), d = U.useRef(null), y = U.useRef(null);
  return U.useEffect(() => {
    if (!a)
      return;
    function k(T) {
      if (T.ctrlKey || !w || l.current == null)
        return;
      const g = T.deltaY, $ = l.current.top >= -0.5, R = l.current.bottom >= -0.5, P = w.scrollHeight - w.clientHeight, O = g < 0 ? -1 : 1, N = g < 0 ? "max" : "min";
      w.scrollHeight <= w.clientHeight || (!$ && g > 0 || !R && g < 0 ? (T.preventDefault(), An(() => {
        f((H) => H + Math[N](g, P * O));
      })) : /firefox/i.test(Mv()) && (w.scrollTop += g));
    }
    const w = (u == null ? void 0 : u.current) || n.floating;
    if (r && w)
      return w.addEventListener("wheel", k), requestAnimationFrame(() => {
        d.current = w.scrollTop, l.current != null && (y.current = {
          ...l.current
        });
      }), () => {
        d.current = null, y.current = null, w.removeEventListener("wheel", k);
      };
  }, [a, r, n.floating, l, u, f]), U.useMemo(() => a ? {
    floating: {
      onKeyDown() {
        v.current = !0;
      },
      onWheel() {
        v.current = !1;
      },
      onPointerMove() {
        v.current = !1;
      },
      onScroll() {
        const k = (u == null ? void 0 : u.current) || n.floating;
        if (!(!l.current || !k || !v.current)) {
          if (d.current !== null) {
            const w = k.scrollTop - d.current;
            (l.current.bottom < -0.5 && w < -1 || l.current.top < -0.5 && w > 1) && An(() => f((T) => T + w));
          }
          requestAnimationFrame(() => {
            d.current = k.scrollTop;
          });
        }
      }
    }
  } : {}, [a, l, n.floating, u, f]);
}
let Sr = He({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Sr.displayName = "FloatingContext";
let Fo = He(null);
Fo.displayName = "PlacementContext";
function bu(e) {
  return ue(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function yu() {
  return Fe(Sr).setReference;
}
function D0() {
  return Fe(Sr).getReferenceProps;
}
function wu() {
  let { getFloatingProps: e, slot: t } = Fe(Sr);
  return tt((...r) => Object.assign({}, e(...r), { "data-anchor": t.anchor }), [e, t]);
}
function xu(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = Fe(Fo), r = ue(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (a, l) => l instanceof HTMLElement ? l.outerHTML : l : void 0)]);
  je(() => {
    t == null || t(r ?? null);
  }, [t, r]);
  let n = Fe(Sr);
  return ue(() => [n.setFloating, e ? n.styles : {}], [n.setFloating, e, n.styles]);
}
let dl = 4;
function Eu({ children: e, enabled: t = !0 }) {
  let [r, n] = Ce(null), [a, l] = Ce(0), u = te(null), [c, f] = Ce(null);
  j0(c);
  let v = t && r !== null && c !== null, { to: d = "bottom", gap: y = 0, offset: k = 0, padding: w = 0, inner: T } = H0(r, c), [g, $ = "center"] = d.split(" ");
  je(() => {
    v && l(0);
  }, [v]);
  let { refs: R, floatingStyles: P, context: O } = L0({ open: v, placement: g === "selection" ? $ === "center" ? "bottom" : `bottom-${$}` : $ === "center" ? `${g}` : `${g}-${$}`, strategy: "absolute", transform: !1, middleware: [gu({ mainAxis: g === "selection" ? 0 : y, crossAxis: k }), m0({ padding: w }), g !== "selection" && b0({ padding: w }), g === "selection" && T ? N0({ ...T, padding: w, overflowRef: u, offset: a, minItemsVisible: dl, referenceOverflowThreshold: w, onFallbackChange(se) {
    var J, Y;
    if (!se)
      return;
    let ve = O.elements.floating;
    if (!ve)
      return;
    let I = parseFloat(getComputedStyle(ve).scrollPaddingBottom) || 0, Z = Math.min(dl, ve.childElementCount), D = 0, ae = 0;
    for (let q of (Y = (J = O.elements.floating) == null ? void 0 : J.childNodes) != null ? Y : [])
      if (q instanceof HTMLElement) {
        let fe = q.offsetTop, he = fe + q.clientHeight + I, Re = ve.scrollTop, Le = Re + ve.clientHeight;
        if (fe >= Re && he <= Le)
          Z--;
        else {
          ae = Math.max(0, Math.min(he, Le) - Math.max(fe, Re)), D = q.clientHeight;
          break;
        }
      }
    Z >= 1 && l((q) => {
      let fe = D * Z - ae + I;
      return q >= fe ? q : fe;
    });
  } }) : null, y0({ padding: w, apply({ availableWidth: se, availableHeight: J, elements: Y }) {
    Object.assign(Y.floating.style, { overflow: "auto", maxWidth: `${se}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${J}px)` });
  } })].filter(Boolean), whileElementsMounted: c0 }), [N = g, H = $] = O.placement.split("-");
  g === "selection" && (N = "selection");
  let C = ue(() => ({ anchor: [N, H].filter(Boolean).join(" ") }), [N, H]), K = I0(O, { overflowRef: u, onChange: l }), { getReferenceProps: j, getFloatingProps: ne } = A0([K]), ge = X((se) => {
    f(se), R.setFloating(se);
  });
  return U.createElement(Fo.Provider, { value: n }, U.createElement(Sr.Provider, { value: { setFloating: ge, setReference: R.setReference, styles: P, getReferenceProps: j, getFloatingProps: ne, slot: C } }, e));
}
function j0(e) {
  je(() => {
    if (!e)
      return;
    let t = new MutationObserver(() => {
      let r = e.style.maxHeight;
      parseFloat(r) !== parseInt(r) && (e.style.maxHeight = `${Math.ceil(parseFloat(r))}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function H0(e, t) {
  var r, n, a;
  let l = Ja((r = e == null ? void 0 : e.gap) != null ? r : "var(--anchor-gap, 0)", t), u = Ja((n = e == null ? void 0 : e.offset) != null ? n : "var(--anchor-offset, 0)", t), c = Ja((a = e == null ? void 0 : e.padding) != null ? a : "var(--anchor-padding, 0)", t);
  return { ...e, gap: l, offset: u, padding: c };
}
function Ja(e, t, r = void 0) {
  let n = At(), a = X((f, v) => {
    if (f == null)
      return [r, null];
    if (typeof f == "number")
      return [f, null];
    if (typeof f == "string") {
      if (!v)
        return [r, null];
      let d = vl(f, v);
      return [d, (y) => {
        let k = $u(f);
        {
          let w = k.map((T) => window.getComputedStyle(v).getPropertyValue(T));
          n.requestAnimationFrame(function T() {
            n.nextFrame(T);
            let g = !1;
            for (let [R, P] of k.entries()) {
              let O = window.getComputedStyle(v).getPropertyValue(P);
              if (w[R] !== O) {
                w[R] = O, g = !0;
                break;
              }
            }
            if (!g)
              return;
            let $ = vl(f, v);
            d !== $ && (y($), d = $);
          });
        }
        return n.dispose;
      }];
    }
    return [r, null];
  }), l = ue(() => a(e, t)[0], [e, t]), [u = l, c] = Ce();
  return je(() => {
    let [f, v] = a(e, t);
    if (c(f), !!v)
      return v(c);
  }, [e, t]), u;
}
function $u(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let r = t[1].indexOf(",");
    if (r === -1)
      return [t[1]];
    let n = t[1].slice(0, r).trim(), a = t[1].slice(r + 1).trim();
    return a ? [n, ...$u(a)] : [n];
  }
  return [];
}
function vl(e, t) {
  let r = document.createElement("div");
  t.appendChild(r), r.style.setProperty("margin-top", "0px", "important"), r.style.setProperty("margin-top", e, "important");
  let n = parseFloat(window.getComputedStyle(r).marginTop) || 0;
  return t.removeChild(r), n;
}
let Mo = He(null);
Mo.displayName = "OpenClosedContext";
var dt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(dt || {});
function Lo() {
  return Fe(Mo);
}
function Su({ value: e, children: t }) {
  return V.createElement(Mo.Provider, { value: e }, t);
}
function B0(e) {
  throw new Error("Unexpected object: " + e);
}
var De = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(De || {});
function Za(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let n = t.resolveActiveIndex(), a = n ?? -1;
  switch (e.focus) {
    case 0: {
      for (let l = 0; l < r.length; ++l)
        if (!t.resolveDisabled(r[l], l, r))
          return l;
      return n;
    }
    case 1: {
      a === -1 && (a = r.length);
      for (let l = a - 1; l >= 0; --l)
        if (!t.resolveDisabled(r[l], l, r))
          return l;
      return n;
    }
    case 2: {
      for (let l = a + 1; l < r.length; ++l)
        if (!t.resolveDisabled(r[l], l, r))
          return l;
      return n;
    }
    case 3: {
      for (let l = r.length - 1; l >= 0; --l)
        if (!t.resolveDisabled(r[l], l, r))
          return l;
      return n;
    }
    case 4: {
      for (let l = 0; l < r.length; ++l)
        if (t.resolveId(r[l], l, r) === e.id)
          return l;
      return n;
    }
    case 5:
      return null;
    default:
      B0(e);
  }
}
function W0(e) {
  let t = X(e), r = te(!1);
  we(() => (r.current = !1, () => {
    r.current = !0, Al(() => {
      r.current && t();
    });
  }), [t]);
}
function V0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in U ? ((t) => t.useSyncExternalStore)(U)(() => () => {
  }, () => !1, () => !e) : !1;
}
function U0() {
  let e = V0(), [t, r] = U.useState(Jt.isHandoffComplete);
  return t && Jt.isHandoffComplete === !1 && r(!1), U.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), U.useEffect(() => Jt.handoff(), []), e ? !1 : t;
}
let z0 = He(!1);
function G0() {
  return Fe(z0);
}
function Y0(e) {
  let t = G0(), r = Fe(Tu), n = rr(e), [a, l] = Ce(() => {
    var u;
    if (!t && r !== null)
      return (u = r.current) != null ? u : null;
    if (Jt.isServer)
      return null;
    let c = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (c)
      return c;
    if (n === null)
      return null;
    let f = n.createElement("div");
    return f.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(f);
  });
  return we(() => {
    a !== null && (n != null && n.body.contains(a) || n == null || n.body.appendChild(a));
  }, [a, n]), we(() => {
    t || r !== null && l(r.current);
  }, [r, l, t]), a;
}
let ku = Lt, q0 = Xe(function(e, t) {
  let r = e, n = te(null), a = Ke(zl((d) => {
    n.current = d;
  }), t), l = rr(n), u = Y0(n), [c] = Ce(() => {
    var d;
    return Jt.isServer ? null : (d = l == null ? void 0 : l.createElement("div")) != null ? d : null;
  }), f = Fe(fo), v = U0();
  return je(() => {
    !u || !c || u.contains(c) || (c.setAttribute("data-headlessui-portal", ""), u.appendChild(c));
  }, [u, c]), je(() => {
    if (c && f)
      return f.register(c);
  }, [f, c]), W0(() => {
    var d;
    !u || !c || (c instanceof Node && u.contains(c) && u.removeChild(c), u.childNodes.length <= 0 && ((d = u.parentElement) == null || d.removeChild(u)));
  }), v ? !u || !c ? null : kl(Ue({ ourProps: { ref: a }, theirProps: r, slot: {}, defaultTag: ku, name: "Portal" }), c) : null;
});
function K0(e, t) {
  let r = Ke(t), { enabled: n = !0, ...a } = e;
  return n ? V.createElement(q0, { ...a, ref: r }) : Ue({ ourProps: { ref: r }, theirProps: a, slot: {}, defaultTag: ku, name: "Portal" });
}
let X0 = Lt, Tu = He(null);
function J0(e, t) {
  let { target: r, ...n } = e, a = { ref: Ke(t) };
  return V.createElement(Tu.Provider, { value: r }, Ue({ ourProps: a, theirProps: n, defaultTag: X0, name: "Popover.Group" }));
}
let fo = He(null);
function Z0() {
  let e = Fe(fo), t = te([]), r = X((l) => (t.current.push(l), e && e.register(l), () => n(l))), n = X((l) => {
    let u = t.current.indexOf(l);
    u !== -1 && t.current.splice(u, 1), e && e.unregister(l);
  }), a = ue(() => ({ register: r, unregister: n, portals: t }), [r, n, t]);
  return [t, ue(() => function({ children: l }) {
    return V.createElement(fo.Provider, { value: a }, l);
  }, [a])];
}
let Q0 = Xe(K0), ep = Xe(J0), Ru = Object.assign(Q0, { Group: ep });
function tp({ defaultContainers: e = [], portals: t, mainTreeNodeRef: r } = {}) {
  var n;
  let a = te((n = r == null ? void 0 : r.current) != null ? n : null), l = rr(a), u = X(() => {
    var c, f, v;
    let d = [];
    for (let y of e)
      y !== null && (y instanceof HTMLElement ? d.push(y) : "current" in y && y.current instanceof HTMLElement && d.push(y.current));
    if (t != null && t.current)
      for (let y of t.current)
        d.push(y);
    for (let y of (c = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? c : [])
      y !== document.body && y !== document.head && y instanceof HTMLElement && y.id !== "headlessui-portal-root" && (y.contains(a.current) || y.contains((v = (f = a.current) == null ? void 0 : f.getRootNode()) == null ? void 0 : v.host) || d.some((k) => y.contains(k)) || d.push(y));
    return d;
  });
  return { resolveContainers: u, contains: X((c) => u().some((f) => f.contains(c))), mainTreeNodeRef: a, MainTreeNode: ue(() => function() {
    return r != null ? null : V.createElement(er, { features: Nt.Hidden, ref: a });
  }, [a, r]) };
}
function rp() {
  let e = te(null);
  return { mainTreeNodeRef: e, MainTreeNode: ue(() => function() {
    return V.createElement(er, { features: Nt.Hidden, ref: e });
  }, [e]) };
}
var wt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(wt || {});
function Pu() {
  let e = te(0);
  return tu("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function np(e, t) {
  let [r, n] = Ce(e), a = $t(e);
  return je(() => n(a.current), [a, n, ...t]), r;
}
function ap(e, t = !0) {
  let r = te({ left: 0, top: 0 });
  if (je(() => {
    let a = e.current;
    if (!a)
      return;
    let l = a.getBoundingClientRect();
    l && (r.current = l);
  }, [t]), e.current == null || !t || e.current === document.activeElement)
    return !1;
  let n = e.current.getBoundingClientRect();
  return n.top !== r.current.top || n.left !== r.current.left;
}
let pl = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function gl(e) {
  var t, r;
  let n = (t = e.innerText) != null ? t : "", a = e.cloneNode(!0);
  if (!(a instanceof HTMLElement))
    return n;
  let l = !1;
  for (let c of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    c.remove(), l = !0;
  let u = l ? (r = a.innerText) != null ? r : "" : n;
  return pl.test(u) && (u = u.replace(pl, "")), u;
}
function op(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let n = r.split(" ").map((a) => {
      let l = document.getElementById(a);
      if (l) {
        let u = l.getAttribute("aria-label");
        return typeof u == "string" ? u.trim() : gl(l).trim();
      }
      return null;
    }).filter(Boolean);
    if (n.length > 0)
      return n.join(", ");
  }
  return gl(e).trim();
}
function ip(e) {
  let t = te(""), r = te("");
  return X(() => {
    let n = e.current;
    if (!n)
      return "";
    let a = n.innerText;
    if (t.current === a)
      return r.current;
    let l = op(n).trim().toLowerCase();
    return t.current = a, r.current = l, l;
  });
}
var lp = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(lp || {}), up = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(up || {}), sp = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(sp || {}), cp = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e))(cp || {});
function Qa(e, t = (r) => r) {
  let r = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, n = Ql(t(e.options.slice()), (l) => l.dataRef.current.domRef.current), a = r ? n.indexOf(r) : null;
  return a === -1 && (a = null), { options: n, activeOptionIndex: a };
}
let fp = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1, __demoMode: !1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0)
    return e;
  let t = e.activeOptionIndex, { isSelected: r } = e.dataRef.current, n = e.options.findIndex((a) => r(a.dataRef.current.value));
  return n !== -1 && (t = n), { ...e, listboxState: 0, activeOptionIndex: t, __demoMode: !1 };
}, 2(e, t) {
  var r, n, a, l, u;
  if (e.dataRef.current.disabled || e.listboxState === 1)
    return e;
  let c = { ...e, searchQuery: "", activationTrigger: (r = t.trigger) != null ? r : 1, __demoMode: !1 };
  if (t.focus === De.Nothing)
    return { ...c, activeOptionIndex: null };
  if (t.focus === De.Specific)
    return { ...c, activeOptionIndex: e.options.findIndex((d) => d.id === t.id) };
  if (t.focus === De.Previous) {
    let d = e.activeOptionIndex;
    if (d !== null) {
      let y = e.options[d].dataRef.current.domRef, k = Za(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.current.disabled });
      if (k !== null) {
        let w = e.options[k].dataRef.current.domRef;
        if (((n = y.current) == null ? void 0 : n.previousElementSibling) === w.current || ((a = w.current) == null ? void 0 : a.previousElementSibling) === null)
          return { ...c, activeOptionIndex: k };
      }
    }
  } else if (t.focus === De.Next) {
    let d = e.activeOptionIndex;
    if (d !== null) {
      let y = e.options[d].dataRef.current.domRef, k = Za(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (w) => w.id, resolveDisabled: (w) => w.dataRef.current.disabled });
      if (k !== null) {
        let w = e.options[k].dataRef.current.domRef;
        if (((l = y.current) == null ? void 0 : l.nextElementSibling) === w.current || ((u = w.current) == null ? void 0 : u.nextElementSibling) === null)
          return { ...c, activeOptionIndex: k };
      }
    }
  }
  let f = Qa(e), v = Za(t, { resolveItems: () => f.options, resolveActiveIndex: () => f.activeOptionIndex, resolveId: (d) => d.id, resolveDisabled: (d) => d.dataRef.current.disabled });
  return { ...c, ...f, activeOptionIndex: v };
}, 3: (e, t) => {
  if (e.dataRef.current.disabled || e.listboxState === 1)
    return e;
  let r = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), a = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + r).concat(e.options.slice(0, e.activeOptionIndex + r)) : e.options).find((u) => {
    var c;
    return !u.dataRef.current.disabled && ((c = u.dataRef.current.textValue) == null ? void 0 : c.startsWith(n));
  }), l = a ? e.options.indexOf(a) : -1;
  return l === -1 || l === e.activeOptionIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeOptionIndex: l, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5: (e, t) => {
  let r = { id: t.id, dataRef: t.dataRef }, n = Qa(e, (a) => [...a, r]);
  return e.activeOptionIndex === null && e.dataRef.current.isSelected(t.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(r)), { ...e, ...n };
}, 6: (e, t) => {
  let r = Qa(e, (n) => {
    let a = n.findIndex((l) => l.id === t.id);
    return a !== -1 && n.splice(a, 1), n;
  });
  return { ...e, ...r, activationTrigger: 1 };
} }, Ao = He(null);
Ao.displayName = "ListboxActionsContext";
function Zn(e) {
  let t = Fe(Ao);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Zn), r;
  }
  return t;
}
let Qn = He(null);
Qn.displayName = "ListboxDataContext";
function nn(e) {
  let t = Fe(Qn);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, nn), r;
  }
  return t;
}
function dp(e, t) {
  return Ze(t.type, fp, e, t);
}
let vp = Lt;
function pp(e, t) {
  var r;
  let n = Un(), { value: a, defaultValue: l, form: u, name: c, onChange: f, by: v, invalid: d = !1, disabled: y = n || !1, horizontal: k = !1, multiple: w = !1, __demoMode: T = !1, ...g } = e;
  const $ = k ? "horizontal" : "vertical";
  let R = Ke(t), P = Dl(l), [O = w ? [] : void 0, N] = Il(a, f, P), [H, C] = yo(dp, { dataRef: Mn(), listboxState: T ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: !1, __demoMode: T }), K = te({ static: !1, hold: !1 }), j = te(null), ne = te(null), ge = te(/* @__PURE__ */ new Map()), se = fv(v), J = tt((Pe) => Ze(Y.mode, { 1: () => O.some((Ne) => se(Ne, Pe)), 0: () => se(O, Pe) }), [O]), Y = ue(() => ({ ...H, value: O, disabled: y, invalid: d, mode: w ? 1 : 0, orientation: $, compare: se, isSelected: J, optionsPropsRef: K, buttonRef: j, optionsRef: ne, listRef: ge }), [O, y, d, w, H, ge]);
  je(() => {
    H.dataRef.current = Y;
  }, [Y]), ru([Y.buttonRef, Y.optionsRef], (Pe, Ne) => {
    var Qe;
    C({ type: 1 }), To(Ne, Kn.Loose) || (Pe.preventDefault(), (Qe = Y.buttonRef.current) == null || Qe.focus());
  }, Y.listboxState === 0);
  let ve = ue(() => ({ open: Y.listboxState === 0, disabled: y, invalid: d, value: O }), [Y, y, O, d]), I = X((Pe) => {
    let Ne = Y.options.find((Qe) => Qe.id === Pe);
    Ne && Re(Ne.dataRef.current.value);
  }), Z = X(() => {
    if (Y.activeOptionIndex !== null) {
      let { dataRef: Pe, id: Ne } = Y.options[Y.activeOptionIndex];
      Re(Pe.current.value), C({ type: 2, focus: De.Specific, id: Ne });
    }
  }), D = X(() => C({ type: 0 })), ae = X(() => C({ type: 1 })), q = At(), fe = X((Pe, Ne, Qe) => {
    q.dispose(), q.microTask(() => Pe === De.Specific ? C({ type: 2, focus: De.Specific, id: Ne, trigger: Qe }) : C({ type: 2, focus: Pe, trigger: Qe }));
  }), he = X((Pe, Ne) => (C({ type: 5, id: Pe, dataRef: Ne }), () => C({ type: 6, id: Pe }))), Re = X((Pe) => Ze(Y.mode, { 0() {
    return N == null ? void 0 : N(Pe);
  }, 1() {
    let Ne = Y.value.slice(), Qe = Ne.findIndex((Tr) => se(Tr, Pe));
    return Qe === -1 ? Ne.push(Pe) : Ne.splice(Qe, 1), N == null ? void 0 : N(Ne);
  } })), Le = X((Pe) => C({ type: 3, value: Pe })), Be = X(() => C({ type: 4 })), kr = ue(() => ({ onChange: Re, registerOption: he, goToOption: fe, closeListbox: ae, openListbox: D, selectActiveOption: Z, selectOption: I, search: Le, clearSearch: Be }), []), [Ht, Bt] = Kl({ inherit: !0 }), kt = { ref: R }, Tt = tt(() => {
    if (P !== void 0)
      return N == null ? void 0 : N(P);
  }, [N, P]);
  return V.createElement(Bt, { value: Ht, props: { htmlFor: (r = Y.buttonRef.current) == null ? void 0 : r.id }, slot: { open: Y.listboxState === 0, disabled: y } }, V.createElement(Eu, null, V.createElement(Ao.Provider, { value: kr }, V.createElement(Qn.Provider, { value: Y }, V.createElement(Su, { value: Ze(Y.listboxState, { 0: dt.Open, 1: dt.Closed }) }, c != null && O != null && V.createElement(Vl, { disabled: y, data: { [c]: O }, form: u, onReset: Tt }), Ue({ ourProps: kt, theirProps: g, slot: ve, defaultTag: vp, name: "Listbox" }))))));
}
let gp = "button";
function hp(e, t) {
  var r;
  let n = nn("Listbox.Button"), a = Zn("Listbox.Button"), l = vt(), u = So(), { id: c = u || `headlessui-listbox-button-${l}`, disabled: f = n.disabled || !1, autoFocus: v = !1, ...d } = e, y = Ke(n.buttonRef, t, yu()), k = D0(), w = At(), T = X((J) => {
    switch (J.key) {
      case _e.Enter:
        Wl(J.currentTarget);
        break;
      case _e.Space:
      case _e.ArrowDown:
        J.preventDefault(), a.openListbox(), w.nextFrame(() => {
          n.value || a.goToOption(De.First);
        });
        break;
      case _e.ArrowUp:
        J.preventDefault(), a.openListbox(), w.nextFrame(() => {
          n.value || a.goToOption(De.Last);
        });
        break;
    }
  }), g = X((J) => {
    switch (J.key) {
      case _e.Space:
        J.preventDefault();
        break;
    }
  }), $ = X((J) => {
    if (zn(J.currentTarget))
      return J.preventDefault();
    n.listboxState === 0 ? (a.closeListbox(), w.nextFrame(() => {
      var Y;
      return (Y = n.buttonRef.current) == null ? void 0 : Y.focus({ preventScroll: !0 });
    })) : (J.preventDefault(), a.openListbox());
  }), R = X((J) => J.preventDefault()), P = ko([c]), O = Yl(), { isFocusVisible: N, focusProps: H } = Eo({ autoFocus: v }), { isHovered: C, hoverProps: K } = xo({ isDisabled: f }), { pressed: j, pressProps: ne } = $o({ disabled: f }), ge = ue(() => ({ open: n.listboxState === 0, active: j || n.listboxState === 0, disabled: f, invalid: n.invalid, value: n.value, hover: C, focus: N, autofocus: v }), [n.listboxState, n.value, f, C, N, j, n.invalid, v]), se = wr(k(), { ref: y, id: c, type: Ro(e, n.buttonRef), "aria-haspopup": "listbox", "aria-controls": (r = n.optionsRef.current) == null ? void 0 : r.id, "aria-expanded": n.listboxState === 0, "aria-labelledby": P, "aria-describedby": O, disabled: f || void 0, autoFocus: v, onKeyDown: T, onKeyUp: g, onKeyPress: R, onClick: $ }, H, K, ne);
  return Ue({ ourProps: se, theirProps: d, slot: ge, defaultTag: gp, name: "Listbox.Button" });
}
let _u = He(!1), mp = "div", bp = Qt.RenderStrategy | Qt.Static;
function yp(e, t) {
  var r;
  let n = vt(), { id: a = `headlessui-listbox-options-${n}`, anchor: l, portal: u = !1, modal: c = !0, ...f } = e, v = bu(l);
  v && (u = !0);
  let d = nn("Listbox.Options"), y = Zn("Listbox.Options"), k = rr(d.optionsRef), w = Lo(), T = w !== null ? (w & dt.Open) === dt.Open : d.listboxState === 0;
  Zl(d.buttonRef, y.closeListbox, T), nu(k, d.__demoMode ? !1 : c && d.listboxState === 0), vv({ allowed: X(() => [d.buttonRef.current, d.optionsRef.current]) }, d.__demoMode ? !1 : c && d.listboxState === 0);
  let g = te(null);
  we(() => {
    var I;
    if (!((I = v == null ? void 0 : v.to) != null && I.includes("selection")))
      return;
    if (!T) {
      g.current = null;
      return;
    }
    let Z = Array.from(d.listRef.current.values());
    g.current = Z.findIndex((D) => (D == null ? void 0 : D.dataset.selected) === ""), g.current === -1 && (g.current = Z.findIndex((D) => (D == null ? void 0 : D.dataset.disabled) === void 0), y.goToOption(De.First));
  }, [T, d.listRef]);
  let $ = ap(d.buttonRef, d.listboxState !== 0) ? !1 : T, R = (() => {
    if (v == null)
      return;
    if (d.listRef.current.size <= 0)
      return { ...v, inner: void 0 };
    let I = Array.from(d.listRef.current.values());
    return { ...v, inner: { listRef: { current: I }, index: g.current } };
  })(), [P, O] = xu(R), N = wu(), H = Ke(d.optionsRef, t, v ? P : null), C = At(), K = At();
  we(() => {
    var I;
    let Z = d.optionsRef.current;
    Z && d.listboxState === 0 && Z !== ((I = Er(Z)) == null ? void 0 : I.activeElement) && (Z == null || Z.focus({ preventScroll: !0 }));
  }, [d.listboxState, d.optionsRef, d.optionsRef.current]);
  let j = X((I) => {
    switch (K.dispose(), I.key) {
      case _e.Space:
        if (d.searchQuery !== "")
          return I.preventDefault(), I.stopPropagation(), y.search(I.key);
      case _e.Enter:
        if (I.preventDefault(), I.stopPropagation(), d.activeOptionIndex !== null) {
          let { dataRef: Z } = d.options[d.activeOptionIndex];
          y.onChange(Z.current.value);
        }
        d.mode === 0 && (y.closeListbox(), Et().nextFrame(() => {
          var Z;
          return (Z = d.buttonRef.current) == null ? void 0 : Z.focus({ preventScroll: !0 });
        }));
        break;
      case Ze(d.orientation, { vertical: _e.ArrowDown, horizontal: _e.ArrowRight }):
        return I.preventDefault(), I.stopPropagation(), y.goToOption(De.Next);
      case Ze(d.orientation, { vertical: _e.ArrowUp, horizontal: _e.ArrowLeft }):
        return I.preventDefault(), I.stopPropagation(), y.goToOption(De.Previous);
      case _e.Home:
      case _e.PageUp:
        return I.preventDefault(), I.stopPropagation(), y.goToOption(De.First);
      case _e.End:
      case _e.PageDown:
        return I.preventDefault(), I.stopPropagation(), y.goToOption(De.Last);
      case _e.Escape:
        return I.preventDefault(), I.stopPropagation(), y.closeListbox(), C.nextFrame(() => {
          var Z;
          return (Z = d.buttonRef.current) == null ? void 0 : Z.focus({ preventScroll: !0 });
        });
      case _e.Tab:
        I.preventDefault(), I.stopPropagation();
        break;
      default:
        I.key.length === 1 && (y.search(I.key), K.setTimeout(() => y.clearSearch(), 350));
        break;
    }
  }), ne = np(() => {
    var I;
    return (I = d.buttonRef.current) == null ? void 0 : I.id;
  }, [d.buttonRef.current]), ge = ue(() => ({ open: d.listboxState === 0 }), [d]), se = wr(v ? N() : {}, { id: a, ref: H, "aria-activedescendant": d.activeOptionIndex === null || (r = d.options[d.activeOptionIndex]) == null ? void 0 : r.id, "aria-multiselectable": d.mode === 1 ? !0 : void 0, "aria-labelledby": ne, "aria-orientation": d.orientation, onKeyDown: j, role: "listbox", tabIndex: 0, style: { ...O, "--button-width": Jl(d.buttonRef, !0).width } }), [J, Y] = Ce(d.value);
  d.value !== J && d.listboxState === 0 && d.mode !== 1 && Y(d.value);
  let ve = X((I) => d.compare(J, I));
  return V.createElement(Ru, { enabled: u ? e.static || T : !1 }, V.createElement(Qn.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: ve } }, Ue({ ourProps: se, theirProps: f, slot: ge, defaultTag: mp, features: bp, visible: $, name: "Listbox.Options" })));
}
let wp = "div";
function xp(e, t) {
  let r = vt(), { id: n = `headlessui-listbox-option-${r}`, disabled: a = !1, value: l, ...u } = e, c = Fe(_u) === !0, f = nn("Listbox.Option"), v = Zn("Listbox.Option"), d = f.activeOptionIndex !== null ? f.options[f.activeOptionIndex].id === n : !1, y = f.isSelected(l), k = te(null), w = ip(k), T = $t({ disabled: a, value: l, domRef: k, get textValue() {
    return w();
  } }), g = Ke(t, k, (j) => {
    j ? f.listRef.current.set(n, j) : f.listRef.current.delete(n);
  });
  je(() => {
    if (f.__demoMode || f.listboxState !== 0 || !d || f.activationTrigger === 0)
      return;
    let j = Et();
    return j.requestAnimationFrame(() => {
      var ne, ge;
      (ge = (ne = k.current) == null ? void 0 : ne.scrollIntoView) == null || ge.call(ne, { block: "nearest" });
    }), j.dispose;
  }, [k, d, f.__demoMode, f.listboxState, f.activationTrigger, f.activeOptionIndex]), je(() => {
    if (!c)
      return v.registerOption(n, T);
  }, [T, n, c]);
  let $ = X((j) => {
    if (a)
      return j.preventDefault();
    v.onChange(l), f.mode === 0 && (v.closeListbox(), Et().nextFrame(() => {
      var ne;
      return (ne = f.buttonRef.current) == null ? void 0 : ne.focus({ preventScroll: !0 });
    }));
  }), R = X(() => {
    if (a)
      return v.goToOption(De.Nothing);
    v.goToOption(De.Specific, n);
  }), P = Ov(), O = X((j) => {
    P.update(j), !a && (d || v.goToOption(De.Specific, n, 0));
  }), N = X((j) => {
    P.wasMoved(j) && (a || d || v.goToOption(De.Specific, n, 0));
  }), H = X((j) => {
    P.wasMoved(j) && (a || d && v.goToOption(De.Nothing));
  }), C = ue(() => ({ active: d, focus: d, selected: y, disabled: a, selectedOption: y && c }), [d, y, a, c]);
  return !y && c ? null : Ue({ ourProps: c ? {} : { id: n, ref: g, role: "option", tabIndex: a === !0 ? void 0 : -1, "aria-disabled": a === !0 ? !0 : void 0, "aria-selected": y, disabled: void 0, onClick: $, onFocus: R, onPointerEnter: O, onMouseEnter: O, onPointerMove: N, onMouseMove: N, onPointerLeave: H, onMouseLeave: H }, theirProps: u, slot: C, defaultTag: wp, name: "Listbox.Option" });
}
let Ep = Lt;
function $p(e, t) {
  let { options: r, placeholder: n, ...a } = e, l = { ref: Ke(t) }, u = nn("ListboxSelectedOption"), c = ue(() => ({}), []), f = u.value === void 0 || u.value === null || u.mode === 1 && Array.isArray(u.value) && u.value.length === 0;
  return V.createElement(_u.Provider, { value: !0 }, Ue({ ourProps: l, theirProps: { ...a, children: V.createElement(V.Fragment, null, n && f ? n : r) }, slot: c, defaultTag: Ep, name: "ListboxSelectedOption" }));
}
let Sp = Xe(pp), Ou = Xe(hp), kp = Xl, Cu = Xe(yp), Fu = Xe(xp), Tp = Xe($p), Rp = Object.assign(Sp, { Button: Ou, Label: kp, Options: Cu, Option: Fu, SelectedOption: Tp });
var Pp = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Pp || {}), _p = ((e) => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(_p || {});
let Op = { 0: (e) => ({ ...e, popoverState: Ze(e.popoverState, { 0: 1, 1: 0 }), __demoMode: !1 }), 1(e) {
  return e.popoverState === 1 ? e : { ...e, popoverState: 1, __demoMode: !1 };
}, 2(e, t) {
  return e.button === t.button ? e : { ...e, button: t.button };
}, 3(e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, 4(e, t) {
  return e.panel === t.panel ? e : { ...e, panel: t.panel };
}, 5(e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} }, No = He(null);
No.displayName = "PopoverContext";
function ea(e) {
  let t = Fe(No);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ea), r;
  }
  return t;
}
let ta = He(null);
ta.displayName = "PopoverAPIContext";
function Io(e) {
  let t = Fe(ta);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Io), r;
  }
  return t;
}
let Do = He(null);
Do.displayName = "PopoverGroupContext";
function Mu() {
  return Fe(Do);
}
let ra = He(null);
ra.displayName = "PopoverPanelContext";
function Cp() {
  return Fe(ra);
}
function Fp(e, t) {
  return Ze(t.type, Op, e, t);
}
let Mp = "div";
function Lp(e, t) {
  var r;
  let { __demoMode: n = !1, ...a } = e, l = te(null), u = Ke(t, zl((D) => {
    l.current = D;
  })), c = te([]), f = yo(Fp, { __demoMode: n, popoverState: n ? 0 : 1, buttons: c, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: Mn(), afterPanelSentinel: Mn(), afterButtonSentinel: Mn() }), [{ popoverState: v, button: d, buttonId: y, panel: k, panelId: w, beforePanelSentinel: T, afterPanelSentinel: g, afterButtonSentinel: $ }, R] = f, P = rr((r = l.current) != null ? r : d), O = ue(() => {
    if (!d || !k)
      return !1;
    for (let Le of document.querySelectorAll("body > *"))
      if (Number(Le == null ? void 0 : Le.contains(d)) ^ Number(Le == null ? void 0 : Le.contains(k)))
        return !0;
    let D = qn(), ae = D.indexOf(d), q = (ae + D.length - 1) % D.length, fe = (ae + 1) % D.length, he = D[q], Re = D[fe];
    return !k.contains(he) && !k.contains(Re);
  }, [d, k]), N = $t(y), H = $t(w), C = ue(() => ({ buttonId: N, panelId: H, close: () => R({ type: 1 }) }), [N, H, R]), K = Mu(), j = K == null ? void 0 : K.registerPopover, ne = X(() => {
    var D;
    return (D = K == null ? void 0 : K.isFocusWithinPopoverGroup()) != null ? D : (P == null ? void 0 : P.activeElement) && ((d == null ? void 0 : d.contains(P.activeElement)) || (k == null ? void 0 : k.contains(P.activeElement)));
  });
  we(() => j == null ? void 0 : j(C), [j, C]);
  let [ge, se] = Z0(), J = tp({ mainTreeNodeRef: K == null ? void 0 : K.mainTreeNodeRef, portals: ge, defaultContainers: [d, k] });
  Ev(P == null ? void 0 : P.defaultView, "focus", (D) => {
    var ae, q, fe, he, Re, Le;
    D.target !== window && D.target instanceof HTMLElement && v === 0 && (ne() || d && k && (J.contains(D.target) || (q = (ae = T.current) == null ? void 0 : ae.contains) != null && q.call(ae, D.target) || (he = (fe = g.current) == null ? void 0 : fe.contains) != null && he.call(fe, D.target) || (Le = (Re = $.current) == null ? void 0 : Re.contains) != null && Le.call(Re, D.target) || R({ type: 1 })));
  }, !0), ru(J.resolveContainers, (D, ae) => {
    R({ type: 1 }), To(ae, Kn.Loose) || (D.preventDefault(), d == null || d.focus());
  }, v === 0);
  let Y = X((D) => {
    R({ type: 1 });
    let ae = D ? D instanceof HTMLElement ? D : "current" in D && D.current instanceof HTMLElement ? D.current : d : d;
    ae == null || ae.focus();
  }), ve = ue(() => ({ close: Y, isPortalled: O }), [Y, O]), I = ue(() => ({ open: v === 0, close: Y }), [v, Y]), Z = { ref: u };
  return V.createElement(Eu, null, V.createElement(ra.Provider, { value: null }, V.createElement(No.Provider, { value: f }, V.createElement(ta.Provider, { value: ve }, V.createElement(sv, { value: Y }, V.createElement(Su, { value: Ze(v, { 0: dt.Open, 1: dt.Closed }) }, V.createElement(se, null, Ue({ ourProps: Z, theirProps: a, slot: I, defaultTag: Mp, name: "Popover" }), V.createElement(J.MainTreeNode, null))))))));
}
let Ap = "button";
function Np(e, t) {
  let r = vt(), { id: n = `headlessui-popover-button-${r}`, disabled: a = !1, autoFocus: l = !1, ...u } = e, [c, f] = ea("Popover.Button"), { isPortalled: v } = Io("Popover.Button"), d = te(null), y = `headlessui-focus-sentinel-${vt()}`, k = Mu(), w = k == null ? void 0 : k.closeOthers, T = Cp() !== null;
  we(() => {
    if (!T)
      return f({ type: 3, buttonId: n }), () => {
        f({ type: 3, buttonId: null });
      };
  }, [T, n, f]);
  let [g] = Ce(() => Symbol()), $ = Ke(d, t, yu(), T ? null : (q) => {
    if (q)
      c.buttons.current.push(g);
    else {
      let fe = c.buttons.current.indexOf(g);
      fe !== -1 && c.buttons.current.splice(fe, 1);
    }
    c.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), q && f({ type: 2, button: q });
  }), R = Ke(d, t), P = rr(d), O = X((q) => {
    var fe, he, Re;
    if (T) {
      if (c.popoverState === 1)
        return;
      switch (q.key) {
        case _e.Space:
        case _e.Enter:
          q.preventDefault(), (he = (fe = q.target).click) == null || he.call(fe), f({ type: 1 }), (Re = c.button) == null || Re.focus();
          break;
      }
    } else
      switch (q.key) {
        case _e.Space:
        case _e.Enter:
          q.preventDefault(), q.stopPropagation(), c.popoverState === 1 && (w == null || w(c.buttonId)), f({ type: 0 });
          break;
        case _e.Escape:
          if (c.popoverState !== 0)
            return w == null ? void 0 : w(c.buttonId);
          if (!d.current || P != null && P.activeElement && !d.current.contains(P.activeElement))
            return;
          q.preventDefault(), q.stopPropagation(), f({ type: 1 });
          break;
      }
  }), N = X((q) => {
    T || q.key === _e.Space && q.preventDefault();
  }), H = X((q) => {
    var fe, he;
    zn(q.currentTarget) || a || (T ? (f({ type: 1 }), (fe = c.button) == null || fe.focus()) : (q.preventDefault(), q.stopPropagation(), c.popoverState === 1 && (w == null || w(c.buttonId)), f({ type: 0 }), (he = c.button) == null || he.focus()));
  }), C = X((q) => {
    q.preventDefault(), q.stopPropagation();
  }), { isFocusVisible: K, focusProps: j } = Eo({ autoFocus: l }), { isHovered: ne, hoverProps: ge } = xo({ isDisabled: a }), { pressed: se, pressProps: J } = $o({ disabled: a }), Y = c.popoverState === 0, ve = ue(() => ({ open: Y, active: se || Y, disabled: a, hover: ne, focus: K, autofocus: l }), [Y, ne, K, se, a, l]), I = Ro(e, d), Z = wr(T ? { ref: R, type: I, onKeyDown: O, onClick: H, disabled: a || void 0, autoFocus: l } : { ref: $, id: c.buttonId, type: I, "aria-expanded": c.popoverState === 0, "aria-controls": c.panel ? c.panelId : void 0, disabled: a || void 0, autoFocus: l, onKeyDown: O, onKeyUp: N, onClick: H, onMouseDown: C }, j, ge, J), D = Pu(), ae = X(() => {
    let q = c.panel;
    if (!q)
      return;
    function fe() {
      Ze(D.current, { [wt.Forwards]: () => Kt(q, yt.First), [wt.Backwards]: () => Kt(q, yt.Last) }) === Dn.Error && Kt(qn().filter((he) => he.dataset.headlessuiFocusGuard !== "true"), Ze(D.current, { [wt.Forwards]: yt.Next, [wt.Backwards]: yt.Previous }), { relativeTo: c.button });
    }
    fe();
  });
  return V.createElement(V.Fragment, null, Ue({ ourProps: Z, theirProps: u, slot: ve, defaultTag: Ap, name: "Popover.Button" }), Y && !T && v && V.createElement(er, { id: y, ref: c.afterButtonSentinel, features: Nt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: ae }));
}
let Ip = "div", Dp = Qt.RenderStrategy | Qt.Static;
function jp(e, t) {
  let r = vt(), { id: n = `headlessui-popover-overlay-${r}`, ...a } = e, [{ popoverState: l }, u] = ea("Popover.Overlay"), c = Ke(t), f = Lo(), v = f !== null ? (f & dt.Open) === dt.Open : l === 0, d = X((k) => {
    if (zn(k.currentTarget))
      return k.preventDefault();
    u({ type: 1 });
  }), y = ue(() => ({ open: l === 0 }), [l]);
  return Ue({ ourProps: { ref: c, id: n, "aria-hidden": !0, onClick: d }, theirProps: a, slot: y, defaultTag: Ip, features: Dp, visible: v, name: "Popover.Overlay" });
}
let Hp = "div", Bp = Qt.RenderStrategy | Qt.Static;
function Wp(e, t) {
  let r = vt(), { id: n = `headlessui-popover-panel-${r}`, focus: a = !1, anchor: l, portal: u = !1, modal: c = !1, ...f } = e, [v, d] = ea("Popover.Panel"), { close: y, isPortalled: k } = Io("Popover.Panel"), w = `headlessui-focus-sentinel-before-${r}`, T = `headlessui-focus-sentinel-after-${r}`, g = te(null), $ = bu(l), [R, P] = xu($), O = wu();
  $ && (u = !0);
  let N = Ke(g, t, $ ? R : null, (I) => {
    d({ type: 4, panel: I });
  }), H = rr(g), C = zd();
  je(() => (d({ type: 5, panelId: n }), () => {
    d({ type: 5, panelId: null });
  }), [n, d]);
  let K = Lo(), j = K !== null ? (K & dt.Open) === dt.Open : v.popoverState === 0;
  Zl(v.button, () => d({ type: 1 }), j), nu(H, v.__demoMode ? !1 : c && j);
  let ne = X((I) => {
    var Z;
    switch (I.key) {
      case _e.Escape:
        if (v.popoverState !== 0 || !g.current || H != null && H.activeElement && !g.current.contains(H.activeElement))
          return;
        I.preventDefault(), I.stopPropagation(), d({ type: 1 }), (Z = v.button) == null || Z.focus();
        break;
    }
  });
  we(() => {
    var I;
    e.static || v.popoverState === 1 && ((I = e.unmount) == null || I) && d({ type: 4, panel: null });
  }, [v.popoverState, e.unmount, e.static, d]), we(() => {
    if (v.__demoMode || !a || v.popoverState !== 0 || !g.current)
      return;
    let I = H == null ? void 0 : H.activeElement;
    g.current.contains(I) || Kt(g.current, yt.First);
  }, [v.__demoMode, a, g, v.popoverState]);
  let ge = ue(() => ({ open: v.popoverState === 0, close: y }), [v, y]), se = wr($ ? O() : {}, { ref: N, id: n, onKeyDown: ne, onBlur: a && v.popoverState === 0 ? (I) => {
    var Z, D, ae, q, fe;
    let he = I.relatedTarget;
    he && g.current && ((Z = g.current) != null && Z.contains(he) || (d({ type: 1 }), ((ae = (D = v.beforePanelSentinel.current) == null ? void 0 : D.contains) != null && ae.call(D, he) || (fe = (q = v.afterPanelSentinel.current) == null ? void 0 : q.contains) != null && fe.call(q, he)) && he.focus({ preventScroll: !0 })));
  } : void 0, tabIndex: -1, style: { ...P, "--button-width": Jl(v.button, !0).width } }), J = Pu(), Y = X(() => {
    let I = g.current;
    if (!I)
      return;
    function Z() {
      Ze(J.current, { [wt.Forwards]: () => {
        var D;
        Kt(I, yt.First) === Dn.Error && ((D = v.afterPanelSentinel.current) == null || D.focus());
      }, [wt.Backwards]: () => {
        var D;
        (D = v.button) == null || D.focus({ preventScroll: !0 });
      } });
    }
    Z();
  }), ve = X(() => {
    let I = g.current;
    if (!I)
      return;
    function Z() {
      Ze(J.current, { [wt.Forwards]: () => {
        var D;
        if (!v.button)
          return;
        let ae = qn(), q = ae.indexOf(v.button), fe = ae.slice(0, q + 1), he = [...ae.slice(q + 1), ...fe];
        for (let Re of he.slice())
          if (Re.dataset.headlessuiFocusGuard === "true" || (D = v.panel) != null && D.contains(Re)) {
            let Le = he.indexOf(Re);
            Le !== -1 && he.splice(Le, 1);
          }
        Kt(he, yt.First, { sorted: !1 });
      }, [wt.Backwards]: () => {
        var D;
        Kt(I, yt.Previous) === Dn.Error && ((D = v.button) == null || D.focus());
      } });
    }
    Z();
  });
  return V.createElement(ra.Provider, { value: n }, V.createElement(ta.Provider, { value: { close: y, isPortalled: k } }, V.createElement(Ru, { enabled: u ? e.static || j : !1 }, j && k && V.createElement(er, { id: w, ref: v.beforePanelSentinel, features: Nt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: Y }), Ue({ mergeRefs: C, ourProps: se, theirProps: f, slot: ge, defaultTag: Hp, features: Bp, visible: j, name: "Popover.Panel" }), j && k && V.createElement(er, { id: T, ref: v.afterPanelSentinel, features: Nt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: ve }))));
}
let Vp = "div";
function Up(e, t) {
  let r = te(null), n = Ke(r, t), [a, l] = Ce([]), u = rp(), c = X((g) => {
    l(($) => {
      let R = $.indexOf(g);
      if (R !== -1) {
        let P = $.slice();
        return P.splice(R, 1), P;
      }
      return $;
    });
  }), f = X((g) => (l(($) => [...$, g]), () => c(g))), v = X(() => {
    var g;
    let $ = Er(r);
    if (!$)
      return !1;
    let R = $.activeElement;
    return (g = r.current) != null && g.contains(R) ? !0 : a.some((P) => {
      var O, N;
      return ((O = $.getElementById(P.buttonId.current)) == null ? void 0 : O.contains(R)) || ((N = $.getElementById(P.panelId.current)) == null ? void 0 : N.contains(R));
    });
  }), d = X((g) => {
    for (let $ of a)
      $.buttonId.current !== g && $.close();
  }), y = ue(() => ({ registerPopover: f, unregisterPopover: c, isFocusWithinPopoverGroup: v, closeOthers: d, mainTreeNodeRef: u.mainTreeNodeRef }), [f, c, v, d, u.mainTreeNodeRef]), k = ue(() => ({}), []), w = e, T = { ref: n };
  return V.createElement(Do.Provider, { value: y }, Ue({ ourProps: T, theirProps: w, slot: k, defaultTag: Vp, name: "Popover.Group" }), V.createElement(u.MainTreeNode, null));
}
let zp = Xe(Lp), Lu = Xe(Np), Gp = Xe(jp), Au = Xe(Wp), Yp = Xe(Up), qp = Object.assign(zp, { Button: Lu, Overlay: Gp, Panel: Au, Group: Yp }), jo = He(null);
jo.displayName = "GroupContext";
let Kp = Lt;
function Xp(e) {
  var t;
  let [r, n] = Ce(null), [a, l] = Kl(), [u, c] = ev(), f = ue(() => ({ switch: r, setSwitch: n }), [r, n]), v = {}, d = e;
  return V.createElement(c, { name: "Switch.Description", value: u }, V.createElement(l, { name: "Switch.Label", value: a, props: { htmlFor: (t = f.switch) == null ? void 0 : t.id, onClick(y) {
    r && (y.currentTarget instanceof HTMLLabelElement && y.preventDefault(), r.click(), r.focus({ preventScroll: !0 }));
  } } }, V.createElement(jo.Provider, { value: f }, Ue({ ourProps: v, theirProps: d, slot: {}, defaultTag: Kp, name: "Switch.Group" }))));
}
let Jp = "button";
function Zp(e, t) {
  var r;
  let n = vt(), a = So(), l = Un(), { id: u = a || `headlessui-switch-${n}`, disabled: c = l || !1, checked: f, defaultChecked: v, onChange: d, name: y, value: k, form: w, autoFocus: T = !1, ...g } = e, $ = Fe(jo), R = te(null), P = Ke(R, t, $ === null ? null : $.setSwitch), O = Dl(v), [N, H] = Il(f, d, O ?? !1), C = At(), [K, j] = Ce(!1), ne = X(() => {
    j(!0), H == null || H(!N), C.nextFrame(() => {
      j(!1);
    });
  }), ge = X((Be) => {
    if (zn(Be.currentTarget))
      return Be.preventDefault();
    Be.preventDefault(), ne();
  }), se = X((Be) => {
    Be.key === _e.Space ? (Be.preventDefault(), ne()) : Be.key === _e.Enter && Wl(Be.currentTarget);
  }), J = X((Be) => Be.preventDefault()), Y = ko(), ve = Yl(), { isFocusVisible: I, focusProps: Z } = Eo({ autoFocus: T }), { isHovered: D, hoverProps: ae } = xo({ isDisabled: c }), { pressed: q, pressProps: fe } = $o({ disabled: c }), he = ue(() => ({ checked: N, disabled: c, hover: D, focus: I, active: q, autofocus: T, changing: K }), [N, D, I, q, c, K, T]), Re = wr({ id: u, ref: P, role: "switch", type: Ro(e, R), tabIndex: e.tabIndex === -1 ? 0 : (r = e.tabIndex) != null ? r : 0, "aria-checked": N, "aria-labelledby": Y, "aria-describedby": ve, disabled: c || void 0, autoFocus: T, onClick: ge, onKeyUp: se, onKeyPress: J }, Z, ae, fe), Le = tt(() => {
    if (O !== void 0)
      return H == null ? void 0 : H(O);
  }, [H, O]);
  return V.createElement(V.Fragment, null, y != null && V.createElement(Vl, { disabled: c, data: { [y]: k || "on" }, overrides: { type: "checkbox", checked: N }, form: w, onReset: Le }), Ue({ ourProps: Re, theirProps: g, slot: he, defaultTag: Jp, name: "Switch" }));
}
let Qp = Xe(Zp), eg = Xp, tg = Xl, rg = av, ng = Object.assign(Qp, { Group: eg, Label: tg, Description: rg });
function ag({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ U.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ U.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ U.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const og = U.forwardRef(ag);
function ig({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ U.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ U.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ U.createElement("path", {
    fillRule: "evenodd",
    d: "M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z",
    clipRule: "evenodd"
  }));
}
const lg = U.forwardRef(ig);
function ug({
  title: e,
  titleId: t,
  ...r
}, n) {
  return /* @__PURE__ */ U.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ U.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ U.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ U.createElement("path", {
    d: "M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z"
  }));
}
const sg = U.forwardRef(ug), na = 500, xt = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1e3], Nu = ["hex", "p-3", "oklch"], cg = Nu[0], br = {
  id: "",
  name: "",
  value: "",
  valueStop: na,
  swatches: [],
  h: 0,
  s: 0,
  lMin: 0,
  lMax: 100,
  useLightness: !0,
  mode: Nu[0]
};
var Iu = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(Ur, function() {
    for (var r = function(o, i, s) {
      return i === void 0 && (i = 0), s === void 0 && (s = 1), o < i ? i : o > s ? s : o;
    }, n = r, a = function(o) {
      o._clipped = !1, o._unclipped = o.slice(0);
      for (var i = 0; i <= 3; i++)
        i < 3 ? ((o[i] < 0 || o[i] > 255) && (o._clipped = !0), o[i] = n(o[i], 0, 255)) : i === 3 && (o[i] = n(o[i], 0, 1));
      return o;
    }, l = {}, u = 0, c = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; u < c.length; u += 1) {
      var f = c[u];
      l["[object " + f + "]"] = f.toLowerCase();
    }
    var v = function(o) {
      return l[Object.prototype.toString.call(o)] || "object";
    }, d = v, y = function(o, i) {
      return i === void 0 && (i = null), o.length >= 3 ? Array.prototype.slice.call(o) : d(o[0]) == "object" && i ? i.split("").filter(function(s) {
        return o[0][s] !== void 0;
      }).map(function(s) {
        return o[0][s];
      }) : o[0];
    }, k = v, w = function(o) {
      if (o.length < 2)
        return null;
      var i = o.length - 1;
      return k(o[i]) == "string" ? o[i].toLowerCase() : null;
    }, T = Math.PI, g = {
      clip_rgb: a,
      limit: r,
      type: v,
      unpack: y,
      last: w,
      PI: T,
      TWOPI: T * 2,
      PITHIRD: T / 3,
      DEG2RAD: T / 180,
      RAD2DEG: 180 / T
    }, $ = {
      format: {},
      autodetect: []
    }, R = g.last, P = g.clip_rgb, O = g.type, N = $, H = function() {
      for (var i = [], s = arguments.length; s--; )
        i[s] = arguments[s];
      var p = this;
      if (O(i[0]) === "object" && i[0].constructor && i[0].constructor === this.constructor)
        return i[0];
      var b = R(i), x = !1;
      if (!b) {
        x = !0, N.sorted || (N.autodetect = N.autodetect.sort(function(F, W) {
          return W.p - F.p;
        }), N.sorted = !0);
        for (var h = 0, E = N.autodetect; h < E.length; h += 1) {
          var S = E[h];
          if (b = S.test.apply(S, i), b)
            break;
        }
      }
      if (N.format[b]) {
        var _ = N.format[b].apply(null, x ? i : i.slice(0, -1));
        p._rgb = P(_);
      } else
        throw new Error("unknown format: " + i);
      p._rgb.length === 3 && p._rgb.push(1);
    };
    H.prototype.toString = function() {
      return O(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var C = H, K = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(K.Color, [null].concat(o)))();
    };
    K.Color = C, K.version = "2.4.2";
    var j = K, ne = g.unpack, ge = Math.max, se = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = ne(o, "rgb"), p = s[0], b = s[1], x = s[2];
      p = p / 255, b = b / 255, x = x / 255;
      var h = 1 - ge(p, ge(b, x)), E = h < 1 ? 1 / (1 - h) : 0, S = (1 - p - h) * E, _ = (1 - b - h) * E, F = (1 - x - h) * E;
      return [S, _, F, h];
    }, J = se, Y = g.unpack, ve = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = Y(o, "cmyk");
      var s = o[0], p = o[1], b = o[2], x = o[3], h = o.length > 4 ? o[4] : 1;
      return x === 1 ? [0, 0, 0, h] : [
        s >= 1 ? 0 : 255 * (1 - s) * (1 - x),
        // r
        p >= 1 ? 0 : 255 * (1 - p) * (1 - x),
        // g
        b >= 1 ? 0 : 255 * (1 - b) * (1 - x),
        // b
        h
      ];
    }, I = ve, Z = j, D = C, ae = $, q = g.unpack, fe = g.type, he = J;
    D.prototype.cmyk = function() {
      return he(this._rgb);
    }, Z.cmyk = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(D, [null].concat(o, ["cmyk"])))();
    }, ae.format.cmyk = I, ae.autodetect.push({
      p: 2,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = q(o, "cmyk"), fe(o) === "array" && o.length === 4)
          return "cmyk";
      }
    });
    var Re = g.unpack, Le = g.last, Be = function(o) {
      return Math.round(o * 100) / 100;
    }, kr = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Re(o, "hsla"), p = Le(o) || "lsa";
      return s[0] = Be(s[0] || 0), s[1] = Be(s[1] * 100) + "%", s[2] = Be(s[2] * 100) + "%", p === "hsla" || s.length > 3 && s[3] < 1 ? (s[3] = s.length > 3 ? s[3] : 1, p = "hsla") : s.length = 3, p + "(" + s.join(",") + ")";
    }, Ht = kr, Bt = g.unpack, kt = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = Bt(o, "rgba");
      var s = o[0], p = o[1], b = o[2];
      s /= 255, p /= 255, b /= 255;
      var x = Math.min(s, p, b), h = Math.max(s, p, b), E = (h + x) / 2, S, _;
      return h === x ? (S = 0, _ = Number.NaN) : S = E < 0.5 ? (h - x) / (h + x) : (h - x) / (2 - h - x), s == h ? _ = (p - b) / (h - x) : p == h ? _ = 2 + (b - s) / (h - x) : b == h && (_ = 4 + (s - p) / (h - x)), _ *= 60, _ < 0 && (_ += 360), o.length > 3 && o[3] !== void 0 ? [_, S, E, o[3]] : [_, S, E];
    }, Tt = kt, Pe = g.unpack, Ne = g.last, Qe = Ht, Tr = Tt, Rr = Math.round, nr = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Pe(o, "rgba"), p = Ne(o) || "rgb";
      return p.substr(0, 3) == "hsl" ? Qe(Tr(s), p) : (s[0] = Rr(s[0]), s[1] = Rr(s[1]), s[2] = Rr(s[2]), (p === "rgba" || s.length > 3 && s[3] < 1) && (s[3] = s.length > 3 ? s[3] : 1, p = "rgba"), p + "(" + s.slice(0, p === "rgb" ? 3 : 4).join(",") + ")");
    }, Wt = nr, an = g.unpack, ar = Math.round, or = function() {
      for (var o, i = [], s = arguments.length; s--; )
        i[s] = arguments[s];
      i = an(i, "hsl");
      var p = i[0], b = i[1], x = i[2], h, E, S;
      if (b === 0)
        h = E = S = x * 255;
      else {
        var _ = [0, 0, 0], F = [0, 0, 0], W = x < 0.5 ? x * (1 + b) : x + b - x * b, L = 2 * x - W, G = p / 360;
        _[0] = G + 1 / 3, _[1] = G, _[2] = G - 1 / 3;
        for (var z = 0; z < 3; z++)
          _[z] < 0 && (_[z] += 1), _[z] > 1 && (_[z] -= 1), 6 * _[z] < 1 ? F[z] = L + (W - L) * 6 * _[z] : 2 * _[z] < 1 ? F[z] = W : 3 * _[z] < 2 ? F[z] = L + (W - L) * (2 / 3 - _[z]) * 6 : F[z] = L;
        o = [ar(F[0] * 255), ar(F[1] * 255), ar(F[2] * 255)], h = o[0], E = o[1], S = o[2];
      }
      return i.length > 3 ? [h, E, S, i[3]] : [h, E, S, 1];
    }, on = or, ln = on, ir = $, un = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, sn = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Pr = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, _r = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Rt = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, cn = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Or = Math.round, Cr = function(o) {
      o = o.toLowerCase().trim();
      var i;
      if (ir.format.named)
        try {
          return ir.format.named(o);
        } catch {
        }
      if (i = o.match(un)) {
        for (var s = i.slice(1, 4), p = 0; p < 3; p++)
          s[p] = +s[p];
        return s[3] = 1, s;
      }
      if (i = o.match(sn)) {
        for (var b = i.slice(1, 5), x = 0; x < 4; x++)
          b[x] = +b[x];
        return b;
      }
      if (i = o.match(Pr)) {
        for (var h = i.slice(1, 4), E = 0; E < 3; E++)
          h[E] = Or(h[E] * 2.55);
        return h[3] = 1, h;
      }
      if (i = o.match(_r)) {
        for (var S = i.slice(1, 5), _ = 0; _ < 3; _++)
          S[_] = Or(S[_] * 2.55);
        return S[3] = +S[3], S;
      }
      if (i = o.match(Rt)) {
        var F = i.slice(1, 4);
        F[1] *= 0.01, F[2] *= 0.01;
        var W = ln(F);
        return W[3] = 1, W;
      }
      if (i = o.match(cn)) {
        var L = i.slice(1, 4);
        L[1] *= 0.01, L[2] *= 0.01;
        var G = ln(L);
        return G[3] = +i[4], G;
      }
    };
    Cr.test = function(o) {
      return un.test(o) || sn.test(o) || Pr.test(o) || _r.test(o) || Rt.test(o) || cn.test(o);
    };
    var Fr = Cr, oa = j, fn = C, dn = $, ia = g.type, la = Wt, vn = Fr;
    fn.prototype.css = function(o) {
      return la(this._rgb, o);
    }, oa.css = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(fn, [null].concat(o, ["css"])))();
    }, dn.format.css = vn, dn.autodetect.push({
      p: 5,
      test: function(o) {
        for (var i = [], s = arguments.length - 1; s-- > 0; )
          i[s] = arguments[s + 1];
        if (!i.length && ia(o) === "string" && vn.test(o))
          return "css";
      }
    });
    var pn = C, Mr = j, gn = $, Pt = g.unpack;
    gn.format.gl = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Pt(o, "rgba");
      return s[0] *= 255, s[1] *= 255, s[2] *= 255, s;
    }, Mr.gl = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(pn, [null].concat(o, ["gl"])))();
    }, pn.prototype.gl = function() {
      var o = this._rgb;
      return [o[0] / 255, o[1] / 255, o[2] / 255, o[3]];
    };
    var Lr = g.unpack, Ar = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Lr(o, "rgb"), p = s[0], b = s[1], x = s[2], h = Math.min(p, b, x), E = Math.max(p, b, x), S = E - h, _ = S * 100 / 255, F = h / (255 - S) * 100, W;
      return S === 0 ? W = Number.NaN : (p === E && (W = (b - x) / S), b === E && (W = 2 + (x - p) / S), x === E && (W = 4 + (p - b) / S), W *= 60, W < 0 && (W += 360)), [W, _, F];
    }, hn = Ar, ua = g.unpack, mn = Math.floor, sa = function() {
      for (var o, i, s, p, b, x, h = [], E = arguments.length; E--; )
        h[E] = arguments[E];
      h = ua(h, "hcg");
      var S = h[0], _ = h[1], F = h[2], W, L, G;
      F = F * 255;
      var z = _ * 255;
      if (_ === 0)
        W = L = G = F;
      else {
        S === 360 && (S = 0), S > 360 && (S -= 360), S < 0 && (S += 360), S /= 60;
        var ie = mn(S), de = S - ie, be = F * (1 - _), Ee = be + z * (1 - de), Ge = be + z * de, Ve = be + z;
        switch (ie) {
          case 0:
            o = [Ve, Ge, be], W = o[0], L = o[1], G = o[2];
            break;
          case 1:
            i = [Ee, Ve, be], W = i[0], L = i[1], G = i[2];
            break;
          case 2:
            s = [be, Ve, Ge], W = s[0], L = s[1], G = s[2];
            break;
          case 3:
            p = [be, Ee, Ve], W = p[0], L = p[1], G = p[2];
            break;
          case 4:
            b = [Ge, be, Ve], W = b[0], L = b[1], G = b[2];
            break;
          case 5:
            x = [Ve, be, Ee], W = x[0], L = x[1], G = x[2];
            break;
        }
      }
      return [W, L, G, h.length > 3 ? h[3] : 1];
    }, bn = sa, yn = g.unpack, ca = g.type, fa = j, Nr = C, Ir = $, da = hn;
    Nr.prototype.hcg = function() {
      return da(this._rgb);
    }, fa.hcg = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(Nr, [null].concat(o, ["hcg"])))();
    }, Ir.format.hcg = bn, Ir.autodetect.push({
      p: 1,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = yn(o, "hcg"), ca(o) === "array" && o.length === 3)
          return "hcg";
      }
    });
    var va = g.unpack, pa = g.last, lr = Math.round, m = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = va(o, "rgba"), p = s[0], b = s[1], x = s[2], h = s[3], E = pa(o) || "auto";
      h === void 0 && (h = 1), E === "auto" && (E = h < 1 ? "rgba" : "rgb"), p = lr(p), b = lr(b), x = lr(x);
      var S = p << 16 | b << 8 | x, _ = "000000" + S.toString(16);
      _ = _.substr(_.length - 6);
      var F = "0" + lr(h * 255).toString(16);
      switch (F = F.substr(F.length - 2), E.toLowerCase()) {
        case "rgba":
          return "#" + _ + F;
        case "argb":
          return "#" + F + _;
        default:
          return "#" + _;
      }
    }, M = m, B = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, xe = function(o) {
      if (o.match(B)) {
        (o.length === 4 || o.length === 7) && (o = o.substr(1)), o.length === 3 && (o = o.split(""), o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]);
        var i = parseInt(o, 16), s = i >> 16, p = i >> 8 & 255, b = i & 255;
        return [s, p, b, 1];
      }
      if (o.match(ee)) {
        (o.length === 5 || o.length === 9) && (o = o.substr(1)), o.length === 4 && (o = o.split(""), o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2] + o[3] + o[3]);
        var x = parseInt(o, 16), h = x >> 24 & 255, E = x >> 16 & 255, S = x >> 8 & 255, _ = Math.round((x & 255) / 255 * 100) / 100;
        return [h, E, S, _];
      }
      throw new Error("unknown hex color: " + o);
    }, $e = xe, pe = j, oe = C, ze = g.type, Me = $, Ae = M;
    oe.prototype.hex = function(o) {
      return Ae(this._rgb, o);
    }, pe.hex = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(oe, [null].concat(o, ["hex"])))();
    }, Me.format.hex = $e, Me.autodetect.push({
      p: 4,
      test: function(o) {
        for (var i = [], s = arguments.length - 1; s-- > 0; )
          i[s] = arguments[s + 1];
        if (!i.length && ze(o) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(o.length) >= 0)
          return "hex";
      }
    });
    var rt = g.unpack, gt = g.TWOPI, ht = Math.min, Je = Math.sqrt, Dr = Math.acos, ga = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = rt(o, "rgb"), p = s[0], b = s[1], x = s[2];
      p /= 255, b /= 255, x /= 255;
      var h, E = ht(p, b, x), S = (p + b + x) / 3, _ = S > 0 ? 1 - E / S : 0;
      return _ === 0 ? h = NaN : (h = (p - b + (p - x)) / 2, h /= Je((p - b) * (p - b) + (p - x) * (b - x)), h = Dr(h), x > b && (h = gt - h), h /= gt), [h * 360, _, S];
    }, ha = ga, Gu = g.unpack, ma = g.limit, ur = g.TWOPI, ba = g.PITHIRD, sr = Math.cos, Yu = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = Gu(o, "hsi");
      var s = o[0], p = o[1], b = o[2], x, h, E;
      return isNaN(s) && (s = 0), isNaN(p) && (p = 0), s > 360 && (s -= 360), s < 0 && (s += 360), s /= 360, s < 1 / 3 ? (E = (1 - p) / 3, x = (1 + p * sr(ur * s) / sr(ba - ur * s)) / 3, h = 1 - (E + x)) : s < 2 / 3 ? (s -= 1 / 3, x = (1 - p) / 3, h = (1 + p * sr(ur * s) / sr(ba - ur * s)) / 3, E = 1 - (x + h)) : (s -= 2 / 3, h = (1 - p) / 3, E = (1 + p * sr(ur * s) / sr(ba - ur * s)) / 3, x = 1 - (h + E)), x = ma(b * x * 3), h = ma(b * h * 3), E = ma(b * E * 3), [x * 255, h * 255, E * 255, o.length > 3 ? o[3] : 1];
    }, qu = Yu, Ku = g.unpack, Xu = g.type, Ju = j, Bo = C, Wo = $, Zu = ha;
    Bo.prototype.hsi = function() {
      return Zu(this._rgb);
    }, Ju.hsi = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(Bo, [null].concat(o, ["hsi"])))();
    }, Wo.format.hsi = qu, Wo.autodetect.push({
      p: 2,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = Ku(o, "hsi"), Xu(o) === "array" && o.length === 3)
          return "hsi";
      }
    });
    var Qu = g.unpack, es = g.type, ts = j, Vo = C, Uo = $, rs = Tt;
    Vo.prototype.hsl = function() {
      return rs(this._rgb);
    }, ts.hsl = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(Vo, [null].concat(o, ["hsl"])))();
    }, Uo.format.hsl = on, Uo.autodetect.push({
      p: 2,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = Qu(o, "hsl"), es(o) === "array" && o.length === 3)
          return "hsl";
      }
    });
    var ns = g.unpack, as = Math.min, os = Math.max, is = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = ns(o, "rgb");
      var s = o[0], p = o[1], b = o[2], x = as(s, p, b), h = os(s, p, b), E = h - x, S, _, F;
      return F = h / 255, h === 0 ? (S = Number.NaN, _ = 0) : (_ = E / h, s === h && (S = (p - b) / E), p === h && (S = 2 + (b - s) / E), b === h && (S = 4 + (s - p) / E), S *= 60, S < 0 && (S += 360)), [S, _, F];
    }, ls = is, us = g.unpack, ss = Math.floor, cs = function() {
      for (var o, i, s, p, b, x, h = [], E = arguments.length; E--; )
        h[E] = arguments[E];
      h = us(h, "hsv");
      var S = h[0], _ = h[1], F = h[2], W, L, G;
      if (F *= 255, _ === 0)
        W = L = G = F;
      else {
        S === 360 && (S = 0), S > 360 && (S -= 360), S < 0 && (S += 360), S /= 60;
        var z = ss(S), ie = S - z, de = F * (1 - _), be = F * (1 - _ * ie), Ee = F * (1 - _ * (1 - ie));
        switch (z) {
          case 0:
            o = [F, Ee, de], W = o[0], L = o[1], G = o[2];
            break;
          case 1:
            i = [be, F, de], W = i[0], L = i[1], G = i[2];
            break;
          case 2:
            s = [de, F, Ee], W = s[0], L = s[1], G = s[2];
            break;
          case 3:
            p = [de, be, F], W = p[0], L = p[1], G = p[2];
            break;
          case 4:
            b = [Ee, de, F], W = b[0], L = b[1], G = b[2];
            break;
          case 5:
            x = [F, de, be], W = x[0], L = x[1], G = x[2];
            break;
        }
      }
      return [W, L, G, h.length > 3 ? h[3] : 1];
    }, fs = cs, ds = g.unpack, vs = g.type, ps = j, zo = C, Go = $, gs = ls;
    zo.prototype.hsv = function() {
      return gs(this._rgb);
    }, ps.hsv = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(zo, [null].concat(o, ["hsv"])))();
    }, Go.format.hsv = fs, Go.autodetect.push({
      p: 2,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = ds(o, "hsv"), vs(o) === "array" && o.length === 3)
          return "hsv";
      }
    });
    var wn = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, cr = wn, hs = g.unpack, Yo = Math.pow, ms = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = hs(o, "rgb"), p = s[0], b = s[1], x = s[2], h = bs(p, b, x), E = h[0], S = h[1], _ = h[2], F = 116 * S - 16;
      return [F < 0 ? 0 : F, 500 * (E - S), 200 * (S - _)];
    }, ya = function(o) {
      return (o /= 255) <= 0.04045 ? o / 12.92 : Yo((o + 0.055) / 1.055, 2.4);
    }, wa = function(o) {
      return o > cr.t3 ? Yo(o, 1 / 3) : o / cr.t2 + cr.t0;
    }, bs = function(o, i, s) {
      o = ya(o), i = ya(i), s = ya(s);
      var p = wa((0.4124564 * o + 0.3575761 * i + 0.1804375 * s) / cr.Xn), b = wa((0.2126729 * o + 0.7151522 * i + 0.072175 * s) / cr.Yn), x = wa((0.0193339 * o + 0.119192 * i + 0.9503041 * s) / cr.Zn);
      return [p, b, x];
    }, qo = ms, fr = wn, ys = g.unpack, ws = Math.pow, xs = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = ys(o, "lab");
      var s = o[0], p = o[1], b = o[2], x, h, E, S, _, F;
      return h = (s + 16) / 116, x = isNaN(p) ? h : h + p / 500, E = isNaN(b) ? h : h - b / 200, h = fr.Yn * Ea(h), x = fr.Xn * Ea(x), E = fr.Zn * Ea(E), S = xa(3.2404542 * x - 1.5371385 * h - 0.4985314 * E), _ = xa(-0.969266 * x + 1.8760108 * h + 0.041556 * E), F = xa(0.0556434 * x - 0.2040259 * h + 1.0572252 * E), [S, _, F, o.length > 3 ? o[3] : 1];
    }, xa = function(o) {
      return 255 * (o <= 304e-5 ? 12.92 * o : 1.055 * ws(o, 1 / 2.4) - 0.055);
    }, Ea = function(o) {
      return o > fr.t1 ? o * o * o : fr.t2 * (o - fr.t0);
    }, Ko = xs, Es = g.unpack, $s = g.type, Ss = j, Xo = C, Jo = $, ks = qo;
    Xo.prototype.lab = function() {
      return ks(this._rgb);
    }, Ss.lab = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(Xo, [null].concat(o, ["lab"])))();
    }, Jo.format.lab = Ko, Jo.autodetect.push({
      p: 2,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = Es(o, "lab"), $s(o) === "array" && o.length === 3)
          return "lab";
      }
    });
    var Ts = g.unpack, Rs = g.RAD2DEG, Ps = Math.sqrt, _s = Math.atan2, Os = Math.round, Cs = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Ts(o, "lab"), p = s[0], b = s[1], x = s[2], h = Ps(b * b + x * x), E = (_s(x, b) * Rs + 360) % 360;
      return Os(h * 1e4) === 0 && (E = Number.NaN), [p, h, E];
    }, Zo = Cs, Fs = g.unpack, Ms = qo, Ls = Zo, As = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Fs(o, "rgb"), p = s[0], b = s[1], x = s[2], h = Ms(p, b, x), E = h[0], S = h[1], _ = h[2];
      return Ls(E, S, _);
    }, Ns = As, Is = g.unpack, Ds = g.DEG2RAD, js = Math.sin, Hs = Math.cos, Bs = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Is(o, "lch"), p = s[0], b = s[1], x = s[2];
      return isNaN(x) && (x = 0), x = x * Ds, [p, Hs(x) * b, js(x) * b];
    }, Qo = Bs, Ws = g.unpack, Vs = Qo, Us = Ko, zs = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = Ws(o, "lch");
      var s = o[0], p = o[1], b = o[2], x = Vs(s, p, b), h = x[0], E = x[1], S = x[2], _ = Us(h, E, S), F = _[0], W = _[1], L = _[2];
      return [F, W, L, o.length > 3 ? o[3] : 1];
    }, ei = zs, Gs = g.unpack, Ys = ei, qs = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Gs(o, "hcl").reverse();
      return Ys.apply(void 0, s);
    }, Ks = qs, Xs = g.unpack, Js = g.type, ti = j, xn = C, $a = $, ri = Ns;
    xn.prototype.lch = function() {
      return ri(this._rgb);
    }, xn.prototype.hcl = function() {
      return ri(this._rgb).reverse();
    }, ti.lch = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(xn, [null].concat(o, ["lch"])))();
    }, ti.hcl = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(xn, [null].concat(o, ["hcl"])))();
    }, $a.format.lch = ei, $a.format.hcl = Ks, ["lch", "hcl"].forEach(function(o) {
      return $a.autodetect.push({
        p: 2,
        test: function() {
          for (var i = [], s = arguments.length; s--; )
            i[s] = arguments[s];
          if (i = Xs(i, o), Js(i) === "array" && i.length === 3)
            return o;
        }
      });
    });
    var Zs = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, ni = Zs, Qs = C, ai = $, ec = g.type, jr = ni, tc = $e, rc = M;
    Qs.prototype.name = function() {
      for (var o = rc(this._rgb, "rgb"), i = 0, s = Object.keys(jr); i < s.length; i += 1) {
        var p = s[i];
        if (jr[p] === o)
          return p.toLowerCase();
      }
      return o;
    }, ai.format.named = function(o) {
      if (o = o.toLowerCase(), jr[o])
        return tc(jr[o]);
      throw new Error("unknown color name: " + o);
    }, ai.autodetect.push({
      p: 5,
      test: function(o) {
        for (var i = [], s = arguments.length - 1; s-- > 0; )
          i[s] = arguments[s + 1];
        if (!i.length && ec(o) === "string" && jr[o.toLowerCase()])
          return "named";
      }
    });
    var nc = g.unpack, ac = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = nc(o, "rgb"), p = s[0], b = s[1], x = s[2];
      return (p << 16) + (b << 8) + x;
    }, oc = ac, ic = g.type, lc = function(o) {
      if (ic(o) == "number" && o >= 0 && o <= 16777215) {
        var i = o >> 16, s = o >> 8 & 255, p = o & 255;
        return [i, s, p, 1];
      }
      throw new Error("unknown num color: " + o);
    }, uc = lc, sc = j, oi = C, ii = $, cc = g.type, fc = oc;
    oi.prototype.num = function() {
      return fc(this._rgb);
    }, sc.num = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(oi, [null].concat(o, ["num"])))();
    }, ii.format.num = uc, ii.autodetect.push({
      p: 5,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o.length === 1 && cc(o[0]) === "number" && o[0] >= 0 && o[0] <= 16777215)
          return "num";
      }
    });
    var dc = j, Sa = C, li = $, ui = g.unpack, si = g.type, ci = Math.round;
    Sa.prototype.rgb = function(o) {
      return o === void 0 && (o = !0), o === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(ci);
    }, Sa.prototype.rgba = function(o) {
      return o === void 0 && (o = !0), this._rgb.slice(0, 4).map(function(i, s) {
        return s < 3 ? o === !1 ? i : ci(i) : i;
      });
    }, dc.rgb = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(Sa, [null].concat(o, ["rgb"])))();
    }, li.format.rgb = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = ui(o, "rgba");
      return s[3] === void 0 && (s[3] = 1), s;
    }, li.autodetect.push({
      p: 3,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = ui(o, "rgba"), si(o) === "array" && (o.length === 3 || o.length === 4 && si(o[3]) == "number" && o[3] >= 0 && o[3] <= 1))
          return "rgb";
      }
    });
    var En = Math.log, vc = function(o) {
      var i = o / 100, s, p, b;
      return i < 66 ? (s = 255, p = i < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (p = i - 2) + 104.49216199393888 * En(p), b = i < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = i - 10) + 115.67994401066147 * En(b)) : (s = 351.97690566805693 + 0.114206453784165 * (s = i - 55) - 40.25366309332127 * En(s), p = 325.4494125711974 + 0.07943456536662342 * (p = i - 50) - 28.0852963507957 * En(p), b = 255), [s, p, b, 1];
    }, fi = vc, pc = fi, gc = g.unpack, hc = Math.round, mc = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      for (var s = gc(o, "rgb"), p = s[0], b = s[2], x = 1e3, h = 4e4, E = 0.4, S; h - x > E; ) {
        S = (h + x) * 0.5;
        var _ = pc(S);
        _[2] / _[0] >= b / p ? h = S : x = S;
      }
      return hc(S);
    }, bc = mc, ka = j, $n = C, Ta = $, yc = bc;
    $n.prototype.temp = $n.prototype.kelvin = $n.prototype.temperature = function() {
      return yc(this._rgb);
    }, ka.temp = ka.kelvin = ka.temperature = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply($n, [null].concat(o, ["temp"])))();
    }, Ta.format.temp = Ta.format.kelvin = Ta.format.temperature = fi;
    var wc = g.unpack, Ra = Math.cbrt, xc = Math.pow, Ec = Math.sign, $c = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = wc(o, "rgb"), p = s[0], b = s[1], x = s[2], h = [Pa(p / 255), Pa(b / 255), Pa(x / 255)], E = h[0], S = h[1], _ = h[2], F = Ra(0.4122214708 * E + 0.5363325363 * S + 0.0514459929 * _), W = Ra(0.2119034982 * E + 0.6806995451 * S + 0.1073969566 * _), L = Ra(0.0883024619 * E + 0.2817188376 * S + 0.6299787005 * _);
      return [
        0.2104542553 * F + 0.793617785 * W - 0.0040720468 * L,
        1.9779984951 * F - 2.428592205 * W + 0.4505937099 * L,
        0.0259040371 * F + 0.7827717662 * W - 0.808675766 * L
      ];
    }, di = $c;
    function Pa(o) {
      var i = Math.abs(o);
      return i < 0.04045 ? o / 12.92 : (Ec(o) || 1) * xc((i + 0.055) / 1.055, 2.4);
    }
    var Sc = g.unpack, Sn = Math.pow, kc = Math.sign, Tc = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = Sc(o, "lab");
      var s = o[0], p = o[1], b = o[2], x = Sn(s + 0.3963377774 * p + 0.2158037573 * b, 3), h = Sn(s - 0.1055613458 * p - 0.0638541728 * b, 3), E = Sn(s - 0.0894841775 * p - 1.291485548 * b, 3);
      return [
        255 * _a(4.0767416621 * x - 3.3077115913 * h + 0.2309699292 * E),
        255 * _a(-1.2684380046 * x + 2.6097574011 * h - 0.3413193965 * E),
        255 * _a(-0.0041960863 * x - 0.7034186147 * h + 1.707614701 * E),
        o.length > 3 ? o[3] : 1
      ];
    }, vi = Tc;
    function _a(o) {
      var i = Math.abs(o);
      return i > 31308e-7 ? (kc(o) || 1) * (1.055 * Sn(i, 1 / 2.4) - 0.055) : o * 12.92;
    }
    var Rc = g.unpack, Pc = g.type, _c = j, pi = C, gi = $, Oc = di;
    pi.prototype.oklab = function() {
      return Oc(this._rgb);
    }, _c.oklab = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(pi, [null].concat(o, ["oklab"])))();
    }, gi.format.oklab = vi, gi.autodetect.push({
      p: 3,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = Rc(o, "oklab"), Pc(o) === "array" && o.length === 3)
          return "oklab";
      }
    });
    var Cc = g.unpack, Fc = di, Mc = Zo, Lc = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      var s = Cc(o, "rgb"), p = s[0], b = s[1], x = s[2], h = Fc(p, b, x), E = h[0], S = h[1], _ = h[2];
      return Mc(E, S, _);
    }, Ac = Lc, Nc = g.unpack, Ic = Qo, Dc = vi, jc = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      o = Nc(o, "lch");
      var s = o[0], p = o[1], b = o[2], x = Ic(s, p, b), h = x[0], E = x[1], S = x[2], _ = Dc(h, E, S), F = _[0], W = _[1], L = _[2];
      return [F, W, L, o.length > 3 ? o[3] : 1];
    }, Hc = jc, Bc = g.unpack, Wc = g.type, Vc = j, hi = C, mi = $, Uc = Ac;
    hi.prototype.oklch = function() {
      return Uc(this._rgb);
    }, Vc.oklch = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      return new (Function.prototype.bind.apply(hi, [null].concat(o, ["oklch"])))();
    }, mi.format.oklch = Hc, mi.autodetect.push({
      p: 3,
      test: function() {
        for (var o = [], i = arguments.length; i--; )
          o[i] = arguments[i];
        if (o = Bc(o, "oklch"), Wc(o) === "array" && o.length === 3)
          return "oklch";
      }
    });
    var bi = C, zc = g.type;
    bi.prototype.alpha = function(o, i) {
      return i === void 0 && (i = !1), o !== void 0 && zc(o) === "number" ? i ? (this._rgb[3] = o, this) : new bi([this._rgb[0], this._rgb[1], this._rgb[2], o], "rgb") : this._rgb[3];
    };
    var Gc = C;
    Gc.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var Vt = C, Yc = wn;
    Vt.prototype.darken = function(o) {
      o === void 0 && (o = 1);
      var i = this, s = i.lab();
      return s[0] -= Yc.Kn * o, new Vt(s, "lab").alpha(i.alpha(), !0);
    }, Vt.prototype.brighten = function(o) {
      return o === void 0 && (o = 1), this.darken(-o);
    }, Vt.prototype.darker = Vt.prototype.darken, Vt.prototype.brighter = Vt.prototype.brighten;
    var qc = C;
    qc.prototype.get = function(o) {
      var i = o.split("."), s = i[0], p = i[1], b = this[s]();
      if (p) {
        var x = s.indexOf(p) - (s.substr(0, 2) === "ok" ? 2 : 0);
        if (x > -1)
          return b[x];
        throw new Error("unknown channel " + p + " in mode " + s);
      } else
        return b;
    };
    var dr = C, Kc = g.type, Xc = Math.pow, Jc = 1e-7, Zc = 20;
    dr.prototype.luminance = function(o) {
      if (o !== void 0 && Kc(o) === "number") {
        if (o === 0)
          return new dr([0, 0, 0, this._rgb[3]], "rgb");
        if (o === 1)
          return new dr([255, 255, 255, this._rgb[3]], "rgb");
        var i = this.luminance(), s = "rgb", p = Zc, b = function(h, E) {
          var S = h.interpolate(E, 0.5, s), _ = S.luminance();
          return Math.abs(o - _) < Jc || !p-- ? S : _ > o ? b(h, S) : b(S, E);
        }, x = (i > o ? b(new dr([0, 0, 0]), this) : b(this, new dr([255, 255, 255]))).rgb();
        return new dr(x.concat([this._rgb[3]]));
      }
      return Qc.apply(void 0, this._rgb.slice(0, 3));
    };
    var Qc = function(o, i, s) {
      return o = Oa(o), i = Oa(i), s = Oa(s), 0.2126 * o + 0.7152 * i + 0.0722 * s;
    }, Oa = function(o) {
      return o /= 255, o <= 0.03928 ? o / 12.92 : Xc((o + 0.055) / 1.055, 2.4);
    }, at = {}, yi = C, wi = g.type, kn = at, xi = function(o, i, s) {
      s === void 0 && (s = 0.5);
      for (var p = [], b = arguments.length - 3; b-- > 0; )
        p[b] = arguments[b + 3];
      var x = p[0] || "lrgb";
      if (!kn[x] && !p.length && (x = Object.keys(kn)[0]), !kn[x])
        throw new Error("interpolation mode " + x + " is not defined");
      return wi(o) !== "object" && (o = new yi(o)), wi(i) !== "object" && (i = new yi(i)), kn[x](o, i, s).alpha(o.alpha() + s * (i.alpha() - o.alpha()));
    }, Ei = C, ef = xi;
    Ei.prototype.mix = Ei.prototype.interpolate = function(o, i) {
      i === void 0 && (i = 0.5);
      for (var s = [], p = arguments.length - 2; p-- > 0; )
        s[p] = arguments[p + 2];
      return ef.apply(void 0, [this, o, i].concat(s));
    };
    var $i = C;
    $i.prototype.premultiply = function(o) {
      o === void 0 && (o = !1);
      var i = this._rgb, s = i[3];
      return o ? (this._rgb = [i[0] * s, i[1] * s, i[2] * s, s], this) : new $i([i[0] * s, i[1] * s, i[2] * s, s], "rgb");
    };
    var Ca = C, tf = wn;
    Ca.prototype.saturate = function(o) {
      o === void 0 && (o = 1);
      var i = this, s = i.lch();
      return s[1] += tf.Kn * o, s[1] < 0 && (s[1] = 0), new Ca(s, "lch").alpha(i.alpha(), !0);
    }, Ca.prototype.desaturate = function(o) {
      return o === void 0 && (o = 1), this.saturate(-o);
    };
    var Si = C, ki = g.type;
    Si.prototype.set = function(o, i, s) {
      s === void 0 && (s = !1);
      var p = o.split("."), b = p[0], x = p[1], h = this[b]();
      if (x) {
        var E = b.indexOf(x) - (b.substr(0, 2) === "ok" ? 2 : 0);
        if (E > -1) {
          if (ki(i) == "string")
            switch (i.charAt(0)) {
              case "+":
                h[E] += +i;
                break;
              case "-":
                h[E] += +i;
                break;
              case "*":
                h[E] *= +i.substr(1);
                break;
              case "/":
                h[E] /= +i.substr(1);
                break;
              default:
                h[E] = +i;
            }
          else if (ki(i) === "number")
            h[E] = i;
          else
            throw new Error("unsupported value for Color.set");
          var S = new Si(h, b);
          return s ? (this._rgb = S._rgb, this) : S;
        }
        throw new Error("unknown channel " + x + " in mode " + b);
      } else
        return h;
    };
    var rf = C, nf = function(o, i, s) {
      var p = o._rgb, b = i._rgb;
      return new rf(
        p[0] + s * (b[0] - p[0]),
        p[1] + s * (b[1] - p[1]),
        p[2] + s * (b[2] - p[2]),
        "rgb"
      );
    };
    at.rgb = nf;
    var af = C, Fa = Math.sqrt, vr = Math.pow, of = function(o, i, s) {
      var p = o._rgb, b = p[0], x = p[1], h = p[2], E = i._rgb, S = E[0], _ = E[1], F = E[2];
      return new af(
        Fa(vr(b, 2) * (1 - s) + vr(S, 2) * s),
        Fa(vr(x, 2) * (1 - s) + vr(_, 2) * s),
        Fa(vr(h, 2) * (1 - s) + vr(F, 2) * s),
        "rgb"
      );
    };
    at.lrgb = of;
    var lf = C, uf = function(o, i, s) {
      var p = o.lab(), b = i.lab();
      return new lf(
        p[0] + s * (b[0] - p[0]),
        p[1] + s * (b[1] - p[1]),
        p[2] + s * (b[2] - p[2]),
        "lab"
      );
    };
    at.lab = uf;
    var Ti = C, pr = function(o, i, s, p) {
      var b, x, h, E;
      p === "hsl" ? (h = o.hsl(), E = i.hsl()) : p === "hsv" ? (h = o.hsv(), E = i.hsv()) : p === "hcg" ? (h = o.hcg(), E = i.hcg()) : p === "hsi" ? (h = o.hsi(), E = i.hsi()) : p === "lch" || p === "hcl" ? (p = "hcl", h = o.hcl(), E = i.hcl()) : p === "oklch" && (h = o.oklch().reverse(), E = i.oklch().reverse());
      var S, _, F, W, L, G;
      (p.substr(0, 1) === "h" || p === "oklch") && (b = h, S = b[0], F = b[1], L = b[2], x = E, _ = x[0], W = x[1], G = x[2]);
      var z, ie, de, be;
      return !isNaN(S) && !isNaN(_) ? (_ > S && _ - S > 180 ? be = _ - (S + 360) : _ < S && S - _ > 180 ? be = _ + 360 - S : be = _ - S, ie = S + s * be) : isNaN(S) ? isNaN(_) ? ie = Number.NaN : (ie = _, (L == 1 || L == 0) && p != "hsv" && (z = W)) : (ie = S, (G == 1 || G == 0) && p != "hsv" && (z = F)), z === void 0 && (z = F + s * (W - F)), de = L + s * (G - L), p === "oklch" ? new Ti([de, z, ie], p) : new Ti([ie, z, de], p);
    }, sf = pr, Ri = function(o, i, s) {
      return sf(o, i, s, "lch");
    };
    at.lch = Ri, at.hcl = Ri;
    var cf = C, ff = function(o, i, s) {
      var p = o.num(), b = i.num();
      return new cf(p + s * (b - p), "num");
    };
    at.num = ff;
    var df = pr, vf = function(o, i, s) {
      return df(o, i, s, "hcg");
    };
    at.hcg = vf;
    var pf = pr, gf = function(o, i, s) {
      return pf(o, i, s, "hsi");
    };
    at.hsi = gf;
    var hf = pr, mf = function(o, i, s) {
      return hf(o, i, s, "hsl");
    };
    at.hsl = mf;
    var bf = pr, yf = function(o, i, s) {
      return bf(o, i, s, "hsv");
    };
    at.hsv = yf;
    var wf = C, xf = function(o, i, s) {
      var p = o.oklab(), b = i.oklab();
      return new wf(
        p[0] + s * (b[0] - p[0]),
        p[1] + s * (b[1] - p[1]),
        p[2] + s * (b[2] - p[2]),
        "oklab"
      );
    };
    at.oklab = xf;
    var Ef = pr, $f = function(o, i, s) {
      return Ef(o, i, s, "oklch");
    };
    at.oklch = $f;
    var Ma = C, Sf = g.clip_rgb, La = Math.pow, Aa = Math.sqrt, Na = Math.PI, Pi = Math.cos, _i = Math.sin, kf = Math.atan2, Tf = function(o, i, s) {
      i === void 0 && (i = "lrgb"), s === void 0 && (s = null);
      var p = o.length;
      s || (s = Array.from(new Array(p)).map(function() {
        return 1;
      }));
      var b = p / s.reduce(function(ie, de) {
        return ie + de;
      });
      if (s.forEach(function(ie, de) {
        s[de] *= b;
      }), o = o.map(function(ie) {
        return new Ma(ie);
      }), i === "lrgb")
        return Rf(o, s);
      for (var x = o.shift(), h = x.get(i), E = [], S = 0, _ = 0, F = 0; F < h.length; F++)
        if (h[F] = (h[F] || 0) * s[0], E.push(isNaN(h[F]) ? 0 : s[0]), i.charAt(F) === "h" && !isNaN(h[F])) {
          var W = h[F] / 180 * Na;
          S += Pi(W) * s[0], _ += _i(W) * s[0];
        }
      var L = x.alpha() * s[0];
      o.forEach(function(ie, de) {
        var be = ie.get(i);
        L += ie.alpha() * s[de + 1];
        for (var Ee = 0; Ee < h.length; Ee++)
          if (!isNaN(be[Ee]))
            if (E[Ee] += s[de + 1], i.charAt(Ee) === "h") {
              var Ge = be[Ee] / 180 * Na;
              S += Pi(Ge) * s[de + 1], _ += _i(Ge) * s[de + 1];
            } else
              h[Ee] += be[Ee] * s[de + 1];
      });
      for (var G = 0; G < h.length; G++)
        if (i.charAt(G) === "h") {
          for (var z = kf(_ / E[G], S / E[G]) / Na * 180; z < 0; )
            z += 360;
          for (; z >= 360; )
            z -= 360;
          h[G] = z;
        } else
          h[G] = h[G] / E[G];
      return L /= p, new Ma(h, i).alpha(L > 0.99999 ? 1 : L, !0);
    }, Rf = function(o, i) {
      for (var s = o.length, p = [0, 0, 0, 0], b = 0; b < o.length; b++) {
        var x = o[b], h = i[b] / s, E = x._rgb;
        p[0] += La(E[0], 2) * h, p[1] += La(E[1], 2) * h, p[2] += La(E[2], 2) * h, p[3] += E[3] * h;
      }
      return p[0] = Aa(p[0]), p[1] = Aa(p[1]), p[2] = Aa(p[2]), p[3] > 0.9999999 && (p[3] = 1), new Ma(Sf(p));
    }, ut = j, gr = g.type, Pf = Math.pow, Ia = function(o) {
      var i = "rgb", s = ut("#ccc"), p = 0, b = [0, 1], x = [], h = [0, 0], E = !1, S = [], _ = !1, F = 0, W = 1, L = !1, G = {}, z = !0, ie = 1, de = function(A) {
        if (A = A || ["#fff", "#000"], A && gr(A) === "string" && ut.brewer && ut.brewer[A.toLowerCase()] && (A = ut.brewer[A.toLowerCase()]), gr(A) === "array") {
          A.length === 1 && (A = [A[0], A[0]]), A = A.slice(0);
          for (var Q = 0; Q < A.length; Q++)
            A[Q] = ut(A[Q]);
          x.length = 0;
          for (var ce = 0; ce < A.length; ce++)
            x.push(ce / (A.length - 1));
        }
        return nt(), S = A;
      }, be = function(A) {
        if (E != null) {
          for (var Q = E.length - 1, ce = 0; ce < Q && A >= E[ce]; )
            ce++;
          return ce - 1;
        }
        return 0;
      }, Ee = function(A) {
        return A;
      }, Ge = function(A) {
        return A;
      }, Ve = function(A, Q) {
        var ce, le;
        if (Q == null && (Q = !1), isNaN(A) || A === null)
          return s;
        if (Q)
          le = A;
        else if (E && E.length > 2) {
          var Ye = be(A);
          le = Ye / (E.length - 2);
        } else
          W !== F ? le = (A - F) / (W - F) : le = 1;
        le = Ge(le), Q || (le = Ee(le)), ie !== 1 && (le = Pf(le, ie)), le = h[0] + le * (1 - h[0] - h[1]), le = Math.min(1, Math.max(0, le));
        var Oe = Math.floor(le * 1e4);
        if (z && G[Oe])
          ce = G[Oe];
        else {
          if (gr(S) === "array")
            for (var ye = 0; ye < x.length; ye++) {
              var Se = x[ye];
              if (le <= Se) {
                ce = S[ye];
                break;
              }
              if (le >= Se && ye === x.length - 1) {
                ce = S[ye];
                break;
              }
              if (le > Se && le < x[ye + 1]) {
                le = (le - Se) / (x[ye + 1] - Se), ce = ut.interpolate(S[ye], S[ye + 1], le, i);
                break;
              }
            }
          else
            gr(S) === "function" && (ce = S(le));
          z && (G[Oe] = ce);
        }
        return ce;
      }, nt = function() {
        return G = {};
      };
      de(o);
      var me = function(A) {
        var Q = ut(Ve(A));
        return _ && Q[_] ? Q[_]() : Q;
      };
      return me.classes = function(A) {
        if (A != null) {
          if (gr(A) === "array")
            E = A, b = [A[0], A[A.length - 1]];
          else {
            var Q = ut.analyze(b);
            A === 0 ? E = [Q.min, Q.max] : E = ut.limits(Q, "e", A);
          }
          return me;
        }
        return E;
      }, me.domain = function(A) {
        if (!arguments.length)
          return b;
        F = A[0], W = A[A.length - 1], x = [];
        var Q = S.length;
        if (A.length === Q && F !== W)
          for (var ce = 0, le = Array.from(A); ce < le.length; ce += 1) {
            var Ye = le[ce];
            x.push((Ye - F) / (W - F));
          }
        else {
          for (var Oe = 0; Oe < Q; Oe++)
            x.push(Oe / (Q - 1));
          if (A.length > 2) {
            var ye = A.map(function(ke, Te) {
              return Te / (A.length - 1);
            }), Se = A.map(function(ke) {
              return (ke - F) / (W - F);
            });
            Se.every(function(ke, Te) {
              return ye[Te] === ke;
            }) || (Ge = function(ke) {
              if (ke <= 0 || ke >= 1)
                return ke;
              for (var Te = 0; ke >= Se[Te + 1]; )
                Te++;
              var ct = (ke - Se[Te]) / (Se[Te + 1] - Se[Te]), Ct = ye[Te] + ct * (ye[Te + 1] - ye[Te]);
              return Ct;
            });
          }
        }
        return b = [F, W], me;
      }, me.mode = function(A) {
        return arguments.length ? (i = A, nt(), me) : i;
      }, me.range = function(A, Q) {
        return de(A), me;
      }, me.out = function(A) {
        return _ = A, me;
      }, me.spread = function(A) {
        return arguments.length ? (p = A, me) : p;
      }, me.correctLightness = function(A) {
        return A == null && (A = !0), L = A, nt(), L ? Ee = function(Q) {
          for (var ce = Ve(0, !0).lab()[0], le = Ve(1, !0).lab()[0], Ye = ce > le, Oe = Ve(Q, !0).lab()[0], ye = ce + (le - ce) * Q, Se = Oe - ye, ke = 0, Te = 1, ct = 20; Math.abs(Se) > 0.01 && ct-- > 0; )
            (function() {
              return Ye && (Se *= -1), Se < 0 ? (ke = Q, Q += (Te - Q) * 0.5) : (Te = Q, Q += (ke - Q) * 0.5), Oe = Ve(Q, !0).lab()[0], Se = Oe - ye;
            })();
          return Q;
        } : Ee = function(Q) {
          return Q;
        }, me;
      }, me.padding = function(A) {
        return A != null ? (gr(A) === "number" && (A = [A, A]), h = A, me) : h;
      }, me.colors = function(A, Q) {
        arguments.length < 2 && (Q = "hex");
        var ce = [];
        if (arguments.length === 0)
          ce = S.slice(0);
        else if (A === 1)
          ce = [me(0.5)];
        else if (A > 1) {
          var le = b[0], Ye = b[1] - le;
          ce = _f(0, A).map(function(Te) {
            return me(le + Te / (A - 1) * Ye);
          });
        } else {
          o = [];
          var Oe = [];
          if (E && E.length > 2)
            for (var ye = 1, Se = E.length, ke = 1 <= Se; ke ? ye < Se : ye > Se; ke ? ye++ : ye--)
              Oe.push((E[ye - 1] + E[ye]) * 0.5);
          else
            Oe = b;
          ce = Oe.map(function(Te) {
            return me(Te);
          });
        }
        return ut[Q] && (ce = ce.map(function(Te) {
          return Te[Q]();
        })), ce;
      }, me.cache = function(A) {
        return A != null ? (z = A, me) : z;
      }, me.gamma = function(A) {
        return A != null ? (ie = A, me) : ie;
      }, me.nodata = function(A) {
        return A != null ? (s = ut(A), me) : s;
      }, me;
    };
    function _f(o, i, s) {
      for (var p = [], b = o < i, x = i, h = o; b ? h < x : h > x; b ? h++ : h--)
        p.push(h);
      return p;
    }
    var Hr = C, Of = Ia, Cf = function(o) {
      for (var i = [1, 1], s = 1; s < o; s++) {
        for (var p = [1], b = 1; b <= i.length; b++)
          p[b] = (i[b] || 0) + i[b - 1];
        i = p;
      }
      return i;
    }, Ff = function(o) {
      var i, s, p, b, x, h, E;
      if (o = o.map(function(L) {
        return new Hr(L);
      }), o.length === 2)
        i = o.map(function(L) {
          return L.lab();
        }), x = i[0], h = i[1], b = function(L) {
          var G = [0, 1, 2].map(function(z) {
            return x[z] + L * (h[z] - x[z]);
          });
          return new Hr(G, "lab");
        };
      else if (o.length === 3)
        s = o.map(function(L) {
          return L.lab();
        }), x = s[0], h = s[1], E = s[2], b = function(L) {
          var G = [0, 1, 2].map(function(z) {
            return (1 - L) * (1 - L) * x[z] + 2 * (1 - L) * L * h[z] + L * L * E[z];
          });
          return new Hr(G, "lab");
        };
      else if (o.length === 4) {
        var S;
        p = o.map(function(L) {
          return L.lab();
        }), x = p[0], h = p[1], E = p[2], S = p[3], b = function(L) {
          var G = [0, 1, 2].map(function(z) {
            return (1 - L) * (1 - L) * (1 - L) * x[z] + 3 * (1 - L) * (1 - L) * L * h[z] + 3 * (1 - L) * L * L * E[z] + L * L * L * S[z];
          });
          return new Hr(G, "lab");
        };
      } else if (o.length >= 5) {
        var _, F, W;
        _ = o.map(function(L) {
          return L.lab();
        }), W = o.length - 1, F = Cf(W), b = function(L) {
          var G = 1 - L, z = [0, 1, 2].map(function(ie) {
            return _.reduce(function(de, be, Ee) {
              return de + F[Ee] * Math.pow(G, W - Ee) * Math.pow(L, Ee) * be[ie];
            }, 0);
          });
          return new Hr(z, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return b;
    }, Mf = function(o) {
      var i = Ff(o);
      return i.scale = function() {
        return Of(i);
      }, i;
    }, Da = j, st = function(o, i, s) {
      if (!st[s])
        throw new Error("unknown blend mode " + s);
      return st[s](o, i);
    }, _t = function(o) {
      return function(i, s) {
        var p = Da(s).rgb(), b = Da(i).rgb();
        return Da.rgb(o(p, b));
      };
    }, Ot = function(o) {
      return function(i, s) {
        var p = [];
        return p[0] = o(i[0], s[0]), p[1] = o(i[1], s[1]), p[2] = o(i[2], s[2]), p;
      };
    }, Lf = function(o) {
      return o;
    }, Af = function(o, i) {
      return o * i / 255;
    }, Nf = function(o, i) {
      return o > i ? i : o;
    }, If = function(o, i) {
      return o > i ? o : i;
    }, Df = function(o, i) {
      return 255 * (1 - (1 - o / 255) * (1 - i / 255));
    }, jf = function(o, i) {
      return i < 128 ? 2 * o * i / 255 : 255 * (1 - 2 * (1 - o / 255) * (1 - i / 255));
    }, Hf = function(o, i) {
      return 255 * (1 - (1 - i / 255) / (o / 255));
    }, Bf = function(o, i) {
      return o === 255 ? 255 : (o = 255 * (i / 255) / (1 - o / 255), o > 255 ? 255 : o);
    };
    st.normal = _t(Ot(Lf)), st.multiply = _t(Ot(Af)), st.screen = _t(Ot(Df)), st.overlay = _t(Ot(jf)), st.darken = _t(Ot(Nf)), st.lighten = _t(Ot(If)), st.dodge = _t(Ot(Bf)), st.burn = _t(Ot(Hf));
    for (var Wf = st, ja = g.type, Vf = g.clip_rgb, Uf = g.TWOPI, zf = Math.pow, Gf = Math.sin, Yf = Math.cos, Oi = j, qf = function(o, i, s, p, b) {
      o === void 0 && (o = 300), i === void 0 && (i = -1.5), s === void 0 && (s = 1), p === void 0 && (p = 1), b === void 0 && (b = [0, 1]);
      var x = 0, h;
      ja(b) === "array" ? h = b[1] - b[0] : (h = 0, b = [b, b]);
      var E = function(S) {
        var _ = Uf * ((o + 120) / 360 + i * S), F = zf(b[0] + h * S, p), W = x !== 0 ? s[0] + S * x : s, L = W * F * (1 - F) / 2, G = Yf(_), z = Gf(_), ie = F + L * (-0.14861 * G + 1.78277 * z), de = F + L * (-0.29227 * G - 0.90649 * z), be = F + L * (1.97294 * G);
        return Oi(Vf([ie * 255, de * 255, be * 255, 1]));
      };
      return E.start = function(S) {
        return S == null ? o : (o = S, E);
      }, E.rotations = function(S) {
        return S == null ? i : (i = S, E);
      }, E.gamma = function(S) {
        return S == null ? p : (p = S, E);
      }, E.hue = function(S) {
        return S == null ? s : (s = S, ja(s) === "array" ? (x = s[1] - s[0], x === 0 && (s = s[1])) : x = 0, E);
      }, E.lightness = function(S) {
        return S == null ? b : (ja(S) === "array" ? (b = S, h = S[1] - S[0]) : (b = [S, S], h = 0), E);
      }, E.scale = function() {
        return Oi.scale(E);
      }, E.hue(s), E;
    }, Kf = C, Xf = "0123456789abcdef", Jf = Math.floor, Zf = Math.random, Qf = function() {
      for (var o = "#", i = 0; i < 6; i++)
        o += Xf.charAt(Jf(Zf() * 16));
      return new Kf(o, "hex");
    }, Ha = v, Ci = Math.log, ed = Math.pow, td = Math.floor, rd = Math.abs, Fi = function(o, i) {
      i === void 0 && (i = null);
      var s = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return Ha(o) === "object" && (o = Object.values(o)), o.forEach(function(p) {
        i && Ha(p) === "object" && (p = p[i]), p != null && !isNaN(p) && (s.values.push(p), s.sum += p, p < s.min && (s.min = p), p > s.max && (s.max = p), s.count += 1);
      }), s.domain = [s.min, s.max], s.limits = function(p, b) {
        return Mi(s, p, b);
      }, s;
    }, Mi = function(o, i, s) {
      i === void 0 && (i = "equal"), s === void 0 && (s = 7), Ha(o) == "array" && (o = Fi(o));
      var p = o.min, b = o.max, x = o.values.sort(function(Wa, Va) {
        return Wa - Va;
      });
      if (s === 1)
        return [p, b];
      var h = [];
      if (i.substr(0, 1) === "c" && (h.push(p), h.push(b)), i.substr(0, 1) === "e") {
        h.push(p);
        for (var E = 1; E < s; E++)
          h.push(p + E / s * (b - p));
        h.push(b);
      } else if (i.substr(0, 1) === "l") {
        if (p <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var S = Math.LOG10E * Ci(p), _ = Math.LOG10E * Ci(b);
        h.push(p);
        for (var F = 1; F < s; F++)
          h.push(ed(10, S + F / s * (_ - S)));
        h.push(b);
      } else if (i.substr(0, 1) === "q") {
        h.push(p);
        for (var W = 1; W < s; W++) {
          var L = (x.length - 1) * W / s, G = td(L);
          if (G === L)
            h.push(x[G]);
          else {
            var z = L - G;
            h.push(x[G] * (1 - z) + x[G + 1] * z);
          }
        }
        h.push(b);
      } else if (i.substr(0, 1) === "k") {
        var ie, de = x.length, be = new Array(de), Ee = new Array(s), Ge = !0, Ve = 0, nt = null;
        nt = [], nt.push(p);
        for (var me = 1; me < s; me++)
          nt.push(p + me / s * (b - p));
        for (nt.push(b); Ge; ) {
          for (var A = 0; A < s; A++)
            Ee[A] = 0;
          for (var Q = 0; Q < de; Q++)
            for (var ce = x[Q], le = Number.MAX_VALUE, Ye = void 0, Oe = 0; Oe < s; Oe++) {
              var ye = rd(nt[Oe] - ce);
              ye < le && (le = ye, Ye = Oe), Ee[Ye]++, be[Q] = Ye;
            }
          for (var Se = new Array(s), ke = 0; ke < s; ke++)
            Se[ke] = null;
          for (var Te = 0; Te < de; Te++)
            ie = be[Te], Se[ie] === null ? Se[ie] = x[Te] : Se[ie] += x[Te];
          for (var ct = 0; ct < s; ct++)
            Se[ct] *= 1 / Ee[ct];
          Ge = !1;
          for (var Ct = 0; Ct < s; Ct++)
            if (Se[Ct] !== nt[Ct]) {
              Ge = !0;
              break;
            }
          nt = Se, Ve++, Ve > 200 && (Ge = !1);
        }
        for (var Ft = {}, hr = 0; hr < s; hr++)
          Ft[hr] = [];
        for (var mr = 0; mr < de; mr++)
          ie = be[mr], Ft[ie].push(x[mr]);
        for (var bt = [], Ut = 0; Ut < s; Ut++)
          bt.push(Ft[Ut][0]), bt.push(Ft[Ut][Ft[Ut].length - 1]);
        bt = bt.sort(function(Wa, Va) {
          return Wa - Va;
        }), h.push(bt[0]);
        for (var Br = 1; Br < bt.length; Br += 2) {
          var zt = bt[Br];
          !isNaN(zt) && h.indexOf(zt) === -1 && h.push(zt);
        }
      }
      return h;
    }, Li = { analyze: Fi, limits: Mi }, Ai = C, nd = function(o, i) {
      o = new Ai(o), i = new Ai(i);
      var s = o.luminance(), p = i.luminance();
      return s > p ? (s + 0.05) / (p + 0.05) : (p + 0.05) / (s + 0.05);
    }, Ni = C, mt = Math.sqrt, Ie = Math.pow, ad = Math.min, od = Math.max, Ii = Math.atan2, Di = Math.abs, Tn = Math.cos, ji = Math.sin, id = Math.exp, Hi = Math.PI, ld = function(o, i, s, p, b) {
      s === void 0 && (s = 1), p === void 0 && (p = 1), b === void 0 && (b = 1);
      var x = function(zt) {
        return 360 * zt / (2 * Hi);
      }, h = function(zt) {
        return 2 * Hi * zt / 360;
      };
      o = new Ni(o), i = new Ni(i);
      var E = Array.from(o.lab()), S = E[0], _ = E[1], F = E[2], W = Array.from(i.lab()), L = W[0], G = W[1], z = W[2], ie = (S + L) / 2, de = mt(Ie(_, 2) + Ie(F, 2)), be = mt(Ie(G, 2) + Ie(z, 2)), Ee = (de + be) / 2, Ge = 0.5 * (1 - mt(Ie(Ee, 7) / (Ie(Ee, 7) + Ie(25, 7)))), Ve = _ * (1 + Ge), nt = G * (1 + Ge), me = mt(Ie(Ve, 2) + Ie(F, 2)), A = mt(Ie(nt, 2) + Ie(z, 2)), Q = (me + A) / 2, ce = x(Ii(F, Ve)), le = x(Ii(z, nt)), Ye = ce >= 0 ? ce : ce + 360, Oe = le >= 0 ? le : le + 360, ye = Di(Ye - Oe) > 180 ? (Ye + Oe + 360) / 2 : (Ye + Oe) / 2, Se = 1 - 0.17 * Tn(h(ye - 30)) + 0.24 * Tn(h(2 * ye)) + 0.32 * Tn(h(3 * ye + 6)) - 0.2 * Tn(h(4 * ye - 63)), ke = Oe - Ye;
      ke = Di(ke) <= 180 ? ke : Oe <= Ye ? ke + 360 : ke - 360, ke = 2 * mt(me * A) * ji(h(ke) / 2);
      var Te = L - S, ct = A - me, Ct = 1 + 0.015 * Ie(ie - 50, 2) / mt(20 + Ie(ie - 50, 2)), Ft = 1 + 0.045 * Q, hr = 1 + 0.015 * Q * Se, mr = 30 * id(-Ie((ye - 275) / 25, 2)), bt = 2 * mt(Ie(Q, 7) / (Ie(Q, 7) + Ie(25, 7))), Ut = -bt * ji(2 * h(mr)), Br = mt(Ie(Te / (s * Ct), 2) + Ie(ct / (p * Ft), 2) + Ie(ke / (b * hr), 2) + Ut * (ct / (p * Ft)) * (ke / (b * hr)));
      return od(0, ad(100, Br));
    }, Bi = C, ud = function(o, i, s) {
      s === void 0 && (s = "lab"), o = new Bi(o), i = new Bi(i);
      var p = o.get(s), b = i.get(s), x = 0;
      for (var h in p) {
        var E = (p[h] || 0) - (b[h] || 0);
        x += E * E;
      }
      return Math.sqrt(x);
    }, sd = C, cd = function() {
      for (var o = [], i = arguments.length; i--; )
        o[i] = arguments[i];
      try {
        return new (Function.prototype.bind.apply(sd, [null].concat(o)))(), !0;
      } catch {
        return !1;
      }
    }, Wi = j, Vi = Ia, fd = {
      cool: function() {
        return Vi([Wi.hsl(180, 1, 0.9), Wi.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return Vi(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Rn = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, Ba = 0, Ui = Object.keys(Rn); Ba < Ui.length; Ba += 1) {
      var zi = Ui[Ba];
      Rn[zi.toLowerCase()] = Rn[zi];
    }
    var dd = Rn, We = j;
    We.average = Tf, We.bezier = Mf, We.blend = Wf, We.cubehelix = qf, We.mix = We.interpolate = xi, We.random = Qf, We.scale = Ia, We.analyze = Li.analyze, We.contrast = nd, We.deltaE = ld, We.distance = ud, We.limits = Li.limits, We.valid = cd, We.scales = fd, We.colors = ni, We.brewer = dd;
    var vd = We;
    return vd;
  });
})(Iu);
var fg = Iu.exports;
const hl = /* @__PURE__ */ Tl(fg);
function Du(e, t, r) {
  const [n, a, l] = [e, t, r].map(function(u) {
    return u /= 255, u < 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
  });
  return 21.26 * n + 71.52 * a + 7.22 * l;
}
function dg(e) {
  return Yt(Du(...Object.values(ju(e))), 2);
}
function vg(e, t, r) {
  const n = {};
  for (let u = 99; u >= 0; u--)
    n[u] = Math.abs(r - Du(...Object.values(Hu(e, t, u))));
  let a = 100, l = 100;
  for (let u = Object.keys(n).length - 1; u >= 0; u--)
    n[u] < a && (l = u, a = n[u]);
  return l;
}
function ju(e) {
  e.length === 6 && !e.startsWith("#") && (e = `#${e}`);
  let t = "0", r = "0", n = "0";
  return e.length === 4 ? (t = `0x${e[1]}${e[1]}`, r = `0x${e[2]}${e[2]}`, n = `0x${e[3]}${e[3]}`) : e.length === 7 && (t = `0x${e[1]}${e[2]}`, r = `0x${e[3]}${e[4]}`, n = `0x${e[5]}${e[6]}`), { r: t, g: r, b: n };
}
function pg(e) {
  e.length === 6 && !e.startsWith("#") && (e = `#${e}`);
  let { r: t, g: r, b: n } = ju(e);
  t /= 255, r /= 255, n /= 255;
  const a = Math.min(t, r, n), l = Math.max(t, r, n), u = l - a;
  let c = 0, f = 0, v = 0;
  return u === 0 ? c = 0 : l === t ? c = (r - n) / u % 6 : l === r ? c = (n - t) / u + 2 : c = (t - r) / u + 4, c = Math.round(c * 60), c < 0 && (c += 360), v = (l + a) / 2, f = u === 0 ? 0 : u / (1 - Math.abs(2 * v - 1)), f = +(f * 100).toFixed(1), v = +(v * 100).toFixed(1), { h: c, s: f, l: v };
}
function Hu(e, t, r) {
  t /= 100, r /= 100;
  const n = (1 - Math.abs(2 * r - 1)) * t, a = n * (1 - Math.abs(e / 60 % 2 - 1)), l = r - n / 2;
  let u = 0, c = 0, f = 0;
  return e >= 0 && e < 60 ? (u = n, c = a, f = 0) : e >= 60 && e < 120 ? (u = a, c = n, f = 0) : e >= 120 && e < 180 ? (u = 0, c = n, f = a) : e >= 180 && e < 240 ? (u = 0, c = a, f = n) : e >= 240 && e < 300 ? (u = a, c = 0, f = n) : e >= 300 && e < 360 && (u = n, c = 0, f = a), {
    r: Math.round((u + l) * 255),
    g: Math.round((c + l) * 255),
    b: Math.round((f + l) * 255)
  };
}
function gg(e, t, r) {
  let { r: n, g: a, b: l } = Hu(e, t, r);
  return n = n.toString(16), a = a.toString(16), l = l.toString(16), n.length === 1 && (n = `0${n}`), a.length === 1 && (a = `0${a}`), l.length === 1 && (l = `0${l}`), `#${n}${a}${l}`;
}
function vo(e) {
  const t = e.length === 6 && !e.startsWith("#") ? `#${e}` : e;
  return new RegExp(/^#[0-9A-F]{6}$/i).test(t.toUpperCase());
}
function ml(e) {
  return new RegExp(/^[A-Za-z]{3,24}$/i).test(e);
}
function Yt(e, t = 0) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
function bl(e, t) {
  return (e % t + t) % t;
}
function hg(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function mg(e, t, r) {
  if (!e || !vo(e))
    return null;
  let n = null;
  if (!t || t === "hex")
    n = e.toUpperCase();
  else if (t === "p-3") {
    const [a, l, u] = hl(e).rgb();
    n = `color(${[
      "display-p3",
      Yt(a / 255, 3),
      Yt(l / 255, 3),
      Yt(u / 255, 3),
      "/",
      1
    ].join(" ")})`;
  } else if (t === "oklch") {
    const [a, l, u] = hl(e).oklch();
    n = `oklch(${[
      Yt(a * 100, 2) + "%",
      Yt(l, 3),
      Yt(u, 2),
      "/",
      1
    ].join(" ")})`;
  }
  return n;
}
function bg(e) {
  const { swatch: t, mode: r = cg } = e;
  let n = mg(t.hex, r);
  return /* @__PURE__ */ re.jsxs("div", { className: "flex-1 flex flex-col gap-2 sm:gap-1", children: [
    /* @__PURE__ */ re.jsx(
      "div",
      {
        className: "h-12 xl:h-16 w-full rounded shadow-inner flex flex-col items-center justify-center transition-colors duration-500",
        style: { backgroundColor: n || "transparent" }
      }
    ),
    /* @__PURE__ */ re.jsx("div", { className: "rotate-90 text-right sm:rotate-0 flex flex-col sm:flex-row sm:items-center lg:flex-col xl:flex-row xl:items-center justify-between px-1", children: t.stop === 500 ? /* @__PURE__ */ re.jsxs("div", { className: "font-mono", style: { color: t.hex, fontWeight: "bold" }, children: [
      "[",
      t.stop,
      "]"
    ] }) : /* @__PURE__ */ re.jsx("div", { className: "font-mono", children: t.stop }) })
  ] });
}
function yg(e = 0, t = na) {
  const r = xt, n = r.indexOf(t);
  if (n === -1)
    throw new Error(`Invalid key value: ${t}`);
  return r.map((a) => {
    const l = Math.abs(r.indexOf(a) - n), u = e ? Math.round((l + 1) * e * (1 + l / 10)) : 0;
    return u > 100 ? { stop: a, tweak: 100 } : { stop: a, tweak: u };
  });
}
function wg(e = 0, t = na) {
  const r = xt, n = r.indexOf(t);
  if (n === -1)
    throw new Error(`Invalid parameter value: ${t}`);
  return r.map((a) => {
    const l = Math.abs(r.indexOf(a) - n), u = e ? l * e : 0;
    return { stop: a, tweak: u };
  });
}
function xg(e = 0, t = 100, r, n = na) {
  const a = xt, l = [
    { stop: 0, tweak: t },
    { stop: n, tweak: r },
    { stop: 1e3, tweak: e }
  ];
  for (let u = 0; u < a.length; u++) {
    const c = a[u];
    if (c === 0 || c === 1e3 || c === n)
      continue;
    const f = Math.abs((c - n) / 100), v = c < n ? Math.abs(a.indexOf(n) - a.indexOf(xt[0])) - 1 : Math.abs(a.indexOf(n) - a.indexOf(xt[xt.length - 1])) - 1, d = c < n ? t - r : r - e, y = c < n ? d / v * f + r : r - d / v * f;
    l.push({ stop: c, tweak: Math.round(y) });
  }
  return l.sort((u, c) => u.stop - c.stop), l;
}
function Cn(e) {
  const { value: t, valueStop: r } = e, n = e.useLightness ?? br.useLightness, a = e.h ?? br.h, l = e.s ?? br.s, u = e.lMin ?? br.lMin, c = e.lMax ?? br.lMax, f = wg(a, r), v = yg(l, r), { h: d, s: y, l: k } = pg(t), w = n ? k : dg(t), T = xg(u, c, w, r);
  return f.map(({ stop: $ }, R) => {
    const P = bl(d + f[R].tweak, 360), O = hg(y + v[R].tweak, 0, 100), N = n ? T[R].tweak : vg(P, O, T[R].tweak), H = gg(P, O, N);
    return {
      stop: $,
      // Sometimes the initial value is changed slightly during conversion,
      // overriding that with the original value
      hex: $ === r ? `#${t.toUpperCase()}` : H.toUpperCase(),
      // Used in graphs
      h: P,
      hScale: (bl(f[R].tweak + 180, 360) - 180) / 180 * 50,
      s: O,
      sScale: O - 50,
      l: N
    };
  });
}
function aa() {
  return (aa = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function Bu(e, t) {
  if (e == null)
    return {};
  var r, n, a = {}, l = Object.keys(e);
  for (n = 0; n < l.length; n++)
    t.indexOf(r = l[n]) >= 0 || (a[r] = e[r]);
  return a;
}
function po(e) {
  var t = te(e), r = te(function(n) {
    t.current && t.current(n);
  });
  return t.current = e, r.current;
}
var Xr = function(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e;
}, Yr = function(e) {
  return "touches" in e;
}, go = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, yl = function(e, t, r) {
  var n = e.getBoundingClientRect(), a = Yr(t) ? function(l, u) {
    for (var c = 0; c < l.length; c++)
      if (l[c].identifier === u)
        return l[c];
    return l[0];
  }(t.touches, r) : t;
  return { left: Xr((a.pageX - (n.left + go(e).pageXOffset)) / n.width), top: Xr((a.pageY - (n.top + go(e).pageYOffset)) / n.height) };
}, wl = function(e) {
  !Yr(e) && e.preventDefault();
}, Wu = V.memo(function(e) {
  var t = e.onMove, r = e.onKey, n = Bu(e, ["onMove", "onKey"]), a = te(null), l = po(t), u = po(r), c = te(null), f = te(!1), v = ue(function() {
    var w = function($) {
      wl($), (Yr($) ? $.touches.length > 0 : $.buttons > 0) && a.current ? l(yl(a.current, $, c.current)) : g(!1);
    }, T = function() {
      return g(!1);
    };
    function g($) {
      var R = f.current, P = go(a.current), O = $ ? P.addEventListener : P.removeEventListener;
      O(R ? "touchmove" : "mousemove", w), O(R ? "touchend" : "mouseup", T);
    }
    return [function($) {
      var R = $.nativeEvent, P = a.current;
      if (P && (wl(R), !function(N, H) {
        return H && !Yr(N);
      }(R, f.current) && P)) {
        if (Yr(R)) {
          f.current = !0;
          var O = R.changedTouches || [];
          O.length && (c.current = O[0].identifier);
        }
        P.focus(), l(yl(P, R, c.current)), g(!0);
      }
    }, function($) {
      var R = $.which || $.keyCode;
      R < 37 || R > 40 || ($.preventDefault(), u({ left: R === 39 ? 0.05 : R === 37 ? -0.05 : 0, top: R === 40 ? 0.05 : R === 38 ? -0.05 : 0 }));
    }, g];
  }, [u, l]), d = v[0], y = v[1], k = v[2];
  return we(function() {
    return k;
  }, [k]), V.createElement("div", aa({}, n, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: a, onKeyDown: y, tabIndex: 0, role: "slider" }));
}), Ho = function(e) {
  return e.filter(Boolean).join(" ");
}, Vu = function(e) {
  var t = e.color, r = e.left, n = e.top, a = n === void 0 ? 0.5 : n, l = Ho(["react-colorful__pointer", e.className]);
  return V.createElement("div", { className: l, style: { top: 100 * a + "%", left: 100 * r + "%" } }, V.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, qe = function(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r;
}, Eg = function(e) {
  return Rg(ho(e));
}, ho = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? qe(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? qe(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, $g = function(e) {
  return Tg(kg(e));
}, Sg = function(e) {
  var t = e.s, r = e.v, n = e.a, a = (200 - t) * r / 100;
  return { h: qe(e.h), s: qe(a > 0 && a < 200 ? t * r / 100 / (a <= 100 ? a : 200 - a) * 100 : 0), l: qe(a / 2), a: qe(n, 2) };
}, mo = function(e) {
  var t = Sg(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, kg = function(e) {
  var t = e.h, r = e.s, n = e.v, a = e.a;
  t = t / 360 * 6, r /= 100, n /= 100;
  var l = Math.floor(t), u = n * (1 - r), c = n * (1 - (t - l) * r), f = n * (1 - (1 - t + l) * r), v = l % 6;
  return { r: qe(255 * [n, c, u, u, f, n][v]), g: qe(255 * [f, n, n, c, u, u][v]), b: qe(255 * [u, u, f, n, n, c][v]), a: qe(a, 2) };
}, Fn = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Tg = function(e) {
  var t = e.r, r = e.g, n = e.b, a = e.a, l = a < 1 ? Fn(qe(255 * a)) : "";
  return "#" + Fn(t) + Fn(r) + Fn(n) + l;
}, Rg = function(e) {
  var t = e.r, r = e.g, n = e.b, a = e.a, l = Math.max(t, r, n), u = l - Math.min(t, r, n), c = u ? l === t ? (r - n) / u : l === r ? 2 + (n - t) / u : 4 + (t - r) / u : 0;
  return { h: qe(60 * (c < 0 ? c + 6 : c)), s: qe(l ? u / l * 100 : 0), v: qe(l / 255 * 100), a };
}, Pg = V.memo(function(e) {
  var t = e.hue, r = e.onChange, n = Ho(["react-colorful__hue", e.className]);
  return V.createElement("div", { className: n }, V.createElement(Wu, { onMove: function(a) {
    r({ h: 360 * a.left });
  }, onKey: function(a) {
    r({ h: Xr(t + 360 * a.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": qe(t), "aria-valuemax": "360", "aria-valuemin": "0" }, V.createElement(Vu, { className: "react-colorful__hue-pointer", left: t / 360, color: mo({ h: t, s: 100, v: 100, a: 1 }) })));
}), _g = V.memo(function(e) {
  var t = e.hsva, r = e.onChange, n = { backgroundColor: mo({ h: t.h, s: 100, v: 100, a: 1 }) };
  return V.createElement("div", { className: "react-colorful__saturation", style: n }, V.createElement(Wu, { onMove: function(a) {
    r({ s: 100 * a.left, v: 100 - 100 * a.top });
  }, onKey: function(a) {
    r({ s: Xr(t.s + 100 * a.left, 0, 100), v: Xr(t.v - 100 * a.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + qe(t.s) + "%, Brightness " + qe(t.v) + "%" }, V.createElement(Vu, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: mo(t) })));
}), Uu = function(e, t) {
  if (e === t)
    return !0;
  for (var r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}, Og = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Uu(ho(e), ho(t));
};
function Cg(e, t, r) {
  var n = po(r), a = Ce(function() {
    return e.toHsva(t);
  }), l = a[0], u = a[1], c = te({ color: t, hsva: l });
  we(function() {
    if (!e.equal(t, c.current.color)) {
      var v = e.toHsva(t);
      c.current = { hsva: v, color: t }, u(v);
    }
  }, [t, e]), we(function() {
    var v;
    Uu(l, c.current.hsva) || e.equal(v = e.fromHsva(l), c.current.color) || (c.current = { hsva: l, color: v }, n(v));
  }, [l, e, n]);
  var f = tt(function(v) {
    u(function(d) {
      return Object.assign({}, d, v);
    });
  }, []);
  return [l, f];
}
var Fg = typeof window < "u" ? Vn : we, Mg = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, xl = /* @__PURE__ */ new Map(), Lg = function(e) {
  Fg(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !xl.has(t)) {
      var r = t.createElement("style");
      r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, xl.set(t, r);
      var n = Mg();
      n && r.setAttribute("nonce", n), t.head.appendChild(r);
    }
  }, []);
}, Ag = function(e) {
  var t = e.className, r = e.colorModel, n = e.color, a = n === void 0 ? r.defaultColor : n, l = e.onChange, u = Bu(e, ["className", "colorModel", "color", "onChange"]), c = te(null);
  Lg(c);
  var f = Cg(r, a, l), v = f[0], d = f[1], y = Ho(["react-colorful", t]);
  return V.createElement("div", aa({}, u, { ref: c, className: y }), V.createElement(_g, { hsva: v, onChange: d }), V.createElement(Pg, { hue: v.h, onChange: d, className: "react-colorful__last-control" }));
}, Ng = { defaultColor: "000", toHsva: Eg, fromHsva: function(e) {
  return $g({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Og }, Ig = function(e) {
  return V.createElement(Ag, aa({}, e, { colorModel: Ng }));
}, Dg = "Expected a function", El = NaN, jg = "[object Symbol]", Hg = /^\s+|\s+$/g, Bg = /^[-+]0x[0-9a-f]+$/i, Wg = /^0b[01]+$/i, Vg = /^0o[0-7]+$/i, Ug = parseInt, zg = typeof Ur == "object" && Ur && Ur.Object === Object && Ur, Gg = typeof self == "object" && self && self.Object === Object && self, Yg = zg || Gg || Function("return this")(), qg = Object.prototype, Kg = qg.toString, Xg = Math.max, Jg = Math.min, eo = function() {
  return Yg.Date.now();
};
function Zg(e, t, r) {
  var n, a, l, u, c, f, v = 0, d = !1, y = !1, k = !0;
  if (typeof e != "function")
    throw new TypeError(Dg);
  t = $l(t) || 0, bo(r) && (d = !!r.leading, y = "maxWait" in r, l = y ? Xg($l(r.maxWait) || 0, t) : l, k = "trailing" in r ? !!r.trailing : k);
  function w(C) {
    var K = n, j = a;
    return n = a = void 0, v = C, u = e.apply(j, K), u;
  }
  function T(C) {
    return v = C, c = setTimeout(R, t), d ? w(C) : u;
  }
  function g(C) {
    var K = C - f, j = C - v, ne = t - K;
    return y ? Jg(ne, l - j) : ne;
  }
  function $(C) {
    var K = C - f, j = C - v;
    return f === void 0 || K >= t || K < 0 || y && j >= l;
  }
  function R() {
    var C = eo();
    if ($(C))
      return P(C);
    c = setTimeout(R, g(C));
  }
  function P(C) {
    return c = void 0, k && n ? w(C) : (n = a = void 0, u);
  }
  function O() {
    c !== void 0 && clearTimeout(c), v = 0, n = f = a = c = void 0;
  }
  function N() {
    return c === void 0 ? u : P(eo());
  }
  function H() {
    var C = eo(), K = $(C);
    if (n = arguments, a = this, f = C, K) {
      if (c === void 0)
        return T(f);
      if (y)
        return c = setTimeout(R, t), w(f);
    }
    return c === void 0 && (c = setTimeout(R, t)), u;
  }
  return H.cancel = O, H.flush = N, H;
}
function bo(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Qg(e) {
  return !!e && typeof e == "object";
}
function eh(e) {
  return typeof e == "symbol" || Qg(e) && Kg.call(e) == jg;
}
function $l(e) {
  if (typeof e == "number")
    return e;
  if (eh(e))
    return El;
  if (bo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = bo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Hg, "");
  var r = Wg.test(e);
  return r || Vg.test(e) ? Ug(e.slice(2), r ? 2 : 8) : Bg.test(e) ? El : +e;
}
var th = Zg;
const Sl = /* @__PURE__ */ Tl(th);
function rh(e) {
  const t = te(e);
  t.current = e, we(
    () => () => {
      t.current();
    },
    []
  );
}
function nh(e, t = 500, r) {
  const n = te();
  rh(() => {
    n.current && n.current.cancel();
  });
  const a = ue(() => {
    const l = Sl(e, t, r), u = (...c) => l(...c);
    return u.cancel = () => {
      l.cancel();
    }, u.isPending = () => !!n.current, u.flush = () => l.flush(), u;
  }, [e, t, r]);
  return we(() => {
    n.current = Sl(e, t, r);
  }, [e, t, r]), a;
}
function ah(e, t, r) {
  const n = (v, d) => v === d, a = e instanceof Function ? e() : e, [l, u] = Ce(a), c = te(a), f = nh(
    u,
    t,
    r
  );
  return n(c.current, a) || (f(a), c.current = a), [l, f];
}
function oh({
  color: e,
  onChange: t,
  ringStyle: r
}) {
  const [n, a] = ah(e, 500);
  return we(() => {
    a(e);
  }, [e, a]), we(() => {
    n && t(n.toUpperCase());
  }, [n]), /* @__PURE__ */ re.jsxs(qp, { className: "relative", children: [
    /* @__PURE__ */ re.jsxs(
      Lu,
      {
        style: r,
        className: "w-full p-2 border border-gray-200 bg-gray-50 focus:outline-none focus:ring focus:bg-gray-100 focus:border-gray-300 text-gray-500 focus:text-gray-900",
        children: [
          /* @__PURE__ */ re.jsx(sg, { className: "w-6 h-auto" }),
          /* @__PURE__ */ re.jsx("span", { className: "sr-only", children: "Open Color Picker" })
        ]
      }
    ),
    /* @__PURE__ */ re.jsx(Au, { className: "absolute right-0 z-50 bg-white rounded-lg shadow p-1 pb-2 translate-y-1", children: ({ close: l }) => /* @__PURE__ */ re.jsx("div", { className: "flex flex-col items-justify-center gap-4", children: /* @__PURE__ */ re.jsx(
      Ig,
      {
        color: n.startsWith("#") ? n : `#${n}`,
        onChange: a
      }
    ) }) })
  ] });
}
function ih(e) {
  const { value: t, onChange: r } = e;
  return /* @__PURE__ */ re.jsxs(Rp, { value: t, onChange: r, as: "div", className: "relative", children: [
    /* @__PURE__ */ re.jsxs(
      Ou,
      {
        className: Ua(zu, "font-mono tabular-nums flex items-center gap-2"),
        children: [
          t,
          /* @__PURE__ */ re.jsx(og, { className: "w-5" })
        ]
      }
    ),
    /* @__PURE__ */ re.jsx(
      Cu,
      {
        className: Ua(
          "border border-gray-200 font-mono tabular-nums absolute z-50 w-full bg-white shadow-lg divide-y divide-gray-200 translate-y-1 focus:outline-none"
        ),
        children: xt.filter((n) => n !== 0 && n !== 1e3).map((n) => /* @__PURE__ */ re.jsx(
          Fu,
          {
            value: n,
            className: Ua(
              t === String(n) ? "text-first-950 bg-first-100" : "",
              `p-2 hover:bg-first-800 hover:text-white cursor-pointer
              data-[headlessui-state=active]:bg-first-800 data-[headlessui-state=active]:text-white transition-colors duration-100
              `
            ),
            children: n
          },
          n
        ))
      }
    )
  ] });
}
const lh = [
  {
    name: "value",
    title: "Value",
    value: "",
    min: 6,
    max: 6,
    pattern: "[0-9A-Fa-f]{6}",
    classes: "pl-7"
  }
], zu = "w-full p-2 border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring focus:bg-gray-100 focus:border-gray-300 invalid:focus:border-dashed invalid:focus:border-red-500 invalid:focus:bg-red-100 invalid:border-red-500 invalid:bg-red-100", to = "transition-color duration-200 text-xs font-bold";
function fh(e) {
  const { palette: t, updateGlobal: r, currentMode: n } = e, [a, l] = Ce({
    ...br,
    ...t,
    swatches: t.swatches ?? Cn(t)
  });
  we(() => {
    const g = ml(a.name) ? a.name : null, $ = vo(a.value) ? a.value : null;
    g && $ && r(a);
  }, [t, a, r]);
  const u = (g) => {
    if (typeof document < "u" && ml(g)) {
      const $ = new URL(window.location.href);
      $.searchParams.delete(a.name), window.history.replaceState({}, "", $.toString());
    }
    l({
      ...a,
      name: g
    });
  }, c = (g) => {
    const $ = {
      ...a,
      value: g
    }, R = Cn($);
    l({
      ...$,
      swatches: R
    });
  }, f = (g) => {
    if (!xt.includes(g))
      return;
    const $ = {
      ...a,
      valueStop: g
    }, R = Cn($);
    l({
      ...$,
      swatches: R
    });
  }, v = (g) => {
    if (g.currentTarget.name === "name") {
      const $ = g.currentTarget.value ?? "";
      u($);
    } else if (g.currentTarget.name === "value") {
      const $ = g.currentTarget.value ? g.currentTarget.value.toUpperCase() : "";
      c($);
    }
  }, d = (g) => {
    const $ = parseInt(g, 10);
    xt.includes($) && f($);
  }, y = () => {
    const g = {
      ...a,
      useLightness: !a.useLightness
    };
    l({
      ...g,
      swatches: Cn(g)
    });
  }, k = (g) => {
    g && vo(g) && c(g.replace("#", "").toUpperCase());
  }, w = {
    "--tw-ring-color": t.swatches[1].hex
  }, T = ue(
    () => [
      ":root {",
      ...a.swatches.map((g) => `--first-${g.stop}: ${g.hex};`),
      "}"
    ].join(`
`),
    [a]
  );
  return /* @__PURE__ */ re.jsxs("article", { id: `s-${t.value}`, className: "grid grid-cols-1 gap-4 text-gray-500", children: [
    /* @__PURE__ */ re.jsx("style", { children: T }),
    /* @__PURE__ */ re.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-5 gap-2", children: lh.map((g) => {
      var $, R;
      return /* @__PURE__ */ re.jsxs(
        "div",
        {
          className: "flex flex-col gap-1 col-span-2 focus-within:text-gray-900",
          children: [
            /* @__PURE__ */ re.jsx("label", { className: to, htmlFor: g.name, children: g.title }),
            /* @__PURE__ */ re.jsxs("div", { className: "relative flex gap-1 items-center", children: [
              /* @__PURE__ */ re.jsx(
                "input",
                {
                  id: g.name,
                  name: g.name,
                  className: [zu, g.classes].filter(Boolean).join(" "),
                  value: g.name === "name" || g.name === "value" ? a[g.name] : "",
                  style: w,
                  onChange: v,
                  pattern: g.pattern,
                  min: g.min,
                  max: g.max,
                  required: !0
                }
              ),
              g.name === "value" ? /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
                /* @__PURE__ */ re.jsx("div", { className: "absolute inset-0 pointer-events-none flex items-center justify-start text-gray-400", children: /* @__PURE__ */ re.jsx(lg, { className: "w-5 ml-2 h-auto" }) }),
                /* @__PURE__ */ re.jsx(
                  oh,
                  {
                    color: a.value,
                    onChange: k,
                    ringStyle: w
                  }
                ),
                /* @__PURE__ */ re.jsx(
                  ih,
                  {
                    value: a.valueStop.toString(),
                    onChange: d
                  }
                )
              ] }) : null,
              /* @__PURE__ */ re.jsxs("div", { className: "col-span-4 sm:col-span-1 p-2 flex justify-center items-center gap-1 border border-dashed border-gray-200", children: [
                /* @__PURE__ */ re.jsxs(
                  "span",
                  {
                    className: [to, a.useLightness ? "" : "text-gray-900"].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ re.jsx("span", { className: "inline lg:hidden", children: "Lu" }),
                      /* @__PURE__ */ re.jsx("span", { className: "hidden lg:inline", children: "Luminance" })
                    ]
                  }
                ),
                /* @__PURE__ */ re.jsxs(
                  ng,
                  {
                    checked: a.useLightness,
                    onChange: y,
                    style: {
                      backgroundColor: a.useLightness ? ($ = a.swatches.find((P) => P.stop === 800)) == null ? void 0 : $.hex : (R = a.swatches.find((P) => P.stop === 300)) == null ? void 0 : R.hex
                    },
                    className: "relative inline-flex items-center h-6 rounded-full w-11 bg-gray-200 flex-shrink-0",
                    children: [
                      /* @__PURE__ */ re.jsx("span", { className: "sr-only", children: "Toggle Lightness or Luminance" }),
                      /* @__PURE__ */ re.jsx(
                        "span",
                        {
                          className: `${a.useLightness ? "translate-x-6" : "translate-x-1"} transition-transform duration-200 inline-block w-4 h-4 transform bg-white rounded-full`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ re.jsxs(
                  "span",
                  {
                    className: [to, a.useLightness ? "text-gray-900" : ""].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ re.jsx("span", { className: "inline lg:hidden", children: "Li" }),
                      /* @__PURE__ */ re.jsx("span", { className: "hidden lg:inline", children: "Lightness" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        g.name
      );
    }) }),
    /* @__PURE__ */ re.jsx("div", { className: "grid gap-1 grid-cols-11 sm:grid-cols-4 lg:grid-cols-11 sm:gap-2 text-2xs sm:text-xs", children: a.swatches.filter((g) => ![0, 1e3].includes(g.stop)).map((g) => /* @__PURE__ */ re.jsx(bg, { swatch: g, mode: n }, g.stop)) })
  ] });
}
export {
  oh as ColorPicker,
  br as DEFAULT_PALETTE_CONFIG,
  na as DEFAULT_STOP,
  Nu as MODES,
  fh as Palette
};
