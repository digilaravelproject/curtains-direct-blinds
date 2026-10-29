const { execSync } = require("child_process");

const buildTimestamp = Date.now().toString();
console.log(`⚡ Building for cPanel (subfolder /web) [Build Version: ${buildTimestamp}]...`);

execSync("npx next build --webpack", {
  stdio: "inherit",
  env: {
    ...process.env,
    BUILD_TARGET: "cpanel",
    NEXT_PUBLIC_BUILD_TARGET: "cpanel",
    NEXT_PUBLIC_BUILD_TIME: buildTimestamp,
  },
});

console.log("📦 Packaging into curtains-direct-web.zip...");
execSync("python scripts/zip.py", { stdio: "inherit" });
