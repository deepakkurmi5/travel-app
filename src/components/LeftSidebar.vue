<template>
  <ul>
    <li>
      <router-link :to="{ name: 'protected' }">Dashboard</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'invoices' }">Invoices</router-link>
    </li>
  </ul>
</template>

<style>
ul {
  background-color: white;
  padding: 10px;
  list-style: none;
  margin-right: 28px;
}

li {
  margin: 10px;
}
</style>
