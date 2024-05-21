SOLUTION
========

# Plan

Started with a plan documentednted in this link [https://www.pivotaltracker.com/n/projects/2554248] for more details.

## Research
Researched product collections pages for inspirations one of the product design page with sidebar bellow others in the comment section of the pivotal tracker above.

<p>
  <img src="/plans/Research/5e2dfd869786ceae6157a6f086f4c605.png"/>
 </p>
 
 ## Low Fidelity Design
 
 <p>
  <img src="/plans/Design/screenshot-excalidraw.com-2022.02.15-15_39_20.png"/>
 </p>
 
  ## High Fidelity Design
 
 <p>
  <img src="/plans/Design/MacBook Pro 14_ - 1.png"/>
 </p>
 
  ## Component Hierarchy
 
 <p>
  <img src="/plans/Design/screenshot-excalidraw.com-2022.02.15-15_38_57.png"/>
 </p>
 
 ## Frontend Architecture
 
 <p>
  <img src="/plans/Design/screenshot-excalidraw.com-2022.02.15-15_38_03.png"/>
 </p>
 
 # Technologies
 
 ## Local State:
 All local state are handled by core React methods. useState

 ## External Libraries Choice:

 ## User Interface:
 ### Chakra UI:
 Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

 The advantage of Chakra UI is that uses React component pattern for styling, it's easily adoptable by teams and accessibility is a first-hand citizen. It's also   highly extendable and good for building a custom design system that can be used across teams and apps

## Server/Global State:
### React Query
A Performant and powerful data synchronization for React Fetch, cache and update data in React and React Native applications all without touching any "global state".

React Query also can be used for GraphQL API it simplified data fetching and improved performance.

Estimation
----------
Estimated: 2 hours

Spent: 3 hours


Solution
--------
Comments on your solution

Implemented with Create React APP using TypeScript, Eslint, Pretier for Static Analysis, these significantly reduces error in development, provide a solid foundation for scale and contributions.

It's important to know in the user story  `AND I expect to see "12" products in a table` from the data provided we have not got that numbers.

The choice of React Query for managing Server State eliminate lot of boiler plates codes that comes with global state mnagements in React. React Query provide hooks that allow us to get the API data where we need it and simplify data fetching, it also increase performance significantly providing caching and reduce round trip to the Server.

Chakra UI makes building extendable User Interfaces in React easy with accessibilty a first time citizen it gives a solid foundation to improve the UI at scale, with great developer experience. Enabling more teams to contribute and reuse components.

## Improvement
Having React Router will increase user experience and also allow user to be able to navigate via the browser and bookmark state or share.
