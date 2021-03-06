"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetParams = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 获取请求接口返回值
 * @returns {Promise | Object}   { path, query: { ...query }, method, url }
 * 
 */
var GetParams = function GetParams(ctx) {
  return new Promise(function (resolve, reject) {
    try {
      var path = ctx.request.path;
      var query = ctx.query;
      var method = ctx.method.toLowerCase();
      var url = ctx.url;

      if (method !== "get") {
        query = ctx.request.body;
      } // return resolve(ctx.params)
      // 处理 /:id 类型参数


      if (ctx.params) {
        query = Object.assign(query, ctx.params);
      }

      var pam = {
        path: path,
        query: _objectSpread({}, query),
        method: method,
        url: url
      };
      return resolve(pam);
    } catch (error) {
      console.error(error);
      return resolve(error);
    }
  });
};

exports.GetParams = GetParams;