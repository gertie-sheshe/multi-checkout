# Accessible, Usable MultiPage Checkout Form

Guidelines for building checkout forms with best practices in usability and accessibility that enhance user experience.

## Table Of Contents

- [Project Description.](#project-description)
- [Technologies Used.](#technologies-used)
- [Recommendations](#recommendations)
- [Other Forms.](#other-forms)


## Project Description
This Checkout Form project is a series of projects focused on creating user-friendly and accessible forms using best practices and patterns. The aim is to provide guidance and examples for building various types of forms.

Each project within this series demonstrates the implementation of form best practices. By following these practices, you can improve the usability and accessibility of your forms, ensuring a seamless user experience for all.

## Technologies Used
This project utilizes the following technologies:

- **NextJS:** NextJS is a React framework that enables server-side rendering, routing, and other useful features for building modern web applications.

- **Zustand:** Zustand is a lightweight state management library for React applications. It provides a simple and efficient way to manage state within components.

- **Styled-components:** Styled-components is a CSS-in-JS library that allows you to write CSS code directly within your JavaScript files. It offers a convenient way to style components in a modular and reusable manner.


### :warning: **NOTE!** 
My use of styled-components in this small project is not a recommendation of production best practice. Please read [this article](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) to understand the performance implications of using the CSS-in-JS pattern.

## Recommendations
- **Proper Semantics:** Use of appropriate HTML elements, such as `<input>`, `<form>`, and `<fieldset>`, to ensure proper structure and semantics.

- **Control Grouping:** Grouped related controls using `<fieldset>` and `<legend>`. For example, group radio buttons or checkboxes within a fieldset to provide context and improve usability.

- **Multi-Page:** For this form, I took a multi-page approach to reduce cognitive pressure on the user. Break the form into logical sections or steps and guide the user through the process.

- **Labels:** Proper use of <label> elements for form controls. This helps screen readers associate labels with corresponding controls, making the form more accessible.

- **ARIA Attributes:** Use ARIA attributes, such as `aria-live` and , to provide additional information and improve accessibility for users relying on assistive technologies
  
### Validation
- HTML5 relies on the `required` attribute to communicate a required field. This attribute however does not have support on some old browsers and it is not implemented uniformly. Because of this, you can choose to explore custom validation.

- Use of `aria-required` communicates to users of assistive tech that the field is required.

- Client-side validation is helpful on its own - reduces network and server load. However, it cannot be fully relied on and should be paired with server-side validation.
  
### Error Handling and Notification
- There are various ways to communicate error feedback back to the user.

- For this form, I am displaying an error summary at the top of the form, and also including inline error for each field that is invalid.

- The summary section at the top communicates the feedback generally. Having this section in a [live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) communicates the feedback to assistive technology users.
  
- Appending the error hint inside the `label` attribute ensures it is read out to screen reader users.

  
 ## Other Forms
  Other forms in this series will be linked here
