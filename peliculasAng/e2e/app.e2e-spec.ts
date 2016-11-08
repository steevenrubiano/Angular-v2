import { PeliculasAngPage } from './app.po';

describe('peliculas-ang App', function() {
  let page: PeliculasAngPage;

  beforeEach(() => {
    page = new PeliculasAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
