class Footer {
    constructor() { }

    async getContainer() {
        return $('footer#footer');
    }

    async getSocialBlock() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', await getContainer())
        return (await this.getContainer()).$('#social_block');
    }

    async getNewsLetterBlock() {
        const block = (await this.getContainer()).$('#newsletter_block_left');
        return {
            header: block.$('h4'),
            input: block.$('#newsletter-input')
        }
    }
}

module.exports = new Footer;