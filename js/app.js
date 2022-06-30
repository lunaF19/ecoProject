const $ = a => document.getElementById(a)

const integrantes = [{
        nombre: "Adriana Barboza",
        img: "./img/IntegrantesImg/AdrianaBarboza.png",
        desc: "Estudiante de Ing.Informatica"
    },
    {
        nombre: "Francisco Luna",
        img: "./img/IntegrantesImg/FranciscoLuna.png",
        desc: "Estudiante de Ing.Informatica"
    },
    {
        nombre: "Julio Amador",
        img: "./img/IntegrantesImg/JulioAmador.png",
        desc: "Estudiante de Ing.Informatica"

    }
]

const temasCard = [{
        id: 1,
        title: "¿Puede el uso del transporte ecológico mejorar la economía?",
        description: "",
        img: "./img/cardTemas/cardTema01.jpg",
        ruta: "#tema1"
    },
    {
        id: 2,
        title: "¿Cómo enriquece el uso de esta estrategia al planeta?",
        description: "",
        img: "./img/cardTemas/cardTema02.jpg",
        ruta: "#tema2"
    },
    {
        id: 3,
        title: "¿Qué medio de transporte ecológico utilizando más comúnmente afecta al planeta?",
        description: "",
        img: "./img/cardTemas/cardTema03.jpg",
        ruta: "#tema3",
    },
    {
        id: 4,
        title: "¿Cuáles tipos de transporte ecológico contribuyen a la sostenibilidad?",
        description: "",
        img: "./img/cardTemas/cardTema04.jpg",
        ruta: "#tema4",
    },
    {
        id: 5,
        title: "¿Cuáles son las ventajas y desventajas del uso del transporte ecológico? ",
        description: "",
        img: "./img/cardTemas/cardTema05.jpg",
        ruta: "#tema5",
    },
    {
        id: 6,
        title: "¿Cómo impacta el petróleo al medio ambiente?",
        description: "",
        img: "./img/cardTemas/cardTema06.webp",
        ruta: "#tema6",
    },
    {
        id: 7,
        title: "¿Los vehículos eléctricos son una solución para la sostenibilidad?",
        description: "",
        img: "./img/cardTemas/cardTema07.jpg",
        ruta: "#tema7",
    },
    {
        id: 8,
        title: "¿Cuál es la importancia de la Eco-movilidad o transporte sostenible?",
        description: "",
        img: "./img/cardTemas/cardTema08.jpg",
        ruta: "#tema8",
    },
    {
        id: 9,
        title: "¿En qué países se utiliza esta estrategia?",
        description: "",
        img: "./img/cardTemas/cardTema09.jpg",
        ruta: "#tema9",
    },
    {
        id: 10,
        title: "¿El uso del transporte público, reduce el impacto?",
        description: "",
        img: "./img/cardTemas/cardTema10.jpg",
        ruta: "#tema10",
    }
]

