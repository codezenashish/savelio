import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config({ path: ".env.local" });

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error("❌ Missing DATABASE_URL in .env.local");
  process.exit(1);
}

const sql = postgres(dbUrl, { prepare: false });

function cleanDomainTitle(urlStr) {
  try {
    const parsed = new URL(urlStr.startsWith("http") ? urlStr : `https://${urlStr}`);
    let host = parsed.hostname.replace(/^www\./, "");
    const parts = host.split(".");
    const name = parts[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  } catch {
    return urlStr;
  }
}

function cleanHtmlTitle(rawTitle) {
  if (!rawTitle) return "";
  let title = rawTitle.replace(/\r?\n|\r/g, " ").trim();
  // Decode common HTML entities
  title = title
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
  return title;
}

function cleanDescription(rawDesc) {
  if (!rawDesc) return "";
  let desc = rawDesc.replace(/\r?\n|\r/g, " ").trim();
  desc = desc
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
  return desc.slice(0, 240);
}

async function fetchMetadata(url) {
  const targetUrl = url.startsWith("http") ? url : `https://${url}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return null;
    }

    const html = await response.text();

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? cleanHtmlTitle(titleMatch[1]) : "";

    // Extract description
    const descMatch =
      html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i) ||
      html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:description["']/i);

    const description = descMatch ? cleanDescription(descMatch[1]) : "";

    return { title, description };
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}

// Curated fallbacks for key tools/sites if they block scraping
const KNOWN_METADATA = {
  "stripe.com": {
    title: "Stripe — Financial Infrastructure for the Internet",
    description: "Online payment processing and financial services for internet businesses.",
  },
  "ui.shadcn.com": {
    title: "shadcn/ui — Re-usable Component Library",
    description: "Beautifully designed components that you can copy and paste into your apps.",
  },
  "fontshare.com": {
    title: "Fontshare — Free Quality Fonts Service",
    description: "Free fonts service launched by the Indian Type Foundry offering high quality typography.",
  },
  "cutnora.com": {
    title: "Cutnora — Creative Design Showcase",
    description: "Modern showcase for high-craft digital products, interactions, and web design.",
  },
  "uisfx.co": {
    title: "UI SFX — Sound Effects for Web & Mobile",
    description: "Carefully designed sound effects and auditory feedback library for modern UI interactions.",
  },
  "cssbuttons.app": {
    title: "CSS Buttons — Curated Button Library",
    description: "Over 100 modern CSS button styles, hover states, and animations ready to copy.",
  },
  "uiverse.io": {
    title: "Uiverse — Open-Source UI Components",
    description: "Community-built library of HTML & CSS UI elements including buttons, cards, and loaders.",
  },
  "designspells.com": {
    title: "Design Spells — Micro-interactions & Craft",
    description: "Curated collection of delightful micro-interactions and design details in real products.",
  },
  "tympanus.net": {
    title: "Codrops — Creative Front-End & Web Design",
    description: "Fueling web creativity since 2009 with inspiring tutorials, experiments, and references.",
  },
  "uizard.io": {
    title: "Uizard — AI-Powered UI Design Tool",
    description: "Design mobile apps, wireframes, and website mockups in minutes using AI.",
  },
  "originkit.dev": {
    title: "Origin Kit — Minimal UI Design System",
    description: "Beautiful foundational UI components and tokens built for modern web applications.",
  },
  "unavatar.io": {
    title: "Unavatar — Universal Avatar & Favicon API",
    description: "Universal avatar and favicon API by username, email, or domain name.",
  },
  "notion.so": {
    title: "Notion — Connected Workspace",
    description: "All-in-one workspace for notes, tasks, wikis, project management, and team docs.",
  },
  "obsidian.md": {
    title: "Obsidian — Sharpen Your Thinking",
    description: "Private and flexible note-taking app that adapts to the way that you think.",
  },
  "tldraw.com": {
    title: "tldraw — Collaborative Digital Whiteboard",
    description: "Very good instant collaborative whiteboard tool for sketching and diagrams.",
  },
  "excalidraw.com": {
    title: "Excalidraw — Hand-Drawn Style Whiteboard",
    description: "Virtual collaborative whiteboard tool that lets you easily sketch hand-drawn diagrams.",
  },
  "readme.so": {
    title: "Readme.so — Best Markdown README Builder",
    description: "Interactive visual editor to create beautiful project READMEs in seconds.",
  },
  "keybr.com": {
    title: "Keybr — Touch Typing Speed Practice",
    description: "Touch typing trainer that uses statistics and touch algorithms to boost typing speed.",
  },
  "monkeytype.com": {
    title: "Monkeytype — Minimalist Typing Test",
    description: "A customizable, minimalist typing speed test tool with live test modes and stats.",
  },
  "frontendmentor.io": {
    title: "Frontend Mentor — Real-World Coding Challenges",
    description: "Improve your front-end skills by building realistic projects from design files.",
  },
  "codedex.io": {
    title: "Codédex — Gamified Coding Platform",
    description: "Learn Python, HTML, CSS, JavaScript, and React through engaging coding adventures.",
  },
  "resend.com": {
    title: "Resend — Email API for Developers",
    description: "The best way to reach humans instead of the spam folder with modern email infrastructure.",
  },
  "base-ui.com": {
    title: "Base UI — Unstyled Accessible Components",
    description: "Unstyled React UI components for building robust, accessible design systems.",
  },
  "framer.com": {
    title: "Framer — Interactive Site Builder",
    description: "Design and publish high-performance websites with canvas interactions and animations.",
  },
};

function getDomainKey(url) {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

async function run() {
  console.log("🚀 Starting titles and descriptions enrichment...");

  const links = await sql`SELECT id, url, title, description, category FROM links`;
  console.log(`📋 Found ${links.length} links in database.`);

  let updatedCount = 0;

  // Process in batches of 5 concurrent requests
  const batchSize = 5;
  for (let i = 0; i < links.length; i += batchSize) {
    const batch = links.slice(i, i + batchSize);

    await Promise.all(
      batch.map(async (row) => {
        const domain = getDomainKey(row.url);
        let finalTitle = row.title;
        let finalDesc = row.description;

        // Check if known metadata exists
        const known = KNOWN_METADATA[domain];
        if (known) {
          finalTitle = known.title;
          finalDesc = known.description;
        } else {
          // Attempt metadata fetch if description is missing or title is raw domain
          const needsTitle = !finalTitle || finalTitle.endsWith(".com") || finalTitle.endsWith(".dev") || finalTitle.endsWith(".io") || finalTitle.endsWith(".net");
          const needsDesc = !finalDesc;

          if (needsTitle || needsDesc) {
            const meta = await fetchMetadata(row.url);
            if (meta) {
              if (meta.title && needsTitle) finalTitle = meta.title;
              if (meta.description && needsDesc) finalDesc = meta.description;
            }
          }
        }

        // Clean up title if still raw domain
        if (!finalTitle || finalTitle.toLowerCase() === domain.toLowerCase()) {
          finalTitle = cleanDomainTitle(row.url);
        }

        // Ensure description is never null
        if (!finalDesc) {
          const categoryName = row.category ? row.category.charAt(0).toUpperCase() + row.category.slice(1) : "Web";
          finalDesc = `Explore ${finalTitle || domain} — standout ${categoryName} tool and creative resource.`;
        }

        // Update in database if changed
        if (finalTitle !== row.title || finalDesc !== row.description) {
          await sql`
            UPDATE links
            SET title = ${finalTitle}, description = ${finalDesc}
            WHERE id = ${row.id}
          `;
          updatedCount++;
        }
      })
    );

    console.log(`Processed ${Math.min(i + batchSize, links.length)} / ${links.length} rows...`);
  }

  console.log(`✅ Enrichment complete! Updated ${updatedCount} rows in database.`);
  await sql.end();
}

run().catch((err) => {
  console.error("❌ Error running enrichment:", err);
  process.exit(1);
});
