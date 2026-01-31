import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala - Negative Functional Tests (Your Excel)', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');

    });

    async function verifyNegative(page, inputSinglish, expectedWrongOutput) {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputElement = page.locator('div')
            .filter({ hasText: /^Sinhala$/ })
            .locator('..')
            .locator('div')
            .nth(1);

        await inputArea.fill('');
        await inputArea.type(inputSinglish, { delay: 50 });

        await expect(async () => {
            const actual = await outputElement.innerText();
            expect(actual.trim()).toBe(expectedWrongOutput.trim());
        }).toPass({ timeout: 15000 });
    }


    test('Neg_Fun_0001: Greeting phrase incorrect preservation', async ({ page }) => {
        await verifyNegative(
            page,
            'Hello good morning. man oyaalage gedhara ennadha paadam karanna?',
            'Hello good morning. මන් ඔයාලගෙ ගෙදර එන්නද පාඩම් කරන්න?'
        );
    });

    test('Neg_Fun_0002: No spacing phrase error', async ({ page }) => {
        await verifyNegative(
            page,
            'karuNaakaralaa mata udhavvak karanna oyaata puluvandha?',
            'කරුණාකරලා මට උදව්ව ක්කරන්න ඔයාට පුලුවන්ද?'

        );
    });

    test('Neg_Fun_0003: Short form not identified (Thx)', async ({ page }) => {
        await verifyNegative(
            page,
            'Mama email ekak send karaa required files share karalaa. Thx!',
            'මම email එකක් send කරා required files share කරලා. Thanks!'
        );
    });

    test('Neg_Fun_0004: Greeting word "Hi" not identified', async ({ page }) => {
        await verifyNegative(
            page,
            'Hi, machan mokadha venne?',
            'හායි, මචන් මොකද වෙන්නෙ?'
        );
    });

    test('Neg_Fun_0005: Place name not identified correctly', async ({ page }) => {
        await verifyNegative(
            page,
            'Api Nuwaraeliye yamudha?',
            'අපි නුවරඑළියේ යමුද?'
        );
    });

    test('Neg_Fun_0006: Email address corrupted', async ({ page }) => {
        await verifyNegative(
            page,
            'magee email address eka chandra@gmail.com.',
            'මගේ email address එක chandra@gmail.com.'
        );
    });

    test('Neg_Fun_0007: URL link corrupted', async ({ page }) => {
        await verifyNegative(
            page,
            'website : https://www.swifttranslator.com/',
            'website : https://www.swifttranslator.com/'
        );
    });

    test('Neg_Fun_0008: English words not identified', async ({ page }) => {
        await verifyNegative(
            page,
            'this is magee gedhara.',
            'මේ මගේ ගෙදර.'
        );
    });

    test('Neg_Fun_0009: "The" word not identified', async ({ page }) => {
        await verifyNegative(
            page,
            'the book',
            'ද book '
        );
    });

    test('Neg_Fun_0010: Apostrophe handling error', async ({ page }) => {
        await verifyNegative(
            page,
            "What's up?",
            "What's up?"
        );
    });

});