import React from 'react';
import Confetti from 'react-confetti';
import '../styles/styles.less';

function App() {
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <h1>
        Welcome to the page that invites
        {' '}
        <em>Sara Collado Ludena</em>
        {' '}
        to eat with Teemo
      </h1>
      <p>Here is a photo of Sara and Teemo in the wilderness (which is btw Sara&apos; natural inhabitat)</p>
      <div className="image_container"><img src="./assets/img/IMG_0791.jpeg" alt="Sara & Teemo" /></div>
      <h3>When: 14 October</h3>
      <h3>Where: Caps BBQ</h3>
      <h3>What: Food</h3>
      <p>Here is another photo of Sara and Teemo (this time in a museum which is something Sara doesn&apos; like too much)</p>
      <div className="image_container"><img src="./assets/img/IMG_2034.jpeg" alt="Sara & Teemo" /></div>
      <h1>Information so we don&apos;t die</h1>
      <p>At eight a&apos;clock Geneva time (CET) we gather to Caps BBQ</p>
      <p>There will be other people as well.</p>
      <p>Propably Francesca as she likes food, Helena as she likes nachos, ZuZu as you cannot get red of him, Massi as he is the master mind, Yulia as we always want to have her and Dante because the latin people always come in multiples.</p>
      <p>🇺🇦🇺🇦🇺🇦 SLAVA UKRAINI! 🇺🇦🇺🇦🇺🇦</p>
      <p>Maybe some will cancel. Maybe others will join. This I cannot know but this is all I know.</p>
      <p>Here is photo of Sara and ZuZu eating so I assume it will a bit like this but also maybe a bit different.</p>
      <div className="image_container"><img src="./assets/img/d9404540-e570-490d-88e8-70b00b3a4e48.jpeg" alt="Sara & Zuzu" /></div>
      <h1>So Sara, plz come!</h1>
      <div className="video_container"><iframe width="100%" height="" title="Youtube video" src="https://www.youtube.com/embed/EslzthDFm2w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      <p>This is a bonus photo without any reason</p>
      <div className="image_container"><img src="./assets/img/image.png" alt="Sara & Teemo" /></div>
    </div>
  );
}
export default App;
