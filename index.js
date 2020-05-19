const axios = require("axios");

// Promiseのthen, catchメソッド
function fetchGitHubRepos(org, callback) {
  const instance = axios.create({
    baseURL: "https://api.github.com",
  });
  instance
    .get(`/orgs/${org}/repos`)
    .then((res) => callback(res.data))
    .catch((e) => {
      console.error("リポジトリ情報が取得できませんでした:", e);
    });
}

// fetchGitHubRepos("nodejs", (repos) => {
//   repos.forEach(({ name }) => console.log(name));
// });

// async関数とawait
async function fetchGitHubRepos(org, callback) {
  const instance = axios.create({
    baseURL: "https://api.github.com",
  });
  try {
    const res = await instance.get(`/orgs/${org}/repos`);
    callback(res.data);
  } catch (e) {
    console.error("リポジトリ情報が取得できませんでした:", e);
  }
}

fetchGitHubRepos("nodejs", (repos) => {
  repos.forEach(({ name }) => console.log(name));
});
