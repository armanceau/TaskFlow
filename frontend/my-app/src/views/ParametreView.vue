<script setup>
import Nav from '../components/Nav.vue';
</script>

<template>
<div class="d-flex h-100">
	<div class="w-20 h-100 p-5 br-1">
		<Nav></Nav>
	</div>
	<div class="w-80 h-100 py-5 pr-4">
		<div class="d-flex flex-column align-items-start w-100 h-100 border shadow-sm gap-2 br-1 w-100 px-4">
			<div class="d-flex w-100 flex-start align-items-center justify-content-between mt-4">
				<h2>Paramètre</h2>
            </div>

            <div class="d-flex flex-column gap-3">
                <div class="text-muted">
                    Préférences
                </div>
                <div class="form-group">
                    <label for="language">Langue :</label>
                    <select class="form-control" id="language">
                        <option>Français</option>
                        <option>Anglais</option>
                        <option>Espagnol</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="theme">Thème :</label>
                    <select class="form-control" id="theme">
                        <option>Clair</option>
                        <option>Sombre</option>
                    </select>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-end align-items-center py-4 mt-auto">
                <button class="btn btn-outline-dark">Sauvegarder les préférences</button>              
            </div>
		</div>
	</div>
</div>
</template>
