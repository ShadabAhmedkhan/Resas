import { ResasPage } from './app.po';

describe('resas App', function() {
  let page: ResasPage;

  beforeEach(() => {
    page = new ResasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
