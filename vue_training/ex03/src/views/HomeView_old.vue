<template>
  <div class="home">

    <div>
      <p>홈 화면입니다.</p>

      <button type="button" class="btn btn-primary" data-mdb-ripple-init>확인</button>
    </div>

    <div>
      <input type="text" v-model="input1">
      <input type="text" v-model="input2">
    </div>

    <div class="row">
      <div class="col-3">

      </div>

      <div class="col-6">
        <div class="card text-center">
          <div class="card-header">카드 헤더</div>
          <div class="card-body">
            <h5 class="card-title">카드 본문</h5>
            <p class="card-text">본문 내용</p>

            <div class="form-outline" data-mdb-input-init>
              <input type="text" id="formControlSm" class="form-control form-control-sm" />
              <label class="form-label" for="formControlSm">사용자 이름</label>
            </div>

            <button type="button" class="btn btn-primary" data-mdb-ripple-init>확인</button>

            <button style="margin-left: 1em;" type="button" class="btn btn-primary" data-mdb-ripple-init data-mdb-modal-init data-mdb-target="#exampleModal">대화상자 띄우기</button>
          </div>
          <div class="card-footer text-muted">카드 푸터</div>
        </div>
      </div>

      <div class="col-3">

      </div>

    </div>

  </div>

  <!-- 대화 상자 start-->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-mdb-ripple-init data-mdb-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-mdb-ripple-init data-mdb-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-mdb-ripple-init>Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 대화 상자 end -->

</template>

<style scoped></style>

<script>

export default {
  name: 'HomeView',
}
</script>
