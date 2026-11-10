export default function SystemDiagram() {
  return (
    <figure className="system-diagram" aria-labelledby="system-caption">
      <div className="diagram-heading">
        <span className="label">A connected view</span>
        <span className="diagram-index" aria-hidden="true">
          EF / 01
        </span>
      </div>
      <div className="system-orbit">
        <div className="system-centre">
          <span className="label">Start here</span>
          <strong>
            Your business.
            <br />
            The real constraint.
          </strong>
          <span className="system-cross" aria-hidden="true">
            +
          </span>
        </div>
        <div className="system-point system-point--one">
          <span>01</span>
          <strong>Demand</strong>
          <small>Reach the right people</small>
        </div>
        <div className="system-point system-point--two">
          <span>02</span>
          <strong>Conversion</strong>
          <small>Turn interest into customers</small>
        </div>
        <div className="system-point system-point--three">
          <span>03</span>
          <strong>Delivery</strong>
          <small>Make the work flow</small>
        </div>
        <div className="system-point system-point--four">
          <span>04</span>
          <strong>Capacity</strong>
          <small>Build room to grow</small>
        </div>
      </div>
      <figcaption id="system-caption">
        Different challenges. One connected business.
        <br />
        <span>We identify where an improvement will matter most.</span>
      </figcaption>
    </figure>
  );
}
