const { execSync } = require("child_process");

console.log("⚡ Building for cPanel (subfolder /web)...");

execSync("npx next build --webpack", {
  stdio: "inherit",
  env: {
    ...process.env,
    BUILD_TARGET: "cpanel",
    NEXT_PUBLIC_BUILD_TARGET: "cpanel",
  },
});

console.log("📦 Packaging into curtains-direct-web.zip...");
execSync("python scripts/zip.py", { stdio: "inherit" });
