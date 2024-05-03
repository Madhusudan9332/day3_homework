const Body = () => {
  // Array of data for sections
  const sectionsData = [
    {
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It allows you to create reusable UI components and efficiently manage the state of your application. With React, you can build single-page applications, mobile apps, and even server-rendered websites. It utilizes a virtual DOM to optimize performance and JSX syntax for writing components in a familiar HTML-like format. React has a vibrant ecosystem with tools like React Router for client-side routing, Redux for state management, and Next.js for server-side rendering. Whether you're a beginner or an experienced developer, learning React opens up a world of possibilities for building modern web applications.",
      link: "#",
    },
    {
      title: "React Components",
      content:
        "React components are the building blocks of a React application. They are independent, reusable pieces of UI that can be composed together to create complex interfaces. Components can be either functional or class-based, with the former being simpler and easier to test. Functional components are just JavaScript functions that return JSX, while class components are JavaScript classes that extend the React.Component class. Components have a lifecycle that consists of several phases such as mounting, updating, and unmounting. Understanding components and their lifecycle is essential for building scalable and maintainable React applications.",
      link: "#",
    },
    {
      title: "Props and State",
      content:
        "In React, props and state are two fundamental concepts used to manage data in your application. Props (short for properties) are used to pass data from parent components to child components. They are immutable and are passed down as attributes to child components. State, on the other hand, is managed within a component and can be changed over time. State allows components to be dynamic and interactive by storing information such as user input or component visibility. By understanding how to use props and state effectively, you can build powerful and flexible React applications.",
      link: "#",
    },
    {
      title: "React Router",
      content:
        "React Router is a popular library for handling routing in React applications. It allows you to define routes, which map URLs to different components in your application. React Router provides a declarative way to handle navigation and rendering of components based on the current URL. It supports features like nested routes, route parameters, and code splitting, making it a versatile tool for building single-page applications. With React Router, you can create dynamic and SEO-friendly web applications that provide a seamless user experience.",
      link: "#",
    },
    {
      title: "Managing Forms in React",
      content:
        "Forms are an essential part of web development, and React provides powerful tools for handling them. With React, you can create controlled forms where form elements are controlled by React state, or uncontrolled forms where form elements manage their state internally. React also provides features like form validation and error handling, making it easier to create robust and user-friendly forms. By mastering form management in React, you can build interactive and responsive user interfaces that meet the needs of your users.",
      link: "#",
    },
    {
      title: "Context API",
      content:
        "The Context API is a feature introduced in React 16.3 that allows you to share data between components without having to pass props manually at every level of the component tree. It provides a way to pass data through the component tree without having to pass props down manually at every level. This makes it easier to manage state in larger applications and reduces the complexity of passing props between components. With the Context API, you can create global state that is accessible to any component in your application, making it easier to share data between different parts of your UI.",
      link: "#",
    },
    {
      title: "React Hooks",
      content:
        "React Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. They let you use state and other React features without writing a class. Hooks are functions that let you hook into React state and lifecycle features from functional components. They enable you to reuse stateful logic between components and simplify the development of complex UIs. With Hooks, you can manage component state, perform side effects, and access context in functional components, making it easier to write clean and concise React code.",
      link: "#",
    },
  ];

  return (
    <div className="p-10">
      {sectionsData.map((section, index) => (
        <section
          key={index}
          className={
            index % 2 === 0
              ? "bg-gray-200 p-6 rounded-lg mb-4"
              : "bg-white p-6 rounded-lg mb-4"
          }
        >
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {section.content}
          </p>
          <a
            href={section.link}
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Read More
          </a>
        </section>
      ))}
    </div>
  );
};

export default Body;
