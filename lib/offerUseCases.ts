import { StudentOffer } from "./studentOffers";

interface OfferUseCaseEntry {
  intro: string;
  bullets: string[];
  closing?: string;
}

const OFFER_USE_CASES: Record<string, OfferUseCaseEntry> = {
  Webflow: {
    intro:
      "Webflow mixes a visual designer, CMS, and hosting platform so you can graduate from templates and ship production sites without babysitting code.",
    bullets: [
      "Build a living design portfolio or thesis project with real CMS collections, gated content, and launch-day analytics.",
      "Prototype client landing pages and deliver pixel-perfect exports that devs can extend instead of rebuilding.",
      "Teach yourself responsive layout fundamentals by mapping Webflow interactions to semantic HTML/CSS.",
    ],
    closing:
      "Students often pair Webflow with Figma/Framer so their capstones look and perform like agency work.",
  },
  Framer: {
    intro:
      "Framer is an end-to-end creation environment where you can storyboard, design, and publish interactive sites and product demos.",
    bullets: [
      "Ideate in high fidelity with AI components, then push live marketing pages for campus clubs or side hustles.",
      "Use Framer’s CMS to run rapid experiments on hero copy, pricing tiers, and waitlists without writing React.",
      "Bring motion studies to life by chaining interactions and micro-animations before developers touch the feature.",
    ],
    closing:
      "Non-designers lean on Framer’s AI layout tools to stand up respectable sites when budgets are nonexistent.",
  },
  "Microsoft Azure": {
    intro:
      "Azure’s student credits let you run enterprise-grade cloud services without touching a credit card.",
    bullets: [
      "Spin up virtual machines, Kubernetes clusters, or managed databases for class projects and machine-learning labs.",
      "Practice for AZ-900/AI-900 certifications by actually deploying functions, cognitive services, and pipelines.",
      "Prototype SaaS products with Azure App Service + Static Web Apps before you pick a long-term cloud.",
    ],
    closing:
      "Freelancers leverage the credits to build proof-of-concept infrastructure that convinces clients to sign retainers.",
  },
  "Alibaba Cloud": {
    intro:
      "Alibaba Cloud’s education stack gives APAC students a way to learn hyperscale infrastructure tuned for the region.",
    bullets: [
      "Host latency-sensitive apps for SEA hackathons without fighting US-based latency or compliance.",
      "Access Cloud Academy coursework and certifications so you can demonstrate multicloud fluency on resumes.",
      "Experiment with GPU workloads or data lakes at pricing that would otherwise be prohibitive.",
    ],
    closing:
      "Startups eyeing ASEAN markets can validate architecture on Alibaba before expanding to other providers.",
  },
  Namecheap: {
    intro:
      "Namecheap’s .me program hands you a branded domain so your work isn’t trapped on subdomains or portfolio services.",
    bullets: [
      "Point resumes, Linktree alternatives, or Webflow/Figma prototypes to a personal URL.",
      "Test newsletter funnels, indie SaaS ideas, or classroom blogs with professional DNS, SSL, and redirects.",
      "Learn DNS, email routing, and WHOIS privacy on a low-risk sandbox before managing client domains.",
    ],
    closing:
      "Use it alongside GitHub Pages or Netlify to keep your infrastructure bill effectively zero.",
  },
  "Bootstrap Studio": {
    intro:
      "Bootstrap Studio is a drag-and-drop desktop builder that exports clean Bootstrap markup when you need full control.",
    bullets: [
      "Mock up startup landing pages offline, tweak components, and hand dev-ready code to teammates.",
      "Pair it with the hosted site to maintain microsites or event pages with minimal DevOps overhead.",
      "Teach HTML/CSS concepts by visually editing breakpoints, grids, and utility classes.",
    ],
    closing:
      "It’s a practical bridge between WYSIWYG editing and hand-coded responsive layouts.",
  },
  "Google Gemini": {
    intro:
      "Gemini bundles AI writing, coding, NotebookLM, and storage so you can run multimodal workflows without stacking paid tools.",
    bullets: [
      "Summarize lectures, synthesize reading lists, and keep living study guides in NotebookLM with citations.",
      "Use Gemini Advanced to ideate prompts, scripts, or marketing copy, then hand off to teammates via Docs/Slides.",
      "Prototype AI agents, code snippets, or analysis workflows by chaining Gemini with Apps Script and Drive automations.",
    ],
    closing:
      "The plan doubles as a collaboration layer when student teams want AI assistance inside Google Workspace.",
  },
  "Cursor AI": {
    intro:
      "Cursor turns your IDE into an AI pair programmer optimized for shipping real features, not just coding exercises.",
    bullets: [
      "Tackle stubborn compiler errors or refactors by letting Cursor rewrite spans and explain diffs inline.",
      "Feed it documentation or codebases so you can onboard to internships and open-source projects faster.",
      "Use the fast token pool for high-stakes debugging during hackathons, then drop back to the slow lane for routine tasks.",
    ],
    closing:
      "Clubs and bootcamps lean on Cursor to teach best practices while still letting students explore new stacks.",
  },
  Figma: {
    intro:
      "Figma’s pro plan covers end-to-end product design, mulitplayer brainstorming, and developer handoff in one surface.",
    bullets: [
      "Run design critiques in FigJam, then pivot into high-fidelity UI kits and prototypes for your capstone.",
      "Extend your files with variables and Dev Mode so engineers can inspect specs and component usage.",
      "Teach workshops or freelance by collaborating live with clients, leaving audio notes, and versioning explorations.",
    ],
    closing:
      "Students often mirror their Figma libraries into Webflow or Framer for lightning-fast iteration.",
  },
  "Craft.do": {
    intro:
      "Craft blends docs, wikis, and AI summaries with a polished publishing layer, making it ideal for knowledge hubs.",
    bullets: [
      "Centralize research, meeting notes, and SOPs for student clubs or founding teams with block-level organization.",
      "Publish microsites or pitch decks straight from Craft pages so stakeholders always see the latest revision.",
      "Use the AI assistant to summarize interviews, generate outlines, or transform notes into presentable copy.",
    ],
    closing:
      "It’s especially useful when you want Notion-level structure but with native desktop performance.",
  },
  InterServer: {
    intro:
      "InterServer’s student hosting plan gives you a full cPanel stack—unlimited sites, databases, SSL—without invoices.",
    bullets: [
      "Host WordPress, Ghost, or custom PHP apps for clients and keep them online after graduation.",
      "Test automation scripts, email marketing tools, or AI site builders on a server you control end-to-end.",
      "Learn traditional sysadmin tasks (backups, staging, DNS, cron) in a safe environment.",
    ],
    closing:
      "Agencies-in-training often resell the free year as part of their first client engagements.",
  },
  "Infomaniak Education": {
    intro:
      "Infomaniak packages Swiss-grade hosting, productivity tools, and video platforms tailored for academic projects.",
    bullets: [
      "Stand up privacy-conscious web apps, streaming portals, or NGO sites that need EU data residency.",
      "Collaborate with classmates using their document suite when you want a Google alternative.",
      "Experiment with audio/video production by leveraging included kMeet and VOD services.",
    ],
    closing:
      "It’s a solid backbone for European student orgs that need to stay compliant from day one.",
  },
  "Canva Pro": {
    intro:
      "Canva Pro for Education unlocks the asset library, brand kits, and AI features so teams can stay on message.",
    bullets: [
      "Produce campaign assets, merch mocks, and pitch decks without waiting in line for design resources.",
      "Invite entire classrooms to collaborate on yearbooks, publications, or hackathon branding.",
      "Use Magic Media and background removal to generate social-ready content in minutes.",
    ],
    closing:
      "Educators also use it to template lesson materials so courses look cohesive across cohorts.",
  },
  "Grok by x.AI": {
    intro:
      "Grok is an LLM tuned for real-time context and playful output, making it handy for ideation and code scaffolding.",
    bullets: [
      "Brainstorm growth experiments, persona narratives, or pitch angles while the model injects relevant news.",
      "Automate competitor research or summarization workflows by piping Grok responses into Airtable/Notion.",
      "Use the API credits to embed Grok in Discord bots, dashboards, or portfolio projects.",
    ],
    closing:
      "Students who already max out other models use Grok as a second brain with a different tone.",
  },
  "Zight Pro": {
    intro:
      "Zight (formerly CloudApp) specializes in quick screen recordings, annotated GIFs, and visual handoffs.",
    bullets: [
      "Record async standups or design walk-throughs for distributed student teams.",
      "Send annotated bug reports to teaching assistants or clients with instant sharable links.",
      "Build micro-tutorials or onboarding clips for open-source contributors.",
    ],
    closing:
      "Product marketers rely on it for rapid experiment documentation without editing suites.",
  },
  "Dashlane Premium": {
    intro:
      "Dashlane’s edu plan protects every login, autofill, and shared credential while layering VPN and breach alerts.",
    bullets: [
      "Store client databases, SSH keys, and SaaS logins in collections segmented by project.",
      "Auto-generate unique passwords for classroom labs so reused credentials stop being a risk.",
      "Enable VPN when you’re on campus Wi-Fi, traveling, or using co-working spaces.",
    ],
    closing:
      "Founding teams also use the password health reports to pass security questionnaires.",
  },
  Roboform: {
    intro:
      "Roboform is a lightweight password manager with per-app autofill and emergency access features.",
    bullets: [
      "Set up password sharing workflows for internships without emailing CSV files.",
      "Use passphrase auditing to clean up duplicate logins before migrating to bigger vaults.",
      "Deploy Roboform Portable on lab computers where installs are locked down.",
    ],
    closing:
      "Its browser integrations make it simple for non-technical classmates to adopt.",
  },
  JetBrains: {
    intro:
      "JetBrains IDEs (IntelliJ, PyCharm, CLion, etc.) are industry workhorses with refactors, inspections, and VCS tooling baked in.",
    bullets: [
      "Practice enterprise workflows—code inspections, profiler runs, test coverage—just like a production team.",
      "Use DataSpell and Rider to hop between ML notebooks, .NET, and web stacks without context switching.",
      "Integrate with Docker, Kubernetes, and remote interpreters to mirror real dev environments.",
    ],
    closing:
      "Students who master JetBrains shortcuts transition to professional teams dramatically faster.",
  },
  "D5 Render": {
    intro:
      "D5 Render uses real-time ray tracing to create cinematic architectural visuals directly from CAD/BIM models.",
    bullets: [
      "Import Revit, SketchUp, or Rhino scenes and iterate on materials/lighting during crit sessions.",
      "Export walkthroughs or AR presentations for client pitches and jury reviews.",
      "Pair it with Unreal or Unity when you need both marketing renders and interactive experiences.",
    ],
    closing:
      "Studios love D5 for compressing days of rendering into hours without sacrificing fidelity.",
  },
  "Kapwing Pro": {
    intro:
      "Kapwing is a collaborative video/editor that runs in the browser and automates subtitles, trimming, and layout.",
    bullets: [
      "Turn lecture recordings into TikTok/Shorts recaps with auto-resize and captioning.",
      "Storyboard social ads or fundraising videos with templates and branded assets.",
      "Co-edit memes, tutorials, or highlight reels asynchronously, then export watermark-free.",
    ],
    closing:
      "It’s a favorite for marketing clubs that need to iterate quickly without Premiere licenses.",
  },
  "Autodesk Education": {
    intro:
      "Autodesk unlocks AutoCAD, Fusion 360, Revit, Maya, and more so you can master the same pipeline studios use.",
    bullets: [
      "Prototype mechanical systems or robotics enclosures in Fusion 360 with built-in CAM.",
      "Model architectural concepts in Revit, then render/VR them for juries.",
      "Animate VFX or character work in Maya for demo reels and internships.",
    ],
    closing:
      "Certification prep is easier when you have year-round access to the full suite.",
  },
  GitHub: {
    intro:
      "The Student Developer Pack is a care package of pro dev tools—domains, CI/CD, hosting, monitoring—all tied to your GitHub identity.",
    bullets: [
      "Recreate a professional toolchain (CI, error tracking, container registry) for capstone projects.",
      "Claim the partner perks (Namecheap, DigitalOcean, Educative) to build SaaS MVPs cheaply.",
      "Show mentors you understand the real ecosystem by referencing pack tools in case studies.",
    ],
    closing:
      "Approval often requires extra documentation—reach out via the contact modal if you want the fast-track playbook.",
  },
  Notion: {
    intro:
      "Notion’s pro plan powers blended docs, databases, and automations for people who outgrew Google Docs.",
    bullets: [
      "Manage a startup CRM, job hunt tracker, or research database with relations and rollups.",
      "Publish public wikis or portfolios directly from pages with password protection.",
      "Use the API to sync tasks from Jira, GitHub, or Asana into a single command center.",
    ],
    closing:
      "It’s the backbone for countless student clubs and indie agencies running lightweight ops.",
  },
  Atlassian: {
    intro:
      "Jira and Confluence teach you agile rituals the way they run inside Fortune 500 teams.",
    bullets: [
      "Plan sprints, backlog grooming, and release notes for hackathons or consulting engagements.",
      "Document decisions, runbooks, and architecture diagrams in Confluence, linking back to Jira issues.",
      "Automate workflows with native automation or integrations to Slack, GitHub, and Bitbucket.",
    ],
    closing:
      "If you can run a project in Jira as a student, onboarding to real teams is painless.",
  },
  Tableau: {
    intro:
      "Tableau Desktop lets you perform serious analytics, data storytelling, and dashboards without code.",
    bullets: [
      "Build exploratory dashboards for research papers or competitions like Viz of the Day.",
      "Embed Tableau Public visualizations into portfolios so employers see your SQL/data chops.",
      "Automate weekly reports for nonprofits or campus orgs using live data connections.",
    ],
    closing:
      "Students prepping for data roles often pair Tableau with Python notebooks for deeper dives.",
  },
  "Spotify Premium": {
    intro:
      "Spotify Premium EDU removes ads, enables downloads, and unlocks high-quality streaming.",
    bullets: [
      "Curate collaborative playlists for campus events or branded experiences.",
      "Download focus or language-learning podcasts for offline study sessions.",
      "Use Premium tracks as background in social content (where licensing allows).",
    ],
    closing:
      "It’s less about tech, more about keeping your creative energy up during marathon work sessions.",
  },
  "Microsoft Office 365": {
    intro:
      "Office 365 gives you Word, Excel, PowerPoint, Outlook, OneNote, and Teams tied to your edu account.",
    bullets: [
      "Analyze datasets with Excel Power Query, pivot tables, and macros for business courses.",
      "Co-author papers in Word with automatic citation tools and grammar checks.",
      "Host project standups in Teams with recordings and integration to Planner.",
    ],
    closing:
      "It remains the default stack for workplaces, so mastering it now pays off later.",
  },
  YNAB: {
    intro:
      "You Need A Budget champions envelope-style budgeting to help you control cash flow.",
    bullets: [
      "Allocate stipend money, freelance income, and tuition refunds so rent is always covered.",
      "Use goal tracking to pay down debt or save for gear upgrades.",
      "Sync bank feeds and categorize spending to understand lifestyle creep early.",
    ],
    closing:
      "It’s a discipline tool disguised as software—perfect for students juggling part-time work.",
  },
  "Bentley Education": {
    intro:
      "Bentley grants access to infrastructure design software like MicroStation, OpenRoads, and STAAD.",
    bullets: [
      "Design transportation networks, water systems, and smart-city simulations for engineering studios.",
      "Practice BIM workflows that align with DOT and EPC standards worldwide.",
      "Export deliverables suitable for licensure portfolios or grad-school applications.",
    ],
    closing:
      "Civil engineers use it to mirror the exact toolchain they’ll find inside large firms.",
  },
  "Zoho Survey": {
    intro:
      "Zoho Survey makes it painless to craft research-grade surveys with branching, quotas, and piping.",
    bullets: [
      "Collect user research, event feedback, or course evaluations with branded, responsive forms.",
      "Push responses into Zoho CRM, Sheets, or Slack to keep teams aligned.",
      "Use logic and scoring to run quizzes or screening questionnaires.",
    ],
    closing:
      "It’s great for marketing students validating ideas before spending on ads.",
  },
  SurveyHero: {
    intro:
      "SurveyHero focuses on beautiful, mobile-ready surveys plus GDPR compliance.",
    bullets: [
      "Run customer discovery interviews and export clean charts for decks.",
      "Embed forms on landing pages to capture interest without redirecting visitors.",
      "Use multi-language support for international research cohorts.",
    ],
    closing:
      "UX teams love how easy it is to keep surveys on brand without CSS hacking.",
  },
  Jotform: {
    intro:
      "Jotform combines drag-and-drop forms, payments, PDF builders, and approvals.",
    bullets: [
      "Collect hackathon signups, sponsorship leads, or freelance briefs with conditional logic.",
      "Automate PDF contracts and send them to signers instantly.",
      "Route submissions through approval flows so teammates can triage requests.",
    ],
    closing:
      "Pair it with Airtable or Zapier to power automations for small agencies.",
  },
  Unity: {
    intro:
      "Unity is a real-time 3D engine that powers games, simulations, AR/VR, and cinematics.",
    bullets: [
      "Prototype indie games, XR exhibits, or interactive training modules.",
      "Leverage the Asset Store and timeline tools to ship polished demos quickly.",
      "Integrate sensor/input data for robotics, architecture, or med-tech simulations.",
    ],
    closing:
      "The edu license is identical to pro, so your student projects can scale into commercial releases.",
  },
  Sketch: {
    intro:
      "Sketch is a macOS-first UI design tool beloved for vector precision and plugin extensibility.",
    bullets: [
      "Design app interfaces with shared libraries and symbol overrides for consistent systems.",
      "Leverage plugins like Anima or Zeplin for handoff to developers.",
      "Run design sprints offline without relying on browser-based tools.",
    ],
    closing:
      "Agencies still expect designers to understand Sketch even if they’ve moved to Figma.",
  },
  "Perplexity Pro": {
    intro:
      "Perplexity is an AI answer engine that cites sources and browses the live web in one shot.",
    bullets: [
      "Do literature reviews or market scans without juggling ten tabs and missing citations.",
      "Generate outlines for essays, scripts, or growth memos with inline references.",
      "Use Copilot mode to ask iterative questions until you hit the exact insight.",
    ],
    closing:
      "It’s ideal when you need reliable answers faster than search + manual note-taking can deliver.",
  },
  ZW3D: {
    intro:
      "ZW3D is a hybrid CAD/CAM system with solid, surface, and machining all under one license.",
    bullets: [
      "Model complex products, then generate toolpaths without hopping between apps.",
      "Use mold design features to prototype manufacturing workflows.",
      "Collaborate on mechanical assemblies with BOM management built in.",
    ],
    closing:
      "Students aiming for manufacturing roles get a head start by mastering ZW3D’s all-in-one flow.",
  },
  "Amazon Prime": {
    intro:
      "Prime Student is logistics plus entertainment: fast shipping, Prime Video, Reading, and Music.",
    bullets: [
      "Order components, studio gear, or textbooks with reliable two-day delivery.",
      "Relax with Prime Video originals or use them for culture-analysis coursework.",
      "Borrow eBooks and audiobooks for research or language practice.",
    ],
    closing:
      "Small perks like Grubhub+ and photo storage sweeten the deal for busy semesters.",
  },
  Fetch: {
    intro:
      "Fetch is a receipt-scanning rewards app that quietly subsidizes grocery runs.",
    bullets: [
      "Snap receipts and redeem points for Amazon, Visa, or classroom supplies.",
      "Use referral bonuses to fund club pizza nights or hackathon snacks.",
      "Track spending trends over time if you want a lightweight budget view.",
    ],
    closing:
      "It’s free money for anyone disciplined enough to scan every receipt.",
  },
  Kickhost: {
    intro:
      "Kickhost targets portfolio hosting with DDoS mitigation and one-click stacks.",
    bullets: [
      "Deploy Node, Python, or PHP apps with managed SSL and firewalls.",
      "Sandbox client sites before pushing to long-term infrastructure.",
      "Use staging environments to iterate on speed and SEO experiments.",
    ],
    closing:
      "It’s a nice training ground for devops fundamentals without AWS complexity.",
  },
  Axure: {
    intro:
      "Axure RP is the OG tool for interactive prototypes, flows, and product specs.",
    bullets: [
      "Create high-fidelity prototypes with conditional logic and data-driven widgets.",
      "Document requirements, annotations, and accessibility notes directly in the file.",
      "Publish password-protected prototypes with stakeholder feedback tracking.",
    ],
    closing:
      "UX researchers still rely on Axure when micro-interactions need to feel real.",
  },
  Basecamp: {
    intro:
      "Basecamp is a calm project management suite mixing message boards, todos, docs, and schedules.",
    bullets: [
      "Coordinate agency clients or student orgs without noisy Slack channels.",
      "Run campfire chats, hill charts, and automatic check-ins for async transparency.",
      "Store briefs, files, and approvals where everyone actually reads them.",
    ],
    closing:
      "It’s excellent for people who want less ceremony than Jira but more structure than email.",
  },
  Altair: {
    intro:
      "Altair provides simulation powerhouses like HyperWorks, Inspire, and Flux for CAE workloads.",
    bullets: [
      "Run topology optimization to lightweight automotive and aerospace parts.",
      "Simulate electromagnetics, crash, or CFD scenarios before touching hardware.",
      "Automate studies with Altair ThinkLabs to explore thousands of permutations.",
    ],
    closing:
      "Research teams use it to validate ideas before applying for serious grant money.",
  },
  Lucidchart: {
    intro:
      "Lucidchart makes it painless to map systems, flows, and org charts collaboratively.",
    bullets: [
      "Diagram service architectures or API flows for technical documentation.",
      "Build stakeholder maps and OKR trees for consulting engagements.",
      "Co-edit diagrams with simultaneous cursors, comments, and integrations.",
    ],
    closing:
      "Pair it with Lucidspark or FigJam for workshop-to-document continuity.",
  },
  Bitbucket: {
    intro:
      "Bitbucket is Atlassian’s Git hosting with deep Jira, Pipelines, and Opsgenie hooks.",
    bullets: [
      "Host private repos, enforce branch permissions, and connect commits to Jira tickets.",
      "Use Pipelines to run CI/CD with zero extra tooling.",
      "Mirror repos to GitHub/GitLab so you can collaborate across ecosystems.",
    ],
    closing:
      "It’s perfect for teams already living inside Atlassian tools.",
  },
  Kickresume: {
    intro:
      "Kickresume combines drag-and-drop resume builders with AI phrasing and design presets.",
    bullets: [
      "Generate tailored bullet points for internships using verified templates.",
      "Export ATS-friendly PDFs plus personal websites in minutes.",
      "Reverse-engineer how top companies frame achievements and mimic that tone.",
    ],
    closing:
      "Students also lean on its cover letter and personal statement assistance for scholarship apps.",
  },
  "Tower Pro": {
    intro:
      "Tower is a Git client that turns complex Git commands into a polished GUI.",
    bullets: [
      "Visualize branches, cherry-picks, and interactive rebases without memorizing flags.",
      "Stage hunks, craft commits, and resolve conflicts with clear diff views.",
      "Teach Git fundamentals to new contributors in a friendlier interface.",
    ],
    closing:
      "It’s a confidence booster for designers or PMs who need to collaborate in codebases.",
  },
  Asana: {
    intro:
      "Asana orchestrates work across teams with timelines, workload views, and automation.",
    bullets: [
      "Run product roadmaps, GTM checklists, or content calendars across departments.",
      "Automate recurring tasks (standups, QA, reporting) so nothing slips.",
      "Visualize dependencies and critical paths before presenting to stakeholders.",
    ],
    closing:
      "Student agencies use it to mirror the project hygiene of top consultancies.",
  },
  "Lumion Pro": {
    intro:
      "Lumion is a visualization engine for architects who need photoreal renders fast.",
    bullets: [
      "Turn Revit/SketchUp models into cinematic imagery with drag-and-drop materials and atmospheric effects.",
      "Produce VR panoramas or walkthroughs to wow juries and clients.",
      "Iterate on lighting/weather/time-of-day during live critiques.",
    ],
    closing:
      "It’s the go-to when you want ‘wow’ without chaotic render farm setups.",
  },
  "Miro AI": {
    intro:
      "Miro AI boosts the collaborative whiteboard with summarization, clustering, and idea generation.",
    bullets: [
      "Run remote workshops, then have AI cluster sticky notes into themes instantly.",
      "Auto-generate mind maps, retros, or frameworks from text prompts.",
      "Summarize sprawling boards into exec-ready briefs.",
    ],
    closing:
      "It’s a lifesaver for PMs facilitating design sprints with distributed classmates.",
  },
  "Anthropic Claude": {
    intro:
      "Claude offers constitutional AI with large context windows, perfect for nuanced reasoning.",
    bullets: [
      "Feed entire codebases or policy docs to get structured analyses and rewrites.",
      "Use Claude to critique essays, ethical frameworks, or UX copy with balanced tone.",
      "Chain-of-thought outputs help you understand how the model reached answers.",
    ],
    closing:
      "Great when you need deliberative responses rather than flashy one-liners.",
  },
  OpenAI: {
    intro:
      "OpenAI’s credits unlock GPT-4o, Assistants API, and Whisper so you can build intelligent apps.",
    bullets: [
      "Prototype chatbots, copilots, or automations that live on Discord, Slack, or custom sites.",
      "Transcribe interviews or lectures with Whisper, then summarize them instantly.",
      "Fine-tune models or use function-calling to integrate AI into production workflows.",
    ],
    closing:
      "It’s table stakes for anyone pursuing AI product roles.",
  },
  "Suno AI": {
    intro:
      "Suno creates AI-generated music with vocals and stems from simple prompts.",
    bullets: [
      "Score short films, podcasts, or ads without hiring composers.",
      "Experiment with genre mashups for social content or performance art.",
      "Teach music theory by iterating on chord progressions and lyrics live.",
    ],
    closing:
      "Creators love it for fast ideation before heading to full studios.",
  },
  "Manus AI": {
    intro:
      "Manus is an enterprise writing assistant focused on research papers and long-form documents.",
    bullets: [
      "Organize citations, annotate PDFs, and synthesize literature reviews in one workspace.",
      "Transform rough drafts into publication-ready prose with tone controls.",
      "Collaborate with advisors by sharing timelines, revisions, and structured outlines.",
    ],
    closing:
      "It’s especially useful for grad students juggling multiple manuscripts.",
  },
  Spline: {
    intro:
      "Spline lets you design and publish interactive 3D assets directly in the browser.",
    bullets: [
      "Create 3D hero sections, icons, and microsites without Blender’s learning curve.",
      "Animate states for web apps and export WebGL embeds ready for production.",
      "Use real-time collaboration to co-create scenes with artists and developers.",
    ],
    closing:
      "Product designers use it to make their case studies feel alive.",
  },
  "Keycreator CAD": {
    intro:
      "KeyCreator is direct-modeling CAD ideal for tooling, fixtures, and reverse engineering.",
    bullets: [
      "Modify imported geometry without parametric history getting in the way.",
      "Design jigs and fixtures for machining capstones.",
      "Collaborate on assemblies and tolerance studies faster than traditional CAD.",
    ],
    closing:
      "Manufacturing students appreciate how forgiving it is when iterating fast.",
  },
  "Altium Designer": {
    intro:
      "Altium is a flagship PCB design suite with unified schematic, layout, and MCAD workflows.",
    bullets: [
      "Design multilayer boards with controlled impedance, differential pairs, and rigid-flex.",
      "Collaborate with mechanical teams via native MCAD co-design.",
      "Generate manufacturing outputs (Gerbers, BOM, pick-and-place) in one click.",
    ],
    closing:
      "Hardware startups use it to go from napkin to fabrication without switching tools.",
  },
  "Beautiful.AI": {
    intro:
      "Beautiful.ai automates slide design so decks look polished without manual alignment.",
    bullets: [
      "Transform raw research or investor updates into slick narratives in minutes.",
      "Apply brand controls so teammates can’t go rogue with colors and fonts.",
      "Use analytics to see which slides get the most attention.",
    ],
    closing:
      "It’s perfect for founders who need constant storytelling with zero design headcount.",
  },
  "Graphpad Prism": {
    intro:
      "GraphPad Prism is the gold standard for biostats, nonlinear regression, and publication-quality charts.",
    bullets: [
      "Analyze lab results with trusted statistical tests and confidence intervals.",
      "Generate graphs tailored for scientific journals without touching Illustrator.",
      "Document methods and interpretations alongside the dataset for reproducibility.",
    ],
    closing:
      "Biomedical researchers swear by it for grant submissions and posters.",
  },
  Rayon: {
    intro:
      "Rayon is a collaborative tool for space planning and architectural diagrams in the browser.",
    bullets: [
      "Sketch floor plans, annotate occupancy, and calculate areas with live constraints.",
      "Work with stakeholders in real time without sending heavy CAD files.",
      "Export DXF or PDF deliverables directly into CAD/BIM workflows.",
    ],
    closing:
      "Interior designers and urban planners love the mix of speed and accuracy.",
  },
  "PTC Creo": {
    intro:
      "Creo is a parametric CAD powerhouse used for complex products and generative design.",
    bullets: [
      "Model assemblies with top-down design, family tables, and surfacing features.",
      "Simulate structural, thermal, or motion studies with integrated tools.",
      "Explore additive manufacturing workflows using lattice and optimization modules.",
    ],
    closing:
      "It’s a direct line to the toolchains at automotive and aerospace giants.",
  },
  JMP: {
    intro:
      "JMP (by SAS) is interactive statistics software beloved in labs and Six Sigma programs.",
    bullets: [
      "Run design of experiments, regression, and multivariate analyses with visual feedback.",
      "Link raw data to dashboards that update as you explore hypotheses.",
      "Automate routine analyses using scripts once you’ve built a workflow.",
    ],
    closing:
      "Great for quality engineering and biostatistics students who need more than spreadsheets.",
  },
  "Affinity Designer": {
    intro:
      "Affinity Designer is a vector/raster hybrid for branding, illustration, and interface assets.",
    bullets: [
      "Create logos, icon sets, and UI mockups with pro-level precision.",
      "Switch between vector and pixel personas to add textures and grain.",
      "Work offline on massive canvases without subscription overhead.",
    ],
    closing:
      "It’s a legit replacement for Illustrator in most workflows.",
  },
  "Affinity Photo": {
    intro:
      "Affinity Photo delivers Photoshop-grade retouching, compositing, and HDR tools in a one-time license.",
    bullets: [
      "Retouch portraits, clean product shots, or build surreal composites.",
      "Batch process assets for social campaigns with macros and LUTs.",
      "Edit RAW files with full control over tone mapping and layers.",
    ],
    closing:
      "Students who can’t justify Adobe fees use Affinity to stay competitive.",
  },
  "Affinity Publisher": {
    intro:
      "Affinity Publisher handles long-form layout—magazines, resumes, reports—with modern performance.",
    bullets: [
      "Design zines, portfolios, or annual reports with master pages and Data Merge.",
      "Link directly to Affinity Designer/Photo files via StudioLink for seamless edits.",
      "Export press-ready PDFs and digital experiences without exports hopping.",
    ],
    closing:
      "Schools use it to teach print fundamentals without locking students into subscriptions.",
  },
  "Meshy AI": {
    intro:
      "Meshy converts text/images to 3D assets with AI, plus provides retopo and texture tools.",
    bullets: [
      "Prototype game props or AR filters in minutes instead of days.",
      "Generate mood boards and iterate on aesthetics before committing to manual modeling.",
      "Use the discounted plan to export clean meshes into Blender, Unreal, or Spline.",
    ],
    closing:
      "Indie studios rely on it to keep production nimble while budgets are tiny.",
  },
};

const fallbackEntry = (offer: StudentOffer): OfferUseCaseEntry => ({
  intro: `${offer.provider} helps you push ${offer.category.toLowerCase()} work further without burning cash.`,
  bullets: [
    `Use it to accelerate assignments, freelancing gigs, or MVPs that normally require premium software.`,
    `Explore advanced workflows now so you can walk into internships already fluent.`,
  ],
  closing: "Treat the edu access as a lab—experiment aggressively while it's free.",
});

export const buildUseCaseNarrative = (offer: StudentOffer | null) => {
  if (!offer) {
    return {
      heading: "Use cases unavailable",
      body: "Select an offer to see curated use cases.",
    };
  }

  const entry = OFFER_USE_CASES[offer.provider] ?? fallbackEntry(offer);
  const bulletBlock = entry.bullets?.length
    ? entry.bullets.map((item) => `• ${item}`).join("\n")
    : "";
  const segments = [entry.intro, bulletBlock, entry.closing]
    .filter(Boolean)
    .join("\n\n");

  return {
    heading: `${offer.provider} — real-world use cases`,
    body: segments,
  };
};
