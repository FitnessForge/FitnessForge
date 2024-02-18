import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

const port = process.env.FRONT_PORT || 3000;

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run front:serve' },
    }),
    baseUrl: `http://localhost:${port}`,
  },
});
