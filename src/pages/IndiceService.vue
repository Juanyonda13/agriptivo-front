<template>
  <!-- conocenos -->
  <section class="col-12 mt-6 d-flex conocenos-section flex-wrap" image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
    <v-col cols="12" md="7" lg="6" align-self="end" class="pa-0">
      <div class="d-flex align-end">
      <v-img
        class="w-100"
        src="./src/assets/quienes_somos.png"
      ></v-img>
    </div>
    </v-col>

    <div class="w-50 pa-2">
      <v-card
        class="mt-5 bg-primary"
        width="500"
        prepend-icon="mdi-flag"
        variant="tonal"
      >
        <template v-slot:title> Mision </template>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit porro consectetur enim iusto placeat quod.
        </v-card-text>
      </v-card>
      <v-card
        class="mt-4 bg-primary"
        width="500"
        prepend-icon="mdi-sign-direction"
        variant="tonal"
      >
        <template v-slot:title> Vision </template>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit porro consectetur enim iusto placeat quod.
        </v-card-text>
      </v-card>
      <v-card
        class="mt-4 bg-primary"
        width="500"
        prepend-icon="mdi-account-group-outline"
        variant="tonal"
      >
        <template v-slot:title> Quienes somos </template>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit porro consectetur enim iusto placeat quod.
        </v-card-text>
      </v-card>

      <v-card
        class="mt-5 bg-primary"
        width="500"
        prepend-icon="mdi-flag"
        variant="tonal"
      >
        <template v-slot:title>Estrategia en Materia de responsabilidad social</template>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit porro consectetur enim iusto placeat quod.
        </v-card-text>
      </v-card>
      <v-card
        class="mt-4 bg-primary"
        width="500"
        prepend-icon="mdi-sign-direction"
        variant="tonal"
      >
        <template v-slot:title> Vision </template>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit porro consectetur enim iusto placeat quod.
        </v-card-text>
      </v-card>
    </div>
  </section>
  <!-- Modulos gratuitos -->
  <section class="col-12">
    <p class="text-lg-h4 bg-secondary text-center pt-3 pb-3">
      Modulo Gratuito <v-icon>mdi-wallet-giftcard</v-icon>
    </p>

    <div class="w-100 pt-5 d-flex  flex-wrap">
      <v-col  cols="3">
        <v-card max-width="260" class="pt-2 "  elevation="10">
          <v-card-title>
            Trasabilidad
          </v-card-title>
        <template v-slot:title>
          <div class="w-100 d-flex justify-center">
            <v-btn
              class="mx-16 text-h4"
              color="secondary"
              size="100"
              icon="mdi-train"
            >
            </v-btn>
          </div>
        </template>

        <v-divider :thickness="4" color="primary"></v-divider>
        <v-card-text>
          Diseña y modela tus proyecto de principio afin
        </v-card-text>
      </v-card>
      </v-col>

      <v-col cols="3">
        <v-card max-width="260" class="pt-2 "  elevation="10">
        <template v-slot:title>
          <div class="w-100 d-flex justify-center">
            <v-btn
              class="mx-16 text-h4"
              color="secondary"
              size="100"
              icon="mdi-cloud"
            >
            </v-btn>
          </div>
        </template>
        <v-card-title>
            Clima
          </v-card-title>
        <v-divider :thickness="4" color="primary"></v-divider>
        <v-card-text>
          Historico,Estado y pronostico
        </v-card-text>
      </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="260" class="pt-2 "  elevation="10">
        <template v-slot:title>
          <div class="w-100 d-flex align-center">
            <v-btn
              class="mx-16 text-h4"
              color="secondary"
              size="100"
              icon="mdi-barn"
            >
            </v-btn>
          </div>
        </template>
        <v-card-title>
            Poblacion
          </v-card-title>
        <v-divider :thickness="4" color="primary"></v-divider>
        <v-card-text>
          Conoce y cuantifica tu inventario poblacional
        </v-card-text>
      </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="260" class="pt-2 "  elevation="10">
        <template v-slot:title>
          <div class="w-100 d-flex">
            <v-btn
              class="mx-16 text-h4"
              color="secondary"
              size="100"
              icon="mdi-clock"
            >
            </v-btn>
          </div>
        </template>
        <v-card-title>
            Cronogramas
          </v-card-title>
        <v-divider :thickness="4" color="primary"></v-divider>
        <v-card-text>
          Programa tus actividades diarias
        </v-card-text>
      </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="260" class="pt-2 "  elevation="10">
        <template v-slot:title>
          <div class="w-100 d-flex">
            <v-btn
              class="mx-16 text-h4"
              color="secondary"
              size="100"
              icon="mdi-file-multiple"
            >
            </v-btn>
          </div>
        </template>
        <v-card-title>
            Reportes
          </v-card-title>
        <v-divider :thickness="4" color="primary"></v-divider>
        <v-card-text>
          Genera Imagenes de las actividades realizadas
        </v-card-text>
      </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="260" class="pt-2 "  elevation="10">
        <template v-slot:title>
          <div class="w-100 d-flex">
            <v-btn
              class="mx-16 text-h4"
              color="secondary"
              size="100"
              icon="mdi-human-male-board-poll"
            >
            </v-btn>
          </div>
        </template>
        <v-card-title>
            Asesoria Tecnica
          </v-card-title>
        <v-divider :thickness="4" color="primary"></v-divider>
        <v-card-text>
          Conectate directamente con profecionales acorde a sus necesidades.
        </v-card-text>
      </v-card>
      </v-col>
    </div>
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
@media (min-width: 1800px) {
  /* … */
  .conocenos-section{
   height: 77vh; 
}
}

</style>