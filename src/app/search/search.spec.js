/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'Search page', function() {

  beforeEach( module( 'tivity.search' ) );

  beforeEach(inject(function($rootScope, $controller) {
    //create a scope object for us to use.
    $scope = $rootScope.$new();

    //now run that scope through the controller function,
    //injecting any services or other injectables we need.
    ctrl = $controller('SearchCtrl', {
      $scope: $scope
    });
  }));

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBe( true );
  }));

  it( 'the query parameter should exist', inject( function() {
    //expect( $scope.queryParam ).toBeTruthy();
  }));
});

