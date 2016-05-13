import { SelectPage } from './app.po';

describe('select App', function() {
  let page: SelectPage;

  beforeEach(() => {
    page = new SelectPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('select works!');
  });
});
