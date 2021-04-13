<template>
  <div class="container">
    <div class="card active-user">
      <active-user :name="name" :age="age" />
    </div>
    <div class="card user-data">
      <user-data @add-user="addUser" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Conor",
      age: "29",
    };
  },
  methods: {
    addUser(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>

<style>

html {
  font-family: "Jost", sans-serif;
}


.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: rgb(255, 153, 153);
  width: 300px;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 5px 10px 5px #bebebe81;
}


label {
  font-weight: bold;
  margin: 0.2rem;
  width: 7rem;
  display: inline-block;
  }

button {
    width: 5rem;
    background-color: rgb(0, 140, 255);
    border-width: 3px;
    border-radius: 5px;
    border-color:  rgb(25, 0, 255);
    border-style: solid;
    height: 2rem;
    margin: 0.5rem;
}

@media only screen and (max-width: 450px) {
  .card {
    margin: 1rem 0 ;
  }
}
</style>
