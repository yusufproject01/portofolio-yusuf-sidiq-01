import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: {
        ref?: React.RefObject<THREE.BufferGeometry>;
        attach?: string;
      };
      meshLineMaterial: {
        ref?: React.RefObject<THREE.Material>;
        attach?: string;
        color?: THREE.ColorRepresentation;
        lineWidth?: number;
        resolution?: [number, number];
        sizeAttenuation?: boolean;
        depthTest?: boolean;
        useMap?: boolean;
        map?: THREE.Texture;
        repeat?: [number, number];
        dashArray?: number;
        dashOffset?: number;
        dashRatio?: number;
        opacity?: number;
        transparent?: boolean;
      };
    }
  }
}