import NavigationBar from './components/navigation-bar/navigation-bar.js'


const navigationItems =[
    {
        url: '/hello-world-page',
        title: 'Hello World App'
    },
    {
        url: '/kiwi-page',
        title: 'Kiwi App'
    }
]

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;
console.log('url', url)

if( url === '/hello-world-page' ){
    import('HelloWorldApp/HelloWorldPage').then
        (HelloWorldPageModule =>{
            const HelloWorldApp = HelloWorldPageModule.default;
            const helloWorldApp = new HelloWorldApp();
            helloWorldApp.render();
        })
} else if( url === '/kiwi-page' ){
    import('KiwiApp/KiwiPage').then
        (KiwiPageModule =>{
            const KiwiApp = KiwiPageModule.default;
            const kiwiApp = new KiwiApp();
            kiwiApp.render();
        })
}


console.log('Dashboard')