import { Air4Page } from './app.po';

describe('air4 App', function() {
  let page: Air4Page;

  beforeEach(() => {
    page = new Air4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
