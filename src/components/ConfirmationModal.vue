<template>
    <v-dialog 
     :persistent="true" 
     v-model="state.open" 
     width="350"
    >
        <v-card class="pa-6 rounded-card" v-if="state" 
        >
            <v-card-title class="text-center">
                {{ state.modal!.title }}
            </v-card-title>

            <v-card-text class="text-card-content">
                {{ state.modal!.content }}
            </v-card-text>
            <v-card-actions v-if="state.modal!.actions === 'confirmation'">
                <v-row align="center" justify="center" class="text-center">
                    <v-col cols="6">
                        <v-btn @click="eventBtn(false)">
                            Cancelar
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn color="green darken-1" @click="eventBtn(true)">
                            Aceptar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import { type ModalArgs } from '../util/modal.service';
import { reactive, onMounted } from 'vue';
import emitter from '../util/emmit.service';

const initialState: {
    open: boolean,
    modal: ModalArgs | null
} = {
    open: false,
    modal: null,
};

const state = reactive({
    ...initialState,
});

const eventBtn = (confirm: boolean) => {
    state.open = false
    const id = state.modal!.id
    if (id) {
        emitter.emit('modalClose', { confirm, id })
    }
}

const show = (args: ModalArgs) => {
    if (state.open) {
        eventBtn(false)
    }
    state.modal = args
    state.open = true
}
onMounted(() => {
    emitter.on('modalOpen', (event) => {
        show(event)
    })
})

</script>
<style>
.rounded-card{
    border-radius:5% !important;
}
.text-card-content{
    padding: 0 !important;
    margin: 0 !important;
    font-size: smaller !important;
    text-align: center !important;
}
</style>