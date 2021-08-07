import React, { useEffect, useState, useRef } from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';

const LetterPreservationTitle = ({messages}) => {
  const [sCurrentTitle, uCurrentTitle] = useState(0);

  const letters = messages.reduce((acc, title) => {
    return acc + title;
  }).split('').sort();

  useEffect(() => {
    setTimeout(() => {
      uCurrentTitle((sCurrentTitle + 1) % messages.length)
    }, 2000);
  });

  const title = messages[sCurrentTitle];

  const usedLetters = {};

  return <div className="letter-preservation-title">
    {letters.map((letter, i) => {
      usedLetters[letter] = usedLetters[letter] ? usedLetters[letter] + 1 : 1;

      let totalLetters = title.match(new RegExp(letter, 'g'));
      totalLetters = totalLetters ? totalLetters.length : 0;
      let nextIndex = -1;
      for (let j = 0; j < usedLetters[letter]; j++) {
        nextIndex = title.indexOf(letter, nextIndex + 1);
      }

      const startLeft = -12 * title.length;

      const leftPosition = (nextIndex !== -1 ? nextIndex : (Math.random() * title.length)) * 24 + startLeft;
      const topPosition = (nextIndex !== -1 ? -24 : ((Math.random() - 0.5) * 120 - 24));

      return <span
        className={`${title.includes(letter) && usedLetters[letter] <= totalLetters ? '' : 'invisible '}`}
        style={{
          left: `${leftPosition}px`,
          top: `${topPosition}px`,
          transitionDelay: `${Math.random()}s`
        }}
        key={letter + '-' + i}
      >
        {letter}
      </span>
    })}
  </div>
};

const Windows95Window = () => {
  return <div className="win-95-window">
    <div className="header-bar">
      <div className="title">
        <div className="text">Welcome</div>
        <div className="shadow">Welcome</div>
      </div>
      <div className="close"><div>×</div></div>
    </div>
    <div className="main-body">
      <div className="message">
        <p>This is the online web portfolio for Daniel Thomas and is accessed via the World Wide Web.</p>
        <p>It is recommended you view this website using a desktop personal computer instead of a mobile telecommunications device.</p>
      </div>
      <div className="image"></div>
    </div>
  </div>
};

