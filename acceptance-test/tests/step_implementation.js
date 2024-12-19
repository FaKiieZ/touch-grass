/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};


step("Upload picture", async () => {
    throw 'Unimplemented Step';
});

step("Check Progress percentage", async () => {
    throw 'Unimplemented Step';
});

step("Open <endpoint> Endpoint", async function (endpoint) {
    await goto(`localhost/${url}`);
});

step("Click <link>", async function (link) {
    await click(link(link));
});

step("Find id <id>", async function (id) {
    if (document.getElementById(id) == null)
    {
        throw 'Element not found';
    }
});
