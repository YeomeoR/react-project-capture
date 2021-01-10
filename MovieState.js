//import Images
import athlete from './images/athlete-small.png';
import goodtimes from './images/goodtimes-small.png';
import theracer from './images/theracer-small.png';
import athlete2 from './images/athlete2.png';
import goodtimes2 from './images/goodtimes2.jpg';
import theracer2 from './images/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A Masterpiece',
          description: '"Lorem Ipsum is simply dummy text"',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description: '"Lorem Ipsum is simply a load of dummy text."',
        },
        {
          title: "It's OK lmao.",
          description: '"Lorem Ipsum is just dummy text."',
        },
      ],
    },
    {
      title: 'Good Times',
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: '/work/good-times',
      awards: [
        {
          title: 'Truly A Masterpiece',
          description: '"Lorem Ipsum is simply dummy text"',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description: '"Lorem Ipsum is simply a load of dummy text."',
        },
        {
          title: "It's OK lmao.",
          description: '"Lorem Ipsum is just dummy text."',
        },
      ],
    },
    {
      title: 'The Racer',
      mainImg: theracer,
      secondaryImg: theracer2,
      url: '/work/the-racer',
      awards: [
        {
          title: 'Truly A Masterpiece',
          description: '"Lorem Ipsum is simply dummy text"',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description: '"Lorem Ipsum is simply a load of dummy text."',
        },
        {
          title: "It's OK lmao.",
          description: '"Lorem Ipsum is just dummy text."',
        },
      ],
    },
  ];
};
