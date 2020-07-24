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
  d: "M21.87,7.84l-1.74-1L16,14h0a2,2,0,1,0,2,2,2,2,0,0,0-.27-1Z"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
React.createElement("path", {
  d: "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,2a12,12,0,0,1,11.17,7.65,25.69,25.69,0,0,0-3.69-1.5l-1,1.77a22.7,22.7,0,0,1,5.41,2.39,11.05,11.05,0,0,1,0,3.38A22.92,22.92,0,0,1,16,21,22.92,22.92,0,0,1,4.13,17.69a11.05,11.05,0,0,1,0-3.38A22.8,22.8,0,0,1,15,11V9a25,25,0,0,0-10.17,2.6A12,12,0,0,1,16,4Zm0,24A12,12,0,0,1,4.83,20.35,24.88,24.88,0,0,0,16,23a24.88,24.88,0,0,0,11.17-2.65A12,12,0,0,1,16,28Z"
});

var ResearchBlochSphere20 = /*#__PURE__*/React.forwardRef(function ResearchBlochSphere20(_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnAboutDeprecation) {
      didWarnAboutDeprecation = true;
      console.warn("The ResearchBlochSphere20 component has been deprecated and will be " + "removed in the next major version of @carbon/icons-react.");
    }
  }

  return /*#__PURE__*/React.createElement(Icon, _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _ref2, _ref3, children);
});

export default ResearchBlochSphere20;
