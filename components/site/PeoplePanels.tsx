/**
 * The uploaded animated Growth Map lives in a sandboxed standalone document.
 * The original canvas and colour styling remain isolated from the site CSS.
 */
export default function PeoplePanels() {
  return (
    <figure className="growth-map-hero">
      <iframe
        className="growth-map-hero__frame"
        src="/hero-visual-growth-map.html"
        title="Illustrative growth map showing customer journey drop-off, a revenue leak and a possible improvement"
        loading="eager"
        sandbox="allow-scripts"
      />
      <figcaption className="growth-map-hero__caption">
        Illustrative scenario. Figures are examples, not actual client results.
      </figcaption>
    </figure>
  );
}
