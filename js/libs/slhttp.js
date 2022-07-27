class slHTTP {

    async get(url) {
        const res = await fetch(url);
        const data = await this.responseHelper(res);
        return data;
    }

    async post(url, data, headers) {

        const requestInfo = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        };

        const res = await fetch(url);
        const resdata = await this.responseHelper(res);
        return resdata;

    }

    async put(url, data, headers) {
        const requestInfo = {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        };

        const res = await fetch(url);
        const resdata = await this.responseHelper(res);
        return resdata;
    }

    async delete(url, headers) {
        const requestInfo = {
            method: 'DELETE',
            headers,
        };

        const res = await fetch(url, requestInfo);
        const resdata = await this.responseHelper(res);
        return { status: 200, message: 'Resource Deleted...' };

    }

    async responseHelper(res) {
        if (res.ok)
            return res.json();
        throw new Error(`Some Issue: ${res.status} ${res.statusText}`)
    }
}