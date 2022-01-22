<template>
    <div class="input">
        <input v-bind:type="type" v-bind:placeholder="placeholder" required/>
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    placeholder: String
  }
}
</script>

<style scopped>
input {
    display: block;
    padding: 1%;
    margin: 4%;
    position: relative;
    width: 90%;
    border-radius: 5px;
    height: 25px;
    border-color: transparent;
    box-shadow: 2px 2px 5px grey;
    font-family: arial;
    font-size: 20px;
}

input:focus {
    background-color: rgb(228, 228, 217);
    outline: none;
}

input::placeholder {
    font-family: arial;
    font-size: 20px;
}
</style>