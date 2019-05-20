!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("VuePreview", [], t) : "object" == typeof exports ? exports.VuePreview = t() : e.VuePreview = t()
}(window, function() {
  return function(e) {
    var t = {};
    function o(n) {
      if (t[n])
        return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, o),
        i.l = !0,
        i.exports
    }
    return o.m = e,
      o.c = t,
      o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n
        })
      }
      ,
      o.r = function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }
      ,
      o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
          }
          : function() {
            return e
          }
        ;
        return o.d(t, "a", t),
          t
      }
      ,
      o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      ,
      o.p = "",
      o(o.s = 14)
  }([function(e, t, o) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return t.toString = function() {
        return this.map(function(t) {
          var o = function(e, t) {
            var o = e[1] || ""
              , n = e[3];
            if (!n)
              return o;
            if (t && "function" == typeof btoa) {
              var i = (a = n,
              "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */")
                , r = n.sources.map(function(e) {
                return "/*# sourceURL=" + n.sourceRoot + e + " */"
              });
              return [o].concat(r).concat([i]).join("\n")
            }
            var a;
            return [o].join("\n")
          }(t, e);
          return t[2] ? "@media " + t[2] + "{" + o + "}" : o
        }).join("")
      }
        ,
        t.i = function(e, o) {
          "string" == typeof e && (e = [[null , e, ""]]);
          for (var n = {}, i = 0; i < this.length; i++) {
            var r = this[i][0];
            "number" == typeof r && (n[r] = !0)
          }
          for (i = 0; i < e.length; i++) {
            var a = e[i];
            "number" == typeof a[0] && n[a[0]] || (o && !a[2] ? a[2] = o : o && (a[2] = "(" + a[2] + ") and (" + o + ")"),
              t.push(a))
          }
        }
        ,
        t
    }
  }
    , function(e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }),
        t.default = function(e, t) {
          for (var o = [], n = {}, i = 0; i < t.length; i++) {
            var r = t[i]
              , a = r[0]
              , s = r[1]
              , l = r[2]
              , p = r[3]
              , c = {
              id: e + ":" + i,
              css: s,
              media: l,
              sourceMap: p
            };
            n[a] ? n[a].parts.push(c) : o.push(n[a] = {
              id: a,
              parts: [c]
            })
          }
          return o
        }
    }
    , function(e, t, o) {
      "use strict";
      o.r(t);
      var n = function(e, t, o, n, i, r, a, s) {
        var l = typeof (e = e || {}).default;
        "object" !== l && "function" !== l || (e = e.default);
        var p, c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t,
            c.staticRenderFns = o,
            c._compiled = !0),
          n && (c.functional = !0),
          r && (c._scopeId = r),
            a ? (p = function(e) {
              (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
              i && i.call(this, e),
              e && e._registeredComponents && e._registeredComponents.add(a)
            }
              ,
              c._ssrRegister = p) : i && (p = s ? function() {
                i.call(this, this.$root.$options.shadowRoot)
              }
              : i),
            p)
          if (c.functional) {
            c._injectStyles = p;
            var u = c.render;
            c.render = function(e, t) {
              return p.call(t),
                u(e, t)
            }
          } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, p) : [p]
          }
        return {
          exports: e,
          options: c
        }
      }(null , function() {
        var e = this
          , t = e.$createElement
          , o = e._self._c || t;
        return o("div", [o("div", {
          staticClass: "my-gallery",
          attrs: {
            itemscope: "",
            itemtype: "http://schema.org/ImageGallery"
          }
        }, [e._l(e.slides, function(t) {
          return [o("figure", {
            attrs: {
              itemprop: "associatedMedia",
              itemscope: "",
              itemtype: "http://schema.org/ImageObject"
            }
          }, [o("a", {
            attrs: {
              href: t.src,
              itemprop: "contentUrl",
              "data-size": t.w + "x" + t.h
            }
          }, [o("img", {
            attrs: {
              src: t.msrc,
              alt: t.alt,
              itemprop: "thumbnail"
            },
            directives: [
              {
                name: "math-size",
                rawName: "v-math-size",
                value: t,
                expression: "t"
              }
            ]
          })]), e._v(" "), o("figcaption", {
            staticStyle: {
              display: "none"
            },
            attrs: {
              itemprop: "caption description"
            }
          }, [e._v(e._s(t.title))])])]
        })], 2), e._v(" "), e._m(0)])
      }, [function() {
        var e = this
          , t = e.$createElement
          , o = e._self._c || t;
        return o("div", {
          staticClass: "pswp",
          attrs: {
            tabindex: "-1",
            role: "dialog",
            "aria-hidden": "true"
          }
        }, [o("div", {
          staticClass: "pswp__bg"
        }), e._v(" "), o("div", {
          staticClass: "pswp__scroll-wrap"
        }, [o("div", {
          staticClass: "pswp__container"
        }, [o("div", {
          staticClass: "pswp__item"
        }), e._v(" "), o("div", {
          staticClass: "pswp__item"
        }), e._v(" "), o("div", {
          staticClass: "pswp__item"
        })]), e._v(" "), o("div", {
          staticClass: "pswp__ui pswp__ui--hidden"
        }, [o("div", {
          staticClass: "pswp__top-bar"
        }, [o("div", {
          staticClass: "pswp__counter"
        }), e._v(" "), o("button", {
          staticClass: "pswp__button pswp__button--close",
          attrs: {
            title: "Close (Esc)"
          }
        }), e._v(" "), o("button", {
          staticClass: "pswp__button pswp__button--share",
          attrs: {
            title: "Share"
          }
        }), e._v(" "), o("button", {
          staticClass: "pswp__button pswp__button--fs",
          attrs: {
            title: "Toggle fullscreen"
          }
        }), e._v(" "), o("button", {
          staticClass: "pswp__button pswp__button--zoom",
          attrs: {
            title: "Zoom in/out"
          }
        }), e._v(" "), o("div", {
          staticClass: "pswp__preloader"
        }, [o("div", {
          staticClass: "pswp__preloader__icn"
        }, [o("div", {
          staticClass: "pswp__preloader__cut"
        }, [o("div", {
          staticClass: "pswp__preloader__donut"
        })])])])]), e._v(" "), o("div", {
          staticClass: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
        }, [o("div", {
          staticClass: "pswp__share-tooltip"
        })]), e._v(" "), o("button", {
          staticClass: "pswp__button pswp__button--arrow--left",
          attrs: {
            title: "Previous (arrow left)"
          }
        }), e._v(" "), o("button", {
          staticClass: "pswp__button pswp__button--arrow--right",
          attrs: {
            title: "Next (arrow right)"
          }
        }), e._v(" "), o("div", {
          staticClass: "pswp__caption"
        }, [o("div", {
          staticClass: "pswp__caption__center"
        })])])])])
      }
      ], !1, function(e) {
        o(13)
      }, null , null );
      t.default = n.exports
    }
    , function(e, t, o) {
      "use strict";
      var n, i;
      "function" == typeof Symbol && Symbol.iterator;
      void 0 === (i = "function" == typeof (n = function() {
          return function(e, t) {
            var o, n, i, r, a, s, l, p, c, u, d, m, f, w, h, g, b, v, x = this, _ = !1, y = !0, A = !0, I = {
              barsSize: {
                top: 44,
                bottom: "auto"
              },
              closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
              timeToIdle: 4e3,
              timeToIdleOutside: 1e3,
              loadingIndicatorDelay: 1e3,
              addCaptionHTMLFn: function(e, t) {
                return e.title ? (t.children[0].innerHTML = e.title,
                  !0) : (t.children[0].innerHTML = "",
                  !1)
              },
              closeEl: !0,
              captionEl: !0,
              fullscreenEl: !0,
              zoomEl: !0,
              shareEl: !0,
              counterEl: !0,
              arrowEl: !0,
              preloaderEl: !0,
              tapToClose: !1,
              tapToToggleControls: !0,
              clickToCloseNonZoomable: !0,
              shareButtons: [{
                id: "down",
                label: "下载图片",
                url: "{{raw_image_url}}",
                download: !0
              }],
              getImageURLForShare: function() {
                return e.currItem.src || ""
              },
              getPageURLForShare: function() {
                return window.location.href
              },
              getTextForShare: function() {
                return e.currItem.title || ""
              },
              indexIndicatorSep: " / ",
              fitControlsWidth: 1200
            }, M = function(e) {
              if (g)
                return !0;
              e = e || window.event,
              h.timeToIdle && h.mouseUsed && !c && z();
              for (var o, n, i = e.target || e.srcElement, r = i.getAttribute("class") || "", a = 0; a < O.length; a++)
                (o = O[a]).onTap && r.indexOf("pswp__" + o.name) > -1 && (o.onTap(),
                  n = !0);
              if (n) {
                e.stopPropagation && e.stopPropagation(),
                  g = !0;
                var s = t.features.isOldAndroid ? 600 : 30;
                setTimeout(function() {
                  g = !1
                }, s)
              }
            }
              , C = function(e, o, n) {
              t[(n ? "add" : "remove") + "Class"](e, "pswp__" + o)
            }
              , k = function() {
              var e = 1 === h.getNumItemsFn();
              e !== w && (C(n, "ui--one-slide", e),
                w = e)
            }
              , T = function() {
              C(l, "share-modal--hidden", A)
            }
              , S = function() {
              return (A = !A) ? (t.removeClass(l, "pswp__share-modal--fade-in"),
                setTimeout(function() {
                  A && T()
                }, 300)) : (T(),
                setTimeout(function() {
                  A || t.addClass(l, "pswp__share-modal--fade-in")
                }, 30)),
              A || E(),
                !1
            }
              , D = function(t) {
              var o = (t = t || window.event).target || t.srcElement;
              return e.shout("shareLinkClick", t, o),
                !(!o.href || !o.hasAttribute("download") && (window.open(o.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)),
                A || S(),
                  1))
            }
              , E = function() {
              for (var e, t, o, n, i, r = "", a = 0; a < h.shareButtons.length; a++)
                e = h.shareButtons[a],
                  o = h.getImageURLForShare(e),
                  n = h.getPageURLForShare(e),
                  i = h.getTextForShare(e),
                  t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(o)).replace("{{raw_image_url}}", o).replace("{{text}}", encodeURIComponent(i)),
                  r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>",
                h.parseShareButtonOut && (r = h.parseShareButtonOut(e, r));
              l.children[0].innerHTML = r,
                l.children[0].onclick = D
            }
              , L = function(e) {
              for (var o = 0; o < h.closeElClasses.length; o++)
                if (t.hasClass(e, "pswp__" + h.closeElClasses[o]))
                  return !0
            }
              , N = 0, z = function() {
              clearTimeout(v),
                N = 0,
              c && x.setIdle(!1)
            }
              , Z = function(e) {
              var t = (e = e || window.event).relatedTarget || e.toElement;
              t && "HTML" !== t.nodeName || (clearTimeout(v),
                v = setTimeout(function() {
                  x.setIdle(!0)
                }, h.timeToIdleOutside))
            }
              , R = function(e) {
              m !== e && (C(d, "preloader--active", !e),
                m = e)
            }
              , F = function(o) {
              var a = o.vGap;
              if (!e.likelyTouchDevice || h.mouseUsed || screen.width > h.fitControlsWidth) {
                var s = h.barsSize;
                if (h.captionEl && "auto" === s.bottom)
                  if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")),
                      n.insertBefore(r, i),
                      t.addClass(n, "pswp__ui--fit")),
                      h.addCaptionHTMLFn(o, r, !0)) {
                    var l = r.clientHeight;
                    a.bottom = parseInt(l, 10) || 44
                  } else
                    a.bottom = s.top;
                else
                  a.bottom = "auto" === s.bottom ? 0 : s.bottom;
                a.top = s.top
              } else
                a.top = a.bottom = 0
            }
              , O = [{
              name: "caption",
              option: "captionEl",
              onInit: function(e) {
                i = e
              }
            }, {
              name: "share-modal",
              option: "shareEl",
              onInit: function(e) {
                l = e
              },
              onTap: function() {
                S()
              }
            }, {
              name: "button--share",
              option: "shareEl",
              onInit: function(e) {
                s = e
              },
              onTap: function() {
                S()
              }
            }, {
              name: "button--zoom",
              option: "zoomEl",
              onTap: e.toggleDesktopZoom
            }, {
              name: "counter",
              option: "counterEl",
              onInit: function(e) {
                a = e
              }
            }, {
              name: "button--close",
              option: "closeEl",
              onTap: e.close
            }, {
              name: "button--arrow--left",
              option: "arrowEl",
              onTap: e.prev
            }, {
              name: "button--arrow--right",
              option: "arrowEl",
              onTap: e.next
            }, {
              name: "button--fs",
              option: "fullscreenEl",
              onTap: function() {
                o.isFullscreen() ? o.exit() : o.enter()
              }
            }, {
              name: "preloader",
              option: "preloaderEl",
              onInit: function(e) {
                d = e
              }
            }];
            x.init = function() {
              var a;
              t.extend(e.options, I, !0),
                h = e.options,
                n = t.getChildByClass(e.scrollWrap, "pswp__ui"),
                (u = e.listen)("onVerticalDrag", function(e) {
                  y && e < .95 ? x.hideControls() : !y && e >= .95 && x.showControls()
                }),
                u("onPinchClose", function(e) {
                  y && e < .9 ? (x.hideControls(),
                    a = !0) : a && !y && e > .9 && x.showControls()
                }),
                u("zoomGestureEnded", function() {
                  (a = !1) && !y && x.showControls()
                }),
                u("beforeChange", x.update),
                u("doubleTap", function(t) {
                  var o = e.currItem.initialZoomLevel;
                  e.getZoomLevel() !== o ? e.zoomTo(o, t, 333) : e.zoomTo(h.getDoubleTapZoom(!1, e.currItem), t, 333)
                }),
                u("preventDragEvent", function(e, t, o) {
                  var n = e.target || e.srcElement;
                  n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (o.prevent = !1)
                }),
                u("bindEvents", function() {
                  t.bind(n, "pswpTap click", M),
                    t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap),
                  e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                }),
                u("unbindEvents", function() {
                  A || S(),
                  b && clearInterval(b),
                    t.unbind(document, "mouseout", Z),
                    t.unbind(document, "mousemove", z),
                    t.unbind(n, "pswpTap click", M),
                    t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap),
                    t.unbind(e.scrollWrap, "mouseover", x.onMouseOver),
                  o && (t.unbind(document, o.eventK, x.updateFullscreen),
                  o.isFullscreen() && (h.hideAnimationDuration = 0,
                    o.exit()),
                    o = null )
                }),
                u("destroy", function() {
                  h.captionEl && (r && n.removeChild(r),
                    t.removeClass(i, "pswp__caption--empty")),
                  l && (l.children[0].onclick = null ),
                    t.removeClass(n, "pswp__ui--over-close"),
                    t.addClass(n, "pswp__ui--hidden"),
                    x.setIdle(!1)
                }),
              h.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"),
                u("initialZoomIn", function() {
                  h.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
                }),
                u("initialZoomOut", function() {
                  t.addClass(n, "pswp__ui--hidden")
                }),
                u("parseVerticalMargin", F),
                function() {
                  var e, o, i, r = function(n) {
                      if (n)
                        for (var r = n.length, a = 0; a < r; a++) {
                          e = n[a],
                            o = e.className;
                          for (var s = 0; s < O.length; s++)
                            i = O[s],
                            o.indexOf("pswp__" + i.name) > -1 && (h[i.option] ? (t.removeClass(e, "pswp__element--disabled"),
                            i.onInit && i.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                        }
                    }
                  ;
                  r(n.children);
                  var a = t.getChildByClass(n, "pswp__top-bar");
                  a && r(a.children)
                }(),
              h.shareEl && s && l && (A = !0),
                k(),
              h.timeToIdle && u("mouseUsed", function() {
                t.bind(document, "mousemove", z),
                  t.bind(document, "mouseout", Z),
                  b = setInterval(function() {
                    2 == ++N && x.setIdle(!0)
                  }, h.timeToIdle / 2)
              }),
              h.fullscreenEl && !t.features.isOldAndroid && (o || (o = x.getFullscreenAPI()),
                o ? (t.bind(document, o.eventK, x.updateFullscreen),
                  x.updateFullscreen(),
                  t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")),
              h.preloaderEl && (R(!0),
                u("beforeChange", function() {
                  clearTimeout(f),
                    f = setTimeout(function() {
                      e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && R(!1) : R(!0)
                    }, h.loadingIndicatorDelay)
                }),
                u("imageLoadComplete", function(t, o) {
                  e.currItem === o && R(!0)
                }))
            }
              ,
              x.setIdle = function(e) {
                c = e,
                  C(n, "ui--idle", e)
              }
              ,
              x.update = function() {
                y && e.currItem ? (x.updateIndexIndicator(),
                h.captionEl && (h.addCaptionHTMLFn(e.currItem, i),
                  C(i, "caption--empty", !e.currItem.title)),
                  _ = !0) : _ = !1,
                A || S(),
                  k()
              }
              ,
              x.updateFullscreen = function(n) {
                n && setTimeout(function() {
                  e.setScrollOffset(0, t.getScrollY())
                }, 50),
                  t[(o.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
              }
              ,
              x.updateIndexIndicator = function() {
                h.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + h.indexIndicatorSep + h.getNumItemsFn())
              }
              ,
              x.onGlobalTap = function(o) {
                var n = (o = o || window.event).target || o.srcElement;
                if (!g)
                  if (o.detail && "mouse" === o.detail.pointerType) {
                    if (L(n))
                      return void e.close();
                    t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? h.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(o.detail.releasePoint))
                  } else if (h.tapToToggleControls && (y ? x.hideControls() : x.showControls()),
                    h.tapToClose && (t.hasClass(n, "pswp__img") || L(n)))
                    return void e.close()
              }
              ,
              x.onMouseOver = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                C(n, "ui--over-close", L(t))
              }
              ,
              x.hideControls = function() {
                t.addClass(n, "pswp__ui--hidden"),
                  y = !1
              }
              ,
              x.showControls = function() {
                y = !0,
                _ || x.update(),
                  t.removeClass(n, "pswp__ui--hidden")
              }
              ,
              x.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
              }
              ,
              x.getFullscreenAPI = function() {
                var t, o = document.documentElement, n = "fullscreenchange";
                return o.requestFullscreen ? t = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: n
                } : o.mozRequestFullScreen ? t = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + n
                } : o.webkitRequestFullscreen ? t = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + n
                } : o.msRequestFullscreen && (t = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange"
                }),
                t && (t.enter = function() {
                    if (p = h.closeOnScroll,
                        h.closeOnScroll = !1,
                      "webkitRequestFullscreen" !== this.enterK)
                      return e.template[this.enterK]();
                    e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                  }
                    ,
                    t.exit = function() {
                      return h.closeOnScroll = p,
                        document[this.exitK]()
                    }
                    ,
                    t.isFullscreen = function() {
                      return document[this.elementK]
                    }
                ),
                  t
              }
          }
        }
      ) ? n.call(t, o, t, e) : n) || (e.exports = i)
    }
    , function(e, t, o) {
      "use strict";
      var n, i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        }
        : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
      ;
      void 0 === (i = "function" == typeof (n = function() {
          return function(e, t, o, n) {
            var i = {
              features: null ,
              bind: function(e, t, o, n) {
                var i = (n ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++)
                  t[r] && e[i](t[r], o, !1)
              },
              isArray: function(e) {
                return e instanceof Array
              },
              createEl: function(e, t) {
                var o = document.createElement(t || "div");
                return e && (o.className = e),
                  o
              },
              getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
              },
              unbind: function(e, t, o) {
                i.bind(e, t, o, !0)
              },
              removeClass: function(e, t) {
                var o = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(o, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
              },
              addClass: function(e, t) {
                i.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
              },
              hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
              },
              getChildByClass: function(e, t) {
                for (var o = e.firstChild; o; ) {
                  if (i.hasClass(o, t))
                    return o;
                  o = o.nextSibling
                }
              },
              arraySearch: function(e, t, o) {
                for (var n = e.length; n--; )
                  if (e[n][o] === t)
                    return n;
                return -1
              },
              extend: function(e, t, o) {
                for (var n in t)
                  if (t.hasOwnProperty(n)) {
                    if (o && e.hasOwnProperty(n))
                      continue;e[n] = t[n]
                  }
              },
              easing: {
                sine: {
                  out: function(e) {
                    return Math.sin(e * (Math.PI / 2))
                  },
                  inOut: function(e) {
                    return -(Math.cos(Math.PI * e) - 1) / 2
                  }
                },
                cubic: {
                  out: function(e) {
                    return --e * e * e + 1
                  }
                }
              },
              detectFeatures: function() {
                if (i.features)
                  return i.features;
                var e = i.createEl()
                  , t = e.style
                  , o = ""
                  , n = {};
                if (n.oldIE = document.all && !document.addEventListener,
                    n.touch = "ontouchstart"in window,
                  window.requestAnimationFrame && (n.raf = window.requestAnimationFrame,
                    n.caf = window.cancelAnimationFrame),
                    n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled,
                    !n.pointerEvent) {
                  var r = navigator.userAgent;
                  if (/iP(hone|od)/.test(navigator.platform)) {
                    var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (n.isOldIOSPhone = !0)
                  }
                  var s = r.match(/Android\s([0-9\.]*)/)
                    , l = s ? s[1] : 0;
                  (l = parseFloat(l)) >= 1 && (l < 4.4 && (n.isOldAndroid = !0),
                    n.androidVersion = l),
                    n.isMobileOpera = /opera mini|opera mobi/i.test(r)
                }
                for (var p, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], m = 0; m < 4; m++) {
                  o = d[m];
                  for (var f = 0; f < 3; f++)
                    p = u[f],
                      c = o + (o ? p.charAt(0).toUpperCase() + p.slice(1) : p),
                    !n[p] && c in t && (n[p] = c);
                  o && !n.raf && (o = o.toLowerCase(),
                    n.raf = window[o + "RequestAnimationFrame"],
                  n.raf && (n.caf = window[o + "CancelAnimationFrame"] || window[o + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                  var w = 0;
                  n.raf = function(e) {
                    var t = (new Date).getTime()
                      , o = Math.max(0, 16 - (t - w))
                      , n = window.setTimeout(function() {
                      e(t + o)
                    }, o);
                    return w = t + o,
                      n
                  }
                    ,
                    n.caf = function(e) {
                      clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                  i.features = n,
                  n
              }
            };
            i.detectFeatures(),
            i.features.oldIE && (i.bind = function(e, t, o, n) {
                t = t.split(" ");
                for (var i, a = (n ? "detach" : "attach") + "Event", s = function() {
                  o.handleEvent.call(o)
                }
                       , l = 0; l < t.length; l++)
                  if (i = t[l])
                    if ("object" === (void 0 === o ? "undefined" : r(o)) && o.handleEvent) {
                      if (n) {
                        if (!o["oldIE" + i])
                          return !1
                      } else
                        o["oldIE" + i] = s;
                      e[a]("on" + i, o["oldIE" + i])
                    } else
                      e[a]("on" + i, o)
              }
            );
            var a = this
              , s = {
              allowPanToNext: !0,
              spacing: .12,
              bgOpacity: 1,
              mouseUsed: !1,
              loop: !0,
              pinchToClose: !0,
              closeOnScroll: !0,
              closeOnVerticalDrag: !0,
              verticalDragRange: .75,
              hideAnimationDuration: 333,
              showAnimationDuration: 333,
              showHideOpacity: !1,
              focus: !0,
              escKey: !0,
              arrowKeys: !0,
              mainScrollEndFriction: .35,
              panEndFriction: .35,
              isClickableElement: function(e) {
                return "A" === e.tagName || e.tagName === 'IMG'
              },
              getDoubleTapZoom: function(e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
              },
              maxSpreadZoom: 1.33,
              modal: !0,
              scaleMode: "fit"
            };
            i.extend(s, n);
            var l, p, c, u, d, m, f, w, h, g, b, v, x, _, y, A, I, M, C, k, T, S, D, E, L, N, z, Z, R, F, O, U, P, j, B, Y, H, G, J, V, W, K, Q, X, q, $, ee, te, oe, ne, ie, re, ae, se, le, pe, ce = {
                x: 0,
                y: 0
              }, ue = {
                x: 0,
                y: 0
              }, de = {
                x: 0,
                y: 0
              }, me = {}, fe = 0, we = {}, he = {
                x: 0,
                y: 0
              }, ge = 0, be = !0, ve = [], xe = {}, _e = !1, ye = function(e, t) {
                i.extend(a, t.publicMethods),
                  ve.push(e)
              }
              , Ae = function(e) {
                var t = Pt();
                return e > t - 1 ? e - t : e < 0 ? t + e : e
              }
              , Ie = {}, Me = function(e, t) {
                return Ie[e] || (Ie[e] = []),
                  Ie[e].push(t)
              }
              , Ce = function(e) {
                var t = Ie[e];
                if (t) {
                  var o = Array.prototype.slice.call(arguments);
                  o.shift();
                  for (var n = 0; n < t.length; n++)
                    t[n].apply(a, o)
                }
              }
              , ke = function() {
                return (new Date).getTime()
              }
              , Te = function(e) {
                se = e,
                  a.bg.style.opacity = e * s.bgOpacity
              }
              , Se = function(e, t, o, n, i) {
                (!_e || i && i !== a.currItem) && (n /= i ? i.fitRatio : a.currItem.fitRatio),
                  e[S] = v + t + "px, " + o + "px" + x + " scale(" + n + ")"
              }
              , De = function(e) {
                oe && (e && (g > a.currItem.fitRatio ? _e || (Kt(a.currItem, !1, !0),
                  _e = !0) : _e && (Kt(a.currItem),
                  _e = !1)),
                  Se(oe, de.x, de.y, g))
              }
              , Ee = function(e) {
                e.container && Se(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
              }
              , Le = function(e, t) {
                t[S] = v + e + "px, 0px" + x
              }
              , Ne = function(e, t) {
                if (!s.loop && t) {
                  var o = u + (he.x * fe - e) / he.x
                    , n = Math.round(e - ut.x);
                  (o < 0 && n > 0 || o >= Pt() - 1 && n < 0) && (e = ut.x + n * s.mainScrollEndFriction)
                }
                ut.x = e,
                  Le(e, d)
              }
              , ze = function(e, t) {
                var o = dt[e] - we[e];
                return ue[e] + ce[e] + o - o * (t / b)
              }
              , Ze = function(e, t) {
                e.x = t.x,
                  e.y = t.y,
                t.id && (e.id = t.id)
              }
              , Re = function(e) {
                e.x = Math.round(e.x),
                  e.y = Math.round(e.y)
              }
              , Fe = null , Oe = function t() {
                Fe && (i.unbind(document, "mousemove", t),
                  i.addClass(e, "pswp--has_mouse"),
                  s.mouseUsed = !0,
                  Ce("mouseUsed")),
                  Fe = setTimeout(function() {
                    Fe = null
                  }, 100)
              }
              , Ue = function(e, t) {
                var o = Gt(a.currItem, me, e);
                return t && (te = o),
                  o
              }
              , Pe = function(e) {
                return e || (e = a.currItem),
                  e.initialZoomLevel
              }
              , je = function(e) {
                return e || (e = a.currItem),
                  e.w > 0 ? s.maxSpreadZoom : 1
              }
              , Be = function(e, t, o, n) {
                return n === a.currItem.initialZoomLevel ? (o[e] = a.currItem.initialPosition[e],
                  !0) : (o[e] = ze(e, n),
                  o[e] > t.min[e] ? (o[e] = t.min[e],
                    !0) : o[e] < t.max[e] && (o[e] = t.max[e],
                    !0))
              }
              , Ye = function(e) {
                var t = "";
                s.escKey && 27 === e.keyCode ? t = "close" : s.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
                t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                  a[t]()))
              }
              , He = function(e) {
                e && (K || W || ne || H) && (e.preventDefault(),
                  e.stopPropagation())
              }
              , Ge = function() {
                a.setScrollOffset(0, i.getScrollY())
              }
              , Je = {}, Ve = 0, We = function(e) {
                Je[e] && (Je[e].raf && N(Je[e].raf),
                  Ve--,
                  delete Je[e])
              }
              , Ke = function(e) {
                Je[e] && We(e),
                Je[e] || (Ve++,
                  Je[e] = {})
              }
              , Qe = function() {
                for (var e in Je)
                  Je.hasOwnProperty(e) && We(e)
              }
              , Xe = function(e, t, o, n, i, r, a) {
                var s, l = ke();
                Ke(e),
                  function p() {
                    if (Je[e]) {
                      if ((s = ke() - l) >= n)
                        return We(e),
                          r(o),
                          void (a && a());
                      r((o - t) * i(s / n) + t),
                        Je[e].raf = L(p)
                    }
                  }()
              }
              , qe = {
                shout: Ce,
                listen: Me,
                viewportSize: me,
                options: s,
                isMainScrollAnimating: function() {
                  return ne
                },
                getZoomLevel: function() {
                  return g
                },
                getCurrentIndex: function() {
                  return u
                },
                isDragging: function() {
                  return J
                },
                isZooming: function() {
                  return $
                },
                setScrollOffset: function(e, t) {
                  we.x = e,
                    F = we.y = t,
                    Ce("updateScrollOffset", we)
                },
                applyZoomPan: function(e, t, o, n) {
                  de.x = t,
                    de.y = o,
                    g = e,
                    De(n)
                },
                init: function() {
                  if (!l && !p) {
                    var o;
                    a.framework = i,
                      a.template = e,
                      a.bg = i.getChildByClass(e, "pswp__bg"),
                      z = e.className,
                      l = !0,
                      O = i.detectFeatures(),
                      L = O.raf,
                      N = O.caf,
                      S = O.transform,
                      R = O.oldIE,
                      a.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"),
                      a.container = i.getChildByClass(a.scrollWrap, "pswp__container"),
                      d = a.container.style,
                      a.itemHolders = A = [{
                        el: a.container.children[0],
                        wrap: 0,
                        index: -1
                      }, {
                        el: a.container.children[1],
                        wrap: 0,
                        index: -1
                      }, {
                        el: a.container.children[2],
                        wrap: 0,
                        index: -1
                      }],
                      A[0].el.style.display = A[2].el.style.display = "none",
                      function() {
                        if (S) {
                          var t = O.perspective && !E;
                          return v = "translate" + (t ? "3d(" : "("),
                            void (x = O.perspective ? ", 0px)" : ")")
                        }
                        S = "left",
                          i.addClass(e, "pswp--ie"),
                          Le = function(e, t) {
                            t.left = e + "px"
                          }
                          ,
                          Ee = function(e) {
                            var t = e.fitRatio > 1 ? 1 : e.fitRatio
                              , o = e.container.style
                              , n = t * e.w
                              , i = t * e.h;
                            o.width = n + "px",
                              o.height = i + "px",
                              o.left = e.initialPosition.x + "px",
                              o.top = e.initialPosition.y + "px"
                          }
                          ,
                          De = function() {
                            if (oe) {
                              var e = oe
                                , t = a.currItem
                                , o = t.fitRatio > 1 ? 1 : t.fitRatio
                                , n = o * t.w
                                , i = o * t.h;
                              e.width = n + "px",
                                e.height = i + "px",
                                e.left = de.x + "px",
                                e.top = de.y + "px"
                            }
                          }
                      }(),
                      h = {
                        resize: a.updateSize,
                        orientationchange: function() {
                          clearTimeout(U),
                            U = setTimeout(function() {
                              me.x !== a.scrollWrap.clientWidth && a.updateSize()
                            }, 500)
                        },
                        scroll: Ge,
                        keydown: Ye,
                        click: He
                      };
                    var n = O.isOldIOSPhone || O.isOldAndroid || O.isMobileOpera;
                    for (O.animationName && O.transform && !n || (s.showAnimationDuration = s.hideAnimationDuration = 0),
                           o = 0; o < ve.length; o++)
                      a["init" + ve[o]]();
                    if (t) {
                      var r = a.ui = new t(a,i);
                      r.init()
                    }
                    Ce("firstUpdate"),
                      u = u || s.index || 0,
                    (isNaN(u) || u < 0 || u >= Pt()) && (u = 0),
                      a.currItem = Ut(u),
                    (O.isOldIOSPhone || O.isOldAndroid) && (be = !1),
                      e.setAttribute("aria-hidden", "false"),
                    s.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute",
                      e.style.top = i.getScrollY() + "px")),
                    void 0 === F && (Ce("initialLayout"),
                      F = Z = i.getScrollY());
                    var c = "pswp--open ";
                    for (s.mainClass && (c += s.mainClass + " "),
                         s.showHideOpacity && (c += "pswp--animate_opacity "),
                           c += E ? "pswp--touch" : "pswp--notouch",
                           c += O.animationName ? " pswp--css_animation" : "",
                           c += O.svg ? " pswp--svg" : "",
                           i.addClass(e, c),
                           a.updateSize(),
                           m = -1,
                           ge = null ,
                           o = 0; o < 3; o++)
                      Le((o + m) * he.x, A[o].el.style);
                    R || i.bind(a.scrollWrap, w, a),
                      Me("initialZoomInEnd", function() {
                        a.setContent(A[0], u - 1),
                          a.setContent(A[2], u + 1),
                          A[0].el.style.display = A[2].el.style.display = "block",
                        s.focus && e.focus(),
                          i.bind(document, "keydown", a),
                        O.transform && i.bind(a.scrollWrap, "click", a),
                        s.mouseUsed || i.bind(document, "mousemove", Oe),
                          i.bind(window, "resize scroll orientationchange", a),
                          Ce("bindEvents")
                      }),
                      a.setContent(A[1], u),
                      a.updateCurrItem(),
                      Ce("afterInit"),
                    be || (_ = setInterval(function() {
                      Ve || J || $ || g !== a.currItem.initialZoomLevel || a.updateSize()
                    }, 1e3)),
                      i.addClass(e, "pswp--visible")
                  }
                },
                close: function() {
                  l && (l = !1,
                    p = !0,
                    Ce("close"),
                    i.unbind(window, "resize scroll orientationchange", a),
                    i.unbind(window, "scroll", h.scroll),
                    i.unbind(document, "keydown", a),
                    i.unbind(document, "mousemove", Oe),
                  O.transform && i.unbind(a.scrollWrap, "click", a),
                  J && i.unbind(window, f, a),
                    clearTimeout(U),
                    Ce("unbindEvents"),
                    jt(a.currItem, null , !0, a.destroy))
                },
                destroy: function() {
                  Ce("destroy"),
                  Zt && clearTimeout(Zt),
                    e.setAttribute("aria-hidden", "true"),
                    e.className = z,
                  _ && clearInterval(_),
                    i.unbind(a.scrollWrap, w, a),
                    i.unbind(window, "scroll", a),
                    wt(),
                    Qe(),
                    Ie = null
                },
                panTo: function(e, t, o) {
                  o || (e > te.min.x ? e = te.min.x : e < te.max.x && (e = te.max.x),
                    t > te.min.y ? t = te.min.y : t < te.max.y && (t = te.max.y)),
                    de.x = e,
                    de.y = t,
                    De()
                },
                handleEvent: function(e) {
                  e = e || window.event,
                  h[e.type] && h[e.type](e)
                },
                goTo: function(e) {
                  var t = (e = Ae(e)) - u;
                  ge = t,
                    u = e,
                    a.currItem = Ut(u),
                    fe -= t,
                    Ne(he.x * fe),
                    Qe(),
                    ne = !1,
                    a.updateCurrItem()
                },
                next: function() {
                  a.goTo(u + 1)
                },
                prev: function() {
                  a.goTo(u - 1)
                },
                updateCurrZoomItem: function(e) {
                  if (e && Ce("beforeChange", 0),
                      A[1].el.children.length) {
                    var t = A[1].el.children[0];
                    oe = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                  } else
                    oe = null ;
                  te = a.currItem.bounds,
                    b = g = a.currItem.initialZoomLevel,
                    de.x = te.center.x,
                    de.y = te.center.y,
                  e && Ce("afterChange")
                },
                invalidateCurrItems: function() {
                  y = !0;
                  for (var e = 0; e < 3; e++)
                    A[e].item && (A[e].item.needsUpdate = !0)
                },
                updateCurrItem: function(e) {
                  if (0 !== ge) {
                    var t, o = Math.abs(ge);
                    if (!(e && o < 2)) {
                      a.currItem = Ut(u),
                        _e = !1,
                        Ce("beforeChange", ge),
                      o >= 3 && (m += ge + (ge > 0 ? -3 : 3),
                        o = 3);
                      for (var n = 0; n < o; n++)
                        ge > 0 ? (t = A.shift(),
                          A[2] = t,
                          Le((++m + 2) * he.x, t.el.style),
                          a.setContent(t, u - o + n + 1 + 1)) : (t = A.pop(),
                          A.unshift(t),
                          Le(--m * he.x, t.el.style),
                          a.setContent(t, u + o - n - 1 - 1));
                      if (oe && 1 === Math.abs(ge)) {
                        var i = Ut(I);
                        i.initialZoomLevel !== g && (Gt(i, me),
                          Kt(i),
                          Ee(i))
                      }
                      ge = 0,
                        a.updateCurrZoomItem(),
                        I = u,
                        Ce("afterChange")
                    }
                  }
                },
                updateSize: function(t) {
                  if (!be && s.modal) {
                    var o = i.getScrollY();
                    if (F !== o && (e.style.top = o + "px",
                        F = o),
                      !t && xe.x === window.innerWidth && xe.y === window.innerHeight)
                      return;
                    xe.x = window.innerWidth,
                      xe.y = window.innerHeight,
                      e.style.height = xe.y + "px"
                  }
                  if (me.x = a.scrollWrap.clientWidth,
                      me.y = a.scrollWrap.clientHeight,
                      Ge(),
                      he.x = me.x + Math.round(me.x * s.spacing),
                      he.y = me.y,
                      Ne(he.x * fe),
                      Ce("beforeResize"),
                    void 0 !== m) {
                    for (var n, r, l, p = 0; p < 3; p++)
                      n = A[p],
                        Le((p + m) * he.x, n.el.style),
                        l = u + p - 1,
                      s.loop && Pt() > 2 && (l = Ae(l)),
                        (r = Ut(l)) && (y || r.needsUpdate || !r.bounds) ? (a.cleanSlide(r),
                          a.setContent(n, l),
                        1 === p && (a.currItem = r,
                          a.updateCurrZoomItem(!0)),
                          r.needsUpdate = !1) : -1 === n.index && l >= 0 && a.setContent(n, l),
                      r && r.container && (Gt(r, me),
                        Kt(r),
                        Ee(r));
                    y = !1
                  }
                  b = g = a.currItem.initialZoomLevel,
                  (te = a.currItem.bounds) && (de.x = te.center.x,
                    de.y = te.center.y,
                    De(!0)),
                    Ce("resize")
                },
                zoomTo: function(e, t, o, n, r) {
                  t && (b = g,
                    dt.x = Math.abs(t.x) - de.x,
                    dt.y = Math.abs(t.y) - de.y,
                    Ze(ue, de));
                  var a = Ue(e, !1)
                    , s = {};
                  Be("x", a, s, e),
                    Be("y", a, s, e);
                  var l = g
                    , p = {
                    x: de.x,
                    y: de.y
                  };
                  Re(s);
                  var c = function(t) {
                      1 === t ? (g = e,
                        de.x = s.x,
                        de.y = s.y) : (g = (e - l) * t + l,
                        de.x = (s.x - p.x) * t + p.x,
                        de.y = (s.y - p.y) * t + p.y),
                      r && r(t),
                        De(1 === t)
                    }
                  ;
                  o ? Xe("customZoomTo", 0, 1, o, n || i.easing.sine.inOut, c) : c(1)
                }
              }, $e = {}, et = {}, tt = {}, ot = {}, nt = {}, it = [], rt = {}, at = [], st = {}, lt = 0, pt = {
                x: 0,
                y: 0
              }, ct = 0, ut = {
                x: 0,
                y: 0
              }, dt = {
                x: 0,
                y: 0
              }, mt = {
                x: 0,
                y: 0
              }, ft = function(e, t) {
                return st.x = Math.abs(e.x - t.x),
                  st.y = Math.abs(e.y - t.y),
                  Math.sqrt(st.x * st.x + st.y * st.y)
              }
              , wt = function() {
                Q && (N(Q),
                  Q = null )
              }
              , ht = {}, gt = function(e, t) {
                return ht.prevent = !function e(t, o) {
                  return !(!t || t === document) && (!(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (o(t) ? t : e(t.parentNode, o)))
                }(e.target, s.isClickableElement),
                  Ce("preventDragEvent", e, t, ht),
                  ht.prevent
              }
              , bt = function(e, t) {
                return t.x = e.pageX,
                  t.y = e.pageY,
                  t.id = e.identifier,
                  t
              }
              , vt = function(e, t, o) {
                o.x = .5 * (e.x + t.x),
                  o.y = .5 * (e.y + t.y)
              }
              , xt = function() {
                var e = de.y - a.currItem.initialPosition.y;
                return 1 - Math.abs(e / (me.y / 2))
              }
              , _t = {}, yt = {}, At = [], It = function(e) {
                for (; At.length > 0; )
                  At.pop();
                return D ? (pe = 0,
                  it.forEach(function(e) {
                    0 === pe ? At[0] = e : 1 === pe && (At[1] = e),
                      pe++
                  })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (At[0] = bt(e.touches[0], _t),
                e.touches.length > 1 && (At[1] = bt(e.touches[1], yt))) : (_t.x = e.pageX,
                  _t.y = e.pageY,
                  _t.id = "",
                  At[0] = _t),
                  At
              }
              , Mt = function(e, t) {
                var o, n, i, r, l = de[e] + t[e], p = t[e] > 0, c = ut.x + t.x, u = ut.x - rt.x;
                if (o = l > te.min[e] || l < te.max[e] ? s.panEndFriction : 1,
                    l = de[e] + t[e] * o,
                  (s.allowPanToNext || g === a.currItem.initialZoomLevel) && (oe ? "h" !== ie || "x" !== e || W || (p ? (l > te.min[e] && (o = s.panEndFriction,
                    te.min[e],
                    n = te.min[e] - ue[e]),
                    (n <= 0 || u < 0) && Pt() > 1 ? (r = c,
                    u < 0 && c > rt.x && (r = rt.x)) : te.min.x !== te.max.x && (i = l)) : (l < te.max[e] && (o = s.panEndFriction,
                    te.max[e],
                    n = ue[e] - te.max[e]),
                    (n <= 0 || u > 0) && Pt() > 1 ? (r = c,
                    u > 0 && c < rt.x && (r = rt.x)) : te.min.x !== te.max.x && (i = l))) : r = c,
                  "x" === e))
                  return void 0 !== r && (Ne(r, !0),
                    X = r !== rt.x),
                  te.min.x !== te.max.x && (void 0 !== i ? de.x = i : X || (de.x += t.x * o)),
                  void 0 !== r;
                ne || X || g > a.currItem.fitRatio && (de[e] += t[e] * o)
              }
              , Ct = function(e) {
                if (!("mousedown" === e.type && e.button > 0))
                  if (Ot)
                    e.preventDefault();
                  else if (!G || "mousedown" !== e.type) {
                    if (gt(e, !0) && e.preventDefault(),
                        Ce("pointerDown"),
                        D) {
                      var t = i.arraySearch(it, e.pointerId, "id");
                      t < 0 && (t = it.length),
                        it[t] = {
                          x: e.pageX,
                          y: e.pageY,
                          id: e.pointerId
                        }
                    }
                    var o = It(e)
                      , n = o.length;
                    q = null ,
                      Qe(),
                    J && 1 !== n || (J = re = !0,
                      i.bind(window, f, a),
                      Y = le = ae = H = X = K = V = W = !1,
                      ie = null ,
                      Ce("firstTouchStart", o),
                      Ze(ue, de),
                      ce.x = ce.y = 0,
                      Ze(ot, o[0]),
                      Ze(nt, ot),
                      rt.x = he.x * fe,
                      at = [{
                        x: ot.x,
                        y: ot.y
                      }],
                      j = P = ke(),
                      Ue(g, !0),
                      wt(),
                      function e() {
                        J && (Q = L(e),
                          Tt())
                      }()),
                    !$ && n > 1 && !ne && !X && (b = g,
                      W = !1,
                      $ = V = !0,
                      ce.y = ce.x = 0,
                      Ze(ue, de),
                      Ze($e, o[0]),
                      Ze(et, o[1]),
                      vt($e, et, mt),
                      dt.x = Math.abs(mt.x) - de.x,
                      dt.y = Math.abs(mt.y) - de.y,
                      ee = ft($e, et))
                  }
              }
              , kt = function(e) {
                if (e.preventDefault(),
                    D) {
                  var t = i.arraySearch(it, e.pointerId, "id");
                  if (t > -1) {
                    var o = it[t];
                    o.x = e.pageX,
                      o.y = e.pageY
                  }
                }
                if (J) {
                  var n = It(e);
                  if (ie || K || $)
                    q = n;
                  else if (ut.x !== he.x * fe)
                    ie = "h";
                  else {
                    var r = Math.abs(n[0].x - ot.x) - Math.abs(n[0].y - ot.y);
                    Math.abs(r) >= 10 && (ie = r > 0 ? "h" : "v",
                      q = n)
                  }
                }
              }
              , Tt = function() {
                if (q) {
                  var e = q.length;
                  if (0 !== e)
                    if (Ze($e, q[0]),
                        tt.x = $e.x - ot.x,
                        tt.y = $e.y - ot.y,
                      $ && e > 1) {
                      if (ot.x = $e.x,
                          ot.y = $e.y,
                        !tt.x && !tt.y && function(e, t) {
                          return e.x === t.x && e.y === t.y
                        }(q[1], et))
                        return;
                      Ze(et, q[1]),
                      W || (W = !0,
                        Ce("zoomGestureStarted"));
                      var t = ft($e, et)
                        , o = Nt(t);
                      o > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (le = !0);
                      var n = 1
                        , i = Pe()
                        , r = je();
                      if (o < i)
                        if (s.pinchToClose && !le && b <= a.currItem.initialZoomLevel) {
                          var l = i - o
                            , p = 1 - l / (i / 1.2);
                          Te(p),
                            Ce("onPinchClose", p),
                            ae = !0
                        } else
                          (n = (i - o) / i) > 1 && (n = 1),
                            o = i - n * (i / 3);
                      else
                        o > r && ((n = (o - r) / (6 * i)) > 1 && (n = 1),
                          o = r + n * i);
                      n < 0 && (n = 0),
                        vt($e, et, pt),
                        ce.x += pt.x - mt.x,
                        ce.y += pt.y - mt.y,
                        Ze(mt, pt),
                        de.x = ze("x", o),
                        de.y = ze("y", o),
                        Y = o > g,
                        g = o,
                        De()
                    } else {
                      if (!ie)
                        return;
                      if (re && (re = !1,
                        Math.abs(tt.x) >= 10 && (tt.x -= q[0].x - nt.x),
                        Math.abs(tt.y) >= 10 && (tt.y -= q[0].y - nt.y)),
                          ot.x = $e.x,
                          ot.y = $e.y,
                        0 === tt.x && 0 === tt.y)
                        return;
                      if ("v" === ie && s.closeOnVerticalDrag && "fit" === s.scaleMode && g === a.currItem.initialZoomLevel) {
                        ce.y += tt.y,
                          de.y += tt.y;
                        var c = xt();
                        return H = !0,
                          Ce("onVerticalDrag", c),
                          Te(c),
                          void De()
                      }
                      !function(e, t, o) {
                        if (e - j > 50) {
                          var n = at.length > 2 ? at.shift() : {};
                          n.x = t,
                            n.y = o,
                            at.push(n),
                            j = e
                        }
                      }(ke(), $e.x, $e.y),
                        K = !0,
                        te = a.currItem.bounds;
                      var u = Mt("x", tt);
                      u || (Mt("y", tt),
                        Re(de),
                        De())
                    }
                }
              }
              , St = function(e) {
                if (O.isOldAndroid) {
                  if (G && "mouseup" === e.type)
                    return;
                  e.type.indexOf("touch") > -1 && (clearTimeout(G),
                    G = setTimeout(function() {
                      G = 0
                    }, 600))
                }
                var t;
                if (Ce("pointerUp"),
                  gt(e, !1) && e.preventDefault(),
                    D) {
                  var o = i.arraySearch(it, e.pointerId, "id");
                  o > -1 && (t = it.splice(o, 1)[0],
                    navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                      4: "mouse",
                      2: "touch",
                      3: "pen"
                    }[e.pointerType],
                    t.type || (t.type = e.pointerType || "mouse")))
                }
                var n, r = It(e), l = r.length;
                if ("mouseup" === e.type && (l = 0),
                  2 === l)
                  return q = null ,
                    !0;
                1 === l && Ze(nt, r[0]),
                0 !== l || ie || ne || (t || ("mouseup" === e.type ? t = {
                  x: e.pageX,
                  y: e.pageY,
                  type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                  x: e.changedTouches[0].pageX,
                  y: e.changedTouches[0].pageY,
                  type: "touch"
                })),
                  Ce("touchRelease", e, t));
                var p = -1;
                if (0 === l && (J = !1,
                    i.unbind(window, f, a),
                    wt(),
                    $ ? p = 0 : -1 !== ct && (p = ke() - ct)),
                    ct = 1 === l ? ke() : -1,
                    n = -1 !== p && p < 150 ? "zoom" : "swipe",
                  $ && l < 2 && ($ = !1,
                  1 === l && (n = "zoomPointerUp"),
                    Ce("zoomGestureEnded")),
                    q = null ,
                  K || W || ne || H)
                  if (Qe(),
                    B || (B = Dt()),
                      B.calculateSwipeSpeed("x"),
                      H) {
                    var c = xt();
                    if (c < s.verticalDragRange)
                      a.close();
                    else {
                      var u = de.y
                        , d = se;
                      Xe("verticalDrag", 0, 1, 300, i.easing.cubic.out, function(e) {
                        de.y = (a.currItem.initialPosition.y - u) * e + u,
                          Te((1 - d) * e + d),
                          De()
                      }),
                        Ce("onVerticalDrag", 1)
                    }
                  } else {
                    if ((X || ne) && 0 === l) {
                      var m = Lt(n, B);
                      if (m)
                        return;
                      n = "zoomPointerUp"
                    }
                    ne || ("swipe" === n ? !X && g > a.currItem.fitRatio && Et(B) : zt())
                  }
              }
              , Dt = function() {
                var e, t, o = {
                  lastFlickOffset: {},
                  lastFlickDist: {},
                  lastFlickSpeed: {},
                  slowDownRatio: {},
                  slowDownRatioReverse: {},
                  speedDecelerationRatio: {},
                  speedDecelerationRatioAbs: {},
                  distanceOffset: {},
                  backAnimDestination: {},
                  backAnimStarted: {},
                  calculateSwipeSpeed: function(n) {
                    at.length > 1 ? (e = ke() - j + 50,
                      t = at[at.length - 2][n]) : (e = ke() - P,
                      t = nt[n]),
                      o.lastFlickOffset[n] = ot[n] - t,
                      o.lastFlickDist[n] = Math.abs(o.lastFlickOffset[n]),
                      o.lastFlickDist[n] > 20 ? o.lastFlickSpeed[n] = o.lastFlickOffset[n] / e : o.lastFlickSpeed[n] = 0,
                    Math.abs(o.lastFlickSpeed[n]) < .1 && (o.lastFlickSpeed[n] = 0),
                      o.slowDownRatio[n] = .95,
                      o.slowDownRatioReverse[n] = 1 - o.slowDownRatio[n],
                      o.speedDecelerationRatio[n] = 1
                  },
                  calculateOverBoundsAnimOffset: function(e, t) {
                    o.backAnimStarted[e] || (de[e] > te.min[e] ? o.backAnimDestination[e] = te.min[e] : de[e] < te.max[e] && (o.backAnimDestination[e] = te.max[e]),
                    void 0 !== o.backAnimDestination[e] && (o.slowDownRatio[e] = .7,
                      o.slowDownRatioReverse[e] = 1 - o.slowDownRatio[e],
                    o.speedDecelerationRatioAbs[e] < .05 && (o.lastFlickSpeed[e] = 0,
                      o.backAnimStarted[e] = !0,
                      Xe("bounceZoomPan" + e, de[e], o.backAnimDestination[e], t || 300, i.easing.sine.out, function(t) {
                        de[e] = t,
                          De()
                      }))))
                  },
                  calculateAnimOffset: function(e) {
                    o.backAnimStarted[e] || (o.speedDecelerationRatio[e] = o.speedDecelerationRatio[e] * (o.slowDownRatio[e] + o.slowDownRatioReverse[e] - o.slowDownRatioReverse[e] * o.timeDiff / 10),
                      o.speedDecelerationRatioAbs[e] = Math.abs(o.lastFlickSpeed[e] * o.speedDecelerationRatio[e]),
                      o.distanceOffset[e] = o.lastFlickSpeed[e] * o.speedDecelerationRatio[e] * o.timeDiff,
                      de[e] += o.distanceOffset[e])
                  },
                  panAnimLoop: function() {
                    if (Je.zoomPan && (Je.zoomPan.raf = L(o.panAnimLoop),
                        o.now = ke(),
                        o.timeDiff = o.now - o.lastNow,
                        o.lastNow = o.now,
                        o.calculateAnimOffset("x"),
                        o.calculateAnimOffset("y"),
                        De(),
                        o.calculateOverBoundsAnimOffset("x"),
                        o.calculateOverBoundsAnimOffset("y"),
                      o.speedDecelerationRatioAbs.x < .05 && o.speedDecelerationRatioAbs.y < .05))
                      return de.x = Math.round(de.x),
                        de.y = Math.round(de.y),
                        De(),
                        void We("zoomPan")
                  }
                };
                return o
              }
              , Et = function(e) {
                if (e.calculateSwipeSpeed("y"),
                    te = a.currItem.bounds,
                    e.backAnimDestination = {},
                    e.backAnimStarted = {},
                  Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05)
                  return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
                    e.calculateOverBoundsAnimOffset("x"),
                    e.calculateOverBoundsAnimOffset("y"),
                    !0;
                Ke("zoomPan"),
                  e.lastNow = ke(),
                  e.panAnimLoop()
              }
              , Lt = function(e, t) {
                var o, n, r;
                if (ne || (lt = u),
                  "swipe" === e) {
                  var l = ot.x - nt.x
                    , p = t.lastFlickDist.x < 10;
                  l > 30 && (p || t.lastFlickOffset.x > 20) ? n = -1 : l < -30 && (p || t.lastFlickOffset.x < -20) && (n = 1)
                }
                n && ((u += n) < 0 ? (u = s.loop ? Pt() - 1 : 0,
                  r = !0) : u >= Pt() && (u = s.loop ? 0 : Pt() - 1,
                  r = !0),
                r && !s.loop || (ge += n,
                  fe -= n,
                  o = !0));
                var c, d = he.x * fe, m = Math.abs(d - ut.x);
                return o || d > ut.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333,
                  c = Math.min(c, 400),
                  c = Math.max(c, 250)) : c = 333,
                lt === u && (o = !1),
                  ne = !0,
                  Ce("mainScrollAnimStart"),
                  Xe("mainScroll", ut.x, d, c, i.easing.cubic.out, Ne, function() {
                    Qe(),
                      ne = !1,
                      lt = -1,
                    (o || lt !== u) && a.updateCurrItem(),
                      Ce("mainScrollAnimComplete")
                  }),
                o && a.updateCurrItem(!0),
                  o
              }
              , Nt = function(e) {
                return 1 / ee * e * b
              }
              , zt = function() {
                var e = g
                  , t = Pe()
                  , o = je();
                g < t ? e = t : g > o && (e = o);
                var n, r = se;
                return ae && !Y && !le && g < t ? (a.close(),
                  !0) : (ae && (n = function(e) {
                    Te((1 - r) * e + r)
                  }
                ),
                  a.zoomTo(e, 0, 200, i.easing.cubic.out, n),
                  !0)
              }
            ;
            ye("Gestures", {
              publicMethods: {
                initGestures: function() {
                  var e = function(e, t, o, n, i) {
                      M = e + t,
                        C = e + o,
                        k = e + n,
                        T = i ? e + i : ""
                    }
                  ;
                  (D = O.pointerEvent) && O.touch && (O.touch = !1),
                    D ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : O.touch ? (e("touch", "start", "move", "end", "cancel"),
                      E = !0) : e("mouse", "down", "move", "up"),
                    f = C + " " + k + " " + T,
                    w = M,
                  D && !E && (E = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                    a.likelyTouchDevice = E,
                    h[M] = Ct,
                    h[C] = kt,
                    h[k] = St,
                  T && (h[T] = h[k]),
                  O.touch && (w += " mousedown",
                    f += " mousemove mouseup",
                    h.mousedown = h[M],
                    h.mousemove = h[C],
                    h.mouseup = h[k]),
                  E || (s.allowPanToNext = !1)
                }
              }
            });
            var Zt, Rt, Ft, Ot, Ut, Pt, jt = function(t, o, n, r) {
                var l;
                Zt && clearTimeout(Zt),
                  Ot = !0,
                  Ft = !0,
                  t.initialLayout ? (l = t.initialLayout,
                    t.initialLayout = null ) : l = s.getThumbBoundsFn && s.getThumbBoundsFn(u);
                var p, d, m = n ? s.hideAnimationDuration : s.showAnimationDuration, f = function() {
                    We("initialZoom"),
                      n ? (a.template.removeAttribute("style"),
                        a.bg.removeAttribute("style")) : (Te(1),
                      o && (o.style.display = "block"),
                        i.addClass(e, "pswp--animated-in"),
                        Ce("initialZoom" + (n ? "OutEnd" : "InEnd"))),
                    r && r(),
                      Ot = !1
                  }
                ;
                if (!m || !l || void 0 === l.x)
                  return Ce("initialZoom" + (n ? "Out" : "In")),
                    g = t.initialZoomLevel,
                    Ze(de, t.initialPosition),
                    De(),
                    e.style.opacity = n ? 0 : 1,
                    Te(1),
                    void (m ? setTimeout(function() {
                      f()
                    }, m) : f());
                p = c,
                  d = !a.currItem.src || a.currItem.loadError || s.showHideOpacity,
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                n || (g = l.w / t.w,
                  de.x = l.x,
                  de.y = l.y - Z,
                  a[d ? "template" : "bg"].style.opacity = .001,
                  De()),
                  Ke("initialZoom"),
                n && !p && i.removeClass(e, "pswp--animated-in"),
                d && (n ? i[(p ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                  i.addClass(e, "pswp--animate_opacity")
                }, 30)),
                  Zt = setTimeout(function() {
                    if (Ce("initialZoom" + (n ? "Out" : "In")),
                        n) {
                      var o = l.w / t.w
                        , r = {
                          x: de.x,
                          y: de.y
                        }
                        , a = g
                        , s = se
                        , c = function(t) {
                          1 === t ? (g = o,
                            de.x = l.x,
                            de.y = l.y - F) : (g = (o - a) * t + a,
                            de.x = (l.x - r.x) * t + r.x,
                            de.y = (l.y - F - r.y) * t + r.y),
                            De(),
                            d ? e.style.opacity = 1 - t : Te(s - t * s)
                        }
                      ;
                      p ? Xe("initialZoom", 0, 1, m, i.easing.cubic.out, c, f) : (c(1),
                        Zt = setTimeout(f, m + 20))
                    } else
                      g = t.initialZoomLevel,
                        Ze(de, t.initialPosition),
                        De(),
                        Te(1),
                        d ? e.style.opacity = 1 : Te(1),
                        Zt = setTimeout(f, m + 20)
                  }, n ? 25 : 90)
              }
              , Bt = {}, Yt = [], Ht = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function() {
                  return Rt.length
                }
              }, Gt = function(e, t, o) {
                if (e.src && !e.loadError) {
                  var n = !o;
                  if (n && (e.vGap || (e.vGap = {
                      top: 0,
                      bottom: 0
                    }),
                      Ce("parseVerticalMargin", e)),
                      Bt.x = t.x,
                      Bt.y = t.y - e.vGap.top - e.vGap.bottom,
                      n) {
                    var i = Bt.x / e.w
                      , r = Bt.y / e.h;
                    e.fitRatio = i < r ? i : r;
                    var a = s.scaleMode;
                    "orig" === a ? o = 1 : "fit" === a && (o = e.fitRatio),
                    o > 1 && (o = 1),
                      e.initialZoomLevel = o,
                    e.bounds || (e.bounds = {
                      center: {
                        x: 0,
                        y: 0
                      },
                      max: {
                        x: 0,
                        y: 0
                      },
                      min: {
                        x: 0,
                        y: 0
                      }
                    })
                  }
                  if (!o)
                    return;
                  return function(e, t, o) {
                    var n = e.bounds;
                    n.center.x = Math.round((Bt.x - t) / 2),
                      n.center.y = Math.round((Bt.y - o) / 2) + e.vGap.top,
                      n.max.x = t > Bt.x ? Math.round(Bt.x - t) : n.center.x,
                      n.max.y = o > Bt.y ? Math.round(Bt.y - o) + e.vGap.top : n.center.y,
                      n.min.x = t > Bt.x ? 0 : n.center.x,
                      n.min.y = o > Bt.y ? e.vGap.top : n.center.y
                  }(e, e.w * o, e.h * o),
                  n && o === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                    e.bounds
                }
                return e.w = e.h = 0,
                  e.initialZoomLevel = e.fitRatio = 1,
                  e.bounds = {
                    center: {
                      x: 0,
                      y: 0
                    },
                    max: {
                      x: 0,
                      y: 0
                    },
                    min: {
                      x: 0,
                      y: 0
                    }
                  },
                  e.initialPosition = e.bounds.center,
                  e.bounds
              }
              , Jt = function(e, t, o, n, i, r) {
                t.loadError || n && (t.imageAppended = !0,
                  Kt(t, n, t === a.currItem && _e),
                  o.appendChild(n),
                r && setTimeout(function() {
                  t && t.loaded && t.placeholder && (t.placeholder.style.display = "none",
                    t.placeholder = null )
                }, 500))
              }
              , Vt = function(e) {
                e.loading = !0,
                  e.loaded = !1;
                var t = e.img = i.createEl("pswp__img", "img")
                  , o = function() {
                    e.loading = !1,
                      e.loaded = !0,
                      e.loadComplete ? e.loadComplete(e) : e.img = null ,
                      t.onload = t.onerror = null ,
                      t = null
                  }
                ;
                return t.onload = o,
                  t.onerror = function() {
                    e.loadError = !0,
                      o()
                  }
                  ,
                  t.src = e.src,
                  t
              }
              , Wt = function(e, t) {
                if (e.src && e.loadError && e.container)
                  return t && (e.container.innerHTML = ""),
                    e.container.innerHTML = s.errorMsg.replace("%url%", e.src),
                    !0
              }
              , Kt = function(e, t, o) {
                if (e.src) {
                  t || (t = e.container.lastChild);
                  var n = o ? e.w : Math.round(e.w * e.fitRatio)
                    , i = o ? e.h : Math.round(e.h * e.fitRatio);
                  e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px",
                    e.placeholder.style.height = i + "px"),
                    t.style.width = n + "px",
                    t.style.height = i + "px"
                }
              }
              , Qt = function() {
                if (Yt.length) {
                  for (var e, t = 0; t < Yt.length; t++)
                    (e = Yt[t]).holder.index === e.index && Jt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                  Yt = []
                }
              }
            ;
            ye("Controller", {
              publicMethods: {
                lazyLoadItem: function(e) {
                  e = Ae(e);
                  var t = Ut(e);
                  t && (!t.loaded && !t.loading || y) && (Ce("gettingData", e, t),
                  t.src && Vt(t))
                },
                initController: function() {
                  i.extend(s, Ht, !0),
                    a.items = Rt = o,
                    Ut = a.getItemAt,
                    Pt = s.getNumItemsFn,
                    s.loop,
                  Pt() < 3 && (s.loop = !1),
                    Me("beforeChange", function(e) {
                      var t, o = s.preload, n = null === e || e >= 0, i = Math.min(o[0], Pt()), r = Math.min(o[1], Pt());
                      for (t = 1; t <= (n ? r : i); t++)
                        a.lazyLoadItem(u + t);
                      for (t = 1; t <= (n ? i : r); t++)
                        a.lazyLoadItem(u - t)
                    }),
                    Me("initialLayout", function() {
                      a.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(u)
                    }),
                    Me("mainScrollAnimComplete", Qt),
                    Me("initialZoomInEnd", Qt),
                    Me("destroy", function() {
                      for (var e, t = 0; t < Rt.length; t++)
                        (e = Rt[t]).container && (e.container = null ),
                        e.placeholder && (e.placeholder = null ),
                        e.img && (e.img = null ),
                        e.preloader && (e.preloader = null ),
                        e.loadError && (e.loaded = e.loadError = !1);
                      Yt = null
                    })
                },
                getItemAt: function(e) {
                  return e >= 0 && void 0 !== Rt[e] && Rt[e]
                },
                allowProgressiveImg: function() {
                  return s.forceProgressiveLoading || !E || s.mouseUsed || screen.width > 1200
                },
                setContent: function(e, t) {
                  s.loop && (t = Ae(t));
                  var o = a.getItemAt(e.index);
                  o && (o.container = null );
                  var n, r = a.getItemAt(t);
                  if (r) {
                    Ce("gettingData", t, r),
                      e.index = t,
                      e.item = r;
                    var p = r.container = i.createEl("pswp__zoom-wrap");
                    if (!r.src && r.html && (r.html.tagName ? p.appendChild(r.html) : p.innerHTML = r.html),
                        Wt(r),
                        Gt(r, me),
                      !r.src || r.loadError || r.loaded)
                      r.src && !r.loadError && ((n = i.createEl("pswp__img", "img")).style.opacity = 1,
                        n.src = r.src,
                        Kt(r, n),
                        Jt(0, r, p, n));
                    else {
                      if (r.loadComplete = function(o) {
                          if (l) {
                            if (e && e.index === t) {
                              if (Wt(o, !0))
                                return o.loadComplete = o.img = null ,
                                  Gt(o, me),
                                  Ee(o),
                                  void (e.index === u && a.updateCurrZoomItem());
                              o.imageAppended ? !Ot && o.placeholder && (o.placeholder.style.display = "none",
                                o.placeholder = null ) : O.transform && (ne || Ot) ? Yt.push({
                                item: o,
                                baseDiv: p,
                                img: o.img,
                                index: t,
                                holder: e,
                                clearPlaceholder: !0
                              }) : Jt(0, o, p, o.img, 0, !0)
                            }
                            o.loadComplete = null ,
                              o.img = null ,
                              Ce("imageLoadComplete", t, o)
                          }
                        }
                          ,
                          i.features.transform) {
                        var c = "pswp__img pswp__img--placeholder";
                        c += r.msrc ? "" : " pswp__img--placeholder--blank";
                        var d = i.createEl(c, r.msrc ? "img" : "");
                        r.msrc && (d.src = r.msrc),
                          Kt(r, d),
                          p.appendChild(d),
                          r.placeholder = d
                      }
                      r.loading || Vt(r),
                      a.allowProgressiveImg() && (!Ft && O.transform ? Yt.push({
                        item: r,
                        baseDiv: p,
                        img: r.img,
                        index: t,
                        holder: e
                      }) : Jt(0, r, p, r.img, 0, !0))
                    }
                    Ft || t !== u ? Ee(r) : (oe = p.style,
                      jt(r, n || r.img)),
                      e.el.innerHTML = "",
                      e.el.appendChild(p)
                  } else
                    e.el.innerHTML = ""
                },
                cleanSlide: function(e) {
                  e.img && (e.img.onload = e.img.onerror = null ),
                    e.loaded = e.loading = e.img = e.imageAppended = !1
                }
              }
            });
            var Xt, qt, $t = {}, eo = function(e, t, o) {
                var n = document.createEvent("CustomEvent")
                  , i = {
                  origEvent: e,
                  target: e.target,
                  releasePoint: t,
                  pointerType: o || "touch"
                };
                n.initCustomEvent("pswpTap", !0, !0, i),
                  e.target.dispatchEvent(n)
              }
            ;
            ye("Tap", {
              publicMethods: {
                initTap: function() {
                  Me("firstTouchStart", a.onTapStart),
                    Me("touchRelease", a.onTapRelease),
                    Me("destroy", function() {
                      $t = {},
                        Xt = null
                    })
                },
                onTapStart: function(e) {
                  e.length > 1 && (clearTimeout(Xt),
                    Xt = null )
                },
                onTapRelease: function(e, t) {
                  var o, n;
                  if (t && !K && !V && !Ve) {
                    var r = t;
                    if (Xt && (clearTimeout(Xt),
                        Xt = null ,
                        o = r,
                        n = $t,
                      Math.abs(o.x - n.x) < 25 && Math.abs(o.y - n.y) < 25))
                      return void Ce("doubleTap", r);
                    if ("mouse" === t.type)
                      return void eo(e, t, "mouse");
                    var a = e.target.tagName.toUpperCase();
                    if ("BUTTON" === a || i.hasClass(e.target, "pswp__single-tap"))
                      return void eo(e, t);
                    Ze($t, r),
                      Xt = setTimeout(function() {
                        eo(e, t),
                          Xt = null
                      }, 300)
                  }
                }
              }
            }),
              ye("DesktopZoom", {
                publicMethods: {
                  initDesktopZoom: function() {
                    R || (E ? Me("mouseUsed", function() {
                      a.setupDesktopZoom()
                    }) : a.setupDesktopZoom(!0))
                  },
                  setupDesktopZoom: function(t) {
                    qt = {};
                    var o = "wheel mousewheel DOMMouseScroll";
                    Me("bindEvents", function() {
                      i.bind(e, o, a.handleMouseWheel)
                    }),
                      Me("unbindEvents", function() {
                        qt && i.unbind(e, o, a.handleMouseWheel)
                      }),
                      a.mouseZoomedIn = !1;
                    var n, r = function() {
                        a.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"),
                          a.mouseZoomedIn = !1),
                          g < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"),
                          s()
                      }
                      , s = function() {
                        n && (i.removeClass(e, "pswp--dragging"),
                          n = !1)
                      }
                    ;
                    Me("resize", r),
                      Me("afterChange", r),
                      Me("pointerDown", function() {
                        a.mouseZoomedIn && (n = !0,
                          i.addClass(e, "pswp--dragging"))
                      }),
                      Me("pointerUp", s),
                    t || r()
                  },
                  handleMouseWheel: function(e) {
                    if (g <= a.currItem.fitRatio)
                      return s.modal && (!s.closeOnScroll || Ve || J ? e.preventDefault() : S && Math.abs(e.deltaY) > 2 && (c = !0,
                        a.close())),
                        !0;
                    if (e.stopPropagation(),
                        qt.x = 0,
                      "deltaX"in e)
                      1 === e.deltaMode ? (qt.x = 18 * e.deltaX,
                        qt.y = 18 * e.deltaY) : (qt.x = e.deltaX,
                        qt.y = e.deltaY);
                    else if ("wheelDelta"in e)
                      e.wheelDeltaX && (qt.x = -.16 * e.wheelDeltaX),
                        e.wheelDeltaY ? qt.y = -.16 * e.wheelDeltaY : qt.y = -.16 * e.wheelDelta;
                    else {
                      if (!("detail"in e))
                        return;
                      qt.y = e.detail
                    }
                    Ue(g, !0);
                    var t = de.x - qt.x
                      , o = de.y - qt.y;
                    (s.modal || t <= te.min.x && t >= te.max.x && o <= te.min.y && o >= te.max.y) && e.preventDefault(),
                      a.panTo(t, o)
                  },
                  toggleDesktopZoom: function(t) {
                    t = t || {
                      x: me.x / 2 + we.x,
                      y: me.y / 2 + we.y
                    };
                    var o = s.getDoubleTapZoom(!0, a.currItem)
                      , n = g === o;
                    a.mouseZoomedIn = !n,
                      a.zoomTo(n ? a.currItem.initialZoomLevel : o, t, 333),
                      i[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                  }
                }
              });
            var to, oo, no, io, ro, ao, so, lo, po, co, uo, mo, fo = {
                history: !0,
                galleryUID: 1
              }, wo = function() {
                return uo.hash.substring(1)
              }
              , ho = function() {
                to && clearTimeout(to),
                no && clearTimeout(no)
              }
              , go = function() {
                var e = wo()
                  , t = {};
                if (e.length < 5)
                  return t;
                var o, n = e.split("&");
                for (o = 0; o < n.length; o++)
                  if (n[o]) {
                    var i = n[o].split("=");
                    i.length < 2 || (t[i[0]] = i[1])
                  }
                if (s.galleryPIDs) {
                  var r = t.pid;
                  for (t.pid = 0,
                         o = 0; o < Rt.length; o++)
                    if (Rt[o].pid === r) {
                      t.pid = o;
                      break
                    }
                } else
                  t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0),
                  t
              }
              , bo = function e() {
                if (no && clearTimeout(no),
                  Ve || J)
                  no = setTimeout(e, 500);
                else {
                  io ? clearTimeout(oo) : io = !0;
                  var t = u + 1
                    , o = Ut(u);
                  o.hasOwnProperty("pid") && (t = o.pid);
                  var n = so + "&gid=" + s.galleryUID + "&pid=" + t;
                  lo || -1 === uo.hash.indexOf(n) && (co = !0);
                  var i = uo.href.split("#")[0] + "#" + n;
                  mo ? "#" + n !== window.location.hash && history[lo ? "replaceState" : "pushState"]("", document.title, i) : lo ? uo.replace(i) : uo.hash = n,
                    lo = !0,
                    oo = setTimeout(function() {
                      io = !1
                    }, 60)
                }
              }
            ;
            ye("History", {
              publicMethods: {
                initHistory: function() {
                  if (i.extend(s, fo, !0),
                      s.history) {
                    uo = window.location,
                      co = !1,
                      po = !1,
                      lo = !1,
                      so = wo(),
                      mo = "pushState"in history,
                    so.indexOf("gid=") > -1 && (so = (so = so.split("&gid=")[0]).split("?gid=")[0]),
                      Me("afterChange", a.updateURL),
                      Me("unbindEvents", function() {
                        i.unbind(window, "hashchange", a.onHashChange)
                      });
                    var e = function() {
                        ao = !0,
                        po || (co ? history.back() : so ? uo.hash = so : mo ? history.pushState("", document.title, uo.pathname + uo.search) : uo.hash = ""),
                          ho()
                      }
                    ;
                    Me("unbindEvents", function() {
                      c && e()
                    }),
                      Me("destroy", function() {
                        ao || e()
                      }),
                      Me("firstUpdate", function() {
                        u = go().pid
                      });
                    var t = so.indexOf("pid=");
                    t > -1 && "&" === (so = so.substring(0, t)).slice(-1) && (so = so.slice(0, -1)),
                      setTimeout(function() {
                        l && i.bind(window, "hashchange", a.onHashChange)
                      }, 40)
                  }
                },
                onHashChange: function() {
                  if (wo() === so)
                    return po = !0,
                      void a.close();
                  io || (ro = !0,
                    a.goTo(go().pid),
                    ro = !1)
                },
                updateURL: function() {
                  ho(),
                  ro || (lo ? to = setTimeout(bo, 800) : bo())
                }
              }
            }),
              i.extend(a, qe)
          }
        }
      ) ? n.call(t, o, t, e) : n) || (e.exports = i)
    }
    , function(e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, "default", function() {
          return w
        });
      var n = o(1)
        , i = o.n(n)
        , r = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !r)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var a = {}
        , s = r && (document.head || document.getElementsByTagName("head")[0])
        , l = null
        , p = 0
        , c = !1
        , u = function() {}
        , d = null
        , m = "data-vue-ssr-id"
        , f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function w(e, t, o, n) {
        c = o,
          d = n || {};
        var r = i()(e, t);
        return h(r),
          function(t) {
            for (var o = [], n = 0; n < r.length; n++) {
              var s = r[n];
              (l = a[s.id]).refs--,
                o.push(l)
            }
            t ? h(r = i()(e, t)) : r = [];
            for (n = 0; n < o.length; n++) {
              var l;
              if (0 === (l = o[n]).refs) {
                for (var p = 0; p < l.parts.length; p++)
                  l.parts[p]();
                delete a[l.id]
              }
            }
          }
      }
      function h(e) {
        for (var t = 0; t < e.length; t++) {
          var o = e[t]
            , n = a[o.id];
          if (n) {
            n.refs++;
            for (var i = 0; i < n.parts.length; i++)
              n.parts[i](o.parts[i]);
            for (; i < o.parts.length; i++)
              n.parts.push(b(o.parts[i]));
            n.parts.length > o.parts.length && (n.parts.length = o.parts.length)
          } else {
            var r = [];
            for (i = 0; i < o.parts.length; i++)
              r.push(b(o.parts[i]));
            a[o.id] = {
              id: o.id,
              refs: 1,
              parts: r
            }
          }
        }
      }
      function g() {
        var e = document.createElement("style");
        return e.type = "text/css",
          s.appendChild(e),
          e
      }
      function b(e) {
        var t, o, n = document.querySelector("style[" + m + '~="' + e.id + '"]');
        if (n) {
          if (c)
            return u;
          n.parentNode.removeChild(n)
        }
        if (f) {
          var i = p++;
          n = l || (l = g()),
            t = _.bind(null , n, i, !1),
            o = _.bind(null , n, i, !0)
        } else
          n = g(),
            t = function(e, t) {
              var o = t.css
                , n = t.media
                , i = t.sourceMap;
              n && e.setAttribute("media", n);
              d.ssrId && e.setAttribute(m, t.id);
              i && (o += "\n/*# sourceURL=" + i.sources[0] + " */",
                o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
              if (e.styleSheet)
                e.styleSheet.cssText = o;
              else {
                for (; e.firstChild; )
                  e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o))
              }
            }
              .bind(null , n),
            o = function() {
              n.parentNode.removeChild(n)
            }
          ;
        return t(e),
          function(n) {
            if (n) {
              if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap)
                return;
              t(e = n)
            } else
              o()
          }
      }
      var v, x = (v = [],
          function(e, t) {
            return v[e] = t,
              v.filter(Boolean).join("\n")
          }
      );
      function _(e, t, o, n) {
        var i = o ? "" : n.css;
        if (e.styleSheet)
          e.styleSheet.cssText = x(t, i);
        else {
          var r = document.createTextNode(i)
            , a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
        }
      }
    }
    , function(e, t) {
      e.exports = "data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs="
    }
    , function(e, t) {
      e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+"
    }
    , function(e, t) {
      e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg=="
    }
    , function(e, t, o) {
      "use strict";
      e.exports = function(e) {
        return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
          /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
      }
    }
    , function(e, t, o) {
      var n = o(9);
      (e.exports = o(0)(!1)).push([e.i, "/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp__button{width:44px;height:44px;position:relative;background:none;cursor:pointer;overflow:visible;-webkit-appearance:none;display:block;border:0;padding:0;margin:0;float:right;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;-webkit-box-shadow:none;box-shadow:none}.pswp__button:focus,.pswp__button:hover{opacity:1}.pswp__button:active{outline:none;opacity:.9}.pswp__button::-moz-focus-inner{padding:0;border:0}.pswp__ui--over-close .pswp__button--close{opacity:1}.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{background:url(" + n(o(8)) + ") 0 0 no-repeat;background-size:264px 88px;width:44px;height:44px}@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:1.1dppx),(min-resolution:105dpi){.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before{background-image:url(" + n(o(7)) + ')}.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right{background:none}}.pswp__button--close{background-position:0 -44px}.pswp__button--share{background-position:-44px -44px}.pswp__button--fs{display:none}.pswp--supports-fs .pswp__button--fs{display:block}.pswp--fs .pswp__button--fs{background-position:-44px 0}.pswp__button--zoom{display:none;background-position:-88px 0}.pswp--zoom-allowed .pswp__button--zoom{display:block}.pswp--zoomed-in .pswp__button--zoom{background-position:-132px 0}.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right{visibility:hidden}.pswp__button--arrow--left,.pswp__button--arrow--right{background:none;top:50%;margin-top:-50px;width:70px;height:100px;position:absolute}.pswp__button--arrow--left{left:0}.pswp__button--arrow--right{right:0}.pswp__button--arrow--left:before,.pswp__button--arrow--right:before{content:"";top:35px;background-color:rgba(0,0,0,.3);height:30px;width:32px;position:absolute}.pswp__button--arrow--left:before{left:6px;background-position:-138px -44px}.pswp__button--arrow--right:before{right:6px;background-position:-94px -44px}.pswp__counter,.pswp__share-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pswp__share-modal{display:block;background:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;padding:10px;position:absolute;z-index:1600;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;-webkit-backface-visibility:hidden;will-change:opacity}.pswp__share-modal--hidden{display:none}.pswp__share-tooltip{z-index:1620;position:absolute;background:#fff;top:56px;border-radius:2px;display:block;width:auto;right:44px;-webkit-box-shadow:0 2px 5px rgba(0,0,0,.25);box-shadow:0 2px 5px rgba(0,0,0,.25);-webkit-transform:translateY(6px);-ms-transform:translateY(6px);transform:translateY(6px);-webkit-transition:-webkit-transform .25s;transition:transform .25s;-webkit-backface-visibility:hidden;will-change:transform}.pswp__share-tooltip a{display:block;padding:8px 12px;font-size:14px;line-height:18px}.pswp__share-tooltip a,.pswp__share-tooltip a:hover{color:#000;text-decoration:none}.pswp__share-tooltip a:first-child{border-radius:2px 2px 0 0}.pswp__share-tooltip a:last-child{border-radius:0 0 2px 2px}.pswp__share-modal--fade-in{opacity:1}.pswp__share-modal--fade-in .pswp__share-tooltip{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.pswp--touch .pswp__share-tooltip a{padding:16px 12px}a.pswp__share--facebook:before{content:"";display:block;width:0;height:0;position:absolute;top:-12px;right:15px;border:6px solid transparent;border-bottom-color:#fff;-webkit-pointer-events:none;-moz-pointer-events:none;pointer-events:none}a.pswp__share--facebook:hover{background:#3e5c9a;color:#fff}a.pswp__share--facebook:hover:before{border-bottom-color:#3e5c9a}a.pswp__share--twitter:hover{background:#55acee;color:#fff}a.pswp__share--pinterest:hover{background:#ccc;color:#ce272d}a.pswp__share--download:hover{background:#ddd}.pswp__counter{position:absolute;left:0;top:0;height:44px;font-size:13px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.pswp__caption{position:absolute;left:0;bottom:0;width:100%;min-height:44px}.pswp__caption small{font-size:11px;color:#bbb}.pswp__caption__center{text-align:left;max-width:420px;margin:0 auto;font-size:13px;padding:10px;line-height:20px;color:#ccc}.pswp__caption--empty{display:none}.pswp__caption--fake{visibility:hidden}.pswp__preloader{width:44px;height:44px;position:absolute;top:0;left:50%;margin-left:-22px;opacity:0;-webkit-transition:opacity .25s ease-out;transition:opacity .25s ease-out;will-change:opacity;direction:ltr}.pswp__preloader__icn{width:20px;height:20px;margin:12px}.pswp__preloader--active{opacity:1}.pswp__preloader--active .pswp__preloader__icn{background:url(' + n(o(6)) + ") 0 0 no-repeat}.pswp--css_animation .pswp__preloader--active{opacity:1}.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn{-webkit-animation:clockwise .5s linear infinite;animation:clockwise .5s linear infinite}.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut{-webkit-animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite;animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite}.pswp--css_animation .pswp__preloader__icn{background:none;opacity:.75;width:14px;height:14px;position:absolute;left:15px;top:15px;margin:0}.pswp--css_animation .pswp__preloader__cut{position:relative;width:7px;height:14px;overflow:hidden}.pswp--css_animation .pswp__preloader__donut{-webkit-box-sizing:border-box;box-sizing:border-box;width:14px;height:14px;border:2px solid #fff;border-radius:50%;border-left-color:transparent;border-bottom-color:transparent;position:absolute;top:0;left:0;background:none;margin:0}@media screen and (max-width:1024px){.pswp__preloader{position:relative;left:auto;top:auto;margin:0;float:right}}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes donut-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}to{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes donut-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(-140deg);transform:rotate(-140deg)}to{-webkit-transform:rotate(0);transform:rotate(0)}}.pswp__ui{-webkit-font-smoothing:auto;visibility:visible;opacity:1;z-index:1550}.pswp__top-bar{position:absolute;left:0;top:0;height:44px;width:100%}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar{-webkit-backface-visibility:hidden;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right{visibility:visible}.pswp__caption,.pswp__top-bar{background-color:rgba(0,0,0,.5)}.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar{background-color:rgba(0,0,0,.3)}.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar{opacity:0}.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar{opacity:.001}.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter{display:none}.pswp__element--disabled{display:none!important}.pswp--minimal--dark .pswp__top-bar{background:none}", ""])
    }
    , function(e, t, o) {
      (e.exports = o(0)(!1)).push([e.i, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */.pswp{display:none;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;-ms-touch-action:none;touch-action:none;z-index:1500;-webkit-text-size-adjust:100%;-webkit-backface-visibility:hidden;outline:none}.pswp *{-webkit-box-sizing:border-box;box-sizing:border-box}.pswp img{max-width:none}.pswp--animate_opacity{opacity:.001;will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--open{display:block}.pswp--zoom-allowed .pswp__img{cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in}.pswp--zoomed-in .pswp__img{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.pswp--dragging .pswp__img{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.pswp__bg{background:#000;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden}.pswp__bg,.pswp__scroll-wrap{position:absolute;left:0;top:0;width:100%;height:100%}.pswp__scroll-wrap{overflow:hidden}.pswp__container,.pswp__zoom-wrap{-ms-touch-action:none;touch-action:none;position:absolute;left:0;right:0;top:0;bottom:0}.pswp__container,.pswp__img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.pswp__zoom-wrap{position:absolute;width:100%;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);transition:transform 333ms cubic-bezier(.4,0,.22,1)}.pswp__bg{will-change:opacity;-webkit-transition:opacity 333ms cubic-bezier(.4,0,.22,1);transition:opacity 333ms cubic-bezier(.4,0,.22,1)}.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap{-webkit-transition:none;transition:none}.pswp__container,.pswp__zoom-wrap{-webkit-backface-visibility:hidden}.pswp__item{right:0;bottom:0;overflow:hidden}.pswp__img,.pswp__item{position:absolute;left:0;top:0}.pswp__img{width:auto;height:auto}.pswp__img--placeholder{-webkit-backface-visibility:hidden}.pswp__img--placeholder--blank{background:#222}.pswp--ie .pswp__img{width:100%!important;height:auto!important;left:0;top:0}.pswp__error-msg{position:absolute;left:0;top:50%;width:100%;text-align:center;font-size:14px;line-height:16px;margin-top:-8px;color:#ccc}.pswp__error-msg a{color:#ccc;text-decoration:underline}", ""])
    }
    , function(e, t, o) {
      (t = e.exports = o(0)(!1)).i(o(11), ""),
        t.i(o(10), ""),
        t.push([e.i, "", ""])
    }
    , function(e, t, o) {
      var n = o(12);
      "string" == typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
      (0,
        o(5).default)("78c92df4", n, !0, {})
    }
    , function(e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
        }
        return e
      }
        , i = s(o(2))
        , r = s(o(4))
        , a = s(o(3));
      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var l = {
        install: function(e, t) {

          /*针对计算图片大小*/
          e.directive('math-size', {
            bind:function(el, binding) {
              el.onload = function(){
                binding.value.w = this.offsetWidth;
                binding.value.h = this.offsetHeight;
              };
            }
          });

          e.component("VuePreview", {
            mixins: [i.default],
            props: {
              slides: Array
            },
            methods: {
              initPhotoSwipeFromDOM: function(e) {
                var vm = this;
                for (var o = this, i = function(e) {
                  if(vm.$listeners['open']){
                    vm.$emit('open');
                  }
                  (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
                  var t = function e(t, o) {
                    return t && (o(t) ? t : e(t.parentNode, o))
                  }(e.target || e.srcElement, function(e) {
                    return e.tagName && "FIGURE" === e.tagName.toUpperCase()
                  });
                  if (t) {
                    for (var o = t.parentNode, n = t.parentNode.childNodes, i = n.length, r = 0, a = void 0, l = 0; l < i; l++)
                      if (1 === n[l].nodeType) {
                        if (n[l] === t) {
                          a = r;
                          break
                        }
                        r++
                      }
                    return a >= 0 && s(a, o),
                      !1
                  }
                }
                       , s = function(e, i, s, l) {
                    var p = document.querySelectorAll(".pswp")[0]
                      , c = void 0
                      , u = void 0
                      , d = void 0;
                    if (d = function(e) {
                        for (var t = e.childNodes, o = t.length, n = [], i = void 0, r = void 0, a = void 0, s = void 0, l = 0; l < o; l++)
                          1 === (i = t[l]).nodeType && (a = (r = i.children[0]).getAttribute("data-size").split("x"),
                            s = {
                              src: r.getAttribute("href"),
                              w: parseInt(a[0], 10),
                              h: parseInt(a[1], 10)
                            },
                          i.children.length > 1 && (s.title = i.children[1].innerHTML),
                          r.children.length > 0 && (s.msrc = r.children[0].getAttribute("src")),
                            s.el = i,
                            n.push(s));
                        return n
                      }(i),
                        u = n({
                          galleryUID: i.getAttribute("data-pswp-uid"),
                          getThumbBoundsFn: function(e) {
                            var t = d[e].el.getElementsByTagName("img")[0]
                              , o = window.pageYOffset || document.documentElement.scrollTop
                              , n = t.getBoundingClientRect();
                            return {
                              x: n.left,
                              y: n.top + o,
                              w: n.width
                            }
                          }
                        }, t),
                        l)
                      if (u.galleryPIDs) {
                        for (var m = 0; m < d.length; m++)
                          if (d[m].pid === e) {
                            u.index = m;
                            break
                          }
                      } else
                        u.index = parseInt(e, 10) - 1;
                    else
                      u.index = parseInt(e, 10);
                    isNaN(u.index) || (s && (u.showAnimationDuration = 0),
                      (c = new r.default(p,a.default,d,u)).init(),
                      c.listen("close", function() {
                        o.$emit("close")
                      }))
                  }
                       , l = document.querySelectorAll(e), p = 0, c = l.length; p < c; p++)
                  l[p].setAttribute("data-pswp-uid", p + 1),
                    l[p].onclick = i;
                var u = function() {
                  var e = window.location.hash.substring(1)
                    , t = {};
                  if (e.length < 5)
                    return t;
                  for (var o = e.split("&"), n = 0; n < o.length; n++)
                    if (o[n]) {
                      var i = o[n].split("=");
                      i.length < 2 || (t[i[0]] = i[1])
                    }
                  return t.gid && (t.gid = parseInt(t.gid, 10)),
                    t
                }();
                u.pid && u.gid && s(u.pid, l[u.gid - 1], !0, !0)
              }
            },
            mounted: function() {
              this.initPhotoSwipeFromDOM(".my-gallery")
            }
          });
        }
      };
      "undefined" != typeof window && window.Vue && window.Vue.use(l),
        t.default = l
    }
  ])
});
