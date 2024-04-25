<template>
    <div class="home-page">
        <div class="banner">
            <h1 class="header">Resident Evil Outbreak - Randomizer</h1>
        </div>
        <div class="button-section">
            <button @click="pickRandomFile1Level">Random File #1 Level</button>
            <button @click="pickRandomFile2Level">Random File #2 Level</button>
            <button @click="pickRandomCharacter">Random Character</button>
        </div>
        <div class="picked">
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


.button-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
}

.button-section button {
    font-size: 20px; /* Adjust the font size as needed */
    max-height: 35%;
    width: 60%;
    margin: 10px 80px 10px 80px;
    padding: 18px;
    background-color: #397595;
    color: white;
    line-height: 1.5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

}

.picked {
    display: flex;
    align-items: center;
    font-size: 40px; 
    color: rgb(255, 135, 135);
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
}
</style>