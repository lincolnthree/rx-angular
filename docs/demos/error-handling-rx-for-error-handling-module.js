(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-handling-rx-for-error-handling-module"],{

/***/ "IG3x":
/*!******************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/template/rx-for/error-handling/error-handling-child.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ErrorHandlingChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingChildComponent", function() { return ErrorHandlingChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ErrorHandlingChildComponent {
    constructor(el) {
        this.el = el;
        this.removed = false;
    }
    set index(index) {
        console.log(index);
        this._index = index;
        /* if (index > 20) {
           throw new Error('erororororo');
         }*/
    }
    ngOnInit() { }
    ngDoCheck() {
        if (this._index % 2 !== 0 && !this.removed && this.el.nativeElement.parentElement) {
            this.el.nativeElement.parentElement.removeChild(this.el.nativeElement);
            this.removed = true;
        }
    }
}
ErrorHandlingChildComponent.ɵfac = function ErrorHandlingChildComponent_Factory(t) { return new (t || ErrorHandlingChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ErrorHandlingChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorHandlingChildComponent, selectors: [["rxa-error-handling-child"]], inputs: { index: "index" }, ngContentSelectors: _c0, decls: 2, vars: 1, template: function ErrorHandlingChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._index);
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ "VmW+":
/*!****************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/template/rx-for/error-handling/rx-for-error-handling.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: RxForErrorHandlingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxForErrorHandlingModule", function() { return RxForErrorHandlingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rx_angular_pocs_template_directives_for_rx_for_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../rx-angular-pocs/template/directives/for/rx-for.module */ "v1iz");
/* harmony import */ var _shared_debug_helper_strategy_select_strategy_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/strategy-select/strategy-select.module */ "9oZ2");
/* harmony import */ var _shared_debug_helper_value_provider_value_providers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-providers.module */ "aUMF");
/* harmony import */ var _error_handling_parent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handling-parent.component */ "nVIf");
/* harmony import */ var _error_handling_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-handling-child.component */ "IG3x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class RxForErrorHandlingModule {
}
RxForErrorHandlingModule.ɵfac = function RxForErrorHandlingModule_Factory(t) { return new (t || RxForErrorHandlingModule)(); };
RxForErrorHandlingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RxForErrorHandlingModule });
RxForErrorHandlingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _rx_angular_pocs_template_directives_for_rx_for_module__WEBPACK_IMPORTED_MODULE_2__["RxForModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _error_handling_parent_component__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingParentComponent"],
                },
            ]),
            _shared_debug_helper_value_provider_value_providers_module__WEBPACK_IMPORTED_MODULE_4__["ValueProvidersModule"],
            _shared_debug_helper_strategy_select_strategy_select_module__WEBPACK_IMPORTED_MODULE_3__["StrategySelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RxForErrorHandlingModule, { declarations: [_error_handling_parent_component__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingParentComponent"], _error_handling_child_component__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _rx_angular_pocs_template_directives_for_rx_for_module__WEBPACK_IMPORTED_MODULE_2__["RxForModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_debug_helper_value_provider_value_providers_module__WEBPACK_IMPORTED_MODULE_4__["ValueProvidersModule"],
        _shared_debug_helper_strategy_select_strategy_select_module__WEBPACK_IMPORTED_MODULE_3__["StrategySelectModule"]] }); })();


/***/ }),

/***/ "nVIf":
/*!*******************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/template/rx-for/error-handling/error-handling-parent.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ErrorHandlingParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingParentComponent", function() { return ErrorHandlingParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/array-provider/array-provider.component */ "vvYH");
/* harmony import */ var _rx_angular_pocs_template_directives_for_rx_for_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../rx-angular-pocs/template/directives/for/rx-for.directive */ "LriG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_handling_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handling-child.component */ "IG3x");





function ErrorHandlingParentComponent_rxa_error_handling_child_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-error-handling-child", 9);
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r4);
} }
function ErrorHandlingParentComponent_rxa_error_handling_child_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-error-handling-child", 9);
} if (rf & 2) {
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r6);
} }
const _c0 = function () { return []; };
class ErrorHandlingParentComponent {
    constructor() {
        this.trackItem = (i, item) => item.id;
    }
}
ErrorHandlingParentComponent.ɵfac = function ErrorHandlingParentComponent_Factory(t) { return new (t || ErrorHandlingParentComponent)(); };
ErrorHandlingParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorHandlingParentComponent, selectors: [["rxa-error-handling-parent"]], decls: 16, vars: 9, consts: [[1, "container", "pt-5"], [1, "d-flex"], [3, "unpatched", "buttons"], ["arrayP", "rxaArrayProvider"], [1, "d-flex", "justify-content-between"], [1, "mat-subheading-1"], [1, "d-flex", "flex-wrap"], [3, "index", 4, "rxFor", "rxForOf", "rxForTrackBy"], [3, "index", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "index"]], template: function ErrorHandlingParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rxa-array-provider", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*rxFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ErrorHandlingParentComponent_rxa_error_handling_child_9_Template, 1, 1, "rxa-error-handling-child", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ErrorHandlingParentComponent_rxa_error_handling_child_14_Template, 1, 1, "rxa-error-handling-child", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatched", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("buttons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxForOf", _r0.array$)("rxForTrackBy", ctx.trackItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, _r0.array$))("ngForTrackBy", ctx.trackItem);
    } }, directives: [_shared_debug_helper_value_provider_array_provider_array_provider_component__WEBPACK_IMPORTED_MODULE_1__["ArrayProviderComponent"], _rx_angular_pocs_template_directives_for_rx_for_directive__WEBPACK_IMPORTED_MODULE_2__["RxFor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _error_handling_child_component__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingChildComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=error-handling-rx-for-error-handling-module.js.map