import * as api from "../api/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }

};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }

};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }

};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }

};

export const viewPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.viewPost(id);
    dispatch({ type: "VIEW", payload: data });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
  
};
