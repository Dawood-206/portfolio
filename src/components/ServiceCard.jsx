export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-tags">
        {service.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}