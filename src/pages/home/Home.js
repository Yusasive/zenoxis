import React from 'react';
import Header from './header/Header';
import SubHeader from './subheader/SubHeader';

import Utilities from './utilities/Utilities';
import Who from './who/Who'
import Generative from './generative/Generative';

const Home = () => {
  return (
    <div>
     <Header />
      <SubHeader />
       <Utilities />
       
        <Generative />
         <Who />
    </div>
  );
}

export default Home;
