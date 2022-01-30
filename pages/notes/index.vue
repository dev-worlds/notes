<template>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'notes',
  data: () => ({
    items: []
  }),
  methods: {
    ...mapGetters({
      getListNotes: 'notes/getListNotes'
    }),
  },
  async fetch() {
    await this.$store.dispatch('notes/loadListNotes')
  },
  mounted() {
    this.items = this.getListNotes()
  }
}
</script>

<style scoped>

</style>
