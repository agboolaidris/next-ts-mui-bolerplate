import Link from '../ui/molecules/Link';
export default [
  {
    title: 'My Career',
    item: [
      {
        description: `The world of technology first opened up to me when I was given a research
               topic on how the internet works in my first year at college.
              since then I have mastered different technologies 
              such as Javascript, React, Typescript, Nodejs, React-Native, etc. 
              `,
        substitle: 'Programming',
        link: <Link href="https://github.com/agboolaidris">view github</Link>,
      },
      {
        description: `My studies in Electronic Engineering have given me 
              a basic understanding of electronic engineering. My internship at Nigeria
               Railway Corporation (NRC) gave me the opportunity to learn the basics of
                circuit design and implementation after graduating.`,
        substitle: 'Electronics',
      },
      {
        description: `Prior to starting a career in software development,
               I worked in the fashion industry for more than 6 years. during that period I trained
               people on how to make clothes and also worked as a facilitator
                at Yaba college of technology skill acquired center.`,
        substitle: 'Fashion',
      },
    ],
  },
  {
    title: 'My Read',
    item: [
      {
        description: `Learn from world's top performers & use proven learning strategies to
        improve memory & productivity. 
              `,
        substitle: 'Rob Dial Podcast',
        link: (
          <Link href="https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ">
            view podcast
          </Link>
        ),
      },
      {
        description: `Enhance your leadership and productivity by learning from world-class
        performers. 
              `,
        substitle: 'Robbin Sharma Podcast',
        link: (
          <Link href="https://open.spotify.com/episode/0I7OgP8OOaFbJrQ5z8c8o0">
            view podcast
          </Link>
        ),
      },
      {
        description: `To get a great understanding of a topic, one of the most important
        things you can do is to keep learning. Code Evolution is one of the
        courses I use most frequently to brush up on my programming knowledge.
              `,
        substitle: 'Code Evolution',
        link: (
          <Link href="https://www.youtube.com/c/Codevolution/playlists">
            youtube channel
          </Link>
        ),
      },
    ],
  },
  {
    title: 'My Hobby',
    item: [
      {
        description: `Kepping in shape is one of most importance  to me, so I spend my weekend training as a boxer.`,
        substitle: 'Boxing',
      },
      {
        description: `I enjoy researching about the history of black people around the world in my free time.`,
        substitle: 'Research',
      },
    ],
  },
];
