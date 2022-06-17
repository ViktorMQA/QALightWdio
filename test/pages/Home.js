const BasicPage = require('./BasicPage');
const Footer = require('./components/Footer');
const Header = require('./components/Header');


class Home extends BasicPage{
    constructor(){
        super();
        this.path = '/';
        this.Footer = Footer;
        this.Header = Header;
    }

 
}

module.exports = Home;