"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Product.tsx":
/*!************************************!*\
  !*** ./src/components/Product.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_stateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/stateContext */ \"./src/context/stateContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Product = (product)=>{\n    _s();\n    const { decQty , incQty , qty , onAdd , setShowCart  } = (0,_context_stateContext__WEBPACK_IMPORTED_MODULE_5__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if we're running on the client\n        if (true) {\n            // Update the state with the window width\n            setWindowWidth(window.innerWidth);\n            // Set up an event listener to update the state when the window is resized\n            const handleResize = ()=>setWindowWidth(window.innerWidth);\n            window.addEventListener(\"resize\", handleResize);\n            // Clean up the event listener when the component is unmounted\n            return ()=>window.removeEventListener(\"resize\", handleResize);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/clothes/\".concat(slug === null || slug === void 0 ? void 0 : slug.current),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"product-card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"product-name\",\n                    style: {\n                        paddingBottom: \"4px\",\n                        textAlign: \"center\"\n                    },\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image && image[0]).url(),\n                    alt: \"product_image\",\n                    width: 250,\n                    height: 250,\n                    className: \"product-image\",\n                    style: {\n                        width: router.pathname === \"/all-clothes\" && windowWidth < 557 ? \"160px\" : \"\",\n                        height: router.pathname === \"/all-clothes\" && windowWidth < 557 ? \"160px\" : \"\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        padding: \"0px 10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"product-price\",\n                            style: {\n                                color: \"#f02d34\",\n                                // justifyContent: !oldPrice ? \"center\" : \"\",\n                                textAlign: !oldPrice ? \"center\" : \"left\"\n                            },\n                            children: [\n                                price,\n                                \" ₾\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        oldPrice && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"product-price\",\n                            style: {\n                                textDecoration: \"line-through\",\n                                color: \"hsl(0, 0%, 63%)\",\n                                textAlign: \"right\",\n                                marginTop: \"-20px\"\n                            },\n                            children: [\n                                oldPrice,\n                                \" ₾\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        marginTop: oldPrice && \"1px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-primary\",\n                            style: {\n                                marginTop: \"10px\",\n                                marginRight: \"5px\"\n                            },\n                            children: \"დეტალურად\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>onAdd(product, qty),\n                            className: \"btn-secondary\",\n                            style: {\n                                marginTop: \"10px\"\n                            },\n                            children: \"დამატება\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"goGxsADH347bAr80TpzxekLGCmI=\", false, function() {\n    return [\n        _context_stateContext__WEBPACK_IMPORTED_MODULE_5__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ2E7QUFDRjtBQUNpQjtBQUV6RCxNQUFNTyxVQUFVLENBQUNDLFVBQWlCOztJQUNoQyxNQUFNLEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFQyxJQUFHLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFLEdBQVFQLHNFQUFlQTtJQUN4RSxNQUFNUSxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsdUNBQXVDO1FBQ3ZDLElBQUksSUFBNkIsRUFBRTtZQUNqQyx5Q0FBeUM7WUFDekNjLGVBQWVDLE9BQU9DLFVBQVU7WUFFaEMsMEVBQTBFO1lBQzFFLE1BQU1DLGVBQWUsSUFBTUgsZUFBZUMsT0FBT0MsVUFBVTtZQUMzREQsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUQ7WUFFbEMsOERBQThEO1lBQzlELE9BQU8sSUFBTUYsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUY7UUFDcEQsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDaEIsa0RBQUlBO1FBQUNtQixNQUFNLFlBQTBCLE9BQWRDLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUMsT0FBTztrQkFDbkMsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFDQ0QsV0FBVTtvQkFDVkUsT0FBTzt3QkFBRUMsZUFBZTt3QkFBT0MsV0FBVztvQkFBUzs4QkFFbERDOzs7Ozs7OEJBRUgsOERBQUNDO29CQUNDQyxLQUFLN0IsbURBQU1BLENBQUM4QixTQUFTQSxLQUFLLENBQUMsRUFBRSxFQUFFQyxHQUFHO29CQUNsQ0MsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUlosV0FBWTtvQkFDWkUsT0FBTzt3QkFDTFMsT0FDRXZCLE9BQU95QixRQUFRLEtBQUssa0JBQWtCeEIsY0FBYyxNQUNoRCxVQUNBLEVBQUU7d0JBQ1J1QixRQUNFeEIsT0FBT3lCLFFBQVEsS0FBSyxrQkFBa0J4QixjQUFjLE1BQ2hELFVBQ0EsRUFBRTtvQkFDVjs7Ozs7OzhCQUVGLDhEQUFDVTtvQkFBSUcsT0FBTzt3QkFBRVksU0FBUztvQkFBVzs7c0NBQ2hDLDhEQUFDYjs0QkFDQ0QsV0FBVTs0QkFDVkUsT0FBTztnQ0FDTGEsT0FBTztnQ0FDUCw2Q0FBNkM7Z0NBQzdDWCxXQUFXLENBQUNZLFdBQVcsV0FBVyxNQUFNOzRCQUMxQzs7Z0NBR0NDO2dDQUFNOzs7Ozs7O3dCQUVSRCwwQkFDQyw4REFBQ2Y7NEJBQ0NELFdBQVU7NEJBQ1ZFLE9BQU87Z0NBQ0xnQixnQkFBZ0I7Z0NBQ2hCSCxPQUFPO2dDQUNQWCxXQUFXO2dDQUNYZSxXQUFXOzRCQUNiOztnQ0FFQ0g7Z0NBQVM7Ozs7Ozs7Ozs7Ozs7OEJBSWhCLDhEQUFDakI7b0JBQ0NHLE9BQU87d0JBQ0xrQixTQUFTO3dCQUNUQyxnQkFBZ0I7d0JBQ2hCRixXQUFXSCxZQUFZO29CQUN6Qjs7c0NBRUEsOERBQUNNOzRCQUNDdEIsV0FBVTs0QkFDVkUsT0FBTztnQ0FBRWlCLFdBQVc7Z0NBQVFJLGFBQWE7NEJBQU07c0NBQ2hEOzs7Ozs7c0NBR0QsOERBQUNEOzRCQUNDRSxTQUFTLElBQU10QyxNQUFNSixTQUFTRzs0QkFDOUJlLFdBQVU7NEJBQ1ZFLE9BQU87Z0NBQUVpQixXQUFXOzRCQUFPO3NDQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWhHTXRDOztRQUNxREQsa0VBQWVBO1FBQ3pERCxrREFBU0E7OztLQUZwQkU7QUFrR04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC50c3g/NmRkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9zdGF0ZUNvbnRleHRcIjtcblxuY29uc3QgUHJvZHVjdCA9IChwcm9kdWN0OiBhbnkpID0+IHtcbiAgY29uc3QgeyBkZWNRdHksIGluY1F0eSwgcXR5LCBvbkFkZCwgc2V0U2hvd0NhcnQgfTogYW55ID0gdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgcnVubmluZyBvbiB0aGUgY2xpZW50XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCB0aGUgd2luZG93IHdpZHRoXG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbiAgICAgIC8vIFNldCB1cCBhbiBldmVudCBsaXN0ZW5lciB0byB1cGRhdGUgdGhlIHN0YXRlIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtgL2Nsb3RoZXMvJHtzbHVnPy5jdXJyZW50fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIj5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiNHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlICYmIGltYWdlWzBdKS51cmwoKX1cbiAgICAgICAgICBhbHQ9XCJwcm9kdWN0X2ltYWdlXCJcbiAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtaW1hZ2VgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hbGwtY2xvdGhlc1wiICYmIHdpbmRvd1dpZHRoIDwgNTU3XG4gICAgICAgICAgICAgICAgPyBcIjE2MHB4XCJcbiAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWxsLWNsb3RoZXNcIiAmJiB3aW5kb3dXaWR0aCA8IDU1N1xuICAgICAgICAgICAgICAgID8gXCIxNjBweFwiXG4gICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwcHggMTBweFwiIH19PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmMDJkMzRcIixcbiAgICAgICAgICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICFvbGRQcmljZSA/IFwiY2VudGVyXCIgOiBcIlwiLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICFvbGRQcmljZSA/IFwiY2VudGVyXCIgOiBcImxlZnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvLyBzdHlsZT17eyB0ZXh0QWxpZ246IG9sZFByaWNlICYmIFwicmlnaHRcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcmljZX0g4oK+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtvbGRQcmljZSAmJiAoXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJoc2woMCwgMCUsIDYzJSlcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTIwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29sZFByaWNlfSDigr5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBvbGRQcmljZSAmJiBcIjFweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOGDk+GDlOGDouGDkOGDmuGDo+GDoOGDkOGDk1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkKHByb2R1Y3QsIHF0eSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDhg5Phg5Dhg5vhg5Dhg6Lhg5Thg5Hhg5BcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXJsRm9yIiwidXNlUm91dGVyIiwidXNlU3RhdGVDb250ZXh0IiwiUHJvZHVjdCIsInByb2R1Y3QiLCJkZWNRdHkiLCJpbmNRdHkiLCJxdHkiLCJvbkFkZCIsInNldFNob3dDYXJ0Iiwicm91dGVyIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhyZWYiLCJzbHVnIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0QWxpZ24iLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInBhdGhuYW1lIiwicGFkZGluZyIsImNvbG9yIiwib2xkUHJpY2UiLCJwcmljZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Product.tsx\n"));

/***/ })

});