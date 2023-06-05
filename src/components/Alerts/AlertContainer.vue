<template>
  <v-container>
    <transition-group name="slide-y-transition"  tag="div" class="alerts-container">
      <v-alert
        v-for="alert in alerts"
        :key="alert.id"
        :type="alert.type"
        dismissible
        @input="removeAlert(alert.id)"
      >
        {{ alert.message }}
      </v-alert>
    </transition-group>
  </v-container>
</template>
  
<script>
import Alert from "./Alert.vue";

export default {
  components: {
    Alert,
  },
  data() {
    return {
      alerts: [],
    };
  },
  methods: {
    addAlert(alert) {
      this.alerts.push(alert);
      setTimeout(() => {
        this.removeAlert(alert.id);
      }, 3000); // Cerrar la alerta automáticamente después de 3 segundos (ajusta según tus necesidades)
    },
    removeAlert(id) {
      this.alerts = this.alerts.filter((alert) => alert.id !== id);
    },
  },
};
</script>
<style>
.slide-y-transition-enter-active,
.slide-y-transition-leave-active {
  transition: transform 0.5s;
}

.slide-y-transition-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-y-transition-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.alerts-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 20px;
}
</style>
  