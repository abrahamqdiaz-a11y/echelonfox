import { Fragment } from "react";
import PenMark from "@/components/site/PenMark";

/**
 * The homepage headline from Sanity. Each line of the text is a line on the page;
 * ==phrase== gets the red pen, kept on one line with the punctuation right after it.
 */
export default function HeroHeadline({ text }: { text: string }) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/==(.+?)==([^\s]*)/g).map((part, j, parts) => {
            if (j % 3 === 0) return part;
            if (j % 3 === 2) return null;
            return (
              <span key={j} className="nowrap">
                <PenMark>{part}</PenMark>
                {parts[j + 1]}
              </span>
            );
          })}
        </Fragment>
      ))}
    </>
  );
}
