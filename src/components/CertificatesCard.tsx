import Arrow from "../assets/icons/Arrow";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { Certificate } from "../shared/interfaces/SectionsInterfaces";

export default function CertificatesCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const { systemTranslations } = useSystemTranslations();

  function renderBadge() {
    if (certificate.badge) {
      return (
        <div
          className="badge"
          style={{ backgroundImage: `url("${certificate.badge}")` }}
        />
      );
    }
    return null;
  }

  function renderTitleClass() {
    return certificate.badge ? "" : "only";
  }

  function renderSkills() {
    if (certificate.skills && certificate.skills.length > 0) {
      return (
        <div className="skills">
          <span>{systemTranslations.skills}</span>
          <span>
            {certificate.skills.map((skill, index) => {
              if (certificate.skills) {
                return index !== certificate.skills.length - 1
                  ? `${skill}, `
                  : `${skill}.`;
              }
            })}
          </span>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="cert-card">
      <div className="main">
        {renderBadge()}
        <h3 className={renderTitleClass()}>
          <a href={certificate.uri} target="_blank" rel="noopener noreferrer">
            {certificate.title}
            <Arrow />
          </a>
        </h3>
      </div>
      <div className="foot">
        {renderSkills()}
        <div className="issuer">
          <span>
            {systemTranslations.months[certificate.date.month]}{" "}
            {certificate.date.year}
          </span>
          <span>{certificate.issuer}</span>
        </div>
      </div>
    </div>
  );
}
