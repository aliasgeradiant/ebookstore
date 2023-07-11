import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    category: 'art',
    ISBN: 9789000307975,
    title: "An Analysis of John Berger's Ways of Seeing",
    author: "Emmanouil Kalkanis",
    summary: "Ways of Seeing is a key art-historical work that continues to provoke widespread debate. It is comprised of seven different essays, three of which are pictorial and the other containing texts and images.  Berger first examines the relationship between seeing and knowing, discussing how our assumptions affect how we see a painting.  He moves on to consider the role of women in artwork, particularly regarding the female nude. The third essay deals with oil painting looking at the relationship between subjects and ownership. Finally, Berger addresses the idea of ownership in a consumerist society, discussing the power of imagery in advertising, with particular regards to photography.",
    image: "https://image.ebooks.com/cover/95960011.jpg",
    price: {
      "currency": "EUR",
      "value": 10,
      "displayValue": "10.00"
    },
    review: {
      current: 2,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'bestseller',
    ISBN: 9780552159722,
    title: "Deception point",
    author: "Dan Brown",
    summary: "When a new NASA satellite detects evidence of an astonishingly rare object buried deep in the Arctic ice, the floundering space agency proclaims a much-needed victory.. a victory that has profound implications for U.S. space policy and the impending presidential election. With the Oval Office in the balance, the President dispatches White House Intelligence analyst Rachel Sexton to the Arctic to verify the authenticity of the find. Accompanied by a team of experts, including the charismatic academic Michael Tolland, Rachel uncovers the unthinkable - evidence of scientific trickery - a bold deception that threatens to plunge the world into controversy..",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg",
    price: {
      "currency": "EUR",
      "value": 9.99,
      "displayValue": "9.99"
    },
    review: {
      current: 4,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'horror',
    ISBN: 9789022558027,
    title: "House of Secrets",
    author: "Lowell Cauffiel",
    summary: "The epic horrors of psychopathic mastermind Eddie Lee Sexton from the New York Times bestselling author who “knows how to dramatize true crime” (Elmore Leonard). For years, Eddie Lee Sexton ruled his large family like Charles Manson. The depraved patriarch dominated his ragged brood of twelve children mentally, physically, and sexually, and enforced every cruelty imaginable, from vicious beatings to raping his daughters and fathering their children. Finally, in 1992, Sexton’s eighteen-year-old daughter Machelle, seeking refuge in a women’s shelter, revealed the shocking, sordid details of her father’s abuse to authorities.",
    image: "https://image.ebooks.com/cover/209731573.jpg",
    price: {
      "currency": "EUR",
      "value": 17.5,
      "displayValue": "17.50"
    },
    review: {
      current: 5,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'horror',
    ISBN: 9781841499789,
    title: "The Profiler Diaries",
    author: "Gérard Labuschagne",
    summary: "In this gripping – and sometimes terrifying – account, former South African Police Service (SAPS) head profiler Dr Gérard Labuschagne, successor to the legendary Micki Pistorius, recalls some of the 110 murder series and countless other bizarre crimes he analysed during his career. An expert on serial murder and rape cases, Labuschagne saw it all in his fourteen and a half years in the SAPS. He walks the reader through the first crime scene he ever attended, his arrest of the Muldersdrift serial rapist, his experience as the head of the task team mandated to catch the Quarry serial murderer, his involvement with the Brighton Beach axe murders, and more. Despite often being stymied by a lack of resources, office politics and political interference, Labuschagne and his team were always determined to get their man – or woman, as in the Womb Raider case. The Profiler Diaries is a fascinating – and often hair-raising – glimpse into what it was like to be a profiler in the world’s busiest profiling unit.    ",
    image: "https://image.ebooks.com/cover/210233194.jpg",
    price: {
      "currency": "EUR",
      "value": 24.5,
      "displayValue": "24.50"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'bestseller',
    ISBN: 9781409117933,
    title: "A Week in Winter",
    author: "Maeve Binchy",
    summary: "Stoneybridge is full of holiday-makers in summer, its beaches are full of buckets and spades and sandcastles; but in winter it's cold and wild. Few choose to walk along the fine sands, the big round pebbles and the exposed rocky promontories that make up the wind-swept Atlantic coastline. Those who do can't help but see Stone House, the big house on the cliff; once falling into disrepair it is now a beautiful hotel specialising in winter holidays. Its big, warm kitchen, its open log-fires and its elegant bedrooms provide a welcome few can resist, whatever their reasons for coming. Henry and Nicola are burdened with a terrible secret, while cheerful nurse Winnie finds herself on the holiday from hell. John has arrived on an impulse after he missed a flight at Shannon; eccentric Freda claims to be a psychic - and a part-time hairdresser. Then there's Nora, a silent watchful older woman who seems ready to disapprove at any moment.. A Week in Winter is full of Maeve's trademark warmth, humour and characters you want to spend time with.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg",
    price: {
      "currency": "EUR",
      "value": 11.99,
      "displayValue": "11.99"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'art',
    ISBN: 9780751548525,
    title: "Perspective Made Easy",
    author: "Ernest R. Norling",
    summary: "Perspective, the author tells us, is easy; yet surprisingly few artists are aware of the simple rules that make it so. This easy-to-follow book — the first devoted entirely to clarifying the laws of perspective — remedies the situation. In it, the author uses over 250 simple line drawings to illustrate the concepts involved. Beginning with clear, concise, immediately applicable discussions of the horizon, vanishing point, and the crucial relationship of eye level to perspective drawing, you'll learn how to place figures and objects in a drawing, depict interiors, create shade and shadows, and achieve all the other elements necessary for a successful perspective drawing. By repeatedly stressing important points, Mr. Norling teaches you to make them second-nature. Moreover, his approach is so simple and direct that no matter how little raw talent or experience you have, you will soon be able to apply these techniques almost instinctively.",
    image: "https://image.ebooks.com/cover/96419089.jpg",
    price: {
      "currency": "EUR",
      "value": 33.8,
      "displayValue": "33.80"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'bestseller',
    ISBN: 9789023429258,
    title: "De wereld volgens Garp",
    author: "John Irving",
    summary: "De wereld volgens Garp is een zeldzaam komische, originele maar ook schokkende roman die John Irving in één klap beroemd maakte. Sinds de verschijning in 1978 hebben miljoenen lezers genoten van de excentrieke, non-conformistische Jenny, haar zoon T.S. Garp en de fanatici, onschuldige kinderen, transseksuelen, hoeren, worstelaars en de vele andere figuren die de wereld van Garp bevolken. De wereld volgens Garp is een klassieker, een meesterlijke tragikomedie die een diepe indruk op de lezer zal achterlaten.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/3/6/7/1001004005997636.jpg",
    price: {
      "currency": "EUR",
      "value": 19.9,
      "displayValue": "19.90"
    },
    review: {
      current: 1,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'fantasy',
    ISBN: 9789460680854,
    title: "Winter Chalet",
    author: "Linda van Rijn",
    summary: "Vier vriendinnen genieten van een skivakantie in Kirchberg. De moord op een van hen stelt iedereen voor een raadsel... Tijdens een gezellige skivakantie in het Oostenrijkse Kirchberg kunnen de vriendinnen Isa, Chantal, Karen en Annemieke eindelijk weer eens tijd met z'n vieren doorbrengen. Karen, Chantal en Isa arriveren op de zaterdag, Annemieke sluit later aan, ze moet nog werken. De vakantie van de drie begint heel genoeglijk. De vriendinnen hebben de kans echt bij te praten, wat er in het drukke dagelijks leven vaak bij in schiet, en het is prachtig weer om te skien, wat ze dan ook met veel plezier doen. Maar de gezellige skivakantie krijgt een noodlottige wending op de dag dat Annemieke arriveert. Bij aankomst treft ze een van haar vriendinnen dood aan. Rechercheur GŸnter Wolfsberg van de politie in Kirchberg start een onderzoek. Hij verhoort alle vriendinnen en hun partners en ontdekt dat onder het oppervlak van gelukkige relaties en intense vriendschap de nodige spanningen schuilgaan. Het heeft er alle schijn van dat sommige mensen wel erg graag de schuld willen afschuiven...",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/6/6/7/9200000002547666.jpg",
    price: {
      "currency": "EUR",
      "value": 15,
      "displayValue": "15.00"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'fantasy',
    ISBN: 9789023464044,
    title: "De Vliegeraar",
    author: "Khaled Hosseini",
    summary: "Amir en Hassan zijn gevoed door dezelfde min en groeien samen op in de hoofdstad van Afghanistan. Als blijk van hun verbondenheid kerft Amir hun namen in een granaatappelboom: 'Amir en Hassan, de sultans van Kabul'. Maar sultans zijn ze alleen in hun fantasie, want Amir hoort tot de bevoorrechte bevolkingsgroep en Hassan en zijn vader zijn arme Hazaren, in dienst van Amirs vader. Bij de jaarlijkse vliegerwedstrijd in Kabul is Amir de vliegeraar, degene die het touw van de vlieger in handen heeft. Hassan is zijn hulpje, de vliegervanger. 'Voor jou doe ik alles!' roept Hassan hem toe voordat hij wegrent om de vallende vlieger uit de lucht op te vangen. Die grenzeloze loyaliteit is niet wederzijds. Wanneer er iets vreselijks gebeurt met Hassan verraadt hij zijn trouwe metgezel. Na de Russische inval vluchten Amir en zijn vader naar de Verenigde Staten. Amir bouwt er een nieuw bestaan op, maar hij slaagt er niet in Hassan te vergeten. De ontdekking van een schokkend familiegeheim voert hem uiteindelijk terug naar Afghanistan, dat inmiddels door de Taliban is bezet. Daar wordt Amir geconfronteerd met spoken uit zijn verleden. Zijn voornemen om zijn oude schuld jegens Hassan in te lossen sleept hem tegen wil en dank mee in een huiveringwekkend avontuur. De vliegeraar is verfilmd door Marc Foster als The Kite Runner.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/3/5/1/1001004010981536.jpg",
    price: {
      "currency": "EUR",
      "value": 6.99,
      "displayValue": "6.99"
    },
    review: {
      current: 4,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'romance',
    ISBN: 9789024529445,
    title: "De delta deceptie",
    author: "Dan Brown",
    summary: "Hij is terug... Een wetenschappelijke revolutie, een verbijsterende misleiding, een razendsnelle thriller! Onder het poolijs ligt iets wat de wereld voorgoed kan veranderen... Een NASA-satelliet doet een opzienbarende ontdekking op de Noordpool. Dat is een opsteker voor de ruimtevaartorganisatie, die al tijden onder vuur ligt. Ook voor president Zach Herney betekent de vondst goed nieuws: een tweede termijn in het Witte Huis lijkt in zicht. De president vraagt Rachel Sexton, analiste bij de inlichtingendienst NRO, na te gaan of de vondst authentiek is. In allerijl vertrekt ze naar het noordpoolgebied om het werk van een team wetenschappers, onder wie de charismatische oceanograaf Michael Tolland, te controleren. Maar na Rachels aankomst neemt de zaak een onverwachte wending. Het 'bewijs' lijkt minder rotsvast dan gedacht. Voor de president gewaarschuwd kan worden, begint een nachtmerrie op het poolijs. Een speciale eenheid maakt werk van zijn missie: kost wat kost voorkomen dat de waarheid uitkomt... Na Het Juvenalis dilemma, maar vóór De Da Vinci code, schreef Dan Brown deze 'verfijnde mengeling van actie en intriges' (Publishers Weekly). Opnieuw besteedt hij aandacht aan een schimmige geheime dienst. Deze National Reconnaissance Office is nauw verweven met de beroemde ruimtevaartorganisatie NASA. Dan Brown is dé bestsellerauteur van dit moment. De Da Vinci code stond maandenlang op 1 in de top tienen, en ook Het Bernini mysterie en Het Juvenalis dilemma vonden moeiteloos hun weg naar de consument. Ook dit jaar zal in het teken staan van Dan Brown, omdat in mei The Da Vinci Code, dé grote publieksfilm van 2006, wereldwijd in première gaat.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/5/0/5/5/1001004006225505.jpg",
    price: {
      "currency": "EUR",
      "value": 14.95,
      "displayValue": "14.95"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'romance',
    ISBN: 9789044309904,
    title: "Hou je mond!",
    author: "Sophie Kinsella",
    summary: "Emma heeft, zoals alle jonge vrouwen ter wereld, een paar geheimpjes. Voor haar ouders, haar vriend, haar collega's. Zo werd ze ontmaagd in de logeerkamer terwijl haar ouders een film zaten te kijken en ze vindt haar vriend Connor een beetje op Ken lijken. Die van Barbie en Ken. Ze geeft de plant van haar irritante collega sinaasappelsap - bijna dagelijks - en haar string doet pijn. Emma is altijd nerveus als ze moet vliegen. Daarom vertelt ze al haar geheimen zomaar aan een ardige vreemde man die naast haar in het vliegtuig zit. Tenminste, Emma denkt dat het een vreemde is. Want wanneer ze de volgende dag op haar werk komt... Sophie Kinsella is bestsellerchrijfster en journaliste. Ze woont in Londen. Ze heeft weinig grote geheimen, behalve dat ze niet dol is op vliegen.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/3/1/6/1001004002056138.jpg",
    price: {
      "currency": "EUR",
      "value": 10,
      "displayValue": "10.00"
    },
    review: {
      current: 5,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'romance',
    ISBN: 9789023467786,
    title: "In een mens",
    author: "John Irving",
    summary: "In een mens is een meeslepende roman over verlangen, geheimhouding en seksuele identiteit. Een boek over de liefde in al haar verschijningsvormen en een gepassioneerd betoog voor seksuele verscheidenheid. Billy, de biseksuele hoofdpersoon, vertelt het tragikomische verhaal (dat meer dan vijf decennia beslaat) van zijn leven als ‘seksuele verdachte’, een term die John Irving voor het eerst gebruikte in zijn onsterfelijke roman De wereld volgens Garp. Dit is John Irvings meest politieke roman sinds De regels van het ciderhuis en Bidden wij voor Owen Meany en een treffend eerbetoon aan Billy’s vrienden en minnaars – een bonte verzameling personages die de lezer niet licht zal vergeten. Het is een onvergetelijk portret van de eenzame, biseksuele man die zich voorgenomen heeft om 'echt belangrijk' te zijn.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/7/8/7/9200000000037870.jpg",
    price: {
      "currency": "EUR",
      "value": 19.9,
      "displayValue": "19.90"
    },
    review: {
      current: 1,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'bestseller',
    ISBN: 9780751548556,
    title: "The lucky one",
    author: "Nicholas Sparks",
    summary: "Do you believe in lucky charms? While in Iraq, U.S. Marine Logan Thibault finds a photo, half-buried in the dirt, of a woman. He carries it in his pocket, and from then on his luck begins to change. Back home, Logan is haunted by thoughts of war. Over time, he becomes convinced that the woman in the photo holds the key to his destiny. So he finds the vulnerable and loving Beth and a passionate romance begins. But Logan battles with the one secret he has kept from Beth: how he found her in the first place. And it is a secret that could utterly destroy everything they love ...",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/3/7/1001004011797307.jpg",
    price: {
      "currency": "EUR",
      "value": 9.8,
      "displayValue": "9.80"
    },
    review: {
      current: 1,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'bestseller',
    ISBN: 9780751542974,
    title: "Best of me",
    author: "Nicholas Sparks",
    summary: "The new epic love story by the bestselling author of The Last Song and The Notebook. They were teenage sweethearts from opposite sides of the tracks - with a passion that would change their lives for ever. But life would force them apart. Years later, the lines they had drawn between past and present are about to slip.. Called back to their hometown for the funeral of the mentor who once gave them shelter when they needed it most, they are faced with each other once again and forced to confront the paths they chose. Can true love ever rewrite the past?",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/4/6/2/8/9200000001208264.jpg",
    price: {
      "currency": "EUR",
      "value": 13.8,
      "displayValue": "13.80"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: 'bestseller',
    ISBN: 9789000316090,
    title: "Hotel aan zee",
    author: "Maeve Binchy",
    summary: "In de zomer is het gezellig druk in het badplaatsje Stoneybridge. Overal slenteren vakantiegangers rond en de stranden zijn bezaaid met emmers, schepjes en zandkastelen. Maar in de winter begeeft bijna niemand zich naar de prachtige stranden en de woeste kliffen die samen de ruige westkust van Ierland vormen. De enkeling die toch naar de kust gaat, kan niet om hotel Stone House heen. Daar kan iedere gast rekenen op een warm welkom van eigenaresse Chicky Starr, ongeacht de reden van zijn komst. Zo dragen Henry en Nicola een afschuwelijk geheim met zich mee, ziet de vrolijke verpleegkundige Winnie haar vakantie in het water vallen en komt John op de bonnefooi aanwaaien nadat hij zijn vlucht heeft gemist. De excentrieke Freda is paragnost - en parttime kapper. En dan is er nog Nora, een zwijgzame oudere dame die overal zo het hare van lijkt te denken. Hotel aan zee is een hartverwarmende roman met alle ingrediënten van een echte Maeve Binchy: warmte, humor en heerlijke personages met wie je graag je tijd doorbrengt!",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/2/1/0/9200000009850127.jpg",
    price: {
      "currency": "EUR",
      "value": 14.99,
      "displayValue": "14.99"
    },
    review: {
      current: 2,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "art",
    ISBN: 9789024561858,
    title: "Daily Painting",
    author: "Carol Marine",
    summary: "A unique system for jump-starting artistic creativity, encouraging experimentation and growth, and increasing sales for artists of all levels, from novices to professionals. Have you landed in a frustrating rut? Are you having trouble selling paintings in galleries, getting bogged down by projects you can’t seem to finish or abandon, or finding excuses to avoid working in the studio? Author Carol Marine knows exactly how you feel—she herself suffered from painter’s block, until she discovered “daily painting.” The idea is simple: do art (usually small) often (how often is up to you), and if you’d like, post and sell it online. Soon you’ll find that your block dissolves and you’re painting work you love—and more of it than you ever thought possible!",
    image: "https://image.ebooks.com/cover/1687883.jpg",
    price: {
      "currency": "EUR",
      "value": 17.49,
      "displayValue": "17.49"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "art",
    ISBN: 9789046113110,
    title: "Picture This",
    author: "Molly Bang (ill.)",
    summary: "Molly Bang's brilliant, insightful, and accessible treatise is now revised and expanded for its 25th anniversary. Bang's powerful ideas—about how the visual composition of images works to engage the emotions, and how the elements of an artwork can give it the power to tell a story—remain unparalleled in their simplicity and genius. Why are diagonals dramatic? Why are curves calming? Why does red feel hot and blue feel cold? First published in 1991, Picture This has changed the way artists, illustrators, reviewers, critics, and readers look at and understand art.",
    image: "https://image.ebooks.com/cover/2584856.jpg",
    price: {
      "currency": "EUR",
      "value": 5,
      "displayValue": "5.00"
    },
    review: {
      current: 2,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "art",
    ISBN: 9781447229902,
    title: "The Hit",
    author: "David Baldacci",
    summary: "The trap is set. Failure is not an option. When government hit man Will Robie is given his next target he knows he’s about to embark on his toughest mission yet. He is tasked with killing one of their own, following evidence to suggest that fellow assassin Jessica Reel has been turned. She’s leaving a trail of death in her wake including her handler. The trap is set. To send a killer to catch a killer. But what happens when you can’t trust those who have access to the nation’s most secret intelligence?",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/5/2/3/9200000009123256.jpg",
    price: {
      "currency": "EUR",
      "value": 21.99,
      "displayValue": "21.99"
    },
    review: {
      current: 5,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "art",
    ISBN: 9781447229902,
    title: "Extreme Ownership",
    author: "Jocko Willink, Leif Babin",
    summary: "An updated edition of the blockbuster bestselling leadership book that took America and the world by storm, two U.S. Navy SEAL officers who led the most highly decorated special operations unit of the Iraq War demonstrate how to apply powerful leadership principles from the battlefield to business and life.",
    image: "https://image.ebooks.com/cover/95793265.jpg",
    price: {
      "currency": "EUR",
      "value": 21.99,
      "displayValue": "21.99"
    },
    review: {
      current: 5,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "horror",
    ISBN: 9789044339482,
    title: "Red Notice",
    author: "Bill Browder",
    summary: "'An unburdening, a witness statement and a thriller all at the same time ... electrifying.'The Times I have to assume that there is a very real chance that Putin or members of his regime will have me killed some day. If I'm killed, you will know who did it. When my enemies read this book, they will know that you know.",
    image: "https://image.ebooks.com/cover/1811896.jpg",
    price: {
      "currency": "EUR",
      "value": 18.5,
      "displayValue": "18.50"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "horror",
    ISBN: 9780552778459,
    title: "Horowitz Horror",
    author: "Anthony Horowitz",
    summary: "Seventeen brilliantly chilling tales from the master of storytelling. Welcome to a strange and twisted world where the spooky, the shocking, and the positively petrifying are lurking just out of sight. A bus ride home ... turns into your worst nightmare. A quaint country cottage ... has a grisly secret. A hot bath ... swirls with blood. Horowitz Horror. It's all around you. Alive. Waiting. Enter if you dare. Horror fans will love these twisted tales from the bestselling author of the Alex Rider books.'",
    image: "https://image.ebooks.com/cover/1153961.jpg",
    price: {
      "currency": "EUR",
      "value": 25,
      "displayValue": "25.00"
    },
    review: {
      current: 4,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "horror",
    ISBN: 9789400501157,
    title: "De aanslag",
    author: "David Baldacci",
    summary: "Will Robie is een van de besten in zijn vak, een huurmoordenaar die nooit twijfelt en altijd zijn doelwit uitschakelt. Hij is de man op wie de Amerikaanse overheid een beroep doet als het gaat om het doden van haar grootste vijanden, van de monsters die talloze onschuldige slachtoffers op hun naam hebben staan. En niemand is zo goed als Robie. Niemand, behalve Jessica Reel... Reel is net als Robie zeer ervaren, uiterst professioneel en dodelijk precies. Maar Reel heeft zich tegen haar werkgever gekeerd en het vizier gericht op haar voormalige collega’s binnen hun agentschap. Nu een van hun eigen mensen moet worden afgestopt, doet men opnieuw een beroep op Robie. Zijn opdracht: zorg dat je Reel te pakken krijgt, levend of dood. Maar wanneer Robie de jacht opent op Reel, ontdekt hij al snel dat zij weleens gegronde redenen kan hebben voor haar verraad. De aanslagen op het agentschap houden verband met een veel groter gevaar. Een gevaar dat Washington D.C., de Verenigde Staten en de rest van de wereld op de grondvesten zal doen schudden...",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/4/8/2/7/9200000010047284.jpg",
    price: {
      "currency": "EUR",
      "value": 19.99,
      "displayValue": "19.99"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "fantasy",
    ISBN: 9789044339338,
    title: "Mag ik je nummer even?",
    author: "Sophie Kinsella",
    summary: "Poppy Wyatt is haar verlovingsring kwijt! Een antiek geval, al drie generaties in het bezit van de familie van Magnus, haar aanstaande. Over tien dagen is de bruiloft! En terwijl ze buiten met haar vriendinnen staat te bellen, wordt haar mobieltje plotseling uit haar handen gegrist. Ook dat nog! Nu is de crisis compleet. Wat moet ze zonder telefoon beginnen? Helemaal hyper denkt Poppy dat ze aan het hallucineren is geslagen wanneer ze in een afvalbak zomaar een smartphone ziet liggen. Hebbes! Maar het duurt niet lang voor de eigenaar, de botte zakenman Sam Roxton, zich meldt. En Sam is 'not amused' als Poppy ijskoud weigert haar schat aan hem af te staan.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/0/9/4/9200000009984903.jpg",
    price: {
      "currency": "EUR",
      "value": 10,
      "displayValue": "10.00"
    },
    review: {
      current: 4,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "horror",
    ISBN: 9789022556627,
    title: "Jarka Ruus",
    author: "Terry Brooks",
    summary: "Twintig jaar zijn voorbij gegaan sinds Grianne Ohmsford afstand deed van haar leven als de gevreesde Ilse Hek, ze bevrijd werd door de magie van het Zwaard van Shannara en de vernietiging van haar mentor, de Morgawr. Als Grianne plotseling verdwijnt, wordt haar jonge dienaar Tagwen gedwongen de handschoen op te nemen en haar uit de handen van haar vijanden te redden, samen met Griannes jonge neef Pen Ohmsford en de machtige elf Ahren Elessedil.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/8/9/9/1001004011269987.jpg",
    price: {
      "currency": "EUR",
      "value": 18.95,
      "displayValue": "18.95"
    },
    review: {
      current: 3,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "fantasy",
    ISBN: 9789460680755,
    title: "Last Minute",
    author: "Linda van Rijn",
    summary: "Op de lastminute-vakantie in Hurghada loopt Susan haar ex-vriend tegen het lijf. Liever had ze hem nooit meer gezien... Vijf jaar zijn Susan Waterberg en haar man Hugo getrouwd en gelukkig in Almere. Die mijlpaal wil Susan niet onopgemerkt voorbij laten gaan. Ze regelt haar schoonouders als oppas voor hun zoontje Stijn van drie en boekt een lastminutevakantie naar Hurghada. Voor Hugo is de trip een grote verrassing, zeker omdat hij zijn PADI (duikbrevet) pas een jaar heeft. Nu kan hij eindelijk echt gaan duiken. Hoewel het afscheid van Stijntje hun beiden zwaar valt, verheugen ze zich op een onbezorgde zonvakantie. Als ze op de duikschool inchecken krijgt Susan de schrik van haar leven. De duikinstructeur is een oude bekende en confronteert haar met een verleden dat ze altijd voor Hugo heeft verzwegen. De zorgeloze strandvakantie die Susan voor ogen had, verandert in een web van leugens en chantage. Om haar gezin te behouden, zal ze definitief moeten afrekenen met haar verleden.",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/5/6/7/1001004011817652.jpg",
    price: {
      "currency": "EUR",
      "value": 4.99,
      "displayValue": "4.99"
    },
    review: {
      current: 2,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "fantasy",
    ISBN: 9789023464143,
    title: "Duizend schitterende zonnen",
    author: "Khaled Hosseini",
    summary: "De ongeschoolde Mariam is vijftien wanneer ze wordt uitgehuwelijkt aan de dertig jaar oudere schoenverkoper Rasheed in Kabul. Jaren later moet zij de beeldschone en slimme Laila naast zich dulden, die door Rasheed na een raketaanval uit het puin is gered. Rasheed neemt Laila in huis in de hoop dat zij hem de zoon zal schenken die Mariam hem niet kan geven. In eerste instantie overheersen tussen de twee vrouwen gevoelens van achterdocht en jaloezie, maar door de tirannieke houding van Rasheed ontstaat er langzamerhand een innige vriendschap. Samen zetten Mariam en Laila alles op alles om te overleven in de eindeloze oorlog van Afghanistan, die voor hen ook binnenshuis woedt. Na het overweldigende succes van De vliegeraar verrast Khaled Hosseini zijn lezers opnieuw met een verpletterend verhaal",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/3/5/1/1001004010981537.jpg",
    price: {
      "currency": "EUR",
      "value": 16.99,
      "displayValue": "16.99"
    },
    review: {
      current: 1,
      min: 1,
      max: 5,
    }
  },
  {
    id: uuid(),
    category: "fantasy",
    ISBN: 9781408842423,
    title: "And the Mountains Echoed",
    author: "Khaled Hosseini",
    summary: "And the Mountains Echoed is a deeply moving story about how we love, how we take care of one another and how the choices we make resonate through generations. With profound wisdom, depth, insight and compassion 'and moving from Kabul, to Paris, to San Francisco, to the Greek island of Tinos' Hosseini writes about the bonds that define us and shape our lives, the ways that we help our loved ones in need and how we are often surprised by the people closest to us. Six years in the writing, Khaled Hosseini says of his new book: 'My earlier novels were, at heart, tales of fatherhood and motherhood. My new novel is a multi-generational family story as well, this time revolving around brothers and sisters, and the ways in which they love, wound, betray, honour and sacrifice for each other.'",
    image: "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/6/0/3/9200000010223060.jpg",
    price: {
      "currency": "EUR",
      "value": 8.99,
      "displayValue": "8.99"
    },
    review: {
      current: 1,
      min: 1,
      max: 5,
    }
  }
]