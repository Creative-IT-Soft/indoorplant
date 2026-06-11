type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="section-eyebrow mb-4" data-aos="fade-up">
          {eyebrow}
        </p>
      )}
      <h2 className="section-title section-title--gradient" data-aos="fade-up" data-aos-delay="50">
        {title}
      </h2>
      {description && (
        <p
          className="section-description mt-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {description}
        </p>
      )}
    </div>
  );
}
