import { JoshDinndorfDotComPage } from './app.po';

describe('josh-dinndorf-dot-com App', () => {
  let page: JoshDinndorfDotComPage;

  beforeEach(() => {
    page = new JoshDinndorfDotComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
