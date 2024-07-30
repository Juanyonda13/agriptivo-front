<template>
    <div class="col-12 w-100">
                <v-row align="center" no-gutters>
                    <v-col cols="6"           
                    >
                        <v-card
                            rounded="xl"
                            variant="text" 
                            prepend-icon="mdi-sign-direction-info"
                            class="bg-black mr-2"
                            :style="{ border: '3px solid black' }"
                        >
                            <template v-slot:title >
                                <p class="">
                                Vision corporativa
                                </p>
                            </template>
                            <v-card-text>

                                Nos caracterizamos porque, trabajando con honestidad y siempre en búsqueda del desarrollo y progreso de todas las comunidades o zonas
                                en las que hacemos presencia, brindamos toda nuestra capacidad académica y operativa para el desarrollo de soluciones integrales que 
                                permitan mejorar los niveles de vida, educativos y financieros.  
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="6"           
                    >                   
                        <v-card
                            rounded="xl"
                            variant="text" 
                            :style="{ border: '3px solid black' }"
                            prepend-icon="mdi-account-group-outline"
                            class="bg-black"
                        >
                            <template v-slot:title >
                                <p class="">
                                Quienes somos?
                                </p>
                            </template>
                            <v-card-text>

                                Nos caracterizamos porque, trabajando con honestidad y siempre en búsqueda del desarrollo y progreso de todas las comunidades o zonas
                                en las que hacemos presencia, brindamos toda nuestra capacidad académica y operativa para el desarrollo de soluciones integrales que 
                                permitan mejorar los niveles de vida, educativos y financieros.  
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

    </div>
</template>