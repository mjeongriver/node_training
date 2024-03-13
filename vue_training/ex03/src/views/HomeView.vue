<template>
  <div class="container">

    <div class="card mt-4">

      <div class="card-header d-flex align-items-center justify-content-center">
        <p>고객 리스트</p>
      </div>

      <div class="card-body">
        <div class="row">
          <div class="col-md-1">

          </div>
          <div class="col-md-3">
            <span>이름</span>
          </div>
          <div class="col-md-3">
            <span>전화번호</span>
          </div>
          <div class="col-md-5">
            <span>기능</span>
          </div>

        </div>

        <ul class="list-group">

          <li v-for="(person, index) in persons" :key="index" class="list-group-item">

            <div class="row">
              <div class="col-md-1 d-flex align-items-center justify-content-center">
                <img src="images/person.png" style="width:2em;">
              </div>
              <div class="col-md-3 d-flex align-items-center justify-content-center">
                <span>{{ person.name }}</span>
              </div>
              <div class="col-md-3 d-flex align-items-center justify-content-center">
                <span>{{ person.mobile }}</span>
              </div>
              <div class="col-md-5">
                <button class="btn btn-primary btn-sm">수정</button>
                <button class="btn btn-danger btn-sm ms-1">삭제</button>
              </div>
            </div>

          </li>
        </ul>

      </div>

      <div class="card-footer">
        <div class="row d-flex justify-content-end">
          <div class="col-md-3">
            <button class="btn btn-primary btn-sm">추가</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped></style>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      persons: []
    }
  },
  mounted() {
    console.log(`mounted 호출됨`);

    //고객 리스트 요청하기 
    this.requestPersonList();
  },
  methods: {

    async requestPersonList() {
      console.log(`requestPersonList 호출됨.`);

      try {
        const response = await this.axios({
          method: 'post',
          url: 'http://127.0.0.1:7001/list',
          data: {},
        })

        console.log(`응답 -> ${JSON.stringify(response.data)}`);
        this.persons = response.data;

      } catch (err) {
        console.error(`에러 -> ${err}`);
      }
    },

  }
}
</script>
