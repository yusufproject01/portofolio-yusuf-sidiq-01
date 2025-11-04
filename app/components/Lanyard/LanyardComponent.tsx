"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

// Extend Three.js with MeshLine components
extend({ MeshLineGeometry, MeshLineMaterial });

// Declare the types explicitly here
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: JSX.IntrinsicElements["meshBasicMaterial"] & {
        ref?: any;
      };
      meshLineMaterial: JSX.IntrinsicElements["meshBasicMaterial"] & {
        ref?: any;
        resolution?: [number, number];
        useMap?: boolean;
        repeat?: [number, number];
      };
    }
  }
}

const cardGLB = "/assets/lanyard/card.glb";
const lanyard = "/assets/lanyard/lanyard.png";

// Your existing interface definitions and component code here...
// (rest of your existing Lanyard component code remains the same)
