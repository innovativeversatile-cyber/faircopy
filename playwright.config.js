import { defineConfig } from "playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  testDir: path.join(dir, "tests"),
  timeout: 45000,
  fullyParallel: false,
  use: {
    baseURL: "http://127.0.0.1:4177",
    viewport: { width: 390, height: 844 },
    locale: "en-US"
  },
  webServer: {
    command: "python3 -m http.server 4177 --bind 127.0.0.1",
    cwd: dir,
    port: 4177,
    reuseExistingServer: true
  }
});
