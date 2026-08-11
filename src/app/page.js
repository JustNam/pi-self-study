import fs from "node:fs";
import path from "node:path";

function findLessonRoutes() {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = [];

  function walk(dir, segments) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const nextSegments = [...segments, entry.name];
      const subDir = path.join(dir, entry.name);
      if (fs.existsSync(path.join(subDir, "page.js"))) {
        routes.push("/" + nextSegments.join("/"));
      }
      walk(subDir, nextSegments);
    }
  }

  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name.startsWith("section")) {
      walk(path.join(appDir, entry.name), [entry.name]);
    }
  }

  return routes.sort();
}

export default function Home() {
  const routes = findLessonRoutes();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>PI Self-Study - Lessons</h1>
      {routes.length === 0 ? (
        <p>
          No exercises yet. Run <code>/practice</code> to generate one.
        </p>
      ) : (
        <ul>
          {routes.map((route) => (
            <li key={route}>
              <a href={route}>{route}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
