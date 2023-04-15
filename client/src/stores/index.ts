import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { logger } from '@/main'

interface Menu {
  id: string
  name: string
  url: string
  icon?: string
}
interface Page {
  id: string
  name: string
  url: string
  icon?: string
}

interface State {
  menus: Menu[]
  page: Page
}

export const useDataStore = defineStore('dataStore', () => {
  const state = reactive<State>({
    menus: [],
    Page: {
      title: '',
      content :''
    }
  })
  const getMenus = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/menus")
      Object.assign(state.menus, data.data)

    } catch (error) {
      console.log(error);

    }
  }
  const getPage = async (pageName: string) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/pages/${pageName}`)
      Object.assign(state.page, data.data)

    } catch (error) {
      console.log(error);

    }
  }

  return { state, getMenus, getPage }
})
