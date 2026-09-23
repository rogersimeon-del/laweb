// Contingut de l'autor del portfolio.
// Tots els textos són bilingües (ca/en) perquè cada pàgina els pugui
// consumir segons l'idioma actiu.

export const author = {
  name: 'Roger Simeon',
  otherName: 'Roger Simeon',
  born: 'Girona',
  basedIn: 'Barcelona',
  email: 'info@rogersimeon.com',
  phone: '',
  agency: '',
  social: {
    website: 'http://rogersimeon.com/',
    fitxes: 'http://fitxesdelectura.blogspot.com.es/',
    moments: 'http://momentsdeteatre.tumblr.com/',
    revistadeletras: 'http://revistadeletras.net/author/roger-simeon/',
    nuvol: 'http://www.nuvol.com/autor/roger-simeon/',
  },
  portrait: null,
  bio: {
    ca: {
      training:
              'Llicenciat en Filosofia per la Universitat de Girona i en Periodisme per la University of Stirling (Escòcia).',
            trajectory:
              'Autor i dramaturg. Creador del blog literari "Fitxes de lectura" i del blog teatral "Moments de Teatre", i col·laborador de les publicacions digitals Revista de Letras i Núvol. Després de guanyar nombrosos premis literaris de relat curt (Districte V, Frederica Montseny, Cercamón, Santa Margarida i els Monjos), el 2010 guanya el Premi Boira de textos teatrals amb "Tu i Jo" i n\u2019estrena una versió dirigida per ell mateix a l\u2019Institut del Teatre de Vic el 2011. A partir d\u2019aquí encadena muntatges i premis teatrals, amb estrenes a Barcelona, Badalona, Madrid, Granada, Nova York, Xangai i Londres.',
            themes:
              'Les seves obres es caracteritzen per un empirisme escènic, diàlegs minimalistes, un fort pes de la quotidianitat i la recerca de connexions íntimes en un món hiperconnectat (o desconnectat) per la tecnologia. ',
            approach:
              'Teatre nascut de l\u2019emoció pura i la paraula precisa. Roger Simeon despulla les relacions humanes i els dilemes contemporanis a través de diàlegs eloqüents que bateguen molt més enllà de l\u2019escenari.',
          },
          en: {
            training:
              'BA in Philosophy from the Universitat de Girona and BA in Journalism from the University of Stirling (Scotland).',
            trajectory:
              'Writer and playwright. Creator of the literary blog "Fitxes de lectura" and the theatre blog "Moments de Teatre"; contributing writer for the digital publications Revista de Letras and Núvol. After winning several short-fiction awards (Districte V, Frederica Montseny, Cercamón, Santa Margarida i els Monjos), in 2010 he wins the Premi Boira de textos teatrals with "Tu i Jo" and stages a version of it under his own direction at the Institut del Teatre de Vic in 2011. From then on he chains productions and theatre awards, with premieres in Barcelona, Badalona, Madrid, Granada, New York, Shanghai and London.',
            themes:
              'His works are characterized by a theatrical empiricism, minimalist dialogue, a strong emphasis on everyday life, and a search for intimate connections in a world that is hyperconnected (or disconnected) by technology.',
            approach:
              'Theatre born from pure emotion and the precise word. Roger Simeon strips bare human relations and contemporary dilemmas through eloquent dialogues that pulse long after the curtain falls.',
    },
  },
  timeline: [
    { year: 2025, label: { ca: 'Estrena de "La finestra" a la sala Inusual Project (Barcelona)', en: 'Premiere of "La finestra" at Sala Inusual Project (Barcelona)' } },
    { year: 2023, label: { ca: 'Estrena de "Generació (en pausa)" a la Sala Pangolí (Barcelona)', en: 'Premiere of "Generació (on hold)" at Sala Pangolí (Barcelona)' } },
    { year: 2021, label: { ca: 'Lectura de "La finestra" a la Sala Beckett (Barcelona) (cicle #jotambé)', en: 'Reading of "La finestra" at Sala Beckett (Barcelona) (#jotambé cycle)' } },
    { year: 2020, label: { ca: '1r Premi Literari de Textos Teatrals Vila de Gràcia per "La magnitud de la tragèdia"', en: '1st Prize Premi Literari de Textos Teatrals Vila de Gràcia for "La magnitud de la tragèdia"' } },
    { year: 2018, label: { ca: 'Lectura de "L\u2019any que vam viure sense internet" a la Sala Flyhard (Barcelona)', en: 'Reading of "L\u2019any que vam viure sense internet" at Sala Flyhard (Barcelona)' } },
    { year: 2017, label: { ca: 'Estrena d\u2019"El pis del pare" al Teatre Zorrilla (Badalona)', en: 'Premiere of "El pis del pare" at Teatre Zorrilla (Badalona)' } },
    { year: 2016, label: { ca: 'Romeo & Juliet (zai Shanghai) a Jing\u2019an Park (Xangai)', en: 'Romeo & Juliet (zai Shanghai) at Jing\u2019an Park' } },
    { year: 2015, label: { ca: 'Estrena de "Los Columpios" i "The Kitchen" a la IATI Theatre (Nova York)', en: 'Premiere of "Los Columpios" and "The Kitchen" at IATI Theatre (New York)' } },
    { year: 2014, label: { ca: 'Lectura d\u2019"Il·lusions" dirigida per Jordi Casanovas a la Sala Beckett (Barcelona)', en: 'Reading of "Il·lusions" directed by Jordi Casanovas at Sala Beckett (Barcelona)' } },
    { year: 2013, label: { ca: 'Premi Dramaturgo Moreno Arenas pel text "Conversación 24"', en: 'Dramaturgo Moreno Arenas Prize for "Conversación 24"' } },
    { year: 2011, label: { ca: 'Debut professional: "Tu i Jo" a l\u2019Institut del Teatre de Vic', en: 'Professional debut: "Tu i Jo" at Institut del Teatre de Vic' } },
  ],
}

