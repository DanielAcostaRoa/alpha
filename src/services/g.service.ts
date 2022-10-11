import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface G extends Source {
	payloadG: string;
	parent: string;
}

@Service()
export class GService extends DataSource<G> {
	serviceName = "G Service";
	constructor(repository: Repository) {
		super(repository.g());
	}
	async getByParentId(id: string): Promise<G> {
		const result = this.repository.find((item) => item.parent === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
}
