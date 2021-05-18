interface LensProps {
  lensWidth: number;
  lensHeight: number;
}

export default interface ImageProps extends LensProps {
  alt?: string;
  width: number;
  height: number;
  src: string;
}
