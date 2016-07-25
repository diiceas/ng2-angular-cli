import { Ng2AngularCliPage } from './app.po';

describe('ng2-angular-cli App', function() {
  let page: Ng2AngularCliPage;

  beforeEach(() => {
    page = new Ng2AngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
