<template>
    <div class="home-page">
        <div class="banner">
            <h1 class="header">Resident Evil Outbreak - Randomizer</h1>
        </div>
        <div class="buttons">
            <button @click="pickRandomFile1Level">Random File #1 Level</button>
            <button @click="pickRandomFile2Level">Random File #2 Level</button>
            <button @click="pickRandomCharacter">Random Character</button>
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
            selectedName: '',
        };
    },
    methods: {
        pickRandomFile1Level() {
            const randomIndex = Math.floor(Math.random() * this.outbreakInformation.file1Levels.length);
            this.selectedName = this.outbreakInformation.file1Levels[randomIndex];
        },
        pickRandomFile2Level() {
            const randomIndex = Math.floor(Math.random() * this.outbreakInformation.file2Levels.length);
            this.selectedName = this.outbreakInformation.file2Levels[randomIndex];
        },
        pickRandomCharacter() {
            const randomIndex = Math.floor(Math.random() * this.outbreakInformation.characters.length);
            this.selectedName = this.outbreakInformation.characters[randomIndex];
        }
    }
};
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