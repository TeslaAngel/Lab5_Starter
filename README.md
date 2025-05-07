# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Contributed by: Mohan Dong

Sites:
https://teslaangel.github.io/Lab5_Starter/expose.html
https://teslaangel.github.io/Lab5_Starter/explore.html

Check your understanding:
1. No, since the general message feature is a complex feature that involves multiple components such as potential UI interactions together with the backend algorithm that send the message; it will be to complicated for a unit test to validate. However, if we are only validating a backend function that sends a message via a specific protocal, we can easily test it using a unit test.
2. Yes. Since we are focusing on the "max message length" feature that specifically limits the length of a message to 80 characters, it's easy to automatically check the edge cases such as trying sending messages with 79, 80, 81 charachers; and as the judgement of overlong message is usually on the backend, it's possible to use a unit test that only involves the backend without interacting with other components like UI during the test.