import React, { useEffect, useState, useRef } from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';
import jupiterImg from '../../images/jupiter.png';
import earthImg from '../../images/earth.png';
import catImg from '../../images/cat.png';
import duckImg from '../../images/duck.png';

const LetterPreservationTitle = ({messages}) => {
  const [sCurrentTitle, uCurrentTitle] = useState(0);

  const letters = messages.reduce((acc, title) => {
    return acc + title;
  }).split('').sort();

  useEffect(() => {
    setTimeout(() => {
      uCurrentTitle((sCurrentTitle + 1) % messages.length)
    }, 4000);
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
        title: 'GDScript',
        experience: 10,
        experienceNote: 'only done a little but want to do more',
        opinion: 40,
        opinionNote: 'not enough experience but seems nice'
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
        experience: 40,
        experienceNote: 'former certified solutions architect associate',
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
          <div className="bar">
            <div className="bar-back experience"></div>
            <div className="bar-front experience" style={{width: `${language.experience}%`}}></div>
          </div>
          <p className="bar-note">{language.experienceNote}</p>
          <h4>Opinion:</h4>
          <div className="bar">
            <div className="bar-back opinion"></div>
            <div className="bar-front opinion" style={{width: `${language.opinion}%`}}></div>
          </div>
          <p className="bar-note">{language.opinionNote}</p>
        </div>
      </div>
    };

    return <div id="languages">
      {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((k, i) => {
        const left = Math.floor(Math.random() * 20) + 20;
        const right = Math.floor(Math.random() * 20) + 20;
        const centre = Math.floor(Math.random() * 10) + Math.max(left, right) + 5;

        return <div className="cloud" style={{animationDelay: Math.random() * 1000 + 'ms', left: Math.random() * 110 - 10 + '%', top: Math.random() * 110 - 10 + '%'}} key={'cloud' + i}>
          <div className="cloud-left" style={{height: left + 'px', width: left + 'px', left: left / 2 + 'px'}}>
            <div className="cloud-left absolute" style={{height: left - 6 + 'px', width: left - 6 + 'px', left: 3 + 'px', top: 3 + 'px', backgroundColor: '#ffffff'}}></div>
            <div className="cloud-left absolute" style={{height: left - 6 + 'px', width: left - 6 + 'px', left: 3 + 4.5 ** 0.5 + 'px', top: 3 + 4.5 ** 0.5 + 'px', backgroundColor: '#eeeeee'}}></div>
          </div>
          <div className="cloud-centre" style={{height: centre + 'px', width: centre + 'px'}}>
          <div className="cloud-left absolute" style={{height: centre - 6 + 'px', width: centre - 6 + 'px', left: 3 + 'px', top: 3 + 'px', backgroundColor: '#ffffff'}}></div>
            <div className="cloud-left absolute" style={{height: centre - 6 + 'px', width: centre - 6 + 'px', left: 3 + 4.5 ** 0.5 + 'px', top: 3 + 4.5 ** 0.5 + 'px', backgroundColor: '#eeeeee'}}></div>
          </div>
          <div className="cloud-right" style={{height: right + 'px', width: right + 'px', right: right / 2 + 'px'}}>
          <div className="cloud-left absolute" style={{height: right - 6 + 'px', width: right - 6 + 'px', left: 3 + 'px', top: 3 + 'px', backgroundColor: '#ffffff'}}></div>
            <div className="cloud-left absolute" style={{height: right - 6 + 'px', width: right - 6 + 'px', left: 3 + 4.5 ** 0.5 + 'px', top: 3 + 4.5 ** 0.5 + 'px', backgroundColor: '#eeeeee'}}></div>
          </div>
        </div>
      })}
      <h2>Languages</h2>
      <div className="language-list">
        {languages.map(language => {
          return <Language language={language} key={language.title}/>
        })}
      </div>
      <h2>Frameworks & Packages</h2>
      <div className="language-list">
        {frameworks.map(language => {
          return <Language language={language} key={language.title}/>
        })}
      </div>
      <h2>Services & Technologies</h2>
      <div className="language-list">
        {services.map(language => {
          return <Language language={language} key={language.title}/>
        })}
      </div>
      <div className="hills">
        <div className="hill-3"></div>
        <div className="hill-2"></div>
        <div className="hill-1"></div>
      </div>
    </div>
  }

  return <div>
    <Languages/>
  </div>
};

