<template>
    <div class="home-page">
        <div class="banner">
            <h1 class="header">Resident Evil Outbreak - Randomizer</h1>
        </div>
        <div class="buttons">
            <button @click="pickRandomName">Random File #1 Level</button>
            <button @click="pickRandomName">Random File #2 Level</button>
            <button @click="pickRandomName">Random Character</button>
            <p>{{ selectedName }}</p>
        </div>
    </div>
</template>

<script>
import outbreakInformation from '@/data/outbreakInformation.js';
export default {
    data() {
        return {
            outbreakInformation,
        };
    },
}
</script>

<style>
.home-page {
    font-size: 12px;
}

.banner {
    background-color: rgb(47, 47, 108);

}

.header {
    font-size: 50px;
    color: white;
    margin-top: 0px;
    border-bottom: 2px solid white;
}
</style>