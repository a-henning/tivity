

describe( 'Main App Controller', function() {
    var AppCtrl;

    beforeEach( module( 'tivity' ) );

    beforeEach( inject( function( $controller ) {
      AppCtrl = $controller( 'AppCtrl' );
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( true ).toBe(true);
    }));
});
