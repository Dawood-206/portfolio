export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">"</div>
      <p className="testimonial-text">{testimonial.quote}</p>
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <div>
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-role">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}