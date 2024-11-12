import React from 'react';
import * as THREE from 'three';

interface ModelViewProps {
  index: number;
  groupRef: React.RefObject<THREE.Group>;
  gsapType: string;
  setRotation: any;
  controlRef: any;
  item: any;
  size: string;
}

const ModelView: React.FC<ModelViewProps> = (props) => {
  return (
    <div>ModelView</div>
  );
};

export default ModelView;