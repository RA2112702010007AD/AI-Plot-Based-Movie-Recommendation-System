
import React from 'react';

export const FilmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
    <path d="M21.721 12.752a9.711 9.711 0 00-9.71-9.711 9.711 9.711 0 00-9.71 9.711 9.711 9.711 0 009.71 9.711 9.711 9.711 0 009.71-9.711zM12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
      clipRule="evenodd"
    />
    <path d="M5.26 17.242a.75.75 0 10-1.06-1.06 7.5 7.5 0 00-1.06 1.06.75.75 0 101.06 1.06 7.5 7.5 0 001.06-1.06z" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696L7.985 5.644m0 0v4.992m0 0h4.992" 
    />
  </svg>
);

export const TargetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 00-5.84-2.56m0 0a14.95 14.95 0 00-2.56 5.84m-2.56-5.84a6 6 0 017.38-5.84m-7.38 5.84L5.63 5.63m12.74 12.74L14.37 15.59" />
  </svg>
);

export const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.25a6.01 6.01 0 00-1.5-11.25m0 22.5A6.01 6.01 0 0013.5 12.75m0 0a6.01 6.01 0 00-3 0m3 0a6.01 6.01 0 01-1.5 11.25m0 0A6.01 6.01 0 0110.5 12.75m6.75 11.25a6.01 6.01 0 00-1.5-11.25m1.5 11.25a6.01 6.01 0 00-1.5-11.25m0 0A6.01 6.01 0 0012 1.5m0 22.5a6.01 6.01 0 001.5-11.25m-1.5 11.25a6.01 6.01 0 00-1.5-11.25m0 0A6.01 6.01 0 0112 1.5m-1.5 11.25a6.01 6.01 0 011.5-11.25" />
  </svg>
);

export const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>
);

export const ThumbsUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.375c0-1.75.599-3.358 1.603-4.686.213-.287.213-.676 0-.964a4.502 4.502 0 0 1 0-6.364c.793-.793 2.08-.793 2.872 0l1.272 1.272c.383.383.92.599 1.488.599H18a1.5 1.5 0 0 1 1.5 1.5v3.375c0 .622-.294 1.205-.794 1.553l-3.393 2.262c-.36.24-.622.617-.732 1.028a4.5 4.5 0 0 1-.222 1.003v.062c0 .594.482 1.076 1.076 1.076H18a1.5 1.5 0 0 1 1.5 1.5v.188c0 .828-.672 1.5-1.5 1.5H7.493Z" />
    <path d="M5.25 7.5A2.25 2.25 0 0 0 3 9.75v6A2.25 2.25 0 0 0 5.25 18H6v-1.5H5.25a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75H6V7.5H5.25Z" />
  </svg>
);


export const ThumbsDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.507 5.25c.425 0 .82.236.975.632A7.48 7.48 0 0 1 18 8.625c0 1.75-.599 3.358-1.603 4.686-.213.287-.213.676 0 .964a4.502 4.502 0 0 1 0 6.364c-.793.793-2.08.793-2.872 0l-1.272-1.272c-.383-.383-.92-.599-1.488-.599H6a1.5 1.5 0 0 1-1.5-1.5V9.375c0-.622.294-1.205.794-1.553l3.393-2.262c.36-.24.622.617.732-1.028a4.5 4.5 0 0 1 .222-1.003v-.062c0-.594-.482-1.076-1.076-1.076H6a1.5 1.5 0 0 1-1.5-1.5v-.188c0-.828.672-1.5 1.5-1.5h9.007Z" />
    <path d="M18.75 16.5A2.25 2.25 0 0 0 21 14.25v-6A2.25 2.25 0 0 0 18.75 6H18v1.5h.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75-.75H18V16.5h.75Z" />
  </svg>
);

export const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.284.064a3 3 0 00-4.682 2.72m6.311 3.138a3 3 0 00-4.682-2.72M12 12a5.962 5.962 0 013.001-5.216 5.962 5.962 0 01-6.002 0A5.962 5.962 0 0112 12zm0 0v7.5"
    />
  </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324l5.58.513a.563.563 0 01.31.95l-4.232 3.585a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.735-2.885a.563.563 0 00-.586 0l-4.735 2.885a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557l-4.232-3.585a.563.563 0 01.31-.95l5.58-.513a.563.563 0 00.475-.324L11.48 3.5z"
    />
  </svg>
);

export const KeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
    />
  </svg>
);