const temasContent = [
    {
        id: 1,
        text1: `
        Si, crearía fuentes de empleo. Permitirá la reducción del gasto en petróleo y la adopción de medidas relacionadas con la producción y el consumo de la energía, podrían contribuir asimismo a la creación de empleo fuera del ámbito del transporte. La electrificación del transporte de pasajeros y de mercancías también permitiría crear puestos de trabajo.
        `,
        text2: "",
        img1: "./img/imgContenidoTemas/cTema01-01.jpg",
        img2: "",
    },
    {
        id: 2,
        text1: `
        Los sistemas de transporte más ecológicos que surgieran a raíz de este tipo de transformaciones contribuirían asimismo a reducir las emisiones de gases de efecto invernadero, la contaminación atmosférica y acústica, y la congestión del tráfico, que a su vez permitiría reducir la cantidad de accidentes de tráfico.        
        `,
        text2: "",
        img1: "./img/imgContenidoTemas/cTema02-01.jpg",
        img2: "",
    },
    {
        id: 3,
        text1: `
        Se podría decir que la bicicleta es el medio de transporte que mas impacta al planeta positivamente. Las bicicletas son el transporte más sostenible, debido a que: No consumen combustibles. No emiten gases de efecto invernadero. Producen niveles de ruido muy inferiores a los de los autos.
        `,
        text2: "",
        img1: "./img/imgContenidoTemas/cTema03-01.jpg",
        img2: "",
    },
    {
        id: 4,
        text1: `
        Estos tipos de transportes respetan al medio ambiente caracterizados de esta manera para la regulación de la contaminación y formándose así una sostenibilidad para el medio ambiente y protegiendo al planeta.
        <br>
        <h3>Algunos tipos de transportes ecológicos:</h3>
        <ol>
            <li>Bicicletas o motocicletas eléctricas.</li>
            <li>Carros eléctricos.</li>
            <li>Patinetas eléctricas o Scooter.</li>
        </ol>
        `,
        text2: "",
        img1: "./img/imgContenidoTemas/cTema04-01.webp",
        img2: "",
    },
    {
        id: 5,
        text1: `
        <h3>Ventajas</h3>
        <ul>
        <li>Los vehículos que funcionan con gas natural contaminan menos que los de gasolina. Lo cual ayuda significativamente a la reducción de la contaminación y el daño al medio ambiente, principalmente, en lugares donde suele existir una gran biodiversidad y concentración de personas. </li>
        <li>Ahorro de dinero al comprar menos combustibles fósiles en la bomba. La utilización de la bicicleta o de los coches eléctricos son opciones ideales. Quienes escojan estas alternativas obtendrán un ahorro económico considerable en combustibles, ya que los precios de la gasolina se encarecen año tras año. También hay que tener en cuenta otros gastos frecuentes en seguros, aparcamiento o mantenimiento. </li>
        <li>Reducción en la demanda de energéticos, la cual a su vez provoca un mejoramiento de las economías al bajar los costos utilizando otros combustibles como gas natural y electricidad.</li>
        <li>Reducción de tráfico y congestionamiento. </li>
        <li>Apostar por la movilidad sostenible también contribuye a que los habitantes se ‘liberen’ de la presencia abusiva de coches en determinadas áreas, principalmente muy céntricas y saturadas de vehículos. La coexistencia saludable y bien planificada de espacios habilitados para el tráfico a motor, y otros reservados para medios de transporte sostenibles beneficia a todos: conductores, vecinos y personas que acuden a trabajar a diario a esas zonas.</li>
        <li>Fomentación de conciencia ambiental entre amigos y familiares </li>
        </ul>
        `,
        text2: `
        <h3>Desventajas</h3>
        <ul>
        <li> Mayor tiempo de repostaje. Cargar un auto ecológico puede tardar algunas horas, a diferencia de los autos a los que estamos acostumbrados, una recarga implica tiempo. </li>
        <li> Menor potencia. Los autos eléctricos son casi tan potentes como los convencionales. </li>
        <li> Ausencia de infraestructura. Actualmente no existen instalaciones especializadas ni puntos de carga suficientes para cubrir una eventual demanda masiva. </li>
        <li> Mayor costo de adquisición del auto. En estos momentos el precio de estos autos ecológicos es mas elevado que los vehículos con motores de explosión. Su tecnología y mantenimiento hacen que estos automóviles hoy por hoy estén reservados solo para quienes pueden pagarlos. </li>
        <li> Pocos puntos de recarga. Aunque cada vez son mas las ciudades que instalan puntos de recarga, estos siguen siendo insuficientes para asegurar la correcta movilidad de los vehículos eléctricos. </li>
        </ul>
        `,
        img1: "./img/imgContenidoTemas/cTema05-01.png",
        img2: "",
    },
    {
        id: 6,
        text1: `
        <ul>
        <li>La falta o disminución de la entrada de luz en el mar a causa de manchas de petróleo imposibilita o reduce el área donde es posible la fotosíntesis y, por tanto, el desarrollo de plantas verdes.</li>
        <li>Cuando los animales entran en contacto con el petróleo, este se impregna en su superficie y, por su viscosidad, les impide trasladarse en el agua, volar en el caso de las aves, e incluso comer. Por este motivo, muchos animales mueren por la toxicidad del petróleo y, además, por el hecho de haber estado en contacto con el petróleo, a largo plazo, los animales pueden resultar infértiles.</li>
        <li>El ruido provocado por las operaciones de exploración y explotación de crudo en los mares provoca la desaparición de las especies más sensibles a las perturbaciones sonoras.</li>
        <li>Parte del petróleo que termina en los mares se evapora y pasa a convertirse en partículas que pueden introducirse en el cuerpo de los organismos a través de las vías respiratorias o la piel.</li>
        </ul>
        `,
        text2: "",
        img1: "./img/imgContenidoTemas/cTema06-01.jpg",
        img2: "",
    },
    {
        id: 7,
        text1: `
        El beneficio más importante de los autos eléctricos es que disminuyen los niveles de gases de efecto invernadero tanto del vehículo como de los mecanismos involucrados en su producción; y reducen la emisión de CO2.
        Se quiere conseguir una movilidad que emita el mínimo de emisiones posible, fomentando la fabricación y el uso de vehículos eléctricos.
        Los autos eléctricos no tienen tubo de escape por lo que no pueden generar emisiones, lo que disminuyen la contaminación del aire y beneficia al medio ambiente y a la salud de las personas. 
        Otro de los factores positivos es su reciclaje, las baterías que hacen funcionar a los coches eléctricos y también a los híbridos, están hechas de iones de litio, pesan menos y tienen mayor autonomía, y se pueden reciclar. 
        `,
        text2: `
        Los vehículos eléctricos podrían ser una solución para la sostenibilidad en caso de que se tuviesen mas aspectos cubiertos como que pasaría con las baterías, de donde saldrá la energía para cargar los autos, como se compensa el coste extra de un vehículo eléctrico.
        El futuro de la movilidad necesita que se potencie la proximidad y reduzca la necesidad de trayectos largos, donde el uso del transporte colectivo siga siendo mayoritario, como ya sucede en algunas ciudades. 
        `,
        img1: "./img/imgContenidoTemas/cTema07-01.jpg",
        img2: "./img/imgContenidoTemas/cTema07-02.jpg",
    },
    {
        id: 8,
        text1: `
        Todos conocemos que forma de transportase convencional como la dependencia del automóvil, produce un impacto negativo al medio ambiente ya sea afectando la calidad del aire que respiramos y hasta verse afectada la agua que tomamos.
        Ante esta forma en la que nos transportamos que conocemos como tradicional que afecta al planeta surge la Eco-movilidad o conocida como transporte sostenible, Esta fomenta y promueve el uso de transporte o sistemas de medios ecológico, eficiente, responsable y sostenible con la protección del medio ambiente.
        `,
        text2: `
        <h3>Algunas de las razones del porque es importante un buen sistema de Eco-movilidad:</h3>
        <ul>
            <li>Se reduce el impacto de los medios de transporte convencionales sobre el medio ambiente.</li>
            <li>Se fomenta y promueve la sostenibilidad.</li>
            <li>Se reduce los problemas de los combustibles fósiles, gases de efecto invernadero y sobre todo la contaminación atmosférica que afecta en la salud humana.</li>
            <li>Se fomenta el uso de transporte ecológico como la bicicleta, las motocicletas y vehículos eléctricos.</li>
            <li>Se promueve un estilo de vida saludable y sostenible.</li>
            <li>Se ahorra dinero con el uso del transporte público.</li>
            <li>Se mejora la salud física, mental y psicológicamente.</li>
            <li>Se lucha contra el sedentarismo.</li>
            <li>Se promueven las energías renovables y la tecnología ambiental.</li>
            <li>Se promueve la eficiencia energética.</li>
            <li>Se reduce el tráfico y una mejor circulación.</li>
            <li>Se logra una ciudad más limpia y una mejor calidad de vida.</li>
            <li>Se promueve la lucha contra el calentamiento global y el cambio climático.</li>
        </ul>
        `,
        img1: "./img/imgContenidoTemas/cTema08-02.jpg",
        img2: "",
    },
    {
        id: 9,
        text1: `
        Primeramente, debemos conocer que se puede tomar por un país que aplique esta estrategia. La respuesta a qué es un país sostenible o sustentable es compleja, pero básicamente se siguen los siguientes criterios para determinar que lo sea, algunas de las características que se pueden tomar en cuenta son:
        <ul>
            <li>Esfuerzo por reducir las emisiones de CO2.</li>
            <li>Inversión en transportes eléctricos y en mejora de la movilidad.</li>
            <li>Número de espacios verde por habitante.</li>
            <li>Concienciación de la sociedad sobre la importancia de reciclar.</li>
            <li>Medidas públicas encaminadas a garantizar unos servicios mínimos.</li>
        </ul>
        `,
        text2: `
        <h3>Sabiendo esto esta sería una lista de algunos de los países donde se aplica esta estrategia:</h3>
        <ul>
            <li><strong>Suiza:</strong> No te sorprende, ¿no? El país centroeuropeo lleva muchos años entre los más sostenibles. Esto se debe a que su población ve el medioambiente como una seña de identidad y, además, desde el gobierno se genera la concienciación medioambiental y la puesta en marcha de medidas para reducir la contaminación. De hecho, han logrado reducir la huella de carbono.</li>
            <li><strong>Australia:</strong> La isla más grande del planeta también es uno de los países más sostenibles del mundo. Los australianos son unos grandes protectores de su ecosistema y sus políticas de conservación son copiadas por muchos otros lugares. Su próximo objetivo es que toda la energía consumida sea renovable. No hay duda de que es uno de los países que aplican políticas de desarrollo sostenible más ambiciosas.</li>
            <li><strong>Singapur:</strong> Singapur es el país más sostenible de Asia. Esta ciudad estada cuenta con medidas eficaces para la protección del medioambiente y su compromiso con las energías renovables es un ejemplo para todos sus vecinos. Además, han hecho de la ecología un reclamo turístico siendo el Jardín botánico colonial o el Jardín vertical dos claros ejemplos.</li>
            <li><strong>España:</strong> No es el país más sostenible del mundo, pero sí el que más recicla. Le siguen Alemania y Bélgica que también tienen un gran compromiso en este sentido.</li>
            <li><strong>Austria:</strong> No es el país más sostenible del mundo, pero sí el que más recicla. Le siguen Alemania y Bélgica que también tienen un gran compromiso en este sentido.</li>
            <li><strong>Noruega:</strong> El país nórdico es uno de los que cuenta con una mejor calidad de vida en la actualidad y, aunque llegó tarde a la lucha medioambiental, desde que a finales de la década pasada se unió a esta lucha ha logrado grandes resultados. Actualmente son un referente en acuicultura.</li>
            <li><strong>Suecia:</strong> El país más sostenible del mundo durante muchos años. Destaca por su compromiso con las energías verdes y por su inversión a nivel mundial para lograr erradicar la contaminación ambiental en las empresas.</li>
            <li><strong>Alemania:</strong> El país germano fue uno de los primeros en promover el reciclaje y sus habitantes están muy concienciados en este sentido. También son un ejemplo a seguir en la implantación de coches eléctricos y en su esfuerzo por abaratar los costes de estos.</li>
        <ul>
        `,
        img1: "./img/imgContenidoTemas/cTema09-01.svg",
        img2: ""
    },
    {
        id: 10,
        text1: `
        Las ciudades latinoamericanas se han extendido en las últimas tres décadas provocando mayor necesidad de movilidad y transporte de masas de personas, siendo pilar en el desarrollo económico y social de las principales ciudades; sin embargo, traen consigo efectos negativos. 
        <br>
        Los carros, camiones y buses alimentados con combustibles fósiles son una de las principales fuentes de contaminación del aire. Emiten más de la mitad de los óxidos de nitrógeno de nuestro aire, y son uno de los mayores emisores de gases asociados al calentamiento global en los Estados Unidos. Estudios científicos han identificado que estos contaminantes tienen impactos negativos en casi todos los órganos del cuerpo.
        `,
        text2: `
        Aunque la contaminación del aire trae muchos riesgos de salud pública y para el medioambiente, ahora contamos con tecnologías limpias de transporte que pueden reducir significativamente la contaminación producida por carros, camiones y buses, y disminuir el consumo de petróleo a la mitad en los próximo 20 años.
        <br>
        En conclusión, el transporte publico en cierto punto puede llegar a beneficiar a que la contaminación se reduzca, ya que cuando lo utilizamos es mas propenso ver en la calle mucho menos tráfico circulando en las carreteras y esto significa menos contaminación para el aire que respiramos.
        `,
        img1: "./img/imgContenidoTemas/cTema10-01.webp",
        img2: "",
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
        const contenidoTema = temasContent.filter(content => content.id === id)[0]
        //console.log(contenidoTema)
        $("sectionContenidoSelecionado").innerHTML = agregaContenidoAPagina(contenidoTema)
        return
    }
    $("sectionContenidoSelecionado").innerHTML = intro
}

function agregaContenidoAPagina(content) {

    return `
    <div class="temaConten">
        <h1 name="${temasCard[content.id-1].ruta.replace("#","")}" class="temaConten-tile">${temasCard[content.id-1].title} </h1>
        ${ (content.text1) &&
            `<div class="temaConten-text2">
                <p>
                ${content.text1}
                </p>
            </div>`
        }  

        ${ (content.img1) &&
            `<img src="${content.img1}" class="temaConten-img1">`
        }

        ${ (content.text2) &&
            `<div class="temaConten-text2">
                <p>
                ${content.text2}
                </p>
            </div>`
        }  

        ${ (content.img2 ) &&
            `<img src="${content.img2}" class="temaConten-img2">`
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