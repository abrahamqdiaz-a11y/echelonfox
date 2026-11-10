export default function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {body && <p className="lead muted">{body}</p>}
    </div>
  );
}
