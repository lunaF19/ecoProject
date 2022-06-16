const $ = (a) => document.getElementById(a)

const integrantes = [{
        nombre: "Adriana Barboza",
        img: "https://dummyimage.com/400x400/",
        desc: "Estudiante de Ing.Informatica"
    },
    {
        nombre: "Francisco Luna",
        img: "https://dummyimage.com/400x400/",
        desc: "Estudiante de Ing.Informatica"
    },
    {
        nombre: "Julio Amador",
        img: "https://dummyimage.com/400x400/",
        desc: "Estudiante de Ing.Informatica"

    }
]

const temasCard = [{
        id: 1,
        title: "¿Puede el uso del transporte ecológico mejorar la economía?",
        description: "",
        img: "http://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/documents/image/wcms_745105.jpg",
        ruta: "#tema1"
    },
    {
        id: 2,
        title: "¿Cómo enriquece el uso de esta estrategia al planeta?",
        description: "",
        img: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/ways-to-save-the-environment-0.jpg",
        ruta: "#tema2"
    },
    {
        id: 3,
        title: "¿Qué medio de transporte ecológico utilizando más comúnmente afecta al planeta?",
        description: "",
        img: "https://www.claro.com.co/portal/recursos/co//cpp/promociones/imagenes/1590065646134-1.jpg",
        ruta: "#tema3",
    },
    {
        id: 4,
        title: "¿Cuáles tipos de transporte ecológico contribuyen a la sostenibilidad?",
        description: "",
        img: "https://knaufautomotive.com/wp-content/uploads/2021/06/Sustainable-transport.jpg",
        ruta: "#tema4",
    },
    {
        id: 5,
        title: "¿Cuáles son las ventajas y desventajas del uso del transporte ecológico? ",
        description: "",
        img: "https://www.animalpolitico.com/wp-content/uploads/2011/01/Ecotrasnpo.jpg",
        ruta: "#tema5",
    },
    {
        id: 6,
        title: "¿Cómo impacta el petróleo al medio ambiente?",
        description: "",
        img: "https://laverdadnoticias.com/__export/1566838022198/sites/laverdad/img/2019/08/26/medios_de_transporte-contaminacion_crop1566837655938.jpg_1902800913.jpg",
        ruta: "#tema6",
    },
    {
        id: 7,
        title: "¿Los vehículos eléctricos son una solución para la sostenibilidad?",
        description: "",
        img: "https://elperiodicodelaenergia.com/wp-content/uploads/2020/11/Vehi%CC%81culos-Ele%CC%81ctricos-Volkswagen-Alemania-960x640.jpg",
        ruta: "#tema7",
    },
    {
        id: 8,
        title: "¿Cuál es la importancia de la Eco-movilidad o transporte sostenible?",
        description: "",
        img: "https://re-magazine.saunierduval.es/media/cache/hero_small/ecomovilidad-portada.jpg",
        ruta: "#tema8",
    },
    {
        id: 9,
        title: "¿En qué países se utiliza esta estrategia?",
        description: "",
        img: "https://blogs.iadb.org/ciudades-sostenibles/wp-content/uploads/sites/17/2020/03/blog-nordico-transporte-urbano-sostenible.jpg",
        ruta: "#tema9",
    },
    {
        id: 10,
        title: "¿El uso del transporte público, reduce el impacto?",
        description: "",
        img: "https://ojoalclima.com/wp-content/uploads/2020/03/BUSES-1.jpg",
        ruta: "#tema10",
    }
]

