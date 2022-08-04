const details = [
    {
        title: 'communities',
        img: 'pics/Intersect.jpg',
        description: 'Our Community is hosted in various locations accross Africa called Chapters'
    },
    {
        title: 'project',
        img: 'pics/Intersect.jpg',
        description: 'Our Community is hosted in various locations accross Africa called Chapters'
    },
    {
        title: 'documentation',
        img: 'pics/Intersect.jpg',
        description: 'Our Community is hosted in various locations accross Africa called Chapters'
    }

]

let dd = document.getElementsByClassName('dd')

 details.map(detail  => { 
    let info = document.createElement('div')
    info.classList.add('info');
    info.innerHTML = `
        <h1>${detail.title}</h1>
        <div class="about-details">
            <img src=${detail.img} alt="">
            <div class="about">
                <p>
                    ${detail.description}
                </p>
                <a href="#">learn more <i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
    `
    dd[0].appendChild(info);
  })


