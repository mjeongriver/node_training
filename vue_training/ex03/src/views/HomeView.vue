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
            <button @click="goToAdd()" class="btn btn-primary btn-sm">추가</button>
          </div>
        </div>
      </div>

    </div>
    <!-- 지도 -->
    <GoogleMap style="width:100%; height: 300px" api-key="" :center="{ lat: 37.51555, lng: 127.034983 }" :zoom="{ zoom }">
      <!-- components로 넣고 태그로 사용 -->
      <Marker v-for="(coffeeshop, index) in coffeeshopList" :key="index" :options="{ position: {lat: coffeeshop.latitude, lng: coffeeshop.longitude } }"></Marker>
    </GoogleMap>

    <button @click="requestCoffeeshopList()">커피숍 조회</button>

  </div>

</template>

<style scoped></style>

<script>
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  name: 'HomeView',
  components: {
    GoogleMap,
    Marker
  },
  data() {
    return {
      zoom: 15,
      markerOptions: {
        position: {
          lat: 37.51555,
        lng: 127.034983,
        }
      },
      persons: [],
      coffeeshopList: [],
    }
  },
  mounted() {
    console.log(`mounted 호출됨`);

    //고객 리스트 요청하기 
    this.requestPersonList();
  },
  methods: {

    goToAdd() {
      this.$router.replace({
        path: '/add'
      })
    },

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

    async requestCoffeeshopList() {
      console.log(`requestCoffeeshopList 호출됨.`);

      try {
        const response = await this.axios({
          method: 'get',
          url: 'http://127.0.0.1:7001/coffeeshop_list?point=POINT(127.0357329 37.51555)',
        })

        console.log(`응답 -> ${JSON.stringify(response.data)}`);
        this.coffeeshopList = response.data;

      } catch (err) {
        console.error(`에러 -> ${err}`);
      }
    },
    

  }
}
</script>
