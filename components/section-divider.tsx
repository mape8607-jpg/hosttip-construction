export default function SectionDivider() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #46464F 50%, transparent 100%)",
          filter: "blur(0.3px)",
        }}
      />
    </div>
  );
}
