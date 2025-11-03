import { Object3DNode } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: Object3DNode<any, any>;
      meshLineMaterial: Object3DNode<any, any>;
    }
  }
}
