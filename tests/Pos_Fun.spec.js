import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala - Positive Functional Tests (From Excel)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

  });

  async function verifyTranslation(page, inputSinglish, expectedSinhala) {
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputElement = page
      .locator('div')
      .filter({ hasText: /^Sinhala$/ })
      .locator('..')
      .locator('div')
      .nth(1);

    await inputArea.clear();
    await inputArea.pressSequentially(inputSinglish, { delay: 10 });

    await expect(async () => {
      const actualText = await outputElement.innerText();
      expect(actualText.trim()).toBe(expectedSinhala.trim());
    }).toPass({ timeout: 15000 });
  }

  test('Pos_Fun_0001', async ({ page }) => {
    await verifyTranslation(
      page,
      'Hello good morning. Oyaage saepa saniipa kohomadha? Adha mokadha karanne ithin?',
      'Hello good morning. ඔයාගෙ සැප සනීප කොහොමද? අද මොකද කරන්නේ ඉතින්?'
    );
  });

  test('Pos_Fun_0002', async ({ page }) => {
    await verifyTranslation(
      page,
      'karuNaakaralaa mata udhavvak karanna oyaata puluvandha?',
      'කරුණාකරලා මට උදව්වක් කරන්න ඔයාට පුලුවන්ද?'
    );
  });

  test('Pos_Fun_0003', async ({ page }) => {
    await verifyTranslation(
      page,
      'machan mata adha office enna venne naehae. Mama email ekak send karaa inform karalaa. Magee project ekee code eka oyaata develop karanna puluvandha? Mama oyaata required files share karannam. puLuvan tharam try ekak dhenna. Mama heta enavaa. Thx!',
      'මචන් මට අද office එන්න වෙන්නෙ නැහැ. මම email එකක් send කරා inform කරලා. මගේ project එකේ code එක ඔයාට develop කරන්න පුලුවන්ද? මම ඔයාට required files share කරන්නම්. පුළුවන් තරම් try එකක් දෙන්න. මම හෙට එනවා. ථx!'
    );
  });

  test('Pos_Fun_0004', async ({ page }) => {
    await verifyTranslation(
      page,
      'Mata uNa haedhilaa nisaa adha enna venne naehae.',
      'මට උණ හැදිලා නිසා අද එන්න වෙන්නෙ නැහැ.'
    );
  });

  test('Pos_Fun_0005', async ({ page }) => {
    await verifyTranslation(
      page,
      'ikmaNata worksite ekata enna.',
      'ඉක්මණට worksite එකට එන්න.'
    );
  });

  test('Pos_Fun_0006', async ({ page }) => {
    await verifyTranslation(
      page,
      'oyaa project eka hariyata karalaa!',
      'ඔයා project එක හරියට කරලා!'
    );
  });

  test('Pos_Fun_0007', async ({ page }) => {
    await verifyTranslation(
      page,
      'apita trip eka yanna venne naehae.',
      'අපිට trip එක යන්න වෙන්නෙ නැහැ.'
    );
  });

  test('Pos_Fun_0008', async ({ page }) => {
    await verifyTranslation(
      page,
      'hari oyaage task eka mama complete karannam',
      'හරි ඔයාගෙ task එක මම complete කරන්නම්'
    );
  });

  test('Pos_Fun_0009', async ({ page }) => {
    await verifyTranslation(
      page,
      'karuNakaralaa mata heta leave ekak dhenna puluvandha?',
      'කරුණකරලා මට හෙට leave එකක් දෙන්න පුලුවන්ද?'
    );
  });

  test('Pos_Fun_0010', async ({ page }) => {
    await verifyTranslation(
      page,
      'task eka complete karapan!',
      'task එක complete කරපන්!'
    );
  });

  test('Pos_Fun_0011', async ({ page }) => {
    await verifyTranslation(
      page,
      'poddak inna, mama laptop eka aran ennam.',
      'පොඩ්ඩක් ඉන්න, මම laptop එක අරන් එන්නම්.'
    );
  });

  test('Pos_Fun_0012', async ({ page }) => {
    await verifyTranslation(
      page,
      'mama heta udhenma office yanavaa.',
      'මම හෙට උදෙන්ම office යනවා.'
    );
  });

  test('Pos_Fun_0013', async ({ page }) => {
    await verifyTranslation(
      page,
      'Ammaa mata Rs.5000k dhunnaa.',
      'අම්මා මට Rs.5000ක් දුන්නා.'
    );
  });

  test('Pos_Fun_0014', async ({ page }) => {
    await verifyTranslation(
      page,
      'hari hari machan. Mama ennam.',
      'හරි හරි මචන්. මම එන්නම්.'
    );
  });

  test('Pos_Fun_0015', async ({ page }) => {
    await verifyTranslation(
      page,
      'Akkaa iiyee dhaval office giyaa.',
      'අක්කා ඊයේ දවල් office ගියා.'
    );
  });

  test('Pos_Fun_0016', async ({ page }) => {
    await verifyTranslation(
      page,
      'Api maatharata trip ekak yamudha?',
      'අපි මාතරට trip එකක් යමුද?'
    );
  });

  test('Pos_Fun_0017', async ({ page }) => {
    await verifyTranslation(
      page,
      'oyaa heta apee gedhara enavanam mama party eka arrange karannam.',
      'ඔයා හෙට අපේ ගෙදර එනවනම් මම party එක arrange කරන්නම්.'
    );
  });

  test('Pos_Fun_0018', async ({ page }) => {
    await verifyTranslation(
      page,
      'obata suba upandhinayak veevaa!',
      'ඔබට සුබ උපන්දිනයක් වේවා!'
    );
  });

  test('Pos_Fun_0019', async ({ page }) => {
    await verifyTranslation(
      page,
      'mama hatharaveni prashneta answer eka dhanne naehae ban.',
      'මම හතරවෙනි ප්‍රශ්නෙට answer එක දන්නෙ නැහැ බන්.'
    );
  });

  test('Pos_Fun_0020', async ({ page }) => {
    await verifyTranslation(
      page,
      'oyaage ID number eka mata kiyanna.',
      'ඔයාගෙ ID number එක මට කියන්න.'
    );
  });

  test('Pos_Fun_0021', async ({ page }) => {
    await verifyTranslation(
      page,
      'api heta thiyena meeting eka 2026.02.05 dhinayata re-arrange karalaa thiyenne.',
      'අපි හෙට තියෙන meeting එක 2026.02.05 දිනයට re-arrange කරලා තියෙන්නෙ.'
    );
  });

  test('Pos_Fun_0022', async ({ page }) => {
    await verifyTranslation(
      page,
      'mata dhaen lecture ekak thiyenava iita passe mama kaeema kanna yanavaa.',
      'මට දැන් lecture එකක් තියෙනව ඊට පස්සෙ මම කෑම කන්න යනවා.'
    );
  });

  test('Pos_Fun_0023', async ({ page }) => {
    await verifyTranslation(
      page,
      'oyaa mea velaavee mata karee loku udhavvak. Thank you!',
      'ඔයා මේ වෙලාවේ මට කරේ ලොකු උදව්වක්. Thank you!'
    );
  });

  test('Pos_Fun_0024', async ({ page }) => {
    await verifyTranslation(
      page,
      'haemadhaama traffic nisaa transport eke aavath 15 min parakku venavaa.',
      'හැමදාම traffic නිසා transport eke ආවත් 15 min පරක්කු වෙනවා.'
    );
  });

  test('Pos_Fun_0025', async ({ page }) => {
    await verifyTranslation(
      page,
      'vaessa vaedi nisaa paalama kaedilaa giyaa.',
      'වැස්ස වැඩි නිසා පාලම කැඩිලා ගියා.'
    );
  });

});
