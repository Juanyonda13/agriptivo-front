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
      <v-col cols="4">
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
          <v-card-title class="text-center text-white"> Trasabilidad </v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Diseña y modela tus proyecto de principio afin
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
      <v-col cols="4">
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
      <v-col cols="4">
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
          <v-card-title class="text-center text-white">Cronogramas</v-card-title>
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
          <v-card-title class="text-center text-white">Asesoria Tecnica</v-card-title>
          <v-divider :thickness="4" color="primary"></v-divider>

          <div class="h-75 d-flex align-center justify-center ma-2 text-white">
            Conectate directamente con profecionales acorde a sus necesidades.
          </div>
        </div>
      </v-col>
    </v-col>
  </section>
  <section class="col-12  pay_section">

  </section>
</template>
<script>
export default {
  data: () => ({
    show: false,
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
.pay_section{
  background-image: url("../background4.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>