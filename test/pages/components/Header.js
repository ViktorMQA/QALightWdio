class Header {
    constructor() { }

    async getContainer() {
        return $('#header');
    }

    async getNavBar() {
        const navBlock = (await this.getContainer()).$('nav');
        return {
            contactLink: navBlock.$('#contact-link a'),
            signInButton: navBlock.$('.login'),
        }
    }

    async getBunner() {
        return (await this.getContainer()).$('.banner');
    }

    async getMenu() {
        return (await this.getContainer()).$('#block_top_menu ul.menu-content');
    }


}


module.exports = new Header;