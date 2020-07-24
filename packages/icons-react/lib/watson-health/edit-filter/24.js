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

var Icon = require('../../Icon-1f3f78db.js');
require('@carbon/icon-helpers');
require('prop-types');
var React = _interopDefault(require('react'));

var didWarnAboutDeprecation = false;

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M26,6H4V9.17l7.41,7.42.59.58V26h4V24h2v2a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V18L2.59,10.59A2,2,0,0,1,2,9.17V6A2,2,0,0,1,4,4H26Z"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M29.71,11.29l-3-3a1,1,0,0,0-1.42,0L16,17.59V22h4.41l9.3-9.29A1,1,0,0,0,29.71,11.29ZM19.59,20H18V18.41l5-5L24.59,15ZM26,13.59,24.41,12,26,10.41,27.59,12Z"
});

var WatsonHealthEditFilter24 = /*#__PURE__*/React.forwardRef(function WatsonHealthEditFilter24(_ref, ref) {
  var children = _ref.children,
      rest = Icon._objectWithoutProperties(_ref, ["children"]);

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnAboutDeprecation) {
      didWarnAboutDeprecation = true;
      console.warn("The WatsonHealthEditFilter24 component has been deprecated and will be " + "removed in the next major version of @carbon/icons-react.");
    }
  }

  return /*#__PURE__*/React.createElement(Icon.Icon, Icon._extends({
    width: 24,
    height: 24,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, _ref3, children);
});

module.exports = WatsonHealthEditFilter24;
