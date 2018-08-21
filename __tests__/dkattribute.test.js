import puppeteer from "puppeteer";
import * as path from 'path';

let page, browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 80,
        // args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({width, height});
});

afterAll(() => {
    browser.close();
});

test("check library attribute indirection", async () => {
    await page.goto(`file:${path.join(__dirname, '../dist/index.html')}`);
    await page.waitForSelector('.done');
    
    const dkval = await page.$eval("#dk", item => item.value);
    expect(dkval).toEqual("found");
}, 3000);
