// Use dynamic import instead of require for node-fetch
import('node-fetch').then(async fetch => {
    async function sendRequests(url, list) {
        const errors = [];
        for (const obj of list) {
            try {
                const response = await fetch.default(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj),
                });

                if (!response.ok) {
                    errors.push(obj);
                } else {
                    console.log('Success...');
                }
            } catch (error) {
                console.error('Error sending request:', error);
                errors.push(obj);
            }
        }

        if (errors.length > 0) {
            console.log('Objects that couldn\'t be uploaded:', errors);
        } else {
            console.log('All objects uploaded successfully.');
        }
    }

    // Example usage:
    const url = 'http://localhost:3000/api/verses';
    const objects = [
      {
          "location": "Romans 8:28",
          "verse": "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.",
          "section": "new",
          "book": "romans",
          "topic": ["faith", "anxiety", "peace"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Psalm 23:6",
          "verse": "Surely your goodness and unfailing love will pursue me all the days of my life, and I will live in the house of the LORD forever.",
          "section": "old",
          "book": "psalms",
          "topic": ["faith", "anxiety", "love", "peace", "hope"],
          "context": "song",
          "character": "",
          "author": "david"
        },
        {
          "location": "Psalm 23:5",
          "verse": "You prepare a feast for me in the presence of my enemies. You honor me by anointing my head with oil. My cup overflows with blessings.",
          "section": "old",
          "book": "psalms",
          "topic": ["anxiety", "peace", "hope"],
          "context": "song",
          "character": "",
          "author": "david"
        },
        {
          "location": "Matthew 6:33",
          "verse": "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need.",
          "section": "new",
          "book": "matthew",
          "topic": ["calling", "faith"],
          "context": "teaching",
          "character": "",
          "author": "matthew"
        },
        {
          "location": "Psalm 23:3",
          "verse": "He renews my strength. He guides me along right paths, bringing honor to his name.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "faith"],
          "context": "song",
          "character": "",
          "author": "david"
        },
        {
          "location": "Psalm 23:1",
          "verse": "The LORD is my shepherd; I have all that I need.",
          "section": "old",
          "book": "psalms",
          "topic": ["anxiety", "faith", "hope", "strength"],
          "context": "song",
          "character": "",
          "author": "david"
        },
        {
          "location": "Psalm 23:2",
          "verse": "He lets me rest in green meadows; he leads me beside peaceful streams.",
          "section": "old",
          "book": "psalms",
          "topic": ["peace"],
          "context": "song",
          "character": "",
          "author": "david"
        },
        {
          "location": "Philippians 4:7",
          "verse": "Then you will experience God’s peace, which exceeds anything we can understand. His peace will guard your hearts and minds as you live in Christ Jesus.",
          "section": "new",
          "book": "philippians",
          "topic": ["peace"],
          "context": "promise",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Ephesians 6:12",
          "verse": "For we are not fighting against flesh-and-blood enemies, but against evil rulers and authorities of the unseen world, against mighty powers in this dark world, and against evil spirits in the heavenly places.",
          "section": "new",
          "book": "ephesians",
          "topic": ["calling", "sin"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Philippians 4:13",
          "verse": "For I can do everything through Christ, who gives me strength.",
          "section": "new",
          "book": "philippians",
          "topic": ["strength", "faith"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Joshua 1:9",
          "verse": "This is my command—be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go.",
          "section": "old",
          "book": "joshua",
          "topic": ["courage"],
          "context": "commandment",
          "character": "",
          "author": "joshua"
        },
        {
          "location": "John 16:33",
          "verse": "I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world.",
          "section": "new",
          "book": "john",
          "topic": ["peace", "strength"],
          "context": "teaching",
          "character": "jesus",
          "author": "john"
        },
        {
          "location": "John 14:6",
          "verse": "Jesus told him, 'I am the way, the truth, and the life. No one can come to the Father except through me.'",
          "section": "new",
          "book": "john",
          "topic": ["salvation"],
          "context": "teaching",
          "character": "jesus",
          "author": "john"
        },
        {
          "location": "Isaiah 40:31",
          "verse": "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint.",
          "section": "old",
          "book": "isaiah",
          "topic": ["strength", "hope"],
          "context": "prophecy",
          "character": "",
          "author": "isaiah"
        },
        {
          "location": "2 Corinthians 5:17",
          "verse": "This means that anyone who belongs to Christ has become a new person. The old life is gone; a new life has begun!",
          "section": "new",
          "book": "corinthians",
          "topic": ["salvation"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Proverbs 3:5-6",
          "verse": "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.",
          "section": "old",
          "book": "proverbs",
          "topic": ["faith", "relationships"],
          "context": "teaching",
          "character": "",
          "author": "solomon"
        },
        {
          "location": "1 Peter 5:7",
          "verse": "Give all your worries and cares to God, for he cares about you.",
          "section": "new",
          "book": "peter",
          "topic": ["anxiety"],
          "context": "teaching",
          "character": "",
          "author": "peter"
        },
        {
          "location": "John 10:10",
          "verse": "The thief’s purpose is to steal and kill and destroy. My purpose is to give them a rich and satisfying life.",
          "section": "new",
          "book": "john",
          "topic": ["calling", "holiness"],
          "context": "teaching",
          "character": "jesus",
          "author": "john"
        },
        {
          "location": "Psalm 91:11",
          "verse": "For he will order his angels to protect you wherever you go.",
          "section": "old",
          "book": "psalms",
          "topic": ["courage", "faith"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Matthew 28:20",
          "verse": "Teach these new disciples to obey all the commands I have given you. And be sure of this: I am with you always, even to the end of the age.",
          "section": "new",
          "book": "matthew",
          "topic": ["calling", "faith"],
          "context": "teaching",
          "character": "jesus",
          "author": "matthew"
        },
        {
          "location": "Matthew 28:19",
          "verse": "Therefore, go and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit.",
          "section": "new",
          "book": "matthew",
          "topic": ["calling", "relationship"],
          "context": "teaching",
          "character": "jesus",
          "author": "matthew"
        },
        {
          "location": "Matthew 11:29",
          "verse": "Take my yoke upon you. Let me teach you, because I am humble and gentle at heart, and you will find rest for your souls.",
          "section": "new",
          "book": "matthew",
          "topic": ["strength", "courage"],
          "context": "teaching",
          "character": "jesus",
          "author": "matthew"
        },
        {
          "location": "2 Timothy 1:7",
          "verse": "For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline.",
          "section": "new",
          "book": "timothy",
          "topic": ["fear", "strength", "love"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Psalm 91:1",
          "verse": "Those who live in the shelter of the Most High will find rest in the shadow of the Almighty.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "courage"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Ephesians 2:10",
          "verse": "For we are God’s masterpiece. He has created us anew in Christ Jesus, so we can do the good things he planned for us long ago.",
          "section": "new",
          "book": "ephesians",
          "topic": ["calling"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Psalm 91:4",
          "verse": "He will cover you with his feathers. He will shelter you with his wings. His faithful promises are your armor and protection.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "courage", "faith"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Psalm 91:2",
          "verse": "This I declare about the Lord: He alone is my refuge, my place of safety; he is my God, and I trust him.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "faith", "courage"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "John 14:27",
          "verse": "I am leaving you with a gift—peace of mind and heart. And the peace I give is a gift the world cannot give. So don’t be troubled or afraid.",
          "section": "new",
          "book": "john",
          "topic": ["peace", "anxiety"],
          "context": "teaching",
          "character": "jesus",
          "author": "john"
        },
        {
          "location": "Hebrews 4:12",
          "verse": "For the word of God is alive and powerful. It is sharper than the sharpest two-edged sword, cutting between soul and spirit, between joint and marrow. It exposes our innermost thoughts and desires.",
          "section": "new",
          "book": "hebrews",
          "topic": ["holiness"],
          "context": "teaching",
          "character": "",
          "author": ""
        },
        {
          "location": "Psalm 91:12",
          "verse": "They will hold you up with their hands so you won’t even hurt your foot on a stone.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "courage", "anxiety"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Psalm 91:7",
          "verse": "Though a thousand fall at your side, though ten thousand are dying around you, these evils will not touch you.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "courage", "anxiety"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Psalm 91:15",
          "verse": "When they call on me, I will answer; I will be with them in trouble. I will rescue and honor them.",
          "section": "old",
          "book": "psalms",
          "topic": ["calling", "relationship"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "2 Timothy 3:16",
          "verse": "All Scripture is inspired by God and is useful to teach us what is true and to make us realize what is wrong in our lives. It corrects us when we are wrong and teaches us to do what is right.",
          "section": "new",
          "book": "timothy",
          "topic": ["holiness"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Psalm 91:8",
          "verse": "Just open your eyes, and see how the wicked are punished.",
          "section": "old",
          "book": "psalms",
          "topic": ["justice"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "1 John 1:9",
          "verse": "But if we confess our sins to him, he is faithful and just to forgive us our sins and to cleanse us from all wickedness.",
          "section": "new",
          "book": "john",
          "topic": ["forgiveness", "salvation"],
          "context": "teaching",
          "character": "",
          "author": "john"
        },
        {
          "location": "Psalm 91:5",
          "verse": "Do not be afraid of the terrors of the night, nor the arrow that flies in the day.",
          "section": "old",
          "book": "psalms",
          "topic": ["fear"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Psalm 91:3",
          "verse": "For he will rescue you from every trap and protect you from deadly disease.",
          "section": "old",
          "book": "psalms",
          "topic": ["strength", "courage"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "Psalm 91:6",
          "verse": "Do not dread the disease that stalks in darkness, nor the disaster that strikes at midday.",
          "section": "old",
          "book": "psalms",
          "topic": ["fear"],
          "context": "song",
          "character": "",
          "author": "moses"
        },
        {
          "location": "2 Chronicles 7:14",
          "verse": "Then if my people who are called by my name will humble themselves and pray and seek my face and turn from their wicked ways, I will hear from heaven and will forgive their sins and restore their land.",
          "section": "old",
          "book": "chronicles",
          "topic": ["salvation", "forgiveness"],
          "context": "teaching",
          "character": "",
          "author": ""
        },
        {
          "location": "Proverbs 22:6",
          "verse": "Direct your children onto the right path, and when they are older, they will not leave it.",
          "section": "old",
          "book": "proverbs",
          "topic": ["relationships"],
          "context": "teaching",
          "character": "",
          "author": "solomon"
        },
        {
          "location": "Hebrews 12:2",
          "verse": "We do this by keeping our eyes on Jesus, the champion who initiates and perfects our faith. Because of the joy awaiting him, he endured the cross, disregarding its shame. Now he is seated in the place of honor beside God’s throne.",
          "section": "new",
          "book": "hebrews",
          "topic": ["faith"],
          "context": "teaching",
          "character": "",
          "author": ""
        },
        {
          "location": "Ephesians 3:20",
          "verse": "Now all glory to God, who is able, through his mighty power at work within us, to accomplish infinitely more than we might ask or think.",
          "section": "new",
          "book": "ephesians",
          "topic": ["calling", "strength"],
          "context": "prayer",
          "character": "",
          "author": "paul"
        },
        {
          "location": "2 Corinthians 10:5",
          "verse": "We destroy every proud obstacle that keeps people from knowing God. We capture their rebellious thoughts and teach them to obey Christ.",
          "section": "new",
          "book": "corinthians",
          "topic": ["calling", "obedience"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Isaiah 9:6",
          "verse": "For a child is born to us, a son is given to us. The government will rest on his shoulders. And he will be called: Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
          "section": "old",
          "book": "isaiah",
          "topic": ["salvation"],
          "context": "prophecy",
          "character": "jesus",
          "author": "isaiah"
        },
        {
          "location": "1 Peter 2:9",
          "verse": "But you are not like that, for you are a chosen people. You are royal priests, a holy nation, God’s very own possession. As a result, you can show others the goodness of God, for he called you out of the darkness into his wonderful light.",
          "section": "new",
          "book": "peter",
          "topic": ["calling"],
          "context": "teaching",
          "character": "",
          "author": "peter"
        },
        {
          "location": "1 Thessalonians 5:18",
          "verse": "Be thankful in all circumstances, for this is God’s will for you who belong to Christ Jesus.",
          "section": "new",
          "book": "thessalonians",
          "topic": ["joy", "peace"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Colossians 3:23",
          "verse": "Work willingly at whatever you do, as though you were working for the Lord rather than for people.",
          "section": "new",
          "book": "colossians",
          "topic": ["calling"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Romans 12:1",
          "verse": "And so, dear brothers and sisters, I plead with you to give your bodies to God because of all he has done for you. Let them be a living and holy sacrifice—the kind he will find acceptable. This is truly the way to worship him.",
          "section": "new",
          "book": "romans",
          "topic": ["calling"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Psalm 46:10",
          "verse": "Be still, and know that I am God! I will be honored by every nation. I will be honored throughout the world.",
          "section": "old",
          "book": "psalms",
          "topic": ["faith"],
          "context": "song",
          "character": "",
          "author": ""
        },
        {
          "location": "Hebrews 10:25",
          "verse": "And let us not neglect our meeting together, as some people do, but encourage one another, especially now that the day of his return is drawing near.",
          "section": "new",
          "book": "hebrews",
          "topic": ["relationship", "unity"],
          "context": "teaching",
          "character": "",
          "author": ""
        },
        {
          "location": "Matthew 5:16",
          "verse": "In the same way, let your good deeds shine out for all to see, so that everyone will praise your heavenly Father.",
          "section": "new",
          "book": "matthew",
          "topic": ["calling"],
          "context": "teaching",
          "character": "jesus",
          "author": "matthew"
        },
        {
          "location": "Isaiah 26:3",
          "verse": "You will keep in perfect peace all who trust in you, all whose thoughts are fixed on you!",
          "section": "old",
          "book": "isaiah",
          "topic": ["peace", "faith"],
          "context": "prophecy",
          "character": "",
          "author": "isaiah"
        },
        {
          "location": "Philippians 4:19",
          "verse": "And this same God who takes care of me will supply all your needs from his glorious riches, which have been given to us in Christ Jesus.",
          "section": "new",
          "book": "philippians",
          "topic": ["strength", "courage"],
          "context": "promise",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Isaiah 53:5",
          "verse": "But he was pierced for our rebellion, crushed for our sins. He was beaten so we could be whole. He was whipped so we could be healed.",
          "section": "old",
          "book": "isaiah",
          "topic": ["salvation", "healing"],
          "context": "prophecy",
          "character": "",
          "author": "isaiah"
        },
        {
          "location": "Galatians 2:20",
          "verse": "My old self has been crucified with Christ. It is no longer I who live, but Christ lives in me. So I live in this earthly body by trusting in the Son of God, who loved me and gave himself for me.",
          "section": "new",
          "book": "galatians",
          "topic": ["hope", "salvation"],
          "context": "",
          "character": "",
          "author": "paul"
        },
        {
          "location": "1 Corinthians 13:6",
          "verse": "It does not rejoice about injustice but rejoices whenever the truth wins out.",
          "section": "new",
          "book": "corinthians",
          "topic": ["love", "truth"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Galatians 6:9",
          "verse": "So let’s not get tired of doing what is good. At just the right time we will reap a harvest of blessing if we don’t give up.",
          "section": "new",
          "book": "galatians",
          "topic": ["strength", "calling", "joy"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "James 5:16",
          "verse": "Confess your sins to each other and pray for each other so that you may be healed. The earnest prayer of a righteous person has great power and produces wonderful results.",
          "section": "new",
          "book": "james",
          "topic": ["salvation", "healing"],
          "context": "commandment",
          "character": "",
          "author": "james"
        },
        {
          "location": "Acts 1:8",
          "verse": "But you will receive power when the Holy Spirit comes upon you. And you will be my witnesses, telling people about me everywhere—in Jerusalem, throughout Judea, in Samaria, and to the ends of the earth.",
          "section": "new",
          "book": "acts",
          "topic": ["holiness"],
          "context": "promise",
          "character": "jesus",
          "author": "luke"
        },
        {
          "location": "Ephesians 6:18",
          "verse": "Pray in the Spirit at all times and on every occasion. Stay alert and be persistent in your prayers for all believers everywhere.",
          "section": "new",
          "book": "ephesians",
          "topic": ["holiness", "calling"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Philippians 1:6",
          "verse": "And I am certain that God, who began the good work within you, will continue his work until it is finally finished on the day when Christ Jesus returns.",
          "section": "new",
          "book": "philippians",
          "topic": ["anxiety", "calling"],
          "context": "promise",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Proverbs 4:23",
          "verse": "Guard your heart above all else, for it determines the course of your life.",
          "section": "old",
          "book": "proverbs",
          "topic": ["wisdom"],
          "context": "teaching",
          "character": "",
          "author": "solomon"
        },
        {
          "location": "Psalm 1:1",
          "verse": "Oh, the joys of those who do not follow the advice of the wicked, or stand around with sinners, or join in with mockers.",
          "section": "old",
          "book": "psalms",
          "topic": ["joy", "holiness", "wisdom"],
          "context": "song",
          "character": "",
          "author": ""
        },
        {
          "location": "Isaiah 54:17",
          "verse": "But in that coming day no weapon turned against you will succeed. You will silence every voice raised up to accuse you. These benefits are enjoyed by the servants of the Lord; their vindication will come from me. I, the Lord, have spoken!",
          "section": "old",
          "book": "isaiah",
          "topic": ["anxiety", "faith", "calling"],
          "context": "prophecy",
          "character": "",
          "author": "isaiah"
        },
        {
          "location": "Romans 6:23",
          "verse": "For the wages of sin is death, but the free gift of God is eternal life through Christ Jesus our Lord.",
          "section": "new",
          "book": "romans",
          "topic": ["sin"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Ephesians 4:32",
          "verse": "Instead, be kind to each other, tenderhearted, forgiving one another, just as God through Christ has forgiven you.",
          "section": "new",
          "book": "ephesians",
          "topic": ["compassion", "forgiveness"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        },
        {
          "location": "Hebrews 4:16",
          "verse": "So let us come boldly to the throne of our gracious God. There we will receive his mercy, and we will find grace to help us when we need it most.",
          "section": "new",
          "book": "hebrews",
          "topic": ["grace", "faith", "calling"],
          "context": "teaching",
          "character": ""
        },
        {
          "location": "Romans 8:39",
          "verse": "No power in the sky above or in the earth below—indeed, nothing in all creation will ever be able to separate us from the love of God that is revealed in Christ Jesus our Lord.",
          "section": "new",
          "book": "romans",
          "topic": ["love", "faith", "relationships"],
          "context": "teaching",
          "character": "",
          "author": "paul"
        }
  ]

    sendRequests(url, objects)
        .catch(error => console.error('Error sending requests:', error));
}).catch(error => console.error('Error importing node-fetch:', error));
