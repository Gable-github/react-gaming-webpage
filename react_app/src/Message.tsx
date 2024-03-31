function Message() {
    // this is Javascript XML
    // Using Babeljs you can see how this "HTML" element really is
    // implemented as one in javascript. JSX -> Javascript element -> HTML element
    const name = "Gabryel";
    if (name)
        return <h1>Hello {name}!</h1>
    return <h1>Hello nobody!</h1>
}

export default Message;