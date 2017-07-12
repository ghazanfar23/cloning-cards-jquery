function make_cards() {
			var x = $( '#cardid [rel="interActCard"]' ).clone();
			$( x ).find( '[rel=cardremove]' ).css( "visibility", "visible" )
			$( x ).find( 'input' ).val( '' );
			$( '#cardid' ).append( x );
			$( x ).find( 'input:first' ).focus();

		}

		function removeCard( x ) {
			if ( confirm( 'Are you sure?' ) ) {
				$( x ).parent().parent().parent().remove();
				return true;
			} else {
				return false;
			}
		}
