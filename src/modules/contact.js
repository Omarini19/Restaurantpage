function createSection (name, data) {

    const section = document.createElement('section');
    section.classList.add('section')

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = name;
    section.appendChild(title)

    data.forEach((d) => {
        const para = document.createElement('p');
        para.classList.add('section-description');
        para.textContent = d;
        section.appendChild(para)

    });
    return section;
}

function loadContact () {

    const content = document.getElementById('contentTab')

    content.textContent = "";

    const contactTitle = createSection('Phone',['01322423534534','094805748544'])

    const address = createSection('Address', ['Jeresd 19, 3454 Ulululu'])

    content.appendChild(contactTitle)
    content.appendChild(address)
}


export default loadContact;