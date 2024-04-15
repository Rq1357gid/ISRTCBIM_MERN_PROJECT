// import React from 'react';
// import Lottie from 'react-lottie';
// import animationData from '../assets/Animation - 1712041155033.json';

// const LoginA= () => {
//   if (!animationData) {
//     // Handle error if animationData is undefined
//     return <div>Error: Animation data is undefined</div>;
//   }

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (
//     <div style={{ marginLeft: '100px' }}>
//       <Lottie options={defaultOptions} height={700} width={400} />
//     </div>
//   );
// }

// export default LoginA;



import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1712041155033.json'; 
import animationDataBadge from '../assets/Animation - 1707409890474.json';
import animationDatabooknotes from '../assets/Animation - 1712133448013.json';
import animationDataBoard from '../assets/Animation - 1712134806919.json';

const LoginA = () => {
  if (!animationData) {
    
    return <div>Error: Animation data is undefined</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ marginLeft: '100px' }}>
      <Lottie options={defaultOptions} height={700} width={400} />
    </div>
  );
}

export default LoginA; 

const HomeA = () => {
  if (!animationDataBadge) {

    return <div>Error: Animation data is undefined</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataBadge,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMax meet'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
}

export { HomeA }; 


const NotesA = () => {
  if (!animationDataBadge) {

    return <div>Error: Animation data is undefined</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDatabooknotes,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMax meet'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={500} width={300} />
    </div>
  );
}

export { NotesA }; 


const DataBoard = () => {
  if (!animationDataBadge) {

    return <div>Error: Animation data is undefined</div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataBoard,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMax meet'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={900} width={600} />
    </div>
  );
}

export { DataBoard }; 


