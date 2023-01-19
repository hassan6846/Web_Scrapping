const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
const url='https://en.wikipedia.org/wiki/Google';
  await page.goto(url);
  const html = await page.content();
  const filePath = path.join(__dirname, 'wiki.html');
  fs.writeFileSync(filePath, html);
  console.log(`HTML content saved to ${filePath}`);
  await browser.close();
}

start();
