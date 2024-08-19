// import React, { useEffect, useState } from 'react';

// interface LoadingScreenProps {
//   minimumLoadingTime?: number;
// }

// const LoadingScreen: React.FC<LoadingScreenProps> = ({ minimumLoadingTime = 1000 }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, minimumLoadingTime);

//     return () => clearTimeout(timer);
//   }, [minimumLoadingTime]);

//   if (!isLoading) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
//       <div className="relative">
//         <div className="w-24 h-24 border-4 border-olive-drab rounded-full"></div>
//         <div className="absolute top-0 left-0 w-24 h-24 border-4 border-olive-green rounded-full animate-ping"></div>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;

import React from 'react';

const LoadingProgress: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <div className="relative w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-olive-green animate-progress"></div>
    </div>
    <span className="mt-4 text-lg text-gray-700">Loading...</span>
    <style >{`
      @keyframes progress {
        0% { width: 0; }
        100% { width: 100%; }
      }
      .animate-progress {
        animation: progress 2s infinite;
      }
    `}</style>
  </div>
);

export default LoadingProgress;
