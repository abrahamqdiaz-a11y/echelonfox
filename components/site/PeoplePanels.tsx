import Image from "next/image";
export default function PeoplePanels() {
  return (
    <figure
      className="people-panels"
      aria-label="Illustrative workplace photography"
    >
      <div className="people-panels__images">
        <div className="people-panel people-panel--first">
          <Image
            src="/images/consultancy/working-session.webp"
            alt="People reviewing work around a table with laptops"
            width={1000}
            height={1500}
            sizes="(max-width: 760px) 45vw, 23vw"
            priority
          />
        </div>
        <div className="people-panel people-panel--second">
          <Image
            src="/images/consultancy/collaboration.webp"
            alt="A collaborative working session around business information"
            width={1000}
            height={667}
            sizes="(max-width: 760px) 45vw, 23vw"
            priority
          />
        </div>
        <div className="people-panels__annotation">
          <span aria-hidden="true">+</span> Human judgement.
          <br />
          Practical intelligence.
        </div>
      </div>
      <figcaption>Built around people. Connected to the work.</figcaption>
    </figure>
  );
}
