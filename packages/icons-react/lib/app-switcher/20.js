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

var didWarnAboutDeprecation = false;

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"
});

var AppSwitcher20 = /*#__PURE__*/React.forwardRef(function AppSwitcher20(_ref, ref) {
  var children = _ref.children,
      rest = Icon._objectWithoutProperties(_ref, ["children"]);

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnAboutDeprecation) {
      didWarnAboutDeprecation = true;
      console.warn("The AppSwitcher20 component has been deprecated and will be " + "removed in the next major version of @carbon/icons-react.");
    }
  }

  return /*#__PURE__*/React.createElement(Icon.Icon, Icon._extends({
    width: 20,
    height: 20,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, children);
});

module.exports = AppSwitcher20;