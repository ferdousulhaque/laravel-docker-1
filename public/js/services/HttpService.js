import {port, appUrl} from "../../../config.js";

export default class HttpService {

    static apiUrl() {
        return appUrl + ":" + port;
    }

    /**
     * implementation of http get
     * @param url
     * @param onSuccess
     * @param onError
     */
    static get(url, onSuccess, onError) {
        let header = new Headers();

        fetch(url, {
            method: 'GET',
            headers: header
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                resp.json().then((json) => {
                    onError({code: json.code, title: json.error, msg: json.message});
                }).catch(() => {
                    onError({code: 500, title: 'Server error', msg: 'Unknown error in backend'});
                });
            }
        }).then((resp) => {
            onSuccess(resp);
        }).catch(() => {
            onError({code: 500, title: 'Server error', msg: 'Failed to contact backend'});
        });
    }

    /**
     * implementation of http put
     * @param url
     * @param data
     * @param onSuccess
     * @param onError
     */
    static put(url, data, onSuccess, onError) {
        let header = new Headers();
        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(data)
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                resp.json().then((json) => {
                    onError({code: json.code, title: json.error, msg: json.message});
                }).catch(() => {
                    onError({code: 500, title: 'Server error', msg: 'Unknown error in backend'});
                });
            }
        }).then((resp) => {
            onSuccess(resp);
        }).catch(() => {
            onError({code: 500, title: 'Server error', msg: 'Failed to contact backend'});
        });
    }

    /**
     * implementation of http post
     * @param url
     * @param data
     * @param onSuccess
     * @param onError
     */
    static post(url, data, onSuccess, onError) {
        let header = new Headers();
        header.append('Content-Type', 'application/json');

        fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            else {
                resp.json().then((json) => {
                    onError({code: json.code, title: json.error, msg: json.message});
                }).catch(() => {
                    onError({code: 500, title: 'Server error', msg: 'Unknown error in backend'});
                });
            }
        }).then((resp) => {
            onSuccess(resp);
        }).catch(() => {
            onError({code: 500, title: 'Server error', msg: 'Failed to contact backend'});
        });
    }

    /**
     * implementation of http delete
     * @param url
     * @param onSuccess
     * @param onError
     */
    static delete(url, onSuccess, onError) {
        let header = new Headers();

        fetch(url, {
            method: 'DELETE',
            headers: header
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                resp.json().then((json) => {
                    onError({code: json.code, title: json.error, msg: json.message});
                }).catch(() => {
                    onError({code: 500, title: 'Server error', msg: 'Unknown error in backend'});
                });
            }
        }).then((resp) => {
            onSuccess(resp);
        }).catch((e) => {
            onError(e);
        });
    }
}