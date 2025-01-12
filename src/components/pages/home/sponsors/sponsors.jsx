import React from 'react';

import Button from 'components/shared/button';

import AwsCommunityDays from './logos/AwsCommunityDays.png';
import Cncf from './logos/Cncf.png';
import KcdMunich from './logos/KcdMunich.svg';
import KcdZurich from './logos/KcdZurich.png';

const sponsors = [
  // {
  //   title: 'Gold',
  //   sponsors: [],
  // },
  // {
  //   title: 'Silver',
  //   sponsors: [],
  // },
  // {
  //   title: 'Bronze',
  //   sponsors: [],
  // },
  {
    title: 'Media Partners',
    sponsors: [
      { url: 'https://www.cncf.io', logo: Cncf },
      { url: 'https://www.kcdmunich.de', logo: KcdMunich },
      { url: 'https://kcdzurich.ch', logo: KcdZurich },
      { url: 'https://aws-community-day.de', logo: AwsCommunityDays, background: '#2A3644' },
    ],
  },
];

const Sponsors = () => (
  <section className="safe-paddings container-md text-center">
    <h1 id="sponsors">Sponsors</h1>

    <p>
      Join us in making KCD Vienna a memorable and impactful event for all attendees. To explore
      sponsorship opportunities, please don't hesitate to get in touch with us today. Your support
      will help us create an unforgettable experience for the community while enhancing your brand's
      visibility and recognition. Contact us at{' '}
      <a
        href="mailto:organizers@kcdaustria.at"
        className="text-purple"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        organizers@kcdaustria.at{' '}
      </a>
    </p>
    <div className="mt-6 mb-12 flex flex-row justify-center gap-4 sm:flex-col">
      <a
        href="https://drive.google.com/file/d/1N8cEPWVh2vJEDxOd75cTmSkTMDkDIl8h/view?usp=share_link"
        target="_blank"
        rel="noreferrer"
      >
        <Button>Information Slides</Button>
      </a>
      <a href="mailto:organizers@kcdaustria.at" target="_blank" rel="noreferrer">
        <Button>Get in touch</Button>
      </a>
    </div>

    {sponsors.map(({ title, sponsors }, index) => (
      <div key={index}>
        <h2>{title}</h2>
        <div className="flex flex-row flex-wrap w-full justify-center mb-12 sm:gap-4">
          {sponsors.map(({ logo, url, background }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              className="w-1/4 hover:scale-105 md:w-1/2 sm:w-5/6 px-6"
              rel="noreferrer"
            >
              <img
                src={logo}
                className="w-full h-[100px] object-contain rounded-md p-2"
                style={{ background }}
                loading="lazy"
                alt="sponsor-logo"
              />
            </a>
          ))}
        </div>
      </div>
    ))}
  </section>
);
export default Sponsors;
