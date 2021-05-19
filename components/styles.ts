// @ts-nocheck

import styled from "styled-components";

interface Dimensions {
  width: number;
  height: number;
}

interface ILens extends Dimensions {
  lensWidth: number;
  lensHeight: number;
  showLens: boolean;
  ratio: number;
}

const Container = styled.div`
  position: relative;

  .main-image {
    position: relative;

    > div {
      display: block !important;
      box-shadow: 0 0 10px black;
    }
  }
`;

export const ImageZoom = styled.div<Dimensions>`
  position: absolute;
  pointer-events: none;
  z-index: 9999999;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Lens = styled.div<ILens>`
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

export const LensContainer = styled.div<Dimensions>`
  display: none;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default Container;
