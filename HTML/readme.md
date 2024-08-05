# HTML5 New Tags

HTML5 introduced several new elements that enhance the structure, semantics, and functionality of web documents. Below is a summary of the key tags introduced in HTML5:

## Structural and Semantic Elements

- **`<header>`**: Defines introductory content or navigational links for a section or document.
- **`<nav>`**: Represents a set of navigation links.
- **`<section>`**: Represents a generic section of a document or application, typically with a heading.
- **`<article>`**: Represents a self-contained piece of content that can be distributed independently, such as a news article or blog post.
- **`<aside>`**: Represents content that is indirectly related to the content around it, like a sidebar.
- **`<footer>`**: Represents the footer of a section or document, often containing metadata or contact information.
- **`<figure>`**: Represents content such as images, diagrams, or videos that are referenced from the main content, often used with the `<figcaption>` tag for captions.

## Multimedia Elements

- **`<audio>`**: Embeds sound content into the document.
- **`<video>`**: Embeds video content into the document.
- **`<source>`**: Specifies multiple media resources for the `<audio>` and `<video>` elements.
- **`<track>`**: Provides text tracks for `<video>` and `<audio>` elements, such as subtitles or captions.

## Form Controls

- **`<input type="email">`**: Provides an input field for email addresses.
- **`<input type="url">`**: Provides an input field for URLs.
- **`<input type="range">`**: Allows users to select a value from a range.
- **`<input type="date">`**: Allows users to select a date.
- **`<input type="color">`**: Provides a color picker.
- **`<datalist>`**: Contains a set of predefined options for an `<input>` element.
- **`<output>`**: Represents the result of a calculation or user action.

## Scripting

- **`<script>`**: Enhanced with `async` and `defer` attributes for better control over script loading and execution.

## Metadata

- **`<meta charset="UTF-8">`**: Specifies the character encoding for the document, crucial for displaying text correctly.

## Graphics and Media API Elements

- **`<canvas>`**: Provides a space for drawing graphics via scripting, usually with JavaScript.
- **`<svg>`**: Defines vector-based graphics, allowing for scalable and resolution-independent images

# can we put the div tag inside span tag

- no its not correct semantically
- html not give the any error but freamworks have the some rule they break some time in production

# what is the ways we can make responsive website using css

- try to give the font size rem em (em) depends on parent element (rem) easily scalable in responsiveness
- we use media query for the make responsive

```CSS

    /* Styles for screens with a maximum width of 800px */
@media (max-width: 800px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Styles for screens with a maximum width of 500px */
@media (max-width: 500px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```
