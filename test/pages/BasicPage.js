class BasicPage {
    constructor () {}
    async open (path){
        await browser.url(path || this.path);
    }
}

module.exports = BasicPage; 