// Catàleg d'obres ESTRENADES (ordre cronològic invers).
// Cada peça té: títol bilingüe, espai, ciutat, director (quan consti),
// data, gènere, durada aproximada, mida de repartiment, llengua d'origen
// i disponibilitat per a nova producció.
export const WORKS = [
  {
    slug: 'generacio',
    title: { ca: 'Generació (en pausa)', en: 'Generation (on hold)' },
    year: 2023,
    genre: 'tragicomèdia',
    duration: '90 min',
    characters: 5,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Sala Pangolí', en: 'Sala Pangolí' },
      city: 'Barcelona',
      director: { ca: 'Xavier Pàmies', en: 'Xavier Pàmies' },
      cast: { ca: 'Natalia Alcolea, Ignasi Manent, Eva Lombas, Dafne Meyer, Carls Martin Cost ', en: 'Natalia Alcolea, Ignasi Manent, Eva Lombas, Dafne Meyer, Carls Martin Cost' },
      date: '2023-11-10',
      note: { ca: 'Del 10 de novembre a l\u20191 de desembre de 2023.', en: 'From 10 November to 1 December 2023.' },
    },
    synopsis: {
      ca: 'Cinc persones esperant que arribi el moment de començar a viure. Però, i si el moment no arriba mai?',
      en: 'Five people waiting to start their lives. But, what if the moment never comes?',
    },
    history: {
      ca: [
        { year: 2023, place: 'Sala Pangolí, Barcelona', note: 'Estrena, en pausa posterior' },
      ],
      en: [
        { year: 2023, place: 'Sala Pangolí, Barcelona', note: 'Premiere, subsequently placed on hold' },
      ],
    },
    galleryCount: 0,
    text: { available: false },
  },
  {
    slug: 'la-finestra',
    title: { ca: 'La finestra', en: 'La finestra' },
    year: 2025,
    genre: 'drama',
    duration: '60 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    quote: {
      ca: '“Quan em van violar tenia 12 anys…”',
      en: '“When I was raped, I was twelve…”',
    },
    premiere: {
      venue: { ca: 'Inusual Project', en: 'Inusual Project' },
      city: 'Barcelona',
      director: { ca: 'Xavier Pàmies', en: 'Xavier Pàmies' },
      cast: { ca: 'Raquel Secall, Grazia Cipri', en: 'Raquel Secall, Grazia Cipri' },
      date: '2025-07-20',
      note: { ca: 'Estrena el 20 de juliol de 2025 a Inusual Project.', en: 'Premiere on 20 July 2025 at Inusual Project.' },
    },
    synopsis: {
      ca: 'Trenta-tres anys després del trauma que va marcar la seva infantesa, l’Anna haurà de decidir si està preparada per mirar-lo de cara i començar a sanar.',
      en: 'Thirty-three years after the trauma that changed her life, Anna must decide whether she is ready to face it and begin the healing process.',
    },
    history: {
      ca: [
        { year: 2021, place: 'Sala Beckett, Barcelona', note: 'Lectura dramatitzada dintre del cicle #jotambé' },
        { year: 2025, place: 'Inusual Project, Barcelona', note: 'Estrena, direcció Xavier Pàmies, amb Raquel Secall i Grazia Cipri' },
      ],
      en: [
        { year: 2021, place: 'Sala Beckett, Barcelona', note: 'Staged reading, #jotambé cycle' },
        { year: 2025, place: 'Inusual Project, Barcelona', note: 'Premiere, directed by Xavier Pàmies, with Raquel Secall and Grazia Cipri' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.2 MB' },
  },
  {
    slug: 'tu-i-jo2',
    title: { ca: 'Tu i Jo (versió El Fil vermell)', en: 'Tu i Jo (El Fil vermell version)' },
    year: 2022,
    genre: 'teatre absurd',
    duration: '80 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Centre Cívic Sant Andreu', en: 'Centre Cívic Sant Andreu' },
      city: 'Barcelona',
      director: { ca: 'Lindes Farré', en: 'Lindes Farré' },
      date: '2021-03-02',
      note: { ca: 'Seleccionada a la I convocatòria de textos On el teatre batega.', en: 'Selected for the On el teatre batega drama contest.' },
    },
    synopsis: {
      ca: 'Adaptació del text original de Tu i Jo seleccionada pel Barcelona Districte Cultural de 2023.',
      en: 'Adaptation of the original Tu i Jo text that was selected for the Barcelona Districte Cultural in 2023.',
    },
    history: {
      ca: [
        { year: 2021, place: 'Centre Cívic de Sant Andreu, Barcelona', note: 'Producció de la companyia Fil Vermell' },
        { year: 2022, place: 'Sala Fènix, Barcelona', note: 'Selecció a la 1a convocatòria dels Teatres de Proximitat, en cartell al març' },
        { year: 2023, place: 'Diversos Centres Cívics de Barcelona', note: 'Selecció del programa Barcelona Districte Cultural, 8 representacions entre febrer i març' },
      ],
      en: [
        { year: 2021, place: 'Centre Cívic de Sant Andreu, Barcelona', note: 'Production by company Fil Vermell' },
        { year: 2022, place: 'Sala Fènix, Barcelona', note: 'Selected for the 1st Teatres de Proximitat call, on stage in March' },
        { year: 2023, place: 'Various Centres Cívics, Barcelona', note: 'Selected for the Barcelona Districte Cultural programme, 8 performances Feb-Mar' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.2 MB' },
  },
  {
    slug: 'lany-sense-internet',
    title: { ca: 'L\u2019any que vam viure sense internet', en: 'L\u2019any que vam viure sense internet' },
    year: 2018,
    genre: 'tragicomèdia',
    duration: '55 min',
    characters: 3,
    originLang: 'catala',
    available: true,
    quote: {
      ca: '“ens vam deixar enganyar per la promesa d’una vida amb sentit…” Bright Eyes',
      en: '“fell for the promise of a life with a purpose” Bright Eyes',
    },
    premiere: {
      venue: { ca: 'Sala Flyhard', en: 'Sala Flyhard' },
      city: 'Barcelona',
      director: { ca: 'Anna Sarrablo', en: 'Anna Sarrablo' },
      cast: { ca: 'Carla Ricart, Marta Corral, Xavier Pàmies', en: 'Carla Ricart, Marta Corral, Xavier Pàmies' },
      date: '2018-06-18',
      note: { ca: 'Lectura a la Sala Flyhard.', en: 'Reading at Sala Flyhard.' },
    },
    synopsis: {
      ca: 'Una família travessa un any sense connexió a la xarxa i descobreix les converses que havia deixat de tenir.',
      en: 'A family goes through one year without an internet connection and rediscovers the conversations it had stopped having.',
    },
    history: {
      ca: [
        { year: 2018, place: 'Sala Flyhard, Barcelona', note: 'Lectura' },
      ],
      en: [
        { year: 2018, place: 'Sala Flyhard, Barcelona', note: 'Reading' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.2 MB' },
  },
  {
    slug: 'el-pis-del-pare',
    title: { ca: 'El pis del pare', en: 'El pis del pare' },
    year: 2017,
    genre: 'tragicomèdia',
    duration: '80 min',
    characters: 3,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Teatre Zorrilla', en: 'Teatre Zorrilla' },
      city: 'Badalona',
      director: { ca: 'Toni Forteza', en: 'Toni Forteza' },
      date: '2017-03-27',
      note: { ca: 'Estrena al Teatre Zorrilla (Badalona).', en: 'Premiere at Teatre Zorrilla (Badalona).' },
    },
    synopsis: {
      ca: 'Dos germans, un pis buit i tot un passat per endreçar.',
      en: 'Two siblings, an empty apartment and the whole past history to tidy up.',
    },
    history: {
      ca: [
        { year: 2017, place: 'Teatre Zorrilla, Badalona', note: 'Estrena' },
        { year: 2022, place: 'Llibreria La Gaia, Badalona', note: 'Lectura dramatitzada' },
      ],
      en: [
        { year: 2017, place: 'Teatre Zorrilla, Badalona', note: 'Premiere' },
        { year: 2022, place: 'Llibreria La Gaia, Badalona', note: 'Staged reading' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.3 MB' },
  },
  {
    slug: 'romeo-juliet-shanghai',
    title: { ca: 'Romeo & Juliet (zai Shanghai)', en: 'Romeo & Juliet (zai Shanghai)' },
    year: 2016,
    genre: 'comèdia',
    duration: '50 min',
    characters: 2,
    originLang: 'angles',
    available: false,
    premiere: {
      venue: { ca: 'Jing\u2019an Park', en: 'Jing\u2019an Park' },
      city: 'Shanghai',
      director: { ca: 'Roger Simeon', en: 'Roger Simeon' },
      cast: { ca: 'Aktina Stathaky, Deji Odunlami', en: 'Aktina Stathaky, Deji Odunlami' },
      date: '2016-04-23',
      note: { ca: 'Versió anglesa de "Romeu i Julieta" ambientada a l\u2019Shanghai contemporani.', en: 'English-language take on "Romeo and Juliet" set in contemporary Shanghai.' },
    },
    synopsis: {
      ca: 'Dos actors es plantegen la possibilitat de fer una versió xinesa de Romeu i Julieta. Però si ell és nigerià i ella grega, com poden explicar la història d’un laowai enamorat d’una ayi?',
      en: 'Two actors play with the idea of making a Chinese version of Romeo and Juliet. But, if he is Nigerian and she is Greew, how can they explain the love story between a laowai and an ayi?',
    },
    history: {
      ca: [
        { year: 2016, place: 'Jing\u2019an Park, Shanghai', note: 'Estrena a l\u2019aire lliure' },
      ],
      en: [
        { year: 2016, place: 'Jing\u2019an Park, Shanghai', note: 'Outdoor premiere' },
      ],
    },
    galleryCount: 0,
    text: { available: false },
  },
  {
    slug: 'los-columpios-nyc',
    title: { ca: 'Los Columpios (The Swings)', en: 'Los Columpios (The Swings)' },
    year: 2015,
    genre: 'tragicomèdia absurda',
    duration: '90 min',
    characters: 3,
    originLang: 'espanyol',
    available: true,
    quote: {
      ca: '“No tinc por del què em puguis fer, sinó del què em puguis dir”',
      en: '“I\u2019m not afraid of what you can do to me, but of what you can tell me."',
    },
    premiere: {
      venue: { ca: 'IATI Theater', en: 'IATI Theater' },
      city: 'New York',
      director: { ca: 'Julian J Mesri', en: 'Julian J Mesri' },
      cast: { ca: 'Gonzalo Bouza, María Cuartero, Nicole Betancourt', en: 'Gonzalo Bouza, María Cuartero, Nicole Betancourt' },
      date: '2015-11-06',
      note: { ca: 'Del 6 al 29 de novembre de 2015 a IATI Theater (Nova York).', en: '6\u201329 November 2015 at IATI Theater (New York).' },
    },
    synopsis: {
      ca: 'Un parc infantil. Dues persones que es coneixen massa bé. I una conversa per evitar parlar del que realment importa.',
      en: 'A playground. Two people who know each other too well. And a conversation to avoid talking about what really matters',
    },
    history: {
      ca: [
        { year: 2015, place: 'IATI Theater, Nova York', note: 'Producció professional del 6 al 29 de novembre' },
      ],
      en: [
        { year: 2015, place: 'IATI Theater, New York', note: 'Professional run, 6\u201329 November' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['es', 'en'], format: 'PDF', size: '0.4 MB' },
  },
  {
    slug: 'egos',
    title: { ca: 'Egos', en: 'Egos' },
    year: 2015,
    genre: 'microteatre',
    duration: '15 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Microteatre Barcelona', en: 'Microteatre Barcelona' },
      city: 'Barcelona',
      director: { ca: 'Anna Sarrablo', en: 'Anna Sarrablo' },
      cast: { ca: 'Carla Ricart, Xavier Pàmies', en: 'Carla Ricart, Xavier Pàmies' },
      date: '2015-10-01',
      note: { ca: 'De l\u20191 al 25 d\u2019octubre de 2015.', en: '1\u201325 October 2015.' },
    },
    synopsis: {
      ca: 'Peça breu per a dos intèrprets: dues veus, un llit i el compte enrere d\u2019una conversa que no escapa.',
      en: 'Short piece for two performers: two voices, a sofa and the countdown of a conversation that cannot escape.',
    },
    history: {
      ca: [
        { year: 2015, place: 'Microteatre Barcelona', note: 'De l\u20191 al 25 d\u2019octubre' },
      ],
      en: [
        { year: 2015, place: 'Microteatre Barcelona', note: '1\u201325 October' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.1 MB' },
  },
  {
    slug: 'lemu',
    title: { ca: 'L\u2019emú', en: 'L\u2019emú' },
    year: 2015,
    genre: 'microteatre',
    duration: '15 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Festival Píndoles (Alberg Mare de Déu de Montserrat)', en: 'Píndoles Festival (Alberg Mare de Déu de Montserrat)' },
      city: 'Barcelona',
      director: { ca: 'Anna Sarrablo', en: 'Anna Sarrablo' },
      cast: { ca: 'Carla Ricart, Xavier Pàmies', en: 'Carla Ricart, Xavier Pàmies' },
      date: '2015-06-07',
      note: { ca: 'Dintre del Festival Píndoles.', en: 'As part of the Píndoles Festival.' },
    },
    synopsis: {
      ca: 'La vida no està feta per anar amb presses. Sinó, més val comprar-se un emú.',
      en: 'Life is not worth rushing it. Otherwise, we might as well buy an emu',
    },
    history: {
      ca: [
        { year: 2015, place: 'Festival Píndoles, Barcelona', note: 'Estrena' },
      ],
      en: [
        { year: 2015, place: 'Píndoles Festival, Barcelona', note: 'Premiere' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.1 MB' },
  },
  {
    slug: 'the-kitchen',
    title: { ca: 'The Kitchen', en: 'The Kitchen' },
    year: 2015,
    quote: {
      ca: '“We are all looking for someone, it\u2019s the only thing worth looking for nowadays…”',
      en: '“We are all looking for someone, it\u2019s the only thing worth looking for nowadays…”',
    },
    genre: 'tragicomèdia',
    duration: '70 min',
    characters: 3,
    originLang: 'angles',
    available: true,
    premiere: {
      venue: { ca: 'IATI Theater (Cimientos Play Development Program)', en: 'IATI Theater (Cimientos Play Development Program)' },
      city: 'New York',
      director: { ca: 'Victoria Malena', en: 'Victoria Malena' },
      cast: { ca: 'Jesús E. Martínez, Pablo Andrade, Patrícia Cardona', en: 'Jesús E. Martínez, Pablo Andrade, Patrícia Cardona' },
      date: '2015-06-30',
      note: { ca: 'Seleccionada pel Cimientos Play Development Program.', en: 'Selected for the Cimientos Play Development Program.' },
    },
    synopsis: {
      ca: 'Tres desconeguts, una mateixa solitud i una necessitat desesperada de connectar. Però no tot és el que sembla.',
      en: 'Three strangers, one shared loneliness and the desperate need to connect. But not everything is exactly as it looks like.',
    },
    history: {
      ca: [
        { year: 2015, place: 'IATI Theater, Nova York', note: 'Cimientos Play Development Program' },
      ],
      en: [
        { year: 2015, place: 'IATI Theater, New York', note: 'Cimientos Play Development Program' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['en'],
      format: 'PDF',
      size: '0.3 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/the-kitchen.pdf',
    },
  },
  {
    slug: '10-de-abril',
    title: { ca: '10 de abril', en: '10 de abril' },
    year: 2015,
    genre: 'monòleg',
    duration: '20 min',
    characters: 1,
    originLang: 'espanyol',
    available: true,
    premiere: {
      venue: { ca: 'Sala Berlanga', en: 'Sala Berlanga' },
      city: 'Madrid',
      director: { ca: 'Roger Simeon', en: 'Roger Simeon' },
      date: '2015-04-10',
      note: {
        ca: 'Seleccionada a la I Muestra "¿Ya?" de Audiodrama Breve, dintre del III Congreso de Radioteatro y Ficción Sonora.',
        en: 'Selected for the I Muestra "¿Ya?" de Audiodrama Breve, part of the III Congreso de Radioteatro y Ficción Sonora.',
      },
    },
    synopsis: {
      ca: 'Cada dia un nou pas, un nou repte superat. Fins que arriba el 10 d\u2019abril i tot s\u2019ensorra.',
      en: 'Every day a brand new step, a new challenge overcome, until the 10th of April comes around and everything goes to hell.',
    },
    history: {
      ca: [
        { year: 2015, place: 'Sala Berlanga, Madrid', note: 'III Congreso de Radioteatro y Ficción Sonora' },
      ],
      en: [
        { year: 2015, place: 'Sala Berlanga, Madrid', note: 'III Congreso de Radioteatro y Ficción Sonora' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['es'], format: 'PDF', size: '0.1 MB' },
  },
  {
    slug: 'illusions',
    title: { ca: 'Il·lusions', en: 'Il·lusions' },
    year: 2014,
    quote: {
      ca: '“Fins i tot podria ser que en Pere tingués raó i que els carrers fossin un camp de batalla plens de gent que ja n\u2019està farta i han sortit a cremar-ho tot…”',
      en: '“It could even be that Pere is right and that the streets are a battlefield full of people who have had enough and have gone out to burn everything down…”',
    },
    genre: 'tragicomèdia',
    duration: '70 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Sala Beckett', en: 'Sala Beckett' },
      city: 'Barcelona',
      director: { ca: 'Jordi Casanovas', en: 'Jordi Casanovas' },
      cast: { ca: 'Pau Roca, Sara Espígol', en: 'Pau Roca, Sara Espígol' },
      date: '2014-06-13',
      note: { ca: 'Lectura dramatitzada a la Sala Beckett, dirigida per Jordi Casanovas.', en: 'Staged reading at Sala Beckett, directed by Jordi Casanovas.' },
    },
    synopsis: {
      ca: 'Un home i una dona creuen corrent tota la ciutat. Corren per arribar a un tren, però acabaran aturant-se per afrontar tot allò que fa temps que eviten.',
      en: 'A man and a woman cross the city running. They run to catch a train, but they will end up stopping to face everything they have been avoiding for a long time.',
    },
    history: {
      ca: [
        { year: 2014, place: 'Sala Beckett, Barcelona', note: 'Lectura dramatitzada, direcció Jordi Casanovas' },
      ],
      en: [
        { year: 2014, place: 'Sala Beckett, Barcelona', note: 'Staged reading, directed by Jordi Casanovas' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['ca'],
      format: 'PDF',
      size: '0.2 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2017/12/ilc2b7lusions.pdf',
    },
  },
  {
    slug: 'la-partida',
    title: { ca: 'La partida', en: 'La partida' },
    year: 2013,
    genre: 'tragicomèdia',
    duration: '25 min',
    characters: 3,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: '— (no estrenada)', en: '— (not premiered)' },
      city: 'Barcelona',
      director: { ca: '—', en: '—' },
      date: '2013-01-01',
      note: {
        ca: '2n Premi del Concurs de Textos Teatrals de la Vila de Gràcia 2013.',
        en: '2nd Prize, Concurs de Textos Teatrals de la Vila de Gràcia, 2013.',
      },
    },
    synopsis: {
      ca: 'Tres amics i una partida que no acaba mai — peça de teatre guardonada que encara espera estrena.',
      en: 'Three friends and a game that never ends — the prize-winning short piece awaiting its premiere.',
    },
    history: {
      ca: [
        { year: 2013, place: 'Vila de Gràcia, Barcelona', note: '2n Premi Textos Teatrals Vila de Gràcia' },
      ],
      en: [
        { year: 2013, place: 'Vila de Gràcia, Barcelona', note: '2nd Prize, Textos Teatrals Vila de Gràcia' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['ca'],
      format: 'PDF',
      size: '0.2 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/la-partida.pdf',
    },
  },
  {
    slug: 'los-columpios',
    title: { ca: 'Los Columpios', en: 'Los Columpios' },
    year: 2014,
    quote: {
      ca: '“No tinc por de què em puguis fer, sinó de què em puguis dir.”',
      en: '“I\u2019m not afraid of what you can do to me, but of what you might say to me.”',
    },
    genre: 'tragicomèdia absurda',
    duration: '60 min',
    characters: 3,
    originLang: 'espanyol',
    available: true,
    premiere: {
      venue: { ca: 'IATI Theater', en: 'IATI Theater' },
      city: 'New York',
      director: { ca: 'Mario Colón', en: 'Mario Colón' },
      cast: { ca: 'Carmen Cabrera, Jorge Luna, Nicole Betancourt', en: 'Carmen Cabrera, Jorge Luna, Nicole Betancourt' },
      date: '2014-05-06',
      note: { ca: 'Selecció del Cimientos Play Development Program i estrena a IATI Theater.', en: 'Selected for the Cimientos Play Development Program and premiered at IATI Theater.' },
    },
    synopsis: {
      ca: 'Versió original de "Los Columpios" abans de la producció professional de 2015.',
      en: 'Earlier cut of "Los Columpios" before the 2015 professional production.',
    },
    history: {
      ca: [
        { year: 2014, place: 'IATI Theater, Nova York', note: 'Cimientos Play Development Program, direcció Mario Colón' },
      ],
      en: [
        { year: 2014, place: 'IATI Theater, New York', note: 'Cimientos Play Development Program, directed by Mario Colón' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['es', 'en'],
      format: 'PDF',
      size: '0.3 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/los-columpios.pdf',
    },
  },
  {
    slug: 'angeleta-etelvina',
    title: { ca: 'Angeleta & Etelvina', en: 'Angeleta & Etelvina' },
    year: 2014,
    genre: 'tragicomèdia absurda',
    duration: '60 min',
    characters: 2,
    originLang: 'angles',
    available: false,
    premiere: {
      venue: { ca: 'Arcola Theatre (Off Festival del Teatro del Siglo de Oro Español)', en: 'Arcola Theatre (Off Festival of the Spanish Golden Age Theatre)' },
      city: 'London',
      director: { ca: 'Almudena Calvo', en: 'Almudena Calvo' },
      date: '2014-03-23',
      note: {
        ca: 'Versió alternativa de You and Me produïda per Around the Globe.',
        en: 'Alternative version of You and Me produced by Around the Globe.',
      },
    },
    synopsis: {
      ca: 'Versió alternativa de titelles de "You and Me".',
      en: 'Alternative puppets cut of "You and Me".',
    },
    history: {
      ca: [
        { year: 2014, place: 'Arcola Theatre, Londres', note: 'Off Festival del Teatro del Siglo de Oro Español (producció Around the Glove).' },
        { year: 2014, place: 'Little Angel Theatre, Londres', note: 'Part del FIRSTS Festival.' },
        { year: 2014, place: 'The Omnibus Theatre, Londres.' },
      ],
      en: [
        { year: 2014, place: 'Arcola Theatre, London', note: 'Off Festival of the Spanish Golden Age Theatre (Around the Glove production).' },
        { year: 2014, place: 'Little Angel Theatre, London', note: 'Part of FIRSTS Festival.' },
        { year: 2014, place: 'The Omnibus Theatre, London.' },
      ],
    },
    galleryCount: 0,
    text: { available: false },
  },
  {
    slug: 'lurna',
    title: { ca: 'L\u2019urna', en: 'L\u2019urna' },
    year: 2014,
    genre: 'miniteatre',
    duration: '10 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Sala Beckett (cicle "Els 10 minuts del bar de la Beckett")', en: 'Sala Beckett ("Els 10 minuts del bar de la Beckett" cycle)' },
      city: 'Barcelona',
      director: { ca: 'Valeria Villar', en: 'Valeria Villar' },
      cast: { ca: 'Òscar Jarque, Artur Rodríguez', en: 'Òscar Jarque, Artur Rodríguez' },
      date: '2014-02-01',
      note: { ca: 'Miniteatre dintre del cicle "Els 10 minuts del bar de la Beckett".', en: 'Mini-theatre as part of the "Els 10 minuts del bar de la Beckett" cycle.' },
    },
    synopsis: {
      ca: 'Una urna, una promesa i un compte enrere: la durada és el temps que triga a arribar el silenci.',
      en: 'An urn, a promise and a countdown: the length is the time it takes for silence to arrive.',
    },
    history: {
      ca: [
        { year: 2014, place: 'Sala Beckett, Barcelona', note: 'Cicle "Els 10 minuts del bar de la Beckett"' },
      ],
      en: [
        { year: 2014, place: 'Sala Beckett, Barcelona', note: '"Els 10 minuts del bar de la Beckett" cycle' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.1 MB' },
  },
  {
    slug: 'conversacion-24',
    title: { ca: 'Conversación 24', en: 'Conversación 24' },
    year: 2013,
    genre: 'teatre-breu',
    duration: '25 min',
    characters: 2,
    originLang: 'espanyol',
    available: true,
    premiere: {
      venue: { ca: 'Teatro de Albolote', en: 'Teatro de Albolote' },
      city: 'Granada',
      director: { ca: 'Roger Simeon', en: 'Roger Simeon' },
      date: '2013-03-01',
      note: { ca: 'Premi Dramaturgo Moreno Arenas de Teatro Breve 2013.', en: 'Dramaturgo Moreno Arenas Prize for Short Theatre 2013.' },
    },
    synopsis: {
      ca: 'En una fosca habitació, un home ben vestit interroga a una dona: l’acusen de pensar, de jugar amb les paraules, de no ser una treballadora qualsevol.',
      en: 'In a dark room a groomed man interrogates a woman: she\u2019s being accused of thinking, of playing with words instead of being just another worker.' },
    history: {
      ca: [
        { year: 2013, place: 'Teatro de Albolote, Granada', note: 'Premi Dramaturgo Moreno Arenas de Teatro Breve' },
      ],
      en: [
        { year: 2013, place: 'Teatro de Albolote, Granada', note: 'Dramaturgo Moreno Arenas Prize for Short Theatre' },
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['es'], format: 'PDF', size: '0.1 MB' },
  },
  {
    slug: 'els-convidats',
    title: { ca: 'Els convidats', en: 'Els convidats' },
    year: 2012,
    quote: {
      ca: '“Però qui són aquesta gent? […] Com han entrat a casa nostra? […] Els has convidat tu?”',
      en: '“But who are these people? […] How did they get into our house? […] Did you invite them?”',
    },
    genre: 'teatre',
    duration: '85 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Teatre Clavé', en: 'Teatre Clavé' },
      city: 'Tordera',
      director: { ca: 'Josep Navarro', en: 'Josep Navarro' },
      cast: { ca: 'Carles Vendrell, Paco Márquez', en: 'Carles Vendrell, Paco Márquez' },
      date: '2012-11-16',
      note: { ca: 'Estrena al Teatre Clavé de Tordera.', en: 'Premiere at Teatre Clavé in Tordera.' },
    },
    synopsis: {
      ca: 'L’Ernest i en Miquel fa sis anys que comparteixen pis. Han creat una rutina, un sistema de convivència i un equilibri que els funciona. Però una visita inesperada ho capgirarà tot.',
      en: 'Ernest and Miquel have been sharing an apartment for over 6 years now. They have established a survival mode and a status quo that works for them. But an unexpected visit is about to chane it all.',
    },
    history: {
      ca: [
        { year: 2012, place: 'Teatre Clavé, Tordera', note: 'Estrena' },
      ],
      en: [
        { year: 2012, place: 'Teatre Clavé, Tordera', note: 'Premiere' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['ca'],
      format: 'PDF',
      size: '0.3 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/els-convidats.pdf',
    },
  },
  {
    slug: 'you-and-me',
    title: { ca: 'You and Me', en: 'You and Me' },
    year: 2012,
    quote: {
      ca: '“I hope you haven\u2019t brought any more of those damn boxes of yours…”',
      en: '“I hope you haven\u2019t brought any more of those damn boxes of yours…”',
    },
    genre: 'Tragicomèdia absurda',
    duration: '90 min',
    characters: 2,
    originLang: 'angles',
    available: true,
    premiere: {
      venue: { ca: 'Rich Mix', en: 'Rich Mix' },
      city: 'London',
      director: { ca: 'Bryony Shanahan', en: 'Bryony Shanahan' },
      cast: { ca: 'Mercè Ribot, Patrícia Rodríguez', en: 'Mercè Ribot, Patrícia Rodríguez' },
      date: '2012-06-01',
      note: {
        ca: 'Traducció anglesa encarregada per Little Soldier Productions. Estrena a Rich Mix (Londres).',
        en: 'English translation commissioned by Little Soldier Productions. Premiere at Rich Mix (London).',
      },
    },
    synopsis: {
      ca: 'Adaptació anglesa de Tu i Jo que transforma els protagonistes en dues germanes immigrants. Una història sobre la demència i l’Alzheimer, les complexitats de l’amor entre germanes que ho han compartit tot i la nostàlgia pel país que van deixar enrere.',
      en: 'English version of Tu i Jo transforming the main characters in two immigrant sisters. A play about dementia and Alzheimer, the difficulties of sibling love between two sisters who have been through everything and the longing for the country left behind.',
    },
    history: {
      ca: [
        { year: 2012, place: 'Rich Mix, Londres', note: 'Estrena anglesa, direcció Bryony Shanahan'},
        { year: 2013, place: 'Blue Elephant, Londres', note: 'En cartell tot el mes d\u2019abril.'},
        { year: 2013, place: 'The Nightingale, Brighton', note: 'Dins el Brighton Fringe. Guanyadora del Argus Angel Award'},
        { year: 2013, place: 'The Tolmen Centre, Cornwall'},
        { year: 2013, place: 'Gira per diverses ciutats del Regne Unit'},
        { year: 2013, place: 'IATI theater, Nova York', note: 'Dins el PAM Festival.'},
      ],
      en: [
        { year: 2012, place: 'Rich Mix, London', note: 'English premiere, directed by Bryony Shanahan'},
        { year: 2013, place: 'Blue Elephant, London', note: 'On stage in April.'},
        { year: 2013, place: 'The Nightingale, Brighton', note: 'Part of Brighton Fringe. Winner of the Argus Angel Award'},
        { year: 2013, place: 'The Tolmen Centre, Cornwall'},
        { year: 2013, place: 'Tour around different cities in the UK'},
        { year: 2013, place: 'IATI theater, New York', note: 'Part of PAM Festival.' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['en'],
      format: 'PDF',
      size: '0.2 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/you-and-me.pdf',
    },
  },
  {
    slug: 'economia-facil',
    title: { ca: 'Economia fàcil: entrevista al senyor Rocamora', en: 'Economia fàcil: entrevista al senyor Rocamora' },
    year: 2012,
    genre: 'teatre denúncia',
    duration: '30 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Teatre Clavé', en: 'Teatre Clavé' },
      city: 'Tordera',
      director: { ca: 'Roger Simeon', en: 'Roger Simeon' },
      cast: { ca: 'Carles Vendrell, Paco Márquez', en: 'Carles Vendrell, Paco Márquez' },
      date: '2012-02-01',
      note: { ca: 'Estrena febrer 2012.', en: 'February 2012 premiere.' },
    },
    synopsis: {
      ca: 'Economia fàcil neix per posar una mica de llum enmig de la confusió sobre l’origen i les causes d’una crisi financera que sembla no tenir data de caducitat.',
      en: 'Economia fàcil was born out of the need to shed some light onto the the confusing origin of an economic recession that seems to last forever.',
    },
    history: {
      ca: [
        { year: 2012, place: 'Teatre Clavé, Tordera', note: 'Estrena' },
      ],
      en: [
        { year: 2012, place: 'Teatre Clavé, Tordera', note: 'Premiere' },
      ],
    },
    galleryCount: 0,
    text: {
      available: true,
      langs: ['ca'],
      format: 'PDF',
      size: '0.3 MB',
      url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/economia-fc3a0cil.pdf',
    },
  },
  {
    slug: 'tu-i-jo',
    title: { ca: 'Tu i Jo', en: 'Tu i Jo' },
    year: 2011,
    genre: 'teatre absurd',
    duration: '60 min',
    characters: 2,
    originLang: 'catala',
    available: true,
    premiere: {
      venue: { ca: 'Institut del Teatre de Vic', en: 'Institut del Teatre de Vic' },
      city: 'Vic',
      director: { ca: 'Roger Simeon', en: 'Roger Simeon' },
      cast: { ca: 'Jordi Pagès, Carles Sans', en: 'Jordi Pagès, Carles Sans' },
      date: '2011-03-01',
      note: { ca: 'Estrena derivada del Premi Boira de Teatre 2010.', en: 'Premiere following the Premi Boira de Teatre 2010.' },
    },
    synopsis: {
      ca: 'En un pis tancat ple de caixes de sabates buides, un home i una dona conviuen en el seu món hermètic. Porten tants anys junts que ja s’ho han dit tot però no s’atreveixen a callar i segueixen parlant. Sobre tot i sobre res, en una llarga tarda que sembla no acabar mai.',
      en: 'In a locked apartment filled up with empty shoe boxes, a man and a woman share their life. They have been together for that long that they have told each other everything but they do not dare to keep silent and keep on talking. About everything and nothing at the same time in a long afternoon that seems to have not end.',
    },
    history: {
      ca: [
        { year: 2011, place: 'Institut del Teatre, Vic', note: 'Estrena derivada del Premi Boira de Teatre, dirigida per l\u2019autor' },
        { year: 2011, place: 'Teatre del Raval, Barcelona', note: 'Selecció a la Mostra de Teatre de Barcelona' },
        { year: 2011, place: 'Sala Porta4, Barcelona', note: 'En cartell al juliol i al novembre' },
        { year: 2011, place: 'Teatre de Vidreres', note: 'Selecció a la Mostra de teatre de Vidreres' },
        { year: 2012, place: 'Sala Porta4, Barcelona', note: 'En cartell al març'},
        { year: 2012, place: 'La Caseta de la Coma de Burg, Pallars Sobirà'},
        { year: 2013, place: 'Teatre d\u2019Hostalric'},
      ],
      en: [
        { year: 2011, place: 'Institut del Teatre, Vic', note: 'Premiere following the Premi Boira de Teatre, directed by the author' },
        { year: 2011, place: 'Teatre del Raval, Barcelona', note: 'Selected for the Mostra de Teatre de Barcelona' },
        { year: 2011, place: 'Sala Porta4, Barcelona', note: 'On stage in July and November' },
        { year: 2011, place: 'Teatre de Vidreres', note: 'Selected for the Mostra de teatre de Vidreres' },
        { year: 2012, place: 'Sala Porta4, Barcelona', note: 'On stage in March'},
        { year: 2012, place: 'La Caseta de la Coma de Burg, Pallars Sobirà'},
        { year: 2013, place: 'Teatre d\u2019Hostalric'},
      ],
    },
    galleryCount: 0,
    text: { available: true, langs: ['ca'], format: 'PDF', size: '0.2 MB' },
  },
].map((w) => ({ ...w }))

// Altres projectes en curs o en desenvolupament que encara no
// tenen estrena, però que l\u2019autor vol tenir presents al web.
// Projectes en curs — buit per ara. La secció queda activa al menú i
// a la ruta /ca/projectes + /en/projects per quan hi hagi nous
// projectes de l\u2019autor.
export const PROJECTS = [
  {
    slug: 'traducció-generacio',
    title: { ca: 'Traducció de Generació (en pausa) a l\u2019anglès', en: 'Translation Generació (en Pausa)' },

  },
  {
    slug: 'aniversari',
    title: { ca: 'L\u2019aniversari', en: 'L\u2019aniversari' },
    description: {
      ca: 'Text per estrenar partint de l\u2019obra Egos.',
      en: 'Unrepresented piece based upon the text Egos.'
    },

  },
  ]

// Altres projectes sense autoria — peces en què l\u2019autor hi ha
// participat com a coautor, guionista per encàrrec o ajudant de
// direcció, però de les quals no n\u2019és titular. Es mostren a la
// pàgina d\u2019obres estrenades com a annex amb un epígraf clar.
export const COLLABORATIONS = [
  {
    slug: 'mirada-del-poeta',
    title: { ca: 'La mirada del poeta', en: 'La mirada del poeta' },
    year: 2012,
    role: {
      ca: 'Dramatúrgia (encàrrec)',
      en: 'Dramaturgy (commission)',
    },
    description: {
      ca: 'Espectacle de teatre de carrer inspirat en la figura de Joan Margarit, representat a Tordera el maig de 2012.',
      en: 'Street theatre piece inspired by Joan Margarit, performed in Tordera in May 2012.',
    },
  },
  {
    slug: 'parlem-ne',
    title: { ca: 'Parlem-ne', en: 'Parlem-ne' },
    year: 2012,
    role: {
      ca: 'Guió (curtmetratge, encàrrec)',
      en: 'Scriptwriter (short film, commission)',
    },
    description: {
      ca: 'Curtmetratge produït per fiLÒmans amb guió basat en un conte de Pere Calders.',
      en: 'Short film produced by fiLÒmans, script based on a short story by Pere Calders.',
    },
  },
  {
    slug: 'loblit-impossible',
    title: { ca: 'L\u2019oblit impossible', en: 'L\u2019oblit impossible' },
    year: 2012,
    role: {
      ca: 'Guió (documental, encàrrec)',
      en: 'Scriptwriter (documentary, commission)',
    },
    description: {
      ca: 'Documental sobre la figura de Joan Margarit, encarregat pels actes de "La mirada del poeta" 2012.',
      en: 'Documentary on Joan Margarit, commissioned for the "La mirada del poeta" 2012 programme.',
    },
  },
  {
    slug: 'avui-es-quasi-mai',
    title: { ca: 'Avui és gairebé mai', en: 'Avui és gairebé mai' },
    year: 2013,
    role: {
      ca: 'Ajudant de direcció',
      en: 'Assistant director',
    },
    description: {
      ca: 'Ajudantia de direcció a l\u2019obra produïda per la companyia Els carotes a l\u2019Institut del Teatre (Barcelona).',
      en: 'Assistant direction on the play produced by Els carotes at the Institut del Teatre (Barcelona).',
    },
  },
]

// Premis — bloc únic, ordenat per any descendent.
// Tots els reconeixements (premis, finals, accèssits, mencions) hi
// figuren amb el títol del text guardonat quan n\u2019hi ha.
// "work" enllaça a la fitxa quan existeix una entrada al catàleg.
export const AWARDS = [
  {
    year: 2025,
    type: 'finalist',
    name: { ca: 'Finalista del Premi de Narrativa Breu Ciutat d\u2019Amposta', en: 'Finalist — Premi de Narrativa Breu Ciutat d\u2019Amposta' },
    body: { ca: 'Amposta', en: 'Amposta' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2023,
    type: 'prize',
    name: { ca: '3r premi del Premi de narrativa Rafael Sari de l\u2019Alguer', en: '3rd Prize — Premi de narrativa Rafael Sari de l\u2019Alguer' },
    body: { ca: 'L\u2019Alguer (Sardenya)', en: 'L\u2019Alguer (Sardinia)' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2023,
    type: 'finalist',
    name: { ca: 'Finalista del Certamen de relato breve Juan María Molina Jiménez', en: 'Finalist — Certamen de relato breve Juan María Molina Jiménez' },
    body: { ca: '[Població a confirmar per l\u2019autor]', en: '[Town to be confirmed by the author]' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2023,
    type: 'prize',
    name: { ca: '1r premi del Premi Pere Calders de narrativa de Gurb', en: '1st Prize — Premi Pere Calders de narrativa de Gurb' },
    body: { ca: 'Gurb', en: 'Gurb' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2023,
    type: 'prize',
    name: { ca: '1r premi del Premi de narrativa curta Ploma de Ferro', en: '1st Prize — Premi de narrativa curta Ploma de Ferro' },
    body: { ca: '[Població a confirmar per l\u2019autor]', en: '[Town to be confirmed by the author]' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2023,
    type: 'prize',
    name: { ca: '1r premi dels Premis Literaris Modest Salse', en: '1st Prize — Premis Literaris Modest Salse' },
    body: { ca: '[Població a confirmar per l\u2019autor]', en: '[Town to be confirmed by the author]' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2021,
    type: 'mention',
    name: { ca: 'Accèssit del Premi Pere Calders de narrativa de Gurb', en: 'Special mention — Premi Pere Calders de narrativa de Gurb' },
    body: { ca: 'Gurb', en: 'Gurb' },
    note: { ca: 'Per "L\u2019Albert i la Maria".', en: 'For "L\u2019Albert i la Maria".' },
    work: null,
  },
  {
    year: 2020,
    type: 'prize',
    name: { ca: '1r premi del Premi literari de textos Teatrals de la Vila de Gràcia', en: '1st Prize — Premi literari de textos Teatrals de la Vila de Gràcia' },
    body: { ca: 'Vila de Gràcia, Barcelona', en: 'Vila de Gràcia, Barcelona' },
    note: { ca: 'Per "La magnitud de la tragèdia" (obra no estrenada).', en: 'For "La magnitud de la tragèdia" (unperformed).' },
    work: null,
  },
  {
    year: 2016,
    type: 'prize',
    name: { ca: '1r premi del Premi Inicia\u2019t de Badalona', en: '1st Prize — Premi Inicia\u2019t de Badalona' },
    body: { ca: 'Badalona', en: 'Badalona' },
    note: { ca: 'Per "El pis del pare" (estrenada al Teatre Zorrilla el 2017).', en: 'For "El pis del pare" (premiered at Teatre Zorrilla in 2017).' },
    work: 'el-pis-del-pare',
  },
  {
    year: 2016,
    type: 'finalist',
    name: { ca: 'Finalista del Premi de Textos de Teatre Carro de Baco', en: 'Finalist — Premi de Textos de Teatre Carro de Baco' },
    body: { ca: 'Barcelona', en: 'Barcelona' },
    note: { ca: 'Per "Amor" (obra no estrenada).', en: 'For "Amor" (unperformed).' },
    work: null,
  },
  {
    year: 2016,
    type: 'finalist',
    name: { ca: 'Finalista del Premi de Textos de Teatre Carro de Baco', en: 'Finalist — Premi de Textos de Teatre Carro de Baco' },
    body: { ca: 'Barcelona', en: 'Barcelona' },
    note: { ca: 'Per "Enquistats" (obra no estrenada).', en: 'For "Enquistats" (unperformed).' },
    work: null,
  },
  {
    year: 2015,
    type: 'selection',
    name: { ca: 'Text seleccionat al Cimientos Stage Reading', en: 'Selected text — Cimientos Stage Reading' },
    body: { ca: 'Nova York', en: 'New York' },
    note: { ca: 'The Kitchen.', en: 'The Kitchen.' },
    work: 'the-kitchen',
  },
  {
    year: 2015,
    type: 'selection',
    name: { ca: 'Text seleccionat al 1r Concurso Internacional de Aforismos d\u2019Ediciones con Talento', en: 'Selected text — 1st Concurso Internacional de Aforismos (Ediciones con Talento)' },
    body: { ca: 'Madrid', en: 'Madrid' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2014,
    type: 'mention',
    name: { ca: 'Menció especial als Premios Otoño Villa de Chiva', en: 'Special mention — Premios Otoño Villa de Chiva' },
    body: { ca: 'Chiva, València', en: 'Chiva, Valencia' },
    note: { ca: 'Per "El acantilado" (obra no estrenada).', en: 'For "El acantilado" (unperformed).' },
    work: null,
  },
  {
    year: 2014,
    type: 'selection',
    name: { ca: 'Text seleccionat al Cimientos Stage Reading', en: 'Selected text — Cimientos Stage Reading' },
    body: { ca: 'Nova York', en: 'New York' },
    note: { ca: 'Los Columpios.', en: 'Los Columpios.' },
    work: 'los-columpios',
  },
  {
    year: 2014,
    type: 'finalist',
    name: { ca: 'Finalista del II Premi Can Jeroni de narrativa Breu (Eivissa)', en: 'Finalist — II Premi Can Jeroni de narrativa Breu (Eivissa)' },
    body: { ca: 'Eivissa', en: 'Ibiza' },
    note: { ca: 'Per "Una nit".', en: 'For "Una nit".' },
    work: null,
  },
  {
    year: 2013,
    type: 'finalist',
    name: { ca: 'Finalista del VI Premi de Teatre Breu Inicia\u2019t (Badalona)', en: 'Finalist — VI Premi de Teatre Breu Inicia\u2019t (Badalona)' },
    body: { ca: 'Badalona', en: 'Badalona' },
    note: { ca: 'Per "El primer sopar" (obra no estrenada).', en: 'For "El primer sopar" (unperformed).' },
    work: null,
  },
  {
    year: 2013,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Textos Teatrals Vila de Gràcia', en: '2nd Prize — Concurs de Textos Teatrals Vila de Gràcia' },
    body: { ca: 'Vila de Gràcia, Barcelona', en: 'Vila de Gràcia, Barcelona' },
    note: { ca: 'Per "La partida" (obra no estrenada).', en: 'For "La partida" (unperformed).' },
    work: null,
  },
  {
    year: 2012,
    type: 'prize',
    name: { ca: '1r premi del Teatro Mínimo Dramaturgo Moreno Arenas (Albolote)', en: '1st Prize — Teatro Mínimo Dramaturgo Moreno Arenas (Albolote)' },
    body: { ca: 'Teatro de Albolote, Granada', en: 'Teatro de Albolote, Granada' },
    note: { ca: 'Per "Conversación 24", estrenada al març de 2013 al Teatro de Albolote.', en: 'For "Conversación 24", premiered at Teatro de Albolote in March 2013.' },
    work: 'conversacion-24',
  },
  {
    year: 2012,
    type: 'finalist',
    name: { ca: 'Finalista del V Premi de Teatre Breu Inicia\u2019t (Badalona)', en: 'Finalist — V Premi de Teatre Breu Inicia\u2019t (Badalona)' },
    body: { ca: 'Badalona', en: 'Badalona' },
    note: { ca: 'Per "El casament" (obra no estrenada).', en: 'For "El casament" (unperformed).' },
    work: null,
  },
  {
    year: 2012,
    type: 'mention',
    name: { ca: 'Premi a la diferència del Concurs Literari Miquel Jové i Bosch (Balenyà)', en: 'Premi a la diferència — Concurs Literari Miquel Jové i Bosch (Balenyà)' },
    body: { ca: 'Balenyà', en: 'Balenyà' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2012,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2011,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2010,
    type: 'prize',
    name: { ca: '1r Premi Boira de Teatre (Vic)', en: '1st Prize Boira de Teatre (Vic)' },
    body: { ca: 'Vic', en: 'Vic' },
    note: { ca: 'Per "Tu i Jo", estrenada al març de 2011 a l\u2019Institut del Teatre de Vic.', en: 'For "Tu i Jo", premiered at Institut del Teatre de Vic in March 2011.' },
    work: 'tu-i-jo',
  },
  {
    year: 2010,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: 'Per "El pressentiment".', en: 'For "El pressentiment".' },
    work: null,
  },
  {
    year: 2010,
    type: 'finalist',
    name: { ca: 'Finalista del premi literari Districte V (Barcelona)', en: 'Finalist — premi literari Districte V (Barcelona)' },
    body: { ca: 'Districte V, Barcelona', en: 'Districte V, Barcelona' },
    note: { ca: 'Per "Nil, varó, caucàsic, 21 anys".', en: 'For "Nil, varó, caucàsic, 21 anys".' },
    work: null,
  },
  {
    year: 2009,
    type: 'prize',
    name: { ca: '1r Premi Frederica Montseny (Manlleu)', en: '1st Prize Frederica Montseny (Manlleu)' },
    body: { ca: 'Manlleu', en: 'Manlleu' },
    note: { ca: 'Per "El naixement de la Marta".', en: 'For "El naixement de la Marta".' },
    work: null,
  },
  {
    year: 2009,
    type: 'prize',
    name: { ca: '1r premi del Concurs Literari (Santa Margarida i els Monjos)', en: '1st Prize — Concurs Literari (Santa Margarida i els Monjos)' },
    body: { ca: 'Santa Margarida i els Monjos', en: 'Santa Margarida i els Monjos' },
    note: { ca: 'Per "Trobades a l\u2019hostal".', en: 'For "Trobades a l\u2019hostal".' },
    work: null,
  },
  {
    year: 2009,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2009,
    type: 'finalist',
    name: { ca: 'Finalista del Premi de Microrelats La Nau (Castelló)', en: 'Finalist — Premi de Microrelats La Nau (Castelló)' },
    body: { ca: 'Castelló de la Plana', en: 'Castelló de la Plana' },
    note: { ca: 'Per "La pèrdua".', en: 'For "La pèrdua".' },
    work: null,
  },
  {
    year: 2009,
    type: 'finalist',
    name: { ca: 'Finalista del Concurs literari de Sant Jordi (Llagostera)', en: 'Finalist — Concurs literari de Sant Jordi (Llagostera)' },
    body: { ca: 'Llagostera', en: 'Llagostera' },
    note: { ca: 'Per "El naixement de la Marta".', en: 'For "El naixement de la Marta".' },
    work: null,
  },
  {
    year: 2009,
    type: 'finalist',
    name: { ca: 'Finalista del Concurs de Cartes d\u2019amor (Calafell)', en: 'Finalist — Concurs de Cartes d\u2019amor (Calafell)' },
    body: { ca: 'Calafell', en: 'Calafell' },
    note: { ca: 'Per "Una història inacabada".', en: 'For "Una història inacabada".' },
    work: null,
  },
  {
    year: 2008,
    type: 'prize',
    name: { ca: '2n premi a la Mostra literària del Maresme', en: '2nd Prize — Mostra literària del Maresme' },
    body: { ca: 'Maresme', en: 'Maresme' },
    note: { ca: 'Per "Una qüestió de faldilles".', en: 'For "Una qüestió de faldilles".' },
    work: null,
  },
  {
    year: 2008,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: 'Per "Una qüestió de faldilles".', en: 'For "Una qüestió de faldilles".' },
    work: null,
  },
  {
    year: 2007,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: 'Per "El relleu".', en: 'For "El relleu".' },
    work: null,
  },
  {
    year: 2002,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: 'Per "Breu resum intermitent d\u2019una vida".', en: 'For "Breu resum intermitent d\u2019una vida".' },
    work: null,
  },
  {
    year: 2001,
    type: 'prize',
    name: { ca: '1r Premi del Concurs de Teatre (Roses)', en: '1st Prize — Concurs de Teatre (Roses)' },
    body: { ca: 'Roses', en: 'Roses' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2001,
    type: 'prize',
    name: { ca: '2n Premi Cercamòn (Cassà de la Selva)', en: '2nd Prize Cercamòn (Cassà de la Selva)' },
    body: { ca: 'Cassà de la Selva', en: 'Cassà de la Selva' },
    note: { ca: '[Text a confirmar per l\u2019autor].', en: '[Text to be confirmed by the author].' },
    work: null,
  },
  {
    year: 2001,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: 'Per "El màstil equivocat, la finestra inevitable i les cadenes de per vida".', en: 'For "El màstil equivocat, la finestra inevitable i les cadenes de per vida".' },
    work: null,
  },
  {
    year: 2000,
    type: 'prize',
    name: { ca: '2n premi del Concurs de Sant Jordi (Tordera)', en: '2nd Prize — Concurs de Sant Jordi (Tordera)' },
    body: { ca: 'Tordera', en: 'Tordera' },
    note: { ca: 'Per "Si mai un desconegut…".', en: 'For "Si mai un desconegut…".' },
    work: null,
  },
  {
    year: 1996,
    type: 'prize',
    name: { ca: '1r premi del Concurs literari Josep Pla (Palafrugell)', en: '1st Prize — Concurs literari Josep Pla (Palafrugell)' },
    body: { ca: 'Palafrugell', en: 'Palafrugell' },
    note: { ca: 'Per "En Joan i la Maria".', en: 'For "En Joan i la Maria".' },
    work: null,
  },
  {
    year: 1995,
    type: 'prize',
    name: { ca: '2n premi Cercamón (Cassà de la Selva)', en: '2nd Prize Cercamón (Cassà de la Selva)' },
    body: { ca: 'Cassà de la Selva', en: 'Cassà de la Selva' },
    note: { ca: 'Per "Benedicció profana".', en: 'For "Benedicció profana".' },
    work: null,
  },
]

// Notícies — estrena més recent, lectura recent, premi recent, etc.
// S\u2019afegeixen una colla d\u2019entrades noves coherents amb la nova trajectòria.
export const NEWS = [
  {
    date: '2023-02-10',
    title: {
      ca: '"Tu i Jo" al programa Barcelona Districte Cultural (8 funcions)',
      en: '"Tu i Jo" in the Barcelona Districte Cultural programme (8 performances)',
    },
    body: {
      ca: '"Tu i Jo" seleccionada pel Barcelona Districte Cultural, amb 8 representacions entre febrer i març a diversos Centres Cívics de Barcelona.',
      en: '"Tu i Jo" selected for the Barcelona Districte Cultural programme, with 8 performances between February and March in several Centres Cívics.',
    },
    relatedWork: 'tu-i-jo',
  },
  {
    date: '2022-03-15',
    title: {
      ca: '"Tu i Jo" a la Sala Fènix (1a convocatòria Teatres de Proximitat)',
      en: '"Tu i Jo" at Sala Fènix (1st Teatres de Proximitat call)',
    },
    body: {
      ca: '"Tu i Jo" seleccionada a la 1a convocatòria dels Teatres de Proximitat, en cartell al març a la Sala Fènix (Barcelona).',
      en: '"Tu i Jo" selected for the 1st Teatres de Proximitat call, on stage at the Sala Fènix in March.',
    },
    relatedWork: 'tu-i-jo',
  },
  {
    date: '2022-05-20',
    title: {
      ca: 'Lectura dramatitzada d\u2019"El pis del pare" a Gaia Books (Badalona)',
      en: 'Staged reading of "El pis del pare" at Gaia Books (Badalona)',
    },
    body: {
      ca: 'Lectura dramatitzada d\u2019"El pis del pare" a la llibreria Gaia Books de Badalona.',
      en: 'Staged reading of "El pis del pare" at Gaia Books bookshop in Badalona.',
    },
    relatedWork: 'el-pis-del-pare',
  },
  {
    date: '2021-11-05',
    title: {
      ca: '"Tu i Jo" al Centre Cívic de Sant Andreu (companyia Fil Vermell)',
      en: '"Tu i Jo" at the Centre Cívic de Sant Andreu (company Fil Vermell)',
    },
    body: {
      ca: '"Tu i Jo" produïda per la companyia Fil Vermell al Centre Cívic de Sant Andreu, dintre del cicle #jotambé.',
      en: '"Tu i Jo" produced by Fil Vermell at the Centre Cívic de Sant Andreu, as part of the #jotambé cycle.',
    },
    relatedWork: 'tu-i-jo',
  },
  {
    date: '2021-04-28',
    title: { ca: 'Lectura de "La finestra" a la Sala Beckett (cicle #jotambé)', en: 'Reading of "La finestra" at Sala Beckett (#jotambé cycle)' },
    body: {
      ca: 'Lectura dramatitzada de "La finestra" a la Sala Beckett, dintre del Micròfon obert del cicle #jotambé.',
      en: 'Staged reading of "La finestra" at Sala Beckett, as part of the open microphone of the #jotambé cycle.',
    },
    relatedWork: 'la-finestra',
  },
  {
    date: '2017-09-10',
    title: {
      ca: 'Publicació d\u2019"El pis del pare" a Pont del Petroli Edicions',
      en: 'Publication of "El pis del pare" by Pont del Petroli Edicions',
    },
    body: {
      ca: 'Pont del Petroli Edicions publica el text d\u2019"El pis del pare" coincidint amb la lectura dramatitzada al Teatre Zorrilla de Badalona.',
      en: 'Pont del Petroli Edicions publishes the text of "El pis del pare" to coincide with the staged reading at Teatre Zorrilla (Badalona).',
    },
    relatedWork: 'el-pis-del-pare',
  },
  {
    date: '2014-09-01',
    title: {
      ca: 'Comença la col·laboració amb Revista de Letras i Núvol',
      en: 'Begins contributing to Revista de Letras and Núvol',
    },
    body: {
      ca: 'Roger Simeon comença a publicar articles sobre teatre i narrativa a les revistes digitals Revista de Letras i Núvol.',
      en: 'Roger Simeon begins publishing articles on theatre and fiction at the digital publications Revista de Letras and Núvol.',
    },
    relatedWork: null,
  },
  {
    date: '2025-10-15',
    title: { ca: 'Finalista del Premi de Narrativa Breu Ciutat d\u2019Amposta', en: 'Finalist — Premi de Narrativa Breu Ciutat d\u2019Amposta' },
    body: {
      ca: 'Roger Simeon queda entre els finalistes del Premi de Narrativa Breu Ciutat d\u2019Amposta 2025.',
      en: 'Roger Simeon is among the finalists of the 2025 Premi de Narrativa Breu Ciutat d\u2019Amposta.',
    },
    relatedWork: null,
  },
  {
    date: '2025-07-20',
    title: { ca: 'Estrena de "La finestra" a Inusual Project', en: 'Premiere of "La finestra" at Inusual Project' },
    body: {
      ca: '"La finestra" s\u2019estrena el 20 de juliol de 2025 a Inusual Project, amb direcció de Xavier Pàmies i les actrius Raquel Secall i Grazia Cipri.',
      en: '"La finestra" premieres on 20 July 2025 at Inusual Project, directed by Xavier Pàmies and performed by Raquel Secall and Grazia Cipri.',
    },
    relatedWork: 'la-finestra',
  },
  {
    date: '2023-11-10',
    title: { ca: 'Estrena de "Generació" a la Sala Pangolí', en: 'Premiere of "Generació" at Sala Pangolí' },
    body: {
      ca: '"Generació" arriba a la Sala Pangolí del 10 de novembre a l\u20191 de desembre de 2023. La producció queda posteriorment en pausa.',
      en: '"Generació" runs at Sala Pangolí from 10 November to 1 December 2023. The production is subsequently put on hold.',
    },
    relatedWork: 'generacio',
  },
  {
    date: '2021-04-28',
    title: { ca: 'Lectura de "La finestra" a la Sala Beckett (cicle #jotambé)', en: 'Reading of "La finestra" at Sala Beckett (#jotambé cycle)' },
    body: {
      ca: 'Lectura dramatitzada de "La finestra" a la Sala Beckett, dintre del cicle #jotambé.',
      en: 'Staged reading of "La finestra" at Sala Beckett, as part of the #jotambé cycle.',
    },
    relatedWork: 'la-finestra',
  },
  {
    date: '2020-06-30',
    title: { ca: '1r Premi Literari de Textos Teatrals de la Vila de Gràcia', en: '1st Prize — Premi Literari de Textos Teatrals Vila de Gràcia' },
    body: {
      ca: '"La magnitud de la tragèdia" obté el primer premi de la convocatòria 2020 de la Vila de Gràcia.',
      en: '"La magnitud de la tragèdia" receives the 2020 first prize of the Vila de Gràcia competition.',
    },
    relatedWork: null,
  },
  {
    date: '2018-06-18',
    title: { ca: 'Lectura de "L\u2019any que vam viure sense internet" a Sala Flyhard', en: 'Reading of "L\u2019any que vam viure sense internet" at Sala Flyhard' },
    body: {
      ca: 'Lectura oberta a la Sala Flyhard el 18 de juny de 2018.',
      en: 'Public reading at Sala Flyhard on 18 June 2018.',
    },
    relatedWork: 'lany-sense-internet',
  },
  {
    date: '2017-03-27',
    title: { ca: 'Estrena d\u2019"El pis del pare" al Teatre Zorrilla (Badalona)', en: 'Premiere of "El pis del pare" at Teatre Zorrilla (Badalona)' },
    body: {
      ca: 'Estrena al Teatre Zorrilla de Badalona el 27 de març de 2017.',
      en: 'Premiere at Teatre Zorrilla (Badalona) on 27 March 2017.',
    },
    relatedWork: 'el-pis-del-pare',
  },
  {
    date: '2016-04-23',
    title: { ca: 'Romeo & Juliet (zai Shanghai) a Jing\u2019an Park', en: 'Romeo & Juliet (zai Shanghai) at Jing\u2019an Park' },
    body: {
      ca: 'Versió anglesa de la peça a l\u2019aire lliure al Jing\u2019an Park el 23 d\u2019abril de 2016.',
      en: 'English-language outdoor cut at Jing\u2019an Park on 23 April 2016.',
    },
    relatedWork: 'romeo-juliet-shanghai',
  },
  {
    date: '2015-11-06',
    title: { ca: 'Producció de "Los Columpios" a IATI Theater (Nova York)', en: '"Los Columpios" production at IATI Theater (New York)' },
    body: {
      ca: 'Producció professional del 6 al 29 de novembre de 2015 a IATI Theater, dirigida per Mario Colón.',
      en: 'Professional run from 6 to 29 November 2015 at IATI Theater, directed by Mario Colón.',
    },
    relatedWork: 'los-columpios-nyc',
  },
  {
    date: '2015-04-10',
    title: { ca: '"10 de abril" al III Congreso de Radioteatro (Sala Berlanga, Madrid)', en: '"10 de abril" at the III Congreso de Radioteatro y Ficción Sonora (Sala Berlanga, Madrid)' },
    body: {
      ca: '"10 de abril" seleccionada a la I Muestra "¿Ya?" de Audiodrama Breve, dintre del III Congreso de Radioteatro y Ficción Sonora.',
      en: '"10 de abril" selected for the I Muestra "¿Ya?" de Audiodrama Breve, within the III Congreso de Radioteatro y Ficción Sonora.',
    },
    relatedWork: '10-de-abril',
  },
  {
    date: '2014-06-13',
    title: { ca: 'Lectura d\u2019"Il·lusions" dirigida per Jordi Casanovas (Sala Beckett)', en: 'Reading of "Il·lusions" directed by Jordi Casanovas (Sala Beckett)' },
    body: {
      ca: 'Lectura dramatitzada a la Sala Beckett el 13 de juny de 2014, dirigida per Jordi Casanovas.',
      en: 'Staged reading at Sala Beckett on 13 June 2014, directed by Jordi Casanovas.',
    },
    relatedWork: 'illusions',
  },
  {
    date: '2014-03-23',
    title: { ca: '"Angeleta & Etelvina" a l\u2019Arcola Theatre (Londres)', en: '"Angeleta & Etelvina" at Arcola Theatre (London)' },
    body: {
      ca: 'Versió alternativa de "You and Me" produïda per Around the Globe a l\u2019Arcola Theatre, dintre del festival Off del Teatro del Siglo de Oro Español.',
      en: 'Alternative cut of "You and Me" produced by Around the Globe at Arcola Theatre, as part of the Off Festival of the Spanish Golden Age Theatre.',
    },
    relatedWork: 'angeleta-etelvina',
  },
  {
    date: '2013-03-01',
    title: { ca: 'Premi Dramaturgo Moreno Arenas per "Conversación 24"', en: 'Dramaturgo Moreno Arenas Prize for "Conversación 24"' },
    body: {
      ca: 'Estrena al Teatro de Albolote (Granada) dintre del Premi Dramaturgo Moreno Arenas de Teatro Breve 2013.',
      en: 'Premiere at Teatro de Albolote (Granada) as part of the 2013 Dramaturgo Moreno Arenas Prize for Short Theatre.',
    },
    relatedWork: 'conversacion-24',
  },
  {
    date: '2011-03-01',
    title: { ca: 'Debut professional: "Tu i Jo" a l\u2019Institut del Teatre de Vic', en: 'Professional debut: "Tu i Jo" at Institut del Teatre de Vic' },
    body: {
      ca: 'Derivada del Premi Boira de Teatre 2010. Primera estrena professional de l\u2019autor.',
      en: 'Following the Premi Boira de Teatre 2010. First professional premiere of the author.',
    },
    relatedWork: 'tu-i-jo',
  },
]

// Publicacions — articles, crítiques, relats i obres publicades. Cada
// entrada té el títol (bilingüe), l'any, la categoria, l'editorial o la
// publicació i un enllaç extern quan n'hi ha. L'ordre és cronològic
// invers; el visitant pot filtrar per categoria a la pàgina dedicada.
export const PUBLICATIONS = [
  // 2023
  {
    year: 2023,
    title: {
      ca: 'La llamada que no pude hacer',
      en: 'La llamada que no pude hacer',
    },
    type: 'story',
    publisher: {
      ca: 'II Certamen Microrelatos feministas de la Universidad de Rioja',
      en: 'II Contest of feminist micro-stories, University of Rioja',
    },
    url: '',
  },
  {
    year: 2023,
    title: {
      ca: 'Ante el espejo',
      en: 'Ante el espejo',
    },
    type: 'story',
    publisher: {
      ca: 'Bubok (Finalista al Concurs de Relatos Breves Juan María Molina Jiménez)',
      en: 'Bubok (Finalist at the Juan María Molina Jiménez Short Story Contest)',
    },
    url: 'https://www.bubok.es/libros/275606/i-certamen-de-relato-breve-juan-maria-molina-jimenez',
  },
  // 2016
  {
    year: 2016,
    title: { ca: 'El pis del pare', en: 'El pis del pare' },
    type: 'play',
    publisher: { ca: 'Pont de Petroli Edicions', en: 'Pont de Petroli Edicions' },
    url: 'http://pontdelpetroliedicions.net/Teatre/El-pis-del-pare/',
  },
  // 2015 — crítiques, ressenyes i articles
  {
    year: 2015,
    title: { ca: 'Paraísos imaginarios', en: 'Paraísos imaginarios' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/paraisos-imaginarios/',
  },
  {
    year: 2015,
    title: { ca: 'Johnny empuñó su fusil', en: 'Johnny empuñó su fusil' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/johnny-empuno-su-fusil/',
  },
  {
    year: 2015,
    title: { ca: 'Festival Grec', en: 'Festival Grec' },
    type: 'review',
    publisher: { ca: 'Faaan!', en: 'Faaan!' },
    url: '',
  },
  {
    year: 2015,
    title: { ca: 'Los amigos', en: 'Los amigos' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/los-amigos/',
  },
  {
    year: 2015,
    title: { ca: 'Blackie Books', en: 'Blackie Books' },
    type: 'review',
    publisher: { ca: 'Faaan!', en: 'Faaan!' },
    url: '',
  },
  {
    year: 2015,
    title: { ca: '10 anys de BDW', en: '10 anys de BDW' },
    type: 'review',
    publisher: { ca: 'Faaan!', en: 'Faaan!' },
    url: '',
  },
  {
    year: 2015,
    title: { ca: 'La cocina', en: 'La cocina' },
    type: 'play',
    publisher: { ca: 'En sentido figurado', en: 'En sentido figurado' },
    url: 'https://rogersimeon.wordpress.com/wp-content/uploads/2014/03/la-cocina.pdf',
  },
  {
    year: 2015,
    title: { ca: 'Una trilogía palestina', en: 'Una trilogía palestina' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/trilogia-palestina/',
  },
  {
    year: 2015,
    title: {
      ca: 'Sobre el fenomen de les feines de merda',
      en: 'Sobre el fenomen de les feines de merda',
    },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/critica/sobre-el-fenomen-de-les-feines-de-merda/',
  },
  {
    year: 2015,
    title: { ca: 'Conversar con Wilde', en: 'Conversar con Wilde' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/conversar-con-wilde/',
  },
  {
    year: 2015,
    title: {
      ca: 'Camargate o quan la realitat supera la ficció',
      en: 'Camargate o quan la realitat supera la ficció',
    },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/critica/camargate-o-quan-la-realitat-supera-la-ficcio/',
  },
  {
    year: 2015,
    title: { ca: 'Capas de Armiño y Fish & Chips', en: 'Capas de Armiño y Fish & Chips' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/capas-de-armino-y-fishchips/',
  },
  {
    year: 2015,
    title: {
      ca: 'Teenage Dream. Retrat de l\u2019artista adolescent',
      en: 'Teenage Dream. Retrat de l\u2019artista adolescent',
    },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/critica/teenage-dream-retrat-de-lartista-adolescent/',
  },
  {
    year: 2015,
    title: { ca: 'Un nido de paradojas', en: 'Un nido de paradojas' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/un-nido-de-paradojas/',
  },
  // 2014
  {
    year: 2014,
    title: { ca: 'Eduard II', en: 'Eduard II' },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/critica/eduard-ii-un-text-atemporal/',
  },
  {
    year: 2014,
    title: { ca: 'Prendre partit', en: 'Prendre partit' },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/critica/un-tete-a-tete-entre-josep-maria-pou-i-andres-herrera/',
  },
  {
    year: 2014,
    title: { ca: '¡Oh, amigos míos!', en: '¡Oh, amigos míos!' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/oh-amigos-mios/',
  },
  {
    year: 2014,
    title: { ca: 'II Certamen de Narrativa breu Can Jeroni', en: 'II Contest of short fiction Can Jeroni' },
    type: 'story',
    publisher: { ca: 'Edicions Aïllades', en: 'Edicions Aïllades' },
    url: 'http://www.illes.cat/index.php?page=shop.product_details&category_id=null&flypage=flypage.tpl&product_id=65&option=com_virtuemart&Itemid=9999&lang=ca&vmcchk=1&Itemid=9999',
  },
  {
    year: 2014,
    title: {
      ca: 'La protesta de Václav Havel',
      en: 'La protesta de Václav Havel',
    },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/critica/la-protesta-de-vaclav-havel/',
  },
  {
    year: 2014,
    title: { ca: 'Per un teatre ebri', en: 'Per un teatre ebri' },
    type: 'review-theatre',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/opinio/absentee-la-pulpe-teatro-el-tantarantana/',
  },
  {
    year: 2014,
    title: {
      ca: 'Marcel·lí Antúnez, Sistematúrgia',
      en: 'Marcel·lí Antúnez, Sistematúrgia',
    },
    type: 'feature',
    publisher: { ca: 'Núvol', en: 'Núvol' },
    url: 'http://www.nuvol.com/noticies/marcel%C2%B7li-antunez-curs-de-sistematurgia/',
  },
  {
    year: 2014,
    title: { ca: 'El clan de los Benasperi', en: 'El clan de los Benasperi' },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/el-clan-de-los-benasperi/',
  },
  {
    year: 2014,
    title: {
      ca: 'Soley-Beltran: Cuerpo de letras',
      en: 'Soley-Beltran: Cuerpo de letras',
    },
    type: 'interview',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/soley-beltran-cuerpo-de-letras/',
  },
  {
    year: 2014,
    title: {
      ca: 'Diario de un hombre engañado',
      en: 'Diario de un hombre engañado',
    },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/diario-de-un-hombre-enganado/',
  },
  {
    year: 2014,
    title: {
      ca: 'Un cuadro de desengaños',
      en: 'Un cuadro de desengaños',
    },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/un-cuadro-de-desenganos/',
  },
  {
    year: 2014,
    title: {
      ca: 'El fin de la vida contemplativa',
      en: 'El fin de la vida contemplativa',
    },
    type: 'review-literary',
    publisher: { ca: 'Revista de Letras', en: 'Revista de Letras' },
    url: 'http://revistadeletras.net/el-fin-de-la-vida-contemplativa/',
  },
  // 2013
  {
    year: 2013,
    title: { ca: 'Conversación 24', en: 'Conversación 24' },
    type: 'play',
    publisher: { ca: 'Ediciones Carena (IV Certamen de Teatro Dramaturgo Moreno Arenas)', en: 'Ediciones Carena (IV Drama José Moreno Arenas Contest)' },
    url: 'http://www.edicionescarena.com/ecomm/libro/iv-certamen-de-teatro-dramaturgo-jose-moreno-arenas-c-pombero-y-e-labollita-c-lopez-llera-r-simeon-o-verdu-a-bueno.aspx',
  },
  {
    year: 2013,
    title: { ca: 'Rayuela', en: 'Rayuela' },
    type: 'review-literary',
    publisher: { ca: 'Blogs de Lletres', en: 'Blogs de Lletres' },
    url: 'http://www.blocsdelletres.com/2013/06/03/rayuela-julio-cortazar/',
  },
  {
    year: 2013,
    title: {
      ca: 'Recreació sonora (i visual) del pecat original',
      en: 'Recreació sonora (i visual) del pecat original',
    },
    type: 'review-theatre',
    publisher: { ca: 'Apunts de Temporada', en: 'Apunts de Temporada' },
    url: 'http://www.apuntsdetemporada.cat/2013/11/25/cabosanroque-bestiari-temporada-alta-2013/',
  },
  {
    year: 2013,
    title: { ca: 'Aigües encantades', en: 'Aigües encantades' },
    type: 'review-literary',
    publisher: { ca: 'Blogs de Lletres', en: 'Blogs de Lletres' },
    url: 'http://www.blocsdelletres.com/2013/07/03/aigues-encantades-joan-puig-i-ferrater/',
  },
  // 2012
  {
    year: 2012,
    title: { ca: 'El juego de las vanidades', en: 'El juego de las vanidades' },
    type: 'feature',
    publisher: { ca: 'Artezblai', en: 'Artezblai' },
    url: 'http://www.artezblai.com/artezblai/el-juego-de-las-vanidades.html',
  },
  {
    year: 2012,
    title: { ca: 'Aturat', en: 'Aturat' },
    type: 'story',
    publisher: { ca: 'Llibre i Martell', en: 'Llibre i Martell' },
    url: 'https://www.pinterest.es/pin/228839224788342733/',
  },
  {
    year: 2012,
    title: { ca: 'El matí de l\u2019aturat', en: 'El matí de l\u2019aturat' },
    type: 'story',
    publisher: { ca: 'Tinet', en: 'Tinet' },
    url: 'http://www.tinet.cat/portal/sheet-show.do?id=70767&ch=9',
  },
  {
    year: 2012,
    title: { ca: 'Rèquiem per una monja', en: 'Rèquiem per una monja' },
    type: 'review-literary',
    publisher: { ca: 'Blogs de Lletres', en: 'Blogs de Lletres' },
    url: 'http://www.blocsdelletres.com/2012/04/26/requiem-per-una-monja-de-william-faulkner/',
  },
  {
    year: 2012,
    title: {
      ca: 'L\u2019hora dels adéus, de Narcís Comadira',
      en: 'L\u2019hora dels adéus, de Narcís Comadira',
    },
    type: 'review-literary',
    publisher: { ca: 'Blogs de Lletres', en: 'Blogs de Lletres' },
    url: 'http://www.blocsdelletres.com/2012/04/13/lhora-dels-adeus-narcis-comadira/',
  },
  // 2011
  {
    year: 2011,
    title: { ca: 'Tu i jo', en: 'Tu i jo' },
    type: 'play',
    publisher: { ca: 'Edicions Emboscall', en: 'Edicions Emboscall' },
    url: '',
  },
  {
    year: 2011,
    title: { ca: 'El pressentiment', en: 'El pressentiment' },
    type: 'story',
    publisher: { ca: 'Lletraferida', en: 'Lletraferida' },
    url: '',
  },
  {
    year: 2011,
    title: { ca: 'A vegades', en: 'A vegades' },
    type: 'story',
    publisher: { ca: 'Tinet', en: 'Tinet' },
  },
  {
    year: 2011,
    title: { ca: 'Fusta d\u2019encarregat', en: 'Fusta d\u2019encarregat' },
    type: 'story',
    publisher: { ca: 'Llibre i Martell', en: 'Llibre i Martell' },
  },
  // 2010
  {
    year: 2010,
    title: {
      ca: 'Nil, varó, caucàsic, 21 anys',
      en: 'Nil, varó, caucàsic, 21 anys',
    },
    type: 'story',
    publisher: {
      ca: 'Editorial Montflorit (Districte V)',
      en: 'Editorial Montflorit (Districte V)',
    },
  },
  // 2009
  {
    year: 2009,
    title: { ca: 'Un penya-segat', en: 'Un penya-segat' },
    type: 'collection',
    publisher: { ca: 'Bubok', en: 'Bubok' },
    url: 'http://www.bubok.es/libros/7113/un-penyasegat',
  },
  {
    year: 2009,
    title: { ca: 'L\u2019amistat', en: 'L\u2019amistat' },
    type: 'story',
    publisher: { ca: 'La lluna en un cove, núm. 8', en: 'La lluna en un cove, núm. 8' },
    url: 'https://blocs.mesvilaweb.cat/anmonbar/la-lluna-en-un-cove-numero-8/',
  },
  {
    year: 2009,
    title: {
      ca: 'En els suburbis de Sant Petersburg',
      en: 'En els suburbis de Sant Petersburg',
    },
    type: 'story',
    publisher: {
      ca: 'La lluna en un cove (especial viatges)',
      en: 'La lluna en un cove (travel special)',
    },
    url: 'https://www.pinterest.es/pin/en-els-suburbis-de-sant-petersburg-conte-publicat-a-lespecial-viatges-de-la-revista-literria-la-lluna-en-un-cove--228839224788342769/',
  },
]

// Llengües disponibles per a textos
export const LANGS = {
  catala: { ca: 'Català', en: 'Catalan' },
  espanyol: { ca: 'Castellà', en: 'Spanish' },
  angles: { ca: 'Anglès', en: 'English' },
}