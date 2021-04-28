(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exception-handling-rx-let-exception-handling-module"],{

/***/ "BRYN":
/*!************************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/template/rx-let/exception-handling/rx-let-exception-handling.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: RxLetExceptionHandlingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxLetExceptionHandlingModule", function() { return RxLetExceptionHandlingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rx-angular/template */ "WFkj");
/* harmony import */ var _shared_debug_helper_strategy_select_strategy_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/debug-helper/strategy-select/strategy-select.module */ "9oZ2");
/* harmony import */ var _shared_debug_helper_value_provider_value_providers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-providers.module */ "aUMF");
/* harmony import */ var _error_handling_parent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handling-parent.component */ "vBv5");
/* harmony import */ var _error_handling_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-handling-child.component */ "q97m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class RxLetExceptionHandlingModule {
}
RxLetExceptionHandlingModule.ɵfac = function RxLetExceptionHandlingModule_Factory(t) { return new (t || RxLetExceptionHandlingModule)(); };
RxLetExceptionHandlingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RxLetExceptionHandlingModule });
RxLetExceptionHandlingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["LetModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _error_handling_parent_component__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingParentComponent"],
                },
            ]),
            _shared_debug_helper_value_provider_value_providers_module__WEBPACK_IMPORTED_MODULE_4__["ValueProvidersModule"],
            _shared_debug_helper_strategy_select_strategy_select_module__WEBPACK_IMPORTED_MODULE_3__["StrategySelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RxLetExceptionHandlingModule, { declarations: [_error_handling_parent_component__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingParentComponent"], _error_handling_child_component__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingChildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _rx_angular_template__WEBPACK_IMPORTED_MODULE_2__["LetModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_debug_helper_value_provider_value_providers_module__WEBPACK_IMPORTED_MODULE_4__["ValueProvidersModule"],
        _shared_debug_helper_strategy_select_strategy_select_module__WEBPACK_IMPORTED_MODULE_3__["StrategySelectModule"]] }); })();


/***/ }),

/***/ "q97m":
/*!**********************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/template/rx-let/exception-handling/error-handling-child.component.ts ***!
  \**********************************************************************************************************/
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
        if (index > 5) {
            throw new Error('erororororo');
        }
    }
    ngOnInit() { }
    ngDoCheck() {
        /*if (this._index %2 !== 0 && !this.removed && this.el.nativeElement.parentElement) {
          this.el.nativeElement.parentElement.removeChild(this.el.nativeElement);
          this.removed = true;
        }*/
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

/***/ "vBv5":
/*!***********************************************************************************************************!*\
  !*** ./apps/demos/src/app/features/template/rx-let/exception-handling/error-handling-parent.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ErrorHandlingParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingParentComponent", function() { return ErrorHandlingParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/debug-helper/value-provider/value-provider/value-provider.component */ "eHQV");
/* harmony import */ var _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../libs/template/src/lib/let/let.directive */ "cihl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _error_handling_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handling-child.component */ "q97m");





function ErrorHandlingParentComponent_rxa_error_handling_child_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-error-handling-child", 9);
} if (rf & 2) {
    const v_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", v_r3);
} }
function ErrorHandlingParentComponent_rxa_error_handling_child_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rxa-error-handling-child", 9);
} if (rf & 2) {
    const v_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", v_r4);
} }
const _c0 = function () { return []; };
class ErrorHandlingParentComponent {
}
ErrorHandlingParentComponent.ɵfac = function ErrorHandlingParentComponent_Factory(t) { return new (t || ErrorHandlingParentComponent)(); };
ErrorHandlingParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorHandlingParentComponent, selectors: [["rxa-error-handling-parent"]], decls: 16, vars: 7, consts: [[1, "container", "pt-5"], [1, "d-flex"], [3, "unpatched", "buttons"], ["valueProvider", "rxaValueProvider"], [1, "d-flex", "justify-content-between"], [1, "mat-subheading-1"], [1, "d-flex", "flex-wrap"], [3, "index", 4, "rxLet"], [3, "index", 4, "ngIf"], [3, "index"]], template: function ErrorHandlingParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rxa-value-provider", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*rxLet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ErrorHandlingParentComponent_rxa_error_handling_child_9_Template, 1, 1, "rxa-error-handling-child", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "async pipe");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unpatched", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("buttons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rxLet", _r0.int$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 4, _r0.int$));
    } }, directives: [_shared_debug_helper_value_provider_value_provider_value_provider_component__WEBPACK_IMPORTED_MODULE_1__["ValueProviderComponent"], _libs_template_src_lib_let_let_directive__WEBPACK_IMPORTED_MODULE_2__["LetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _error_handling_child_component__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingChildComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=exception-handling-rx-let-exception-handling-module.js.map