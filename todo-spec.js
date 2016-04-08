describe('MyCultureTrip', function() {

  it('login to the app', function() {
    browser.get('http://localhost:8100/#/tab/routes');
    element(by.model('data.email')).sendKeys("cbach@dotsoft.gr");
    element(by.model('data.password')).sendKeys('133233');
    element(by.buttonText('Login')).click();

  });
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Trips');
  });
  it("go to account tab", function() {
    element(by.linkText('Account')).click();
  });

  it("logout", function(){
    element(by.buttonText('Log out')).click();
  });
});
