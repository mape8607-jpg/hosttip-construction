export default function SectionDivider() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, #52525C 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
