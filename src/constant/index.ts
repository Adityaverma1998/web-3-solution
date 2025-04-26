import { ITestimonials } from "@/interface/testimonial.interface";

export interface Project {
    imageUrl: string;
    projectType: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    features: string[];
    readUrl: string;
}


export const expertise = [{
    category: 'Blockchain Development',
    items: [{title: 'Private Blockchain Development', subtitle: 'A blockchain network'}, {
        title: 'NFT Marketplace Development', subtitle: 'Transact easy finances'
    }, {title: 'dApps (Decentralized) Development', subtitle: 'No central authority'}, {
        title: 'Smart Contract Development', subtitle: 'A blockchain network'
    }, {title: 'Token & Wallet Development', subtitle: 'Transact easy finances'}, {
        title: 'Crypto Exchange Development', subtitle: 'A blockchain network'
    }, {title: 'DeFi Application Development', subtitle: 'A blockchain network'}, {
        title: 'DAO Development', subtitle: 'A blockchain network'
    }]
},];


export const ourTeamMembers = [{name: 'John Doe', designation: 'Blockchain Developer'}, {
    name: 'Jane Smith', designation: 'Front End Developer'
}, {name: 'Michael Johnson', designation: 'Back End Developer'}, {
    name: 'Emily Davis', designation: 'Full Stack Developer'
},];


