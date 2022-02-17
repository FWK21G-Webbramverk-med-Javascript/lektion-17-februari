function TodoItem(props) {
    console.log(props);
    const { task, done } = props; // Här använder vi object destructuring för att plocka ut 
                                  // de värden som vi skickar till TodoItem från App

    let text = 'Ej klar';

    if (done) {
        text = 'Klar';
    }

    return (
        <li>{ task } - { text }</li>
    );
}

export default TodoItem;