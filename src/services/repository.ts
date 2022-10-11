import "reflect-metadata";
import { Service } from "typedi";

@Service()
export class Repository {
    a() {
        return [
            {
                id: "id-a-1",
                payloadA: "payload-a-1",
            },
            {
                id: "id-a-2",
                payloadA: "payload-a-2",
            },
            {
                id: "id-a-3",
                payloadA: "payload-a-3",
            },
        ];
    }
    b() {
        return [
            {
                id: "id-b-1",
                parent: "id-a-1",
                payloadB: "payload-b-1",
            },
            {
                id: "id-b-2",
                parent: "id-a-2",
                payloadB: "payload-b-2",
            },
            {
                id: "id-b-3",
                parent: "id-a-3",
                payloadB: "payload-b-3",
            }
        ];
    }
    c() {
        return [
            {
                id: "id-c-1",
                parent: "id-a-1",
                payloadC: "payload-c-1",
            },
            {
                id: "id-c-2",
                parent: "id-a-2",
                payloadC: "payload-c-2",
            },
            {
                id: "id-c-3",
                parent: "id-a-3",
                payloadC: "payload-c-3",
            }
        ];
    }
    d() {
        return [
            {
                id: "id-d-1",
                parent: "id-b-1",
                payloadD: "payload-d-1",
            },
            {
                id: "id-d-2",
                parent: "id-b-2",
                payloadD: "payload-d-2",
            },
            {
                id: "id-d-3",
                parent: "id-b-3",
                payloadD: "payload-d-3",
            }
        ];
    }
    e() {
        return [
            {
                id: "id-e-1",
                parent: "id-b-1",
                payloadE: "payload-e-1",
            },
            {
                id: "id-e-2",
                parent: "id-b-2",
                payloadE: "payload-e-2",
            },
            {
                id: "id-e-3",
                parent: "id-b-3",
                payloadE: "payload-e-3",
            }
        ];
    }
    f() {
        return [
            {
                id: "id-f-1",
                parent: "id-c-1",
                payloadF: "payload-f-1",
            },
            {
                id: "id-f-2",
                parent: "id-c-2",
                payloadF: "payload-f-2",
            },
            {
                id: "id-f-3",
                parent: "id-c-3",
                payloadF: "payload-f-3",
            }
        ];
    }
    g() {
        return [
            {
                id: "id-g-1",
                parent: "id-c-1",
                payloadG: "payload-g-1",
            },
            {
                id: "id-g-2",
                parent: "id-c-2",
                payloadG: "payload-g-2",
            },
            {
                id: "id-g-3",
                parent: "id-c-3",
                payloadG: "payload-g-3",
            }
        ]
    }
}