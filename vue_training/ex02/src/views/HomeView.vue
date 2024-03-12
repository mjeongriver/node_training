<template>
  <div class="home">
   
    <div>
      <input type="text" id="input1">
      <input type="text" id="input2">
      <button id="startButton" @click="show()">확인</button>
    </div>

    <div id="output">

    </div>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  methods: { //함수 정의하는 곳

    show() {
      console.log(`show 함수 호출 됨.`);
    }

  }
}
</script>
