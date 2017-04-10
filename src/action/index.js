export const LIST_MUSIC = 'LIST_MUSIC';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const listMusic = (text) => ({
	type: 'LIST_MUSIC', text
});


export const receivePosts = (reddit, json) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: json.map(child => child),
  receivedAt: Date.now()
});

export const fetchPosts = reddit => dispatch => {
  return fetch('http://music.163.com/api/playlist/detail?id=123456', {
  	headers: {
  		'Access-Control-Allow-Origin': '*',
    	'Content-Type': 'text/plain'
  	},
    mode: 'cors'
  }).then(function(response) {
	  return response.json();
	}).then(function(data) {
	  const { tracks } = data.result;
    console.log(data.result.tracks)
	  dispatch(receivePosts(reddit, tracks))
	})
}