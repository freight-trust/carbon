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
  d: "M25,11H15a1,1,0,0,0-1,1v4a6.0046,6.0046,0,0,0,5,5.91V28H16v2h8V28H21V21.91A6.0046,6.0046,0,0,0,26,16V12A1,1,0,0,0,25,11Zm-1,5a4,4,0,0,1-8,0V13h8Z"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M15,1H10A1,1,0,0,0,9,2V9.3706A6.09,6.09,0,0,0,6,15V29a1,1,0,0,0,1,1h5V28H8V15c0-3.1875,2.231-4.02,2.3164-4.0513L11,10.7207V3h3V8h2V2A1,1,0,0,0,15,1Z"
});

var Bar16 = /*#__PURE__*/React.forwardRef(function Bar16(_ref, ref) {
  var children = _ref.children,
      rest = Icon._objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Icon.Icon, Icon._extends({
    width: 16,
    height: 16,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, _ref3, children);
});

module.exports = Bar16;
