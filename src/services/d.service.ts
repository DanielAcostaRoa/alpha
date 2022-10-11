import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface D extends Source {
	payloadD: string;
	parent: string;
}

@Service()
export class DService extends DataSource<D> {
	serviceName = "D Service";
	constructor(repository: Repository) {
		super(repository.d());
	}
	async getByParentId(id: string): Promise<D> {
		const result = this.repository.find((item) => item.parent === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
}
