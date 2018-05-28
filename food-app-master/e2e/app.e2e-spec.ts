import { FoodAppMasterPage } from './app.po';

describe('food-app-master App', () => {
  let page: FoodAppMasterPage;

  beforeEach(() => {
    page = new FoodAppMasterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
