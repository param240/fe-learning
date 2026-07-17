When JavaScript executes your code, it first performs a setup step where it registers all the variables
and functions it can find. This behavior is known as hoisting. Because of hoisting, some variables and
functions seem to exist even before the line where they are defined. However, different declarations
are hoisted in different ways.

1. var - hoisted and initialized to undefined

2. let - hoisted and uninitialize, leaves in Temporal dead zone

3. const - hoisted and uninitialize, leaves in Temporal dead zone

4. class - hoisted and uninitialize, leaves in Temporal dead zone

5. Function declarations:

    - The entire function is stored in memory during setup, which means you can call below sayHi function anywhere in
    the same scope, even before its line in the code.

    ```
    sayHi();    // works alright
    function sayHi(){
        console.log('Hi');
    }
    ```

6. Function expressions:

    - An expression only hoists its variable binding, not the function. The binding follows normal var/let/const rules; the function value isn't attached until execution actually reaches the line.