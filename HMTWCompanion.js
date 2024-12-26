module.exports = {
    title: "HMTW Companion", 
    author: "deerlikeDyke (<a href='https://deerlikedyke.github.com/'>GitHub</a>)",
    modVersion: 0.5,
  
    summary: "A read-along mod for listeners of the Homestuck Made This World podcast",
    description: "Flags the beginning and ending of the chunks of reading for Homestuck Made This World <i>partisodes</i> so you don't need to keep manually keep track of page numbers.",

    edit:"true",

    computed(api) {
      const logger = api.logger;
      return {
        edit(archive) {
      
        for (const entry of HMTWData) {
          logger.debug(entry);
          const start_page = pageToKey(entry.start);
            if (start_page!="005837"){
              archive.mspa.story[start_page].title = archive.mspa.story[start_page].title.concat(
                ` (Start of E${entry.episode}P${entry.part})`
              );
          }
  
          const end_page = pageToKey(entry.end);
          switch (end_page) {
            case "005836":
              archive.mspa.story[end_page].title = archive.mspa.story[end_page].title.concat(
                ` (End of E${entry.episode}P${entry.part}... but don't start clicking panels!)`
              );
              archive.mspa.story[end_page].content = archive.mspa.story[end_page].content.concat(
                `<br /><br /> <b>With <i>this</i> page you have reached the end of the reading for Episode ${entry.episode} Part ${entry.part} of Homestuck Made This World! You may now listen to it <a href="${entry.url}">here</a> before moving on to the next chunk of reading by finally clicking on those scattered panels above.</b>`);
              break;
            case "010030":
              archive.mspa.story[end_page].content = archive.mspa.story[end_page].content.concat(
                `<br /><br /> With this page the reading for Episode ${entry.episode} Part ${entry.part} of Homestuck Made This World, as well as the main story of Homestuck, is finally finished!  You may now listen to it <a href="${entry.url}">here</a> before moving on to the Epilogues.`);
                break;
            default:
              archive.mspa.story[end_page].title = archive.mspa.story[end_page].title.concat(
                ` (End of E${entry.episode}P${entry.part})`
              );
    
              archive.mspa.story[end_page].content = archive.mspa.story[end_page].content.concat(
              `<br /><br /> You have reached the end of the reading for Episode ${entry.episode} Part ${entry.part} of Homestuck Made This World! You may now listen to it <a href="${entry.url}">here</a> before moving on to the next chunk of reading.`);
              break;
          }
          
        }
  
      }}
    }
    
  }

  function pageToKey(page) {
    return `${page + 1900}`.padStart(6, "0");
  }

  let HMTWData = [
    {
        url: "http://rangedtouch.com/2021/08/10/episode-1-part-1/",
        episode: "1",
        part: "1",
        start: 1,
        end: 47
    },
    {
        url: "https://rangedtouch.com/2021/09/03/episode-1-part-2/",
        episode: "1",
        part: "2",
        start: 48,
        end: 248
    },
    {
        url: "http://rangedtouch.com/2021/09/17/episode-1-part-3/",
        episode: "1",
        part: "3",
        start: 249,
        end: 439
    },
    {
        url: "http://rangedtouch.com/2021/10/01/episode-1-part-4/",
        episode: "1",
        part: "4",
        start: 440,
        end: 758
    },
    {
        url: "http://rangedtouch.com/2021/10/15/episode-2-part-1/",
        episode: "2",
        part: "1",
        start: 759,
        end: 952
    },
    {
        url: "http://rangedtouch.com/2021/10/29/episode-2-part-2/",
        episode: "2",
        part: "2",
        start: 953,
        end: 1153
    },
    {
        url: "http://rangedtouch.com/2021/11/12/episode-2-part-3/",
        episode: "2",
        part: "3",
        start: 1154,
        end: 1357
    },
    {
        url: "http://rangedtouch.com/2021/11/26/episode-3-part-1/",
        episode: "3",
        part: "1",
        start: 1358,
        end: 1560
    },
    {
        url: "http://rangedtouch.com/2021/12/10/episode-3-part-2/",
        episode: "3",
        part: "2",
        start: 1561,
        end: 1770
    },
    {
        url: "http://rangedtouch.com/2021/12/24/episode-3-part-3/",
        episode: "3",
        part: "3",
        start: 1771,
        end: 1988
    },
    {
        url: "http://rangedtouch.com/2022/01/07/episode-4-part-1/",
        episode: "4",
        part: "1",
        start: 1989,
        end: 2194
    },
    {
        url: "http://rangedtouch.com/2022/01/21/episode-4-part-2/",
        episode: "4",
        part: "2",
        start: 2195,
        end: 2406
    },
    {
        url: "http://rangedtouch.com/2022/02/04/episode-4-part-3/",
        episode: "4",
        part: "3",
        start: 2407,
        end: 2625
    },
    {
        url: "http://rangedtouch.com/2022/02/18/episode-5-part-1/",
        episode: "5",
        part: "1",
        start: 2626,
        end: 2840
    },
    {
        url: "http://rangedtouch.com/2022/03/04/episode-5-part-2/",
        episode: "5",
        part: "2",
        start: 2841,
        end: 3087
    },
    {
        url: "http://rangedtouch.com/2022/03/18/episode-5-part-3/",
        episode: "5",
        part: "3",
        start: 3089,
        end: 3349
    },
    {
        url: "http://rangedtouch.com/2022/04/01/episode-5-part-4/",
        episode: "5",
        part: "4",
        start: 3350,
        end: 3546
    },
    {
        url: "http://rangedtouch.com/2022/04/15/episode-6-part-1/",
        episode: "6",
        part: "1",
        start: 3547,
        end: 3763
    },
    {
        url: "http://rangedtouch.com/2022/04/29/episode-6-part-2/",
        episode: "6",
        part: "2",
        start: 3764,
        end: 3936
    },
    {
        url: "http://rangedtouch.com/2022/05/13/episode-6-part-3/",
        episode: "6",
        part: "3",
        start: 3937,
        end: 4099
    },
    {
        url: "http://rangedtouch.com/2022/05/27/episode-6-part-4/",
        episode: "6",
        part: "4",
        start: 4100,
        end: 4112
    },
    {
        url: "http://rangedtouch.com/2022/06/10/episode-7-part-1/",
        episode: "7",
        part: "1",
        start: 4113,
        end: 4390
    },
    {
        url: "http://rangedtouch.com/2022/06/24/episode-7-part-2/",
        episode: "7",
        part: "2",
        start: 4391,
        end: 4584
    },
    {
        url: "http://rangedtouch.com/2022/07/08/episode-7-part-3/",
        episode: "7",
        part: "3",
        start: 4586,
        end: 4819
    },
    {
        url: "http://rangedtouch.com/2022/07/22/episode-8-part-1/",
        episode: "8",
        part: "1",
        start: 4820,
        end: 5028
    },
    {
        url: "http://rangedtouch.com/2022/08/05/episode-8-part-2/",
        episode: "8",
        part: "2",
        start: 5029,
        end: 5262
    },
    {
        url: "http://rangedtouch.com/2022/08/19/episode-8-part-3/",
        episode: "8",
        part: "3",
        start: 5263,
        end: 5511
    },
    {
        url: "http://rangedtouch.com/2022/09/02/episode-9-part-1/",
        episode: "9",
        part: "1",
        start: 5512,
        end: 5682
    },
    {
        url: "http://rangedtouch.com/2022/09/16/episode-9-part-2/",
        episode: "9",
        part: "2",
        start: 5683,
        end: 5926
    },
    {
        url: "http://rangedtouch.com/2022/09/30/episode-9-part-3/",
        episode: "9",
        part: "3",
        start: 5927,
        end: 6242
    },
    {
        url: "http://rangedtouch.com/2022/10/14/episode-10-part-1/",
        episode: "10",
        part: "1",
        start: 6243,
        end: 6247
    },
    {
        url: "http://rangedtouch.com/2022/10/28/episode-10-part-2/",
        episode: "10",
        part: "2",
        start: 6475,
        end: 6747
    },
    {
        url: "http://rangedtouch.com/2022/11/11/episode-10-part-3/",
        episode: "10",
        part: "3",
        start: 6748,
        end: 6953
    },
    {
        url: "http://rangedtouch.com/2022/11/25/episode-11-part-1/",
        episode: "11",
        part: "1",
        start: 6954,
        end: 7187
    },
    {
        url: "http://rangedtouch.com/2022/12/09/episode-11-part-2/",
        episode: "11",
        part: "2",
        start: 7188,
        end: 7448
    },
    {
        url: "http://rangedtouch.com/2022/12/22/episode-12-part-1/",
        episode: "12",
        part: "1",
        start: 7449,
        end: 7687
    },
    {
        url: "http://rangedtouch.com/2023/01/06/episode-12-part-2/",
        episode: "12",
        part: "2",
        start: 7688,
        end: 7959
    },
    {
        url: "http://rangedtouch.com/2023/01/20/episode-12-part-3/",
        episode: "12",
        part: "3",
        start: 7960,
        end: 8129
    }
]