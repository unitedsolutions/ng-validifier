import {SomePage} from './app.po';

describe('Sample App', () => {
  let page;

  beforeEach(() => {
    page = new SomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular Project Starter!');
  });
});
