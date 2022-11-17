<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col v-for="(card, index) in merchandises" :key="index">
                        <v-card 
                        elevation="3" style="border-radius: 10px;"
                        class="pa-6 ma-1"
                        outlined 
                        :color=setColor()
                        tile>
                            <v-row class="d-flex justify-center" style="font-size: 1.2em;"><b>{{ card.merchandise }}</b></v-row>
                        </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

    thead tr th span {
        font-size: 160% !important;
        font-family: Poppins !important;
        letter-spacing: 2%;
        font-weight: 600;
        color: black !important;
    }

    tbody tr td{
        font-size: 100% !important;
        font-family: Poppins !important;
        letter-spacing: 2%;
        font-weight: 100;
        color: black !important;
    }

    .textfield{
        font-family: Poppins !important;
        color: black;
    }

    .v-list-item__title{
        font-family: Poppins !important;
        color: black;
    }

</style>

<script>
//tambahkan code untuk import database reference dan fungsi bawaan dari firebase database
import { db } from "../firebase";
import { ref, set, remove, get, push, onValue } from '@firebase/database';

export default {
    name: "MerchandisePage",
    data () {
        return {
            load: false,
            snackbar: false,
            color: '',
            colors: ["#c07bc3", "#a6dcaf", "#ddddce","#2BA84A","#00A1E4","#F5B700","#34E4EA",
                    "#F497DA", "#623CEA","#FFFD82","#00BBF9","#D81E5B","#2A9D8F","#F9CFF2",
                    "#B0B2B8","#E2A0FF","#FAFFFD","#3C91E6","#E365C1","#FF7700","#E84855",
                    "#85C7F2","#F58549","#255C99","#5C946E","#44CF6C","#FCE762","#E75A7C"],
            merchandise : new FormData,
            merchandises: [],
        }
    },

    created() {
        // tambahkan fungsi untuk retrieve data
        onValue(ref(db, 'merchandises'), (snapshot) => {
            this.merchandises = [],
            snapshot.forEach((merchandise) =>{
                this.merchandises.push({
                    id: merchandise.key,
                    merchandise: merchandise.val().merchandise,
                    artist: merchandise.val().artist,
                    price: merchandise.val().price,
                    stock: merchandise.val().stock,
                    package: merchandise.val().package
                });
            })
        })
    },

    methods: {
        setColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)]
        }
    },
}
</script>
