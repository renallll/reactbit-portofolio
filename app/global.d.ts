export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  import { BufferGeometry, Material } from 'three';
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: number[] | Float32Array): void;
  }
  export class MeshLineMaterial extends Material {
    color?: string | number;
    depthTest?: boolean;
    resolution?: [number, number];
    useMap?: boolean;
    map?: any;
    repeat?: [number, number];
    lineWidth?: number;
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: {
      attach?: string;
      [key: string]: any;
    };
    meshLineMaterial: {
      attach?: string;
      color?: string | number;
      depthTest?: boolean;
      resolution?: [number, number];
      useMap?: boolean;
      map?: any;
      repeat?: [number, number];
      lineWidth?: number;
      [key: string]: any;
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}