<script>
export default {
    props: {
        nom: String,
        _id: Number,
        description: String,
        dateCreation: String
    }
};
</script>

<template>
    {{ nom }} | {{ _id }} {{ description }} {{ dateCreation }}
    <a :href="`/projet/${_id}`" class="btn btn-primary mb-3">Voir le projet</a>
</template>
