
function head(id,text) {

    const header = document.createElement('header');
    header.setAttribute('id',id)

    const title = document.createElement('h2');
    
    title.textContent = text;
    
    header.appendChild(title);
    
    return header;
}

function createMain(id) {

    const main = document.createElement('main');
    main.setAttribute('id',id);
    return main;
}

function createBtn (id, text) {

    const btn = document.createElement('button')
    btn.setAttribute('id',id)
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab')

    return btn;
}

function navi (id){

    const tab = document.createElement('nav')
    tab.setAttribute('id',id)
    const home = createBtn('home','home')
    const menu = createBtn('menu','menu')
    const contact = createBtn('contact','contact')
    



    tab.appendChild(home)
    tab.appendChild(menu)
    tab.appendChild(contact)
    

    return tab;
}

function mpageLoad () {
    const content = document.getElementById('content')
    const header = head('header','Mishima fine cuisine');
    content.appendChild(header)

    const nav = navi('nav');
    content.appendChild(nav)

    const contentTab = createMain('contentTab')
    content.appendChild(contentTab)


}

export default mpageLoad;