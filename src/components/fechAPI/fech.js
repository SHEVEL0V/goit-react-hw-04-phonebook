import axios from "axios";

const KEY = "26773095-8033af7b4c44df434cdac5aab";
const per_page = 12;

export default function fechAPI({ page = 1 }) {
  return axios
    .get(
      `https://pixabay.com/api/?q=cat&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
