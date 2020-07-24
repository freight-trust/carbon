/**
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
import { _ as _objectWithoutProperties, I as Icon, a as _extends } from '../Icon-83b9d1f1.js';
import '@carbon/icon-helpers';
import 'prop-types';
import React from 'react';

var didWarnAboutDeprecation = false;

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"
});

var AppSwitcher32 = /*#__PURE__*/React.forwardRef(function AppSwitcher32(_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnAboutDeprecation) {
      didWarnAboutDeprecation = true;
      console.warn("The AppSwitcher32 component has been deprecated and will be " + "removed in the next major version of @carbon/icons-react.");
    }
  }

  return /*#__PURE__*/React.createElement(Icon, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, children);
});

export default AppSwitcher32;
