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
  d: "M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z",
  transform: "translate(0 .005)"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M6.854 5.375H8.854V10.333H6.854z",
  transform: "rotate(-45 7.86 7.856)"
});

var _ref4 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M2 15.005H7V17.005000000000003H2z"
});

var _ref5 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M5.375 23.147H10.333V25.147H5.375z",
  transform: "rotate(-45 7.86 24.149)"
});

var _ref6 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M15 25.005H17V30.005H15z"
});

var _ref7 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M23.147 21.668H25.147V26.625999999999998H23.147z",
  transform: "rotate(-45 24.152 24.149)"
});

var _ref8 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M25 15.005H30V17.005000000000003H25z"
});

var _ref9 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M21.668 6.854H26.625999999999998V8.854H21.668z",
  transform: "rotate(-45 24.152 7.856)"
});

var _ref10 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M15 2.005H17V7.005H15z"
});

var Sunny16 = /*#__PURE__*/React.forwardRef(function Sunny16(_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnAboutDeprecation) {
      didWarnAboutDeprecation = true;
      console.warn("The Sunny16 component has been deprecated and will be " + "removed in the next major version of @carbon/icons-react.");
    }
  }

  return /*#__PURE__*/React.createElement(Icon, _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, children);
});

export default Sunny16;
