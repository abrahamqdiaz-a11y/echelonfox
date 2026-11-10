/** Renders text where ==phrases== are key findings, emphasised with a copper rule. */
export default function Marked({ text }: { text: string }) {
  const parts = text.split(/==(.+?)==/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="finding">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
