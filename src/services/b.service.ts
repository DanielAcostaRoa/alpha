import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface B extends Source {
	payloadB: string;
	parent: string;
}

@Service()
export class BService extends DataSource<B> {
	serviceName = "B Service";
	constructor(repository: Repository) {
		super(repository.b());
	}
	async getByParentId(id: string): Promise<B> {
		const result = this.repository.find((item) => item.parent === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
}