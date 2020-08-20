const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const data = require('../data/data.js');

async function helloThereGeneralKenobi() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    try {
        await driver.get(data.url);
        await driver.wait(until.elementsLocated({css: data.le}), 2000);
        await driver.findElement(By.css(data.fsc)).click();
        await driver.sleep(2000);
    }
    finally {
        setTimeout(function () {
            console.log(data.cheers);
            16500},
        );
    }
}
helloThereGeneralKenobi();