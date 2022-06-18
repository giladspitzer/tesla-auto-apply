const constants = require('./constants');
const fillInput = async (page, input) => {
  const type = input.type;
  const element = await page.$(input.identifier);
  if (type === constants.CLICK) {
    await page.evaluate((identifier) => {
      document.querySelector(identifier).click();
    }, input.identifier);
    return;
  } else if (type === constants.INPUT) {
    await page.type(input.identifier, input.value, { delay: 10 });
    return;
  } else if (type === constants.SELECT) {
    await page.select(input.identifier, input.value);
    // await element.select(input.value);
    return;
  } else if (type === constants.FILE) {
    await element.uploadFile(input.value);
    return;
  } else if (type === constants.DATE) {
    await clickBtn(page, input.identifier);
    await page.evaluate(
      (date, dayIdentifier) => {
        const dayNumber = date.slice(0, 2);
        const monthAndDay = date.slice(3);
        let upperRow = document.querySelector('.tds-date-picker')
          .children[0];
        let rowText = upperRow.children[1].innerText;
        while (rowText !== monthAndDay) {
          upperRow.children[2].click();
          upperRow = document.querySelector('.tds-date-picker')
            .children[0];
          rowText = upperRow.children[1].innerText;
        }
        const days = document.querySelectorAll(dayIdentifier);
        for (const day of days) {
          if (day.innerText === dayNumber) {
            day.click();
            break;
          }
        }
      },
      input.value,
      constants.dayIdentifier
    );
  } else if (type === constants.SCROLL) {
    await page.evaluate((input) => {
      const element = document.querySelector(input.identifier);
      element.scrollBy(0, element.scrollHeight);
    }, input);
  }
};

const clickBtn = async (page, identifier) => {
  const clickPayload = {
    type: constants.CLICK,
    identifier,
  };
  await fillInput(page, clickPayload);
};

module.exports = { fillInput, clickBtn };
