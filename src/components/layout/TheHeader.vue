<template>
  <header>
    <nav>
      <h1>Find a Coach</h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: var(--color-white);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-white);
  border-color: var(--color-primary);
  border-radius: 5px;
}

h1 {
  color: var(--color-white);
  margin: 0;
}

h1 a {
  color: var(--color-white);
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
