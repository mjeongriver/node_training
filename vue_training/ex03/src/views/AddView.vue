<template>
  <div>

    <div class="card mt-4">
      <div class="card-header">
        <h3>고객 정보 추가</h3>
      </div>

      <div class="card-body">

        <!-- 이름 입력 상자 start-->
        <div class="row mt-2">
          <input v-model="nameInput" type="text" class="form-control" placeholder="이름" aria-lable="name">
        </div>

        <!-- 이름 입력 상자 end -->

        <!-- 전화번호 입력상자 start-->
        <div class="row mt-2">
          <input v-model="mobileInput" type="text" class="form-control" placeholder="전화번호" aria-label="mobile">
        </div>

        <!-- 전화번호 입력상자 end-->
      </div>
      <div class="card-footer">
        <button @click="saveItem()" class="btn btn-primary btn-sm">저장</button>
        <button class="btn btn-primary btn-sm ms-4">닫기</button>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AddView',
  data() {
    return {
      nameInput: '',
      mobileInput: '',
    }
  },
  methods: {

    saveItem() {
      console.log(`saveItem 호출됨`)
      this.requestPersonAdd();
    },

    async requestPersonAdd() {
      console.log(`requestPersonAdd 호출됨.`);

      try {
        const response = await this.axios({
          method: 'post',
          url: 'http://127.0.0.1:7001/add',
          data: {
            name: this.nameInput,
            age: '0',
            mobile: this.mobileInput,
          },
        })

        console.log(`응답 -> ${JSON.stringify(response.data)}`);

        this.$router.replace({
          path: '/'
        })

      } catch (err) {
        console.error(`에러 -> ${err}`);
      }
    },
  }
}
</script>