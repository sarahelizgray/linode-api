"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var ramda_1 = require("ramda");
var invariant_1 = require("invariant");
var request_1 = require("./request");
var ConfigLenses = {
    url: ramda_1.lensPath(['url']),
    method: ramda_1.lensPath(['method']),
    headers: ramda_1.lensPath(['headers']),
    params: ramda_1.lensPath(['params']),
    data: ramda_1.lensPath(['data'])
};
var HeaderLenses = {
    authorization: ramda_1.compose(ConfigLenses.headers, ramda_1.lensPath(['authorization']))
};
var LinodeAPIWrapper = /** @class */ (function () {
    function LinodeAPIWrapper(token, path) {
        if (path === void 0) { path = 'https://api.linode.com/v4'; }
        invariant_1["default"](token, 'An API token is required to use the LinodeAPIWrapper.');
        this.token = token;
        this.path = path;
    }
    Object.defineProperty(LinodeAPIWrapper.prototype, "types", {
        get: function () {
            return new TypesRequest(this.token, this.path);
        },
        enumerable: true,
        configurable: true
    });
    return LinodeAPIWrapper;
}());
exports["default"] = LinodeAPIWrapper;
var Request = /** @class */ (function () {
    function Request(url, token) {
        var _this = this;
        this.get = function () {
            _this.setMethod('GET');
            return request_1.request(_this.config);
        };
        this.view = function (lens) {
            _this.config = ramda_1.view(lens, _this.config);
        };
        this.set = function (lens) { return function (value) {
            _this.config = ramda_1.set(lens, value, _this.config);
        }; };
        this.over = function (lens) { return function (fn) {
            _this.config = ramda_1.over(lens, fn, _this.config);
        }; };
        this.setMethod = this.set(ConfigLenses.method);
        this.setAuthorizationHeader = this.set(HeaderLenses.authorization);
        this.setURL = this.set(ConfigLenses.url);
        this.updateParams = this.over(ConfigLenses.params);
        this.setURL(url);
        this.setAuthorizationHeader("Bearer " + token);
    }
    return Request;
}());
function Filtered(constructor) {
    return constructor;
}
function Paginated(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.page = function (page) {
                _this.updateParams(function (p) { return (__assign({}, p, { page: page })); });
                return _this;
            };
            _this.pageSize = function (page_size) {
                _this.updateParams(function (p) { return (__assign({}, p, { page_size: page_size })); });
                return _this;
            };
            return _this;
        }
        return class_1;
    }(constructor));
}
var TypesRequest = /** @class */ (function (_super) {
    __extends(TypesRequest, _super);
    function TypesRequest(token, path) {
        return _super.call(this, path + "/types", token) || this;
    }
    TypesRequest = __decorate([
        Paginated
    ], TypesRequest);
    return TypesRequest;
}(Request));
exports.TypesRequest = TypesRequest;
