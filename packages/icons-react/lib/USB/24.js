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
  d: "M24,15V6a2,2,0,0,0-2-2H10A2,2,0,0,0,8,6v9a2,2,0,0,0-2,2V28H8V17H24V28h2V17A2,2,0,0,0,24,15ZM10,6H22v9H10Z"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M12 10H15V12H12zM17 10H20V12H17z"
});

var Usb24 = /*#__PURE__*/React.forwardRef(function Usb24(_ref, ref) {
  var children = _ref.children,
      rest = Icon._objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Icon.Icon, Icon._extends({
    width: 24,
    height: 24,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, _ref3, children);
});

module.exports = Usb24;
