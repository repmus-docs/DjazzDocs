+++
title = "Adding to Djazz"
weight = 10
+++

To add functionality to Djazz, use the following method:

###### IN MODEL:
- Create your patcher.  Use pattr objects for asynchronous input.  You can include a pattrhub object to broadcast pattr messages for reusability's sake, but this is not needed if the patcher is inside the model patcher (djazz.maxpat).
- Connect your patcher in the appropriate place inside djazz.maxpat. See the [specific descriptions]() for examples.

###### IN CONTROL:
- Inside _djazz.control_, place a subpatcher, possibly containing other subpatchers, with pattr objects, so that the patcher/pattr hierarchy reflects the way in which you want your new functionality to be called.
- Create a translator subpatcher and connect the output of the control subpatcher to it. This translator subpatcher should convert the message passed into djazz.control (<_control variable name_> <_control variable value_>) to the message needed by the model (<_model variable name_> <_model variable value_>). The Max _regexp_ and __ objects are good for this.  You can use the _Debug View_ button to open the lists of pattrs in the model and control to make sure things are being named properly.
- Parameter-enable the pattrs if you want to trigger them with external devices via Djazz's [parameter handler]() patcher. Alternatively, you could pattern-enable the pattrs in the view (following section). Only parameter-enable one set of pattrs: those in the control or those in the view.
- Connect the translator to the control output that goes to the model.

###### IN A VIEW:
- Create a bpatcher containing the graphic controls and views for your patcher. Attach pattr objects to the controls.
- Create a translator subpatcher and connect the output of the control subpatcher to it. This translator subpatcher should convert the message passed out of your bpatcher (<_view variable name_> <_view variable value_>) to the message needed by the control (<_control variable name_> <_control variable value_>). The Max _regexp_ and __ objects are good for this.
- When placed in djazz.view, the pattrstorage system will handle the messaging; you don't have to connect your bpatcher to an output.

###### IN A VIEW CONTROL:
- If necessary, add a subpatcher with pattrs, and a corresponding trnaslator, to djazz.view_control if you want to pass data from the model back into your view subpatcher.

**Be sure to give all your pattrs initial values, and that these initial values are the same in the view, control, model, and possibly view control.**