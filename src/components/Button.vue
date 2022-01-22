<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style scopped>
button {
    display: block;
    position: relative;
    margin-left: 40%;
    margin-top: 7%;
    padding: 2% 4% 2% 4%;
    background-color: rgb(215, 234, 235);
    border-color: transparent;
    box-shadow: 2px 2px 5px grey;
    border-radius: 5px;
    font-family: arial;
    font-size: 20px;
    user-select: none;
}

button:hover {
    cursor: pointer;
    background-color: rgb(202, 225, 226);
}

button:active {
    transform: translate(2px, 2px);
    box-shadow: none;
}
</style>