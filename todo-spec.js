
var MyCTLogin = function() {
  this.get = function() {
    browser.get('http://localhost:8100/#/tab/routes');
  };

  this.loginInfo = function(email, password) {
    element(by.model('data.email')).sendKeys(email);
    element(by.model('data.password')).sendKeys(password);
    element(by.buttonText('Login')).click();
  };
};

var MyCTLogout = function() {
  this.get = function() {
    element(by.linkText('Account')).click();
  };

  this.logout = function() {
    element(by.buttonText('Log out')).click();
  };
};


describe('MyCultureTrip-mobile', function() {

  it('login and logout', function() {


    var myCTLogin = new MyCTLogin();
    var myCTLogout = new MyCTLogout();

    myCTLogin.get();
    myCTLogin.loginInfo('cbach@dotsoft.gr', '133233');

    myCTLogout.get();
    myCTLogout.logout();

    //  it('should have a title', function() {
    //  expect(browser.getTitle()).toEqual('Trips');
    //});
  });
});
