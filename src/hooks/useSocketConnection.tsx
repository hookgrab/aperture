import { useEffect } from "react";

let connection: WebSocket | null = null
let current_url: string = ""
const message_listeners = new Map<string, MessageEvent>()


const handleConnection = (url: string): WebSocket => {
	if (connection && connection.readyState === WebSocket.OPEN) {
		if (url === current_url) {
			return connection
		} else {
			try {
				connection.close()
			} catch(e) {
				console.log(e)
			}
		}
	}
	connection = new WebSocket(url)

	return connection;
}

const checkUsedConnection = (url: string) => {
	if (url === current_url) {
		
	}
}

function useSocketConnection(
	url: string,
	options: {
		connectOnRender: boolean
	} = {
		connectOnRender: false,
	}
) {

	useEffect(() => {
		const conn = handleConnection(url)

		return () => {
		}
	}, [url])

	return {
	}
}

export default useSocketConnection;
