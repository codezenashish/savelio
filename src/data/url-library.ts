import type { CategoryId } from "@/data/sidebar";

export interface DirectoryUrl {
  id: string;
  href: string;
}

export interface UrlEntry extends DirectoryUrl {
  category: Exclude<CategoryId, "all">;
}

// Keep URL entries grouped by the directory categories so additions stay easy to review.
export const componentLibraries: DirectoryUrl[] = [
  {"id": "uisfx", "href": "https://uisfx.com"},
  {"id": "css-buttons", "href": "https://cssbuttons.io/"},
  {"id": "uiverse", "href": "https://uiverse.io/"},
  {"id": "design-spells", "href": "https://www.designspells.com/"},
  {"id": "codrops", "href": "https://tympanus.net/codrops/"},
  {"id": "uizard", "href": "https://app.uizard.io/prototypes"},
  {"id": "originkit", "href": "https://www.originkit.dev/"},
  {"id": "shadcnblocks", "href": "https://www.shadcnblocks.com/theme/vercel"},
  {"id": "kugiri", "href": "https://edoardolunardi.github.io/kugiri/"},
  {"id": "vaul", "href": "https://vaul.emilkowal.ski/"},
  {"id": "componentry", "href": "https://componentry.dev/"},
  {"id": "kobra-systems", "href": "https://kobra.systems/components/checkbox"},
  {"id": "aceternity-ui", "href": "https://ui.aceternity.com/"},
  {"id": "uiarc", "href": "https://uiarc.dev/"},
];

export const utilityLibraries: DirectoryUrl[] = [
  {"id": "unavatar", "href": "https://unavatar.io"},
  {"id": "mem-ai", "href": "https://v2.mem.ai/notes"},
  {"id": "notion", "href": "https://www.notion.so/"},
  {"id": "obsidian", "href": "https://obsidian.md/"},
  {"id": "tldraw", "href": "https://www.tldraw.com/"},
  {"id": "excalidraw", "href": "https://excalidraw.com/"},
  {"id": "readme-so", "href": "https://readme.so/"},
  {"id": "keybr", "href": "https://www.keybr.com/"},
  {"id": "monkeytype", "href": "https://monkeytype.com/"},
  {"id": "frontend-mentor", "href": "https://www.frontendmentor.io/home"},
  {"id": "codedex", "href": "https://www.codedex.io/"},
  {"id": "medium", "href": "https://medium.com/"},
  {"id": "mangapark", "href": "https://mangapark.net/"},
  {"id": "tailwind-design-system-blog", "href": "https://www.davidhaz.blog/posts/tailwind-design-system"},
  {"id": "linkedin", "href": "https://www.linkedin.com/feed/"},
  {"id": "x-twitter", "href": "https://x.com/home"},
  {"id": "youtube", "href": "https://www.youtube.com/"},
  {"id": "reddit", "href": "https://www.reddit.com/"},
  {"id": "instagram", "href": "https://www.instagram.com/"},
  {"id": "github-profile", "href": "https://github.com/codezenashish"},
  {"id": "stackoverflow", "href": "https://stackoverflow.com/"},
  {"id": "peerlist-scroll", "href": "https://peerlist.io/scroll"},
  {"id": "instant-domain-search", "href": "https://instantdomainsearch.com/?q=vyrn."},
  {"id": "whatsapp", "href": "https://web.whatsapp.com/"},
  {"id": "gmail", "href": "https://mail.google.com/"},
  {"id": "google-docs", "href": "https://docs.google.com/document/u/0/"},
  {"id": "google-sheets", "href": "https://docs.google.com/spreadsheets/u/0/"},
  {"id": "google-contacts", "href": "https://contacts.google.com/"},
  {"id": "google-photos", "href": "https://photos.google.com/"},
  {"id": "davidhaz-blog", "href": "https://www.davidhaz.blog/"},
  {"id": "tweakcn", "href": "https://tweakcn.com/editor/theme?p=marketing"},
  {"id": "interview-cake", "href": "https://www.interviewcake.com/javascript-interview-questions"},
  {"id": "youtype", "href": "https://youtype.app/courses"},
  {"id": "github-readme-grid", "href": "https://gfg.ryanaque.com/?username=codezenashish&cols=8&width=640&limit=40&gap=8&shape=square"},
];

