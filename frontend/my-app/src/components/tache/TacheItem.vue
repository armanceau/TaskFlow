<script>
export default {
    props: {
        nom: String,
        _id: Number,
        description: String,
        dateCreation: String,
        createur: String,
        utilisateurAssigne: String
    }
};
</script>

<template>
    {{ nom }} | {{ _id }} {{ description }} {{ dateCreation }} {{ createur }} {{ utilisateurAssigne }}
</template>
