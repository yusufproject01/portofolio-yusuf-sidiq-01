import Lanyard from "../components/Lanyard/Lanyard";

export default function cobafiture() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <section className="max-w-7xl w-full border-2 overflow-hidden">
        <Lanyard
          fov={35}
          gravity={[0, -20, 0]}
          position={[0, 0, 35]}
          transparent={false}
        />
      </section>
    </main>
  );
}
