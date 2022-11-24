import React from 'react';

const Blog = () => {
    return (
        <div className='m-12'>
            <div className='shadow-lg mb-12'>
                <h1 className='font-semibold'>What are the different ways to manage a state in a React application?</h1>
                <p>There are four main types of state you need to properly manage in your React apps:<br />

                    1.Local state<br />
                    2.Global state<br />
                    3.Server state<br />
                    4.URL state<br />

                    Let's cover each of these in detail:<br />

                    1.Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.<br />

                    2.Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.<br />

                    3.Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.<br />

                    4.URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='shadow-lg mb-12'>
                <h1 className='font-semibold'>How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                </p>
            </div>
            <div className='shadow-lg mb-12'>
                <h1 className='font-semibold' >What is a unit test? Why should we write unit tests?</h1>
                <p>

                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br />
                    For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.
                </p>
            </div>
            <div className='shadow-lg mb-12'>
                <h1 className='font-semibold'>React vs. Angular vs. Vue?</h1>
                <p>

                    Who's working on those Frameworks? : Angular is developed by Google, React by Facebook, Vue is a community-driven open-source project.<br />
                    1. Philosophies : Three component-focused frameworks, where Angular has a lot of built-in features, Vue has some built-in features, React is very minimalistic.<br />
                    2. Syntax : Angular uses TypeScript and splits HTML + TypeScript logic apart, React uses JavaScript and a feature called "JSX" (it combines "HTML" and JavaScript logic), Vue uses regular JavaScript and splits HTML + JavaScript logic apart.<br />
                    3. Ease of Learning : Vue is easiest to learn, React and Angular are on the same level and a bit more difficult than Vue.<br />
                    4. Performance : All three frameworks offer great startup and runtime performance, hence "performance" will not be your main decision factor.<br />
                    5. Adoption & Popularity : All three frameworks are popular but React is a bit more popular than Angular, which in turn is getting used more than Vue.<br />
                    6. Framework Evolution : All frameworks are under active development, new features are being added over time to all three of them.<br />

                </p>

            </div>
        </div>
    );
};

export default Blog;