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
  d: "M20,2H4A2,2,0,0,0,2,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM6,14H9V24H6ZM18,28H6V26h5V12H6V10H18ZM4,8V4H20V8Z"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("circle", {
  cx: "26",
  cy: "16",
  r: "4"
});

var MedicationReminder32 = /*#__PURE__*/React.forwardRef(function MedicationReminder32(_ref, ref) {
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

module.exports = MedicationReminder32;
