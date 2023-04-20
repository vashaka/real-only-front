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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_stateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/stateContext */ \"./src/context/stateContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Product = (param)=>{\n    let { product: { image , name , slug , price , oldPrice , _id  } , product  } = param;\n    _s();\n    const { decQty , incQty , qty , onAdd , setShowCart , cartItems  } = (0,_context_stateContext__WEBPACK_IMPORTED_MODULE_5__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const itemIsAllreadyAdded = cartItems.find((productInCart)=>product._id === productInCart._id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if we're running on the client\n        if (true) {\n            // Update the state with the window width\n            setWindowWidth(window.innerWidth);\n            // Set up an event listener to update the state when the window is resized\n            const handleResize = ()=>setWindowWidth(window.innerWidth);\n            window.addEventListener(\"resize\", handleResize);\n            // Clean up the event listener when the component is unmounted\n            return ()=>window.removeEventListener(\"resize\", handleResize);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"product-card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"product-name\",\n                style: {\n                    paddingBottom: \"4px\",\n                    textAlign: \"center\"\n                },\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/clothes/\".concat(slug === null || slug === void 0 ? void 0 : slug.current),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image && image[0]).url(),\n                    alt: \"product_image\",\n                    // width={250}\n                    // height={250}\n                    className: \"product-image\",\n                    style: {\n                        width: router.pathname === \"/all-clothes\" && windowWidth < 557 ? \"160px\" : \"\",\n                        height: router.pathname === \"/all-clothes\" && windowWidth < 557 ? \"160px\" : \"\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0px 10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"product-price\",\n                        style: {\n                            color: \"#f02d34\",\n                            // justifyContent: !oldPrice ? \"center\" : \"\",\n                            textAlign: !oldPrice ? \"center\" : \"left\"\n                        },\n                        children: [\n                            price,\n                            \" ₾\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    oldPrice && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"product-price\",\n                        style: {\n                            textDecoration: \"line-through\",\n                            color: \"hsl(0, 0%, 63%)\",\n                            textAlign: \"right\",\n                            marginTop: \"-20px\"\n                        },\n                        children: [\n                            oldPrice,\n                            \" ₾\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: oldPrice && \"1px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/clothes/\".concat(slug === null || slug === void 0 ? void 0 : slug.current),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-primary\",\n                            style: {\n                                marginTop: \"10px\",\n                                marginRight: \"5px\"\n                            },\n                            children: \"დეტალურად\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    itemIsAllreadyAdded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flex: 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>onAdd(product, qty),\n                            className: \"btn-secondary\",\n                            style: {\n                                marginTop: \"10px\"\n                            },\n                            children: \"დამატებულია\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onAdd(product, qty),\n                        className: \"btn-secondary\",\n                        style: {\n                            marginTop: \"10px\"\n                        },\n                        children: \"დამატება\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dadu/Desktop/ELITE-SHOP(front)/src/components/Product.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Product, \"W7Rt1qoE46oFkLxmftC58K6hqok=\", false, function() {\n    return [\n        _context_stateContext__WEBPACK_IMPORTED_MODULE_5__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTOzRCQUFRSSxNQUFNO3dCQUFFO2tDQUNyQyw0RUFBQ0Y7NEJBQ0NHLFNBQVMsSUFBTXRDLE1BQU1WLFNBQVNTOzRCQUM5QmdCLFdBQVU7NEJBQ1ZFLE9BQU87Z0NBQUVlLFdBQVc7NEJBQU87c0NBQzVCOzs7Ozs7Ozs7O2tEQUtILDhEQUFDRzt3QkFDQ0csU0FBUyxJQUFNdEMsTUFBTVYsU0FBU1M7d0JBQzlCZ0IsV0FBVTt3QkFDVkUsT0FBTzs0QkFBRWUsV0FBVzt3QkFBTztrQ0FDNUI7Ozs7O2lDQUdGOzs7Ozs7Ozs7Ozs7O0FBSVQ7R0F0SE0zQzs7UUFLRkQsa0VBQWVBO1FBQ0ZELGtEQUFTQTs7O0tBTnBCRTtBQXdITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnRzeD82ZGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L3N0YXRlQ29udGV4dFwiO1xuXG5jb25zdCBQcm9kdWN0ID0gKHtcbiAgcHJvZHVjdDogeyBpbWFnZSwgbmFtZSwgc2x1ZywgcHJpY2UsIG9sZFByaWNlLCBfaWQgfSxcbiAgcHJvZHVjdCxcbn06IGFueSkgPT4ge1xuICBjb25zdCB7IGRlY1F0eSwgaW5jUXR5LCBxdHksIG9uQWRkLCBzZXRTaG93Q2FydCwgY2FydEl0ZW1zIH06IGFueSA9XG4gICAgdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGl0ZW1Jc0FsbHJlYWR5QWRkZWQgPSBjYXJ0SXRlbXMuZmluZChcbiAgICAocHJvZHVjdEluQ2FydDogYW55KSA9PiBwcm9kdWN0Ll9pZCA9PT0gcHJvZHVjdEluQ2FydC5faWRcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHdlJ3JlIHJ1bm5pbmcgb24gdGhlIGNsaWVudFxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggdGhlIHdpbmRvdyB3aWR0aFxuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXG4gICAgICAvLyBTZXQgdXAgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdXBkYXRlIHRoZSBzdGF0ZSB3aGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZFxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4gc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIj5cbiAgICAgIDxwXG4gICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiNHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvY2xvdGhlcy8ke3NsdWc/LmN1cnJlbnR9YH0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZSAmJiBpbWFnZVswXSkudXJsKCl9XG4gICAgICAgICAgYWx0PVwicHJvZHVjdF9pbWFnZVwiXG4gICAgICAgICAgLy8gd2lkdGg9ezI1MH1cbiAgICAgICAgICAvLyBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWltYWdlYH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6XG4gICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYWxsLWNsb3RoZXNcIiAmJiB3aW5kb3dXaWR0aCA8IDU1N1xuICAgICAgICAgICAgICAgID8gXCIxNjBweFwiXG4gICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2FsbC1jbG90aGVzXCIgJiYgd2luZG93V2lkdGggPCA1NTdcbiAgICAgICAgICAgICAgICA/IFwiMTYwcHhcIlxuICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweCAxMHB4XCIgfX0+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmMDJkMzRcIixcbiAgICAgICAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAhb2xkUHJpY2UgPyBcImNlbnRlclwiIDogXCJcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogIW9sZFByaWNlID8gXCJjZW50ZXJcIiA6IFwibGVmdFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgdGV4dEFsaWduOiBvbGRQcmljZSAmJiBcInJpZ2h0XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcmljZX0g4oK+XG4gICAgICAgIDwvcD5cbiAgICAgICAge29sZFByaWNlICYmIChcbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiaHNsKDAsIDAlLCA2MyUpXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29sZFByaWNlfSDigr5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IG9sZFByaWNlICYmIFwiMXB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2xvdGhlcy8ke3NsdWc/LmN1cnJlbnR9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDhg5Phg5Thg6Lhg5Dhg5rhg6Phg6Dhg5Dhg5NcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7aXRlbUlzQWxscmVhZHlBZGRlZCA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4OiAxIH19PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZChwcm9kdWN0LCBxdHkpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDhg5Phg5Dhg5vhg5Dhg6Lhg5Thg5Hhg6Phg5rhg5jhg5BcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkKHByb2R1Y3QsIHF0eSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDhg5Phg5Dhg5vhg5Dhg6Lhg5Thg5Hhg5BcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVybEZvciIsInVzZVJvdXRlciIsInVzZVN0YXRlQ29udGV4dCIsIlByb2R1Y3QiLCJwcm9kdWN0IiwiaW1hZ2UiLCJuYW1lIiwic2x1ZyIsInByaWNlIiwib2xkUHJpY2UiLCJfaWQiLCJkZWNRdHkiLCJpbmNRdHkiLCJxdHkiLCJvbkFkZCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwicm91dGVyIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsIml0ZW1Jc0FsbHJlYWR5QWRkZWQiLCJmaW5kIiwicHJvZHVjdEluQ2FydCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0QWxpZ24iLCJocmVmIiwiY3VycmVudCIsImltZyIsInNyYyIsInVybCIsImFsdCIsIndpZHRoIiwicGF0aG5hbWUiLCJoZWlnaHQiLCJwYWRkaW5nIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiZmxleCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.tsx\n"));

/***/ })

});