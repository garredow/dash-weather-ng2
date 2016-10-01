import { DashWeatherPage } from './app.po';

describe('dash-weather App', function() {
  let page: DashWeatherPage;

  beforeEach(() => {
    page = new DashWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