const Developer = () => {

  const Languages = () => {
    const languages = [
      {
        title: 'JavaScript',
        experience: 80,
        experienceNote: '3 years of professional experience',
        opinion: 100,
        opinionNote: 'so much fun! love it!'
      },
      {
        title: 'TypeScript',
        experience: 25,
        experienceNote: 'professional experience against my will',
        opinion: 10,
        opinionNote: 'javascript but obnoxious and not fun'
      },
      {
        title: 'PHP',
        experience: 20,
        experienceNote: 'some professional experience with laravel',
        opinion: 30,
        opinionNote: 'seems ok i guess'
      },
      {
        title: 'Visual Basic',
        experience: 25,
        experienceNote: 'learnt at university with excel',
        opinion: 40,
        opinionNote: 'my first - i have a soft spot for it'
      },
      {
        title: 'HTML',
        experience: 80,
        experienceNote: 'frontend bread',
        opinion: 75,
        opinionNote: '<div>a staple but needs a framework</div>'
      },
      {
        title: 'CSS',
        experience: 80,
        experienceNote: 'frontend butter',
        opinion: 100,
        opinionNote: 'mysterious magic - my dream - my nightmare'
      },
      {
        title: 'SCSS',
        experience: 30,
        experienceNote: 'i need to explore more',
        opinion: 100,
        opinionNote: 'you had me at "nested css"'
      }
    ];

    const frameworks = [
      {
        title: 'Node.js',
        experience: 80,
        experienceNote: 'it\'s javascript, innit',
        opinion: 100,
        opinionNote: 'javascript, i dig it'
      },
      {
        title: 'React',
        experience: 70,
        experienceNote: 'lots of personal experience - pre and post hooks',
        opinion: 100,
        opinionNote: 'now you\'re playing with power'
      },
      {
        title: 'Vue',
        experience: 50,
        experienceNote: '18 months of professional experience',
        opinion: 50,
        opinionNote: 'it\'s fine but it\'s no react'
      },
      {
        title: 'Laravel',
        experience: 15,
        experienceNote: 'used professionally but not much',
        opinion: 20,
        opinionNote: 'doesn\'t seem like my cup of tea'
      },
      {
        title: 'Express',
        experience: 25,
        experienceNote: 'used before but not recently - i built my own instead',
        opinion: 70,
        opinionNote: 'a handy tool'
      },
      {
        title: 'Jest',
        experience: 60,
        experienceNote: 'mainly backend testing - some integration',
        opinion: 80,
        opinionNote: 'a lovely thing'
      },
      {
        title: 'Mocha / Chai',
        experience: 40,
        experienceNote: 'used before i used jest',
        opinion: 60,
        opinionNote: 'like jest but in two halfs'
      }
    ];

    const services = [
      {
        title: 'AWS',
        experience: 20,
        experienceNote: 'very experienced but there\'s so much to it',
        opinion: 75,
        opinionNote: 'powerful but dangerous',
      },
      {
        title: 'SQL',
        experience: 10,
        experienceNote: 'used briefly in the past',
        opinion: 75,
        opinionNote: 'it does cool things i think?',
      },
      {
        title: 'Non-Relational DB',
        experience: 65,
        experienceNote: 'quite a bit of professional experience',
        opinion: 75,
        opinionNote: 'drawbacks but fun to use - quick and dirty',
      }
    ];

    const Language = ({language}) => {
      return <div className="language">
        <h3>{language.title}</h3>
        <div className="language-content">
          <h4>Experience:</h4>
          <div class="bar">
            <div className="bar-back experience"></div>
            <div className="bar-front experience" style={{width: `${language.experience}%`}}></div>
          </div>
          <p className="bar-note">{language.experienceNote}</p>
          <h4>Opinion:</h4>
          <div class="bar">
            <div className="bar-back opinion"></div>
            <div className="bar-front opinion" style={{width: `${language.opinion}%`}}></div>
          </div>
          <p className="bar-note">{language.opinionNote}</p>
        </div>
      </div>
    };

    return <div id="languages">
      {[1,1,1,1,1,1,1,1,1,1].map(() => {
        const left = Math.floor(Math.random() * 20) + 20;
        const right = Math.floor(Math.random() * 20) + 20;
        const centre = Math.floor(Math.random() * 10) + Math.max(left, right) + 5;

        return <div className="cloud" style={{animationDelay: Math.random() * 1000 + 'ms', left: Math.random() * 110 - 10 + '%', top: Math.random() * 110 - 10 + '%'}}>
          <div className="cloud-left" style={{height: left + 'px', width: left + 'px', left: left / 2 + 'px'}}></div>
          <div className="cloud-centre" style={{height: centre + 'px', width: centre + 'px'}}></div>
          <div className="cloud-right" style={{height: right + 'px', width: right + 'px', right: right / 2 + 'px'}}></div>
        </div>
      })}
      <h2>Languages</h2>
      <div className="language-list">
        {languages.map(language => {
          return <Language language={language}/>
        })}
      </div>
      <h2>Frameworks & Packages</h2>
      <div className="language-list">
        {frameworks.map(language => {
          return <Language language={language}/>
        })}
      </div>
      <h2>Services & Technologies</h2>
      <div className="language-list">
        {services.map(language => {
          return <Language language={language}/>
        })}
      </div>
    </div>
  }

  return <div>
    <h1>Programmer</h1>
    <Languages/>
  </div>
};

const MainPage = (props) => {

  let location = useLocation();

  return <>
    <Switch location={location}>
      <Route exact path="/">
        <div id="heading">
          <LetterPreservationTitle messages={[
            'Daniel Thomas',
            'Full Stack Developer',
            'Programmer',
            'Artist',
            'Mathematician',
            'Streamer',
            'Tournament Organizer',
            'Musician',
            '3D Modeller',
            '3D Printer'
          ]}/>
        </div>
        <div id="win95">
          <Windows95Window/>
        </div>
        <div id="developer">
          <Developer/>
        </div>
        <Link to="/path">PATH</Link>
      </Route>
      <Route path="/path">
        Path
      </Route>
      <Route path="*">
        404
      </Route>
    </Switch>
  </>

}

export default MainPage;