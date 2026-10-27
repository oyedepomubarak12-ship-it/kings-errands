
import {
  HeartHandshake,
  MessageCircle,
  Target,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Customer-first service",
    description:
      "We aim to understand each customer's needs and make the service process clear from the beginning.",
    points: ["Listen to the request", "Understand the requirements"],
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Clear communication",
    description:
      "Useful communication helps customers understand the next steps and what information is needed.",
    points: ["Straightforward information", "Clear expectations"],
  },
  {
    icon: Target,
    number: "03",
    title: "Practical solutions",
    description:
      "Different requests need different approaches. We focus on understanding the task and identifying a suitable way forward.",
    points: ["Understand the task", "Focus on useful solutions"],
  },
];

function AboutValues() {
  return (
    <div className="about-values-grid">
      {values.map((value) => {
        const Icon = value.icon;

        return (
          <article className="about-value-card" key={value.number}>
            <div className="about-value-card-top">
              <div className="about-value-icon">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <span className="about-value-number">{value.number}</span>
            </div>

            <h3>{value.title}</h3>
            <p>{value.description}</p>

            <ul className="about-value-points">
              {value.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export default AboutValues;
