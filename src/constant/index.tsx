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