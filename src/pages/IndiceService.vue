<template>
  <!-- conocenos -->
  <section class="col-12 conocenos_section d-flex justify-end">
    <v-col cols="6" class="pl-16">
      <v-card
        class="mt-4"
        width="500"
        color="primary"
        prepend-icon="mdi-sign-direction"
        elevation="10"
      >
        <template v-slot:title>vision corporativa</template>

        <v-card-text class="">
          NOS CARACTERIZAMOS PORQUE TRABAJANDO CON HONESTIDAD Y SIEMPRE EN
          BÚSQUEDA DEL DESARROLLO Y PROGRESO DE TODAS LAS COMUNIDADES O ZONAS EN
          LA QUE HACEMOS PRESENCIAS, BRINDAMOS TODA NUESTRA CAPACIDAD ACADÉMICA
          Y OPERATIVA PARA EL DESARROLLO DE SOLUCIONES INTEGRALES QUE PERMITAN
          MEJORAR LOS NIVELES DE VIDA, EDUCATIVOS Y FINANCIEROS
        </v-card-text>
      </v-card>
      <v-card
        class="mt-4"
        width="500"
        color="primary"
        prepend-icon="mdi-account-group-outline"
        elevation="10"
      >
        <template v-slot:title>quienes somos? </template>

        <v-card-text class="">
          SOMOS UNA EMPRESA DEL SECTOR AGROTECH QUE ACORTA LAS GRANDES BRECHAS
          DEL SECTOR AGROPECUARIO COLOMBIANO BRINDANDO SOLUCIONES DE BAJO COSTO
          CON BASE TECNOLÓGICA QUE PROPORCIONAN A CUALQUIER PRODUCTOR, TODAS LAS
          HERRAMIENTAS NECESARIAS PARA DESARROLLAR SISTEMAS PRODUCTIVOS CAPACES
          DE TENER CERTIFICADOS EN ALTA CALIDAD Y DE PRECIO JUSTO BRINDADO UNA
          EQUIDAD ENTRE EL PRODUCTOR Y EL CONSUMIDOR
        </v-card-text>
      </v-card>
    </v-col>
  </section>
  <!-- Modulos gratuitos -->
  <section class="col-12 free_modules_section d-flex justify-end align-center">
    <v-col cols="6" class="d-flex flex-wrap">
      <v-col cols="12" sm="7" md="6" lg="4">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-train"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">
            Trasabilidad
          </v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Diseña y modela tus proyecto de principio afin
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="7" md="6" lg="4">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-cloud"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Clima</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Historico,Estado y pronostico
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="7" md="6" lg="4">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-barn"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Poblacion</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Conoce y cuantifica tu inventario poblacional
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="7" md="6" lg="4">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-clock"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white"
            >Cronogramas</v-card-title
          >
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Programa tus actividades diarias
          </div>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-file-multiple"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Reportes</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Genera Imagenes de las actividades realizadas
          </div>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-human-male-board-poll"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white"
            >Asesoria Tecnica</v-card-title
          >
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Conectate directamente con profecionales acorde a sus necesidades.
          </div>
        </div>
      </v-col>
    </v-col>
  </section>
  <section class="col-12 pay_section d-flex justify-end">
    <v-col cols="8" class="d-flex flex-wrap">
      <v-col cols="12" sm="6" md="5" lg="3">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-cloud"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Clima</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Mide y conoce las vaiables medioambientales que
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="5" lg="3">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-camera"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Fotometria</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Conectate directamente con profecionales acorde a sus necesidades.
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="5" lg="3">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-calendar-plus"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Cronograma</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Programa todos tus actividades diarias y recibe avisos
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="5" lg="3">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-account-hard-hat"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white"
            >Trabajadores</v-card-title
          >
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Mide el desempeño en las actividades diarias del cultivo
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="5" lg="3">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-grass"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white"
            >Fertilizacion</v-card-title
          >
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Calcula de forma eficiente tu fertilizacion
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="5" lg="3">
        <div class="glass-effect d-flex flex-column">
          <div class="w-100 d-flex justify-center mb-4 mx-auto mt-2">
            <v-btn
              class="mx-16 text-h4"
              color="primary"
              size="100"
              icon="mdi-satellite-variant"
            >
            </v-btn>
          </div>
          <v-divider :thickness="4" color="primary"></v-divider>
          <v-card-title class="text-center text-white">Q-gris</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Servicio satelitas especializados
          </div>
        </div>
      </v-col>
    </v-col>
  </section>
  <section class="col-12 variables_section d-flex justify-center align-center">
    <v-card max-width="900" class="ma-auto d-flex flex-wrap mt-2">
      <v-col cols="12" sm="6">
        <img src="/monitoreo.jpeg" width="400" alt="" />

      </v-col>
      <v-col cols="12" sm="6" color="primary" elevation="3" rounded="5">
        <v-card
          class="h-100 bg-primary d-flex align-center justify-center flex-column"
        >
          <p class="text-h6 pa-4">
            Estacion para la medicion de variables medio ambientales
          </p>
          <p color="primary" class="d-flex pa-4">
            conoce a tiempo real como interactuar las variables medio
            ambientales y el coreecto desarrollo de los ciclos agropecuarios
          </p>
          <div class="pa-4">
            <v-alert
              v-model="alert"
              border="start"
              closable
              close-label="Close Alert"
              color="secondary"
              title="OFERTA"
            >
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
        <v-card
          class="h-100 bg-primary d-flex align-center justify-center flex-column"
        >
          <v-card-title>Cooperativa</v-card-title>
          <v-timeline density="compact" align="start" class="ml-2">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong
                  >{{ message.time }}
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
      <v-card-title class="text-center"
        >Certificaciones ambientales y de calidad</v-card-title
      >
    </v-card>
  </v-col>
  <section class="col-12 variables_section d-flex justify-center">
    <div class="ma-auto d-flex flex-wrap mt-4 w-75">
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="350"
              cover
            >
              <v-card-title
                class="text-white"
                
              >{{ card.title
              
              
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
        <v-card
          class="h-100 bg-primary d-flex align-center justify-center flex-column"
        >
          <v-card-title>Asesoria profecional</v-card-title>
          <v-timeline density="compact" align="start" class="ml-2">
            <v-timeline-item
              v-for="message in message2"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong
                  >{{ message.time }}
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
        <v-card
          class="h-100 bg-primary d-flex align-center justify-center flex-column"
        >
          <v-card-title>Diseño, Construccion y Automatizacion</v-card-title>

          <v-timeline density="compact" align="start" class="ml-2">
            <v-timeline-item
              v-for="message in message3"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong
                  >{{ message.time }}
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
      <v-card-title class="text-center"
        >Capacitaciones</v-card-title
      >
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
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Agrictivo</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
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
};
</script>

<style>
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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
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

.variables_section {
  /* height: 100vh !important; */
}
</style>