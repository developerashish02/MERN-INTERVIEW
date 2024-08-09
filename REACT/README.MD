# what is the state and props in react

1. whenever we build react app that react app have the component and that component for the managing the
   data we have states in react

2. props also is the data we can pass the data parent component into the child component we called the
   props

# what is the react and how its diff from other

1. react works on the virtual dom
2. React is view oriented
3. unidirectional data flow
4. component based architecture

# what is the virtual dom in react

virtual dom is the re-presentation of the actual dom

# updates and rendering

# props and states in react

props in read only property its pass from parent to chiel
if any thing change in the props chiel is re-rendering

# what is the server side rendering and client side rendering

in the react all the html or markup we can render also into the server side
without coming to client
even though whole markup written in javascript we can render hole markup into server side using node js
engine

**benefits**

1. SEO
2. 1st render is very fast
3. data harvey sides and SEO friendly

note - client side rendering for the apps and server side rendering data haley sides

**Life Cycle Methods in React**

# Class Based Component

Sure! Here’s a simplified and popular way to explain the lifecycle methods in React, suitable for a README file:

---

### React Component Lifecycle Methods

React components have different lifecycle methods depending on whether they are class-based or function-based.

#### **Class-based Components**

In class-based components, the most commonly used lifecycle methods are:

- **`componentDidMount()`**  
  Runs after the component is inserted into the DOM. Perfect for fetching data or setting up subscriptions.

- **`componentDidUpdate(prevProps, prevState)`**  
  Runs after the component updates (when props or state change). Useful for responding to updates.

- **`componentWillUnmount()`**  
  Runs right before the component is removed from the DOM. Ideal for cleanup tasks like cancelling network requests or removing event listeners.

#### **Function-based Components (using Hooks)**

Function components use Hooks to manage lifecycle events:

- **`useEffect()`**  
  Combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
  ```javascript
  useEffect(() => {
    // Code to run on mount/update
    return () => {
      // Cleanup code to run on unmount
    };
  }, [dependencies]); // Dependencies array
  ```

### **Summary**

- **Class Components**: Use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- **Function Components**: Use the `useEffect` hook to manage similar lifecycle events.


