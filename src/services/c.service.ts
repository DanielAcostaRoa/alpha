import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface C extends Source {
	payloadC: string;
	parent: string;
}

@Service()
export class CService extends DataSource<C> {
	serviceName = "C Service";
	constructor(repository: Repository) {
		super(repository.c());
	}
	async getByParentId(id: string): Promise<C> {
		const result = this.repository.find((item) => item.parent === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
}
