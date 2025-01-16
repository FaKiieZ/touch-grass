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
    evaluate,
    scrollTo,
    dropDown
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
    await goto(`localhost:8080/${endpoint}`);
});

step("Click <linkText>", async function (linkText) {
    await click(linkText);
});

step("Find text <id>", async function (id) {
    await scrollTo(id);
});

step("Add <textbox> <text>", async function (textbox, text) {
    await write(text, into(textBox(textbox)))
});

step("Choose <element> <text>", async function (element, text) {
    await dropDown(element).select(text);
});

step("<textbox> should be <text>", async function (textbox, text) {
    await textBox(textbox).text() == text;
});

step("Selection <element> should be <text>", async function (element, text) {
    await dropDown(element).value() == text;
});