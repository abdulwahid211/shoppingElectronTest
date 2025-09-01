import path from 'path';
import { _electron as electron, ElectronApplication, Page } from 'playwright';

export class ElectronApp {
  app!: ElectronApplication;
  win!: Page;

  readonly electronAppMainFilePath: string = '../shopping-electron/app/main.js';

  async launch(relativeMain = this.electronAppMainFilePath) {
    const entry = path.resolve(process.cwd(), relativeMain);
    this.app = await electron.launch({
      args: [entry],
    });
    this.win = await this.app.firstWindow();
    await this.win.waitForLoadState('domcontentloaded');
    await this.win.bringToFront();
    return this.win;
  }

  async close() {
    if (this.win)
      await this.win.close({ runBeforeUnload: true }).catch((e) => {
        console.log('Window failed to close' + e);
      });
    if (this.app)
      await this.app.close().catch((e) => {
        console.log('App failed to close' + e);
      });
  }
}
