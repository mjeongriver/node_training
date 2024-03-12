<template>
  <div class="home">

    <div>
      <p>인사: {{ message }}</p>
    </div>

    <div>
      <input type="text" v-model="input1"> <!-- v-model이 input1 변수 상자를 감지하게 됨-->
      <input type="text" v-model="input2">
      <button @click="show()">확인</button>
    </div>

    <div>
      <p>{{ output }}</p>
    </div>

    <div>
      <h3 v-if="success">성공</h3>
      <h3 v-else>실패</h3>
      <button @click="changeSuccess">바꾸기</button>
    </div>

    <ul>
      <li>{{ dogs[0].name }}</li>
      <li>{{ dogs[1].name }}</li>
      <li>{{ dogs[2].name }}</li>
    </ul>

    <ul>
      <li v-for="dog in dogs" :key="dog.id">
        #{{ dog.id }} : {{ dog.name }}
      </li>
    </ul>

    <ul>
      <li v-for="(dog, index) in dogs" :key="index">
        #{{ index + 1 }} : {{ dog.name }}
      </li>
    </ul>

    <div>
      <button @click="goToAbout()">정보 화면으로</button>
    </div>

    <div>
      <button @click="goToProfile()">프로필 화면으로</button>
    </div>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  data() {
    return {
      message: '안녕!',
      input1: '',
      input2: '',
      output: '',
      success: true,
      dogs: [
        {
          id: 1,
          name: '강아지1',
        },
        {
          id: 2,
          name: '강아지2',
        },
        {
          id: 3,
          name: '강아지3',
        },
      ]
    }
  },
  mounted() { // 이 화면이 로딩될 때 자동으로 호출됨(onload 하고 같은 기능)
    console.log(`홈 화면의 mounted 호출 됨`);
    this.message = 'Hello!';
  },
  methods: { //함수 정의하는 곳(객체로 인식해서 콤마 붙여줄 것)

    show() {
      console.log(`show 함수 호출 됨.`);
      this.message = '안녕하세요!';
      this.output = `${this.input1} ${this.input2}`;
    },

    changeSuccess() {
      this.success = !this.success;
    },

    goToAbout() {
      this.$router.push({
        path: '/about',
      })
    },

    goToProfile() {
      this.$router.push({
        path: '/profile',
      })
    },

  }
}
</script>