const Job = ({index, sJobIndex, job}) => {
  const diff = sJobIndex - index;
  let position = 'center';

  if (diff < -1) position = 'leftmost'
  else if (diff === -1) position = 'left'
  else if (diff === 1) position = 'right'
  else if (diff > 1) position = 'rightmost'

  return <div className={`job ${position}`}>
    <div>
      <h1>{job.title}</h1>
      <h3>{job.date}</h3>
    </div>
    <h2>{job.company}, {job.location}</h2>
    <p>{job.description}</p>
  </div>
}

const Work = () => {
  const [sJobIndex, uJobIndex] = useState(0);

  const jobs = [
    {
      title: 'Software Developer',
      company: 'Pretty Little Thing',
      location: 'Manchester',
      date: '2019 - 2021',
      description: 'Worked on internal tools for multiple other departments. Front end consisted of Vue with Laravel. Back end used AWS Lambda and JavaScript, later TypeScript. Heavy integration with AWS, particularly API Gateway and DynamoDB.'
    },
    {
      title: 'Volunteer Coding Tutor',
      company: 'Code & Stuff',
      location: 'Manchester',
      date: '2018 - 2020',
      description: 'I was a tutor for an organization that aimed to help women and gender minorities learn to program in the aim of entering the tech industry.'
    },
    {
      title: 'Infrastructure Developer',
      company: 'Weaveability',
      location: 'Bury',
      date: '2018 - 2019',
      description: 'A developer as part of the infrastructure team. Mainly created tools for monitoring and controlling EC2 instances.'
    },
    {
      title: 'Gaming Arena Staff Member',
      company: 'Belong @ GAME',
      location: 'Trafford',
      date: '2016 - 2018'
    },
    {
      title: 'Esports Tournament Streamer',
      company: 'Big Good',
      location: 'Nationwide & International',
      date: '2017 - 2018'
    },
    {
      title: 'Esports Tournament Organizer',
      company: 'Team Heir',
      location: 'Nationwide',
      date: '2015 - 2018',
      description: 'Originally brought on as a graphics designer, went on to be involved with multiple aspects of tournament organization. Events worked on include Heir 2, Heir 3, Heir 4, Heir 5 and Origin.'
    },
  ]

  const nextIndex = () => uJobIndex(Math.min(sJobIndex + 1, jobs.length - 1));
  const prevIndex = () => uJobIndex(Math.max(sJobIndex - 1, 0));
  const chooseIndex = i => uJobIndex(i);

  return <div id="work">
    <div className="planet-system" style={{left: '300px', bottom: '300px'}}>
      <div className="planet"><img height="200" width="200" src={jupiterImg}></img></div>
      <div className="moon"><div><div><img width="90" heigh="90" src={duckImg}></img></div></div></div>
    </div>
    <div className="planet-system" style={{right: '400px', top: '100px'}}>
      <div className="planet"><img height="200" width="200" src={earthImg}></img></div>
      <div className="moon" style={{animationDuration: '21s'}}>
        <div style={{animationDuration: '50s'}}>
          <div style={{animationDuration: '21s'}}><img width="70" heigh="70" src={catImg}></img></div>
        </div>
      </div>
    </div>
    <div className="main">
      <button onClick={nextIndex}>{'<'}</button>
      <div className="jobs">
        {jobs.map((job, index) => {
          return <Job job={job} index={index} sJobIndex={sJobIndex}/> 
        })}
      </div>
      <button onClick={prevIndex}>{'>'}</button>
    </div>
    <div className="scroll">
      {jobs.map((job, index) => {
        return <div className={`scroll-icon ${index === sJobIndex ? 'selected' : ''}`} key={job.title + '-' + job.date} onClick={() => chooseIndex(index)}></div>
      })}
    </div>
  </div>
}

const MainPage = (props) => {

  const location = useLocation()
  console.log(process.env)

  return <>
    <Switch>
      <Route exact path="/">
        <div className="heading">
          <LetterPreservationTitle messages={[
            'Daniel Thomas BSc.',
            'Full Stack Developer',
            'Programmer',
            'Artist',
            'Gamer',
            'Mathematician',
            'Streamer',
            'Tournament Organizer',
            'Musician',
            '3D Modeller',
            '3D Printing Enthusiast',
            'UK Esports Awards Nominee',
          ]}/>
        </div>
        <div id="win95">
          <Windows95Window/>
        </div>
        <div id="developer">
          <Developer/>
        </div>
        <Work/>
        <div>

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