export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface MetricStat {
  value: string;
  label: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  tagline: string;
  badge?: string;
  logo?: string;
  isCareerBreak?: boolean;
  bulletPoints: {
    topic?: string;
    text: string;
  }[];
}

export interface PersonalProject {
  title: string;
  tagline: string;
  category: string;
  period: string;
  technology: string;
  logo: string;
  webUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  standaloneUrl?: string;
  bulletPoints: {
    topic: string;
    text: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export const portfolioData = {
  personal: {
    name: "Alok Kumar Rathaur",
    role: "Senior iOS Engineer & Apple Platform Architect",
    tagline: "Building high-performance iOS, macOS, and cross-platform applications with Swift 6, SwiftUI, and modern concurrency.",
    bio: "Senior iOS Engineer with 8.3+ years of software engineering experience (7+ years native Apple ecosystem) architecting, developing, and deploying high-impact iOS and macOS applications across Fintech, Consumer E-Commerce, and Telehealth. Deep expertise in modern Swift (5/6), UIKit, SwiftUI, Swift Concurrency (async/await, Actors), Core Data, Combine, and enterprise Payment SDKs. Proven track record implementing MVVM-C, Clean Architecture, VIPER, and TCA, delivering measurable production improvements including 35% crash rate reductions and 30% faster cold launch times.",
    location: "Kanpur, India • Open to Relocation / Hybrid / Remote",
    email: "alok.rathaur26@gmail.com",
    phone: "+91-7571868833",
    statusBadge: "Available for Senior iOS & Mobile Architecture Roles",
    socialLinks: [
      {
        label: "LinkedIn",
        url: "http://linkedin.com/in/alokrathaur",
        icon: "Linkedin"
      },
      {
        label: "GitHub",
        url: "http://github.com/alok-rathaur",
        icon: "Github"
      },
      {
        label: "Studio Portal",
        url: "https://legendprixai.lol",
        icon: "Globe"
      },
      {
        label: "Email",
        url: "mailto:alok.rathaur26@gmail.com",
        icon: "Mail"
      }
    ]
  },

  stats: [
    {
      value: "8.3+",
      label: "Years Experience",
      description: "7+ years dedicated native Apple platforms"
    },
    {
      value: "35%",
      label: "Crash Reduction",
      description: "Achieved via Instruments & telemetry at Redpin"
    },
    {
      value: "30%",
      label: "Faster Launch Time",
      description: "Cold app launch optimized via lazy view loading"
    },
    {
      value: "40%",
      label: "Memory Optimization",
      description: "Retain cycles purged in 100K+ user e-commerce app"
    },
    {
      value: "4.6★",
      label: "App Store Rating",
      description: "Drove 22% MAU increase and 4.3→4.6 rating uplift"
    }
  ] as MetricStat[],

  skillCategories: [
    {
      title: "iOS & Apple Platforms",
      iconName: "Apple",
      skills: [
        "Swift 6 & 5",
        "SwiftUI",
        "UIKit",
        "AppKit (macOS)",
        "Cocoa Touch",
        "Foundation",
        "Core Data",
        "Combine",
        "StoreKit 2",
        "Apple Pay",
        "XCTest & XCUITest",
        "Xcode Instruments"
      ]
    },
    {
      title: "Payment SDKs & Financial Systems",
      iconName: "CreditCard",
      skills: [
        "Enterprise Payment SDKs",
        "Apple Pay Integration",
        "Stripe",
        "Checkout.com",
        "Worldpay",
        "3D Secure (3DS)",
        "PSD2 SCA Compliance",
        "PCI-DSS Guidelines",
        "In-App Purchases (StoreKit 2)",
        "Multi-Currency FX Checkout"
      ]
    },
    {
      title: "Swift Concurrency & Threading",
      iconName: "Cpu",
      skills: [
        "Swift Concurrency",
        "async / await",
        "Actors & MainActor",
        "Structured Concurrency",
        "Tasks & Task Groups",
        "Grand Central Dispatch (GCD)",
        "Operations & Queues",
        "ARC & Memory Leaks",
        "Retain Cycle Elimination"
      ]
    },
    {
      title: "Architecture & Design Patterns",
      iconName: "Layers",
      skills: [
        "MVVM & MVVM-C (Coordinator)",
        "Clean Architecture",
        "VIPER",
        "MVC",
        "The Composable Architecture (TCA)",
        "ReactorKit",
        "SOLID Principles",
        "Protocol-Oriented Programming (POP)",
        "Dependency Injection"
      ]
    },
    {
      title: "Performance & Profiling",
      iconName: "Activity",
      skills: [
        "Xcode Instruments",
        "Time Profiler",
        "Allocations & Leaks",
        "Memory Graph Debugger",
        "LLDB Debugging",
        "Launch Time Optimization",
        "Binary Size Reduction",
        "Crashlytics Diagnostics",
        "Root-Cause Analysis"
      ]
    },
    {
      title: "Networking, APIs & Security",
      iconName: "ShieldCheck",
      skills: [
        "RESTful APIs",
        "JSON Parsing / Codable",
        "URLSession",
        "Alamofire",
        "WebSockets",
        "API Contract Design",
        "Offline Sync & Caching",
        "Secure Enclave & Keychain",
        "OWASP Mobile Security"
      ]
    },
    {
      title: "CI/CD & Release Engineering",
      iconName: "GitBranch",
      skills: [
        "Xcode Cloud",
        "Fastlane",
        "GitHub Actions",
        "Bitrise",
        "TestFlight Validation",
        "App Store Connect",
        "Code Signing & Provisioning",
        "Swift Package Manager (SPM)",
        "CocoaPods"
      ]
    },
    {
      title: "Cross-Platform & Modern Web",
      iconName: "Smartphone",
      skills: [
        "React Native",
        "Expo",
        "TypeScript",
        "Next.js",
        "React 19",
        "Node.js & Express",
        "PostgreSQL & Prisma",
        "Cloudflare Workers",
        "Tailwind CSS"
      ]
    },
    {
      title: "Leadership & Methodologies",
      iconName: "Users",
      skills: [
        "Technical Ownership",
        "Architecture RFCs",
        "Code Reviews & Standards",
        "Engineering Mentorship",
        "Agile / Scrum / Sprints",
        "European Localization (i18n)",
        "Cross-Functional Alignment"
      ]
    }
  ] as SkillCategory[],

  professionalExperience: [
    {
      role: "Senior Software Engineer — iOS",
      company: "Redpin (Currencies Direct)",
      companyUrl: "https://apps.apple.com/gb/app/currencies-direct/id1094746471",
      location: "Mumbai, India",
      period: "Aug 2023 – Oct 2025",
      tagline: "Fintech / European International Money Transfer & FX iOS App",
      badge: "Flagship Enterprise Role",
      logo: "cd.png",
      bulletPoints: [
        {
          topic: "Architecture & Modularity",
          text: "Architected full-cycle iOS delivery from requirements through production using MVVM-C and Clean Architecture, reducing feature development cycle time by 25% through modular, reusable components."
        },
        {
          topic: "Payment SDKs & Secure Transactions",
          text: "Integrated and optimized enterprise Payment SDKs and secure payment gateway flows (Apple Pay, card acquisition SDKs, 3D Secure / PSD2 Strong Customer Authentication), streamlining multi-currency transfers, ensuring PCI-DSS compliance, and eliminating payment drop-off across European corridors."
        },
        {
          topic: "Performance Engineering",
          text: "Diagnosed execution bottlenecks and retain cycles using Xcode Instruments and telemetry, achieving a 35% reduction in production crashes and accelerating cold launch time by 30%."
        },
        {
          topic: "App Store & User Growth",
          text: "Drove a 22% increase in monthly active users over 12 months, contributing to an App Store rating increase from 4.3 to 4.6 stars."
        },
        {
          topic: "CI/CD & Release Automation",
          text: "Automated end-to-end testing, TestFlight validation, and App Store distribution pipelines via GitHub Actions, eliminating manual regression overhead."
        },
        {
          topic: "European Localization (i18n)",
          text: "Delivered end-to-end multi-language localization for 3 European languages, directly enabling regulatory compliance and market expansion across European financial corridors."
        },
        {
          topic: "Technical Leadership & Mentorship",
          text: "Guided cross-functional architecture reviews, defined REST API contracts with backend teams, and mentored mid/junior engineers on SOLID principles, testability, and code quality."
        }
      ]
    },
    {
      role: "Senior Software Engineer — iOS",
      company: "SUGAR Cosmetics",
      companyUrl: "https://apps.apple.com/us/app/sugar-cosmetics/id1476501793",
      location: "Mumbai, India",
      period: "Dec 2022 – Jul 2023",
      tagline: "High-Growth Consumer E-Commerce iOS App (100K+ Active Users)",
      badge: "High-Scale B2C",
      logo: "sugar.png",
      bulletPoints: [
        {
          topic: "E-Commerce Feature Delivery",
          text: "Engineered high-conversion checkout funnels, product catalog browsing, and interactive bag flows, contributing to an 18% improvement in session duration following a UI/UX revamp."
        },
        {
          topic: "Deep Memory Profiling & Optimization",
          text: "Investigated memory bloat using Xcode Allocations and Leaks Instruments; eliminated critical retain cycles, cutting application memory footprint by 40% and binary size by 15%."
        },
        {
          topic: "User Engagement & Deep Linking",
          text: "Integrated WebEngage push notification campaigns and Branch SDK deep linking, driving a 12% repeat-purchase uplift and 20% referral conversion growth."
        },
        {
          topic: "Design System & Motion",
          text: "Translated Figma design systems into pixel-perfect UIKit/SwiftUI components and implemented lightweight Lottie animations, decreasing onboarding drop-off by 10%."
        }
      ]
    },
    {
      role: "Software Developer — iOS",
      company: "PROVAB Technosoft (Tap2Health Pro)",
      companyUrl: "https://apps.apple.com/us/app/tap2health/id6446981899",
      location: "Bangalore, India (Remote)",
      period: "Apr 2022 – Nov 2022",
      tagline: "Telehealth & Doctor Consultation iOS Platform",
      badge: "Telehealth Platform",
      logo: "tap2health.png",
      bulletPoints: [
        {
          topic: "Virtual Healthcare Consultations",
          text: "Built the doctor-facing iOS app supporting real-time virtual consultations via WebSockets, multi-mode video/voice/chat, and configurable schedule management."
        },
        {
          topic: "Digital Signatures & e-Prescriptions",
          text: "Implemented secure e-prescription generation with Trustgate digital signature integration, automatically producing verified clinical PDF documents."
        },
        {
          topic: "Doctor Verification & App Store Delivery",
          text: "Implemented multi-stage credential verification workflows and successfully deployed the Tap2Health Pro application to the Apple App Store."
        }
      ]
    },
    {
      role: "Planned Career Break — Family Responsibilities",
      company: "Dedicated Personal & Continuous Upskilling Period",
      location: "India",
      period: "Nov 2019 – Mar 2022",
      tagline: "Dedicated period for significant family responsibilities during COVID-19",
      isCareerBreak: true,
      bulletPoints: [
        {
          text: "Dedicated period for significant family responsibilities during COVID-19; maintained continuous technical currency in modern Swift, SwiftUI, Swift Concurrency (async/await), and iOS architecture before returning to full-time engineering."
        }
      ]
    },
    {
      role: "Software Developer — iOS",
      company: "JAWK Softwares (Neborhud)",
      companyUrl: "https://apps.apple.com/us/app/neborhud/id1241312755",
      location: "Pune, India",
      period: "May 2017 – Oct 2019",
      tagline: "Residential Community iOS App (5,000+ Users)",
      logo: "neborhud.png",
      bulletPoints: [
        {
          topic: "Full-Lifecycle Mobile Development",
          text: "Built the Neborhud residential community iOS application from ground zero, supporting 5,000+ registered residents with events, polls, and real-time chat."
        },
        {
          topic: "Automated Unit & UI Testing",
          text: "Created comprehensive XCTest test suites achieving 60% code coverage across core business logic, reducing regression defects by 30%."
        },
        {
          topic: "Networking & App Store Operations",
          text: "Optimized networking layer with Alamofire request caching (slashing response latency by 20%), configured provisioning profiles, and managed App Store submissions."
        }
      ]
    },
    {
      role: "Software Developer — PHP & Web",
      company: "CBIL360 (InfiniteJourneys)",
      companyUrl: "https://infinitejourneys.in/",
      location: "Pune, India",
      period: "Sep 2016 – Jan 2017",
      tagline: "Online Tour & Travel Booking Application",
      logo: "Infinite-journeys.jpg",
      bulletPoints: [
        {
          text: "Engineered responsive web features, relational database operations, and REST API integrations for an online travel booking portal."
        }
      ]
    },
    {
      role: "Associate Software Developer — Web & iOS",
      company: "The Next Interface Technology (My Vote)",
      companyUrl: "https://apps.apple.com/us/app/my-vote/id757649127",
      location: "Kanpur, India",
      period: "Sep 2014 – Jul 2016",
      tagline: "Client iOS & Web Applications",
      logo: "myvote.png",
      bulletPoints: [
        {
          text: "Developed native iOS applications using Objective-C and Cocoa Touch alongside web features, achieving a 95% defect-resolution rate across 3 client production releases."
        }
      ]
    }
  ] as WorkExperience[],

  personalProjects: {
    preamble: "Independent Engineering & Product Lab (Nov 2025 – Present) • Self-directed engineering initiative following Redpin tenure, architecting and shipping commercial-grade software across native Apple platforms (Swift 6, SwiftUI), real-time cross-platform multiplayer (iOS & Android), and SaaS.",
    projects: [
      {
        title: "MacMint",
        tagline: "Fresh, Fast & Clean Mac Performance",
        category: "Native macOS Utility",
        period: "Sep 2026 – Present",
        technology: "Swift 6, SwiftUI, AppKit, macOS 14+ (Sonoma), Cloudflare Workers, Dodo Payments",
        logo: "macmint-logo.png",
        webUrl: "https://getmacmint.store/",
        bulletPoints: [
          {
            topic: "Native macOS Architecture",
            text: "Architected and built a native macOS system utility in Swift 6 and SwiftUI, providing disk space analysis, deep developer cache purging (Xcode DerivedData, CocoaPods, Homebrew, Docker), and orphaned application uninstallation."
          },
          {
            topic: "System Safety Guardrails",
            text: "Implemented strict safety guardrails (CleanerGuard) using immutable allow-lists and sandboxed file operations to prevent accidental deletion of critical system assets or user data."
          },
          {
            topic: "Hierarchical Disk Visualizer",
            text: "Built an interactive radial Sunburst visualizer for real-time hierarchical storage breakdown across system drives and directories directly in the desktop interface."
          },
          {
            topic: "Serverless Licensing & Webhooks",
            text: "Integrated a serverless Cloudflare Workers edge microservice handling cryptographically verified webhook entitlements and email magic-link license activations via Dodo Payments."
          }
        ]
      },
      {
        title: "TopBump",
        tagline: "Pay-to-Rank SaaS & B2B Leaderboard Platform",
        category: "B2B SaaS / Growth Platform",
        period: "Aug 2026 – Sep 2026",
        technology: "Next.js 16 (App Router), React 19, TypeScript, Prisma 7, PostgreSQL, Tailwind CSS v4, Vitest",
        logo: "topbump-logo.png",
        webUrl: "https://topbump.lol",
        bulletPoints: [
          {
            topic: "High-Concurrency Web Platform",
            text: "Engineered a high-concurrency ranking platform featuring a 65-category database-driven hierarchy, live bidding leaderboards, and rentable ad grid spaces."
          },
          {
            topic: "Payment Abstraction Layer",
            text: "Architected a swappable PaymentProvider abstraction layer supporting pluggable payment processors alongside zero-dependency mock simulation for automated CI test suites."
          },
          {
            topic: "B2B Admin & Domain Security",
            text: "Built an administrative portal for partner moderation, ad slot reservations, and domain safety verification, secured by cryptographically signed HTTP-only cookies."
          },
          {
            topic: "Automated Transactional Testing",
            text: "Authored Vitest automated test suites ensuring atomic database transactions and strict ledger balancing under high concurrent updates."
          }
        ]
      },
      {
        title: "DotMesh",
        tagline: "Dots & Boxes Reimagined with Cyber Neon Aesthetics",
        category: "Mobile Tactical Game",
        period: "Apr 2026 – Jul 2026",
        technology: "React Native, Expo, TypeScript, Firebase Realtime Database, App Store Connect, Google Play Console",
        logo: "dotmesh-logo.png",
        appStoreUrl: "https://apps.apple.com/my/app/dotmesh-dots-boxes-game/id6761758144",
        googlePlayUrl: "https://play.google.com/store/apps/details?id=com.legendprixai.dotmesh",
        bulletPoints: [
          {
            topic: "End-to-End Product Ownership",
            text: "Took independent end-to-end product and technical ownership from concept and UX through architecture, development, monetization, testing, store submission, and ongoing live operations."
          },
          {
            topic: "Real-Time Multiplayer Networking",
            text: "Architected a real-time multiplayer networking layer with room code matchmaking and sub-second game-state synchronization using Firebase."
          },
          {
            topic: "Adaptive Bot Heuristics",
            text: "Engineered offline vs. smart AI bot gameplay modes with scalable difficulty heuristics and custom grid-matrix state engines."
          },
          {
            topic: "UI Aesthetics & Monetization",
            text: "Designed cyber-neon UI animations, responsive haptic feedback, and an integrated StoreKit/in-app subscription model for premium themes and ad-free play."
          },
          {
            topic: "Dual App Store Release Management",
            text: "Fully managed production mobile releases across Apple App Store and Google Play, handling code signing, compliance, and App Store review requirements."
          }
        ]
      },
      {
        title: "TinyOrbit URL",
        tagline: "High-Performance SaaS URL Shortener & Telemetry Portal",
        category: "Developer Marketing SaaS",
        period: "Jan 2026 – Mar 2026",
        technology: "React 19, TypeScript, Vite, Node.js, Express, PostgreSQL, Recharts, JWT, Docker",
        logo: "tinyorbiturl-logo.png",
        webUrl: "https://tiny-orbit-url.vercel.app/",
        bulletPoints: [
          {
            topic: "Decoupled API-First SPA",
            text: "Developed an API-first Single Page Application (SPA) decoupled from a Node.js/PostgreSQL RESTful service for lightning-fast branded link generation."
          },
          {
            topic: "Real-Time Telemetry & Viz",
            text: "Built an interactive analytics dashboard with Recharts visualizing time-series click volumes, GeoIP geographic traffic distribution, and device attributions."
          },
          {
            topic: "Enterprise Security & Hardening",
            text: "Enforced enterprise security protocols: JWT authentication, Google OAuth 2.0, HTTP-only cookies, Zod schema payload validation, and IP rate limiting to prevent API abuse."
          },
          {
            topic: "REST Contract Architecture",
            text: "Designed scalable RESTful API contracts with standardized error handling, pagination, and OpenAPI-aligned schemas."
          }
        ]
      }
    ] as PersonalProject[]
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Allen House Institute, UPTU",
      year: "2013",
      score: "71%"
    },
    {
      degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
      institution: "CDAC, IACSD Pune",
      year: "2014",
      score: "71%"
    }
  ] as EducationItem[],

  certifications: [
    "Preventing Financial Crime",
    "Global Sanctions Compliance",
    "Anti-Money Laundering (AML)",
    "Anti-Bribery and Corruption (LRN)",
    "Prompt Engineering for Beginners (Udemy, 2025)"
  ]
};
