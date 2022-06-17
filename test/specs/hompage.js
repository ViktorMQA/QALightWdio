const Home = require('../pages/Home');

const home = new Home;

describe('header', () => {
    before(async () => {
        await home.open();
        require('expect-webdriverio').setOptions({ wait: 5000 });
    });

    it('contacts', async () => {

        const contactLink = await (await home.Header.getNavBar()).contactLink
        expect(contactLink).toHaveText('contact us')
    });

    it('newslatter email placeholder', async () => {
        const email = await (await home.Footer.getNewsLetterBlock()).input
        await expect(email).toHaveValue('Enter your e-mail')
    });

    it.only('Place holder vanishes on click', async () => {
        const email = await (await home.Footer.getNewsLetterBlock()).input
        await email.click()
        await expect(email).toHaveValue('')
    })

})