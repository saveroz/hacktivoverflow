<template>
  <div v-if="$store.state.isLogin" class="container mt-4">
      <div class="row">
          <div class="col-8">
              <div class="content-section">
                  <h2>{{$store.state.currentUser}} question</h2>
          <cardList :isUser="true"></cardList>
              </div>

      </div>
       <sidebar></sidebar>
  </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar'
import cardList from '../components/cardList'
export default {
  name: 'userQuestion',
  components: {
    sidebar,
    cardList
  },
  data () {
    return {
      isUser: true
    }
  }

}
</script>

<style>

</style>
