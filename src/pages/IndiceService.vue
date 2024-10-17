<template>
  <div class="back1 bg-primary">
    <img class="bottom-background" src="back1.svg" />
    <v-container>
      <nav class="nav-main mt-2">
        <div class="d-flex justify-start w-100 pb-5">
          <v-img max-width="125" src="agriptivo-logo.svg"></v-img>
        </div>
        <ul class="ul-nav text-black">
          <li class="li-nav ">
            Quienes somos
          </li>
          <li class="li-nav ">
            Agrictivo
          </li>
          <li class="li-nav">
            variables
          </li>
          <li class="li-nav text-grey">
            Cooperativa
          </li>
          <li class="li-nav text-grey">
            Servicios
          </li>
        </ul>

        <div class="group-buttons">
          <v-btn variant="plain" size="small" color="black" rounded="xl" @click="login" v-if="!auth">
            Iniciar sesion
          </v-btn>
          <v-btn variant="flat" size="small" class="mx-2" color="black" rounded="xl" @click="register" v-if="!auth">
            registrate
          </v-btn>
          <v-btn variant="flat" size="small" class="mx-2" color="primary" rounded="xl" @click="logout" v-if="auth">
            Cerrar sesion
          </v-btn>
          <v-btn variant="flat" size="small" class="mx-2" color="primary" rounded="xl" @click="client" v-if="auth">
            Ir al modulo
          </v-btn>
        </div>
      </nav>
      <section class="mt-10">
        <Tittle />
      </section>
    </v-container>
    <v-container class="">
      <Vision />
    </v-container>
    <VideoAgrictivo />
    <Freesection />
    <Pagesection />
  </div>
  <section class="col-12 variables_section d-flex justify-center align-center">
    <v-card max-width="900" class="ma-auto d-flex flex-wrap mt-2">
      <v-col cols="12" sm="6">
        <img src="/monitoreo.jpeg" width="400" alt="" />

      </v-col>
      <v-col cols="12" sm="6" color="primary" elevation="3" rounded="5">
        <v-card class="h-100 bg-primary d-flex align-center justify-center flex-column">
          <p class="text-h6 pa-4">
            Estacion para la medicion de variables medio ambientales
          </p>
          <p color="primary" class="d-flex pa-4">
            conoce a tiempo real como interactuar las variables medio
            ambientales y el coreecto desarrollo de los ciclos agropecuarios
          </p>
          <div class="pa-4">
            <v-alert v-model="alert" border="start" closable close-label="Close Alert" color="secondary" title="OFERTA">
              Adquiere nuestra estacion de medicion y obten un año de software
              AGRICTIVO
            </v-alert>

            <div v-if="!alert" class="text-center">
              <v-btn @click="alert = true"> Reset </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-card>
  </section>
  <section class="col-12 variables_section d-flex justify-center">
    <v-card max-width="900" class="ma-auto d-flex flex-wrap mt-4">
      <v-col cols="12" sm="6" color="primary" elevation="3" rounded="5">
        <v-card class="h-100 bg-primary d-flex align-center justify-center flex-column">
          <v-card-title>Cooperativa</v-card-title>
          <v-timeline density="compact" align="start" class="ml-2">
            <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" align-self="center">
        <img src="/comercauca.jpg" width="400" alt="" />
      </v-col>
    </v-card>
  </section>
  <v-col cols="12" sm="6" class="ma-auto">
    <v-card color="primary">
      <v-card-title class="text-center">Certificaciones ambientales y de calidad</v-card-title>
    </v-card>
  </v-col>
  <section class="col-12 variables_section d-flex justify-center">
    <div class="ma-auto d-flex flex-wrap mt-4 w-75">
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="350"
              cover>
              <v-card-title class="text-white">{{ card.title


                }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pa-5">
              <v-spacer></v-spacer>
              <p>{{ card.message }}</p>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
  <section class="col-12 variables_section d-flex justify-center">
    <v-card class="ma-auto d-flex flex-wrap mt-4 w-75">
      <v-col cols="12" sm="6" align-self="center" class="">
        <img src="/asesoria_profecional.jpg" width="400" alt="" />
      </v-col>
      <v-col cols="12" sm="5" color="primary" elevation="3" rounded="5">
        <v-card class="h-100 bg-primary d-flex align-center justify-center flex-column">
          <v-card-title>Asesoria profecional</v-card-title>
          <v-timeline density="compact" align="start" class="ml-2">
            <v-timeline-item v-for="message in message2" :key="message.time" :dot-color="message.color" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-card>
  </section>
  <section class="col-12 variables_section d-flex justify-center">
    <v-card class="ma-auto d-flex flex-wrap mt-4 w-75">
      <v-col cols="12" sm="6" align-self="center" class="">
        <img src="/diseño_automatizacion.png" width="400" alt="" />
      </v-col>
      <v-col cols="12" sm="5" color="primary" elevation="3" rounded="5">
        <v-card class="h-100 bg-primary d-flex align-center justify-center flex-column">
          <v-card-title>Diseño, Construccion y Automatizacion</v-card-title>

          <v-timeline density="compact" align="start" class="ml-2">
            <v-timeline-item v-for="message in message3" :key="message.time" :dot-color="message.color" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-card>
  </section>
  <v-col cols="12" sm="6" class="ma-auto">
    <v-card color="primary">
      <v-card-title class="text-center">Capacitaciones</v-card-title>
    </v-card>
  </v-col>
  <section class="col-12 variables_section d-flex justify-center">
    <v-card class="ma-auto d-flex flex-wrap mt-4 w-75">
      <v-carousel show-arrows="hover">
        <v-carousel-item src="capacitacion/capacitacion1.jpg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text-white">Acuaponia</div>
          </div>
        </v-carousel-item>

        <v-carousel-item src="capacitacion/capacitacion2.jpg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text-white">Piscicola</div>
          </div>
        </v-carousel-item>

        <v-carousel-item src="capacitacion/capacitacion3.jpeg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text-white">Fertiliego</div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="capacitacion/capacitacion4.jpg"></v-carousel-item>
        <v-carousel-item src="capacitacion/capacitacion5.jpg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text-white">Agricultura organica</div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="capacitacion/capacitacion6.png">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text">Crea tu plan educativo </div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="capacitacion/capacitacion7.jpg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text">Energias renovables</div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="capacitacion/capacitacion8.jpeg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text-white">Bio insumos</div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="capacitacion/capacitaciones9.jpg">
          <div class="d-flex fill-height justify-center align-end pb-10">
            <div class="text-h2 text-white">piscicultura</div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </section>
  <v-footer class="bg-primary mt-2">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Agrictivo</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import Tittle from '../components/landin/Tittle.vue'
import Vision from '../components/landin/Vision.vue'
import Freesection from '../components/landin/Freesection.vue'
import VideoAgrictivo from '../components/landin/VideoAgrictivo.vue'
import Pagesection from '../components/landin/Pagesection.vue'
import Cookies from 'js-cookie'

export default {

  components: {
    'Tittle': Tittle,
    'Vision': Vision,
    'Freesection': Freesection,
    'VideoAgrictivo':VideoAgrictivo,
    'Pagesection':Pagesection
  },
  data: () => ({
    alert: true,
    messages: [
      {
        message: `Asegura la venta de tu produccion`,
        color: "primary",
      },
      {
        message: "Acceso a creditos para proyectos productivos (Exportacion)",
        color: "green",
      },
      {
        message: "Acceso afinanciacion para adquirir:",
        color: "secondary",
      },
      {
        message: "1.Precios referenciales en equipos y insumos",
        color: "secondary",
      },
      {
        message: "2.Beneficiario de proyectos productivos del gobierno",
        color: "secondary",
      },
      {
        message: "3.Asistencia tecnica para llevar tu modelo de negocio",
        color: "secondary",
      },
    ],
    cards: [
      {
        title: "H2O ",
        src: "certificaciones/certificcion_ambiental.jpeg",
        message: "Huella hidrica",
        flex: 4,
      },
      {
        title: "CO2",
        src: "certificaciones/certificcion_ambiental2.jpeg",
        message: "Huella carbono",
        flex: 4,
      },
      {
        title: "BPA",
        src: "certificaciones/certificcion_calidad.png",
        message: "Buenas practicas agricolas",
        flex: 4,
      },
      {
        title: "FAIRIRADE",
        src: "certificaciones/certificcion_calidad2.png",
        message: "Comercio justo",
        flex: 4,
      },
      {
        title: "RAINFOREST ALLIANCE",
        src: "certificaciones/certificcion_calidad3.png",
        message: "Proteccion al medio ambiente",
        flex: 4,
      },
      {
        title: "USDA ORGANIC",
        src: "certificaciones/certificcion_calidad4.png",
        message: "producto orgánico",
        flex: 4,
      },
      {
        title: "GLOBAL GAB",
        src: "certificaciones/certificcion_calidad5.png",
        message: "certificado de calidad",
        flex: 4,
      },
      {
        title: "BPM",
        src: "certificaciones/certificcion_calidad6.jpg",
        message: "Buenas practicas de manofactura",
        flex: 4,
      },
      // {
      //   title: "Pre-fab homes",
      //   src: "certificaciones/certificcion_calidad7.jpeg",
      //   flex: 4 ,
      // },
      {
        title: "Raint to rest",
        src: "certificaciones/certificcion_calidad8.jpeg",
        message: "Agricultura sostenible",
        flex: 12,
      },
    ],
    message2: [
      {
        message: `Zootecnia`,
        color: "primary",
      },
      {
        message: "Veterinario",
        color: "green",
      },
      {
        message: "Agronomos",
        color: "danger",
      },
      {
        message: "Insumos y equipos agricolas",
        color: "secondary",
      },
      {
        message: "Legales",
        color: "secondary",
      },
      {
        message: "Energias alternativas",
        color: "secondary",
      },
    ],
    message3: [
      {
        message: `Diseño y construccion y automatizacion acuaponicos`,
        color: "primary",
      },
      {
        message: "Dis,Const y Auto Sistemas Hidroponicos",
        color: "green",
      },
      {
        message: "Dis,Const y Auto Sistemas piscicolas",
        color: "danger",
      },
      {
        message: "Dis,Const y Autom fincas integradas",
        color: "secondary",
      },
      {
        message: "Dis,Const y Autom sistemas forraje verde",
        color: "secondary",
      },
      {
        message: "Dis,Const y Autom Invernaderos",
        color: "secondary",
      },
      {
        message: "Dis,Const y Autom Sistemas energias alternativas",
        color: "secondary",
      },
      {
        message: "Dis,Const deobras civiles",
        color: "secondary",
      },
    ],
    links: ["agriptivo", "Servicios", "Blog", "CONTACTANOS"],
  }),
  methods: {
    login() {
      this.$router.push("/login")
    },
    register() {
      this.$router.push("/register")
    },
    logout(){
      this.$store.dispatch('auth/logout').then(
        this.$store.dispatch('auth/userInfo')
      )
    },
    client(){
      this.$router.push("/ModuleFree")
    }
  },
  mounted(){
    if(Cookies.get('token')){
      this.$store.dispatch('auth/userInfo')
    }
  },
  computed: {
    auth() {
      return this.$store.getters['auth/isLoggedIn']
    },
    user(){
      return this.$store.getters['auth/currentUser']
    },

  },
};
</script>

<style>
.section-nav {
  height: 14vh;
}

.nav-main {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-auto-rows: minmax(100px, auto);
}

.ul-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  align-content: center;
}

.li-nav {
  display: flex;
  align-items: center;
  font-size: 14px;
  z-index: 20;
}

.group-buttons {
  display: flex;
  align-items: center;
}

.full-screen-bg {
  position: relative;
  height: 100vh;
  /* Asegura que el contenedor tenga al menos la altura de la ventana */
}

.conocenos_section {
  background-image: url("../background1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
}

.free_modules_section {
  background-image: url("../background2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.glass-effect {
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  height: 36vh;
}

.pay_section {
  background-image: url("../background3.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.container {
  position: relative;
  height: 100vh;
  /* Asegura que el contenedor tenga al menos la altura de la ventana */
}

.back1 {
  position: relative;
  /* Esto es necesario para que la imagen se posicione correctamente */
}

.bottom-background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  /* Ajusta esto según sea necesario para cubrir completamente la pantalla */
}
</style>