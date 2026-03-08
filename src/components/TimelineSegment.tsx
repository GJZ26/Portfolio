import Arrow from "../assets/icons/Arrow";
import useConfig from "../shared/hooks/useConfig";
import useSystemTranslations from "../shared/hooks/useSystemTranslations";
import { Experience } from "../shared/interfaces/SectionsInterfaces";

export default function TimelineSegment({
  experience,
}: {
  experience: Experience;
}) {
  const { systemTranslations } = useSystemTranslations();
  const { config } = useConfig();

  function renderDate() {
    const startMonth = config.experience.abreviate_month
      ? systemTranslations.months[experience.duration.init.month].slice(0, 3)
      : systemTranslations.months[experience.duration.init.month];
    const startYear = experience.duration.init.year;

    const endDate = experience.duration.current
      ? systemTranslations.present
      : `${
          config.experience.abreviate_month
            ? systemTranslations.months[experience.duration.end.month].slice(
                0,
                3,
              )
            : systemTranslations.months[experience.duration.end.month]
        } ${experience.duration.end.year}`;

    const montMap = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const initDate = new Date(
      experience.duration.init.year,
      montMap[experience.duration.init.month],
    );

    let finishDate: Date;
    if (experience.duration.current) {
      finishDate = new Date();
    } else {
      finishDate = new Date(
        experience.duration.end.year,
        montMap[experience.duration.end.month],
      );
    }

    const monthsDiff =
      (finishDate.getFullYear() - initDate.getFullYear()) * 12 +
      (finishDate.getMonth() - initDate.getMonth());

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    let pluralYears = systemTranslations.year.plural;
    let pluralMonths = systemTranslations.month.plural;

    let singularYears = systemTranslations.year.singular;
    let singularMonths = systemTranslations.month.singular;

    return (
      <>
        <span className="date">
          {startMonth} {startYear} - {endDate}
          {config.experience.showDurationText && (
            <span className="duration">
              {years > 0 &&
                `${years} ${years > 1 ? pluralYears : singularYears}`}
              {years > 0 && months > 0 && `, `}
              {months > 0 &&
                `${months} ${months > 1 ? pluralMonths : singularMonths}`}
            </span>
          )}
        </span>
      </>
    );
  }

  function renderLocation() {
    const state = experience.location?.state;
    const country = experience.location?.country;

    if (state || country) {
      return (
        <span>
          {state}
          {state && country ? ", " : " "}
          {country}
        </span>
      );
    }
    return null;
  }

  function renderMode() {
    if (experience.mode) {
      return <span>{systemTranslations[experience.mode]}</span>;
    }
    return null;
  }

  function renderCompany() {
    if (experience.uri) {
      return (
        <a href={experience.uri} target="_blank" rel="noopener noreferrer">
          {experience.company}
          <Arrow />
        </a>
      );
    }
    return experience.company;
  }

  function renderSkills() {
    if (!experience.skills) return null;

    return (
      <>
        {experience.skills.map((tech, index) => {
          if (tech && index < config.experience.max_skills_listed) {
            return (
              <div className="pills" key={index}>
                {tech}
              </div>
            );
          }
          return null;
        })}

        {config.experience.max_skills_listed < experience.skills.length && (
          <abbr
            title={experience.skills
              .slice(config.experience.max_skills_listed)
              .join(", ")}
            className="pills"
          >
            {experience.skills.length - config.experience.max_skills_listed}+
          </abbr>
        )}
      </>
    );
  }

  return (
    <div className="segment">
      {renderDate()}
      <div className="mode">
        {renderLocation()}
        {renderMode()}
      </div>
      <h3>{renderCompany()}</h3>
      <span className="role">{experience.role}</span>
      <p>{experience.description}</p>
      <div className="stack">{renderSkills()}</div>
    </div>
  );
}
