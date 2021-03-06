import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Timothy Bella, Adela Suliman",
      title: "Cruz confronted at restaurant over gun control after Uvalde shooting - The Washington Post",
      description: "Hours earlier, Cruz took to the stage at the NRA’s annual meeting in Houston, where he joined former president Donald Trump in rejecting proposals for new restrictions and calling instead for more school security or mental health screenings.",
      url: "https://www.washingtonpost.com/politics/2022/05/28/ted-cruz-nra-uvalde-heckled-restaurant/",
      urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P4YCGGW6DYI6ZPBVVEOQVFESHM.jpg&w=1440",
      publishedAt: "2022-05-28T17:46:46Z",
      content: "Placeholder while article actions load\r\nSen. Ted Cruz (R-Tex.) was heckled at a Houston restaurant on Friday night, following his speech at the National Rifle Associations convention, in which he bro… [+7631 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Obi-Wan Kenobi: Did This Major Death Break the Star Wars Timeline? | Canon Fodder - IGN",
      description: "SPOILER ALERT: If you haven't seen Obi-Wan Kenobi on Disney Plus yet, read no further because we're about to spoil it! Obi-Wan Kenobi - it's name we haven't ...",
      url: "https://www.youtube.com/watch?v=IFWCk0T7FZo",
      urlToImage: "https://i.ytimg.com/vi/IFWCk0T7FZo/hqdefault.jpg",
      publishedAt: "2022-05-28T17:34:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Jimmy Butler responded in a huge way for the Heat in Game 6 - ESPN",
      description: "Jimmy Butler responded in a huge way for the Heat in Game 6 😤✔️Subscribe to ESPN+ http://espnplus.com/youtube✔️ Get the ESPN App: http://www.espn.com/espn/a...",
      url: "https://www.youtube.com/watch?v=2QPmu0fE0Eg",
      urlToImage: "https://i.ytimg.com/vi/2QPmu0fE0Eg/hqdefault.jpg",
      publishedAt: "2022-05-28T17:11:43Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "J. David Goodman, Edgar Sandoval, Karen Zraick, Rick Rojas",
      title: "Latest News on Texas Elementary School Shooting - The New York Times",
      description: "The manufacturer’s aggressive marketing included ads that featured children firing guns. In Uvalde, questions were being raised about whether a faster police response could have saved lives.",
      url: "https://www.nytimes.com/live/2022/05/28/us/texas-school-shooting",
      urlToImage: "https://static01.nyt.com/images/2022/05/28/multimedia/28uvaldePromo-1145aEST/28uvaldePromo-1145aEST-facebookJumbo.jpg",
      publishedAt: "2022-05-28T16:38:02Z",
      content: "UVALDE, Texas Furtively, speaking in a whisper, a fourth-grade girl dialed the police. Around her, in Room 112 at Robb Elementary School, were the motionless bodies of her classmates and scores of sp… [+10817 chars]",
    },
    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Corinne Heller",
      title: "Elon Musk Shares Opinion About Amber Heard and Johnny Depp Before Defamation Trial Verdict - E! NEWS",
      description: "Elon Musk has broken his silence about his ex Amber Heard and her ex-husband Johnny Depp as the latter former couple's defamation trial wraps up.",
      url: "https://www.eonline.com/news/1332717/elon-musk-shares-opinion-about-amber-heard-and-johnny-depp-before-defamation-trial-verdict",
      urlToImage: "https://akns-images.eonline.com/eol_images/Entire_Site/2022428/rs_1200x1200-220528085852-1200-Amber-Heard-Elon-Musk-Johnny-Depp.jpg?fit=around%7C1080:566&output-quality=90&crop=1080:566;center,top",
      publishedAt: "2022-05-28T16:11:00Z",
      content: 'During his deposition, Carino was asked about an August 2017 text exchange with Heard, who wrote to him, "dealing with breakup. I hate when things go public. C, I\'m so sad." The agent told the court,… [+951 chars]',
    },
    {
      source: {
        id: null,
        name: "WRAL.com",
      },
      author: "Faye Prosser",
      title: "National Hamburger Day 2022 is today, May 28: See the list of deals - WRAL News",
      description: "National Hamburger Day is Saturday, May 28 and you can score some great deals at a number of restaurants!",
      url: "https://www.wral.com/national-hamburger-day-2022-is-today-may-28-see-the-list-of-deals/20300727/",
      urlToImage: "https://wwwcache.wral.com/asset/5oys/smartshopper/2021/05/21/19689451/Smashburger_burger_and_fries_from_PR_approved-DMID1-5qxk05ygb-640x480.jpg",
      publishedAt: "2022-05-28T15:50:59Z",
      content: "National Hamburger Day is Saturday, May 28, 2022 and you can score some great deals at a number of restaurants!\r\nThis list will continue to grow as we get closer to Saturday.\r\nBurgerFi:\r\n During the … [+2505 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Pamela McClintock",
      title: "Box Office: Tom Cruise’s ‘Top Gun 2’ Sets Off Sonic Boom With Projected $150M Opening - Hollywood Reporter",
      description: "Logo text Superheroes and horror aren’t the only game in town anymore at the box office. Paramount and Skydance’s Top Gun: Maverick grossed a massive $51.8 million on Friday — including $19.3 million in previews — as it opened in more than 4,700 theaters in N…",
      url: "https://www.hollywoodreporter.com/movies/movie-news/top-gun-opens-box-office-tom-cruise-1235155078/",
      urlToImage: "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/tgm-ff-f-001r-H-2022.jpg?w=1024",
      publishedAt: "2022-05-28T15:45:00Z",
      content: "Superheroes and horror aren’t the only game in town anymore at the box office.\r\nParamount and Skydance’s Top Gun: Maverick grossed a massive $51.8 million Friday — including $19.3 million in previews… [+3510 chars]",
    },
    {
      source: {
        id: null,
        name: "autosport.com",
      },
      author: "Alex Kalinauckas",
      title: "F1 Monaco GP: Leclerc claims home pole as Perez suffers late crash - Autosport",
      description: "Charles Leclerc claimed a home pole in a Ferrari 1-2 in qualifying for Formula 1’s 2022 Monaco race, which finished under red flags after Sergio Perez crashed late in Q3.",
      url: "https://www.autosport.com/f1/news/f1-monaco-gp-leclerc-claims-home-pole-as-perez-suffers-late-crash/10312508/",
      urlToImage: "https://cdn-1.motorsport.com/images/amp/01W5yPeY/s6/charles-leclerc-ferrari-f1-75-.jpg",
      publishedAt: "2022-05-28T15:22:08Z",
      content: "Leclerc had led his team-mate Carlos Sainz ahead of the final laps in Q3, with his 1m11.376s the benchmark time for pole.\r\nPerez looked to be Red Bulls best hope for pole after topping FP3 and leadin… [+4242 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Peter Botte",
      title: "MLB investigating Tommy Pham slap of Joc Pederson over fantasy football flap - New York Post ",
      description: "People take their fantasy football teams far too seriously, even professional athletes.",
      url: "https://nypost.com/2022/05/28/mlb-investigating-tommy-pham-slap-of-joc-pederson-over-fantasy-football-flap/",
      urlToImage: "https://nypost.com/wp-content/uploads/sites/2/2022/05/joc_pham.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-05-28T14:36:00Z",
      content: "People take their fantasy football teams far too seriously, even professional athletes.\r\nGiants outfielder Joc Pederson said he was slapped in the face by Reds outfielder Tommy Pham during an alterca… [+2288 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title: "Watch the Dramatic Video of NASA's Ingenuity Mars Helicopter's Record-Breaking Flight - SciTechDaily",
      description: "Farther and Faster Than Ever Before Imagery has come down from Mars capturing a recent flight in which the NASA Ingenuity Mars Helicopter flew farther and faster than ever before. The black-and-white navigation camera aboard the Ingenuity Mars Helicopter has …",
      url: "https://scitechdaily.com/watch-the-dramatic-video-of-nasa-ingenuity-mars-helicopter-record-breaking-flight/",
      urlToImage: "https://scitechdaily.com/images/NASA-Ingenuity-Mars-Helicopter-Record-Flight.gif",
      publishedAt: "2022-05-28T14:34:15Z",
      content: "ByJet Propulsion LaboratoryMay 28, 2022\r\nNASAs Ingenuity Mars Helicopter made a record-breaking 25th flight on April 8, 2022. The navigation camera aboard the rotorcraft captured its longest and fast… [+5200 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nicole Chavez, CNN\nPhotographs by Matthew Busch for CNN",
      title: "Children are Uvalde's pride and joy. After school shooting, the town is reeling from mass tragedy - CNN",
      description: "In Uvalde, Texas, prayers have replaced the laughter that once echoed throughout a town centered around its children.",
      url: "https://www.cnn.com/2022/05/28/us/uvalde-texas-life-before-and-after-massacre/index.html",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220525224304-01-uvalde-vigil-052522-super-tease.jpg",
      publishedAt: "2022-05-28T14:34:00Z",
      content: "By Nicole Chavez, CNNPhotographs by Matthew Busch for CNN\r\nUpdated 10:34 AM ET, Sat May 28, 2022\r\nUvalde, Texas (CNN)Crystal Sanchez recalls the smiles of hundreds of children when they got free mani… [+9278 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nimi Princewill, CNN",
      title: "More than 30 people, including children, killed in stampede at church event in Nigeria - CNN",
      description: "More than 30 people were killed and others injured when a stampede broke out at a church event in the southeastern Nigerian city of Port Harcourt on Saturday, according to police and security officials.",
      url: "https://www.cnn.com/2022/05/28/africa/nigeria-stampede-intl/index.html",
      urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/220528153526-port-harcourt-super-tease.jpg",
      publishedAt: "2022-05-28T13:55:00Z",
      content: "Abuja, Nigeria (CNN)More than 30 people were killed and others injured when a stampede broke out at a church event in the southeastern Nigerian city of Port Harcourt on Saturday, according to police … [+886 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Daniel Dale",
      title: "Fact check: Debunking false viral tweets about Abbott and Cruz after Texas mass shooting - CNN",
      description: "In the wake of the Tuesday mass shooting at an elementary school in Texas, Twitter users went viral by making false claims about two of the state's most prominent politicians: Gov. Greg Abbott and Sen. Ted Cruz, both Republicans.",
      url: "https://www.cnn.com/2022/05/28/politics/fact-check-false-viral-tweets-texas-shooting-abbott-cruz/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/220527194256-abbott-cruz-split.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-05-28T13:36:00Z",
      content: "In the wake of the Tuesday mass shooting at an elementary school in Texas, Twitter users went viral by making false claims about two of the states most prominent politicians: Gov. Greg Abbott and Sen… [+4006 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Megan Sauer",
      title: "President Joe Biden says young people need these 3 leadership skills to change the world - CNBC",
      description: "At the Naval Academy's commencement ceremony, President Joe Biden said the class of 2022 is well-prepared to change the world because of the challenges they endured through college.",
      url: "https://www.cnbc.com/2022/05/28/president-joe-biden-young-people-need-these-3-leadership-skills.html",
      urlToImage: "https://image.cnbcfm.com/api/v1/image/107068368-1653675082307-gettyimages-1399599162-_m1_6685_62c0e9da-75ce-4a3f-99d2-c75f080cf176.jpeg?v=1653675111&w=1920&h=1080",
      publishedAt: "2022-05-28T13:15:01Z",
      content: "The last two years have been tough for just about everyone. President Joe Biden sees a silver lining to that, especially for recent college graduates.\r\nSpeaking at the Naval Academy's commencement ce… [+2475 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Putin says he's willing to discuss resuming Ukrainian grain shipments - Reuters.com",
      description: "Russian President Vladimir Putin told the leaders of France and Germany in a phone call on Saturday that Russia was willing to discuss ways to make it possible for Ukraine to resume shipments of grain from Black Sea ports, the Kremlin said.",
      url: "https://www.reuters.com/world/europe/putin-says-hes-willing-discuss-resuming-ukrainian-grain-shipments-2022-05-28/",
      urlToImage: "https://www.reuters.com/resizer/vVAnkd15P0edRc-QPb5fI9yTAHc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GI5F2P2L2FK2TBV3EMDK4ONDWE.jpg",
      publishedAt: "2022-05-28T13:06:00Z",
      content: "May 28 (Reuters) - Russian President Vladimir Putin told the leaders of France and Germany in a phone call on Saturday that Russia was willing to discuss ways to make it possible for Ukraine to resum… [+1530 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "ABC News",
      title: "Blaming mass shootings on the nation's mental health crisis is 'harmful', advocates say - ABC News",
      description: "According to the National Alliance on Mental Illness, approximately 1 in 5 adults in the U.S. experience mental illness each year.",
      url: "https://abcnews.go.com/Health/blaming-mass-shootings-nations-mental-health-crisis-harmful/story?id=84973562",
      urlToImage: "https://s.abcnews.com/images/US/Uvalde-1-gty-er-220526_1653593822371_hpMain_16x9_992.jpg",
      publishedAt: "2022-05-28T13:04:13Z",
      content: "Tuesday marked yet another tragic day in America, after a gunman opened fire at an elementary school in rural Texas, leaving 19 children and two teachers dead, and dozens of family members and friend… [+14689 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Ryan Hogg",
      title: "Elon Musk said Bill Gates has a multi-billion dollar bet against Tesla and calls Jeff Bezos 'fine, I guess' - Yahoo News",
      description: 'Musk reiterated his criticism of Bill Gates and advised Jeff Bezos to spend "less time in the hot tub" and partying "if he wants to get to orbit."',
      url: "https://www.businessinsider.com/elon-musk-bill-gates-multi-billion-dollar-short-against-tesla-2022-5",
      urlToImage: "https://i.insider.com/62921696ff955c0019c5e112?width=1200&format=jpeg",
      publishedAt: "2022-05-28T12:11:20Z",
      content: 'Elon Musk said Bill Gates has a multibillion dollar short against Tesla and called Jeff Bezos "fine, I guess," in a series of tweets targeting rival billionaires.\r\nMusk\'s tweets followed a poll askin… [+1715 chars]',
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title: "2022 Champions League final picks: Real Madrid vs. Liverpool matchup to watch, likely to score, predictions - CBS Sports",
      description: "Which team will hoisted the coveted Champions League trophy in France?",
      url: "https://www.cbssports.com/soccer/news/2022-champions-league-final-picks-real-madrid-vs-liverpool-matchup-to-watch-likely-to-score-predictions/",
      urlToImage: "https://sportshub.cbsistatic.com/i/r/2022/05/27/10efbb06-5e58-4292-a5f9-36720b626ef7/thumbnail/1200x675/90639ed8aba794f38f2313b1c3558a7c/getty-images-champions-league-final-trophy.jpg",
      publishedAt: "2022-05-28T11:49:00Z",
      content: "The UEFA Champions League final is finally here with Liverpool and Real Madrid meeting at Stade de France in Saint-Denis on Saturday to decide this edition's winner. It is not the first time that the… [+4749 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Disease experts call on WHO, governments for more action on monkeypox - Reuters.com",
      description: "Some prominent infectious disease experts are pushing for faster action from global health authorities to contain a growing monkeypox outbreak that has spread to at least 20 countries.",
      url: "https://www.reuters.com/business/healthcare-pharmaceuticals/disease-experts-call-who-governments-more-action-monkeypox-2022-05-28/",
      urlToImage: "https://www.reuters.com/resizer/DUdkcXXESyA2BDciscjpHNuMfdU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FAOVV7B6ZFLWDHFDKHOGC6SMNA.jpg",
      publishedAt: "2022-05-28T11:07:00Z",
      content: "GENEVA, May 28 (Reuters) - Some prominent infectious disease experts are pushing for faster action from global health authorities to contain a growing monkeypox outbreak that has spread to at least 2… [+4595 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title: "Trump Jr. allies issue warning to Stefanik camp: Don't go after Tucker's kid - POLITICO",
      description: "She faces plenty of future GOP leadership competitors, including Rep. Jim Banks. And her camp got burned after allegedly raising Banks aide Buckley Carlson.",
      url: "https://www.politico.com/news/2022/05/28/high-flying-stefanik-scorched-by-allies-whisper-campaign-against-a-rival-00035839",
      urlToImage: "https://static.politico.com/b3/e2/5d207a7a43c9b941a18a91475ab9/220527-elise-stefanik-ap-773.jpg",
      publishedAt: "2022-05-28T11:00:00Z",
      content: "POLITICO was unable to confirm the veracity of the pro-Stefanik whisper campaign against Banks. But whether real or rumor, the pushback from allies of the former presidents eldest son could imperil t… [+6076 chars]",
    }
  ];
  constructor() {
    super();
    
      this.state = {
          articles: [],
          loading:false,
    };
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3c27abc78fd4a2ba7bfb7706450cf49";
    let data = fetch(url);
    let parseData = await (await data).json()
    this.setState({articles:parseData.articles})
    console.log(parseData)
    
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {

            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0,45) :""}
                  description={element.description?element.description.slice(0,88):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
            
          })}

          
        </div>
      </div>
    );
  }
}

export default News
