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
    <div class="w-100 d-flex flex-column border p-3 br-1 gap-2">
        <div class="d-flex justify-content-between rounded text-dark">
            <div>
                {{ nom }}
            </div>
            <div class="border p-1 rounded">
                <i class="bi bi-calendar"></i> {{ dateCreation }}
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <i class="text-muted">
                    {{ description }}
                </i>
            </div>
            <div>
                <a :href="`/projet/${_id}`" class="btn btn-sm btn-outline-dark d-flex align-items-center gap-2">
                    Voir le projet
                    <i class="bi bi-search"></i>
                </a>
            </div>
        </div>
    </div>
</template>
