const app = {
    title: 'Visibility Toggle',
}

const appRoot = document.getElementById('app')

const toggleDetails = () => {
    visible = !visible
    renderApp()
}

let visible = false

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>
                {visible ? 'Hide details' : 'Show details'}
            </button>
            {visible && <p>Hey. These are some details you can now see.</p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()
