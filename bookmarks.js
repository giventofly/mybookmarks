const bookmarks = [{
    name: "Jose Moreira",
    url: "http://www.josemoreira.pt",
    desc: "it's a me, Mario.",
    tags: ["frontend", "me", "developer"]
  },
  {
    name: "stackoverflow",
    url: "http://www.stackoverflow.com",
    desc: "community driven help",
    tags: ["community"]
  },
  {
    name: "colormind",
    url: "http://colormind.io",
    desc: "generate color palletes",
    tags: ["design", "color", "utility"]
  },
  {
    name: "API List",
    url: "https://apilist.fun/",
    desc: "list of public apis",
    tags: ["api", "utility"]
  },
  {
    name: "Lorem ipsum generator",
    url: "https://loremipsum.io/",
    desc: "generate lorem ipsum text",
    tags: ["design", "utility", "stock", "placeholder"]
  },
  {
    name: "Background Generator",
    url: "https://coolbackgrounds.io/",
    desc: "create css backgrounds, trianglify, etc",
    tags: ["design", "utility", "color"]
  },
  {
    name: "Clip Path generator",
    url: "http://bennettfeely.com/clippy/",
    desc: "Css clip path generator",
    tags: ["css", "utility", "design"]
  },
  {
    name: "Lorem pixel",
    url: "http://lorempixel.com/",
    desc: "ipsum lorem for images",
    tags: ["placeholder", "utility", "image", "stock"]
  },
  {
    name: "Rellax",
    url: "https://dixonandmoe.com/rellax/",
    desc: "Vanilla js parallax library",
    tags: ["javascript", "parallax", "vanilla", "library"]
  },
  {
    name: "what is in standard",
    url: "https://whatsinstandard.com/",
    desc: "mtg standard rotation",
    tags: ["mtg"]
  },
  {
    name: "Anime.js",
    url: "https://github.com/juliangarnier/anime",
    desc: "javascript animation library",
    tags: ["javascript", "animation", "library"]
  },
  {
    name: "Draggable",
    desc: "Draggable comes with additional modules: Sortable, Droppable, Swappable.",
    url: "https://github.com/Shopify/draggable",
    tags: ["javascript", "utility", "library"]
  },
  {
    name: "Bubbly",
    desc: "Background animated with bubbles",
    url: "https://github.com/tipsy/bubbly-bg",
    tags: ["javascript", "design", "library"]
  },
  {
    name: "Tabbis.js",
    desc: "Pure vanilla javascript tabs with nesting ",
    url: "https://github.com/jenstornell/tabbis.js",
    tags: ["javascript", "design", "library"]
  },
  {
    name: "Lazyload",
    desc: "LazyLoad loading images only as they enter the viewport. LazyLoad supports responsive images.",
    url: "https://www.andreaverlicchi.eu/lazyload/",
    tags: ["javascript", "library"]
  },
  {
    name: "JS performance",
    desc: "Benchmark JS scripts",
    url: "https://jsperf.com/",
    tags: ["javascript", "utility", "performance"]
  },
  {
    name: "Plyr.io",
    desc: "A simple, accessible and customisable media player for Video, Audio, YouTube and Vimeo",
    url: "https://plyr.io/",
    tags: ["javascript", "video"]
  },
  {
    name: "Axios",
    desc: "AJAX - Promise based HTTP client for the browser and node.js ",
    url: "https://github.com/axios/axios",
    tags: ["javascript", "library", "ajax"]
  },

  {
    name: "D3js",
    desc: "D3.js is a JavaScript library for manipulating documents based on data.",
    url: "https://d3js.org/",
    tags: ["javascript", "library", "charts", "graph"]
  },
  {
    name: "touch slider",
    desc: "mobile touch slider with hardware accelerated transitions and amazing native behavior. ",
    url: "https://github.com/nolimits4web/swiper/",
    tags: ["javascript", "slider", "mobile", "swipe"]
  },
  {
    name: "Date Dropper",
    desc: "The smallest and powerful jQuery UI datepicker. ",
    url: "http://felicegattuso.com/projects/datedropper/",
    tags: ["javascript", "date"]
  },
  {
    name: "Billboard.js",
    desc: "Re-usable, easy interface JavaScript chart library, based on D3js",
    url: "https://naver.github.io/billboard.js/",
    tags: ["javascript", "charts"]
  },
  {
    name: "Sticky Sidebard",
    desc: "is a pure JavaScript plugin for making smart and high performance sticky sidebar, works with sidebar if it’s taller or shorter than the viewport.",
    url: "https://abouolia.github.io/sticky-sidebar/",
    tags: ["javascript", "sidebard", "design"]
  },
  {
    name: "Micron.js",
    desc: "microInteraction library built with CSS Animations and controlled by JavaScript Power",
    url: "https://webkul.github.io/micron/",
    tags: ["javascript", "animation", "library"]
  },
  {
    name: "Picsum",
    desc: "Lorem Ipsum... but for photos",
    url: "https://picsum.photos/",
    tags: ["image", "placeholder", "stock"]
  },
  {
    name: "CSS3 code generator",
    desc: "CSS3 Generator",
    url: "http://css3generator.com/",
    tags: ["css", "utility"]
  },
  {
    name: "CSS background gradient",
    desc: "CSS3 background gradient generator",
    url: "https://cssgradient.io/",
    tags: ["css", "utility", "image"]
  },

  {
    name: "CSS reference",
    desc: "CSS3 reference",
    url: "https://cssreference.io/",
    tags: ["css", "utility"]
  },
  {
    name: "CSS autoprefixer",
    desc: "Autoprefixer is a PostCSS plugin which parse your CSS and add vendor prefixes",
    url: "https://autoprefixer.github.io/",
    tags: ["css", "utility"]
  },
  {
    name: "Statcounter",
    desc: "Screen Resolution Stats Worldwide",
    url: "http://gs.statcounter.com/screen-resolution-stats",
    tags: ["utility", "responsive"]
  },
  {
    name: "Icon finder",
    desc: "SVG icons",
    url: "https://www.iconfinder.com/",
    tags: ["icons"]
  },
  {
    name: "html 5 reference",
    desc: "html5 reference",
    url: "http://html5please.com/",
    tags: ["html5"]
  },
  {
    name: "Screensizes",
    desc: "Mobile and desktops screensizes",
    url: "http://www.screensiz.es/",
    tags: ["responsive"]
  },
  {
    name: "Font Squirrel",
    desc: "Free fonts",
    url: "https://www.fontsquirrel.com/",
    tags: ["fonts"]
  },
  {
    name: "wordcounter.io",
    desc: "word paraghrap characters count",
    url: "https://wordcounter.io/",
    tags: ["utility"]
  },
  {
    name: "Dribble",
    desc: "Designs mockups inspiration",
    url: "https://dribbble.com/",
    tags: ["design", "image", "inspiration"]
  },
  {
    name: "Pexels",
    desc: "Pexels stock images",
    url: "https://www.pexels.com",
    tags: ["placeholder", "image", "stock"]
  },
  {
    name: "static generators",
    desc: "List of static generators",
    url: "https://www.staticgen.com/",
    tags: ["utility"]
  },
  {
    name: "flat icon",
    desc: "free svg icons",
    url: "https://www.flaticon.com/",
    tags: ["icons"]
  },
  {
    name: "freepik",
    desc: "Free stock images",
    url: "https://www.freepik.com/",
    tags: ["placeholder", "image", "stock"]
  },
  {
    name: "Unsplash",
    desc: "Free stock images",
    url: "https://unsplash.com/",
    tags: ["placeholder", "image", "stock"]
  },
  {
    name: "Naked wordpress",
    desc: "Stripped wordpress theme",
    url: "https://github.com/andjosh/naked-wordpress",
    tags: ["wordpress", "theme"]
  },
  {
    name: "Can i use",
    desc: "can i use spec on browser",
    url: "https://caniuse.com/",
    tags: ["utility", "html5"]
  },
  {
    name: "ACF",
    desc: "Advanced Custom Fields for WordPress Developers.",
    url: "https://www.advancedcustomfields.com/",
    tags: ["wordpress", "plugin", "custom fields"]
  },
  {
    name: "Contact form x",
    desc: "Displays a user-friendly contact form that your visitors will love.",
    url: "https://wordpress.org/plugins/contact-form-x/",
    tags: ["wordpress", "plugin", "contact form"]
  },
  {
    name: "Highlight.Js",
    desc: "Display highlighted code",
    url: "https://highlightjs.org/",
    tags: ["javascript", "plugin"]
  },
  {
    name: "google fonts",
    desc: "google fonts",
    url: "https://fonts.google.com/",
    tags: ["fonts"]
  },

  {
    name: "List.js",
    desc: "list, sort, filter, search lists from divs, tables",
    url: "https://github.com/javve/list.js",
    tags: ["javascript", "sort", "library"]
  },
  {
    name: "imagemap generator",
    desc: "create points for imagemap",
    url: "http://imagemap-generator.dariodomi.de/",
    tags: ["utility", "html5", "image"]
  },
  {
    name: "Imagemap highlight",
    desc: "jquery plugin imagemap highlight",
    url: "https://github.com/kemayo/maphilight",
    tags: ["library", "javascript", "image"]
  },
  {
    name: "Imagemap responsive area",
    desc: "respinsive image remap, https://gist.github.com/giventofly/1a6b8d1f8b7bccf202c83bf14054c9fb",
    url: "https://github.com/stowball/jQuery-rwdImageMaps",
    tags: ["library", "javascript", "image"]
  },
  {
    name: "Nanojs",
    desc: "Minimal standalone JS library for DOM manipulation. DOM select",
    url: "https://vladocar.github.io/nanoJS/",
    tags: ["library", "javascript", "DOM"]
  },
  {
    name: "flat ui color picker",
    desc: "color selection",
    url: "http://www.flatuicolorpicker.com/",
    tags: ["design", "color"]
  },

  {
    name: "HREFTOOLS",
    desc: "tools to compress css, js, img64, img2text, etc",
    url: "https://hreftools.com/",
    tags: ["utility", "tools"]
  },

  {
    name: "Relaxed",
    desc: "Create PDF documents using web technologies",
    url: "https://github.com/RelaxedJS/ReLaXed",
    tags: ["utility", "pdf"]
  },
  {
    name: "free icons",
    desc: "free icons",
    url: "https://lukaszadam.com/illustrations",
    tags: ["stock", "icons"]
  },

  {
    name: "Wordpress hierarchy",
    desc: "Wordpress hierarchy",
    url: "https://wphierarchy.com/",
    tags: ["wordpress", "utility"]
  },
  {
    name: "LuminJS",
    desc: "A JavaScript library to progressively highlight any text on a page",
    url: "https://github.com/pshihn/lumin",
    tags: ["javascript", "library", "animation"]
  },

  {
    name: "AnimeJS",
    desc: "A JavaScript animation script",
    url: "http://animejs.com/",
    tags: ["javascript", "library", "animation"]
  },
  {
    name: "Palettable",
    desc: "5 color selection",
    url: "https://www.palettable.io",
    tags: ["design", "color"]
  },

  {
    name: "TUI Calendar",
    desc: "A JavaScript calendar that has everything you need.",
    url: "https://github.com/nhnent/tui.calendar",
    tags: ["javascript", "library", "time"]
  },

  {
    name: "POSE",
    desc: "Declarative motion system for HTML, SVG, React & React Native",
    url: "https://popmotion.io/pose/",
    tags: ["javascript", "library", "animation"]
  },

  {
    name: "Findshot",
    desc: "Free stock images",
    url: "https://findshot.com/",
    tags: ["placeholder", "image", "stock"]
  },

  {
    name: "Dayjs",
    desc: "Day.js 2KB immutable date library alternative to Moment.js with the same modern API",
    url: "https://github.com/iamkun/dayjs",
    tags: ["javascript", "library", "time"]
  },
  {
    name: "MomentJS",
    desc: "Parse, validate, manipulate, and display dates and times in JavaScript.",
    url: "https://momentjs.com/",
    tags: ["javascript", "library", "time"]
  },
  {
    name: "DEV.TUBE",
    desc: "Videos for developers",
    url: "https://dev.tube/",
    tags: ["video", "tutorial"]
  },
  {
    name: "Highlight PHP",
    desc: "A port of highlight.js by Ivan Sagalaev to PHP ",
    url: "https://github.com/scrivo/highlight.php",
    tags: ["php", "utility"]
  },
  {
    name: "HTML5 JS Game engines",
    desc: "Listed are the cream of the crop of HTML5 / JavaScript game engines ",
    url: "https://html5gameengine.com/",
    tags: ["javascript", "game", "library"]
  },
  {
    name: "Electron",
    desc: "Build cross platform desktop apps with JavaScript, HTML, and CSS ",
    url: "https://electronjs.org/",
    tags: ["javascript", "framework", "cross app"]
  },
  {
    name: "Cordoba",
    desc: "Mobile apps with HTML, CSS & JS",
    url: "https://cordova.apache.org/",
    tags: ["javascript", "framework", "cross app"]
  },

  {
    name: "MJML",
    desc: "The only framework that makes responsive email easy",
    url: "https://mjml.io/",
    tags: ["email", "framework"]
  },
  {
    name: "Browser Compat Report ",
    desc: "dev tool to check for browser compatibility",
    url: "https://addons.mozilla.org/en-US/firefox/addon/compat-report/",
    tags: ["browser", "extension"]
  },
  {
    name: "Underscores",
    desc: "wordpress starter theme",
    url: "https://underscores.me/",
    tags: ["wordpress", "theme"]
  },
  {
    name: "Bada55",
    desc: "bada55 colors :D",
    url: "http://bada55.io/",
    tags: ["color", "design", "fun"]
  },
  {
    name: "MP3 Juices",
    desc: "Mp3 files",
    url: "https://www.mp3juices.cc/",
    tags: ["audio", "mp3"]
  },
  {
    name: "Awesome Talks",
    desc: "Video talks from conferences",
    url: "https://awesometalks.party/",
    tags: ["video", "tutorial"]
  },
  {
    name: "Json generator",
    desc: "Create Json populated",
    url: "https://next.json-generator.com/",
    tags: ["json", "javascript", "tool"]
  },
  {
    name: "Frontend focus",
    desc: "News/articles about frontend",
    url: "https://frontendfoc.us/",
    tags: ["articles", "frontend", "utility"]
  },

  {
    name: "UX Planet",
    desc: "Articles / news about ux",
    url: "https://uxplanet.org",
    tags: ["articles", "design"]
  },
  {
    name: "Phaser",
    desc: "Javascript desktop and mobile game library",
    url: "http://phaser.io",
    tags: ["javascript", "game", "library"]
  }

  ,
  {
    name: "ACF repeater collapse",
    desc: "plugin solves this problem and add a button to collapse or expand all rows at once",
    url: "https://wordpress.org/plugins/acf-repeater-flexible-content-collapser/",
    tags: ["wordpress", "acf", "plugin"]
  }


  ,
  {
    name: "Font awesome",
    desc: "library to give icon funcionality",
    url: "https://fontawesome.com",
    tags: ["design",
      "library",
      "fonts"
    ]
  }

  ,
  {
    name: "dropbox/zxcvbn",
    desc: "dropbox library simple password check",
    url: "https://github.com/dropbox/zxcvbn",
    tags: ["javascript",
      "library",
      "security"
    ]
  }

  ,
  {
    name: "Phonegap",
    desc: "web development skills to quickly make hybrid applications built with HTML, CSS and JavaScript.",
    url: "https://phonegap.com/",
    tags: ["mobile",
      "library",
      "framework"
    ]
  }

  ,
  {
    name: "CSS Background",
    desc: "live css transformations",
    url: "https://css-playground.com",
    tags: ["css",
      "tool",
      "utility"
    ]
  }

  ,
  {
    name: "CSS Triggers",
    desc: "CSS properties with information about the work they trigger in each modern browser",
    url: "https://csstriggers.com/",
    tags: ["css",
      "tool",
      "performance"
    ]
  },
  {
    name: "20 good webfonts",
    desc: "20 best web fonts from google fonts",
    url: "https://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html",
    tags: ["fonts",
      "design",

    ]
  },
  {
    name: "Cheatsheets",
    desc: "20 best web fonts from google fonts",
    url: "https://devhints.io/",
    tags: ["sass",
      "bash",
      "tool", "utility", "javascript"
    ]
  }

  ,
  {
    name: "Cloudinary",
    desc: "Image page analyser",
    url: "https://webspeedtest.cloudinary.com/",
    tags: ["image",
      "tool",
      "utility", "performance"
    ]
  }

  ,
  {
    name: "Waypoints JS",
    desc: "Waypoints is a library that makes it easy to execute a function whenever you scroll to an element. ",
    url: "https://github.com/imakewebthings/waypoints",
    tags: ["plugin",
      "javascript",
      "scroll"
    ]
  }

  ,
  {
    name: "8bit art",
    desc: "Make 8bit art",
    url: "https://make8bitart.com/",
    tags: [
      "tool",
      "design",
      "utility",
      "design"
    ]
  }

  ,
  {
    name: "Free Sound",
    desc: "Freesound is a collaborative database of Creative Commons Licensed sounds. ",
    url: "https://freesound.org/",
    tags: [
      "audio",
      "stock",
      "design"
    ]
  },
  {
    name: "Open game art",
    desc: "Open Game Art is a media repository intended for use with free software game projects.",
    url: "https://opengameart.org/",
    tags: [
      "video",
      "stock",
      "design"
    ]
  },
  {
    name: "Open clip art",
    desc: "Openclipart is a community and collection of vector clip art that is free content",
    url: "https://openclipart.org/",
    tags: [
      "video",
      "stock",
      "design"
    ]
  },
  {
    name: "Socket.io",
    desc: "Socket.IO enables real-time bidirectional event-based communication.",
    url: "https://socket.io/",
    tags: [
      "communication",
      "library",
      "javascript"
    ]
  }

                   
,
  {
    name: "Purgecss",
    desc: "Remove unused css",
    url: "https://github.com/FullHuman/purgecss",
    tags: [
      "css",
      "performance",
      "plugin"
    ]
  }

                   
                   ,
  {
    name: "Noun project",
    desc: "Icons",
    url: "https://thenounproject.com/",
    tags: [
    
      "design",
      "icons"
    ]
  }
     
,
  {
    name: "Mockaroo",
    desc: "realistic test data in CSV, JSON, SQL, and Excel formats.",
    url: "https://mockaroo.com/",
    tags: [
       "stock",
      "utility",
      "tool"
    ]
  }
                   
     ,
  {
    name: "Iconfinder",
    desc: "free svg icons",
    url: "https://www.iconfinder.com/",
    tags: [
       "icons",
      "design",
     
    ]
  }
        ,
  {
    name: "Diff checker",
    desc: "differences between files",
    url: "https://www.diffchecker.com/",
    tags: [
       "tool",
      "utility",
     
    ]
  }               
       ,
  {
    name: "In-browser Markdown editor",
    desc: "Markdown editor",
    url: "https://stackedit.io/",
    tags: [
       "tool",
      "utility",
     "markdown"
    ]
  }                 
,
  {
    name: "compress.io",
    desc: "reduce the size of your images and photos whilst maintaining a high quality with almost no difference before and after compression.",
    url: "https://compressor.io/compress",
    tags: [
       "tool",
      "performance",
     "image"
    ]
  }      
      
                   
 ,
  {
    name: "Repl",
    desc: "test server side code",
    url: "https://repl.it/",
    tags: [
       "tool",

    ]
  }      
      ,
  {
    name: "Stylify me",
    desc: "get colors from webpages",
    url: "http://stylifyme.com/",
    tags: [
       "tool",
      "image",
      "design"

    ]
  }                
      
                   
                         ,
  {
    name: "first byte check",
    desc: "The metrics we measure are around the Time To First Byte (TTFB).",
    url: "http://www.bytecheck.com/",
    tags: [
       "performance",
      "tool",
   
    ]
  }   
                   
 ,
  {
    name: "Wireframe",
    desc: "webapp wireframe",
    url: "https://wireframe.cc/",
    tags: [
       "design",
      "tool",
      "utility",
      "wireframe",
      "mockup"
    ]
  }   
                   
,
  {
    name: "Moqups",
    desc: "webapp wireframe",
    url: "https://app.moqups.com",
    tags: [
       "design",
      "tool",
      "utility",
      "wireframe",
      "mockup"
    ]
  }    
  
                   
                   
,
  {
    name: "pingdom",
    desc: "site speed test",
    url: "https://tools.pingdom.com",
    tags: [
      "tool",
      "utility",
      "performance",
      "mockup"
    ]
  }    
      
                   ,
  {
    name: "Media folder Plugin",
    desc: "Attach media files to a common parent post, easily upload and list the content of the folder using a shortcode.",
    url: "https://wordpress.org/plugins/media-folder/",
    tags: [
      "plugin",
      "wordpress",
 
    ]
  }  
         
                   
  ,
  {
    name: "Figma",
    desc: "Design, prototype, and gather feedback all in one place with Figma.",
    url: "https://www.figma.com/",
    tags: [
       "design",
      "tool",
      "utility",
      "wireframe",
      "mockup"
    ]
  }    
  
];
