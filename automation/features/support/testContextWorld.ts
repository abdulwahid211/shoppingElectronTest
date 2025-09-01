import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { ElectronApp } from '../../src/helper/electron-app';
import { ProductPage } from '../../src/pages/product.page';

export class TestContextWorld extends World {
  app!: ElectronApp;
  page!: Page;
  product!: ProductPage;

  constructor(opts: IWorldOptions) {
    super(opts);
  }

  async startElectronApp() {
    this.app = new ElectronApp();
    this.page = await this.app.launch();
    this.product = new ProductPage(this.page);
  }

  async dispose() {
    if (this.app) await this.app.close();
  }
}

setWorldConstructor(TestContextWorld);
