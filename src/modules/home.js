function createAboutSection (id) {

    const about = document.createElement('section')
    about.setAttribute('id',id)

    const title = document.createElement('h3')

    title.textContent = "About"

    about.appendChild(title)

    const parag = document.createElement('p')

    parag.textContent = "This is a very good restaurant with a fine japanese cuisine"

    about.appendChild(parag)

    return about;
}



function loadHome () {

    const content = document.getElementById('contentTab');

    content.textContent = "";

    const aboutsection = createAboutSection('about');

    content.appendChild(aboutsection);

}

export default loadHome;