console.log(`App.js is running`)

var app = {
    title: 'Indecision App',
    subtitle: 'The Ultimate React App'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
)

var user = {
    name: 'Paul',
    age: 55,
    location: 'London'
}
function getLocation (location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
