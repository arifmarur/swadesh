import { SwadeshiPage } from './app.po';

describe('swadeshi App', () => {
  let page: SwadeshiPage;

  beforeEach(() => {
    page = new SwadeshiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
