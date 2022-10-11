import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource, Source } from '../lib/service';
import { Repository } from "./repository";

interface F extends Source {
	payloadF: string;
	parent: string;
}

@Service()
export class FService extends DataSource<F> {
	serviceName = "F Service";
	constructor(repository: Repository) {
		super(repository.f());
	}
	async getByParentId(id: string): Promise<F> {
		const result = this.repository.find((item) => item.parent === id);
		if (!result) {
			throw new Error("Not found");
		}
		return result;
	}
}
