jQuery(function($) {
  var validate = {
    errorPlacement: function(error, element) {
      if (element.is(':radio') || element.is(':checkbox')) {
        error.insertBefore(element.next());
      } else {
        error.insertAfter(element);
      }
    }
  };
  $('#recommender').wizard({
    transitions: {
      gender: function(state, action) {
        var branch = state.step.find('[name=gender]:checked').val();
        if (!branch) {
          alert('Please select a value to continue');
        } 
        return branch;
      },
      skillSelect: function(state, action) {
        var branch = state.step.find('[name=skill-level]:checked')[0].id;
        if (!branch) {
          alert('Please select a value to continue');
        }
        if (branch === 'green' || branch === 'blue') {
          return 'all-mountain';
        } else {
          return 'style';
        }
      },
      allMountainConfirm: function(state, action) {
        var branch = state.step.find('[name=confirm-am]:checked').val();
        if (!branch){
          alert('Please select a value to continue');
        }
        if (branch === 'ok') {
          return 'results';
        } else {
          return 'style';
        }
      },
      ridingStyle: function(state, action) {
        var branch = state.step.find('[name=riding-style]:checked').val();
        if (!branch){
          alert('Please select a value to continue');
        }
        if (branch === 'freestyle') {
          return 'freestyle-interest';
        } else if (branch === 'freeride') {
          return 'freeride-interest';
        }
        return 'results';
      },
      freeridePreference: function(state, action) {
        var branch = state.step.find('[name=freeride-interest]:checked').val();
        if (!branch){
          alert('Please select a value to continue');
        }
        if (branch === 'powder') {
          return 'powder-preference';
        }
        return 'results';
      }
    }
  });
});