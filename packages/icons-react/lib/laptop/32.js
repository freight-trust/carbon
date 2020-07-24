/**
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Icon = require('../Icon-1f3f78db.js');
require('@carbon/icon-helpers');
require('prop-types');
var React = _interopDefault(require('react'));

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M26,24H6a2.0023,2.0023,0,0,1-2-2V8A2.002,2.002,0,0,1,6,6H26a2.0023,2.0023,0,0,1,2,2V22A2.0027,2.0027,0,0,1,26,24ZM6,8V22H26V8Z",
  transform: "translate(0 .005)"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M2 26.005H30V28.005H2z"
});

var Laptop32 = /*#__PURE__*/React.forwardRef(function Laptop32(_ref, ref) {
  var children = _ref.children,
      rest = Icon._objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Icon.Icon, Icon._extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, _ref3, children);
});

module.exports = Laptop32;
