interface DatabaseLogoProps {
  type: 'postgresql' | 'mysql' | 'clickhouse' | 'mongodb' | 'redis' | 'neo4j';
  size?: number;
  className?: string;
}

// Import all logos using Vite's import.meta.env.BASE_URL
const databaseLogos: Record<DatabaseLogoProps['type'], string> = {
  postgresql: `${import.meta.env.BASE_URL}postgresql-logo.png`,
  mysql: `${import.meta.env.BASE_URL}mysql-logo.png`,
  mongodb: `${import.meta.env.BASE_URL}mongodb-logo.png`,
  redis: `${import.meta.env.BASE_URL}redis-logo.svg`,
  clickhouse: `${import.meta.env.BASE_URL}clickhouse-logo.svg`,
  neo4j: `${import.meta.env.BASE_URL}neo4j-logo.png`
};

export default function DatabaseLogo({ type, size = 24, className = '' }: DatabaseLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={databaseLogos[type]}
        alt={`${type} database logo`}
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback to a generic database icon if the logo fails to load
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.innerHTML = `<svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              <path d="M4 7c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
              <path d="M4 7h16" />
              <path d="M4 11h16" />
              <path d="M4 15h16" />
            </svg>`;
          }
        }}
      />
    </div>
  );
}