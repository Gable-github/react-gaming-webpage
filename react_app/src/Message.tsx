function Message() {
    // this is Javascript XML
    // Using Babeljs you can see how this "HTML" element really is
    // implemented as one in javascript. JSX -> Javascript element -> HTML element
    const name = "Gabryel";
    return <h1>Hello {name}!</h1>
}

export default Message;