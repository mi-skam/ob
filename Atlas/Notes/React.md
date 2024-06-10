## Virtual DOM

React builds a representation of the browser DOM in memory called *virtual DOM*. As components get updated, React checks to if the components HTML code in the virtual DOM matches the browser DOM. If a change is required, the browser DOM is updated - but only then.

This process is called **reconciliation**
1. The virtual DOM is updated
2. The updated virtual DOM compares itself to previous versions  and creates a diff
3. The changed elements are updated in the browser DOM
4. The displayed webpage updates to match the browser DOM

## Fiber Architecture

If a lot of elements are updated simultaneously or in a narrow time window, updating the browser DOM  can become costly, eventually leading to performance penalties.
Thus the *fiber architecture* differentiales between elements which are in the active view or somewhere outside, and gives updates to the former a priority and limiting the latter.