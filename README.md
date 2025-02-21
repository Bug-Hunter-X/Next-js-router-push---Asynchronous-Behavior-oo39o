# Next.js router.push() Asynchronous Behavior

This repository demonstrates a common issue in Next.js applications where the `router.push()` method does not block execution of subsequent code, leading to potential race conditions.  The `console.log` statement in the example will execute *before* the navigation to `/my-route` is complete.

## Bug

The bug is that code following `router.push()` executes immediately.  This is because `router.push()` is asynchronous.  The provided `bug.js` shows this problem, where the console message appears before the navigation happens. This is unexpected behavior if you need to perform actions after the page change.

## Solution

The solution is to use the `router.events` to listen for the `routeChangeComplete` event, indicating that the navigation is finished. The `bugSolution.js` provides a corrected implementation using `router.events.on` to correctly handle the asynchronous nature of navigation.
