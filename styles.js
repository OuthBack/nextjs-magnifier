"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LensContainer = exports.Lens = exports.ImageZoom = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Container = styled_components_1.default.div `
  position: relative;

  .main-image {
    position: relative;

    > div {
      display: block !important;
      box-shadow: 0 0 10px black;
    }
  }
`;
exports.ImageZoom = styled_components_1.default.div `
  position: absolute;
  pointer-events: none;
  z-index: 9999999;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: rgba(0, 0, 0, 0.3);
`;
exports.Lens = styled_components_1.default.div `
  width: ${(props) => props.lensWidth}px;
  height: ${(props) => props.lensHeight}px;
  position: absolute;
  overflow: hidden;
  top: 0;
  opacity: ${(props) => (props.showLens ? 1 : 0)};
  right: -${(props) => props.lensWidth + 10}px;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 10px black;

  img {
    min-width: ${(props) => props.width}px !important;
    max-width: ${(props) => props.width}px !important;
    min-height: ${(props) => props.height}px !important;
    max-height: ${(props) => props.height}px !important;
  }
`;
exports.LensContainer = styled_components_1.default.div `
  display: none;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
exports.default = Container;