export const boardDirectors = [
    {
        name: 'Janmajay Agarwal',
        role: 'CEO',
        about: 'Janmajay Agarwal, CEO, is a seasoned expert in IT domains, specializing in blockchain technology. With a robust background in strategic IT management, he leads innovation initiatives that drive growth and efficiency. His leadership focuses on leveraging blockchain for transformative solutions in various industries, ensuring cutting-edge technological implementations.',
        image: '/images/team/janmejay.png',
        social: {
            twitter: 'https://twitter.com/johnanderson',
            instagram: 'https://instagram.com/johnanderson',
            linkedin: 'https://www.linkedin.com/in/janruls1/',
        },

    },
    {
        name: 'Nirnay Kulshreshtha',
        role: 'Director',
        about: 'Nirnay Kulsreshta is a visionary blockchain director adept in strategic planning, team management, and product development. With deep expertise in blockchain technology and decentralized systems, he fosters innovation to create secure solutions for the digital economy, emphasizing transparency, scalability, and regulatory compliance.',
        image: '/images/team/nirnay.png',
        social: {
            twitter: 'https://twitter.com/johnanderson',
            instagram: 'https://instagram.com/johnanderson',
            linkedin: 'https://www.linkedin.com/in/nirnaykulshreshtha/',
        },

    },
]
export const teamMembers = [
    {
        name: 'Janmejay Agrawal',
        role: 'CEO',
        about: 'Janmejay Agrawal, CEO, specializes in blockchain technology. He drives innovation and efficiency, leveraging blockchain for transformative solutions across industries.',
        image: '/images/team/janmejay.png',
        social: {
            twitter: 'https://twitter.com/johnanderson',
            instagram: 'https://instagram.com/johnanderson',
            linkedin: 'https://www.linkedin.com/in/janruls1/',
        },

    },
    // {
    //     name: 'Nirnay Kulshreshtha',
    //     role: 'Director',
    //     about: 'Nirnay Kulshreshtha, a visionary blockchain director, excels in strategic planning and product development. His expertise drives secure, scalable, and compliant solutions for the digital economy.',
    //     image: '/images/team/nirnay.png',
    //     social: {
    //         twitter: 'https://twitter.com/johnanderson',
    //         instagram: 'https://instagram.com/johnanderson',
    //         linkedin: 'https://www.linkedin.com/in/nirnaykulshreshtha/',
    //     },
    //
    // },
    {
        name: 'Babul Kumar',
        role: 'Master of Projects',
        about: 'Specialist in driving project success with precision, creativity, and leadership, ensuring seamless execution, exceptional results, and fostering innovation and growth.',
        image: '/images/team/babul.png',
        social: {
            twitter: 'https://twitter.com/johnanderson',
            instagram: 'https://instagram.com/johnanderson',
            linkedin: 'https://www.linkedin.com/in/babul-kumar-71178836/',
        },
    }, {
        name: 'Omar Khan',
        role: 'Opportunity Navigator',
        about: 'Expertly guiding potential clients and driving pre-sales success with strategic planning, deep market understanding, innovative solutions, and exceptional customer engagement.',
        image: '/images/team/omar.png',
        social: {
            twitter: 'https://twitter.com/tanayanegandhi',
            instagram: 'https://instagram.com/tanayanegandhi',
            linkedin: 'https://www.linkedin.com/in/omarkhanglobal/',
        },
    }, {
        name: 'Pallab Jana',
        role: 'Growth Strategist',
        about: 'Driving business expansion with strategic insights, proven leadership and a record of successful market penetration.',
        image: '/images/team/pallab.png',
        social: {
            twitter: 'https://twitter.com/tanayanegandhi',
            instagram: 'https://instagram.com/tanayanegandhi',
            linkedin: 'https://www.linkedin.com/in/pallab-jana-a3161818/',
        },
    }, {
        name: 'Vinita Sejwal',
        role: 'Maestro of Milestones',
        about: 'Orchestrating seamless project executions with precision, expertise and a track record of successful deliveries.',
        image: '/images/team/vinita.png',
        social: {
            twitter: 'https://twitter.com/tanayanegandhi',
            instagram: 'https://instagram.com/tanayanegandhi',
            linkedin: 'https://www.linkedin.com/in/vinita-sejwal-b91172143/',
        },
    }, {
        name: 'Badal Gupta',
        role: 'Backend Architect',
        about: 'Architecting robust and scalable server-side solutions with meticulous attention to performance and security for seamless application functionality.',
        image: '/images/team/badal.png',
        social: {
            twitter: 'https://twitter.com/tanayanegandhi',
            instagram: 'https://instagram.com/tanayanegandhi',
            linkedin: 'https://www.linkedin.com/in/badalalive/',
        },
    }, {
        name: 'Rakesh Kumar',
        role: 'Design Virtuoso',
        about: 'Crafting intuitive and visually stunning user experiences with expert precision, creative flair, and a deep understanding of user needs.',
        image: '/images/team/rakesh.png',
        social: {
            twitter: 'https://twitter.com/robertsurgee',
            instagram: 'https://instagram.com/robertsurgee',
            linkedin: 'https://www.linkedin.com/in/rakesh-kumar-4b10a7243/',
        },
    }, {
        name: 'Ramdas Prajapati',
        role: 'Code Artisan',
        about: 'Crafting seamless and responsive web and mobile applications with expertise and precision for optimal user experiences.',
        image: '/images/team/ram.png',
        social: {
            twitter: 'https://twitter.com/johnanderson',
            instagram: 'https://instagram.com/johnanderson',
            linkedin: 'https://www.linkedin.com/in/ramdas-prajapati-946b7a18b/',
        },
    }, {
        name: 'Ashutosh',
        role: 'Quality Guardian',
        about: 'Ensuring flawless software performance and reliability through rigorous testing, expert analysis, and continuous quality improvements.',
        image: '/images/team/ashutosh.png',
        social: {
            twitter: 'https://twitter.com/johnanderson',
            instagram: 'https://instagram.com/johnanderson',
            linkedin: 'https://www.linkedin.com/in/ashutosh-s-26439424a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
    },

];

export const ourOfferings = [{
    offeringName: 'MVP',
    shortDescription: '(Minimum Viable Product)',
    description: 'A Minimum Viable Product is a development technique where a new product is introduced in the market with basic features, but enough to capture the attention of the consumers. The final product is released only after getting sufficient feedback from the product\'s initial users.',
    deliverables: ['Core features for early adopters', 'Validates market demand', 'Basis for iterations', 'Feedback-driven development'],
    deliveryTime: '6-7 Weeks',
    action: 'Enquire for MVP',
    offeringVariant: 'mvp'
}, {
    offeringName: 'POC',
    shortDescription: '(Proof of Concept)',
    description: 'A Proof of Concept is an exercise to test a certain hypothesis or theory that a particular idea can be turned into a reality. It\'s the first tangible form of your idea, often used to demonstrate functionality and verify whether a concept or theory that can be achieved in development.',
    deliverables: ['Demonstrates feasibility', 'Tests idea\'s practicality', 'Minimal functionality', 'Basis for funding opportunities'],
    deliveryTime: '1-2 Weeks',
    action: 'Enquire for POC',
    offeringVariant: 'poc'
}, {
    offeringName: 'Production App',
    shortDescription: '',
    description: 'A Production App refers to the final, fully developed version of your app that\'s ready to be used by end-users. It encompasses all the features and robustness required for daily operations and is fully supported for any issues end-users may encounter.',
    deliverables: ['Full feature set', 'Market-ready', 'Ongoing support and maintenance', 'Scalability and performance-focused'],
    deliveryTime: '8-10 Weeks',
    action: 'Enquire for Production App',
    offeringVariant: 'production'
}];


export const testimonials: ITestimonials[] = [{
    'comment': 'We have been working with BucléLabs for a while now, and they continue to amaze us not only with their tech skills but,\n' +
        'more importantly, with their soft skills. We look forward to continuing our collaboration with them.',
    'rating': 5,
    'company': 'DPAD',
    'name': '',
    'profile': 'CEO',
    'image': '/images/testimonials/dpad.svg',
}, {
    'comment': 'There is nothing that they cannot do. Look no further for a competent agency for your project. You can rest\n' +
        'assured they can get the job done. They are very knowledgeable on all cryptocurrencies and can work on\n' +
        'any blockchain.',
    'rating': 4,
    'company': 'CrossTower',
    'name': '',
    'profile': 'BDM',
    'image': '/images/testimonials/crosstower.svg',
}, {
    'comment': 'No matter how simple or how difficult the job is, these guys ALWAYS go the extra mile to ensure it’s done perfectly. They take pride in their skills and never settle for anything less than excellence. You’ll be impressed.',
    'rating': 5,
    'company': 'EduBlock',
    'name': '',
    'profile': 'CEO',
    'image': '/images/testimonials/edublock.svg',
}, {
    'comment': 'Very proficient in coding smart contracts and speciality in the Tezos Blockchain network. Fantastic work',
    'rating': 5,
    'company': 'Guild Token',
    'name': '',
    'profile': 'CEO',
    'image': '/images/testimonials/guild.webp',
}, {
    'comment': 'I highly recommend BucléLabs for their exceptional quality of work and unwavering commitment to meeting tight deadlines. Throughout our collaboration, I have been consistently impressed by their professionalism, attention to detail and dedication to delivering top-notch results.',
    'rating': 5,
    'company': 'CakePanda',
    'name': '',
    'profile': 'CEO',
    'image': '/images/testimonials/capa-token.svg',
}, {
    'comment': 'Exceptional service from BucléLabs. From the very beginning of our collaboration, their team demonstrated an unparalleled commitment to ensuring timely delivery and exceeding our expectations.',
    'rating': 5,
    'company': 'META1',
    'name': '',
    'profile': 'CTO',
    'image': '/images/testimonials/meta1.svg',
}, {
    'comment': 'Choosing BucléLabs for our project was an excellent decision. From the outset, their team exhibited a high level of professionalism, consistently demonstrating both expertise and dedication to our success.',
    'rating': 5,
    'company': 'Goldy',
    'name': '',
    'profile': 'CEO',
    'image': '/images/testimonials/goldy.svg',
}, {
    'comment': 'Their efficiency in optimizing performance was genuinely excellent. Throughout our collaboration, the team at BucléLabs demonstrated an exceptional ability to analyze and enhance various aspects of our project, ensuring that every element operated at peak efficiency.',
    'rating': 5,
    'company': 'MaaLaxmi',
    'name': '',
    'profile': 'CEO',
    'image': '/images/testimonials/maa-laxmi.svg',
}]

export const nftTopics = ['Ordinals NFT', 'NFT Bridging', 'NFT Staking', 'ERC1155 NFT', 'Fractional NFT', 'NFT DAO', 'ERC721 NFT', 'Dynamic NFT', 'NFT MARKETPLACE', 'SOUL BOUND TOKEN', 'NFT LENDING PROGRAM', 'ERC1155 NFT', 'Fractional NFT', 'NFT Staking'];

export const enterpriseGridPoint = ['Supply Chain Management', 'Identity Management', 'Financial Services', 'Smart Contracts', 'Data Security and Privacy', 'Digital Asset Management', 'Decentralized Finance (DeFi)', 'Healthcare Records Management', 'Supply Chain Traceability', 'Regulatory Compliance', 'Regulatory Compliance', 'Energy Trading and Management', 'Intellectual Property Protection', 'Tokenization Platforms', 'Digital Voting Systems'];
export const governmentGridPoint = [

    'Digital Identity Management', 'Voting Systems', 'Public Records Management', 'Supply Chain Management', 'Healthcare Data Management', 'Smart Contracts for Procurement', 'Taxation and Revenue Collection', 'Identity Verification for Government Services', 'Regulatory Compliance and Audit Trails', 'Intellectual Property Management', 'Public Health Surveillance', 'Energy and Utilities Management', 'Government Grants and Funding Distribution', 'Transportation and Logistics', 'Environmental Conservation and Sustainability',

];


export const startupData = ['CBDC (Central Bank Digital Currency)', 'Land Registry on Blockchain', 'Health Data Management', 'Supply Chain Logistics', 'Identity Solutions']
export const EnterpriseData = ['Supply Chain Management', 'Financial Services', 'Real Estate', 'Identity Management', 'Intellectual Property', 'Energy Sector', 'Logistics and Transportation']
export const governmentData = ['Financial Services', 'Insurance', 'Healthcare', 'Real Estate', 'Identity Management', 'Voting Systems', 'Energy Sector', 'Logistics and Transportation']


export const projects: Project[] = [


    {
        imageUrl: 'edublock-brand',
        projectType: 'Verifiable Credentials Solution',
        title: 'EduBlock',
        subtitle: '',
        description: 'EduBlock is a verifiable credentials system allowing institutions to issue blockchain-based certificates and degrees. It supports real-time communication, tracking, bulk issuance, and API integration for third-party use. The platform includes a credential visual designer and a mobile wallet for storing and sharing credentials offline, ensuring secure, efficient credential verification.',
        tech: ['Flutter', 'NextJs', 'C#', 'Dock.io', 'IIS', 'Sql Server', 'BlockChain'], // Technologies
        features: ['Verifiable Credentials', 'Blockchain', 'API Integration'], // Features
        readUrl: 'edublock'
    },
    {
        imageUrl: 'nested-brand',
        projectType: 'Decentralized Talent Network',
        title: 'Nested',
        subtitle: '',
        description: 'Nested is a decentralized talent network that enables professionals to monetize their profiles through a verified credentials and earn rewards. We worked on and developed key components like a verified credentials system using smart contracts, profile monetisation system etc. The platform features blockchain-based verification, secure wallets, and profile monetization, allowing users to earn points through networking and job searching, exchangeable to real currency.',
        tech: ['Flutter', 'NextJs', 'C#', 'Dock.io', 'IIS', 'Sql Server', 'BlockChain'], // Technologies
        features: ['Professional Networking', 'Blockchain', 'Smart Contracts'], // Features
        readUrl: 'nested'
    },

    {
        imageUrl: 'mcardit',
        projectType: 'Secure ACH Payments and Verification Platform',
        title: 'Mcardit',
        subtitle: '',
        description: 'A cutting-edge verification-based platform providing same-day ACH transactions, designed to prevent fraud and streamline payments for businesses, consumers, and merchants with specialized solutions. Features include real-time transaction tracking, invoice tracking, secure payment gateway, e-commerce interrogations, user-friendly interfaces, and comprehensive support for diverse industries and use cases.',
        tech: ['NextJs', 'Flutter', 'PHP', 'NodeJs', 'AWS', 'MySql'], // Technologies
        features: ['ACH Transactions', 'Fraud Prevention', 'E-Commerce Integration'], // Features
        readUrl: 'mcardit-pg'
    },
    {
        imageUrl: 'greencard-brand',
        projectType: 'Direct ACH Payment Solution',
        title: 'Paygreen Card',
        subtitle: '',
        description: 'Paygreen Card provides a streamlined ACH payment solution directly connected to bank accounts using bank account tokenization enabling users to make direct payments directly from their bank accounts. With 2048-bit encryption, Paygreen Card ensures secure transactions and eliminates the need for intermediary wallets, offering a superfast, seamless and efficient payment experience.',
        tech: ['NextJs', 'Flutter', 'PHP', 'NodeJs', 'AWS', 'MySql'], // Technologies
        features: ['ACH Payments', 'Bank Tokenization', 'Secure Transactions'], // Features
        readUrl: 'greencard'
    },
    {
        imageUrl: 'crosstower-brand',
        projectType: 'Comprehensive Crypto Platform',
        title: 'CrossTower India',
        subtitle: '',
        description: 'CrossTower India offers a robust crypto trading platform with access to over 40 cryptocurrencies. We worked on and developed their full tech stack, enhancing infrastructure and building internal tools. The platform emphasizes security, compliance, and accessibility for users across India. It also provides a fully compliant crypto payment gateway and a secure wallet system for long-term asset storage, ensuring seamless and secure crypto transactions.',
        tech: ['NextJs', 'Flutter', 'PHP', 'NodeJs', 'AWS', 'MySql'], // Technologies
        features: ['Cryptocurrency', 'Blockchain', 'Trading'], // Features
        readUrl: 'crosstower'
    },
    // {
    //     imageUrl: 'goldy',
    //     projectType: 'Digital token backed by physical gold.',
    //     title: 'Goldy',
    //     subtitle: '',
    //     description: 'Gold has long been a symbol of wealth and a hedge against economic instability. However, traditional gold ownership involves challenges such as storage, security and liquidity. Goldy Token leverages blockchain technology to address these issues, providing a digital representation of gold that is secure, transparent and easily tradable. Backed by physical gold bars, Goldy Token offers a reliable investment option that merges the timeless value of gold with the modern efficiency of digital assets.',
    //     tech: ['NextJs', 'NodeJs', 'Solidity', 'AWS', 'MySql', 'Blockchain'], // Technologies
    //     features: ['Gold-Backed Tokens', 'Multi-Currency Purchase', 'Tokens Presales', 'Physical Gold Redemption'], // Features
    //     readUrl: 'goldy'
    // }, {
    //     imageUrl: 'maa-laxmi-brand',
    //     projectType: 'L2 Blockchain based on OP-Stack',
    //     title: 'Maa-Laxmi',
    //     subtitle: '',
    //     description: 'The Maa Laxmi project aims to enhance an existing blockchain ecosystem by configuring and deploying a new L2 Blockchain using OP-Stack technology. Key steps include integrating the Laxmi coin for blockchain operations and implementing fee payments in this native currency. The project also involves developing and deploying a blockchain explorer for real-time tracking and monitoring.',
    //     tech: ['Elixir', 'OP-Stack', 'GETH', 'Ubuntu', 'Postgresql', 'AWS', 'Blockchain'], // Technologies
    //     features: ['L2 Blockchain', 'Blockchain Explorer', 'ERC-20 Implementation', 'Cross-Layer Communication'], // Features
    //     readUrl: 'maa-laxmi'
    // },
    //
    // {
    //     imageUrl: 'cake-panda-brand',
    //     projectType: 'Playful DeFi meme cryptocurrency envisioned',
    //     title: 'Cake Panda',
    //     subtitle: '',
    //     description: 'Cake Panda (CAPA) is a unique cryptocurrency merging meme culture and decentralized finance (DeFi). It envisions a community-driven digital nation with innovative protocols, perpetual innovation and a balance of humor and financial sophistication. Join the revolution!',
    //     tech: ['ReactJs', 'NodeJs', 'AWS', 'Solidity', 'MySql', 'Blockchain'], // Technologies
    //     features: ['DeFi', 'Smart Contracts', 'Innovative DeFi Protocols'], // Features
    //     readUrl: 'cake-panda'
    // }, {
    //     imageUrl: 'cb-brand',
    //     projectType: 'Stream Anytime, Engage Live Hub for  On-Demand Podcasts and  Videos',
    //     title: 'Clay & Buck',
    //     subtitle: '',
    //     description: 'BucléLabs undertook the task of developing and maintaining the Clay and Buck ecosystem which includes mobile development. The primary goal of the project was to provide stable android & iOS applications and create a seamless user experience. Clay and Buck distribute their original content across multiple platforms. This included live podcasts, on-demand videos, media articles and interactive features like in-app purchases and subscriptions.',
    //     tech: ['React Native', 'iOS', 'Android'], // Technologies
    //     features: ['On-Demand Content', 'Interactive Features', 'Live Streaming'], // Features
    //     readUrl: 'clay-buck'
    // },


];

export const Categories = [{
    'category': 'Blockchain',
    'items': ['Blockchain Development', 'Blockchain Game Development', 'Blockchain In Identity Management']
}, {
    'category': 'Blockchain Frameworks',
    'items': ['Parity Substrate', 'OP Stack', 'Arbitrum Orbit', 'Polkadot Parachains', 'Avalanche Subnets', 'Cosmos SDK', 'Polygon ZkEVM', 'ZkSync Hyperchains']
}, {
    'category': 'Layer 1 & Layer 2 Solutions', 'items': ['BSC', 'Solana', 'Cardano', 'Ethereum', 'Polkadot']
}, {
    'category': 'Enterprise Blockchain',
    'items': ['Supply Chain', 'Transport And Logistics', 'Entertainment', 'Education', 'Finance', 'Healthcare', 'Real Estate', 'Procure-To-Pay', 'Carbon Credits']
}, {
    'category': 'Smart Contract', 'items': ['Smart Contract Development', 'Smart Contract Audit']
}, {
    'category': 'Tokenization', 'items': ['Asset Tokenization', 'Asset Management', 'Real Estate Tokenization']
}, {
    'category': 'Whitepaper', 'items': ['White Paper Development']
}, {
    'category': 'Consulting',
    'items': ['Blockchain Consulting Company', 'Web3 Consulting Company', 'Metaverse Consulting Company', 'AI Consulting Company', 'DeFi Consulting Services', 'DAO Consulting Services']
}, {
    'category': 'Solutions',
    'items': ['Exchange', 'Custom Exchange', 'White Label Exchange', 'Margin Trading Exchange', 'P2P Exchange', 'Decentralized Exchange', 'Arbitrage Bots', 'Derivatives Exchange', 'Centralized Exchange', 'Market Making Services']
}, {
    'category': 'Wallet',
    'items': ['Centralized Wallet', 'White Label Wallet', 'Web3 Wallet', 'Multicurrency Wallet', 'NFT Wallet', 'TRON Wallet', 'Super Crypto App Development', 'Defi Wallet', 'MPC Crypto Wallet']
}, {
    'category': 'NFT',
    'items': ['NFT Development', 'White Label NFT Marketplace', 'NFT Music', 'NFT Marketplace', 'NFT Loan', 'Semi Fungible Token', 'NFT Gaming', 'NFT Generative Art', 'NFT Art']
}, {
    'category': 'DeFi',
    'items': ['DeFi Development', 'DeFi Lottery', 'DAO Blockchain', 'Olympus DAO Development', 'DeFi Yield Farming', 'DeFi Staking', 'DeFi Lending And Borrowing', 'Dapp Development Company']
}, {
    'category': 'Web3', 'items': ['Web 3.0 Development', 'Web3 Game Development']
}, {
    'category': 'Digital Banking', 'items': ['Digital Banking', 'White Label Banking', 'Payment Gateway', 'P2P Lending']
}, {
    'category': 'Coin Development',
    'items': ['Launchpad Development', 'ICO Development', 'Coin-Token Development', 'IDO Development', 'Stablecoin Development']
}, {
    'category': 'Trading Bots', 'items': ['Trading Bot', 'Flash Loan Arbitrage Bot', 'Arbitrage Bots']
}]


export const expertiseData = [
    {
        id: 1,
        "category": "Blockchain",
        "subcategories": [
            {
                id: 1,
                "subcategory": "Blockchain",
                "items": [
                    {
                        id: 1,
                        "title": "Blockchain Development",
                        "description": "Unlock the full potential of blockchain technology with our comprehensive and strategic blockchain development services."
                    },
                    {
                        id: 2,
                        "title": "Blockchain Game Development",
                        "description": "Elevate your gaming venture with our specialized blockchain game development solutions, ensuring innovation and engagement."
                    },
                    {
                        id: 3,
                        "title": "Blockchain In Identity Management",
                        "description": "Achieve transparent, secure and flawless identity management using the cutting-edge capabilities of blockchain technology."
                    }
                ]
            },
            {
                id: 2,
                "subcategory": "Blockchain Frameworks",
                "items": [
                    {
                        id: 1,
                        "title": "Parity Substrate",
                        "description": "Explore the vast opportunities provided by substrate blockchain development with our expert solutions and services."
                    },
                    {
                        id: 2,
                        "title": "OP Stack",
                        "description": "Our OP Stack solutions are designed to drive your digital infrastructure to success, offering robust and scalable services."
                    },
                    {
                        id: 3,
                        "title": "Arbitrum Orbit",
                        "description": "Unlock unprecedented efficiency and scalability with our advanced Arbitrum Orbit solutions tailored to your needs."
                    },
                    {
                        id: 4,
                        "title": "Polygon ZkEVM",
                        "description": "Enhance Ethereum's scalability and performance with our state-of-the-art Polygon zkEVM solutions."
                    },
                    {
                        id: 5,
                        "title": "ZkSync Hyperchains",
                        "description": "Discover the power of zkSync Hyperchains for interoperable, efficient and scalable blockchain solutions."
                    }
                ]
            },
            {
                id: 3,
                "subcategory": "Layer 1 & Layer 2 Solutions",
                "items": [
                    {
                        id: 1,
                        "title": "BSC",
                        "description": "Utilize BSC as the optimal choice for decentralized application development, providing robust and efficient solutions."
                    },
                    {
                        id: 2,
                        "title": "Solana",
                        "description": "Empower your decentralized application development with Solana, offering superior efficiency and performance."
                    },
                    {
                        id: 3,
                        "title": "Cardano",
                        "description": "Develop and deploy fast, scalable and eco-friendly decentralized applications with the Cardano blockchain."
                    },
                    {
                        id: 4,
                        "title": "Ethereum",
                        "description": "Launch next-generation secure and scalable platforms with our comprehensive Ethereum Blockchain solutions."
                    },
                    {
                        id: 5,
                        "title": "Polkadot",
                        "description": "Integrate data seamlessly across public, private, open and permission-less blockchain networks with Polkadot."
                    }
                ]
            },
            {
                id: 4,
                "subcategory": "Enterprise Blockchain",
                "items": [
                    {
                        id: 1,
                        "title": "Supply Chain",
                        "description": "Achieve total visibility, transparency and full-asset control across your supply chain network with our blockchain solutions."
                    },
                    {
                        id: 2,
                        "title": "Transport And Logistics",
                        "description": "Embrace enhanced security, trust in data and efficient logistics management with our specialized blockchain services."
                    },
                    {
                        id: 3,
                        "title": "Entertainment",
                        "description": "Gain better visibility and control across the content creation and distribution lifecycle in the entertainment industry."
                    },
                    {
                        id: 4,
                        "title": "Education",
                        "description": "Improve accessibility, credibility and transparency in the education sector with our innovative blockchain solutions."
                    },
                    {
                        id: 5,
                        "title": "Finance",
                        "description": "Enhance security, transparency and transaction speed in the financial sector with our advanced blockchain solutions."
                    },
                    {
                        id: 6,
                        "title": "Healthcare",
                        "description": "Eliminate fraud and reduce the cost of treatments in healthcare through our secure and efficient blockchain solutions."
                    },
                    {
                        id: 7,
                        "title": "Real Estate",
                        "description": "Minimize data silos and ensure transparency in real estate transactions at reduced costs with our blockchain solutions."
                    },
                    {
                        id: 8,
                        "title": "Procure-To-Pay",
                        "description": "Enhance the management of goods, services and resources with our streamlined procure-to-pay blockchain solutions."
                    },
                    {
                        id: 9,
                        "title": "Carbon Credits",
                        "description": "Achieve better transparency, access and standardization in the carbon markets with our blockchain-based solutions."
                    }
                ]
            },
            {
                id: 5,
                "subcategory": "Smart Contract",
                "items": [
                    {
                        id: 1,
                        "title": "Smart Contract Development",
                        "description": "Achieve seamless business automation with our advanced and reliable smart contract development services."
                    },
                    {
                        id: 2,
                        "title": "Smart Contract Audit",
                        "description": "Ensure the integrity of your smart contracts with our thorough audit services, identifying errors, security flaws and compilation issues."
                    }
                ]
            },
            {
                id: 6,
                "subcategory": "Tokenization",
                "items": [
                    {
                        id: 1,
                        "title": "Asset Tokenization",
                        "description": "Facilitate speedy and secure ownership transfer and storage without the need for a centralized financial entity through our asset tokenization services."
                    },
                    {
                        id: 2,
                        "title": "Asset Management",
                        "description": "Optimize the management of high-performing asset tokens and digital products across exchanges with our expert services."
                    },
                    {
                        id: 3,
                        "title": "Real Estate Tokenization",
                        "description": "Revolutionize property ownership with our cutting-edge real estate tokenization solutions, ensuring efficiency and transparency."
                    }
                ]
            },
            {
                id: 7,
                "subcategory": "Whitepaper",
                "items": [
                    {
                        id: 1,
                        "title": "White Paper Development",
                        "description": "Build a strong and clear foundation for your project with our meticulously crafted, mission-driven white paper development services."
                    }
                ]
            }
        ]
    },
        {
            id: 2,
            "category": "Other Services",
            "subcategories": [
                {
                    "id": 1,
                    "subcategory": "Artificial Intelligence",
                    "items": [
                        {
                            "id": 1,
                            "title": "AI/ML Solutions",
                            "description": "Unlock the power of AI & ML to restructure your approach towards business operations"
                        }
                    ]
                },
                {
                    "id": 2,
                    "subcategory": "Generative AI",
                    "items": [
                        {
                            "id": 1,
                            "title": "Generative AI",
                            "description": "Automate your business innovation and growth with generative AI development"
                        }
                    ]
                }
            ]
        },

        {
        id: 3,
        "category": "Solutions",
        "subcategories": [
            {
                id: 1,
                "subcategory": "Exchange",
                "items": [
                    {
                        id: 1,
                        "title": "Custom Exchange",
                        "description": "Develop a competitive, enterprise-level custom exchange from scratch with our expert development services."
                    },
                    {
                        id: 2,
                        "title": "White Label Exchange",
                        "description": "Boost your revenue stream with our ready-made, secure and customizable white label exchange solutions."
                    },
                    {
                        id: 3,
                        "title": "Margin Trading Exchange",
                        "description": "Disrupt the digital market with our secure and feature-rich margin trading exchange solutions."
                    },
                    {
                        id: 4,
                        "title": "P2P Exchange",
                        "description": "Foster reliable transactions using a smart contract-based escrow system with our P2P exchange solutions."
                    },
                    {
                        id: 5,
                        "title": "Decentralized Exchange",
                        "description": "Reduce your time-to-market with our tailored and efficient decentralized exchange (DEX) script solutions."
                    },
                    {
                        id: 6,
                        "title": "Arbitrage Bots",
                        "description": "Elevate your trading strategies with our powerful and advanced arbitrage bots."
                    },
                    {
                        id: 7,
                        "title": "Derivatives Exchange",
                        "description": "Ensure platform liquidity and returns for a large pool of crypto investors with our derivatives exchange solutions."
                    },
                    {
                        id: 8,
                        "title": "Centralized Exchange",
                        "description": "Facilitate secure and convenient digital asset trading with our centralized exchange solutions."
                    },
                    {
                        id: 9,
                        "title": "Market Making Services",
                        "description": "Enhance liquidity provisioning with our precise and effective market making strategies."
                    }
                ]
            },
            {
                id: 2,
                "subcategory": "Wallet",
                "items": [
                    {
                        id: 1,
                        "title": "Centralized Wallet",
                        "description": "Provide robust and secure wallet solutions for storing and transferring digital assets with our centralized wallet services."
                    },
                    {
                        id: 2,
                        "title": "White Label Wallet",
                        "description": "Deploy a ready-to-use white label wallet with high-grade security features using our customizable solutions."
                    },
                    {
                        id: 3,
                        "title": "Web3 Wallet",
                        "description": "Access real-time data with trustless Web3 blockchain ecosystems using our Web3 wallet solutions."
                    },
                    {
                        id: 4,
                        "title": "Multicurrency Wallet",
                        "description": "Deploy intuitive, user-friendly, secure and scalable wallets that support multiple currencies with our expert services."
                    },
                    {
                        id: 5,
                        "title": "NFT Wallet",
                        "description": "Utilize private key-based solutions to buy, sell and exchange non-fungible tokens securely with our NFT wallet services."
                    },
                    {
                        id: 6,
                        "title": "TRON Wallet",
                        "description": "Securely hold private keys and TRX coins within a Tron wallet with our advanced solutions."
                    },
                    {
                        id: 7,
                        "title": "Super Crypto App Development",
                        "description": "Simplify payments and transfer processes with our efficient and user-friendly mobile wallet app solutions."
                    },
                    {
                        id: 8,
                        "title": "DeFi Wallet",
                        "description": "Fortify your wallet against hacks and cross-border regulations with our secure DeFi wallet solutions."
                    },
                    {
                        id: 9,
                        "title": "MPC Crypto Wallet",
                        "description": "Streamline digital asset access and safeguard private keys from vulnerabilities with our MPC crypto wallet solutions."
                    }
                ]
            },
            {
                id: 3,
                "subcategory": "NFT",
                "items": [
                    {
                        id: 1,
                        "title": "NFT Development",
                        "description": "Create decentralized non-fungible tokens tailored to different business needs with our comprehensive NFT development services."
                    },
                    {
                        id: 2,
                        "title": "White Label NFT Marketplace",
                        "description": "Obtain a customized white label NFT marketplace with multi-platform support through our expert solutions."
                    },
                    {
                        id: 3,
                        "title": "NFT Music",
                        "description": "Develop customer-centric marketplaces for selling, trading and auctioning music NFTs with our specialized services."
                    },
                    {
                        id: 4,
                        "title": "NFT Marketplace",
                        "description": "Build top-performing marketplaces for users to mint, sell, buy and trade NFTs with our expert NFT marketplace solutions."
                    },
                    {
                        id: 5,
                        "title": "NFT Loan",
                        "description": "Enable participation in the revolutionized borrowing and lending world with our innovative NFT loan solutions."
                    },
                    {
                        id: 6,
                        "title": "Semi Fungible Token",
                        "description": "Support easy batch token transfers that cater to both NFTs and fungible tokens with our semi-fungible token solutions."
                    },
                    {
                        id: 7,
                        "title": "NFT Gaming",
                        "description": "Enhance gameplay with exclusive digital assets like characters, tickets, weapons and skins through our NFT gaming solutions."
                    },
                    {
                        id: 8,
                        "title": "NFT Generative Art",
                        "description": "Create a future-ready NFT generative art marketplace supporting pictures, videos and GIFs with our advanced solutions."
                    },
                    {
                        id: 9,
                        "title": "NFT Art",
                        "description": "Tokenize digital and physical assets into unique, untransferable NFTs with our comprehensive NFT art solutions."
                    }
                ]
            },
            {
                id: 4,
                "subcategory": "DeFi",
                "items": [
                    {
                        id: 1,
                        "title": "DeFi Development",
                        "description": "Promote resiliency and facilitate trust with our exceptional DeFi development services tailored to your needs."
                    },
                    {
                        id: 2,
                        "title": "DeFi Lottery",
                        "description": "Develop a decentralized lottery ecosystem reinforced with enhanced security and traceability with our DeFi lottery solutions."
                    },
                    {
                        id: 3,
                        "title": "DAO Blockchain",
                        "description": "Ensure 100% transparent transactions, mandatory voting and standardized service handling with our DAO blockchain solutions."
                    },
                    {
                        id: 4,
                        "title": "Olympus DAO Development",
                        "description": "Introduce unique economic and game-theoretic dynamics through staking and bonding with our Olympus DAO development services."
                    },
                    {
                        id: 5,
                        "title": "DeFi Yield Farming",
                        "description": "Achieve business goals with our business-oriented DeFi yield farming platforms designed for optimal performance."
                    },
                    {
                        id: 6,
                        "title": "DeFi Staking",
                        "description": "Deploy staking software with market-leading features and institutional-grade security through our DeFi staking solutions."
                    },
                    {
                        id: 7,
                        "title": "DeFi Lending And Borrowing",
                        "description": "Fill the gaps in traditional banking with our advanced borrowing and lending platforms in the DeFi space."
                    },
                    {
                        id: 8,
                        "title": "DApp Development Company",
                        "description": "Foster business growth with our unique, innovative, secure and engaging decentralized application development services."
                    }
                ]
            },
            {
                id: 5,
                "subcategory": "Web3",
                "items": [
                    {
                        id: 1,
                        "title": "Web 3.0 Development",
                        "description": "Develop an evolved web that is open, intelligent and autonomous with our cutting-edge Web 3.0 development services."
                    },
                    {
                        id: 2,
                        "title": "Web3 Game Development",
                        "description": "Amplify your gaming experience with the advanced capabilities of Web 3.0 through our specialized game development services."
                    }
                ]
            },
            {
                id: 6,
                "subcategory": "Coin Development",
                "items": [
                    {
                        id: 1,
                        "title": "Launchpad Development",
                        "description": "Build a robust launchpad to capitalize on revenue generation opportunities with our expert development services."
                    },
                    {
                        id: 2,
                        "title": "ICO Development",
                        "description": "Maximize fundraising opportunities and drive innovation with our comprehensive ICO development services."
                    },
                    {
                        id: 3,
                        "title": "Coin-Token Development",
                        "description": "Achieve your business goals with our top-notch crypto coin and token development services."
                    },
                    {
                        id: 4,
                        "title": "IDO Development",
                        "description": "Create a coherent roadmap and navigate your IDO development journey successfully with our expert solutions."
                    },
                    {
                        id: 5,
                        "title": "Stablecoin Development",
                        "description": "Deploy gold-backed stablecoins and navigate your coin development journey with our specialized stablecoin solutions."
                    }
                ]
            },
            {
                id: 7,
                "subcategory": "Trading Bots",
                "items": [
                    {
                        id: 1,
                        "title": "Trading Bot",
                        "description": "Set your trades on autopilot by building AI-powered trading bots with our advanced development services."
                    },
                    {
                        id: 2,
                        "title": "Flash Loan Arbitrage Bot",
                        "description": "Conveniently execute your trading strategy with our cutting-edge flash loan arbitrage bots."
                    },
                    {
                        id: 3,
                        "title": "Arbitrage Bots",
                        "description": "Elevate your trading strategies with our powerful and efficient arbitrage bots designed for optimal performance."
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        "category": "Consulting",
        "subcategories": [
            {
                id: 1,
                "subcategory": "Consulting",
                "items": [
                    {
                        id: 1,
                        "title": "Blockchain Consulting Company",
                        "description": "We are a blockchain consulting and solution provider company. You idealize the vision and we make it a reality with our expertise!"
                    },
                    {
                        id: 2,
                        "title": "Web3 Consulting Company",
                        "description": "Create comprehensive Web3 ecosystems to leverage the full benefits of blockchain technology with our expert consulting services."
                    },
                    {
                        id: 3,
                        "title": "Metaverse Consulting Company",
                        "description": "Receive expert guidance on navigating the metaverse landscape with our specialized metaverse consulting services."
                    },
                    {
                        id: 4,
                        "title": "AI Consulting Company",
                        "description": "Our mission is to fully realize business benefits using our extensive expertise in artificial intelligence, a transformative technology."
                    },
                    {
                        id: 5,
                        "title": "DeFi Consulting Services",
                        "description": "Maximize your DeFi project's success with our tailored consulting services, designed to unlock new business opportunities."
                    },
                    {
                        id: 6,
                        "title": "DAO Consulting Services",
                        "description": "Access goal-specific DAO consulting services from our industry experts to drive your decentralized autonomous organization forward."
                    }
                ]
            }
        ]
    }
]
;

export const expertiseHeaderData = [
        {
            id: 1,
            "category": "Blockchain",
            "subcategories": [
                {
                    id: 1,
                    "subcategory": "Blockchain",
                    "items": [
                        {
                            id: 1,
                            "title": "Blockchain Development",
                            "description": "Unlock the full potential of blockchain technology with our comprehensive and strategic blockchain development services."
                        },
                        {
                            id: 2,
                            "title": "Blockchain Game Development",
                            "description": "Elevate your gaming venture with our specialized blockchain game development solutions, ensuring innovation and engagement."
                        },
                        {
                            id: 3,
                            "title": "Blockchain In Identity Management",
                            "description": "Achieve transparent, secure and flawless identity management using the cutting-edge capabilities of blockchain technology."
                        }
                    ]
                },
                {
                    id: 2,
                    "subcategory": "Blockchain Frameworks",
                    "items": [
                        {
                            id: 1,
                            "title": "Parity Substrate",
                            "description": "Explore the vast opportunities provided by substrate blockchain development with our expert solutions and services."
                        },
                        {
                            id: 2,
                            "title": "OP Stack",
                            "description": "Our OP Stack solutions are designed to drive your digital infrastructure to success, offering robust and scalable services."
                        },
                        {
                            id: 3,
                            "title": "Arbitrum Orbit",
                            "description": "Unlock unprecedented efficiency and scalability with our advanced Arbitrum Orbit solutions tailored to your needs."
                        },
                        {
                            id: 4,
                            "title": "Polygon ZkEVM",
                            "description": "Enhance Ethereum's scalability and performance with our state-of-the-art Polygon zkEVM solutions."
                        },
                        {
                            id: 5,
                            "title": "ZkSync Hyperchains",
                            "description": "Discover the power of zkSync Hyperchains for interoperable, efficient and scalable blockchain solutions."
                        }
                    ]
                },
                {
                    id: 3,
                    "subcategory": "Layer 1 & Layer 2 Solutions",
                    "items": [
                        {
                            id: 1,
                            "title": "BSC",
                            "description": "Utilize BSC as the optimal choice for decentralized application development, providing robust and efficient solutions."
                        },
                        {
                            id: 2,
                            "title": "Solana",
                            "description": "Empower your decentralized application development with Solana, offering superior efficiency and performance."
                        },
                        {
                            id: 3,
                            "title": "Cardano",
                            "description": "Develop and deploy fast, scalable and eco-friendly decentralized applications with the Cardano blockchain."
                        },
                        {
                            id: 4,
                            "title": "Ethereum",
                            "description": "Launch next-generation secure and scalable platforms with our comprehensive Ethereum Blockchain solutions."
                        },
                        {
                            id: 5,
                            "title": "Polkadot",
                            "description": "Integrate data seamlessly across public, private, open and permission-less blockchain networks with Polkadot."
                        }
                    ]
                },
                {
                    id: 4,
                    "subcategory": "Enterprise Blockchain",
                    "items": [
                        {
                            id: 1,
                            "title": "Supply Chain",
                            "description": "Achieve total visibility, transparency and full-asset control across your supply chain network with our blockchain solutions."
                        },
                        {
                            id: 2,
                            "title": "Transport And Logistics",
                            "description": "Embrace enhanced security, trust in data and efficient logistics management with our specialized blockchain services."
                        },
                        {
                            id: 3,
                            "title": "Entertainment",
                            "description": "Gain better visibility and control across the content creation and distribution lifecycle in the entertainment industry."
                        },
                        {
                            id: 4,
                            "title": "Education",
                            "description": "Improve accessibility, credibility and transparency in the education sector with our innovative blockchain solutions."
                        },
                        {
                            id: 5,
                            "title": "Finance",
                            "description": "Enhance security, transparency and transaction speed in the financial sector with our advanced blockchain solutions."
                        },
                        {
                            id: 6,
                            "title": "Healthcare",
                            "description": "Eliminate fraud and reduce the cost of treatments in healthcare through our secure and efficient blockchain solutions."
                        },
                        {
                            id: 7,
                            "title": "Real Estate",
                            "description": "Minimize data silos and ensure transparency in real estate transactions at reduced costs with our blockchain solutions."
                        },
                        {
                            id: 8,
                            "title": "Procure-To-Pay",
                            "description": "Enhance the management of goods, services and resources with our streamlined procure-to-pay blockchain solutions."
                        },
                        {
                            id: 9,
                            "title": "Carbon Credits",
                            "description": "Achieve better transparency, access and standardization in the carbon markets with our blockchain-based solutions."
                        }
                    ]
                },
                {
                    id: 5,
                    "subcategory": "Smart Contract",
                    "items": [
                        {
                            id: 1,
                            "title": "Smart Contract Development",
                            "description": "Achieve seamless business automation with our advanced and reliable smart contract development services."
                        },
                        {
                            id: 2,
                            "title": "Smart Contract Audit",
                            "description": "Ensure the integrity of your smart contracts with our thorough audit services, identifying errors, security flaws and compilation issues."
                        }
                    ]
                },
                {
                    id: 6,
                    "subcategory": "Tokenization",
                    "items": [
                        {
                            id: 1,
                            "title": "Asset Tokenization",
                            "description": "Facilitate speedy and secure ownership transfer and storage without the need for a centralized financial entity through our asset tokenization services."
                        },
                        {
                            id: 2,
                            "title": "Asset Management",
                            "description": "Optimize the management of high-performing asset tokens and digital products across exchanges with our expert services."
                        },
                        {
                            id: 3,
                            "title": "Real Estate Tokenization",
                            "description": "Revolutionize property ownership with our cutting-edge real estate tokenization solutions, ensuring efficiency and transparency."
                        }
                    ]
                },
                {
                    id: 7,
                    "subcategory": "Whitepaper",
                    "items": [
                        {
                            id: 1,
                            "title": "White Paper Development",
                            "description": "Build a strong and clear foundation for your project with our meticulously crafted, mission-driven white paper development services."
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            "category": "Other Services",
            "subcategories": [
                {
                    "id": 1,
                    "subcategory": "Artificial Intelligence",
                    "items": [
                        {
                            "id": 1,
                            "title": "AI/ML Solutions",
                            "description": "Unlock the power of AI & ML to restructure your approach towards business operations"
                        }
                    ]
                },
                {
                    "id": 2,
                    "subcategory": "Generative AI",
                    "items": [
                        {
                            "id": 1,
                            "title": "Generative AI",
                            "description": "Automate your business innovation and growth with generative AI development"
                        }
                    ]
                },
                {
                    "id": 3,
                    "subcategory": "Virtual CTO",
                    "items": [
                        {
                            "id": 1,
                            "title": "Virtual CTO",
                            "description": "Hire an Expert Virtual CTO to Lead Your IT Initiatives"
                        }
                    ]
                }
            ]
        },

        {
            id: 3,
            "category": "Solutions",
            "subcategories": [
                {
                    id: 1,
                    "subcategory": "Exchange",
                    "items": [
                        {
                            id: 1,
                            "title": "Custom Exchange",
                            "description": "Develop a competitive, enterprise-level custom exchange from scratch with our expert development services."
                        },
                        {
                            id: 2,
                            "title": "White Label Exchange",
                            "description": "Boost your revenue stream with our ready-made, secure and customizable white label exchange solutions."
                        },
                        {
                            id: 3,
                            "title": "Margin Trading Exchange",
                            "description": "Disrupt the digital market with our secure and feature-rich margin trading exchange solutions."
                        },
                        {
                            id: 4,
                            "title": "P2P Exchange",
                            "description": "Foster reliable transactions using a smart contract-based escrow system with our P2P exchange solutions."
                        },
                        {
                            id: 5,
                            "title": "Decentralized Exchange",
                            "description": "Reduce your time-to-market with our tailored and efficient decentralized exchange (DEX) script solutions."
                        },
                        {
                            id: 6,
                            "title": "Arbitrage Bots",
                            "description": "Elevate your trading strategies with our powerful and advanced arbitrage bots."
                        },
                        {
                            id: 7,
                            "title": "Derivatives Exchange",
                            "description": "Ensure platform liquidity and returns for a large pool of crypto investors with our derivatives exchange solutions."
                        },
                        {
                            id: 8,
                            "title": "Centralized Exchange",
                            "description": "Facilitate secure and convenient digital asset trading with our centralized exchange solutions."
                        },
                        {
                            id: 9,
                            "title": "Market Making Services",
                            "description": "Enhance liquidity provisioning with our precise and effective market making strategies."
                        }
                    ]
                },
                {
                    id: 2,
                    "subcategory": "Wallet",
                    "items": [
                        {
                            id: 1,
                            "title": "Centralized Wallet",
                            "description": "Provide robust and secure wallet solutions for storing and transferring digital assets with our centralized wallet services."
                        },
                        {
                            id: 2,
                            "title": "White Label Wallet",
                            "description": "Deploy a ready-to-use white label wallet with high-grade security features using our customizable solutions."
                        },
                        {
                            id: 3,
                            "title": "Web3 Wallet",
                            "description": "Access real-time data with trustless Web3 blockchain ecosystems using our Web3 wallet solutions."
                        },
                        {
                            id: 4,
                            "title": "Multicurrency Wallet",
                            "description": "Deploy intuitive, user-friendly, secure and scalable wallets that support multiple currencies with our expert services."
                        },
                        {
                            id: 5,
                            "title": "NFT Wallet",
                            "description": "Utilize private key-based solutions to buy, sell and exchange non-fungible tokens securely with our NFT wallet services."
                        },
                        {
                            id: 6,
                            "title": "TRON Wallet",
                            "description": "Securely hold private keys and TRX coins within a Tron wallet with our advanced solutions."
                        },
                        {
                            id: 7,
                            "title": "Super Crypto App Development",
                            "description": "Simplify payments and transfer processes with our efficient and user-friendly mobile wallet app solutions."
                        },
                        {
                            id: 8,
                            "title": "DeFi Wallet",
                            "description": "Fortify your wallet against hacks and cross-border regulations with our secure DeFi wallet solutions."
                        },
                        {
                            id: 9,
                            "title": "MPC Crypto Wallet",
                            "description": "Streamline digital asset access and safeguard private keys from vulnerabilities with our MPC crypto wallet solutions."
                        }
                    ]
                },
                {
                    id: 3,
                    "subcategory": "NFT",
                    "items": [
                        {
                            id: 1,
                            "title": "NFT Development",
                            "description": "Create decentralized non-fungible tokens tailored to different business needs with our comprehensive NFT development services."
                        },
                        {
                            id: 2,
                            "title": "White Label NFT Marketplace",
                            "description": "Obtain a customized white label NFT marketplace with multi-platform support through our expert solutions."
                        },
                        {
                            id: 3,
                            "title": "NFT Music",
                            "description": "Develop customer-centric marketplaces for selling, trading and auctioning music NFTs with our specialized services."
                        },
                        {
                            id: 4,
                            "title": "NFT Marketplace",
                            "description": "Build top-performing marketplaces for users to mint, sell, buy and trade NFTs with our expert NFT marketplace solutions."
                        },
                        {
                            id: 5,
                            "title": "NFT Loan",
                            "description": "Enable participation in the revolutionized borrowing and lending world with our innovative NFT loan solutions."
                        },
                        {
                            id: 6,
                            "title": "Semi Fungible Token",
                            "description": "Support easy batch token transfers that cater to both NFTs and fungible tokens with our semi-fungible token solutions."
                        },
                        {
                            id: 7,
                            "title": "NFT Gaming",
                            "description": "Enhance gameplay with exclusive digital assets like characters, tickets, weapons and skins through our NFT gaming solutions."
                        },
                        {
                            id: 8,
                            "title": "NFT Generative Art",
                            "description": "Create a future-ready NFT generative art marketplace supporting pictures, videos and GIFs with our advanced solutions."
                        },
                        {
                            id: 9,
                            "title": "NFT Art",
                            "description": "Tokenize digital and physical assets into unique, untransferable NFTs with our comprehensive NFT art solutions."
                        }
                    ]
                },
                {
                    id: 4,
                    "subcategory": "DeFi",
                    "items": [
                        {
                            id: 1,
                            "title": "DeFi Development",
                            "description": "Promote resiliency and facilitate trust with our exceptional DeFi development services tailored to your needs."
                        },
                        {
                            id: 2,
                            "title": "DeFi Lottery",
                            "description": "Develop a decentralized lottery ecosystem reinforced with enhanced security and traceability with our DeFi lottery solutions."
                        },
                        {
                            id: 3,
                            "title": "DAO Blockchain",
                            "description": "Ensure 100% transparent transactions, mandatory voting and standardized service handling with our DAO blockchain solutions."
                        },
                        {
                            id: 4,
                            "title": "Olympus DAO Development",
                            "description": "Introduce unique economic and game-theoretic dynamics through staking and bonding with our Olympus DAO development services."
                        },
                        {
                            id: 5,
                            "title": "DeFi Yield Farming",
                            "description": "Achieve business goals with our business-oriented DeFi yield farming platforms designed for optimal performance."
                        },
                        {
                            id: 6,
                            "title": "DeFi Staking",
                            "description": "Deploy staking software with market-leading features and institutional-grade security through our DeFi staking solutions."
                        },
                        {
                            id: 7,
                            "title": "DeFi Lending And Borrowing",
                            "description": "Fill the gaps in traditional banking with our advanced borrowing and lending platforms in the DeFi space."
                        },
                        {
                            id: 8,
                            "title": "DApp Development Company",
                            "description": "Foster business growth with our unique, innovative, secure and engaging decentralized application development services."
                        }
                    ]
                },
                {
                    id: 5,
                    "subcategory": "Web3",
                    "items": [
                        {
                            id: 1,
                            "title": "Web 3.0 Development",
                            "description": "Develop an evolved web that is open, intelligent and autonomous with our cutting-edge Web 3.0 development services."
                        },
                        {
                            id: 2,
                            "title": "Web3 Game Development",
                            "description": "Amplify your gaming experience with the advanced capabilities of Web 3.0 through our specialized game development services."
                        }
                    ]
                },
                {
                    id: 6,
                    "subcategory": "Coin Development",
                    "items": [
                        {
                            id: 1,
                            "title": "Launchpad Development",
                            "description": "Build a robust launchpad to capitalize on revenue generation opportunities with our expert development services."
                        },
                        {
                            id: 2,
                            "title": "ICO Development",
                            "description": "Maximize fundraising opportunities and drive innovation with our comprehensive ICO development services."
                        },
                        {
                            id: 3,
                            "title": "Coin-Token Development",
                            "description": "Achieve your business goals with our top-notch crypto coin and token development services."
                        },
                        {
                            id: 4,
                            "title": "IDO Development",
                            "description": "Create a coherent roadmap and navigate your IDO development journey successfully with our expert solutions."
                        },
                        {
                            id: 5,
                            "title": "Stablecoin Development",
                            "description": "Deploy gold-backed stablecoins and navigate your coin development journey with our specialized stablecoin solutions."
                        }
                    ]
                },
                {
                    id: 7,
                    "subcategory": "Trading Bots",
                    "items": [
                        {
                            id: 1,
                            "title": "Trading Bot",
                            "description": "Set your trades on autopilot by building AI-powered trading bots with our advanced development services."
                        },
                        {
                            id: 2,
                            "title": "Flash Loan Arbitrage Bot",
                            "description": "Conveniently execute your trading strategy with our cutting-edge flash loan arbitrage bots."
                        },
                        {
                            id: 3,
                            "title": "Arbitrage Bots",
                            "description": "Elevate your trading strategies with our powerful and efficient arbitrage bots designed for optimal performance."
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            "category": "Consulting",
            "subcategories": [
                {
                    id: 1,
                    "subcategory": "Consulting",
                    "items": [
                        {
                            id: 1,
                            "title": "Blockchain Consulting Company",
                            "description": "We are a blockchain consulting and solution provider company. You idealize the vision and we make it a reality with our expertise!"
                        },
                        {
                            id: 2,
                            "title": "Web3 Consulting Company",
                            "description": "Create comprehensive Web3 ecosystems to leverage the full benefits of blockchain technology with our expert consulting services."
                        },
                        {
                            id: 3,
                            "title": "Metaverse Consulting Company",
                            "description": "Receive expert guidance on navigating the metaverse landscape with our specialized metaverse consulting services."
                        },
                        {
                            id: 4,
                            "title": "AI Consulting Company",
                            "description": "Our mission is to fully realize business benefits using our extensive expertise in artificial intelligence, a transformative technology."
                        },
                        {
                            id: 5,
                            "title": "DeFi Consulting Services",
                            "description": "Maximize your DeFi project's success with our tailored consulting services, designed to unlock new business opportunities."
                        },
                        {
                            id: 6,
                            "title": "DAO Consulting Services",
                            "description": "Access goal-specific DAO consulting services from our industry experts to drive your decentralized autonomous organization forward."
                        }
                    ]
                }
            ]
        },
    {
        id: 5,
        "category": "Ecosystem",
        "subcategories": [
            {
                "id": 1,
                "subcategory": "BucléLabs Ecosystem",
                "items": [
                    {
                        "id": 1,
                        "title": "BucléLabs Ecosystem",
                        "description": "Applications, developers tools, network explorers and more."
                    },
                    // {
                    //     "id": 2,
                    //     "title": "AI ML Solutions",
                    //     "description": "Unlock the power of AI & ML to restructure your approach towards business operations"
                    // }
                ]
            },
        ]
    },
    {
        id: 6,
        "category": "Hire Developers",
        "subcategories": [
            {
                "id": 1,
                "subcategory": "Hire BucléLabs Developers",
                "items": [
                    {
                        "id": 1,
                        "title": "Blockchain Developers",
                        "description": "Hire our Blockchain Developers to build the future."
                    },
                    {
                        "id": 2,
                        "title": "Full Stack Developers",
                        "description": "Hire our Full Stack Developers to build the future."
                    },
                    {
                        "id": 3,
                        "title": "Web3 Developers",
                        "description": "Hire our Web3 Developers to build the future."
                    },
                    {
                        "id": 4,
                        "title": "NFT Developers",
                        "description": "Hire our NFT Developers to build the future."
                    },
                    {
                        "id": 5,
                        "title": "Metaverse Developers",
                        "description": "Hire our Metaverse Developers to build the future."
                    },
                    {
                        "id": 6,
                        "title": "Mobile App Developers",
                        "description": "Hire our Mobile App Developers to build the future."
                    },
                    {
                        "id": 7,
                        "title": "AI Developers",
                        "description": "Hire our AI Developers to build the future."
                    },
                    {
                        "id": 8,
                        "title": "Generative AI Developers",
                        "description": "Hire our Generative AI Developers to build the future."
                    },
                    {
                        "id": 9,
                        "title": "ChatGPT Developers",
                        "description": "Hire our ChatGPT Developers to build the future."
                    },
                    {
                        "id": 10,
                        "title": "Dedicated Developers",
                        "description": "Hire our Dedicated Developers to build the future."
                    },
                ]
            },
        ]
    },
    {
        id: 7,
        "category": "Blogs",
        "subcategories": [
            {
                "id": 1,
                "subcategory": "BucléLabs Blogs",
                "items": [
                    {
                        "id": 1,
                        "title": "BucléLabs Blogs",
                        "description": "Read Our Blogs for the Latest Insights."
                    },
                ]
            },
        ]
    },
    ]
;