export const aiTools: DirectoryUrl[] = [
  {"id": "leonardo-ai", "href": "https://leonardo.ai/"},
  {"id": "imagineart-image", "href": "https://www.imagine.art/"},
  {"id": "ideogram", "href": "https://ideogram.ai/"},
  {"id": "suno", "href": "https://suno.com/"},
  {"id": "pictory-ai", "href": "https://app.pictory.ai/"},
  {"id": "captions-ai", "href": "https://desktop.captions.ai/"},
  {"id": "deepseek", "href": "https://chat.deepseek.com/"},
  {"id": "grok", "href": "https://grok.com/"},
  {"id": "chatgpt", "href": "https://chatgpt.com/"},
  {"id": "microsoft-copilot", "href": "https://copilot.microsoft.com/"},
  {"id": "claude", "href": "https://claude.ai/"},
  {"id": "perplexity", "href": "https://www.perplexity.ai/"},
  {"id": "github-copilot", "href": "https://github.com/copilot"},
  {"id": "google-gemini", "href": "https://gemini.google.com/app"},
  {"id": "duck-ai", "href": "https://duck.ai/"},
  {"id": "design-md", "href": "https://designmd.me/"},
];

export const developmentTools: DirectoryUrl[] = [
  {"id": "replit", "href": "https://replit.com/"},
  {"id": "vscode-web", "href": "https://vscode.dev/"},
  {"id": "stackblitz", "href": "https://stackblitz.com/"},
  {"id": "bolt-new", "href": "https://bolt.new/"},
  {"id": "v0-dev", "href": "https://v0.dev/"},
  {"id": "lovable", "href": "https://lovable.dev/"},
  {"id": "vite", "href": "https://vite.dev/"},
  {"id": "framer", "href": "https://framer.com/"},
];

export const uiLibraries: DirectoryUrl[] = [
  {"id": "react", "href": "https://react.dev/"},
  {"id": "tailwindcss", "href": "https://tailwindcss.com/"},
  {"id": "chartjs", "href": "https://www.chartjs.org/"},
  {"id": "svelte", "href": "https://svelte.dev/"},
  {"id": "jquery", "href": "https://jquery.com/"},
  {"id": "base-ui", "href": "https://base-ui.com/react/handbook/customization"},
  {"id": "park-ui", "href": "https://park-ui.com/"},
];

export const animationLibraries: DirectoryUrl[] = [
  {"id": "motion", "href": "https://motion.dev/"},
  {"id": "gsap", "href": "https://gsap.com/"},
  {"id": "thinking-orbs", "href": "https://orbs.jakubantalik.com/"},
  {"id": "morphicons", "href": "https://www.morphicons.com/"},
  {"id": "morphrig", "href": "https://morphrig.dev/docs/what-morphing-is"},
  {"id": "motion-primitives", "href": "https://motion-primitives.com/docs/border-trail"},
  {"id": "amicro", "href": "https://amicro.vercel.app/"},
  {"id": "animations-dev", "href": "https://animations.dev/"},
];

export const componentLibrarySites: DirectoryUrl[] = [
  {"id": "react-bits", "href": "https://www.reactbits.dev/"},
];

export const backendServices: DirectoryUrl[] = [
  {"id": "nodejs", "href": "https://nodejs.org/"},
  {"id": "expressjs", "href": "https://expressjs.com/"},
  {"id": "mongodb", "href": "https://www.mongodb.com/"},
  {"id": "postgresql", "href": "https://www.postgresql.org/"},
  {"id": "supabase", "href": "https://supabase.com/dashboard/account/tokens"},
  {"id": "firebase", "href": "https://firebase.google.com/"},
  {"id": "vercel", "href": "https://vercel.com/"},
  {"id": "netlify", "href": "https://www.netlify.com/"},
  {"id": "netlify-app", "href": "https://app.netlify.com/teams/codezenashish/projects"},
  {"id": "mongodb-cloud", "href": "https://cloud.mongodb.com/v2/69a4700b13387665800599ae#/explorer/69a4706b361756b865fae654/learning-node/users/find"},
  {"id": "posthog", "href": "https://posthog.com/"},
  {"id": "resend", "href": "https://resend.com/emails"},
  {"id": "podman", "href": "https://podman.io/"},
  {"id": "hoppscotch", "href": "https://hoppscotch.io/"},
];

