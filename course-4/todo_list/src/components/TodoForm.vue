<script setup>
import {ref, onMounted, onUpdated} from 'vue'

const newTask = ref('')
const todolist = ref([])
const editing = ref(null)

function submitForm() {
  console.log('submit')
  let task = {
    id: Math.floor(Math.random() * Date.now()),
    description: newTask.value,
    done: false
  }
  todolist.value.push(task)
  newTask.value = ''
}

function editTodo(todo) {
  editing.value = todo
}

function doneEdit() {
  editing.value = null
}

function deleteTodo(todo) {
  todolist.value = todolist.value.filter(task => task != todo)
}

defineProps({
  msg: {
    type: String,
    required: true
  }
})

onMounted(() => {
  
})

onUpdated(() => {
  console.log(todolist.value)
})
</script>

<template>
  <section>
    <h1 class="green">TODO FORM - {{ msg }}</h1>
    <form @submit.prevent="submitForm">
      <div class="add-todo-form">
        <label for="description">Description</label>
        <input
          v-model="newTask"
          name="description" 
          type="text"
          required
        >
        <button type="submit">Ajouter</button>
      </div>
    </form>
  </section>
  <section class="todo-list-container">
    <ol class="todo-list">
      <li
        v-for="task in todolist"
        :key="task.id"
        class="todo-item"
      >
        <div
          v-if="task != editing"
          class="view"
        >
          <input type="checkbox" v-model="task.done">
          <label
            @dblclick="editTodo(task)"
            :class="{ completed: task.done }"
          >
            {{ task.description }}
          </label>
          <button
            v-if="!task.done"
            @click="editTodo(task)"
            class="btn-edit"
          >
            Edit
          </button>
          <button
            v-if="!task.done"
            @click="deleteTodo(task)"
            class="btn-delete"
          >
            Del
          </button>
        </div>
        <div 
          v-else
          class="edit"
        >
          <input 
            type="text" 
            v-model="task.description"
            @keyup.enter="doneEdit"
          >
          <button
            @click="doneEdit"
            class="btn-validation"
          >ok</button>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
* {
  font-size: 2rem;
}
.add-todo-form {
  display: flex;
  flex-wrap: wrap;
}
.completed {
  text-decoration: line-through;
  font-weight: bold;
  color: grey;
}
</style>
