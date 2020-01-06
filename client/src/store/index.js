import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    setAllNotes(state, data) {
      state.notes = data;
    },
    addNote(state, note) {
      state.notes.push(note);
    }
  },

  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      // dispatch("getAllBugs"); //works but is a second call to the server
      commit("addBug", res.data);
    },
    async editBug({ commit, dispatch }, id, bug) {
      await _api.put("bugs/" + id);
    },
    async closed({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugs");
    },
    async getNotes({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setAllNotes", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _api.post("notes", note);
      // dispatch("getAllNotes"); //works but is a second call to the server
      commit("addNote", res.data);
    }
  },
  modules: {}
});
