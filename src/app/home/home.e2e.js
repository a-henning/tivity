describe( 'home e2e', function() {
  beforeEach(function() {
    browser.get('http://127.0.0.1:9000/');
  });

  browser.get('build/index.html');

  browser.debugger();

  element(by.binding('user.name'));

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));
});