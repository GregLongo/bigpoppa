import axios from "axios"

var BASE_URL = "https://us-central1-datalp.cloudfunctions.net/LPBookspace"

function request(url, params = {}, data = {}) {
	return new Promise((resolve) => {
		axios({
			method: "get",
			url: `${BASE_URL}/${url}`,
			headers: {
				"content-type": "application/json",
			},
			params: params,
			data: data,
		})
			.then((response) => {
				// console.log(response.data)
				resolve({ data: response.data })
			})
			.catch((exception) => {
				resolve({ exception })
			})
	})
}

module.exports = request