export const visualLibraries: DirectoryUrl[] = [
  {"id": "dribbble", "href": "https://dribbble.com/"},
  {"id": "behance", "href": "https://www.behance.net/"},
  {"id": "mobbin", "href": "https://mobbin.com/browse/ios/apps"},
  {"id": "pinterest", "href": "https://in.pinterest.com/"},
  {"id": "godly", "href": "https://godly.website/"},
  {"id": "muzli", "href": "https://muz.li/"},
  {"id": "awwwards", "href": "https://www.awwwards.com/"},
  {"id": "landing-love", "href": "https://www.landing.love/categories/os/"},
  {"id": "hdqwalls", "href": "https://hdqwalls.com/"},
  {"id": "wallpaperscraft", "href": "https://wallpaperscraft.com/"},
  {"id": "unsplash", "href": "https://unsplash.com/"},
  {"id": "pexels", "href": "https://www.pexels.com/"},
  {"id": "metalforge", "href": "https://metalforge.xyz/?"},
  {"id": "fragcoord", "href": "https://fragcoord.xyz/explore?view=shaders"},
];

export const iconLibraries: DirectoryUrl[] = [
  {"id": "remix-icon", "href": "https://remixicon.com/"},
  {"id": "font-awesome", "href": "https://fontawesome.com/icons"},
  {"id": "flaticon", "href": "https://www.flaticon.com/free-icons/favicon"},
  {"id": "avatune", "href": "https://www.avatune.dev/"},
  {"id": "svgl", "href": "https://svgl.app/directory/design"},
];

export const fontLibraries: DirectoryUrl[] = [
  {"id": "google-fonts", "href": "https://fonts.google.com/"},
  {"id": "calligraph", "href": "https://calligraph.raphaelsalaja.com/compare"},
];

export const inspirationLibraries: DirectoryUrl[] = [
  {"id": "apple-airpods-pro", "href": "https://www.apple.com/airpods-pro/"},
  {"id": "dogstudio", "href": "https://dogstudio.co/"},
  {"id": "active-theory", "href": "https://activetheory.net/"},
  {"id": "ozone-pro", "href": "https://ozone.pro/"},
  {"id": "infinity-castle", "href": "https://thre4dripper.github.io/Infinity-Castle-ThreeJs/?seed=99&q=auto&motion=100&pace=100&weather=auto&mist=100&density=100&music=0&sfx=0&light=100&inv=0&ghost=0"},
  {"id": "deluxe-saloon", "href": "https://deluxesalon.in/"},
  {"id": "idem-studio", "href": "https://www.idemstudio.in/"},
  {"id": "404s-design", "href": "https://www.404s.design/"},
  {"id": "footer-design", "href": "https://www.footer.design/"},
  {"id": "developer-portfolios", "href": "https://6e87v.hatchboxapp.com/"},
  {"id": "zero-university", "href": "https://why.zero.university/"},
  {"id": "santioni-spirits", "href": "https://santionispirits.com/"},
  {"id": "kage-monar", "href": "https://www.monarcheats.lol/kage"},
  {"id": "perfolios", "href": "https://perfolios.shwn.design/"},
  {"id": "portfoliofy", "href": "https://portfoliofy.io/"},
  {"id": "ralcon-template", "href": "https://widyabayu.com/templates/ralcon"},
  {"id": "abtest-design", "href": "https://abtest.design/tests/benefits-driven-vs-emotional-appeal-messaging"},
];

export const designEngineerPortfolios: DirectoryUrl[] = [
  {"id": "adina-hawaldar", "href": "https://www.adinaa.me/"},
  {"id": "rbp-portfolio", "href": "https://github.com/DavidHDev/rbp-portfolio"},
  {"id": "rinkit-adhana", "href": "https://rinkitadhana.com/"},
  {"id": "jdhruv-dev", "href": "https://jdhruv.dev/"},
  {"id": "samworks", "href": "https://samworks.vercel.app/"},
  {"id": "emil-kowalski", "href": "https://emilkowal.ski/"},
  {"id": "paco-coursey", "href": "https://paco.me/"},
];

export const URL_LIBRARY: Record<Exclude<CategoryId, "all">, DirectoryUrl[]> = {
  "components": componentLibraries,
  "utilities": utilityLibraries,
  "ai-tools": aiTools,
  "build": developmentTools,
  "ui-libraries": uiLibraries,
  "motion": animationLibraries,
  "component-libraries": componentLibrarySites,
  "backend-database": backendServices,
  "visuals": visualLibraries,
  "icons-assets": iconLibraries,
  "fonts-typography": fontLibraries,
  "inspiration": inspirationLibraries,
  "design-engineers": designEngineerPortfolios,
};

export const URL_ENTRIES = Object.entries(URL_LIBRARY).flatMap(([category, urls]) =>
  urls.map((url) => ({ ...url, category: category as Exclude<CategoryId, "all"> })),
);
