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
            src="/images/consultancy/collaboration.webp"
            alt="People working together around a table with laptops"
            width={1000}
            height={667}
            sizes="(max-width: 760px) 45vw, 23vw"
            priority
          />
        </div>
        <div className="people-panel people-panel--second">
          <Image
            src="/images/consultancy/implementation-review.webp"
            alt="Two people reviewing code on a computer"
            width={1100}
            height={733}
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
