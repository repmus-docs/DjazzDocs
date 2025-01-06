+++
title = "Parameters"
weight = 10
+++

Parameters 

Djazz uses Max _parameters_ to attach a device, ewither a controller or a view, to the system.  The Max parameter system is similar to its pattr system: when a message is received in the form 
\<_parameter name_ \> \<_parameter value_ \>, the parameter with the called name is updated with the given value.  Unlike pattrs, though, whose scope is contained within an object or abstraction, parameters have global scope.

All pattrs in _djazz.view_ are parameter enabled.  

The object _djazz.parameter_handler.js_ß maintains an array of parameter listeners, one for each parameter, and outputs parameter names and values upon when values are changed.  Device interfaces can be connected to the inlet or outlet of this object to modify or display parameter values.

###### To create a Max patcher that serves as an interface for an external device:

- Control devices should output messages in the form <_parameter name_> <_parameter value_>.
- View devices should output messages in the form <_parameter name_> <_parameter value_>.
See the {{< apipage "djazz.launchpad_interface" >}} djazz.launchpad_interface{{< /apipage >}} patcher as an example of an abstraction that does both.

A list of all parameters and their current values can be accessed by opening "Parameters" in the Max menu.

**NOTE to developers interested in JS Max listeners:** The JS Max objects Parameterlistener and maxobjlisteners are actually hard to deal with because _you can’t delete them_. So they continue to live, inaccessible but possibly still affecting output, until garbage collection comes their way.
