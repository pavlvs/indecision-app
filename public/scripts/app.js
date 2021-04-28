'use strict';

var app = {
    title: 'Visibility Toggle'
};

var appRoot = document.getElementById('app');

var toggleDetails = function toggleDetails() {
    visible = !visible;
    renderApp();
};

var visible = false;

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            visible ? 'Hide details' : 'Show details'
        ),
        visible && React.createElement(
            'p',
            null,
            'Hey. These are some details you can now see.'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
