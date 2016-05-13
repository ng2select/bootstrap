export class SelectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('select-app h1')).getText();
  }
}
