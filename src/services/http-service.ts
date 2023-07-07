import apiClient from "./api-client";

interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;

    // the constructor is called whenever we create an instance of this class.
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() { // a generic type can be passed here.
        const controller = new AbortController(); // built in class in browsers that allows us to cancel/abort fetch requests.
        const request = apiClient
            .get<T[]>(this.endpoint, {
                signal: controller.signal,
            })

        return {
            request, cancel: () => controller.abort()
        }
    }
    delete(id: number) {
        return apiClient.delete(`${this.endpoint}/${id}`)
    }
    create<T>(entity: T) {
        return apiClient
            .post(this.endpoint, entity)
    }
    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create