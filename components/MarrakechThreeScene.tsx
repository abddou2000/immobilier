"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type MarrakechThreeSceneProps = {
  className?: string;
  compact?: boolean;
};

export function MarrakechThreeScene({ className = "", compact = false }: MarrakechThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, compact ? 2.4 : 2.1, compact ? 7 : 8.4);
    camera.lookAt(0, -0.15, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const makeMat = (color: number, options: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: options.roughness ?? 0.62,
        metalness: options.metalness ?? 0,
        transparent: options.transparent ?? false,
        opacity: options.opacity ?? 1,
        emissive: options.emissive ?? 0x000000,
        emissiveIntensity: options.emissiveIntensity ?? 0
      });

    const clayMat = makeMat(0xb45f3d);
    const paleMat = makeMat(0xf4eee4);
    const palmMat = makeMat(0x24483e);
    const saffronMat = makeMat(0xd8a14b, { metalness: 0.34, roughness: 0.28 });
    const waterMat = makeMat(0x4f9b93, {
      transparent: true,
      opacity: 0.62,
      roughness: 0.2,
      metalness: 0.08,
      emissive: 0x17443e,
      emissiveIntensity: 0.18
    });

    const ambient = new THREE.HemisphereLight(0xfaf3df, 0x17231f, 1.4);
    const sun = new THREE.DirectionalLight(0xffd49a, 2.8);
    sun.position.set(-4, 6, 5);
    const edge = new THREE.PointLight(0xd8a14b, 1.8, 16);
    edge.position.set(3.5, 1.5, 2.4);
    scene.add(ambient, sun, edge);

    const tileGeo = new THREE.BoxGeometry(0.32, 0.045, 0.32);
    for (let x = -6; x <= 6; x += 1) {
      for (let z = -4; z <= 4; z += 1) {
        const palette = (x + z) % 4 === 0 ? paleMat : (x + z) % 3 === 0 ? palmMat : clayMat;
        const tile = new THREE.Mesh(tileGeo, palette);
        tile.position.set(x * 0.43, -1.32, z * 0.43);
        tile.rotation.y = Math.PI / 4;
        tile.userData.wave = (x * 13 + z * 7) * 0.08;
        root.add(tile);
      }
    }

    const pool = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 1.08), waterMat);
    pool.position.set(0.08, -1.24, 0.1);
    root.add(pool);

    const columnGeo = new THREE.BoxGeometry(0.28, 1.38, 0.28);
    const beamGeo = new THREE.BoxGeometry(1.55, 0.18, 0.24);
    [-2.25, 2.25].forEach((x) => {
      [-1.25, 1.25].forEach((z) => {
        const column = new THREE.Mesh(columnGeo, x < 0 ? clayMat : paleMat);
        column.position.set(x, -0.62, z);
        root.add(column);
      });
    });
    [-1.25, 1.25].forEach((z) => {
      const beam = new THREE.Mesh(beamGeo, saffronMat);
      beam.position.set(0, 0.05, z);
      beam.scale.x = 3.2;
      root.add(beam);
    });

    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.018, 16, 160), saffronMat);
    ring.position.set(0.18, -0.18, -1.15);
    root.add(ring);

    const ribbon = new THREE.Group();
    const diamondGeo = new THREE.BoxGeometry(0.18, 0.026, 0.18);
    for (let i = 0; i < 34; i += 1) {
      const diamond = new THREE.Mesh(diamondGeo, i % 3 === 0 ? saffronMat : i % 2 === 0 ? paleMat : clayMat);
      const angle = i * 0.43;
      const radius = 2.45 + Math.sin(i) * 0.22;
      diamond.position.set(Math.cos(angle) * radius, 0.45 + Math.sin(i * 0.7) * 0.42, Math.sin(angle) * 0.62 - 0.65);
      diamond.rotation.set(0.7, angle, Math.PI / 4);
      diamond.userData.float = i * 0.18;
      diamond.userData.baseY = diamond.position.y;
      ribbon.add(diamond);
    }
    root.add(ribbon);

    const markerGeo = new THREE.CylinderGeometry(0.07, 0.1, 0.34, 5);
    [
      [-1.45, 0.1, 0.85, 0xb45f3d],
      [1.15, 0.2, 0.72, 0x24483e],
      [0.75, 0.05, -1.15, 0xd8a14b],
      [-0.35, 0.14, -1.42, 0xf4eee4]
    ].forEach(([x, y, z, color]) => {
      const marker = new THREE.Mesh(markerGeo, makeMat(color, { metalness: 0.15, roughness: 0.4 }));
      marker.position.set(x, y, z);
      marker.rotation.x = 0.25;
      root.add(marker);
    });

    const lineMat = new THREE.LineBasicMaterial({ color: 0xd8a14b, transparent: true, opacity: 0.45 });
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.6, -0.9, 0.95),
      new THREE.Vector3(-1.2, -0.45, 0.2),
      new THREE.Vector3(0.55, -0.68, -0.75),
      new THREE.Vector3(2.35, -0.18, -0.25)
    ]);
    const path = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)), lineMat);
    root.add(path);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width - 0.5 || 0;
      pointer.y = (event.clientY - rect.top) / rect.height - 0.5 || 0;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = mount.clientWidth || 900;
      const height = mount.clientHeight || 640;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const time = clock.getElapsedTime();
      root.rotation.y = Math.sin(time * 0.24) * 0.12 + pointer.x * 0.2;
      root.rotation.x = -0.08 + pointer.y * 0.08;
      root.position.y = Math.sin(time * 0.55) * 0.045;
      ring.rotation.z = time * 0.08;
      ribbon.rotation.y = time * 0.12;
      ribbon.children.forEach((child) => {
        child.position.y = child.userData.baseY + Math.sin(time * 1.8 + child.userData.float) * 0.08;
        child.rotation.z += 0.003;
      });
      root.children.forEach((child) => {
        if (child.userData.wave !== undefined) {
          child.position.y = -1.32 + Math.sin(time * 1.1 + child.userData.wave) * 0.012;
        }
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [compact]);

  return <div ref={mountRef} className={`three-layer ${className}`} aria-hidden="true" />;
}

