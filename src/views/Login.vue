<template>
<div class="page">
    <div class="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />        
        <Button text="Sign In" />
    </div>
</div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  name: 'Login',
  components: {
      Input,
      Button
  }
}
</script>

<style scopped>
.page {
    margin: 0;
}

.form {
    background-color: rgb(153, 195, 214);
    width: 35%;
    position: fixed;
    margin-top: 17%;
    padding-top: 1%;
    padding-bottom: 3%;
    margin-left: 30%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgb(34, 34, 34);

}
</style>