const temasContent = [{
        id: 1,
        text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. Hic?",
        text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. Hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 2,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 3,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 4,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 5,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 6,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 7,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 8,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 9,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
    {
        id: 10,
        text1: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. at, hic, harum dicta mollitia tempora natus nam deleniti eum debitis quisquam repudiandae non minima magni ducimus voluptas incidunt provident ut. hic?",
        img1: "https://dummyimage.com/800x400",
        img2: "https://dummyimage.com/800x400",
    },
]

const intro = `
<div class="temaConten">
    <h1>Introducción</h1>
    <p style="text-align: justify; font-size: 1.25rem;">

        La sostenibilidad consiste en satisfacer las necesidades de las generaciones actuales sin
        comprometer las necesidades de las generaciones futuras, al mismo tiempo que se garantiza un
        equilibrio entre el crecimiento de la economía, el respeto al medioambiente y el bienestar social.
        <br>
        <br>
        En los últimos tiempos, el acelerado progreso tecnológico y la excesiva industrialización han
        traído, como consecuencia, el abuso en el consumo de recursos naturales, con el consecuente
        desequilibrio ambiental, así como desórdenes y problemas sociales de todo tipo, a pesar de que, en
        algunos países, se ha observado un desarrollo económico notable.
        <br>
        <br>
        Hoy por hoy, se precisa desarrollar e implementar estrategias que permitan tener espacios y
        ambientes que sean sostenibles. Los impactos en el medio ambiente están generando angustia y han
        encendido las alarmas en todo el mundo debido a los altos índices de contaminación y polución. Una
        de las principales causas es el uso de sistemas de transporte urbano ya que algunos no cumplen con
        las medidas ambientales correspondientes.
        <br>
        <br>
        Ante la problemática, los gobiernos nacionales y distritales han implementado varias medidas que
        ayudarán a disminuir los índices de contaminación. Por su parte, las personas han tomado sus propias
        medidas utilizando transporte ecológico y vehículos que no contaminan.
        <br>
        <br>
        El transporte ecológico se creó con el propósito de reducir la polución en las grandes ciudades. Una
        de las características de estos transportes es que pueden ser eléctricos o con energías renovables y
        sostenibles que respetan el medio ambiente. Dentro de las ventajas de contar con un transporte
        ecológico, esta la disminución de la contaminación que tanto afecta al medio ambiente.
        Una de las tantas razones por las cuales utilizar estos transportes se basa en mejorar la calidad
        del aire que respiramos ya que estos vehículos y aparatos no necesitan de grandes cargas de energía
        para funcionar.
        Hay muchas acciones que se pueden tomar para conseguir un transporte realmente ecológico. Una de
        ellas es la reducción de la demanda, pero como, por razones obvias, esta no es posible reducirse a
        cero, es necesario combinarla con otras medidas, como la electrificación de los automóviles, la
        optimización de procesos de producción y lograr un consumo más eficiente de los recursos.
        El transporte sostenible plantea diversos desafíos, no solo para el medio ambiente sino también para
        las necesidades de los consumidores. En concreto, se debe tener en cuenta que la demanda de bienes y
        servicios relacionados con el transporte está aumentando. Cada vez son más las personas que
        prefieren conducir sus propios automóviles y las compras online se están generalizando, lo que
        aumenta las necesidades de transporte. En general, en prácticamente todo el mundo se consume más y,
        además, los bienes deben entregarse al cliente final, lo que implica más contaminación y una mayor
        demanda de recursos energéticos.
        A pesar de los esfuerzos que se están haciendo por consumir energía verde y usar materiales
        reciclables y ecológicos, todavía no existe una tendencia hacia la reducción de emisiones lo
        suficientemente clara.
        Popularizar los vehículos eléctricos y mejorar la eficiencia de las unidades de energía existentes
        es importante, pero insuficiente. Existen otras muchas medidas que es necesario implementar para
        conseguir que el transporte sea más respetuoso con el medio ambiente. Una de ellas es fomentar el
        transporte público urbano sostenible. Una de las grandes ventajas de crear una red eficiente de
        transporte público es la reducción del tráfico de automóviles particulares. Para conseguir crear una
        red de transporte colectiva óptima y sostenible en las grandes aglomeraciones urbanas es necesario
        implantar medidas basadas en tecnologías inteligentes. Este tipo de medidas deberían responder al
        espíritu de lo que se conoce como ciudad inteligente (Smart city), lo cual aún se encuentra en
        desarrollo.
        <br>
        <br>
    </p>
</div>
`

$("root").addEventListener('onLoad', onLoad())


const nav = $("navbar")
const divIntegrantes = $("integrantes")

function onLoad() {
    const hRoot = window.location.hash
    $("dashIntegrantes").innerHTML = cargaIntegrantes()
    $("sectionThems").innerHTML = cargaTemas()
    cargaContenidoTema(hRoot);
    $("navbar").className = toggleDarkLightValue() ? 'navbarDark' : 'navbarLigth'
    $("navbar").className = toggleDarkLightValue() ? 'navbarDark' : 'navbarLigth'
    $("dashIntegrantes").className = toggleDarkLightValue() ? 'dashIntegrantesDark' : 'dashIntegrantesLigth'
}

function aFunction(hash) {
    cargaContenidoTema(hash)
}

window.addEventListener('scroll', function () {
    nav.classList.toggle('active', window.scrollY > 0)
    divIntegrantes.classList.toggle('active', window.scrollY > 0)
})

function cargaContenidoTema(hashTema) {
    const id = temasCard.filter(tema => tema.ruta == hashTema)[0]?.id
    if (id != undefined) {
        const contenidoTema = temasContent.filter(content => content.id = id)[0]
        $("sectionContenidoSelecionado").innerHTML = agregaContenidoAPagina(contenidoTema)
        return
    }
    $("sectionContenidoSelecionado").innerHTML = intro
}

function agregaContenidoAPagina(content) {

    return `
    <div class="temaConten">
        <h1 name="${temasCard[content.id-1].ruta.replace("#","")}" class="temaConten-tile">${temasCard[content.id-1].title} </h1>
        <div class="temaConten-text1">
            <p>
            ${content.text1}
            </p>
        </div>    
            <img src="${content.img1}" class="temaConten-img1">
        ${ content.text2 &&
            `<div class="temaConten-text2">
                <p>
                ${content.text2}
                </p>
            </div>  `
        }  
        ${ content.img2 &&
            `
                <img src="${content.img2}" class="temaConten-img2">
            `
        }

    </div>
    
    `

}

function cargaIntegrantes() {
    i = 1,
        divForInt = '<h3 class="integrante-h3"> Integrantes: </h3> <hr class="integrante-hr"> '


    integrantes.forEach(int => {
        divForInt = divForInt + `
                <div id="integrante${i}" class="integrante">
                    <div class="integrante-nombre">
                        <p>${int.nombre}</p>
                    </div>    
                    <div class="integrante-img">    
                        <img class="imgCir" src="${int.img}" alt="img${int.nombre}">
                        <div class="integrante-desc">
                            <p>
                                ${int.desc}
                            </p>
                        </div>
                    </div>
                </div>
                <hr class="integrante-hr">
            `
        i++
    })
    return divForInt
}

function toggleDarkLightValue() {
    return $("themApp").checked
}

function toggleDarkLight() {
    const body = $("root")
    toggleDarkLightValue() ?
        body.className = "themDark" :
        body.className = "themLigth"
    onLoad();
}

function cargaTemas() {

    let cartTemas = '<h1 class="sectionThems-title">Temas</h1>'
    temasCard.forEach(tema => {
        cartTemas = cartTemas + `
        <div class=" cardTheme ${ toggleDarkLightValue() && "dark"}" style="background-image: url(${tema.img})">
            <a id="aTema${tema.id}" onClick=aFunction("${tema.ruta}") href="${tema.ruta}" class="cardTheme-btn">
                <p class="cardTheme-numTema">Tema ${tema.id}</p>
                <q class="cardTheme-title">${tema.title}</q>
            </a>
        </div>
        `
    })

    return cartTemas;
}