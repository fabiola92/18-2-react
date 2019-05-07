    
var movies = [
	{
        id: 1,
        image: './images/wladca.jpeg',
        title: 'Wladca pierscieni',
        type: 'Fantasy/Akcji',
        desc: 'Ekranizacja Trylogii Tolkiena'
    },
    {
        id: 2,
        image: './images/hobbit.jpg',
        title: 'Hobbit',
        type: 'Fantasy/Przygodowy',
        desc: 'Prequel Władca Pierścieni'
    },
    {
        id: 3,
        image: './images/harry.jpg',
        title: 'Harry Potter',
        type: 'Fantasy',
        desc: 'Przygody młodych czarodziejów'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('img', {
            src: movie.image
        }),
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.type),
        React.createElement('p', {}, movie.desc)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmow'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));