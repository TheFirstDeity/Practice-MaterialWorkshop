import { MaterialWorkshopPage } from './app.po';

describe('material-workshop App', () => {
  let page: MaterialWorkshopPage;

  beforeEach(() => {
    page = new MaterialWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
