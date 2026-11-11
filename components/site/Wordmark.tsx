/** Typography-led identity. The enclosing home link supplies the accessible name. */
export default function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={`wordmark${inverse ? " wordmark--inverse" : ""}`}
      aria-hidden="true"
    >
      <span className="wordmark__name">EchelonFox</span>
      <span className="wordmark__descriptor">CONSULTING</span>
    </span>
  );
}
