const puppeteer = require('puppeteer');
const constants = require('./constants');
const { fillInput, clickBtn } = require('./utils');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(constants.homeURL);
  await page.waitForNetworkIdle();
  await page.evaluate((bottomIdentifier) => {
    document.querySelector(bottomIdentifier).scrollIntoView();
  }, constants.bottomIdentifier);
  await page.waitFor(500);
  const reqIDs = await page.evaluate((linkIdentifier) => {
    window.scrollTo(0, 8120);
    const links = Array.from(
      document.querySelectorAll(linkIdentifier)
    )
      .filter((link) => link.href.includes('/careers/search/job'))
      .map((link) => {
        return link.href.slice(
          link.href.length - 6,
          link.href.length
        );
      });
    return links;
  }, constants.linkIdentifier);

  for (const reqID of reqIDs) {
    const page = await browser.newPage();
    await page.goto(`${constants.baseURL}${reqID}`);
    let index = 0;
    for (const formPage of constants.inputPages) {
      await page.waitForNetworkIdle();
      for (const input of formPage) {
        await fillInput(page, input);
        await page.waitFor(250);
      }
      index++;
      await clickBtn(
        page,
        index === 4
          ? constants.submitBtnIdentifier
          : constants.nextBtnIdentifier
      );
    }
  }
})();
