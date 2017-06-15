import { OnlineCoursesPage } from './app.po';

describe('online-courses App', () => {
  let page: OnlineCoursesPage;

  beforeEach(() => {
    page = new OnlineCoursesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
