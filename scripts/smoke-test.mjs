const target = process.argv[2];

if (!target) {
  console.error("Usage: node scripts/smoke-test.mjs <base-url>");
  process.exit(1);
}

const baseUrl = target.replace(/\/$/, "");

const routes = [
  "/",
  "/biblioteca",
  "/eventos",
  "/recursos",
  "/voluntariado",
  "/ongs",
  "/contacto",
  "/privacidad",
  "/terminos",
  "/admin",
  "/api/health",
];

const failures = [];

for (const route of routes) {
  const url = `${baseUrl}${route}`;

  try {
    const response = await fetch(url, {
      redirect: "manual",
      headers: {
        "User-Agent": "PuenteSmokeTest/1.0",
      },
    });

    const acceptable =
      response.status >= 200 &&
      response.status < 400;

    if (!acceptable) {
      failures.push({
        route,
        status: response.status,
        statusText: response.statusText,
      });
    }

    console.log(`${acceptable ? "OK" : "FAIL"} ${response.status} ${route}`);
  } catch (error) {
    failures.push({
      route,
      error: error instanceof Error ? error.message : "unknown_error",
    });

    console.log(`FAIL ERR ${route}`);
  }
}

if (failures.length > 0) {
  console.error("\nSmoke test failed:");
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}

console.log("\nSmoke test passed.");